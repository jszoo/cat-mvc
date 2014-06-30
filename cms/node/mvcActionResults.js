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
    utils.extend(this, set);
};

emptyResult.prototype = {
    constructor: emptyResult
};


/* httpNotFoundResult
***************************************/
var httpNotFoundResult = exports.httpNotFoundResult = function(set) {
    utils.extend(this, set);
};

httpNotFoundResult.prototype = {
    constructor: httpNotFoundResult
};


/* fileResult
***************************************/
var fileResult = exports.fileResult = function(set) {
    utils.extend(this, set);
};

fileResult.prototype = {
    constructor: fileResult
};


/* jsonResult
***************************************/
var jsonResult = exports.jsonResult = function(set) {
    utils.extend(this, set);
};

jsonResult.prototype = {
    constructor: jsonResult
};


/* partialViewResult
***************************************/
var partialViewResult = exports.partialViewResult = function(set) {
    utils.extend(this, set);
};

partialViewResult.prototype = {
    constructor: partialViewResult
};


/* viewResult
***************************************/
var viewResult = exports.viewResult = function(set) {
    utils.extend(this, set);
};

viewResult.prototype = {
    constructor: viewResult
};


/* contentResult
***************************************/
var contentResult = exports.contentResult = function(set) {
    utils.extend(this, set);
};

contentResult.prototype = {
    constructor: contentResult
};


/* redirectResult
***************************************/
var redirectResult = exports.redirectResult = function(set) {
    utils.extend(this, set);
};

redirectResult.prototype = {
    constructor: redirectResult
};


/* redirectToActionResult
***************************************/
var redirectToActionResult = exports.redirectToActionResult = function(set) {
    utils.extend(this, set);
};

redirectToActionResult.prototype = {
    constructor: redirectToActionResult
};


/* redirectToActionPermanentResult
***************************************/
var redirectToActionPermanentResult = exports.redirectToActionPermanentResult = function(set) {
    utils.extend(this, set);
};

redirectToActionPermanentResult.prototype = {
    constructor: redirectToActionPermanentResult
};


