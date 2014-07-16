/*
* cachingNotifyRemote
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var request = require('request'),
    caching = require('../node/caching'),
    utils = require('../node/utilities'),
    config = require('./configuration').load('web.config');

var verify = config.get('cacheNotify.verify');
var remotes = config.get('cacheNotify.remotes');

var notifyRemotes = function(params) {
    var query = utils.extend({}, params, { verify: verify });
    utils.each(remotes, function() {
        var url = utils.setQuery(this.cacheUrl, query);
        request(url, function(error, response, body) {
            if (error) {
                console.log('request error: ' + url);
            }
        });
    });
};
caching.store.events.on('clear', function(params) {
    params.action = 'clear';
    notifyRemotes(params);
});
caching.store.events.on('remove', function(params) {
    params.action = 'remove';
    notifyRemotes(params);
});

module.exports = {
    accept: function (params) {
        params = params || {};
        if (params.verify === verify) {
            if (params.action === 'remove' || params.action === 'clear') {
                if (params.region && params.key) {
                    caching.store.remove(params.region, params.key);
                } else if (params.region) {
                    caching.store.clear(params.region);
                }
            }
        }
    }
};
