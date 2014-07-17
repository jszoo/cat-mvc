/*
* mvcAction
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    injector = require('./mvcInjector'),
    httpMethod = require('./mvcHttpMethod'),
    actionResult = require('./mvcActionResult'),
    mvcActionResultApi = require('./mvcActionResultApi');

var lowerRootNs = function(namespace) {
    var index = namespace.search(/\.|\[|\]/);
    if (index > -1) {
        return namespace.substr(0, index).toLowerCase() + namespace.substr(index);
    } else {
        return namespace.toLowerCase();
    }
};

var mvcAction = module.exports = function(set) {
    utils.extend(this, set);
};

mvcAction.prototype = {

    _name: null, _attr: null, _impl: null,

    controller: null, controllerContext: null, attributes: null, implScope: null,
    
    constructor: mvcAction, className: 'mvcAction',

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    attr: function(p) { return (p === undefined) ? (this._attr) : (this._attr = p, this); },
    impl: function(p) { return (p === undefined) ? (this._impl) : (this._impl = p, this); },

    destroy: function() {
        if (this.implScope) {
            this.implScope.destroy();
            this.implScope = null;
        }
        if (this.controllerContext) {
            this.controllerContext.destroy();
            this.controllerContext = null;
        }
        // clear reference types
        this._impl = null;
        this._attr = null;
        this.controller = null;
        this.attributes = null;
    },

    initialize: function(controller) {
        if (this.controller) { return; } // already initialized
        this.controller = controller;
        this.controllerContext = controller.httpContext.toControllerContext(controller);
        this.attributes = controller.httpContext.mvc.attributes.resolveConfig(this.attr());
    },

    isValidName: function(name) {
        var rets = this.attributes.emit('isValidActionName', this.controllerContext, name);
        if (rets.length === 0) {
            return { 'deft': utils.tryLowerEqual(this.name(), name) };
        }
        // any one valid
        var valid = false;
        utils.each(rets, function(i, ret) {
            valid = (valid || ret);
        });
        return { 'attr': valid };
    },

    isValidRequest: function() {
        var rets  = this.attributes.emit('isValidActionRequest', this.controllerContext);
        if (rets.length === 0) {
            return { 'deft': true };
        }
        // all are valid
        var valid = true;
        utils.each(rets, function(i, ret) {
            valid = (valid && ret);
        });
        return { 'attr': valid };
    },

    emitAttributesEvent: function() {
        var args = utils.arg2arr(arguments);
        this.attributes.emit.apply(this.attributes, args);
        this.controller.emitAttributesEvent.apply(this.controller, args);
    },

    injectImpl: function(ctx) {
        var annotated = this.impl().annotated;
        if (annotated) { return annotated; }
        //
        annotated = injector.annotate(this.impl());
        var params = annotated.params = [];
        params.matchNum = 0;
        //
        if (annotated.args && annotated.args.length > 0) {
            var form = {}, query = {}, routeData = {};
            utils.each(ctx.rulee.request.form, function(key, val) {
                utils.mapObj(form, lowerRootNs(key), val);
            });
            utils.each(ctx.rulee.request.query, function(key, val) {
                utils.mapObj(query, lowerRootNs(key), val);
            });
            utils.each(ctx.routeData, function(i, it) {
                utils.mapObj(routeData, lowerRootNs(it.name), it.value);
            });
            //
            utils.each(annotated.args, function(i, name) {
                var loweName = name.toLowerCase();
                if (loweName.charAt(0) === '$') {
                    loweName = loweName.substr(1);
                }
                params.matchNum++;
                if (loweName in form) {
                    params.push(form[loweName]);
                } else if (loweName in query) {
                    params.push(query[loweName]);
                } else if(loweName in routeData) {
                    params.push(routeData[loweName]);
                } else {
                    params.push(null);
                    params.matchNum--;
                }
            });
        }
        //
        return (this.impl().annotated = annotated);
    },

    executeImpl: function(callback) {
        var authorizeContext = this.controllerContext.toAuthorizeContext({
            result: undefined
        });
        this.emitAttributesEvent('onActionAuthorize', authorizeContext, function() {
            if (authorizeContext.result) {
                return false;
            }
        });
        var authResult = authorizeContext.result;
        authorizeContext.destroy();
        if (authResult !== undefined) {
            callback(authResult);
            return;
        }
        //
        if (this.controller.validateRequest) {
            //TODO:
        }
        //
        var annotated = this.injectImpl(this.controllerContext);
        this.emitAttributesEvent('onActionInjected', this.controllerContext, annotated);
        if (!utils.isFunction(annotated.func)) { return; }
        //
        var actionContext = this.controllerContext.toActionContext({
            params: annotated.params,
            result: undefined
        });
        //
        var self = this, endExecute = function(result) {
            self.emitAttributesEvent('onActionExecuted', actionContext);
            callback(result);
        };
        //
        this.controller.resultApi.callback = endExecute;
        this.controller.tempData.load(this.controllerContext);
        //
        this.emitAttributesEvent('onActionExecuting', actionContext);
        this.implScope = new actionImplementationScope(this.controller);
        actionContext.result = annotated.func.apply(this.implScope, annotated.params);
        //
        if (actionContext.result !== undefined) {
            endExecute(actionContext.result);
        }
    },

    executeResult: function(result, callback) {
        if (result === undefined) { return; }
        //
        if (!utils.isFunction(result.executeResult)) {
            result = new actionResult.contentResult({
                content: result.toString()
            });
        }
        //
        var resultContext = this.controllerContext.toResultContext({
            result: result,
            exception: undefined
        });
        //
        var self = this, endExecute = function(exception) {
            self.emitAttributesEvent('onResultExecuted', resultContext);
            self.controller.tempData.save(self.controllerContext);
            callback(exception);
        };
        //
        this.emitAttributesEvent('onResultExecuting', resultContext);
        var isAsyncResult = (result.executeResult.length > 1);
        if (isAsyncResult) {
            var cb = function(ex) { utils.defer(endExecute, ex); };
            result.executeResult(resultContext, cb);
        } else {
            result.executeResult(resultContext);
            endExecute(resultContext.exception);
        }
    }
};

var actionImplementationScope = function(controller) {
    var self = this;
    this.resultApiSync = new mvcActionResultApi({ httpContext: controller.httpContext, sync: true });
    utils.each(this.resultApiSync, function(name, func) {
        if (utils.isFunction(func) && !self[name]) {
            self[name] = function() {
                var args = utils.arg2arr(arguments);
                return self.resultApiSync[name].apply(self.resultApiSync, args);
            };
        }
    });
};

actionImplementationScope.prototype = {

    resultApiSync: null,
    
    constructor: actionImplementationScope, className: 'actionImplementationScope',

    destroy: function() {
        if (this.resultApiSync) {
            this.resultApiSync.httpContext = null;
            this.resultApiSync = null;
        }
    }
};
