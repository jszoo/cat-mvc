/*
* mvcArea
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.26
*/

'use strict';

var utils = require('zoo-utils'),
    mvcRoutes = require('./mvcRoutes'),
    mvcModelMetas = require('./mvcModelMetas'),
    mvcControllers = require('./mvcControllers');

var mvcArea = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.name) { throw new Error('Area name is required'); }
    //
    this.routes = new mvcRoutes({ ownerAreaName: this.name }, store);
    this.modelMetas = new mvcModelMetas({ ownerAreaName: this.name }, store);
    this.controllers = new mvcControllers({ ownerAreaName: this.name }, store);
};

var procedureDefined;
mvcArea.api = function(fn) {
    return (procedureDefined = fn);
};

mvcArea.loadSetting = function(filePath) {
    var ret, expo;
    try {
        require.cache[filePath] = null;
        expo = require(filePath);
    } catch (ex) {
        procedureDefined = null;
        return null;
    }
    //
    if (utils.isFunction(expo)) {
        ret = expo;
    } else if (utils.isFunction(procedureDefined)) {
        ret = procedureDefined;
    } else if (utils.isObject(procedureDefined)) {
        ret = function() { utils.nudeExtend(this, procedureDefined); };
    } else {
        ret = function() { utils.nudeExtend(this, expo); };
    }
    //
    procedureDefined = null;
    return ret;
};

mvcArea.prototype = {

    name: null, routes: null, modelMetas: null, controllers: null,

    path: null, viewsPath: null, viewsSharedPath: null, modelsPath: null, controllersPath: null, settingFilePath: null,

    constructor: mvcArea,

    ownedRoutes: function() {
        return this.routes.all();
    },

    findController: function(controllerName) {
        return this.controllers.get(controllerName);
    },

    fireEvent: function(funcName) {
        var func = this[funcName];
        if (utils.isFunction(func)) {
            var args = utils.arg2arr(arguments, 1);
            func.apply(this, args);
        }
    },

    onRegister: function(area) { },

    onUnload: function(area) { },

    onInjectController: function(area, eventArg) { }
};
