/*
* utilities
* author: ronglin
* create date: 2014.6.24
*/

var path = require('path'),
	utils = require('../jsg/utilities'),
	cmsDir = path.normalize(__dirname + '/..');

module.exports = utils.extend({}, utils, {

	absPath: function(relative) {
		relative = relative.replace(/\//g, '\\');
		return path.join(cmsDir, relative);
	}
});