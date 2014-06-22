/*
* setting
* author: ronglin
* create date: 2014.6.21
*/

var fs = require('fs'),
	events = require('events'),
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
	return JSON.stringify(obj);
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
    	if (arguments.length === 1){
    		this.innerObj = ns;
    	} else {
    		utils.mapObj(this.innerObj, ns, val);
    	}
    	return this;
    },

    save: function () {
    	var json = setting.serialize(this.innerObj);
		fs.writeFile(this.filePath, json, function (err) {
		  if (err) { throw err; }
		  self.events.emit('save', json);
		});
		return this;
    },

    reload: function (cb) {
	    var self = this;
		fs.exists(self.filePath, function (exists) {
			fs.readFile(self.filePath, function (err, data) {
				if (err) { throw err; }
				self.innerObj = setting.deserialize(data);
                if (cb) { self.events.once('load', cb); }
				self.events.emit('load', self.innerObj);
			});
		});
		return this;
    }
};

/*
* export
*/
module.exports = setting;
