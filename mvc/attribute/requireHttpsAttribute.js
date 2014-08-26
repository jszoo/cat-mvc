/*
* requireHttpsAttribute
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.12
*/

'use strict';

var utils = require('zoo-utils'),
    actionResult = require('../httpResult/actionResult');

var requireHttpsAttribute = module.exports = function(set) {
    if (utils.isBoolean(set)) {
        this.enabled = set;
    } else {
        utils.extend(this, set);
    }
};

requireHttpsAttribute.prototype = {

    enabled: true,

    constructor: requireHttpsAttribute,

    onAuthorization: function(authorizationContext) {
        if (this.enabled) {
            var secure = authorizationContext.zoo.request.secure;
            if (!secure) {
                this.handleNonHttpsRequest(authorizationContext);
            }
        }
    },

    handleNonHttpsRequest: function(authorizationContext) {
        var methodName = authorizationContext.zoo.request.method;
        if (!utils.tryLowerEqual(methodName, 'GET')) {
            throw new Error('The requested resource can only be accessed via SSL.');
        } else {
            var u = authorizationContext.zoo.request.url;
            var url = "https://" + u.host + u.path;
            authorizationContext.result = new actionResult.redirect(url);
        }
    }
};