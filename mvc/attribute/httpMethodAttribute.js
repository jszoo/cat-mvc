/*
* httpMethodAttribute
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.12
*/

'use strict';

var utils = require('zoo-utils'),
    methods = require('../httpMethod').methods;


/* base class
***************************************/
var httpMethodAttribute = exports.httpMethodAttribute = function(set) {
    utils.extend(this, set);
};

httpMethodAttribute.prototype = {

    methodName: null,

    constructor: httpMethodAttribute, className: 'httpMethodAttribute',

    isValidActionRequest: function(httpContext) {
        var methodName = httpContext.request.method;
        return utils.tryLowerEqual(this.methodName, methodName);
    }
};


/* entity classes
*  httpGet,httpPost...etc
***************************************/
utils.each(methods, function(name) {

    var className = 'http' + name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();

    var cls = exports[className] = function(set) {
        cls.superclass.constructor.call(this, set);
    };

    utils.inherit(cls, httpMethodAttribute, {
        className: className, methodName: name
    });

});
