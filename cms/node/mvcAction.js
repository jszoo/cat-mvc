/*
* mvcAction
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    injector = require('./mvcInjector'),
    httpMethod = require('./mvcHttpMethod'),
    actionResults = require('./mvcActionResults');

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

mvcAction.isAction = true;

mvcAction.prototype = {

    ctrl: null, name: null, impl: null, sett: null,
    
    constructor: mvcAction,

    hasMethod: function(method) {
        if (!httpMethod.exists(method)) {
            return false;
        }
        //
        var methodStr = ',';
        if (!this.sett) {
            methodStr += 'GET,';
        } else if (utils.isString(this.sett)) {
            methodStr += this.sett + ',';
        } else if (utils.isObject(this.sett)) {
            utils.each(this.sett, function(key, val) {
                if (val) { methodStr += key + ','; }
            });
        }
        return methodStr.replace(/\s/g, '').toUpperCase().indexOf(',' + method.toUpperCase() + ',') > -1;
    },

    injectImpl: function(req) {
        var params = [];
        var paramNames = injector.annotate(this.impl);
        if (!paramNames || paramNames.length === 0) { return params; }
        //
        var body = {}, query = {}, routeData = {};
        utils.each(req.body, function(key, val) {
            utils.mapObj(body, lowerRootNs(key), val);
        });
        utils.each(req.query, function(key, val) {
            utils.mapObj(query, lowerRootNs(key), val);
        });
        utils.each(req.routeData, function(i, it) {
            utils.mapObj(routeData, lowerRootNs(it.name), it.value);
        });
        utils.each(paramNames, function(i, name) {
            var loweName = name.toLowerCase();
            if (loweName.charAt(0) === '$') {
                loweName = loweName.substr(1);
            }
            if (loweName in body) {
                params.push(body[loweName]);
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

    execute: function(req, res) {
        if (!utils.isFunction(this.impl)) { return; }
        // execute action
        var injectedParams = this.injectImpl(req);
        var actionContext = {
            request: req,
            response: res,
            params: injectedParams,
            result: null
        };
        this.ctrl.events.emit('actionExecuting', actionContext);
        actionContext.result = this.impl.apply(this.ctrl, injectedParams);
        this.ctrl.events.emit('actionExecuted', actionContext);
        // ret
        return actionContext.result;
    },

    executeResult: function(req, res, result) {
        if (result === undefined || result === null) { return; }
        //
        if (!(result instanceof actionResults.baseResult)) {
            result = new actionResults.contentResult({
                content: result.toString(),
                contentType: 'text/plain'
            });
        }
        else if (result instanceof actionResults.viewResult) {
            if (!result.viewName) {
                result.viewName = this.name;
            }
            if (!result.model) {
                result.model = this.ctrl.viewdata;
            }
        }
        else if (result instanceof actionResults.partialViewResult) {
            if (!result.viewName) {
                result.viewName = this.name;
            }
        }
        //
        var resultContext = {
            request: req,
            response: res,
            result: result,
            exception: null
        };
        this.ctrl.events.emit('resultExecuting', resultContext);
        result.execute(resultContext);
        this.ctrl.events.emit('resultExecuted', resultContext);
        // ret
        return resultContext.exception;
    }
};

module.exports = mvcAction;
