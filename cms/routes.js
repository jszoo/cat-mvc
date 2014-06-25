/*
* routes
* author: ronglin
* create date: 2014.6.23
*/

var express = require('express');
var router = express.Router();
var cacheNotify = require('./node/cacheNotify');

//
var pages = [

    router.get('/', function(req, res) {
        res.render('index', {
            title: 'Express'
        });
    }),

    router.get('/users', function(req, res) {
        res.render('users', {
            users: [{
                username: 'Wilson'
            }, {
                username: 'Wilson Zhong'
            },{
                username: 'Zhong Wei'
            }]
        })
    }),

    router.get('/:type(p1|p2)/:id', function(req, res) {
        res.send(req.params.id);
    }),

    router.get('/admin', function(req, res) {
        var count = (req.session.count||0);
        count++;
        req.session.count = count;
        res.render('admin', {
            count: count
        });
    }),

    router.get('/cache', function(req, res) {
        cacheNotify.notify(req.query);
        res.json({ success: true });
    })
];

var errors = function(app) {

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
};

module.exports = {
    pages: function (app) {
        return pages;
    },
    errors: function (app) {
        return errors(app);
    }
};
