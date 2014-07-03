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
        return {};
    },
    saveTempData: function(httpContext, values) {
        var session = httpContext.request.session;
        if (session) {
            if (values && utils.propCount(values) > 0) {
                session[CONST_SessionStateKey] = values;
                return true;
            } else {
                delete session[CONST_SessionStateKey];
            }
        }
        return false;
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
        this.oldData = this.provider.loadTempData(httpContext);
    }
};


mvcTempData.sessionProvider = sessionProvider;
module.exports = mvcTempData;
