/*
* attributeManager
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities'),
    caching = require('../caching');

var attributeManager = module.exports = function() {
    this._inner = caching.region('mvc-attribute-types-cache');
};

attributeManager.prototype = {

    _inner: null,

    constructor: attributeManager, className: 'attributeManager',

    all: function() {
        return this._inner.all();
    },

    get: function(attrName) {
        return this._inner.get(attrName);
    },

    remove: function(attrName) {
        return this._inner.remove(attrName);
    },

    register: function(attrName, attrClass) {
        if (!utils.isString(attrName)) { throw new Error('Parameter "attrName" require string type'); }
        if (!utils.isFunction(attrClass)) { throw new Error('Parameter "attrClass" require function type'); }
        if (!/[0-9a-zA-Z_-]+/.test(attrName)) { throw new Error('Parameter "attrName" invalid attribute name'); }
        this._inner.set(attrName, attrClass);
    },

    registerAll: function() {
        var self = this;
        this.register('actionName', require('./actionName'));
        this.register('requireHttps', require('./requireHttps'));
        this.register('validateInput', require('./validateInput'));
        utils.each(require('./httpMethod'), function(name) { self.register(name, this); });
    },

    resolve: function(attrName, attrSett) {
        var attrClass = this.get(attrName);
        if (attrClass) {
            return new attrClass(attrSett);
        } else {
            return null;
        }
    },

    resolveConfig: function(config) {
        var attrs = [], self = this;
        if (utils.isObject(config)) {
            utils.each(config, function(name, sett) {
                attrs.push(self.resolve(name, sett));
            });
        }
        else if (utils.isString(config)) {
            var match, re = /([0-9a-zA-Z_-]+)\s*(\([^\)]*|,|$)/g;
            while (match = re.exec(config)) {
                var name = match[1], sett = match[2];
                if (sett && sett.length > 1) {
                    sett = tryEval(sett + ')', name);
                } else {
                    sett = undefined;
                }
                attrs.push(this.resolve(name, sett));
            }
        }
        // ret
        return new attributes({
            _attrs: attrs
        });
    }
};

var tryEval = function(str, attrName) {
    var temp;
    try {
        eval("temp=" + str + ';');
    } catch(ex) {
        throw new Error('Can not resolve the parameters of attribute: "' + attrName + '"');
    }
    return temp;
};

var attributes = function(set) {
    utils.extend(this, set);
};

attributes.prototype = {

    _attrs: null,

    constructor: attributes, className: 'attributes',

    all: function() {
        return this._attrs;
    },

    get: function(eventName) {
        if (!eventName) {
            throw new Error('Parameter "eventName" is required');
        }
        var rets = [];
        utils.each(this._attrs, function(i, it) {
            if (it && utils.isFunction(it[eventName])) {
                rets.push(it);
            }
        });
        return rets;
    },

    emit: function(eventName) {
        var items = this.get(eventName), rets = [];
        if (items.length === 0) { return rets; }
        //
        var args = utils.arg2arr(arguments, 1), val, handler;
        if (args.length > 0) {
            handler = args[args.length - 1];
            if (utils.isFunction(handler)) {
                args.pop();
            } else {
                handler = null;
            }
        }
        //
        utils.each(items, function(i, it) {
            rets.push(val = it[eventName].apply(it, args));
            if (handler && handler.call(this, v) === false) {
                return false;
            }
        });
        //
        return rets;
    },

    emitAsync: function(eventName) {
        var sett = arguments[arguments.length - 1];
        if (!utils.isObject(sett)) {
            throw new Error('Setting object notfound which contains callback and an item handler is optional');
        }
        if (!utils.isFunction(sett.callback)) {
            throw new Error('Setting object can not found "callback" function');
        }
        var items = this.get(eventName), rets = [];
        if (items.length === 0) {
            sett.callback(rets);
            return;
        }
        var args = utils.arg2arr(arguments, 1); args.pop();
        var next = function() {

        };
    }
};
