/*
* global
* author: ronglin
* create date: 2014.6.23
*/
var mvc = require('./mvc/index');
var app = mvc.gainApp({ appPath: __dirname });

// web config
var configuration = require('./bin/configuration');
var config = configuration.load('web.config');

// log
var logger = require('morgan');
app.use(logger('dev', {}));

// session
var session = require('express-session');
var cachingStore = require('./bin/cachingSessionStore')(session);
app.use(session({
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
app.use(favicon(app.mapPath(config.get('favicon.source'))));

// static
var static = require('serve-static');
app.use(static(app.mapPath('~/fe')));

// server
var http = require('http');
var server = http.createServer(app.handler());

// export
module.exports = server;
