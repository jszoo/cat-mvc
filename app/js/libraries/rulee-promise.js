/*
* promise
* author: ronglin
* create date: 2014.5.19
* reference: http://www.html5rocks.com/zh/tutorials/es6/promises/
*/

'use strict';

var TYPE = require('../utilities/all').type,
	ARGS2ARR = require('../utilities/all').args2arr,
	STATUS = { pending: 0, resolved: 1, rejected: 2 },
	isFunc = function(fn) { return TYPE(fn) === 'function'; },
	thenable = function(obj) { return obj && isFunc(obj['then']); };


var Promise = function() {
	var args = ARGS2ARR(arguments);
	this.initialize.apply(this, args);
};

Promise.prototype = {
	_status: STATUS.pending,
    _value: null, _error: null,
    _resolves: null, _rejects: null,

    initialize: function(resolver){
		var self = this;
		this._resolves = [];
		this._rejects = [];
		if (isFunc(resolver)) {
			resolver(function(value) {
				self.resolve(value);
			}, function(error) {
				self.reject(error);
			});
		}
    },
    
    //
	then: function(onResolved, onRejected) {
		if (this._status === STATUS.pending) {
			if (isFunc(onResolved)) { this._resolves.push(onResolved); }
			if (isFunc(onRejected)) { this._rejects.push(onRejected); }
		} else if (this._status === STATUS.resolved) {
			if (isFunc(onResolved)) { onResolved(this._value); }
		} else if (this._status === STATUS.rejected) {
			if (isFunc(onRejected)) { onRejected(this._error); }
		}
		return this;
	},
	
	//
	resolve: function(value) {
		if (this._status === STATUS.pending) {
			this._status = STATUS.resolved;
			this._value = value;
			for (var i = 0; i < this._resolves.length; i++) {
				this._resolves[i](this._value);
			}
		}
		return this;
	},

	//
	reject: function(error) {
		if (this._status === STATUS.pending) {
			this._status = STATUS.rejected;
			this._error = error;
			for (var i = 0; i < this._rejects.length; i++) {
				this._rejects[i](this._error);
			}
		}
		return this;
	},

	//
	delay: function(ms) {
    	return this.then(function(value){
        	return Promise.delay(ms, value);
    	});
    }
};

Promise.when = function() {
	var promise = new Promise();
	var args = [].prototype.slice.call(arguments, 0);
	var callbackCount = 0, callback = function() {
		callbackCount++;
		if (callbackCount === args.length) {
			promise
		}
	};
	for (var i = 0; i < args.length; i++) {
		if (thenable(args[i])) {
			args[i].then(callback, callback);
		}
	}
	return promise;
};

Promise.resolve = function(value) {
	return new Promise().resolve(value);
};

Promise.reject = function(error) {
	return new Promise().reject(error);
};

Promise.delay = function(ms, value) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(value);
        }, ms);
    })
};

module.exports = Promise;