/*
* error
* author: ronglin
* create date: 2014.7.11
*/

'use strict';

module.exports = function() {
	//
    return function(req, res, next, err) {
        if (err) {
            if (!(err instanceof Error)) { err = new Error(err); }
            var ct = { 'Content-Type': 'text/plain' };
            err.status = err.status || 500;
            res.writeHead(err.status, ct);
            res.end('Message:' + err.message + '\n' + 'Status:' + err.status + '\n' + err.stack);
        } else {
        	next(err);
        }
    };
};
