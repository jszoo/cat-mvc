/*
* mvcUrlHelper
* author: ronglin
* create date: 2014.7.1
*/

'use strict';

var utils = require('./utilities'),
    mvcHelper = require('./mvcHelper');


var urlHelper = function(set) {
    utils.extend(this, set);
};

urlHelper.prototype = {

    httpContext: null,

    constructor: urlHelper, classType: 'urlHelper',

    action: function(actionName, controllerName, routeValues, protocol, hostName) {
        return mvcHelper.generateUrlPlus(actionName, controllerName, protocol, hostName, null, routeValues, this.httpContext.routeSet, this.httpContext, true);
    },

    routeUrl: function(routeValues, protocol, hostName) {
        return mvcHelper.generateUrlPlus(null, null, protocol, hostName, null, routeValues, this.httpContext.routeSet, this.httpContext, false);
    },

    content: function(contentPath) {
        return mvcHelper.generateContentUrl(contentPath, this.httpContext);
    }
}

module.exports = urlHelper;
