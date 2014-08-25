/*
* attributeManager
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.12
*/

'use strict';

var utils = require('zoo-utils'),
    caching = require('zoo-cache'),
    mvcEnumerable = require('../mvcEnumerable');

var attributeManager = module.exports = function(store) {
    this._inner = caching.region('mvc-attribute-types-cache', store);
};

attributeManager.sealedKey = function(str) {
    return str + '(category)'; // a name which is invalid for register api
};

attributeManager.prototype = {

    _inner: null,

    constructor: attributeManager,

    all: function() {
        return this._inner.all();
    },

    get: function(attrName, category) {
        if (!category) {
            return this._inner.get(attrName);
        } else {
            var classes = this._inner.get(attributeManager.sealedKey(attrName));
            return classes instanceof utils.dictionary ? classes.get(category) : null;
        }
    },

    exists: function(attrName, category) {
        if (!category) {
            return this._inner.exists(attrName);
        } else {
            var classes = this._inner.get(attributeManager.sealedKey(attrName));
            return classes instanceof utils.dictionary ? classes.exists(category) : false;
        }
    },

    remove: function(attrName, category) {
        if (!category) {
            return this._inner.remove(attrName);
        } else {
            var classes = this._inner.get(attributeManager.sealedKey(attrName));
            return classes instanceof utils.dictionary ? classes.remove(category) : true;
        }
    },

    count: function() {
        return this._inner.count();
    },

    clear: function() {
        this._inner.clear();
        return this;
    },

    set: function(attrName, attrClass, category) {
        if (!utils.isString(attrName)) { throw new Error(utils.format('Attribute name requires string type but got {0} type', utils.type(attrName))); }
        if (!attrName) { throw new Error('Attribute name is required'); }
        if (!/^[0-9a-zA-Z_-]+$/.test(attrName)) { throw new Error(utils.format('Attribute name "{0}" is invalid', attrName)); }
        if (this.exists(attrName)) { throw new Error(utils.format('Attribute "{0}" already exists', attrName)); }
        if (!utils.isFunction(attrClass)) { throw new Error(utils.format('Attribute "{0}" requires function type class but got {1} type', attrName, utils.type(attrClass))); }
        //
        if (!category) {
            this._inner.set(attrName, attrClass);
        } else {
            attrName = attributeManager.sealedKey(attrName);
            var classes = this._inner.get(attrName);
            if (!classes) { classes = new utils.dictionary(true); }
            classes.set(category, attrClass);
            this._inner.set(attrName, classes);
        }
        return this;
    },

    register: function(attrName, attrClass, category) {
        this.set(attrName, attrClass, category);
    },

    discover: function() {
        var self = this;
        this.register('actionName', require('./actionNameAttribute'));
        this.register('nonAction', require('./nonActionAttribute'));
        this.register('handleError', require('./handleErrorAttribute'));
        this.register('requireHttps', require('./requireHttpsAttribute'));
        this.register('validateInput', require('./validateInputAttribute'));
        this.register('acceptVerbs', require('./acceptVerbsAttribute'));
        utils.each(require('./httpMethodAttribute'), function(name) { self.register(name, this); });
    },

    resolve: function(attrName, attrSett) {
        var attrs = [];
        var attrClass = this.get(attrName);
        if (attrClass) {
            attrs.push(new attrClass(attrSett));
        }
        var attrClasses = this.get(attributeManager.sealedKey(attrName));
        if (attrClasses instanceof utils.dictionary) {
            var classes = attrClasses.all();
            for(var key in classes) {
                attrs.push(new classes[key](attrSett));
            }
        }
        return attrs;
    },

    resolveConfig: function(config) {
        var attrs = [], self = this;
        if (utils.isObject(config)) {
            utils.each(config, function(name, sett) {
                attrs = attrs.concat(self.resolve(name, sett));
            });
        }
        else if (utils.isString(config)) {
            var match, re = /([0-9a-zA-Z_-]+)\s*(\([^\)]*|,|$)/g;
            while (match = re.exec(config)) {
                var name = match[1], sett = match[2];
                if (sett && sett.length > 1) {
                    sett = tryEval(sett.substr(1), name);
                } else {
                    sett = undefined;
                }
                attrs = attrs.concat(this.resolve(name, sett));
            }
        }
        // ret
        return new mvcEnumerable(attrs);
    }
};

var tryEval = function(str, attrName) {
    var temp;
    try {
        eval('temp=' + str + ';');
    } catch (ex) {
        try {
            // try as string when first failure
            str = str.replace(/"/g, '\\"'); // wrap quotes
            str = str.replace(/^\s+|\s+$/g, ''); // trim whitespaces
            eval('temp="' + str + '";');
        } catch (ex) {
            throw new Error(utils.format('Can not resolve the parameters of attribute "{0}"', attrName));
        }
    }
    return temp;
};
