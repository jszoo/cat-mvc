/*
* logon
* author: ronglin
* create date: 2014.6.26
*/

var mvc = require('../../../node/mvc');

module.exports = mvc.controller(function(req, res, session, end) {

    this.on('actionExecuting', function(context) { });
    this.on('actionExecuted', function(context) { });


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
        if (!session.loggedin) {
            end.redirectToAction('login');
        } else {
            var count = (session.count || 0);
            session.count = (++count);
            end.view({ count: count });
        }
    });

    this.action('login', function() {
        if (session.loggedin) {
            end.redirectToAction('admin');
        } else {
            end.view();
        }
    });

    this.action('login', 'post', function(UserName, Password) {
        if (UserName === 'admin' && Password === 'admin') {
            session.loggedin = true;
            end.redirectToAction('admin');
        } else {
            end.redirectToAction('login');
        }
    });

    this.action('logout', function() {
        session.destroy();
        end.redirectToAction('login');
    });

});