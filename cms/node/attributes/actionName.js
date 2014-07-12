/*
* actionName
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities');

var actionName = function(set) {
    utils.extend(this, set);
};

actionName.prototype = {

    name: null,

    constructor: actionName, className: 'actionName',

    onAttach: function(context, target) {
    }
    
};

module.exports = actionName;
