/*
* global
* author: ronglin
* create date: 2014.6.23
*/
var path = require('path');
var mvc = require('./node/mvc');
//var mvc = require('rulee-mvc');
mvc.set('rootPath', __dirname);

// web config
var configuration = require('./bin/configuration');
var config = configuration.load('web.config');

// engine
var engineExt = config.get('defaultViewEngine.engineExt');
var engineName = require(config.get('defaultViewEngine.engineName'));
mvc.engines.register(engineExt, engineName);

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
var cachingStore = require('./bin/cachingSessionStore')(session);
mvc.use(session({
    name: config.get('session.cookie.name'),
    rolling: config.get('session.rolling'),
    secret: config.get('session.secret'),
    store: new cachingStore(),
    cookie: {
        maxAge: config.get('session.cookie.maxAge')
    },
    resave: true,
    saveUninitialized: true
}));

// favicon
var favicon = require('serve-favicon');
mvc.use(favicon(path.join(__dirname, config.get('favicon.source'))));

// static
var static = require('serve-static');
mvc.use(static(path.join(__dirname, 'fe')));

// entrance
var express = require('express');
var app = express();
app.use(mvc.handler());

// export
module.exports = app;
