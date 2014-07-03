/*
* mvcActionResultsApi
* author: ronglin
* create date: 2014.7.3
*/

'use strict';

var utils = require('./utilities'),
    actionResults = require('./mvcActionResults');


var mvcActionResultsApi = function(set) {
    utils.extend(this, set);
};

var emit = function(result) {
    if (this.sync) {
        return result;
    } 
    if (utils.isFunction(this.callback)) {
        this.callback(result);
    }
};

mvcActionResultsApi.prototype = {

    httpContext: null, sync: false, callback: null,

    constructor: mvcActionResultsApi, className: 'mvcActionResultsApi',

    empty: function() {
        return emit.call(this, new actionResults.emptyResult());
    },

    json: function(data, contentType) {
        return emit.call(this, new actionResults.jsonResult({ data: data, contentType: contentType}));
    },

    jsonp: function(data, callbackName) {
        return emit.call(this, new actionResults.jsonpResult({ data: data, callbackName: callbackName }));
    },

    partialView: function(viewName) {
        return emit.call(this, new actionResults.partialViewResult({ viewName: viewName }));
    },

    view: function(viewName, model) {
        return emit.call(this, new actionResults.viewResult({ viewName: viewName, model: model }));
    },

    file: function(filePath, fileDownloadName) {
        return emit.call(this, new actionResults.fileResult({ filePath: filePath, fileDownloadName: fileDownloadName }));
    },

    content: function(content, contentType) {
        return emit.call(this, new actionResults.contentResult({ content: content, contentType: contentType }));
    },

    httpNotFound: function(statusText) {
        return emit.call(this, new actionResults.httpNotFoundResult({ statusText: statusText }));
    },

    redirect: function(url, permanent) {
        return emit.call(this, new actionResults.redirectResult({ url: url, permanent: permanent }));
    },

    redirectToAction: function(actionName, controllerName, routeValues) {
        return this.redirectToRoute(mvcHelper.mergeRouteValues(actionName, controllerName, this.httpContext.routeData, routeValues, true));
    },

    redirectToActionPermanent: function(actionName, controllerName, routeValues) {
        return this.redirectToRoutePermanent(mvcHelper.mergeRouteValues(actionName, controllerName, this.httpContext.routeData, routeValues, true));
    },

    redirectToRoute: function(routeValues) {
        return emit.call(this, new actionResults.redirectToRouteResult({ routeValues: routeValues, permanent: false }));
    },

    redirectToRoutePermanent: function(routeValues) {
        return emit.call(this, new actionResults.redirectToRouteResult({ routeValues: routeValues, permanent: true }));
    }
};

module.exports = mvcActionResultsApi;
