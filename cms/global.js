/*
* global
* author: ronglin
* create date: 2014.6.23
*/

var utils = require('./node/utilities');
var express = require('express');
var app = express();

// web config
var configuration = require('./node/configuration');
var config = configuration.load('web.config');

//
var extname = config.get('defaultViewEngine.extname');
var engine = require(config.get('defaultViewEngine.name'));
// mvc
var mvc = require('./node/mvc');
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

// dir mapping
var favicon = require('serve-favicon');
mvc.use(favicon(utils.absolutePath(config.get('favicon.source'))));
mvc.use(express.static(utils.absolutePath('fe')));

app.use(mvc.handler());

// export
module.exports = app;
