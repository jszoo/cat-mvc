/*
* routes
* author: ronglin
* create date: 2014.6.23
*/

module.exports = function(app) {
    //
    var express = require('express');
    var router = express.Router();
    //
    return {

        '/': router.get('/', function(req, res) {
            res.render('index', {
                title: 'Express'
            });
        }),

        '/users': router.get('/', function(req, res) {
            res.render('users', {
                users: [{
                    username: 'Wilson'
                }, {
                    username: 'Wilson Zhong'
                },{
                    username: 'Zhong Wei'
                }]
            })
        })
    };
};