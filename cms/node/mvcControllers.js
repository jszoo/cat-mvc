/*
* mvcControllers
* author: ronglin
* create date: 2014.7.7
*/

'use strict';

var mvcControllers = function(set) {
    utils.extend(this, set);
    if (!this.ownerAreaName) { throw new Error('ownerAreaName is required'); }
    this._inner = caching.region('mvc-' + this.ownerAreaName + 'controllers-cache');
};

mvcControllers.prototype = {

	ownerAreaName: null, _inner: null,

	constructor: mvcControllers, className: 'mvcControllers',

    register: function(name, controller) {
        if (arguments.length === 1) {
            controller = name;
            name = null;
        }
        if (controller && controller.className === 'mvcController') {
            name = name || controller.name();
            this._inner.set(name, controller);
        }
    },

    remove: function(name) {
    	return this._inner.remove(name);
    },

    find: function(name) {
    	return this._inner.get(name);
    },

    clear: function() {
    	return this._inner.clear();
    },

    load: function(filePath) {
        if (!fs.statSync(filePath).isFile()) { return; }
        var self = this, load = function(ctrl) {
            if (ctrl && ctrl.className === 'mvcController') {
                if (!ctrl.name()) {
                    var extName = path.extname(filePath);
                    ctrl.name(path.basename(filePath, extName));
                }
                ctrl.path(filePath);
                self.register(ctrl.name(), ctrl);
                return true;
            }
        };
        var module = require(filePath);
        if (module && load(module) !== true) {
            utils.each(module, function() {
                load(this);
            });
        }
    },

    unload: function(filePath) {
        if (!fs.statSync(filePath).isFile()) { return; }
        var self = this, unload = function(ctrl) {
            if (ctrl && ctrl.className === 'mvcController') {
                var ctrlName = ctrl.name();
                if (!ctrlName) {
                    var extName = path.extname(filePath);
                    ctrlName = path.basename(filePath, extName);
                }
                self.remove(ctrlName);
                return true;
            }
        };
        var module = require(filePath);
        if (module && unload(module) !== true) {
            utils.each(module, function() {
                unload(this);
            });
        }
    }
};

module.exports = mvcControllers;
