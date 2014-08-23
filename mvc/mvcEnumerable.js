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
        throw new Error(utils.format('The given items is required array type but got {0} type', utils.type(this._inner)));
    }
};

mvcEnumerable.prototype = {
    
    _inner: null, _parent: null,

    constructor: mvcEnumerable,

    all: function() {
        return this._inner;
    },

    add: function(obj) {
        this._inner.push(obj);
        return this;
    },

    addRange: function(items) {
        if (items instanceof mvcEnumerable) {
            this.addRange(items.all());
        } else if (utils.isArray(items)) {
            this._inner = this._inner.concat(items);
        } else {
            throw new Error('Range value must be array type');
        }
        return this;
    },

    insertAt: function(index, obj) {
        this._inner.splice(index, 0, obj);
        return this;
    },

    removeAt: function(index) {
        this._inner.splice(index, 1);
        return this;
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

    clear: function() {
        this._inner = [];
        return this;
    },

    /*************************************************************************/

    parent: function(p) {
        return (p === undefined) ? (this._parent) : (this._parent = p, this);
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
