/*
* global
* author: ronglin
* create date: 2014.6.23
*/

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// dir mapping
var favicon = require('serve-favicon');
app.use(favicon(abs('fav.ico')));
app.use(express.static(abs('fe')));

// load routes
var routes = require('./routes')(app);
for (var key in routes) {
    app.use(key, routes[key]);
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler, will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler, no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// export
module.exports = app;
