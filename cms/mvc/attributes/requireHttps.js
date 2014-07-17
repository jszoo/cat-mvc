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

    onActionAuthorize: function(authorizeContext) {
        var secure = authorizeContext.rulee.request.secure;
        if (!secure) {
            this.handleNonHttpsRequest(authorizeContext);
        }
    },

    handleNonHttpsRequest: function(authorizeContext) {
        var methodName = authorizeContext.rulee.request.method;
        if (!utils.tryLowerEqual(methodName, 'GET')) {
            throw new Error('The requested resource can only be accessed via SSL.');
        } else {
            var u = authorizeContext.rulee.request.url;
            var url = "https://" + u.host + u.path;
            authorizeContext.result = new mvcActionResult.redirectResult({ url: url });
        }
    }
};