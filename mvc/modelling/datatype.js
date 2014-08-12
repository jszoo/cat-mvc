/*
* dataType
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var utils = require('zoo-utils');


/* dataTypeBase
***************************************/
var dataTypeBase = function() { };

dataTypeBase.prototype = {

    constructor: dataTypeBase,

    parse: function(value, fieldName) {
        throw new Error('"parse" interface function needs override by sub classes');
    }
};


/* string
***************************************/
var string = exports.string = function(set) {
    string.superclass.constructor.call(this, set);
};

utils.inherit(string, dataTypeBase, {
    parse: function(value, fieldName) {
        if (value === null || value === undefined) {
            return value;
        } else {
            return String(value);
        }
    }
});


/* integer
***************************************/
var integer = exports.integer = function(set) {
    integer.superclass.constructor.call(this, set);
};

utils.inherit(integer, dataTypeBase, {
    parse: function(value, fieldName) {
        var ret = parseInt(value, 10);
        return isNaN(ret) ?  0 : ret;
    }
});

exports.Int = exports.integer;


/* Float
***************************************/
var Float = exports.Float = function(set) {
    Float.superclass.constructor.call(this, set);
};

utils.inherit(Float, dataTypeBase, {
    parse: function(value, fieldName) {
        var ret = parseFloat(value, 10);
        return isNaN(ret) ? 0 : ret;
    }
});


/* BOOLEAN
***************************************/
var BOOLEAN = exports.BOOLEAN = function(set) {
    BOOLEAN.superclass.constructor.call(this, set);
};

utils.inherit(BOOLEAN, dataTypeBase, {
    parse: function(value, fieldName) {
        return Boolean(value);
    }
});

exports.bool = exports.BOOLEAN;


/* date
***************************************/
var date = exports.date = function(set) {
    date.superclass.constructor.call(this, set);
};

utils.inherit(date, dataTypeBase, {
    parse: function(value, fieldName) {
        var ret = Date.parse(value);
        return isNaN(ret) ? null : ret;
    }
});


/* array
***************************************/
var array = exports.array = function(set) {
    array.superclass.constructor.call(this, set);
};

utils.inherit(array, dataTypeBase, {
    parse: function(value, fieldName) {
        var vt = utils.type(value);
        if (vt  === 'string') {
            var parts = value.split(',');
            utils.each(parts, function(i, txt) {
                parts[i] = utils.trim(txt);
            });
            return parts;
        }
        else if(vt === 'array') {
            return value;
        }
        else {
            return [value];
        }
    }
});
