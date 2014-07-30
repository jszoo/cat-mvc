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
    cachingStore = require('./cachingStore'),
    apps = caching.region('mvc-app-instances');

var midError = require('./middleware/error'),
    midHeader = require('./middleware/header'),
    midRequest = require('./middleware/request'),
    midResponse = require('./middleware/response');

var session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

var mvcApp = function(set) {
    utils.extend(this, set);
    if (!this.appPath) { throw new Error('Parameter "appPath" is required'); }
    //
    var instance = apps.get(this.appPath);
    if (instance) { return instance; }
    apps.set(this.appPath, this);
    //
    var store = new cachingStore();
    this._handlers = new mvcHandlerRouter();
    this._sett = caching.region('mvc-app-setting', store);
    //
    this.set('version', process.env.npm_package_version);
    this.set('env', process.env.NODE_ENV || 'development');
    this.set('x-headers-enabled', true);
    this.set('subdomain-offset', 2);
    this.set('trust-proxy', false);
    this.set('etag', 'weak');
    //
    this.cachingStore = store;
    this.areas = new mvcAreas(this, store);
    this.attributes = new mvcAttributes(this, store);
    this.viewEngines = new mvcViewEngines(this ,store);
};

mvcApp.prototype = {

    _sett: null, _handlers: null, _inited: null, cachingStore: null,

    appPath: null, areas: null, attributes: null, viewEngines: null,

    constructor: mvcApp, className: 'mvcApp',

    /*
    * get app setting
    */
    get: function(key) {
        return this._sett.get(key);
    },

    /*
    * set app setting
    */
    set: function(key, val) {
        this._sett.set(key, val);
        key = utils.formalStr(key);
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
            handlers.register(session({
                name: 'catmvc.sid',
                secret: 'catmvc',
                cookie: { maxAge: 3600000 },
                resave: true,
                rolling: false,
                saveUninitialized: true
            }));
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

var gain = function(set) {
    return new mvcApp(set);
};

// export
module.exports = utils.extend(function(set) {
    return gain(set);
}, {
    utils: utils,
    caching: caching,
    controller: mvcController.api,
    actionResults: mvcActionResult,
    gainApp: gain
});
