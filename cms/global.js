/*
* global
* author: ronglin
* create date: 2014.6.23
*/
var path = require('path');
var ruleeMvc = require('./mvc/index');
var mvc = ruleeMvc.create({ appPath: __dirname });

// web config
var configuration = require('./bin/configuration');
var config = configuration.load('web.config');

// log
var logger = require('morgan');
mvc.use(logger({ format: 'dev' }));

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
