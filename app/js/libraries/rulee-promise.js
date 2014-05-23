/*
* promise
* author: ronglin
* create date: 2014.5.19
* reference:
*    http://promisesaplus.com/
*    http://www.html5rocks.com/zh/tutorials/es6/promises/
*    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

'use strict';

var type = require('../utilities/all').type,
	isFunc = function(fn) { return type(fn) === 'function'; },
	thenable = function(obj) { return obj && isFunc(obj['then']); };

var STATUS = {
	pending: 0,
	fulfilled: 1,
	rejected: 2 
};

var Promise = function(resolver) {
	if (!isFunc(resolver)) {
		throw new Error('Promise constructor takes a function argument');
	}
	this._status = STATUS.pending;
	this._resolves = [];
	this._rejects = [];
	var self = this;
	resolver(function(value) {
		if (self._status === STATUS.pending) {
			self._status = STATUS.fulfilled;
			self._value = value;
			for (var i = 0; i < self._resolves.length; i++) {
				self._resolves[i](self._value);
			}
		}
	}, function(reason) {
		if (self._status === STATUS.pending) {
			self._status = STATUS.rejected;
			self._reason = reason;
			for (var i = 0; i < self._rejects.length; i++) {
				self._rejects[i](self._reason);
			}
		}
	});
};

Promise.prototype = {
	constructor: Promise,
	
    _status: null, _resolves: null, _rejects: null,
    
    //
	then: function(onFulfilled, onRejected) {
		if (isFunc(onFulfilled)) {
			if (this._status === STATUS.pending) { this._resolves.push(onFulfilled); }
			else if (this._status === STATUS.fulfilled) { onFulfilled(this._value); }
		}
		if (isFunc(onRejected)) {
			if (this._status === STATUS.pending) { this._rejects.push(onRejected); }
			else if (this._status === STATUS.rejected) { onRejected(this._reason); }
		}
		if (this.__fthen === true) {
			delete this.__fthen;
		} else {
			this.__fthen = true;
			return Promise.resolve(this);
		}
	},

	//
	catch: function(onRejected) {
		return this.then(null, onRejected);
	}
};

Promise.resolve = function(value) {
	var doResolve, doReject, promise = new Promise(function(resolve, reject) {
		doResolve = resolve; doReject = reject;
	});
	if (thenable(value)) {
		value.then(doResolve, doReject);
	} else {
		doResolve(value);
	}
	return promise;
};

Promise.reject = function(reason) {
	return new Promise(function(resolve, reject) {
		reject(reason);
	});
};

Promise.all = function(iterable) {
	var doResolve, doReject, promise = new Promise(function(resolve, reject) {
		doResolve = resolve; doReject = reject;
	});
	if (type(iterable) === 'array') {
		var resolveNum = 0, rejectNum = 0, values = [],
		resolve = function(value) {
			values.push(value);
			if (++resolveNum === iterable.length) {
				doResolve(values);
			}
		},
		reject = function(reason) {
			if (++rejectNum === 1) {
				doReject(reason);
			}
		};
		for (var i = 0; i < iterable.length; i++) {
			var p = iterable[i];
			if (!thenable(p)) {
				// cast
				p = Promise.resolve(p);
			}
			p.then(resolve, reject);
		}
	} else {
		doResolve();
	}
	return promise;
};

Promise.race = function(iterable) {
	var doResolve, doReject, promise = new Promise(function(resolve, reject) {
		doResolve = resolve; doReject = reject;
	});
	if (type(iterable) === 'array') {
		var doneNum = 0,
		resolve = function(value) {
			if (++doneNum === 1) {
				doResolve(value);
			}
		},
		reject = function(reason) {
			if (++doneNum === 1) {
				doReject(reason);
			}
		};
		for (var i = 0; i < iterable.length; i++) {
			if (thenable(iterable[i])) {
				iterable[i].then(resolve, reject);
			}
		}
	}
	return promise;
};


//Promise.name = 'Promise';

if (typeof(window) !== 'undefined') {
	Promise._promise = window.Promise;
	window.Promise = Promise;
}
if (typeof(module) !== 'undefined') {
	module.exports = Promise;
}