/*
* ruleeError
* author: ronglin
* create date: 2014.7.11
*/

'use strict';

var utils = require('../utilities');

module.exports = function() {
	//
    return function(req, res, next, err) {
        if (err) {
            if (!(err instanceof Error)) { err = new Error(err); }
            var ct = { 'Content-Type': 'text/plain' };
            res.writeHead(err.status || 500, ct);
            res.end(err.message);
        } else {
        	next();
        }
    };
};
