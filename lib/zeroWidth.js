/*
* zero width
* author: ronglin
* create date: 2014.6.18
* reference:
*    http://ucren.com/blog/archives/549
*/

'use strict';

var zeroWidth = {
    hide: function (str) {
        var arr = [], it, i, len = str.length;
        for (i = 0; i < len; i++) {
            it = str.charCodeAt(i).toString(2);
            while (it.length < 8) { it = '0' + it; }
            it = it.replace(/1/g, '\u200c').replace(/0/g, '\u200d');
            arr.push(it);
        }
        return arr.join('');
    },
    show: function (str) {
        return str.replace(/.{8}/g, function (u) {
            var chr = u.replace(/\u200c/g, '1').replace(/\u200d/g, '0');
            return String.fromCharCode(parseInt(chr, 2));
        });
    }
};

if (typeof(window) !== 'undefined') {
	window.zeroWidth = zeroWidth;
}
if (typeof(module) !== 'undefined') {
	module.exports = zeroWidth;
}