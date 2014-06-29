/*
* logon
* author: ronglin
* create date: 2014.6.26
*/

var mvc = require('../../../node/mvc');

module.exports = mvc.controller(function(req, res) {

    this.on('actionExecuting', function(action) { });
    this.on('actionExecuted', function(action) { });


    this.action('index', function() {
    });

    this.action('index', 'post', function() {
    });

    this.action('forgotPassword', function() {
    });

    this.action('forgotPassword', 'post', function() {
    });

    this.action('resetPassword', function() {
    });

    this.action('resetPassword', 'post', function() {
    });

});