/*
* mvcRoute
* author: ronglin
* create date: 2014.7.7
*/

'use strict';

var utils = require('./utilities'),
    routeSeed = require('./mvcRouteSeed');

var mvcRoute = function(set) {
    utils.extend(this, set);
    //
    if (this.defaultValues) {
        var values = {};
        utils.each(this.defaultValues, function(key, val) {
            values[utils.formalStr(key)] = val;
        });
        this.defaultValues = values;
    }
};

mvcRoute.prototype = {

    name: null, expression: null, defaultValues: null, ownerAreaName: null,

    constructor: mvcRoute, className: 'mvcRoute',

    routeData: function(urlPath) {
        return routeSeed.routeData(this.expression, this.defaultValues, urlPath);
    },

    resolveUrl: function(routeValues) {
        return routeSeed.resolveUrl(this.expression, this.defaultValues, routeValues);
    }
};

module.exports = mvcRoute;
