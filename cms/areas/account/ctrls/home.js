/*
* home
* author: ronglin
* create date: 2014.7.1
*/

var mvc = require('../../../node/mvc');

module.exports = mvc.controller(function(req, res) {

    this.action('index', function() {
        return this.json({ accountHomeIndex: true });
    });

});