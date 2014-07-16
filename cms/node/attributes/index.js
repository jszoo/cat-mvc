/*
* manager
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities'),
    caching = require('../caching'),
    inner = caching.region('mvc-attribute-types-cache');

var tryEval = function(str, attrName) {
    var temp;
    try {
        eval("temp=" + str + ';');
    } catch(ex) {
        throw new Error('Can not resolve the parameters of attribute: "' + attrName + '"');
    }
    return temp;
};

var manager = module.exports = {

    all: function() {
        return inner.all();
    },

    get: function(attrName) {
        return inner.get(attrName);
    },

    remove: function(attrName) {
        return inner.remove(attrName);
    },

    register: function(attrName, attrClass) {
        if (!utils.isString(attrName)) { throw new Error('Parameter "attrName" require string type'); }
        if (!utils.isFunction(attrClass)) { throw new Error('Parameter "attrClass" require function type'); }
        if (!/[0-9a-zA-Z_-]+/.test(attrName)) { throw new Error('Parameter "attrName" invalid attribute name'); }
        inner.set(attrName, attrClass);
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
    }
};

manager.register('actionName', require('./actionName'));
manager.register('requireHttps', require('./requireHttps'));
utils.each(require('./httpMethod'), function(name) { manager.register(name, this); });
