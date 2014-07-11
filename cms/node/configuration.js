/*
* configuration
* author: ronglin
* create date: 2014.6.21
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    events = require('events'),
    utils = require('./utilities'),
    caching = require('./caching');


var instances = caching.region('configuration-instances-cache');

var configuration = function (path, cb) {
    path = utils.absolutePath(path);
    //
    var sett = instances.get(path);
    if (sett) { return sett; }
    instances.set(path, this);
    //
    this.events = new events.EventEmitter();
    this.filePath = path;
    this.reload(cb);
};

configuration.cache = instances;

configuration.load = function (path, cb) {
    return new configuration(path, cb);
};

configuration.serialize = function (obj) {
    return JSON.stringify(obj, null, 4);
};

configuration.deserialize = function (str) {
    return JSON.parse(str);
};

configuration.prototype = {

    filePath: null, innerObj: null, events: null,

    constructor: configuration, className: 'configuration',

    get: function (ns) {
        if (arguments.length === 0) {
            return this.innerObj;
        } else {
            return utils.readObj(this.innerObj, ns);
        }
    },

    set: function (ns, val) {
        if (arguments.length === 1) {
            this.innerObj = ns;
        } else {
            utils.mapObj(this.innerObj, ns, val);
        }
        return this;
    },

    save: function () {
        var dir = path.dirname(this.filePath);
        if (!fs.existsSync(dir)) { fs.mkdirSync(dir); }
        var json = configuration.serialize(this.innerObj);
        fs.writeFile(this.filePath, json, { encoding: 'utf-8' }, function (err) {
            if (err) { throw err; }
            self.events.emit('save', json);
        });
        return this;
    },

    reload: function (cb) {
        if (fs.existsSync(this.filePath)) {
            var data = fs.readFileSync(this.filePath, { encoding: 'utf-8' });
            this.innerObj = configuration.deserialize(data);
            if (cb) { this.events.once('load', cb); }
            this.events.emit('load', this.innerObj);
        }
        return this;
    }
};

// export
module.exports = configuration;

