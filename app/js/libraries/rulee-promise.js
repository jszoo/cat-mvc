/*
* promise
* author: ronglin
* create date: 2014.5.19
* reference: http://www.html5rocks.com/zh/tutorials/es6/promises/
*/

'use strict';

var type = require('../utilities/all').type,
	arg2arr = require('../utilities/all').arg2arr,
	isFunc = function(fn) { return type(fn) === 'function'; },
	thenable = function(obj) { return obj && isFunc(obj['then']); };

var delegate = function(fn, scope, delay) {
	scope = scope || this;
	return function() {
		var args = arg2arr(arguments);
		if (type(delay) === 'number') {
			setTimeout(function() {
				return fn.apply(scope, args);
			}, delay);
		} else {
			return fn.apply(scope, args);
		}
	};
};

var STATUS = {
	pending: 0,
	resolved: 1,
	rejected: 2 
};

var Promise = function() {
	var args = arg2arr(arguments);
	this.initialize.apply(this, args);
};

Promise.prototype = {
	constructor: Promise,
	
    _status: null, _resolves: null, _rejects: null,

    initialize: function(resolver){
		this._status = STATUS.pending;
		this._resolves = [];
		this._rejects = [];
		if (isFunc(resolver)) {
			resolver.call(this,
				delegate(this.resolve, this),
				delegate(this.reject, this)
			);
		}
    },
    
    //
	then: function(onResolved, onRejected) {
		if (isFunc(onResolved)) {
			if (this._status === STATUS.pending) { this._resolves.push(onResolved); }
			else if (this._status === STATUS.resolved) { onResolved.apply(this, this._values); }
		}
		return this.catch(onRejected);
	},

	//
	catch: function(onRejected) {
		if (isFunc(onRejected)) {
			if (this._status === STATUS.pending) { this._rejects.push(onRejected); }
			else if (this._status === STATUS.rejected) { onRejected.apply(this, this._errors); }
		}
		return this;
	},
	
	//
	resolve: function() {
		if (this._status === STATUS.pending) {
			this._status = STATUS.resolved;
			this._values = arg2arr(arguments);
			for (var i = 0; i < this._resolves.length; i++) {
				this._resolves[i].apply(this, this._values);
			}
		}
		return this;
	},

	//
	reject: function() {
		if (this._status === STATUS.pending) {
			this._status = STATUS.rejected;
			this._errors = arg2arr(arguments);
			for (var i = 0; i < this._rejects.length; i++) {
				this._rejects[i].apply(this, this._errors);
			}
		}
		return this;
	},

	//
	delay: function(ms) {
		var self = this;
		return new Promise(function(resolve, reject) {
			self.then(
				delegate(resolve, this, ms),
				delegate(reject, this, ms)
			);
		});
    }
};

Promise.resolve = function() {
	var promise = new Promise();
	return promise.resolve.apply(promise, arg2arr(arguments));
};

Promise.reject = function() {
	var promise = new Promise();
	return promise.reject.apply(promise, arg2arr(arguments));
};

Promise.all = function() {
	var promise = new Promise();
	var callbackNum = 0, thenableNum = 0, results = [];
	var callback = function() {
		callbackNum++;
		results.push(arg2arr(arguments));
		if (callbackNum === thenableNum) {
			promise.resolve.apply(promise, results);
		}
	};
	var args = arg2arr(arguments);
	for (var i = 0; i < args.length; i++) {
		if (thenable(args[i])) {
			thenableNum++;
			args[i].then(callback, callback);
		}
	}
	return promise;
};


if (typeof(window) !== 'undefined') {
	Promise._promise = window.Promise;
	window.Promise = Promise;
}
if (typeof(module) !== 'undefined') {
	module.exports = Promise;
}