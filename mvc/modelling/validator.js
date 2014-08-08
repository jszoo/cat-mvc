/*
* validation
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var utils = require('zoo-utils');


/* validatorBase
***************************************/
var validatorBase = function(set) {
    if (set) { this.errorMessage = set.msg; }
};

validatorBase.prototype = {

    validName: null, errorMessage: null,

    constructor: validatorBase,

    valid: function(value) {
        throw new Error('"valid" interface function needs override by sub classes');
    }
};


/* emptyValidator
***************************************/
var emptyValidator = exports.emptyValidator = function(enabled) {
    this.enabled = enabled;
};

utils.inherit(emptyValidator, validatorBase, {
    validName: 'empty', enabled: true,
    valid: function(value) {
        //TODO:
    }
});


/* emptyValidator
***************************************/
var notEmptyValidator = exports.notEmptyValidator = function() {
    notEmptyValidator.superclass.constructor.apply(this, arguments);
};

utils.inherit(notEmptyValidator, emptyValidator, {
    validName: 'notEmpty',
    valid: function(value) {
        return !notEmptyValidator.superclass.valid.call(this, value);
    }
});


/* requiredValidator
***************************************/
var requiredValidator = exports.requiredValidator = function(set) {
    requiredValidator.superclass.constructor.call(this, set);
};

utils.inherit(requiredValidator, validatorBase, {
    validName: 'required',
    valid: function(value) {
        //TODO:
    }
});

var types = [
    'empty',
    'required',
    'notEmpty',
    'undefined',
    'string',
    'alpha',
    'numeric',
    'alphanumeric',
    'email',
    'url',
    'urlish',
    'ip',
    'ipv4',
    'ipv6',
    'creditcard',
    'uuid',
    'uuidv3',
    'uuidv4',
    'int',
    'integer',
    'number',
    'finite',
    'decimal',
    'float',
    'falsey',
    'truthy',
    'null',
    'notNull',
    'boolean',
    'array',
    'date',
    'hexadecimal',
    'hexColor',
    'lowercase',
    'uppercase',
    'after',
    'before',
    'is',
    'regex',
    'not',
    'notRegex',
    'equals',
    'contains',
    'notContains',
    'len',
    'in',
    'notIn',
    'max',
    'min',
    'minLength',
    'maxLength'
];
