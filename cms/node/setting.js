/*
* setting
* author: ronglin
* create date: 2014.6.21
*/

var fs = require('fs'),
    path = require('path'),
    events = require('events'),
    io = require('./io'),
    utils = require('../jsg/utilities');


var setting = function (path, cb) {
    this.events = new events.EventEmitter();
    this.filePath = path;
    this.reload(cb);
};

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

    filePath: null, innerObj: null,

    events: null, constructor: setting,

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
        io.ensureDirectory(path.dirname(this.filePath));
        var json = setting.serialize(this.innerObj);
        fs.writeFile(this.filePath, json, { encoding: 'utf-8' }, function (err) {
            if (err) { throw err; }
            self.events.emit('save', json);
        });
        return this;
    },

    reload: function (cb) {
        if (fs.existsSync(this.filePath)) {
            var data = fs.readFileSync(this.filePath, { encoding: 'utf-8' });
            this.innerObj = setting.deserialize(data);
            if (cb) { this.events.once('load', cb); }
            this.events.emit('load', this.innerObj);
        }
        return this;
    }
};

// export
module.exports = setting;

