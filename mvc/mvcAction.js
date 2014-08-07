/*
* mvcAction
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.24
*/

'use strict';

var utils = require('zoo-utils'),
    mvcModel = require('./mvcModel'),
    injector = require('./mvcInjector'),
    actionResult = require('./mvcActionResult'),
    mvcActionResultApi = require('./mvcActionResultApi');

var mvcAction = module.exports = function(set) {
    utils.extend(this, set);
};

mvcAction.prototype = {

    _name: null, _attr: null, _impl: null,

    controller: null, controllerContext: null, attributes: null, implScope: null,

    constructor: mvcAction, className: 'mvcAction',

    name: function(p) { return (p === undefined) ? (this._name) : (this._name = p, this); },
    attr: function(p) { return (p === undefined) ? (this._attr) : (this._attr = p, this); },
    impl: function(p) { return (p === undefined) ? (this._impl) : (this._impl = p, this); },

    destroy: function() {
        if (this.controllerContext) {
            this.controllerContext.destroy();
            this.controllerContext = null;
        }
        // clear reference types
        this._impl = null;
        this._attr = null;
        this.controller = null;
        this.attributes = null;
        this.implScope = null;
    },

    initialize: function(controller) {
        if (this.controller) { return; } // already initialized
        this.controller = controller;
        this.controllerContext = controller.httpContext.toControllerContext(controller);
        this.attributes = controller.httpContext.app.attributes.resolveConfig(this.attr());
        this.attributes.parent(controller.attributes);
    },

    injectImpl: function(ctx) {
        var annotated = ctx.items['action_impl_annotated'];
        if (annotated) { return annotated; }
        //
        annotated = injector.annotate(this.impl());
        var params = annotated.params = [];
        params.matchNum = 0;
        //
        if (annotated.args && annotated.args.length > 0) {
            //
            var modelAttrs = this.attributes.filter('getModel');
            var findAttr = function() { }, routeAreaName, rootAreaName;
            if (modelAttrs.length) {
                routeAreaName = ctx.routeArea.name;
                rootAreaName = ctx.app.areas.rootArea().name;
                findAttr = function(paramName, areaName) {
                    var result;
                    for (var att, i = 0; i < modelAttrs.length; i++) {
                        att = modelAttrs[i];
                        if (att.paramName.toLowerCase() === paramName &&
                            att.getModel().ownerAreaName === areaName) {
                            result = att;
                            break;
                        }
                    }
                    if (result) {
                        return result;
                    } else if (areaName !== rootAreaName) {
                        return findAttr(paramName, rootAreaName);
                    } else {
                        return null;
                    }
                };
            }
            //
            var namesDict = {};
            utils.each(annotated.args, function(i, name) {
                namesDict[name.toLowerCase()] = true;
            });
            //
            utils.each(annotated.args, function(i, name) {
                var lowerName = name.toLowerCase();
                if (lowerName.charAt(0) === '$') {
                    lowerName = lowerName.substr(1);
                }
                //
                var attr = findAttr(lowerName, routeAreaName), val;
                if (attr) {
                    val = attr.getModel().resolveParam(ctx, lowerName, namesDict);
                } else {
                    val = mvcModel.resolveParamDefault(ctx, lowerName, namesDict);
                }
                //
                if (val !== undefined) {
                    params.matchNum++;
                }
                //
                params.push(val || null);
            });
        }
        //
        return (ctx.items['action_impl_annotated'] = annotated);
    },

    isValidName: function(name) {
        var valid = false;
        this.attributes.emitSync(this.controllerContext, name, {
            eventName: 'isValidActionName',
            handler: function(att, val) {
                // any one valid then break
                if (val) {
                    valid = true;
                    return false;
                }
            }
        });
        if (valid) {
            return { 'attr': valid };
        } else {
            return { 'deft': utils.tryLowerEqual(this.name(), name) };
        }
    },

    isValidRequest: function() {
        var valid = 1;
        this.attributes.emitSync(this.controllerContext, {
            eventName: 'isValidActionRequest',
            handler: function(att, val) {
                // all are valid
                valid = !!(valid && val);
            }
        });
        if (valid === 1) {
            return { 'deft': true };
        } else {
            return { 'attr': valid };
        }
    },

    onAuthorization: function() {
        var context = this.controllerContext.toAuthorizationContext({
            result: undefined
        });
        this.attributes.emitSync(context, {
            eventName: 'onAuthorization',
            includeParent: true,
            handler: function() {
                if (context.result !== undefined) {
                    return false;
                }
            }
        });
        return context;
    },

    onException: function(ex) {
        var context = this.controllerContext.toExceptionContext({
            exception: ex,
            exceptionHandled: false,
            result: undefined
        });
        this.attributes.emitSync(context, {
            eventName: 'onException',
            includeParent: true,
            handler: function() {
                if (context.exceptionHandled) {
                    return false;
                }
            }
        });
        return context;
    },

    onActionExecuting: function(annotated, callback) {
        var context = this.controllerContext.toActionExecutingContext({
            parameters: annotated,
            result: undefined
        });
        this.attributes.emit(context, {
            eventName: 'onActionExecuting',
            includeParent: true,
            handler: function() {
                if (context.result !== undefined) {
                    return false;
                }
            },
            callback: function(err) {
                callback(context, err);
            }
        });
    },

    onActionExecuted: function(result, callback) {
        var context = this.controllerContext.toActionExecutedContext({
            // canceled: false,
            // exception: null,
            // exceptionhandled: false,
            result: result
        });
        this.attributes.emit(context, {
            eventName: 'onActionExecuted',
            includeParent: true,
            handler: function() { },
            callback: function(err) {
                callback(context, err);
            }
        });
    },

    onResultExecuting: function(result, callback) {
        var context = this.controllerContext.toResultExecutingContext({
            result: result,
            cancel: false
        });
        this.attributes.emit(context, {
            eventName: 'onResultExecuting',
            includeParent: true,
            handler: function() { },
            callback: function(err) {
                callback(context, err);
            }
        });
    },

    onResultExecuted: function(result, callback) {
        var context = this.controllerContext.toResultExecutedContext({
            result: result
        });
        this.attributes.emit(context, {
            eventName: 'onResultExecuted',
            includeParent: true,
            handler: function() { },
            callback: function(err) {
                callback(context, err);
            }
        });
    },

    checkActionResult: function(ret) {
        if (ret === null) {
            ret = new actionResult.emptyResult();
        }
        if (!utils.isFunction(ret.executeResult)) {
            ret = new actionResult.contentResult({
                content: String(ret)
            });
        }
        return ret;
    },

    executeImpl: function(callback) {
        var self = this, contexts = [];
        this.controller.tempData.load(this.controllerContext);

        //
        var finish = function(err) {
            utils.each(contexts, function() {
                this.destroy();
            });
            self.controller.tempData.save(self.controllerContext);
            callback(err);
        };

        //
        var resulted = function(ret) {
            try {
                self.onResultExecuted(ret, function(ctx, err) {
                    contexts.push(ctx);
                    if (err) {
                        exception(err);
                    } else {
                        finish();
                    }
                })
            } catch (ex) {
                exception(ex);
            }
        };

        //
        var _result = function(ret) {
            try {
                ret.executeResult(self.controllerContext, function(err) {
                    if (err) {
                        exception(err);
                    } else {
                        resulted(ret);
                    }
                });
            } catch (ex) {
                exception(ex);
            }
        };

        //
        var resulting = function(ret) {
            ret = self.checkActionResult(ret);
            try {
                self.onResultExecuting(ret, function(ctx, err) {
                    contexts.push(ctx);
                    if (err) {
                        exception(err);
                    } else {
                        _result(ret);
                    }
                });
            } catch (ex) {
                exception(ex);
            }
        };

        //
        var exception = function(err) {
            try {
                var ctx = self.onException(err);
                contexts.push(ctx);
                if (ctx.exceptionHandled) {
                    resulting(ctx.result);
                } else {
                    finish(err);
                }
            } catch (ex) {
                finish(ex);
            }
        };

        //
        var executed = function(ret) {
            try {
                self.onActionExecuted(ret, function(ctx, err) {
                    contexts.push(ctx);
                    if (err) {
                        exception(err);
                    } else {
                        resulting(ctx.result);
                    }
                });
            } catch (ex) {
                exception(ex);
            }
        };

        //
        var execute = function(annotated) {
            try {
                self.controller.resultApi.callback = executed;
                self.implScope = new actionImplementationScope(self.controller);
                var ret = annotated.func.apply(self.implScope, annotated.params);
                if (ret !== undefined) {
                    executed(ret);
                }
            } catch (ex) {
                exception(ex);
            }
        };

        //
        var executing = function(annotated) {
            try {
                self.onActionExecuting(annotated, function(ctx, err) {
                    contexts.push(ctx);
                    if (err) {
                        exception(err);
                    } else if (ctx.result !== undefined) {
                        executed(ctx.result);
                    } else {
                        execute(annotated);
                    }
                });
            } catch (ex) {
                exception(ex);
            }
        };

        //
        var validate = function() {
            try {
                if (self.controller.validateRequest) {
                    return true;
                } else {
                    return true;
                }
            } catch (ex) {
                exception(ex);
            }
        };

        //
        var authorize = function() {
            try {
                var ctx = self.onAuthorization();
                contexts.push(ctx);
                if (ctx.result !== undefined) {
                    resulting(ctx.result);
                } else {
                    return true;
                }
            } catch (ex) {
                exception(ex);
            }
        };

        // start
        if (authorize() && validate()) {
            var annotated = this.injectImpl(this.controllerContext);
            if (utils.isFunction(annotated.func)) {
                executing(annotated);
            } else {
                throw new Error('Implementation not found, controller:"' + this.controller.name() + '", action: "' + this.name() + '"');
            }
        }
    }
};

var actionImplementationScope = function(controller) {
    var self = this, resultApiSync = new mvcActionResultApi({ httpContext: controller.httpContext, sync: true });
    utils.each(resultApiSync, function(name, func) {
        if (utils.isFunction(func) && !self[name]) {
            self[name] = function() {
                var args = utils.arg2arr(arguments);
                return resultApiSync[name].apply(resultApiSync, args);
            };
        }
    });
};

actionImplementationScope.prototype = {
    constructor: actionImplementationScope, className: 'actionImplementationScope'
};
