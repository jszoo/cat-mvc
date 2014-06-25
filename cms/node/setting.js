/*
* setting
* author: ronglin
* create date: 2014.6.21
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
    events = require('events'),
    io = require('./io'),
    utils = require('./utilities'),
    caching = require('./caching');


var instances = caching.region('setting-instances-data');

var setting = function (path, cb) {
    path = utils.absPath(path);
    //
    var sett = instances.get(path);
    if (sett) { return sett; }
    instances.set(path, this);
    //
    this.events = new events.EventEmitter();
    this._filePath = path;
    this.reload(cb);
};

setting.cache = instances;

setting.load = function (path, cb) {
    return new setting(path, cb);
};

setting.serialize = function (obj) {
    return JSON.stringify(obj, null, 4);
};

setting.deserialize = function (str) {
    return JSON.parse(str);
};

setting.prototype = {

    _filePath: null, _innerObj: null,

    events: null, constructor: setting,

    get: function (ns) {
        if (arguments.length === 0) {
            return this._innerObj;
        } else {
            return utils.readObj(this._innerObj, ns);
        }
    },

    set: function (ns, val) {
        if (arguments.length === 1) {
            this._innerObj = ns;
        } else {
            utils.mapObj(this._innerObj, ns, val);
        }
        return this;
    },

    save: function () {
        io.ensureDirectory(path.dirname(this._filePath));
        var json = setting.serialize(this._innerObj);
        fs.writeFile(this._filePath, json, { encoding: 'utf-8' }, function (err) {
            if (err) { throw err; }
            self.events.emit('save', json);
        });
        return this;
    },

    reload: function (cb) {
        if (fs.existsSync(this._filePath)) {
            var data = fs.readFileSync(this._filePath, { encoding: 'utf-8' });
            this._innerObj = setting.deserialize(data);
            if (cb) { this.events.once('load', cb); }
            this.events.emit('load', this._innerObj);
        }
        return this;
    }
};

// export
module.exports = setting;

