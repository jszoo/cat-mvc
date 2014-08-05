/*
* viewEngineManager
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.26
*/

'use strict';

var utils = require('zoo-utils'),
    caching = require('../caching');

var viewEngineManager = module.exports = function(store) {
    this._inner = caching.region('mvc-view-engines-cache', store);
};

viewEngineManager.prototype = {

    _inner: null,

    constructor: viewEngineManager, className: 'viewEngineManager',

    register: function(engineName, viewEngine) {
        if (!engineName) { throw new Error('Parameter "engineName" is required'); }
        if (!viewEngine) { throw new Error('Parameter "viewEngine" is required'); }
        if (!utils.isFunction(viewEngine.findView)) { throw new Error('Please implement the interface function: "findView(controllerContext, viewName, callback)" in the viewEngine: "' + engineName + '"'); }
        if (!utils.isFunction(viewEngine.releaseView)) { throw new Error('Please implement the interface function: "releaseView(controllerContext, view)" in the viewEngine: "' + engineName + '"'); }
        return this._inner.set(engineName, viewEngine);
    },

    registerAll: function() {
        // vash
        var vashViewEngine = require('./vashViewEngine');
        this.register('vash', new vashViewEngine());
        // ejs
        var ejsViewEngine = require('./ejsViewEngine');
        this.register('ejs', new ejsViewEngine());
        // more engines...
    },

    findView: function(controllerContext, viewName, callback) {
        callback = utils.deferProxy(callback);
        var viewEngineResult, searchedLocations = [], index = 0;
        var all = this._inner.all(), allKeys = Object.keys(all);
        //
        var done = function() {
            if (!viewEngineResult) {
                callback(new Error('Can not find any view engine.'));
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
            var engine = all[allKeys[index++]];
            engine.findView(controllerContext, viewName, function(err, ret) {
                if (err) {
                    callback(err);
                    return;
                }
                if (!ret) {
                    callback(new Error('The interface function "findView" in the viewEngine require return object as: { view: viewInstance, searchedLocations: [] }'));
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
    }
};
