/*
* ejsView
* author: ronglin
* create date: 2014.7.24
*/

'use strict';

var utils = require('../utilities'),
    ejs = require('./ejs');

var ejsView = module.exports = function(set) {
    utils.extend(this, set);
};

ejsView.prototype = {
    
    filePath: null,

    constructor: ejsView, className: 'ejsView',

    render: function(viewContext, callback) {
        var error = null;
        var html = null;
        //TODO: render
        callback(error, html);
    },

    release: function() {
    }
};
