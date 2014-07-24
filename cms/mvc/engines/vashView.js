/*
* vashView
* author: ronglin
* create date: 2014.7.24
*/

'use strict';

var utils = require('../utilities'),
    vash = require('./vash');

var vashView = module.exports = function(set) {
    utils.extend(this, set);
};

vashView.prototype = {
    
    filePath: null, findView: null,

    constructor: vashView, className: 'vashView',

    render: function(viewContext, callback) {
        callback = utils.deferProxy(callback);
        var data = {
            model: viewContext.viewData,
            url: viewContext.controller.url,
            __RULEE_findView: this.findView
        };
        vash(this.filePath, data, function(err, str) {
            callback(err, str);
        });
    },

    destroy: function() {
        this.findView = null;
    }
};
