/*
* mvcHandlerRouter
* author: ronglin
* create date: 2014.7.11
*/

'use strict';

var parse = require('url').parse,
    utils = require('./utilities');

var mvcHandlerRouter = function(set) {
    utils.extend(this, set);
    this._handlers = [];
    this._lastHandlers = [];
};

mvcHandlerRouter.prototype = {

    _handlers: null, _lastHandlers: null,

    constructor: mvcHandlerRouter, className: 'mvcHandlerRouter',

    /*
    * handle(func)
    * handle(routeExp, func)
    * handle(name, routeExp, func)
    */
    handle: function(name, routeExp, func) {
        if (utils.isFunction(name)) {
            func = name;
            routeExp = null;
            name = null;
        }
        if (utils.isFunction(routeExp)) {
            func = routeExp;
            routeExp = name;
            name = null;
        }
        if (!utils.isFunction(func)) {
            var funcType = utils.type(func);
            throw new Error('Parameter "func" requires callback function but got a ' + funcType);
        } else {
            this._handlers.push({
                name: name, func: func,
                routeExp: (routeExp || '/') // default routeExp to '/'
            });
        }
    },

    lastHandle: function(name, routeExp, func) {
        this.handle.call({ _handlers: this._lastHandlers }, name, routeExp, func);
    },

    unhandle: function(name) {
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
            var handler = allHandlers[++index];
            if (handler) {
                var matched = false;
                if (utils.isString(handler.routeExp)) {
                    matched = req.url.indexOf(handler.routeExp) === 0;
                } else if(utils.type(handler.routeExp) === 'regexp') {
                    matched = handler.routeExp.test(parse(req.url).pathname);
                }
                //
                if (matched) {
                    var clone = args.concat();
                    if (error) { clone.push(error); }
                    handler.func.apply(null, clone);
                }
            }
        };
        args.push(next);
        next();
    }
};

module.exports = mvcHandlerRouter;
