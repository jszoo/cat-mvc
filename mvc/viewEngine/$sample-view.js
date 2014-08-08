/*
* sampleView
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.24
*/

'use strict';

var utils = require('zoo-utils');

var sampleView = module.exports = function(set) {
    utils.extend(this, set)
};

sampleView.prototype = {

    constructor: sampleView,

    render: function(viewContext, callback) {
        var error = null;
        var html = null;
        //TODO: render
        callback(error, html);
    },

    release: function() {
    }
};
