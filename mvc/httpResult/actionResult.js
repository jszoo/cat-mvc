/*
* actionResult
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.30
*/

'use strict';

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


/* empty
***************************************/
var empty = exports.empty = function() {
    empty.superclass.constructor.call(this);
};

utils.inherit(empty, baseResult, {
    executeResult: function(controllerContext, callback) {
        controllerContext.zoo.response.contentType('text/plain');
        controllerContext.zoo.response.send('');
        callback();
    }
});


/* json
***************************************/
var json = exports.json = function(data, contentType) {
    json.superclass.constructor.call(this, {
        data: data, contentType: contentType
    });
};

utils.inherit(json, baseResult, {
    data: null, contentType: 'application/json',
    executeResult: function(controllerContext, callback) {
        var json = JSON.stringify(this.data);
        //
        controllerContext.zoo.response.contentType(this.contentType);
        controllerContext.zoo.response.send(json);
        callback();
    }
});


/* jsonp
***************************************/
var jsonp = exports.jsonp = function(data, callbackName) {
    jsonp.superclass.constructor.call(this, {
        data: data, callbackName: callbackName
    });
};

utils.inherit(jsonp, baseResult, {
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


/* view
***************************************/
var view = exports.view = function(viewName, model) {
    if (!utils.isString(viewName)) {
        model = viewName;
        viewName = null;
    }
    view.superclass.constructor.call(this, {
        viewName: viewName, model: model
    });
};

utils.inherit(view, baseResult, {
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


/* file
***************************************/
var file = exports.file = function(filePath, fileDownloadName) {
    file.superclass.constructor.call(this, {
        filePath: filePath, fileDownloadName: fileDownloadName
    });
};

utils.inherit(file, baseResult, {
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
    contentResult.superclass.constructor.call(this, {
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


/* httpStatusCode
***************************************/
var httpStatusCode = exports.httpStatusCode = function(statusCode, statusText) {
    httpStatusCode.superclass.constructor.call(this, {
        statusCode: statusCode, statusText: statusText
    });
};

utils.inherit(httpStatusCode, baseResult, {
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


/* httpNotFound
***************************************/
var httpNotFound = exports.httpNotFound = function(statusText) {
    httpNotFound.superclass.constructor.call(this, httpStatusCodeEnum.NotFound, statusText);
};

utils.inherit(httpNotFound, httpStatusCode, {
    executeResult: function() {
        httpNotFound.superclass.executeResult.apply(this, arguments);
    }
});


/* httpUnauthorized
***************************************/
var httpUnauthorized = exports.httpUnauthorized = function(statusText) {
    httpUnauthorized.superclass.constructor.call(this, httpStatusCodeEnum.Unauthorized, statusText);
};

utils.inherit(httpUnauthorized, httpStatusCode, {
    executeResult: function() {
        httpUnauthorized.superclass.executeResult.apply(this, arguments);
    }
});


/* redirect
***************************************/
var redirect = exports.redirect = function(url, permanent) {
    redirect.superclass.constructor.call(this, {
        url: url, permanent: permanent
    });
};

utils.inherit(redirect, baseResult, {
    url: null, permanent: false,
    executeResult: function(controllerContext, callback) {
        controllerContext.zoo.response.redirect(this.url, this.permanent);
        callback();
    }
});


/* redirectToRoute
***************************************/
var redirectToRoute = exports.redirectToRoute = function(routeName, routeValues, permanent) {
    if (!utils.isString(routeName)) {
        routeValues = routeName;
        routeName = null;
    }
    redirectToRoute.superclass.constructor.call(this, {
        routeName: routeName, routeValues: routeValues, permanent: !!permanent
    });
};

utils.inherit(redirectToRoute, baseResult, {
    routeName: null, routeValues: null, permanent: false,
    executeResult: function(controllerContext, callback) {
        controllerContext.controller.tempData.keep();
        var url = mvcHelper.generateUrl(this.routeName, null, null, this.routeValues, controllerContext.routeSet, controllerContext, false);
        controllerContext.zoo.response.redirect(url, this.permanent);
        callback();
    }
});


/* redirectToRoutePermanent
***************************************/
var redirectToRoutePermanent = exports.redirectToRoutePermanent = function(routeName, routeValues) {
    redirectToRoutePermanent.superclass.constructor.call(this, routeName, routeValues, true);
};

utils.inherit(redirectToRoutePermanent, redirectToRoute, {
    executeResult: function() {
        redirectToRoutePermanent.superclass.executeResult.apply(this, arguments);
    }
});


/* redirectToAction
***************************************/
var redirectToAction = exports.redirectToAction = function(actionName, controllerName, routeValues, permanent) {
    if (!utils.isString(controllerName)) {
        routeValues = controllerName;
        controllerName = null;
    }
    this._args = { actionName: actionName, controllerName: controllerName, routeValues: routeValues };
    redirectToAction.superclass.constructor.call(this, null, null, permanent);
};

utils.inherit(redirectToAction, redirectToRoute, {
    executeResult: function(controllerContext, callback) {
        var actionName = this._args.actionName, controllerName = this._args.controllerName, routeValues = this._args.routeValues;
        this.routeValues = mvcHelper.mergeRouteValues(actionName, controllerName, controllerContext.routeData, routeValues, true);
        redirectToAction.superclass.executeResult.call(this, controllerContext, callback);
    }
});


/* redirectToActionPermanent
***************************************/
var redirectToActionPermanent = exports.redirectToActionPermanent = function(actionName, controllerName, routeValues) {
    redirectToActionPermanent.superclass.constructor.call(this, actionName, controllerName, routeValues, true);
};

utils.inherit(redirectToActionPermanent, redirectToAction, {
    executeResult: function() {
        redirectToActionPermanent.superclass.executeResult.apply(this, arguments);
    }
});
