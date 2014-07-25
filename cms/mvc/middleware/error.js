/*
* error
* author: ronglin
* create date: 2014.7.11
*/

'use strict';

module.exports = function() {
    //
    var format = function(err) {
        var msg = [];
        msg.push('Message: ' + err.message);
        msg.push('Status: ' + err.status);
        msg.push(err.stack);
        return msg.join('\n\n');
    };
    //
    return function(req, res, next, err) {
        if (err) {
            if (!(err instanceof Error)) { err = new Error(err); }
            var ct = { 'Content-Type': 'text/plain' };
            err.status = err.status || 500;
            res.writeHead(err.status, ct);
            res.end(format(err));
        } else {
            next(err);
        }
    };
};
