/*
* cachingStore
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.16
*/

'use strict';

var events = require('events'),
    utils = require('zoo-utils');

var cachingStore = module.exports = function() {
    this._data = {};
    this.events = new events.EventEmitter();
};

cachingStore.prototype = {

    _data: null, events: null,

    constructor: cachingStore, className: 'cachingStore',

    get: function(region, key) {
        region = utils.formalStr(region);
        key = utils.formalStr(key);
        //
        if (arguments.length === 0) {
            return this._data;
        } else {
            var r = this._data[region];
            if (arguments.length === 1) {
                return r;
            } else {
                return r ? r[key] : r;
            }
        }
    },

    set: function(region, key, val) {
        region = utils.formalStr(region);
        key = utils.formalStr(key);
        //
        this.events.emit('set', { region: region, key: key, val: val });
        //
        if (arguments.length === 2) {
            return this._data[region] = key;
        }
        if (arguments.length === 3) {
            var r = this._data[region];
            if (!r) { r = this._data[region] = {}; }
            r[key] = val;
        }
    },

    remove: function(region, key) {
        region = utils.formalStr(region);
        key = utils.formalStr(key);
        //
        this.events.emit('remove', { region: region, key: key });
        //
        if (arguments.length === 1) {
            return delete this._data[region];
        } else {
            var r = this._data[region];
            if (r) { return delete r[key]; }
            return false;
        }
    },

    exists: function(region, key) {
        region = utils.formalStr(region);
        key = utils.formalStr(key);
        //
        if (arguments.length === 1) {
            return (region in this._data);
        } else {
            var r = this._data[region];
            return (r && key in r);
        }
    },

    clear: function(region) {
        region = utils.formalStr(region);
        //
        this.events.emit('clear', { region: region });
        //
        if (arguments.length === 0) {
            this._data = {};
            return true;
        } else {
            return delete this._data[region];
        }
    }
};
