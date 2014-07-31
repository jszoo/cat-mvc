/*
* ejs
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.24
*/

var ejs = require('ejs');

module.exports = function(filePath, options, callback) {
    ejs.renderFile(filePath, options, callback);
};
