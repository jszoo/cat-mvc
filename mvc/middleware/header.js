/*
* header
* author: ruleechen 
* contact: rulee@live.cn
* create date: 2014.7.11
*/

'use strict';

module.exports = function() {
    //
    return function(req, res, next, err) {
        //
        var enabled = req._app.get('x-headers-enabled');
        if (enabled) {
            //
            res.setHeader('X-Nodejs-Version', process.version);
            //
            var version = req._app.get('version');
            if (version) { res.setHeader('X-CatMVC-Version', version); }
        }
        //
        next(err);
    };
};
