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
    mvcActionResultApi = require('./mvcActionResultApi');

var mvcController = module.exports = function(set) {
    utils.extend(this, set);
};

var defined;
mvcController.define = function() {
    var name, attr, impl;
    var len = arguments.length, arg0 = arguments[0];
    //
    if (len === 1 && utils.isFunction(arg0)) {
        impl = arg0;
    } else if (len === 1 && utils.isObject(arg0)) {
        name = arg0.name;
        attr = arg0.attr;
        impl = arg0.impl;
    } else if (len === 2) {
        attr = arg0;
        impl = arguments[1];
    } else {
        name = arg0;
        attr = arguments[1];
        impl = arguments[2];
    }
    //
    var ret = new mvcController({
        _name: name,
        _attr: attr,
        _impl: impl
    });
    if (defined) {
        defined.push(ret);
    }
    return ret;
};

mvcController.loadfile = function(fileName) {
    defined = [];
    delete require.cache[fileName];
    require(fileName);
    var t = defined;
    defined = null;
    return t;
};

mvcController.prototype = {

    _name: null, _path: null, _attr: null, _impl: null,

    actions: null,  url: null,

    viewData: null, tempData: null,

    resultApi: null, implScope: null,

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
        if (this.attributes) {
            this.emitAttributesEvent('onControllerDestroy', this);
            this.attributes = null;
        }
        if (this.actions) {
            utils.each(this.actions, function() { this.destroy(); });
            this.actions = null;
        }
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
        if (this.httpContext) {
            this.httpContext.destroy();
            this.httpContext = null;
        }
        // clear reference types
        this._impl = null;
        this._attr = null;
        this.tempData = null;
        this.implScope = null;
    },

    initialize: function(httpContext) {
        this.actions = [];
        this.httpContext = httpContext;
        //
        this.url = new mvcHelperUrl({ httpContext: this.httpContext });
        this.viewData = new mvcViewData({ httpContext: this.httpContext });
        this.tempData = new mvcTempData({ provider: mvcTempDataStore.sessionProvider });
        //
        this.resultApi = new mvcActionResultApi({ httpContext: this.httpContext, sync: false });
        this.implScope = new controllerImplementationScope(this);
        //
        this.attributes = httpContext.app.attributes.resolveConfig(this.attr());
    },

    emitAttributesEvent: function(eventName) {
        var args = utils.arg2arr(arguments);
        this.attributes.emit.apply(this.attributes, args);
        //
        var scopeFunc = this.implScope[eventName];
        if (utils.isFunction(scopeFunc)){
            var args1 = utils.arg2arr(arguments, 1);
            scopeFunc.apply(this, args1);
        }
    },

    injectImpl: function(ctx) {
        var annotated = mvcInjector.annotate(this.impl());
        var params = annotated.params = [];
        if (!annotated.args || annotated.args.length === 0) { return annotated; }
        //
        var self = this;
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
                default: params.push(null); break;
            }
        });
        //
        return annotated;
    },

    executeImpl: function() {
        var annotated = this.injectImpl(this.httpContext);
        if (!utils.isFunction(annotated.func)) { return; }
        annotated.func.apply(this.implScope, annotated.params);
        this.emitAttributesEvent('onControllerInitialized', this);
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

    findAction: function(actionName) {
        var acts = [], self = this;
        utils.each(this.actions, function() {
            this.initialize(self);
            var ret = this.isValidName(actionName);
            if (ret.deft || ret.attr) { acts.push(this); }
        });
        //
        var actsByAttr = [], actsByDeft = [];
        utils.each(acts, function() {
            var ret = this.isValidRequest();
            if (ret.deft) { actsByDeft.push(this); }
            else if (ret.attr) { actsByAttr.push(this); }
        });
        acts = (actsByAttr.length > 0) ? actsByAttr : actsByDeft;
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
            var match = this.impl().toString().match(/^function\s*\([^\)]*/ig);
            var fnStr = match ? (match[0] + ')') : this.impl().toString();
            message.push(utils.format('{0} [{1}] {2}', this.name(), this.attr().toString(), fnStr));
        });
        return new Error(utils.format('The current request for action "{0}" on controller type "{1}" is ambiguous between the following action methods:<br/>{2}', actionName, this.name(), message.join('<br/>')));
    }
};

var controllerImplementationScope = function(controller) {
    this.action = function() {
        return controller.action.apply(controller, arguments);
    };
};

controllerImplementationScope.prototype = {
    
    constructor: controllerImplementationScope, className: 'controllerImplementationScope',


    /************ controller object events **************/
    onControllerInitialized: function(controller) {},
    onControllerDestroy: function(controller) {},


    /************ authorize event **************/
    onAuthorization: function(authorizationContext) {},


    /************ action filter events **************/
    onActionExecuting: function(actionContext) {},
    onActionExecuted: function(actionContext) {},
    onResultExecuting: function(resultContext) {},
    onResultExecuted: function(resultContext) {},


    /************ exception event **************/
    onException: function(exceptionContext) {}
};
