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
    mvcHelperUrl = require('./mvcHelperUrl'),
    mvcViewData = require('./mvcViewData'),
    mvcTempData = require('./mvcTempData'),
    mvcTempDataStore = require('./mvcTempDataStore'),
    mvcActionResultApi = require('./mvcActionResultApi');

var controllersDefined, controllerInject = {},
    controllerKeyInScope = 'dont_use_me(random:' + utils.unique(8) + ')';

var mvcController = module.exports = function(set) {
    utils.extend(this, set);
};

mvcController.api = function() {
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
    if (controllersDefined) {
        controllersDefined.push(ret);
    }
    return ret;
};

mvcController.api.inject = function(name, value) {
    var nt = utils.type(name);
    if (value === undefined && nt === 'object') {
        utils.each(name, function(n, v) {
            mvcController.api.inject(n, v);
        });
    }
    else if (nt === 'string') {
        name = utils.formalStr(name);
        if (value === undefined) {
            return controllerInject[name];
        } else {
            controllerInject[name] = value;
        }
    }
    else {
        throw new Error('Invalid controller inject parameters');
    }
};

mvcController.api.removeInject = function(name) {
    name = utils.formalStr(name);
    return (delete controllerInject[name]);
};

mvcController.loadfile = function(filePath) {
    var ret, expo; controllersDefined = [];
    try {
        delete require.cache[filePath];
        expo = require(filePath);
    } catch (ex) {
        controllersDefined = null;
        return null;
    }
    //
    if (expo.className === 'mvcController') {
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
        this.url = new mvcHelperUrl({ httpContext: this.httpContext });
        this.viewData = new mvcViewData({ httpContext: this.httpContext });
        this.tempData = new mvcTempData({ provider: mvcTempDataStore.sessionProvider });
        //
        this.resultApi = new mvcActionResultApi({ httpContext: this.httpContext, sync: false });
        this.implScope = new controllerImplementationScope(this);
        //
        this.attributes = httpContext.app.attributes.resolveConfig(this.attr());
        this.attributes.append(this.implScope);
    },

    injectImpl: function(ctx) {
        var annotated = mvcInjector.annotate(this.impl());
        var params = annotated.params = [];
        if (!annotated.args || annotated.args.length === 0) { return annotated; }
        //
        var self = this;
        utils.each(annotated.args, function(i, name) {
            var lowerName = utils.formalStr(name);
            if (lowerName.charAt(0) === '$') {
                lowerName = lowerName.substr(1);
            }
            if (controllerInject && lowerName in controllerInject) {
                params.push(controllerInject[lowerName]);
                return;
            }
            switch(lowerName) {
                case 'ctx':      params.push(ctx); break;
                case 'req':      params.push(ctx.request); break;
                case 'res':      params.push(ctx.response); break;
                case 'context':  params.push(ctx); break;
                case 'request':  params.push(ctx.request); break;
                case 'response': params.push(ctx.response); break;
                case 'session':  params.push(ctx.zoo.request.session); break;
                case 'query':    params.push(ctx.zoo.request.query); break;
                case 'form':     params.push(ctx.zoo.request.form); break;
                //
                case 'tempdata': params.push(self.tempData); break;
                case 'viewdata': params.push(self.viewData); break;
                case 'end':      params.push(self.resultApi); break;
                case 'url':      params.push(self.url); break;
                //
                default:         params.push(null); break;
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
                var impl = scope[name], attr = impl.attr;
                this.actions.push(new mvcAction({
                    _name: name,
                    _attr: attr,
                    _impl: impl
                }));
            }
        }
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
        return new Error(utils.format('The current request for action "{0}" on controller type "{1}" is ambiguous between the following action methods:\n{2}', actionName, this.name(), message.join('\n')));
    }
};

var controllerImplementationScope = function(controller) {
    this[controllerKeyInScope] = controller;
};

controllerImplementationScope.prototype = {

    constructor: controllerImplementationScope, className: 'controllerImplementationScope',

    action: function() { return this[controllerKeyInScope].action.apply(this[controllerKeyInScope], arguments); },

    /************ controller events **************/
    onControllerInitialized: function(controller) { },
    onControllerDestroy: function(controller) { },

    /************ authorize event **************/
    onAuthorization: function(authorizationContext) { },

    /************ action filter events **************/
    onActionExecuting: function(actionExecutingContext, next) { next(); },
    onActionExecuted: function(actionExecutedContext, next) { next(); },
    onResultExecuting: function(resultExecutingContext, next) { next(); },
    onResultExecuted: function(resultExecutedContext, next) { next(); },

    /************ exception event **************/
    onException: function(exceptionContext) { }
};
