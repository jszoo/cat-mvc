/*
* mvcTempData
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.1
*/

'use strict';

var utils = require('zoo-utils');

var mvcTempData = module.exports = function(set) {
    utils.extend(this, set);
    this.newData = {};
    this.oldData = {};
    if (!this.provider) {
        throw new Error('Inner store "provider" is require.');
    }
};

mvcTempData.prototype = {

    provider: null, newData: null, oldData: null,

    constructor: mvcTempData,

    set: function(key, value) {
        key = utils.formalStr(key);
        value = (value === undefined) ? null : value;
        this.newData[key] = value;
        return this;
    },

    get: function(key) {
        key = utils.formalStr(key);
        if (this.newData[key] !== undefined) {
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
            if (this.newData[key] === undefined && this.oldData[key] !== undefined) {
                this.newData[key] = this.oldData[key];
            }
        }
        return this;
    },

    remove: function(key) {
        key = utils.formalStr(key);
        this.newData[key] = undefined;
        this.oldData[key] = undefined;
        return this;
    },

    exists: function(key) {
        key = utils.formalStr(key);
        return (this.newData[key] !== undefined || this.oldData[key] !== undefined);
    },

    save: function(httpContext) {
        this.provider.saveTempData(httpContext, this.newData);
        return this;
    },

    load: function(httpContext) {
        this.oldData = (this.provider.loadTempData(httpContext) || {});
        return this;
    }
};
