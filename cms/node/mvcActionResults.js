/*
* mvcActionResults
* author: ronglin
* create date: 2014.6.30
*/

'use strict';

var utils = require('./utilities'),
    mvcHelperUrl = require('./mvcHelperUrl');


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
        context.response.set('Content-Type', 'text/html');
        context.response.send('');
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
        context.response.set('Content-Type', this.contentType);
        context.response.json(this.data);
    }
});


/* jsonpResult
***************************************/
var jsonpResult = exports.jsonpResult = function(set) {
    jsonpResult.superclass.constructor.call(this, set);
};

utils.inherit(jsonpResult, baseResult, {
    data: null, contentType: 'application/json', callbackName: 'callback',
    execute: function(context) {
        var old = context.response.app.get('jsonp callback name');
        context.response.app.set('jsonp callback name', this.callbackName);
        context.response.set('Content-Type', this.contentType);
        context.response.jsonp(this.data);
        context.response.app.set('jsonp callback name', old);
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
        //TODO:
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
        context.response.download(this.filePath, this.fileDownloadName);
    }
});


/* contentResult
***************************************/
var contentResult = exports.contentResult = function(set) {
    contentResult.superclass.constructor.call(this, set);
};

utils.inherit(contentResult, baseResult, {
    content: null, contentType: 'text/html',
    execute: function(context) {
        context.response.set('Content-Type', this.contentType);
        context.response.send(this.content);
    }
});


/* httpStatusCodeResult
***************************************/
var httpStatusCodeResult = exports.httpStatusCodeResult = function(set) {
    httpStatusCodeResult.superclass.constructor.call(this, set);
};

utils.inherit(httpStatusCodeResult, baseResult, {
    statusCode: null, statusDescription: null,
    execute: function(context) {
        context.response.send(this.statusDescription, this.statusCode);
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
        if (this.permanent) {
            context.response.redirect(this.url, 301);
        } else {
            context.response.redirect(this.url, 302);
        }
    }
});


/* redirectToRouteResult
***************************************/
var redirectToRouteResult = exports.redirectToRouteResult = function(set) {
    redirectToRouteResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectToRouteResult, baseResult, {
    routeValues: null, permanent: false,
    execute: function(context) {
        var url = mvcHelperUrl.generateUrl(null, null, this.routeValues, context.request.routeSet, context.request, false);
        if (this.permanent) {
            context.response.redirect(url, 301);
        } else {
            context.response.redirect(url, 302);
        }
    }
});

