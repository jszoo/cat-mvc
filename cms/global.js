/*
* global
* author: ronglin
* create date: 2014.6.23
*/

var utils = require('./jsg/utilities');
var express = require('express');
var app = express();

var path = require('path');
var abs = function(rel) { 
	rel = rel.replace(/\//g, '\\');
	return path.join(__dirname, rel);
};

// web config
var setting = require('./node/setting');
var config = setting.load(abs('web.config'));

// view engine
app.set('views', abs('views'));
app.set('view engine', config.get('viewEngine.name'));

// log
var logger = require('morgan');
app.use(logger('dev'));

//
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/hal+json' })); // parse application/hal+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// dir mapping
var favicon = require('serve-favicon');
app.use(favicon(abs(config.get('favicon.source'))));
app.use(express.static(abs('fe')));

// load routes
var routes = require('.' + config.get('routeTable.source'));
utils.each(routes.pages(app), function() { app.use(this); });
utils.each(routes.errors(app), function() { app.use(this); });

// export
module.exports = app;
