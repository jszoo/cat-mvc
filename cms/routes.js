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
    return [

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
        })
    ];
};