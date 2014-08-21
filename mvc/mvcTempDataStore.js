/*
* mvcTempDataStore
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.1
*/

'use strict';

var utils = require('zoo-utils');

var sessionProvider = {

    sessionKey: '__controller_tempdata',

    loadTempData: function(httpContext) {
        var session = httpContext.zoo.request.session;
        if (session) {
            var values = session[this.sessionKey];
            if (values) {
                session[this.sessionKey] = undefined;
                return values;
            }
        }
    },

    saveTempData: function(httpContext, values) {
        var session = httpContext.zoo.request.session;
        if (session) {
            if (utils.propCount(values) > 0) {
                session[this.sessionKey] = values;
            }
            else if (session[this.sessionKey] !== undefined){
                session[this.sessionKey] = undefined;
            }
        }
    }

};

exports.sessionProvider = sessionProvider;
