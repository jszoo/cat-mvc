/*
* home
* author: ronglin
* create date: 2014.6.30
*/

var mvc = require('../node/mvc');

module.exports = mvc.controller(function(req, res) {

    this.action('index', function() {
        res.json({ homeIndex: true });
    });

});