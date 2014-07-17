/*
* cache
* author: ronglin
* create date: 2014.6.26
*/

var mvc = require('../mvc/index');
var cachingNotifyRemote = require('../bin/cachingNotifyRemote');

module.exports = mvc.controller(function(req, res, end) {

    this.action('index', function() {
        cachingNotifyRemote.accept(req.query);
        end.json({ success: true });
    });

});