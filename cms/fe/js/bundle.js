(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* controllers
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'cms.controllers';

angular.module(name, [])
.controller('MainCtrl', require('./main-controller'))
.controller('HomeCtrl', require('./home-controller'));
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/all.js","/controllers")
},{"+7ZJp0":27,"./home-controller":2,"./main-controller":3,"buffer":24}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* home-controller
* author: ronglin
* create date: 2014.5.4
*/

module.exports = ['$scope', 'Blogs', function ($scope, Blogs) {
    $scope.blogs = Blogs.query(20);
}];
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/home-controller.js","/controllers")
},{"+7ZJp0":27,"buffer":24}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* main-controller
* author: ronglin
* create date: 2014.5.4
*/

module.exports = ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
    $scope.slide = '';
    $rootScope.back = function () {
        $scope.slide = 'slide-right';
        $window.history.back();
    };
    $rootScope.go = function (path) {
        $scope.slide = 'slide-left';
        $location.url(path);
    };
}];
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/main-controller.js","/controllers")
},{"+7ZJp0":27,"buffer":24}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* data service
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'cms.dataService';

angular.module(name, [])
.factory('Blogs', require('./blog-service'));
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/dataservice/all.js","/dataservice")
},{"+7ZJp0":27,"./blog-service":5,"buffer":24}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* blog-service
* author: ronglin
* create date: 2014.5.4
*/

module.exports = [function () {
    return {
        query: function (take) {
        	return [{
        		title:'title1',
        		content:'content1'
        	},{
        		title:'title2',
        		content:'content2'
        	},{
        		title:'title3',
        		content:'content3'
        	},{
        		title:'title4',
        		content:'content4'
        	},{
        		title:'title5',
        		content:'content5'
        	}];
        }
    };
}];
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/dataservice/blog-service.js","/dataservice")
},{"+7ZJp0":27,"buffer":24}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* directives
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'cms.directives';

angular.module(name, [])
.directive('cmsHeader', require('./header'))
.directive('cmsFooter', require('./footer'))
.directive('cmsMenu', require('./menu'))
.directive('imgSrc', require('./imgsrc'));
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives/all.js","/directives")
},{"+7ZJp0":27,"./footer":7,"./header":8,"./imgsrc":9,"./menu":10,"buffer":24}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* footer
* author: ronglin
* create date: 2014.5.4
*/

module.exports = ['utils', function(utils) {
	return {
		templateUrl: utils.viewUrl('views/directives/footer.html'),
		restrict: 'E',
		replace: true
	};
}];
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives/footer.js","/directives")
},{"+7ZJp0":27,"buffer":24}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* header
* author: ronglin
* create date: 2014.5.4
*/

module.exports = ['utils', function(utils) {
	return {
		templateUrl: utils.viewUrl('views/directives/header.html'),
		restrict: 'E',
		replace: true,
		scope: {
			current: '@current'
		}
	};
}];
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives/header.js","/directives")
},{"+7ZJp0":27,"buffer":24}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* src
* author: ronglin
* create date: 2014.6.19
*/

module.exports = ['utils', function(utils) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	if (element.prop('tagName') === 'IMG') {
        		var img = utils.trim(attrs.imgSrc, { find: '/'});
        		element.attr('src', utils.format('img/{0}', img));
        	}
        }
    };
}];
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives/imgsrc.js","/directives")
},{"+7ZJp0":27,"buffer":24}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* menu
* author: ronglin
* create date: 2014.6.18
*/

module.exports = ['utils', function(utils) {
    // ret
    return {
        scope: { current: '@' },
        controller: ['$scope', function($scope) {
            $scope.showPage = function(page) {
                $scope.current = page;
            };
        }],
        templateUrl: utils.viewUrl('views/directives/menu.html'),
        restrict: 'E',
        replace: true
    };
}];
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives/menu.js","/directives")
},{"+7ZJp0":27,"buffer":24}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* main
* author: ronglin
* create date: 2014.4.22
*/

'use strict';

require('./libs/angular/all');
var utilitiesName = 'cms.utilities';
angular.module(utilitiesName, []).constant('utils', require('./libs/utilities'));

var filters = require('./filters/all');
var directives = require('./directives/all');
var dataService = require('./dataservice/all');
var controllers = require('./controllers/all');

var cms = angular.module('cms', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    utilitiesName,
    filters.name,
    directives.name,
    dataService.name,
    controllers.name
]);

cms.config(['$routeProvider', 'utils', function ($routeProvider, utils) {
    $routeProvider.when('/home', { templateUrl: utils.viewUrl('views/home.html'), controller: 'HomeCtrl' });
    $routeProvider.when('/about', { templateUrl: utils.viewUrl('views/about.html') });
    $routeProvider.when('/blog', { templateUrl: utils.viewUrl('views/blog.html') });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_db771c3f.js","/")
},{"+7ZJp0":27,"./controllers/all":1,"./dataservice/all":4,"./directives/all":6,"./filters/all":12,"./libs/angular/all":14,"./libs/utilities":22,"buffer":24}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* filters
* author: ronglin
* create date: 2014.6.18
*/

var name = module.exports.name = 'cms.filters';

angular.module(name, [])
.filter('i18n', require('./i18n'));
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/filters/all.js","/filters")
},{"+7ZJp0":27,"./i18n":13,"buffer":24}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* i18n
* author: ronglin
* create date: 2014.6.18
*/

module.exports = ['utils', function(utils) {
	return function(key) {
		return utils.i18n(key, key);
	};
}];
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/filters/i18n.js","/filters")
},{"+7ZJp0":27,"buffer":24}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* all angular
* author: ronglin
* create date: 2014.5.4
*/

require('./angular.min');
require('./angular-touch.min');
require('./angular-resource.min');
require('./angular-animate.min');
require('./angular-route.min');
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/all.js","/libs/angular")
},{"+7ZJp0":27,"./angular-animate.min":15,"./angular-resource.min":16,"./angular-route.min":17,"./angular-touch.min":18,"./angular.min":19,"buffer":24}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(v,k,t){'use strict';k.module("ngAnimate",["ng"]).factory("$$animateReflow",["$window","$timeout",function(k,B){var d=k.requestAnimationFrame||k.webkitRequestAnimationFrame||function(d){return B(d,10,!1)},q=k.cancelAnimationFrame||k.webkitCancelAnimationFrame||function(d){return B.cancel(d)};return function(p){var k=d(p);return function(){q(k)}}}]).config(["$provide","$animateProvider",function(R,B){function d(d){for(var k=0;k<d.length;k++){var p=d[k];if(p.nodeType==X)return p}}var q=k.noop,
p=k.forEach,$=B.$$selectors,X=1,l="$$ngAnimateState",K="ng-animate",m={running:!0};R.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope","$document",function(C,v,t,H,y,w,N){function I(a){if(a){var g=[],e={};a=a.substr(1).split(".");(t.transitions||t.animations)&&a.push("");for(var c=0;c<a.length;c++){var f=a[c],d=$[f];d&&!e[f]&&(g.push(v.get(d)),e[f]=!0)}return g}}function r(a,g,e,c,f,k,m){function t(a){n();if(!0===a)z();else{if(a=e.data(l))a.done=z,e.data(l,
a);C(D,"after",z)}}function C(c,d,f){"after"==d?r():E();var k=d+"End";p(c,function(b,aa){var h=function(){a:{var b=d+"Complete",a=c[aa];a[b]=!0;(a[k]||q)();for(a=0;a<c.length;a++)if(!c[a][b])break a;f()}};"before"!=d||"enter"!=a&&"move"!=a?b[d]?b[k]=u?b[d](e,g,h):b[d](e,h):h():h()})}function w(c){e.triggerHandler("$animate:"+c,{event:a,className:g})}function E(){y(function(){w("before")},0,!1)}function r(){y(function(){w("after")},0,!1)}function v(){y(function(){w("close");m&&m()},0,!1)}function n(){n.hasBeenRun||
(n.hasBeenRun=!0,k())}function z(){if(!z.hasBeenRun){z.hasBeenRun=!0;var a=e.data(l);a&&(u?A(e):(a.closeAnimationTimeout=y(function(){A(e)},0,!1),e.data(l,a)));v()}}var s,x,G=d(e);G&&(s=G.className,x=s+" "+g);if(G&&L(x)){x=(" "+x).replace(/\s+/g,".");c||(c=f?f.parent():e.parent());x=I(x);var u="addClass"==a||"removeClass"==a;f=e.data(l)||{};if(ba(e,c)||0===x.length)n(),E(),r(),z();else{var D=[];u&&(f.disabled||f.running&&f.structural)||p(x,function(c){if(!c.allowCancel||c.allowCancel(e,a,g)){var d=
c[a];"leave"==a?(c=d,d=null):c=c["before"+a.charAt(0).toUpperCase()+a.substr(1)];D.push({before:c,after:d})}});0===D.length?(n(),E(),r(),v()):(c=" "+s+" ",f.running&&(y.cancel(f.closeAnimationTimeout),A(e),J(f.animations),x=(s=u&&!f.structural)&&f.className==g&&a!=f.event,f.beforeComplete||x?(f.done||q)(!0):s&&(c="removeClass"==f.event?c.replace(" "+f.className+" "," "):c+f.className+" ")),s=" "+g+" ","addClass"==a&&0<=c.indexOf(s)||"removeClass"==a&&-1==c.indexOf(s)?(n(),E(),r(),v()):(e.addClass(K),
e.data(l,{running:!0,event:a,className:g,structural:!u,animations:D,done:t}),C(D,"before",t)))}}else n(),E(),r(),z()}function Q(a){a=d(a);p(a.querySelectorAll("."+K),function(a){a=k.element(a);var e=a.data(l);e&&(J(e.animations),A(a))})}function J(a){p(a,function(a){a.beforeComplete||(a.beforeEnd||q)(!0);a.afterComplete||(a.afterEnd||q)(!0)})}function A(a){d(a)==d(H)?m.disabled||(m.running=!1,m.structural=!1):(a.removeClass(K),a.removeData(l))}function ba(a,g){if(m.disabled)return!0;if(d(a)==d(H))return m.disabled||
m.running;do{if(0===g.length)break;var e=d(g)==d(H),c=e?m:g.data(l),c=c&&(!!c.disabled||!!c.running);if(e||c)return c;if(e)break}while(g=g.parent());return!0}H.data(l,m);w.$$postDigest(function(){w.$$postDigest(function(){m.running=!1})});var M=B.classNameFilter(),L=M?function(a){return M.test(a)}:function(){return!0};return{enter:function(a,d,e,c){this.enabled(!1,a);C.enter(a,d,e);w.$$postDigest(function(){r("enter","ng-enter",a,d,e,q,c)})},leave:function(a,d){Q(a);this.enabled(!1,a);w.$$postDigest(function(){r("leave",
"ng-leave",a,null,null,function(){C.leave(a)},d)})},move:function(a,d,e,c){Q(a);this.enabled(!1,a);C.move(a,d,e);w.$$postDigest(function(){r("move","ng-move",a,d,e,q,c)})},addClass:function(a,d,e){r("addClass",d,a,null,null,function(){C.addClass(a,d)},e)},removeClass:function(a,d,e){r("removeClass",d,a,null,null,function(){C.removeClass(a,d)},e)},enabled:function(a,d){switch(arguments.length){case 2:if(a)A(d);else{var e=d.data(l)||{};e.disabled=!0;d.data(l,e)}break;case 1:m.disabled=!a;break;default:a=
!m.disabled}return!!a}}}]);B.register("",["$window","$sniffer","$timeout","$$animateReflow",function(m,l,B,H){function y(b,a){O&&O();U.push(a);var h=d(b);b=k.element(h);V.push(b);var h=b.data(n),c=h.stagger,c=h.itemIndex*(Math.max(c.animationDelay,c.transitionDelay)||0);P=Math.max(P,(c+(h.maxDelay+h.maxDuration)*s)*x);h.animationCount=G;O=H(function(){p(U,function(b){b()});var b=[],a=G;p(V,function(a){b.push(a)});B(function(){w(b,a);b=null},P,!1);U=[];V=[];O=null;u={};P=0;G++})}function w(b,a){p(b,
function(b){(b=b.data(n))&&b.animationCount==a&&(b.closeAnimationFn||q)()})}function N(b,a){var h=a?u[a]:null;if(!h){var d=0,c=0,e=0,k=0,g,n,l,r;p(b,function(b){if(b.nodeType==X){b=m.getComputedStyle(b)||{};l=b[f+Y];d=Math.max(I(l),d);r=b[f+W];g=b[f+E];c=Math.max(I(g),c);n=b[F+E];k=Math.max(I(n),k);var a=I(b[F+Y]);0<a&&(a*=parseInt(b[F+R],10)||1);e=Math.max(a,e)}});h={total:0,transitionPropertyStyle:r,transitionDurationStyle:l,transitionDelayStyle:g,transitionDelay:c,transitionDuration:d,animationDelayStyle:n,
animationDelay:k,animationDuration:e};a&&(u[a]=h)}return h}function I(b){var a=0;b=k.isString(b)?b.split(/\s*,\s*/):[];p(b,function(b){a=Math.max(parseFloat(b)||0,a)});return a}function r(b){var a=b.parent(),h=a.data(Z);h||(a.data(Z,++D),h=D);return h+"-"+d(b).className}function Q(b,a,h){var c=r(b),e=c+" "+a,k={},g=u[e]?++u[e].total:0;if(0<g){var l=a+"-stagger",k=c+" "+l;(c=!u[k])&&b.addClass(l);k=N(b,k);c&&b.removeClass(l)}h=h||function(b){return b()};b.addClass(a);h=h(function(){return N(b,e)});
l=Math.max(h.transitionDelay,h.animationDelay);c=Math.max(h.transitionDuration,h.animationDuration);if(0===c)return b.removeClass(a),!1;var m="";0<h.transitionDuration?d(b).style[f+W]="none":d(b).style[F]="none 0s";p(a.split(" "),function(b,a){m+=(0<a?" ":"")+b+"-active"});b.data(n,{className:a,activeClassName:m,maxDuration:c,maxDelay:l,classes:a+" "+m,timings:h,stagger:k,itemIndex:g});return!0}function J(b){var a=f+W;b=d(b);b.style[a]&&0<b.style[a].length&&(b.style[a]="")}function A(b){var a=F;b=
d(b);b.style[a]&&0<b.style[a].length&&(b.style[a]="")}function K(b,a,h){function e(c){b.off(v,k);b.removeClass(r);c=b;c.removeClass(a);c.removeData(n);c=d(b);for(var h in s)c.style.removeProperty(s[h])}function k(b){b.stopPropagation();var a=b.originalEvent||b;b=a.$manualTimeStamp||a.timeStamp||Date.now();a=parseFloat(a.elapsedTime.toFixed(z));Math.max(b-w,0)>=u&&a>=p&&h()}var f=b.data(n),g=d(b);if(-1!=g.className.indexOf(a)&&f){var l=f.timings,m=f.stagger,p=f.maxDuration,r=f.activeClassName,u=Math.max(l.transitionDelay,
l.animationDelay)*x,w=Date.now(),v=T+" "+S,t=f.itemIndex,q="",s=[];if(0<l.transitionDuration){var y=l.transitionPropertyStyle;-1==y.indexOf("all")&&(q+=c+"transition-property: "+y+";",q+=c+"transition-duration: "+l.transitionDurationStyle+";",s.push(c+"transition-property"),s.push(c+"transition-duration"))}0<t&&(0<m.transitionDelay&&0===m.transitionDuration&&(q+=c+"transition-delay: "+M(l.transitionDelayStyle,m.transitionDelay,t)+"; ",s.push(c+"transition-delay")),0<m.animationDelay&&0===m.animationDuration&&
(q+=c+"animation-delay: "+M(l.animationDelayStyle,m.animationDelay,t)+"; ",s.push(c+"animation-delay")));0<s.length&&(l=g.getAttribute("style")||"",g.setAttribute("style",l+" "+q));b.on(v,k);b.addClass(r);f.closeAnimationFn=function(){e();h()};return e}h()}function M(b,a,c){var d="";p(b.split(","),function(b,e){d+=(0<e?",":"")+(c*a+parseInt(b,10))+"s"});return d}function L(b,a,c){if(Q(b,a,c))return function(c){c&&(b.removeClass(a),b.removeData(n))}}function a(a,c,d){if(a.data(n))return K(a,c,d);a.removeClass(c);
a.removeData(n);d()}function g(b,c,d){var e=L(b,c);if(e){var f=e;y(b,function(){J(b);A(b);f=a(b,c,d)});return function(a){(f||q)(a)}}d()}function e(a,c){var d="";a=k.isArray(a)?a:a.split(/\s+/);p(a,function(a,b){a&&0<a.length&&(d+=(0<b?" ":"")+a+c)});return d}var c="",f,S,F,T;v.ontransitionend===t&&v.onwebkittransitionend!==t?(c="-webkit-",f="WebkitTransition",S="webkitTransitionEnd transitionend"):(f="transition",S="transitionend");v.onanimationend===t&&v.onwebkitanimationend!==t?(c="-webkit-",F=
"WebkitAnimation",T="webkitAnimationEnd animationend"):(F="animation",T="animationend");var Y="Duration",W="Property",E="Delay",R="IterationCount",Z="$$ngAnimateKey",n="$$ngAnimateCSS3Data",z=3,s=1.5,x=1E3,G=0,u={},D=0,U=[],V=[],O,P=0;return{allowCancel:function(a,c,h){var f=(a.data(n)||{}).classes;if(!f||0<=["enter","leave","move"].indexOf(c))return!0;var l=a.parent(),g=k.element(d(a).cloneNode());g.attr("style","position:absolute; top:-9999px; left:-9999px");g.removeAttr("id");g.empty();p(f.split(" "),
function(a){g.removeClass(a)});g.addClass(e(h,"addClass"==c?"-add":"-remove"));l.append(g);a=N(g);g.remove();return 0<Math.max(a.transitionDuration,a.animationDuration)},enter:function(a,c){return g(a,"ng-enter",c)},leave:function(a,c){return g(a,"ng-leave",c)},move:function(a,c){return g(a,"ng-move",c)},beforeAddClass:function(a,c,d){var f=L(a,e(c,"-add"),function(d){a.addClass(c);d=d();a.removeClass(c);return d});if(f)return y(a,function(){J(a);A(a);d()}),f;d()},addClass:function(b,c,d){return a(b,
e(c,"-add"),d)},beforeRemoveClass:function(a,c,d){var f=L(a,e(c,"-remove"),function(d){var e=a.attr("class");a.removeClass(c);d=d();a.attr("class",e);return d});if(f)return y(a,function(){J(a);A(a);d()}),f;d()},removeClass:function(b,c,d){return a(b,e(c,"-remove"),d)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/angular-animate.min.js","/libs/angular")
},{"+7ZJp0":27,"buffer":24}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){m.push(new f(b))})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,x({},w,a),l)};return f}
var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,c){f=g.hasOwnProperty(c)?
g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,"/.");s(g,function(a,
e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/angular-resource.min.js","/libs/angular")
},{"+7ZJp0":27,"buffer":24}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(h,e,A){'use strict';function u(w,q,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,n){function y(){l&&(l.$destroy(),l=null);g&&(k.leave(g),g=null)}function v(){var b=w.current&&w.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),f=w.current;g=n(b,function(d){k.enter(d,null,g||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||q()});y()});l=f.scope=b;l.$emit("$viewContentLoaded");l.$eval(h)}else y()}var l,g,t=b.autoscroll,h=b.onload||"";
a.$on("$routeChangeSuccess",v);v()}}}function z(e,h,k){return{restrict:"ECA",priority:-400,link:function(a,c){var b=k.current,f=b.locals;c.html(f.$template);var n=e(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));n(a)}}}h=e.module("ngRoute",["ng"]).provider("$route",function(){function h(a,c){return e.extend(new (e.extend(function(){},{prototype:a})),c)}function q(a,
e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var k={};this.when=function(a,c){k[a]=e.extend({reloadOnSearch:!0},c,a&&q(a,c));if(a){var b="/"==a[a.length-1]?a.substr(0,a.length-
1):a+"/";k[b]=e.extend({redirectTo:a},q(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,n,q,v,l){function g(){var d=t(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!x)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)x=!1,a.$broadcast("$routeChangeStart",d,m),(r.current=
d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(u(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?n.get(d):n.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=l.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=b,c=q.get(b,
{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function t(){var a,b;e.forEach(k,function(f,k){var p;if(p=!b){var s=c.path();p=f.keys;var l={};if(f.regexp)if(s=f.regexp.exec(s)){for(var g=1,q=s.length;g<q;++g){var n=p[g-1],r="string"==typeof s[g]?decodeURIComponent(s[g]):s[g];
n&&r&&(l[n.name]=r)}p=l}else p=null;else p=null;p=a=p}p&&(b=h(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||k[null]&&h(k[null],{params:{},pathParams:{}})}function u(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var x=!1,r={routes:k,reload:function(){x=!0;a.$evalAsync(g)}};a.$on("$locationChangeSuccess",g);return r}]});h.provider("$routeParams",
function(){this.$get=function(){return{}}});h.directive("ngView",u);h.directive("ngView",z);u.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/angular-route.min.js","/libs/angular")
},{"+7ZJp0":27,"buffer":24}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,v,z){'use strict';function t(g,a,b){q.directive(g,["$parse","$swipe",function(l,n){var r=75,h=0.3,d=30;return function(p,m,k){function e(e){if(!u)return!1;var c=Math.abs(e.y-u.y);e=(e.x-u.x)*a;return f&&c<r&&0<e&&e>d&&c/e<h}var c=l(k[g]),u,f;n.bind(m,{start:function(e,c){u=e;f=!0},cancel:function(e){f=!1},end:function(a,f){e(a)&&p.$apply(function(){m.triggerHandler(b);c(p,{$event:f})})}})}}])}var q=v.module("ngTouch",[]);q.factory("$swipe",[function(){function g(a){var b=a.touches&&a.touches.length?
a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]||b[0].originalEvent||b[0];return{x:a.clientX,y:a.clientY}}return{bind:function(a,b){var l,n,r,h,d=!1;a.on("touchstart mousedown",function(a){r=g(a);d=!0;n=l=0;h=r;b.start&&b.start(r,a)});a.on("touchcancel",function(a){d=!1;b.cancel&&b.cancel(a)});a.on("touchmove mousemove",function(a){if(d&&r){var m=g(a);l+=Math.abs(m.x-h.x);n+=Math.abs(m.y-h.y);h=m;10>l&&10>n||
(n>l?(d=!1,b.cancel&&b.cancel(a)):(a.preventDefault(),b.move&&b.move(m,a)))}});a.on("touchend mouseup",function(a){d&&(d=!1,b.end&&b.end(g(a),a))})}}}]);q.config(["$provide",function(g){g.decorator("ngClickDirective",["$delegate",function(a){a.shift();return a}])}]);q.directive("ngClick",["$parse","$timeout","$rootElement",function(g,a,b){function l(a,c,b){for(var f=0;f<a.length;f+=2)if(Math.abs(a[f]-c)<d&&Math.abs(a[f+1]-b)<d)return a.splice(f,f+2),!0;return!1}function n(a){if(!(Date.now()-m>h)){var c=
a.touches&&a.touches.length?a.touches:[a],b=c[0].clientX,c=c[0].clientY;1>b&&1>c||l(k,b,c)||(a.stopPropagation(),a.preventDefault(),a.target&&a.target.blur())}}function r(b){b=b.touches&&b.touches.length?b.touches:[b];var c=b[0].clientX,d=b[0].clientY;k.push(c,d);a(function(){for(var a=0;a<k.length;a+=2)if(k[a]==c&&k[a+1]==d){k.splice(a,a+2);break}},h,!1)}var h=2500,d=25,p="ng-click-active",m,k;return function(a,c,d){function f(){q=!1;c.removeClass(p)}var h=g(d.ngClick),q=!1,s,t,w,x;c.on("touchstart",
function(a){q=!0;s=a.target?a.target:a.srcElement;3==s.nodeType&&(s=s.parentNode);c.addClass(p);t=Date.now();a=a.touches&&a.touches.length?a.touches:[a];a=a[0].originalEvent||a[0];w=a.clientX;x=a.clientY});c.on("touchmove",function(a){f()});c.on("touchcancel",function(a){f()});c.on("touchend",function(a){var h=Date.now()-t,e=a.changedTouches&&a.changedTouches.length?a.changedTouches:a.touches&&a.touches.length?a.touches:[a],g=e[0].originalEvent||e[0],e=g.clientX,g=g.clientY,p=Math.sqrt(Math.pow(e-
w,2)+Math.pow(g-x,2));q&&(750>h&&12>p)&&(k||(b[0].addEventListener("click",n,!0),b[0].addEventListener("touchstart",r,!0),k=[]),m=Date.now(),l(k,e,g),s&&s.blur(),v.isDefined(d.disabled)&&!1!==d.disabled||c.triggerHandler("click",[a]));f()});c.onclick=function(a){};c.on("click",function(b,c){a.$apply(function(){h(a,{$event:c||b})})});c.on("mousedown",function(a){c.addClass(p)});c.on("mousemove mouseup",function(a){c.removeClass(p)})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,
window.angular);
//# sourceMappingURL=angular-touch.min.js.map

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/angular-touch.min.js","/libs/angular")
},{"+7ZJp0":27,"buffer":24}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,R,s){'use strict';function t(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.12/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function qb(b){if(null==b||za(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:w(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(M(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(qb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Nb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Oc(b,
a,c){for(var d=Nb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Ob(b){return function(a,c){b(c,a)}}function Za(){for(var b=ia.length,a;b;){b--;a=ia[b].charCodeAt(0);if(57==a)return ia[b]="A",ia.join("");if(90==a)ia[b]="0";else return ia[b]=String.fromCharCode(a+1),ia.join("")}ia.unshift("0");return ia.join("")}function Pb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function y(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Pb(b,a);return b}function V(b){return parseInt(b,
10)}function Qb(b,a){return y(new (y(function(){},{prototype:b})),a)}function E(){}function Aa(b){return b}function Y(b){return function(){return b}}function u(b){return"undefined"===typeof b}function D(b){return"undefined"!==typeof b}function W(b){return null!=b&&"object"===typeof b}function w(b){return"string"===typeof b}function rb(b){return"number"===typeof b}function Ka(b){return"[object Date]"===La.call(b)}function L(b){return"[object Array]"===La.call(b)}function M(b){return"function"===typeof b}
function $a(b){return"[object RegExp]"===La.call(b)}function za(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Pc(b){return!(!b||!(b.nodeName||b.on&&b.find))}function Qc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function ab(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ma(b,a){var c=ab(b,a);0<=c&&b.splice(c,1);return a}function $(b,a){if(za(b)||b&&b.$evalAsync&&b.$watch)throw Na("cpws");if(a){if(b===
a)throw Na("cpi");if(L(b))for(var c=a.length=0;c<b.length;c++)a.push($(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=$(b[d]);Pb(a,c)}}else(a=b)&&(L(b)?a=$(b,[]):Ka(b)?a=new Date(b.getTime()):$a(b)?a=RegExp(b.source):W(b)&&(a=$(b,{})));return a}function Rb(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function ta(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,
d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ta(b[d],a[d]))return!1;return!0}}else{if(Ka(b))return Ka(a)&&b.getTime()==a.getTime();if($a(b)&&$a(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||za(b)||za(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!M(b[d])){if(!ta(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!M(a[d]))return!1;return!0}return!1}
function Sb(){return R.securityPolicy&&R.securityPolicy.isActive||R.querySelector&&!(!R.querySelector("[ng-csp]")&&!R.querySelector("[data-ng-csp]"))}function bb(b,a){var c=2<arguments.length?ua.call(arguments,2):[];return!M(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ua.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Rc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:za(a)?c="$WINDOW":
a&&R===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function pa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Rc,a?"  ":null)}function Tb(b){return w(b)?JSON.parse(b):b}function Oa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=x(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function fa(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return 3===b[0].nodeType?x(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+x(b)})}catch(d){return x(c)}}function Ub(b){try{return decodeURIComponent(b)}catch(a){}}function Vb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Ub(c[0]),D(d)&&(b=D(c[1])?Ub(c[1]):!0,a[d]?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Wb(b){var a=[];q(b,function(b,d){L(b)?q(b,function(b){a.push(va(d,!0)+(!0===b?"":"="+va(b,!0)))}):a.push(va(d,!0)+(!0===b?"":"="+va(b,!0)))});return a.length?a.join("&"):""}function sb(b){return va(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function va(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Sc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(R.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+
a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function Xb(b,a){var c=function(){b=z(b);if(b.injector()){var c=b[0]===R?"document":fa(b);throw Na("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Yb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(P&&!d.test(P.name))return c();P.name=P.name.replace(d,"");Ba.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function cb(b,a){a=a||"_";return b.replace(Tc,function(b,d){return(d?a:"")+b.toLowerCase()})}function tb(b,a,c){if(!b)throw Na("areq",a||"?",c||"required");return b}function Pa(b,a,c){c&&L(b)&&(b=b[b.length-1]);tb(M(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function wa(b,a){if("hasOwnProperty"===b)throw Na("badname",a);}function Zb(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&M(b)?bb(e,b):b}function ub(b){var a=b[0];b=b[b.length-1];if(a===b)return z(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return z(c)}function Uc(b){var a=t("$injector"),c=t("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||t;return b.module||
(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};f&&l(f);return n}())}}())}function Qa(b){return b.replace(Vc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Wc,"Moz$1")}function vb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,p,r,F;if(!d||null!=b)for(;e.length;)for(k=e.shift(),
l=0,n=k.length;l<n;l++)for(p=z(k[l]),m?p.triggerHandler("$destroy"):m=!m,r=0,p=(F=p.children()).length;r<p;r++)e.push(Ca(F[r]));return g.apply(this,arguments)}var g=Ca.fn[b],g=g.$original||g;e.$original=g;Ca.fn[b]=e}function O(b){if(b instanceof O)return b;w(b)&&(b=Z(b));if(!(this instanceof O)){if(w(b)&&"<"!=b.charAt(0))throw wb("nosel");return new O(b)}if(w(b)){var a=R.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);xb(this,a.childNodes);z(R.createDocumentFragment()).append(this)}else xb(this,
b)}function yb(b){return b.cloneNode(!0)}function Da(b){$b(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Da(b[a])}function ac(b,a,c,d){if(D(d))throw wb("offargs");var e=ja(b,"events");ja(b,"handle")&&(u(a)?q(e,function(a,c){zb(b,c,a);delete e[c]}):q(a.split(" "),function(a){u(c)?(zb(b,a,e[a]),delete e[a]):Ma(e[a]||[],c)}))}function $b(b,a){var c=b[db],d=Ra[c];d&&(a?delete Ra[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),ac(b)),delete Ra[c],b[db]=s))}function ja(b,a,c){var d=
b[db],d=Ra[d||-1];if(D(c))d||(b[db]=d=++Xc,d=Ra[d]={}),d[a]=c;else return d&&d[a]}function bc(b,a,c){var d=ja(b,"data"),e=D(c),g=!e&&D(a),f=g&&!W(a);d||f||ja(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];y(d,a)}else return d}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",Z((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+Z(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=Z(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",Z(c))}}function xb(b,a){if(a){a=a.nodeName||!D(a.length)||za(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function cc(b,a){return eb(b,"$"+(a||"ngController")+"Controller")}function eb(b,a,c){b=z(b);9==b[0].nodeType&&(b=b.find("html"));for(a=L(a)?a:[a];b.length;){for(var d=
0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==s)return c;b=b.parent()}}function dc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Da(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function ec(b,a){var c=fb[a.toLowerCase()];return c&&fc[b.nodeName]&&c}function Yc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||R);if(u(c.defaultPrevented)){var g=c.preventDefault;
c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=Rb(a[e||c.type]||[]);q(f,function(a){a.call(b,c)});8>=N?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ea(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===
s&&(c=b.$$hashKey=Za()):c=b;return a+":"+c}function Sa(b){q(b,this.put,this)}function gc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(Zc,""),c=c.match($c),q(c[1].split(ad),function(b){b.replace(bd,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Pa(b[c],"fn"),a=b.slice(0,c)):Pa(b,"fn",!0);return a}function Yb(b){function a(a){return function(b,c){if(W(b))q(b,Ob(a));else return a(b,c)}}function c(a,b){wa(a,"service");if(M(b)||L(b))b=n.instantiate(b);
if(!b.$get)throw Ta("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(w(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,h=d.length;g<h;g++){var f=d[g],m=n.get(f[0]);m[f[1]].apply(m,f[2])}else M(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Pa(a,"module")}catch(r){throw L(a)&&(a=a[a.length-1]),r.message&&(r.stack&&-1==r.stack.indexOf(r.message))&&(r=r.message+"\n"+r.stack),
Ta("modulerr",a,r.stack||r.message||r);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Ta("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var g=[],h=gc(a),f,m,k;m=0;for(f=h.length;m<f;m++){k=h[m];if("string"!==typeof k)throw Ta("itkn",k);g.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,instantiate:function(a,
b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return W(e)||M(e)?e:c},get:c,annotate:gc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var f={},h="Provider",m=[],k=new Sa,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,Y(b))}),constant:a(function(a,b){wa(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),
d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=l.$injector=g(l,function(){throw Ta("unpr",m.join(" <- "));}),p={},r=p.$injector=g(p,function(a){a=n.get(a+h);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||E)});return r}function cd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==x(a.nodeName)||(b=a)});return b}function g(){var b=
c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function dd(b,a,c,d){function e(a){try{a.apply(null,ua.call(arguments,1))}finally{if(F--,0===F)for(;A.length;)try{A.pop()()}catch(b){c.error(b)}}}function g(a,b){(function S(){q(H,function(a){a()});v=b(S,a)})()}function f(){C=null;Q!=h.url()&&(Q=h.url(),q(ka,
function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,r={};h.isMock=!1;var F=0,A=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){F++};h.notifyWhenNoOutstandingRequests=function(a){q(H,function(a){a()});0===F?a():A.push(a)};var H=[],v;h.addPollFn=function(a){u(v)&&g(100,n);H.push(a);return a};var Q=k.href,K=a.find("base"),C=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(Q!=a)return Q=
a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),K.attr("href",K.attr("href"))):(C=a,c?k.replace(a):k.href=a),h}else return C||k.href.replace(/%27/g,"'")};var ka=[],I=!1;h.onUrlChange=function(a){if(!I){if(d.history)z(b).on("popstate",f);if(d.hashchange)z(b).on("hashchange",f);else h.addPollFn(f);I=!0}ka.push(a);return a};h.baseHref=function(){var a=K.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var U={},ba="",aa=h.baseHref();h.cookies=function(a,b){var d,e,g,h;
if(a)b===s?m.cookie=escape(a)+"=;path="+aa+";expires=Thu, 01 Jan 1970 00:00:00 GMT":w(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+aa).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==ba)for(ba=m.cookie,d=ba.split("; "),U={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),U[a]===s&&(U[a]=unescape(e.substring(h+1))));return U}};h.defer=function(a,b){var c;F++;c=n(function(){delete r[c];
e(a)},b||0);r[c]=!0;return c};h.defer.cancel=function(a){return r[a]?(delete r[a],p(a),e(E),!0):!1}}function ed(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new dd(b,d,a,c)}]}function fd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw t("$cacheFactory")("iid",b);var f=0,h=y({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;
return a[b]={put:function(a,b){var c=l[a]||(l[a]={key:a});e(c);if(!u(b))return a in m||f++,m[a]=b,f>k&&this.remove(p.key),b},get:function(a){var b=l[a];if(b)return e(b),m[a]},remove:function(a){var b=l[a];b&&(b==n&&(n=b.p),b==p&&(p=b.n),g(b.n,b.p),delete l[a],delete m[a],f--)},removeAll:function(){m={};f=0;l={};n=p=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return y({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function gd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){wa(a,"directive");w(a)?(tb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);M(f)?f={compile:Y(f)}:!f.compile&&f.link&&(f.compile=
Y(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,Ob(m));return this};this.aHrefSanitizationWhitelist=function(b){return D(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate",
"$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,r,F,A,H,v,Q,K){function C(a,b,c,d,e){a instanceof z||(a=z(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=z(b).wrap("<span></span>").parent()[0])});var g=I(a,b,a,c,d,e);ka(a,"ng-scope");return function(b,c,d){tb(b,"scope");var e=c?Fa.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var m=
e[d].nodeType;1!==m&&9!==m||e.eq(d).data("$scope",b)}c&&c(e,b);g&&g(b,e,e);return e}}function ka(a,b){try{a.addClass(b)}catch(c){}}function I(a,b,c,d,e,g){function f(a,c,d,e){var g,k,r,l,n,p,J;g=c.length;var F=Array(g);for(n=0;n<g;n++)F[n]=c[n];J=n=0;for(p=m.length;n<p;J++)k=F[J],c=m[n++],g=m[n++],r=z(k),c?(c.scope?(l=a.$new(),r.data("$scope",l)):l=a,(r=c.transclude)||!e&&b?c(g,l,k,d,U(a,r||b)):c(g,l,k,d,e)):g&&g(a,k.childNodes,s,e)}for(var m=[],k,r,l,n,p=0;p<a.length;p++)k=new Db,r=ba(a[p],[],k,
0===p?d:s,e),(g=r.length?ga(r,a[p],k,b,c,null,[],[],g):null)&&g.scope&&ka(z(a[p]),"ng-scope"),k=g&&g.terminal||!(l=a[p].childNodes)||!l.length?null:I(l,g?g.transclude:b),m.push(g,k),n=n||g||k,g=null;return n?f:null}function U(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",bb(c,c.$destroy));return d}}function ba(a,b,c,d,f){var m=c.$attr,k;switch(a.nodeType){case 1:S(b,la(Ga(a).toLowerCase()),"E",d,f);var r,l,n;k=a.attributes;for(var p=0,F=
k&&k.length;p<F;p++){var A=!1,Q=!1;r=k[p];if(!N||8<=N||r.specified){l=r.name;n=la(l);T.test(n)&&(l=cb(n.substr(6),"-"));var C=n.replace(/(Start|End)$/,"");n===C+"Start"&&(A=l,Q=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));n=la(l.toLowerCase());m[n]=l;c[n]=r=Z(r.value);ec(a,n)&&(c[n]=!0);O(a,b,r,n);S(b,n,"A",d,f,A,Q)}}a=a.className;if(w(a)&&""!==a)for(;k=g.exec(a);)n=la(k[2]),S(b,n,"C",d,f)&&(c[n]=Z(k[3])),a=a.substr(k.index+k[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(k=
e.exec(a.nodeValue))n=la(k[1]),S(b,n,"M",d,f)&&(c[n]=Z(k[2]))}catch(H){}}b.sort(u);return b}function aa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function B(a,b,c){return function(d,e,g,f,k){e=aa(e[0],b,c);return a(d,e,g,f,k)}}function ga(a,c,d,e,g,f,m,n,p){function A(a,b,c,d){if(a){c&&(a=B(a,c,d));a.require=G.require;if(K===
G||G.$$isolateScope)a=jc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=B(b,c,d));b.require=G.require;if(K===G||G.$$isolateScope)b=jc(b,{isolateScope:!0});n.push(b)}}function Q(a,b,c){var d,e="data",g=!1;if(w(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ha("ctreq",a,ca);}else L(a)&&(d=[],q(a,function(a){d.push(Q(a,b,c))}));return d}function H(a,e,g,f,p){function A(a,b){var c;2>
arguments.length&&(b=a,a=s);u&&(c=aa);return p(a,b,c)}var J,C,v,I,ba,B,aa={},gb;J=c===g?d:Rb(d,new Db(z(g),d.$attr));C=J.$$element;if(K){var t=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=z(g);B=e.$new(!0);ga&&ga===K.$$originalDirective?f.data("$isolateScope",B):f.data("$isolateScopeNoTemplate",B);ka(f,"ng-isolate-scope");q(K.scope,function(a,c){var d=a.match(t)||[],g=d[3]||c,f="?"==d[2],d=d[1],m,l,n,p;B.$$isolateBindings[c]=d+g;switch(d){case "@":J.$observe(g,function(a){B[c]=a});J.$$observers[g].$$scope=e;
J[g]&&(B[c]=b(J[g])(e));break;case "=":if(f&&!J[g])break;l=r(J[g]);p=l.literal?ta:function(a,b){return a===b};n=l.assign||function(){m=B[c]=l(e);throw ha("nonassign",J[g],K.name);};m=B[c]=l(e);B.$watch(function(){var a=l(e);p(a,B[c])||(p(a,m)?n(e,a=B[c]):B[c]=a);return m=a},null,l.literal);break;case "&":l=r(J[g]);B[c]=function(a){return l(e,a)};break;default:throw ha("iscp",K.name,c,a);}})}gb=p&&A;U&&q(U,function(a){var b={$scope:a===K||a.$$isolateScope?B:e,$element:C,$attrs:J,$transclude:gb},c;
ba=a.controller;"@"==ba&&(ba=J[a.name]);c=F(ba,b);aa[a.name]=c;u||C.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(v=m.length;f<v;f++)try{I=m[f],I(I.isolateScope?B:e,C,J,I.require&&Q(I.require,C,aa),gb)}catch(S){l(S,fa(C))}f=e;K&&(K.template||null===K.templateUrl)&&(f=B);a&&a(f,g.childNodes,s,p);for(f=n.length-1;0<=f;f--)try{I=n[f],I(I.isolateScope?B:e,C,J,I.require&&Q(I.require,C,aa),gb)}catch(G){l(G,fa(C))}}p=p||{};var v=-Number.MAX_VALUE,I,U=p.controllerDirectives,
K=p.newIsolateScopeDirective,ga=p.templateDirective;p=p.nonTlbTranscludeDirective;for(var S=!1,u=!1,y=d.$$element=z(c),G,ca,t,P=e,O,N=0,ma=a.length;N<ma;N++){G=a[N];var Va=G.$$start,T=G.$$end;Va&&(y=aa(c,Va,T));t=s;if(v>G.priority)break;if(t=G.scope)I=I||G,G.templateUrl||(x("new/isolated scope",K,G,y),W(t)&&(K=G));ca=G.name;!G.templateUrl&&G.controller&&(t=G.controller,U=U||{},x("'"+ca+"' controller",U[ca],G,y),U[ca]=G);if(t=G.transclude)S=!0,G.$$tlb||(x("transclusion",p,G,y),p=G),"element"==t?(u=
!0,v=G.priority,t=aa(c,Va,T),y=d.$$element=z(R.createComment(" "+ca+": "+d[ca]+" ")),c=y[0],hb(g,z(ua.call(t,0)),c),P=C(t,e,v,f&&f.name,{nonTlbTranscludeDirective:p})):(t=z(yb(c)).contents(),y.empty(),P=C(t,e));if(G.template)if(x("template",ga,G,y),ga=G,t=M(G.template)?G.template(y,d):G.template,t=V(t),G.replace){f=G;t=z("<div>"+Z(t)+"</div>").contents();c=t[0];if(1!=t.length||1!==c.nodeType)throw ha("tplrt",ca,"");hb(g,y,c);ma={$attr:{}};t=ba(c,[],ma);var X=a.splice(N+1,a.length-(N+1));K&&hc(t);
a=a.concat(t).concat(X);D(d,ma);ma=a.length}else y.html(t);if(G.templateUrl)x("template",ga,G,y),ga=G,G.replace&&(f=G),H=E(a.splice(N,a.length-N),y,d,g,P,m,n,{controllerDirectives:U,newIsolateScopeDirective:K,templateDirective:ga,nonTlbTranscludeDirective:p}),ma=a.length;else if(G.compile)try{O=G.compile(y,d,P),M(O)?A(null,O,Va,T):O&&A(O.pre,O.post,Va,T)}catch(Y){l(Y,fa(y))}G.terminal&&(H.terminal=!0,v=Math.max(v,G.priority))}H.scope=I&&!0===I.scope;H.transclude=S&&P;return H}function hc(a){for(var b=
0,c=a.length;b<c;b++)a[b]=Qb(a[b],{$$isolateScope:!0})}function S(b,e,g,f,k,r,n){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var F=0,A=e.length;F<A;F++)try{p=e[F],(f===s||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(r&&(p=Qb(p,{$$start:r,$$end:n})),b.push(p),k=p)}catch(Q){l(Q)}}return k}function D(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ka(e,
b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function E(a,b,c,d,e,g,f,k){var m=[],r,l,F=b[0],A=a.shift(),Q=y({},A,{templateUrl:null,transclude:null,replace:null,$$originalDirective:A}),C=M(A.templateUrl)?A.templateUrl(b,c):A.templateUrl;b.empty();n.get(v.getTrustedResourceUrl(C),{cache:p}).success(function(n){var p,H;n=V(n);if(A.replace){n=z("<div>"+
Z(n)+"</div>").contents();p=n[0];if(1!=n.length||1!==p.nodeType)throw ha("tplrt",A.name,C);n={$attr:{}};hb(d,b,p);var v=ba(p,[],n);W(A.scope)&&hc(v);a=v.concat(a);D(c,n)}else p=F,b.html(n);a.unshift(Q);r=ga(a,p,c,e,b,A,g,f,k);q(d,function(a,c){a==p&&(d[c]=b[0])});for(l=I(b[0].childNodes,e);m.length;){n=m.shift();H=m.shift();var K=m.shift(),B=m.shift(),v=b[0];if(H!==F){var aa=H.className,v=yb(p);hb(K,z(H),v);ka(z(v),aa)}H=r.transclude?U(n,r.transclude):B;r(l,n,v,d,H)}m=null}).error(function(a,b,c,
d){throw ha("tpload",d.url);});return function(a,b,c,d,e){m?(m.push(b),m.push(c),m.push(d),m.push(e)):r(l,b,c,d,e)}}function u(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function x(a,b,c,d){if(b)throw ha("multidir",b.name,c.name,a,fa(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:Y(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ka(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}
function P(a,b){if("srcdoc"==b)return v.HTML;var c=Ga(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return v.RESOURCE_URL}function O(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ga(a))throw ha("selmulti",fa(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(f.test(e))throw ha("nodomevents");if(g=b(m[e],!0,P(a,e)))m[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||
c).$watch(g,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function hb(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,m;if(a)for(f=0,m=a.length;f<m;f++)if(a[f]==d){a[f++]=c;m=f+e-1;for(var k=a.length;f<k;f++,m++)m<k?a[f]=a[m]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=R.createDocumentFragment();a.appendChild(d);c[z.expando]=d[z.expando];d=1;for(e=b.length;d<e;d++)g=b[d],z(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function jc(a,b){return y(function(){return a.apply(null,
arguments)},a,b)}var Db=function(a,b){this.$$element=a;this.$attr=b||{}};Db.prototype={$normalize:la,$addClass:function(a){a&&0<a.length&&Q.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&Q.removeClass(this.$$element,a)},$updateClass:function(a,b){this.$removeClass(kc(b,a));this.$addClass(kc(a,b))},$set:function(a,b,c,d){var e=ec(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=cb(a,"-"));e=Ga(this.$$element);
if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=K(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);A.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var ca=b.startSymbol(),ma=b.endSymbol(),V="{{"==ca||"}}"==ma?Aa:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,ma)},T=/^ngAttr[A-Z]/;
return C}]}function la(b){return Qa(b.replace(hd,""))}function kc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function id(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){wa(a,"controller");W(a)?y(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,h,m;w(e)&&(f=e.match(a),h=f[1],m=f[3],e=b.hasOwnProperty(h)?b[h]:Zb(g.$scope,h,
!0)||Zb(d,h,!0),Pa(e,h,!0));f=c.instantiate(e,g);if(m){if(!g||"object"!=typeof g.$scope)throw t("$controller")("noscp",h||e.name,m);g.$scope[m]=f}return f}}]}function jd(){this.$get=["$window",function(b){return z(b.document)}]}function kd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function lc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=x(Z(b.substr(0,e)));d=Z(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function mc(b){var a=
W(b)?b:s;return function(c){a||(a=lc(b));return c?a[x(c)]||null:a}}function nc(b,a,c){if(M(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function ld(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){w(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Tb(d)));return d}],transformRequest:[function(a){return W(a)&&"[object File]"!==La.call(a)?pa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:$(d),put:$(d),patch:$(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function r(a){function c(a){var b=y({},a,{data:nc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;
q(a,function(b,d){M(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=y({},a.headers),g,f,c=y({},c.common,c[x(a.method)]);b(c);b(d);a:for(g in c){a=x(g);for(f in d)if(x(f)===a)continue a;d[g]=c[g]}return d}(a);y(d,a);d.headers=g;d.method=Ha(d.method);(a=Eb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=a);var f=[function(a){g=a.headers;var b=nc(a.data,mc(g),a.transformRequest);u(a.data)&&q(g,function(a,b){"content-type"===x(b)&&delete g[b]});
u(a.withCredentials)&&!u(e.withCredentials)&&(a.withCredentials=e.withCredentials);return F(a,b,g).then(c,c)},s],k=n.when(d);for(q(v,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),k=k.then(a,h)}k.success=function(a){k.then(function(b){a(b.data,b.status,b.headers,d)});return k};k.error=function(a){k.then(null,function(b){a(b.data,b.status,b.headers,d)});return k};
return k}function F(b,c,g){function f(a,b,c){v&&(200<=a&&300>a?v.put(s,[a,b,lc(c)]):v.remove(s));m(b,a,c);d.$$phase||d.$apply()}function m(a,c,d){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:mc(d),config:b})}function k(){var a=ab(r.pendingRequests,b);-1!==a&&r.pendingRequests.splice(a,1)}var p=n.defer(),F=p.promise,v,q,s=A(b.url,b.params);r.pendingRequests.push(b);F.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(v=W(b.cache)?b.cache:W(e.cache)?e.cache:
H);if(v)if(q=v.get(s),D(q)){if(q.then)return q.then(k,k),q;L(q)?m(q[1],q[0],$(q[2])):m(q,200,{})}else v.put(s,F);u(q)&&a(b.method,s,c,f,g,b.timeout,b.withCredentials,b.responseType);return F}function A(a,b){if(!b)return a;var c=[];Oc(b,function(a,b){null===a||u(a)||(L(a)||(a=[a]),q(a,function(a){W(a)&&(a=pa(a));c.push(va(b)+"="+va(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var H=c("$http"),v=[];q(g,function(a){v.unshift(w(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=w(a)?p.get(a):
p.invoke(a);v.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(y(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(y(d||{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function md(b){if(8>=N&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");
if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw t("$httpBackend")("noxhr");}function nd(){this.$get=["$browser","$window","$document",function(b,a,c){return od(b,md,b.defer,a.angular.callbacks,c[0])}]}function od(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;N&&8>=N?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=
function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,m,k,l,n,p,r,F){function A(){v=f;K&&K();C&&C.abort()}function H(a,d,e,g){I&&c.cancel(I);K=C=null;d=0===d?e?200:404:d;a(1223==d?204:d,e,g);b.$$completeOutstandingRequest(E)}var v;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==x(e)){var Q="_"+(d.counter++).toString(36);d[Q]=function(a){d[Q].data=a};var K=g(m.replace("JSON_CALLBACK","angular.callbacks."+Q),function(){d[Q].data?H(l,200,d[Q].data):H(l,v||-2);d[Q]=Ba.noop})}else{var C=
a(e);C.open(e,m,!0);q(n,function(a,b){D(a)&&C.setRequestHeader(b,a)});C.onreadystatechange=function(){if(C&&4==C.readyState){var a=null,b=null;v!==f&&(a=C.getAllResponseHeaders(),b="response"in C?C.response:C.responseText);H(l,v||C.status,b,a)}};r&&(C.withCredentials=!0);if(F)try{C.responseType=F}catch(s){if("json"!==F)throw s;}C.send(k||null)}if(0<p)var I=c(A,p);else p&&p.then&&p.then(A)}}function pd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?
(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,l){for(var n,p,r=0,F=[],A=g.length,H=!1,v=[];r<A;)-1!=(n=g.indexOf(b,r))&&-1!=(p=g.indexOf(a,n+f))?(r!=n&&F.push(g.substring(r,n)),F.push(r=c(H=g.substring(n+f,p))),r.exp=H,r=p+h,H=!0):(r!=A&&F.push(g.substring(r)),r=A);(A=F.length)||(F.push(""),A=1);if(l&&1<F.length)throw oc("noconcat",g);if(!k||H)return v.length=A,r=function(a){try{for(var b=0,c=A,f;b<c;b++)"function"==typeof(f=F[b])&&(f=f(a),f=l?e.getTrusted(l,
f):e.valueOf(f),null===f||u(f)?f="":"string"!=typeof f&&(f=pa(f))),v[b]=f;return v.join("")}catch(k){a=oc("interr",g,k.toString()),d(a)}},r.exp=g,r.parts=F,r}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function qd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,r=0,F=D(m)&&!m;h=D(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(r++);
0<h&&r>=h&&(n.resolve(r),l(p.$$intervalId),delete e[p.$$intervalId]);F||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,
maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",
longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function pc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);return b.join("/")}function qc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=V(b.port)||sd[b.protocol]||null}function rc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):
b.pathname);a.$$search=Vb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function na(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Wa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Fb(b){return b.substr(0,Wa(b).lastIndexOf("/")+1)}function sc(b,a){this.$$html5=!0;a=a||"";var c=Fb(b);qc(b,this,b);this.$$parse=function(a){var e=na(c,a);if(!w(e))throw Gb("ipthprfx",a,c);rc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};
this.$$compose=function(){var a=Wb(this.$$search),b=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=pc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=na(b,d))!==s)return d=e,(e=na(a,e))!==s?c+(na("/",e)||e):b+d;if((e=na(c,d))!==s)return c+e;if(c==d+"/")return c}}function Hb(b,a){var c=Fb(b);qc(b,this,b);this.$$parse=function(d){var e=na(b,d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";if(!w(e))throw Gb("ihshprfx",d,a);rc(e,this,b);
d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Wb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=pc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Wa(b)==Wa(a))return a}}function tc(b,a){this.$$html5=!0;Hb.apply(this,arguments);var c=Fb(b);this.$$rewrite=function(d){var e;if(b==Wa(d))return d;if(e=na(c,
d))return b+a+e;if(c===d+"/")return c}}function ib(b){return function(){return this[b]}}function uc(b,a){return function(c){if(u(c))return this[b];this[b]=a(c);this.$$compose();return this}}function td(){var b="",a=!1;this.hashPrefix=function(a){return D(a)?(b=a,this):b};this.html5Mode=function(b){return D(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();
a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?sc:tc):(m=Wa(k),e=Hb);h=new e(m,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=z(a.target);"a"!==x(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href");W(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=xa(e.animVal).href);var f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),
c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):f(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),
b),f(a))}));h.$$replace=!1;return l});return h}]}function ud(){var b=!0,a=this;this.debugEnabled=function(a){return D(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function da(b,a){if("constructor"===b)throw ya("isecfld",a);return b}function Xa(b,a){if(b){if(b.constructor===b)throw ya("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw ya("isecwindow",a);if(b.children&&(b.nodeName||b.on&&b.find))throw ya("isecdom",a);}return b}function jb(b,
a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=da(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}g=da(a.shift(),d);return b[g]=c}function vc(b,a,c,d,e,g,f){da(b,g);da(a,g);da(c,g);da(d,g);da(e,g);return f.unwrapPromises?function(f,m){var k=m&&m.hasOwnProperty(b)?m:f,l;if(null==k)return k;(k=k[b])&&k.then&&(qa(g),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),
k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(qa(g),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(qa(g),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&(qa(g),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(qa(g),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);
return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function vd(b,a){da(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function wd(b,a,c){da(b,c);da(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function wc(b,a,c){if(Ib.hasOwnProperty(b))return Ib[b];
var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?vc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=vc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=s,b=h;while(f<e);return h};else{var f="var p;\n";q(d,function(b,d){da(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':
"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=Y(f);g=a.unwrapPromises?function(a,b){return h(a,b,qa)}:h}else g=wd(d[0],d[1],c);else g=vd(d[0],c);"hasOwnProperty"!==b&&(Ib[b]=g);return g}function xd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return D(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return D(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer",
"$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!xc.hasOwnProperty(b)&&(xc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Jb(a);e=(new Ya(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return E}}}]}function yd(){this.$get=["$rootScope","$exceptionHandler",
function(b,a){return zd(function(a){b.$evalAsync(a)},a)}]}function zd(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var f=[],k,l;return l={resolve:function(a){if(f){var c=f;f=s;k=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(f){var c=f;f.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,h){var l=e(),A=function(d){try{l.resolve((M(b)?
b:c)(d))}catch(e){l.reject(e),a(e)}},H=function(b){try{l.resolve((M(g)?g:d)(b))}catch(c){l.reject(c),a(c)}},v=function(b){try{l.notify((M(h)?h:c)(b))}catch(d){a(d)}};f?f.push([A,H,v]):k.then(A,H,v);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,g){var f=null;try{f=(a||c)()}catch(k){return b(k,!1)}return f&&M(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):
b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&M(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(g,f){var h=e();b(function(){try{h.resolve((M(f)?f:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:f,when:function(h,k,l,n){var p=e(),r,F=function(b){try{return(M(k)?k:c)(b)}catch(d){return a(d),
f(d)}},A=function(b){try{return(M(l)?l:d)(b)}catch(c){return a(c),f(c)}},q=function(b){try{return(M(n)?n:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){r||(r=!0,p.resolve(g(a).then(F,A,q)))},function(a){r||(r=!0,p.resolve(A(a)))},function(a){r||p.notify(q(a))})});return p.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}
function Ad(){var b=10,a=t("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=Za();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}
function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=g(a);Pa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Za());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=
this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!M(b)){var h=k(b||E,"listener");f.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var m=f.fn;f.fn=function(a,b,c){m.call(this,a,b,c);Ma(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);
return function(){Ma(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f=0,h=g(a),k=[],m={},l=0;return this.$watch(function(){e=h(c);var a,b;if(W(e))if(qb(e))for(d!==k&&(d=k,l=d.length=0,f++),a=e.length,l!==a&&(f++,d.length=l=a),b=0;b<a;b++)d[b]!==e[b]&&(f++,d[b]=e[b]);else{d!==m&&(d=m={},l=0,f++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(f++,d[b]=e[b]):(l++,d[b]=e[b],f++));if(l>a)for(b in f++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(l--,delete d[b])}else d!==
e&&(d=e,f++);return f},function(){b(e,d,c)})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,q,C,s=b,I,U=[],t,z,B;m("$digest");c=null;do{C=!1;for(I=this;k.length;){try{B=k.shift(),B.scope.$eval(B.expression)}catch(D){p.$$phase=null,e(D)}c=null}a:do{if(h=I.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(I))!==(g=d.last)&&!(d.eq?ta(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))C=!0,c=d,d.last=d.eq?$(f):f,d.fn(f,g===n?f:g,I),5>s&&(t=4-s,U[t]||
(U[t]=[]),z=M(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,z+="; newVal: "+pa(f)+"; oldVal: "+pa(g),U[t].push(z));else if(d===c){C=!1;break a}}catch(y){p.$$phase=null,e(y)}if(!(h=I.$$childHead||I!==this&&I.$$nextSibling))for(;I!==this&&!(h=I.$$nextSibling);)I=I.$parent}while(I=h);if((C||k.length)&&!s--)throw p.$$phase=null,a("infdig",b,pa(U));}while(C||k.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(w){e(w)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||
f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[ab(c,
b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ua.call(arguments,1)),m,l;do{d=f.$$listeners[a]||c;h.currentScope=f;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,k)}catch(p){e(p)}else d.splice(m,1),m--,l--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=
!0},defaultPrevented:!1},g=[f].concat(ua.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(m){e(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var p=new h;return p}]}function Bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return D(a)?
(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!N||8<=N)if(g=xa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Cd(b){if("self"===b)return b;if(w(b)){if(-1<b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if($a(b))return RegExp("^"+b.source+"$");
throw ra("imatcher");}function yc(b){var a=[];D(b)&&q(b,function(b){a.push(Cd(b))});return a}function Dd(){this.SCE_CONTEXTS=ea;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=yc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=yc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[ea.HTML]=d(g);f[ea.CSS]=d(g);f[ea.URL]=d(g);f[ea.JS]=d(g);f[ea.RESOURCE_URL]=d(f[ea.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===
d||d===s||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===ea.RESOURCE_URL){var g=xa(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Eb(g):b[l].exec(g.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Eb(g):a[l].exec(g.href)){p=!1;break}if(p)return d;throw ra("insecurl",d.toString());}if(c===ea.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}
function Ed(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=$(ea);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Aa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,
f=e.getTrusted,h=e.trustAs;q(ea,function(a,b){var c=x(b);e[Qa("parse_as_"+c)]=function(b){return g(a,b)};e[Qa("get_trusted_"+c)]=function(b){return f(a,b)};e[Qa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function Fd(){this.$get=["$window","$document",function(b,a){var c={},d=V((/android (\d+)/.exec(x((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,l=!1,n=!1;if(k){for(var p in k)if(l=
m.exec(p)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||l&&n||(l=w(g.body.style.webkitTransition),n=w(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==N)return!1;if(u(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:Sb(),vendorPrefix:h,
transitions:l,animations:n,android:d,msie:N,msieDocumentMode:f}}]}function Gd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,n=D(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;g[h]=k;return l}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):
!1};return e}]}function xa(b,a){var c=b;N&&(T.setAttribute("href",c),c=T.href);T.setAttribute("href",c);return{href:T.href,protocol:T.protocol?T.protocol.replace(/:$/,""):"",host:T.host,search:T.search?T.search.replace(/^\?/,""):"",hash:T.hash?T.hash.replace(/^#/,""):"",hostname:T.hostname,port:T.port,pathname:"/"===T.pathname.charAt(0)?T.pathname:"/"+T.pathname}}function Eb(b){b=w(b)?xa(b):b;return b.protocol===zc.protocol&&b.host===zc.host}function Hd(){this.$get=Y(P)}function Ac(b){function a(d,
e){if(W(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Bc);a("date",Cc);a("filter",Id);a("json",Jd);a("limitTo",Kd);a("lowercase",Ld);a("number",Dc);a("orderBy",Ec);a("uppercase",Md)}function Id(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&
(c="boolean"===d&&c?function(a,b){return Ba.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};
switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:c&&c[b],a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var h=b[f];e.check(h)&&d.push(h)}return d}}function Bc(b){var a=b.NUMBER_FORMATS;return function(b,d){u(d)&&(d=a.CURRENCY_SYM);return Fc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Dc(b){var a=
b.NUMBER_FORMATS;return function(b,d){return Fc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Fc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",m=[],k=!1;if(-1!==f.indexOf("e")){var l=f.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{f=(f.split(Gc)[1]||"").length;u(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Gc);f=b[0];b=b[1]||
"";var l=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(l=f.length-n,k=0;k<l;k++)0===(l-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=l;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(g?a.negPre:a.posPre);m.push(h);m.push(g?a.negSuf:a.posSuf);return m.join("")}function Kb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+
b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Kb(e,a,d)}}function kb(b,a){return function(c,d){var e=c["get"+b](),g=Ha(a?"SHORT"+b:b);return d[g][e]}}function Cc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=V(b[9]+b[10]),f=V(b[9]+b[11]));h.call(a,V(b[1]),V(b[2])-1,V(b[3]));g=V(b[4]||0)-g;f=V(b[5]||0)-f;h=V(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,g,f,h,b)}return a}var c=
/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;w(c)&&(c=Nd.test(c)?V(c):a(c));rb(c)&&(c=new Date(c));if(!Ka(c))return c;for(;e;)(m=Od.exec(e))?(f=f.concat(ua.call(m,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=Pd[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Jd(){return function(b){return pa(b,!0)}}function Kd(){return function(b,
a){if(!L(b)&&!w(b))return b;a=V(a);if(w(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Ec(b){return function(a,c,d){function e(a,b){return Oa(b)?function(b,c){return a(c,b)}:a}if(!L(a)||!c)return a;c=L(c)?c:[c];c=Qc(c,function(a){var c=!1,d=a||Aa;if(w(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,
b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)});for(var g=[],f=0;f<a.length;f++)g.push(a[f]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){M(b)&&(b={link:b});b.restrict=b.restrict||"AC";return Y(b)}function Hc(b,a){function c(a,c){c=c?"-"+cb(c,"-"):"";b.removeClass((a?lb:mb)+c).addClass((a?mb:lb)+c)}var d=this,e=b.parent().controller("form")||
nb,g=0,f=d.$error={},h=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ia);c(!0);d.$addControl=function(a){wa(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(f,function(b,c){d.$setValidity(c,!0,a)});Ma(h,a)};d.$setValidity=function(a,b,h){var n=f[a];if(b)n&&(Ma(n,h),n.length||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),f[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{g||
c(b);if(n){if(-1!=ab(n,h))return}else f[a]=n=[],g++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ia).addClass(ob);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(ob).addClass(Ia);d.$dirty=!1;d.$pristine=!0;q(h,function(a){a.$setPristine()})}}function oa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function pb(b,a,c,d,e,g){if(!e.android){var f=!1;a.on("compositionstart",function(a){f=!0});a.on("compositionend",
function(){f=!1})}var h=function(){if(!f){var e=a.val();Oa(c.ngTrim||"T")&&(e=Z(e));d.$viewValue!==e&&(b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)}))}};if(e.hasEvent("input"))a.on("input",h);else{var m,k=function(){m||(m=g.defer(function(){h();m=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});if(e.hasEvent("paste"))a.on("paste cut",k)}a.on("change",h);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var l=c.ngPattern;
l&&((e=l.match(/^\/(.*)\/([gim]*)$/))?(l=RegExp(e[1],e[2]),e=function(a){return oa(d,"pattern",d.$isEmpty(a)||l.test(a),a)}):e=function(c){var e=b.$eval(l);if(!e||!e.test)throw t("ngPattern")("noregexp",l,e,fa(a));return oa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var n=V(c.ngMinlength);e=function(a){return oa(d,"minlength",d.$isEmpty(a)||a.length>=n,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var p=V(c.ngMaxlength);e=
function(a){return oa(d,"maxlength",d.$isEmpty(a)||a.length<=p,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Lb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function g(b){if(!0===a||c.$index%2===a){var d=f(b||"");h?ta(b,h)||e.$updateClass(d,f(h)):e.$addClass(d)}h=$(b)}function f(a){if(L(a))return a.join(" ");if(W(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],g,!0);e.$observe("class",function(a){g(c.$eval(e[b]))});
"ngClass"!==b&&c.$watch("$index",function(d,g){var h=d&1;if(h!==g&1){var n=f(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var x=function(b){return w(b)?b.toLowerCase():b},Ha=function(b){return w(b)?b.toUpperCase():b},N,z,Ca,ua=[].slice,Qd=[].push,La=Object.prototype.toString,Na=t("ng"),Ba=P.angular||(P.angular={}),Ua,Ga,ia=["0","0","0"];N=V((/msie (\d+)/.exec(x(navigator.userAgent))||[])[1]);isNaN(N)&&(N=V((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent))||[])[1]));E.$inject=[];
Aa.$inject=[];var Z=function(){return String.prototype.trim?function(b){return w(b)?b.trim():b}:function(b){return w(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ga=9>N?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ha(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Tc=/[A-Z]/g,Rd={full:"1.2.12",major:1,minor:2,dot:12,codeName:"cauliflower-eradication"},Ra=O.cache={},db=O.expando="ng-"+(new Date).getTime(),Xc=1,Ic=
P.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},zb=P.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},Vc=/([\:\-\_]+(.))/g,Wc=/^moz([A-Z])/,wb=t("jqLite"),Fa=O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===R.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),O(P).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+
a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?z(this[b]):z(this[this.length+b])},length:0,push:Qd,sort:[].sort,splice:[].splice},fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){fb[x(b)]=b});var fc={};q("input select option textarea button form details".split(" "),function(b){fc[Ha(b)]=!0});q({data:bc,inheritedData:eb,scope:function(b){return z(b).data("$scope")||eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z(b).data("$isolateScope")||
z(b).data("$isolateScopeNoTemplate")},controller:cc,injector:function(b){return eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=Qa(a);if(D(c))b.style[a]=c;else{var d;8>=N&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=N&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=x(a);if(fb[d])if(D(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?
d:s;else if(D(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(D(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(u(d))return e?b[e]:"";b[e]=d}var a=[];9>N?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(u(a)){if("SELECT"===Ga(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=
a},html:function(b,a){if(u(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Da(d[c]);b.innerHTML=a},empty:dc},function(b,a){O.prototype[a]=function(a,d){var e,g;if(b!==dc&&(2==b.length&&b!==Ab&&b!==cc?a:d)===s){if(W(a)){for(e=0;e<this.length;e++)if(b===bc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===s?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:$b,
dealoc:Da,on:function a(c,d,e,g){if(D(g))throw wb("onargs");var f=ja(c,"events"),h=ja(c,"handle");f||ja(c,"events",f={});h||ja(c,"handle",h=Yc(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var l=R.body.contains||R.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=
c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Ic(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:ac,one:function(a,c,d){a=z(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Da(a);q(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===
a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){q(new O(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new O(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=z(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Da(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new O(c),function(a){e.insertBefore(a,
d.nextSibling);d=a})},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){u(d)&&(d=!Ab(a,c));(d?Cb:Bb)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:yb,triggerHandler:function(a,c,d){c=(ja(a,"events")||{})[c];d=d||[];var e=[{preventDefault:E,stopPropagation:E}];
q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){O.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)u(f)?(f=a(this[h],c,e,g),D(f)&&(f=z(f))):xb(f,a(this[h],c,e,g));return D(f)?f:this};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off});Sa.prototype={put:function(a,c){this[Ea(a)]=c},get:function(a){return this[Ea(a)]},remove:function(a){var c=this[a=Ea(a)];delete this[a];return c}};var $c=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,ad=/,/,bd=/^\s*(_?)(\S+?)\1\s*$/,Zc=
/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ta=t("$injector"),Sd=t("$animate"),Td=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Sd("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout",function(a){return{enter:function(d,e,g,f){g?g.after(d):(e&&e[0]||(e=g.parent()),e.append(d));
f&&a(f,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,g,f){this.enter(a,c,g,f)},addClass:function(d,e,g){e=w(e)?e:L(e)?e.join(" "):"";q(d,function(a){Cb(a,e)});g&&a(g,0,!1)},removeClass:function(d,e,g){e=w(e)?e:L(e)?e.join(" "):"";q(d,function(a){Bb(a,e)});g&&a(g,0,!1)},enabled:E}}]}],ha=t("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var hd=/^(x[\:\-_]|data[\:\-_])/i,oc=t("$interpolate"),Ud=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,sd={http:80,https:443,ftp:21},Gb=t("$location");
tc.prototype=Hb.prototype=sc.prototype={$$html5:!1,$$replace:!1,absUrl:ib("$$absUrl"),url:function(a,c){if(u(a))return this.$$url;var d=Ud.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:ib("$$protocol"),host:ib("$$host"),port:ib("$$port"),path:uc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(w(a))this.$$search=Vb(a);else if(W(a))this.$$search=
a;else throw Gb("isrcharg");break;default:u(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:uc("$$hash",Aa),replace:function(){this.$$replace=!0;return this}};var ya=t("$parse"),xc={},qa,Ja={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:E,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return D(d)?D(e)?d+e:d:D(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(D(d)?d:0)-(D(e)?e:0)},"*":function(a,c,d,e){return d(a,
c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":E,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,
c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Vd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Jb=function(a){this.options=a};Jb.prototype={constructor:Jb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);
if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;
continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ja[this.ch],f=Ja[d],h=Ja[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==
a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=D(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+
"]":" "+d;throw ya("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=x(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,
text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ja.hasOwnProperty(c))d.fn=Ja[c],d.json=Ja[c];
else{var m=wc(c,this.options,this.text);d.fn=y(function(a,c){return m(a,c)},{assign:function(d,e){return jb(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+
f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Vd[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var Ya=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Ya.ZERO=function(){return 0};Ya.prototype={constructor:Ya,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,
this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=
this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ya("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ya("ueoe",this.text);return this.tokens[0]},
peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return y(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return y(function(e,
g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return y(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=
this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+
"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,
c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*",
"/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Ya.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=wc(d,this.options,this.text);return y(function(c,d,h){return e(h||a(c,d))},{assign:function(e,f,h){return jb(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();
this.consume("]");return y(function(e,g){var f=a(e,g),h=d(e,g),m;if(!f)return s;(f=Xa(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(m=f,"$$v"in f||(m.$$v=s,m.then(function(a){m.$$v=a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Xa(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],m=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,
f));k=a(g,f,m)||E;Xa(m,e.text);Xa(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Xa(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return y(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;
this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return y(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Ib={},ra=t("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},T=R.createElement("a"),zc=xa(P.location.href,!0);Ac.$inject=["$provide"];Bc.$inject=["$locale"];Dc.$inject=["$locale"];var Gc=".",Pd={yyyy:X("FullYear",4),
yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:kb("Month"),MMM:kb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+
Kb(Math.abs(a%60),2))}},Od=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Nd=/^\-?\d+$/;Cc.$inject=["$locale"];var Ld=Y(x),Md=Y(Ha);Ec.$inject=["$parse"];var Wd=Y({restrict:"E",compile:function(a,c){8>=N&&(c.href||c.name||c.$set("href",""),a.append(R.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var g="[object SVGAnimatedString]"===La.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),
Mb={};q(fb,function(a,c){if("multiple"!=a){var d=la("ng-"+c);Mb[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=la("ng-"+a);Mb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),N&&e.prop(a,g[a]))})}}}});var nb={$addControl:E,$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E};Hc.$inject=["$element","$attrs","$scope"];var Jc=function(a){return["$timeout",
function(c){return{name:"form",restrict:a?"EAC":"E",controller:Hc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Ic(e[0],"submit",h);e.on("$destroy",function(){c(function(){zb(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=g.name||g.ngForm;k&&jb(a,k,f,k);if(m)e.on("$destroy",function(){m.$removeControl(f);k&&jb(a,k,s,k);y(f,nb)})}}}}}]},Xd=Jc(),Yd=Jc(!0),Zd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
$d=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,ae=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Kc={text:pb,number:function(a,c,d,e,g,f){pb(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||ae.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return oa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));
d.max&&(a=function(a){var c=parseFloat(d.max);return oa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return oa(e,"number",e.$isEmpty(a)||rb(a),a)})},url:function(a,c,d,e,g,f){pb(a,c,d,e,g,f);a=function(a){return oa(e,"url",e.$isEmpty(a)||Zd.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){pb(a,c,d,e,g,f);a=function(a){return oa(e,"email",e.$isEmpty(a)||$d.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},
radio:function(a,c,d,e){u(d.name)&&c.attr("name",Za());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;w(g)||(g=!0);w(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===
g});e.$parsers.push(function(a){return a?g:f})},hidden:E,button:E,submit:E,reset:E},Lc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Kc[x(g.type)]||Kc.text)(d,e,g,f,c,a)}}}],mb="ng-valid",lb="ng-invalid",Ia="ng-pristine",ob="ng-dirty",be=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function f(a,c){c=c?"-"+cb(c,"-"):"";e.removeClass((a?lb:mb)+c).addClass((a?mb:lb)+c)}this.$modelValue=this.$viewValue=Number.NaN;
this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=g(d.ngModel),m=h.assign;if(!m)throw t("ngModel")("nonassign",d.ngModel,fa(e));this.$render=E;this.$isEmpty=function(a){return u(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||nb,l=0,n=this.$error={};e.addClass(Ia);f(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&l--,l||(f(!0),this.$valid=!0,this.$invalid=!1)):(f(!1),
this.$invalid=!0,this.$valid=!1,l++),n[a]=!c,f(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(ob).addClass(Ia)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ia).addClass(ob),k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=
h(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],ce=function(){return{require:["ngModel","^?form"],controller:be,link:function(a,c,d,e){var g=e[0],f=e[1]||nb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},de=Y({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Mc=function(){return{require:"?ngModel",link:function(a,c,
d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},ee=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!u(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(Z(a))});return c}});e.$formatters.push(function(a){return L(a)?
a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},fe=/^(true|false|\d+)$/,ge=function(){return{priority:100,compile:function(a,c){return fe.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},he=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),ie=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));
d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],je=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],ke=Lb("",!0),le=Lb("Odd",0),me=Lb("Even",1),ne=sa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),oe=[function(){return{scope:!0,controller:"@",
priority:500}}],Nc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=la("ng-"+a);Nc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d,e){d.on(x(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var pe=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var h,
m;c.$watch(e.ngIf,function(g){Oa(g)?m||(m=c.$new(),f(m,function(c){c[c.length++]=R.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(m&&(m.$destroy(),m=null),h&&(a.leave(ub(h.clone)),h=null))})}}}],qe=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ba.noop,compile:function(f,h){var m=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(f,h,q,s,A){var t=
0,v,z,K=function(){v&&(v.$destroy(),v=null);z&&(e.leave(z),z=null)};f.$watch(g.parseAsResourceUrl(m),function(g){var m=function(){!D(l)||l&&!f.$eval(l)||d()},q=++t;g?(a.get(g,{cache:c}).success(function(a){if(q===t){var c=f.$new();s.template=a;a=A(c,function(a){K();e.enter(a,null,h,m)});v=c;z=a;v.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===t&&K()}),f.$emit("$includeContentRequested")):(K(),s.template=null)})}}}}],re=["$compile",function(a){return{restrict:"ECA",priority:-400,
require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],se=sa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),te=sa({terminal:!0,priority:1E3}),ue=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,m=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(f,function(a,c){s.test(c)&&(l[x(c.replace("when","").replace("Minus",
"-"))]=g.attr(f.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+r))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],ve=["$parse","$animate",function(a,c){var d=t("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,h,m){var k=f.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,A,t,v={$id:Ea};if(!l)throw d("iexp",
k);f=l[1];h=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){t&&(v[t]=a);v[A]=c;v.$index=d;return n(e,v)}):(r=function(a,c){return Ea(c)},s=function(a){return a});l=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",f);A=l[3]||l[1];t=l[2];var D={};e.$watchCollection(h,function(a){var f,h,l=g[0],n,v={},y,B,w,u,S,E,x=[];if(qb(a))S=a,n=p||r;else{n=p||s;S=[];for(w in a)a.hasOwnProperty(w)&&"$"!=w.charAt(0)&&S.push(w);S.sort()}y=S.length;h=x.length=S.length;for(f=0;f<h;f++)if(w=a===
S?f:S[f],u=a[w],u=n(w,u,f),wa(u,"`track by` id"),D.hasOwnProperty(u))E=D[u],delete D[u],v[u]=E,x[f]=E;else{if(v.hasOwnProperty(u))throw q(x,function(a){a&&a.scope&&(D[a.id]=a)}),d("dupes",k,u);x[f]={id:u};v[u]=!1}for(w in D)D.hasOwnProperty(w)&&(E=D[w],f=ub(E.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),E.scope.$destroy());f=0;for(h=S.length;f<h;f++){w=a===S?f:S[f];u=a[w];E=x[f];x[f-1]&&(l=x[f-1].clone[x[f-1].clone.length-1]);if(E.scope){B=E.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
E.clone[0]!=n&&c.move(ub(E.clone),null,z(l));l=E.clone[E.clone.length-1]}else B=e.$new();B[A]=u;t&&(B[t]=w);B.$index=f;B.$first=0===f;B.$last=f===y-1;B.$middle=!(B.$first||B.$last);B.$odd=!(B.$even=0===(f&1));E.scope||m(B,function(a){a[a.length++]=R.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,z(l));l=a;E.scope=B;E.clone=a;v[E.id]=E})}D=v})}}}],we=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Oa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],xe=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Oa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],ye=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ze=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f,h,m=[];c.$watch(e.ngSwitch||e.on,function(d){for(var l=0,n=m.length;l<n;l++)m[l].$destroy(),a.leave(h[l]);h=[];m=[];if(f=g.cases["!"+
d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Ae=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Be=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,
element:c})}}),Ce=sa({controller:["$element","$transclude",function(a,c){if(!c)throw t("ngTransclude")("orphan",fa(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.empty();c.append(a)})}}),De=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ee=t("ngOptions"),Fe=Y({terminal:!0}),Ge=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){wa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ea(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",
!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=E})}],link:function(e,f,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&w.prop("selected",!0)):u(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Sa(d.$viewValue);q(c.find("option"),
function(c){c.selected=D(a.get(c.value))})};a.$watch(function(){ta(e,d.$viewValue)||(e=$(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,u;t=g.$modelValue;u=z(e)||[];var C=n?Nb(u):u,F,J,x;J={};s=!1;var B,H;if(r)if(w&&L(t))for(s=new Sa([]),x=0;x<t.length;x++)J[m]=t[x],s.put(w(e,J),t[x]);else s=new Sa(t);for(x=0;F=C.length,
x<F;x++){k=x;if(n){k=C[x];if("$"===k.charAt(0))continue;J[n]=k}J[m]=u[k];d=p(e,J)||"";(k=a[d])||(k=a[d]=[],c.push(d));r?d=D(s.remove(w?w(e,J):q(e,J))):(w?(d={},d[m]=t,d=w(e,d)===w(e,J)):d=t===q(e,J),s=s||d);B=l(e,J);B=D(B)?B:"";k.push({id:w?w(e,J):n?C[x]:x,label:B,selected:d})}r||(A||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));J=0;for(C=c.length;J<C;J++){d=c[J];k=a[d];y.length<=J?(t={element:E.clone().attr("label",d),label:k.label},u=[t],y.push(u),
f.append(t.element)):(u=y[J],t=u[0],t.label!=d&&t.element.attr("label",t.label=d));B=null;x=0;for(F=k.length;x<F;x++)s=k[x],(d=u[x+1])?(B=d.element,d.label!==s.label&&B.text(d.label=s.label),d.id!==s.id&&B.val(d.id=s.id),B[0].selected!==s.selected&&B.prop("selected",d.selected=s.selected)):(""===s.id&&A?H=A:(H=v.clone()).val(s.id).attr("selected",s.selected).text(s.label),u.push({element:H,label:s.label,id:s.id,selected:s.selected}),B?B.after(H):t.element.append(H),B=H);for(x++;u.length>x;)u.pop().element.remove()}for(;y.length>
J;)y.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Ee("iexp",t,fa(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),z=c(k[7]),w=k[8]?c(k[8]):null,y=[[{element:f,label:""}]];A&&(a(A)(e),A.removeClass("ng-scope"),A.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=z(e)||[],d={},h,k,l,p,t,v,u;if(r)for(k=[],p=0,v=y.length;p<v;p++)for(a=y[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&
(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),"?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=c[u],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var p=m[0];m=m[1];var r=h.multiple,t=h.ngOptions,A=!1,w,v=z(R.createElement("option")),E=z(R.createElement("optgroup")),y=v.clone();h=0;for(var C=f.children(),x=C.length;h<x;h++)if(""===C[h].value){w=A=C.eq(h);break}p.init(m,A,
y);r&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,m):r?l(e,f,m):k(e,f,m,p)}}}}],He=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(u(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):
l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],Ie=Y({restrict:"E",terminal:!0});(Ca=P.jQuery)?(z=Ca,y(Ca.fn,{scope:Fa.scope,isolateScope:Fa.isolateScope,controller:Fa.controller,injector:Fa.injector,inheritedData:Fa.inheritedData}),vb("remove",!0,!0,!1),vb("empty",!1,!1,!1),vb("html",!1,!1,!0)):z=O;Ba.element=z;(function(a){y(a,{bootstrap:Xb,copy:$,extend:y,equals:ta,element:z,forEach:q,injector:Yb,noop:E,bind:bb,toJson:pa,fromJson:Tb,identity:Aa,isUndefined:u,isDefined:D,
isString:w,isFunction:M,isObject:W,isNumber:rb,isElement:Pc,isArray:L,version:Rd,isDate:Ka,lowercase:x,uppercase:Ha,callbacks:{counter:0},$$minErr:t,$$csp:Sb});Ua=Uc(P);try{Ua("ngLocale")}catch(c){Ua("ngLocale",[]).provider("$locale",rd)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Bd});a.provider("$compile",ic).directive({a:Wd,input:Lc,textarea:Lc,form:Xd,script:De,select:Ge,style:Ie,option:He,ngBind:he,ngBindHtml:je,ngBindTemplate:ie,ngClass:ke,ngClassEven:me,ngClassOdd:le,
ngCloak:ne,ngController:oe,ngForm:Yd,ngHide:xe,ngIf:pe,ngInclude:qe,ngInit:se,ngNonBindable:te,ngPluralize:ue,ngRepeat:ve,ngShow:we,ngStyle:ye,ngSwitch:ze,ngSwitchWhen:Ae,ngSwitchDefault:Be,ngOptions:Fe,ngTransclude:Ce,ngModel:ce,ngList:ee,ngChange:de,required:Mc,ngRequired:Mc,ngValue:ge}).directive({ngInclude:re}).directive(Mb).directive(Nc);a.provider({$anchorScroll:cd,$animate:Td,$browser:ed,$cacheFactory:fd,$controller:id,$document:jd,$exceptionHandler:kd,$filter:Ac,$interpolate:pd,$interval:qd,
$http:ld,$httpBackend:nd,$location:td,$log:ud,$parse:xd,$rootScope:Ad,$q:yd,$sce:Ed,$sceDelegate:Dd,$sniffer:Fd,$templateCache:gd,$timeout:Gd,$window:Hd})}])})(Ba);z(R).ready(function(){Sc(R,Xb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/angular/angular.min.js","/libs/angular")
},{"+7ZJp0":27,"buffer":24}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* hasScroll
* author: ronglin
* create date: 2014.5.22
*/
module.exports = function (el) {
    // test targets
    var elems = el ? [el] : [document.documentElement, document.body];
    var scrollX = false, scrollY = false;
    for (var i = 0; i < elems.length; i++) {
        var o = elems[i];
        // test horizontal
        var sl = o.scrollLeft;
        o.scrollLeft += (sl > 0) ? -1 : 1;
        o.scrollLeft !== sl && (scrollX = scrollX || true);
        o.scrollLeft = sl;
        // test vertical
        var st = o.scrollTop;
        o.scrollTop += (st > 0) ? -1 : 1;
        o.scrollTop !== st && (scrollY = scrollY || true);
        o.scrollTop = st;
    }
    // ret
    return {
        scrollX: scrollX,
        scrollY: scrollY
    };
};
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/hasScroll.js","/libs")
},{"+7ZJp0":27,"buffer":24}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* parseUrl
* author: ronglin
* create date: 2014.5.22
*/

module.exports = function (url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
            seg = a.search.replace(/^\?/, '').split('&'),
            len = seg.length, i = 0, s;
            for (; i < len; i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
};
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/parseUrl.js","/libs")
},{"+7ZJp0":27,"buffer":24}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* utilities
* author: ronglin
* create date: 2014.5.4
*/

var common = require('../../../jsg/utilities');

module.exports = common.extend({}, common, {

    dom: {
        parseUrl: require('./parseUrl'),
        hasScroll: require('./hasScroll'),
        isAncestor: function (p, c) {
            var ret = false;
            if (p && c) {
                if (p.contains) {
                    return p.contains(c);
                } else if (p.compareDocumentPosition) {
                    return !!(p.compareDocumentPosition(c) & 16);
                } else {
                    while (c = c.parentNode) {
                        ret = c == p || ret;
                    }
                }
            }
            return ret;
        }
    },

    isWindow: function (obj) {
        return obj != null && obj == obj.window
    },

    viewUrl: function (url){
        return url;
    },

    i18n: function(key, val) {
        var getVal = this.readObj({}, key);
        return getVal !== undefined ? getVal : val;
    }
});
}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libs/utilities.js","/libs")
},{"+7ZJp0":27,"../../../jsg/utilities":23,"./hasScroll":20,"./parseUrl":21,"buffer":24}],23:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* utilities
* author: ronglin
* create date: 2014.6.21
*/

module.exports = {

    arg2arr: function() {
        var splice = Array.prototype.splice;
        return function(args, skip) {
            return splice.call(args, skip || 0);
        };
    }(),

    type: function() {
        var op = Object.prototype;
        var class2type = {}, natives = 'Boolean Number String Function Array Date RegExp Object Error'.split(' ');
        for (var i = 0; i < natives.length; i++) {class2type['[object ' + natives[i] + ']'] = natives[i].toLowerCase(); }
        return function(obj) {
            return obj == null ? String(obj) : class2type[op.toString.call(obj)] || 'object';
        };
    }(),

    isArray: function(obj){
        return this.type(obj) === 'array';
    },

    isFunction: function(obj) {
        return this.type(obj) === 'function';
    },

    isNumeric: function (obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj)
    },

    isPlainObject: function (obj) {
        if (!obj || this.type(obj) !== "object" || obj.nodeType) {
            return false;
        }
        try {
            if (obj.constructor && !this.hasOwn(obj, "constructor") && !this.hasOwn(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        } catch (e) {
            return false;
        }
        var key;
        for (key in obj) {}
        return key === undefined || this.hasOwn(obj, key);
    },

    hasOwn: function(o, prop){
        if ( o === null || o === undefined ) {
            return false;
        } else if ( o.hasOwnProperty ) {
            return o.hasOwnProperty( prop );
        } else {
            return ( this.type( o[prop] ) !== 'undefined' ) && o.constructor.prototype[prop] !== o[prop];
        }
    },

    each: function( obj, callback, args ) {
        if (!obj) { return; }
        //
        var name,
            i = 0,
            length = obj.length,
            isObj = length === undefined || this.isFunction( obj );

        if ( args ) {
            if ( isObj ) {
                for ( name in obj ) {
                    if ( callback.apply( obj[ name ], args ) === false ) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if ( callback.apply( obj[ i++ ], args ) === false ) {
                        break;
                    }
                }
            }

        // A special, fast, case for the most common use of each
        } else {
            if ( isObj ) {
                for ( name in obj ) {
                    if ( callback.call( obj[ name ], name, obj[ name ] ) === false ) {
                        break;
                    }
                }
            } else {
                for ( ; i < length; ) {
                    if ( callback.call( obj[ i ], i, obj[ i++ ] ) === false ) {
                        break;
                    }
                }
            }
        }

        return obj;
    },

    extend: function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (this.type(target) === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (this.type(target) !== "object" && !this.isFunction(target)) {
            target = {}
        }
        if (length === i) {
            target = this;
            --i;
        }
        for (i; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && this.isArray(src) ? src : [];
                        } else {
                            clone = src && this.isPlainObject(src) ? src : {};
                        }
                        // WARNING: RECURSION
                        target[name] = this.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    },

    guid: function() {
        function s4() { return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); }
        return function(sep) {
            if (sep === true) { sep = '-'; } else { sep = sep || ''; }
            return (s4() + s4() + sep + s4() + sep + s4() + sep + s4() + sep + s4() + s4() + s4());
        };
    }(),

    unique: function(len) {
        return this.guid().substr(0, len);
    },

    padLeft: function(str, len, chr, reverse) {
        if (str !== null && str !== undefined) {
            str = str + ''; var num = len - str.length;
            if (num > 0) {
                for (var i = 0; i < num; i++) {
                    if (reverse === true) {
                        str = str + chr;
                    } else {
                        str = chr + str;
                    }
                }
            }
        }
        return str;
    },

    padRight: function(str, len, chr) {
        return this.padLeft(str, len, chr, true);
    },

    format: function (format) {
        var args = this.arg2arr(arguments, 1), arg;
        return format.replace(/\{(\d+)\}/g, function (m, i) {
            return (arg = args[i], (arg === null || arg === undefined) ? '' : arg);
        });
    },

    trim: function (str, set) {
        str = str || ''; set = set || {};
        if (set.find) {
            var exp = this.format('^{0}+|{0}+$', set.find);
            return str.replace(new RegExp(exp, 'g'), set.hold || '');
        } else if (set.findEnd) {
            var exp = this.format('{0}+$', set.findEnd);
            return str.replace(new RegExp(exp, 'g'), set.hold || '');
        } else if (set.findStart) {
            var exp = this.format('^{0}+', set.findStart);
            return str.replace(new RegExp(exp, 'g'), set.hold || '');
        } else {
            return str.replace(/^\s+|\s+$/g, set.hold || '');
        }
    },

    readObj: function(obj, namespace) {
        var names = namespace.split(/\.|\[|\]|\(/), ret = obj;
        this.each(names, function (i, key) { if (key && ret) { ret = (isNaN(key) ? (key === ')' ? ret() : ret[key]) : ret[parseInt(key, 10)]); } });
        return ret;
    },

    mapObj: function(obj, namespace, dft) {
        var parts = namespace.split(/\.|\[|\]/), names = [];
        this.each(parts, function (i, key) { if (key) { names.push(key); } });
        var lastName = names[names.length - 1], curr = obj = (obj || {}), prev;
        this.each(names, function (i, key) { prev = curr; curr = (curr[key] ? curr[key] : (curr[key] = isNaN(names[i + 1]) ? {} : [])); });
        if (prev) { prev[lastName] = dft; }
        return obj;
    }
};

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../jsg/utilities.js","/../../jsg")
},{"+7ZJp0":27,"buffer":24}],24:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
},{"+7ZJp0":27,"base64-js":25,"buffer":24,"ieee754":26}],25:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
},{"+7ZJp0":27,"buffer":24}],26:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
},{"+7ZJp0":27,"buffer":24}],27:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("+7ZJp0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")
},{"+7ZJp0":27,"buffer":24}]},{},[11])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvZmUvanMvY29udHJvbGxlcnMvYWxsLmpzIiwiL1VzZXJzL3NodXFpdS9EZXNrdG9wL3RlY2hub2xvZ3kvamQvcnVsZWUvY21zL2ZlL2pzL2NvbnRyb2xsZXJzL2hvbWUtY29udHJvbGxlci5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9jb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIuanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvZmUvanMvZGF0YXNlcnZpY2UvYWxsLmpzIiwiL1VzZXJzL3NodXFpdS9EZXNrdG9wL3RlY2hub2xvZ3kvamQvcnVsZWUvY21zL2ZlL2pzL2RhdGFzZXJ2aWNlL2Jsb2ctc2VydmljZS5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9kaXJlY3RpdmVzL2FsbC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9kaXJlY3RpdmVzL2Zvb3Rlci5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9kaXJlY3RpdmVzL2hlYWRlci5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9kaXJlY3RpdmVzL2ltZ3NyYy5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9kaXJlY3RpdmVzL21lbnUuanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvZmUvanMvZmFrZV9kYjc3MWMzZi5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9maWx0ZXJzL2FsbC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9maWx0ZXJzL2kxOG4uanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvZmUvanMvbGlicy9hbmd1bGFyL2FsbC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9saWJzL2FuZ3VsYXIvYW5ndWxhci1hbmltYXRlLm1pbi5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9saWJzL2FuZ3VsYXIvYW5ndWxhci1yZXNvdXJjZS5taW4uanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvZmUvanMvbGlicy9hbmd1bGFyL2FuZ3VsYXItcm91dGUubWluLmpzIiwiL1VzZXJzL3NodXFpdS9EZXNrdG9wL3RlY2hub2xvZ3kvamQvcnVsZWUvY21zL2ZlL2pzL2xpYnMvYW5ndWxhci9hbmd1bGFyLXRvdWNoLm1pbi5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9saWJzL2FuZ3VsYXIvYW5ndWxhci5taW4uanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvZmUvanMvbGlicy9oYXNTY3JvbGwuanMiLCIvVXNlcnMvc2h1cWl1L0Rlc2t0b3AvdGVjaG5vbG9neS9qZC9ydWxlZS9jbXMvZmUvanMvbGlicy9wYXJzZVVybC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9mZS9qcy9saWJzL3V0aWxpdGllcy5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL2Ntcy9qc2cvdXRpbGl0aWVzLmpzIiwiL1VzZXJzL3NodXFpdS9EZXNrdG9wL3RlY2hub2xvZ3kvamQvcnVsZWUvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL1VzZXJzL3NodXFpdS9EZXNrdG9wL3RlY2hub2xvZ3kvamQvcnVsZWUvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Vc2Vycy9zaHVxaXUvRGVza3RvcC90ZWNobm9sb2d5L2pkL3J1bGVlL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogY29udHJvbGxlcnNcbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxuKi9cblxudmFyIG5hbWUgPSBtb2R1bGUuZXhwb3J0cy5uYW1lID0gJ2Ntcy5jb250cm9sbGVycyc7XG5cbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtdKVxuLmNvbnRyb2xsZXIoJ01haW5DdHJsJywgcmVxdWlyZSgnLi9tYWluLWNvbnRyb2xsZXInKSlcbi5jb250cm9sbGVyKCdIb21lQ3RybCcsIHJlcXVpcmUoJy4vaG9tZS1jb250cm9sbGVyJykpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb250cm9sbGVycy9hbGwuanNcIixcIi9jb250cm9sbGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIGhvbWUtY29udHJvbGxlclxuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFsnJHNjb3BlJywgJ0Jsb2dzJywgZnVuY3Rpb24gKCRzY29wZSwgQmxvZ3MpIHtcbiAgICAkc2NvcGUuYmxvZ3MgPSBCbG9ncy5xdWVyeSgyMCk7XG59XTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29udHJvbGxlcnMvaG9tZS1jb250cm9sbGVyLmpzXCIsXCIvY29udHJvbGxlcnNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBtYWluLWNvbnRyb2xsZXJcbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBbJyRzY29wZScsICckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJGxvY2F0aW9uKSB7XG4gICAgJHNjb3BlLnNsaWRlID0gJyc7XG4gICAgJHJvb3RTY29wZS5iYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuc2xpZGUgPSAnc2xpZGUtcmlnaHQnO1xuICAgICAgICAkd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH07XG4gICAgJHJvb3RTY29wZS5nbyA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgICRzY29wZS5zbGlkZSA9ICdzbGlkZS1sZWZ0JztcbiAgICAgICAgJGxvY2F0aW9uLnVybChwYXRoKTtcbiAgICB9O1xufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbnRyb2xsZXJzL21haW4tY29udHJvbGxlci5qc1wiLFwiL2NvbnRyb2xsZXJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogZGF0YSBzZXJ2aWNlXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcbiovXG5cbnZhciBuYW1lID0gbW9kdWxlLmV4cG9ydHMubmFtZSA9ICdjbXMuZGF0YVNlcnZpY2UnO1xuXG5hbmd1bGFyLm1vZHVsZShuYW1lLCBbXSlcbi5mYWN0b3J5KCdCbG9ncycsIHJlcXVpcmUoJy4vYmxvZy1zZXJ2aWNlJykpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kYXRhc2VydmljZS9hbGwuanNcIixcIi9kYXRhc2VydmljZVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIGJsb2ctc2VydmljZVxuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcXVlcnk6IGZ1bmN0aW9uICh0YWtlKSB7XG4gICAgICAgIFx0cmV0dXJuIFt7XG4gICAgICAgIFx0XHR0aXRsZTondGl0bGUxJyxcbiAgICAgICAgXHRcdGNvbnRlbnQ6J2NvbnRlbnQxJ1xuICAgICAgICBcdH0se1xuICAgICAgICBcdFx0dGl0bGU6J3RpdGxlMicsXG4gICAgICAgIFx0XHRjb250ZW50Oidjb250ZW50MidcbiAgICAgICAgXHR9LHtcbiAgICAgICAgXHRcdHRpdGxlOid0aXRsZTMnLFxuICAgICAgICBcdFx0Y29udGVudDonY29udGVudDMnXG4gICAgICAgIFx0fSx7XG4gICAgICAgIFx0XHR0aXRsZTondGl0bGU0JyxcbiAgICAgICAgXHRcdGNvbnRlbnQ6J2NvbnRlbnQ0J1xuICAgICAgICBcdH0se1xuICAgICAgICBcdFx0dGl0bGU6J3RpdGxlNScsXG4gICAgICAgIFx0XHRjb250ZW50Oidjb250ZW50NSdcbiAgICAgICAgXHR9XTtcbiAgICAgICAgfVxuICAgIH07XG59XTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZGF0YXNlcnZpY2UvYmxvZy1zZXJ2aWNlLmpzXCIsXCIvZGF0YXNlcnZpY2VcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBkaXJlY3RpdmVzXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcbiovXG5cbnZhciBuYW1lID0gbW9kdWxlLmV4cG9ydHMubmFtZSA9ICdjbXMuZGlyZWN0aXZlcyc7XG5cbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtdKVxuLmRpcmVjdGl2ZSgnY21zSGVhZGVyJywgcmVxdWlyZSgnLi9oZWFkZXInKSlcbi5kaXJlY3RpdmUoJ2Ntc0Zvb3RlcicsIHJlcXVpcmUoJy4vZm9vdGVyJykpXG4uZGlyZWN0aXZlKCdjbXNNZW51JywgcmVxdWlyZSgnLi9tZW51JykpXG4uZGlyZWN0aXZlKCdpbWdTcmMnLCByZXF1aXJlKCcuL2ltZ3NyYycpKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZGlyZWN0aXZlcy9hbGwuanNcIixcIi9kaXJlY3RpdmVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogZm9vdGVyXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcbiovXG5cbm1vZHVsZS5leHBvcnRzID0gWyd1dGlscycsIGZ1bmN0aW9uKHV0aWxzKSB7XG5cdHJldHVybiB7XG5cdFx0dGVtcGxhdGVVcmw6IHV0aWxzLnZpZXdVcmwoJ3ZpZXdzL2RpcmVjdGl2ZXMvZm9vdGVyLmh0bWwnKSxcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWVcblx0fTtcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kaXJlY3RpdmVzL2Zvb3Rlci5qc1wiLFwiL2RpcmVjdGl2ZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBoZWFkZXJcbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBbJ3V0aWxzJywgZnVuY3Rpb24odXRpbHMpIHtcblx0cmV0dXJuIHtcblx0XHR0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvZGlyZWN0aXZlcy9oZWFkZXIuaHRtbCcpLFxuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0Y3VycmVudDogJ0BjdXJyZW50J1xuXHRcdH1cblx0fTtcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kaXJlY3RpdmVzL2hlYWRlci5qc1wiLFwiL2RpcmVjdGl2ZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBzcmNcbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjYuMTlcbiovXG5cbm1vZHVsZS5leHBvcnRzID0gWyd1dGlscycsIGZ1bmN0aW9uKHV0aWxzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIFx0aWYgKGVsZW1lbnQucHJvcCgndGFnTmFtZScpID09PSAnSU1HJykge1xuICAgICAgICBcdFx0dmFyIGltZyA9IHV0aWxzLnRyaW0oYXR0cnMuaW1nU3JjLCB7IGZpbmQ6ICcvJ30pO1xuICAgICAgICBcdFx0ZWxlbWVudC5hdHRyKCdzcmMnLCB1dGlscy5mb3JtYXQoJ2ltZy97MH0nLCBpbWcpKTtcbiAgICAgICAgXHR9XG4gICAgICAgIH1cbiAgICB9O1xufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RpcmVjdGl2ZXMvaW1nc3JjLmpzXCIsXCIvZGlyZWN0aXZlc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIG1lbnVcbiogYXV0aG9yOiByb25nbGluXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjYuMThcbiovXG5cbm1vZHVsZS5leHBvcnRzID0gWyd1dGlscycsIGZ1bmN0aW9uKHV0aWxzKSB7XG4gICAgLy8gcmV0XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NvcGU6IHsgY3VycmVudDogJ0AnIH0sXG4gICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAgICAgICAkc2NvcGUuc2hvd1BhZ2UgPSBmdW5jdGlvbihwYWdlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmN1cnJlbnQgPSBwYWdlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfV0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiB1dGlscy52aWV3VXJsKCd2aWV3cy9kaXJlY3RpdmVzL21lbnUuaHRtbCcpLFxuICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICByZXBsYWNlOiB0cnVlXG4gICAgfTtcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kaXJlY3RpdmVzL21lbnUuanNcIixcIi9kaXJlY3RpdmVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogbWFpblxuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNC4yMlxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL2xpYnMvYW5ndWxhci9hbGwnKTtcbnZhciB1dGlsaXRpZXNOYW1lID0gJ2Ntcy51dGlsaXRpZXMnO1xuYW5ndWxhci5tb2R1bGUodXRpbGl0aWVzTmFtZSwgW10pLmNvbnN0YW50KCd1dGlscycsIHJlcXVpcmUoJy4vbGlicy91dGlsaXRpZXMnKSk7XG5cbnZhciBmaWx0ZXJzID0gcmVxdWlyZSgnLi9maWx0ZXJzL2FsbCcpO1xudmFyIGRpcmVjdGl2ZXMgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvYWxsJyk7XG52YXIgZGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuL2RhdGFzZXJ2aWNlL2FsbCcpO1xudmFyIGNvbnRyb2xsZXJzID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9hbGwnKTtcblxudmFyIGNtcyA9IGFuZ3VsYXIubW9kdWxlKCdjbXMnLCBbXG4gICAgJ25nVG91Y2gnLFxuICAgICduZ1JvdXRlJyxcbiAgICAnbmdBbmltYXRlJyxcbiAgICB1dGlsaXRpZXNOYW1lLFxuICAgIGZpbHRlcnMubmFtZSxcbiAgICBkaXJlY3RpdmVzLm5hbWUsXG4gICAgZGF0YVNlcnZpY2UubmFtZSxcbiAgICBjb250cm9sbGVycy5uYW1lXG5dKTtcblxuY21zLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgJ3V0aWxzJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyLCB1dGlscykge1xuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9ob21lJywgeyB0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvaG9tZS5odG1sJyksIGNvbnRyb2xsZXI6ICdIb21lQ3RybCcgfSk7XG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2Fib3V0JywgeyB0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvYWJvdXQuaHRtbCcpIH0pO1xuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9ibG9nJywgeyB0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvYmxvZy5odG1sJykgfSk7XG4gICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogJy9ob21lJyB9KTtcbn1dKTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9mYWtlX2RiNzcxYzNmLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogZmlsdGVyc1xuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNi4xOFxuKi9cblxudmFyIG5hbWUgPSBtb2R1bGUuZXhwb3J0cy5uYW1lID0gJ2Ntcy5maWx0ZXJzJztcblxuYW5ndWxhci5tb2R1bGUobmFtZSwgW10pXG4uZmlsdGVyKCdpMThuJywgcmVxdWlyZSgnLi9pMThuJykpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9maWx0ZXJzL2FsbC5qc1wiLFwiL2ZpbHRlcnNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBpMThuXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC42LjE4XG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFsndXRpbHMnLCBmdW5jdGlvbih1dGlscykge1xuXHRyZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG5cdFx0cmV0dXJuIHV0aWxzLmkxOG4oa2V5LCBrZXkpO1xuXHR9O1xufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2ZpbHRlcnMvaTE4bi5qc1wiLFwiL2ZpbHRlcnNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuKiBhbGwgYW5ndWxhclxuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XG4qL1xuXG5yZXF1aXJlKCcuL2FuZ3VsYXIubWluJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXItdG91Y2gubWluJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXItcmVzb3VyY2UubWluJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXItYW5pbWF0ZS5taW4nKTtcbnJlcXVpcmUoJy4vYW5ndWxhci1yb3V0ZS5taW4nKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicy9hbmd1bGFyL2FsbC5qc1wiLFwiL2xpYnMvYW5ndWxhclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4gQW5ndWxhckpTIHYxLjIuMTJcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xuIExpY2Vuc2U6IE1JVFxuKi9cbihmdW5jdGlvbih2LGssdCl7J3VzZSBzdHJpY3QnO2subW9kdWxlKFwibmdBbmltYXRlXCIsW1wibmdcIl0pLmZhY3RvcnkoXCIkJGFuaW1hdGVSZWZsb3dcIixbXCIkd2luZG93XCIsXCIkdGltZW91dFwiLGZ1bmN0aW9uKGssQil7dmFyIGQ9ay5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGsud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihkKXtyZXR1cm4gQihkLDEwLCExKX0scT1rLmNhbmNlbEFuaW1hdGlvbkZyYW1lfHxrLndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihkKXtyZXR1cm4gQi5jYW5jZWwoZCl9O3JldHVybiBmdW5jdGlvbihwKXt2YXIgaz1kKHApO3JldHVybiBmdW5jdGlvbigpe3Eoayl9fX1dKS5jb25maWcoW1wiJHByb3ZpZGVcIixcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihSLEIpe2Z1bmN0aW9uIGQoZCl7Zm9yKHZhciBrPTA7azxkLmxlbmd0aDtrKyspe3ZhciBwPWRba107aWYocC5ub2RlVHlwZT09WClyZXR1cm4gcH19dmFyIHE9ay5ub29wLFxucD1rLmZvckVhY2gsJD1CLiQkc2VsZWN0b3JzLFg9MSxsPVwiJCRuZ0FuaW1hdGVTdGF0ZVwiLEs9XCJuZy1hbmltYXRlXCIsbT17cnVubmluZzohMH07Ui5kZWNvcmF0b3IoXCIkYW5pbWF0ZVwiLFtcIiRkZWxlZ2F0ZVwiLFwiJGluamVjdG9yXCIsXCIkc25pZmZlclwiLFwiJHJvb3RFbGVtZW50XCIsXCIkdGltZW91dFwiLFwiJHJvb3RTY29wZVwiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oQyx2LHQsSCx5LHcsTil7ZnVuY3Rpb24gSShhKXtpZihhKXt2YXIgZz1bXSxlPXt9O2E9YS5zdWJzdHIoMSkuc3BsaXQoXCIuXCIpOyh0LnRyYW5zaXRpb25zfHx0LmFuaW1hdGlvbnMpJiZhLnB1c2goXCJcIik7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBmPWFbY10sZD0kW2ZdO2QmJiFlW2ZdJiYoZy5wdXNoKHYuZ2V0KGQpKSxlW2ZdPSEwKX1yZXR1cm4gZ319ZnVuY3Rpb24gcihhLGcsZSxjLGYsayxtKXtmdW5jdGlvbiB0KGEpe24oKTtpZighMD09PWEpeigpO2Vsc2V7aWYoYT1lLmRhdGEobCkpYS5kb25lPXosZS5kYXRhKGwsXG5hKTtDKEQsXCJhZnRlclwiLHopfX1mdW5jdGlvbiBDKGMsZCxmKXtcImFmdGVyXCI9PWQ/cigpOkUoKTt2YXIgaz1kK1wiRW5kXCI7cChjLGZ1bmN0aW9uKGIsYWEpe3ZhciBoPWZ1bmN0aW9uKCl7YTp7dmFyIGI9ZCtcIkNvbXBsZXRlXCIsYT1jW2FhXTthW2JdPSEwOyhhW2tdfHxxKSgpO2ZvcihhPTA7YTxjLmxlbmd0aDthKyspaWYoIWNbYV1bYl0pYnJlYWsgYTtmKCl9fTtcImJlZm9yZVwiIT1kfHxcImVudGVyXCIhPWEmJlwibW92ZVwiIT1hP2JbZF0/YltrXT11P2JbZF0oZSxnLGgpOmJbZF0oZSxoKTpoKCk6aCgpfSl9ZnVuY3Rpb24gdyhjKXtlLnRyaWdnZXJIYW5kbGVyKFwiJGFuaW1hdGU6XCIrYyx7ZXZlbnQ6YSxjbGFzc05hbWU6Z30pfWZ1bmN0aW9uIEUoKXt5KGZ1bmN0aW9uKCl7dyhcImJlZm9yZVwiKX0sMCwhMSl9ZnVuY3Rpb24gcigpe3koZnVuY3Rpb24oKXt3KFwiYWZ0ZXJcIil9LDAsITEpfWZ1bmN0aW9uIHYoKXt5KGZ1bmN0aW9uKCl7dyhcImNsb3NlXCIpO20mJm0oKX0sMCwhMSl9ZnVuY3Rpb24gbigpe24uaGFzQmVlblJ1bnx8XG4obi5oYXNCZWVuUnVuPSEwLGsoKSl9ZnVuY3Rpb24geigpe2lmKCF6Lmhhc0JlZW5SdW4pe3ouaGFzQmVlblJ1bj0hMDt2YXIgYT1lLmRhdGEobCk7YSYmKHU/QShlKTooYS5jbG9zZUFuaW1hdGlvblRpbWVvdXQ9eShmdW5jdGlvbigpe0EoZSl9LDAsITEpLGUuZGF0YShsLGEpKSk7digpfX12YXIgcyx4LEc9ZChlKTtHJiYocz1HLmNsYXNzTmFtZSx4PXMrXCIgXCIrZyk7aWYoRyYmTCh4KSl7eD0oXCIgXCIreCkucmVwbGFjZSgvXFxzKy9nLFwiLlwiKTtjfHwoYz1mP2YucGFyZW50KCk6ZS5wYXJlbnQoKSk7eD1JKHgpO3ZhciB1PVwiYWRkQ2xhc3NcIj09YXx8XCJyZW1vdmVDbGFzc1wiPT1hO2Y9ZS5kYXRhKGwpfHx7fTtpZihiYShlLGMpfHwwPT09eC5sZW5ndGgpbigpLEUoKSxyKCkseigpO2Vsc2V7dmFyIEQ9W107dSYmKGYuZGlzYWJsZWR8fGYucnVubmluZyYmZi5zdHJ1Y3R1cmFsKXx8cCh4LGZ1bmN0aW9uKGMpe2lmKCFjLmFsbG93Q2FuY2VsfHxjLmFsbG93Q2FuY2VsKGUsYSxnKSl7dmFyIGQ9XG5jW2FdO1wibGVhdmVcIj09YT8oYz1kLGQ9bnVsbCk6Yz1jW1wiYmVmb3JlXCIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cigxKV07RC5wdXNoKHtiZWZvcmU6YyxhZnRlcjpkfSl9fSk7MD09PUQubGVuZ3RoPyhuKCksRSgpLHIoKSx2KCkpOihjPVwiIFwiK3MrXCIgXCIsZi5ydW5uaW5nJiYoeS5jYW5jZWwoZi5jbG9zZUFuaW1hdGlvblRpbWVvdXQpLEEoZSksSihmLmFuaW1hdGlvbnMpLHg9KHM9dSYmIWYuc3RydWN0dXJhbCkmJmYuY2xhc3NOYW1lPT1nJiZhIT1mLmV2ZW50LGYuYmVmb3JlQ29tcGxldGV8fHg/KGYuZG9uZXx8cSkoITApOnMmJihjPVwicmVtb3ZlQ2xhc3NcIj09Zi5ldmVudD9jLnJlcGxhY2UoXCIgXCIrZi5jbGFzc05hbWUrXCIgXCIsXCIgXCIpOmMrZi5jbGFzc05hbWUrXCIgXCIpKSxzPVwiIFwiK2crXCIgXCIsXCJhZGRDbGFzc1wiPT1hJiYwPD1jLmluZGV4T2Yocyl8fFwicmVtb3ZlQ2xhc3NcIj09YSYmLTE9PWMuaW5kZXhPZihzKT8obigpLEUoKSxyKCksdigpKTooZS5hZGRDbGFzcyhLKSxcbmUuZGF0YShsLHtydW5uaW5nOiEwLGV2ZW50OmEsY2xhc3NOYW1lOmcsc3RydWN0dXJhbDohdSxhbmltYXRpb25zOkQsZG9uZTp0fSksQyhELFwiYmVmb3JlXCIsdCkpKX19ZWxzZSBuKCksRSgpLHIoKSx6KCl9ZnVuY3Rpb24gUShhKXthPWQoYSk7cChhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrSyksZnVuY3Rpb24oYSl7YT1rLmVsZW1lbnQoYSk7dmFyIGU9YS5kYXRhKGwpO2UmJihKKGUuYW5pbWF0aW9ucyksQShhKSl9KX1mdW5jdGlvbiBKKGEpe3AoYSxmdW5jdGlvbihhKXthLmJlZm9yZUNvbXBsZXRlfHwoYS5iZWZvcmVFbmR8fHEpKCEwKTthLmFmdGVyQ29tcGxldGV8fChhLmFmdGVyRW5kfHxxKSghMCl9KX1mdW5jdGlvbiBBKGEpe2QoYSk9PWQoSCk/bS5kaXNhYmxlZHx8KG0ucnVubmluZz0hMSxtLnN0cnVjdHVyYWw9ITEpOihhLnJlbW92ZUNsYXNzKEspLGEucmVtb3ZlRGF0YShsKSl9ZnVuY3Rpb24gYmEoYSxnKXtpZihtLmRpc2FibGVkKXJldHVybiEwO2lmKGQoYSk9PWQoSCkpcmV0dXJuIG0uZGlzYWJsZWR8fFxubS5ydW5uaW5nO2Rve2lmKDA9PT1nLmxlbmd0aClicmVhazt2YXIgZT1kKGcpPT1kKEgpLGM9ZT9tOmcuZGF0YShsKSxjPWMmJighIWMuZGlzYWJsZWR8fCEhYy5ydW5uaW5nKTtpZihlfHxjKXJldHVybiBjO2lmKGUpYnJlYWt9d2hpbGUoZz1nLnBhcmVudCgpKTtyZXR1cm4hMH1ILmRhdGEobCxtKTt3LiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7bS5ydW5uaW5nPSExfSl9KTt2YXIgTT1CLmNsYXNzTmFtZUZpbHRlcigpLEw9TT9mdW5jdGlvbihhKXtyZXR1cm4gTS50ZXN0KGEpfTpmdW5jdGlvbigpe3JldHVybiEwfTtyZXR1cm57ZW50ZXI6ZnVuY3Rpb24oYSxkLGUsYyl7dGhpcy5lbmFibGVkKCExLGEpO0MuZW50ZXIoYSxkLGUpO3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7cihcImVudGVyXCIsXCJuZy1lbnRlclwiLGEsZCxlLHEsYyl9KX0sbGVhdmU6ZnVuY3Rpb24oYSxkKXtRKGEpO3RoaXMuZW5hYmxlZCghMSxhKTt3LiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3IoXCJsZWF2ZVwiLFxuXCJuZy1sZWF2ZVwiLGEsbnVsbCxudWxsLGZ1bmN0aW9uKCl7Qy5sZWF2ZShhKX0sZCl9KX0sbW92ZTpmdW5jdGlvbihhLGQsZSxjKXtRKGEpO3RoaXMuZW5hYmxlZCghMSxhKTtDLm1vdmUoYSxkLGUpO3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7cihcIm1vdmVcIixcIm5nLW1vdmVcIixhLGQsZSxxLGMpfSl9LGFkZENsYXNzOmZ1bmN0aW9uKGEsZCxlKXtyKFwiYWRkQ2xhc3NcIixkLGEsbnVsbCxudWxsLGZ1bmN0aW9uKCl7Qy5hZGRDbGFzcyhhLGQpfSxlKX0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSxkLGUpe3IoXCJyZW1vdmVDbGFzc1wiLGQsYSxudWxsLG51bGwsZnVuY3Rpb24oKXtDLnJlbW92ZUNsYXNzKGEsZCl9LGUpfSxlbmFibGVkOmZ1bmN0aW9uKGEsZCl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMjppZihhKUEoZCk7ZWxzZXt2YXIgZT1kLmRhdGEobCl8fHt9O2UuZGlzYWJsZWQ9ITA7ZC5kYXRhKGwsZSl9YnJlYWs7Y2FzZSAxOm0uZGlzYWJsZWQ9IWE7YnJlYWs7ZGVmYXVsdDphPVxuIW0uZGlzYWJsZWR9cmV0dXJuISFhfX19XSk7Qi5yZWdpc3RlcihcIlwiLFtcIiR3aW5kb3dcIixcIiRzbmlmZmVyXCIsXCIkdGltZW91dFwiLFwiJCRhbmltYXRlUmVmbG93XCIsZnVuY3Rpb24obSxsLEIsSCl7ZnVuY3Rpb24geShiLGEpe08mJk8oKTtVLnB1c2goYSk7dmFyIGg9ZChiKTtiPWsuZWxlbWVudChoKTtWLnB1c2goYik7dmFyIGg9Yi5kYXRhKG4pLGM9aC5zdGFnZ2VyLGM9aC5pdGVtSW5kZXgqKE1hdGgubWF4KGMuYW5pbWF0aW9uRGVsYXksYy50cmFuc2l0aW9uRGVsYXkpfHwwKTtQPU1hdGgubWF4KFAsKGMrKGgubWF4RGVsYXkraC5tYXhEdXJhdGlvbikqcykqeCk7aC5hbmltYXRpb25Db3VudD1HO089SChmdW5jdGlvbigpe3AoVSxmdW5jdGlvbihiKXtiKCl9KTt2YXIgYj1bXSxhPUc7cChWLGZ1bmN0aW9uKGEpe2IucHVzaChhKX0pO0IoZnVuY3Rpb24oKXt3KGIsYSk7Yj1udWxsfSxQLCExKTtVPVtdO1Y9W107Tz1udWxsO3U9e307UD0wO0crK30pfWZ1bmN0aW9uIHcoYixhKXtwKGIsXG5mdW5jdGlvbihiKXsoYj1iLmRhdGEobikpJiZiLmFuaW1hdGlvbkNvdW50PT1hJiYoYi5jbG9zZUFuaW1hdGlvbkZufHxxKSgpfSl9ZnVuY3Rpb24gTihiLGEpe3ZhciBoPWE/dVthXTpudWxsO2lmKCFoKXt2YXIgZD0wLGM9MCxlPTAsaz0wLGcsbixsLHI7cChiLGZ1bmN0aW9uKGIpe2lmKGIubm9kZVR5cGU9PVgpe2I9bS5nZXRDb21wdXRlZFN0eWxlKGIpfHx7fTtsPWJbZitZXTtkPU1hdGgubWF4KEkobCksZCk7cj1iW2YrV107Zz1iW2YrRV07Yz1NYXRoLm1heChJKGcpLGMpO249YltGK0VdO2s9TWF0aC5tYXgoSShuKSxrKTt2YXIgYT1JKGJbRitZXSk7MDxhJiYoYSo9cGFyc2VJbnQoYltGK1JdLDEwKXx8MSk7ZT1NYXRoLm1heChhLGUpfX0pO2g9e3RvdGFsOjAsdHJhbnNpdGlvblByb3BlcnR5U3R5bGU6cix0cmFuc2l0aW9uRHVyYXRpb25TdHlsZTpsLHRyYW5zaXRpb25EZWxheVN0eWxlOmcsdHJhbnNpdGlvbkRlbGF5OmMsdHJhbnNpdGlvbkR1cmF0aW9uOmQsYW5pbWF0aW9uRGVsYXlTdHlsZTpuLFxuYW5pbWF0aW9uRGVsYXk6ayxhbmltYXRpb25EdXJhdGlvbjplfTthJiYodVthXT1oKX1yZXR1cm4gaH1mdW5jdGlvbiBJKGIpe3ZhciBhPTA7Yj1rLmlzU3RyaW5nKGIpP2Iuc3BsaXQoL1xccyosXFxzKi8pOltdO3AoYixmdW5jdGlvbihiKXthPU1hdGgubWF4KHBhcnNlRmxvYXQoYil8fDAsYSl9KTtyZXR1cm4gYX1mdW5jdGlvbiByKGIpe3ZhciBhPWIucGFyZW50KCksaD1hLmRhdGEoWik7aHx8KGEuZGF0YShaLCsrRCksaD1EKTtyZXR1cm4gaCtcIi1cIitkKGIpLmNsYXNzTmFtZX1mdW5jdGlvbiBRKGIsYSxoKXt2YXIgYz1yKGIpLGU9YytcIiBcIithLGs9e30sZz11W2VdPysrdVtlXS50b3RhbDowO2lmKDA8Zyl7dmFyIGw9YStcIi1zdGFnZ2VyXCIsaz1jK1wiIFwiK2w7KGM9IXVba10pJiZiLmFkZENsYXNzKGwpO2s9TihiLGspO2MmJmIucmVtb3ZlQ2xhc3MobCl9aD1ofHxmdW5jdGlvbihiKXtyZXR1cm4gYigpfTtiLmFkZENsYXNzKGEpO2g9aChmdW5jdGlvbigpe3JldHVybiBOKGIsZSl9KTtcbmw9TWF0aC5tYXgoaC50cmFuc2l0aW9uRGVsYXksaC5hbmltYXRpb25EZWxheSk7Yz1NYXRoLm1heChoLnRyYW5zaXRpb25EdXJhdGlvbixoLmFuaW1hdGlvbkR1cmF0aW9uKTtpZigwPT09YylyZXR1cm4gYi5yZW1vdmVDbGFzcyhhKSwhMTt2YXIgbT1cIlwiOzA8aC50cmFuc2l0aW9uRHVyYXRpb24/ZChiKS5zdHlsZVtmK1ddPVwibm9uZVwiOmQoYikuc3R5bGVbRl09XCJub25lIDBzXCI7cChhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiLGEpe20rPSgwPGE/XCIgXCI6XCJcIikrYitcIi1hY3RpdmVcIn0pO2IuZGF0YShuLHtjbGFzc05hbWU6YSxhY3RpdmVDbGFzc05hbWU6bSxtYXhEdXJhdGlvbjpjLG1heERlbGF5OmwsY2xhc3NlczphK1wiIFwiK20sdGltaW5nczpoLHN0YWdnZXI6ayxpdGVtSW5kZXg6Z30pO3JldHVybiEwfWZ1bmN0aW9uIEooYil7dmFyIGE9ZitXO2I9ZChiKTtiLnN0eWxlW2FdJiYwPGIuc3R5bGVbYV0ubGVuZ3RoJiYoYi5zdHlsZVthXT1cIlwiKX1mdW5jdGlvbiBBKGIpe3ZhciBhPUY7Yj1cbmQoYik7Yi5zdHlsZVthXSYmMDxiLnN0eWxlW2FdLmxlbmd0aCYmKGIuc3R5bGVbYV09XCJcIil9ZnVuY3Rpb24gSyhiLGEsaCl7ZnVuY3Rpb24gZShjKXtiLm9mZih2LGspO2IucmVtb3ZlQ2xhc3Mocik7Yz1iO2MucmVtb3ZlQ2xhc3MoYSk7Yy5yZW1vdmVEYXRhKG4pO2M9ZChiKTtmb3IodmFyIGggaW4gcyljLnN0eWxlLnJlbW92ZVByb3BlcnR5KHNbaF0pfWZ1bmN0aW9uIGsoYil7Yi5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYT1iLm9yaWdpbmFsRXZlbnR8fGI7Yj1hLiRtYW51YWxUaW1lU3RhbXB8fGEudGltZVN0YW1wfHxEYXRlLm5vdygpO2E9cGFyc2VGbG9hdChhLmVsYXBzZWRUaW1lLnRvRml4ZWQoeikpO01hdGgubWF4KGItdywwKT49dSYmYT49cCYmaCgpfXZhciBmPWIuZGF0YShuKSxnPWQoYik7aWYoLTEhPWcuY2xhc3NOYW1lLmluZGV4T2YoYSkmJmYpe3ZhciBsPWYudGltaW5ncyxtPWYuc3RhZ2dlcixwPWYubWF4RHVyYXRpb24scj1mLmFjdGl2ZUNsYXNzTmFtZSx1PU1hdGgubWF4KGwudHJhbnNpdGlvbkRlbGF5LFxubC5hbmltYXRpb25EZWxheSkqeCx3PURhdGUubm93KCksdj1UK1wiIFwiK1MsdD1mLml0ZW1JbmRleCxxPVwiXCIscz1bXTtpZigwPGwudHJhbnNpdGlvbkR1cmF0aW9uKXt2YXIgeT1sLnRyYW5zaXRpb25Qcm9wZXJ0eVN0eWxlOy0xPT15LmluZGV4T2YoXCJhbGxcIikmJihxKz1jK1widHJhbnNpdGlvbi1wcm9wZXJ0eTogXCIreStcIjtcIixxKz1jK1widHJhbnNpdGlvbi1kdXJhdGlvbjogXCIrbC50cmFuc2l0aW9uRHVyYXRpb25TdHlsZStcIjtcIixzLnB1c2goYytcInRyYW5zaXRpb24tcHJvcGVydHlcIikscy5wdXNoKGMrXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpKX0wPHQmJigwPG0udHJhbnNpdGlvbkRlbGF5JiYwPT09bS50cmFuc2l0aW9uRHVyYXRpb24mJihxKz1jK1widHJhbnNpdGlvbi1kZWxheTogXCIrTShsLnRyYW5zaXRpb25EZWxheVN0eWxlLG0udHJhbnNpdGlvbkRlbGF5LHQpK1wiOyBcIixzLnB1c2goYytcInRyYW5zaXRpb24tZGVsYXlcIikpLDA8bS5hbmltYXRpb25EZWxheSYmMD09PW0uYW5pbWF0aW9uRHVyYXRpb24mJlxuKHErPWMrXCJhbmltYXRpb24tZGVsYXk6IFwiK00obC5hbmltYXRpb25EZWxheVN0eWxlLG0uYW5pbWF0aW9uRGVsYXksdCkrXCI7IFwiLHMucHVzaChjK1wiYW5pbWF0aW9uLWRlbGF5XCIpKSk7MDxzLmxlbmd0aCYmKGw9Zy5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKXx8XCJcIixnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsbCtcIiBcIitxKSk7Yi5vbih2LGspO2IuYWRkQ2xhc3Mocik7Zi5jbG9zZUFuaW1hdGlvbkZuPWZ1bmN0aW9uKCl7ZSgpO2goKX07cmV0dXJuIGV9aCgpfWZ1bmN0aW9uIE0oYixhLGMpe3ZhciBkPVwiXCI7cChiLnNwbGl0KFwiLFwiKSxmdW5jdGlvbihiLGUpe2QrPSgwPGU/XCIsXCI6XCJcIikrKGMqYStwYXJzZUludChiLDEwKSkrXCJzXCJ9KTtyZXR1cm4gZH1mdW5jdGlvbiBMKGIsYSxjKXtpZihRKGIsYSxjKSlyZXR1cm4gZnVuY3Rpb24oYyl7YyYmKGIucmVtb3ZlQ2xhc3MoYSksYi5yZW1vdmVEYXRhKG4pKX19ZnVuY3Rpb24gYShhLGMsZCl7aWYoYS5kYXRhKG4pKXJldHVybiBLKGEsYyxkKTthLnJlbW92ZUNsYXNzKGMpO1xuYS5yZW1vdmVEYXRhKG4pO2QoKX1mdW5jdGlvbiBnKGIsYyxkKXt2YXIgZT1MKGIsYyk7aWYoZSl7dmFyIGY9ZTt5KGIsZnVuY3Rpb24oKXtKKGIpO0EoYik7Zj1hKGIsYyxkKX0pO3JldHVybiBmdW5jdGlvbihhKXsoZnx8cSkoYSl9fWQoKX1mdW5jdGlvbiBlKGEsYyl7dmFyIGQ9XCJcIjthPWsuaXNBcnJheShhKT9hOmEuc3BsaXQoL1xccysvKTtwKGEsZnVuY3Rpb24oYSxiKXthJiYwPGEubGVuZ3RoJiYoZCs9KDA8Yj9cIiBcIjpcIlwiKSthK2MpfSk7cmV0dXJuIGR9dmFyIGM9XCJcIixmLFMsRixUO3Yub250cmFuc2l0aW9uZW5kPT09dCYmdi5vbndlYmtpdHRyYW5zaXRpb25lbmQhPT10PyhjPVwiLXdlYmtpdC1cIixmPVwiV2Via2l0VHJhbnNpdGlvblwiLFM9XCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIik6KGY9XCJ0cmFuc2l0aW9uXCIsUz1cInRyYW5zaXRpb25lbmRcIik7di5vbmFuaW1hdGlvbmVuZD09PXQmJnYub253ZWJraXRhbmltYXRpb25lbmQhPT10PyhjPVwiLXdlYmtpdC1cIixGPVxuXCJXZWJraXRBbmltYXRpb25cIixUPVwid2Via2l0QW5pbWF0aW9uRW5kIGFuaW1hdGlvbmVuZFwiKTooRj1cImFuaW1hdGlvblwiLFQ9XCJhbmltYXRpb25lbmRcIik7dmFyIFk9XCJEdXJhdGlvblwiLFc9XCJQcm9wZXJ0eVwiLEU9XCJEZWxheVwiLFI9XCJJdGVyYXRpb25Db3VudFwiLFo9XCIkJG5nQW5pbWF0ZUtleVwiLG49XCIkJG5nQW5pbWF0ZUNTUzNEYXRhXCIsej0zLHM9MS41LHg9MUUzLEc9MCx1PXt9LEQ9MCxVPVtdLFY9W10sTyxQPTA7cmV0dXJue2FsbG93Q2FuY2VsOmZ1bmN0aW9uKGEsYyxoKXt2YXIgZj0oYS5kYXRhKG4pfHx7fSkuY2xhc3NlcztpZighZnx8MDw9W1wiZW50ZXJcIixcImxlYXZlXCIsXCJtb3ZlXCJdLmluZGV4T2YoYykpcmV0dXJuITA7dmFyIGw9YS5wYXJlbnQoKSxnPWsuZWxlbWVudChkKGEpLmNsb25lTm9kZSgpKTtnLmF0dHIoXCJzdHlsZVwiLFwicG9zaXRpb246YWJzb2x1dGU7IHRvcDotOTk5OXB4OyBsZWZ0Oi05OTk5cHhcIik7Zy5yZW1vdmVBdHRyKFwiaWRcIik7Zy5lbXB0eSgpO3AoZi5zcGxpdChcIiBcIiksXG5mdW5jdGlvbihhKXtnLnJlbW92ZUNsYXNzKGEpfSk7Zy5hZGRDbGFzcyhlKGgsXCJhZGRDbGFzc1wiPT1jP1wiLWFkZFwiOlwiLXJlbW92ZVwiKSk7bC5hcHBlbmQoZyk7YT1OKGcpO2cucmVtb3ZlKCk7cmV0dXJuIDA8TWF0aC5tYXgoYS50cmFuc2l0aW9uRHVyYXRpb24sYS5hbmltYXRpb25EdXJhdGlvbil9LGVudGVyOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGcoYSxcIm5nLWVudGVyXCIsYyl9LGxlYXZlOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGcoYSxcIm5nLWxlYXZlXCIsYyl9LG1vdmU6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZyhhLFwibmctbW92ZVwiLGMpfSxiZWZvcmVBZGRDbGFzczpmdW5jdGlvbihhLGMsZCl7dmFyIGY9TChhLGUoYyxcIi1hZGRcIiksZnVuY3Rpb24oZCl7YS5hZGRDbGFzcyhjKTtkPWQoKTthLnJlbW92ZUNsYXNzKGMpO3JldHVybiBkfSk7aWYoZilyZXR1cm4geShhLGZ1bmN0aW9uKCl7SihhKTtBKGEpO2QoKX0pLGY7ZCgpfSxhZGRDbGFzczpmdW5jdGlvbihiLGMsZCl7cmV0dXJuIGEoYixcbmUoYyxcIi1hZGRcIiksZCl9LGJlZm9yZVJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEsYyxkKXt2YXIgZj1MKGEsZShjLFwiLXJlbW92ZVwiKSxmdW5jdGlvbihkKXt2YXIgZT1hLmF0dHIoXCJjbGFzc1wiKTthLnJlbW92ZUNsYXNzKGMpO2Q9ZCgpO2EuYXR0cihcImNsYXNzXCIsZSk7cmV0dXJuIGR9KTtpZihmKXJldHVybiB5KGEsZnVuY3Rpb24oKXtKKGEpO0EoYSk7ZCgpfSksZjtkKCl9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gYShiLGUoYyxcIi1yZW1vdmVcIiksZCl9fX1dKX1dKX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLWFuaW1hdGUubWluLmpzLm1hcFxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnMvYW5ndWxhci9hbmd1bGFyLWFuaW1hdGUubWluLmpzXCIsXCIvbGlicy9hbmd1bGFyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiBBbmd1bGFySlMgdjEuMi4xMlxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gTGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKEgsYSxBKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gRChwLGcpe2c9Z3x8e307YS5mb3JFYWNoKGcsZnVuY3Rpb24oYSxjKXtkZWxldGUgZ1tjXX0pO2Zvcih2YXIgYyBpbiBwKSFwLmhhc093blByb3BlcnR5KGMpfHxcIiRcIj09PWMuY2hhckF0KDApJiZcIiRcIj09PWMuY2hhckF0KDEpfHwoZ1tjXT1wW2NdKTtyZXR1cm4gZ312YXIgdj1hLiQkbWluRXJyKFwiJHJlc291cmNlXCIpLEM9L14oXFwuW2EtekEtWl8kXVswLTlhLXpBLVpfJF0qKSskLzthLm1vZHVsZShcIm5nUmVzb3VyY2VcIixbXCJuZ1wiXSkuZmFjdG9yeShcIiRyZXNvdXJjZVwiLFtcIiRodHRwXCIsXCIkcVwiLGZ1bmN0aW9uKHAsZyl7ZnVuY3Rpb24gYyhhLGMpe3RoaXMudGVtcGxhdGU9YTt0aGlzLmRlZmF1bHRzPWN8fHt9O3RoaXMudXJsUGFyYW1zPXt9fWZ1bmN0aW9uIHQobix3LGwpe2Z1bmN0aW9uIHIoaCxkKXt2YXIgZT17fTtkPXgoe30sdyxkKTtzKGQsZnVuY3Rpb24oYixkKXt1KGIpJiYoYj1iKCkpO3ZhciBrO2lmKGImJlxuYi5jaGFyQXQmJlwiQFwiPT1iLmNoYXJBdCgwKSl7az1oO3ZhciBhPWIuc3Vic3RyKDEpO2lmKG51bGw9PWF8fFwiXCI9PT1hfHxcImhhc093blByb3BlcnR5XCI9PT1hfHwhQy50ZXN0KFwiLlwiK2EpKXRocm93IHYoXCJiYWRtZW1iZXJcIixhKTtmb3IodmFyIGE9YS5zcGxpdChcIi5cIiksZj0wLGM9YS5sZW5ndGg7ZjxjJiZrIT09QTtmKyspe3ZhciBnPWFbZl07az1udWxsIT09az9rW2ddOkF9fWVsc2Ugaz1iO2VbZF09a30pO3JldHVybiBlfWZ1bmN0aW9uIGUoYSl7cmV0dXJuIGEucmVzb3VyY2V9ZnVuY3Rpb24gZihhKXtEKGF8fHt9LHRoaXMpfXZhciBGPW5ldyBjKG4pO2w9eCh7fSxCLGwpO3MobCxmdW5jdGlvbihoLGQpe3ZhciBjPS9eKFBPU1R8UFVUfFBBVENIKSQvaS50ZXN0KGgubWV0aG9kKTtmW2RdPWZ1bmN0aW9uKGIsZCxrLHcpe3ZhciBxPXt9LG4sbCx5O3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDQ6eT13LGw9aztjYXNlIDM6Y2FzZSAyOmlmKHUoZCkpe2lmKHUoYikpe2w9XG5iO3k9ZDticmVha31sPWQ7eT1rfWVsc2V7cT1iO249ZDtsPWs7YnJlYWt9Y2FzZSAxOnUoYik/bD1iOmM/bj1iOnE9YjticmVhaztjYXNlIDA6YnJlYWs7ZGVmYXVsdDp0aHJvdyB2KFwiYmFkYXJnc1wiLGFyZ3VtZW50cy5sZW5ndGgpO312YXIgdD10aGlzIGluc3RhbmNlb2YgZixtPXQ/bjpoLmlzQXJyYXk/W106bmV3IGYobiksej17fSxCPWguaW50ZXJjZXB0b3ImJmguaW50ZXJjZXB0b3IucmVzcG9uc2V8fGUsQz1oLmludGVyY2VwdG9yJiZoLmludGVyY2VwdG9yLnJlc3BvbnNlRXJyb3J8fEE7cyhoLGZ1bmN0aW9uKGEsYil7XCJwYXJhbXNcIiE9YiYmKFwiaXNBcnJheVwiIT1iJiZcImludGVyY2VwdG9yXCIhPWIpJiYoeltiXT1HKGEpKX0pO2MmJih6LmRhdGE9bik7Ri5zZXRVcmxQYXJhbXMoeix4KHt9LHIobixoLnBhcmFtc3x8e30pLHEpLGgudXJsKTtxPXAoeikudGhlbihmdW5jdGlvbihiKXt2YXIgZD1iLmRhdGEsaz1tLiRwcm9taXNlO2lmKGQpe2lmKGEuaXNBcnJheShkKSE9PSEhaC5pc0FycmF5KXRocm93IHYoXCJiYWRjZmdcIixcbmguaXNBcnJheT9cImFycmF5XCI6XCJvYmplY3RcIixhLmlzQXJyYXkoZCk/XCJhcnJheVwiOlwib2JqZWN0XCIpO2guaXNBcnJheT8obS5sZW5ndGg9MCxzKGQsZnVuY3Rpb24oYil7bS5wdXNoKG5ldyBmKGIpKX0pKTooRChkLG0pLG0uJHByb21pc2U9ayl9bS4kcmVzb2x2ZWQ9ITA7Yi5yZXNvdXJjZT1tO3JldHVybiBifSxmdW5jdGlvbihiKXttLiRyZXNvbHZlZD0hMDsoeXx8RSkoYik7cmV0dXJuIGcucmVqZWN0KGIpfSk7cT1xLnRoZW4oZnVuY3Rpb24oYil7dmFyIGE9QihiKTsobHx8RSkoYSxiLmhlYWRlcnMpO3JldHVybiBhfSxDKTtyZXR1cm4gdD9xOihtLiRwcm9taXNlPXEsbS4kcmVzb2x2ZWQ9ITEsbSl9O2YucHJvdG90eXBlW1wiJFwiK2RdPWZ1bmN0aW9uKGIsYSxrKXt1KGIpJiYoaz1hLGE9YixiPXt9KTtiPWZbZF0uY2FsbCh0aGlzLGIsdGhpcyxhLGspO3JldHVybiBiLiRwcm9taXNlfHxifX0pO2YuYmluZD1mdW5jdGlvbihhKXtyZXR1cm4gdChuLHgoe30sdyxhKSxsKX07cmV0dXJuIGZ9XG52YXIgQj17Z2V0OnttZXRob2Q6XCJHRVRcIn0sc2F2ZTp7bWV0aG9kOlwiUE9TVFwifSxxdWVyeTp7bWV0aG9kOlwiR0VUXCIsaXNBcnJheTohMH0scmVtb3ZlOnttZXRob2Q6XCJERUxFVEVcIn0sXCJkZWxldGVcIjp7bWV0aG9kOlwiREVMRVRFXCJ9fSxFPWEubm9vcCxzPWEuZm9yRWFjaCx4PWEuZXh0ZW5kLEc9YS5jb3B5LHU9YS5pc0Z1bmN0aW9uO2MucHJvdG90eXBlPXtzZXRVcmxQYXJhbXM6ZnVuY3Rpb24oYyxnLGwpe3ZhciByPXRoaXMsZT1sfHxyLnRlbXBsYXRlLGYscCxoPXIudXJsUGFyYW1zPXt9O3MoZS5zcGxpdCgvXFxXLyksZnVuY3Rpb24oYSl7aWYoXCJoYXNPd25Qcm9wZXJ0eVwiPT09YSl0aHJvdyB2KFwiYmFkbmFtZVwiKTshL15cXGQrJC8udGVzdChhKSYmKGEmJlJlZ0V4cChcIihefFteXFxcXFxcXFxdKTpcIithK1wiKFxcXFxXfCQpXCIpLnRlc3QoZSkpJiYoaFthXT0hMCl9KTtlPWUucmVwbGFjZSgvXFxcXDovZyxcIjpcIik7Zz1nfHx7fTtzKHIudXJsUGFyYW1zLGZ1bmN0aW9uKGQsYyl7Zj1nLmhhc093blByb3BlcnR5KGMpP1xuZ1tjXTpyLmRlZmF1bHRzW2NdO2EuaXNEZWZpbmVkKGYpJiZudWxsIT09Zj8ocD1lbmNvZGVVUklDb21wb25lbnQoZikucmVwbGFjZSgvJTQwL2dpLFwiQFwiKS5yZXBsYWNlKC8lM0EvZ2ksXCI6XCIpLnJlcGxhY2UoLyUyNC9nLFwiJFwiKS5yZXBsYWNlKC8lMkMvZ2ksXCIsXCIpLnJlcGxhY2UoLyUyMC9nLFwiJTIwXCIpLnJlcGxhY2UoLyUyNi9naSxcIiZcIikucmVwbGFjZSgvJTNEL2dpLFwiPVwiKS5yZXBsYWNlKC8lMkIvZ2ksXCIrXCIpLGU9ZS5yZXBsYWNlKFJlZ0V4cChcIjpcIitjK1wiKFxcXFxXfCQpXCIsXCJnXCIpLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIHArY30pKTplPWUucmVwbGFjZShSZWdFeHAoXCIoLz8pOlwiK2MrXCIoXFxcXFd8JClcIixcImdcIiksZnVuY3Rpb24oYSxjLGQpe3JldHVyblwiL1wiPT1kLmNoYXJBdCgwKT9kOmMrZH0pfSk7ZT1lLnJlcGxhY2UoL1xcLyskLyxcIlwiKXx8XCIvXCI7ZT1lLnJlcGxhY2UoL1xcL1xcLig/PVxcdysoJHxcXD8pKS8sXCIuXCIpO2MudXJsPWUucmVwbGFjZSgvXFwvXFxcXFxcLi8sXCIvLlwiKTtzKGcsZnVuY3Rpb24oYSxcbmUpe3IudXJsUGFyYW1zW2VdfHwoYy5wYXJhbXM9Yy5wYXJhbXN8fHt9LGMucGFyYW1zW2VdPWEpfSl9fTtyZXR1cm4gdH1dKX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXJlc291cmNlLm1pbi5qcy5tYXBcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJzL2FuZ3VsYXIvYW5ndWxhci1yZXNvdXJjZS5taW4uanNcIixcIi9saWJzL2FuZ3VsYXJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxuIEFuZ3VsYXJKUyB2MS4yLjEyXG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiBMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24oaCxlLEEpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB1KHcscSxrKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIix0ZXJtaW5hbDohMCxwcmlvcml0eTo0MDAsdHJhbnNjbHVkZTpcImVsZW1lbnRcIixsaW5rOmZ1bmN0aW9uKGEsYyxiLGYsbil7ZnVuY3Rpb24geSgpe2wmJihsLiRkZXN0cm95KCksbD1udWxsKTtnJiYoay5sZWF2ZShnKSxnPW51bGwpfWZ1bmN0aW9uIHYoKXt2YXIgYj13LmN1cnJlbnQmJncuY3VycmVudC5sb2NhbHM7aWYoZS5pc0RlZmluZWQoYiYmYi4kdGVtcGxhdGUpKXt2YXIgYj1hLiRuZXcoKSxmPXcuY3VycmVudDtnPW4oYixmdW5jdGlvbihkKXtrLmVudGVyKGQsbnVsbCxnfHxjLGZ1bmN0aW9uKCl7IWUuaXNEZWZpbmVkKHQpfHx0JiYhYS4kZXZhbCh0KXx8cSgpfSk7eSgpfSk7bD1mLnNjb3BlPWI7bC4kZW1pdChcIiR2aWV3Q29udGVudExvYWRlZFwiKTtsLiRldmFsKGgpfWVsc2UgeSgpfXZhciBsLGcsdD1iLmF1dG9zY3JvbGwsaD1iLm9ubG9hZHx8XCJcIjtcbmEuJG9uKFwiJHJvdXRlQ2hhbmdlU3VjY2Vzc1wiLHYpO3YoKX19fWZ1bmN0aW9uIHooZSxoLGspe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5Oi00MDAsbGluazpmdW5jdGlvbihhLGMpe3ZhciBiPWsuY3VycmVudCxmPWIubG9jYWxzO2MuaHRtbChmLiR0ZW1wbGF0ZSk7dmFyIG49ZShjLmNvbnRlbnRzKCkpO2IuY29udHJvbGxlciYmKGYuJHNjb3BlPWEsZj1oKGIuY29udHJvbGxlcixmKSxiLmNvbnRyb2xsZXJBcyYmKGFbYi5jb250cm9sbGVyQXNdPWYpLGMuZGF0YShcIiRuZ0NvbnRyb2xsZXJDb250cm9sbGVyXCIsZiksYy5jaGlsZHJlbigpLmRhdGEoXCIkbmdDb250cm9sbGVyQ29udHJvbGxlclwiLGYpKTtuKGEpfX19aD1lLm1vZHVsZShcIm5nUm91dGVcIixbXCJuZ1wiXSkucHJvdmlkZXIoXCIkcm91dGVcIixmdW5jdGlvbigpe2Z1bmN0aW9uIGgoYSxjKXtyZXR1cm4gZS5leHRlbmQobmV3IChlLmV4dGVuZChmdW5jdGlvbigpe30se3Byb3RvdHlwZTphfSkpLGMpfWZ1bmN0aW9uIHEoYSxcbmUpe3ZhciBiPWUuY2FzZUluc2Vuc2l0aXZlTWF0Y2gsZj17b3JpZ2luYWxQYXRoOmEscmVnZXhwOmF9LGg9Zi5rZXlzPVtdO2E9YS5yZXBsYWNlKC8oWygpLl0pL2csXCJcXFxcJDFcIikucmVwbGFjZSgvKFxcLyk/OihcXHcrKShbXFw/XFwqXSk/L2csZnVuY3Rpb24oYSxlLGIsYyl7YT1cIj9cIj09PWM/YzpudWxsO2M9XCIqXCI9PT1jP2M6bnVsbDtoLnB1c2goe25hbWU6YixvcHRpb25hbDohIWF9KTtlPWV8fFwiXCI7cmV0dXJuXCJcIisoYT9cIlwiOmUpK1wiKD86XCIrKGE/ZTpcIlwiKSsoYyYmXCIoLis/KVwifHxcIihbXi9dKylcIikrKGF8fFwiXCIpK1wiKVwiKyhhfHxcIlwiKX0pLnJlcGxhY2UoLyhbXFwvJFxcKl0pL2csXCJcXFxcJDFcIik7Zi5yZWdleHA9UmVnRXhwKFwiXlwiK2ErXCIkXCIsYj9cImlcIjpcIlwiKTtyZXR1cm4gZn12YXIgaz17fTt0aGlzLndoZW49ZnVuY3Rpb24oYSxjKXtrW2FdPWUuZXh0ZW5kKHtyZWxvYWRPblNlYXJjaDohMH0sYyxhJiZxKGEsYykpO2lmKGEpe3ZhciBiPVwiL1wiPT1hW2EubGVuZ3RoLTFdP2Euc3Vic3RyKDAsYS5sZW5ndGgtXG4xKTphK1wiL1wiO2tbYl09ZS5leHRlbmQoe3JlZGlyZWN0VG86YX0scShiLGMpKX1yZXR1cm4gdGhpc307dGhpcy5vdGhlcndpc2U9ZnVuY3Rpb24oYSl7dGhpcy53aGVuKG51bGwsYSk7cmV0dXJuIHRoaXN9O3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkbG9jYXRpb25cIixcIiRyb3V0ZVBhcmFtc1wiLFwiJHFcIixcIiRpbmplY3RvclwiLFwiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkc2NlXCIsZnVuY3Rpb24oYSxjLGIsZixuLHEsdixsKXtmdW5jdGlvbiBnKCl7dmFyIGQ9dCgpLG09ci5jdXJyZW50O2lmKGQmJm0mJmQuJCRyb3V0ZT09PW0uJCRyb3V0ZSYmZS5lcXVhbHMoZC5wYXRoUGFyYW1zLG0ucGF0aFBhcmFtcykmJiFkLnJlbG9hZE9uU2VhcmNoJiYheCltLnBhcmFtcz1kLnBhcmFtcyxlLmNvcHkobS5wYXJhbXMsYiksYS4kYnJvYWRjYXN0KFwiJHJvdXRlVXBkYXRlXCIsbSk7ZWxzZSBpZihkfHxtKXg9ITEsYS4kYnJvYWRjYXN0KFwiJHJvdXRlQ2hhbmdlU3RhcnRcIixkLG0pLChyLmN1cnJlbnQ9XG5kKSYmZC5yZWRpcmVjdFRvJiYoZS5pc1N0cmluZyhkLnJlZGlyZWN0VG8pP2MucGF0aCh1KGQucmVkaXJlY3RUbyxkLnBhcmFtcykpLnNlYXJjaChkLnBhcmFtcykucmVwbGFjZSgpOmMudXJsKGQucmVkaXJlY3RUbyhkLnBhdGhQYXJhbXMsYy5wYXRoKCksYy5zZWFyY2goKSkpLnJlcGxhY2UoKSksZi53aGVuKGQpLnRoZW4oZnVuY3Rpb24oKXtpZihkKXt2YXIgYT1lLmV4dGVuZCh7fSxkLnJlc29sdmUpLGMsYjtlLmZvckVhY2goYSxmdW5jdGlvbihkLGMpe2FbY109ZS5pc1N0cmluZyhkKT9uLmdldChkKTpuLmludm9rZShkKX0pO2UuaXNEZWZpbmVkKGM9ZC50ZW1wbGF0ZSk/ZS5pc0Z1bmN0aW9uKGMpJiYoYz1jKGQucGFyYW1zKSk6ZS5pc0RlZmluZWQoYj1kLnRlbXBsYXRlVXJsKSYmKGUuaXNGdW5jdGlvbihiKSYmKGI9YihkLnBhcmFtcykpLGI9bC5nZXRUcnVzdGVkUmVzb3VyY2VVcmwoYiksZS5pc0RlZmluZWQoYikmJihkLmxvYWRlZFRlbXBsYXRlVXJsPWIsYz1xLmdldChiLFxue2NhY2hlOnZ9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLmRhdGF9KSkpO2UuaXNEZWZpbmVkKGMpJiYoYS4kdGVtcGxhdGU9Yyk7cmV0dXJuIGYuYWxsKGEpfX0pLnRoZW4oZnVuY3Rpb24oYyl7ZD09ci5jdXJyZW50JiYoZCYmKGQubG9jYWxzPWMsZS5jb3B5KGQucGFyYW1zLGIpKSxhLiRicm9hZGNhc3QoXCIkcm91dGVDaGFuZ2VTdWNjZXNzXCIsZCxtKSl9LGZ1bmN0aW9uKGMpe2Q9PXIuY3VycmVudCYmYS4kYnJvYWRjYXN0KFwiJHJvdXRlQ2hhbmdlRXJyb3JcIixkLG0sYyl9KX1mdW5jdGlvbiB0KCl7dmFyIGEsYjtlLmZvckVhY2goayxmdW5jdGlvbihmLGspe3ZhciBwO2lmKHA9IWIpe3ZhciBzPWMucGF0aCgpO3A9Zi5rZXlzO3ZhciBsPXt9O2lmKGYucmVnZXhwKWlmKHM9Zi5yZWdleHAuZXhlYyhzKSl7Zm9yKHZhciBnPTEscT1zLmxlbmd0aDtnPHE7KytnKXt2YXIgbj1wW2ctMV0scj1cInN0cmluZ1wiPT10eXBlb2Ygc1tnXT9kZWNvZGVVUklDb21wb25lbnQoc1tnXSk6c1tnXTtcbm4mJnImJihsW24ubmFtZV09cil9cD1sfWVsc2UgcD1udWxsO2Vsc2UgcD1udWxsO3A9YT1wfXAmJihiPWgoZix7cGFyYW1zOmUuZXh0ZW5kKHt9LGMuc2VhcmNoKCksYSkscGF0aFBhcmFtczphfSksYi4kJHJvdXRlPWYpfSk7cmV0dXJuIGJ8fGtbbnVsbF0mJmgoa1tudWxsXSx7cGFyYW1zOnt9LHBhdGhQYXJhbXM6e319KX1mdW5jdGlvbiB1KGEsYyl7dmFyIGI9W107ZS5mb3JFYWNoKChhfHxcIlwiKS5zcGxpdChcIjpcIiksZnVuY3Rpb24oYSxkKXtpZigwPT09ZCliLnB1c2goYSk7ZWxzZXt2YXIgZT1hLm1hdGNoKC8oXFx3KykoLiopLyksZj1lWzFdO2IucHVzaChjW2ZdKTtiLnB1c2goZVsyXXx8XCJcIik7ZGVsZXRlIGNbZl19fSk7cmV0dXJuIGIuam9pbihcIlwiKX12YXIgeD0hMSxyPXtyb3V0ZXM6ayxyZWxvYWQ6ZnVuY3Rpb24oKXt4PSEwO2EuJGV2YWxBc3luYyhnKX19O2EuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLGcpO3JldHVybiByfV19KTtoLnByb3ZpZGVyKFwiJHJvdXRlUGFyYW1zXCIsXG5mdW5jdGlvbigpe3RoaXMuJGdldD1mdW5jdGlvbigpe3JldHVybnt9fX0pO2guZGlyZWN0aXZlKFwibmdWaWV3XCIsdSk7aC5kaXJlY3RpdmUoXCJuZ1ZpZXdcIix6KTt1LiRpbmplY3Q9W1wiJHJvdXRlXCIsXCIkYW5jaG9yU2Nyb2xsXCIsXCIkYW5pbWF0ZVwiXTt6LiRpbmplY3Q9W1wiJGNvbXBpbGVcIixcIiRjb250cm9sbGVyXCIsXCIkcm91dGVcIl19KSh3aW5kb3csd2luZG93LmFuZ3VsYXIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci1yb3V0ZS5taW4uanMubWFwXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicy9hbmd1bGFyL2FuZ3VsYXItcm91dGUubWluLmpzXCIsXCIvbGlicy9hbmd1bGFyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiBBbmd1bGFySlMgdjEuMi4xMlxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gTGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKHksdix6KXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gdChnLGEsYil7cS5kaXJlY3RpdmUoZyxbXCIkcGFyc2VcIixcIiRzd2lwZVwiLGZ1bmN0aW9uKGwsbil7dmFyIHI9NzUsaD0wLjMsZD0zMDtyZXR1cm4gZnVuY3Rpb24ocCxtLGspe2Z1bmN0aW9uIGUoZSl7aWYoIXUpcmV0dXJuITE7dmFyIGM9TWF0aC5hYnMoZS55LXUueSk7ZT0oZS54LXUueCkqYTtyZXR1cm4gZiYmYzxyJiYwPGUmJmU+ZCYmYy9lPGh9dmFyIGM9bChrW2ddKSx1LGY7bi5iaW5kKG0se3N0YXJ0OmZ1bmN0aW9uKGUsYyl7dT1lO2Y9ITB9LGNhbmNlbDpmdW5jdGlvbihlKXtmPSExfSxlbmQ6ZnVuY3Rpb24oYSxmKXtlKGEpJiZwLiRhcHBseShmdW5jdGlvbigpe20udHJpZ2dlckhhbmRsZXIoYik7YyhwLHskZXZlbnQ6Zn0pfSl9fSl9fV0pfXZhciBxPXYubW9kdWxlKFwibmdUb3VjaFwiLFtdKTtxLmZhY3RvcnkoXCIkc3dpcGVcIixbZnVuY3Rpb24oKXtmdW5jdGlvbiBnKGEpe3ZhciBiPWEudG91Y2hlcyYmYS50b3VjaGVzLmxlbmd0aD9cbmEudG91Y2hlczpbYV07YT1hLmNoYW5nZWRUb3VjaGVzJiZhLmNoYW5nZWRUb3VjaGVzWzBdfHxhLm9yaWdpbmFsRXZlbnQmJmEub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcyYmYS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdfHxiWzBdLm9yaWdpbmFsRXZlbnR8fGJbMF07cmV0dXJue3g6YS5jbGllbnRYLHk6YS5jbGllbnRZfX1yZXR1cm57YmluZDpmdW5jdGlvbihhLGIpe3ZhciBsLG4scixoLGQ9ITE7YS5vbihcInRvdWNoc3RhcnQgbW91c2Vkb3duXCIsZnVuY3Rpb24oYSl7cj1nKGEpO2Q9ITA7bj1sPTA7aD1yO2Iuc3RhcnQmJmIuc3RhcnQocixhKX0pO2Eub24oXCJ0b3VjaGNhbmNlbFwiLGZ1bmN0aW9uKGEpe2Q9ITE7Yi5jYW5jZWwmJmIuY2FuY2VsKGEpfSk7YS5vbihcInRvdWNobW92ZSBtb3VzZW1vdmVcIixmdW5jdGlvbihhKXtpZihkJiZyKXt2YXIgbT1nKGEpO2wrPU1hdGguYWJzKG0ueC1oLngpO24rPU1hdGguYWJzKG0ueS1oLnkpO2g9bTsxMD5sJiYxMD5ufHxcbihuPmw/KGQ9ITEsYi5jYW5jZWwmJmIuY2FuY2VsKGEpKTooYS5wcmV2ZW50RGVmYXVsdCgpLGIubW92ZSYmYi5tb3ZlKG0sYSkpKX19KTthLm9uKFwidG91Y2hlbmQgbW91c2V1cFwiLGZ1bmN0aW9uKGEpe2QmJihkPSExLGIuZW5kJiZiLmVuZChnKGEpLGEpKX0pfX19XSk7cS5jb25maWcoW1wiJHByb3ZpZGVcIixmdW5jdGlvbihnKXtnLmRlY29yYXRvcihcIm5nQ2xpY2tEaXJlY3RpdmVcIixbXCIkZGVsZWdhdGVcIixmdW5jdGlvbihhKXthLnNoaWZ0KCk7cmV0dXJuIGF9XSl9XSk7cS5kaXJlY3RpdmUoXCJuZ0NsaWNrXCIsW1wiJHBhcnNlXCIsXCIkdGltZW91dFwiLFwiJHJvb3RFbGVtZW50XCIsZnVuY3Rpb24oZyxhLGIpe2Z1bmN0aW9uIGwoYSxjLGIpe2Zvcih2YXIgZj0wO2Y8YS5sZW5ndGg7Zis9MilpZihNYXRoLmFicyhhW2ZdLWMpPGQmJk1hdGguYWJzKGFbZisxXS1iKTxkKXJldHVybiBhLnNwbGljZShmLGYrMiksITA7cmV0dXJuITF9ZnVuY3Rpb24gbihhKXtpZighKERhdGUubm93KCktbT5oKSl7dmFyIGM9XG5hLnRvdWNoZXMmJmEudG91Y2hlcy5sZW5ndGg/YS50b3VjaGVzOlthXSxiPWNbMF0uY2xpZW50WCxjPWNbMF0uY2xpZW50WTsxPmImJjE+Y3x8bChrLGIsYyl8fChhLnN0b3BQcm9wYWdhdGlvbigpLGEucHJldmVudERlZmF1bHQoKSxhLnRhcmdldCYmYS50YXJnZXQuYmx1cigpKX19ZnVuY3Rpb24gcihiKXtiPWIudG91Y2hlcyYmYi50b3VjaGVzLmxlbmd0aD9iLnRvdWNoZXM6W2JdO3ZhciBjPWJbMF0uY2xpZW50WCxkPWJbMF0uY2xpZW50WTtrLnB1c2goYyxkKTthKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTxrLmxlbmd0aDthKz0yKWlmKGtbYV09PWMmJmtbYSsxXT09ZCl7ay5zcGxpY2UoYSxhKzIpO2JyZWFrfX0saCwhMSl9dmFyIGg9MjUwMCxkPTI1LHA9XCJuZy1jbGljay1hY3RpdmVcIixtLGs7cmV0dXJuIGZ1bmN0aW9uKGEsYyxkKXtmdW5jdGlvbiBmKCl7cT0hMTtjLnJlbW92ZUNsYXNzKHApfXZhciBoPWcoZC5uZ0NsaWNrKSxxPSExLHMsdCx3LHg7Yy5vbihcInRvdWNoc3RhcnRcIixcbmZ1bmN0aW9uKGEpe3E9ITA7cz1hLnRhcmdldD9hLnRhcmdldDphLnNyY0VsZW1lbnQ7Mz09cy5ub2RlVHlwZSYmKHM9cy5wYXJlbnROb2RlKTtjLmFkZENsYXNzKHApO3Q9RGF0ZS5ub3coKTthPWEudG91Y2hlcyYmYS50b3VjaGVzLmxlbmd0aD9hLnRvdWNoZXM6W2FdO2E9YVswXS5vcmlnaW5hbEV2ZW50fHxhWzBdO3c9YS5jbGllbnRYO3g9YS5jbGllbnRZfSk7Yy5vbihcInRvdWNobW92ZVwiLGZ1bmN0aW9uKGEpe2YoKX0pO2Mub24oXCJ0b3VjaGNhbmNlbFwiLGZ1bmN0aW9uKGEpe2YoKX0pO2Mub24oXCJ0b3VjaGVuZFwiLGZ1bmN0aW9uKGEpe3ZhciBoPURhdGUubm93KCktdCxlPWEuY2hhbmdlZFRvdWNoZXMmJmEuY2hhbmdlZFRvdWNoZXMubGVuZ3RoP2EuY2hhbmdlZFRvdWNoZXM6YS50b3VjaGVzJiZhLnRvdWNoZXMubGVuZ3RoP2EudG91Y2hlczpbYV0sZz1lWzBdLm9yaWdpbmFsRXZlbnR8fGVbMF0sZT1nLmNsaWVudFgsZz1nLmNsaWVudFkscD1NYXRoLnNxcnQoTWF0aC5wb3coZS1cbncsMikrTWF0aC5wb3coZy14LDIpKTtxJiYoNzUwPmgmJjEyPnApJiYoa3x8KGJbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbiwhMCksYlswXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHIsITApLGs9W10pLG09RGF0ZS5ub3coKSxsKGssZSxnKSxzJiZzLmJsdXIoKSx2LmlzRGVmaW5lZChkLmRpc2FibGVkKSYmITEhPT1kLmRpc2FibGVkfHxjLnRyaWdnZXJIYW5kbGVyKFwiY2xpY2tcIixbYV0pKTtmKCl9KTtjLm9uY2xpY2s9ZnVuY3Rpb24oYSl7fTtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbihiLGMpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7aChhLHskZXZlbnQ6Y3x8Yn0pfSl9KTtjLm9uKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oYSl7Yy5hZGRDbGFzcyhwKX0pO2Mub24oXCJtb3VzZW1vdmUgbW91c2V1cFwiLGZ1bmN0aW9uKGEpe2MucmVtb3ZlQ2xhc3MocCl9KX19XSk7dChcIm5nU3dpcGVMZWZ0XCIsLTEsXCJzd2lwZWxlZnRcIik7dChcIm5nU3dpcGVSaWdodFwiLDEsXCJzd2lwZXJpZ2h0XCIpfSkod2luZG93LFxud2luZG93LmFuZ3VsYXIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci10b3VjaC5taW4uanMubWFwXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicy9hbmd1bGFyL2FuZ3VsYXItdG91Y2gubWluLmpzXCIsXCIvbGlicy9hbmd1bGFyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiBBbmd1bGFySlMgdjEuMi4xMlxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gTGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKFAsUixzKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gdChiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF0sYyxhPVwiW1wiKyhiP2IrXCI6XCI6XCJcIikrYStcIl0gaHR0cDovL2Vycm9ycy5hbmd1bGFyanMub3JnLzEuMi4xMi9cIisoYj9iK1wiL1wiOlwiXCIpK2E7Zm9yKGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWE9YSsoMT09Yz9cIj9cIjpcIiZcIikrXCJwXCIrKGMtMSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFwiZnVuY3Rpb25cIj09dHlwZW9mIGFyZ3VtZW50c1tjXT9hcmd1bWVudHNbY10udG9TdHJpbmcoKS5yZXBsYWNlKC8gXFx7W1xcc1xcU10qJC8sXCJcIik6XCJ1bmRlZmluZWRcIj09dHlwZW9mIGFyZ3VtZW50c1tjXT9cInVuZGVmaW5lZFwiOlwic3RyaW5nXCIhPXR5cGVvZiBhcmd1bWVudHNbY10/SlNPTi5zdHJpbmdpZnkoYXJndW1lbnRzW2NdKTphcmd1bWVudHNbY10pO3JldHVybiBFcnJvcihhKX19ZnVuY3Rpb24gcWIoYil7aWYobnVsbD09Ynx8emEoYikpcmV0dXJuITE7XG52YXIgYT1iLmxlbmd0aDtyZXR1cm4gMT09PWIubm9kZVR5cGUmJmE/ITA6dyhiKXx8TChiKXx8MD09PWF8fFwibnVtYmVyXCI9PT10eXBlb2YgYSYmMDxhJiZhLTEgaW4gYn1mdW5jdGlvbiBxKGIsYSxjKXt2YXIgZDtpZihiKWlmKE0oYikpZm9yKGQgaW4gYilcInByb3RvdHlwZVwiPT1kfHwoXCJsZW5ndGhcIj09ZHx8XCJuYW1lXCI9PWR8fGIuaGFzT3duUHJvcGVydHkmJiFiLmhhc093blByb3BlcnR5KGQpKXx8YS5jYWxsKGMsYltkXSxkKTtlbHNlIGlmKGIuZm9yRWFjaCYmYi5mb3JFYWNoIT09cSliLmZvckVhY2goYSxjKTtlbHNlIGlmKHFiKGIpKWZvcihkPTA7ZDxiLmxlbmd0aDtkKyspYS5jYWxsKGMsYltkXSxkKTtlbHNlIGZvcihkIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShkKSYmYS5jYWxsKGMsYltkXSxkKTtyZXR1cm4gYn1mdW5jdGlvbiBOYihiKXt2YXIgYT1bXSxjO2ZvcihjIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShjKSYmYS5wdXNoKGMpO3JldHVybiBhLnNvcnQoKX1mdW5jdGlvbiBPYyhiLFxuYSxjKXtmb3IodmFyIGQ9TmIoYiksZT0wO2U8ZC5sZW5ndGg7ZSsrKWEuY2FsbChjLGJbZFtlXV0sZFtlXSk7cmV0dXJuIGR9ZnVuY3Rpb24gT2IoYil7cmV0dXJuIGZ1bmN0aW9uKGEsYyl7YihjLGEpfX1mdW5jdGlvbiBaYSgpe2Zvcih2YXIgYj1pYS5sZW5ndGgsYTtiOyl7Yi0tO2E9aWFbYl0uY2hhckNvZGVBdCgwKTtpZig1Nz09YSlyZXR1cm4gaWFbYl09XCJBXCIsaWEuam9pbihcIlwiKTtpZig5MD09YSlpYVtiXT1cIjBcIjtlbHNlIHJldHVybiBpYVtiXT1TdHJpbmcuZnJvbUNoYXJDb2RlKGErMSksaWEuam9pbihcIlwiKX1pYS51bnNoaWZ0KFwiMFwiKTtyZXR1cm4gaWEuam9pbihcIlwiKX1mdW5jdGlvbiBQYihiLGEpe2E/Yi4kJGhhc2hLZXk9YTpkZWxldGUgYi4kJGhhc2hLZXl9ZnVuY3Rpb24geShiKXt2YXIgYT1iLiQkaGFzaEtleTtxKGFyZ3VtZW50cyxmdW5jdGlvbihhKXthIT09YiYmcShhLGZ1bmN0aW9uKGEsYyl7YltjXT1hfSl9KTtQYihiLGEpO3JldHVybiBifWZ1bmN0aW9uIFYoYil7cmV0dXJuIHBhcnNlSW50KGIsXG4xMCl9ZnVuY3Rpb24gUWIoYixhKXtyZXR1cm4geShuZXcgKHkoZnVuY3Rpb24oKXt9LHtwcm90b3R5cGU6Yn0pKSxhKX1mdW5jdGlvbiBFKCl7fWZ1bmN0aW9uIEFhKGIpe3JldHVybiBifWZ1bmN0aW9uIFkoYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGJ9fWZ1bmN0aW9uIHUoYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifWZ1bmN0aW9uIEQoYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBifWZ1bmN0aW9uIFcoYil7cmV0dXJuIG51bGwhPWImJlwib2JqZWN0XCI9PT10eXBlb2YgYn1mdW5jdGlvbiB3KGIpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYn1mdW5jdGlvbiByYihiKXtyZXR1cm5cIm51bWJlclwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gS2EoYil7cmV0dXJuXCJbb2JqZWN0IERhdGVdXCI9PT1MYS5jYWxsKGIpfWZ1bmN0aW9uIEwoYil7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09TGEuY2FsbChiKX1mdW5jdGlvbiBNKGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBifVxuZnVuY3Rpb24gJGEoYil7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PUxhLmNhbGwoYil9ZnVuY3Rpb24gemEoYil7cmV0dXJuIGImJmIuZG9jdW1lbnQmJmIubG9jYXRpb24mJmIuYWxlcnQmJmIuc2V0SW50ZXJ2YWx9ZnVuY3Rpb24gUGMoYil7cmV0dXJuISghYnx8IShiLm5vZGVOYW1lfHxiLm9uJiZiLmZpbmQpKX1mdW5jdGlvbiBRYyhiLGEsYyl7dmFyIGQ9W107cShiLGZ1bmN0aW9uKGIsZyxmKXtkLnB1c2goYS5jYWxsKGMsYixnLGYpKX0pO3JldHVybiBkfWZ1bmN0aW9uIGFiKGIsYSl7aWYoYi5pbmRleE9mKXJldHVybiBiLmluZGV4T2YoYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspaWYoYT09PWJbY10pcmV0dXJuIGM7cmV0dXJuLTF9ZnVuY3Rpb24gTWEoYixhKXt2YXIgYz1hYihiLGEpOzA8PWMmJmIuc3BsaWNlKGMsMSk7cmV0dXJuIGF9ZnVuY3Rpb24gJChiLGEpe2lmKHphKGIpfHxiJiZiLiRldmFsQXN5bmMmJmIuJHdhdGNoKXRocm93IE5hKFwiY3B3c1wiKTtpZihhKXtpZihiPT09XG5hKXRocm93IE5hKFwiY3BpXCIpO2lmKEwoYikpZm9yKHZhciBjPWEubGVuZ3RoPTA7YzxiLmxlbmd0aDtjKyspYS5wdXNoKCQoYltjXSkpO2Vsc2V7Yz1hLiQkaGFzaEtleTtxKGEsZnVuY3Rpb24oYixjKXtkZWxldGUgYVtjXX0pO2Zvcih2YXIgZCBpbiBiKWFbZF09JChiW2RdKTtQYihhLGMpfX1lbHNlKGE9YikmJihMKGIpP2E9JChiLFtdKTpLYShiKT9hPW5ldyBEYXRlKGIuZ2V0VGltZSgpKTokYShiKT9hPVJlZ0V4cChiLnNvdXJjZSk6VyhiKSYmKGE9JChiLHt9KSkpO3JldHVybiBhfWZ1bmN0aW9uIFJiKGIsYSl7YT1hfHx7fTtmb3IodmFyIGMgaW4gYikhYi5oYXNPd25Qcm9wZXJ0eShjKXx8XCIkXCI9PT1jLmNoYXJBdCgwKSYmXCIkXCI9PT1jLmNoYXJBdCgxKXx8KGFbY109YltjXSk7cmV0dXJuIGF9ZnVuY3Rpb24gdGEoYixhKXtpZihiPT09YSlyZXR1cm4hMDtpZihudWxsPT09Ynx8bnVsbD09PWEpcmV0dXJuITE7aWYoYiE9PWImJmEhPT1hKXJldHVybiEwO3ZhciBjPXR5cGVvZiBiLFxuZDtpZihjPT10eXBlb2YgYSYmXCJvYmplY3RcIj09YylpZihMKGIpKXtpZighTChhKSlyZXR1cm4hMTtpZigoYz1iLmxlbmd0aCk9PWEubGVuZ3RoKXtmb3IoZD0wO2Q8YztkKyspaWYoIXRhKGJbZF0sYVtkXSkpcmV0dXJuITE7cmV0dXJuITB9fWVsc2V7aWYoS2EoYikpcmV0dXJuIEthKGEpJiZiLmdldFRpbWUoKT09YS5nZXRUaW1lKCk7aWYoJGEoYikmJiRhKGEpKXJldHVybiBiLnRvU3RyaW5nKCk9PWEudG9TdHJpbmcoKTtpZihiJiZiLiRldmFsQXN5bmMmJmIuJHdhdGNofHxhJiZhLiRldmFsQXN5bmMmJmEuJHdhdGNofHx6YShiKXx8emEoYSl8fEwoYSkpcmV0dXJuITE7Yz17fTtmb3IoZCBpbiBiKWlmKFwiJFwiIT09ZC5jaGFyQXQoMCkmJiFNKGJbZF0pKXtpZighdGEoYltkXSxhW2RdKSlyZXR1cm4hMTtjW2RdPSEwfWZvcihkIGluIGEpaWYoIWMuaGFzT3duUHJvcGVydHkoZCkmJlwiJFwiIT09ZC5jaGFyQXQoMCkmJmFbZF0hPT1zJiYhTShhW2RdKSlyZXR1cm4hMTtyZXR1cm4hMH1yZXR1cm4hMX1cbmZ1bmN0aW9uIFNiKCl7cmV0dXJuIFIuc2VjdXJpdHlQb2xpY3kmJlIuc2VjdXJpdHlQb2xpY3kuaXNBY3RpdmV8fFIucXVlcnlTZWxlY3RvciYmISghUi5xdWVyeVNlbGVjdG9yKFwiW25nLWNzcF1cIikmJiFSLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZy1jc3BdXCIpKX1mdW5jdGlvbiBiYihiLGEpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aD91YS5jYWxsKGFyZ3VtZW50cywyKTpbXTtyZXR1cm4hTShhKXx8YSBpbnN0YW5jZW9mIFJlZ0V4cD9hOmMubGVuZ3RoP2Z1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/YS5hcHBseShiLGMuY29uY2F0KHVhLmNhbGwoYXJndW1lbnRzLDApKSk6YS5hcHBseShiLGMpfTpmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP2EuYXBwbHkoYixhcmd1bWVudHMpOmEuY2FsbChiKX19ZnVuY3Rpb24gUmMoYixhKXt2YXIgYz1hO1wic3RyaW5nXCI9PT10eXBlb2YgYiYmXCIkXCI9PT1iLmNoYXJBdCgwKT9jPXM6emEoYSk/Yz1cIiRXSU5ET1dcIjpcbmEmJlI9PT1hP2M9XCIkRE9DVU1FTlRcIjphJiYoYS4kZXZhbEFzeW5jJiZhLiR3YXRjaCkmJihjPVwiJFNDT1BFXCIpO3JldHVybiBjfWZ1bmN0aW9uIHBhKGIsYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBiP3M6SlNPTi5zdHJpbmdpZnkoYixSYyxhP1wiICBcIjpudWxsKX1mdW5jdGlvbiBUYihiKXtyZXR1cm4gdyhiKT9KU09OLnBhcnNlKGIpOmJ9ZnVuY3Rpb24gT2EoYil7XCJmdW5jdGlvblwiPT09dHlwZW9mIGI/Yj0hMDpiJiYwIT09Yi5sZW5ndGg/KGI9eChcIlwiK2IpLGI9IShcImZcIj09Ynx8XCIwXCI9PWJ8fFwiZmFsc2VcIj09Ynx8XCJub1wiPT1ifHxcIm5cIj09Ynx8XCJbXVwiPT1iKSk6Yj0hMTtyZXR1cm4gYn1mdW5jdGlvbiBmYShiKXtiPXooYikuY2xvbmUoKTt0cnl7Yi5lbXB0eSgpfWNhdGNoKGEpe312YXIgYz16KFwiPGRpdj5cIikuYXBwZW5kKGIpLmh0bWwoKTt0cnl7cmV0dXJuIDM9PT1iWzBdLm5vZGVUeXBlP3goYyk6Yy5tYXRjaCgvXig8W14+XSs+KS8pWzFdLnJlcGxhY2UoL148KFtcXHdcXC1dKykvLFxuZnVuY3Rpb24oYSxiKXtyZXR1cm5cIjxcIit4KGIpfSl9Y2F0Y2goZCl7cmV0dXJuIHgoYyl9fWZ1bmN0aW9uIFViKGIpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGIpfWNhdGNoKGEpe319ZnVuY3Rpb24gVmIoYil7dmFyIGE9e30sYyxkO3EoKGJ8fFwiXCIpLnNwbGl0KFwiJlwiKSxmdW5jdGlvbihiKXtiJiYoYz1iLnNwbGl0KFwiPVwiKSxkPVViKGNbMF0pLEQoZCkmJihiPUQoY1sxXSk/VWIoY1sxXSk6ITAsYVtkXT9MKGFbZF0pP2FbZF0ucHVzaChiKTphW2RdPVthW2RdLGJdOmFbZF09YikpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gV2IoYil7dmFyIGE9W107cShiLGZ1bmN0aW9uKGIsZCl7TChiKT9xKGIsZnVuY3Rpb24oYil7YS5wdXNoKHZhKGQsITApKyghMD09PWI/XCJcIjpcIj1cIit2YShiLCEwKSkpfSk6YS5wdXNoKHZhKGQsITApKyghMD09PWI/XCJcIjpcIj1cIit2YShiLCEwKSkpfSk7cmV0dXJuIGEubGVuZ3RoP2Euam9pbihcIiZcIik6XCJcIn1mdW5jdGlvbiBzYihiKXtyZXR1cm4gdmEoYixcbiEwKS5yZXBsYWNlKC8lMjYvZ2ksXCImXCIpLnJlcGxhY2UoLyUzRC9naSxcIj1cIikucmVwbGFjZSgvJTJCL2dpLFwiK1wiKX1mdW5jdGlvbiB2YShiLGEpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoYikucmVwbGFjZSgvJTQwL2dpLFwiQFwiKS5yZXBsYWNlKC8lM0EvZ2ksXCI6XCIpLnJlcGxhY2UoLyUyNC9nLFwiJFwiKS5yZXBsYWNlKC8lMkMvZ2ksXCIsXCIpLnJlcGxhY2UoLyUyMC9nLGE/XCIlMjBcIjpcIitcIil9ZnVuY3Rpb24gU2MoYixhKXtmdW5jdGlvbiBjKGEpe2EmJmQucHVzaChhKX12YXIgZD1bYl0sZSxnLGY9W1wibmc6YXBwXCIsXCJuZy1hcHBcIixcIngtbmctYXBwXCIsXCJkYXRhLW5nLWFwcFwiXSxoPS9cXHNuZ1s6XFwtXWFwcCg6XFxzKihbXFx3XFxkX10rKTs/KT9cXHMvO3EoZixmdW5jdGlvbihhKXtmW2FdPSEwO2MoUi5nZXRFbGVtZW50QnlJZChhKSk7YT1hLnJlcGxhY2UoXCI6XCIsXCJcXFxcOlwiKTtiLnF1ZXJ5U2VsZWN0b3JBbGwmJihxKGIucXVlcnlTZWxlY3RvckFsbChcIi5cIithKSxjKSxxKGIucXVlcnlTZWxlY3RvckFsbChcIi5cIitcbmErXCJcXFxcOlwiKSxjKSxxKGIucXVlcnlTZWxlY3RvckFsbChcIltcIithK1wiXVwiKSxjKSl9KTtxKGQsZnVuY3Rpb24oYSl7aWYoIWUpe3ZhciBiPWguZXhlYyhcIiBcIithLmNsYXNzTmFtZStcIiBcIik7Yj8oZT1hLGc9KGJbMl18fFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIixcIikpOnEoYS5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGIpeyFlJiZmW2IubmFtZV0mJihlPWEsZz1iLnZhbHVlKX0pfX0pO2UmJmEoZSxnP1tnXTpbXSl9ZnVuY3Rpb24gWGIoYixhKXt2YXIgYz1mdW5jdGlvbigpe2I9eihiKTtpZihiLmluamVjdG9yKCkpe3ZhciBjPWJbMF09PT1SP1wiZG9jdW1lbnRcIjpmYShiKTt0aHJvdyBOYShcImJ0c3RycGRcIixjKTt9YT1hfHxbXTthLnVuc2hpZnQoW1wiJHByb3ZpZGVcIixmdW5jdGlvbihhKXthLnZhbHVlKFwiJHJvb3RFbGVtZW50XCIsYil9XSk7YS51bnNoaWZ0KFwibmdcIik7Yz1ZYihhKTtjLmludm9rZShbXCIkcm9vdFNjb3BlXCIsXCIkcm9vdEVsZW1lbnRcIixcIiRjb21waWxlXCIsXCIkaW5qZWN0b3JcIixcIiRhbmltYXRlXCIsXG5mdW5jdGlvbihhLGIsYyxkLGUpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7Yi5kYXRhKFwiJGluamVjdG9yXCIsZCk7YyhiKShhKX0pfV0pO3JldHVybiBjfSxkPS9eTkdfREVGRVJfQk9PVFNUUkFQIS87aWYoUCYmIWQudGVzdChQLm5hbWUpKXJldHVybiBjKCk7UC5uYW1lPVAubmFtZS5yZXBsYWNlKGQsXCJcIik7QmEucmVzdW1lQm9vdHN0cmFwPWZ1bmN0aW9uKGIpe3EoYixmdW5jdGlvbihiKXthLnB1c2goYil9KTtjKCl9fWZ1bmN0aW9uIGNiKGIsYSl7YT1hfHxcIl9cIjtyZXR1cm4gYi5yZXBsYWNlKFRjLGZ1bmN0aW9uKGIsZCl7cmV0dXJuKGQ/YTpcIlwiKStiLnRvTG93ZXJDYXNlKCl9KX1mdW5jdGlvbiB0YihiLGEsYyl7aWYoIWIpdGhyb3cgTmEoXCJhcmVxXCIsYXx8XCI/XCIsY3x8XCJyZXF1aXJlZFwiKTtyZXR1cm4gYn1mdW5jdGlvbiBQYShiLGEsYyl7YyYmTChiKSYmKGI9YltiLmxlbmd0aC0xXSk7dGIoTShiKSxhLFwibm90IGEgZnVuY3Rpb24sIGdvdCBcIisoYiYmXCJvYmplY3RcIj09dHlwZW9mIGI/XG5iLmNvbnN0cnVjdG9yLm5hbWV8fFwiT2JqZWN0XCI6dHlwZW9mIGIpKTtyZXR1cm4gYn1mdW5jdGlvbiB3YShiLGEpe2lmKFwiaGFzT3duUHJvcGVydHlcIj09PWIpdGhyb3cgTmEoXCJiYWRuYW1lXCIsYSk7fWZ1bmN0aW9uIFpiKGIsYSxjKXtpZighYSlyZXR1cm4gYjthPWEuc3BsaXQoXCIuXCIpO2Zvcih2YXIgZCxlPWIsZz1hLmxlbmd0aCxmPTA7ZjxnO2YrKylkPWFbZl0sYiYmKGI9KGU9YilbZF0pO3JldHVybiFjJiZNKGIpP2JiKGUsYik6Yn1mdW5jdGlvbiB1YihiKXt2YXIgYT1iWzBdO2I9YltiLmxlbmd0aC0xXTtpZihhPT09YilyZXR1cm4geihhKTt2YXIgYz1bYV07ZG97YT1hLm5leHRTaWJsaW5nO2lmKCFhKWJyZWFrO2MucHVzaChhKX13aGlsZShhIT09Yik7cmV0dXJuIHooYyl9ZnVuY3Rpb24gVWMoYil7dmFyIGE9dChcIiRpbmplY3RvclwiKSxjPXQoXCJuZ1wiKTtiPWIuYW5ndWxhcnx8KGIuYW5ndWxhcj17fSk7Yi4kJG1pbkVycj1iLiQkbWluRXJyfHx0O3JldHVybiBiLm1vZHVsZXx8XG4oYi5tb2R1bGU9ZnVuY3Rpb24oKXt2YXIgYj17fTtyZXR1cm4gZnVuY3Rpb24oZSxnLGYpe2lmKFwiaGFzT3duUHJvcGVydHlcIj09PWUpdGhyb3cgYyhcImJhZG5hbWVcIixcIm1vZHVsZVwiKTtnJiZiLmhhc093blByb3BlcnR5KGUpJiYoYltlXT1udWxsKTtyZXR1cm4gYltlXXx8KGJbZV09ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsZCxlKXtyZXR1cm4gZnVuY3Rpb24oKXtjW2V8fFwicHVzaFwiXShbYSxkLGFyZ3VtZW50c10pO3JldHVybiBufX1pZighZyl0aHJvdyBhKFwibm9tb2RcIixlKTt2YXIgYz1bXSxkPVtdLGw9YihcIiRpbmplY3RvclwiLFwiaW52b2tlXCIpLG49e19pbnZva2VRdWV1ZTpjLF9ydW5CbG9ja3M6ZCxyZXF1aXJlczpnLG5hbWU6ZSxwcm92aWRlcjpiKFwiJHByb3ZpZGVcIixcInByb3ZpZGVyXCIpLGZhY3Rvcnk6YihcIiRwcm92aWRlXCIsXCJmYWN0b3J5XCIpLHNlcnZpY2U6YihcIiRwcm92aWRlXCIsXCJzZXJ2aWNlXCIpLHZhbHVlOmIoXCIkcHJvdmlkZVwiLFwidmFsdWVcIiksY29uc3RhbnQ6YihcIiRwcm92aWRlXCIsXG5cImNvbnN0YW50XCIsXCJ1bnNoaWZ0XCIpLGFuaW1hdGlvbjpiKFwiJGFuaW1hdGVQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksZmlsdGVyOmIoXCIkZmlsdGVyUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGNvbnRyb2xsZXI6YihcIiRjb250cm9sbGVyUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGRpcmVjdGl2ZTpiKFwiJGNvbXBpbGVQcm92aWRlclwiLFwiZGlyZWN0aXZlXCIpLGNvbmZpZzpsLHJ1bjpmdW5jdGlvbihhKXtkLnB1c2goYSk7cmV0dXJuIHRoaXN9fTtmJiZsKGYpO3JldHVybiBufSgpKX19KCkpfWZ1bmN0aW9uIFFhKGIpe3JldHVybiBiLnJlcGxhY2UoVmMsZnVuY3Rpb24oYSxiLGQsZSl7cmV0dXJuIGU/ZC50b1VwcGVyQ2FzZSgpOmR9KS5yZXBsYWNlKFdjLFwiTW96JDFcIil9ZnVuY3Rpb24gdmIoYixhLGMsZCl7ZnVuY3Rpb24gZShiKXt2YXIgZT1jJiZiP1t0aGlzLmZpbHRlcihiKV06W3RoaXNdLG09YSxrLGwsbixwLHIsRjtpZighZHx8bnVsbCE9Yilmb3IoO2UubGVuZ3RoOylmb3Ioaz1lLnNoaWZ0KCksXG5sPTAsbj1rLmxlbmd0aDtsPG47bCsrKWZvcihwPXooa1tsXSksbT9wLnRyaWdnZXJIYW5kbGVyKFwiJGRlc3Ryb3lcIik6bT0hbSxyPTAscD0oRj1wLmNoaWxkcmVuKCkpLmxlbmd0aDtyPHA7cisrKWUucHVzaChDYShGW3JdKSk7cmV0dXJuIGcuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBnPUNhLmZuW2JdLGc9Zy4kb3JpZ2luYWx8fGc7ZS4kb3JpZ2luYWw9ZztDYS5mbltiXT1lfWZ1bmN0aW9uIE8oYil7aWYoYiBpbnN0YW5jZW9mIE8pcmV0dXJuIGI7dyhiKSYmKGI9WihiKSk7aWYoISh0aGlzIGluc3RhbmNlb2YgTykpe2lmKHcoYikmJlwiPFwiIT1iLmNoYXJBdCgwKSl0aHJvdyB3YihcIm5vc2VsXCIpO3JldHVybiBuZXcgTyhiKX1pZih3KGIpKXt2YXIgYT1SLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YS5pbm5lckhUTUw9XCI8ZGl2PiYjMTYwOzwvZGl2PlwiK2I7YS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO3hiKHRoaXMsYS5jaGlsZE5vZGVzKTt6KFIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKS5hcHBlbmQodGhpcyl9ZWxzZSB4Yih0aGlzLFxuYil9ZnVuY3Rpb24geWIoYil7cmV0dXJuIGIuY2xvbmVOb2RlKCEwKX1mdW5jdGlvbiBEYShiKXskYihiKTt2YXIgYT0wO2ZvcihiPWIuY2hpbGROb2Rlc3x8W107YTxiLmxlbmd0aDthKyspRGEoYlthXSl9ZnVuY3Rpb24gYWMoYixhLGMsZCl7aWYoRChkKSl0aHJvdyB3YihcIm9mZmFyZ3NcIik7dmFyIGU9amEoYixcImV2ZW50c1wiKTtqYShiLFwiaGFuZGxlXCIpJiYodShhKT9xKGUsZnVuY3Rpb24oYSxjKXt6YihiLGMsYSk7ZGVsZXRlIGVbY119KTpxKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe3UoYyk/KHpiKGIsYSxlW2FdKSxkZWxldGUgZVthXSk6TWEoZVthXXx8W10sYyl9KSl9ZnVuY3Rpb24gJGIoYixhKXt2YXIgYz1iW2RiXSxkPVJhW2NdO2QmJihhP2RlbGV0ZSBSYVtjXS5kYXRhW2FdOihkLmhhbmRsZSYmKGQuZXZlbnRzLiRkZXN0cm95JiZkLmhhbmRsZSh7fSxcIiRkZXN0cm95XCIpLGFjKGIpKSxkZWxldGUgUmFbY10sYltkYl09cykpfWZ1bmN0aW9uIGphKGIsYSxjKXt2YXIgZD1cbmJbZGJdLGQ9UmFbZHx8LTFdO2lmKEQoYykpZHx8KGJbZGJdPWQ9KytYYyxkPVJhW2RdPXt9KSxkW2FdPWM7ZWxzZSByZXR1cm4gZCYmZFthXX1mdW5jdGlvbiBiYyhiLGEsYyl7dmFyIGQ9amEoYixcImRhdGFcIiksZT1EKGMpLGc9IWUmJkQoYSksZj1nJiYhVyhhKTtkfHxmfHxqYShiLFwiZGF0YVwiLGQ9e30pO2lmKGUpZFthXT1jO2Vsc2UgaWYoZyl7aWYoZilyZXR1cm4gZCYmZFthXTt5KGQsYSl9ZWxzZSByZXR1cm4gZH1mdW5jdGlvbiBBYihiLGEpe3JldHVybiBiLmdldEF0dHJpYnV0ZT8tMTwoXCIgXCIrKGIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLFwiIFwiKS5pbmRleE9mKFwiIFwiK2ErXCIgXCIpOiExfWZ1bmN0aW9uIEJiKGIsYSl7YSYmYi5zZXRBdHRyaWJ1dGUmJnEoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7Yi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFooKFwiIFwiKyhiLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcblwiIFwiKS5yZXBsYWNlKFwiIFwiK1ooYSkrXCIgXCIsXCIgXCIpKSl9KX1mdW5jdGlvbiBDYihiLGEpe2lmKGEmJmIuc2V0QXR0cmlidXRlKXt2YXIgYz0oXCIgXCIrKGIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLFwiIFwiKTtxKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe2E9WihhKTstMT09PWMuaW5kZXhPZihcIiBcIithK1wiIFwiKSYmKGMrPWErXCIgXCIpfSk7Yi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFooYykpfX1mdW5jdGlvbiB4YihiLGEpe2lmKGEpe2E9YS5ub2RlTmFtZXx8IUQoYS5sZW5ndGgpfHx6YShhKT9bYV06YTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliLnB1c2goYVtjXSl9fWZ1bmN0aW9uIGNjKGIsYSl7cmV0dXJuIGViKGIsXCIkXCIrKGF8fFwibmdDb250cm9sbGVyXCIpK1wiQ29udHJvbGxlclwiKX1mdW5jdGlvbiBlYihiLGEsYyl7Yj16KGIpOzk9PWJbMF0ubm9kZVR5cGUmJihiPWIuZmluZChcImh0bWxcIikpO2ZvcihhPUwoYSk/YTpbYV07Yi5sZW5ndGg7KXtmb3IodmFyIGQ9XG4wLGU9YS5sZW5ndGg7ZDxlO2QrKylpZigoYz1iLmRhdGEoYVtkXSkpIT09cylyZXR1cm4gYztiPWIucGFyZW50KCl9fWZ1bmN0aW9uIGRjKGIpe2Zvcih2YXIgYT0wLGM9Yi5jaGlsZE5vZGVzO2E8Yy5sZW5ndGg7YSsrKURhKGNbYV0pO2Zvcig7Yi5maXJzdENoaWxkOyliLnJlbW92ZUNoaWxkKGIuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gZWMoYixhKXt2YXIgYz1mYlthLnRvTG93ZXJDYXNlKCldO3JldHVybiBjJiZmY1tiLm5vZGVOYW1lXSYmY31mdW5jdGlvbiBZYyhiLGEpe3ZhciBjPWZ1bmN0aW9uKGMsZSl7Yy5wcmV2ZW50RGVmYXVsdHx8KGMucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtjLnJldHVyblZhbHVlPSExfSk7Yy5zdG9wUHJvcGFnYXRpb258fChjLnN0b3BQcm9wYWdhdGlvbj1mdW5jdGlvbigpe2MuY2FuY2VsQnViYmxlPSEwfSk7Yy50YXJnZXR8fChjLnRhcmdldD1jLnNyY0VsZW1lbnR8fFIpO2lmKHUoYy5kZWZhdWx0UHJldmVudGVkKSl7dmFyIGc9Yy5wcmV2ZW50RGVmYXVsdDtcbmMucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtjLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7Zy5jYWxsKGMpfTtjLmRlZmF1bHRQcmV2ZW50ZWQ9ITF9Yy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gYy5kZWZhdWx0UHJldmVudGVkfHwhMT09PWMucmV0dXJuVmFsdWV9O3ZhciBmPVJiKGFbZXx8Yy50eXBlXXx8W10pO3EoZixmdW5jdGlvbihhKXthLmNhbGwoYixjKX0pOzg+PU4/KGMucHJldmVudERlZmF1bHQ9bnVsbCxjLnN0b3BQcm9wYWdhdGlvbj1udWxsLGMuaXNEZWZhdWx0UHJldmVudGVkPW51bGwpOihkZWxldGUgYy5wcmV2ZW50RGVmYXVsdCxkZWxldGUgYy5zdG9wUHJvcGFnYXRpb24sZGVsZXRlIGMuaXNEZWZhdWx0UHJldmVudGVkKX07Yy5lbGVtPWI7cmV0dXJuIGN9ZnVuY3Rpb24gRWEoYil7dmFyIGE9dHlwZW9mIGIsYztcIm9iamVjdFwiPT1hJiZudWxsIT09Yj9cImZ1bmN0aW9uXCI9PXR5cGVvZihjPWIuJCRoYXNoS2V5KT9jPWIuJCRoYXNoS2V5KCk6Yz09PVxucyYmKGM9Yi4kJGhhc2hLZXk9WmEoKSk6Yz1iO3JldHVybiBhK1wiOlwiK2N9ZnVuY3Rpb24gU2EoYil7cShiLHRoaXMucHV0LHRoaXMpfWZ1bmN0aW9uIGdjKGIpe3ZhciBhLGM7XCJmdW5jdGlvblwiPT10eXBlb2YgYj8oYT1iLiRpbmplY3QpfHwoYT1bXSxiLmxlbmd0aCYmKGM9Yi50b1N0cmluZygpLnJlcGxhY2UoWmMsXCJcIiksYz1jLm1hdGNoKCRjKSxxKGNbMV0uc3BsaXQoYWQpLGZ1bmN0aW9uKGIpe2IucmVwbGFjZShiZCxmdW5jdGlvbihiLGMsZCl7YS5wdXNoKGQpfSl9KSksYi4kaW5qZWN0PWEpOkwoYik/KGM9Yi5sZW5ndGgtMSxQYShiW2NdLFwiZm5cIiksYT1iLnNsaWNlKDAsYykpOlBhKGIsXCJmblwiLCEwKTtyZXR1cm4gYX1mdW5jdGlvbiBZYihiKXtmdW5jdGlvbiBhKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe2lmKFcoYikpcShiLE9iKGEpKTtlbHNlIHJldHVybiBhKGIsYyl9fWZ1bmN0aW9uIGMoYSxiKXt3YShhLFwic2VydmljZVwiKTtpZihNKGIpfHxMKGIpKWI9bi5pbnN0YW50aWF0ZShiKTtcbmlmKCFiLiRnZXQpdGhyb3cgVGEoXCJwZ2V0XCIsYSk7cmV0dXJuIGxbYStoXT1ifWZ1bmN0aW9uIGQoYSxiKXtyZXR1cm4gYyhhLHskZ2V0OmJ9KX1mdW5jdGlvbiBlKGEpe3ZhciBiPVtdLGMsZCxnLGg7cShhLGZ1bmN0aW9uKGEpe2lmKCFrLmdldChhKSl7ay5wdXQoYSwhMCk7dHJ5e2lmKHcoYSkpZm9yKGM9VWEoYSksYj1iLmNvbmNhdChlKGMucmVxdWlyZXMpKS5jb25jYXQoYy5fcnVuQmxvY2tzKSxkPWMuX2ludm9rZVF1ZXVlLGc9MCxoPWQubGVuZ3RoO2c8aDtnKyspe3ZhciBmPWRbZ10sbT1uLmdldChmWzBdKTttW2ZbMV1dLmFwcGx5KG0sZlsyXSl9ZWxzZSBNKGEpP2IucHVzaChuLmludm9rZShhKSk6TChhKT9iLnB1c2gobi5pbnZva2UoYSkpOlBhKGEsXCJtb2R1bGVcIil9Y2F0Y2gocil7dGhyb3cgTChhKSYmKGE9YVthLmxlbmd0aC0xXSksci5tZXNzYWdlJiYoci5zdGFjayYmLTE9PXIuc3RhY2suaW5kZXhPZihyLm1lc3NhZ2UpKSYmKHI9ci5tZXNzYWdlK1wiXFxuXCIrci5zdGFjayksXG5UYShcIm1vZHVsZXJyXCIsYSxyLnN0YWNrfHxyLm1lc3NhZ2V8fHIpO319fSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZyhhLGIpe2Z1bmN0aW9uIGMoZCl7aWYoYS5oYXNPd25Qcm9wZXJ0eShkKSl7aWYoYVtkXT09PWYpdGhyb3cgVGEoXCJjZGVwXCIsbS5qb2luKFwiIDwtIFwiKSk7cmV0dXJuIGFbZF19dHJ5e3JldHVybiBtLnVuc2hpZnQoZCksYVtkXT1mLGFbZF09YihkKX1jYXRjaChlKXt0aHJvdyBhW2RdPT09ZiYmZGVsZXRlIGFbZF0sZTt9ZmluYWxseXttLnNoaWZ0KCl9fWZ1bmN0aW9uIGQoYSxiLGUpe3ZhciBnPVtdLGg9Z2MoYSksZixtLGs7bT0wO2ZvcihmPWgubGVuZ3RoO208ZjttKyspe2s9aFttXTtpZihcInN0cmluZ1wiIT09dHlwZW9mIGspdGhyb3cgVGEoXCJpdGtuXCIsayk7Zy5wdXNoKGUmJmUuaGFzT3duUHJvcGVydHkoayk/ZVtrXTpjKGspKX1hLiRpbmplY3R8fChhPWFbZl0pO3JldHVybiBhLmFwcGx5KGIsZyl9cmV0dXJue2ludm9rZTpkLGluc3RhbnRpYXRlOmZ1bmN0aW9uKGEsXG5iKXt2YXIgYz1mdW5jdGlvbigpe30sZTtjLnByb3RvdHlwZT0oTChhKT9hW2EubGVuZ3RoLTFdOmEpLnByb3RvdHlwZTtjPW5ldyBjO2U9ZChhLGMsYik7cmV0dXJuIFcoZSl8fE0oZSk/ZTpjfSxnZXQ6Yyxhbm5vdGF0ZTpnYyxoYXM6ZnVuY3Rpb24oYil7cmV0dXJuIGwuaGFzT3duUHJvcGVydHkoYitoKXx8YS5oYXNPd25Qcm9wZXJ0eShiKX19fXZhciBmPXt9LGg9XCJQcm92aWRlclwiLG09W10saz1uZXcgU2EsbD17JHByb3ZpZGU6e3Byb3ZpZGVyOmEoYyksZmFjdG9yeTphKGQpLHNlcnZpY2U6YShmdW5jdGlvbihhLGIpe3JldHVybiBkKGEsW1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5zdGFudGlhdGUoYil9XSl9KSx2YWx1ZTphKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYSxZKGIpKX0pLGNvbnN0YW50OmEoZnVuY3Rpb24oYSxiKXt3YShhLFwiY29uc3RhbnRcIik7bFthXT1iO3BbYV09Yn0pLGRlY29yYXRvcjpmdW5jdGlvbihhLGIpe3ZhciBjPW4uZ2V0KGEraCksXG5kPWMuJGdldDtjLiRnZXQ9ZnVuY3Rpb24oKXt2YXIgYT1yLmludm9rZShkLGMpO3JldHVybiByLmludm9rZShiLG51bGwseyRkZWxlZ2F0ZTphfSl9fX19LG49bC4kaW5qZWN0b3I9ZyhsLGZ1bmN0aW9uKCl7dGhyb3cgVGEoXCJ1bnByXCIsbS5qb2luKFwiIDwtIFwiKSk7fSkscD17fSxyPXAuJGluamVjdG9yPWcocCxmdW5jdGlvbihhKXthPW4uZ2V0KGEraCk7cmV0dXJuIHIuaW52b2tlKGEuJGdldCxhKX0pO3EoZShiKSxmdW5jdGlvbihhKXtyLmludm9rZShhfHxFKX0pO3JldHVybiByfWZ1bmN0aW9uIGNkKCl7dmFyIGI9ITA7dGhpcy5kaXNhYmxlQXV0b1Njcm9sbGluZz1mdW5jdGlvbigpe2I9ITF9O3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkbG9jYXRpb25cIixcIiRyb290U2NvcGVcIixmdW5jdGlvbihhLGMsZCl7ZnVuY3Rpb24gZShhKXt2YXIgYj1udWxsO3EoYSxmdW5jdGlvbihhKXtifHxcImFcIiE9PXgoYS5ub2RlTmFtZSl8fChiPWEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZygpe3ZhciBiPVxuYy5oYXNoKCksZDtiPyhkPWYuZ2V0RWxlbWVudEJ5SWQoYikpP2Quc2Nyb2xsSW50b1ZpZXcoKTooZD1lKGYuZ2V0RWxlbWVudHNCeU5hbWUoYikpKT9kLnNjcm9sbEludG9WaWV3KCk6XCJ0b3BcIj09PWImJmEuc2Nyb2xsVG8oMCwwKTphLnNjcm9sbFRvKDAsMCl9dmFyIGY9YS5kb2N1bWVudDtiJiZkLiR3YXRjaChmdW5jdGlvbigpe3JldHVybiBjLmhhc2goKX0sZnVuY3Rpb24oKXtkLiRldmFsQXN5bmMoZyl9KTtyZXR1cm4gZ31dfWZ1bmN0aW9uIGRkKGIsYSxjLGQpe2Z1bmN0aW9uIGUoYSl7dHJ5e2EuYXBwbHkobnVsbCx1YS5jYWxsKGFyZ3VtZW50cywxKSl9ZmluYWxseXtpZihGLS0sMD09PUYpZm9yKDtBLmxlbmd0aDspdHJ5e0EucG9wKCkoKX1jYXRjaChiKXtjLmVycm9yKGIpfX19ZnVuY3Rpb24gZyhhLGIpeyhmdW5jdGlvbiBTKCl7cShILGZ1bmN0aW9uKGEpe2EoKX0pO3Y9YihTLGEpfSkoKX1mdW5jdGlvbiBmKCl7Qz1udWxsO1EhPWgudXJsKCkmJihRPWgudXJsKCkscShrYSxcbmZ1bmN0aW9uKGEpe2EoaC51cmwoKSl9KSl9dmFyIGg9dGhpcyxtPWFbMF0saz1iLmxvY2F0aW9uLGw9Yi5oaXN0b3J5LG49Yi5zZXRUaW1lb3V0LHA9Yi5jbGVhclRpbWVvdXQscj17fTtoLmlzTW9jaz0hMTt2YXIgRj0wLEE9W107aC4kJGNvbXBsZXRlT3V0c3RhbmRpbmdSZXF1ZXN0PWU7aC4kJGluY091dHN0YW5kaW5nUmVxdWVzdENvdW50PWZ1bmN0aW9uKCl7RisrfTtoLm5vdGlmeVdoZW5Ob091dHN0YW5kaW5nUmVxdWVzdHM9ZnVuY3Rpb24oYSl7cShILGZ1bmN0aW9uKGEpe2EoKX0pOzA9PT1GP2EoKTpBLnB1c2goYSl9O3ZhciBIPVtdLHY7aC5hZGRQb2xsRm49ZnVuY3Rpb24oYSl7dSh2KSYmZygxMDAsbik7SC5wdXNoKGEpO3JldHVybiBhfTt2YXIgUT1rLmhyZWYsSz1hLmZpbmQoXCJiYXNlXCIpLEM9bnVsbDtoLnVybD1mdW5jdGlvbihhLGMpe2shPT1iLmxvY2F0aW9uJiYoaz1iLmxvY2F0aW9uKTtsIT09Yi5oaXN0b3J5JiYobD1iLmhpc3RvcnkpO2lmKGEpe2lmKFEhPWEpcmV0dXJuIFE9XG5hLGQuaGlzdG9yeT9jP2wucmVwbGFjZVN0YXRlKG51bGwsXCJcIixhKToobC5wdXNoU3RhdGUobnVsbCxcIlwiLGEpLEsuYXR0cihcImhyZWZcIixLLmF0dHIoXCJocmVmXCIpKSk6KEM9YSxjP2sucmVwbGFjZShhKTprLmhyZWY9YSksaH1lbHNlIHJldHVybiBDfHxrLmhyZWYucmVwbGFjZSgvJTI3L2csXCInXCIpfTt2YXIga2E9W10sST0hMTtoLm9uVXJsQ2hhbmdlPWZ1bmN0aW9uKGEpe2lmKCFJKXtpZihkLmhpc3RvcnkpeihiKS5vbihcInBvcHN0YXRlXCIsZik7aWYoZC5oYXNoY2hhbmdlKXooYikub24oXCJoYXNoY2hhbmdlXCIsZik7ZWxzZSBoLmFkZFBvbGxGbihmKTtJPSEwfWthLnB1c2goYSk7cmV0dXJuIGF9O2guYmFzZUhyZWY9ZnVuY3Rpb24oKXt2YXIgYT1LLmF0dHIoXCJocmVmXCIpO3JldHVybiBhP2EucmVwbGFjZSgvXihodHRwcz9cXDopP1xcL1xcL1teXFwvXSovLFwiXCIpOlwiXCJ9O3ZhciBVPXt9LGJhPVwiXCIsYWE9aC5iYXNlSHJlZigpO2guY29va2llcz1mdW5jdGlvbihhLGIpe3ZhciBkLGUsZyxoO1xuaWYoYSliPT09cz9tLmNvb2tpZT1lc2NhcGUoYSkrXCI9O3BhdGg9XCIrYWErXCI7ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiOncoYikmJihkPShtLmNvb2tpZT1lc2NhcGUoYSkrXCI9XCIrZXNjYXBlKGIpK1wiO3BhdGg9XCIrYWEpLmxlbmd0aCsxLDQwOTY8ZCYmYy53YXJuKFwiQ29va2llICdcIithK1wiJyBwb3NzaWJseSBub3Qgc2V0IG9yIG92ZXJmbG93ZWQgYmVjYXVzZSBpdCB3YXMgdG9vIGxhcmdlIChcIitkK1wiID4gNDA5NiBieXRlcykhXCIpKTtlbHNle2lmKG0uY29va2llIT09YmEpZm9yKGJhPW0uY29va2llLGQ9YmEuc3BsaXQoXCI7IFwiKSxVPXt9LGc9MDtnPGQubGVuZ3RoO2crKyllPWRbZ10saD1lLmluZGV4T2YoXCI9XCIpLDA8aCYmKGE9dW5lc2NhcGUoZS5zdWJzdHJpbmcoMCxoKSksVVthXT09PXMmJihVW2FdPXVuZXNjYXBlKGUuc3Vic3RyaW5nKGgrMSkpKSk7cmV0dXJuIFV9fTtoLmRlZmVyPWZ1bmN0aW9uKGEsYil7dmFyIGM7RisrO2M9bihmdW5jdGlvbigpe2RlbGV0ZSByW2NdO1xuZShhKX0sYnx8MCk7cltjXT0hMDtyZXR1cm4gY307aC5kZWZlci5jYW5jZWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHJbYV0/KGRlbGV0ZSByW2FdLHAoYSksZShFKSwhMCk6ITF9fWZ1bmN0aW9uIGVkKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiRsb2dcIixcIiRzbmlmZmVyXCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihiLGEsYyxkKXtyZXR1cm4gbmV3IGRkKGIsZCxhLGMpfV19ZnVuY3Rpb24gZmQoKXt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCl7ZnVuY3Rpb24gZShhKXthIT1uJiYocD9wPT1hJiYocD1hLm4pOnA9YSxnKGEubixhLnApLGcoYSxuKSxuPWEsbi5uPW51bGwpfWZ1bmN0aW9uIGcoYSxiKXthIT1iJiYoYSYmKGEucD1iKSxiJiYoYi5uPWEpKX1pZihiIGluIGEpdGhyb3cgdChcIiRjYWNoZUZhY3RvcnlcIikoXCJpaWRcIixiKTt2YXIgZj0wLGg9eSh7fSxkLHtpZDpifSksbT17fSxrPWQmJmQuY2FwYWNpdHl8fE51bWJlci5NQVhfVkFMVUUsbD17fSxuPW51bGwscD1udWxsO1xucmV0dXJuIGFbYl09e3B1dDpmdW5jdGlvbihhLGIpe3ZhciBjPWxbYV18fChsW2FdPXtrZXk6YX0pO2UoYyk7aWYoIXUoYikpcmV0dXJuIGEgaW4gbXx8ZisrLG1bYV09YixmPmsmJnRoaXMucmVtb3ZlKHAua2V5KSxifSxnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bFthXTtpZihiKXJldHVybiBlKGIpLG1bYV19LHJlbW92ZTpmdW5jdGlvbihhKXt2YXIgYj1sW2FdO2ImJihiPT1uJiYobj1iLnApLGI9PXAmJihwPWIubiksZyhiLm4sYi5wKSxkZWxldGUgbFthXSxkZWxldGUgbVthXSxmLS0pfSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXttPXt9O2Y9MDtsPXt9O249cD1udWxsfSxkZXN0cm95OmZ1bmN0aW9uKCl7bD1oPW09bnVsbDtkZWxldGUgYVtiXX0saW5mbzpmdW5jdGlvbigpe3JldHVybiB5KHt9LGgse3NpemU6Zn0pfX19dmFyIGE9e307Yi5pbmZvPWZ1bmN0aW9uKCl7dmFyIGI9e307cShhLGZ1bmN0aW9uKGEsZSl7YltlXT1hLmluZm8oKX0pO3JldHVybiBifTtiLmdldD1mdW5jdGlvbihiKXtyZXR1cm4gYVtiXX07XG5yZXR1cm4gYn19ZnVuY3Rpb24gZ2QoKXt0aGlzLiRnZXQ9W1wiJGNhY2hlRmFjdG9yeVwiLGZ1bmN0aW9uKGIpe3JldHVybiBiKFwidGVtcGxhdGVzXCIpfV19ZnVuY3Rpb24gaWMoYixhKXt2YXIgYz17fSxkPVwiRGlyZWN0aXZlXCIsZT0vXlxccypkaXJlY3RpdmVcXDpcXHMqKFtcXGRcXHdcXC1fXSspXFxzKyguKikkLyxnPS8oKFtcXGRcXHdcXC1fXSspKD86XFw6KFteO10rKSk/Oz8pLyxmPS9eKG9uW2Etel0rfGZvcm1hY3Rpb24pJC87dGhpcy5kaXJlY3RpdmU9ZnVuY3Rpb24gbShhLGUpe3dhKGEsXCJkaXJlY3RpdmVcIik7dyhhKT8odGIoZSxcImRpcmVjdGl2ZUZhY3RvcnlcIiksYy5oYXNPd25Qcm9wZXJ0eShhKXx8KGNbYV09W10sYi5mYWN0b3J5KGErZCxbXCIkaW5qZWN0b3JcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsZnVuY3Rpb24oYixkKXt2YXIgZT1bXTtxKGNbYV0sZnVuY3Rpb24oYyxnKXt0cnl7dmFyIGY9Yi5pbnZva2UoYyk7TShmKT9mPXtjb21waWxlOlkoZil9OiFmLmNvbXBpbGUmJmYubGluayYmKGYuY29tcGlsZT1cblkoZi5saW5rKSk7Zi5wcmlvcml0eT1mLnByaW9yaXR5fHwwO2YuaW5kZXg9ZztmLm5hbWU9Zi5uYW1lfHxhO2YucmVxdWlyZT1mLnJlcXVpcmV8fGYuY29udHJvbGxlciYmZi5uYW1lO2YucmVzdHJpY3Q9Zi5yZXN0cmljdHx8XCJBXCI7ZS5wdXNoKGYpfWNhdGNoKG0pe2QobSl9fSk7cmV0dXJuIGV9XSkpLGNbYV0ucHVzaChlKSk6cShhLE9iKG0pKTtyZXR1cm4gdGhpc307dGhpcy5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYS5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdChiKSx0aGlzKTphLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KCl9O3RoaXMuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdChiKSx0aGlzKTphLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdCgpfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkaW50ZXJwb2xhdGVcIixcblwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRodHRwXCIsXCIkdGVtcGxhdGVDYWNoZVwiLFwiJHBhcnNlXCIsXCIkY29udHJvbGxlclwiLFwiJHJvb3RTY29wZVwiLFwiJGRvY3VtZW50XCIsXCIkc2NlXCIsXCIkYW5pbWF0ZVwiLFwiJCRzYW5pdGl6ZVVyaVwiLGZ1bmN0aW9uKGEsYixsLG4scCxyLEYsQSxILHYsUSxLKXtmdW5jdGlvbiBDKGEsYixjLGQsZSl7YSBpbnN0YW5jZW9mIHp8fChhPXooYSkpO3EoYSxmdW5jdGlvbihiLGMpezM9PWIubm9kZVR5cGUmJmIubm9kZVZhbHVlLm1hdGNoKC9cXFMrLykmJihhW2NdPXooYikud3JhcChcIjxzcGFuPjwvc3Bhbj5cIikucGFyZW50KClbMF0pfSk7dmFyIGc9SShhLGIsYSxjLGQsZSk7a2EoYSxcIm5nLXNjb3BlXCIpO3JldHVybiBmdW5jdGlvbihiLGMsZCl7dGIoYixcInNjb3BlXCIpO3ZhciBlPWM/RmEuY2xvbmUuY2FsbChhKTphO3EoZCxmdW5jdGlvbihhLGIpe2UuZGF0YShcIiRcIitiK1wiQ29udHJvbGxlclwiLGEpfSk7ZD0wO2Zvcih2YXIgZj1lLmxlbmd0aDtkPGY7ZCsrKXt2YXIgbT1cbmVbZF0ubm9kZVR5cGU7MSE9PW0mJjkhPT1tfHxlLmVxKGQpLmRhdGEoXCIkc2NvcGVcIixiKX1jJiZjKGUsYik7ZyYmZyhiLGUsZSk7cmV0dXJuIGV9fWZ1bmN0aW9uIGthKGEsYil7dHJ5e2EuYWRkQ2xhc3MoYil9Y2F0Y2goYyl7fX1mdW5jdGlvbiBJKGEsYixjLGQsZSxnKXtmdW5jdGlvbiBmKGEsYyxkLGUpe3ZhciBnLGsscixsLG4scCxKO2c9Yy5sZW5ndGg7dmFyIEY9QXJyYXkoZyk7Zm9yKG49MDtuPGc7bisrKUZbbl09Y1tuXTtKPW49MDtmb3IocD1tLmxlbmd0aDtuPHA7SisrKWs9RltKXSxjPW1bbisrXSxnPW1bbisrXSxyPXooayksYz8oYy5zY29wZT8obD1hLiRuZXcoKSxyLmRhdGEoXCIkc2NvcGVcIixsKSk6bD1hLChyPWMudHJhbnNjbHVkZSl8fCFlJiZiP2MoZyxsLGssZCxVKGEscnx8YikpOmMoZyxsLGssZCxlKSk6ZyYmZyhhLGsuY2hpbGROb2RlcyxzLGUpfWZvcih2YXIgbT1bXSxrLHIsbCxuLHA9MDtwPGEubGVuZ3RoO3ArKylrPW5ldyBEYixyPWJhKGFbcF0sW10sayxcbjA9PT1wP2Q6cyxlKSwoZz1yLmxlbmd0aD9nYShyLGFbcF0sayxiLGMsbnVsbCxbXSxbXSxnKTpudWxsKSYmZy5zY29wZSYma2EoeihhW3BdKSxcIm5nLXNjb3BlXCIpLGs9ZyYmZy50ZXJtaW5hbHx8IShsPWFbcF0uY2hpbGROb2Rlcyl8fCFsLmxlbmd0aD9udWxsOkkobCxnP2cudHJhbnNjbHVkZTpiKSxtLnB1c2goZyxrKSxuPW58fGd8fGssZz1udWxsO3JldHVybiBuP2Y6bnVsbH1mdW5jdGlvbiBVKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXt2YXIgZz0hMTtjfHwoYz1hLiRuZXcoKSxnPWMuJCR0cmFuc2NsdWRlZD0hMCk7ZD1iKGMsZCxlKTtpZihnKWQub24oXCIkZGVzdHJveVwiLGJiKGMsYy4kZGVzdHJveSkpO3JldHVybiBkfX1mdW5jdGlvbiBiYShhLGIsYyxkLGYpe3ZhciBtPWMuJGF0dHIsaztzd2l0Y2goYS5ub2RlVHlwZSl7Y2FzZSAxOlMoYixsYShHYShhKS50b0xvd2VyQ2FzZSgpKSxcIkVcIixkLGYpO3ZhciByLGwsbjtrPWEuYXR0cmlidXRlcztmb3IodmFyIHA9MCxGPVxuayYmay5sZW5ndGg7cDxGO3ArKyl7dmFyIEE9ITEsUT0hMTtyPWtbcF07aWYoIU58fDg8PU58fHIuc3BlY2lmaWVkKXtsPXIubmFtZTtuPWxhKGwpO1QudGVzdChuKSYmKGw9Y2Iobi5zdWJzdHIoNiksXCItXCIpKTt2YXIgQz1uLnJlcGxhY2UoLyhTdGFydHxFbmQpJC8sXCJcIik7bj09PUMrXCJTdGFydFwiJiYoQT1sLFE9bC5zdWJzdHIoMCxsLmxlbmd0aC01KStcImVuZFwiLGw9bC5zdWJzdHIoMCxsLmxlbmd0aC02KSk7bj1sYShsLnRvTG93ZXJDYXNlKCkpO21bbl09bDtjW25dPXI9WihyLnZhbHVlKTtlYyhhLG4pJiYoY1tuXT0hMCk7TyhhLGIscixuKTtTKGIsbixcIkFcIixkLGYsQSxRKX19YT1hLmNsYXNzTmFtZTtpZih3KGEpJiZcIlwiIT09YSlmb3IoO2s9Zy5leGVjKGEpOyluPWxhKGtbMl0pLFMoYixuLFwiQ1wiLGQsZikmJihjW25dPVooa1szXSkpLGE9YS5zdWJzdHIoay5pbmRleCtrWzBdLmxlbmd0aCk7YnJlYWs7Y2FzZSAzOnQoYixhLm5vZGVWYWx1ZSk7YnJlYWs7Y2FzZSA4OnRyeXtpZihrPVxuZS5leGVjKGEubm9kZVZhbHVlKSluPWxhKGtbMV0pLFMoYixuLFwiTVwiLGQsZikmJihjW25dPVooa1syXSkpfWNhdGNoKEgpe319Yi5zb3J0KHUpO3JldHVybiBifWZ1bmN0aW9uIGFhKGEsYixjKXt2YXIgZD1bXSxlPTA7aWYoYiYmYS5oYXNBdHRyaWJ1dGUmJmEuaGFzQXR0cmlidXRlKGIpKXtkb3tpZighYSl0aHJvdyBoYShcInV0ZXJkaXJcIixiLGMpOzE9PWEubm9kZVR5cGUmJihhLmhhc0F0dHJpYnV0ZShiKSYmZSsrLGEuaGFzQXR0cmlidXRlKGMpJiZlLS0pO2QucHVzaChhKTthPWEubmV4dFNpYmxpbmd9d2hpbGUoMDxlKX1lbHNlIGQucHVzaChhKTtyZXR1cm4geihkKX1mdW5jdGlvbiBCKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCxlLGcsZixrKXtlPWFhKGVbMF0sYixjKTtyZXR1cm4gYShkLGUsZyxmLGspfX1mdW5jdGlvbiBnYShhLGMsZCxlLGcsZixtLG4scCl7ZnVuY3Rpb24gQShhLGIsYyxkKXtpZihhKXtjJiYoYT1CKGEsYyxkKSk7YS5yZXF1aXJlPUcucmVxdWlyZTtpZihLPT09XG5HfHxHLiQkaXNvbGF0ZVNjb3BlKWE9amMoYSx7aXNvbGF0ZVNjb3BlOiEwfSk7bS5wdXNoKGEpfWlmKGIpe2MmJihiPUIoYixjLGQpKTtiLnJlcXVpcmU9Ry5yZXF1aXJlO2lmKEs9PT1HfHxHLiQkaXNvbGF0ZVNjb3BlKWI9amMoYix7aXNvbGF0ZVNjb3BlOiEwfSk7bi5wdXNoKGIpfX1mdW5jdGlvbiBRKGEsYixjKXt2YXIgZCxlPVwiZGF0YVwiLGc9ITE7aWYodyhhKSl7Zm9yKDtcIl5cIj09KGQ9YS5jaGFyQXQoMCkpfHxcIj9cIj09ZDspYT1hLnN1YnN0cigxKSxcIl5cIj09ZCYmKGU9XCJpbmhlcml0ZWREYXRhXCIpLGc9Z3x8XCI/XCI9PWQ7ZD1udWxsO2MmJlwiZGF0YVwiPT09ZSYmKGQ9Y1thXSk7ZD1kfHxiW2VdKFwiJFwiK2ErXCJDb250cm9sbGVyXCIpO2lmKCFkJiYhZyl0aHJvdyBoYShcImN0cmVxXCIsYSxjYSk7fWVsc2UgTChhKSYmKGQ9W10scShhLGZ1bmN0aW9uKGEpe2QucHVzaChRKGEsYixjKSl9KSk7cmV0dXJuIGR9ZnVuY3Rpb24gSChhLGUsZyxmLHApe2Z1bmN0aW9uIEEoYSxiKXt2YXIgYzsyPlxuYXJndW1lbnRzLmxlbmd0aCYmKGI9YSxhPXMpO3UmJihjPWFhKTtyZXR1cm4gcChhLGIsYyl9dmFyIEosQyx2LEksYmEsQixhYT17fSxnYjtKPWM9PT1nP2Q6UmIoZCxuZXcgRGIoeihnKSxkLiRhdHRyKSk7Qz1KLiQkZWxlbWVudDtpZihLKXt2YXIgdD0vXlxccyooW0A9Jl0pKFxcPz8pXFxzKihcXHcqKVxccyokLztmPXooZyk7Qj1lLiRuZXcoITApO2dhJiZnYT09PUsuJCRvcmlnaW5hbERpcmVjdGl2ZT9mLmRhdGEoXCIkaXNvbGF0ZVNjb3BlXCIsQik6Zi5kYXRhKFwiJGlzb2xhdGVTY29wZU5vVGVtcGxhdGVcIixCKTtrYShmLFwibmctaXNvbGF0ZS1zY29wZVwiKTtxKEsuc2NvcGUsZnVuY3Rpb24oYSxjKXt2YXIgZD1hLm1hdGNoKHQpfHxbXSxnPWRbM118fGMsZj1cIj9cIj09ZFsyXSxkPWRbMV0sbSxsLG4scDtCLiQkaXNvbGF0ZUJpbmRpbmdzW2NdPWQrZztzd2l0Y2goZCl7Y2FzZSBcIkBcIjpKLiRvYnNlcnZlKGcsZnVuY3Rpb24oYSl7QltjXT1hfSk7Si4kJG9ic2VydmVyc1tnXS4kJHNjb3BlPWU7XG5KW2ddJiYoQltjXT1iKEpbZ10pKGUpKTticmVhaztjYXNlIFwiPVwiOmlmKGYmJiFKW2ddKWJyZWFrO2w9cihKW2ddKTtwPWwubGl0ZXJhbD90YTpmdW5jdGlvbihhLGIpe3JldHVybiBhPT09Yn07bj1sLmFzc2lnbnx8ZnVuY3Rpb24oKXttPUJbY109bChlKTt0aHJvdyBoYShcIm5vbmFzc2lnblwiLEpbZ10sSy5uYW1lKTt9O209QltjXT1sKGUpO0IuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGE9bChlKTtwKGEsQltjXSl8fChwKGEsbSk/bihlLGE9QltjXSk6QltjXT1hKTtyZXR1cm4gbT1hfSxudWxsLGwubGl0ZXJhbCk7YnJlYWs7Y2FzZSBcIiZcIjpsPXIoSltnXSk7QltjXT1mdW5jdGlvbihhKXtyZXR1cm4gbChlLGEpfTticmVhaztkZWZhdWx0OnRocm93IGhhKFwiaXNjcFwiLEsubmFtZSxjLGEpO319KX1nYj1wJiZBO1UmJnEoVSxmdW5jdGlvbihhKXt2YXIgYj17JHNjb3BlOmE9PT1LfHxhLiQkaXNvbGF0ZVNjb3BlP0I6ZSwkZWxlbWVudDpDLCRhdHRyczpKLCR0cmFuc2NsdWRlOmdifSxjO1xuYmE9YS5jb250cm9sbGVyO1wiQFwiPT1iYSYmKGJhPUpbYS5uYW1lXSk7Yz1GKGJhLGIpO2FhW2EubmFtZV09Yzt1fHxDLmRhdGEoXCIkXCIrYS5uYW1lK1wiQ29udHJvbGxlclwiLGMpO2EuY29udHJvbGxlckFzJiYoYi4kc2NvcGVbYS5jb250cm9sbGVyQXNdPWMpfSk7Zj0wO2Zvcih2PW0ubGVuZ3RoO2Y8djtmKyspdHJ5e0k9bVtmXSxJKEkuaXNvbGF0ZVNjb3BlP0I6ZSxDLEosSS5yZXF1aXJlJiZRKEkucmVxdWlyZSxDLGFhKSxnYil9Y2F0Y2goUyl7bChTLGZhKEMpKX1mPWU7SyYmKEsudGVtcGxhdGV8fG51bGw9PT1LLnRlbXBsYXRlVXJsKSYmKGY9Qik7YSYmYShmLGcuY2hpbGROb2RlcyxzLHApO2ZvcihmPW4ubGVuZ3RoLTE7MDw9ZjtmLS0pdHJ5e0k9bltmXSxJKEkuaXNvbGF0ZVNjb3BlP0I6ZSxDLEosSS5yZXF1aXJlJiZRKEkucmVxdWlyZSxDLGFhKSxnYil9Y2F0Y2goRyl7bChHLGZhKEMpKX19cD1wfHx7fTt2YXIgdj0tTnVtYmVyLk1BWF9WQUxVRSxJLFU9cC5jb250cm9sbGVyRGlyZWN0aXZlcyxcbks9cC5uZXdJc29sYXRlU2NvcGVEaXJlY3RpdmUsZ2E9cC50ZW1wbGF0ZURpcmVjdGl2ZTtwPXAubm9uVGxiVHJhbnNjbHVkZURpcmVjdGl2ZTtmb3IodmFyIFM9ITEsdT0hMSx5PWQuJCRlbGVtZW50PXooYyksRyxjYSx0LFA9ZSxPLE49MCxtYT1hLmxlbmd0aDtOPG1hO04rKyl7Rz1hW05dO3ZhciBWYT1HLiQkc3RhcnQsVD1HLiQkZW5kO1ZhJiYoeT1hYShjLFZhLFQpKTt0PXM7aWYodj5HLnByaW9yaXR5KWJyZWFrO2lmKHQ9Ry5zY29wZSlJPUl8fEcsRy50ZW1wbGF0ZVVybHx8KHgoXCJuZXcvaXNvbGF0ZWQgc2NvcGVcIixLLEcseSksVyh0KSYmKEs9RykpO2NhPUcubmFtZTshRy50ZW1wbGF0ZVVybCYmRy5jb250cm9sbGVyJiYodD1HLmNvbnRyb2xsZXIsVT1VfHx7fSx4KFwiJ1wiK2NhK1wiJyBjb250cm9sbGVyXCIsVVtjYV0sRyx5KSxVW2NhXT1HKTtpZih0PUcudHJhbnNjbHVkZSlTPSEwLEcuJCR0bGJ8fCh4KFwidHJhbnNjbHVzaW9uXCIscCxHLHkpLHA9RyksXCJlbGVtZW50XCI9PXQ/KHU9XG4hMCx2PUcucHJpb3JpdHksdD1hYShjLFZhLFQpLHk9ZC4kJGVsZW1lbnQ9eihSLmNyZWF0ZUNvbW1lbnQoXCIgXCIrY2ErXCI6IFwiK2RbY2FdK1wiIFwiKSksYz15WzBdLGhiKGcseih1YS5jYWxsKHQsMCkpLGMpLFA9Qyh0LGUsdixmJiZmLm5hbWUse25vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmU6cH0pKToodD16KHliKGMpKS5jb250ZW50cygpLHkuZW1wdHkoKSxQPUModCxlKSk7aWYoRy50ZW1wbGF0ZSlpZih4KFwidGVtcGxhdGVcIixnYSxHLHkpLGdhPUcsdD1NKEcudGVtcGxhdGUpP0cudGVtcGxhdGUoeSxkKTpHLnRlbXBsYXRlLHQ9Vih0KSxHLnJlcGxhY2Upe2Y9Rzt0PXooXCI8ZGl2PlwiK1oodCkrXCI8L2Rpdj5cIikuY29udGVudHMoKTtjPXRbMF07aWYoMSE9dC5sZW5ndGh8fDEhPT1jLm5vZGVUeXBlKXRocm93IGhhKFwidHBscnRcIixjYSxcIlwiKTtoYihnLHksYyk7bWE9eyRhdHRyOnt9fTt0PWJhKGMsW10sbWEpO3ZhciBYPWEuc3BsaWNlKE4rMSxhLmxlbmd0aC0oTisxKSk7SyYmaGModCk7XG5hPWEuY29uY2F0KHQpLmNvbmNhdChYKTtEKGQsbWEpO21hPWEubGVuZ3RofWVsc2UgeS5odG1sKHQpO2lmKEcudGVtcGxhdGVVcmwpeChcInRlbXBsYXRlXCIsZ2EsRyx5KSxnYT1HLEcucmVwbGFjZSYmKGY9RyksSD1FKGEuc3BsaWNlKE4sYS5sZW5ndGgtTikseSxkLGcsUCxtLG4se2NvbnRyb2xsZXJEaXJlY3RpdmVzOlUsbmV3SXNvbGF0ZVNjb3BlRGlyZWN0aXZlOkssdGVtcGxhdGVEaXJlY3RpdmU6Z2Esbm9uVGxiVHJhbnNjbHVkZURpcmVjdGl2ZTpwfSksbWE9YS5sZW5ndGg7ZWxzZSBpZihHLmNvbXBpbGUpdHJ5e089Ry5jb21waWxlKHksZCxQKSxNKE8pP0EobnVsbCxPLFZhLFQpOk8mJkEoTy5wcmUsTy5wb3N0LFZhLFQpfWNhdGNoKFkpe2woWSxmYSh5KSl9Ry50ZXJtaW5hbCYmKEgudGVybWluYWw9ITAsdj1NYXRoLm1heCh2LEcucHJpb3JpdHkpKX1ILnNjb3BlPUkmJiEwPT09SS5zY29wZTtILnRyYW5zY2x1ZGU9UyYmUDtyZXR1cm4gSH1mdW5jdGlvbiBoYyhhKXtmb3IodmFyIGI9XG4wLGM9YS5sZW5ndGg7YjxjO2IrKylhW2JdPVFiKGFbYl0seyQkaXNvbGF0ZVNjb3BlOiEwfSl9ZnVuY3Rpb24gUyhiLGUsZyxmLGsscixuKXtpZihlPT09aylyZXR1cm4gbnVsbDtrPW51bGw7aWYoYy5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIHA7ZT1hLmdldChlK2QpO2Zvcih2YXIgRj0wLEE9ZS5sZW5ndGg7RjxBO0YrKyl0cnl7cD1lW0ZdLChmPT09c3x8Zj5wLnByaW9yaXR5KSYmLTEhPXAucmVzdHJpY3QuaW5kZXhPZihnKSYmKHImJihwPVFiKHAseyQkc3RhcnQ6ciwkJGVuZDpufSkpLGIucHVzaChwKSxrPXApfWNhdGNoKFEpe2woUSl9fXJldHVybiBrfWZ1bmN0aW9uIEQoYSxiKXt2YXIgYz1iLiRhdHRyLGQ9YS4kYXR0cixlPWEuJCRlbGVtZW50O3EoYSxmdW5jdGlvbihkLGUpe1wiJFwiIT1lLmNoYXJBdCgwKSYmKGJbZV0mJihkKz0oXCJzdHlsZVwiPT09ZT9cIjtcIjpcIiBcIikrYltlXSksYS4kc2V0KGUsZCwhMCxjW2VdKSl9KTtxKGIsZnVuY3Rpb24oYixnKXtcImNsYXNzXCI9PWc/KGthKGUsXG5iKSxhW1wiY2xhc3NcIl09KGFbXCJjbGFzc1wiXT9hW1wiY2xhc3NcIl0rXCIgXCI6XCJcIikrYik6XCJzdHlsZVwiPT1nPyhlLmF0dHIoXCJzdHlsZVwiLGUuYXR0cihcInN0eWxlXCIpK1wiO1wiK2IpLGEuc3R5bGU9KGEuc3R5bGU/YS5zdHlsZStcIjtcIjpcIlwiKStiKTpcIiRcIj09Zy5jaGFyQXQoMCl8fGEuaGFzT3duUHJvcGVydHkoZyl8fChhW2ddPWIsZFtnXT1jW2ddKX0pfWZ1bmN0aW9uIEUoYSxiLGMsZCxlLGcsZixrKXt2YXIgbT1bXSxyLGwsRj1iWzBdLEE9YS5zaGlmdCgpLFE9eSh7fSxBLHt0ZW1wbGF0ZVVybDpudWxsLHRyYW5zY2x1ZGU6bnVsbCxyZXBsYWNlOm51bGwsJCRvcmlnaW5hbERpcmVjdGl2ZTpBfSksQz1NKEEudGVtcGxhdGVVcmwpP0EudGVtcGxhdGVVcmwoYixjKTpBLnRlbXBsYXRlVXJsO2IuZW1wdHkoKTtuLmdldCh2LmdldFRydXN0ZWRSZXNvdXJjZVVybChDKSx7Y2FjaGU6cH0pLnN1Y2Nlc3MoZnVuY3Rpb24obil7dmFyIHAsSDtuPVYobik7aWYoQS5yZXBsYWNlKXtuPXooXCI8ZGl2PlwiK1xuWihuKStcIjwvZGl2PlwiKS5jb250ZW50cygpO3A9blswXTtpZigxIT1uLmxlbmd0aHx8MSE9PXAubm9kZVR5cGUpdGhyb3cgaGEoXCJ0cGxydFwiLEEubmFtZSxDKTtuPXskYXR0cjp7fX07aGIoZCxiLHApO3ZhciB2PWJhKHAsW10sbik7VyhBLnNjb3BlKSYmaGModik7YT12LmNvbmNhdChhKTtEKGMsbil9ZWxzZSBwPUYsYi5odG1sKG4pO2EudW5zaGlmdChRKTtyPWdhKGEscCxjLGUsYixBLGcsZixrKTtxKGQsZnVuY3Rpb24oYSxjKXthPT1wJiYoZFtjXT1iWzBdKX0pO2ZvcihsPUkoYlswXS5jaGlsZE5vZGVzLGUpO20ubGVuZ3RoOyl7bj1tLnNoaWZ0KCk7SD1tLnNoaWZ0KCk7dmFyIEs9bS5zaGlmdCgpLEI9bS5zaGlmdCgpLHY9YlswXTtpZihIIT09Ril7dmFyIGFhPUguY2xhc3NOYW1lLHY9eWIocCk7aGIoSyx6KEgpLHYpO2thKHoodiksYWEpfUg9ci50cmFuc2NsdWRlP1UobixyLnRyYW5zY2x1ZGUpOkI7cihsLG4sdixkLEgpfW09bnVsbH0pLmVycm9yKGZ1bmN0aW9uKGEsYixjLFxuZCl7dGhyb3cgaGEoXCJ0cGxvYWRcIixkLnVybCk7fSk7cmV0dXJuIGZ1bmN0aW9uKGEsYixjLGQsZSl7bT8obS5wdXNoKGIpLG0ucHVzaChjKSxtLnB1c2goZCksbS5wdXNoKGUpKTpyKGwsYixjLGQsZSl9fWZ1bmN0aW9uIHUoYSxiKXt2YXIgYz1iLnByaW9yaXR5LWEucHJpb3JpdHk7cmV0dXJuIDAhPT1jP2M6YS5uYW1lIT09Yi5uYW1lP2EubmFtZTxiLm5hbWU/LTE6MTphLmluZGV4LWIuaW5kZXh9ZnVuY3Rpb24geChhLGIsYyxkKXtpZihiKXRocm93IGhhKFwibXVsdGlkaXJcIixiLm5hbWUsYy5uYW1lLGEsZmEoZCkpO31mdW5jdGlvbiB0KGEsYyl7dmFyIGQ9YihjLCEwKTtkJiZhLnB1c2goe3ByaW9yaXR5OjAsY29tcGlsZTpZKGZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5wYXJlbnQoKSxlPWMuZGF0YShcIiRiaW5kaW5nXCIpfHxbXTtlLnB1c2goZCk7a2EoYy5kYXRhKFwiJGJpbmRpbmdcIixlKSxcIm5nLWJpbmRpbmdcIik7YS4kd2F0Y2goZCxmdW5jdGlvbihhKXtiWzBdLm5vZGVWYWx1ZT1hfSl9KX0pfVxuZnVuY3Rpb24gUChhLGIpe2lmKFwic3JjZG9jXCI9PWIpcmV0dXJuIHYuSFRNTDt2YXIgYz1HYShhKTtpZihcInhsaW5rSHJlZlwiPT1ifHxcIkZPUk1cIj09YyYmXCJhY3Rpb25cIj09Ynx8XCJJTUdcIiE9YyYmKFwic3JjXCI9PWJ8fFwibmdTcmNcIj09YikpcmV0dXJuIHYuUkVTT1VSQ0VfVVJMfWZ1bmN0aW9uIE8oYSxjLGQsZSl7dmFyIGc9YihkLCEwKTtpZihnKXtpZihcIm11bHRpcGxlXCI9PT1lJiZcIlNFTEVDVFwiPT09R2EoYSkpdGhyb3cgaGEoXCJzZWxtdWx0aVwiLGZhKGEpKTtjLnB1c2goe3ByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihjLGQsbSl7ZD1tLiQkb2JzZXJ2ZXJzfHwobS4kJG9ic2VydmVycz17fSk7aWYoZi50ZXN0KGUpKXRocm93IGhhKFwibm9kb21ldmVudHNcIik7aWYoZz1iKG1bZV0sITAsUChhLGUpKSltW2VdPWcoYyksKGRbZV18fChkW2VdPVtdKSkuJCRpbnRlcj0hMCwobS4kJG9ic2VydmVycyYmbS4kJG9ic2VydmVyc1tlXS4kJHNjb3BlfHxcbmMpLiR3YXRjaChnLGZ1bmN0aW9uKGEsYil7XCJjbGFzc1wiPT09ZSYmYSE9Yj9tLiR1cGRhdGVDbGFzcyhhLGIpOm0uJHNldChlLGEpfSl9fX19KX19ZnVuY3Rpb24gaGIoYSxiLGMpe3ZhciBkPWJbMF0sZT1iLmxlbmd0aCxnPWQucGFyZW50Tm9kZSxmLG07aWYoYSlmb3IoZj0wLG09YS5sZW5ndGg7ZjxtO2YrKylpZihhW2ZdPT1kKXthW2YrK109YzttPWYrZS0xO2Zvcih2YXIgaz1hLmxlbmd0aDtmPGs7ZisrLG0rKyltPGs/YVtmXT1hW21dOmRlbGV0ZSBhW2ZdO2EubGVuZ3RoLT1lLTE7YnJlYWt9ZyYmZy5yZXBsYWNlQ2hpbGQoYyxkKTthPVIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2EuYXBwZW5kQ2hpbGQoZCk7Y1t6LmV4cGFuZG9dPWRbei5leHBhbmRvXTtkPTE7Zm9yKGU9Yi5sZW5ndGg7ZDxlO2QrKylnPWJbZF0seihnKS5yZW1vdmUoKSxhLmFwcGVuZENoaWxkKGcpLGRlbGV0ZSBiW2RdO2JbMF09YztiLmxlbmd0aD0xfWZ1bmN0aW9uIGpjKGEsYil7cmV0dXJuIHkoZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShudWxsLFxuYXJndW1lbnRzKX0sYSxiKX12YXIgRGI9ZnVuY3Rpb24oYSxiKXt0aGlzLiQkZWxlbWVudD1hO3RoaXMuJGF0dHI9Ynx8e319O0RiLnByb3RvdHlwZT17JG5vcm1hbGl6ZTpsYSwkYWRkQ2xhc3M6ZnVuY3Rpb24oYSl7YSYmMDxhLmxlbmd0aCYmUS5hZGRDbGFzcyh0aGlzLiQkZWxlbWVudCxhKX0sJHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe2EmJjA8YS5sZW5ndGgmJlEucmVtb3ZlQ2xhc3ModGhpcy4kJGVsZW1lbnQsYSl9LCR1cGRhdGVDbGFzczpmdW5jdGlvbihhLGIpe3RoaXMuJHJlbW92ZUNsYXNzKGtjKGIsYSkpO3RoaXMuJGFkZENsYXNzKGtjKGEsYikpfSwkc2V0OmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWVjKHRoaXMuJCRlbGVtZW50WzBdLGEpO2UmJih0aGlzLiQkZWxlbWVudC5wcm9wKGEsYiksZD1lKTt0aGlzW2FdPWI7ZD90aGlzLiRhdHRyW2FdPWQ6KGQ9dGhpcy4kYXR0clthXSl8fCh0aGlzLiRhdHRyW2FdPWQ9Y2IoYSxcIi1cIikpO2U9R2EodGhpcy4kJGVsZW1lbnQpO1xuaWYoXCJBXCI9PT1lJiZcImhyZWZcIj09PWF8fFwiSU1HXCI9PT1lJiZcInNyY1wiPT09YSl0aGlzW2FdPWI9SyhiLFwic3JjXCI9PT1hKTshMSE9PWMmJihudWxsPT09Ynx8Yj09PXM/dGhpcy4kJGVsZW1lbnQucmVtb3ZlQXR0cihkKTp0aGlzLiQkZWxlbWVudC5hdHRyKGQsYikpOyhjPXRoaXMuJCRvYnNlcnZlcnMpJiZxKGNbYV0sZnVuY3Rpb24oYSl7dHJ5e2EoYil9Y2F0Y2goYyl7bChjKX19KX0sJG9ic2VydmU6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy4kJG9ic2VydmVyc3x8KGMuJCRvYnNlcnZlcnM9e30pLGU9ZFthXXx8KGRbYV09W10pO2UucHVzaChiKTtBLiRldmFsQXN5bmMoZnVuY3Rpb24oKXtlLiQkaW50ZXJ8fGIoY1thXSl9KTtyZXR1cm4gYn19O3ZhciBjYT1iLnN0YXJ0U3ltYm9sKCksbWE9Yi5lbmRTeW1ib2woKSxWPVwie3tcIj09Y2F8fFwifX1cIj09bWE/QWE6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvXFx7XFx7L2csY2EpLnJlcGxhY2UoL319L2csbWEpfSxUPS9ebmdBdHRyW0EtWl0vO1xucmV0dXJuIEN9XX1mdW5jdGlvbiBsYShiKXtyZXR1cm4gUWEoYi5yZXBsYWNlKGhkLFwiXCIpKX1mdW5jdGlvbiBrYyhiLGEpe3ZhciBjPVwiXCIsZD1iLnNwbGl0KC9cXHMrLyksZT1hLnNwbGl0KC9cXHMrLyksZz0wO2E6Zm9yKDtnPGQubGVuZ3RoO2crKyl7Zm9yKHZhciBmPWRbZ10saD0wO2g8ZS5sZW5ndGg7aCsrKWlmKGY9PWVbaF0pY29udGludWUgYTtjKz0oMDxjLmxlbmd0aD9cIiBcIjpcIlwiKStmfXJldHVybiBjfWZ1bmN0aW9uIGlkKCl7dmFyIGI9e30sYT0vXihcXFMrKShcXHMrYXNcXHMrKFxcdyspKT8kLzt0aGlzLnJlZ2lzdGVyPWZ1bmN0aW9uKGEsZCl7d2EoYSxcImNvbnRyb2xsZXJcIik7VyhhKT95KGIsYSk6YlthXT1kfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkd2luZG93XCIsZnVuY3Rpb24oYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxnKXt2YXIgZixoLG07dyhlKSYmKGY9ZS5tYXRjaChhKSxoPWZbMV0sbT1mWzNdLGU9Yi5oYXNPd25Qcm9wZXJ0eShoKT9iW2hdOlpiKGcuJHNjb3BlLGgsXG4hMCl8fFpiKGQsaCwhMCksUGEoZSxoLCEwKSk7Zj1jLmluc3RhbnRpYXRlKGUsZyk7aWYobSl7aWYoIWd8fFwib2JqZWN0XCIhPXR5cGVvZiBnLiRzY29wZSl0aHJvdyB0KFwiJGNvbnRyb2xsZXJcIikoXCJub3NjcFwiLGh8fGUubmFtZSxtKTtnLiRzY29wZVttXT1mfXJldHVybiBmfX1dfWZ1bmN0aW9uIGpkKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixmdW5jdGlvbihiKXtyZXR1cm4geihiLmRvY3VtZW50KX1dfWZ1bmN0aW9uIGtkKCl7dGhpcy4kZ2V0PVtcIiRsb2dcIixmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oYSxjKXtiLmVycm9yLmFwcGx5KGIsYXJndW1lbnRzKX19XX1mdW5jdGlvbiBsYyhiKXt2YXIgYT17fSxjLGQsZTtpZighYilyZXR1cm4gYTtxKGIuc3BsaXQoXCJcXG5cIiksZnVuY3Rpb24oYil7ZT1iLmluZGV4T2YoXCI6XCIpO2M9eChaKGIuc3Vic3RyKDAsZSkpKTtkPVooYi5zdWJzdHIoZSsxKSk7YyYmKGFbY109YVtjXT9hW2NdKyhcIiwgXCIrZCk6ZCl9KTtyZXR1cm4gYX1mdW5jdGlvbiBtYyhiKXt2YXIgYT1cblcoYik/YjpzO3JldHVybiBmdW5jdGlvbihjKXthfHwoYT1sYyhiKSk7cmV0dXJuIGM/YVt4KGMpXXx8bnVsbDphfX1mdW5jdGlvbiBuYyhiLGEsYyl7aWYoTShjKSlyZXR1cm4gYyhiLGEpO3EoYyxmdW5jdGlvbihjKXtiPWMoYixhKX0pO3JldHVybiBifWZ1bmN0aW9uIGxkKCl7dmFyIGI9L15cXHMqKFxcW3xcXHtbXlxce10pLyxhPS9bXFx9XFxdXVxccyokLyxjPS9eXFwpXFxdXFx9Jyw/XFxuLyxkPXtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04XCJ9LGU9dGhpcy5kZWZhdWx0cz17dHJhbnNmb3JtUmVzcG9uc2U6W2Z1bmN0aW9uKGQpe3coZCkmJihkPWQucmVwbGFjZShjLFwiXCIpLGIudGVzdChkKSYmYS50ZXN0KGQpJiYoZD1UYihkKSkpO3JldHVybiBkfV0sdHJhbnNmb3JtUmVxdWVzdDpbZnVuY3Rpb24oYSl7cmV0dXJuIFcoYSkmJlwiW29iamVjdCBGaWxlXVwiIT09TGEuY2FsbChhKT9wYShhKTphfV0saGVhZGVyczp7Y29tbW9uOntBY2NlcHQ6XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIn0sXG5wb3N0OiQoZCkscHV0OiQoZCkscGF0Y2g6JChkKX0seHNyZkNvb2tpZU5hbWU6XCJYU1JGLVRPS0VOXCIseHNyZkhlYWRlck5hbWU6XCJYLVhTUkYtVE9LRU5cIn0sZz10aGlzLmludGVyY2VwdG9ycz1bXSxmPXRoaXMucmVzcG9uc2VJbnRlcmNlcHRvcnM9W107dGhpcy4kZ2V0PVtcIiRodHRwQmFja2VuZFwiLFwiJGJyb3dzZXJcIixcIiRjYWNoZUZhY3RvcnlcIixcIiRyb290U2NvcGVcIixcIiRxXCIsXCIkaW5qZWN0b3JcIixmdW5jdGlvbihhLGIsYyxkLG4scCl7ZnVuY3Rpb24gcihhKXtmdW5jdGlvbiBjKGEpe3ZhciBiPXkoe30sYSx7ZGF0YTpuYyhhLmRhdGEsYS5oZWFkZXJzLGQudHJhbnNmb3JtUmVzcG9uc2UpfSk7cmV0dXJuIDIwMDw9YS5zdGF0dXMmJjMwMD5hLnN0YXR1cz9iOm4ucmVqZWN0KGIpfXZhciBkPXt0cmFuc2Zvcm1SZXF1ZXN0OmUudHJhbnNmb3JtUmVxdWVzdCx0cmFuc2Zvcm1SZXNwb25zZTplLnRyYW5zZm9ybVJlc3BvbnNlfSxnPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGM7XG5xKGEsZnVuY3Rpb24oYixkKXtNKGIpJiYoYz1iKCksbnVsbCE9Yz9hW2RdPWM6ZGVsZXRlIGFbZF0pfSl9dmFyIGM9ZS5oZWFkZXJzLGQ9eSh7fSxhLmhlYWRlcnMpLGcsZixjPXkoe30sYy5jb21tb24sY1t4KGEubWV0aG9kKV0pO2IoYyk7YihkKTthOmZvcihnIGluIGMpe2E9eChnKTtmb3IoZiBpbiBkKWlmKHgoZik9PT1hKWNvbnRpbnVlIGE7ZFtnXT1jW2ddfXJldHVybiBkfShhKTt5KGQsYSk7ZC5oZWFkZXJzPWc7ZC5tZXRob2Q9SGEoZC5tZXRob2QpOyhhPUViKGQudXJsKT9iLmNvb2tpZXMoKVtkLnhzcmZDb29raWVOYW1lfHxlLnhzcmZDb29raWVOYW1lXTpzKSYmKGdbZC54c3JmSGVhZGVyTmFtZXx8ZS54c3JmSGVhZGVyTmFtZV09YSk7dmFyIGY9W2Z1bmN0aW9uKGEpe2c9YS5oZWFkZXJzO3ZhciBiPW5jKGEuZGF0YSxtYyhnKSxhLnRyYW5zZm9ybVJlcXVlc3QpO3UoYS5kYXRhKSYmcShnLGZ1bmN0aW9uKGEsYil7XCJjb250ZW50LXR5cGVcIj09PXgoYikmJmRlbGV0ZSBnW2JdfSk7XG51KGEud2l0aENyZWRlbnRpYWxzKSYmIXUoZS53aXRoQ3JlZGVudGlhbHMpJiYoYS53aXRoQ3JlZGVudGlhbHM9ZS53aXRoQ3JlZGVudGlhbHMpO3JldHVybiBGKGEsYixnKS50aGVuKGMsYyl9LHNdLGs9bi53aGVuKGQpO2ZvcihxKHYsZnVuY3Rpb24oYSl7KGEucmVxdWVzdHx8YS5yZXF1ZXN0RXJyb3IpJiZmLnVuc2hpZnQoYS5yZXF1ZXN0LGEucmVxdWVzdEVycm9yKTsoYS5yZXNwb25zZXx8YS5yZXNwb25zZUVycm9yKSYmZi5wdXNoKGEucmVzcG9uc2UsYS5yZXNwb25zZUVycm9yKX0pO2YubGVuZ3RoOyl7YT1mLnNoaWZ0KCk7dmFyIGg9Zi5zaGlmdCgpLGs9ay50aGVuKGEsaCl9ay5zdWNjZXNzPWZ1bmN0aW9uKGEpe2sudGhlbihmdW5jdGlvbihiKXthKGIuZGF0YSxiLnN0YXR1cyxiLmhlYWRlcnMsZCl9KTtyZXR1cm4ga307ay5lcnJvcj1mdW5jdGlvbihhKXtrLnRoZW4obnVsbCxmdW5jdGlvbihiKXthKGIuZGF0YSxiLnN0YXR1cyxiLmhlYWRlcnMsZCl9KTtyZXR1cm4ga307XG5yZXR1cm4ga31mdW5jdGlvbiBGKGIsYyxnKXtmdW5jdGlvbiBmKGEsYixjKXt2JiYoMjAwPD1hJiYzMDA+YT92LnB1dChzLFthLGIsbGMoYyldKTp2LnJlbW92ZShzKSk7bShiLGEsYyk7ZC4kJHBoYXNlfHxkLiRhcHBseSgpfWZ1bmN0aW9uIG0oYSxjLGQpe2M9TWF0aC5tYXgoYywwKTsoMjAwPD1jJiYzMDA+Yz9wLnJlc29sdmU6cC5yZWplY3QpKHtkYXRhOmEsc3RhdHVzOmMsaGVhZGVyczptYyhkKSxjb25maWc6Yn0pfWZ1bmN0aW9uIGsoKXt2YXIgYT1hYihyLnBlbmRpbmdSZXF1ZXN0cyxiKTstMSE9PWEmJnIucGVuZGluZ1JlcXVlc3RzLnNwbGljZShhLDEpfXZhciBwPW4uZGVmZXIoKSxGPXAucHJvbWlzZSx2LHEscz1BKGIudXJsLGIucGFyYW1zKTtyLnBlbmRpbmdSZXF1ZXN0cy5wdXNoKGIpO0YudGhlbihrLGspOyhiLmNhY2hlfHxlLmNhY2hlKSYmKCExIT09Yi5jYWNoZSYmXCJHRVRcIj09Yi5tZXRob2QpJiYodj1XKGIuY2FjaGUpP2IuY2FjaGU6VyhlLmNhY2hlKT9lLmNhY2hlOlxuSCk7aWYodilpZihxPXYuZ2V0KHMpLEQocSkpe2lmKHEudGhlbilyZXR1cm4gcS50aGVuKGssaykscTtMKHEpP20ocVsxXSxxWzBdLCQocVsyXSkpOm0ocSwyMDAse30pfWVsc2Ugdi5wdXQocyxGKTt1KHEpJiZhKGIubWV0aG9kLHMsYyxmLGcsYi50aW1lb3V0LGIud2l0aENyZWRlbnRpYWxzLGIucmVzcG9uc2VUeXBlKTtyZXR1cm4gRn1mdW5jdGlvbiBBKGEsYil7aWYoIWIpcmV0dXJuIGE7dmFyIGM9W107T2MoYixmdW5jdGlvbihhLGIpe251bGw9PT1hfHx1KGEpfHwoTChhKXx8KGE9W2FdKSxxKGEsZnVuY3Rpb24oYSl7VyhhKSYmKGE9cGEoYSkpO2MucHVzaCh2YShiKStcIj1cIit2YShhKSl9KSl9KTtyZXR1cm4gYSsoLTE9PWEuaW5kZXhPZihcIj9cIik/XCI/XCI6XCImXCIpK2Muam9pbihcIiZcIil9dmFyIEg9YyhcIiRodHRwXCIpLHY9W107cShnLGZ1bmN0aW9uKGEpe3YudW5zaGlmdCh3KGEpP3AuZ2V0KGEpOnAuaW52b2tlKGEpKX0pO3EoZixmdW5jdGlvbihhLGIpe3ZhciBjPXcoYSk/cC5nZXQoYSk6XG5wLmludm9rZShhKTt2LnNwbGljZShiLDAse3Jlc3BvbnNlOmZ1bmN0aW9uKGEpe3JldHVybiBjKG4ud2hlbihhKSl9LHJlc3BvbnNlRXJyb3I6ZnVuY3Rpb24oYSl7cmV0dXJuIGMobi5yZWplY3QoYSkpfX0pfSk7ci5wZW5kaW5nUmVxdWVzdHM9W107KGZ1bmN0aW9uKGEpe3EoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3JbYV09ZnVuY3Rpb24oYixjKXtyZXR1cm4gcih5KGN8fHt9LHttZXRob2Q6YSx1cmw6Yn0pKX19KX0pKFwiZ2V0XCIsXCJkZWxldGVcIixcImhlYWRcIixcImpzb25wXCIpOyhmdW5jdGlvbihhKXtxKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtyW2FdPWZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gcih5KGR8fHt9LHttZXRob2Q6YSx1cmw6YixkYXRhOmN9KSl9fSl9KShcInBvc3RcIixcInB1dFwiKTtyLmRlZmF1bHRzPWU7cmV0dXJuIHJ9XX1mdW5jdGlvbiBtZChiKXtpZig4Pj1OJiYoIWIubWF0Y2goL14oZ2V0fHBvc3R8aGVhZHxwdXR8ZGVsZXRlfG9wdGlvbnMpJC9pKXx8IVAuWE1MSHR0cFJlcXVlc3QpKXJldHVybiBuZXcgUC5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7XG5pZihQLlhNTEh0dHBSZXF1ZXN0KXJldHVybiBuZXcgUC5YTUxIdHRwUmVxdWVzdDt0aHJvdyB0KFwiJGh0dHBCYWNrZW5kXCIpKFwibm94aHJcIik7fWZ1bmN0aW9uIG5kKCl7dGhpcy4kZ2V0PVtcIiRicm93c2VyXCIsXCIkd2luZG93XCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihiLGEsYyl7cmV0dXJuIG9kKGIsbWQsYi5kZWZlcixhLmFuZ3VsYXIuY2FsbGJhY2tzLGNbMF0pfV19ZnVuY3Rpb24gb2QoYixhLGMsZCxlKXtmdW5jdGlvbiBnKGEsYil7dmFyIGM9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGQ9ZnVuY3Rpb24oKXtjLm9ucmVhZHlzdGF0ZWNoYW5nZT1jLm9ubG9hZD1jLm9uZXJyb3I9bnVsbDtlLmJvZHkucmVtb3ZlQ2hpbGQoYyk7YiYmYigpfTtjLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtjLnNyYz1hO04mJjg+PU4/Yy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXsvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGMucmVhZHlTdGF0ZSkmJmQoKX06Yy5vbmxvYWQ9Yy5vbmVycm9yPVxuZnVuY3Rpb24oKXtkKCl9O2UuYm9keS5hcHBlbmRDaGlsZChjKTtyZXR1cm4gZH12YXIgZj0tMTtyZXR1cm4gZnVuY3Rpb24oZSxtLGssbCxuLHAscixGKXtmdW5jdGlvbiBBKCl7dj1mO0smJksoKTtDJiZDLmFib3J0KCl9ZnVuY3Rpb24gSChhLGQsZSxnKXtJJiZjLmNhbmNlbChJKTtLPUM9bnVsbDtkPTA9PT1kP2U/MjAwOjQwNDpkO2EoMTIyMz09ZD8yMDQ6ZCxlLGcpO2IuJCRjb21wbGV0ZU91dHN0YW5kaW5nUmVxdWVzdChFKX12YXIgdjtiLiQkaW5jT3V0c3RhbmRpbmdSZXF1ZXN0Q291bnQoKTttPW18fGIudXJsKCk7aWYoXCJqc29ucFwiPT14KGUpKXt2YXIgUT1cIl9cIisoZC5jb3VudGVyKyspLnRvU3RyaW5nKDM2KTtkW1FdPWZ1bmN0aW9uKGEpe2RbUV0uZGF0YT1hfTt2YXIgSz1nKG0ucmVwbGFjZShcIkpTT05fQ0FMTEJBQ0tcIixcImFuZ3VsYXIuY2FsbGJhY2tzLlwiK1EpLGZ1bmN0aW9uKCl7ZFtRXS5kYXRhP0gobCwyMDAsZFtRXS5kYXRhKTpIKGwsdnx8LTIpO2RbUV09QmEubm9vcH0pfWVsc2V7dmFyIEM9XG5hKGUpO0Mub3BlbihlLG0sITApO3EobixmdW5jdGlvbihhLGIpe0QoYSkmJkMuc2V0UmVxdWVzdEhlYWRlcihiLGEpfSk7Qy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZihDJiY0PT1DLnJlYWR5U3RhdGUpe3ZhciBhPW51bGwsYj1udWxsO3YhPT1mJiYoYT1DLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLGI9XCJyZXNwb25zZVwiaW4gQz9DLnJlc3BvbnNlOkMucmVzcG9uc2VUZXh0KTtIKGwsdnx8Qy5zdGF0dXMsYixhKX19O3ImJihDLndpdGhDcmVkZW50aWFscz0hMCk7aWYoRil0cnl7Qy5yZXNwb25zZVR5cGU9Rn1jYXRjaChzKXtpZihcImpzb25cIiE9PUYpdGhyb3cgczt9Qy5zZW5kKGt8fG51bGwpfWlmKDA8cCl2YXIgST1jKEEscCk7ZWxzZSBwJiZwLnRoZW4mJnAudGhlbihBKX19ZnVuY3Rpb24gcGQoKXt2YXIgYj1cInt7XCIsYT1cIn19XCI7dGhpcy5zdGFydFN5bWJvbD1mdW5jdGlvbihhKXtyZXR1cm4gYT8oYj1hLHRoaXMpOmJ9O3RoaXMuZW5kU3ltYm9sPWZ1bmN0aW9uKGIpe3JldHVybiBiP1xuKGE9Yix0aGlzKTphfTt0aGlzLiRnZXQ9W1wiJHBhcnNlXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJHNjZVwiLGZ1bmN0aW9uKGMsZCxlKXtmdW5jdGlvbiBnKGcsayxsKXtmb3IodmFyIG4scCxyPTAsRj1bXSxBPWcubGVuZ3RoLEg9ITEsdj1bXTtyPEE7KS0xIT0obj1nLmluZGV4T2YoYixyKSkmJi0xIT0ocD1nLmluZGV4T2YoYSxuK2YpKT8ociE9biYmRi5wdXNoKGcuc3Vic3RyaW5nKHIsbikpLEYucHVzaChyPWMoSD1nLnN1YnN0cmluZyhuK2YscCkpKSxyLmV4cD1ILHI9cCtoLEg9ITApOihyIT1BJiZGLnB1c2goZy5zdWJzdHJpbmcocikpLHI9QSk7KEE9Ri5sZW5ndGgpfHwoRi5wdXNoKFwiXCIpLEE9MSk7aWYobCYmMTxGLmxlbmd0aCl0aHJvdyBvYyhcIm5vY29uY2F0XCIsZyk7aWYoIWt8fEgpcmV0dXJuIHYubGVuZ3RoPUEscj1mdW5jdGlvbihhKXt0cnl7Zm9yKHZhciBiPTAsYz1BLGY7YjxjO2IrKylcImZ1bmN0aW9uXCI9PXR5cGVvZihmPUZbYl0pJiYoZj1mKGEpLGY9bD9lLmdldFRydXN0ZWQobCxcbmYpOmUudmFsdWVPZihmKSxudWxsPT09Znx8dShmKT9mPVwiXCI6XCJzdHJpbmdcIiE9dHlwZW9mIGYmJihmPXBhKGYpKSksdltiXT1mO3JldHVybiB2LmpvaW4oXCJcIil9Y2F0Y2goayl7YT1vYyhcImludGVyclwiLGcsay50b1N0cmluZygpKSxkKGEpfX0sci5leHA9ZyxyLnBhcnRzPUYscn12YXIgZj1iLmxlbmd0aCxoPWEubGVuZ3RoO2cuc3RhcnRTeW1ib2w9ZnVuY3Rpb24oKXtyZXR1cm4gYn07Zy5lbmRTeW1ib2w9ZnVuY3Rpb24oKXtyZXR1cm4gYX07cmV0dXJuIGd9XX1mdW5jdGlvbiBxZCgpe3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkd2luZG93XCIsXCIkcVwiLGZ1bmN0aW9uKGIsYSxjKXtmdW5jdGlvbiBkKGQsZixoLG0pe3ZhciBrPWEuc2V0SW50ZXJ2YWwsbD1hLmNsZWFySW50ZXJ2YWwsbj1jLmRlZmVyKCkscD1uLnByb21pc2Uscj0wLEY9RChtKSYmIW07aD1EKGgpP2g6MDtwLnRoZW4obnVsbCxudWxsLGQpO3AuJCRpbnRlcnZhbElkPWsoZnVuY3Rpb24oKXtuLm5vdGlmeShyKyspO1xuMDxoJiZyPj1oJiYobi5yZXNvbHZlKHIpLGwocC4kJGludGVydmFsSWQpLGRlbGV0ZSBlW3AuJCRpbnRlcnZhbElkXSk7Rnx8Yi4kYXBwbHkoKX0sZik7ZVtwLiQkaW50ZXJ2YWxJZF09bjtyZXR1cm4gcH12YXIgZT17fTtkLmNhbmNlbD1mdW5jdGlvbihhKXtyZXR1cm4gYSYmYS4kJGludGVydmFsSWQgaW4gZT8oZVthLiQkaW50ZXJ2YWxJZF0ucmVqZWN0KFwiY2FuY2VsZWRcIiksY2xlYXJJbnRlcnZhbChhLiQkaW50ZXJ2YWxJZCksZGVsZXRlIGVbYS4kJGludGVydmFsSWRdLCEwKTohMX07cmV0dXJuIGR9XX1mdW5jdGlvbiByZCgpe3RoaXMuJGdldD1mdW5jdGlvbigpe3JldHVybntpZDpcImVuLXVzXCIsTlVNQkVSX0ZPUk1BVFM6e0RFQ0lNQUxfU0VQOlwiLlwiLEdST1VQX1NFUDpcIixcIixQQVRURVJOUzpbe21pbkludDoxLG1pbkZyYWM6MCxtYXhGcmFjOjMscG9zUHJlOlwiXCIscG9zU3VmOlwiXCIsbmVnUHJlOlwiLVwiLG5lZ1N1ZjpcIlwiLGdTaXplOjMsbGdTaXplOjN9LHttaW5JbnQ6MSxtaW5GcmFjOjIsXG5tYXhGcmFjOjIscG9zUHJlOlwiXFx1MDBhNFwiLHBvc1N1ZjpcIlwiLG5lZ1ByZTpcIihcXHUwMGE0XCIsbmVnU3VmOlwiKVwiLGdTaXplOjMsbGdTaXplOjN9XSxDVVJSRU5DWV9TWU06XCIkXCJ9LERBVEVUSU1FX0ZPUk1BVFM6e01PTlRIOlwiSmFudWFyeSBGZWJydWFyeSBNYXJjaCBBcHJpbCBNYXkgSnVuZSBKdWx5IEF1Z3VzdCBTZXB0ZW1iZXIgT2N0b2JlciBOb3ZlbWJlciBEZWNlbWJlclwiLnNwbGl0KFwiIFwiKSxTSE9SVE1PTlRIOlwiSmFuIEZlYiBNYXIgQXByIE1heSBKdW4gSnVsIEF1ZyBTZXAgT2N0IE5vdiBEZWNcIi5zcGxpdChcIiBcIiksREFZOlwiU3VuZGF5IE1vbmRheSBUdWVzZGF5IFdlZG5lc2RheSBUaHVyc2RheSBGcmlkYXkgU2F0dXJkYXlcIi5zcGxpdChcIiBcIiksU0hPUlREQVk6XCJTdW4gTW9uIFR1ZSBXZWQgVGh1IEZyaSBTYXRcIi5zcGxpdChcIiBcIiksQU1QTVM6W1wiQU1cIixcIlBNXCJdLG1lZGl1bTpcIk1NTSBkLCB5IGg6bW06c3MgYVwiLFwic2hvcnRcIjpcIk0vZC95eSBoOm1tIGFcIixmdWxsRGF0ZTpcIkVFRUUsIE1NTU0gZCwgeVwiLFxubG9uZ0RhdGU6XCJNTU1NIGQsIHlcIixtZWRpdW1EYXRlOlwiTU1NIGQsIHlcIixzaG9ydERhdGU6XCJNL2QveXlcIixtZWRpdW1UaW1lOlwiaDptbTpzcyBhXCIsc2hvcnRUaW1lOlwiaDptbSBhXCJ9LHBsdXJhbENhdDpmdW5jdGlvbihiKXtyZXR1cm4gMT09PWI/XCJvbmVcIjpcIm90aGVyXCJ9fX19ZnVuY3Rpb24gcGMoYil7Yj1iLnNwbGl0KFwiL1wiKTtmb3IodmFyIGE9Yi5sZW5ndGg7YS0tOyliW2FdPXNiKGJbYV0pO3JldHVybiBiLmpvaW4oXCIvXCIpfWZ1bmN0aW9uIHFjKGIsYSxjKXtiPXhhKGIsYyk7YS4kJHByb3RvY29sPWIucHJvdG9jb2w7YS4kJGhvc3Q9Yi5ob3N0bmFtZTthLiQkcG9ydD1WKGIucG9ydCl8fHNkW2IucHJvdG9jb2xdfHxudWxsfWZ1bmN0aW9uIHJjKGIsYSxjKXt2YXIgZD1cIi9cIiE9PWIuY2hhckF0KDApO2QmJihiPVwiL1wiK2IpO2I9eGEoYixjKTthLiQkcGF0aD1kZWNvZGVVUklDb21wb25lbnQoZCYmXCIvXCI9PT1iLnBhdGhuYW1lLmNoYXJBdCgwKT9iLnBhdGhuYW1lLnN1YnN0cmluZygxKTpcbmIucGF0aG5hbWUpO2EuJCRzZWFyY2g9VmIoYi5zZWFyY2gpO2EuJCRoYXNoPWRlY29kZVVSSUNvbXBvbmVudChiLmhhc2gpO2EuJCRwYXRoJiZcIi9cIiE9YS4kJHBhdGguY2hhckF0KDApJiYoYS4kJHBhdGg9XCIvXCIrYS4kJHBhdGgpfWZ1bmN0aW9uIG5hKGIsYSl7aWYoMD09PWEuaW5kZXhPZihiKSlyZXR1cm4gYS5zdWJzdHIoYi5sZW5ndGgpfWZ1bmN0aW9uIFdhKGIpe3ZhciBhPWIuaW5kZXhPZihcIiNcIik7cmV0dXJuLTE9PWE/YjpiLnN1YnN0cigwLGEpfWZ1bmN0aW9uIEZiKGIpe3JldHVybiBiLnN1YnN0cigwLFdhKGIpLmxhc3RJbmRleE9mKFwiL1wiKSsxKX1mdW5jdGlvbiBzYyhiLGEpe3RoaXMuJCRodG1sNT0hMDthPWF8fFwiXCI7dmFyIGM9RmIoYik7cWMoYix0aGlzLGIpO3RoaXMuJCRwYXJzZT1mdW5jdGlvbihhKXt2YXIgZT1uYShjLGEpO2lmKCF3KGUpKXRocm93IEdiKFwiaXB0aHByZnhcIixhLGMpO3JjKGUsdGhpcyxiKTt0aGlzLiQkcGF0aHx8KHRoaXMuJCRwYXRoPVwiL1wiKTt0aGlzLiQkY29tcG9zZSgpfTtcbnRoaXMuJCRjb21wb3NlPWZ1bmN0aW9uKCl7dmFyIGE9V2IodGhpcy4kJHNlYXJjaCksYj10aGlzLiQkaGFzaD9cIiNcIitzYih0aGlzLiQkaGFzaCk6XCJcIjt0aGlzLiQkdXJsPXBjKHRoaXMuJCRwYXRoKSsoYT9cIj9cIithOlwiXCIpK2I7dGhpcy4kJGFic1VybD1jK3RoaXMuJCR1cmwuc3Vic3RyKDEpfTt0aGlzLiQkcmV3cml0ZT1mdW5jdGlvbihkKXt2YXIgZTtpZigoZT1uYShiLGQpKSE9PXMpcmV0dXJuIGQ9ZSwoZT1uYShhLGUpKSE9PXM/YysobmEoXCIvXCIsZSl8fGUpOmIrZDtpZigoZT1uYShjLGQpKSE9PXMpcmV0dXJuIGMrZTtpZihjPT1kK1wiL1wiKXJldHVybiBjfX1mdW5jdGlvbiBIYihiLGEpe3ZhciBjPUZiKGIpO3FjKGIsdGhpcyxiKTt0aGlzLiQkcGFyc2U9ZnVuY3Rpb24oZCl7dmFyIGU9bmEoYixkKXx8bmEoYyxkKSxlPVwiI1wiPT1lLmNoYXJBdCgwKT9uYShhLGUpOnRoaXMuJCRodG1sNT9lOlwiXCI7aWYoIXcoZSkpdGhyb3cgR2IoXCJpaHNocHJmeFwiLGQsYSk7cmMoZSx0aGlzLGIpO1xuZD10aGlzLiQkcGF0aDt2YXIgZz0vXlxcLz8uKj86KFxcLy4qKS87MD09PWUuaW5kZXhPZihiKSYmKGU9ZS5yZXBsYWNlKGIsXCJcIikpO2cuZXhlYyhlKXx8KGQ9KGU9Zy5leGVjKGQpKT9lWzFdOmQpO3RoaXMuJCRwYXRoPWQ7dGhpcy4kJGNvbXBvc2UoKX07dGhpcy4kJGNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgYz1XYih0aGlzLiQkc2VhcmNoKSxlPXRoaXMuJCRoYXNoP1wiI1wiK3NiKHRoaXMuJCRoYXNoKTpcIlwiO3RoaXMuJCR1cmw9cGModGhpcy4kJHBhdGgpKyhjP1wiP1wiK2M6XCJcIikrZTt0aGlzLiQkYWJzVXJsPWIrKHRoaXMuJCR1cmw/YSt0aGlzLiQkdXJsOlwiXCIpfTt0aGlzLiQkcmV3cml0ZT1mdW5jdGlvbihhKXtpZihXYShiKT09V2EoYSkpcmV0dXJuIGF9fWZ1bmN0aW9uIHRjKGIsYSl7dGhpcy4kJGh0bWw1PSEwO0hiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgYz1GYihiKTt0aGlzLiQkcmV3cml0ZT1mdW5jdGlvbihkKXt2YXIgZTtpZihiPT1XYShkKSlyZXR1cm4gZDtpZihlPW5hKGMsXG5kKSlyZXR1cm4gYithK2U7aWYoYz09PWQrXCIvXCIpcmV0dXJuIGN9fWZ1bmN0aW9uIGliKGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0aGlzW2JdfX1mdW5jdGlvbiB1YyhiLGEpe3JldHVybiBmdW5jdGlvbihjKXtpZih1KGMpKXJldHVybiB0aGlzW2JdO3RoaXNbYl09YShjKTt0aGlzLiQkY29tcG9zZSgpO3JldHVybiB0aGlzfX1mdW5jdGlvbiB0ZCgpe3ZhciBiPVwiXCIsYT0hMTt0aGlzLmhhc2hQcmVmaXg9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/KGI9YSx0aGlzKTpifTt0aGlzLmh0bWw1TW9kZT1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkYnJvd3NlclwiLFwiJHNuaWZmZXJcIixcIiRyb290RWxlbWVudFwiLGZ1bmN0aW9uKGMsZCxlLGcpe2Z1bmN0aW9uIGYoYSl7Yy4kYnJvYWRjYXN0KFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLGguYWJzVXJsKCksYSl9dmFyIGgsbT1kLmJhc2VIcmVmKCksaz1kLnVybCgpO1xuYT8obT1rLnN1YnN0cmluZygwLGsuaW5kZXhPZihcIi9cIixrLmluZGV4T2YoXCIvL1wiKSsyKSkrKG18fFwiL1wiKSxlPWUuaGlzdG9yeT9zYzp0Yyk6KG09V2EoayksZT1IYik7aD1uZXcgZShtLFwiI1wiK2IpO2guJCRwYXJzZShoLiQkcmV3cml0ZShrKSk7Zy5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7aWYoIWEuY3RybEtleSYmIWEubWV0YUtleSYmMiE9YS53aGljaCl7Zm9yKHZhciBiPXooYS50YXJnZXQpO1wiYVwiIT09eChiWzBdLm5vZGVOYW1lKTspaWYoYlswXT09PWdbMF18fCEoYj1iLnBhcmVudCgpKVswXSlyZXR1cm47dmFyIGU9Yi5wcm9wKFwiaHJlZlwiKTtXKGUpJiZcIltvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddXCI9PT1lLnRvU3RyaW5nKCkmJihlPXhhKGUuYW5pbVZhbCkuaHJlZik7dmFyIGY9aC4kJHJld3JpdGUoZSk7ZSYmKCFiLmF0dHIoXCJ0YXJnZXRcIikmJmYmJiFhLmlzRGVmYXVsdFByZXZlbnRlZCgpKSYmKGEucHJldmVudERlZmF1bHQoKSxmIT1kLnVybCgpJiYoaC4kJHBhcnNlKGYpLFxuYy4kYXBwbHkoKSxQLmFuZ3VsYXJbXCJmZi02ODQyMDgtcHJldmVudERlZmF1bHRcIl09ITApKX19KTtoLmFic1VybCgpIT1rJiZkLnVybChoLmFic1VybCgpLCEwKTtkLm9uVXJsQ2hhbmdlKGZ1bmN0aW9uKGEpe2guYWJzVXJsKCkhPWEmJihjLiRldmFsQXN5bmMoZnVuY3Rpb24oKXt2YXIgYj1oLmFic1VybCgpO2guJCRwYXJzZShhKTtjLiRicm9hZGNhc3QoXCIkbG9jYXRpb25DaGFuZ2VTdGFydFwiLGEsYikuZGVmYXVsdFByZXZlbnRlZD8oaC4kJHBhcnNlKGIpLGQudXJsKGIpKTpmKGIpfSksYy4kJHBoYXNlfHxjLiRkaWdlc3QoKSl9KTt2YXIgbD0wO2MuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGE9ZC51cmwoKSxiPWguJCRyZXBsYWNlO2wmJmE9PWguYWJzVXJsKCl8fChsKyssYy4kZXZhbEFzeW5jKGZ1bmN0aW9uKCl7Yy4kYnJvYWRjYXN0KFwiJGxvY2F0aW9uQ2hhbmdlU3RhcnRcIixoLmFic1VybCgpLGEpLmRlZmF1bHRQcmV2ZW50ZWQ/aC4kJHBhcnNlKGEpOihkLnVybChoLmFic1VybCgpLFxuYiksZihhKSl9KSk7aC4kJHJlcGxhY2U9ITE7cmV0dXJuIGx9KTtyZXR1cm4gaH1dfWZ1bmN0aW9uIHVkKCl7dmFyIGI9ITAsYT10aGlzO3RoaXMuZGVidWdFbmFibGVkPWZ1bmN0aW9uKGEpe3JldHVybiBEKGEpPyhiPWEsdGhpcyk6Yn07dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGEpe2EgaW5zdGFuY2VvZiBFcnJvciYmKGEuc3RhY2s/YT1hLm1lc3NhZ2UmJi0xPT09YS5zdGFjay5pbmRleE9mKGEubWVzc2FnZSk/XCJFcnJvcjogXCIrYS5tZXNzYWdlK1wiXFxuXCIrYS5zdGFjazphLnN0YWNrOmEuc291cmNlVVJMJiYoYT1hLm1lc3NhZ2UrXCJcXG5cIithLnNvdXJjZVVSTCtcIjpcIithLmxpbmUpKTtyZXR1cm4gYX1mdW5jdGlvbiBlKGEpe3ZhciBiPWMuY29uc29sZXx8e30sZT1iW2FdfHxiLmxvZ3x8RTthPSExO3RyeXthPSEhZS5hcHBseX1jYXRjaChtKXt9cmV0dXJuIGE/ZnVuY3Rpb24oKXt2YXIgYT1bXTtxKGFyZ3VtZW50cyxmdW5jdGlvbihiKXthLnB1c2goZChiKSl9KTtcbnJldHVybiBlLmFwcGx5KGIsYSl9OmZ1bmN0aW9uKGEsYil7ZShhLG51bGw9PWI/XCJcIjpiKX19cmV0dXJue2xvZzplKFwibG9nXCIpLGluZm86ZShcImluZm9cIiksd2FybjplKFwid2FyblwiKSxlcnJvcjplKFwiZXJyb3JcIiksZGVidWc6ZnVuY3Rpb24oKXt2YXIgYz1lKFwiZGVidWdcIik7cmV0dXJuIGZ1bmN0aW9uKCl7YiYmYy5hcHBseShhLGFyZ3VtZW50cyl9fSgpfX1dfWZ1bmN0aW9uIGRhKGIsYSl7aWYoXCJjb25zdHJ1Y3RvclwiPT09Yil0aHJvdyB5YShcImlzZWNmbGRcIixhKTtyZXR1cm4gYn1mdW5jdGlvbiBYYShiLGEpe2lmKGIpe2lmKGIuY29uc3RydWN0b3I9PT1iKXRocm93IHlhKFwiaXNlY2ZuXCIsYSk7aWYoYi5kb2N1bWVudCYmYi5sb2NhdGlvbiYmYi5hbGVydCYmYi5zZXRJbnRlcnZhbCl0aHJvdyB5YShcImlzZWN3aW5kb3dcIixhKTtpZihiLmNoaWxkcmVuJiYoYi5ub2RlTmFtZXx8Yi5vbiYmYi5maW5kKSl0aHJvdyB5YShcImlzZWNkb21cIixhKTt9cmV0dXJuIGJ9ZnVuY3Rpb24gamIoYixcbmEsYyxkLGUpe2U9ZXx8e307YT1hLnNwbGl0KFwiLlwiKTtmb3IodmFyIGcsZj0wOzE8YS5sZW5ndGg7ZisrKXtnPWRhKGEuc2hpZnQoKSxkKTt2YXIgaD1iW2ddO2h8fChoPXt9LGJbZ109aCk7Yj1oO2IudGhlbiYmZS51bndyYXBQcm9taXNlcyYmKHFhKGQpLFwiJCR2XCJpbiBifHxmdW5jdGlvbihhKXthLnRoZW4oZnVuY3Rpb24oYil7YS4kJHY9Yn0pfShiKSxiLiQkdj09PXMmJihiLiQkdj17fSksYj1iLiQkdil9Zz1kYShhLnNoaWZ0KCksZCk7cmV0dXJuIGJbZ109Y31mdW5jdGlvbiB2YyhiLGEsYyxkLGUsZyxmKXtkYShiLGcpO2RhKGEsZyk7ZGEoYyxnKTtkYShkLGcpO2RhKGUsZyk7cmV0dXJuIGYudW53cmFwUHJvbWlzZXM/ZnVuY3Rpb24oZixtKXt2YXIgaz1tJiZtLmhhc093blByb3BlcnR5KGIpP206ZixsO2lmKG51bGw9PWspcmV0dXJuIGs7KGs9a1tiXSkmJmsudGhlbiYmKHFhKGcpLFwiJCR2XCJpbiBrfHwobD1rLGwuJCR2PXMsbC50aGVuKGZ1bmN0aW9uKGEpe2wuJCR2PWF9KSksXG5rPWsuJCR2KTtpZighYSlyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzOyhrPWtbYV0pJiZrLnRoZW4mJihxYShnKSxcIiQkdlwiaW4ga3x8KGw9ayxsLiQkdj1zLGwudGhlbihmdW5jdGlvbihhKXtsLiQkdj1hfSkpLGs9ay4kJHYpO2lmKCFjKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7KGs9a1tjXSkmJmsudGhlbiYmKHFhKGcpLFwiJCR2XCJpbiBrfHwobD1rLGwuJCR2PXMsbC50aGVuKGZ1bmN0aW9uKGEpe2wuJCR2PWF9KSksaz1rLiQkdik7aWYoIWQpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gczsoaz1rW2RdKSYmay50aGVuJiYocWEoZyksXCIkJHZcImluIGt8fChsPWssbC4kJHY9cyxsLnRoZW4oZnVuY3Rpb24oYSl7bC4kJHY9YX0pKSxrPWsuJCR2KTtpZighZSlyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzOyhrPWtbZV0pJiZrLnRoZW4mJihxYShnKSxcIiQkdlwiaW4ga3x8KGw9ayxsLiQkdj1zLGwudGhlbihmdW5jdGlvbihhKXtsLiQkdj1hfSkpLGs9ay4kJHYpO1xucmV0dXJuIGt9OmZ1bmN0aW9uKGcsZil7dmFyIGs9ZiYmZi5oYXNPd25Qcm9wZXJ0eShiKT9mOmc7aWYobnVsbD09aylyZXR1cm4gaztrPWtbYl07aWYoIWEpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbYV07aWYoIWMpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbY107aWYoIWQpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbZF07cmV0dXJuIGU/bnVsbD09az9zOms9a1tlXTprfX1mdW5jdGlvbiB2ZChiLGEpe2RhKGIsYSk7cmV0dXJuIGZ1bmN0aW9uKGEsZCl7cmV0dXJuIG51bGw9PWE/czooZCYmZC5oYXNPd25Qcm9wZXJ0eShiKT9kOmEpW2JdfX1mdW5jdGlvbiB3ZChiLGEsYyl7ZGEoYixjKTtkYShhLGMpO3JldHVybiBmdW5jdGlvbihjLGUpe2lmKG51bGw9PWMpcmV0dXJuIHM7Yz0oZSYmZS5oYXNPd25Qcm9wZXJ0eShiKT9lOmMpW2JdO3JldHVybiBudWxsPT1jP3M6Y1thXX19ZnVuY3Rpb24gd2MoYixhLGMpe2lmKEliLmhhc093blByb3BlcnR5KGIpKXJldHVybiBJYltiXTtcbnZhciBkPWIuc3BsaXQoXCIuXCIpLGU9ZC5sZW5ndGgsZztpZihhLnVud3JhcFByb21pc2VzfHwxIT09ZSlpZihhLnVud3JhcFByb21pc2VzfHwyIT09ZSlpZihhLmNzcClnPTY+ZT92YyhkWzBdLGRbMV0sZFsyXSxkWzNdLGRbNF0sYyxhKTpmdW5jdGlvbihiLGcpe3ZhciBmPTAsaDtkbyBoPXZjKGRbZisrXSxkW2YrK10sZFtmKytdLGRbZisrXSxkW2YrK10sYyxhKShiLGcpLGc9cyxiPWg7d2hpbGUoZjxlKTtyZXR1cm4gaH07ZWxzZXt2YXIgZj1cInZhciBwO1xcblwiO3EoZCxmdW5jdGlvbihiLGQpe2RhKGIsYyk7Zis9XCJpZihzID09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XFxucz1cIisoZD9cInNcIjonKChrJiZrLmhhc093blByb3BlcnR5KFwiJytiKydcIikpP2s6cyknKSsnW1wiJytiKydcIl07XFxuJysoYS51bndyYXBQcm9taXNlcz8naWYgKHMgJiYgcy50aGVuKSB7XFxuIHB3KFwiJytjLnJlcGxhY2UoLyhbXCJcXHJcXG5dKS9nLFwiXFxcXCQxXCIpKydcIik7XFxuIGlmICghKFwiJCR2XCIgaW4gcykpIHtcXG4gcD1zO1xcbiBwLiQkdiA9IHVuZGVmaW5lZDtcXG4gcC50aGVuKGZ1bmN0aW9uKHYpIHtwLiQkdj12O30pO1xcbn1cXG4gcz1zLiQkdlxcbn1cXG4nOlxuXCJcIil9KTt2YXIgZj1mK1wicmV0dXJuIHM7XCIsaD1uZXcgRnVuY3Rpb24oXCJzXCIsXCJrXCIsXCJwd1wiLGYpO2gudG9TdHJpbmc9WShmKTtnPWEudW53cmFwUHJvbWlzZXM/ZnVuY3Rpb24oYSxiKXtyZXR1cm4gaChhLGIscWEpfTpofWVsc2UgZz13ZChkWzBdLGRbMV0sYyk7ZWxzZSBnPXZkKGRbMF0sYyk7XCJoYXNPd25Qcm9wZXJ0eVwiIT09YiYmKEliW2JdPWcpO3JldHVybiBnfWZ1bmN0aW9uIHhkKCl7dmFyIGI9e30sYT17Y3NwOiExLHVud3JhcFByb21pc2VzOiExLGxvZ1Byb21pc2VXYXJuaW5nczohMH07dGhpcy51bndyYXBQcm9taXNlcz1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYS51bndyYXBQcm9taXNlcz0hIWIsdGhpcyk6YS51bndyYXBQcm9taXNlc307dGhpcy5sb2dQcm9taXNlV2FybmluZ3M9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGEubG9nUHJvbWlzZVdhcm5pbmdzPWIsdGhpcyk6YS5sb2dQcm9taXNlV2FybmluZ3N9O3RoaXMuJGdldD1bXCIkZmlsdGVyXCIsXCIkc25pZmZlclwiLFxuXCIkbG9nXCIsZnVuY3Rpb24oYyxkLGUpe2EuY3NwPWQuY3NwO3FhPWZ1bmN0aW9uKGIpe2EubG9nUHJvbWlzZVdhcm5pbmdzJiYheGMuaGFzT3duUHJvcGVydHkoYikmJih4Y1tiXT0hMCxlLndhcm4oXCJbJHBhcnNlXSBQcm9taXNlIGZvdW5kIGluIHRoZSBleHByZXNzaW9uIGBcIitiK1wiYC4gQXV0b21hdGljIHVud3JhcHBpbmcgb2YgcHJvbWlzZXMgaW4gQW5ndWxhciBleHByZXNzaW9ucyBpcyBkZXByZWNhdGVkLlwiKSl9O3JldHVybiBmdW5jdGlvbihkKXt2YXIgZTtzd2l0Y2godHlwZW9mIGQpe2Nhc2UgXCJzdHJpbmdcIjppZihiLmhhc093blByb3BlcnR5KGQpKXJldHVybiBiW2RdO2U9bmV3IEpiKGEpO2U9KG5ldyBZYShlLGMsYSkpLnBhcnNlKGQsITEpO1wiaGFzT3duUHJvcGVydHlcIiE9PWQmJihiW2RdPWUpO3JldHVybiBlO2Nhc2UgXCJmdW5jdGlvblwiOnJldHVybiBkO2RlZmF1bHQ6cmV0dXJuIEV9fX1dfWZ1bmN0aW9uIHlkKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXG5mdW5jdGlvbihiLGEpe3JldHVybiB6ZChmdW5jdGlvbihhKXtiLiRldmFsQXN5bmMoYSl9LGEpfV19ZnVuY3Rpb24gemQoYixhKXtmdW5jdGlvbiBjKGEpe3JldHVybiBhfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGYoYSl9dmFyIGU9ZnVuY3Rpb24oKXt2YXIgZj1bXSxrLGw7cmV0dXJuIGw9e3Jlc29sdmU6ZnVuY3Rpb24oYSl7aWYoZil7dmFyIGM9ZjtmPXM7az1nKGEpO2MubGVuZ3RoJiZiKGZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MCxkPWMubGVuZ3RoO2I8ZDtiKyspYT1jW2JdLGsudGhlbihhWzBdLGFbMV0sYVsyXSl9KX19LHJlamVjdDpmdW5jdGlvbihhKXtsLnJlc29sdmUoaChhKSl9LG5vdGlmeTpmdW5jdGlvbihhKXtpZihmKXt2YXIgYz1mO2YubGVuZ3RoJiZiKGZ1bmN0aW9uKCl7Zm9yKHZhciBiLGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspYj1jW2RdLGJbMl0oYSl9KX19LHByb21pc2U6e3RoZW46ZnVuY3Rpb24oYixnLGgpe3ZhciBsPWUoKSxBPWZ1bmN0aW9uKGQpe3RyeXtsLnJlc29sdmUoKE0oYik/XG5iOmMpKGQpKX1jYXRjaChlKXtsLnJlamVjdChlKSxhKGUpfX0sSD1mdW5jdGlvbihiKXt0cnl7bC5yZXNvbHZlKChNKGcpP2c6ZCkoYikpfWNhdGNoKGMpe2wucmVqZWN0KGMpLGEoYyl9fSx2PWZ1bmN0aW9uKGIpe3RyeXtsLm5vdGlmeSgoTShoKT9oOmMpKGIpKX1jYXRjaChkKXthKGQpfX07Zj9mLnB1c2goW0EsSCx2XSk6ay50aGVuKEEsSCx2KTtyZXR1cm4gbC5wcm9taXNlfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGEpfSxcImZpbmFsbHlcIjpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYyl7dmFyIGQ9ZSgpO2M/ZC5yZXNvbHZlKGEpOmQucmVqZWN0KGEpO3JldHVybiBkLnByb21pc2V9ZnVuY3Rpb24gZChlLGcpe3ZhciBmPW51bGw7dHJ5e2Y9KGF8fGMpKCl9Y2F0Y2goayl7cmV0dXJuIGIoaywhMSl9cmV0dXJuIGYmJk0oZi50aGVuKT9mLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYihlLGcpfSxmdW5jdGlvbihhKXtyZXR1cm4gYihhLCExKX0pOlxuYihlLGcpfXJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGQoYSwhMCl9LGZ1bmN0aW9uKGEpe3JldHVybiBkKGEsITEpfSl9fX19LGc9ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJk0oYS50aGVuKT9hOnt0aGVuOmZ1bmN0aW9uKGMpe3ZhciBkPWUoKTtiKGZ1bmN0aW9uKCl7ZC5yZXNvbHZlKGMoYSkpfSk7cmV0dXJuIGQucHJvbWlzZX19fSxmPWZ1bmN0aW9uKGEpe3ZhciBiPWUoKTtiLnJlamVjdChhKTtyZXR1cm4gYi5wcm9taXNlfSxoPWZ1bmN0aW9uKGMpe3JldHVybnt0aGVuOmZ1bmN0aW9uKGcsZil7dmFyIGg9ZSgpO2IoZnVuY3Rpb24oKXt0cnl7aC5yZXNvbHZlKChNKGYpP2Y6ZCkoYykpfWNhdGNoKGIpe2gucmVqZWN0KGIpLGEoYil9fSk7cmV0dXJuIGgucHJvbWlzZX19fTtyZXR1cm57ZGVmZXI6ZSxyZWplY3Q6Zix3aGVuOmZ1bmN0aW9uKGgsayxsLG4pe3ZhciBwPWUoKSxyLEY9ZnVuY3Rpb24oYil7dHJ5e3JldHVybihNKGspP2s6YykoYil9Y2F0Y2goZCl7cmV0dXJuIGEoZCksXG5mKGQpfX0sQT1mdW5jdGlvbihiKXt0cnl7cmV0dXJuKE0obCk/bDpkKShiKX1jYXRjaChjKXtyZXR1cm4gYShjKSxmKGMpfX0scT1mdW5jdGlvbihiKXt0cnl7cmV0dXJuKE0obik/bjpjKShiKX1jYXRjaChkKXthKGQpfX07YihmdW5jdGlvbigpe2coaCkudGhlbihmdW5jdGlvbihhKXtyfHwocj0hMCxwLnJlc29sdmUoZyhhKS50aGVuKEYsQSxxKSkpfSxmdW5jdGlvbihhKXtyfHwocj0hMCxwLnJlc29sdmUoQShhKSkpfSxmdW5jdGlvbihhKXtyfHxwLm5vdGlmeShxKGEpKX0pfSk7cmV0dXJuIHAucHJvbWlzZX0sYWxsOmZ1bmN0aW9uKGEpe3ZhciBiPWUoKSxjPTAsZD1MKGEpP1tdOnt9O3EoYSxmdW5jdGlvbihhLGUpe2MrKztnKGEpLnRoZW4oZnVuY3Rpb24oYSl7ZC5oYXNPd25Qcm9wZXJ0eShlKXx8KGRbZV09YSwtLWN8fGIucmVzb2x2ZShkKSl9LGZ1bmN0aW9uKGEpe2QuaGFzT3duUHJvcGVydHkoZSl8fGIucmVqZWN0KGEpfSl9KTswPT09YyYmYi5yZXNvbHZlKGQpO3JldHVybiBiLnByb21pc2V9fX1cbmZ1bmN0aW9uIEFkKCl7dmFyIGI9MTAsYT10KFwiJHJvb3RTY29wZVwiKSxjPW51bGw7dGhpcy5kaWdlc3RUdGw9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9YSk7cmV0dXJuIGJ9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkcGFyc2VcIixcIiRicm93c2VyXCIsZnVuY3Rpb24oZCxlLGcsZil7ZnVuY3Rpb24gaCgpe3RoaXMuJGlkPVphKCk7dGhpcy4kJHBoYXNlPXRoaXMuJHBhcmVudD10aGlzLiQkd2F0Y2hlcnM9dGhpcy4kJG5leHRTaWJsaW5nPXRoaXMuJCRwcmV2U2libGluZz10aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9bnVsbDt0aGlzW1widGhpc1wiXT10aGlzLiRyb290PXRoaXM7dGhpcy4kJGRlc3Ryb3llZD0hMTt0aGlzLiQkYXN5bmNRdWV1ZT1bXTt0aGlzLiQkcG9zdERpZ2VzdFF1ZXVlPVtdO3RoaXMuJCRsaXN0ZW5lcnM9e307dGhpcy4kJGxpc3RlbmVyQ291bnQ9e307dGhpcy4kJGlzb2xhdGVCaW5kaW5ncz17fX1cbmZ1bmN0aW9uIG0oYil7aWYocC4kJHBoYXNlKXRocm93IGEoXCJpbnByb2dcIixwLiQkcGhhc2UpO3AuJCRwaGFzZT1ifWZ1bmN0aW9uIGsoYSxiKXt2YXIgYz1nKGEpO1BhKGMsYik7cmV0dXJuIGN9ZnVuY3Rpb24gbChhLGIsYyl7ZG8gYS4kJGxpc3RlbmVyQ291bnRbY10tPWIsMD09PWEuJCRsaXN0ZW5lckNvdW50W2NdJiZkZWxldGUgYS4kJGxpc3RlbmVyQ291bnRbY107d2hpbGUoYT1hLiRwYXJlbnQpfWZ1bmN0aW9uIG4oKXt9aC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmgsJG5ldzpmdW5jdGlvbihhKXthPyhhPW5ldyBoLGEuJHJvb3Q9dGhpcy4kcm9vdCxhLiQkYXN5bmNRdWV1ZT10aGlzLiQkYXN5bmNRdWV1ZSxhLiQkcG9zdERpZ2VzdFF1ZXVlPXRoaXMuJCRwb3N0RGlnZXN0UXVldWUpOihhPWZ1bmN0aW9uKCl7fSxhLnByb3RvdHlwZT10aGlzLGE9bmV3IGEsYS4kaWQ9WmEoKSk7YVtcInRoaXNcIl09YTthLiQkbGlzdGVuZXJzPXt9O2EuJCRsaXN0ZW5lckNvdW50PXt9O2EuJHBhcmVudD1cbnRoaXM7YS4kJHdhdGNoZXJzPWEuJCRuZXh0U2libGluZz1hLiQkY2hpbGRIZWFkPWEuJCRjaGlsZFRhaWw9bnVsbDthLiQkcHJldlNpYmxpbmc9dGhpcy4kJGNoaWxkVGFpbDt0aGlzLiQkY2hpbGRIZWFkP3RoaXMuJCRjaGlsZFRhaWw9dGhpcy4kJGNoaWxkVGFpbC4kJG5leHRTaWJsaW5nPWE6dGhpcy4kJGNoaWxkSGVhZD10aGlzLiQkY2hpbGRUYWlsPWE7cmV0dXJuIGF9LCR3YXRjaDpmdW5jdGlvbihhLGIsZCl7dmFyIGU9ayhhLFwid2F0Y2hcIiksZz10aGlzLiQkd2F0Y2hlcnMsZj17Zm46YixsYXN0Om4sZ2V0OmUsZXhwOmEsZXE6ISFkfTtjPW51bGw7aWYoIU0oYikpe3ZhciBoPWsoYnx8RSxcImxpc3RlbmVyXCIpO2YuZm49ZnVuY3Rpb24oYSxiLGMpe2goYyl9fWlmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZlLmNvbnN0YW50KXt2YXIgbT1mLmZuO2YuZm49ZnVuY3Rpb24oYSxiLGMpe20uY2FsbCh0aGlzLGEsYixjKTtNYShnLGYpfX1nfHwoZz10aGlzLiQkd2F0Y2hlcnM9W10pO2cudW5zaGlmdChmKTtcbnJldHVybiBmdW5jdGlvbigpe01hKGcsZik7Yz1udWxsfX0sJHdhdGNoQ29sbGVjdGlvbjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsZCxlLGY9MCxoPWcoYSksaz1bXSxtPXt9LGw9MDtyZXR1cm4gdGhpcy4kd2F0Y2goZnVuY3Rpb24oKXtlPWgoYyk7dmFyIGEsYjtpZihXKGUpKWlmKHFiKGUpKWZvcihkIT09ayYmKGQ9ayxsPWQubGVuZ3RoPTAsZisrKSxhPWUubGVuZ3RoLGwhPT1hJiYoZisrLGQubGVuZ3RoPWw9YSksYj0wO2I8YTtiKyspZFtiXSE9PWVbYl0mJihmKyssZFtiXT1lW2JdKTtlbHNle2QhPT1tJiYoZD1tPXt9LGw9MCxmKyspO2E9MDtmb3IoYiBpbiBlKWUuaGFzT3duUHJvcGVydHkoYikmJihhKyssZC5oYXNPd25Qcm9wZXJ0eShiKT9kW2JdIT09ZVtiXSYmKGYrKyxkW2JdPWVbYl0pOihsKyssZFtiXT1lW2JdLGYrKykpO2lmKGw+YSlmb3IoYiBpbiBmKyssZClkLmhhc093blByb3BlcnR5KGIpJiYhZS5oYXNPd25Qcm9wZXJ0eShiKSYmKGwtLSxkZWxldGUgZFtiXSl9ZWxzZSBkIT09XG5lJiYoZD1lLGYrKyk7cmV0dXJuIGZ9LGZ1bmN0aW9uKCl7YihlLGQsYyl9KX0sJGRpZ2VzdDpmdW5jdGlvbigpe3ZhciBkLGYsZyxoLGs9dGhpcy4kJGFzeW5jUXVldWUsbD10aGlzLiQkcG9zdERpZ2VzdFF1ZXVlLHEsQyxzPWIsSSxVPVtdLHQseixCO20oXCIkZGlnZXN0XCIpO2M9bnVsbDtkb3tDPSExO2ZvcihJPXRoaXM7ay5sZW5ndGg7KXt0cnl7Qj1rLnNoaWZ0KCksQi5zY29wZS4kZXZhbChCLmV4cHJlc3Npb24pfWNhdGNoKEQpe3AuJCRwaGFzZT1udWxsLGUoRCl9Yz1udWxsfWE6ZG97aWYoaD1JLiQkd2F0Y2hlcnMpZm9yKHE9aC5sZW5ndGg7cS0tOyl0cnl7aWYoZD1oW3FdKWlmKChmPWQuZ2V0KEkpKSE9PShnPWQubGFzdCkmJiEoZC5lcT90YShmLGcpOlwibnVtYmVyXCI9PXR5cGVvZiBmJiZcIm51bWJlclwiPT10eXBlb2YgZyYmaXNOYU4oZikmJmlzTmFOKGcpKSlDPSEwLGM9ZCxkLmxhc3Q9ZC5lcT8kKGYpOmYsZC5mbihmLGc9PT1uP2Y6ZyxJKSw1PnMmJih0PTQtcyxVW3RdfHxcbihVW3RdPVtdKSx6PU0oZC5leHApP1wiZm46IFwiKyhkLmV4cC5uYW1lfHxkLmV4cC50b1N0cmluZygpKTpkLmV4cCx6Kz1cIjsgbmV3VmFsOiBcIitwYShmKStcIjsgb2xkVmFsOiBcIitwYShnKSxVW3RdLnB1c2goeikpO2Vsc2UgaWYoZD09PWMpe0M9ITE7YnJlYWsgYX19Y2F0Y2goeSl7cC4kJHBoYXNlPW51bGwsZSh5KX1pZighKGg9SS4kJGNoaWxkSGVhZHx8SSE9PXRoaXMmJkkuJCRuZXh0U2libGluZykpZm9yKDtJIT09dGhpcyYmIShoPUkuJCRuZXh0U2libGluZyk7KUk9SS4kcGFyZW50fXdoaWxlKEk9aCk7aWYoKEN8fGsubGVuZ3RoKSYmIXMtLSl0aHJvdyBwLiQkcGhhc2U9bnVsbCxhKFwiaW5mZGlnXCIsYixwYShVKSk7fXdoaWxlKEN8fGsubGVuZ3RoKTtmb3IocC4kJHBoYXNlPW51bGw7bC5sZW5ndGg7KXRyeXtsLnNoaWZ0KCkoKX1jYXRjaCh3KXtlKHcpfX0sJGRlc3Ryb3k6ZnVuY3Rpb24oKXtpZighdGhpcy4kJGRlc3Ryb3llZCl7dmFyIGE9dGhpcy4kcGFyZW50O3RoaXMuJGJyb2FkY2FzdChcIiRkZXN0cm95XCIpO1xudGhpcy4kJGRlc3Ryb3llZD0hMDt0aGlzIT09cCYmKHEodGhpcy4kJGxpc3RlbmVyQ291bnQsYmIobnVsbCxsLHRoaXMpKSxhLiQkY2hpbGRIZWFkPT10aGlzJiYoYS4kJGNoaWxkSGVhZD10aGlzLiQkbmV4dFNpYmxpbmcpLGEuJCRjaGlsZFRhaWw9PXRoaXMmJihhLiQkY2hpbGRUYWlsPXRoaXMuJCRwcmV2U2libGluZyksdGhpcy4kJHByZXZTaWJsaW5nJiYodGhpcy4kJHByZXZTaWJsaW5nLiQkbmV4dFNpYmxpbmc9dGhpcy4kJG5leHRTaWJsaW5nKSx0aGlzLiQkbmV4dFNpYmxpbmcmJih0aGlzLiQkbmV4dFNpYmxpbmcuJCRwcmV2U2libGluZz10aGlzLiQkcHJldlNpYmxpbmcpLHRoaXMuJHBhcmVudD10aGlzLiQkbmV4dFNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD1udWxsKX19LCRldmFsOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGcoYSkodGhpcyxiKX0sJGV2YWxBc3luYzpmdW5jdGlvbihhKXtwLiQkcGhhc2V8fHAuJCRhc3luY1F1ZXVlLmxlbmd0aHx8XG5mLmRlZmVyKGZ1bmN0aW9uKCl7cC4kJGFzeW5jUXVldWUubGVuZ3RoJiZwLiRkaWdlc3QoKX0pO3RoaXMuJCRhc3luY1F1ZXVlLnB1c2goe3Njb3BlOnRoaXMsZXhwcmVzc2lvbjphfSl9LCQkcG9zdERpZ2VzdDpmdW5jdGlvbihhKXt0aGlzLiQkcG9zdERpZ2VzdFF1ZXVlLnB1c2goYSl9LCRhcHBseTpmdW5jdGlvbihhKXt0cnl7cmV0dXJuIG0oXCIkYXBwbHlcIiksdGhpcy4kZXZhbChhKX1jYXRjaChiKXtlKGIpfWZpbmFsbHl7cC4kJHBoYXNlPW51bGw7dHJ5e3AuJGRpZ2VzdCgpfWNhdGNoKGMpe3Rocm93IGUoYyksYzt9fX0sJG9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy4kJGxpc3RlbmVyc1thXTtjfHwodGhpcy4kJGxpc3RlbmVyc1thXT1jPVtdKTtjLnB1c2goYik7dmFyIGQ9dGhpcztkbyBkLiQkbGlzdGVuZXJDb3VudFthXXx8KGQuJCRsaXN0ZW5lckNvdW50W2FdPTApLGQuJCRsaXN0ZW5lckNvdW50W2FdKys7d2hpbGUoZD1kLiRwYXJlbnQpO3ZhciBlPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKCl7Y1thYihjLFxuYildPW51bGw7bChlLDEsYSl9fSwkZW1pdDpmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQsZj10aGlzLGc9ITEsaD17bmFtZTphLHRhcmdldFNjb3BlOmYsc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7Zz0hMH0scHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXtoLmRlZmF1bHRQcmV2ZW50ZWQ9ITB9LGRlZmF1bHRQcmV2ZW50ZWQ6ITF9LGs9W2hdLmNvbmNhdCh1YS5jYWxsKGFyZ3VtZW50cywxKSksbSxsO2Rve2Q9Zi4kJGxpc3RlbmVyc1thXXx8YztoLmN1cnJlbnRTY29wZT1mO209MDtmb3IobD1kLmxlbmd0aDttPGw7bSsrKWlmKGRbbV0pdHJ5e2RbbV0uYXBwbHkobnVsbCxrKX1jYXRjaChwKXtlKHApfWVsc2UgZC5zcGxpY2UobSwxKSxtLS0sbC0tO2lmKGcpYnJlYWs7Zj1mLiRwYXJlbnR9d2hpbGUoZik7cmV0dXJuIGh9LCRicm9hZGNhc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9dGhpcyxkPXRoaXMsZj17bmFtZTphLHRhcmdldFNjb3BlOnRoaXMscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXtmLmRlZmF1bHRQcmV2ZW50ZWQ9XG4hMH0sZGVmYXVsdFByZXZlbnRlZDohMX0sZz1bZl0uY29uY2F0KHVhLmNhbGwoYXJndW1lbnRzLDEpKSxoLGs7Yz1kOyl7Zi5jdXJyZW50U2NvcGU9YztkPWMuJCRsaXN0ZW5lcnNbYV18fFtdO2g9MDtmb3Ioaz1kLmxlbmd0aDtoPGs7aCsrKWlmKGRbaF0pdHJ5e2RbaF0uYXBwbHkobnVsbCxnKX1jYXRjaChtKXtlKG0pfWVsc2UgZC5zcGxpY2UoaCwxKSxoLS0say0tO2lmKCEoZD1jLiQkbGlzdGVuZXJDb3VudFthXSYmYy4kJGNoaWxkSGVhZHx8YyE9PXRoaXMmJmMuJCRuZXh0U2libGluZykpZm9yKDtjIT09dGhpcyYmIShkPWMuJCRuZXh0U2libGluZyk7KWM9Yy4kcGFyZW50fXJldHVybiBmfX07dmFyIHA9bmV3IGg7cmV0dXJuIHB9XX1mdW5jdGlvbiBCZCgpe3ZhciBiPS9eXFxzKihodHRwcz98ZnRwfG1haWx0b3x0ZWx8ZmlsZSk6LyxhPS9eXFxzKihodHRwcz98ZnRwfGZpbGUpOnxkYXRhOmltYWdlXFwvLzt0aGlzLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGEpe3JldHVybiBEKGEpP1xuKGI9YSx0aGlzKTpifTt0aGlzLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlPWQ/YTpiLGc7aWYoIU58fDg8PU4paWYoZz14YShjKS5ocmVmLFwiXCIhPT1nJiYhZy5tYXRjaChlKSlyZXR1cm5cInVuc2FmZTpcIitnO3JldHVybiBjfX19ZnVuY3Rpb24gQ2QoYil7aWYoXCJzZWxmXCI9PT1iKXJldHVybiBiO2lmKHcoYikpe2lmKC0xPGIuaW5kZXhPZihcIioqKlwiKSl0aHJvdyByYShcIml3Y2FyZFwiLGIpO2I9Yi5yZXBsYWNlKC8oWy0oKVxcW1xcXXt9Kz8qLiRcXF58LDojPCFcXFxcXSkvZyxcIlxcXFwkMVwiKS5yZXBsYWNlKC9cXHgwOC9nLFwiXFxcXHgwOFwiKS5yZXBsYWNlKFwiXFxcXCpcXFxcKlwiLFwiLipcIikucmVwbGFjZShcIlxcXFwqXCIsXCJbXjovLj8mO10qXCIpO3JldHVybiBSZWdFeHAoXCJeXCIrYitcIiRcIil9aWYoJGEoYikpcmV0dXJuIFJlZ0V4cChcIl5cIitiLnNvdXJjZStcIiRcIik7XG50aHJvdyByYShcImltYXRjaGVyXCIpO31mdW5jdGlvbiB5YyhiKXt2YXIgYT1bXTtEKGIpJiZxKGIsZnVuY3Rpb24oYil7YS5wdXNoKENkKGIpKX0pO3JldHVybiBhfWZ1bmN0aW9uIERkKCl7dGhpcy5TQ0VfQ09OVEVYVFM9ZWE7dmFyIGI9W1wic2VsZlwiXSxhPVtdO3RoaXMucmVzb3VyY2VVcmxXaGl0ZWxpc3Q9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9eWMoYSkpO3JldHVybiBifTt0aGlzLnJlc291cmNlVXJsQmxhY2tsaXN0PWZ1bmN0aW9uKGIpe2FyZ3VtZW50cy5sZW5ndGgmJihhPXljKGIpKTtyZXR1cm4gYX07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSl7dmFyIGI9ZnVuY3Rpb24oYSl7dGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBhfX07YSYmKGIucHJvdG90eXBlPW5ldyBhKTtiLnByb3RvdHlwZS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWUoKX07XG5iLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCkudG9TdHJpbmcoKX07cmV0dXJuIGJ9dmFyIGU9ZnVuY3Rpb24oYSl7dGhyb3cgcmEoXCJ1bnNhZmVcIik7fTtjLmhhcyhcIiRzYW5pdGl6ZVwiKSYmKGU9Yy5nZXQoXCIkc2FuaXRpemVcIikpO3ZhciBnPWQoKSxmPXt9O2ZbZWEuSFRNTF09ZChnKTtmW2VhLkNTU109ZChnKTtmW2VhLlVSTF09ZChnKTtmW2VhLkpTXT1kKGcpO2ZbZWEuUkVTT1VSQ0VfVVJMXT1kKGZbZWEuVVJMXSk7cmV0dXJue3RydXN0QXM6ZnVuY3Rpb24oYSxiKXt2YXIgYz1mLmhhc093blByb3BlcnR5KGEpP2ZbYV06bnVsbDtpZighYyl0aHJvdyByYShcImljb250ZXh0XCIsYSxiKTtpZihudWxsPT09Ynx8Yj09PXN8fFwiXCI9PT1iKXJldHVybiBiO2lmKFwic3RyaW5nXCIhPT10eXBlb2YgYil0aHJvdyByYShcIml0eXBlXCIsYSk7cmV0dXJuIG5ldyBjKGIpfSxnZXRUcnVzdGVkOmZ1bmN0aW9uKGMsZCl7aWYobnVsbD09PVxuZHx8ZD09PXN8fFwiXCI9PT1kKXJldHVybiBkO3ZhciBnPWYuaGFzT3duUHJvcGVydHkoYyk/ZltjXTpudWxsO2lmKGcmJmQgaW5zdGFuY2VvZiBnKXJldHVybiBkLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCk7aWYoYz09PWVhLlJFU09VUkNFX1VSTCl7dmFyIGc9eGEoZC50b1N0cmluZygpKSxsLG4scD0hMTtsPTA7Zm9yKG49Yi5sZW5ndGg7bDxuO2wrKylpZihcInNlbGZcIj09PWJbbF0/RWIoZyk6YltsXS5leGVjKGcuaHJlZikpe3A9ITA7YnJlYWt9aWYocClmb3IobD0wLG49YS5sZW5ndGg7bDxuO2wrKylpZihcInNlbGZcIj09PWFbbF0/RWIoZyk6YVtsXS5leGVjKGcuaHJlZikpe3A9ITE7YnJlYWt9aWYocClyZXR1cm4gZDt0aHJvdyByYShcImluc2VjdXJsXCIsZC50b1N0cmluZygpKTt9aWYoYz09PWVhLkhUTUwpcmV0dXJuIGUoZCk7dGhyb3cgcmEoXCJ1bnNhZmVcIik7fSx2YWx1ZU9mOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgZz9hLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCk6YX19fV19XG5mdW5jdGlvbiBFZCgpe3ZhciBiPSEwO3RoaXMuZW5hYmxlZD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj0hIWEpO3JldHVybiBifTt0aGlzLiRnZXQ9W1wiJHBhcnNlXCIsXCIkc25pZmZlclwiLFwiJHNjZURlbGVnYXRlXCIsZnVuY3Rpb24oYSxjLGQpe2lmKGImJmMubXNpZSYmOD5jLm1zaWVEb2N1bWVudE1vZGUpdGhyb3cgcmEoXCJpZXF1aXJrc1wiKTt2YXIgZT0kKGVhKTtlLmlzRW5hYmxlZD1mdW5jdGlvbigpe3JldHVybiBifTtlLnRydXN0QXM9ZC50cnVzdEFzO2UuZ2V0VHJ1c3RlZD1kLmdldFRydXN0ZWQ7ZS52YWx1ZU9mPWQudmFsdWVPZjtifHwoZS50cnVzdEFzPWUuZ2V0VHJ1c3RlZD1mdW5jdGlvbihhLGIpe3JldHVybiBifSxlLnZhbHVlT2Y9QWEpO2UucGFyc2VBcz1mdW5jdGlvbihiLGMpe3ZhciBkPWEoYyk7cmV0dXJuIGQubGl0ZXJhbCYmZC5jb25zdGFudD9kOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGUuZ2V0VHJ1c3RlZChiLGQoYSxjKSl9fTt2YXIgZz1lLnBhcnNlQXMsXG5mPWUuZ2V0VHJ1c3RlZCxoPWUudHJ1c3RBcztxKGVhLGZ1bmN0aW9uKGEsYil7dmFyIGM9eChiKTtlW1FhKFwicGFyc2VfYXNfXCIrYyldPWZ1bmN0aW9uKGIpe3JldHVybiBnKGEsYil9O2VbUWEoXCJnZXRfdHJ1c3RlZF9cIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGYoYSxiKX07ZVtRYShcInRydXN0X2FzX1wiK2MpXT1mdW5jdGlvbihiKXtyZXR1cm4gaChhLGIpfX0pO3JldHVybiBlfV19ZnVuY3Rpb24gRmQoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oYixhKXt2YXIgYz17fSxkPVYoKC9hbmRyb2lkIChcXGQrKS8uZXhlYyh4KChiLm5hdmlnYXRvcnx8e30pLnVzZXJBZ2VudCkpfHxbXSlbMV0pLGU9L0JveGVlL2kudGVzdCgoYi5uYXZpZ2F0b3J8fHt9KS51c2VyQWdlbnQpLGc9YVswXXx8e30sZj1nLmRvY3VtZW50TW9kZSxoLG09L14oTW96fHdlYmtpdHxPfG1zKSg/PVtBLVpdKS8saz1nLmJvZHkmJmcuYm9keS5zdHlsZSxsPSExLG49ITE7aWYoayl7Zm9yKHZhciBwIGluIGspaWYobD1cbm0uZXhlYyhwKSl7aD1sWzBdO2g9aC5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2guc3Vic3RyKDEpO2JyZWFrfWh8fChoPVwiV2Via2l0T3BhY2l0eVwiaW4gayYmXCJ3ZWJraXRcIik7bD0hIShcInRyYW5zaXRpb25cImluIGt8fGgrXCJUcmFuc2l0aW9uXCJpbiBrKTtuPSEhKFwiYW5pbWF0aW9uXCJpbiBrfHxoK1wiQW5pbWF0aW9uXCJpbiBrKTshZHx8bCYmbnx8KGw9dyhnLmJvZHkuc3R5bGUud2Via2l0VHJhbnNpdGlvbiksbj13KGcuYm9keS5zdHlsZS53ZWJraXRBbmltYXRpb24pKX1yZXR1cm57aGlzdG9yeTohKCFiLmhpc3Rvcnl8fCFiLmhpc3RvcnkucHVzaFN0YXRlfHw0PmR8fGUpLGhhc2hjaGFuZ2U6XCJvbmhhc2hjaGFuZ2VcImluIGImJighZnx8NzxmKSxoYXNFdmVudDpmdW5jdGlvbihhKXtpZihcImlucHV0XCI9PWEmJjk9PU4pcmV0dXJuITE7aWYodShjW2FdKSl7dmFyIGI9Zy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2NbYV09XCJvblwiK2EgaW4gYn1yZXR1cm4gY1thXX0sY3NwOlNiKCksdmVuZG9yUHJlZml4OmgsXG50cmFuc2l0aW9uczpsLGFuaW1hdGlvbnM6bixhbmRyb2lkOmQsbXNpZTpOLG1zaWVEb2N1bWVudE1vZGU6Zn19XX1mdW5jdGlvbiBHZCgpe3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkYnJvd3NlclwiLFwiJHFcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsZnVuY3Rpb24oYixhLGMsZCl7ZnVuY3Rpb24gZShlLGgsbSl7dmFyIGs9Yy5kZWZlcigpLGw9ay5wcm9taXNlLG49RChtKSYmIW07aD1hLmRlZmVyKGZ1bmN0aW9uKCl7dHJ5e2sucmVzb2x2ZShlKCkpfWNhdGNoKGEpe2sucmVqZWN0KGEpLGQoYSl9ZmluYWxseXtkZWxldGUgZ1tsLiQkdGltZW91dElkXX1ufHxiLiRhcHBseSgpfSxoKTtsLiQkdGltZW91dElkPWg7Z1toXT1rO3JldHVybiBsfXZhciBnPXt9O2UuY2FuY2VsPWZ1bmN0aW9uKGIpe3JldHVybiBiJiZiLiQkdGltZW91dElkIGluIGc/KGdbYi4kJHRpbWVvdXRJZF0ucmVqZWN0KFwiY2FuY2VsZWRcIiksZGVsZXRlIGdbYi4kJHRpbWVvdXRJZF0sYS5kZWZlci5jYW5jZWwoYi4kJHRpbWVvdXRJZCkpOlxuITF9O3JldHVybiBlfV19ZnVuY3Rpb24geGEoYixhKXt2YXIgYz1iO04mJihULnNldEF0dHJpYnV0ZShcImhyZWZcIixjKSxjPVQuaHJlZik7VC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsYyk7cmV0dXJue2hyZWY6VC5ocmVmLHByb3RvY29sOlQucHJvdG9jb2w/VC5wcm90b2NvbC5yZXBsYWNlKC86JC8sXCJcIik6XCJcIixob3N0OlQuaG9zdCxzZWFyY2g6VC5zZWFyY2g/VC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sXCJcIik6XCJcIixoYXNoOlQuaGFzaD9ULmhhc2gucmVwbGFjZSgvXiMvLFwiXCIpOlwiXCIsaG9zdG5hbWU6VC5ob3N0bmFtZSxwb3J0OlQucG9ydCxwYXRobmFtZTpcIi9cIj09PVQucGF0aG5hbWUuY2hhckF0KDApP1QucGF0aG5hbWU6XCIvXCIrVC5wYXRobmFtZX19ZnVuY3Rpb24gRWIoYil7Yj13KGIpP3hhKGIpOmI7cmV0dXJuIGIucHJvdG9jb2w9PT16Yy5wcm90b2NvbCYmYi5ob3N0PT09emMuaG9zdH1mdW5jdGlvbiBIZCgpe3RoaXMuJGdldD1ZKFApfWZ1bmN0aW9uIEFjKGIpe2Z1bmN0aW9uIGEoZCxcbmUpe2lmKFcoZCkpe3ZhciBnPXt9O3EoZCxmdW5jdGlvbihiLGMpe2dbY109YShjLGIpfSk7cmV0dXJuIGd9cmV0dXJuIGIuZmFjdG9yeShkK2MsZSl9dmFyIGM9XCJGaWx0ZXJcIjt0aGlzLnJlZ2lzdGVyPWE7dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYS5nZXQoYitjKX19XTthKFwiY3VycmVuY3lcIixCYyk7YShcImRhdGVcIixDYyk7YShcImZpbHRlclwiLElkKTthKFwianNvblwiLEpkKTthKFwibGltaXRUb1wiLEtkKTthKFwibG93ZXJjYXNlXCIsTGQpO2EoXCJudW1iZXJcIixEYyk7YShcIm9yZGVyQnlcIixFYyk7YShcInVwcGVyY2FzZVwiLE1kKX1mdW5jdGlvbiBJZCgpe3JldHVybiBmdW5jdGlvbihiLGEsYyl7aWYoIUwoYikpcmV0dXJuIGI7dmFyIGQ9dHlwZW9mIGMsZT1bXTtlLmNoZWNrPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8ZS5sZW5ndGg7YisrKWlmKCFlW2JdKGEpKXJldHVybiExO3JldHVybiEwfTtcImZ1bmN0aW9uXCIhPT1kJiZcbihjPVwiYm9vbGVhblwiPT09ZCYmYz9mdW5jdGlvbihhLGIpe3JldHVybiBCYS5lcXVhbHMoYSxiKX06ZnVuY3Rpb24oYSxiKXtiPShcIlwiK2IpLnRvTG93ZXJDYXNlKCk7cmV0dXJuLTE8KFwiXCIrYSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGIpfSk7dmFyIGc9ZnVuY3Rpb24oYSxiKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYiYmXCIhXCI9PT1iLmNoYXJBdCgwKSlyZXR1cm4hZyhhLGIuc3Vic3RyKDEpKTtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJzdHJpbmdcIjpyZXR1cm4gYyhhLGIpO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJvYmplY3RcIjpyZXR1cm4gYyhhLGIpO2RlZmF1bHQ6Zm9yKHZhciBkIGluIGEpaWYoXCIkXCIhPT1kLmNoYXJBdCgwKSYmZyhhW2RdLGIpKXJldHVybiEwfXJldHVybiExO2Nhc2UgXCJhcnJheVwiOmZvcihkPTA7ZDxhLmxlbmd0aDtkKyspaWYoZyhhW2RdLGIpKXJldHVybiEwO3JldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fTtcbnN3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOmE9eyQ6YX07Y2FzZSBcIm9iamVjdFwiOmZvcih2YXIgZiBpbiBhKShmdW5jdGlvbihiKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgYVtiXSYmZS5wdXNoKGZ1bmN0aW9uKGMpe3JldHVybiBnKFwiJFwiPT1iP2M6YyYmY1tiXSxhW2JdKX0pfSkoZik7YnJlYWs7Y2FzZSBcImZ1bmN0aW9uXCI6ZS5wdXNoKGEpO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIGJ9ZD1bXTtmb3IoZj0wO2Y8Yi5sZW5ndGg7ZisrKXt2YXIgaD1iW2ZdO2UuY2hlY2soaCkmJmQucHVzaChoKX1yZXR1cm4gZH19ZnVuY3Rpb24gQmMoYil7dmFyIGE9Yi5OVU1CRVJfRk9STUFUUztyZXR1cm4gZnVuY3Rpb24oYixkKXt1KGQpJiYoZD1hLkNVUlJFTkNZX1NZTSk7cmV0dXJuIEZjKGIsYS5QQVRURVJOU1sxXSxhLkdST1VQX1NFUCxhLkRFQ0lNQUxfU0VQLDIpLnJlcGxhY2UoL1xcdTAwQTQvZyxkKX19ZnVuY3Rpb24gRGMoYil7dmFyIGE9XG5iLk5VTUJFUl9GT1JNQVRTO3JldHVybiBmdW5jdGlvbihiLGQpe3JldHVybiBGYyhiLGEuUEFUVEVSTlNbMF0sYS5HUk9VUF9TRVAsYS5ERUNJTUFMX1NFUCxkKX19ZnVuY3Rpb24gRmMoYixhLGMsZCxlKXtpZihpc05hTihiKXx8IWlzRmluaXRlKGIpKXJldHVyblwiXCI7dmFyIGc9MD5iO2I9TWF0aC5hYnMoYik7dmFyIGY9YitcIlwiLGg9XCJcIixtPVtdLGs9ITE7aWYoLTEhPT1mLmluZGV4T2YoXCJlXCIpKXt2YXIgbD1mLm1hdGNoKC8oW1xcZFxcLl0rKWUoLT8pKFxcZCspLyk7bCYmXCItXCI9PWxbMl0mJmxbM10+ZSsxP2Y9XCIwXCI6KGg9ZixrPSEwKX1pZihrKTA8ZSYmKC0xPGImJjE+YikmJihoPWIudG9GaXhlZChlKSk7ZWxzZXtmPShmLnNwbGl0KEdjKVsxXXx8XCJcIikubGVuZ3RoO3UoZSkmJihlPU1hdGgubWluKE1hdGgubWF4KGEubWluRnJhYyxmKSxhLm1heEZyYWMpKTtmPU1hdGgucG93KDEwLGUpO2I9TWF0aC5yb3VuZChiKmYpL2Y7Yj0oXCJcIitiKS5zcGxpdChHYyk7Zj1iWzBdO2I9YlsxXXx8XG5cIlwiO3ZhciBsPTAsbj1hLmxnU2l6ZSxwPWEuZ1NpemU7aWYoZi5sZW5ndGg+PW4rcClmb3IobD1mLmxlbmd0aC1uLGs9MDtrPGw7aysrKTA9PT0obC1rKSVwJiYwIT09ayYmKGgrPWMpLGgrPWYuY2hhckF0KGspO2ZvcihrPWw7azxmLmxlbmd0aDtrKyspMD09PShmLmxlbmd0aC1rKSVuJiYwIT09ayYmKGgrPWMpLGgrPWYuY2hhckF0KGspO2Zvcig7Yi5sZW5ndGg8ZTspYis9XCIwXCI7ZSYmXCIwXCIhPT1lJiYoaCs9ZCtiLnN1YnN0cigwLGUpKX1tLnB1c2goZz9hLm5lZ1ByZTphLnBvc1ByZSk7bS5wdXNoKGgpO20ucHVzaChnP2EubmVnU3VmOmEucG9zU3VmKTtyZXR1cm4gbS5qb2luKFwiXCIpfWZ1bmN0aW9uIEtiKGIsYSxjKXt2YXIgZD1cIlwiOzA+YiYmKGQ9XCItXCIsYj0tYik7Zm9yKGI9XCJcIitiO2IubGVuZ3RoPGE7KWI9XCIwXCIrYjtjJiYoYj1iLnN1YnN0cihiLmxlbmd0aC1hKSk7cmV0dXJuIGQrYn1mdW5jdGlvbiBYKGIsYSxjLGQpe2M9Y3x8MDtyZXR1cm4gZnVuY3Rpb24oZSl7ZT1lW1wiZ2V0XCIrXG5iXSgpO2lmKDA8Y3x8ZT4tYyllKz1jOzA9PT1lJiYtMTI9PWMmJihlPTEyKTtyZXR1cm4gS2IoZSxhLGQpfX1mdW5jdGlvbiBrYihiLGEpe3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlPWNbXCJnZXRcIitiXSgpLGc9SGEoYT9cIlNIT1JUXCIrYjpiKTtyZXR1cm4gZFtnXVtlXX19ZnVuY3Rpb24gQ2MoYil7ZnVuY3Rpb24gYShhKXt2YXIgYjtpZihiPWEubWF0Y2goYykpe2E9bmV3IERhdGUoMCk7dmFyIGc9MCxmPTAsaD1iWzhdP2Euc2V0VVRDRnVsbFllYXI6YS5zZXRGdWxsWWVhcixtPWJbOF0/YS5zZXRVVENIb3VyczphLnNldEhvdXJzO2JbOV0mJihnPVYoYls5XStiWzEwXSksZj1WKGJbOV0rYlsxMV0pKTtoLmNhbGwoYSxWKGJbMV0pLFYoYlsyXSktMSxWKGJbM10pKTtnPVYoYls0XXx8MCktZztmPVYoYls1XXx8MCktZjtoPVYoYls2XXx8MCk7Yj1NYXRoLnJvdW5kKDFFMypwYXJzZUZsb2F0KFwiMC5cIisoYls3XXx8MCkpKTttLmNhbGwoYSxnLGYsaCxiKX1yZXR1cm4gYX12YXIgYz1cbi9eKFxcZHs0fSktPyhcXGRcXGQpLT8oXFxkXFxkKSg/OlQoXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86XFwuKFxcZCspKT8pPyk/KFp8KFsrLV0pKFxcZFxcZCk6PyhcXGRcXGQpKT8pPyQvO3JldHVybiBmdW5jdGlvbihjLGUpe3ZhciBnPVwiXCIsZj1bXSxoLG07ZT1lfHxcIm1lZGl1bURhdGVcIjtlPWIuREFURVRJTUVfRk9STUFUU1tlXXx8ZTt3KGMpJiYoYz1OZC50ZXN0KGMpP1YoYyk6YShjKSk7cmIoYykmJihjPW5ldyBEYXRlKGMpKTtpZighS2EoYykpcmV0dXJuIGM7Zm9yKDtlOykobT1PZC5leGVjKGUpKT8oZj1mLmNvbmNhdCh1YS5jYWxsKG0sMSkpLGU9Zi5wb3AoKSk6KGYucHVzaChlKSxlPW51bGwpO3EoZixmdW5jdGlvbihhKXtoPVBkW2FdO2crPWg/aChjLGIuREFURVRJTUVfRk9STUFUUyk6YS5yZXBsYWNlKC8oXid8JyQpL2csXCJcIikucmVwbGFjZSgvJycvZyxcIidcIil9KTtyZXR1cm4gZ319ZnVuY3Rpb24gSmQoKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIHBhKGIsITApfX1mdW5jdGlvbiBLZCgpe3JldHVybiBmdW5jdGlvbihiLFxuYSl7aWYoIUwoYikmJiF3KGIpKXJldHVybiBiO2E9VihhKTtpZih3KGIpKXJldHVybiBhPzA8PWE/Yi5zbGljZSgwLGEpOmIuc2xpY2UoYSxiLmxlbmd0aCk6XCJcIjt2YXIgYz1bXSxkLGU7YT5iLmxlbmd0aD9hPWIubGVuZ3RoOmE8LWIubGVuZ3RoJiYoYT0tYi5sZW5ndGgpOzA8YT8oZD0wLGU9YSk6KGQ9Yi5sZW5ndGgrYSxlPWIubGVuZ3RoKTtmb3IoO2Q8ZTtkKyspYy5wdXNoKGJbZF0pO3JldHVybiBjfX1mdW5jdGlvbiBFYyhiKXtyZXR1cm4gZnVuY3Rpb24oYSxjLGQpe2Z1bmN0aW9uIGUoYSxiKXtyZXR1cm4gT2EoYik/ZnVuY3Rpb24oYixjKXtyZXR1cm4gYShjLGIpfTphfWlmKCFMKGEpfHwhYylyZXR1cm4gYTtjPUwoYyk/YzpbY107Yz1RYyhjLGZ1bmN0aW9uKGEpe3ZhciBjPSExLGQ9YXx8QWE7aWYodyhhKSl7aWYoXCIrXCI9PWEuY2hhckF0KDApfHxcIi1cIj09YS5jaGFyQXQoMCkpYz1cIi1cIj09YS5jaGFyQXQoMCksYT1hLnN1YnN0cmluZygxKTtkPWIoYSl9cmV0dXJuIGUoZnVuY3Rpb24oYSxcbmIpe3ZhciBjO2M9ZChhKTt2YXIgZT1kKGIpLGY9dHlwZW9mIGMsZz10eXBlb2YgZTtmPT1nPyhcInN0cmluZ1wiPT1mJiYoYz1jLnRvTG93ZXJDYXNlKCksZT1lLnRvTG93ZXJDYXNlKCkpLGM9Yz09PWU/MDpjPGU/LTE6MSk6Yz1mPGc/LTE6MTtyZXR1cm4gY30sYyl9KTtmb3IodmFyIGc9W10sZj0wO2Y8YS5sZW5ndGg7ZisrKWcucHVzaChhW2ZdKTtyZXR1cm4gZy5zb3J0KGUoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXShhLGIpO2lmKDAhPT1lKXJldHVybiBlfXJldHVybiAwfSxkKSl9fWZ1bmN0aW9uIHNhKGIpe00oYikmJihiPXtsaW5rOmJ9KTtiLnJlc3RyaWN0PWIucmVzdHJpY3R8fFwiQUNcIjtyZXR1cm4gWShiKX1mdW5jdGlvbiBIYyhiLGEpe2Z1bmN0aW9uIGMoYSxjKXtjPWM/XCItXCIrY2IoYyxcIi1cIik6XCJcIjtiLnJlbW92ZUNsYXNzKChhP2xiOm1iKStjKS5hZGRDbGFzcygoYT9tYjpsYikrYyl9dmFyIGQ9dGhpcyxlPWIucGFyZW50KCkuY29udHJvbGxlcihcImZvcm1cIil8fFxubmIsZz0wLGY9ZC4kZXJyb3I9e30saD1bXTtkLiRuYW1lPWEubmFtZXx8YS5uZ0Zvcm07ZC4kZGlydHk9ITE7ZC4kcHJpc3RpbmU9ITA7ZC4kdmFsaWQ9ITA7ZC4kaW52YWxpZD0hMTtlLiRhZGRDb250cm9sKGQpO2IuYWRkQ2xhc3MoSWEpO2MoITApO2QuJGFkZENvbnRyb2w9ZnVuY3Rpb24oYSl7d2EoYS4kbmFtZSxcImlucHV0XCIpO2gucHVzaChhKTthLiRuYW1lJiYoZFthLiRuYW1lXT1hKX07ZC4kcmVtb3ZlQ29udHJvbD1mdW5jdGlvbihhKXthLiRuYW1lJiZkW2EuJG5hbWVdPT09YSYmZGVsZXRlIGRbYS4kbmFtZV07cShmLGZ1bmN0aW9uKGIsYyl7ZC4kc2V0VmFsaWRpdHkoYywhMCxhKX0pO01hKGgsYSl9O2QuJHNldFZhbGlkaXR5PWZ1bmN0aW9uKGEsYixoKXt2YXIgbj1mW2FdO2lmKGIpbiYmKE1hKG4saCksbi5sZW5ndGh8fChnLS0sZ3x8KGMoYiksZC4kdmFsaWQ9ITAsZC4kaW52YWxpZD0hMSksZlthXT0hMSxjKCEwLGEpLGUuJHNldFZhbGlkaXR5KGEsITAsZCkpKTtlbHNle2d8fFxuYyhiKTtpZihuKXtpZigtMSE9YWIobixoKSlyZXR1cm59ZWxzZSBmW2FdPW49W10sZysrLGMoITEsYSksZS4kc2V0VmFsaWRpdHkoYSwhMSxkKTtuLnB1c2goaCk7ZC4kdmFsaWQ9ITE7ZC4kaW52YWxpZD0hMH19O2QuJHNldERpcnR5PWZ1bmN0aW9uKCl7Yi5yZW1vdmVDbGFzcyhJYSkuYWRkQ2xhc3Mob2IpO2QuJGRpcnR5PSEwO2QuJHByaXN0aW5lPSExO2UuJHNldERpcnR5KCl9O2QuJHNldFByaXN0aW5lPWZ1bmN0aW9uKCl7Yi5yZW1vdmVDbGFzcyhvYikuYWRkQ2xhc3MoSWEpO2QuJGRpcnR5PSExO2QuJHByaXN0aW5lPSEwO3EoaCxmdW5jdGlvbihhKXthLiRzZXRQcmlzdGluZSgpfSl9fWZ1bmN0aW9uIG9hKGIsYSxjLGQpe2IuJHNldFZhbGlkaXR5KGEsYyk7cmV0dXJuIGM/ZDpzfWZ1bmN0aW9uIHBiKGIsYSxjLGQsZSxnKXtpZighZS5hbmRyb2lkKXt2YXIgZj0hMTthLm9uKFwiY29tcG9zaXRpb25zdGFydFwiLGZ1bmN0aW9uKGEpe2Y9ITB9KTthLm9uKFwiY29tcG9zaXRpb25lbmRcIixcbmZ1bmN0aW9uKCl7Zj0hMX0pfXZhciBoPWZ1bmN0aW9uKCl7aWYoIWYpe3ZhciBlPWEudmFsKCk7T2EoYy5uZ1RyaW18fFwiVFwiKSYmKGU9WihlKSk7ZC4kdmlld1ZhbHVlIT09ZSYmKGIuJCRwaGFzZT9kLiRzZXRWaWV3VmFsdWUoZSk6Yi4kYXBwbHkoZnVuY3Rpb24oKXtkLiRzZXRWaWV3VmFsdWUoZSl9KSl9fTtpZihlLmhhc0V2ZW50KFwiaW5wdXRcIikpYS5vbihcImlucHV0XCIsaCk7ZWxzZXt2YXIgbSxrPWZ1bmN0aW9uKCl7bXx8KG09Zy5kZWZlcihmdW5jdGlvbigpe2goKTttPW51bGx9KSl9O2Eub24oXCJrZXlkb3duXCIsZnVuY3Rpb24oYSl7YT1hLmtleUNvZGU7OTE9PT1hfHwoMTU8YSYmMTk+YXx8Mzc8PWEmJjQwPj1hKXx8aygpfSk7aWYoZS5oYXNFdmVudChcInBhc3RlXCIpKWEub24oXCJwYXN0ZSBjdXRcIixrKX1hLm9uKFwiY2hhbmdlXCIsaCk7ZC4kcmVuZGVyPWZ1bmN0aW9uKCl7YS52YWwoZC4kaXNFbXB0eShkLiR2aWV3VmFsdWUpP1wiXCI6ZC4kdmlld1ZhbHVlKX07dmFyIGw9Yy5uZ1BhdHRlcm47XG5sJiYoKGU9bC5tYXRjaCgvXlxcLyguKilcXC8oW2dpbV0qKSQvKSk/KGw9UmVnRXhwKGVbMV0sZVsyXSksZT1mdW5jdGlvbihhKXtyZXR1cm4gb2EoZCxcInBhdHRlcm5cIixkLiRpc0VtcHR5KGEpfHxsLnRlc3QoYSksYSl9KTplPWZ1bmN0aW9uKGMpe3ZhciBlPWIuJGV2YWwobCk7aWYoIWV8fCFlLnRlc3QpdGhyb3cgdChcIm5nUGF0dGVyblwiKShcIm5vcmVnZXhwXCIsbCxlLGZhKGEpKTtyZXR1cm4gb2EoZCxcInBhdHRlcm5cIixkLiRpc0VtcHR5KGMpfHxlLnRlc3QoYyksYyl9LGQuJGZvcm1hdHRlcnMucHVzaChlKSxkLiRwYXJzZXJzLnB1c2goZSkpO2lmKGMubmdNaW5sZW5ndGgpe3ZhciBuPVYoYy5uZ01pbmxlbmd0aCk7ZT1mdW5jdGlvbihhKXtyZXR1cm4gb2EoZCxcIm1pbmxlbmd0aFwiLGQuJGlzRW1wdHkoYSl8fGEubGVuZ3RoPj1uLGEpfTtkLiRwYXJzZXJzLnB1c2goZSk7ZC4kZm9ybWF0dGVycy5wdXNoKGUpfWlmKGMubmdNYXhsZW5ndGgpe3ZhciBwPVYoYy5uZ01heGxlbmd0aCk7ZT1cbmZ1bmN0aW9uKGEpe3JldHVybiBvYShkLFwibWF4bGVuZ3RoXCIsZC4kaXNFbXB0eShhKXx8YS5sZW5ndGg8PXAsYSl9O2QuJHBhcnNlcnMucHVzaChlKTtkLiRmb3JtYXR0ZXJzLnB1c2goZSl9fWZ1bmN0aW9uIExiKGIsYSl7Yj1cIm5nQ2xhc3NcIitiO3JldHVybiBmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkFDXCIsbGluazpmdW5jdGlvbihjLGQsZSl7ZnVuY3Rpb24gZyhiKXtpZighMD09PWF8fGMuJGluZGV4JTI9PT1hKXt2YXIgZD1mKGJ8fFwiXCIpO2g/dGEoYixoKXx8ZS4kdXBkYXRlQ2xhc3MoZCxmKGgpKTplLiRhZGRDbGFzcyhkKX1oPSQoYil9ZnVuY3Rpb24gZihhKXtpZihMKGEpKXJldHVybiBhLmpvaW4oXCIgXCIpO2lmKFcoYSkpe3ZhciBiPVtdO3EoYSxmdW5jdGlvbihhLGMpe2EmJmIucHVzaChjKX0pO3JldHVybiBiLmpvaW4oXCIgXCIpfXJldHVybiBhfXZhciBoO2MuJHdhdGNoKGVbYl0sZywhMCk7ZS4kb2JzZXJ2ZShcImNsYXNzXCIsZnVuY3Rpb24oYSl7ZyhjLiRldmFsKGVbYl0pKX0pO1xuXCJuZ0NsYXNzXCIhPT1iJiZjLiR3YXRjaChcIiRpbmRleFwiLGZ1bmN0aW9uKGQsZyl7dmFyIGg9ZCYxO2lmKGghPT1nJjEpe3ZhciBuPWYoYy4kZXZhbChlW2JdKSk7aD09PWE/ZS4kYWRkQ2xhc3Mobik6ZS4kcmVtb3ZlQ2xhc3Mobil9fSl9fX19dmFyIHg9ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi50b0xvd2VyQ2FzZSgpOmJ9LEhhPWZ1bmN0aW9uKGIpe3JldHVybiB3KGIpP2IudG9VcHBlckNhc2UoKTpifSxOLHosQ2EsdWE9W10uc2xpY2UsUWQ9W10ucHVzaCxMYT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLE5hPXQoXCJuZ1wiKSxCYT1QLmFuZ3VsYXJ8fChQLmFuZ3VsYXI9e30pLFVhLEdhLGlhPVtcIjBcIixcIjBcIixcIjBcIl07Tj1WKCgvbXNpZSAoXFxkKykvLmV4ZWMoeChuYXZpZ2F0b3IudXNlckFnZW50KSl8fFtdKVsxXSk7aXNOYU4oTikmJihOPVYoKC90cmlkZW50XFwvLio7IHJ2OihcXGQrKS8uZXhlYyh4KG5hdmlnYXRvci51c2VyQWdlbnQpKXx8W10pWzFdKSk7RS4kaW5qZWN0PVtdO1xuQWEuJGluamVjdD1bXTt2YXIgWj1mdW5jdGlvbigpe3JldHVybiBTdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi50cmltKCk6Yn06ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi5yZXBsYWNlKC9eXFxzXFxzKi8sXCJcIikucmVwbGFjZSgvXFxzXFxzKiQvLFwiXCIpOmJ9fSgpO0dhPTk+Tj9mdW5jdGlvbihiKXtiPWIubm9kZU5hbWU/YjpiWzBdO3JldHVybiBiLnNjb3BlTmFtZSYmXCJIVE1MXCIhPWIuc2NvcGVOYW1lP0hhKGIuc2NvcGVOYW1lK1wiOlwiK2Iubm9kZU5hbWUpOmIubm9kZU5hbWV9OmZ1bmN0aW9uKGIpe3JldHVybiBiLm5vZGVOYW1lP2Iubm9kZU5hbWU6YlswXS5ub2RlTmFtZX07dmFyIFRjPS9bQS1aXS9nLFJkPXtmdWxsOlwiMS4yLjEyXCIsbWFqb3I6MSxtaW5vcjoyLGRvdDoxMixjb2RlTmFtZTpcImNhdWxpZmxvd2VyLWVyYWRpY2F0aW9uXCJ9LFJhPU8uY2FjaGU9e30sZGI9Ty5leHBhbmRvPVwibmctXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksWGM9MSxJYz1cblAuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9mdW5jdGlvbihiLGEsYyl7Yi5hZGRFdmVudExpc3RlbmVyKGEsYywhMSl9OmZ1bmN0aW9uKGIsYSxjKXtiLmF0dGFjaEV2ZW50KFwib25cIithLGMpfSx6Yj1QLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oYixhLGMpe2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITEpfTpmdW5jdGlvbihiLGEsYyl7Yi5kZXRhY2hFdmVudChcIm9uXCIrYSxjKX0sVmM9LyhbXFw6XFwtXFxfXSsoLikpL2csV2M9L15tb3ooW0EtWl0pLyx3Yj10KFwianFMaXRlXCIpLEZhPU8ucHJvdG90eXBlPXtyZWFkeTpmdW5jdGlvbihiKXtmdW5jdGlvbiBhKCl7Y3x8KGM9ITAsYigpKX12YXIgYz0hMTtcImNvbXBsZXRlXCI9PT1SLnJlYWR5U3RhdGU/c2V0VGltZW91dChhKToodGhpcy5vbihcIkRPTUNvbnRlbnRMb2FkZWRcIixhKSxPKFApLm9uKFwibG9hZFwiLGEpKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXt2YXIgYj1bXTtxKHRoaXMsZnVuY3Rpb24oYSl7Yi5wdXNoKFwiXCIrXG5hKX0pO3JldHVyblwiW1wiK2Iuam9pbihcIiwgXCIpK1wiXVwifSxlcTpmdW5jdGlvbihiKXtyZXR1cm4gMDw9Yj96KHRoaXNbYl0pOnoodGhpc1t0aGlzLmxlbmd0aCtiXSl9LGxlbmd0aDowLHB1c2g6UWQsc29ydDpbXS5zb3J0LHNwbGljZTpbXS5zcGxpY2V9LGZiPXt9O3EoXCJtdWx0aXBsZSBzZWxlY3RlZCBjaGVja2VkIGRpc2FibGVkIHJlYWRPbmx5IHJlcXVpcmVkIG9wZW5cIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYil7ZmJbeChiKV09Yn0pO3ZhciBmYz17fTtxKFwiaW5wdXQgc2VsZWN0IG9wdGlvbiB0ZXh0YXJlYSBidXR0b24gZm9ybSBkZXRhaWxzXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIpe2ZjW0hhKGIpXT0hMH0pO3Eoe2RhdGE6YmMsaW5oZXJpdGVkRGF0YTplYixzY29wZTpmdW5jdGlvbihiKXtyZXR1cm4geihiKS5kYXRhKFwiJHNjb3BlXCIpfHxlYihiLnBhcmVudE5vZGV8fGIsW1wiJGlzb2xhdGVTY29wZVwiLFwiJHNjb3BlXCJdKX0saXNvbGF0ZVNjb3BlOmZ1bmN0aW9uKGIpe3JldHVybiB6KGIpLmRhdGEoXCIkaXNvbGF0ZVNjb3BlXCIpfHxcbnooYikuZGF0YShcIiRpc29sYXRlU2NvcGVOb1RlbXBsYXRlXCIpfSxjb250cm9sbGVyOmNjLGluamVjdG9yOmZ1bmN0aW9uKGIpe3JldHVybiBlYihiLFwiJGluamVjdG9yXCIpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGIsYSl7Yi5yZW1vdmVBdHRyaWJ1dGUoYSl9LGhhc0NsYXNzOkFiLGNzczpmdW5jdGlvbihiLGEsYyl7YT1RYShhKTtpZihEKGMpKWIuc3R5bGVbYV09YztlbHNle3ZhciBkOzg+PU4mJihkPWIuY3VycmVudFN0eWxlJiZiLmN1cnJlbnRTdHlsZVthXSxcIlwiPT09ZCYmKGQ9XCJhdXRvXCIpKTtkPWR8fGIuc3R5bGVbYV07OD49TiYmKGQ9XCJcIj09PWQ/czpkKTtyZXR1cm4gZH19LGF0dHI6ZnVuY3Rpb24oYixhLGMpe3ZhciBkPXgoYSk7aWYoZmJbZF0paWYoRChjKSljPyhiW2FdPSEwLGIuc2V0QXR0cmlidXRlKGEsZCkpOihiW2FdPSExLGIucmVtb3ZlQXR0cmlidXRlKGQpKTtlbHNlIHJldHVybiBiW2FdfHwoYi5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShhKXx8RSkuc3BlY2lmaWVkP1xuZDpzO2Vsc2UgaWYoRChjKSliLnNldEF0dHJpYnV0ZShhLGMpO2Vsc2UgaWYoYi5nZXRBdHRyaWJ1dGUpcmV0dXJuIGI9Yi5nZXRBdHRyaWJ1dGUoYSwyKSxudWxsPT09Yj9zOmJ9LHByb3A6ZnVuY3Rpb24oYixhLGMpe2lmKEQoYykpYlthXT1jO2Vsc2UgcmV0dXJuIGJbYV19LHRleHQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCl7dmFyIGU9YVtiLm5vZGVUeXBlXTtpZih1KGQpKXJldHVybiBlP2JbZV06XCJcIjtiW2VdPWR9dmFyIGE9W107OT5OPyhhWzFdPVwiaW5uZXJUZXh0XCIsYVszXT1cIm5vZGVWYWx1ZVwiKTphWzFdPWFbM109XCJ0ZXh0Q29udGVudFwiO2IuJGR2PVwiXCI7cmV0dXJuIGJ9KCksdmFsOmZ1bmN0aW9uKGIsYSl7aWYodShhKSl7aWYoXCJTRUxFQ1RcIj09PUdhKGIpJiZiLm11bHRpcGxlKXt2YXIgYz1bXTtxKGIub3B0aW9ucyxmdW5jdGlvbihhKXthLnNlbGVjdGVkJiZjLnB1c2goYS52YWx1ZXx8YS50ZXh0KX0pO3JldHVybiAwPT09Yy5sZW5ndGg/bnVsbDpjfXJldHVybiBiLnZhbHVlfWIudmFsdWU9XG5hfSxodG1sOmZ1bmN0aW9uKGIsYSl7aWYodShhKSlyZXR1cm4gYi5pbm5lckhUTUw7Zm9yKHZhciBjPTAsZD1iLmNoaWxkTm9kZXM7YzxkLmxlbmd0aDtjKyspRGEoZFtjXSk7Yi5pbm5lckhUTUw9YX0sZW1wdHk6ZGN9LGZ1bmN0aW9uKGIsYSl7Ty5wcm90b3R5cGVbYV09ZnVuY3Rpb24oYSxkKXt2YXIgZSxnO2lmKGIhPT1kYyYmKDI9PWIubGVuZ3RoJiZiIT09QWImJmIhPT1jYz9hOmQpPT09cyl7aWYoVyhhKSl7Zm9yKGU9MDtlPHRoaXMubGVuZ3RoO2UrKylpZihiPT09YmMpYih0aGlzW2VdLGEpO2Vsc2UgZm9yKGcgaW4gYSliKHRoaXNbZV0sZyxhW2ddKTtyZXR1cm4gdGhpc31lPWIuJGR2O2c9ZT09PXM/TWF0aC5taW4odGhpcy5sZW5ndGgsMSk6dGhpcy5sZW5ndGg7Zm9yKHZhciBmPTA7ZjxnO2YrKyl7dmFyIGg9Yih0aGlzW2ZdLGEsZCk7ZT1lP2UraDpofXJldHVybiBlfWZvcihlPTA7ZTx0aGlzLmxlbmd0aDtlKyspYih0aGlzW2VdLGEsZCk7cmV0dXJuIHRoaXN9fSk7cSh7cmVtb3ZlRGF0YTokYixcbmRlYWxvYzpEYSxvbjpmdW5jdGlvbiBhKGMsZCxlLGcpe2lmKEQoZykpdGhyb3cgd2IoXCJvbmFyZ3NcIik7dmFyIGY9amEoYyxcImV2ZW50c1wiKSxoPWphKGMsXCJoYW5kbGVcIik7Znx8amEoYyxcImV2ZW50c1wiLGY9e30pO2h8fGphKGMsXCJoYW5kbGVcIixoPVljKGMsZikpO3EoZC5zcGxpdChcIiBcIiksZnVuY3Rpb24oZCl7dmFyIGc9ZltkXTtpZighZyl7aWYoXCJtb3VzZWVudGVyXCI9PWR8fFwibW91c2VsZWF2ZVwiPT1kKXt2YXIgbD1SLmJvZHkuY29udGFpbnN8fFIuYm9keS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj9mdW5jdGlvbihhLGMpe3ZhciBkPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZT1jJiZjLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1lfHwhIShlJiYxPT09ZS5ub2RlVHlwZSYmKGQuY29udGFpbnM/ZC5jb250YWlucyhlKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpJjE2KSl9OmZ1bmN0aW9uKGEsYyl7aWYoYylmb3IoO2M9XG5jLnBhcmVudE5vZGU7KWlmKGM9PT1hKXJldHVybiEwO3JldHVybiExfTtmW2RdPVtdO2EoYyx7bW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIsbW91c2VlbnRlcjpcIm1vdXNlb3ZlclwifVtkXSxmdW5jdGlvbihhKXt2YXIgYz1hLnJlbGF0ZWRUYXJnZXQ7YyYmKGM9PT10aGlzfHxsKHRoaXMsYykpfHxoKGEsZCl9KX1lbHNlIEljKGMsZCxoKSxmW2RdPVtdO2c9ZltkXX1nLnB1c2goZSl9KX0sb2ZmOmFjLG9uZTpmdW5jdGlvbihhLGMsZCl7YT16KGEpO2Eub24oYyxmdW5jdGlvbiBnKCl7YS5vZmYoYyxkKTthLm9mZihjLGcpfSk7YS5vbihjLGQpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbihhLGMpe3ZhciBkLGU9YS5wYXJlbnROb2RlO0RhKGEpO3EobmV3IE8oYyksZnVuY3Rpb24oYyl7ZD9lLmluc2VydEJlZm9yZShjLGQubmV4dFNpYmxpbmcpOmUucmVwbGFjZUNoaWxkKGMsYSk7ZD1jfSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3ZhciBjPVtdO3EoYS5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpezE9PT1cbmEubm9kZVR5cGUmJmMucHVzaChhKX0pO3JldHVybiBjfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jaGlsZE5vZGVzfHxbXX0sYXBwZW5kOmZ1bmN0aW9uKGEsYyl7cShuZXcgTyhjKSxmdW5jdGlvbihjKXsxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxhLmFwcGVuZENoaWxkKGMpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oYSxjKXtpZigxPT09YS5ub2RlVHlwZSl7dmFyIGQ9YS5maXJzdENoaWxkO3EobmV3IE8oYyksZnVuY3Rpb24oYyl7YS5pbnNlcnRCZWZvcmUoYyxkKX0pfX0sd3JhcDpmdW5jdGlvbihhLGMpe2M9eihjKVswXTt2YXIgZD1hLnBhcmVudE5vZGU7ZCYmZC5yZXBsYWNlQ2hpbGQoYyxhKTtjLmFwcGVuZENoaWxkKGEpfSxyZW1vdmU6ZnVuY3Rpb24oYSl7RGEoYSk7dmFyIGM9YS5wYXJlbnROb2RlO2MmJmMucmVtb3ZlQ2hpbGQoYSl9LGFmdGVyOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9YSxlPWEucGFyZW50Tm9kZTtxKG5ldyBPKGMpLGZ1bmN0aW9uKGEpe2UuaW5zZXJ0QmVmb3JlKGEsXG5kLm5leHRTaWJsaW5nKTtkPWF9KX0sYWRkQ2xhc3M6Q2IscmVtb3ZlQ2xhc3M6QmIsdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxjLGQpe3UoZCkmJihkPSFBYihhLGMpKTsoZD9DYjpCYikoYSxjKX0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybihhPWEucGFyZW50Tm9kZSkmJjExIT09YS5ub2RlVHlwZT9hOm51bGx9LG5leHQ6ZnVuY3Rpb24oYSl7aWYoYS5uZXh0RWxlbWVudFNpYmxpbmcpcmV0dXJuIGEubmV4dEVsZW1lbnRTaWJsaW5nO2ZvcihhPWEubmV4dFNpYmxpbmc7bnVsbCE9YSYmMSE9PWEubm9kZVR5cGU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX0sZmluZDpmdW5jdGlvbihhLGMpe3JldHVybiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYyk6W119LGNsb25lOnliLHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYyxkKXtjPShqYShhLFwiZXZlbnRzXCIpfHx7fSlbY107ZD1kfHxbXTt2YXIgZT1be3ByZXZlbnREZWZhdWx0OkUsc3RvcFByb3BhZ2F0aW9uOkV9XTtcbnEoYyxmdW5jdGlvbihjKXtjLmFwcGx5KGEsZS5jb25jYXQoZCkpfSl9fSxmdW5jdGlvbihhLGMpe08ucHJvdG90eXBlW2NdPWZ1bmN0aW9uKGMsZSxnKXtmb3IodmFyIGYsaD0wO2g8dGhpcy5sZW5ndGg7aCsrKXUoZik/KGY9YSh0aGlzW2hdLGMsZSxnKSxEKGYpJiYoZj16KGYpKSk6eGIoZixhKHRoaXNbaF0sYyxlLGcpKTtyZXR1cm4gRChmKT9mOnRoaXN9O08ucHJvdG90eXBlLmJpbmQ9Ty5wcm90b3R5cGUub247Ty5wcm90b3R5cGUudW5iaW5kPU8ucHJvdG90eXBlLm9mZn0pO1NhLnByb3RvdHlwZT17cHV0OmZ1bmN0aW9uKGEsYyl7dGhpc1tFYShhKV09Y30sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzW0VhKGEpXX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXNbYT1FYShhKV07ZGVsZXRlIHRoaXNbYV07cmV0dXJuIGN9fTt2YXIgJGM9L15mdW5jdGlvblxccypbXlxcKF0qXFwoXFxzKihbXlxcKV0qKVxcKS9tLGFkPS8sLyxiZD0vXlxccyooXz8pKFxcUys/KVxcMVxccyokLyxaYz1cbi8oKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pKS9tZyxUYT10KFwiJGluamVjdG9yXCIpLFNkPXQoXCIkYW5pbWF0ZVwiKSxUZD1bXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe3RoaXMuJCRzZWxlY3RvcnM9e307dGhpcy5yZWdpc3Rlcj1mdW5jdGlvbihjLGQpe3ZhciBlPWMrXCItYW5pbWF0aW9uXCI7aWYoYyYmXCIuXCIhPWMuY2hhckF0KDApKXRocm93IFNkKFwibm90Y3NlbFwiLGMpO3RoaXMuJCRzZWxlY3RvcnNbYy5zdWJzdHIoMSldPWU7YS5mYWN0b3J5KGUsZCl9O3RoaXMuY2xhc3NOYW1lRmlsdGVyPWZ1bmN0aW9uKGEpezE9PT1hcmd1bWVudHMubGVuZ3RoJiYodGhpcy4kJGNsYXNzTmFtZUZpbHRlcj1hIGluc3RhbmNlb2YgUmVnRXhwP2E6bnVsbCk7cmV0dXJuIHRoaXMuJCRjbGFzc05hbWVGaWx0ZXJ9O3RoaXMuJGdldD1bXCIkdGltZW91dFwiLGZ1bmN0aW9uKGEpe3JldHVybntlbnRlcjpmdW5jdGlvbihkLGUsZyxmKXtnP2cuYWZ0ZXIoZCk6KGUmJmVbMF18fChlPWcucGFyZW50KCkpLGUuYXBwZW5kKGQpKTtcbmYmJmEoZiwwLCExKX0sbGVhdmU6ZnVuY3Rpb24oZCxlKXtkLnJlbW92ZSgpO2UmJmEoZSwwLCExKX0sbW92ZTpmdW5jdGlvbihhLGMsZyxmKXt0aGlzLmVudGVyKGEsYyxnLGYpfSxhZGRDbGFzczpmdW5jdGlvbihkLGUsZyl7ZT13KGUpP2U6TChlKT9lLmpvaW4oXCIgXCIpOlwiXCI7cShkLGZ1bmN0aW9uKGEpe0NiKGEsZSl9KTtnJiZhKGcsMCwhMSl9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGQsZSxnKXtlPXcoZSk/ZTpMKGUpP2Uuam9pbihcIiBcIik6XCJcIjtxKGQsZnVuY3Rpb24oYSl7QmIoYSxlKX0pO2cmJmEoZywwLCExKX0sZW5hYmxlZDpFfX1dfV0saGE9dChcIiRjb21waWxlXCIpO2ljLiRpbmplY3Q9W1wiJHByb3ZpZGVcIixcIiQkc2FuaXRpemVVcmlQcm92aWRlclwiXTt2YXIgaGQ9L14oeFtcXDpcXC1fXXxkYXRhW1xcOlxcLV9dKS9pLG9jPXQoXCIkaW50ZXJwb2xhdGVcIiksVWQ9L14oW15cXD8jXSopKFxcPyhbXiNdKikpPygjKC4qKSk/JC8sc2Q9e2h0dHA6ODAsaHR0cHM6NDQzLGZ0cDoyMX0sR2I9dChcIiRsb2NhdGlvblwiKTtcbnRjLnByb3RvdHlwZT1IYi5wcm90b3R5cGU9c2MucHJvdG90eXBlPXskJGh0bWw1OiExLCQkcmVwbGFjZTohMSxhYnNVcmw6aWIoXCIkJGFic1VybFwiKSx1cmw6ZnVuY3Rpb24oYSxjKXtpZih1KGEpKXJldHVybiB0aGlzLiQkdXJsO3ZhciBkPVVkLmV4ZWMoYSk7ZFsxXSYmdGhpcy5wYXRoKGRlY29kZVVSSUNvbXBvbmVudChkWzFdKSk7KGRbMl18fGRbMV0pJiZ0aGlzLnNlYXJjaChkWzNdfHxcIlwiKTt0aGlzLmhhc2goZFs1XXx8XCJcIixjKTtyZXR1cm4gdGhpc30scHJvdG9jb2w6aWIoXCIkJHByb3RvY29sXCIpLGhvc3Q6aWIoXCIkJGhvc3RcIikscG9ydDppYihcIiQkcG9ydFwiKSxwYXRoOnVjKFwiJCRwYXRoXCIsZnVuY3Rpb24oYSl7cmV0dXJuXCIvXCI9PWEuY2hhckF0KDApP2E6XCIvXCIrYX0pLHNlYXJjaDpmdW5jdGlvbihhLGMpe3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHRoaXMuJCRzZWFyY2g7Y2FzZSAxOmlmKHcoYSkpdGhpcy4kJHNlYXJjaD1WYihhKTtlbHNlIGlmKFcoYSkpdGhpcy4kJHNlYXJjaD1cbmE7ZWxzZSB0aHJvdyBHYihcImlzcmNoYXJnXCIpO2JyZWFrO2RlZmF1bHQ6dShjKXx8bnVsbD09PWM/ZGVsZXRlIHRoaXMuJCRzZWFyY2hbYV06dGhpcy4kJHNlYXJjaFthXT1jfXRoaXMuJCRjb21wb3NlKCk7cmV0dXJuIHRoaXN9LGhhc2g6dWMoXCIkJGhhc2hcIixBYSkscmVwbGFjZTpmdW5jdGlvbigpe3RoaXMuJCRyZXBsYWNlPSEwO3JldHVybiB0aGlzfX07dmFyIHlhPXQoXCIkcGFyc2VcIikseGM9e30scWEsSmE9e1wibnVsbFwiOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LFwidHJ1ZVwiOmZ1bmN0aW9uKCl7cmV0dXJuITB9LFwiZmFsc2VcIjpmdW5jdGlvbigpe3JldHVybiExfSx1bmRlZmluZWQ6RSxcIitcIjpmdW5jdGlvbihhLGMsZCxlKXtkPWQoYSxjKTtlPWUoYSxjKTtyZXR1cm4gRChkKT9EKGUpP2QrZTpkOkQoZSk/ZTpzfSxcIi1cIjpmdW5jdGlvbihhLGMsZCxlKXtkPWQoYSxjKTtlPWUoYSxjKTtyZXR1cm4oRChkKT9kOjApLShEKGUpP2U6MCl9LFwiKlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsXG5jKSplKGEsYyl9LFwiL1wiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykvZShhLGMpfSxcIiVcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJWUoYSxjKX0sXCJeXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKV5lKGEsYyl9LFwiPVwiOkUsXCI9PT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPT09ZShhLGMpfSxcIiE9PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykhPT1lKGEsYyl9LFwiPT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPT1lKGEsYyl9LFwiIT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpIT1lKGEsYyl9LFwiPFwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk8ZShhLGMpfSxcIj5cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPmUoYSxjKX0sXCI8PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk8PWUoYSxjKX0sXCI+PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsXG5jKT49ZShhLGMpfSxcIiYmXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSYmZShhLGMpfSxcInx8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKXx8ZShhLGMpfSxcIiZcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJmUoYSxjKX0sXCJ8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGUoYSxjKShhLGMsZChhLGMpKX0sXCIhXCI6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiFkKGEsYyl9fSxWZD17bjpcIlxcblwiLGY6XCJcXGZcIixyOlwiXFxyXCIsdDpcIlxcdFwiLHY6XCJcXHZcIixcIidcIjpcIidcIiwnXCInOidcIid9LEpiPWZ1bmN0aW9uKGEpe3RoaXMub3B0aW9ucz1hfTtKYi5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOkpiLGxleDpmdW5jdGlvbihhKXt0aGlzLnRleHQ9YTt0aGlzLmluZGV4PTA7dGhpcy5jaD1zO3RoaXMubGFzdENoPVwiOlwiO3RoaXMudG9rZW5zPVtdO3ZhciBjO2ZvcihhPVtdO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3RoaXMuY2g9dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbmlmKHRoaXMuaXMoXCJcXFwiJ1wiKSl0aGlzLnJlYWRTdHJpbmcodGhpcy5jaCk7ZWxzZSBpZih0aGlzLmlzTnVtYmVyKHRoaXMuY2gpfHx0aGlzLmlzKFwiLlwiKSYmdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpdGhpcy5yZWFkTnVtYmVyKCk7ZWxzZSBpZih0aGlzLmlzSWRlbnQodGhpcy5jaCkpdGhpcy5yZWFkSWRlbnQoKSx0aGlzLndhcyhcInssXCIpJiYoXCJ7XCI9PT1hWzBdJiYoYz10aGlzLnRva2Vuc1t0aGlzLnRva2Vucy5sZW5ndGgtMV0pKSYmKGMuanNvbj0tMT09PWMudGV4dC5pbmRleE9mKFwiLlwiKSk7ZWxzZSBpZih0aGlzLmlzKFwiKCl7fVtdLiw7Oj9cIikpdGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OnRoaXMuY2gsanNvbjp0aGlzLndhcyhcIjpbLFwiKSYmdGhpcy5pcyhcIntbXCIpfHx0aGlzLmlzKFwifV06LFwiKX0pLHRoaXMuaXMoXCJ7W1wiKSYmYS51bnNoaWZ0KHRoaXMuY2gpLHRoaXMuaXMoXCJ9XVwiKSYmYS5zaGlmdCgpLHRoaXMuaW5kZXgrKztlbHNlIGlmKHRoaXMuaXNXaGl0ZXNwYWNlKHRoaXMuY2gpKXt0aGlzLmluZGV4Kys7XG5jb250aW51ZX1lbHNle3ZhciBkPXRoaXMuY2grdGhpcy5wZWVrKCksZT1kK3RoaXMucGVlaygyKSxnPUphW3RoaXMuY2hdLGY9SmFbZF0saD1KYVtlXTtoPyh0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6ZSxmbjpofSksdGhpcy5pbmRleCs9Myk6Zj8odGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OmQsZm46Zn0pLHRoaXMuaW5kZXgrPTIpOmc/KHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDp0aGlzLmNoLGZuOmcsanNvbjp0aGlzLndhcyhcIlssOlwiKSYmdGhpcy5pcyhcIistXCIpfSksdGhpcy5pbmRleCs9MSk6dGhpcy50aHJvd0Vycm9yKFwiVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciBcIix0aGlzLmluZGV4LHRoaXMuaW5kZXgrMSl9dGhpcy5sYXN0Q2g9dGhpcy5jaH1yZXR1cm4gdGhpcy50b2tlbnN9LGlzOmZ1bmN0aW9uKGEpe3JldHVybi0xIT09YS5pbmRleE9mKHRoaXMuY2gpfSx3YXM6ZnVuY3Rpb24oYSl7cmV0dXJuLTEhPT1cbmEuaW5kZXhPZih0aGlzLmxhc3RDaCl9LHBlZWs6ZnVuY3Rpb24oYSl7YT1hfHwxO3JldHVybiB0aGlzLmluZGV4K2E8dGhpcy50ZXh0Lmxlbmd0aD90aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgrYSk6ITF9LGlzTnVtYmVyOmZ1bmN0aW9uKGEpe3JldHVyblwiMFwiPD1hJiZcIjlcIj49YX0saXNXaGl0ZXNwYWNlOmZ1bmN0aW9uKGEpe3JldHVyblwiIFwiPT09YXx8XCJcXHJcIj09PWF8fFwiXFx0XCI9PT1hfHxcIlxcblwiPT09YXx8XCJcXHZcIj09PWF8fFwiXFx1MDBhMFwiPT09YX0saXNJZGVudDpmdW5jdGlvbihhKXtyZXR1cm5cImFcIjw9YSYmXCJ6XCI+PWF8fFwiQVwiPD1hJiZcIlpcIj49YXx8XCJfXCI9PT1hfHxcIiRcIj09PWF9LGlzRXhwT3BlcmF0b3I6ZnVuY3Rpb24oYSl7cmV0dXJuXCItXCI9PT1hfHxcIitcIj09PWF8fHRoaXMuaXNOdW1iZXIoYSl9LHRocm93RXJyb3I6ZnVuY3Rpb24oYSxjLGQpe2Q9ZHx8dGhpcy5pbmRleDtjPUQoYyk/XCJzIFwiK2MrXCItXCIrdGhpcy5pbmRleCtcIiBbXCIrdGhpcy50ZXh0LnN1YnN0cmluZyhjLGQpK1xuXCJdXCI6XCIgXCIrZDt0aHJvdyB5YShcImxleGVyclwiLGEsYyx0aGlzLnRleHQpO30scmVhZE51bWJlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT1cIlwiLGM9dGhpcy5pbmRleDt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXt2YXIgZD14KHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO2lmKFwiLlwiPT1kfHx0aGlzLmlzTnVtYmVyKGQpKWErPWQ7ZWxzZXt2YXIgZT10aGlzLnBlZWsoKTtpZihcImVcIj09ZCYmdGhpcy5pc0V4cE9wZXJhdG9yKGUpKWErPWQ7ZWxzZSBpZih0aGlzLmlzRXhwT3BlcmF0b3IoZCkmJmUmJnRoaXMuaXNOdW1iZXIoZSkmJlwiZVwiPT1hLmNoYXJBdChhLmxlbmd0aC0xKSlhKz1kO2Vsc2UgaWYoIXRoaXMuaXNFeHBPcGVyYXRvcihkKXx8ZSYmdGhpcy5pc051bWJlcihlKXx8XCJlXCIhPWEuY2hhckF0KGEubGVuZ3RoLTEpKWJyZWFrO2Vsc2UgdGhpcy50aHJvd0Vycm9yKFwiSW52YWxpZCBleHBvbmVudFwiKX10aGlzLmluZGV4Kyt9YSo9MTt0aGlzLnRva2Vucy5wdXNoKHtpbmRleDpjLFxudGV4dDphLGpzb246ITAsZm46ZnVuY3Rpb24oKXtyZXR1cm4gYX19KX0scmVhZElkZW50OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMsYz1cIlwiLGQ9dGhpcy5pbmRleCxlLGcsZixoO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe2g9dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtpZihcIi5cIj09PWh8fHRoaXMuaXNJZGVudChoKXx8dGhpcy5pc051bWJlcihoKSlcIi5cIj09PWgmJihlPXRoaXMuaW5kZXgpLGMrPWg7ZWxzZSBicmVhazt0aGlzLmluZGV4Kyt9aWYoZSlmb3IoZz10aGlzLmluZGV4O2c8dGhpcy50ZXh0Lmxlbmd0aDspe2g9dGhpcy50ZXh0LmNoYXJBdChnKTtpZihcIihcIj09PWgpe2Y9Yy5zdWJzdHIoZS1kKzEpO2M9Yy5zdWJzdHIoMCxlLWQpO3RoaXMuaW5kZXg9ZzticmVha31pZih0aGlzLmlzV2hpdGVzcGFjZShoKSlnKys7ZWxzZSBicmVha31kPXtpbmRleDpkLHRleHQ6Y307aWYoSmEuaGFzT3duUHJvcGVydHkoYykpZC5mbj1KYVtjXSxkLmpzb249SmFbY107XG5lbHNle3ZhciBtPXdjKGMsdGhpcy5vcHRpb25zLHRoaXMudGV4dCk7ZC5mbj15KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG0oYSxjKX0se2Fzc2lnbjpmdW5jdGlvbihkLGUpe3JldHVybiBqYihkLGMsZSxhLnRleHQsYS5vcHRpb25zKX19KX10aGlzLnRva2Vucy5wdXNoKGQpO2YmJih0aGlzLnRva2Vucy5wdXNoKHtpbmRleDplLHRleHQ6XCIuXCIsanNvbjohMX0pLHRoaXMudG9rZW5zLnB1c2goe2luZGV4OmUrMSx0ZXh0OmYsanNvbjohMX0pKX0scmVhZFN0cmluZzpmdW5jdGlvbihhKXt2YXIgYz10aGlzLmluZGV4O3RoaXMuaW5kZXgrKztmb3IodmFyIGQ9XCJcIixlPWEsZz0hMTt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXt2YXIgZj10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpLGU9ZStmO2lmKGcpXCJ1XCI9PT1mPyhmPXRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCsxLHRoaXMuaW5kZXgrNSksZi5tYXRjaCgvW1xcZGEtZl17NH0vaSl8fHRoaXMudGhyb3dFcnJvcihcIkludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1XCIrXG5mK1wiXVwiKSx0aGlzLmluZGV4Kz00LGQrPVN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZiwxNikpKTpkPShnPVZkW2ZdKT9kK2c6ZCtmLGc9ITE7ZWxzZSBpZihcIlxcXFxcIj09PWYpZz0hMDtlbHNle2lmKGY9PT1hKXt0aGlzLmluZGV4Kys7dGhpcy50b2tlbnMucHVzaCh7aW5kZXg6Yyx0ZXh0OmUsc3RyaW5nOmQsanNvbjohMCxmbjpmdW5jdGlvbigpe3JldHVybiBkfX0pO3JldHVybn1kKz1mfXRoaXMuaW5kZXgrK310aGlzLnRocm93RXJyb3IoXCJVbnRlcm1pbmF0ZWQgcXVvdGVcIixjKX19O3ZhciBZYT1mdW5jdGlvbihhLGMsZCl7dGhpcy5sZXhlcj1hO3RoaXMuJGZpbHRlcj1jO3RoaXMub3B0aW9ucz1kfTtZYS5aRVJPPWZ1bmN0aW9uKCl7cmV0dXJuIDB9O1lhLnByb3RvdHlwZT17Y29uc3RydWN0b3I6WWEscGFyc2U6ZnVuY3Rpb24oYSxjKXt0aGlzLnRleHQ9YTt0aGlzLmpzb249Yzt0aGlzLnRva2Vucz10aGlzLmxleGVyLmxleChhKTtjJiYodGhpcy5hc3NpZ25tZW50PXRoaXMubG9naWNhbE9SLFxudGhpcy5mdW5jdGlvbkNhbGw9dGhpcy5maWVsZEFjY2Vzcz10aGlzLm9iamVjdEluZGV4PXRoaXMuZmlsdGVyQ2hhaW49ZnVuY3Rpb24oKXt0aGlzLnRocm93RXJyb3IoXCJpcyBub3QgdmFsaWQganNvblwiLHt0ZXh0OmEsaW5kZXg6MH0pfSk7dmFyIGQ9Yz90aGlzLnByaW1hcnkoKTp0aGlzLnN0YXRlbWVudHMoKTswIT09dGhpcy50b2tlbnMubGVuZ3RoJiZ0aGlzLnRocm93RXJyb3IoXCJpcyBhbiB1bmV4cGVjdGVkIHRva2VuXCIsdGhpcy50b2tlbnNbMF0pO2QubGl0ZXJhbD0hIWQubGl0ZXJhbDtkLmNvbnN0YW50PSEhZC5jb25zdGFudDtyZXR1cm4gZH0scHJpbWFyeTpmdW5jdGlvbigpe3ZhciBhO2lmKHRoaXMuZXhwZWN0KFwiKFwiKSlhPXRoaXMuZmlsdGVyQ2hhaW4oKSx0aGlzLmNvbnN1bWUoXCIpXCIpO2Vsc2UgaWYodGhpcy5leHBlY3QoXCJbXCIpKWE9dGhpcy5hcnJheURlY2xhcmF0aW9uKCk7ZWxzZSBpZih0aGlzLmV4cGVjdChcIntcIikpYT10aGlzLm9iamVjdCgpO2Vsc2V7dmFyIGM9XG50aGlzLmV4cGVjdCgpOyhhPWMuZm4pfHx0aGlzLnRocm93RXJyb3IoXCJub3QgYSBwcmltYXJ5IGV4cHJlc3Npb25cIixjKTtjLmpzb24mJihhLmNvbnN0YW50PSEwLGEubGl0ZXJhbD0hMCl9Zm9yKHZhciBkO2M9dGhpcy5leHBlY3QoXCIoXCIsXCJbXCIsXCIuXCIpOylcIihcIj09PWMudGV4dD8oYT10aGlzLmZ1bmN0aW9uQ2FsbChhLGQpLGQ9bnVsbCk6XCJbXCI9PT1jLnRleHQ/KGQ9YSxhPXRoaXMub2JqZWN0SW5kZXgoYSkpOlwiLlwiPT09Yy50ZXh0PyhkPWEsYT10aGlzLmZpZWxkQWNjZXNzKGEpKTp0aGlzLnRocm93RXJyb3IoXCJJTVBPU1NJQkxFXCIpO3JldHVybiBhfSx0aHJvd0Vycm9yOmZ1bmN0aW9uKGEsYyl7dGhyb3cgeWEoXCJzeW50YXhcIixjLnRleHQsYSxjLmluZGV4KzEsdGhpcy50ZXh0LHRoaXMudGV4dC5zdWJzdHJpbmcoYy5pbmRleCkpO30scGVla1Rva2VuOmZ1bmN0aW9uKCl7aWYoMD09PXRoaXMudG9rZW5zLmxlbmd0aCl0aHJvdyB5YShcInVlb2VcIix0aGlzLnRleHQpO3JldHVybiB0aGlzLnRva2Vuc1swXX0sXG5wZWVrOmZ1bmN0aW9uKGEsYyxkLGUpe2lmKDA8dGhpcy50b2tlbnMubGVuZ3RoKXt2YXIgZz10aGlzLnRva2Vuc1swXSxmPWcudGV4dDtpZihmPT09YXx8Zj09PWN8fGY9PT1kfHxmPT09ZXx8IShhfHxjfHxkfHxlKSlyZXR1cm4gZ31yZXR1cm4hMX0sZXhwZWN0OmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybihhPXRoaXMucGVlayhhLGMsZCxlKSk/KHRoaXMuanNvbiYmIWEuanNvbiYmdGhpcy50aHJvd0Vycm9yKFwiaXMgbm90IHZhbGlkIGpzb25cIixhKSx0aGlzLnRva2Vucy5zaGlmdCgpLGEpOiExfSxjb25zdW1lOmZ1bmN0aW9uKGEpe3RoaXMuZXhwZWN0KGEpfHx0aGlzLnRocm93RXJyb3IoXCJpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgW1wiK2ErXCJdXCIsdGhpcy5wZWVrKCkpfSx1bmFyeUZuOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIHkoZnVuY3Rpb24oZCxlKXtyZXR1cm4gYShkLGUsYyl9LHtjb25zdGFudDpjLmNvbnN0YW50fSl9LHRlcm5hcnlGbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIHkoZnVuY3Rpb24oZSxcbmcpe3JldHVybiBhKGUsZyk/YyhlLGcpOmQoZSxnKX0se2NvbnN0YW50OmEuY29uc3RhbnQmJmMuY29uc3RhbnQmJmQuY29uc3RhbnR9KX0sYmluYXJ5Rm46ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB5KGZ1bmN0aW9uKGUsZyl7cmV0dXJuIGMoZSxnLGEsZCl9LHtjb25zdGFudDphLmNvbnN0YW50JiZkLmNvbnN0YW50fSl9LHN0YXRlbWVudHM6ZnVuY3Rpb24oKXtmb3IodmFyIGE9W107OylpZigwPHRoaXMudG9rZW5zLmxlbmd0aCYmIXRoaXMucGVlayhcIn1cIixcIilcIixcIjtcIixcIl1cIikmJmEucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpLCF0aGlzLmV4cGVjdChcIjtcIikpcmV0dXJuIDE9PT1hLmxlbmd0aD9hWzBdOmZ1bmN0aW9uKGMsZCl7Zm9yKHZhciBlLGc9MDtnPGEubGVuZ3RoO2crKyl7dmFyIGY9YVtnXTtmJiYoZT1mKGMsZCkpfXJldHVybiBlfX0sZmlsdGVyQ2hhaW46ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5leHByZXNzaW9uKCksYzs7KWlmKGM9dGhpcy5leHBlY3QoXCJ8XCIpKWE9XG50aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmZpbHRlcigpKTtlbHNlIHJldHVybiBhfSxmaWx0ZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5leHBlY3QoKSxjPXRoaXMuJGZpbHRlcihhLnRleHQpLGQ9W107OylpZihhPXRoaXMuZXhwZWN0KFwiOlwiKSlkLnB1c2godGhpcy5leHByZXNzaW9uKCkpO2Vsc2V7dmFyIGU9ZnVuY3Rpb24oYSxlLGgpe2g9W2hdO2Zvcih2YXIgbT0wO208ZC5sZW5ndGg7bSsrKWgucHVzaChkW21dKGEsZSkpO3JldHVybiBjLmFwcGx5KGEsaCl9O3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlfX19LGV4cHJlc3Npb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hc3NpZ25tZW50KCl9LGFzc2lnbm1lbnQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRlcm5hcnkoKSxjLGQ7cmV0dXJuKGQ9dGhpcy5leHBlY3QoXCI9XCIpKT8oYS5hc3NpZ258fHRoaXMudGhyb3dFcnJvcihcImltcGxpZXMgYXNzaWdubWVudCBidXQgW1wiK3RoaXMudGV4dC5zdWJzdHJpbmcoMCxkLmluZGV4KStcblwiXSBjYW4gbm90IGJlIGFzc2lnbmVkIHRvXCIsZCksYz10aGlzLnRlcm5hcnkoKSxmdW5jdGlvbihkLGcpe3JldHVybiBhLmFzc2lnbihkLGMoZCxnKSxnKX0pOmF9LHRlcm5hcnk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmxvZ2ljYWxPUigpLGMsZDtpZih0aGlzLmV4cGVjdChcIj9cIikpe2M9dGhpcy50ZXJuYXJ5KCk7aWYoZD10aGlzLmV4cGVjdChcIjpcIikpcmV0dXJuIHRoaXMudGVybmFyeUZuKGEsYyx0aGlzLnRlcm5hcnkoKSk7dGhpcy50aHJvd0Vycm9yKFwiZXhwZWN0ZWQgOlwiLGQpfWVsc2UgcmV0dXJuIGF9LGxvZ2ljYWxPUjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmxvZ2ljYWxBTkQoKSxjOzspaWYoYz10aGlzLmV4cGVjdChcInx8XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5sb2dpY2FsQU5EKCkpO2Vsc2UgcmV0dXJuIGF9LGxvZ2ljYWxBTkQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmVxdWFsaXR5KCksYztpZihjPXRoaXMuZXhwZWN0KFwiJiZcIikpYT10aGlzLmJpbmFyeUZuKGEsXG5jLmZuLHRoaXMubG9naWNhbEFORCgpKTtyZXR1cm4gYX0sZXF1YWxpdHk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnJlbGF0aW9uYWwoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCI9PVwiLFwiIT1cIixcIj09PVwiLFwiIT09XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5lcXVhbGl0eSgpKTtyZXR1cm4gYX0scmVsYXRpb25hbDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuYWRkaXRpdmUoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCI8XCIsXCI+XCIsXCI8PVwiLFwiPj1cIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLnJlbGF0aW9uYWwoKSk7cmV0dXJuIGF9LGFkZGl0aXZlOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMubXVsdGlwbGljYXRpdmUoKSxjO2M9dGhpcy5leHBlY3QoXCIrXCIsXCItXCIpOylhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMubXVsdGlwbGljYXRpdmUoKSk7cmV0dXJuIGF9LG11bHRpcGxpY2F0aXZlOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMudW5hcnkoKSxjO2M9dGhpcy5leHBlY3QoXCIqXCIsXG5cIi9cIixcIiVcIik7KWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy51bmFyeSgpKTtyZXR1cm4gYX0sdW5hcnk6ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gdGhpcy5leHBlY3QoXCIrXCIpP3RoaXMucHJpbWFyeSgpOihhPXRoaXMuZXhwZWN0KFwiLVwiKSk/dGhpcy5iaW5hcnlGbihZYS5aRVJPLGEuZm4sdGhpcy51bmFyeSgpKTooYT10aGlzLmV4cGVjdChcIiFcIikpP3RoaXMudW5hcnlGbihhLmZuLHRoaXMudW5hcnkoKSk6dGhpcy5wcmltYXJ5KCl9LGZpZWxkQWNjZXNzOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZD10aGlzLmV4cGVjdCgpLnRleHQsZT13YyhkLHRoaXMub3B0aW9ucyx0aGlzLnRleHQpO3JldHVybiB5KGZ1bmN0aW9uKGMsZCxoKXtyZXR1cm4gZShofHxhKGMsZCkpfSx7YXNzaWduOmZ1bmN0aW9uKGUsZixoKXtyZXR1cm4gamIoYShlLGgpLGQsZixjLnRleHQsYy5vcHRpb25zKX19KX0sb2JqZWN0SW5kZXg6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxkPXRoaXMuZXhwcmVzc2lvbigpO1xudGhpcy5jb25zdW1lKFwiXVwiKTtyZXR1cm4geShmdW5jdGlvbihlLGcpe3ZhciBmPWEoZSxnKSxoPWQoZSxnKSxtO2lmKCFmKXJldHVybiBzOyhmPVhhKGZbaF0sYy50ZXh0KSkmJihmLnRoZW4mJmMub3B0aW9ucy51bndyYXBQcm9taXNlcykmJihtPWYsXCIkJHZcImluIGZ8fChtLiQkdj1zLG0udGhlbihmdW5jdGlvbihhKXttLiQkdj1hfSkpLGY9Zi4kJHYpO3JldHVybiBmfSx7YXNzaWduOmZ1bmN0aW9uKGUsZyxmKXt2YXIgaD1kKGUsZik7cmV0dXJuIFhhKGEoZSxmKSxjLnRleHQpW2hdPWd9fSl9LGZ1bmN0aW9uQ2FsbDpmdW5jdGlvbihhLGMpe3ZhciBkPVtdO2lmKFwiKVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkbyBkLnB1c2godGhpcy5leHByZXNzaW9uKCkpO3doaWxlKHRoaXMuZXhwZWN0KFwiLFwiKSl9dGhpcy5jb25zdW1lKFwiKVwiKTt2YXIgZT10aGlzO3JldHVybiBmdW5jdGlvbihnLGYpe2Zvcih2YXIgaD1bXSxtPWM/YyhnLGYpOmcsaz0wO2s8ZC5sZW5ndGg7aysrKWgucHVzaChkW2tdKGcsXG5mKSk7az1hKGcsZixtKXx8RTtYYShtLGUudGV4dCk7WGEoayxlLnRleHQpO2g9ay5hcHBseT9rLmFwcGx5KG0saCk6ayhoWzBdLGhbMV0saFsyXSxoWzNdLGhbNF0pO3JldHVybiBYYShoLGUudGV4dCl9fSxhcnJheURlY2xhcmF0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9W10sYz0hMDtpZihcIl1cIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG97dmFyIGQ9dGhpcy5leHByZXNzaW9uKCk7YS5wdXNoKGQpO2QuY29uc3RhbnR8fChjPSExKX13aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIl1cIik7cmV0dXJuIHkoZnVuY3Rpb24oYyxkKXtmb3IodmFyIGY9W10saD0wO2g8YS5sZW5ndGg7aCsrKWYucHVzaChhW2hdKGMsZCkpO3JldHVybiBmfSx7bGl0ZXJhbDohMCxjb25zdGFudDpjfSl9LG9iamVjdDpmdW5jdGlvbigpe3ZhciBhPVtdLGM9ITA7aWYoXCJ9XCIhPT10aGlzLnBlZWtUb2tlbigpLnRleHQpe2Rve3ZhciBkPXRoaXMuZXhwZWN0KCksZD1kLnN0cmluZ3x8ZC50ZXh0O1xudGhpcy5jb25zdW1lKFwiOlwiKTt2YXIgZT10aGlzLmV4cHJlc3Npb24oKTthLnB1c2goe2tleTpkLHZhbHVlOmV9KTtlLmNvbnN0YW50fHwoYz0hMSl9d2hpbGUodGhpcy5leHBlY3QoXCIsXCIpKX10aGlzLmNvbnN1bWUoXCJ9XCIpO3JldHVybiB5KGZ1bmN0aW9uKGMsZCl7Zm9yKHZhciBlPXt9LG09MDttPGEubGVuZ3RoO20rKyl7dmFyIGs9YVttXTtlW2sua2V5XT1rLnZhbHVlKGMsZCl9cmV0dXJuIGV9LHtsaXRlcmFsOiEwLGNvbnN0YW50OmN9KX19O3ZhciBJYj17fSxyYT10KFwiJHNjZVwiKSxlYT17SFRNTDpcImh0bWxcIixDU1M6XCJjc3NcIixVUkw6XCJ1cmxcIixSRVNPVVJDRV9VUkw6XCJyZXNvdXJjZVVybFwiLEpTOlwianNcIn0sVD1SLmNyZWF0ZUVsZW1lbnQoXCJhXCIpLHpjPXhhKFAubG9jYXRpb24uaHJlZiwhMCk7QWMuJGluamVjdD1bXCIkcHJvdmlkZVwiXTtCYy4kaW5qZWN0PVtcIiRsb2NhbGVcIl07RGMuJGluamVjdD1bXCIkbG9jYWxlXCJdO3ZhciBHYz1cIi5cIixQZD17eXl5eTpYKFwiRnVsbFllYXJcIiw0KSxcbnl5OlgoXCJGdWxsWWVhclwiLDIsMCwhMCkseTpYKFwiRnVsbFllYXJcIiwxKSxNTU1NOmtiKFwiTW9udGhcIiksTU1NOmtiKFwiTW9udGhcIiwhMCksTU06WChcIk1vbnRoXCIsMiwxKSxNOlgoXCJNb250aFwiLDEsMSksZGQ6WChcIkRhdGVcIiwyKSxkOlgoXCJEYXRlXCIsMSksSEg6WChcIkhvdXJzXCIsMiksSDpYKFwiSG91cnNcIiwxKSxoaDpYKFwiSG91cnNcIiwyLC0xMiksaDpYKFwiSG91cnNcIiwxLC0xMiksbW06WChcIk1pbnV0ZXNcIiwyKSxtOlgoXCJNaW51dGVzXCIsMSksc3M6WChcIlNlY29uZHNcIiwyKSxzOlgoXCJTZWNvbmRzXCIsMSksc3NzOlgoXCJNaWxsaXNlY29uZHNcIiwzKSxFRUVFOmtiKFwiRGF5XCIpLEVFRTprYihcIkRheVwiLCEwKSxhOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIDEyPmEuZ2V0SG91cnMoKT9jLkFNUE1TWzBdOmMuQU1QTVNbMV19LFo6ZnVuY3Rpb24oYSl7YT0tMSphLmdldFRpbWV6b25lT2Zmc2V0KCk7cmV0dXJuIGE9KDA8PWE/XCIrXCI6XCJcIikrKEtiKE1hdGhbMDxhP1wiZmxvb3JcIjpcImNlaWxcIl0oYS82MCksMikrXG5LYihNYXRoLmFicyhhJTYwKSwyKSl9fSxPZD0vKCg/OlteeU1kSGhtc2FaRSddKyl8KD86Jyg/OlteJ118JycpKicpfCg/OkUrfHkrfE0rfGQrfEgrfGgrfG0rfHMrfGF8WikpKC4qKS8sTmQ9L15cXC0/XFxkKyQvO0NjLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTt2YXIgTGQ9WSh4KSxNZD1ZKEhhKTtFYy4kaW5qZWN0PVtcIiRwYXJzZVwiXTt2YXIgV2Q9WSh7cmVzdHJpY3Q6XCJFXCIsY29tcGlsZTpmdW5jdGlvbihhLGMpezg+PU4mJihjLmhyZWZ8fGMubmFtZXx8Yy4kc2V0KFwiaHJlZlwiLFwiXCIpLGEuYXBwZW5kKFIuY3JlYXRlQ29tbWVudChcIklFIGZpeFwiKSkpO2lmKCFjLmhyZWYmJiFjLnhsaW5rSHJlZiYmIWMubmFtZSlyZXR1cm4gZnVuY3Rpb24oYSxjKXt2YXIgZz1cIltvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddXCI9PT1MYS5jYWxsKGMucHJvcChcImhyZWZcIikpP1wieGxpbms6aHJlZlwiOlwiaHJlZlwiO2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKGEpe2MuYXR0cihnKXx8YS5wcmV2ZW50RGVmYXVsdCgpfSl9fX0pLFxuTWI9e307cShmYixmdW5jdGlvbihhLGMpe2lmKFwibXVsdGlwbGVcIiE9YSl7dmFyIGQ9bGEoXCJuZy1cIitjKTtNYltkXT1mdW5jdGlvbigpe3JldHVybntwcmlvcml0eToxMDAsbGluazpmdW5jdGlvbihhLGcsZil7YS4kd2F0Y2goZltkXSxmdW5jdGlvbihhKXtmLiRzZXQoYywhIWEpfSl9fX19fSk7cShbXCJzcmNcIixcInNyY3NldFwiLFwiaHJlZlwiXSxmdW5jdGlvbihhKXt2YXIgYz1sYShcIm5nLVwiK2EpO01iW2NdPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5Ojk5LGxpbms6ZnVuY3Rpb24oZCxlLGcpe2cuJG9ic2VydmUoYyxmdW5jdGlvbihjKXtjJiYoZy4kc2V0KGEsYyksTiYmZS5wcm9wKGEsZ1thXSkpfSl9fX19KTt2YXIgbmI9eyRhZGRDb250cm9sOkUsJHJlbW92ZUNvbnRyb2w6RSwkc2V0VmFsaWRpdHk6RSwkc2V0RGlydHk6RSwkc2V0UHJpc3RpbmU6RX07SGMuJGluamVjdD1bXCIkZWxlbWVudFwiLFwiJGF0dHJzXCIsXCIkc2NvcGVcIl07dmFyIEpjPWZ1bmN0aW9uKGEpe3JldHVybltcIiR0aW1lb3V0XCIsXG5mdW5jdGlvbihjKXtyZXR1cm57bmFtZTpcImZvcm1cIixyZXN0cmljdDphP1wiRUFDXCI6XCJFXCIsY29udHJvbGxlcjpIYyxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihhLGUsZyxmKXtpZighZy5hY3Rpb24pe3ZhciBoPWZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOmEucmV0dXJuVmFsdWU9ITF9O0ljKGVbMF0sXCJzdWJtaXRcIixoKTtlLm9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2MoZnVuY3Rpb24oKXt6YihlWzBdLFwic3VibWl0XCIsaCl9LDAsITEpfSl9dmFyIG09ZS5wYXJlbnQoKS5jb250cm9sbGVyKFwiZm9ybVwiKSxrPWcubmFtZXx8Zy5uZ0Zvcm07ayYmamIoYSxrLGYsayk7aWYobSllLm9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe20uJHJlbW92ZUNvbnRyb2woZik7ayYmamIoYSxrLHMsayk7eShmLG5iKX0pfX19fX1dfSxYZD1KYygpLFlkPUpjKCEwKSxaZD0vXihmdHB8aHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiVAIVxcLVxcL10pKT8kLyxcbiRkPS9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi4tXStAW2EtejAtOS1dKyhcXC5bYS16MC05LV0rKSokL2ksYWU9L15cXHMqKFxcLXxcXCspPyhcXGQrfChcXGQqKFxcLlxcZCopKSlcXHMqJC8sS2M9e3RleHQ6cGIsbnVtYmVyOmZ1bmN0aW9uKGEsYyxkLGUsZyxmKXtwYihhLGMsZCxlLGcsZik7ZS4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGEpe3ZhciBjPWUuJGlzRW1wdHkoYSk7aWYoY3x8YWUudGVzdChhKSlyZXR1cm4gZS4kc2V0VmFsaWRpdHkoXCJudW1iZXJcIiwhMCksXCJcIj09PWE/bnVsbDpjP2E6cGFyc2VGbG9hdChhKTtlLiRzZXRWYWxpZGl0eShcIm51bWJlclwiLCExKTtyZXR1cm4gc30pO2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gZS4kaXNFbXB0eShhKT9cIlwiOlwiXCIrYX0pO2QubWluJiYoYT1mdW5jdGlvbihhKXt2YXIgYz1wYXJzZUZsb2F0KGQubWluKTtyZXR1cm4gb2EoZSxcIm1pblwiLGUuJGlzRW1wdHkoYSl8fGE+PWMsYSl9LGUuJHBhcnNlcnMucHVzaChhKSxlLiRmb3JtYXR0ZXJzLnB1c2goYSkpO1xuZC5tYXgmJihhPWZ1bmN0aW9uKGEpe3ZhciBjPXBhcnNlRmxvYXQoZC5tYXgpO3JldHVybiBvYShlLFwibWF4XCIsZS4kaXNFbXB0eShhKXx8YTw9YyxhKX0sZS4kcGFyc2Vycy5wdXNoKGEpLGUuJGZvcm1hdHRlcnMucHVzaChhKSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBvYShlLFwibnVtYmVyXCIsZS4kaXNFbXB0eShhKXx8cmIoYSksYSl9KX0sdXJsOmZ1bmN0aW9uKGEsYyxkLGUsZyxmKXtwYihhLGMsZCxlLGcsZik7YT1mdW5jdGlvbihhKXtyZXR1cm4gb2EoZSxcInVybFwiLGUuJGlzRW1wdHkoYSl8fFpkLnRlc3QoYSksYSl9O2UuJGZvcm1hdHRlcnMucHVzaChhKTtlLiRwYXJzZXJzLnB1c2goYSl9LGVtYWlsOmZ1bmN0aW9uKGEsYyxkLGUsZyxmKXtwYihhLGMsZCxlLGcsZik7YT1mdW5jdGlvbihhKXtyZXR1cm4gb2EoZSxcImVtYWlsXCIsZS4kaXNFbXB0eShhKXx8JGQudGVzdChhKSxhKX07ZS4kZm9ybWF0dGVycy5wdXNoKGEpO2UuJHBhcnNlcnMucHVzaChhKX0sXG5yYWRpbzpmdW5jdGlvbihhLGMsZCxlKXt1KGQubmFtZSkmJmMuYXR0cihcIm5hbWVcIixaYSgpKTtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2NbMF0uY2hlY2tlZCYmYS4kYXBwbHkoZnVuY3Rpb24oKXtlLiRzZXRWaWV3VmFsdWUoZC52YWx1ZSl9KX0pO2UuJHJlbmRlcj1mdW5jdGlvbigpe2NbMF0uY2hlY2tlZD1kLnZhbHVlPT1lLiR2aWV3VmFsdWV9O2QuJG9ic2VydmUoXCJ2YWx1ZVwiLGUuJHJlbmRlcil9LGNoZWNrYm94OmZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBnPWQubmdUcnVlVmFsdWUsZj1kLm5nRmFsc2VWYWx1ZTt3KGcpfHwoZz0hMCk7dyhmKXx8KGY9ITEpO2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXtlLiRzZXRWaWV3VmFsdWUoY1swXS5jaGVja2VkKX0pfSk7ZS4kcmVuZGVyPWZ1bmN0aW9uKCl7Y1swXS5jaGVja2VkPWUuJHZpZXdWYWx1ZX07ZS4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4gYSE9PWd9O2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gYT09PVxuZ30pO2UuJHBhcnNlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gYT9nOmZ9KX0saGlkZGVuOkUsYnV0dG9uOkUsc3VibWl0OkUscmVzZXQ6RX0sTGM9W1wiJGJyb3dzZXJcIixcIiRzbmlmZmVyXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVxdWlyZTpcIj9uZ01vZGVsXCIsbGluazpmdW5jdGlvbihkLGUsZyxmKXtmJiYoS2NbeChnLnR5cGUpXXx8S2MudGV4dCkoZCxlLGcsZixjLGEpfX19XSxtYj1cIm5nLXZhbGlkXCIsbGI9XCJuZy1pbnZhbGlkXCIsSWE9XCJuZy1wcmlzdGluZVwiLG9iPVwibmctZGlydHlcIixiZT1bXCIkc2NvcGVcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkYXR0cnNcIixcIiRlbGVtZW50XCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGMsZCxlLGcpe2Z1bmN0aW9uIGYoYSxjKXtjPWM/XCItXCIrY2IoYyxcIi1cIik6XCJcIjtlLnJlbW92ZUNsYXNzKChhP2xiOm1iKStjKS5hZGRDbGFzcygoYT9tYjpsYikrYyl9dGhpcy4kbW9kZWxWYWx1ZT10aGlzLiR2aWV3VmFsdWU9TnVtYmVyLk5hTjtcbnRoaXMuJHBhcnNlcnM9W107dGhpcy4kZm9ybWF0dGVycz1bXTt0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzPVtdO3RoaXMuJHByaXN0aW5lPSEwO3RoaXMuJGRpcnR5PSExO3RoaXMuJHZhbGlkPSEwO3RoaXMuJGludmFsaWQ9ITE7dGhpcy4kbmFtZT1kLm5hbWU7dmFyIGg9ZyhkLm5nTW9kZWwpLG09aC5hc3NpZ247aWYoIW0pdGhyb3cgdChcIm5nTW9kZWxcIikoXCJub25hc3NpZ25cIixkLm5nTW9kZWwsZmEoZSkpO3RoaXMuJHJlbmRlcj1FO3RoaXMuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSl8fFwiXCI9PT1hfHxudWxsPT09YXx8YSE9PWF9O3ZhciBrPWUuaW5oZXJpdGVkRGF0YShcIiRmb3JtQ29udHJvbGxlclwiKXx8bmIsbD0wLG49dGhpcy4kZXJyb3I9e307ZS5hZGRDbGFzcyhJYSk7ZighMCk7dGhpcy4kc2V0VmFsaWRpdHk9ZnVuY3Rpb24oYSxjKXtuW2FdIT09IWMmJihjPyhuW2FdJiZsLS0sbHx8KGYoITApLHRoaXMuJHZhbGlkPSEwLHRoaXMuJGludmFsaWQ9ITEpKTooZighMSksXG50aGlzLiRpbnZhbGlkPSEwLHRoaXMuJHZhbGlkPSExLGwrKyksblthXT0hYyxmKGMsYSksay4kc2V0VmFsaWRpdHkoYSxjLHRoaXMpKX07dGhpcy4kc2V0UHJpc3RpbmU9ZnVuY3Rpb24oKXt0aGlzLiRkaXJ0eT0hMTt0aGlzLiRwcmlzdGluZT0hMDtlLnJlbW92ZUNsYXNzKG9iKS5hZGRDbGFzcyhJYSl9O3RoaXMuJHNldFZpZXdWYWx1ZT1mdW5jdGlvbihkKXt0aGlzLiR2aWV3VmFsdWU9ZDt0aGlzLiRwcmlzdGluZSYmKHRoaXMuJGRpcnR5PSEwLHRoaXMuJHByaXN0aW5lPSExLGUucmVtb3ZlQ2xhc3MoSWEpLmFkZENsYXNzKG9iKSxrLiRzZXREaXJ0eSgpKTtxKHRoaXMuJHBhcnNlcnMsZnVuY3Rpb24oYSl7ZD1hKGQpfSk7dGhpcy4kbW9kZWxWYWx1ZSE9PWQmJih0aGlzLiRtb2RlbFZhbHVlPWQsbShhLGQpLHEodGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycyxmdW5jdGlvbihhKXt0cnl7YSgpfWNhdGNoKGQpe2MoZCl9fSkpfTt2YXIgcD10aGlzO2EuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGM9XG5oKGEpO2lmKHAuJG1vZGVsVmFsdWUhPT1jKXt2YXIgZD1wLiRmb3JtYXR0ZXJzLGU9ZC5sZW5ndGg7Zm9yKHAuJG1vZGVsVmFsdWU9YztlLS07KWM9ZFtlXShjKTtwLiR2aWV3VmFsdWUhPT1jJiYocC4kdmlld1ZhbHVlPWMscC4kcmVuZGVyKCkpfXJldHVybiBjfSl9XSxjZT1mdW5jdGlvbigpe3JldHVybntyZXF1aXJlOltcIm5nTW9kZWxcIixcIl4/Zm9ybVwiXSxjb250cm9sbGVyOmJlLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGc9ZVswXSxmPWVbMV18fG5iO2YuJGFkZENvbnRyb2woZyk7YS4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7Zi4kcmVtb3ZlQ29udHJvbChnKX0pfX19LGRlPVkoe3JlcXVpcmU6XCJuZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsZCxlKXtlLiR2aWV3Q2hhbmdlTGlzdGVuZXJzLnB1c2goZnVuY3Rpb24oKXthLiRldmFsKGQubmdDaGFuZ2UpfSl9fSksTWM9ZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpcIj9uZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsXG5kLGUpe2lmKGUpe2QucmVxdWlyZWQ9ITA7dmFyIGc9ZnVuY3Rpb24oYSl7aWYoZC5yZXF1aXJlZCYmZS4kaXNFbXB0eShhKSllLiRzZXRWYWxpZGl0eShcInJlcXVpcmVkXCIsITEpO2Vsc2UgcmV0dXJuIGUuJHNldFZhbGlkaXR5KFwicmVxdWlyZWRcIiwhMCksYX07ZS4kZm9ybWF0dGVycy5wdXNoKGcpO2UuJHBhcnNlcnMudW5zaGlmdChnKTtkLiRvYnNlcnZlKFwicmVxdWlyZWRcIixmdW5jdGlvbigpe2coZS4kdmlld1ZhbHVlKX0pfX19fSxlZT1mdW5jdGlvbigpe3JldHVybntyZXF1aXJlOlwibmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGc9KGE9L1xcLyguKilcXC8vLmV4ZWMoZC5uZ0xpc3QpKSYmUmVnRXhwKGFbMV0pfHxkLm5nTGlzdHx8XCIsXCI7ZS4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGEpe2lmKCF1KGEpKXt2YXIgYz1bXTthJiZxKGEuc3BsaXQoZyksZnVuY3Rpb24oYSl7YSYmYy5wdXNoKFooYSkpfSk7cmV0dXJuIGN9fSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBMKGEpP1xuYS5qb2luKFwiLCBcIik6c30pO2UuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIWF8fCFhLmxlbmd0aH19fX0sZmU9L14odHJ1ZXxmYWxzZXxcXGQrKSQvLGdlPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGZlLnRlc3QoYy5uZ1ZhbHVlKT9mdW5jdGlvbihhLGMsZyl7Zy4kc2V0KFwidmFsdWVcIixhLiRldmFsKGcubmdWYWx1ZSkpfTpmdW5jdGlvbihhLGMsZyl7YS4kd2F0Y2goZy5uZ1ZhbHVlLGZ1bmN0aW9uKGEpe2cuJHNldChcInZhbHVlXCIsYSl9KX19fX0saGU9c2EoZnVuY3Rpb24oYSxjLGQpe2MuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpLmRhdGEoXCIkYmluZGluZ1wiLGQubmdCaW5kKTthLiR3YXRjaChkLm5nQmluZCxmdW5jdGlvbihhKXtjLnRleHQoYT09cz9cIlwiOmEpfSl9KSxpZT1bXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe2M9YShkLmF0dHIoZS4kYXR0ci5uZ0JpbmRUZW1wbGF0ZSkpO1xuZC5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIikuZGF0YShcIiRiaW5kaW5nXCIsYyk7ZS4kb2JzZXJ2ZShcIm5nQmluZFRlbXBsYXRlXCIsZnVuY3Rpb24oYSl7ZC50ZXh0KGEpfSl9fV0samU9W1wiJHNjZVwiLFwiJHBhcnNlXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gZnVuY3Rpb24oZCxlLGcpe2UuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpLmRhdGEoXCIkYmluZGluZ1wiLGcubmdCaW5kSHRtbCk7dmFyIGY9YyhnLm5nQmluZEh0bWwpO2QuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuKGYoZCl8fFwiXCIpLnRvU3RyaW5nKCl9LGZ1bmN0aW9uKGMpe2UuaHRtbChhLmdldFRydXN0ZWRIdG1sKGYoZCkpfHxcIlwiKX0pfX1dLGtlPUxiKFwiXCIsITApLGxlPUxiKFwiT2RkXCIsMCksbWU9TGIoXCJFdmVuXCIsMSksbmU9c2Eoe2NvbXBpbGU6ZnVuY3Rpb24oYSxjKXtjLiRzZXQoXCJuZ0Nsb2FrXCIscyk7YS5yZW1vdmVDbGFzcyhcIm5nLWNsb2FrXCIpfX0pLG9lPVtmdW5jdGlvbigpe3JldHVybntzY29wZTohMCxjb250cm9sbGVyOlwiQFwiLFxucHJpb3JpdHk6NTAwfX1dLE5jPXt9O3EoXCJjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBrZXlkb3duIGtleXVwIGtleXByZXNzIHN1Ym1pdCBmb2N1cyBibHVyIGNvcHkgY3V0IHBhc3RlXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe3ZhciBjPWxhKFwibmctXCIrYSk7TmNbY109W1wiJHBhcnNlXCIsZnVuY3Rpb24oZCl7cmV0dXJue2NvbXBpbGU6ZnVuY3Rpb24oZSxnKXt2YXIgZj1kKGdbY10pO3JldHVybiBmdW5jdGlvbihjLGQsZSl7ZC5vbih4KGEpLGZ1bmN0aW9uKGEpe2MuJGFwcGx5KGZ1bmN0aW9uKCl7ZihjLHskZXZlbnQ6YX0pfSl9KX19fX1dfSk7dmFyIHBlPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6NjAwLHRlcm1pbmFsOiEwLHJlc3RyaWN0OlwiQVwiLCQkdGxiOiEwLGxpbms6ZnVuY3Rpb24oYyxkLGUsZyxmKXt2YXIgaCxcbm07Yy4kd2F0Y2goZS5uZ0lmLGZ1bmN0aW9uKGcpe09hKGcpP218fChtPWMuJG5ldygpLGYobSxmdW5jdGlvbihjKXtjW2MubGVuZ3RoKytdPVIuY3JlYXRlQ29tbWVudChcIiBlbmQgbmdJZjogXCIrZS5uZ0lmK1wiIFwiKTtoPXtjbG9uZTpjfTthLmVudGVyKGMsZC5wYXJlbnQoKSxkKX0pKToobSYmKG0uJGRlc3Ryb3koKSxtPW51bGwpLGgmJihhLmxlYXZlKHViKGguY2xvbmUpKSxoPW51bGwpKX0pfX19XSxxZT1bXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRhbmNob3JTY3JvbGxcIixcIiRhbmltYXRlXCIsXCIkc2NlXCIsZnVuY3Rpb24oYSxjLGQsZSxnKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIixwcmlvcml0eTo0MDAsdGVybWluYWw6ITAsdHJhbnNjbHVkZTpcImVsZW1lbnRcIixjb250cm9sbGVyOkJhLm5vb3AsY29tcGlsZTpmdW5jdGlvbihmLGgpe3ZhciBtPWgubmdJbmNsdWRlfHxoLnNyYyxrPWgub25sb2FkfHxcIlwiLGw9aC5hdXRvc2Nyb2xsO3JldHVybiBmdW5jdGlvbihmLGgscSxzLEEpe3ZhciB0PVxuMCx2LHosSz1mdW5jdGlvbigpe3YmJih2LiRkZXN0cm95KCksdj1udWxsKTt6JiYoZS5sZWF2ZSh6KSx6PW51bGwpfTtmLiR3YXRjaChnLnBhcnNlQXNSZXNvdXJjZVVybChtKSxmdW5jdGlvbihnKXt2YXIgbT1mdW5jdGlvbigpeyFEKGwpfHxsJiYhZi4kZXZhbChsKXx8ZCgpfSxxPSsrdDtnPyhhLmdldChnLHtjYWNoZTpjfSkuc3VjY2VzcyhmdW5jdGlvbihhKXtpZihxPT09dCl7dmFyIGM9Zi4kbmV3KCk7cy50ZW1wbGF0ZT1hO2E9QShjLGZ1bmN0aW9uKGEpe0soKTtlLmVudGVyKGEsbnVsbCxoLG0pfSk7dj1jO3o9YTt2LiRlbWl0KFwiJGluY2x1ZGVDb250ZW50TG9hZGVkXCIpO2YuJGV2YWwoayl9fSkuZXJyb3IoZnVuY3Rpb24oKXtxPT09dCYmSygpfSksZi4kZW1pdChcIiRpbmNsdWRlQ29udGVudFJlcXVlc3RlZFwiKSk6KEsoKSxzLnRlbXBsYXRlPW51bGwpfSl9fX19XSxyZT1bXCIkY29tcGlsZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5Oi00MDAsXG5yZXF1aXJlOlwibmdJbmNsdWRlXCIsbGluazpmdW5jdGlvbihjLGQsZSxnKXtkLmh0bWwoZy50ZW1wbGF0ZSk7YShkLmNvbnRlbnRzKCkpKGMpfX19XSxzZT1zYSh7cHJpb3JpdHk6NDUwLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGEsYyxkKXthLiRldmFsKGQubmdJbml0KX19fX0pLHRlPXNhKHt0ZXJtaW5hbDohMCxwcmlvcml0eToxRTN9KSx1ZT1bXCIkbG9jYWxlXCIsXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihhLGMpe3ZhciBkPS97fS9nO3JldHVybntyZXN0cmljdDpcIkVBXCIsbGluazpmdW5jdGlvbihlLGcsZil7dmFyIGg9Zi5jb3VudCxtPWYuJGF0dHIud2hlbiYmZy5hdHRyKGYuJGF0dHIud2hlbiksaz1mLm9mZnNldHx8MCxsPWUuJGV2YWwobSl8fHt9LG49e30scD1jLnN0YXJ0U3ltYm9sKCkscj1jLmVuZFN5bWJvbCgpLHM9L153aGVuKE1pbnVzKT8oLispJC87cShmLGZ1bmN0aW9uKGEsYyl7cy50ZXN0KGMpJiYobFt4KGMucmVwbGFjZShcIndoZW5cIixcIlwiKS5yZXBsYWNlKFwiTWludXNcIixcblwiLVwiKSldPWcuYXR0cihmLiRhdHRyW2NdKSl9KTtxKGwsZnVuY3Rpb24oYSxlKXtuW2VdPWMoYS5yZXBsYWNlKGQscCtoK1wiLVwiK2srcikpfSk7ZS4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYz1wYXJzZUZsb2F0KGUuJGV2YWwoaCkpO2lmKGlzTmFOKGMpKXJldHVyblwiXCI7YyBpbiBsfHwoYz1hLnBsdXJhbENhdChjLWspKTtyZXR1cm4gbltjXShlLGcsITApfSxmdW5jdGlvbihhKXtnLnRleHQoYSl9KX19fV0sdmU9W1wiJHBhcnNlXCIsXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9dChcIm5nUmVwZWF0XCIpO3JldHVybnt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjFFMyx0ZXJtaW5hbDohMCwkJHRsYjohMCxsaW5rOmZ1bmN0aW9uKGUsZyxmLGgsbSl7dmFyIGs9Zi5uZ1JlcGVhdCxsPWsubWF0Y2goL15cXHMqKFtcXHNcXFNdKz8pXFxzK2luXFxzKyhbXFxzXFxTXSs/KSg/Olxccyt0cmFja1xccytieVxccysoW1xcc1xcU10rPykpP1xccyokLyksbixwLHIscyxBLHQsdj17JGlkOkVhfTtpZighbCl0aHJvdyBkKFwiaWV4cFwiLFxuayk7Zj1sWzFdO2g9bFsyXTsobD1sWzNdKT8obj1hKGwpLHA9ZnVuY3Rpb24oYSxjLGQpe3QmJih2W3RdPWEpO3ZbQV09Yzt2LiRpbmRleD1kO3JldHVybiBuKGUsdil9KToocj1mdW5jdGlvbihhLGMpe3JldHVybiBFYShjKX0scz1mdW5jdGlvbihhKXtyZXR1cm4gYX0pO2w9Zi5tYXRjaCgvXig/OihbXFwkXFx3XSspfFxcKChbXFwkXFx3XSspXFxzKixcXHMqKFtcXCRcXHddKylcXCkpJC8pO2lmKCFsKXRocm93IGQoXCJpaWRleHBcIixmKTtBPWxbM118fGxbMV07dD1sWzJdO3ZhciBEPXt9O2UuJHdhdGNoQ29sbGVjdGlvbihoLGZ1bmN0aW9uKGEpe3ZhciBmLGgsbD1nWzBdLG4sdj17fSx5LEIsdyx1LFMsRSx4PVtdO2lmKHFiKGEpKVM9YSxuPXB8fHI7ZWxzZXtuPXB8fHM7Uz1bXTtmb3IodyBpbiBhKWEuaGFzT3duUHJvcGVydHkodykmJlwiJFwiIT13LmNoYXJBdCgwKSYmUy5wdXNoKHcpO1Muc29ydCgpfXk9Uy5sZW5ndGg7aD14Lmxlbmd0aD1TLmxlbmd0aDtmb3IoZj0wO2Y8aDtmKyspaWYodz1hPT09XG5TP2Y6U1tmXSx1PWFbd10sdT1uKHcsdSxmKSx3YSh1LFwiYHRyYWNrIGJ5YCBpZFwiKSxELmhhc093blByb3BlcnR5KHUpKUU9RFt1XSxkZWxldGUgRFt1XSx2W3VdPUUseFtmXT1FO2Vsc2V7aWYodi5oYXNPd25Qcm9wZXJ0eSh1KSl0aHJvdyBxKHgsZnVuY3Rpb24oYSl7YSYmYS5zY29wZSYmKERbYS5pZF09YSl9KSxkKFwiZHVwZXNcIixrLHUpO3hbZl09e2lkOnV9O3ZbdV09ITF9Zm9yKHcgaW4gRClELmhhc093blByb3BlcnR5KHcpJiYoRT1EW3ddLGY9dWIoRS5jbG9uZSksYy5sZWF2ZShmKSxxKGYsZnVuY3Rpb24oYSl7YS4kJE5HX1JFTU9WRUQ9ITB9KSxFLnNjb3BlLiRkZXN0cm95KCkpO2Y9MDtmb3IoaD1TLmxlbmd0aDtmPGg7ZisrKXt3PWE9PT1TP2Y6U1tmXTt1PWFbd107RT14W2ZdO3hbZi0xXSYmKGw9eFtmLTFdLmNsb25lW3hbZi0xXS5jbG9uZS5sZW5ndGgtMV0pO2lmKEUuc2NvcGUpe0I9RS5zY29wZTtuPWw7ZG8gbj1uLm5leHRTaWJsaW5nO3doaWxlKG4mJm4uJCROR19SRU1PVkVEKTtcbkUuY2xvbmVbMF0hPW4mJmMubW92ZSh1YihFLmNsb25lKSxudWxsLHoobCkpO2w9RS5jbG9uZVtFLmNsb25lLmxlbmd0aC0xXX1lbHNlIEI9ZS4kbmV3KCk7QltBXT11O3QmJihCW3RdPXcpO0IuJGluZGV4PWY7Qi4kZmlyc3Q9MD09PWY7Qi4kbGFzdD1mPT09eS0xO0IuJG1pZGRsZT0hKEIuJGZpcnN0fHxCLiRsYXN0KTtCLiRvZGQ9IShCLiRldmVuPTA9PT0oZiYxKSk7RS5zY29wZXx8bShCLGZ1bmN0aW9uKGEpe2FbYS5sZW5ndGgrK109Ui5jcmVhdGVDb21tZW50KFwiIGVuZCBuZ1JlcGVhdDogXCIraytcIiBcIik7Yy5lbnRlcihhLG51bGwseihsKSk7bD1hO0Uuc2NvcGU9QjtFLmNsb25lPWE7dltFLmlkXT1FfSl9RD12fSl9fX1dLHdlPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXtjLiR3YXRjaChlLm5nU2hvdyxmdW5jdGlvbihjKXthW09hKGMpP1wicmVtb3ZlQ2xhc3NcIjpcImFkZENsYXNzXCJdKGQsXCJuZy1oaWRlXCIpfSl9fV0seGU9W1wiJGFuaW1hdGVcIixcbmZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7Yy4kd2F0Y2goZS5uZ0hpZGUsZnVuY3Rpb24oYyl7YVtPYShjKT9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShkLFwibmctaGlkZVwiKX0pfX1dLHllPXNhKGZ1bmN0aW9uKGEsYyxkKXthLiR3YXRjaChkLm5nU3R5bGUsZnVuY3Rpb24oYSxkKXtkJiZhIT09ZCYmcShkLGZ1bmN0aW9uKGEsZCl7Yy5jc3MoZCxcIlwiKX0pO2EmJmMuY3NzKGEpfSwhMCl9KSx6ZT1bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVxdWlyZTpcIm5nU3dpdGNoXCIsY29udHJvbGxlcjpbXCIkc2NvcGVcIixmdW5jdGlvbigpe3RoaXMuY2FzZXM9e319XSxsaW5rOmZ1bmN0aW9uKGMsZCxlLGcpe3ZhciBmLGgsbT1bXTtjLiR3YXRjaChlLm5nU3dpdGNofHxlLm9uLGZ1bmN0aW9uKGQpe2Zvcih2YXIgbD0wLG49bS5sZW5ndGg7bDxuO2wrKyltW2xdLiRkZXN0cm95KCksYS5sZWF2ZShoW2xdKTtoPVtdO209W107aWYoZj1nLmNhc2VzW1wiIVwiK1xuZF18fGcuY2FzZXNbXCI/XCJdKWMuJGV2YWwoZS5jaGFuZ2UpLHEoZixmdW5jdGlvbihkKXt2YXIgZT1jLiRuZXcoKTttLnB1c2goZSk7ZC50cmFuc2NsdWRlKGUsZnVuY3Rpb24oYyl7dmFyIGU9ZC5lbGVtZW50O2gucHVzaChjKTthLmVudGVyKGMsZS5wYXJlbnQoKSxlKX0pfSl9KX19fV0sQWU9c2Eoe3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6ODAwLHJlcXVpcmU6XCJebmdTd2l0Y2hcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUsZyl7ZS5jYXNlc1tcIiFcIitkLm5nU3dpdGNoV2hlbl09ZS5jYXNlc1tcIiFcIitkLm5nU3dpdGNoV2hlbl18fFtdO2UuY2FzZXNbXCIhXCIrZC5uZ1N3aXRjaFdoZW5dLnB1c2goe3RyYW5zY2x1ZGU6ZyxlbGVtZW50OmN9KX19KSxCZT1zYSh7dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eTo4MDAscmVxdWlyZTpcIl5uZ1N3aXRjaFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxnKXtlLmNhc2VzW1wiP1wiXT1lLmNhc2VzW1wiP1wiXXx8W107ZS5jYXNlc1tcIj9cIl0ucHVzaCh7dHJhbnNjbHVkZTpnLFxuZWxlbWVudDpjfSl9fSksQ2U9c2Eoe2NvbnRyb2xsZXI6W1wiJGVsZW1lbnRcIixcIiR0cmFuc2NsdWRlXCIsZnVuY3Rpb24oYSxjKXtpZighYyl0aHJvdyB0KFwibmdUcmFuc2NsdWRlXCIpKFwib3JwaGFuXCIsZmEoYSkpO3RoaXMuJHRyYW5zY2x1ZGU9Y31dLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7ZS4kdHJhbnNjbHVkZShmdW5jdGlvbihhKXtjLmVtcHR5KCk7Yy5hcHBlbmQoYSl9KX19KSxEZT1bXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVcIix0ZXJtaW5hbDohMCxjb21waWxlOmZ1bmN0aW9uKGMsZCl7XCJ0ZXh0L25nLXRlbXBsYXRlXCI9PWQudHlwZSYmYS5wdXQoZC5pZCxjWzBdLnRleHQpfX19XSxFZT10KFwibmdPcHRpb25zXCIpLEZlPVkoe3Rlcm1pbmFsOiEwfSksR2U9W1wiJGNvbXBpbGVcIixcIiRwYXJzZVwiLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9L15cXHMqKFtcXHNcXFNdKz8pKD86XFxzK2FzXFxzKyhbXFxzXFxTXSs/KSk/KD86XFxzK2dyb3VwXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/XFxzK2ZvclxccysoPzooW1xcJFxcd11bXFwkXFx3XSopfCg/OlxcKFxccyooW1xcJFxcd11bXFwkXFx3XSopXFxzKixcXHMqKFtcXCRcXHddW1xcJFxcd10qKVxccypcXCkpKVxccytpblxccysoW1xcc1xcU10rPykoPzpcXHMrdHJhY2tcXHMrYnlcXHMrKFtcXHNcXFNdKz8pKT8kLyxcbmU9eyRzZXRWaWV3VmFsdWU6RX07cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHJlcXVpcmU6W1wic2VsZWN0XCIsXCI/bmdNb2RlbFwiXSxjb250cm9sbGVyOltcIiRlbGVtZW50XCIsXCIkc2NvcGVcIixcIiRhdHRyc1wiLGZ1bmN0aW9uKGEsYyxkKXt2YXIgbT10aGlzLGs9e30sbD1lLG47bS5kYXRhYm91bmQ9ZC5uZ01vZGVsO20uaW5pdD1mdW5jdGlvbihhLGMsZCl7bD1hO249ZH07bS5hZGRPcHRpb249ZnVuY3Rpb24oYyl7d2EoYywnXCJvcHRpb24gdmFsdWVcIicpO2tbY109ITA7bC4kdmlld1ZhbHVlPT1jJiYoYS52YWwoYyksbi5wYXJlbnQoKSYmbi5yZW1vdmUoKSl9O20ucmVtb3ZlT3B0aW9uPWZ1bmN0aW9uKGEpe3RoaXMuaGFzT3B0aW9uKGEpJiYoZGVsZXRlIGtbYV0sbC4kdmlld1ZhbHVlPT1hJiZ0aGlzLnJlbmRlclVua25vd25PcHRpb24oYSkpfTttLnJlbmRlclVua25vd25PcHRpb249ZnVuY3Rpb24oYyl7Yz1cIj8gXCIrRWEoYykrXCIgP1wiO24udmFsKGMpO2EucHJlcGVuZChuKTthLnZhbChjKTtuLnByb3AoXCJzZWxlY3RlZFwiLFxuITApfTttLmhhc09wdGlvbj1mdW5jdGlvbihhKXtyZXR1cm4gay5oYXNPd25Qcm9wZXJ0eShhKX07Yy4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7bS5yZW5kZXJVbmtub3duT3B0aW9uPUV9KX1dLGxpbms6ZnVuY3Rpb24oZSxmLGgsbSl7ZnVuY3Rpb24gayhhLGMsZCxlKXtkLiRyZW5kZXI9ZnVuY3Rpb24oKXt2YXIgYT1kLiR2aWV3VmFsdWU7ZS5oYXNPcHRpb24oYSk/KHkucGFyZW50KCkmJnkucmVtb3ZlKCksYy52YWwoYSksXCJcIj09PWEmJncucHJvcChcInNlbGVjdGVkXCIsITApKTp1KGEpJiZ3P2MudmFsKFwiXCIpOmUucmVuZGVyVW5rbm93bk9wdGlvbihhKX07Yy5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXt5LnBhcmVudCgpJiZ5LnJlbW92ZSgpO2QuJHNldFZpZXdWYWx1ZShjLnZhbCgpKX0pfSl9ZnVuY3Rpb24gbChhLGMsZCl7dmFyIGU7ZC4kcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IFNhKGQuJHZpZXdWYWx1ZSk7cShjLmZpbmQoXCJvcHRpb25cIiksXG5mdW5jdGlvbihjKXtjLnNlbGVjdGVkPUQoYS5nZXQoYy52YWx1ZSkpfSl9O2EuJHdhdGNoKGZ1bmN0aW9uKCl7dGEoZSxkLiR2aWV3VmFsdWUpfHwoZT0kKGQuJHZpZXdWYWx1ZSksZC4kcmVuZGVyKCkpfSk7Yy5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXt2YXIgYT1bXTtxKGMuZmluZChcIm9wdGlvblwiKSxmdW5jdGlvbihjKXtjLnNlbGVjdGVkJiZhLnB1c2goYy52YWx1ZSl9KTtkLiRzZXRWaWV3VmFsdWUoYSl9KX0pfWZ1bmN0aW9uIG4oZSxmLGcpe2Z1bmN0aW9uIGgoKXt2YXIgYT17XCJcIjpbXX0sYz1bXCJcIl0sZCxrLHMsdCx1O3Q9Zy4kbW9kZWxWYWx1ZTt1PXooZSl8fFtdO3ZhciBDPW4/TmIodSk6dSxGLEoseDtKPXt9O3M9ITE7dmFyIEIsSDtpZihyKWlmKHcmJkwodCkpZm9yKHM9bmV3IFNhKFtdKSx4PTA7eDx0Lmxlbmd0aDt4KyspSlttXT10W3hdLHMucHV0KHcoZSxKKSx0W3hdKTtlbHNlIHM9bmV3IFNhKHQpO2Zvcih4PTA7Rj1DLmxlbmd0aCxcbng8Rjt4Kyspe2s9eDtpZihuKXtrPUNbeF07aWYoXCIkXCI9PT1rLmNoYXJBdCgwKSljb250aW51ZTtKW25dPWt9SlttXT11W2tdO2Q9cChlLEopfHxcIlwiOyhrPWFbZF0pfHwoaz1hW2RdPVtdLGMucHVzaChkKSk7cj9kPUQocy5yZW1vdmUodz93KGUsSik6cShlLEopKSk6KHc/KGQ9e30sZFttXT10LGQ9dyhlLGQpPT09dyhlLEopKTpkPXQ9PT1xKGUsSikscz1zfHxkKTtCPWwoZSxKKTtCPUQoQik/QjpcIlwiO2sucHVzaCh7aWQ6dz93KGUsSik6bj9DW3hdOngsbGFiZWw6QixzZWxlY3RlZDpkfSl9cnx8KEF8fG51bGw9PT10P2FbXCJcIl0udW5zaGlmdCh7aWQ6XCJcIixsYWJlbDpcIlwiLHNlbGVjdGVkOiFzfSk6c3x8YVtcIlwiXS51bnNoaWZ0KHtpZDpcIj9cIixsYWJlbDpcIlwiLHNlbGVjdGVkOiEwfSkpO0o9MDtmb3IoQz1jLmxlbmd0aDtKPEM7SisrKXtkPWNbSl07az1hW2RdO3kubGVuZ3RoPD1KPyh0PXtlbGVtZW50OkUuY2xvbmUoKS5hdHRyKFwibGFiZWxcIixkKSxsYWJlbDprLmxhYmVsfSx1PVt0XSx5LnB1c2godSksXG5mLmFwcGVuZCh0LmVsZW1lbnQpKToodT15W0pdLHQ9dVswXSx0LmxhYmVsIT1kJiZ0LmVsZW1lbnQuYXR0cihcImxhYmVsXCIsdC5sYWJlbD1kKSk7Qj1udWxsO3g9MDtmb3IoRj1rLmxlbmd0aDt4PEY7eCsrKXM9a1t4XSwoZD11W3grMV0pPyhCPWQuZWxlbWVudCxkLmxhYmVsIT09cy5sYWJlbCYmQi50ZXh0KGQubGFiZWw9cy5sYWJlbCksZC5pZCE9PXMuaWQmJkIudmFsKGQuaWQ9cy5pZCksQlswXS5zZWxlY3RlZCE9PXMuc2VsZWN0ZWQmJkIucHJvcChcInNlbGVjdGVkXCIsZC5zZWxlY3RlZD1zLnNlbGVjdGVkKSk6KFwiXCI9PT1zLmlkJiZBP0g9QTooSD12LmNsb25lKCkpLnZhbChzLmlkKS5hdHRyKFwic2VsZWN0ZWRcIixzLnNlbGVjdGVkKS50ZXh0KHMubGFiZWwpLHUucHVzaCh7ZWxlbWVudDpILGxhYmVsOnMubGFiZWwsaWQ6cy5pZCxzZWxlY3RlZDpzLnNlbGVjdGVkfSksQj9CLmFmdGVyKEgpOnQuZWxlbWVudC5hcHBlbmQoSCksQj1IKTtmb3IoeCsrO3UubGVuZ3RoPng7KXUucG9wKCkuZWxlbWVudC5yZW1vdmUoKX1mb3IoO3kubGVuZ3RoPlxuSjspeS5wb3AoKVswXS5lbGVtZW50LnJlbW92ZSgpfXZhciBrO2lmKCEoaz10Lm1hdGNoKGQpKSl0aHJvdyBFZShcImlleHBcIix0LGZhKGYpKTt2YXIgbD1jKGtbMl18fGtbMV0pLG09a1s0XXx8a1s2XSxuPWtbNV0scD1jKGtbM118fFwiXCIpLHE9YyhrWzJdP2tbMV06bSksej1jKGtbN10pLHc9a1s4XT9jKGtbOF0pOm51bGwseT1bW3tlbGVtZW50OmYsbGFiZWw6XCJcIn1dXTtBJiYoYShBKShlKSxBLnJlbW92ZUNsYXNzKFwibmctc2NvcGVcIiksQS5yZW1vdmUoKSk7Zi5lbXB0eSgpO2Yub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe2UuJGFwcGx5KGZ1bmN0aW9uKCl7dmFyIGEsYz16KGUpfHxbXSxkPXt9LGgsayxsLHAsdCx2LHU7aWYocilmb3Ioaz1bXSxwPTAsdj15Lmxlbmd0aDtwPHY7cCsrKWZvcihhPXlbcF0sbD0xLHQ9YS5sZW5ndGg7bDx0O2wrKyl7aWYoKGg9YVtsXS5lbGVtZW50KVswXS5zZWxlY3RlZCl7aD1oLnZhbCgpO24mJihkW25dPWgpO2lmKHcpZm9yKHU9MDt1PGMubGVuZ3RoJiZcbihkW21dPWNbdV0sdyhlLGQpIT1oKTt1KyspO2Vsc2UgZFttXT1jW2hdO2sucHVzaChxKGUsZCkpfX1lbHNlIGlmKGg9Zi52YWwoKSxcIj9cIj09aClrPXM7ZWxzZSBpZihcIlwiPT09aClrPW51bGw7ZWxzZSBpZih3KWZvcih1PTA7dTxjLmxlbmd0aDt1Kyspe2lmKGRbbV09Y1t1XSx3KGUsZCk9PWgpe2s9cShlLGQpO2JyZWFrfX1lbHNlIGRbbV09Y1toXSxuJiYoZFtuXT1oKSxrPXEoZSxkKTtnLiRzZXRWaWV3VmFsdWUoayl9KX0pO2cuJHJlbmRlcj1oO2UuJHdhdGNoKGgpfWlmKG1bMV0pe3ZhciBwPW1bMF07bT1tWzFdO3ZhciByPWgubXVsdGlwbGUsdD1oLm5nT3B0aW9ucyxBPSExLHcsdj16KFIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSksRT16KFIuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpKSx5PXYuY2xvbmUoKTtoPTA7Zm9yKHZhciBDPWYuY2hpbGRyZW4oKSx4PUMubGVuZ3RoO2g8eDtoKyspaWYoXCJcIj09PUNbaF0udmFsdWUpe3c9QT1DLmVxKGgpO2JyZWFrfXAuaW5pdChtLEEsXG55KTtyJiYobS4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4hYXx8MD09PWEubGVuZ3RofSk7dD9uKGUsZixtKTpyP2woZSxmLG0pOmsoZSxmLG0scCl9fX19XSxIZT1bXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihhKXt2YXIgYz17YWRkT3B0aW9uOkUscmVtb3ZlT3B0aW9uOkV9O3JldHVybntyZXN0cmljdDpcIkVcIixwcmlvcml0eToxMDAsY29tcGlsZTpmdW5jdGlvbihkLGUpe2lmKHUoZS52YWx1ZSkpe3ZhciBnPWEoZC50ZXh0KCksITApO2d8fGUuJHNldChcInZhbHVlXCIsZC50ZXh0KCkpfXJldHVybiBmdW5jdGlvbihhLGQsZSl7dmFyIGs9ZC5wYXJlbnQoKSxsPWsuZGF0YShcIiRzZWxlY3RDb250cm9sbGVyXCIpfHxrLnBhcmVudCgpLmRhdGEoXCIkc2VsZWN0Q29udHJvbGxlclwiKTtsJiZsLmRhdGFib3VuZD9kLnByb3AoXCJzZWxlY3RlZFwiLCExKTpsPWM7Zz9hLiR3YXRjaChnLGZ1bmN0aW9uKGEsYyl7ZS4kc2V0KFwidmFsdWVcIixhKTthIT09YyYmbC5yZW1vdmVPcHRpb24oYyk7bC5hZGRPcHRpb24oYSl9KTpcbmwuYWRkT3B0aW9uKGUudmFsdWUpO2Qub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7bC5yZW1vdmVPcHRpb24oZS52YWx1ZSl9KX19fX1dLEllPVkoe3Jlc3RyaWN0OlwiRVwiLHRlcm1pbmFsOiEwfSk7KENhPVAualF1ZXJ5KT8oej1DYSx5KENhLmZuLHtzY29wZTpGYS5zY29wZSxpc29sYXRlU2NvcGU6RmEuaXNvbGF0ZVNjb3BlLGNvbnRyb2xsZXI6RmEuY29udHJvbGxlcixpbmplY3RvcjpGYS5pbmplY3Rvcixpbmhlcml0ZWREYXRhOkZhLmluaGVyaXRlZERhdGF9KSx2YihcInJlbW92ZVwiLCEwLCEwLCExKSx2YihcImVtcHR5XCIsITEsITEsITEpLHZiKFwiaHRtbFwiLCExLCExLCEwKSk6ej1PO0JhLmVsZW1lbnQ9ejsoZnVuY3Rpb24oYSl7eShhLHtib290c3RyYXA6WGIsY29weTokLGV4dGVuZDp5LGVxdWFsczp0YSxlbGVtZW50OnosZm9yRWFjaDpxLGluamVjdG9yOlliLG5vb3A6RSxiaW5kOmJiLHRvSnNvbjpwYSxmcm9tSnNvbjpUYixpZGVudGl0eTpBYSxpc1VuZGVmaW5lZDp1LGlzRGVmaW5lZDpELFxuaXNTdHJpbmc6dyxpc0Z1bmN0aW9uOk0saXNPYmplY3Q6Vyxpc051bWJlcjpyYixpc0VsZW1lbnQ6UGMsaXNBcnJheTpMLHZlcnNpb246UmQsaXNEYXRlOkthLGxvd2VyY2FzZTp4LHVwcGVyY2FzZTpIYSxjYWxsYmFja3M6e2NvdW50ZXI6MH0sJCRtaW5FcnI6dCwkJGNzcDpTYn0pO1VhPVVjKFApO3RyeXtVYShcIm5nTG9jYWxlXCIpfWNhdGNoKGMpe1VhKFwibmdMb2NhbGVcIixbXSkucHJvdmlkZXIoXCIkbG9jYWxlXCIscmQpfVVhKFwibmdcIixbXCJuZ0xvY2FsZVwiXSxbXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe2EucHJvdmlkZXIoeyQkc2FuaXRpemVVcmk6QmR9KTthLnByb3ZpZGVyKFwiJGNvbXBpbGVcIixpYykuZGlyZWN0aXZlKHthOldkLGlucHV0OkxjLHRleHRhcmVhOkxjLGZvcm06WGQsc2NyaXB0OkRlLHNlbGVjdDpHZSxzdHlsZTpJZSxvcHRpb246SGUsbmdCaW5kOmhlLG5nQmluZEh0bWw6amUsbmdCaW5kVGVtcGxhdGU6aWUsbmdDbGFzczprZSxuZ0NsYXNzRXZlbjptZSxuZ0NsYXNzT2RkOmxlLFxubmdDbG9hazpuZSxuZ0NvbnRyb2xsZXI6b2UsbmdGb3JtOllkLG5nSGlkZTp4ZSxuZ0lmOnBlLG5nSW5jbHVkZTpxZSxuZ0luaXQ6c2UsbmdOb25CaW5kYWJsZTp0ZSxuZ1BsdXJhbGl6ZTp1ZSxuZ1JlcGVhdDp2ZSxuZ1Nob3c6d2UsbmdTdHlsZTp5ZSxuZ1N3aXRjaDp6ZSxuZ1N3aXRjaFdoZW46QWUsbmdTd2l0Y2hEZWZhdWx0OkJlLG5nT3B0aW9uczpGZSxuZ1RyYW5zY2x1ZGU6Q2UsbmdNb2RlbDpjZSxuZ0xpc3Q6ZWUsbmdDaGFuZ2U6ZGUscmVxdWlyZWQ6TWMsbmdSZXF1aXJlZDpNYyxuZ1ZhbHVlOmdlfSkuZGlyZWN0aXZlKHtuZ0luY2x1ZGU6cmV9KS5kaXJlY3RpdmUoTWIpLmRpcmVjdGl2ZShOYyk7YS5wcm92aWRlcih7JGFuY2hvclNjcm9sbDpjZCwkYW5pbWF0ZTpUZCwkYnJvd3NlcjplZCwkY2FjaGVGYWN0b3J5OmZkLCRjb250cm9sbGVyOmlkLCRkb2N1bWVudDpqZCwkZXhjZXB0aW9uSGFuZGxlcjprZCwkZmlsdGVyOkFjLCRpbnRlcnBvbGF0ZTpwZCwkaW50ZXJ2YWw6cWQsXG4kaHR0cDpsZCwkaHR0cEJhY2tlbmQ6bmQsJGxvY2F0aW9uOnRkLCRsb2c6dWQsJHBhcnNlOnhkLCRyb290U2NvcGU6QWQsJHE6eWQsJHNjZTpFZCwkc2NlRGVsZWdhdGU6RGQsJHNuaWZmZXI6RmQsJHRlbXBsYXRlQ2FjaGU6Z2QsJHRpbWVvdXQ6R2QsJHdpbmRvdzpIZH0pfV0pfSkoQmEpO3ooUikucmVhZHkoZnVuY3Rpb24oKXtTYyhSLFhiKX0pfSkod2luZG93LGRvY3VtZW50KTshYW5ndWxhci4kJGNzcCgpJiZhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLmZpbmQoXCJoZWFkXCIpLnByZXBlbmQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5AY2hhcnNldCBcIlVURi04XCI7W25nXFxcXDpjbG9ha10sW25nLWNsb2FrXSxbZGF0YS1uZy1jbG9ha10sW3gtbmctY2xvYWtdLC5uZy1jbG9haywueC1uZy1jbG9haywubmctaGlkZXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9bmdcXFxcOmZvcm17ZGlzcGxheTpibG9jazt9PC9zdHlsZT4nKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXIubWluLmpzLm1hcFxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnMvYW5ndWxhci9hbmd1bGFyLm1pbi5qc1wiLFwiL2xpYnMvYW5ndWxhclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIGhhc1Njcm9sbFxuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNS4yMlxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgLy8gdGVzdCB0YXJnZXRzXG4gICAgdmFyIGVsZW1zID0gZWwgPyBbZWxdIDogW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV07XG4gICAgdmFyIHNjcm9sbFggPSBmYWxzZSwgc2Nyb2xsWSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG8gPSBlbGVtc1tpXTtcbiAgICAgICAgLy8gdGVzdCBob3Jpem9udGFsXG4gICAgICAgIHZhciBzbCA9IG8uc2Nyb2xsTGVmdDtcbiAgICAgICAgby5zY3JvbGxMZWZ0ICs9IChzbCA+IDApID8gLTEgOiAxO1xuICAgICAgICBvLnNjcm9sbExlZnQgIT09IHNsICYmIChzY3JvbGxYID0gc2Nyb2xsWCB8fCB0cnVlKTtcbiAgICAgICAgby5zY3JvbGxMZWZ0ID0gc2w7XG4gICAgICAgIC8vIHRlc3QgdmVydGljYWxcbiAgICAgICAgdmFyIHN0ID0gby5zY3JvbGxUb3A7XG4gICAgICAgIG8uc2Nyb2xsVG9wICs9IChzdCA+IDApID8gLTEgOiAxO1xuICAgICAgICBvLnNjcm9sbFRvcCAhPT0gc3QgJiYgKHNjcm9sbFkgPSBzY3JvbGxZIHx8IHRydWUpO1xuICAgICAgICBvLnNjcm9sbFRvcCA9IHN0O1xuICAgIH1cbiAgICAvLyByZXRcbiAgICByZXR1cm4ge1xuICAgICAgICBzY3JvbGxYOiBzY3JvbGxYLFxuICAgICAgICBzY3JvbGxZOiBzY3JvbGxZXG4gICAgfTtcbn07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnMvaGFzU2Nyb2xsLmpzXCIsXCIvbGlic1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIHBhcnNlVXJsXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjIyXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlOiB1cmwsXG4gICAgICAgIHByb3RvY29sOiBhLnByb3RvY29sLnJlcGxhY2UoJzonLCAnJyksXG4gICAgICAgIGhvc3Q6IGEuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IGEucG9ydCxcbiAgICAgICAgcXVlcnk6IGEuc2VhcmNoLFxuICAgICAgICBwYXJhbXM6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0ge30sXG4gICAgICAgICAgICBzZWcgPSBhLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpLnNwbGl0KCcmJyksXG4gICAgICAgICAgICBsZW4gPSBzZWcubGVuZ3RoLCBpID0gMCwgcztcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlZ1tpXSkgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgIHMgPSBzZWdbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICByZXRbc1swXV0gPSBzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSkoKSxcbiAgICAgICAgZmlsZTogKGEucGF0aG5hbWUubWF0Y2goL1xcLyhbXlxcLz8jXSspJC9pKSB8fCBbLCAnJ10pWzFdLFxuICAgICAgICBoYXNoOiBhLmhhc2gucmVwbGFjZSgnIycsICcnKSxcbiAgICAgICAgcGF0aDogYS5wYXRobmFtZS5yZXBsYWNlKC9eKFteXFwvXSkvLCAnLyQxJyksXG4gICAgICAgIHJlbGF0aXZlOiAoYS5ocmVmLm1hdGNoKC90cHM/OlxcL1xcL1teXFwvXSsoLispLykgfHwgWywgJyddKVsxXSxcbiAgICAgICAgc2VnbWVudHM6IGEucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpXG4gICAgfTtcbn07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnMvcGFyc2VVcmwuanNcIixcIi9saWJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcbiogdXRpbGl0aWVzXG4qIGF1dGhvcjogcm9uZ2xpblxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcbiovXG5cbnZhciBjb21tb24gPSByZXF1aXJlKCcuLi8uLi8uLi9qc2cvdXRpbGl0aWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29tbW9uLmV4dGVuZCh7fSwgY29tbW9uLCB7XG5cbiAgICBkb206IHtcbiAgICAgICAgcGFyc2VVcmw6IHJlcXVpcmUoJy4vcGFyc2VVcmwnKSxcbiAgICAgICAgaGFzU2Nyb2xsOiByZXF1aXJlKCcuL2hhc1Njcm9sbCcpLFxuICAgICAgICBpc0FuY2VzdG9yOiBmdW5jdGlvbiAocCwgYykge1xuICAgICAgICAgICAgdmFyIHJldCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHAgJiYgYykge1xuICAgICAgICAgICAgICAgIGlmIChwLmNvbnRhaW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwLmNvbnRhaW5zKGMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISEocC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihjKSAmIDE2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYyA9IGMucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gYyA9PSBwIHx8IHJldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaXNXaW5kb3c6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PSBvYmoud2luZG93XG4gICAgfSxcblxuICAgIHZpZXdVcmw6IGZ1bmN0aW9uICh1cmwpe1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH0sXG5cbiAgICBpMThuOiBmdW5jdGlvbihrZXksIHZhbCkge1xuICAgICAgICB2YXIgZ2V0VmFsID0gdGhpcy5yZWFkT2JqKHt9LCBrZXkpO1xuICAgICAgICByZXR1cm4gZ2V0VmFsICE9PSB1bmRlZmluZWQgPyBnZXRWYWwgOiB2YWw7XG4gICAgfVxufSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIis3WkpwMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnMvdXRpbGl0aWVzLmpzXCIsXCIvbGlic1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4qIHV0aWxpdGllc1xuKiBhdXRob3I6IHJvbmdsaW5cbiogY3JlYXRlIGRhdGU6IDIwMTQuNi4yMVxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBhcmcyYXJyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNwbGljZSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcmdzLCBza2lwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BsaWNlLmNhbGwoYXJncywgc2tpcCB8fCAwKTtcbiAgICAgICAgfTtcbiAgICB9KCksXG5cbiAgICB0eXBlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgICAgICAgdmFyIGNsYXNzMnR5cGUgPSB7fSwgbmF0aXZlcyA9ICdCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yJy5zcGxpdCgnICcpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdGl2ZXMubGVuZ3RoOyBpKyspIHtjbGFzczJ0eXBlWydbb2JqZWN0ICcgKyBuYXRpdmVzW2ldICsgJ10nXSA9IG5hdGl2ZXNbaV0udG9Mb3dlckNhc2UoKTsgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqID09IG51bGwgPyBTdHJpbmcob2JqKSA6IGNsYXNzMnR5cGVbb3AudG9TdHJpbmcuY2FsbChvYmopXSB8fCAnb2JqZWN0JztcbiAgICAgICAgfTtcbiAgICB9KCksXG5cbiAgICBpc0FycmF5OiBmdW5jdGlvbihvYmope1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlKG9iaikgPT09ICdhcnJheSc7XG4gICAgfSxcblxuICAgIGlzRnVuY3Rpb246IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlKG9iaikgPT09ICdmdW5jdGlvbic7XG4gICAgfSxcblxuICAgIGlzTnVtZXJpYzogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQob2JqKSkgJiYgaXNGaW5pdGUob2JqKVxuICAgIH0sXG5cbiAgICBpc1BsYWluT2JqZWN0OiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmICghb2JqIHx8IHRoaXMudHlwZShvYmopICE9PSBcIm9iamVjdFwiIHx8IG9iai5ub2RlVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAob2JqLmNvbnN0cnVjdG9yICYmICF0aGlzLmhhc093bihvYmosIFwiY29uc3RydWN0b3JcIikgJiYgIXRoaXMuaGFzT3duKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIFwiaXNQcm90b3R5cGVPZlwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIG9iaikge31cbiAgICAgICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuaGFzT3duKG9iaiwga2V5KTtcbiAgICB9LFxuXG4gICAgaGFzT3duOiBmdW5jdGlvbihvLCBwcm9wKXtcbiAgICAgICAgaWYgKCBvID09PSBudWxsIHx8IG8gPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICggby5oYXNPd25Qcm9wZXJ0eSApIHtcbiAgICAgICAgICAgIHJldHVybiBvLmhhc093blByb3BlcnR5KCBwcm9wICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKCB0aGlzLnR5cGUoIG9bcHJvcF0gKSAhPT0gJ3VuZGVmaW5lZCcgKSAmJiBvLmNvbnN0cnVjdG9yLnByb3RvdHlwZVtwcm9wXSAhPT0gb1twcm9wXTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBlYWNoOiBmdW5jdGlvbiggb2JqLCBjYWxsYmFjaywgYXJncyApIHtcbiAgICAgICAgaWYgKCFvYmopIHsgcmV0dXJuOyB9XG4gICAgICAgIC8vXG4gICAgICAgIHZhciBuYW1lLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSBvYmoubGVuZ3RoLFxuICAgICAgICAgICAgaXNPYmogPSBsZW5ndGggPT09IHVuZGVmaW5lZCB8fCB0aGlzLmlzRnVuY3Rpb24oIG9iaiApO1xuXG4gICAgICAgIGlmICggYXJncyApIHtcbiAgICAgICAgICAgIGlmICggaXNPYmogKSB7XG4gICAgICAgICAgICAgICAgZm9yICggbmFtZSBpbiBvYmogKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY2FsbGJhY2suYXBwbHkoIG9ialsgbmFtZSBdLCBhcmdzICkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoIDsgaSA8IGxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY2FsbGJhY2suYXBwbHkoIG9ialsgaSsrIF0sIGFyZ3MgKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBBIHNwZWNpYWwsIGZhc3QsIGNhc2UgZm9yIHRoZSBtb3N0IGNvbW1vbiB1c2Ugb2YgZWFjaFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBpc09iaiApIHtcbiAgICAgICAgICAgICAgICBmb3IgKCBuYW1lIGluIG9iaiApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjYWxsYmFjay5jYWxsKCBvYmpbIG5hbWUgXSwgbmFtZSwgb2JqWyBuYW1lIF0gKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjYWxsYmFjay5jYWxsKCBvYmpbIGkgXSwgaSwgb2JqWyBpKysgXSApID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgZXh0ZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLCB0YXJnZXQgPSBhcmd1bWVudHNbMF0gfHwge30sXG4gICAgICAgICAgICBpID0gMSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBkZWVwID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSh0YXJnZXQpID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgZGVlcCA9IHRhcmdldDtcbiAgICAgICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICAgICAgICAgIGkgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnR5cGUodGFyZ2V0KSAhPT0gXCJvYmplY3RcIiAmJiAhdGhpcy5pc0Z1bmN0aW9uKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHt9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gaSkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgICAgIC0taTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKChvcHRpb25zID0gYXJndW1lbnRzW2ldKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjID0gdGFyZ2V0W25hbWVdO1xuICAgICAgICAgICAgICAgICAgICBjb3B5ID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gY29weSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZXAgJiYgY29weSAmJiAodGhpcy5pc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IHRoaXMuaXNBcnJheShjb3B5KSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29weUlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5SXNBcnJheSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lID0gc3JjICYmIHRoaXMuaXNBcnJheShzcmMpID8gc3JjIDogW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lID0gc3JjICYmIHRoaXMuaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXQVJOSU5HOiBSRUNVUlNJT05cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IHRoaXMuZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3B5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGNvcHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuXG4gICAgZ3VpZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bmN0aW9uIHM0KCkgeyByZXR1cm4gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpOyB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzZXApIHtcbiAgICAgICAgICAgIGlmIChzZXAgPT09IHRydWUpIHsgc2VwID0gJy0nOyB9IGVsc2UgeyBzZXAgPSBzZXAgfHwgJyc7IH1cbiAgICAgICAgICAgIHJldHVybiAoczQoKSArIHM0KCkgKyBzZXAgKyBzNCgpICsgc2VwICsgczQoKSArIHNlcCArIHM0KCkgKyBzZXAgKyBzNCgpICsgczQoKSArIHM0KCkpO1xuICAgICAgICB9O1xuICAgIH0oKSxcblxuICAgIHVuaXF1ZTogZnVuY3Rpb24obGVuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmd1aWQoKS5zdWJzdHIoMCwgbGVuKTtcbiAgICB9LFxuXG4gICAgcGFkTGVmdDogZnVuY3Rpb24oc3RyLCBsZW4sIGNociwgcmV2ZXJzZSkge1xuICAgICAgICBpZiAoc3RyICE9PSBudWxsICYmIHN0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIgKyAnJzsgdmFyIG51bSA9IGxlbiAtIHN0ci5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobnVtID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldmVyc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIGNocjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGNociArIHN0cjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH0sXG5cbiAgICBwYWRSaWdodDogZnVuY3Rpb24oc3RyLCBsZW4sIGNocikge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWRMZWZ0KHN0ciwgbGVuLCBjaHIsIHRydWUpO1xuICAgIH0sXG5cbiAgICBmb3JtYXQ6IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLmFyZzJhcnIoYXJndW1lbnRzLCAxKSwgYXJnO1xuICAgICAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoL1xceyhcXGQrKVxcfS9nLCBmdW5jdGlvbiAobSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIChhcmcgPSBhcmdzW2ldLCAoYXJnID09PSBudWxsIHx8IGFyZyA9PT0gdW5kZWZpbmVkKSA/ICcnIDogYXJnKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRyaW06IGZ1bmN0aW9uIChzdHIsIHNldCkge1xuICAgICAgICBzdHIgPSBzdHIgfHwgJyc7IHNldCA9IHNldCB8fCB7fTtcbiAgICAgICAgaWYgKHNldC5maW5kKSB7XG4gICAgICAgICAgICB2YXIgZXhwID0gdGhpcy5mb3JtYXQoJ157MH0rfHswfSskJywgc2V0LmZpbmQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXhwLCAnZycpLCBzZXQuaG9sZCB8fCAnJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2V0LmZpbmRFbmQpIHtcbiAgICAgICAgICAgIHZhciBleHAgPSB0aGlzLmZvcm1hdCgnezB9KyQnLCBzZXQuZmluZEVuZCk7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChleHAsICdnJyksIHNldC5ob2xkIHx8ICcnKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZXQuZmluZFN0YXJ0KSB7XG4gICAgICAgICAgICB2YXIgZXhwID0gdGhpcy5mb3JtYXQoJ157MH0rJywgc2V0LmZpbmRTdGFydCk7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChleHAsICdnJyksIHNldC5ob2xkIHx8ICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgc2V0LmhvbGQgfHwgJycpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlYWRPYmo6IGZ1bmN0aW9uKG9iaiwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBuYW1lcyA9IG5hbWVzcGFjZS5zcGxpdCgvXFwufFxcW3xcXF18XFwoLyksIHJldCA9IG9iajtcbiAgICAgICAgdGhpcy5lYWNoKG5hbWVzLCBmdW5jdGlvbiAoaSwga2V5KSB7IGlmIChrZXkgJiYgcmV0KSB7IHJldCA9IChpc05hTihrZXkpID8gKGtleSA9PT0gJyknID8gcmV0KCkgOiByZXRba2V5XSkgOiByZXRbcGFyc2VJbnQoa2V5LCAxMCldKTsgfSB9KTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgbWFwT2JqOiBmdW5jdGlvbihvYmosIG5hbWVzcGFjZSwgZGZ0KSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IG5hbWVzcGFjZS5zcGxpdCgvXFwufFxcW3xcXF0vKSwgbmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy5lYWNoKHBhcnRzLCBmdW5jdGlvbiAoaSwga2V5KSB7IGlmIChrZXkpIHsgbmFtZXMucHVzaChrZXkpOyB9IH0pO1xuICAgICAgICB2YXIgbGFzdE5hbWUgPSBuYW1lc1tuYW1lcy5sZW5ndGggLSAxXSwgY3VyciA9IG9iaiA9IChvYmogfHwge30pLCBwcmV2O1xuICAgICAgICB0aGlzLmVhY2gobmFtZXMsIGZ1bmN0aW9uIChpLCBrZXkpIHsgcHJldiA9IGN1cnI7IGN1cnIgPSAoY3VycltrZXldID8gY3VycltrZXldIDogKGN1cnJba2V5XSA9IGlzTmFOKG5hbWVzW2kgKyAxXSkgPyB7fSA6IFtdKSk7IH0pO1xuICAgICAgICBpZiAocHJldikgeyBwcmV2W2xhc3ROYW1lXSA9IGRmdDsgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vanNnL3V0aWxpdGllcy5qc1wiLFwiLy4uLy4uL2pzZ1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTJcblxuLyoqXG4gKiBJZiBgQnVmZmVyLl91c2VUeXBlZEFycmF5c2A6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChjb21wYXRpYmxlIGRvd24gdG8gSUU2KVxuICovXG5CdWZmZXIuX3VzZVR5cGVkQXJyYXlzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IGlmIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWQgQXJyYXlzLiBTdXBwb3J0ZWQgYnJvd3NlcnMgYXJlIElFIDEwKywgRmlyZWZveCA0KyxcbiAgLy8gQ2hyb21lIDcrLCBTYWZhcmkgNS4xKywgT3BlcmEgMTEuNissIGlPUyA0LjIrLiBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFkZGluZ1xuICAvLyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsIHRoZW4gdGhhdCdzIHRoZSBzYW1lIGFzIG5vIGBVaW50OEFycmF5YCBzdXBwb3J0XG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGFkZCBhbGwgdGhlIG5vZGUgQnVmZmVyIEFQSSBtZXRob2RzLiBUaGlzIGlzIGFuIGlzc3VlXG4gIC8vIGluIEZpcmVmb3ggNC0yOS4gTm93IGZpeGVkOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzhcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgLy8gQ2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIFdvcmthcm91bmQ6IG5vZGUncyBiYXNlNjQgaW1wbGVtZW50YXRpb24gYWxsb3dzIGZvciBub24tcGFkZGVkIHN0cmluZ3NcbiAgLy8gd2hpbGUgYmFzZTY0LWpzIGRvZXMgbm90LlxuICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnICYmIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgc3ViamVjdCA9IHN0cmluZ3RyaW0oc3ViamVjdClcbiAgICB3aGlsZSAoc3ViamVjdC5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgICBzdWJqZWN0ID0gc3ViamVjdCArICc9J1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdClcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0Lmxlbmd0aCkgLy8gYXNzdW1lIHRoYXQgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbmVlZHMgdG8gYmUgYSBudW1iZXIsIGFycmF5IG9yIHN0cmluZy4nKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgICAgZWxzZVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0W2ldXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbi8vIFNUQVRJQyBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT09IG51bGwgJiYgYiAhPT0gdW5kZWZpbmVkICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAvIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBhc3NlcnQoaXNBcnJheShsaXN0KSwgJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3QsIFt0b3RhbExlbmd0aF0pXFxuJyArXG4gICAgICAnbGlzdCBzaG91bGQgYmUgYW4gQXJyYXkuJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdG90YWxMZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuLy8gQlVGRkVSIElOU1RBTkNFIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIF9oZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGFzc2VydChzdHJMZW4gJSAyID09PSAwLCAnSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgYXNzZXJ0KCFpc05hTihieXRlKSwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIEJ1ZmZlci5fY2hhcnNXcml0dGVuID0gaSAqIDJcbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gX3V0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBfYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG4gIHN0YXJ0ID0gTnVtYmVyKHN0YXJ0KSB8fCAwXG4gIGVuZCA9IChlbmQgIT09IHVuZGVmaW5lZClcbiAgICA/IE51bWJlcihlbmQpXG4gICAgOiBlbmQgPSBzZWxmLmxlbmd0aFxuXG4gIC8vIEZhc3RwYXRoIGVtcHR5IHN0cmluZ3NcbiAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgcmV0dXJuICcnXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBhc3NlcnQodGFyZ2V0X3N0YXJ0ID49IDAgJiYgdGFyZ2V0X3N0YXJ0IDwgdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCBzb3VyY2UubGVuZ3RoLCAnc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gc291cmNlLmxlbmd0aCwgJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwIHx8ICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gX3V0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBfYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspXG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBfYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIF9oZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2krMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gY2xhbXAoc3RhcnQsIGxlbiwgMClcbiAgZW5kID0gY2xhbXAoZW5kLCBsZW4sIGxlbilcblxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAyXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gICAgdmFsIHw9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldCArIDNdIDw8IDI0ID4+PiAwKVxuICB9IGVsc2Uge1xuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDFdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDJdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgM11cbiAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldF0gPDwgMjQgPj4+IDApXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLFxuICAgICAgICAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgdmFyIG5lZyA9IHRoaXNbb2Zmc2V0XSAmIDB4ODBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MTYoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDMyKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDAwMDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmZmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEZsb2F0IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRG91YmxlIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZilcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmZmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmLCAtMHg4MClcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgdGhpcy53cml0ZVVJbnQ4KHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgdGhpcy53cml0ZVVJbnQ4KDB4ZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZiwgLTB4ODAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQxNihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MTYoYnVmLCAweGZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MzIoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgMHhmZmZmZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsXG4gICAgICAgICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKSwgJ3ZhbHVlIGlzIG5vdCBhIG51bWJlcicpXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHRoaXMubGVuZ3RoLCAnc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gdGhpcy5sZW5ndGgsICdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICB0aGlzW2ldID0gdmFsdWVcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXQgPSBbXVxuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IHRvSGV4KHRoaXNbaV0pXG4gICAgaWYgKGkgPT09IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMpIHtcbiAgICAgIG91dFtpICsgMV0gPSAnLi4uJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBvdXQuam9pbignICcpICsgJz4nXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKVxuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbi8vIHNsaWNlKHN0YXJ0LCBlbmQpXG5mdW5jdGlvbiBjbGFtcCAoaW5kZXgsIGxlbiwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIGluZGV4ID0gfn5pbmRleDsgIC8vIENvZXJjZSB0byBpbnRlZ2VyLlxuICBpZiAoaW5kZXggPj0gbGVuKSByZXR1cm4gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgaW5kZXggKz0gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gY29lcmNlIChsZW5ndGgpIHtcbiAgLy8gQ29lcmNlIGxlbmd0aCB0byBhIG51bWJlciAocG9zc2libHkgTmFOKSwgcm91bmQgdXBcbiAgLy8gaW4gY2FzZSBpdCdzIGZyYWN0aW9uYWwgKGUuZy4gMTIzLjQ1NikgdGhlbiBkbyBhXG4gIC8vIGRvdWJsZSBuZWdhdGUgdG8gY29lcmNlIGEgTmFOIHRvIDAuIEVhc3ksIHJpZ2h0P1xuICBsZW5ndGggPSB+fk1hdGguY2VpbCgrbGVuZ3RoKVxuICByZXR1cm4gbGVuZ3RoIDwgMCA/IDAgOiBsZW5ndGhcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoc3ViamVjdCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBBcnJheV0nXG4gIH0pKHN1YmplY3QpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpXG4gICAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSlcbiAgICBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspXG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIHBvc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cblxuLypcbiAqIFdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGlzIGEgdmFsaWQgaW50ZWdlci4gVGhpcyBtZWFucyB0aGF0IGl0XG4gKiBpcyBub24tbmVnYXRpdmUuIEl0IGhhcyBubyBmcmFjdGlvbmFsIGNvbXBvbmVudCBhbmQgdGhhdCBpdCBkb2VzIG5vdFxuICogZXhjZWVkIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHZlcmlmdWludCAodmFsdWUsIG1heCkge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPj0gMCwgJ3NwZWNpZmllZCBhIG5lZ2F0aXZlIHZhbHVlIGZvciB3cml0aW5nIGFuIHVuc2lnbmVkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGlzIGxhcmdlciB0aGFuIG1heGltdW0gdmFsdWUgZm9yIHR5cGUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnNpbnQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZklFRUU3NTQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxufVxuXG5mdW5jdGlvbiBhc3NlcnQgKHRlc3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0ZXN0KSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnRmFpbGVkIGFzc2VydGlvbicpXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIsXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xudmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUylcblx0XHRcdHJldHVybiA2MiAvLyAnKydcblx0XHRpZiAoY29kZSA9PT0gU0xBU0gpXG5cdFx0XHRyZXR1cm4gNjMgLy8gJy8nXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIpXG5cdFx0XHRyZXR1cm4gLTEgLy9ubyBtYXRjaFxuXHRcdGlmIChjb2RlIDwgTlVNQkVSICsgMTApXG5cdFx0XHRyZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjZcblx0XHRpZiAoY29kZSA8IFVQUEVSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIFVQUEVSXG5cdFx0aWYgKGNvZGUgPCBMT1dFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2XG5cdH1cblxuXHRmdW5jdGlvbiBiNjRUb0J5dGVBcnJheSAoYjY0KSB7XG5cdFx0dmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcblxuXHRcdGlmIChiNjQubGVuZ3RoICUgNCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcblx0XHQvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG5cdFx0Ly8gcmVwcmVzZW50IG9uZSBieXRlXG5cdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuXHRcdHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cdFx0cGxhY2VIb2xkZXJzID0gJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDIpID8gMiA6ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAxKSA/IDEgOiAwXG5cblx0XHQvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcblx0XHRhcnIgPSBuZXcgQXJyKGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuXHRcdC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcblx0XHRsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NC5sZW5ndGggLSA0IDogYjY0Lmxlbmd0aFxuXG5cdFx0dmFyIEwgPSAwXG5cblx0XHRmdW5jdGlvbiBwdXNoICh2KSB7XG5cdFx0XHRhcnJbTCsrXSA9IHZcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDE4KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDEyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpIDw8IDYpIHwgZGVjb2RlKGI2NC5jaGFyQXQoaSArIDMpKVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwMDApID4+IDE2KVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwKSA+PiA4KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA+PiA0KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDEwKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDQpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPj4gMilcblx0XHRcdHB1c2goKHRtcCA+PiA4KSAmIDB4RkYpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cblx0ZnVuY3Rpb24gdWludDhUb0Jhc2U2NCAodWludDgpIHtcblx0XHR2YXIgaSxcblx0XHRcdGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzLCAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuXHRcdFx0b3V0cHV0ID0gXCJcIixcblx0XHRcdHRlbXAsIGxlbmd0aFxuXG5cdFx0ZnVuY3Rpb24gZW5jb2RlIChudW0pIHtcblx0XHRcdHJldHVybiBsb29rdXAuY2hhckF0KG51bSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShudW0gPj4gMTggJiAweDNGKSArIGVuY29kZShudW0gPj4gMTIgJiAweDNGKSArIGVuY29kZShudW0gPj4gNiAmIDB4M0YpICsgZW5jb2RlKG51bSAmIDB4M0YpXG5cdFx0fVxuXG5cdFx0Ly8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuXHRcdGZvciAoaSA9IDAsIGxlbmd0aCA9IHVpbnQ4Lmxlbmd0aCAtIGV4dHJhQnl0ZXM7IGkgPCBsZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0dGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcblx0XHRcdG91dHB1dCArPSB0cmlwbGV0VG9CYXNlNjQodGVtcClcblx0XHR9XG5cblx0XHQvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG5cdFx0c3dpdGNoIChleHRyYUJ5dGVzKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPT0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyAodWludDhbdWludDgubGVuZ3RoIC0gMV0pXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMClcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA+PiA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgMikgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG5cblx0ZXhwb3J0cy50b0J5dGVBcnJheSA9IGI2NFRvQnl0ZUFycmF5XG5cdGV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IHVpbnQ4VG9CYXNlNjRcbn0odHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gKHRoaXMuYmFzZTY0anMgPSB7fSkgOiBleHBvcnRzKSlcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIrN1pKcDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzXCIsXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCIsXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0XCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiKzdaSnAwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIsXCIvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzc1wiKSJdfQ==
