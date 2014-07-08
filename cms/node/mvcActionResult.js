/*
* mvcActionResult
* author: ronglin
* create date: 2014.6.30
*/

'use strict';

var http = require('http'),
    utils = require('./utilities'),
    mvcHelper = require('./mvcHelper');


/* baseResult
***************************************/
var baseResult = exports.baseResult = function(set) {
    var self = this;
    utils.each(set, function (key, val) {
        if (val !== undefined && val !== null) {
            self[key] = val;
        }
    });
};

baseResult.prototype = {
    constructor: baseResult, className: 'mvcActionResult',
    execute: function(context) {
        throw new Error('"execute" function needs override by sub classes.');
    }
};


/* emptyResult
***************************************/
var emptyResult = exports.emptyResult = function(set) {
    emptyResult.superclass.constructor.call(this, set);
};

utils.inherit(emptyResult, baseResult, {
    execute: function(context) {
        context.response.rulee.header('Content-Type', 'text/plain');
        context.response.rulee.send('');
    }
});


/* jsonResult
***************************************/
var jsonResult = exports.jsonResult = function(set) {
    jsonResult.superclass.constructor.call(this, set);
};

utils.inherit(jsonResult, baseResult, {
    data: null, contentType: 'application/json',
    execute: function(context) {
        var json = JSON.stringify(this.data);
        //
        context.response.rulee.header('Content-Type', this.contentType);
        context.response.rulee.send(json);
    }
});


/* jsonpResult
***************************************/
var jsonpResult = exports.jsonpResult = function(set) {
    jsonpResult.superclass.constructor.call(this, set);
};

utils.inherit(jsonpResult, baseResult, {
    data: null, contentType: 'text/javascript', callbackName: 'callback',
    execute: function(context) {
        //
        var json = JSON.stringify(this.data).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
        var jsonp = utils.format('typeof {0} === "function" && {0}({1});', this.callbackName, json);
        //
        context.response.rulee.header('Content-Type', this.contentType);
        context.response.rulee.send(jsonp);
    }
});


/* partialViewResult
***************************************/
var partialViewResult = exports.partialViewResult = function(set) {
    partialViewResult.superclass.constructor.call(this, set);
};

utils.inherit(partialViewResult, baseResult, {
    viewName: null,
    execute: function(context) {
        //TODO:
    }
});


/* viewResult
***************************************/
var viewResult = exports.viewResult = function(set) {
    viewResult.superclass.constructor.call(this, set);
};

utils.inherit(viewResult, baseResult, {
    viewName: null, model: null,
    execute: function(context) {
        var areaParam = findRouteValue(context.routeData, 'area', 0);
        var controllerParam = findRouteValue(context.routeData, 'controller', 1);
        var actionParam = findRouteValue(context.routeData, 'action', 2);
        var viewPath = areaPath + '/' + controllerParam.value + '/' + actionParam.value;
    }
});


/* fileResult
***************************************/
var fileResult = exports.fileResult = function(set) {
    fileResult.superclass.constructor.call(this, set);
};

utils.inherit(fileResult, baseResult, {
    filePath: null, fileDownloadName: null,
    execute: function(context) {
        context.response.rulee.download(this.filePath, this.fileDownloadName);
    }
});


/* contentResult
***************************************/
var contentResult = exports.contentResult = function(set) {
    contentResult.superclass.constructor.call(this, set);
};

utils.inherit(contentResult, baseResult, {
    content: null, contentType: 'text/plain',
    execute: function(context) {
        //
        var text = this.content;
        if (!utils.isString(text)) { text = text + ''; }
        //
        context.response.rulee.header('Content-Type', this.contentType);
        context.response.rulee.send(text);
    }
});


/* httpStatusCodeResult
***************************************/
var httpStatusCodeResult = exports.httpStatusCodeResult = function(set) {
    httpStatusCodeResult.superclass.constructor.call(this, set);
};

utils.inherit(httpStatusCodeResult, baseResult, {
    statusCode: null, statusText: null,
    execute: function(context) {
        //
        var message = this.statusText;
        if (!message) { message = http.STATUS_CODES[this.statusCode];}
        //
        context.exception = new Error(message);
        context.exception.status = this.statusCode;
    }
});


/* httpNotFoundResult
***************************************/
var httpNotFoundResult = exports.httpNotFoundResult = function(set) {
    httpNotFoundResult.superclass.constructor.call(this, set);
    this.statusCode = 404;
};

utils.inherit(httpNotFoundResult, httpStatusCodeResult, {
    execute: function(context) {
        httpNotFoundResult.superclass.execute.call(this, context);
    }
});


/* redirectResult
***************************************/
var redirectResult = exports.redirectResult = function(set) {
    redirectResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectResult, baseResult, {
    url: null, permanent: false,
    execute: function(context) {
        context.response.rulee.redirect(this.url, this.permanent);
    }
});


/* redirectToRouteResult
***************************************/
var redirectToRouteResult = exports.redirectToRouteResult = function(set) {
    redirectToRouteResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectToRouteResult, baseResult, {
    routeName: null, routeValues: null, permanent: false,
    execute: function(context) {
        context.controller.tempData.keep();
        var url = mvcHelper.generateUrl(this.routeName, null, null, this.routeValues, context.routeSet, context, false);
        context.response.rulee.redirect(url, this.permanent);
    }
});

