/*
* utilities
* author: ruleechen 
* contact: rulee@live.cn
* create date: 2014.6.21
*/

'use strict';

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
        for (var i = 0; i < natives.length; i++) { class2type['[object ' + natives[i] + ']'] = natives[i].toLowerCase(); }
        return function(obj) {
            return obj == null ? String(obj) : class2type[op.toString.call(obj)] || 'object';
        };
    }(),

    isDate: function(obj) {
        return this.type(obj) === 'date';
    },

    isArray: function(obj) {
        return this.type(obj) === 'array';
    },

    isObject: function(obj) {
        return this.type(obj) === 'object';
    },

    isString: function(obj) {
        return this.type(obj) === 'string';
    },

    isBoolean: function(obj) {
        return this.type(obj) === 'boolean';
    },

    isFunction: function(obj) {
        return this.type(obj) === 'function';
    },

    isNumber: function(obj) {
        return this.type(obj) === 'number';
    },

    isNumeric: function(obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj);
    },

    isPlainObject: function(obj) {
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
        for (key in obj) { }
        return key === undefined || this.hasOwn(obj, key);
    },

    hasOwn: function(o, prop) {
        if (o === null || o === undefined) {
            return false;
        } else if (o.hasOwnProperty) {
            return o.hasOwnProperty(prop);
        } else {
            return (this.type(o[prop]) !== 'undefined') && o.constructor.prototype[prop] !== o[prop];
        }
    },

    each: function(obj, callback, args) {
        if (!obj) { return; }
        //
        var name,
            i = 0,
            length = obj.length,
            isObj = length === undefined || this.isFunction(obj);

        if (args) {
            if (isObj) {
                for (name in obj) {
                    if (callback.apply(obj[name], args) === false) {
                        break;
                    }
                }
            } else {
                for (; i < length;) {
                    if (callback.apply(obj[i++], args) === false) {
                        break;
                    }
                }
            }
        } else {
            // A special, fast, case for the most common use of each
            if (isObj) {
                for (name in obj) {
                    if (callback.call(obj[name], name, obj[name]) === false) {
                        break;
                    }
                }
            } else {
                for (; i < length;) {
                    if (callback.call(obj[i], i, obj[i++]) === false) {
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

    inherit: function(subc, superc, overrides) {
        var F = function() { }, i;
        F.prototype = superc.prototype;
        subc.prototype = new F();
        subc.prototype.constructor = subc;
        subc.superclass = superc.prototype;
        if (superc.prototype.constructor == Object.prototype.constructor) {
            superc.prototype.constructor = superc;
        }
        if (overrides) {
            for (i in overrides) {
                if (this.hasOwn(overrides, i)) {
                    subc.prototype[i] = overrides[i];
                }
            }
        }
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

    format: function(format) {
        var args = this.arg2arr(arguments, 1), arg;
        return format.replace(/\{(\d+)\}/g, function(m, i) {
            return (arg = args[i], (arg === null || arg === undefined) ? '' : arg);
        });
    },

    trim: function(str, set) {
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
        this.each(names, function(i, key) { if (key && ret) { ret = (isNaN(key) ? (key === ')' ? ret() : ret[key]) : ret[parseInt(key, 10)]); } });
        return ret;
    },

    mapObj: function(obj, namespace, dft) {
        var parts = namespace.split(/\.|\[|\]/), names = [];
        this.each(parts, function(i, key) { if (key) { names.push(key); } });
        var lastName = names[names.length - 1], curr = obj = (obj || {}), prev;
        this.each(names, function(i, key) { prev = curr; curr = (curr[key] ? curr[key] : (curr[key] = isNaN(names[i + 1]) ? {} : [])); });
        if (prev) { prev[lastName] = dft; }
        return obj;
    },

    propCount: function(obj) {
        var count = 0;
        if (obj) {
            for (var key in obj) {
                if (this.hasOwn(obj, key)) {
                    count++;
                }
            }
        }
        return count;
    },

    appendQuery: function() {
        var allows = { 'boolean': true, 'number': true, 'string': true }; // object types: Boolean Number String Object Array Date RegExp Function
        return function(url, name, value) {
            if (url === null || url === undefined || (!name && name !== 0)) { return url; }
            if (this.type(name) === 'object' || this.type(name) === 'array') {
                var self = this;
                this.each(name, function(key, val) {// here 'key' fixed to simple type and will not loop again.
                    url = self.appendQuery(url, key, val);
                });
            } else if (allows[this.type(value)]) {
                url += ((url + '').indexOf('?') > -1) ? '' : '?';
                url += (/\?$/.test(url)) ? '' : '&';
                url += name + '=' + encodeURIComponent(String(value));
            }
            return url;
        };
    }(),

    setQuery: function(url, name, value) {
        if (url === null || url === undefined || (!name && name !== 0)) { return url; }
        var urlParams = this.getQuery(url), lowerParams = {}, keyMap = {}, params = {}, lower;
        params = 'object,array'.indexOf(this.type(name)) > -1 ? name : (params[name] = value, params);
        this.each(urlParams, function(key, val) {
            lowerParams[key.toLowerCase()] = val;
            keyMap[key] = key.toLowerCase();
        });
        this.each(params, function(key, val) {
            lower = (key + '').toLowerCase();
            if (lower in lowerParams) {
                lowerParams[lower] = val;
            } else {
                urlParams[key] = val;
            }
        });
        this.each(keyMap, function(f, t) {
            urlParams[f] = lowerParams[t];
        });
        //
        var sIndex = url.indexOf('?');
        sIndex = (sIndex === -1) ? url.length : sIndex;
        return this.appendQuery(url.substr(0, sIndex), urlParams);
    },

    getQuery: function(url, key) {
        var params = {};
        if (url === null || url === undefined) { return params; }
        var sIndex = url.indexOf('?');
        if (sIndex === -1) { return params; }
        //
        var query = url.substr(sIndex + 1);
        var pairs = query.replace(/\+/g, ' ').split('&');
        this.each(pairs, function(idx, pair) {
            var parts = pair.split('=');
            if (parts.length > 0) {
                params[parts[0]] = decodeURIComponent(parts[1] || '');
            }
        });
        //
        return key ? params[key] : params;
    },

    /* pretty line *****************************************************************************/

    isAbsolute: function(path) {
        if ('/' == path.charAt(0)) { return true; }
        if (':' == path.charAt(1) && '\\' == path.charAt(2)) { return true; }
        if ('\\\\' == path.substring(0, 2)) { return true; } // Microsoft Azure absolute path
        return false;
    },

    tryLower: function(str) {
        if (!str || !this.isString(str)) { return str };
        return str.toLowerCase();
    },

    tryLowerEqual: function(str1, str2) {
        return this.tryLower(str1) === this.tryLower(str2);
    },

    formalStr: function(str) {
        if (!str) { return str; }
        return str.replace(/^\s+|\s+$/g, '').toLowerCase();
    },

    formalObj: function(obj) {
        if (!obj) { return obj; }
        var ret = {}, self = this;
        this.each(obj, function(key, val) {
            ret[self.formalStr(key)] = val;
        });
        return ret;
    },

    defer: function() {
        if (typeof setImmediate === 'function') {
            return setImmediate;
        }
        return function(fn) {
            process.nextTick(fn.bind.apply(fn, arguments));
        };
    }(),

    deferProxy: function(fn) {
        var self = this;
        return function() {
            var as = arguments;
            switch (as.length) {
                case 0: setImmediate(fn); break;
                case 1: setImmediate(fn, as[0]); break;
                case 2: setImmediate(fn, as[0], as[1]); break;
                case 3: setImmediate(fn, as[0], as[1], as[2]); break;
                case 4: setImmediate(fn, as[0], as[1], as[2], as[3]); break;
                case 5: setImmediate(fn, as[0], as[1], as[2], as[3], as[4]); break;
                case 6: setImmediate(fn, as[0], as[1], as[2], as[3], as[4], as[5]); break;
                case 7: setImmediate(fn, as[0], as[1], as[2], as[3], as[4], as[5], as[6]); break;
                case 8: setImmediate(fn, as[0], as[1], as[2], as[3], as[4], as[5], as[6], as[7]); break;
                case 9: setImmediate(fn, as[0], as[1], as[2], as[3], as[4], as[5], as[6], as[7], as[8]); break;
                default: as = self.arg2arr(as); as.splice(0, 0, fn); setImmediate.apply(null, as); break;
            }
        };
    }

};
