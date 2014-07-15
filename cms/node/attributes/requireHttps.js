/*
* requireHttps
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities'),
    mvcActionResult = require('../mvcActionResult');

var requireHttps = module.exports = function(set) {
    utils.extend(this, set);
};

requireHttps.prototype = {

    methodName: null,

    constructor: requireHttps, className: 'requireHttps',

    onAuthorization: function(actionContext) {
        var secure = actionContext.rulee.request.secure;
        if (!secure) {
            this.handleNonHttpsRequest(actionContext);
        }
    },

    handleNonHttpsRequest: function(actionContext) {
        var methodName = actionContext.rulee.request.method;
        if (!utils.tryLowerEqual(methodName, 'GET')) {
            throw new Error('The requested resource can only be accessed via SSL.');
        } else {
            var u = actionContext.rulee.request.url;
            var url = "https://" + u.host + u.path;
            actionContext.result = new mvcActionResult.redirectResult({ url: url });
        }
    }
};