/*
* read-obj
* author: ronglin
* create date: 2014.5.4
*/

module.exports = function(obj, namespace){
    var names = namespace.split(/\.|\[|\]|\(/), ret = obj;
    angular.forEach(names, function (key, i) { if (key && ret) { ret = (isNaN(key) ? (key === ')' ? ret() : ret[key]) : ret[parseInt(key, 10)]); } });
    return ret;
};