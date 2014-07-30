/*
* httpMethod
* author: ruleechen 
* contact: rulee@live.cn
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities'),
    methods = require('../httpMethod').methods;


/* base class
***************************************/
var httpMethod = exports.httpMethod = function(set) {
    utils.extend(this, set);
};

httpMethod.prototype = {

    methodName: null,

    constructor: httpMethod, className: 'httpMethod',

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

    utils.inherit(cls, httpMethod, {
        className: className, methodName: name
    });

});
