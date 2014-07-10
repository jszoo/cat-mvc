/*
* mvcTempData
* author: ronglin
* create date: 2014.7.1
*/

'use strict';

var utils = require('./utilities');

var mvcTempData = function(set) {
    utils.extend(this, set);
    this.newData = {};
    this.oldData = {};
    if (!this.provider) { throw new Error('Inner store "provider" is require.'); }
};

mvcTempData.prototype = {

    provider: null, newData: null, oldData: null,

    constructor: mvcTempData, className: 'mvcTempData',

    set: function(key, val) {
        key = utils.formalStr(key);
        this.newData[key] = val;
        return this;
    },

    get: function(key) {
        key = utils.formalStr(key);
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
            key = utils.formalStr(key);
            if (key in this.oldData && !(key in this.newData)) {
                this.newData[key] = this.oldData[key];
            }
        }
    },

    remove: function(key) {
        key = utils.formalStr(key);
        delete this.newData[key];
        delete this.oldData[key];
        return this;
    },

    exists: function(key) {
        key = utils.formalStr(key);
        return (key in this.newData || key in this.oldData);
    },

    save: function(httpContext) {
        this.provider.saveTempData(httpContext, this.newData);
    },

    load: function(httpContext) {
        this.oldData = (this.provider.loadTempData(httpContext) || {});
    }
};

module.exports = mvcTempData;
