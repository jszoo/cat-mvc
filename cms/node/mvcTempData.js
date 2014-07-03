/*
* mvcTempData
* author: ronglin
* create date: 2014.7.1
*/

'use strict';

var utils = require('./utilities');
var fmKey = function(key) { return utils.trim(key).toLowerCase(); };


var CONST_SessionStateKey = '__ControllerTempData';
var sessionProvider = {
    loadTempData: function(httpContext) {
        var session = httpContext.request.session;
        if (session) {
            var values = session[CONST_SessionStateKey];
            if (values) {
                delete session[CONST_SessionStateKey];
                return values;
            }
        }
    },
    saveTempData: function(httpContext, values) {
        var session = httpContext.request.session;
        if (session) {
            if (utils.propCount(values) > 0) {
                session[CONST_SessionStateKey] = values;
            } else {
                delete session[CONST_SessionStateKey];
            }
        }
    }
};


var mvcTempData = function(set) {
    utils.extend(this, set);
    this.newData = {};
    this.oldData = {};
    if (!this.provider) { this.provider = sessionProvider; }
};

mvcTempData.prototype = {

    provider: null, newData: null, oldData: null,

    constructor: mvcTempData, className: 'mvcTempData',

    set: function(key, val) {
        key = fmKey(key);
        this.newData[key] = val;
        return this;
    },

    get: function(key) {
        key = fmKey(key);
        if (key in this.newData) {
            return this.newData[key];
        } else {
            return this.oldData[key];
        }
    },

    keep: function(key) {
        if (key === undefined) {
            for (var k in this.oldData) {
                this.keep(k);
            }
        } else {
            key = fmKey(key);
            if (key in this.oldData && !(key in this.newData)) {
                this.newData[key] = this.oldData[key];
            }
        }
    },

    remove: function(key) {
        key = fmKey(key);
        delete this.newData[key];
        delete this.oldData[key];
        return this;
    },

    exists: function(key) {
        key = fmKey(key);
        return (key in this.newData || key in this.oldData);
    },

    save: function(httpContext) {
        this.provider.saveTempData(httpContext, this.newData);
    },

    load: function(httpContext) {
        this.oldData = (this.provider.loadTempData(httpContext) || {});
    }
};


mvcTempData.sessionProvider = sessionProvider;
module.exports = mvcTempData;
