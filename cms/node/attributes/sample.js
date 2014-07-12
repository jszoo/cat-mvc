/*
* sample
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities');

var sample = function(set) {
    utils.extend(this, set);
};

sample.prototype = {

    constructor: sample, className: 'sample',

    onInitialize: function(context, target) {
    },

    onActionExecuting: function() {
    },

    onActionExecuted: function() {
    },

    onResultExecuting: function() {
    },

    onResultExecuted: function() {
    },

    isRequestSupport: function() {
    }
};

module.exports = sample;
