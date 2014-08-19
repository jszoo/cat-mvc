/*
* error
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.11
*/

'use strict';

var http = require('http');

var format = function(err, stack) {
    var msg = ['<!DOCTYPE html>'];
    msg.push('<html>');
    msg.push('<head>');
    msg.push('  <title>Internal Server Error</title>');
    msg.push('</head>');
    msg.push('<body>');
    msg.push('  <h1>' + err.message + '</h1>');
    msg.push('  <h3>Status: ' + err.status + ' ' + http.STATUS_CODES[err.status] + '</h3>');
    if (stack) { msg.push('  <pre>' + err.stack + '</pre>'); }
    msg.push('</body>');
    msg.push('</html>');
    return msg.join('\n');
};

var writeError = function(res, err) {
    if (!(err instanceof Error)) { err = new Error(err); }
    if (!err.message) { err.message = 'Internal Server Error'; }
    if (!err.status) { err.status = 500; }
    //
    var stack = res._app.get('env') === 'development';
    var ct = { 'Content-Type': 'text/html' };
    res.writeHead(err.status, ct);
    res.end(format(err, stack));
};

module.exports = function() {
    return function(req, res, next, err) {
        if (err) {
            writeError(res, err);
        } else {
            next(err);
        }
    };
};

module.exports.writeError = writeError;
