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
    mvcAttributes = require('./attributes/index');

var lowerRootNs = function(namespace) {
    var index = namespace.search(/\.|\[|\]/);
    if (index > -1) {
        return namespace.substr(0, index).toLowerCase() + namespace.substr(index);
    } else {
        return namespace.toLowerCase();
    }
};

var mvcAction = function(set) {
    utils.extend(this, set);
};

mvcAction.prototype = {

    _name: null, _attr: null, _impl: null,

    controller: null, controllerContext: null, attributes: null,
    
    constructor: mvcAction, className: 'mvcAction',

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    attr: function(p) { return (p === undefined) ? (this._attr) : (this._attr = p, this); },
    impl: function(p) { return (p === undefined) ? (this._impl) : (this._impl = p, this); },

    destroy: function() {
        this.emitAttributesEvent('onActionDestroy', this);
        this.attributes = null;
        //
        this.controller = null;
        if (this.controllerContext) {
            this.controllerContext.controller = null;
            this.controllerContext = null;
        }
    },

    initialize: function(controller) {
        this.controller = controller;
        this.controllerContext = controller.httpContext.toControllerContext(controller);
        this.attributes = mvcAttributes.resolveConfig(this.attr());
        this.emitAttributesEvent('onActionInitialized', this);
    },

    isValidName: function(name, callback) {
        var rets = this.attributes.emit('isValidActionName', this.controllerContext, name);
        if (rets.length === 0) {
            var equal = utils.tryLowerEqual(this.name(), name);
            if (equal && callback) { callback(this, false); }
            return equal;
        }
        // any one valid
        var valid = false;
        utils.each(rets, function(i, ret) {
            if (ret) {
                valid = true;
                return false;
            };
        });
        if (valid && callback) { callback(this, true); }
        return valid;
    },

    isValidMethod: function(method, callback) {
        var rets  = this.attributes.emit('isValidRequestMethod', this.controllerContext, method);
        if (rets.length === 0) {
            if (callback) { callback(this, false); }
            return true;
        }
        // all are valid
        var valid = true;
        utils.each(rets, function(i, ret) {
            valid = (valid && ret);
        });
        if (valid && callback) { callback(this, true); }
        return valid;
    },

    isValidSecure: function(secure, callback) {
        var rets = this.attributes.emit('isValidRequestSecure', this.controllerContext, secure);
        if (rets.length === 0) {
            if (callback) { callback(this, false); }
            return true;
        }
        // all are valid
        var valid = true;
        utils.each(rets, function(i, ret) {
            valid = (valid && ret);
        });
        if (valid && callback) { callback(this, true); }
        return valid;
    },

    emitAttributesEvent: function() {
        var args = utils.arg2arr(arguments);
        this.attributes.emit.apply(this.attributes, args);
        this.controller.emitAttributesEvent.apply(this.controller, args);
    },

    injectImpl: function(ctx) {
        var annotated = injector.annotate(this.impl());
        var params = annotated.params = [];
        if (!annotated.args || annotated.args.length === 0) { return annotated; }
        //
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
            if (loweName in form) {
                params.push(form[loweName]);
            } else if (loweName in query) {
                params.push(query[loweName]);
            } else if(loweName in routeData) {
                params.push(routeData[loweName]);
            } else {
                params.push(null);
            }
        });
        //
        return annotated;
    },

    executeImpl: function(callback) {
        var annotated = this.injectImpl(this.controllerContext);
        this.emitAttributesEvent('onActionInjected', this, annotated);
        if (!utils.isFunction(annotated.func)) { return; }
        this.controller.resultApi.callback = callback;
        //
        var actionContext = this.controllerContext.toActionContext({
            params: annotated.params,
            result: null
        });
        //
        this.controller.tempData.load(this.controllerContext);
        //
        this.emitAttributesEvent('onActionExecuting', actionContext);
        actionContext.result = annotated.func.apply(this.controller, annotated.params);
        this.emitAttributesEvent('onActionExecuted', actionContext);
        // ret
        callback(actionContext.result);
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
        var isAsyncResult = (result.executeResult.length > 1);
        var resultContext = this.controllerContext.toResultContext({
            result: result,
            exception: null
        });
        //
        this.controller.tempData.save(this.controllerContext);
        //
        this.emitAttributesEvent('onResultExecuting', resultContext);
        if (isAsyncResult) {
            result.executeResult(resultContext, function(exception) { utils.defer(callback, exception); });
        } else {
            result.executeResult(resultContext);
        }
        this.emitAttributesEvent('onResultExecuted', resultContext)
        // ret
        if (!isAsyncResult) { callback(resultContext.exception); }
    }
};

module.exports = mvcAction;
