/*
* zero width
* author: ronglin
* create date: 2014.6.18
* reference:
*    http://ucren.com/blog/archives/549
*/

'use strict';

var bit = 12, marker = '\ufeff';

var spaces = ['\u200b', '\u200c', '\u200d'], slen = spaces.length;

var zeroWidth = {
    //
    hide: function(str) {
        var prefix = [];
        for (var m = 0; m < bit; m++) {
            prefix.push(marker);
        }
        var codeSet = [prefix.join('')];
        for (var i = 0, code, len = str.length; i < len; i++) {
            code = str.charCodeAt(i).toString(slen);
            if (code.length > bit) {
                return (bit = code.length, this.hide(str));
            }
            while (code.length < bit) {
                code = '0' + code;
            }
            for (var s = 0; s < slen; s++) {
                code = code.replace(new RegExp(s + '', 'g'), spaces[s]);
            }
            codeSet.push(code);
        }
        return codeSet.join('');
    },
    //
    show: function(str) {
        var count = 0;
        while (str.charAt(count) === marker) {
            count++;
        }
        return str.substr(count).replace(new RegExp('.{' + (count || bit) + '}', 'g'), function(code) {
            for (var i = 0; i < slen; i++) {
                code = code.replace(new RegExp(spaces[i], 'g'), i + '');
            }
            return String.fromCharCode(parseInt(code, slen));
        });
    }
};

if (typeof (window) !== 'undefined') {
    window.zeroWidth = zeroWidth;
}
if (typeof (module) !== 'undefined') {
    module.exports = zeroWidth;
}