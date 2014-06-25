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

var combineUrl = function (url, params) {
    params = utils.extend({}, params, { verify: verify });
    return utils.setQuery(url, params);
};

var notifyServers = function(params) {
    utils.each(servers, function() {
        var url = combineUrl(this.cacheUrl, params);
        console.log(url);
        request(url, function(error, response, body) {
            if (error) {
                console.log('request error: ' + url);
            }
        });
    });
};

cache.storage.events.on('clear', notifyServers);
cache.storage.events.on('remove', notifyServers);

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