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
var config = configuration.load('/web.config');

// view engine
app.set('views', utils.absPath('views'));
app.set('view engine', config.get('viewEngine.name'));

// log
var logger = require('morgan');
app.use(logger({ format: 'dev' }));

//
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/hal+json' })); // parse application/hal+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// session
var session = require('express-session');
var cachingStore = require('./node/cachingSessionStore')(session);
app.use(session({
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
app.use(favicon(utils.absPath(config.get('favicon.source'))));
app.use(express.static(utils.absPath('fe')));

// load routes
var routes = require('.' + config.get('routeTable.source'));
utils.each(routes.pages(app), function() { app.use(this); });
utils.each(routes.errors(app), function() { app.use(this); });

// export
module.exports = app;
