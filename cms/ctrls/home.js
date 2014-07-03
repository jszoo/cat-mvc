/*
* home
* author: ronglin
* create date: 2014.6.30
*/

var mvc = require('../node/mvc');

module.exports = mvc.controller(function(req, res, end) {

    this.action('index', function() {
    	setTimeout(function(){
    		end.json({ timeoutHomeIndex: true });
    	}, 1);
    	//return this.json({ homeIndex: true });
    });

});