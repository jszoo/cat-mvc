/*
* httpPost
* author: ronglin
* create date: 2014.7.12
*/

'use strict';

var utils = require('../utilities');

var httpPost = function(set) {
    utils.extend(this, set);
};

httpPost.prototype = {

    constructor: httpPost, className: 'httpPost',

    isValidRequestMethod: function(httpContext, methodName) {
    	return utils.tryLowerEqual('post', methodName);
    }
};

module.exports = httpPost;
