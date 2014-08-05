/*
* mvcHandlerRouter
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.11
*/

'use strict';

var parse = require('url').parse,
    utils = require('zoo-utils');

var mvcHandlerRouter = module.exports = function(set) {
    utils.extend(this, set);
    this._handlers = [];
    this._lastHandlers = [];
};

mvcHandlerRouter.prototype = {

    _handlers: null, _lastHandlers: null,

    constructor: mvcHandlerRouter, className: 'mvcHandlerRouter',

    /*
    * register(handler)
    * register(routeExp, handler)
    * register(routeExp, name, handler)
    */
    register: function(routeExp, name, handler) {
        if (utils.isFunction(routeExp)) {
            handler = routeExp;
            routeExp = null;
            name = null;
        }
        if (utils.isFunction(name)) {
            handler = name;
            name = null;
        }
        if (!utils.isFunction(handler)) {
            var typeName = utils.type(handler);
            throw new Error('Parameter "handler" requires callback function but got a ' + typeName);
        } else {
            this._handlers.push({
                name: name, handler: handler,
                routeExp: (routeExp || '/') // default routeExp to '/'
            });
        }
    },

    /*
    * registerAtLast(handler)
    * registerAtLast(routeExp, handler)
    * registerAtLast(routeExp, name, handler)
    */
    registerAtLast: function() {
        this.register.apply({ _handlers: this._lastHandlers }, arguments);
    },

    /*
    * unregister(name)
    */
    unregister: function(name) {
        var self = this, found = false;
        if (!name) { return found; }
        utils.each(this._handlers, function(i) {
            if (name === this.name) {
                self._handlers.splice(i, 1);
                return (found = true, false);
            }
        });
        if (!found) {
            utils.each(this._lastHandlers, function(i) {
                if (name === this.name) {
                    self._lastHandlers.splice(i, 1);
                    return (found = true, false);
                }
            });
        }
        return found;
    },

    /*
    * execute the handlers in the format as:
    *   function(req, [args], next, error) { }
    *   function(req, res, next, error) { next(error); }
    */
    execute: function(req) {
        var args = utils.arg2arr(arguments), index = -1;
        var allHandlers = this._handlers.concat(this._lastHandlers);
        var next = function(error) {
            var item = allHandlers[++index];
            if (item) {
                var matched = false;
                if (utils.isString(item.routeExp)) {
                    matched = req.url.indexOf(item.routeExp) === 0;
                } else if (utils.type(item.routeExp) === 'regexp') {
                    matched = item.routeExp.test(parse(req.url).pathname);
                }
                //
                if (matched) {
                    var clone = args.concat();
                    if (error) { clone.push(error); }
                    item.handler.apply(null, clone);
                }
            }
        };
        args.push(next);
        next();
    }
};
