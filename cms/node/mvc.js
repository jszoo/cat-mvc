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
    mvcViewEngines = require('./mvcViewEngines'),
    mvcHandlerRouter = require('./mvcHandlerRouter');

var ruleeHeader = require('./middles/rulee-header'),
    ruleeRequest = require('./middles/rulee-request'),
    ruleeResponse = require('./middles/rulee-response');

var handlerRouter = new mvcHandlerRouter();
var setts = caching.region('mvc-runtime-settings');
setts.set('env', process.env.NODE_ENV || 'development');

module.exports = {
    areas: mvcAreas,
    engines: mvcViewEngines,
    controller: mvcController.define,
    //
    handler: function () {
        handlerRouter.handle(ruleeHeader());
        handlerRouter.handle(ruleeRequest());
        handlerRouter.handle(ruleeResponse());
        handlerRouter.lastHandle(mvcHandler(setts));
        mvcAreas.registerAll();
        return function(req, res) {
            handlerRouter.execute(req, res);
        };
    },
    get: function(key) {
        return cache.get(key);
    },
    set: function(key, val) {
        return cache.set(key, val);
    },
    use: function(route, func) {
        return handlerRouter.handle(route, func);
    }
};
