/*
* mvcController
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.24
*/

'use strict';

var utils = require('zoo-utils'),
    mvcAction = require('./mvcAction'),
    mvcInjector = require('./mvcInjector'),
    mvcUrlHelper = require('./mvcUrlHelper'),
    mvcViewData = require('./mvcViewData'),
    mvcTempData = require('./mvcTempData'),
    mvcTempDataStore = require('./mvcTempDataStore'),
    mvcActionResultApi = require('./mvcActionResultApi'),
    mvcModelApi = require('./mvcModelApi');

var controllersDefined,
    controllerKeyInScope = 'dont_use_me(random:' + utils.unique(8) + ')';

var mvcController = module.exports = function(set) {
    utils.extend(this, set);
};

mvcController.api = function(name, attr, impl) {
    if (utils.isFunction(name)) {
        impl = name;
        attr = null;
        name = null;
    }
    else if (utils.isFunction(attr)) {
        impl = attr;
        attr = name;
        name = null;
    }
    else if (utils.isObject(name)) {
        impl = name.impl;
        attr = name.attr;
        name = name.name;
    }
    // create
    var ret = new mvcController({
        _name: name,
        _attr: attr,
        _impl: impl
    });
    if (controllersDefined) {
        controllersDefined.push(ret);
    }
    // for chain
    return ret;
};

mvcController.loadfile = function(filePath) {
    var ret, expo; controllersDefined = [];
    try {
        require.cache[filePath] = null;
        expo = require(filePath);
    } catch (ex) {
        controllersDefined = null;
        return null;
    }
    //
    if (expo instanceof mvcController) {
        ret = [expo];
    }
    else if (utils.isFunction(expo)) {
        ret = [mvcController.api(expo)];
    }
    else {
        ret = controllersDefined;
    }
    //
    controllersDefined = null;
    return ret;
};

mvcController.prototype = {

    _name: null, _path: null, _attr: null, _impl: null,

    actions: null, url: null,

    viewData: null, tempData: null,

    resultApi: null, resultApiSync: null, modelApi: null, implScope: null,

    httpContext: null, attributes: null,

    constructor: mvcController,

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
            this.attributes.emitSync(this, { eventName: 'onControllerDestroy' });
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
        if (this.resultApiSync) {
            this.resultApiSync.httpContext = null;
            this.resultApiSync = null;
        }
        if (this.modelApi) {
            this.modelApi.httpContext = null;
            this.modelApi = null;
        }
        if (this.httpContext) {
            this.httpContext.destroy();
            this.httpContext = null;
        }
        if (this.implScope) {
            this.implScope[controllerKeyInScope] = null;
            this.implScope = null;
        }
        // clear reference types
        this._impl = null;
        this._attr = null;
        this.tempData = null;
    },

    initialize: function(httpContext) {
        this.actions = [];
        this.httpContext = httpContext;
        //
        this.url = new mvcUrlHelper({ httpContext: this.httpContext });
        this.viewData = new mvcViewData({ httpContext: this.httpContext });
        this.tempData = new mvcTempData({ provider: mvcTempDataStore.sessionProvider });
        //
        this.resultApi = new mvcActionResultApi({ httpContext: this.httpContext, sync: false });
        this.resultApiSync = new mvcActionResultApi({ httpContext: this.httpContext, sync: true });
        this.modelApi = new mvcModelApi({ httpContext: this.httpContext });
        this.implScope = new controllerImplementationScope(this);
        //
        this.attributes = httpContext.app.attributes.resolveConfig(this.attr());
        this.attributes.parent(httpContext.routeArea.filters);
        this.attributes.add(this.implScope);
    },

    injectImpl: function(ctx) {
        var annotated = mvcInjector.annotate(this.impl());
        var params = annotated.params = [];
        if (!annotated.args || annotated.args.length === 0) { return annotated; }
        //
        var customInject = {};
        var injectionContext = ctx.toControllerInjectContext({
            inject: customInject,
            controller: this
        });
        ctx.app.emit('injectController', ctx.app, injectionContext);
        ctx.routeArea.fireEvent('onInjectController', ctx.routeArea, injectionContext);
        customInject = utils.formalObj(customInject);
        //
        var self = this;
        utils.each(annotated.args, function(i, name) {
            var lowerName = utils.formalStr(name);
            if (lowerName.charAt(0) === '$') {
                lowerName = lowerName.substr(1);
            }
            if (lowerName in customInject) {
                params.push(customInject[lowerName]);
                return;
            }
            switch(lowerName) {
                case 'req':          params.push(ctx.req); break;
                case 'res':          params.push(ctx.res); break;
                case 'context':      params.push(ctx); break;
                case 'session':      params.push(ctx.zoo.request.session); break;
                case 'query':        params.push(ctx.zoo.request.query); break;
                case 'form':         params.push(ctx.zoo.request.form); break;
                //
                case 'tempdata':     params.push(self.tempData); break;
                case 'viewdata':     params.push(self.viewData); break;
                case 'modelstate':   params.push(self.viewData.getModelState()); break;
                case 'model':        params.push(self.modelApi); break;
                case 'url':          params.push(self.url); break;
                case 'end':          params.push(self.resultApi); break;
                case 'actionResult': params.push(self.resultApiSync); break;
                //
                default:             params.push(null); break;
            }
        });
        //
        return annotated;
    },

    executeImpl: function() {
        var annotated = this.injectImpl(this.httpContext);
        if (!utils.isFunction(annotated.func)) { return; }
        annotated.func.apply(this.implScope, annotated.params);
        this.appendInlineActions(this.implScope);
        this.attributes.emitSync(this, { eventName: 'onControllerInitialized' });
    },

    appendInlineActions: function(scope) {
        if (!(scope instanceof controllerImplementationScope)) { return; }
        var proto = controllerImplementationScope.prototype;
        for (var name in scope) {
            if (!utils.hasOwn(scope, name)) { continue; }
            if (!utils.isFunction(scope[name])) { continue; }
            if (!(name in proto) || name === 'action') {
                var impl = scope[name];
                var attr = impl.attr;
                this.action(name, attr, impl);
            }
        }
    },

    action: function(name, attr, impl) {
        if (utils.isFunction(name)) {
            impl = name;
            attr = null;
            name = null;
        } else if (utils.isFunction(attr)) {
            impl = attr;
            attr = null;
        }
        // create
        var act = new mvcAction({
            _name: name,
            _attr: attr,
            _impl: impl
        });
        this.actions.push(act);
        // for chain
        return act;
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
        switch (acts.length) {
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
            message.push(utils.format('{0} [{1}] {2}', this.name(), String(this.attr() || ''), fnStr));
        });
        var methodsMsg = message.join('\n');
        return new Error(utils.format('The current request for action "{0}" on controller type "{1}" is ambiguous between the following action methods\n{2}', actionName, this.name(), methodsMsg));
    }
};

var controllerImplementationScope = function(controller) {
    this[controllerKeyInScope] = controller;
};

controllerImplementationScope.prototype = {

    constructor: controllerImplementationScope,

    action: function() { return this[controllerKeyInScope].action.apply(this[controllerKeyInScope], arguments); },

    /************ controller events interface **************/
    onControllerInitialized: function(controller) { },
    onControllerDestroy: function(controller) { },

    /************ authorization filter interface **************/
    onAuthorization: function(authorizationContext) { },

    /************ action filter interface **************/
    onActionExecuting: function(actionExecutingContext, next) { next(); },
    onActionExecuted: function(actionExecutedContext, next) { next(); },

    /************ result filter interface **************/
    onResultExecuting: function(resultExecutingContext, next) { next(); },
    onResultExecuted: function(resultExecutedContext, next) { next(); },

    /************ exception filter interface **************/
    onException: function(exceptionContext) { },
};
