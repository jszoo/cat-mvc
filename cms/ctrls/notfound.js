/*
* notfound
* author: ronglin
* create date: 2014.6.26
*/

var mvc = require('../mvc/index');

mvc.controller(function(req, res, end) {

    this.action('index', function() {
        end.view();
    });

});