/*
* mvcContext
* author: ronglin
* create date: 2014.7.9
*/

'use strict';

var utils = require('./utilities');

var mvcContext = function(set) {
    utils.extend(this, set);
};

mvcContext.prototype = {

    request: null, response: null, rulee: null,

    route: null, routeData: null, routeSet: null,

    constructor: mvcContext, className: 'mvcContext',

    controllerContext: function(controller) {
    	return utils.extend({}, this, { controller: controller });
    },

    viewContext: function(set) {
    	return utils.extend({}, this, set);
    }
};

module.exports = mvcContext;
