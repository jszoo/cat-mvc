/*
* mvc
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var utils = require('./utilities'),
    caching = require('./caching'),
	mvcAreas = require('./mvcAreas'),
    mvcHandler = require('./mvcHandler'),
    mvcController = require('./mvcController'),
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
    utils: utils,
    areas: mvcAreas,
    engines: mvcViewEngines,
    controller: mvcController.define,
    //
    get: function(key) {
        return setts.get(key);
    },
    set: function(key, val) {
        setts.set(key, val);
        var root = setts.get('rootPath');
        if (root) { utils.setRootPath(root); }
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
