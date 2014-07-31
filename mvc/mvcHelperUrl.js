/*
* mvcUrlHelper
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.1
*/

'use strict';

var utils = require('./utilities'),
    mvcHelper = require('./mvcHelper');

var mvcUrlHelper = module.exports = function(set) {
    utils.extend(this, set);
};

mvcUrlHelper.prototype = {

    httpContext: null,

    constructor: mvcUrlHelper, className: 'mvcUrlHelper',

    action: function(actionName, controllerName, routeValues, protocol, hostName) {
        return mvcHelper.generateUrlPlus(null, actionName, controllerName, protocol, hostName, null, routeValues, this.httpContext.routeSet, this.httpContext, true);
    },

    routeUrl: function(routeValues, protocol, hostName) {
        return mvcHelper.generateUrlPlus(null, null, null, protocol, hostName, null, routeValues, this.httpContext.routeSet, this.httpContext, false);
    },

    content: function(contentPath) {
        return mvcHelper.generateContentUrl(contentPath, this.httpContext);
    }
};
