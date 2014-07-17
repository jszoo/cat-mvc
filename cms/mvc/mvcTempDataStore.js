/*
* mvcTempDataStore
* author: ronglin
* create date: 2014.7.1
*/

'use strict';

var utils = require('./utilities');

var sessionProvider = {

    sessionKey: '__controller_tempdata',

    loadTempData: function(httpContext) {
        var session = httpContext.rulee.request.session;
        if (session) {
            var values = session[this.sessionKey];
            if (values) {
                delete session[this.sessionKey];
                return values;
            }
        }
    },

    saveTempData: function(httpContext, values) {
        var session = httpContext.rulee.request.session;
        if (session) {
            if (utils.propCount(values) > 0) {
                session[this.sessionKey] = values;
            } else {
                delete session[this.sessionKey];
            }
        }
    }

};

exports.sessionProvider = sessionProvider;
