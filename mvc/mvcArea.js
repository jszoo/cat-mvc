/*
* mvcArea
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.26
*/

'use strict';

var events = require('events'),
    utils = require('./utilities'),
    mvcRoutes = require('./mvcRoutes'),
    mvcControllers = require('./mvcControllers');

var mvcArea = module.exports = function(set, store) {
    utils.extend(this, set);
    if (!this.name) { throw new Error('Parameter "name" is required'); }
    //
    this.events = new events.EventEmitter();
    this.routes = new mvcRoutes({ ownerAreaName: this.name }, store);
    this.controllers = new mvcControllers({ ownerAreaName: this.name }, store);
};

var definedProcedure;
mvcArea.api = function(fn) {
    return (definedProcedure = fn);
};

mvcArea.loadSetting = function(filePath) {
    delete require.cache[filePath];
    var expo = require(filePath), ret;
    //
    if (utils.isFunction(expo)) {
        ret = expo;
    } else if (utils.isFunction(definedProcedure)) {
        ret = definedProcedure;
    } else if (utils.isObject(definedProcedure)) {
        ret = function() { utils.nudeExtend(this, definedProcedure); };
    } else {
        ret = function() { utils.nudeExtend(this, expo); };
    }
    //
    definedProcedure = null;
    return ret;
};

mvcArea.prototype = {

    name: null, path: null, viewsPath: null, viewsSharedPath: null, controllersPath: null, settingFilePath:null,

    events: null, routes: null, controllers: null,

    constructor: mvcArea, className: 'mvcArea',

    ownedRoutes: function() {
        return this.routes.all();
    },

    findController: function(controllerName) {
        return this.controllers.get(controllerName);
    },

    fireEvent: function(funcName) {
        var func = this[funcName];
        if (utils.isFunction(func)) {
            this.events.emit(funcName, this);
            func.call(this, this);
        }
        return this;
    },

    onRegister: function(area) { },

    onUnload: function(area) { }
};
