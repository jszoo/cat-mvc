/*
* httpGet
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities');

var httpGet = function(set) {
    utils.extend(this, set);
};

httpGet.prototype = {

    constructor: httpGet, className: 'httpGet',


    onAttach: function(context, target) {
    }

};

module.exports = httpGet;
