/*
* mvcController
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    mvcAction = require('./mvcAction'),
    mvcInjector = require('./mvcInjector'),
    mvcHelperUrl = require('./mvcHelperUrl'),
    mvcViewData = require('./mvcViewData'),
    mvcTempData = require('./mvcTempData'),
    mvcTempDataStore = require('./mvcTempDataStore'),
    mvcActionResultApi = require('./mvcActionResultApi'),
    mvcAttributes = require('./attributes/index');

var mvcController = function(set) {
    utils.extend(this, set);
};

mvcController.define = function() {
    var len = arguments.length;
    if (len === 0) {
        return new mvcController();
    } else if (len === 1) {
        return new mvcController({
            _impl: arguments[0]
        });
    } else if (len === 2) {
        return new mvcController({
            _attr: arguments[0],
            _impl: arguments[1]
        });
    } else {
        return new mvcController({
            _name: arguments[0],
            _attr: arguments[1],
            _impl: arguments[2]
        });
    }
};

mvcController.prototype = {

    _name: null, _path: null, _attr: null, _impl: null,

    actions: null,  url: null,

    viewData: null, tempData: null, 

    resultApi: null, resultApiSync: null,

    httpContext: null, attributes: null,

    constructor: mvcController, className: 'mvcController',

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    path: function(p) { return (p === undefined) ? (this._path) : (this._path = p, this); },
    attr: function(p) { return (p === undefined) ? (this._attr) : (this._attr = p, this); },
    impl: function(p) { return (p === undefined) ? (this._impl) : (this._impl = p, this); },

    clone: function() {
        return new mvcController({
            _name: this._name,
            _path: this._path,
            _attr: this._attr,
            _impl: this._impl
        });
    },

    destroy: function() {
        if (this.actions) {
            utils.each(this.actions, function() { this.destroy(); });
            this.actions = null;
        }
        //
        this.emitAttributesEvent('onControllerDestroy', this);
        this.attributes = null;
        //
        if (this.url) {
            this.url.httpContext = null;
            this.url = null;
        }
        if (this.viewData) {
            this.viewData.httpContext = null;
            this.viewdata = null;
        }
        if (this.resultApi) {
            this.resultApi.httpContext = null;
            this.resultApi = null;
        }
        if (this.resultApiSync) {
            this.resultApiSync.httpContext = null;
            this.resultApiSync = null;
        }
        // clear reference types
        this._impl = null;
        this.tempData = null;
        this.httpContext = null;
    },

    initialize: function(httpContext) {
        var self = this;
        this.actions = [];
        this.httpContext = httpContext;
        //
        this.url = new mvcHelperUrl({ httpContext: this.httpContext });
        this.viewData = new mvcViewData({ httpContext: this.httpContext });
        this.tempData = new mvcTempData({ provider: mvcTempDataStore.sessionProvider });
        //
        this.resultApi = new mvcActionResultApi({ httpContext: this.httpContext, sync: false });
        this.resultApiSync = new mvcActionResultApi({ httpContext: this.httpContext, sync: true });
        utils.each(this.resultApiSync, function(name, func) {
            if (utils.isFunction(func) && !self[name]) {
                self[name] = function() {
                    var args = utils.arg2arr(arguments);
                    return self.resultApiSync[name].apply(self.resultApiSync, args);
                };
            }
        });
        //
        this.attributes = mvcAttributes.resolveConfig(this.attr());
        this.emitAttributesEvent('onControllerInitialized', this);
    },

    emitAttributesEvent: function(eventName) {
        var args = utils.arg2arr(arguments);
        this.attributes.emit.apply(this.attributes, args);
        var internalFunc = this[eventName];
        if (utils.isFunction(internalFunc)){
            internalFunc.apply(this, args);
        }
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
        this.emitAttributesEvent('onControllerInjected', this, annotated);
        if (!utils.isFunction(annotated.func)) { return; }
        annotated.func.apply(this, annotated.params);
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
                _attr: arguments[1],
                _impl: arguments[2]
            });
        }
        this.actions.push(act);
        return act; //  for chain
    },

    findAction: function(httpContext, actionName) {
        var acts = [], self = this;
        utils.each(this.actions, function() {
            this.initialize(self);
            if (this.isValidName(actionName)) {
                acts.push(this);
            }
        });
        //
        var actsByDft = [], actsByAttr = [];
        var validCallback = function(action, isAttr) {
            (isAttr ? actsByAttr : actsByDft).push(action);
        };
        //
        var method = httpContext.rulee.request.method;
        utils.each(acts, function() { this.isValidMethod(method, validCallback); });
        acts = (actsByAttr.length > 0) ? actsByAttr : actsByDft;
        actsByDft = []; actsByAttr = [];
        //
        var secure = httpContext.rulee.request.secure;
        utils.each(acts, function() { this.isValidSecure(secure, validCallback); });
        acts = (actsByAttr.length > 0) ? actsByAttr : actsByDft;
        actsByDft = []; actsByAttr = [];
        //
        if (acts.length > 1) {
            
        }
        // ret
        switch(acts.length) {
            case 0: return null;
            case 1: return acts[0];
            default: throw this.createAmbiguousActionsError(acts, actionName);
        }
    },

    createAmbiguousActionsError: function(ambiguousActions, actionName) {
        var message = [];
        utils.each(ambiguousActions, function() {
            message.push(this.name())
        });
        return new Error('The actions "' + message.join(',') + '" are ambiguous in the controller "' + this.name() + '"');
    }
};

module.exports = mvcController;
