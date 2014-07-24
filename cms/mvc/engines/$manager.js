/*
* viewEngineManager
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var utils = require('../utilities'),
    caching = require('../caching');

var viewEngineManager = module.exports = function() {
    this._inner = caching.region('mvc-view-engines-cache');
};

viewEngineManager.prototype = {

    _inner: null,

    constructor: viewEngineManager, className: 'viewEngineManager',

    register: function(engineName, viewEngine) {
        if (!engineName) { throw new Error('Parameter "engineName" is required'); }
        if (!viewEngine) { throw new Error('Parameter "viewEngine" is required'); }
        if (!utils.isFunction(viewEngine.findView)) { throw new Error('Please implement the interface function: "findView(controllerContext, viewName)" in the viewEngine: "' + engineName + '"'); }
        if (!utils.isFunction(viewEngine.releaseView)) { throw new Error('Please implement the interface function: "releaseView(controllerContext, view)" in the viewEngine: "' + engineName + '"'); }
        return this._inner.set(engineName, viewEngine);
    },

    registerAll: function() {
        var vashViewEngine = require('./vashViewEngine');
        this.register('vash', new vashViewEngine());
        // TODO: support other view engine
    },

    findView: function(controllerContext, viewName) {
        var viewEngineResult, searchedLocations = [];
        utils.each(this._inner.all(), function() {
            viewEngineResult = this.findView(controllerContext, viewName);
            if (!viewEngineResult) {
                throw new Error('The interface function "findView" in the viewEngine require return object as: { view: viewInstance, searchedLocations: [path1, path2...] }');
            }
            viewEngineResult.viewEngine = this;
            if (viewEngineResult.view) {
                return false; // break
            } else {
                searchedLocations = searchedLocations.concat(viewEngineResult.searchedLocations);
            }
        });
        if (!viewEngineResult) {
            throw new Error('Can not find any view engine.');
        }
        if (!viewEngineResult.view) {
            viewEngineResult.searchedLocations = searchedLocations;
        }
        return viewEngineResult;
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
