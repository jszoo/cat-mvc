/*
* utilities
* author: ronglin
* create date: 2014.5.4
*/

var padLeft = function(str, len, chr, reverse) {
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
};

var readObj = function(obj, namespace) {
    var names = namespace.split(/\.|\[|\]|\(/), ret = obj;
    angular.forEach(names, function (key, i) { if (key && ret) { ret = (isNaN(key) ? (key === ')' ? ret() : ret[key]) : ret[parseInt(key, 10)]); } });
    return ret;
};

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

	isAncestor: function (p, c) {
        var ret = false;
        if (p && c) {
            if (p.contains) {
                return p.contains(c);
            } else if (p.compareDocumentPosition) {
                return !!(p.compareDocumentPosition(c) & 16);
            } else {
                while (c = c.parentNode) {
                    ret = c == p || ret;
                }
            }
        }
        return ret;
    },

	padLeft: padLeft,

	padRight: function(str, len, chr) {
		return padLeft(str, len, chr, true);
	},

	viewUrl: function (url){
		return url;
	},

	readObj: readObj,

	i18n: function(key, val) {
		var getVal = readObj({}, key);
		return getVal !== undefined ? getVal : val;
	},

	dom: {
		parseUrl: require('./dom/parseUrl'),
		hasScroll: require('./dom/hasScroll'),
		scrollbarWidth: require('./dom/scrollbarWidth')
	}
};