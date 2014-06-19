/*
* test1
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'rulee.test1';

angular.module(name, [])
.provider('testProvider', require('./test1-provider'))
.factory('testFactory', require('./test1-factory'))
.service('testService', require('./test1-service'));

/*

http://www.cnblogs.com/stanzhu/p/3186690.html

说明：

注入provider，相当于注入provider内$get定义的函数实例的调用。

注入factory，相当于注入factory定义时的函数调用入口。

注入service，相当于注入service定义时的function实例。



provider 是基础方法，
factory 是对provider的封装
service 是对factory的封装

function provider(name, provider_) {
	if (isFunction(provider_) || isArray(provider_)) { //判断是函数还是数组
		provider_ = providerInjector.instantiate(provider_);
	}
	if (!provider_.$get) {
		throw Error('Provider ' + name + ' must define $get factory method.');
	}
	return providerCache[name + providerSuffix] = provider_;
}
 
function factory(name, factoryFn) {
	return provider(name, { $get: factoryFn });
}
 
 
function service(name, constructor) {
	return factory(name, ['$injector', function($injector) {
		return $injector.instantiate(constructor);
	}]);
}

*/