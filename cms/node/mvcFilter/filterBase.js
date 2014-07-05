/*
* mvcFilter
* author: ronglin
* create date: 2014.7.4
*/

'use strict';

var baseFilter = function(set) {
    utils.extend(this, set);
};

baseFilter.prototype = {

    constructor: baseFilter, className: 'mvcFilter'

};
