/*
* httpMethod
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities'),
    mvcHttpMethod = require('../mvcHttpMethod');


/* base class
***************************************/
var httpMethod = exports.httpMethod = function(set) {
    utils.extend(this, set);
};

httpMethod.prototype = {

    methodName: null,

    constructor: httpMethod, className: 'httpMethod',

    isValidRequestMethod: function(httpContext, methodName) {
        return utils.tryLowerEqual(this.methodName, methodName);
    }
};


/* entity classes
*  httpGet,httpPost...etc
***************************************/
utils.each(mvcHttpMethod.methods, function(name) {

    var className = 'http' + name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();

    var cls = exports[className] = function(set) {
        cls.superclass.constructor.call(this, set);
    };

    utils.inherit(cls, httpMethod, {
        className: className, methodName: name
    });
    
});
