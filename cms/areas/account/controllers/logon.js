/*
* logon
* author: ronglin
* create date: 2014.6.26
*/

var mvc = require('../../../node/mvc');

module.exports = mvc.controller(function(req, res) {

    this.on('actionExecuting', function() { });
    this.on('actionExecuted', function() { });


    this.action('index', 'get', function() {
    });

    this.action('index', 'post', function() {
    });

    this.action('forgotPassword', 'get', function() {
    });

    this.action('forgotPassword', 'post', function() {
    });

    this.action('resetPassword', 'get', function() {
    });

    this.action('resetPassword', 'post', function() {
    });

});