/*
* sampleView
* author: ronglin
* create date: 2014.7.24
*/

'use strict';

var utils = require('../utilities'),

var sampleView = module.exports = function(set) {
    utils.extend(this, set)
};

sampleView.prototype = {

    constructor: sampleView, className: 'sampleView',

    render: function(viewContext, callback) {
        
    },

    destroy: function() {
    	
    }
};
