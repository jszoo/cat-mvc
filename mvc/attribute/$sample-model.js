/*
* sampleModel
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.31
*/

'use strict';

var mvc = require('../index');

var profile = {

    name: {
        type: 'string',
        minLength: 5,
        maxLength: 20
    },

    age: {
        type: 'integer',
        defaultValue: 0
    }
};

var user = {

    Id: {
        type: 'integer',
        required: true
    },

    email: {
        type: 'email',
        required: true
    },

    passowrd: {
        type: 'string',
        required: true,
        passowrd: true
    },

    profile: profile
};

mvc.model('user', function() {
    return user;
});
