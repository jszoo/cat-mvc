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
    utils.extend(this, set);
};

baseResult.prototype = {
    constructor: baseResult,
    execute: function(req, res) {
    }
};


/* emptyResult
***************************************/
var emptyResult = exports.emptyResult = function(set) {
    emptyResult.superclass.constructor.call(this, set);
};

utils.inherit(emptyResult, baseResult, {

    execute:function(req, res) {
        
    }
});


/* httpNotFoundResult
***************************************/
var httpNotFoundResult = exports.httpNotFoundResult = function(set) {
    httpNotFoundResult.superclass.constructor.call(this, set);
};

utils.inherit(httpNotFoundResult, baseResult, {

    execute:function(req, res) {
        
    }
});


/* fileResult
***************************************/
var fileResult = exports.fileResult = function(set) {
    fileResult.superclass.constructor.call(this, set);
};

utils.inherit(fileResult, baseResult, {

    execute:function(req, res) {
        
    }
});


/* jsonResult
***************************************/
var jsonResult = exports.jsonResult = function(set) {
    jsonResult.superclass.constructor.call(this, set);
};

utils.inherit(jsonResult, baseResult, {

    execute:function(req, res) {
        
    }
});


/* partialViewResult
***************************************/
var partialViewResult = exports.partialViewResult = function(set) {
    partialViewResult.superclass.constructor.call(this, set);
};

utils.inherit(partialViewResult, baseResult, {

    execute:function(req, res) {
        
    }
});


/* viewResult
***************************************/
var viewResult = exports.viewResult = function(set) {
    viewResult.superclass.constructor.call(this, set);
};

utils.inherit(viewResult, baseResult, {

    execute:function(req, res) {
        
    }
});


/* contentResult
***************************************/
var contentResult = exports.contentResult = function(set) {
    contentResult.superclass.constructor.call(this, set);
};

utils.inherit(contentResult, baseResult, {

    execute:function(req, res) {
        
    }
});


/* redirectResult
***************************************/
var redirectResult = exports.redirectResult = function(set) {
    redirectResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectResult, baseResult, {

    execute:function(req, res) {
        
    }
});


/* redirectToActionResult
***************************************/
var redirectToActionResult = exports.redirectToActionResult = function(set) {
    redirectToActionResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectToActionResult, baseResult, {

    execute:function(req, res) {
        
    }
});


/* redirectToActionPermanentResult
***************************************/
var redirectToActionPermanentResult = exports.redirectToActionPermanentResult = function(set) {
    redirectToActionPermanentResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectToActionPermanentResult, baseResult, {

    execute:function(req, res) {
        
    }
});
