/*
* global
* author: ronglin
* create date: 2014.6.23
*/
var utils = require('./jsg/utilities');
var express = require('express');
var app = express();

var path = require('path');
var abs = function(rel) { return path.join(__dirname, rel); };

// web config
var setting = require('./node/setting');
var config = setting.load(abs('web.config'));

// view engine
app.set('views', abs('views'));
app.set('view engine', config.get('viewEngineName'));

// log
var logger = require('morgan');
app.use(logger('dev'));

//
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/hal+json' })); // parse application/hal+json as json
app.use(bodyParser.urlencoded()); // parse application/x-www-form-urlencoded

// cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// dir mapping
var favicon = require('serve-favicon');
app.use(favicon(abs('fav.ico')));
app.use(express.static(abs('fe')));

// load routes
var routes = require('./routes');
var pageRoutes = routes.page(app);
var errorRoutes = routes.error(app);
utils.each(routes, function() { app.use(this); });
utils.each(errorRoutes, function() { app.use(this); });

// export
module.exports = app;
