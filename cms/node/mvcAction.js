/*
* mvcAction
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    injector = require('./mvcInjector'),
    httpMethod = require('./mvcHttpMethod'),
    actionResult = require('./mvcActionResult');

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

    controller: null, controllerContext: null,
    
    constructor: mvcAction, className: 'mvcAction',

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    attr: function(p) { return (p === undefined) ? (this._attr) : (this._attr = p, this); },
    impl: function(p) { return (p === undefined) ? (this._impl) : (this._impl = p, this); },

    isMatch: function(method, secure) {
        if (!method && !secure && !this.attr()) {
            return true;
        }
        //
        var methodStr = ',';
        if (utils.isString(this.attr())) {
            methodStr += this.attr() + ',';
        } else if (utils.isObject(this.attr())) {
            utils.each(this.attr(), function(key, val) {
                if (val && httpMethod.exists(key)) { methodStr += key + ','; }
            });
        }
        method = (method || '');
        return methodStr.replace(/\s/g, '').toUpperCase().indexOf(',' + method.toUpperCase() + ',') > -1;
    },

    resolveAttr: function(config) {
        if (!config) { config = this.attr(); }
        return this.controller.resolveAttr(config);
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
        if (!utils.isFunction(annotated.func)) { return; }
        this.controller.resultApi.callback = callback;
        //
        var actionContext = this.controllerContext.toActionContext({
            params: annotated.params,
            result: null
        });
        //
        this.controller.events.emit('actionExecuting', actionContext);
        actionContext.result = annotated.func.apply(this.controller, annotated.params);
        this.controller.events.emit('actionExecuted', actionContext);
        // ret
        callback(actionContext.result);
    },

    executeResult: function(result, callback) {
        if (result === undefined) { return; }
        //
        if (!utils.isFunction(result.execute)) { //if (!(result instanceof actionResult.baseResult)) {
            result = new actionResult.contentResult({
                content: result.toString()
            });
        }
        //
        var isAsyncResult = (result.execute.length > 1);
        var resultContext = this.controllerContext.toResultContext({
            result: result,
            exception: null
        });
        //
        this.controller.events.emit('resultExecuting', resultContext);
        if (isAsyncResult) {
            result.execute(resultContext, function(exception) { utils.defer(callback, exception); });
        } else {
            result.execute(resultContext);
        }
        this.controller.events.emit('resultExecuted', resultContext);
        // ret
        if (!isAsyncResult) { callback(resultContext.exception); }
    }
};

module.exports = mvcAction;
