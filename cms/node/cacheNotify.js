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


var servers = config.get('cacheNotify.servers');

var combineUrl = function (url, params) {
    params = utils.extend({}, params, { site: '' });
    return utils.setQuery(url, params);
};

cache.storage.subscribe(function(params) {
    if (params.action === 'remove' || params.action === 'clear') {
        utils.each(servers, function() {
            var url = combineUrl(this.cacheUrl, params);
            console.log(url);
            request(url, function(error, response, body) {
                if (error) {
                    console.log('request error: ' + url);
                }
            });
        });
    }
});

module.exports = {
    notify: function (params) {
        params = params || {};
        if (params.action === 'remove' || params.action === 'clear') {
            if (params.region && params.key) {
                cache.storage.remove(params.region, params.key);
            } else if (params.region) {
                cache.storage.clear(params.region);
            }
        }
    }
};