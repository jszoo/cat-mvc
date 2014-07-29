/*
* mvcActionResultApi
* author: ronglin
* create date: 2014.7.3
*/

'use strict';

var utils = require('./utilities'),
    mvcHelper = require('./mvcHelper'),
    actionResult = require('./mvcActionResult');

var mvcActionResultApi = module.exports = function(set) {
    utils.extend(this, set);
};

var emit = function(result) {
    if (this.sync) {
        return result;
    }
    if (utils.isFunction(this.callback)) {
        utils.defer(this.callback, result);
    }
};

mvcActionResultApi.prototype = {

    httpContext: null, sync: false, callback: null,

    constructor: mvcActionResultApi, className: 'mvcActionResultApi',

    with: function(result) {
        return emit.call(this, result);
    },

    empty: function() {
        return emit.call(this, new actionResult.emptyResult());
    },

    json: function(data, contentType) {
        return emit.call(this, new actionResult.jsonResult({ data: data, contentType: contentType }));
    },

    jsonp: function(data, callbackName) {
        return emit.call(this, new actionResult.jsonpResult({ data: data, callbackName: callbackName }));
    },

    /*partialView: function(viewName) {
        return emit.call(this, new actionResult.partialViewResult({ viewName: viewName }));
    },*/

    view: function(viewName, viewData) {
        if (!utils.isString(viewName)) { viewData = viewName; viewName = null; }
        return emit.call(this, new actionResult.viewResult({ viewName: viewName, viewData: viewData }));
    },

    file: function(filePath, fileDownloadName) {
        return emit.call(this, new actionResult.fileResult({ filePath: filePath, fileDownloadName: fileDownloadName }));
    },

    content: function(content, contentType) {
        return emit.call(this, new actionResult.contentResult({ content: content, contentType: contentType }));
    },

    httpNotFound: function(statusText) {
        return emit.call(this, new actionResult.httpNotFoundResult({ statusText: statusText }));
    },

    redirect: function(url, permanent) {
        return emit.call(this, new actionResult.redirectResult({ url: url, permanent: permanent }));
    },

    redirectToAction: function(actionName, controllerName, routeValues) {
        if (!utils.isString(controllerName)) { routeValues = controllerName; controllerName = null; }
        return this.redirectToRoute(mvcHelper.mergeRouteValues(actionName, controllerName, this.httpContext.routeData, routeValues, true));
    },

    redirectToActionPermanent: function(actionName, controllerName, routeValues) {
        if (!utils.isString(controllerName)) { routeValues = controllerName; controllerName = null; }
        return this.redirectToRoutePermanent(mvcHelper.mergeRouteValues(actionName, controllerName, this.httpContext.routeData, routeValues, true));
    },

    redirectToRoute: function(routeName, routeValues) {
        if (!utils.isString(routeName)) { routeValues = routeName; routeName = null; }
        return emit.call(this, new actionResult.redirectToRouteResult({ routeName: routeName, routeValues: routeValues, permanent: false }));
    },

    redirectToRoutePermanent: function(routeName, routeValues) {
        if (!utils.isString(routeName)) { routeValues = routeName; routeName = null; }
        return emit.call(this, new actionResult.redirectToRouteResult({ routeName: routeName, routeValues: routeValues, permanent: true }));
    }
};
