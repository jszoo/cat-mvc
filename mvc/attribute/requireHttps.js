/*
* requireHttps
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities'),
    redirectResult = require('../mvcActionResult').redirectResult;

var requireHttps = module.exports = function(set) {
    utils.extend(this, set);
};

requireHttps.prototype = {

    constructor: requireHttps, className: 'requireHttps',

    onAuthorization: function(authorizationContext) {
        var secure = authorizationContext.zoo.request.secure;
        if (!secure) {
            this.handleNonHttpsRequest(authorizationContext);
        }
    },

    handleNonHttpsRequest: function(authorizationContext) {
        var methodName = authorizationContext.zoo.request.method;
        if (!utils.tryLowerEqual(methodName, 'GET')) {
            throw new Error('The requested resource can only be accessed via SSL.');
        } else {
            var u = authorizationContext.zoo.request.url;
            var url = "https://" + u.host + u.path;
            authorizationContext.result = new redirectResult({ url: url });
        }
    }
};