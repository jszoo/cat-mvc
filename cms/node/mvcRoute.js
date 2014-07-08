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
    } else {
        this.defaultValues = {};
    }
};

mvcRoute.prototype = {

    constructor: mvcRoute, className: 'mvcRoute',

    /*
    * the specified route name
    */
    name: null,

    /*
    * the name of area which owned this route
    */
    ownerAreaName: null,

    /*
    * the route expression
    *   eg:/:controller?/:action?
    */
    expression: null,

    /*
    * plain object data as default route for expression
    *   eg: { action: 'index', controller: 'home' }
    */
    defaultValues: null,

    /*
    * urlPath: url path which is without query string
    *   eg:/home/index
    *
    * return: name value object array
    *   eg:[{ name: 'acton', value: 'index'}, { name: 'controller', value: 'home'}...]
    */
    routeData: function(urlPath) {
        return routeSeed.routeData(this.expression, this.defaultValues, urlPath);
    },

    /*
    * routeValues: plain object data
    *   eg: { action: 'index', controller: 'home', id: 1 }
    *
    * return: resolved url
    *   eg: /home/index?id=1
    */
    resolveUrl: function(routeValues) {
        return routeSeed.resolveUrl(this.expression, this.defaultValues, routeValues);
    }
};

module.exports = mvcRoute;
