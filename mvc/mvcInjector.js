/*
* mvcInjector
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.26
*/

'use strict';

var utils = require('./utilities');

var JS_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
    FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
    FN_ARG = /^\s*(_?)(.+?)\1\s*$/,
    FN_ARG_SPLIT = /,/;

exports.annotate = function(func) {
    var inject;
    if (utils.isFunction(func)) {
        if (!(inject = func.inject)) {
            inject = [];
            var functionText = func.toString().replace(JS_COMMENTS, '');
            var declaredArgs = functionText.match(FN_ARGS);
            utils.each(declaredArgs[1].split(FN_ARG_SPLIT), function(i, arg) {
                arg.replace(FN_ARG, function(all, underscore, name) {
                    inject.push(name);
                });
            });
            func.inject = inject;
        }
    } else if (utils.isArray(func)) {
        var last = func.length - 1;
        inject = func.slice(0, last);
        func = func[last];
    } else {
        throw new Error('Inject target supports only function type and array type.');
    }
    // ret
    return {
        func: func,
        args: inject
    };
};
