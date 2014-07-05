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

    controller: null, _name: null, _filt: null, _impl: null,
    
    constructor: mvcAction, className: 'mvcAction',

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    filt: function(p) { return (p === undefined) ? (this._filt) : (this._filt = p, this); },
    impl: function(p) { return (p === undefined) ? (this._impl) : (this._impl = p, this); },

    isMatch: function(method, secure) {
        if (method && !httpMethod.exists(method)) {
            return false;
        }
        if (!method && !this.filt()) {
            return true;
        }
        //
        var methodStr = ',';
        if (utils.isString(this.filt())) {
            methodStr += this.filt() + ',';
        } else if (utils.isObject(this.filt())) {
            utils.each(this.filt(), function(key, val) {
                if (val && httpMethod.exists(key)) { methodStr += key + ','; }
            });
        }
        method = (method || '');
        return methodStr.replace(/\s/g, '').toUpperCase().indexOf(',' + method.toUpperCase() + ',') > -1;
    },

    injectImpl: function(httpContext) {
        var params = [];
        var paramNames = injector.annotate(this.impl());
        if (!paramNames || paramNames.length === 0) { return params; }
        //
        var form = {}, query = {}, routeData = {};
        utils.each(httpContext.request.rulee.form, function(key, val) {
            utils.mapObj(form, lowerRootNs(key), val);
        });
        utils.each(httpContext.request.rulee.query, function(key, val) {
            utils.mapObj(query, lowerRootNs(key), val);
        });
        utils.each(httpContext.routeData, function(i, it) {
            utils.mapObj(routeData, lowerRootNs(it.name), it.value);
        });
        utils.each(paramNames, function(i, name) {
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
        return params;
    },

    execute: function(callback) {
        if (!utils.isFunction(this.impl())) { return; }
        this.controller.resultApi.callback = callback;
        // execute action
        var injectedParams = this.injectImpl(this.controller.httpContext);
        var actionContext = utils.extend({}, this.controller.httpContext, {
            params: injectedParams,
            result: null
        });
        this.controller.events.emit('actionExecuting', actionContext);
        actionContext.result = this.impl().apply(this.controller, injectedParams);
        this.controller.events.emit('actionExecuted', actionContext);
        // ret
        return actionContext.result;
    },

    executeResult: function(result) {
        if (result === undefined || result === null) { return; }
        //
        if (!(result instanceof actionResult.baseResult)) {
            result = new actionResult.contentResult({
                content: result.toString(),
                contentType: 'text/plain'
            });
        }
        else if (result instanceof actionResult.viewResult) {
            if (!result.viewName) {
                result.viewName = this.name();
            }
            if (!result.model) {
                result.model = this.controller.viewData;
            }
        }
        else if (result instanceof actionResult.partialViewResult) {
            if (!result.viewName) {
                result.viewName = this.name();
            }
        }
        //
        var resultContext = utils.extend({}, this.controller.httpContext, {
            result: result,
            exception: null
        });
        this.controller.events.emit('resultExecuting', resultContext);
        result.execute(resultContext);
        this.controller.events.emit('resultExecuted', resultContext);
        // ret
        return resultContext.exception;
    }
};

module.exports = mvcAction;
