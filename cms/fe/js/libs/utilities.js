/*
* utilities
* author: ronglin
* create date: 2014.5.4
*/

var common = require('../../jsg/utilities');

module.exports = common.extend({}, common, {

    dom: {
        parseUrl: require('./parseUrl'),
        hasScroll: require('./hasScroll'),
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
        }
    },

    isWindow: function (obj) {
        return obj != null && obj == obj.window
    },

    viewUrl: function (url){
        return url;
    },

    i18n: function(key, val) {
        var getVal = this.readObj({}, key);
        return getVal !== undefined ? getVal : val;
    }
});