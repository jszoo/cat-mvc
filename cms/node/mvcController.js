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
    mvcViewData = require('./mvcViewData'),
    mvcTempData = require('./mvcTempData'),
    mvcTempDataStore = require('./mvcTempDataStore'),
    mvcHelperUrl = require('./mvcHelperUrl'),
    mvcResultApi = require('./mvcActionResultApi'),
    mvcFilters = require('./mvcFilter/manager');


var mvcController = function(set) {
    utils.extend(this, set);
};

mvcController.define = function(name, impl) {
    var len = arguments.length;
    if (len === 0) {
        return new mvcController();
    } else if (len === 1) {
        return new mvcController({
            _impl: arguments[0]
        });
    } else if (len === 2) {
        return new mvcController({
            _filt: arguments[0],
            _impl: arguments[1]
        });
    } else {
        return new mvcController({
            _name: arguments[0],
            _filt: arguments[1],
            _impl: arguments[2]
        });
    }
};

mvcController.prototype = {

    _name: null, _path: null, _filt: null, _impl: null,

    actions: null,  events: null, url: null,

    viewData: null, tempData: null, 

    resultApi: null, resultApiSync: null,

    httpContext: null, controllerContext: null,

    constructor: mvcController, className: 'mvcController',

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    path: function(p) { return (p === undefined) ? (this._path) : (this._path = p, this); },
    filt: function(p) { return (p === undefined) ? (this._filt) : (this._filt = p, this); },
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
        utils.each(this.actions, function() {
            this.controllerContext = null;
            this.controller = null;
        });
        this.events.removeAllListeners();
        this.url.httpContext = null;
        this.viewData.httpContext = null;
        this.resultApi.httpContext = null;
        this.resultApiSync.httpContext = null;
        this.controllerContext.controller = null;
        // clear reference types
        this._impl = null;
        this.actions = null;
        this.events = null;
        this.url = null;
        this.viewData = null;
        this.tempData = null;
        this.resultApi = null;
        this.resultApiSync = null;
        this.httpContext = null;
        this.controllerContext = null;
    },

    initialize: function(httpContext) {
        var self = this;
        this.actions = [];
        this.events = new events.EventEmitter();
        this.httpContext = httpContext;
        this.controllerContext = httpContext.toControllerContext(this);
        //
        this.url = new mvcHelperUrl({ httpContext: this.httpContext });
        this.viewData = new mvcViewData({ httpContext: this.httpContext });
        //
        this.tempData = new mvcTempData({ provider: mvcTempDataStore.sessionProvider });
        this.events.on('actionExecuting', function() { self.tempData.load(self.httpContext); });
        this.events.on('resultExecuting', function() { self.tempData.save(self.httpContext); });
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
        return this;
    },

    injectImpl: function(ctx) {
        var annotated = mvcInjector.annotate(this.impl());
        var params = annotated.params = [];
        if (!annotated.args || annotated.args.length === 0) { return annotated; }
        //
        var self = this, actionWrap;
        utils.each(annotated.args, function(i, name) {
            var loweName = name.toLowerCase();
            if (loweName.charAt(0) === '$') {
                loweName = loweName.substr(1);
            }
            switch(loweName) {
                case 'ctx':      params.push(ctx); break;
                case 'req':      params.push(ctx.request); break;
                case 'res':      params.push(ctx.response); break;
                case 'context':  params.push(ctx); break;
                case 'request':  params.push(ctx.request); break;
                case 'response': params.push(ctx.response); break;
                case 'session':  params.push(ctx.rulee.request.session); break;
                case 'query':    params.push(ctx.rulee.request.query); break;
                case 'form':     params.push(ctx.rulee.request.form); break;
                //
                case 'events':   params.push(self.events); break;
                case 'tempdata': params.push(self.tempData); break;
                case 'viewdata': params.push(self.viewData); break;
                case 'end':      params.push(self.resultApi); break;
                case 'url':      params.push(self.url); break;
                //
                case 'action': params.push(actionWrap || (actionWrap = function() { 
                    var args = utils.arg2arr(arguments);
                    self.action.apply(self, args);
                    return actionWrap;
                })); break;
                //
                default: params.push(null); break;
            }
        });
        //
        return annotated;
    },

    executeImpl: function() {
        var annotated = this.injectImpl(this.httpContext);
        if (!utils.isFunction(annotated.func)) { return; }
        annotated.func.apply(this, annotated.params);
    },

    resolveFilters: function(type, filt) {
        if (!filt) { filt = this.filt(); }
        return mvcFilters.resolveSetts(type, filt);
    },

    on: function() {
        var args = utils.arg2arr(arguments);
        this.events.on.apply(this.events, args);
        return this;
    },

    action: function() {
        var len = arguments.length, act;
        if (len === 0) {
            act = new mvcAction();
        } else if (len === 1) {
            act = new mvcAction({
                _name: arguments[0]
            });
        } else if (len === 2) {
            act = new mvcAction({
                _name: arguments[0],
                _impl: arguments[1]
            });
        } else {
            act = new mvcAction({
                _name: arguments[0],
                _filt: arguments[1],
                _impl: arguments[2]
            });
        }
        act.controller = this;
        act.controllerContext = this.controllerContext;
        this.actions.push(act);
        return act; //  for chain
    },

    findAction: function(name, method, secure) {
        var action, self = this;
        utils.each([method, null], function(i, it) {
            if (action) { return false; }
            utils.each(self.actions, function() {
                if (mvcHelper.lowerEqual(this.name(), name) && this.isMatch(it, secure)) {
                    action = this;
                    return false;
                }
            });
        });
        return action;
    }
};

module.exports = mvcController;
