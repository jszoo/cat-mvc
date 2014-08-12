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

    errorMessage: null,

    constructor: validatorBase,

    valid: function(value, fieldName) {
        throw new Error('"valid" interface function needs override by sub classes');
    }
};


/* empty
***************************************/
var empty = exports.empty = function(enabled) {
    empty.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(empty, validatorBase, {
    enabled: true,
    valid: function(value, fieldName) {
        if (this.enabled) {
            var success = (value === '' || value === null || value === undefined);
            if (!success) {
                throw new Error('Field "' + fieldName + '" is required empty');
            }
        }
    }
});


/* notEmpty
***************************************/
var notEmpty = exports.notEmpty = function(enabled) {
    notEmpty.superclass.constructor.apply(this);
    this.enabled = !!enabled;
};

utils.inherit(notEmpty, validatorBase, {
    enabled: true,
    valid: function(value, fieldName) {
        if (this.enabled) {
            var success = (value === '' || value === null || value === undefined);
            if (success) {
                throw new Error('Field "' + fieldName + '" is required not empty');
            }
        }
    }
});


/* required
***************************************/
var required = exports.required = function(enabled) {
    required.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(required, validatorBase, {
    enabled: true,
    valid: function(value, fieldName) {
        if (this.enabled) {
            var success = (value === '' || value === null || value === undefined);
            if (success) {
                throw new Error('Field "' + fieldName + '" is required');
            }
        }
    }
});


/* minLength
***************************************/
var minLength = exports.minLength = function(len) {
    minLength.superclass.constructor.call(this);
    this.length = len;
};

utils.inherit(minLength, validatorBase, {
    length: null,
    valid: function(value, fieldName) {
        if (this.length !== false) {
            if (value && value.length < this.length) {
                throw new Error('Field "' + fieldName + '" is required min length ' + this.length);
            }
        }
    }
});

exports.minLen = exports.minLength;


/* maxLength
***************************************/
var maxLength = exports.maxLength = function(len) {
    maxLength.superclass.constructor.call(this);
    this.length = len;
};

utils.inherit(maxLength, validatorBase, {
    length: null,
    valid: function(value, fieldName) {
        if (this.length !== false) {
            if (value && value.length > this.length) {
                throw new Error('Field "' + fieldName + '" is required max length ' + this.length);
            }
        }
    }
});

exports.maxLen = exports.maxLength;


/* Length
***************************************/
var Length = exports.Length = function(len) {
    Length.superclass.constructor.call(this);
    this.length = len;
};

utils.inherit(Length, validatorBase, {
    length: null,
    valid: function(value, fieldName) {
        if (this.length !== false) {
            if (value && value.length != this.length) {
                throw new Error('Field "' + fieldName + '" is required length ' + this.length);
            }
        }
    }
});

exports.len = exports.Length;


/* min
***************************************/
var min = exports.min = function(value) {
    min.superclass.constructor.call(this);
    this.value = value;
};

utils.inherit(min, validatorBase, {
    value: null,
    valid: function(value, fieldName) {
        if (utils.isNumber(this.value)) {
            if (this.value > value) {
                throw new Error('Field "' + fieldName + '" is required min number ' + this.value);
            }
        }
    }
});


/* max
***************************************/
var max = exports.max = function(value) {
    max.superclass.constructor.call(this);
    this.value = value;
};

utils.inherit(max, validatorBase, {
    value: null,
    valid: function(value, fieldName) {
        if (utils.isNumber(this.value)) {
            if (this.value < value) {
                throw new Error('Field "' + fieldName + '" is required max number ' + this.value);
            }
        }
    }
});


/* Undefined
***************************************/
var Undefined = exports.Undefined = function(enabled) {
    Undefined.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(Undefined, validatorBase, {
    enabled: null,
    valid: function(value, fieldName) {
        if (this.enabled) {
            if (value !== undefined) {
                throw new Error('Field "' + fieldName + '" is required undefined');
            }
        }
    }
});


/* notUndefined
***************************************/
var notUndefined = exports.notUndefined = function(enabled) {
    notUndefined.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(notUndefined, validatorBase, {
    enabled: null,
    valid: function(value, fieldName) {
        if (this.enabled) {
            if (value === undefined) {
                throw new Error('Field "' + fieldName + '" is required not undefined');
            }
        }
    }
});


/* Null
***************************************/
var Null = exports.Null = function(enabled) {
    Null.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(Null, validatorBase, {
    enabled: null,
    valid: function(value, fieldName) {
        if (this.enabled) {
            if (value !== null) {
                throw new Error('Field "' + fieldName + '" is required null');
            }
        }
    }
});


/* notNull
***************************************/
var notNull = exports.notNull = function(enabled) {
    notNull.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(notNull, validatorBase, {
    enabled: null,
    valid: function(value, fieldName) {
        if (this.enabled) {
            if (value === null) {
                throw new Error('Field "' + fieldName + '" is required not null');
            }
        }
    }
});


/* string
***************************************/
var string = exports.string = function(enabled) {
    string.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(string, validatorBase, {
    enabled: null,
    valid: function(value, fieldName) {
        if (this.enabled) {
            if (!utils.isString(value)) {
                throw new Error('Field "' + fieldName + '" is required string type');
            }
        }
    }
});


/* numeric
***************************************/
var numeric = exports.numeric = function(enabled) {
    numeric.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(numeric, validatorBase, {
    enabled: null,
    valid: function(value, fieldName) {
        if (this.enabled) {
            if (!utils.isNumeric(value)) {
                throw new Error('Field "' + fieldName + '" is required numeric type');
            }
        }
    }
});


/* number
***************************************/
var number = exports.number = function(enabled) {
    number.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(number, validatorBase, {
    enabled: null,
    valid: function(value, fieldName) {
        if (this.enabled) {
            if (!utils.isNumber(value)) {
                throw new Error('Field "' + fieldName + '" is required number type');
            }
        }
    }
});


/* BOOLEAN
***************************************/
var BOOLEAN = exports.BOOLEAN = function(enabled) {
    BOOLEAN.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(BOOLEAN, validatorBase, {
    enabled: null,
    valid: function(value, fieldName) {
        if (this.enabled) {
            if (!utils.isBoolean(value)) {
                throw new Error('Field "' + fieldName + '" is required boolean type');
            }
        }
    }
});

exports.bool = exports.BOOLEAN;


/* array
***************************************/
var array = exports.array = function(enabled) {
    array.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(array, validatorBase, {
    enabled: null,
    valid: function(value, fieldName) {
        if (this.enabled) {
            if (!utils.isArray(value)) {
                throw new Error('Field "' + fieldName + '" is required array type');
            }
        }
    }
});


/* date
***************************************/
var date = exports.date = function(enabled) {
    date.superclass.constructor.call(this);
    this.enabled = !!enabled;
};

utils.inherit(date, validatorBase, {
    enabled: null,
    valid: function(value, fieldName) {
        if (this.enabled) {
            if (!utils.isDate(value)) {
                throw new Error('Field "' + fieldName + '" is required date type');
            }
        }
    }
});


var types = [
    'alpha',
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
    'finite',
    'decimal',
    'float',
    'falsey',
    'truthy',
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
    'in',
    'notIn'
];
