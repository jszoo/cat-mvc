/*
* utilities
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var path = require('path'),
    utils = require('../jsg/utilities'),
    cmsDir = path.normalize(__dirname + path.sep + '..');

module.exports = utils.extend({}, utils, {

    absPath: function() {
        var args = utils.arg2arr(arguments);
        if (path.sep === '\\') {
            utils.each(args, function(i, val) {
                args[i] = val.replace(/\//g, '\\');
            });
        }
        args.unshift(cmsDir);
        return path.join.apply(path, args);
    }

});