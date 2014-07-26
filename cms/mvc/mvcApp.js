/*
* mvcApp
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var path = require('path'),
    utils = require('./utilities'),
    httpHelper = require('./httpHelper'),
	mvcAreas = require('./mvcAreas'),
    mvcController = require('./mvcController'),
    mvcActionResult = require('./mvcActionResult'),
    mvcAttributes = require('./attribute/$manager'),
    mvcViewEngines = require('./viewEngine/$manager'),
    mvcHandler = require('./mvcHandler'),
    mvcHandlerRouter = require('./mvcHandlerRouter');

var caching = require('./caching'),
    cachingStore = require('./cachingStore');

var midError = require('./middleware/error'),
    midHeader = require('./middleware/header'),
    midRequest = require('./middleware/request'),
    midResponse = require('./middleware/response');

var bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

var mvcApp = function(set) {
    utils.extend(this, set);
    if (!this.appPath) { throw new Error('Parameter "appPath" is required'); }
    //
    this._handlers = new mvcHandlerRouter();
    this._setts = caching.region('mvc-runtime-settings');
    //
    this.set('version', process.env.npm_package_version);
    this.set('env', process.env.NODE_ENV || 'development');
    this.set('x-headers-enabled', true);
    this.set('subdomain-offset', 2);
    this.set('trust-proxy', false);
    this.set('etag', 'weak');
    //
    this.areas = new mvcAreas(this);
    this.attributes = new mvcAttributes();
    this.viewEngines = new mvcViewEngines();
};

mvcApp.prototype = {

    _setts: null, _handlers: null, _inited: null,

    appPath: null, areas: null, attributes: null, viewEngines: null,

    constructor: mvcApp, className: 'mvcApp',

    /*
    * get app setting
    */
    get: function(key) {
        return this._setts.get(key);
    },

    /*
    * set app setting
    */
    set: function(key, val) {
        this._setts.set(key, val);
        //
        if (key === 'etag') {
            this.set('etag-fn', httpHelper.compileETag(val));
        }
        else if (key === 'trust-proxy') {
            this.set('trust-proxy-fn', httpHelper.compileTrust(val));
        }
    },

    /*
    * use(handler)
    * use(routeExp, handler)
    * use(routeExp, name, handler)
    */
    use: function() {
        return this._handlers.register.apply(this._handlers, arguments);
    },

    /*
    * disuse(name)
    */
    disuse: function() {
        return this._handlers.unregister.apply(this._handlers, arguments);
    },

    /*
    * mapPath('~/xx')
    *
    * TODO:
    * mapPath('/xx')
    * mapPath('./xx')
    * mapPath('../xx')
    */
    mapPath: function(relPath) {
        if (!relPath) { return this.appPath; }
        if (relPath.charAt(0) === '~') { relPath = relPath.substr(1); }
        relPath = relPath.replace(/\/|\\/g, path.sep);
        return path.join(this.appPath, relPath);
    },

    /*
    * 1. initialize
    * 2. return the web server handler
    */
    handler: function() {
        //
        var handlers = this._handlers;
        if (this._inited !== true) {
            this._inited = true;
            //
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
            //
            this.viewEngines.registerAll();
            this.attributes.registerAll();
            this.areas.registerAll(); // user code always focus on the controllers, so register at last
        }
        //
        var self = this;
        return function(req, res) {
            req._app = res._app = self;
            handlers.execute(req, res);
        };
    }
};

// export
module.exports = {
    utils: utils,
    caching: caching,
    controller: mvcController.define,
    actionResults: mvcActionResult,
    current: null,
    gainApp: function(set) {
        return this.current ? this.current : (this.current = new mvcApp(set));
    }
};
