/*
* mvcActionResults
* author: ronglin
* create date: 2014.6.30
*/

'use strict';

var utils = require('./utilities');


/* baseResult
***************************************/
var baseResult = exports.baseResult = function(set) {
    var self = this;
    utils.each(set, function (key, val) {
        if (val) { self[key] = val;}
    });
};

baseResult.prototype = {
    constructor: baseResult,
    execute: function(req, res) {
        throw new Error('"execute" function needs override by sub classes.');
    }
};


/* emptyResult
***************************************/
var emptyResult = exports.emptyResult = function(set) {
    emptyResult.superclass.constructor.call(this, set);
};

utils.inherit(emptyResult, baseResult, {

    execute: function(req, res) {
        res.set('Content-Type', 'text/html');
        res.send('');
    }
});


/* httpStatusCodeResult
***************************************/
var httpStatusCodeResult = exports.httpStatusCodeResult = function(set) {
    httpStatusCodeResult.superclass.constructor.call(this, set);
};

utils.inherit(httpStatusCodeResult, baseResult, {

    statusCode: null, statusDescription: null,

    execute: function(req, res) {
        res.send(this.statusDescription, this.statusCode);
    }
});


/* httpNotFoundResult
***************************************/
var httpNotFoundResult = exports.httpNotFoundResult = function(set) {
    httpNotFoundResult.superclass.constructor.call(this, set);
    this.statusDescription = 404;
};

utils.inherit(httpNotFoundResult, httpStatusCodeResult, {
});


/* fileResult
***************************************/
var fileResult = exports.fileResult = function(set) {
    fileResult.superclass.constructor.call(this, set);
};

utils.inherit(fileResult, baseResult, {

    execute: function(req, res) {
        
    }
});


/* jsonResult
***************************************/
var jsonResult = exports.jsonResult = function(set) {
    jsonResult.superclass.constructor.call(this, set);
};

utils.inherit(jsonResult, baseResult, {

    data: null, contentType: 'application/json',

    execute: function(req, res) {
        res.set('Content-Type', this.contentType);
        res.json(this.data);
    }
});


/* jsonpResult
***************************************/
var jsonpResult = exports.jsonpResult = function(set) {
    jsonpResult.superclass.constructor.call(this, set);
};

utils.inherit(jsonpResult, baseResult, {

    data: null, contentType: 'application/json', callbackName: 'callback',

    execute: function(req, res) {
        var old = res.app.get('jsonp callback name');
        res.app.set('jsonp callback name', this.callbackName);
        res.set('Content-Type', this.contentType);
        res.jsonp(this.data);
        res.app.set('jsonp callback name', old);
    }
});


/* partialViewResult
***************************************/
var partialViewResult = exports.partialViewResult = function(set) {
    partialViewResult.superclass.constructor.call(this, set);
};

utils.inherit(partialViewResult, baseResult, {

    execute: function(req, res) {
        
    }
});


/* viewResult
***************************************/
var viewResult = exports.viewResult = function(set) {
    viewResult.superclass.constructor.call(this, set);
};

utils.inherit(viewResult, baseResult, {

    execute: function(req, res) {
        
    }
});


/* contentResult
***************************************/
var contentResult = exports.contentResult = function(set) {
    contentResult.superclass.constructor.call(this, set);
};

utils.inherit(contentResult, baseResult, {

    content: null, contentType: 'text/html',

    execute: function(req, res) {
        res.set('Content-Type', this.contentType);
        res.send(this.content);
    }
});


/* redirectResult
***************************************/
var redirectResult = exports.redirectResult = function(set) {
    redirectResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectResult, baseResult, {

    url: null, statusCode: 301,

    execute: function(req, res) {
        res.redirect(this.url, this.statusCode);
    }
});


/* redirectToActionResult
***************************************/
var redirectToActionResult = exports.redirectToActionResult = function(set) {
    redirectToActionResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectToActionResult, baseResult, {

    execute: function(req, res) {
        
    }
});


/* redirectToActionPermanentResult
***************************************/
var redirectToActionPermanentResult = exports.redirectToActionPermanentResult = function(set) {
    redirectToActionPermanentResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectToActionPermanentResult, baseResult, {

    execute: function(req, res) {
        
    }
});
