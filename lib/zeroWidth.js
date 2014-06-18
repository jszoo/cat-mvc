/*
* zero width
* author: ronglin
* create date: 2014.6.18
* reference:
*    http://ucren.com/blog/archives/549
*/

'use strict';

var bit = 8;

var spaces = ['\u200b', '\u200c', '\u200d', '\ufeff'], sl = spaces.length;

var zeroWidth = {
    hide: function (str) {
        var arr = [];
        for (var i = 0, it, len = str.length; i < len; i++) {
            it = str.charCodeAt(i).toString(sl);
            while (it.length < bit) {
                it = '0' + it;
            }
            for (var s = 0; s < sl; s++) {
                it = it.replace(new RegExp(s + '', 'g'), spaces[s]);
            }
            arr.push(it);
        }
        return arr.join('');
    },
    show: function (str) {
        return str.replace(new RegExp('.{' + bit + '}', 'g'), function (chr) {
            for (var i = 0; i < sl; i++) {
                chr = chr.replace(new RegExp(spaces[i], 'g'), i + '');
            }
            return String.fromCharCode(parseInt(chr, sl));
        });
    }
};

if (typeof(window) !== 'undefined') {
	window.zeroWidth = zeroWidth;
}
if (typeof(module) !== 'undefined') {
	module.exports = zeroWidth;
}