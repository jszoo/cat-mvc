/*
* mvcController
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var events = require('events'),
	utils = require('./utilities'),
    mvcHelper = require('./mvcHelper'),
    mvcAction = require('./mvcAction'),
    mvcInjector = require('./mvcInjector'),
    mvcTempData = require('./mvcTempData'),
    mvcViewData = require('./mvcViewData'),
    actionResults = require('./mvcActionResults');


var mvcController = function(set) {
    utils.extend(this, set);
    this.actions = {};
    this.viewdata = new mvcViewData();
    this.tempdata = new mvcTempData();
    this.events = new events.EventEmitter();
};

mvcController.define = function(name, impl) {
    if (utils.isFunction(name)) {
        impl = name;
        name = null;
    }
    return new mvcController({
        _name: name,
        _impl: impl
    });
};

mvcController.isController = true;

mvcController.prototype = {

    _name: null, _impl: null, _path: null,

    actions: null, viewdata: null, tempdata: null, routeData: null,

    constructor: mvcController, events: null,

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    path: function(p) { return (p === undefined) ? (this._path) : (this._path = p, this); },
    impl: function(p) { return (p === undefined) ? (this._impl) : (this._impl = p, this); },

    initialize: function(req, res) {
        this.routeData = req.routeData;
        var injectedParams = this.injectImpl(req, res);
        this.impl().apply(this, injectedParams);
        return this;
    },

    injectImpl: function(req, res) {
        var params = [];
        var paramNames = mvcInjector.annotate(this.impl());
        if (!paramNames || paramNames.length === 0) { return params; }
        //
        var self = this, actionWrap;
        utils.each(paramNames, function(i, name) {
            var loweName = name.toLowerCase();
            if (loweName.charAt(0) === '$') {
                loweName = loweName.substr(1);
            }
            switch(loweName) {
                case 'req': params.push(req); break;
                case 'res': params.push(res); break;
                case 'request': params.push(req); break;
                case 'response': params.push(res); break;
                case 'controller': params.push(self); break;
                case 'events': params.push(self.events); break;
                case 'tempdata': params.push(self.tempdata()); break;
                case 'action': params.push(actionWrap || (actionWrap = function() { 
                    var args = utils.arg2arr(arguments);
                    self.action.apply(self, args);
                    return actionWrap;
                })); break;
                default: params.push(null); break;
            }
        });
        //
        return params;
    },

    on: function() {
        var args = utils.arg2arr(arguments);
        this.events.on.apply(this.events, args);
        return this;
    },

    action: function(name, sett, impl) {
        if (!name) {
            throw new Error('action name is required.');
        }
        if (arguments.length === 2) {
            impl = sett;
            sett = {};
        } else if(arguments.length === 3) {
            if (utils.isString(sett)) {
                sett = { method: sett };
            } else if (!utils.isObject(sett)) {
                sett = {};
            }
        }
        if (!utils.isFunction(impl)) {
            throw new Error('action impl is required.');
        }
        // new
        this.actions[name.toLowerCase()] = new mvcAction({
            ctrl: this,
            name: name,
            impl: impl,
            sett: sett
        });
        // ret
        return this;
    },

    empty: function() {
        return new actionResults.emptyResult();
    },

    json: function(data, contentType) {
        return new actionResults.jsonResult({ data: data, contentType: contentType});
    },

    jsonp: function(data, callbackName) {
        return new actionResults.jsonpResult({ data: data, callbackName: callbackName });
    },

    partialView: function(viewName) {
        return new actionResults.partialViewResult({ viewName: viewName });
    },

    view: function(viewName, model) {
        return new actionResults.viewResult({ viewName: viewName, model: model });
    },

    file: function(filePath, fileDownloadName) {
        return new actionResults.fileResult({ filePath: filePath, fileDownloadName: fileDownloadName });
    },

    content: function(content, contentType) {
        return new actionResults.contentResult({ content: content, contentType: contentType });
    },

    httpNotFound: function(statusDescription) {
        return new actionResults.httpNotFoundResult({ statusDescription: statusDescription });
    },

    redirect: function(url, permanent) {
        return new actionResults.redirectResult({ url: url, permanent: permanent });
    },

    redirectToAction: function(actionName, controllerName, routeValues) {
        return this.redirectToRoute(mvcHelper.mergeRouteValues(actionName, controllerName, this.routeData, routeValues, true));
    },

    redirectToActionPermanent: function(actionName, controllerName, routeValues) {
        return this.redirectToRoutePermanent(mvcHelper.mergeRouteValues(actionName, controllerName, this.routeData, routeValues, true));
    },

    redirectToRoute: function(routeValues) {
        return new actionResults.redirectToRouteResult({ routeValues: routeValues, permanent: false });
    },

    redirectToRoutePermanent: function(routeValues) {
        return new actionResults.redirectToRouteResult({ routeValues: routeValues, permanent: true });
    }
};

module.exports = mvcController;
