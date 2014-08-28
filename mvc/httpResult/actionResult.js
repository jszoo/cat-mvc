/*
* actionResult
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.30
*/

//'use strict';

var http = require('http'),
    utils = require('zoo-utils'),
    mvcHelper = require('../mvcHelper'),
    httpStatusCodeEnum = require('../httpStatusCode');


/* baseResult
***************************************/
var baseResult = exports.baseResult = function(set) {
    var self = this;
    utils.each(set, function(key, val) {
        if (val !== undefined && val !== null) {
            self[key] = val;
        }
    });
};

baseResult.prototype = {
    constructor: baseResult,
    executeResult: function(controllerContext, callback) {
        throw new Error('"executeResult" interface function needs override by sub classes.');
    }
};


/* emptyResult
***************************************/
var emptyResult = exports.empty = function() {
    this.inherited();
};

utils.inherit(emptyResult, baseResult, {
    executeResult: function(controllerContext, callback) {
        controllerContext.zoo.response.contentType('text/plain');
        controllerContext.zoo.response.send('');
        callback();
    }
});


/* jsonResult
***************************************/
var jsonResult = exports.json = function(data, contentType) {
    this.inherited({
        data: data, contentType: contentType
    });
};

utils.inherit(jsonResult, baseResult, {
    data: null, contentType: 'application/json',
    executeResult: function(controllerContext, callback) {
        var json = JSON.stringify(this.data);
        //
        controllerContext.zoo.response.contentType(this.contentType);
        controllerContext.zoo.response.send(json);
        callback();
    }
});


/* jsonpResult
***************************************/
var jsonpResult = exports.jsonp = function(data, callbackName) {
    this.inherited({
        data: data, callbackName: callbackName
    });
};

utils.inherit(jsonpResult, baseResult, {
    data: null, contentType: 'text/javascript', callbackName: 'callback',
    executeResult: function(controllerContext, callback) {
        //
        var json = JSON.stringify(this.data).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
        var jsonp = utils.format('typeof {0} === "function" && {0}({1});', this.callbackName, json);
        //
        controllerContext.zoo.response.contentType(this.contentType);
        controllerContext.zoo.response.send(jsonp);
        callback();
    }
});


/* viewResult
***************************************/
var viewResult = exports.view = function(viewName, model) {
    if (!utils.isString(viewName)) {
        model = viewName;
        viewName = null;
    }
    this.inherited({
        viewName: viewName, model: model
    });
};

utils.inherit(viewResult, baseResult, {
    viewName: null, model: null, view: null,
    executeResult: function(controllerContext, callback) {
        //
        var self = this;
        var render = function(view, done) {
            if (!utils.isFunction(view.render)) {
                done(new Error('Can not find the interface function "render(viewContext, callback)" in the view'));
                return;
            }
            //
            var viewData = controllerContext.controller.viewData;
            if (self.model) { viewData.model(self.model); }
            //
            var viewContext = controllerContext.toViewContext({
                tempData: controllerContext.controller.tempData,
                viewData: viewData
            });
            view.render(viewContext, function(err, str) {
                var exp;
                try {
                    viewContext.destroy();
                    if (!err) { controllerContext.zoo.response.send(str); }
                } catch (ex) {
                    exp = ex;
                }
                done(err || exp);
            });
        };
        //
        if (this.view) {
            render(this.view, function(err) {
                callback(err);
            });
        } else {
            var viewName = this.viewName;
            if (!viewName) { viewName = mvcHelper.findRouteItem(controllerContext.routeData, 'action').value; }
            //
            var viewEngines = controllerContext.app.viewEngines;
            viewEngines.findView(controllerContext, viewName, function(err, viewEngineResult) {
                if (err) {
                    callback(err);
                    return;
                }
                if (!viewEngineResult.view) {
                    var locationsMsg = viewEngineResult.searchedLocations.join('<br/>');
                    callback(new Error(utils.format('Failed to lookup view "{0}" in the following locations<br/>{1}', viewName, locationsMsg)));
                    return;
                }
                render(viewEngineResult.view, function(err) {
                    var exp;
                    try {
                        viewEngineResult.viewEngine.releaseView(controllerContext, viewEngineResult.view);
                    } catch (ex) {
                        exp = ex;
                    }
                    callback(err || exp);
                });
            });
        }
    }
});


/* fileResult
***************************************/
var fileResult = exports.file = function(filePath, fileDownloadName) {
    this.inherited({
        filePath: filePath, fileDownloadName: fileDownloadName
    });
};

utils.inherit(fileResult, baseResult, {
    filePath: null, fileDownloadName: null,
    executeResult: function(controllerContext, callback) {
        controllerContext.zoo.response.download(this.filePath, this.fileDownloadName, function(err) {
            callback(err);
        });
    }
});


/* contentResult
***************************************/
var contentResult = exports.content = function(content, contentType) {
    this.inherited({
        content: content, contentType: contentType
    });
};

utils.inherit(contentResult, baseResult, {
    content: null, contentType: 'text/plain',
    executeResult: function(controllerContext, callback) {
        //
        var text = this.content;
        if (!utils.isString(text)) { text = String(text); }
        //
        controllerContext.zoo.response.contentType(this.contentType);
        controllerContext.zoo.response.send(text);
        callback();
    }
});


/* httpStatusCodeResult
***************************************/
var httpStatusCodeResult = exports.httpStatusCode = function(statusCode, statusText) {
    this.inherited({
        statusCode: statusCode, statusText: statusText
    });
};

utils.inherit(httpStatusCodeResult, baseResult, {
    statusCode: null, statusText: null,
    executeResult: function(controllerContext, callback) {
        //
        var message = this.statusText;
        if (!message) { message = http.STATUS_CODES[this.statusCode]; }
        //
        controllerContext.exception = new Error(message);
        controllerContext.exception.status = this.statusCode;
        callback();
    }
});


/* httpNotFoundResult
***************************************/
var httpNotFoundResult = exports.httpNotFound = function(statusText) {
    this.inherited(httpStatusCodeEnum.NotFound, statusText);
};

utils.inherit(httpNotFoundResult, httpStatusCodeResult, {
    executeResult: function() {
        this.inherited.apply(this, arguments);
    }
});


/* httpUnauthorizedResult
***************************************/
var httpUnauthorizedResult = exports.httpUnauthorized = function(statusText) {
    this.inherited(httpStatusCodeEnum.Unauthorized, statusText);
};

utils.inherit(httpUnauthorizedResult, httpStatusCodeResult, {
    executeResult: function() {
        this.inherited.apply(this, arguments);
    }
});


/* redirectResult
***************************************/
var redirectResult = exports.redirect = function(url, permanent) {
    this.inherited({
        url: url, permanent: permanent
    });
};

utils.inherit(redirectResult, baseResult, {
    url: null, permanent: false,
    executeResult: function(controllerContext, callback) {
        controllerContext.zoo.response.redirect(this.url, this.permanent);
        callback();
    }
});


/* redirectToRouteResult
***************************************/
var redirectToRouteResult = exports.redirectToRoute = function(routeName, routeValues, permanent) {
    if (!utils.isString(routeName)) {
        routeValues = routeName;
        routeName = null;
    }
    this.inherited({
        routeName: routeName, routeValues: routeValues, permanent: !!permanent
    });
};

utils.inherit(redirectToRouteResult, baseResult, {
    routeName: null, routeValues: null, permanent: false,
    executeResult: function(controllerContext, callback) {
        controllerContext.controller.tempData.keep();
        var url = mvcHelper.generateUrl(this.routeName, null, null, this.routeValues, controllerContext.routeSet, controllerContext, false);
        controllerContext.zoo.response.redirect(url, this.permanent);
        callback();
    }
});


/* redirectToRoutePermanentResult
***************************************/
var redirectToRoutePermanentResult = exports.redirectToRoutePermanent = function(routeName, routeValues) {
    this.inherited(routeName, routeValues, true);
};

utils.inherit(redirectToRoutePermanentResult, redirectToRouteResult, {
    executeResult: function() {
        this.inherited.apply(this, arguments);
    }
});


/* redirectToActionResult
***************************************/
var redirectToActionResult = exports.redirectToAction = function(actionName, controllerName, routeValues, permanent) {
    if (!utils.isString(controllerName)) {
        routeValues = controllerName;
        controllerName = null;
    }
    this._args = { actionName: actionName, controllerName: controllerName, routeValues: routeValues };
    this.inherited(null, null, permanent);
};

utils.inherit(redirectToActionResult, redirectToRouteResult, {
    executeResult: function(controllerContext, callback) {
        var actionName = this._args.actionName, controllerName = this._args.controllerName, routeValues = this._args.routeValues;
        this.routeValues = mvcHelper.mergeRouteValues(actionName, controllerName, controllerContext.routeData, routeValues, true);
        this.inherited(controllerContext, callback);
    }
});


/* redirectToActionPermanentResult
***************************************/
var redirectToActionPermanentResult = exports.redirectToActionPermanent = function(actionName, controllerName, routeValues) {
    this.inherited(actionName, controllerName, routeValues, true);
};

utils.inherit(redirectToActionPermanentResult, redirectToActionResult, {
    executeResult: function() {
        this.inherited.apply(this, arguments);
    }
});
