/*
* mvcArea
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('./utilities'),
    mvcRoutes = require('./mvcRoutes'),
    mvcControllers = require('./mvcControllers');


var mvcArea = function(set) {
    utils.extend(this, set);
    if (!this.name) { throw new Error('name is required'); }
    //
    this.extensions = {};
    this.routes = new mvcRoutes({ ownerAreaName: this.name });
    this.controllers = new mvcControllers({ ownerAreaName: this.name });
};

mvcArea.prototype = {

    name: null, path: null,

    controllers: null, routes: null, extensions: null,

    constructor: mvcArea, className: 'mvcArea',

    loadExtension: function(filePath) {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            this.extensions[filePath.toLowerCase()] = require(filePath);
        }
        return this;
    },

    unloadExtension: function(filePath) {
        return (delete this.extensions[filePath.toLowerCase()], this);
    },

    clearExtensions: function() {
        return (this.extensions = {}, this);
    },

    fireExtension: function(funcName) {
        var self = this;
        utils.each(this.extensions, function(k, ext) {
            if (ext && utils.isFunction(ext[funcName])) {
                ext[funcName](self);
            }
        });
        return this;
    }
};

module.exports = mvcArea;
