/*
* mvcUrlHelper
* author: ronglin
* create date: 2014.7.1
*/

'use strict';

var utils = require('./utilities');


var urlHelper = function(set) {
    utils.extend(this, set);
};

var generateUrl = urlHelper.generateUrl = function(actionName, controllerName, routeValues, routeSet, request, includeImplicitMvcValues) {
    //TODO:
};

var generateUrlPlus = urlHelper.generateUrlPlus = function(actionName, controllerName, protocol, hostName, fragment, routeValues, routeSet, request, includeImplicitMvcValues) {
    //TODO:
};

var generateContentUrl = urlHelper.generateContentUrl = function(contentPath, httpContext) {
    //TODO:
};

urlHelper.isUrlHelper = true;

urlHelper.prototype = {

    request: null, routeSet: null,

    constructor: urlHelper,

    action: function(actionName, controllerName, routeValues, protocol, hostName) {
        return generateUrlPlus(actionName, controllerName, protocol, hostName, null, routeValues, this.routeSet, this.request, true);
    },

    routeUrl: function(routeValues, protocol, hostName) {
        return generateUrlPlus(null, null, protocol, hostName, null, routeValues, this.routeSet, this.request, false);
    },

    content: function(contentPath) {

    }
}

module.exports = urlHelper;
