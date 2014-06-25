/*
* cache.notifyRemote
* author: ronglin
* create date: 2014.6.24
*/

'use strict';

var request = require('request'),
    cache = require('./cache'),
    utils = require('./utilities'),
    config = require('./setting').load('/web.config');


var verify = config.get('cacheNotify.verify');
var servers = config.get('cacheNotify.servers');


var notifyServers = function(params) {
    var query = utils.extend({}, params, { verify: verify });
    utils.each(servers, function() {
        var url = utils.setQuery(this.cacheUrl, query);
        request(url, function(error, response, body) {
            if (error) {
                console.log('request error: ' + url);
            }
        });
    });
};
cache.storage.events.on('clear', function(params) {
    params.action = 'clear';
    notifyServers(params);
});
cache.storage.events.on('remove', function(params) {
    params.action = 'remove';
    notifyServers(params);
});


module.exports = {
    notify: function (params) {
        params = params || {};
        if (params.verify === verify) {
            if (params.action === 'remove' || params.action === 'clear') {
                if (params.region && params.key) {
                    cache.storage.remove(params.region, params.key);
                } else if (params.region) {
                    cache.storage.clear(params.region);
                }
            }
        }
    }
};