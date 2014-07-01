/*
* mvcAction
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    injector = require('./mvcInjector'),
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
        utils.each(req.routeData, function(key, val) {
            utils.mapObj(routeData, lowerRootNs(key), val);
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
        if (utils.isFunction(this.impl)) {
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
            // execute action result
            var ret = actionContext.result;
            if (!(ret instanceof actionResults.baseResult)) {
                if (ret === undefined || ret === null || ret === '') {
                    ret = new actionResults.emptyResult();
                } else {
                    ret = new actionResults.contentResult({
                        content: ret.toString(),
                        contentType: 'text/plain'
                    });
                }
            }
            var resultContext = {
                request: req,
                response: res,
                result: ret,
                exception: null
            };
            this.ctrl.events.emit('resultExecuting', resultContext);
            ret.execute(resultContext);
            this.ctrl.events.emit('resultExecuted', resultContext);
        }
        return this;
    }
};

module.exports = mvcAction;
