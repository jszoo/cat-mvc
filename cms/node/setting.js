/*
* setting
* author: ronglin
* create date: 2014.6.21
*/

var fs = require('fs');

var setting = function (path) {
    this.filePath = path;
};

setting.load = function (path) {
    return new setting(path);
};

setting.serialize = function (obj) {

};

setting.deserialize = function (str) {

};

setting.prototype = {

    filePath: null,

    constructor: setting,

    save: function () {

    },

    reload: function () {

    }
};

/*
* export
*/
module.exports = setting;