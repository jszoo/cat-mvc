/*
* sampleValidator
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.5
*/

var utils = require('zoo-utils');

var sampleValidator = module.exports = function(set) {
    utils.extend(this, set);
};

sampleValidator.prototype = {

    constructor: sampleValidator,

    valid: function(value) {
        //TODO: customize logic
        // just throw Error if unvalid
    }
};