/*
* ejsView
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.24
*/

'use strict';

var utils = require('zoo-utils'),
    ejs = require('./ejs');

var ejsView = module.exports = function(set) {
    utils.extend(this, set);
};

ejsView.prototype = {

    filePath: null,

    constructor: ejsView,

    render: function(viewContext, callback) {
        callback = utils.deferProxy(callback);
        try {
            var data = {
                viewContext: viewContext,
                tempData: viewContext.tempData,
                viewData: viewContext.viewData,
                model: viewContext.viewData.model(),
                url: viewContext.controller.url
            };
            ejs(this.filePath, data, function(err, str) {
                callback(err, str);
            });
        } catch (ex) {
            callback(ex);
        }
    },

    release: function() {
    }
};
