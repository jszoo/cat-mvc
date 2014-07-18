/*
* mvcActionResult
* author: ronglin
* create date: 2014.6.30
*/

'use strict';

var http = require('http'),
    utils = require('./utilities'),
    mvcView = require('./mvcView'),
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
    executeResult: function(context) {
        throw new Error('"executeResult" function needs override by sub classes.');
    }
};


/* emptyResult
***************************************/
var emptyResult = exports.emptyResult = function(set) {
    emptyResult.superclass.constructor.call(this, set);
};

utils.inherit(emptyResult, baseResult, {
    executeResult: function(context) {
        context.rulee.response.header('Content-Type', 'text/plain');
        context.rulee.response.send('');
    }
});


/* jsonResult
***************************************/
var jsonResult = exports.jsonResult = function(set) {
    jsonResult.superclass.constructor.call(this, set);
};

utils.inherit(jsonResult, baseResult, {
    data: null, contentType: 'application/json',
    executeResult: function(context) {
        var json = JSON.stringify(this.data);
        //
        context.rulee.response.header('Content-Type', this.contentType);
        context.rulee.response.send(json);
    }
});


/* jsonpResult
***************************************/
var jsonpResult = exports.jsonpResult = function(set) {
    jsonpResult.superclass.constructor.call(this, set);
};

utils.inherit(jsonpResult, baseResult, {
    data: null, contentType: 'text/javascript', callbackName: 'callback',
    executeResult: function(context) {
        //
        var json = JSON.stringify(this.data).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
        var jsonp = utils.format('typeof {0} === "function" && {0}({1});', this.callbackName, json);
        //
        context.rulee.response.header('Content-Type', this.contentType);
        context.rulee.response.send(jsonp);
    }
});


/* partialViewResult
***************************************/
/*var partialViewResult = exports.partialViewResult = function(set) {
    partialViewResult.superclass.constructor.call(this, set);
};

utils.inherit(partialViewResult, baseResult, {
    viewName: null,
    executeResult: function(context) {
        if (!this.viewName) { this.viewName = mvcHelper.findRouteItem(context.routeData, 'action').value; }
        //TODO:
    }
});*/


/* viewResult
***************************************/
var viewResult = exports.viewResult = function(set) {
    viewResult.superclass.constructor.call(this, set);
};

utils.inherit(viewResult, baseResult, {
    viewName: null, viewData: null, tempData: null,
    executeResult: function(context, callback) {
        if (!this.viewData) { this.viewData = context.controller.viewData; }
        if (!this.tempData) { this.tempData = context.controller.tempData; }
        if (!this.viewName) { this.viewName = mvcHelper.findRouteItem(context.routeData, 'action').value; }
        //
        var viewContext = context.toViewContext({
            viewData: this.viewData,
            tempData: this.tempData
        });
        //
        var view = new mvcView(this.viewName);
        view.render(viewContext, function(err, str) {
            if (!err) { context.rulee.response.send(str);}
            viewContext.destroy();
            callback(err);
        });
    }
});


/* fileResult
***************************************/
var fileResult = exports.fileResult = function(set) {
    fileResult.superclass.constructor.call(this, set);
};

utils.inherit(fileResult, baseResult, {
    filePath: null, fileDownloadName: null,
    executeResult: function(context) {
        context.rulee.response.download(this.filePath, this.fileDownloadName);
    }
});


/* contentResult
***************************************/
var contentResult = exports.contentResult = function(set) {
    contentResult.superclass.constructor.call(this, set);
};

utils.inherit(contentResult, baseResult, {
    content: null, contentType: 'text/plain',
    executeResult: function(context) {
        //
        var text = this.content;
        if (!utils.isString(text)) { text = text + ''; }
        //
        context.rulee.response.header('Content-Type', this.contentType);
        context.rulee.response.send(text);
    }
});


/* httpStatusCodeResult
***************************************/
var httpStatusCodeResult = exports.httpStatusCodeResult = function(set) {
    httpStatusCodeResult.superclass.constructor.call(this, set);
};

utils.inherit(httpStatusCodeResult, baseResult, {
    statusCode: null, statusText: null,
    executeResult: function(context) {
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
    executeResult: function(context) {
        httpNotFoundResult.superclass.executeResult.call(this, context);
    }
});


/* redirectResult
***************************************/
var redirectResult = exports.redirectResult = function(set) {
    redirectResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectResult, baseResult, {
    url: null, permanent: false,
    executeResult: function(context) {
        context.rulee.response.redirect(this.url, this.permanent);
    }
});


/* redirectToRouteResult
***************************************/
var redirectToRouteResult = exports.redirectToRouteResult = function(set) {
    redirectToRouteResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectToRouteResult, baseResult, {
    routeName: null, routeValues: null, permanent: false,
    executeResult: function(context) {
        context.controller.tempData.keep();
        var url = mvcHelper.generateUrl(this.routeName, null, null, this.routeValues, context.routeSet, context, false);
        context.rulee.response.redirect(url, this.permanent);
    }
});

