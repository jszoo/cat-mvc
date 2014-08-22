/*
* mvcEnumerable
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.21
*/

'use strict';

var utils = require('zoo-utils');

var mvcEnumerable = module.exports = function(items) {
    this._inner = items || [];
    if (!utils.isArray(this._inner)) {
        throw new Error('The given items is not array type');
    }
};

mvcEnumerable.prototype = {
    
    _inner: null, _parent: null,

    constructor: mvcEnumerable,

    parent: function(p) {
        return (p === undefined) ? (this._parent) : (this._parent = p, this);
    },

    append: function(ins) {
        if (ins instanceof mvcEnumerable) {
            this._inner = this._inner.concat(ins.all());
        } else {
            this._inner.push(ins);
        }
    },

    select: function(eventName, includeParent) {
        var rets = [];
        utils.each(this._inner, function(i, it) {
            if (it && utils.isFunction(it[eventName])) {
                rets.push(it);
            }
        });
        if (includeParent && (this._parent instanceof mvcEnumerable)) {
            var ps = this._parent.select(eventName, includeParent);
            return ps.concat(rets);
        } else {
            return rets;
        }
    },

    all: function() {
        return this._inner;
    },

    add: function(obj) {
        this._inner.push(obj);
    },

    exists: function(obj) {
        var found = false;
        utils.each(this._inner, function() {
            if (this === obj) {
                found = true;
                return false;
            }
        });
        return found;
    },

    count: function() {
        return this._inner.length;
    },

    remove: function(obj) {
        var found = false, self = this;
        utils.each(this._inner, function(i) {
            if (this === obj) {
                self._inner.splice(i, 1);
                found = true;
                return false;
            }
        });
        return found;
    },

    clear: function() {
        this._inner = [];
    },

    /*
    * emitSync(param_1, param_2, ..., param_n, sett)
    * the last argument is the setting object
    * sett: {
    *   eventName: 'onXXX',
    *   includeParent: false,
    *   handler: function(att, val) { }
    * }
    */
    emitSync: function() {
        var args = utils.arg2arr(arguments), sett = args.pop();
        //
        if (!utils.isObject(sett)) {
            throw new Error('Setting object not found which requires items + eventName + callback and handler is optional');
        }
        if (!utils.isString(sett.eventName)) {
            throw new Error('Setting object can not found "eventName" string');
        }
        if (!utils.isFunction(sett.handler)) {
            sett.handler = function() { };
        }
        //
        var items = this.select(sett.eventName, sett.includeParent), rets = [], val;
        if (items.length === 0) { return rets; }
        //
        utils.each(items, function(i, it) {
            rets.push(val = it[sett.eventName].apply(it, args));
            if (sett.handler(this, val) === false) {
                return false;
            }
        });
        //
        return rets;
    },

    /*
    * emit(param_1, param_2, ..., param_n, sett)
    * the last argument is the setting object
    * sett: {
    *   eventName: 'onXXX',
    *   includeParent: false,
    *   handler: function(att, val) { }
    *   callback: function(err, vals) { }
    * }
    */
    emit: function() {
        var args = utils.arg2arr(arguments), sett = args.pop();
        //
        if (!utils.isObject(sett)) {
            throw new Error('Setting object not found which requires items + eventName + callback and handler is optional');
        }
        if (!utils.isString(sett.eventName)) {
            throw new Error('Setting object can not found "eventName" string');
        }
        if (!utils.isFunction(sett.callback)) {
            throw new Error('Setting object can not found "callback" function');
        }
        if (!utils.isFunction(sett.handler)) {
            sett.handler = function() { };
        }
        //
        var callback = utils.deferProxy(sett.callback), vals = [];
        var items = this.select(sett.eventName, sett.includeParent);
        if (items.length === 0) {
            callback(null, vals);
            return;
        }
        //
        var index = -1, item, canceled = false;
        var next = function(err, val) {
            if (index > -1) {
                vals.push(val);
                if (err) {
                    callback(err, vals);
                    return;
                }
                if (sett.handler(item, val) === false) {
                    canceled = true;
                }
            }
            if (!canceled) {
                item = items[++index];
                if (item) {
                    try {
                        item[sett.eventName].apply(item, args);
                    } catch (ex) {
                        callback(ex, vals);
                    }
                    return;
                }
            }
            callback(null, vals);
        };
        //
        args.push(next);
        next();
    }
};
