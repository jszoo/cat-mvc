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

var ruleeError = require('./middles/rulee-error'),
    ruleeHeader = require('./middles/rulee-header'),
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
    get: function(key) {
        return cache.get(key);
    },
    set: function(key, val) {
        return cache.set(key, val);
    },
    use: function() {
        return handlerRouter.register.apply(handlerRouter, arguments);
    },
    disuse: function() {
        return handlerRouter.unregister.apply(handlerRouter, arguments);
    },
    handler: function () {
        // initialize
        mvcAreas.registerAll();
        handlerRouter.register('ruleeHeader', '/', ruleeHeader());
        handlerRouter.register('ruleeRequest', '/', ruleeRequest());
        handlerRouter.register('ruleeResponse', '/', ruleeResponse());
        handlerRouter.register(mvcHandler(setts));
        handlerRouter.register('ruleeError', '/', ruleeError());
        // entrance
        return function(req, res) {
            handlerRouter.execute(req, res);
        };
    }
};
