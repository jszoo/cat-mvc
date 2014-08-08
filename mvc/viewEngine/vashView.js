/*
* vashView
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.24
*/

'use strict';

var utils = require('zoo-utils'),
    vash = require('./vash');

var vashView = module.exports = function(set) {
    utils.extend(this, set);
};

vashView.prototype = {

    filePath: null, findLayout: null,

    constructor: vashView,

    render: function(viewContext, callback) {
        callback = utils.deferProxy(callback);
        try {
            var data = {
                viewContext: viewContext,
                tempData: viewContext.tempData,
                viewData: viewContext.viewData,
                model: viewContext.viewData.model,
                url: viewContext.controller.url
            };
            data.__ZOO_findView = this.findLayout;
            vash(this.filePath, data, function(err, str) {
                callback(err, str);
            });
        } catch (ex) {
            callback(ex);
        }
    },

    release: function() {
        this.findLayout = null;
    }
};
