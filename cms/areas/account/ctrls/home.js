/*
* home
* author: ronglin
* create date: 2014.7.1
*/

var mvc = require('../../../node/mvc');

module.exports = mvc.controller(function(req, res, end) {

    this.action('index', function() {
        return this.redirectToAction('test');
    });

    this.action('test', function() {
        return this.json({ redirectFromAccountHomeIndex: true });
    });

});