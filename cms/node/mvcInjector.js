/*
* mvcInjector
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var utils = require('./utilities');

var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
    FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
    FN_ARG = /^\s*(_?)(.+?)\1\s*$/,
    FN_ARG_SPLIT = /,/;

exports.annotate = function(fn) {
    var inject;
    if (utils.isFunction(fn)) {
        if (!(inject = fn.inject)) {
            inject = [];
            var fnText = fn.toString().replace(STRIP_COMMENTS, '');
            var argDecl = fnText.match(FN_ARGS);
            utils.each(argDecl[1].split(FN_ARG_SPLIT), function(i, arg) {
                arg.replace(FN_ARG, function(all, underscore, name) {
                    inject.push(name);
                });
            });
            fn.inject = inject;
        }
    } else if (utils.isArray(fn)) {
        var last = fn.length - 1;
        inject = fn.slice(0, last);
    }
    // ret
    return inject;
};
