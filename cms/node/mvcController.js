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
    mvcResultsApi = require('./mvcActionResultsApi');


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

mvcController.isController = true;

mvcController.prototype = {

    _name: null, _impl: null, _path: null,

    actions: null,  events: null, url: null,

    viewData: null, tempData: null, httpContext: null,

    resultsApi: null, resultsApiSync: null,

    constructor: mvcController,

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    path: function(p) { return (p === undefined) ? (this._path) : (this._path = p, this); },
    impl: function(p) { return (p === undefined) ? (this._impl) : (this._impl = p, this); },

    clone: function() {
        return new mvcController({
            _name: this._name,
            _impl: this._impl,
            _path: this._path
        });
    },

    destroy: function() {
        //TODO:
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
        this.viewData = new mvcViewData();
        this.tempData = new mvcTempData();
        this.url = new mvcHelperUrl({ httpContext: this.httpContext });
        //
        this.resultsApi = new mvcResultsApi({ httpContext: this.httpContext, sync: false });
        this.resultsApiSync = new mvcResultsApi({ httpContext: this.httpContext, sync: true });
        utils.each(this.resultsApiSync, function(name, func) {
            if (utils.isFunction(func) && !self[name]) {
                self[name] = function() {
                    var args = utils.arg2arr(arguments);
                    return self.resultsApiSync[name].apply(self.resultsApiSync, args);
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
                case 'end': params.push(self.resultsApi); break;
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
