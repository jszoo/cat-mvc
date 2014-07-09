/*
* mvcView
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var utils = require('./utilities'),
    engines = require('./mvcViewEngines');

var mvcView = function(viewName) {
    this.viewName = viewName;
};

mvcView.prototype = {
    
    viewName: null,

    constructor: mvcView, className: 'mvcView',

    render: function(viewContext, callback) {
        var options = {};
        var filePath = '';
        this.engine(filePath, options, callback);
    }
};

module.exports = mvcView;
