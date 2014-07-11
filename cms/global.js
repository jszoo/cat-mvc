/*
* global
* author: ronglin
* create date: 2014.6.23
*/

var utils = require('./node/utilities');
var mvc = require('./node/mvc');

// web config
var configuration = require('./node/configuration');
var config = configuration.load('web.config');

// engine
var extname = config.get('defaultViewEngine.extname');
var engine = require(config.get('defaultViewEngine.name'));
mvc.engines.register(extname, engine);

// log
var logger = require('morgan');
mvc.use(logger({ format: 'dev' }));

// body
var bodyParser = require('body-parser');
mvc.use(bodyParser.json()); // parse application/json
mvc.use(bodyParser.json({ type: 'application/hal+json' })); // parse application/hal+json as json
mvc.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// cookie
var cookieParser = require('cookie-parser');
mvc.use(cookieParser());

// session
var session = require('express-session');
var cachingStore = require('./node/cachingSessionStore')(session);
mvc.use(session({
    name: config.get('session.cookie.name'),
    rolling: config.get('session.rolling'),
    secret: config.get('session.secret'),
    store: new cachingStore(),
    cookie: {
        maxAge: config.get('session.cookie.maxAge')
    }
}));

// favicon
var favicon = require('serve-favicon');
mvc.use(favicon(utils.absolutePath(config.get('favicon.source'))));

// static
var static = require('serve-static');
mvc.use(static(utils.absolutePath('fe')));

// entrance
var express = require('express');
var app = express();
app.use(mvc.handler());

// export
module.exports = app;
