/*
* mvcAreaRoute
* author: ronglin
* create date: 2014.7.7
*/

'use strict';

var utils = require('./utilities'),
    routeSeed = require('./mvcAreaRouteSeed');

var mvcAreaRoute = module.exports = function(set) {
    utils.extend(this, set);
    this.defaultValues = utils.formalObj(this.defaultValues || {});
};

mvcAreaRoute.prototype = {

    constructor: mvcAreaRoute, className: 'mvcAreaRoute',

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
    },

    /*
    * return: an array object contains all the expression key names
    *   eg: ['controller', 'action']
    */
    resolveKeys: function() {
        return routeSeed.resolveKeys(this.expression);
    },

    /*
    * routeValues: plain object data
    *   eg: { action: 'index', controller: 'home', id: 1 }
    *
    * return: the number of specified route values that is matched to this route
    *   eg: 3
    */
    matchedCount: function(routeValues) {
        var keys = this.resolveKeys(), count = 0;
        var keysStr = (',' + keys.join(',') + ',').toLowerCase();
        utils.each(routeValues, function(key) {
            if (key && ~keysStr.indexOf(',' + key.toLowerCase() + ',')) {
                count++;
            }
        });
        return count;
    }
};
