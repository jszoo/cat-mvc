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
    mvcAttributes = require('./attributes/index'),
    mvcViewEngines = require('./mvcViewEngines'),
    mvcHandlerRouter = require('./mvcHandlerRouter');

var midError = require('./middles/error'),
    midHeader = require('./middles/header'),
    midRequest = require('./middles/request'),
    midResponse = require('./middles/response');

var handlerRouter = new mvcHandlerRouter();
var setts = caching.region('mvc-runtime-settings');
setts.set('env', process.env.NODE_ENV || 'development');

module.exports = {
    areas: mvcAreas,
    engines: mvcViewEngines,
    controller: mvcController.define,
    attributes: mvcAttributes,
    //
    get: function(key) {
        return setts.get(key);
    },
    set: function(key, val) {
        return setts.set(key, val);
    },
    use: function() {
        return handlerRouter.register.apply(handlerRouter, arguments);
    },
    disuse: function() {
        return handlerRouter.unregister.apply(handlerRouter, arguments);
    },
    handler: function () {
        // initialize
        mvcAreas.rootPath(setts.get('rootPath')).registerAll();
        handlerRouter.register('midHeader', '/', midHeader());
        handlerRouter.register('midRequest', '/', midRequest());
        handlerRouter.register('midResponse', '/', midResponse());
        handlerRouter.register(mvcHandler(setts));
        handlerRouter.register('midError', '/', midError());
        // entrance
        return function(req, res) {
            handlerRouter.execute(req, res);
        };
    }
};
