/*
* utilities
* author: ronglin
* create date: 2014.6.21
*/

module.exports = {

    arg2arr: function() {
        var splice = Array.prototype.splice;
        return function(args, skip) {
            return splice.call(args, skip || 0);
        };
    }(),

    type: function() {
        var op = Object.prototype;
        var class2type = {}, natives = 'Boolean Number String Function Array Date RegExp Object Error'.split(' ');
        for (var i = 0; i < natives.length; i++) {class2type['[object ' + natives[i] + ']'] = natives[i].toLowerCase(); }
        return function(obj) {
            return obj == null ? String(obj) : class2type[op.toString.call(obj)] || 'object';
        };
    }(),

    isArray: function(obj){
        return this.type(obj) === 'array';
    },

    isFunction: function(obj) {
        return this.type(obj) === 'function';
    },

    isNumeric: function (obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj)
    },

    isPlainObject: function (obj) {
        if (!obj || this.type(obj) !== "object" || obj.nodeType) {
            return false;
        }
        try {
            if (obj.constructor && !this.hasOwn(obj, "constructor") && !this.hasOwn(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        } catch (e) {
            return false;
        }
        var key;
        for (key in obj) {}
        return key === undefined || this.hasOwn(obj, key);
    },

    hasOwn: function(o, prop){
        if ( o === null || o === undefined ) {
            return false;
        } else if ( o.hasOwnProperty ) {
            return o.hasOwnProperty( prop );
        } else {
            return ( this.type( o[prop] ) !== 'undefined' ) && o.constructor.prototype[prop] !== o[prop];
        }
    },

    each: function( obj, callback, args ) {
        var name,
            i = 0,
            length = obj.length,
            isObj = length === undefined || this.isFunction( obj );

        if ( args ) {
            if ( isObj ) {
                for ( name in obj ) {
                    if ( callback.apply( obj[ name ], args ) === false ) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if ( callback.apply( obj[ i++ ], args ) === false ) {
                        break;
                    }
                }
            }

        // A special, fast, case for the most common use of each
        } else {
            if ( isObj ) {
                for ( name in obj ) {
                    if ( callback.call( obj[ name ], name, obj[ name ] ) === false ) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if ( callback.call( obj[ i ], i, obj[ i++ ] ) === false ) {
                        break;
                    }
                }
            }
        }

        return obj;
    },

    extend: function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (this.type(target) === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (this.type(target) !== "object" && !this.isFunction(target)) {
            target = {}
        }
        if (length === i) {
            target = this;
            --i;
        }
        for (i; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && this.isArray(src) ? src : [];
                        } else {
                            clone = src && this.isPlainObject(src) ? src : {};
                        }
                        // WARNING: RECURSION
                        target[name] = this.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    },

    guid: function() {
        function s4() { return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); }
        return function(sep) {
            if (sep === true) { sep = '-'; } else { sep = sep || ''; }
            return (s4() + s4() + sep + s4() + sep + s4() + sep + s4() + sep + s4() + s4() + s4());
        };
    }(),

    unique: function(len) {
        return this.guid().substr(0, len);
    },

    padLeft: function(str, len, chr, reverse) {
        if (str !== null && str !== undefined) {
            str = str + ''; var num = len - str.length;
            if (num > 0) {
                for (var i = 0; i < num; i++) {
                    if (reverse === true) {
                        str = str + chr;
                    } else {
                        str = chr + str;
                    }
                }
            }
        }
        return str;
    },

    padRight: function(str, len, chr) {
        return this.padLeft(str, len, chr, true);
    },

    format: function (format) {
        var args = this.arg2arr(arguments, 1), arg;
        return format.replace(/\{(\d+)\}/g, function (m, i) {
            return (arg = args[i], (arg === null || arg === undefined) ? '' : arg);
        });
    },

    trim: function (str, set) {
        str = str || ''; set = set || {};
        if (set.find) {
            var exp = this.format('^{0}+|{0}+$', set.find);
            return str.replace(new RegExp(exp, 'g'), set.hold || '');
        } else if (set.findEnd) {
            var exp = this.format('{0}+$', set.findEnd);
            return str.replace(new RegExp(exp, 'g'), set.hold || '');
        } else if (set.findStart) {
            var exp = this.format('^{0}+', set.findStart);
            return str.replace(new RegExp(exp, 'g'), set.hold || '');
        } else {
            return str.replace(/^\s+|\s+$/g, set.hold || '');
        }
    },

    readObj: function(obj, namespace) {
        var names = namespace.split(/\.|\[|\]|\(/), ret = obj;
        this.each(names, function (i, key) { if (key && ret) { ret = (isNaN(key) ? (key === ')' ? ret() : ret[key]) : ret[parseInt(key, 10)]); } });
        return ret;
    },

    mapObj: function(obj, namespace, dft) {
        var parts = namespace.split(/\.|\[|\]/), names = [];
        this.each(parts, function (i, key) { if (key) { names.push(key); } });
        var lastName = names[names.length - 1], curr = obj = (obj || {}), prev;
        this.each(names, function (i, key) { prev = curr; curr = (curr[key] ? curr[key] : (curr[key] = isNaN(names[i + 1]) ? {} : [])); });
        if (prev) { prev[lastName] = dft; }
        return obj;
    }
};
