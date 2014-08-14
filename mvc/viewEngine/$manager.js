/*
* viewEngineManager
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.26
*/

'use strict';

var utils = require('zoo-utils'),
    caching = require('zoo-cache');

var viewEngineManager = module.exports = function(store) {
    this._inner = caching.region('mvc-view-engines-cache', store);
};

viewEngineManager.prototype = {

    _inner: null,

    constructor: viewEngineManager,

    all: function() {
        return this._inner.all();
    },

    get: function(engineName) {
        return this._inner.get(engineName);
    },

    exists: function(engineName) {
        return this._inner.exists(engineName);
    },

    remove: function(engineName) {
        return this._inner.remove(engineName);
    },

    clear: function() {
        return this._inner.clear();
    },

    register: function(engineName, viewEngine) {
        if (!engineName) { throw new Error('View engine name is required'); }
        if (!viewEngine) { throw new Error('View engine object is required'); }
        if (!utils.isFunction(viewEngine.findView)) { throw new utils.Error('Please implement the interface function "findView(controllerContext, viewName, callback)" in the view engine "{0}"', engineName); }
        if (!utils.isFunction(viewEngine.releaseView)) { throw new utils.Error('Please implement the interface function "releaseView(controllerContext, view)" in the view engine "{0}"', engineName); }
        if (this.exists(engineName)) { throw new utils.Error('View engine "{0}" already exists', engineName); }
        return this._inner.set(engineName, viewEngine);
    },

    registerAll: function() {
        this.register('vash', require('./vashViewEngine'));
        this.register('ejs', require('./ejsViewEngine'));
        // more engines...
    },

    findView: function(controllerContext, viewName, callback) {
        callback = utils.deferProxy(callback);
        var viewEngineResult, searchedLocations = [], index = 0;
        var all = this._inner.all(), allKeys = Object.keys(all);
        //
        var done = function() {
            if (!viewEngineResult) {
                callback(new Error('Can not find any view engine'));
            } else {
                viewEngineResult.searchedLocations = searchedLocations;
                callback(null, viewEngineResult);
            }
        };
        //
        var next = function() {
            if (index >= allKeys.length) {
                done();
                return;
            }
            var engineName = allKeys[index++];
            var engine = all[engineName];
            engine.findView(controllerContext, viewName, function(err, ret) {
                if (err) {
                    callback(err);
                    return;
                }
                if (!ret) {
                    callback(new utils.Error('The interface function "findView" in the "{0}"" view engine requires return object as "{ view: viewInstance, searchedLocations: [] }"', engineName));
                    return;
                }
                viewEngineResult = ret;
                viewEngineResult.viewEngine = engine;
                searchedLocations = searchedLocations.concat(viewEngineResult.searchedLocations);
                if (viewEngineResult.view) {
                    done();
                } else {
                    next();
                }
            });
        };
        next();
    }
};
