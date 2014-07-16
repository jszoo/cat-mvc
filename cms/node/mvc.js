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
    mvcAttributes = require('./attributes/index'),
    mvcViewEngines = require('./mvcViewEngines'),
    mvcHandlerRouter = require('./mvcHandlerRouter');

var midError = require('./middles/error'),
    midHeader = require('./middles/header'),
    midRequest = require('./middles/request'),
    midResponse = require('./middles/response');

var bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

var mvc = function(set) {
    utils.extend(this, set);
    if (!this.rootPath) { throw new Error('Parameter "rootPath" is required'); }
    this.areas = new mvcAreas(this.rootPath);
    this.engines = new mvcViewEngines();
    this.attributes = new mvcAttributes();
    this._handlers = new mvcHandlerRouter();
    this._setts = caching.region('mvc-runtime-settings');
    this._setts.set('env', process.env.NODE_ENV || 'development');
};

mvc.prototype = {

    _setts: null, _handlers: null, rootPath: null,

    areas: null, engines: null, attributes: null,

    constructor: mvc, className: 'mvc',

    get: function(key) {
        return this._setts.get(key);
    },

    set: function(key, val) {
        return this._setts.set(key, val);
    },

    use: function() {
        return this._handlers.register.apply(this._handlers, arguments);
    },

    disuse: function() {
        return this._handlers.unregister.apply(this._handlers, arguments);
    },

    handler: function () {
        // init
        this.areas.registerAll();
        this.attributes.registerAll();
        this.engines.register('.vash', require('./engines/vash'));
        //
        var handlers = this._handlers;
        handlers.register(bodyParser.json());
        handlers.register(bodyParser.json({ type: 'application/hal+json' }));
        handlers.register(bodyParser.urlencoded({ extended: true }));
        handlers.register(cookieParser());
        //
        handlers.register('/', 'midHeader', midHeader());
        handlers.register('/', 'midRequest', midRequest());
        handlers.register('/', 'midResponse', midResponse());
        handlers.registerAtLast('/', 'midError', midError());
        //
        handlers.register(mvcHandler(this));
        // entrance
        return function(req, res) {
            handlers.execute(req, res);
        };
    }
};

// export
module.exports = {
    controller: mvcController.define,
    create: function(set) {
        return new mvc(set);
    }
};
