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
    this.csses = new utils.dictionary(true);
    this.children = [];
};

htmlBuilder.prototype = {

    tagName: null, selfClose: false,

    attributes: null, classes: null, csses: null, children: null,

    constructor: htmlBuilder,

    newTag: function(tagName, selfClose) {
        var ins = new htmlBuilder(tagName, selfClose);
        this.append(ins);
        return ins;
    },

    tag: function(tagName) {
        if (tagName === undefined) {
            return (this.tagName);
        } else {
            return (this.tagName = tagName, this);
        }
    },

    cls: function(className) {
        if (className) {
            this.classes.set(className, true);
            return this;
        } else {
            var arr = [];
            utils.each(this.classes.all(), function(k) {
                arr.push(k);
            });
            return arr.join(' ');
        }
    },

    css: function(name, value) {
        if (!name && !value) {
            var arr = [];
            utils.each(this.csses.all(), function(k, v) {
                if (v) { arr.push(k + ': ' + v + ';'); }
            });
            return arr.join(' ');
        } else if (value === undefined) {
            return (this.csses.get(name));
        } else {
            return (this.csses.set(name, value), this);
        }
    },

    attr: function(name, value) {
        if (!name && !value) {
            var arr = [];
            utils.each(this.attributes.all(), function(k, v) {
                if (v) { arr.push(k + '="' + v + '"'); }
            });
            return arr.join(' ');
        } else if (value === undefined) {
            return (this.attributes.get(name));
        } else {
            return (this.attributes.set(name, value), this);
        }
    },

    append: function(child) {
        this.children.push(child);
        this.selfClose = false;
        return this;
    },

    toString: function(indent, level) {
        if (!this.tagName) {
            throw new Error('tagName is required');
        }
        if (!utils.isNumber(level) || level < 0) {
            level = 0;
        } else {
            level = Math.floor(level);
        }
        if (!utils.isNumber(indent) || indent < 0) {
            indent = 0;
        } else {
            indent = Math.floor(indent);
        }
        //
        var space = '', num = level * indent;
        for (var i = 0; i < num; i++) {
            space += ' ';
        }
        //
        var html = [space];
        html.push('<' + this.tagName);
        //
        var attrs = this.attr();
        if (attrs) {
            html.push(' ' + attrs);
        }
        //
        var klass = this.cls();
        if (klass) {
            html.push(' class="' + klass + '"');
        }
        //
        var style = this.css();
        if (style) {
            html.push(' style="' + style + '"');
        }
        //
        if (this.selfClose) {
            html.push(' />');
        } else {
            html.push('>');
            //
            if (!this.children.length) {
                html.push('</' + this.tagName + '>');
            } else {
                var childSpace = space;
                for (var c = 0; c < indent;  c++) {
                    childSpace += ' ';
                }
                //
                if (childSpace) {
                    html.push('\n');
                }
                utils.each(this.children, function(i, item) {
                    if (item instanceof htmlBuilder) {
                        html.push(item.toString(indent, level + 1));
                    } else {
                        html.push(childSpace);
                        html.push(String(item));
                        if (childSpace) {
                            html.push('\n');
                        }
                    }
                });
                //
                html.push(space);
                html.push('</' + this.tagName + '>');
            }
        }
        if (space) {
            html.push('\n');
        }
        //
        return html.join('');
    }
};
