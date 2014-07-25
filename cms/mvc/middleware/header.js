/*
* header
* author: ronglin
* create date: 2014.7.11
*/

'use strict';

module.exports = function() {
    return function(req, res, next, err) {
        var enabled = req._app.get('x-powered-by-enabled');
        if (enabled) { res.setHeader('X-Powered-By', 'RULEE-MVC'); }
        next(err);
    };
};
