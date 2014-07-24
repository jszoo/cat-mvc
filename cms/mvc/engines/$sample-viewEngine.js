/*
* sampleViewEngine
* author: ronglin
* create date: 2014.7.24
*/

'use strict';

var utils = require('../utilities');
    sampleView  = require('./sample-view');

var sampleViewEngine = module.exports = function(set) {
    utils.extend(this, set);
};

sampleViewEngine.prototype = {

    constructor: sampleViewEngine, className: 'sampleViewEngine',

    findView: function(controllerContext, viewName) {
        return {
            view: new sampleView({}),
            viewEngine: this,
            searchedLocations: []
        };
    },

    releaseView: function(controllerContext, view) {
        if (view.destroy) {
            view.destroy();
        }
    }
};
