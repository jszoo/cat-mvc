/*
* type
* author: ronglin
* create date: 2014.5.19
*/

var class2type = {}, natives = 'Boolean Number String Function Array Date RegExp Object Error'.split(' ');
for (var i = 0; i < natives.length; i++) {class2type['[object ' + natives[i] + ']'] = natives[i].toLowerCase(); }

module.exports = function(obj) {
	return obj == null ? String(obj) : class2type[op.toString.call(obj)] || 'object';
};