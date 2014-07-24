/*
* ejsViewEngine
* author: ronglin
* create date: 2014.7.24
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    utils = require('../utilities'),
    ejsView = require('./ejsView');

var ejsViewEngine = module.exports = function(set) {
    utils.extend(this, set);
};

ejsViewEngine.prototype = {

    extname: '.ejs',

    constructor: ejsViewEngine, className: 'ejsViewEngine',

    findView: function(controllerContext, viewName, callback) {
        var error = null;
        var view = null; // view = new ejsView({});
        callback(error, {
            view: view,
            searchedLocations: []
        });
    },

    releaseView: function(controllerContext, view) {
    }
};
