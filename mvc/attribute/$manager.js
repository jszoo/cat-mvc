/*
* attributeManager
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.12
*/

'use strict';

var utils = require('zoo-utils'),
    caching = require('zoo-cache');

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
        return this._inner.clear();
    },

    register: function(attrName, attrClass, category) {
        if (!utils.isString(attrName)) { throw new utils.Error('Attribute name requires string type but got {0} type', utils.type(attrName)); }
        if (!utils.isFunction(attrClass)) { throw new utils.Error('Attribute class requires function type but got {0} type', utils.type(attrClass)); }
        if (!/[0-9a-zA-Z_-]+/.test(attrName)) { throw new utils.Error('Attribute name "{0}" is invalid', attrName); }
        if (this.exists(attrName)) { throw new utils.Error('Attribute "{0}" already exists', attrName); }
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
    },

    registerAll: function() {
        var self = this;
        this.register('actionName', require('./actionNameAttribute'));
        this.register('handleError', require('./handleErrorAttribute'));
        this.register('requireHttps', require('./requireHttpsAttribute'));
        this.register('validateInput', require('./validateInputAttribute'));
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
        return new attributes({
            _config: config,
            _attrs: attrs
        });
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
            throw new utils.Error('Can not resolve the parameters of attribute "{0}"', attrName);
        }
    }
    return temp;
};

var attributes = function(set) {
    utils.extend(this, set);
};

attributes.prototype = {

    _config: null, _attrs: null, _parent: null,

    constructor: attributes,

    all: function() {
        return this._attrs;
    },

    append: function(ins) {
        if (ins instanceof attributes) {
            this._attrs = this._attrs.concat(ins.all());
        } else {
            this._attrs.push(ins);
        }
    },

    parent: function(p) {
        return (p === undefined) ? (this._parent) : (this._parent = p, this);
    },

    filter: function(eventName, includeParent) {
        var rets = [];
        utils.each(this._attrs, function(i, it) {
            if (it && utils.isFunction(it[eventName])) {
                rets.push(it);
            }
        });
        if (includeParent && (this._parent instanceof attributes)) {
            var ps = this._parent.filter(eventName, includeParent);
            return rets.concat(ps);
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
        var items = this.filter(sett.eventName, sett.includeParent), rets = [], val;
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
        var items = this.filter(sett.eventName, sett.includeParent);
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
