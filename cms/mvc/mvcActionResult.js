/*
* mvcActionResult
* author: ronglin
* create date: 2014.6.30
*/

'use strict';

var http = require('http'),
    utils = require('./utilities'),
    mvcHelper = require('./mvcHelper'),
    mvcHttpStatusCode = require('./mvcHttpStatusCode');


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
    executeResult: function(controllerContext, callback) {
        throw new Error('"executeResult" interface function needs override by sub classes.');
    }
};


/* emptyResult
***************************************/
var emptyResult = exports.emptyResult = function(set) {
    emptyResult.superclass.constructor.call(this, set);
};

utils.inherit(emptyResult, baseResult, {
    executeResult: function(controllerContext, callback) {
        controllerContext.rulee.response.header('Content-Type', 'text/plain');
        controllerContext.rulee.response.send('');
        callback();
    }
});


/* jsonResult
***************************************/
var jsonResult = exports.jsonResult = function(set) {
    jsonResult.superclass.constructor.call(this, set);
};

utils.inherit(jsonResult, baseResult, {
    data: null, contentType: 'application/json',
    executeResult: function(controllerContext, callback) {
        var json = JSON.stringify(this.data);
        //
        controllerContext.rulee.response.header('Content-Type', this.contentType);
        controllerContext.rulee.response.send(json);
        callback();
    }
});


/* jsonpResult
***************************************/
var jsonpResult = exports.jsonpResult = function(set) {
    jsonpResult.superclass.constructor.call(this, set);
};

utils.inherit(jsonpResult, baseResult, {
    data: null, contentType: 'text/javascript', callbackName: 'callback',
    executeResult: function(controllerContext, callback) {
        //
        var json = JSON.stringify(this.data).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
        var jsonp = utils.format('typeof {0} === "function" && {0}({1});', this.callbackName, json);
        //
        controllerContext.rulee.response.header('Content-Type', this.contentType);
        controllerContext.rulee.response.send(jsonp);
        callback();
    }
});


/* partialViewResult
***************************************/
/*var partialViewResult = exports.partialViewResult = function(set) {
    partialViewResult.superclass.constructor.call(this, set);
};

utils.inherit(partialViewResult, baseResult, {
    viewName: null,
    executeResult: function(controllerContext) {
        if (!this.viewName) { this.viewName = mvcHelper.findRouteItem(controllerContext.routeData, 'action').value; }
        //TODO:
    }
});*/


/* viewResult
***************************************/
var viewResult = exports.viewResult = function(set) {
    viewResult.superclass.constructor.call(this, set);
};

utils.inherit(viewResult, baseResult, {
    viewName: null, viewData: null, tempData: null, view: null,
    executeResult: function(controllerContext, callback) {
        if (!this.viewData) { this.viewData = controllerContext.controller.viewData; }
        if (!this.tempData) { this.tempData = controllerContext.controller.tempData; }
        //
        var viewEngineResult;
        if (!this.view) {
            viewEngineResult = this.findView(controllerContext);
            this.view = viewEngineResult.view;
        }
        if (!utils.isFunction(this.view.render)) {
            throw new Error('Can not find the interface function: "render(viewContext, callback)", please implement it in the view.')
        }
        var viewContext = controllerContext.toViewContext({
            viewData: this.viewData,
            tempData: this.tempData
        });
        this.view.render(viewContext, function(err, str) {
            if (!err) { controllerContext.rulee.response.send(str); }
            if (viewEngineResult) { viewEngineResult.viewEngine.releaseView(controllerContext, this.view); }
            viewContext.destroy();
            callback(err);
        });
    },
    findView: function(controllerContext) {
        if (!this.viewName) { this.viewName = mvcHelper.findRouteItem(controllerContext.routeData, 'action').value; }
        var viewEngines = controllerContext.app.viewEngines;
        var viewEngineResult = viewEngines.findView(controllerContext, this.viewName);
        if (viewEngineResult.view) {
            return viewEngineResult;
        } else {
            throw new Error('Failed to lookup view "' + this.viewName + '" in the following locations <br/>' + viewEngineResult.searchedLocations.join('<br/>'));
        }
    }
});


/* fileResult
***************************************/
var fileResult = exports.fileResult = function(set) {
    fileResult.superclass.constructor.call(this, set);
};

utils.inherit(fileResult, baseResult, {
    filePath: null, fileDownloadName: null,
    executeResult: function(controllerContext, callback) {
        controllerContext.rulee.response.download(this.filePath, this.fileDownloadName);
        callback();
    }
});


/* contentResult
***************************************/
var contentResult = exports.contentResult = function(set) {
    contentResult.superclass.constructor.call(this, set);
};

utils.inherit(contentResult, baseResult, {
    content: null, contentType: 'text/plain',
    executeResult: function(controllerContext, callback) {
        //
        var text = this.content;
        if (!utils.isString(text)) { text = text + ''; }
        //
        controllerContext.rulee.response.header('Content-Type', this.contentType);
        controllerContext.rulee.response.send(text);
        callback();
    }
});


/* httpStatusCodeResult
***************************************/
var httpStatusCodeResult = exports.httpStatusCodeResult = function(set) {
    httpStatusCodeResult.superclass.constructor.call(this, set);
};

utils.inherit(httpStatusCodeResult, baseResult, {
    statusCode: null, statusText: null,
    executeResult: function(controllerContext, callback) {
        //
        var message = this.statusText;
        if (!message) { message = http.STATUS_CODES[this.statusCode];}
        //
        controllerContext.exception = new Error(message);
        controllerContext.exception.status = this.statusCode;
        callback();
    }
});


/* httpNotFoundResult
***************************************/
var httpNotFoundResult = exports.httpNotFoundResult = function(set) {
    httpNotFoundResult.superclass.constructor.call(this, set);
    this.statusCode = mvcHttpStatusCode.NotFound;
};

utils.inherit(httpNotFoundResult, httpStatusCodeResult, {
    executeResult: function(controllerContext, callback) {
        httpNotFoundResult.superclass.executeResult.call(this, controllerContext, callback);
    }
});


/* httpUnauthorizedResult
***************************************/
var httpUnauthorizedResult = exports.httpUnauthorizedResult = function(set) {
    httpUnauthorizedResult.superclass.constructor.call(this, set);
    this.statusCode = mvcHttpStatusCode.Unauthorized;
};

utils.inherit(httpUnauthorizedResult, httpStatusCodeResult, {
    executeResult: function(controllerContext, callback) {
        httpUnauthorizedResult.superclass.executeResult.call(this, controllerContext, callback);
    }
});


/* redirectResult
***************************************/
var redirectResult = exports.redirectResult = function(set) {
    redirectResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectResult, baseResult, {
    url: null, permanent: false,
    executeResult: function(controllerContext, callback) {
        controllerContext.rulee.response.redirect(this.url, this.permanent);
        callback();
    }
});


/* redirectToRouteResult
***************************************/
var redirectToRouteResult = exports.redirectToRouteResult = function(set) {
    redirectToRouteResult.superclass.constructor.call(this, set);
};

utils.inherit(redirectToRouteResult, baseResult, {
    routeName: null, routeValues: null, permanent: false,
    executeResult: function(controllerContext, callback) {
        controllerContext.controller.tempData.keep();
        var url = mvcHelper.generateUrl(this.routeName, null, null, this.routeValues, controllerContext.routeSet, controllerContext, false);
        controllerContext.rulee.response.redirect(url, this.permanent);
        callback();
    }
});

