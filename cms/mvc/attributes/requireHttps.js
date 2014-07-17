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

    constructor: requireHttps, className: 'requireHttps',

    onActionAuthorization: function(authorizationContext) {
        var secure = authorizationContext.rulee.request.secure;
        if (!secure) {
            this.handleNonHttpsRequest(authorizationContext);
        }
    },

    handleNonHttpsRequest: function(authorizationContext) {
        var methodName = authorizationContext.rulee.request.method;
        if (!utils.tryLowerEqual(methodName, 'GET')) {
            throw new Error('The requested resource can only be accessed via SSL.');
        } else {
            var u = authorizationContext.rulee.request.url;
            var url = "https://" + u.host + u.path;
            authorizationContext.result = new mvcActionResult.redirectResult({ url: url });
        }
    }
};