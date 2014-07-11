/*
* mvc
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var caching = require('./caching'),
	mvcAreas = require('./mvcAreas'),
    mvcHandler = require('./mvcHandler'),
    mvcController = require('./mvcController'),
    mvcViewEngines = require('./mvcViewEngines');

var setts = caching.region('mvc-runtime-settings');
setts.set('env', process.env.NODE_ENV || 'development');

module.exports = {
    areas: mvcAreas,
    engines: mvcViewEngines,
    controller: mvcController.define,
    //
    handler: function () {
        var inner = mvcHandler(setts);
        return function(req, res) {
            inner(req, res);
        };
    },
    get: function(key) {
        return cache.get(key);
    },
    set: function(key, val) {
        return cache.set(key, val);
    }
};
