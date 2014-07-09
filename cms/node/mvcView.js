/*
* mvcView
* author: ronglin
* create date: 2014.6.26
*/

'use strict';

var fs = require('fs'),
    path = require('path'),
	utils = require('./utilities'),
    engines = require('./mvcViewEngines');

var mvcView = function(viewName) {
    this.viewName = viewName;
};

mvcView.prototype = {
    
    viewName: null, engineExtname: '.vash',

    constructor: mvcView, className: 'mvcView',

    render: function(viewContext, callback) {
    	var rootPath = viewContext.routeArea.viewsPath;
    	var filePath = path.join(rootPath, this.viewName + this.engineExtname);
    	if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    		var engine = engines.get(this.engineExtname);
    		if (engine) {
	        	engine(filePath, viewContext.viewData, callback);
	        } else {
	        	callback(new Error('Failed to load view engine "' + this.engineExtname + '"'));
	        }
    	} else {
    		callback(new Error('Failed to lookup view "' + this.viewName + '" in views directory "' + rootPath + '"'));
    	}
    }
};

module.exports = mvcView;
