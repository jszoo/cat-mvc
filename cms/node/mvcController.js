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
    mvcHelperUrl = require('./mvcHelperUrl'),
    mvcResultApi = require('./mvcActionResultApi');


var mvcController = function(set) {
    utils.extend(this, set);
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

mvcController.prototype = {

    _name: null, _path: null, _impl: null,

    actions: null,  events: null, url: null,

    viewData: null, tempData: null, httpContext: null,

    resultApi: null, resultApiSync: null,

    constructor: mvcController, className: 'mvcController',

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    path: function(p) { return (p === undefined) ? (this._path) : (this._path = p, this); },
    impl: function(p) { return (p === undefined) ? (this._impl) : (this._impl = p, this); },

    clone: function() {
        return new mvcController({
            _name: this._name,
            _path: this._path,
            _impl: this._impl
        });
    },

    destroy: function() {
        if (!this.actions) { return; } // already destroyed
        // break object leaks
        utils.each(this.actions, function() { this.controller = null; });
        this.events.removeAllListeners();
        this.url.httpContext = null;
        this.resultApi.httpContext = null;
        this.resultApiSync.httpContext = null;
        // clear reference types
        this._impl = null;
        this.actions = null;
        this.events = null;
        this.url = null;
        this.viewData = null;
        this.tempData = null;
        this.httpContext = null;
        this.resultApi = null;
        this.resultApiSync = null;
    },

    initialize: function(req, res, route, routeSet, routeData) {
        var self = this;
        this.actions = [];
        this.events = new events.EventEmitter();
        this.httpContext = {
            request: req,
            response: res,
            route: route,
            routeSet: routeSet,
            routeData: routeData
        };
        //
        this.url = new mvcHelperUrl({ httpContext: this.httpContext });
        this.viewData = new mvcViewData();
        //
        this.tempData = new mvcTempData({ provider: mvcTempData.sessionProvider });
        this.events.on('actionExecuting', function() { self.tempData.load(self.httpContext); });
        this.events.on('resultExecuted', function() { self.tempData.save(self.httpContext); });
        //
        this.resultApi = new mvcResultApi({ httpContext: this.httpContext, sync: false });
        this.resultApiSync = new mvcResultApi({ httpContext: this.httpContext, sync: true });
        utils.each(this.resultApiSync, function(name, func) {
            if (utils.isFunction(func) && !self[name]) {
                self[name] = function() {
                    var args = utils.arg2arr(arguments);
                    return self.resultApiSync[name].apply(self.resultApiSync, args);
                };
            }
        });
        //
        var injectedParams = this.injectImpl(this.httpContext);
        this.impl().apply(this, injectedParams);
        //
        return this;
    },

    injectImpl: function(httpContext) {
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
                case 'req': params.push(httpContext.request); break;
                case 'res': params.push(httpContext.response); break;
                case 'request': params.push(httpContext.request); break;
                case 'response': params.push(httpContext.response); break;
                case 'events': params.push(self.events); break;
                case 'tempdata': params.push(self.tempData); break;
                case 'viewdata': params.push(self.viewData); break;
                case 'end': params.push(self.resultApi); break;
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
            sett = null;
        }
        if (!utils.isFunction(impl)) {
            throw new Error('action impl is required.');
        }
        // new
        this.actions.push(new mvcAction({
            controller: this,
            name: name,
            impl: impl,
            sett: sett
        }));
        // ret
        return this;
    },

    findAction: function(name, method) {
        var action, self = this;
        utils.each([method, null], function(i, md) {
            if (action) { return false; }
            utils.each(self.actions, function() {
                if (mvcHelper.lowerEqual(this.name, name) && this.hasMethod(md)) {
                    action = this;
                    return false;
                }
            });
        });
        return action;
    }
};

module.exports = mvcController;
