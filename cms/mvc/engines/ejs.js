/*
* ejs
* author: ronglin
* create date: 2014.7.24
*/

var ejs = require('ejs');

module.exports = function(filePath, options, callback) {
    ejs.renderFile(filePath, options, callback);
};
