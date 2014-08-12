/*
* htmlBuilder
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.11
*/

'use strict';

var utils = require('zoo-utils');

var htmlBuilder = module.exports = function(tagName, selfClose) {
    this.tagName = tagName;
    this.selfClose = !!selfClose;
    //
    this.attributes = new utils.dictionary(true);
    this.classes = new utils.dictionary(true);
    this.cssdict = new utils.dictionary(true);
    this.children = [];
};

htmlBuilder.prototype = {

    tagName: null, selfClose: false,

    attributes: null, classes: null, cssdict: null, children: null,

    constructor: htmlBuilder,

    cls: function(className) {
        if (className) {
            this.classes.set(className, true);
        } else {
            var arr = [];
            utils.each(this.classes.all(), function(k) {
                arr.push(k);
            });
            return arr.join(' ');
        }
    },

    css: function(name, value) {
        if (value) {
            this.cssdict.set(name, value);
        } else if (name) {
            return this.cssdict.get(name);
        } else {
            var arr = [];
            utils.each(this.cssdict.all(), function(k, v) {
                arr.push(k + ': ' + v + ';');
            });
            return arr.join('');
        }
    },

    attr: function(name, value) {
        if (value) {
            this.attributes.set(name, value);
        } else {
            return this.attributes.get(name);
        }
    },

    append: function(child) {
        this.children.push(child);
        this.selfClose = false;
    },

    toString: function() {
        var html = [];
        html.push('<' + this.tagName);
        utils.each(this.attributes.all(), function(key, val) {
            html.push(' ' + key + '="' + val + '"');
        });
        var klass = this.cls();
        if (klass) {
            html.push(' class="' + klass + '"');
        }
        var style = this.css();
        if (style) {
            html.push(' style="' + style + '"');
        }
        if (this.selfClose) {
            html.push(' />');
        } else {
            html.push('>');
            //
            utils.each(this.children, function(i, item) {
                if (item instanceof htmlBuilder) {
                    html.push(item.toString());
                } else {
                    html.push(String(item));
                }
            });
            //
            html.push('</' + this.tagName + '>');
        }
    }
};
