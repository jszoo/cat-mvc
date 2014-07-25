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

var utils = require('./utilities'),
    thenable = function(obj) { return obj && utils.isFunction(obj['then']); };

var STATUS = { pending: 0, fulfilled: 1, rejected: 2 };
var thenAll = function(iterable, resolve, reject) {
    for (var p, i = 0; i < iterable.length; i++) {
        (thenable(p = iterable[i]) ? p : Promise.resolve(p)).then(resolve, reject);
    }
};

var Promise = function(resolver) {
    if (!utils.isFunction(resolver)) {
        throw new Error('Promise constructor takes a function argument');
    }
    if (!(this instanceof Promise)) {
        return new Promise(resolver);
    }
    //
    this._status = STATUS.pending;
    this._resolves = []; this._rejects = [];
    //
    var self = this, resolve = resolver(function(value) {
        if (self._status === STATUS.pending) {
            self._status = STATUS.fulfilled;
            self._value = value;
            for (var i = 0; i < self._resolves.length; i++) {
                self._resolves[i](self._value);
            }
        }
    }, reject = function(reason) {
        if (self._status === STATUS.pending) {
            self._status = STATUS.rejected;
            self._reason = reason;
            for (var i = 0; i < self._rejects.length; i++) {
                self._rejects[i](self._reason);
            }
        }
    });
    setTimeout(function() {
        try {
            resolver(resolve, reject);
        } catch (ex) {
            reject(ex);
        }
    }, 0);
};

Promise.prototype = {
    constructor: Promise,

    _status: null, _resolves: null, _rejects: null,

    //
    then: function(onFulfilled, onRejected) {
        if (utils.isFunction(onFulfilled)) {
            if (this._status === STATUS.pending) { this._resolves.push(onFulfilled); }
            else if (this._status === STATUS.fulfilled) { onFulfilled(this._value); }
        }
        if (utils.isFunction(onRejected)) {
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
    return new Promise(function(resolve, reject) {
        if (thenable(value)) {
            value.then(resolve, reject);
        } else {
            resolve(value);
        }
    });
};

Promise.reject = function(reason) {
    return new Promise(function(resolve, reject) {
        reject(reason);
    });
};

Promise.all = function(iterable) {
    return new Promise(function(resolve, reject) {
        var values = [];
        if (utils.isArray(iterable)) {
            thenAll(iterable, function(value) {
                values.push(value);
                if (values.length === iterable.length) {
                    resolve(values);
                }
            }, reject);
        } else {
            resolve(values);
        }
    });
};

Promise.race = function(iterable) {
    return new Promise(function(resolve, reject) {
        if (utils.isArray(iterable)) {
            thenAll(iterable, resolve, reject);
        }
    });
};


//Promise.name = 'Promise';

if (typeof(window) !== 'undefined') {
    Promise._promise = window.Promise;
    window.Promise = Promise;
}
if (typeof(module) !== 'undefined') {
    module.exports = Promise;
}