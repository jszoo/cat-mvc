/*
* logon
* author: ronglin
* create date: 2014.6.26
*/

var mvc = require('../../../node/mvc');

module.exports = mvc.controller(function(req, res) {

    this.on('actionExecuting', function(action) { });
    this.on('actionExecuted', function(action) { });


    this.action('index', function() {
        res.json({ Get: true });
    });

    this.action('index', 'post', function(UserName, Password, User, ArticleId) {
        res.json({ Post: true });
    });

    this.action('forgotPassword', function() {
    });

    this.action('forgotPassword', 'post', function() {
    });

    this.action('resetPassword', function() {
    });

    this.action('resetPassword', 'post', function() {
    });


    this.action('admin', function() {
        if (!req.session.loggedin) {
            res.redirect('/login');
        } else {
            var count = (req.session.count||0);
            count++;
            req.session.count = count;
            res.render('admin', {
                count: count
            });
        }
    });

    this.action('login', function() {
        if (req.session.loggedin) {
            res.redirect('/admin');
        } else {
            res.render('login');
        }
    });

    this.action('login', 'post', function() {
        if (req.body['UserName'] === 'admin' && req.body['Password'] === 'admin') {
            req.session.loggedin = true;
            res.redirect('/admin');
        } else {
            res.redirect('/login');
        }
    });

    this.action('logout', function() {
        req.session.destroy();
        res.redirect('/');
    });

});