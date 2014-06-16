(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* controllers
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Bloga.controllers';

angular.module(name, [])
.controller('MainCtrl', require('./main-controller'))
.controller('HomeCtrl', require('./home-controller'));
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers\\all.js","/controllers")
},{"./home-controller":2,"./main-controller":3,"buffer":24,"ngpmcQ":27}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* home-controller
* author: ronglin
* create date: 2014.5.4
*/

module.exports = ['$scope', 'Blogs', function ($scope, Blogs) {
    $scope.blogs = Blogs.query(20);
}];
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers\\home-controller.js","/controllers")
},{"buffer":24,"ngpmcQ":27}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* main-controller
* author: ronglin
* create date: 2014.5.4
*/

module.exports = ['$scope', '$rootScope', '$window', '$location', 'testService', 'testFactory', 'testProvider', function ($scope, $rootScope, $window, $location, testService, testFactory, testProvider) {
    $scope.slide = '';
    $rootScope.back = function () {
        $scope.slide = 'slide-right';
        $window.history.back();
    };
    $rootScope.go = function (path) {
        $scope.slide = 'slide-left';
        $location.url(path);
    };
    var testEnabled = true;
    if (testEnabled) {
    	$rootScope.testEnabled = testEnabled;
    	$rootScope.tests = {
            provider: testProvider,
    		factory: testFactory.label(),
    		service: testService.label
    	};
    }
}];
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers\\main-controller.js","/controllers")
},{"buffer":24,"ngpmcQ":27}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* data service
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Bloga.dataService';

angular.module(name, [])
.factory('Blogs', require('./blog-service'));
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/dataservice\\all.js","/dataservice")
},{"./blog-service":5,"buffer":24,"ngpmcQ":27}],5:[function(require,module,exports){
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
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/dataservice\\blog-service.js","/dataservice")
},{"buffer":24,"ngpmcQ":27}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* directives
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Bloga.directives';

angular.module(name, [])
.directive('blogaHeader', require('./header'));
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives\\all.js","/directives")
},{"./header":7,"buffer":24,"ngpmcQ":27}],7:[function(require,module,exports){
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
		replace: true
	};
}];
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives\\header.js","/directives")
},{"buffer":24,"ngpmcQ":27}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* main
* author: ronglin
* create date: 2014.4.22
*/

'use strict';

require('./libraries/all');
var utilitiesName = 'Bloga.utilities';
angular.module(utilitiesName, []).constant('utils', require('./utilities/all'));

var directives = require('./directives/all');
var dataService = require('./dataservice/all');
var controllers = require('./controllers/all');
var tests = require('./tests/all');

var bloga = angular.module('Bloga', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    utilitiesName,
    directives.name,
    dataService.name,
    controllers.name
].concat(tests));

bloga.config(['$routeProvider', 'utils', function ($routeProvider, utils) {
    $routeProvider.when('/home', { templateUrl: utils.viewUrl('views/home.html'), controller: 'HomeCtrl' });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_18705364.js","/")
},{"./controllers/all":1,"./dataservice/all":4,"./directives/all":6,"./libraries/all":9,"./tests/all":16,"./utilities/all":21,"buffer":24,"ngpmcQ":27}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* libraries
* author: ronglin
* create date: 2014.5.4
*/

require('./angular.min');
require('./angular-touch.min');
require('./angular-resource.min');
require('./angular-animate.min');
require('./angular-route.min');
require('./rulee-promise');
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libraries\\all.js","/libraries")
},{"./angular-animate.min":10,"./angular-resource.min":11,"./angular-route.min":12,"./angular-touch.min":13,"./angular.min":14,"./rulee-promise":15,"buffer":24,"ngpmcQ":27}],10:[function(require,module,exports){
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

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libraries\\angular-animate.min.js","/libraries")
},{"buffer":24,"ngpmcQ":27}],11:[function(require,module,exports){
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

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libraries\\angular-resource.min.js","/libraries")
},{"buffer":24,"ngpmcQ":27}],12:[function(require,module,exports){
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

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libraries\\angular-route.min.js","/libraries")
},{"buffer":24,"ngpmcQ":27}],13:[function(require,module,exports){
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

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libraries\\angular-touch.min.js","/libraries")
},{"buffer":24,"ngpmcQ":27}],14:[function(require,module,exports){
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

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libraries\\angular.min.js","/libraries")
},{"buffer":24,"ngpmcQ":27}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* promise
* author: ronglin
* create date: 2014.5.19
* reference:
*    http://promisesaplus.com/
*    http://www.html5rocks.com/zh/tutorials/es6/promises/
*    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

'use strict';

var type = require('../utilities/all').type,
	isFunc = function(fn) { return type(fn) === 'function'; },
	isArray = function(obj) { return type(obj) === 'array'; },
	thenable = function(obj) { return obj && isFunc(obj['then']); };

var STATUS = { pending: 0, fulfilled: 1, rejected: 2 };
var thenAll = function(iterable, resolve, reject) {
	for (var i = 0; i < iterable.length; i++) { var p;
		(thenable(p = iterable[i]) ? p : Promise.resolve(p)).then(resolve, reject);
	}
};

var Promise = function(resolver) {
	if (!isFunc(resolver)) {
		throw new Error('Promise constructor takes a function argument');
	}
	if (!(this instanceof Promise)) {
		return new Promise(resolver);
	}
	//
	this._status = STATUS.pending;
	this._resolves = []; this._rejects = [];
	//
	var self = this, resolve = resolver(function(value) {
		if (self._status === STATUS.pending) {
			self._status = STATUS.fulfilled;
			self._value = value;
			for (var i = 0; i < self._resolves.length; i++) {
				self._resolves[i](self._value);
			}
		}
	}, reject = function(reason) {
		if (self._status === STATUS.pending) {
			self._status = STATUS.rejected;
			self._reason = reason;
			for (var i = 0; i < self._rejects.length; i++) {
				self._rejects[i](self._reason);
			}
		}
	});
	setTimeout(function() {
		try {
			resolver(resolve, reject);
		} catch (ex) {
			reject(ex);
		}
	}, 0);
};

Promise.prototype = {
	constructor: Promise,
	
    _status: null, _resolves: null, _rejects: null,
    
    //
	then: function(onFulfilled, onRejected) {
		if (isFunc(onFulfilled)) {
			if (this._status === STATUS.pending) { this._resolves.push(onFulfilled); }
			else if (this._status === STATUS.fulfilled) { onFulfilled(this._value); }
		}
		if (isFunc(onRejected)) {
			if (this._status === STATUS.pending) { this._rejects.push(onRejected); }
			else if (this._status === STATUS.rejected) { onRejected(this._reason); }
		}
		if (this.__fthen === true) {
			delete this.__fthen;
		} else {
			this.__fthen = true;
			return Promise.resolve(this);
		}
	},

	//
	catch: function(onRejected) {
		return this.then(null, onRejected);
	}
};

Promise.resolve = function(value) {
	return new Promise(function(resolve, reject) {
		if (thenable(value)) {
			value.then(resolve, reject);
		} else {
			resolve(value);
		}
	});
};

Promise.reject = function(reason) {
	return new Promise(function(resolve, reject) {
		reject(reason);
	});
};

Promise.all = function(iterable) {
	return new Promise(function(resolve, reject) {
		var values = [];
		if (isArray(iterable)) {
			thenAll(iterable, function(value) {
				values.push(value);
				if (values.length === iterable.length) {
					resolve(values);
				}
			}, reject);
		} else {
			resolve(values);
		}
	});
};

Promise.race = function(iterable) {
	return new Promise(function(resolve, reject) {
		if (isArray(iterable)) {
			thenAll(iterable, resolve, reject);
		}
	});
};


//Promise.name = 'Promise';

if (typeof(window) !== 'undefined') {
	Promise._promise = window.Promise;
	window.Promise = Promise;
}
if (typeof(module) !== 'undefined') {
	module.exports = Promise;
}
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/libraries\\rulee-promise.js","/libraries")
},{"../utilities/all":21,"buffer":24,"ngpmcQ":27}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* tests
* author: ronglin
* create date: 2014.5.4
*/

module.exports = [
	require('./test1/all').name
];
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/tests\\all.js","/tests")
},{"./test1/all":17,"buffer":24,"ngpmcQ":27}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* test1
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'Bloga.test1';

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
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/tests\\test1\\all.js","/tests\\test1")
},{"./test1-factory":18,"./test1-provider":19,"./test1-service":20,"buffer":24,"ngpmcQ":27}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* factory
* author: ronglin
* create date: 2014.5.4
*/

module.exports = function () {
     return {
        label: function() {
        	return 'this is factory';
        }
    }
};
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/tests\\test1\\test1-factory.js","/tests\\test1")
},{"buffer":24,"ngpmcQ":27}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* provider
* author: ronglin
* create date: 2014.5.4
*/

module.exports = function() {
    this.$get = function() {
        return 'this is provider';
    };
};
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/tests\\test1\\test1-provider.js","/tests\\test1")
},{"buffer":24,"ngpmcQ":27}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* service
* author: ronglin
* create date: 2014.5.4
*/

module.exports = function(){
     this.label = 'this is service';
};
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/tests\\test1\\test1-service.js","/tests\\test1")
},{"buffer":24,"ngpmcQ":27}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* utilities
* author: ronglin
* create date: 2014.5.4
*/

var padLeft = function(str, len, chr, reverse) {
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
};

var readObj = function(obj, namespace) {
    var names = namespace.split(/\.|\[|\]|\(/), ret = obj;
    angular.forEach(names, function (key, i) { if (key && ret) { ret = (isNaN(key) ? (key === ')' ? ret() : ret[key]) : ret[parseInt(key, 10)]); } });
    return ret;
};

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
    },

	padLeft: padLeft,

	padRight: function(str, len, chr) {
		return padLeft(str, len, chr, true);
	},

	viewUrl: function (url){
		return url;
	},

	readObj: readObj,

	i18n: function(key, val) {
		var getVal = readObj({}, key);
		return getVal !== undefined ? getVal : val;
	},

	dom: {
		parseUrl: require('./dom/parseUrl'),
		hasScroll: require('./dom/hasScroll')
	}
};
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utilities\\all.js","/utilities")
},{"./dom/hasScroll":22,"./dom/parseUrl":23,"buffer":24,"ngpmcQ":27}],22:[function(require,module,exports){
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
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utilities\\dom\\hasScroll.js","/utilities\\dom")
},{"buffer":24,"ngpmcQ":27}],23:[function(require,module,exports){
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
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utilities\\dom\\parseUrl.js","/utilities\\dom")
},{"buffer":24,"ngpmcQ":27}],24:[function(require,module,exports){
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

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\index.js","/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer")
},{"base64-js":25,"buffer":24,"ieee754":26,"ngpmcQ":27}],25:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var ZERO   = '0'.charCodeAt(0)
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

	module.exports.toByteArray = b64ToByteArray
	module.exports.fromByteArray = uint8ToBase64
}())

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\base64-js\\lib\\b64.js","/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\base64-js\\lib")
},{"buffer":24,"ngpmcQ":27}],26:[function(require,module,exports){
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

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\ieee754\\index.js","/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\buffer\\node_modules\\ieee754")
},{"buffer":24,"ngpmcQ":27}],27:[function(require,module,exports){
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

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\process\\browser.js","/..\\..\\node_modules\\gulp-browserify\\node_modules\\browserify\\node_modules\\process")
},{"buffer":24,"ngpmcQ":27}]},{},[8])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJFOlxcVGVjaG5vbG9neVxcamRcXGJsb2dhXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9jb250cm9sbGVycy9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9jb250cm9sbGVycy9ob21lLWNvbnRyb2xsZXIuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9jb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9kYXRhc2VydmljZS9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9kYXRhc2VydmljZS9ibG9nLXNlcnZpY2UuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9kaXJlY3RpdmVzL2FsbC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2RpcmVjdGl2ZXMvaGVhZGVyLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9hcHAvanMvZmFrZV8xODcwNTM2NC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9saWJyYXJpZXMvYW5ndWxhci1hbmltYXRlLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLXJlc291cmNlLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLXJvdXRlLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLXRvdWNoLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9ydWxlZS1wcm9taXNlLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9hcHAvanMvdGVzdHMvYWxsLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9hcHAvanMvdGVzdHMvdGVzdDEvYWxsLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9hcHAvanMvdGVzdHMvdGVzdDEvdGVzdDEtZmFjdG9yeS5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL3Rlc3RzL3Rlc3QxL3Rlc3QxLXByb3ZpZGVyLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9hcHAvanMvdGVzdHMvdGVzdDEvdGVzdDEtc2VydmljZS5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL3V0aWxpdGllcy9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy91dGlsaXRpZXMvZG9tL2hhc1Njcm9sbC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL3V0aWxpdGllcy9kb20vcGFyc2VVcmwuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2Evbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2Evbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBjb250cm9sbGVyc1xyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxudmFyIG5hbWUgPSBtb2R1bGUuZXhwb3J0cy5uYW1lID0gJ0Jsb2dhLmNvbnRyb2xsZXJzJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtdKVxyXG4uY29udHJvbGxlcignTWFpbkN0cmwnLCByZXF1aXJlKCcuL21haW4tY29udHJvbGxlcicpKVxyXG4uY29udHJvbGxlcignSG9tZUN0cmwnLCByZXF1aXJlKCcuL2hvbWUtY29udHJvbGxlcicpKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29udHJvbGxlcnNcXFxcYWxsLmpzXCIsXCIvY29udHJvbGxlcnNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIGhvbWUtY29udHJvbGxlclxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBbJyRzY29wZScsICdCbG9ncycsIGZ1bmN0aW9uICgkc2NvcGUsIEJsb2dzKSB7XHJcbiAgICAkc2NvcGUuYmxvZ3MgPSBCbG9ncy5xdWVyeSgyMCk7XHJcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb250cm9sbGVyc1xcXFxob21lLWNvbnRyb2xsZXIuanNcIixcIi9jb250cm9sbGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogbWFpbi1jb250cm9sbGVyXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHdpbmRvdycsICckbG9jYXRpb24nLCAndGVzdFNlcnZpY2UnLCAndGVzdEZhY3RvcnknLCAndGVzdFByb3ZpZGVyJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJGxvY2F0aW9uLCB0ZXN0U2VydmljZSwgdGVzdEZhY3RvcnksIHRlc3RQcm92aWRlcikge1xyXG4gICAgJHNjb3BlLnNsaWRlID0gJyc7XHJcbiAgICAkcm9vdFNjb3BlLmJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNsaWRlID0gJ3NsaWRlLXJpZ2h0JztcclxuICAgICAgICAkd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfTtcclxuICAgICRyb290U2NvcGUuZ28gPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICRzY29wZS5zbGlkZSA9ICdzbGlkZS1sZWZ0JztcclxuICAgICAgICAkbG9jYXRpb24udXJsKHBhdGgpO1xyXG4gICAgfTtcclxuICAgIHZhciB0ZXN0RW5hYmxlZCA9IHRydWU7XHJcbiAgICBpZiAodGVzdEVuYWJsZWQpIHtcclxuICAgIFx0JHJvb3RTY29wZS50ZXN0RW5hYmxlZCA9IHRlc3RFbmFibGVkO1xyXG4gICAgXHQkcm9vdFNjb3BlLnRlc3RzID0ge1xyXG4gICAgICAgICAgICBwcm92aWRlcjogdGVzdFByb3ZpZGVyLFxyXG4gICAgXHRcdGZhY3Rvcnk6IHRlc3RGYWN0b3J5LmxhYmVsKCksXHJcbiAgICBcdFx0c2VydmljZTogdGVzdFNlcnZpY2UubGFiZWxcclxuICAgIFx0fTtcclxuICAgIH1cclxufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbnRyb2xsZXJzXFxcXG1haW4tY29udHJvbGxlci5qc1wiLFwiL2NvbnRyb2xsZXJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBkYXRhIHNlcnZpY2VcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbnZhciBuYW1lID0gbW9kdWxlLmV4cG9ydHMubmFtZSA9ICdCbG9nYS5kYXRhU2VydmljZSc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShuYW1lLCBbXSlcclxuLmZhY3RvcnkoJ0Jsb2dzJywgcmVxdWlyZSgnLi9ibG9nLXNlcnZpY2UnKSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RhdGFzZXJ2aWNlXFxcXGFsbC5qc1wiLFwiL2RhdGFzZXJ2aWNlXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBibG9nLXNlcnZpY2VcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gW2Z1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcXVlcnk6IGZ1bmN0aW9uICh0YWtlKSB7XHJcbiAgICAgICAgXHRyZXR1cm4gW3tcclxuICAgICAgICBcdFx0dGl0bGU6J3RpdGxlMScsXHJcbiAgICAgICAgXHRcdGNvbnRlbnQ6J2NvbnRlbnQxJ1xyXG4gICAgICAgIFx0fSx7XHJcbiAgICAgICAgXHRcdHRpdGxlOid0aXRsZTInLFxyXG4gICAgICAgIFx0XHRjb250ZW50Oidjb250ZW50MidcclxuICAgICAgICBcdH0se1xyXG4gICAgICAgIFx0XHR0aXRsZTondGl0bGUzJyxcclxuICAgICAgICBcdFx0Y29udGVudDonY29udGVudDMnXHJcbiAgICAgICAgXHR9LHtcclxuICAgICAgICBcdFx0dGl0bGU6J3RpdGxlNCcsXHJcbiAgICAgICAgXHRcdGNvbnRlbnQ6J2NvbnRlbnQ0J1xyXG4gICAgICAgIFx0fSx7XHJcbiAgICAgICAgXHRcdHRpdGxlOid0aXRsZTUnLFxyXG4gICAgICAgIFx0XHRjb250ZW50Oidjb250ZW50NSdcclxuICAgICAgICBcdH1dO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kYXRhc2VydmljZVxcXFxibG9nLXNlcnZpY2UuanNcIixcIi9kYXRhc2VydmljZVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogZGlyZWN0aXZlc1xyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxudmFyIG5hbWUgPSBtb2R1bGUuZXhwb3J0cy5uYW1lID0gJ0Jsb2dhLmRpcmVjdGl2ZXMnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobmFtZSwgW10pXHJcbi5kaXJlY3RpdmUoJ2Jsb2dhSGVhZGVyJywgcmVxdWlyZSgnLi9oZWFkZXInKSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RpcmVjdGl2ZXNcXFxcYWxsLmpzXCIsXCIvZGlyZWN0aXZlc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogaGVhZGVyXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFsndXRpbHMnLCBmdW5jdGlvbih1dGlscykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvZGlyZWN0aXZlcy9oZWFkZXIuaHRtbCcpLFxyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWVcclxuXHR9O1xyXG59XTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZGlyZWN0aXZlc1xcXFxoZWFkZXIuanNcIixcIi9kaXJlY3RpdmVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBtYWluXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNC4yMlxyXG4qL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxucmVxdWlyZSgnLi9saWJyYXJpZXMvYWxsJyk7XHJcbnZhciB1dGlsaXRpZXNOYW1lID0gJ0Jsb2dhLnV0aWxpdGllcyc7XHJcbmFuZ3VsYXIubW9kdWxlKHV0aWxpdGllc05hbWUsIFtdKS5jb25zdGFudCgndXRpbHMnLCByZXF1aXJlKCcuL3V0aWxpdGllcy9hbGwnKSk7XHJcblxyXG52YXIgZGlyZWN0aXZlcyA9IHJlcXVpcmUoJy4vZGlyZWN0aXZlcy9hbGwnKTtcclxudmFyIGRhdGFTZXJ2aWNlID0gcmVxdWlyZSgnLi9kYXRhc2VydmljZS9hbGwnKTtcclxudmFyIGNvbnRyb2xsZXJzID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9hbGwnKTtcclxudmFyIHRlc3RzID0gcmVxdWlyZSgnLi90ZXN0cy9hbGwnKTtcclxuXHJcbnZhciBibG9nYSA9IGFuZ3VsYXIubW9kdWxlKCdCbG9nYScsIFtcclxuICAgICduZ1RvdWNoJyxcclxuICAgICduZ1JvdXRlJyxcclxuICAgICduZ0FuaW1hdGUnLFxyXG4gICAgdXRpbGl0aWVzTmFtZSxcclxuICAgIGRpcmVjdGl2ZXMubmFtZSxcclxuICAgIGRhdGFTZXJ2aWNlLm5hbWUsXHJcbiAgICBjb250cm9sbGVycy5uYW1lXHJcbl0uY29uY2F0KHRlc3RzKSk7XHJcblxyXG5ibG9nYS5jb25maWcoWyckcm91dGVQcm92aWRlcicsICd1dGlscycsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlciwgdXRpbHMpIHtcclxuICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9ob21lJywgeyB0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvaG9tZS5odG1sJyksIGNvbnRyb2xsZXI6ICdIb21lQ3RybCcgfSk7XHJcbiAgICAkcm91dGVQcm92aWRlci5vdGhlcndpc2UoeyByZWRpcmVjdFRvOiAnL2hvbWUnIH0pO1xyXG59XSk7XHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9mYWtlXzE4NzA1MzY0LmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBsaWJyYXJpZXNcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbnJlcXVpcmUoJy4vYW5ndWxhci5taW4nKTtcclxucmVxdWlyZSgnLi9hbmd1bGFyLXRvdWNoLm1pbicpO1xyXG5yZXF1aXJlKCcuL2FuZ3VsYXItcmVzb3VyY2UubWluJyk7XHJcbnJlcXVpcmUoJy4vYW5ndWxhci1hbmltYXRlLm1pbicpO1xyXG5yZXF1aXJlKCcuL2FuZ3VsYXItcm91dGUubWluJyk7XHJcbnJlcXVpcmUoJy4vcnVsZWUtcHJvbWlzZScpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJyYXJpZXNcXFxcYWxsLmpzXCIsXCIvbGlicmFyaWVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuIEFuZ3VsYXJKUyB2MS4yLjEyXHJcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xyXG4gTGljZW5zZTogTUlUXHJcbiovXHJcbihmdW5jdGlvbih2LGssdCl7J3VzZSBzdHJpY3QnO2subW9kdWxlKFwibmdBbmltYXRlXCIsW1wibmdcIl0pLmZhY3RvcnkoXCIkJGFuaW1hdGVSZWZsb3dcIixbXCIkd2luZG93XCIsXCIkdGltZW91dFwiLGZ1bmN0aW9uKGssQil7dmFyIGQ9ay5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGsud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihkKXtyZXR1cm4gQihkLDEwLCExKX0scT1rLmNhbmNlbEFuaW1hdGlvbkZyYW1lfHxrLndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihkKXtyZXR1cm4gQi5jYW5jZWwoZCl9O3JldHVybiBmdW5jdGlvbihwKXt2YXIgaz1kKHApO3JldHVybiBmdW5jdGlvbigpe3Eoayl9fX1dKS5jb25maWcoW1wiJHByb3ZpZGVcIixcIiRhbmltYXRlUHJvdmlkZXJcIixmdW5jdGlvbihSLEIpe2Z1bmN0aW9uIGQoZCl7Zm9yKHZhciBrPTA7azxkLmxlbmd0aDtrKyspe3ZhciBwPWRba107aWYocC5ub2RlVHlwZT09WClyZXR1cm4gcH19dmFyIHE9ay5ub29wLFxyXG5wPWsuZm9yRWFjaCwkPUIuJCRzZWxlY3RvcnMsWD0xLGw9XCIkJG5nQW5pbWF0ZVN0YXRlXCIsSz1cIm5nLWFuaW1hdGVcIixtPXtydW5uaW5nOiEwfTtSLmRlY29yYXRvcihcIiRhbmltYXRlXCIsW1wiJGRlbGVnYXRlXCIsXCIkaW5qZWN0b3JcIixcIiRzbmlmZmVyXCIsXCIkcm9vdEVsZW1lbnRcIixcIiR0aW1lb3V0XCIsXCIkcm9vdFNjb3BlXCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihDLHYsdCxILHksdyxOKXtmdW5jdGlvbiBJKGEpe2lmKGEpe3ZhciBnPVtdLGU9e307YT1hLnN1YnN0cigxKS5zcGxpdChcIi5cIik7KHQudHJhbnNpdGlvbnN8fHQuYW5pbWF0aW9ucykmJmEucHVzaChcIlwiKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGY9YVtjXSxkPSRbZl07ZCYmIWVbZl0mJihnLnB1c2godi5nZXQoZCkpLGVbZl09ITApfXJldHVybiBnfX1mdW5jdGlvbiByKGEsZyxlLGMsZixrLG0pe2Z1bmN0aW9uIHQoYSl7bigpO2lmKCEwPT09YSl6KCk7ZWxzZXtpZihhPWUuZGF0YShsKSlhLmRvbmU9eixlLmRhdGEobCxcclxuYSk7QyhELFwiYWZ0ZXJcIix6KX19ZnVuY3Rpb24gQyhjLGQsZil7XCJhZnRlclwiPT1kP3IoKTpFKCk7dmFyIGs9ZCtcIkVuZFwiO3AoYyxmdW5jdGlvbihiLGFhKXt2YXIgaD1mdW5jdGlvbigpe2E6e3ZhciBiPWQrXCJDb21wbGV0ZVwiLGE9Y1thYV07YVtiXT0hMDsoYVtrXXx8cSkoKTtmb3IoYT0wO2E8Yy5sZW5ndGg7YSsrKWlmKCFjW2FdW2JdKWJyZWFrIGE7ZigpfX07XCJiZWZvcmVcIiE9ZHx8XCJlbnRlclwiIT1hJiZcIm1vdmVcIiE9YT9iW2RdP2Jba109dT9iW2RdKGUsZyxoKTpiW2RdKGUsaCk6aCgpOmgoKX0pfWZ1bmN0aW9uIHcoYyl7ZS50cmlnZ2VySGFuZGxlcihcIiRhbmltYXRlOlwiK2Mse2V2ZW50OmEsY2xhc3NOYW1lOmd9KX1mdW5jdGlvbiBFKCl7eShmdW5jdGlvbigpe3coXCJiZWZvcmVcIil9LDAsITEpfWZ1bmN0aW9uIHIoKXt5KGZ1bmN0aW9uKCl7dyhcImFmdGVyXCIpfSwwLCExKX1mdW5jdGlvbiB2KCl7eShmdW5jdGlvbigpe3coXCJjbG9zZVwiKTttJiZtKCl9LDAsITEpfWZ1bmN0aW9uIG4oKXtuLmhhc0JlZW5SdW58fFxyXG4obi5oYXNCZWVuUnVuPSEwLGsoKSl9ZnVuY3Rpb24geigpe2lmKCF6Lmhhc0JlZW5SdW4pe3ouaGFzQmVlblJ1bj0hMDt2YXIgYT1lLmRhdGEobCk7YSYmKHU/QShlKTooYS5jbG9zZUFuaW1hdGlvblRpbWVvdXQ9eShmdW5jdGlvbigpe0EoZSl9LDAsITEpLGUuZGF0YShsLGEpKSk7digpfX12YXIgcyx4LEc9ZChlKTtHJiYocz1HLmNsYXNzTmFtZSx4PXMrXCIgXCIrZyk7aWYoRyYmTCh4KSl7eD0oXCIgXCIreCkucmVwbGFjZSgvXFxzKy9nLFwiLlwiKTtjfHwoYz1mP2YucGFyZW50KCk6ZS5wYXJlbnQoKSk7eD1JKHgpO3ZhciB1PVwiYWRkQ2xhc3NcIj09YXx8XCJyZW1vdmVDbGFzc1wiPT1hO2Y9ZS5kYXRhKGwpfHx7fTtpZihiYShlLGMpfHwwPT09eC5sZW5ndGgpbigpLEUoKSxyKCkseigpO2Vsc2V7dmFyIEQ9W107dSYmKGYuZGlzYWJsZWR8fGYucnVubmluZyYmZi5zdHJ1Y3R1cmFsKXx8cCh4LGZ1bmN0aW9uKGMpe2lmKCFjLmFsbG93Q2FuY2VsfHxjLmFsbG93Q2FuY2VsKGUsYSxnKSl7dmFyIGQ9XHJcbmNbYV07XCJsZWF2ZVwiPT1hPyhjPWQsZD1udWxsKTpjPWNbXCJiZWZvcmVcIithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyKDEpXTtELnB1c2goe2JlZm9yZTpjLGFmdGVyOmR9KX19KTswPT09RC5sZW5ndGg/KG4oKSxFKCkscigpLHYoKSk6KGM9XCIgXCIrcytcIiBcIixmLnJ1bm5pbmcmJih5LmNhbmNlbChmLmNsb3NlQW5pbWF0aW9uVGltZW91dCksQShlKSxKKGYuYW5pbWF0aW9ucykseD0ocz11JiYhZi5zdHJ1Y3R1cmFsKSYmZi5jbGFzc05hbWU9PWcmJmEhPWYuZXZlbnQsZi5iZWZvcmVDb21wbGV0ZXx8eD8oZi5kb25lfHxxKSghMCk6cyYmKGM9XCJyZW1vdmVDbGFzc1wiPT1mLmV2ZW50P2MucmVwbGFjZShcIiBcIitmLmNsYXNzTmFtZStcIiBcIixcIiBcIik6YytmLmNsYXNzTmFtZStcIiBcIikpLHM9XCIgXCIrZytcIiBcIixcImFkZENsYXNzXCI9PWEmJjA8PWMuaW5kZXhPZihzKXx8XCJyZW1vdmVDbGFzc1wiPT1hJiYtMT09Yy5pbmRleE9mKHMpPyhuKCksRSgpLHIoKSx2KCkpOihlLmFkZENsYXNzKEspLFxyXG5lLmRhdGEobCx7cnVubmluZzohMCxldmVudDphLGNsYXNzTmFtZTpnLHN0cnVjdHVyYWw6IXUsYW5pbWF0aW9uczpELGRvbmU6dH0pLEMoRCxcImJlZm9yZVwiLHQpKSl9fWVsc2UgbigpLEUoKSxyKCkseigpfWZ1bmN0aW9uIFEoYSl7YT1kKGEpO3AoYS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK0spLGZ1bmN0aW9uKGEpe2E9ay5lbGVtZW50KGEpO3ZhciBlPWEuZGF0YShsKTtlJiYoSihlLmFuaW1hdGlvbnMpLEEoYSkpfSl9ZnVuY3Rpb24gSihhKXtwKGEsZnVuY3Rpb24oYSl7YS5iZWZvcmVDb21wbGV0ZXx8KGEuYmVmb3JlRW5kfHxxKSghMCk7YS5hZnRlckNvbXBsZXRlfHwoYS5hZnRlckVuZHx8cSkoITApfSl9ZnVuY3Rpb24gQShhKXtkKGEpPT1kKEgpP20uZGlzYWJsZWR8fChtLnJ1bm5pbmc9ITEsbS5zdHJ1Y3R1cmFsPSExKTooYS5yZW1vdmVDbGFzcyhLKSxhLnJlbW92ZURhdGEobCkpfWZ1bmN0aW9uIGJhKGEsZyl7aWYobS5kaXNhYmxlZClyZXR1cm4hMDtpZihkKGEpPT1kKEgpKXJldHVybiBtLmRpc2FibGVkfHxcclxubS5ydW5uaW5nO2Rve2lmKDA9PT1nLmxlbmd0aClicmVhazt2YXIgZT1kKGcpPT1kKEgpLGM9ZT9tOmcuZGF0YShsKSxjPWMmJighIWMuZGlzYWJsZWR8fCEhYy5ydW5uaW5nKTtpZihlfHxjKXJldHVybiBjO2lmKGUpYnJlYWt9d2hpbGUoZz1nLnBhcmVudCgpKTtyZXR1cm4hMH1ILmRhdGEobCxtKTt3LiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7bS5ydW5uaW5nPSExfSl9KTt2YXIgTT1CLmNsYXNzTmFtZUZpbHRlcigpLEw9TT9mdW5jdGlvbihhKXtyZXR1cm4gTS50ZXN0KGEpfTpmdW5jdGlvbigpe3JldHVybiEwfTtyZXR1cm57ZW50ZXI6ZnVuY3Rpb24oYSxkLGUsYyl7dGhpcy5lbmFibGVkKCExLGEpO0MuZW50ZXIoYSxkLGUpO3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7cihcImVudGVyXCIsXCJuZy1lbnRlclwiLGEsZCxlLHEsYyl9KX0sbGVhdmU6ZnVuY3Rpb24oYSxkKXtRKGEpO3RoaXMuZW5hYmxlZCghMSxhKTt3LiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3IoXCJsZWF2ZVwiLFxyXG5cIm5nLWxlYXZlXCIsYSxudWxsLG51bGwsZnVuY3Rpb24oKXtDLmxlYXZlKGEpfSxkKX0pfSxtb3ZlOmZ1bmN0aW9uKGEsZCxlLGMpe1EoYSk7dGhpcy5lbmFibGVkKCExLGEpO0MubW92ZShhLGQsZSk7dy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtyKFwibW92ZVwiLFwibmctbW92ZVwiLGEsZCxlLHEsYyl9KX0sYWRkQ2xhc3M6ZnVuY3Rpb24oYSxkLGUpe3IoXCJhZGRDbGFzc1wiLGQsYSxudWxsLG51bGwsZnVuY3Rpb24oKXtDLmFkZENsYXNzKGEsZCl9LGUpfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhLGQsZSl7cihcInJlbW92ZUNsYXNzXCIsZCxhLG51bGwsbnVsbCxmdW5jdGlvbigpe0MucmVtb3ZlQ2xhc3MoYSxkKX0sZSl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSxkKXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAyOmlmKGEpQShkKTtlbHNle3ZhciBlPWQuZGF0YShsKXx8e307ZS5kaXNhYmxlZD0hMDtkLmRhdGEobCxlKX1icmVhaztjYXNlIDE6bS5kaXNhYmxlZD0hYTticmVhaztkZWZhdWx0OmE9XHJcbiFtLmRpc2FibGVkfXJldHVybiEhYX19fV0pO0IucmVnaXN0ZXIoXCJcIixbXCIkd2luZG93XCIsXCIkc25pZmZlclwiLFwiJHRpbWVvdXRcIixcIiQkYW5pbWF0ZVJlZmxvd1wiLGZ1bmN0aW9uKG0sbCxCLEgpe2Z1bmN0aW9uIHkoYixhKXtPJiZPKCk7VS5wdXNoKGEpO3ZhciBoPWQoYik7Yj1rLmVsZW1lbnQoaCk7Vi5wdXNoKGIpO3ZhciBoPWIuZGF0YShuKSxjPWguc3RhZ2dlcixjPWguaXRlbUluZGV4KihNYXRoLm1heChjLmFuaW1hdGlvbkRlbGF5LGMudHJhbnNpdGlvbkRlbGF5KXx8MCk7UD1NYXRoLm1heChQLChjKyhoLm1heERlbGF5K2gubWF4RHVyYXRpb24pKnMpKngpO2guYW5pbWF0aW9uQ291bnQ9RztPPUgoZnVuY3Rpb24oKXtwKFUsZnVuY3Rpb24oYil7YigpfSk7dmFyIGI9W10sYT1HO3AoVixmdW5jdGlvbihhKXtiLnB1c2goYSl9KTtCKGZ1bmN0aW9uKCl7dyhiLGEpO2I9bnVsbH0sUCwhMSk7VT1bXTtWPVtdO089bnVsbDt1PXt9O1A9MDtHKyt9KX1mdW5jdGlvbiB3KGIsYSl7cChiLFxyXG5mdW5jdGlvbihiKXsoYj1iLmRhdGEobikpJiZiLmFuaW1hdGlvbkNvdW50PT1hJiYoYi5jbG9zZUFuaW1hdGlvbkZufHxxKSgpfSl9ZnVuY3Rpb24gTihiLGEpe3ZhciBoPWE/dVthXTpudWxsO2lmKCFoKXt2YXIgZD0wLGM9MCxlPTAsaz0wLGcsbixsLHI7cChiLGZ1bmN0aW9uKGIpe2lmKGIubm9kZVR5cGU9PVgpe2I9bS5nZXRDb21wdXRlZFN0eWxlKGIpfHx7fTtsPWJbZitZXTtkPU1hdGgubWF4KEkobCksZCk7cj1iW2YrV107Zz1iW2YrRV07Yz1NYXRoLm1heChJKGcpLGMpO249YltGK0VdO2s9TWF0aC5tYXgoSShuKSxrKTt2YXIgYT1JKGJbRitZXSk7MDxhJiYoYSo9cGFyc2VJbnQoYltGK1JdLDEwKXx8MSk7ZT1NYXRoLm1heChhLGUpfX0pO2g9e3RvdGFsOjAsdHJhbnNpdGlvblByb3BlcnR5U3R5bGU6cix0cmFuc2l0aW9uRHVyYXRpb25TdHlsZTpsLHRyYW5zaXRpb25EZWxheVN0eWxlOmcsdHJhbnNpdGlvbkRlbGF5OmMsdHJhbnNpdGlvbkR1cmF0aW9uOmQsYW5pbWF0aW9uRGVsYXlTdHlsZTpuLFxyXG5hbmltYXRpb25EZWxheTprLGFuaW1hdGlvbkR1cmF0aW9uOmV9O2EmJih1W2FdPWgpfXJldHVybiBofWZ1bmN0aW9uIEkoYil7dmFyIGE9MDtiPWsuaXNTdHJpbmcoYik/Yi5zcGxpdCgvXFxzKixcXHMqLyk6W107cChiLGZ1bmN0aW9uKGIpe2E9TWF0aC5tYXgocGFyc2VGbG9hdChiKXx8MCxhKX0pO3JldHVybiBhfWZ1bmN0aW9uIHIoYil7dmFyIGE9Yi5wYXJlbnQoKSxoPWEuZGF0YShaKTtofHwoYS5kYXRhKFosKytEKSxoPUQpO3JldHVybiBoK1wiLVwiK2QoYikuY2xhc3NOYW1lfWZ1bmN0aW9uIFEoYixhLGgpe3ZhciBjPXIoYiksZT1jK1wiIFwiK2Esaz17fSxnPXVbZV0/Kyt1W2VdLnRvdGFsOjA7aWYoMDxnKXt2YXIgbD1hK1wiLXN0YWdnZXJcIixrPWMrXCIgXCIrbDsoYz0hdVtrXSkmJmIuYWRkQ2xhc3MobCk7az1OKGIsayk7YyYmYi5yZW1vdmVDbGFzcyhsKX1oPWh8fGZ1bmN0aW9uKGIpe3JldHVybiBiKCl9O2IuYWRkQ2xhc3MoYSk7aD1oKGZ1bmN0aW9uKCl7cmV0dXJuIE4oYixlKX0pO1xyXG5sPU1hdGgubWF4KGgudHJhbnNpdGlvbkRlbGF5LGguYW5pbWF0aW9uRGVsYXkpO2M9TWF0aC5tYXgoaC50cmFuc2l0aW9uRHVyYXRpb24saC5hbmltYXRpb25EdXJhdGlvbik7aWYoMD09PWMpcmV0dXJuIGIucmVtb3ZlQ2xhc3MoYSksITE7dmFyIG09XCJcIjswPGgudHJhbnNpdGlvbkR1cmF0aW9uP2QoYikuc3R5bGVbZitXXT1cIm5vbmVcIjpkKGIpLnN0eWxlW0ZdPVwibm9uZSAwc1wiO3AoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYixhKXttKz0oMDxhP1wiIFwiOlwiXCIpK2IrXCItYWN0aXZlXCJ9KTtiLmRhdGEobix7Y2xhc3NOYW1lOmEsYWN0aXZlQ2xhc3NOYW1lOm0sbWF4RHVyYXRpb246YyxtYXhEZWxheTpsLGNsYXNzZXM6YStcIiBcIittLHRpbWluZ3M6aCxzdGFnZ2VyOmssaXRlbUluZGV4Omd9KTtyZXR1cm4hMH1mdW5jdGlvbiBKKGIpe3ZhciBhPWYrVztiPWQoYik7Yi5zdHlsZVthXSYmMDxiLnN0eWxlW2FdLmxlbmd0aCYmKGIuc3R5bGVbYV09XCJcIil9ZnVuY3Rpb24gQShiKXt2YXIgYT1GO2I9XHJcbmQoYik7Yi5zdHlsZVthXSYmMDxiLnN0eWxlW2FdLmxlbmd0aCYmKGIuc3R5bGVbYV09XCJcIil9ZnVuY3Rpb24gSyhiLGEsaCl7ZnVuY3Rpb24gZShjKXtiLm9mZih2LGspO2IucmVtb3ZlQ2xhc3Mocik7Yz1iO2MucmVtb3ZlQ2xhc3MoYSk7Yy5yZW1vdmVEYXRhKG4pO2M9ZChiKTtmb3IodmFyIGggaW4gcyljLnN0eWxlLnJlbW92ZVByb3BlcnR5KHNbaF0pfWZ1bmN0aW9uIGsoYil7Yi5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYT1iLm9yaWdpbmFsRXZlbnR8fGI7Yj1hLiRtYW51YWxUaW1lU3RhbXB8fGEudGltZVN0YW1wfHxEYXRlLm5vdygpO2E9cGFyc2VGbG9hdChhLmVsYXBzZWRUaW1lLnRvRml4ZWQoeikpO01hdGgubWF4KGItdywwKT49dSYmYT49cCYmaCgpfXZhciBmPWIuZGF0YShuKSxnPWQoYik7aWYoLTEhPWcuY2xhc3NOYW1lLmluZGV4T2YoYSkmJmYpe3ZhciBsPWYudGltaW5ncyxtPWYuc3RhZ2dlcixwPWYubWF4RHVyYXRpb24scj1mLmFjdGl2ZUNsYXNzTmFtZSx1PU1hdGgubWF4KGwudHJhbnNpdGlvbkRlbGF5LFxyXG5sLmFuaW1hdGlvbkRlbGF5KSp4LHc9RGF0ZS5ub3coKSx2PVQrXCIgXCIrUyx0PWYuaXRlbUluZGV4LHE9XCJcIixzPVtdO2lmKDA8bC50cmFuc2l0aW9uRHVyYXRpb24pe3ZhciB5PWwudHJhbnNpdGlvblByb3BlcnR5U3R5bGU7LTE9PXkuaW5kZXhPZihcImFsbFwiKSYmKHErPWMrXCJ0cmFuc2l0aW9uLXByb3BlcnR5OiBcIit5K1wiO1wiLHErPWMrXCJ0cmFuc2l0aW9uLWR1cmF0aW9uOiBcIitsLnRyYW5zaXRpb25EdXJhdGlvblN0eWxlK1wiO1wiLHMucHVzaChjK1widHJhbnNpdGlvbi1wcm9wZXJ0eVwiKSxzLnB1c2goYytcInRyYW5zaXRpb24tZHVyYXRpb25cIikpfTA8dCYmKDA8bS50cmFuc2l0aW9uRGVsYXkmJjA9PT1tLnRyYW5zaXRpb25EdXJhdGlvbiYmKHErPWMrXCJ0cmFuc2l0aW9uLWRlbGF5OiBcIitNKGwudHJhbnNpdGlvbkRlbGF5U3R5bGUsbS50cmFuc2l0aW9uRGVsYXksdCkrXCI7IFwiLHMucHVzaChjK1widHJhbnNpdGlvbi1kZWxheVwiKSksMDxtLmFuaW1hdGlvbkRlbGF5JiYwPT09bS5hbmltYXRpb25EdXJhdGlvbiYmXHJcbihxKz1jK1wiYW5pbWF0aW9uLWRlbGF5OiBcIitNKGwuYW5pbWF0aW9uRGVsYXlTdHlsZSxtLmFuaW1hdGlvbkRlbGF5LHQpK1wiOyBcIixzLnB1c2goYytcImFuaW1hdGlvbi1kZWxheVwiKSkpOzA8cy5sZW5ndGgmJihsPWcuZ2V0QXR0cmlidXRlKFwic3R5bGVcIil8fFwiXCIsZy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGwrXCIgXCIrcSkpO2Iub24odixrKTtiLmFkZENsYXNzKHIpO2YuY2xvc2VBbmltYXRpb25Gbj1mdW5jdGlvbigpe2UoKTtoKCl9O3JldHVybiBlfWgoKX1mdW5jdGlvbiBNKGIsYSxjKXt2YXIgZD1cIlwiO3AoYi5zcGxpdChcIixcIiksZnVuY3Rpb24oYixlKXtkKz0oMDxlP1wiLFwiOlwiXCIpKyhjKmErcGFyc2VJbnQoYiwxMCkpK1wic1wifSk7cmV0dXJuIGR9ZnVuY3Rpb24gTChiLGEsYyl7aWYoUShiLGEsYykpcmV0dXJuIGZ1bmN0aW9uKGMpe2MmJihiLnJlbW92ZUNsYXNzKGEpLGIucmVtb3ZlRGF0YShuKSl9fWZ1bmN0aW9uIGEoYSxjLGQpe2lmKGEuZGF0YShuKSlyZXR1cm4gSyhhLGMsZCk7YS5yZW1vdmVDbGFzcyhjKTtcclxuYS5yZW1vdmVEYXRhKG4pO2QoKX1mdW5jdGlvbiBnKGIsYyxkKXt2YXIgZT1MKGIsYyk7aWYoZSl7dmFyIGY9ZTt5KGIsZnVuY3Rpb24oKXtKKGIpO0EoYik7Zj1hKGIsYyxkKX0pO3JldHVybiBmdW5jdGlvbihhKXsoZnx8cSkoYSl9fWQoKX1mdW5jdGlvbiBlKGEsYyl7dmFyIGQ9XCJcIjthPWsuaXNBcnJheShhKT9hOmEuc3BsaXQoL1xccysvKTtwKGEsZnVuY3Rpb24oYSxiKXthJiYwPGEubGVuZ3RoJiYoZCs9KDA8Yj9cIiBcIjpcIlwiKSthK2MpfSk7cmV0dXJuIGR9dmFyIGM9XCJcIixmLFMsRixUO3Yub250cmFuc2l0aW9uZW5kPT09dCYmdi5vbndlYmtpdHRyYW5zaXRpb25lbmQhPT10PyhjPVwiLXdlYmtpdC1cIixmPVwiV2Via2l0VHJhbnNpdGlvblwiLFM9XCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIik6KGY9XCJ0cmFuc2l0aW9uXCIsUz1cInRyYW5zaXRpb25lbmRcIik7di5vbmFuaW1hdGlvbmVuZD09PXQmJnYub253ZWJraXRhbmltYXRpb25lbmQhPT10PyhjPVwiLXdlYmtpdC1cIixGPVxyXG5cIldlYmtpdEFuaW1hdGlvblwiLFQ9XCJ3ZWJraXRBbmltYXRpb25FbmQgYW5pbWF0aW9uZW5kXCIpOihGPVwiYW5pbWF0aW9uXCIsVD1cImFuaW1hdGlvbmVuZFwiKTt2YXIgWT1cIkR1cmF0aW9uXCIsVz1cIlByb3BlcnR5XCIsRT1cIkRlbGF5XCIsUj1cIkl0ZXJhdGlvbkNvdW50XCIsWj1cIiQkbmdBbmltYXRlS2V5XCIsbj1cIiQkbmdBbmltYXRlQ1NTM0RhdGFcIix6PTMscz0xLjUseD0xRTMsRz0wLHU9e30sRD0wLFU9W10sVj1bXSxPLFA9MDtyZXR1cm57YWxsb3dDYW5jZWw6ZnVuY3Rpb24oYSxjLGgpe3ZhciBmPShhLmRhdGEobil8fHt9KS5jbGFzc2VzO2lmKCFmfHwwPD1bXCJlbnRlclwiLFwibGVhdmVcIixcIm1vdmVcIl0uaW5kZXhPZihjKSlyZXR1cm4hMDt2YXIgbD1hLnBhcmVudCgpLGc9ay5lbGVtZW50KGQoYSkuY2xvbmVOb2RlKCkpO2cuYXR0cihcInN0eWxlXCIsXCJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOi05OTk5cHg7IGxlZnQ6LTk5OTlweFwiKTtnLnJlbW92ZUF0dHIoXCJpZFwiKTtnLmVtcHR5KCk7cChmLnNwbGl0KFwiIFwiKSxcclxuZnVuY3Rpb24oYSl7Zy5yZW1vdmVDbGFzcyhhKX0pO2cuYWRkQ2xhc3MoZShoLFwiYWRkQ2xhc3NcIj09Yz9cIi1hZGRcIjpcIi1yZW1vdmVcIikpO2wuYXBwZW5kKGcpO2E9TihnKTtnLnJlbW92ZSgpO3JldHVybiAwPE1hdGgubWF4KGEudHJhbnNpdGlvbkR1cmF0aW9uLGEuYW5pbWF0aW9uRHVyYXRpb24pfSxlbnRlcjpmdW5jdGlvbihhLGMpe3JldHVybiBnKGEsXCJuZy1lbnRlclwiLGMpfSxsZWF2ZTpmdW5jdGlvbihhLGMpe3JldHVybiBnKGEsXCJuZy1sZWF2ZVwiLGMpfSxtb3ZlOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGcoYSxcIm5nLW1vdmVcIixjKX0sYmVmb3JlQWRkQ2xhc3M6ZnVuY3Rpb24oYSxjLGQpe3ZhciBmPUwoYSxlKGMsXCItYWRkXCIpLGZ1bmN0aW9uKGQpe2EuYWRkQ2xhc3MoYyk7ZD1kKCk7YS5yZW1vdmVDbGFzcyhjKTtyZXR1cm4gZH0pO2lmKGYpcmV0dXJuIHkoYSxmdW5jdGlvbigpe0ooYSk7QShhKTtkKCl9KSxmO2QoKX0sYWRkQ2xhc3M6ZnVuY3Rpb24oYixjLGQpe3JldHVybiBhKGIsXHJcbmUoYyxcIi1hZGRcIiksZCl9LGJlZm9yZVJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEsYyxkKXt2YXIgZj1MKGEsZShjLFwiLXJlbW92ZVwiKSxmdW5jdGlvbihkKXt2YXIgZT1hLmF0dHIoXCJjbGFzc1wiKTthLnJlbW92ZUNsYXNzKGMpO2Q9ZCgpO2EuYXR0cihcImNsYXNzXCIsZSk7cmV0dXJuIGR9KTtpZihmKXJldHVybiB5KGEsZnVuY3Rpb24oKXtKKGEpO0EoYSk7ZCgpfSksZjtkKCl9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gYShiLGUoYyxcIi1yZW1vdmVcIiksZCl9fX1dKX1dKX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXItYW5pbWF0ZS5taW4uanMubWFwXHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJyYXJpZXNcXFxcYW5ndWxhci1hbmltYXRlLm1pbi5qc1wiLFwiL2xpYnJhcmllc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiBBbmd1bGFySlMgdjEuMi4xMlxyXG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcclxuIExpY2Vuc2U6IE1JVFxyXG4qL1xyXG4oZnVuY3Rpb24oSCxhLEEpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBEKHAsZyl7Zz1nfHx7fTthLmZvckVhY2goZyxmdW5jdGlvbihhLGMpe2RlbGV0ZSBnW2NdfSk7Zm9yKHZhciBjIGluIHApIXAuaGFzT3duUHJvcGVydHkoYyl8fFwiJFwiPT09Yy5jaGFyQXQoMCkmJlwiJFwiPT09Yy5jaGFyQXQoMSl8fChnW2NdPXBbY10pO3JldHVybiBnfXZhciB2PWEuJCRtaW5FcnIoXCIkcmVzb3VyY2VcIiksQz0vXihcXC5bYS16QS1aXyRdWzAtOWEtekEtWl8kXSopKyQvO2EubW9kdWxlKFwibmdSZXNvdXJjZVwiLFtcIm5nXCJdKS5mYWN0b3J5KFwiJHJlc291cmNlXCIsW1wiJGh0dHBcIixcIiRxXCIsZnVuY3Rpb24ocCxnKXtmdW5jdGlvbiBjKGEsYyl7dGhpcy50ZW1wbGF0ZT1hO3RoaXMuZGVmYXVsdHM9Y3x8e307dGhpcy51cmxQYXJhbXM9e319ZnVuY3Rpb24gdChuLHcsbCl7ZnVuY3Rpb24gcihoLGQpe3ZhciBlPXt9O2Q9eCh7fSx3LGQpO3MoZCxmdW5jdGlvbihiLGQpe3UoYikmJihiPWIoKSk7dmFyIGs7aWYoYiYmXHJcbmIuY2hhckF0JiZcIkBcIj09Yi5jaGFyQXQoMCkpe2s9aDt2YXIgYT1iLnN1YnN0cigxKTtpZihudWxsPT1hfHxcIlwiPT09YXx8XCJoYXNPd25Qcm9wZXJ0eVwiPT09YXx8IUMudGVzdChcIi5cIithKSl0aHJvdyB2KFwiYmFkbWVtYmVyXCIsYSk7Zm9yKHZhciBhPWEuc3BsaXQoXCIuXCIpLGY9MCxjPWEubGVuZ3RoO2Y8YyYmayE9PUE7ZisrKXt2YXIgZz1hW2ZdO2s9bnVsbCE9PWs/a1tnXTpBfX1lbHNlIGs9YjtlW2RdPWt9KTtyZXR1cm4gZX1mdW5jdGlvbiBlKGEpe3JldHVybiBhLnJlc291cmNlfWZ1bmN0aW9uIGYoYSl7RChhfHx7fSx0aGlzKX12YXIgRj1uZXcgYyhuKTtsPXgoe30sQixsKTtzKGwsZnVuY3Rpb24oaCxkKXt2YXIgYz0vXihQT1NUfFBVVHxQQVRDSCkkL2kudGVzdChoLm1ldGhvZCk7ZltkXT1mdW5jdGlvbihiLGQsayx3KXt2YXIgcT17fSxuLGwseTtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSA0Onk9dyxsPWs7Y2FzZSAzOmNhc2UgMjppZih1KGQpKXtpZih1KGIpKXtsPVxyXG5iO3k9ZDticmVha31sPWQ7eT1rfWVsc2V7cT1iO249ZDtsPWs7YnJlYWt9Y2FzZSAxOnUoYik/bD1iOmM/bj1iOnE9YjticmVhaztjYXNlIDA6YnJlYWs7ZGVmYXVsdDp0aHJvdyB2KFwiYmFkYXJnc1wiLGFyZ3VtZW50cy5sZW5ndGgpO312YXIgdD10aGlzIGluc3RhbmNlb2YgZixtPXQ/bjpoLmlzQXJyYXk/W106bmV3IGYobiksej17fSxCPWguaW50ZXJjZXB0b3ImJmguaW50ZXJjZXB0b3IucmVzcG9uc2V8fGUsQz1oLmludGVyY2VwdG9yJiZoLmludGVyY2VwdG9yLnJlc3BvbnNlRXJyb3J8fEE7cyhoLGZ1bmN0aW9uKGEsYil7XCJwYXJhbXNcIiE9YiYmKFwiaXNBcnJheVwiIT1iJiZcImludGVyY2VwdG9yXCIhPWIpJiYoeltiXT1HKGEpKX0pO2MmJih6LmRhdGE9bik7Ri5zZXRVcmxQYXJhbXMoeix4KHt9LHIobixoLnBhcmFtc3x8e30pLHEpLGgudXJsKTtxPXAoeikudGhlbihmdW5jdGlvbihiKXt2YXIgZD1iLmRhdGEsaz1tLiRwcm9taXNlO2lmKGQpe2lmKGEuaXNBcnJheShkKSE9PSEhaC5pc0FycmF5KXRocm93IHYoXCJiYWRjZmdcIixcclxuaC5pc0FycmF5P1wiYXJyYXlcIjpcIm9iamVjdFwiLGEuaXNBcnJheShkKT9cImFycmF5XCI6XCJvYmplY3RcIik7aC5pc0FycmF5PyhtLmxlbmd0aD0wLHMoZCxmdW5jdGlvbihiKXttLnB1c2gobmV3IGYoYikpfSkpOihEKGQsbSksbS4kcHJvbWlzZT1rKX1tLiRyZXNvbHZlZD0hMDtiLnJlc291cmNlPW07cmV0dXJuIGJ9LGZ1bmN0aW9uKGIpe20uJHJlc29sdmVkPSEwOyh5fHxFKShiKTtyZXR1cm4gZy5yZWplY3QoYil9KTtxPXEudGhlbihmdW5jdGlvbihiKXt2YXIgYT1CKGIpOyhsfHxFKShhLGIuaGVhZGVycyk7cmV0dXJuIGF9LEMpO3JldHVybiB0P3E6KG0uJHByb21pc2U9cSxtLiRyZXNvbHZlZD0hMSxtKX07Zi5wcm90b3R5cGVbXCIkXCIrZF09ZnVuY3Rpb24oYixhLGspe3UoYikmJihrPWEsYT1iLGI9e30pO2I9ZltkXS5jYWxsKHRoaXMsYix0aGlzLGEsayk7cmV0dXJuIGIuJHByb21pc2V8fGJ9fSk7Zi5iaW5kPWZ1bmN0aW9uKGEpe3JldHVybiB0KG4seCh7fSx3LGEpLGwpfTtyZXR1cm4gZn1cclxudmFyIEI9e2dldDp7bWV0aG9kOlwiR0VUXCJ9LHNhdmU6e21ldGhvZDpcIlBPU1RcIn0scXVlcnk6e21ldGhvZDpcIkdFVFwiLGlzQXJyYXk6ITB9LHJlbW92ZTp7bWV0aG9kOlwiREVMRVRFXCJ9LFwiZGVsZXRlXCI6e21ldGhvZDpcIkRFTEVURVwifX0sRT1hLm5vb3Ascz1hLmZvckVhY2gseD1hLmV4dGVuZCxHPWEuY29weSx1PWEuaXNGdW5jdGlvbjtjLnByb3RvdHlwZT17c2V0VXJsUGFyYW1zOmZ1bmN0aW9uKGMsZyxsKXt2YXIgcj10aGlzLGU9bHx8ci50ZW1wbGF0ZSxmLHAsaD1yLnVybFBhcmFtcz17fTtzKGUuc3BsaXQoL1xcVy8pLGZ1bmN0aW9uKGEpe2lmKFwiaGFzT3duUHJvcGVydHlcIj09PWEpdGhyb3cgdihcImJhZG5hbWVcIik7IS9eXFxkKyQvLnRlc3QoYSkmJihhJiZSZWdFeHAoXCIoXnxbXlxcXFxcXFxcXSk6XCIrYStcIihcXFxcV3wkKVwiKS50ZXN0KGUpKSYmKGhbYV09ITApfSk7ZT1lLnJlcGxhY2UoL1xcXFw6L2csXCI6XCIpO2c9Z3x8e307cyhyLnVybFBhcmFtcyxmdW5jdGlvbihkLGMpe2Y9Zy5oYXNPd25Qcm9wZXJ0eShjKT9cclxuZ1tjXTpyLmRlZmF1bHRzW2NdO2EuaXNEZWZpbmVkKGYpJiZudWxsIT09Zj8ocD1lbmNvZGVVUklDb21wb25lbnQoZikucmVwbGFjZSgvJTQwL2dpLFwiQFwiKS5yZXBsYWNlKC8lM0EvZ2ksXCI6XCIpLnJlcGxhY2UoLyUyNC9nLFwiJFwiKS5yZXBsYWNlKC8lMkMvZ2ksXCIsXCIpLnJlcGxhY2UoLyUyMC9nLFwiJTIwXCIpLnJlcGxhY2UoLyUyNi9naSxcIiZcIikucmVwbGFjZSgvJTNEL2dpLFwiPVwiKS5yZXBsYWNlKC8lMkIvZ2ksXCIrXCIpLGU9ZS5yZXBsYWNlKFJlZ0V4cChcIjpcIitjK1wiKFxcXFxXfCQpXCIsXCJnXCIpLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIHArY30pKTplPWUucmVwbGFjZShSZWdFeHAoXCIoLz8pOlwiK2MrXCIoXFxcXFd8JClcIixcImdcIiksZnVuY3Rpb24oYSxjLGQpe3JldHVyblwiL1wiPT1kLmNoYXJBdCgwKT9kOmMrZH0pfSk7ZT1lLnJlcGxhY2UoL1xcLyskLyxcIlwiKXx8XCIvXCI7ZT1lLnJlcGxhY2UoL1xcL1xcLig/PVxcdysoJHxcXD8pKS8sXCIuXCIpO2MudXJsPWUucmVwbGFjZSgvXFwvXFxcXFxcLi8sXCIvLlwiKTtzKGcsZnVuY3Rpb24oYSxcclxuZSl7ci51cmxQYXJhbXNbZV18fChjLnBhcmFtcz1jLnBhcmFtc3x8e30sYy5wYXJhbXNbZV09YSl9KX19O3JldHVybiB0fV0pfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci1yZXNvdXJjZS5taW4uanMubWFwXHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJyYXJpZXNcXFxcYW5ndWxhci1yZXNvdXJjZS5taW4uanNcIixcIi9saWJyYXJpZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4gQW5ndWxhckpTIHYxLjIuMTJcclxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXHJcbiBMaWNlbnNlOiBNSVRcclxuKi9cclxuKGZ1bmN0aW9uKGgsZSxBKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gdSh3LHEsayl7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIsdGVybWluYWw6ITAscHJpb3JpdHk6NDAwLHRyYW5zY2x1ZGU6XCJlbGVtZW50XCIsbGluazpmdW5jdGlvbihhLGMsYixmLG4pe2Z1bmN0aW9uIHkoKXtsJiYobC4kZGVzdHJveSgpLGw9bnVsbCk7ZyYmKGsubGVhdmUoZyksZz1udWxsKX1mdW5jdGlvbiB2KCl7dmFyIGI9dy5jdXJyZW50JiZ3LmN1cnJlbnQubG9jYWxzO2lmKGUuaXNEZWZpbmVkKGImJmIuJHRlbXBsYXRlKSl7dmFyIGI9YS4kbmV3KCksZj13LmN1cnJlbnQ7Zz1uKGIsZnVuY3Rpb24oZCl7ay5lbnRlcihkLG51bGwsZ3x8YyxmdW5jdGlvbigpeyFlLmlzRGVmaW5lZCh0KXx8dCYmIWEuJGV2YWwodCl8fHEoKX0pO3koKX0pO2w9Zi5zY29wZT1iO2wuJGVtaXQoXCIkdmlld0NvbnRlbnRMb2FkZWRcIik7bC4kZXZhbChoKX1lbHNlIHkoKX12YXIgbCxnLHQ9Yi5hdXRvc2Nyb2xsLGg9Yi5vbmxvYWR8fFwiXCI7XHJcbmEuJG9uKFwiJHJvdXRlQ2hhbmdlU3VjY2Vzc1wiLHYpO3YoKX19fWZ1bmN0aW9uIHooZSxoLGspe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5Oi00MDAsbGluazpmdW5jdGlvbihhLGMpe3ZhciBiPWsuY3VycmVudCxmPWIubG9jYWxzO2MuaHRtbChmLiR0ZW1wbGF0ZSk7dmFyIG49ZShjLmNvbnRlbnRzKCkpO2IuY29udHJvbGxlciYmKGYuJHNjb3BlPWEsZj1oKGIuY29udHJvbGxlcixmKSxiLmNvbnRyb2xsZXJBcyYmKGFbYi5jb250cm9sbGVyQXNdPWYpLGMuZGF0YShcIiRuZ0NvbnRyb2xsZXJDb250cm9sbGVyXCIsZiksYy5jaGlsZHJlbigpLmRhdGEoXCIkbmdDb250cm9sbGVyQ29udHJvbGxlclwiLGYpKTtuKGEpfX19aD1lLm1vZHVsZShcIm5nUm91dGVcIixbXCJuZ1wiXSkucHJvdmlkZXIoXCIkcm91dGVcIixmdW5jdGlvbigpe2Z1bmN0aW9uIGgoYSxjKXtyZXR1cm4gZS5leHRlbmQobmV3IChlLmV4dGVuZChmdW5jdGlvbigpe30se3Byb3RvdHlwZTphfSkpLGMpfWZ1bmN0aW9uIHEoYSxcclxuZSl7dmFyIGI9ZS5jYXNlSW5zZW5zaXRpdmVNYXRjaCxmPXtvcmlnaW5hbFBhdGg6YSxyZWdleHA6YX0saD1mLmtleXM9W107YT1hLnJlcGxhY2UoLyhbKCkuXSkvZyxcIlxcXFwkMVwiKS5yZXBsYWNlKC8oXFwvKT86KFxcdyspKFtcXD9cXCpdKT8vZyxmdW5jdGlvbihhLGUsYixjKXthPVwiP1wiPT09Yz9jOm51bGw7Yz1cIipcIj09PWM/YzpudWxsO2gucHVzaCh7bmFtZTpiLG9wdGlvbmFsOiEhYX0pO2U9ZXx8XCJcIjtyZXR1cm5cIlwiKyhhP1wiXCI6ZSkrXCIoPzpcIisoYT9lOlwiXCIpKyhjJiZcIiguKz8pXCJ8fFwiKFteL10rKVwiKSsoYXx8XCJcIikrXCIpXCIrKGF8fFwiXCIpfSkucmVwbGFjZSgvKFtcXC8kXFwqXSkvZyxcIlxcXFwkMVwiKTtmLnJlZ2V4cD1SZWdFeHAoXCJeXCIrYStcIiRcIixiP1wiaVwiOlwiXCIpO3JldHVybiBmfXZhciBrPXt9O3RoaXMud2hlbj1mdW5jdGlvbihhLGMpe2tbYV09ZS5leHRlbmQoe3JlbG9hZE9uU2VhcmNoOiEwfSxjLGEmJnEoYSxjKSk7aWYoYSl7dmFyIGI9XCIvXCI9PWFbYS5sZW5ndGgtMV0/YS5zdWJzdHIoMCxhLmxlbmd0aC1cclxuMSk6YStcIi9cIjtrW2JdPWUuZXh0ZW5kKHtyZWRpcmVjdFRvOmF9LHEoYixjKSl9cmV0dXJuIHRoaXN9O3RoaXMub3RoZXJ3aXNlPWZ1bmN0aW9uKGEpe3RoaXMud2hlbihudWxsLGEpO3JldHVybiB0aGlzfTt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJGxvY2F0aW9uXCIsXCIkcm91dGVQYXJhbXNcIixcIiRxXCIsXCIkaW5qZWN0b3JcIixcIiRodHRwXCIsXCIkdGVtcGxhdGVDYWNoZVwiLFwiJHNjZVwiLGZ1bmN0aW9uKGEsYyxiLGYsbixxLHYsbCl7ZnVuY3Rpb24gZygpe3ZhciBkPXQoKSxtPXIuY3VycmVudDtpZihkJiZtJiZkLiQkcm91dGU9PT1tLiQkcm91dGUmJmUuZXF1YWxzKGQucGF0aFBhcmFtcyxtLnBhdGhQYXJhbXMpJiYhZC5yZWxvYWRPblNlYXJjaCYmIXgpbS5wYXJhbXM9ZC5wYXJhbXMsZS5jb3B5KG0ucGFyYW1zLGIpLGEuJGJyb2FkY2FzdChcIiRyb3V0ZVVwZGF0ZVwiLG0pO2Vsc2UgaWYoZHx8bSl4PSExLGEuJGJyb2FkY2FzdChcIiRyb3V0ZUNoYW5nZVN0YXJ0XCIsZCxtKSwoci5jdXJyZW50PVxyXG5kKSYmZC5yZWRpcmVjdFRvJiYoZS5pc1N0cmluZyhkLnJlZGlyZWN0VG8pP2MucGF0aCh1KGQucmVkaXJlY3RUbyxkLnBhcmFtcykpLnNlYXJjaChkLnBhcmFtcykucmVwbGFjZSgpOmMudXJsKGQucmVkaXJlY3RUbyhkLnBhdGhQYXJhbXMsYy5wYXRoKCksYy5zZWFyY2goKSkpLnJlcGxhY2UoKSksZi53aGVuKGQpLnRoZW4oZnVuY3Rpb24oKXtpZihkKXt2YXIgYT1lLmV4dGVuZCh7fSxkLnJlc29sdmUpLGMsYjtlLmZvckVhY2goYSxmdW5jdGlvbihkLGMpe2FbY109ZS5pc1N0cmluZyhkKT9uLmdldChkKTpuLmludm9rZShkKX0pO2UuaXNEZWZpbmVkKGM9ZC50ZW1wbGF0ZSk/ZS5pc0Z1bmN0aW9uKGMpJiYoYz1jKGQucGFyYW1zKSk6ZS5pc0RlZmluZWQoYj1kLnRlbXBsYXRlVXJsKSYmKGUuaXNGdW5jdGlvbihiKSYmKGI9YihkLnBhcmFtcykpLGI9bC5nZXRUcnVzdGVkUmVzb3VyY2VVcmwoYiksZS5pc0RlZmluZWQoYikmJihkLmxvYWRlZFRlbXBsYXRlVXJsPWIsYz1xLmdldChiLFxyXG57Y2FjaGU6dn0pLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGF0YX0pKSk7ZS5pc0RlZmluZWQoYykmJihhLiR0ZW1wbGF0ZT1jKTtyZXR1cm4gZi5hbGwoYSl9fSkudGhlbihmdW5jdGlvbihjKXtkPT1yLmN1cnJlbnQmJihkJiYoZC5sb2NhbHM9YyxlLmNvcHkoZC5wYXJhbXMsYikpLGEuJGJyb2FkY2FzdChcIiRyb3V0ZUNoYW5nZVN1Y2Nlc3NcIixkLG0pKX0sZnVuY3Rpb24oYyl7ZD09ci5jdXJyZW50JiZhLiRicm9hZGNhc3QoXCIkcm91dGVDaGFuZ2VFcnJvclwiLGQsbSxjKX0pfWZ1bmN0aW9uIHQoKXt2YXIgYSxiO2UuZm9yRWFjaChrLGZ1bmN0aW9uKGYsayl7dmFyIHA7aWYocD0hYil7dmFyIHM9Yy5wYXRoKCk7cD1mLmtleXM7dmFyIGw9e307aWYoZi5yZWdleHApaWYocz1mLnJlZ2V4cC5leGVjKHMpKXtmb3IodmFyIGc9MSxxPXMubGVuZ3RoO2c8cTsrK2cpe3ZhciBuPXBbZy0xXSxyPVwic3RyaW5nXCI9PXR5cGVvZiBzW2ddP2RlY29kZVVSSUNvbXBvbmVudChzW2ddKTpzW2ddO1xyXG5uJiZyJiYobFtuLm5hbWVdPXIpfXA9bH1lbHNlIHA9bnVsbDtlbHNlIHA9bnVsbDtwPWE9cH1wJiYoYj1oKGYse3BhcmFtczplLmV4dGVuZCh7fSxjLnNlYXJjaCgpLGEpLHBhdGhQYXJhbXM6YX0pLGIuJCRyb3V0ZT1mKX0pO3JldHVybiBifHxrW251bGxdJiZoKGtbbnVsbF0se3BhcmFtczp7fSxwYXRoUGFyYW1zOnt9fSl9ZnVuY3Rpb24gdShhLGMpe3ZhciBiPVtdO2UuZm9yRWFjaCgoYXx8XCJcIikuc3BsaXQoXCI6XCIpLGZ1bmN0aW9uKGEsZCl7aWYoMD09PWQpYi5wdXNoKGEpO2Vsc2V7dmFyIGU9YS5tYXRjaCgvKFxcdyspKC4qKS8pLGY9ZVsxXTtiLnB1c2goY1tmXSk7Yi5wdXNoKGVbMl18fFwiXCIpO2RlbGV0ZSBjW2ZdfX0pO3JldHVybiBiLmpvaW4oXCJcIil9dmFyIHg9ITEscj17cm91dGVzOmsscmVsb2FkOmZ1bmN0aW9uKCl7eD0hMDthLiRldmFsQXN5bmMoZyl9fTthLiRvbihcIiRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NcIixnKTtyZXR1cm4gcn1dfSk7aC5wcm92aWRlcihcIiRyb3V0ZVBhcmFtc1wiLFxyXG5mdW5jdGlvbigpe3RoaXMuJGdldD1mdW5jdGlvbigpe3JldHVybnt9fX0pO2guZGlyZWN0aXZlKFwibmdWaWV3XCIsdSk7aC5kaXJlY3RpdmUoXCJuZ1ZpZXdcIix6KTt1LiRpbmplY3Q9W1wiJHJvdXRlXCIsXCIkYW5jaG9yU2Nyb2xsXCIsXCIkYW5pbWF0ZVwiXTt6LiRpbmplY3Q9W1wiJGNvbXBpbGVcIixcIiRjb250cm9sbGVyXCIsXCIkcm91dGVcIl19KSh3aW5kb3csd2luZG93LmFuZ3VsYXIpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXJvdXRlLm1pbi5qcy5tYXBcclxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnJhcmllc1xcXFxhbmd1bGFyLXJvdXRlLm1pbi5qc1wiLFwiL2xpYnJhcmllc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiBBbmd1bGFySlMgdjEuMi4xMlxyXG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcclxuIExpY2Vuc2U6IE1JVFxyXG4qL1xyXG4oZnVuY3Rpb24oeSx2LHopeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB0KGcsYSxiKXtxLmRpcmVjdGl2ZShnLFtcIiRwYXJzZVwiLFwiJHN3aXBlXCIsZnVuY3Rpb24obCxuKXt2YXIgcj03NSxoPTAuMyxkPTMwO3JldHVybiBmdW5jdGlvbihwLG0sayl7ZnVuY3Rpb24gZShlKXtpZighdSlyZXR1cm4hMTt2YXIgYz1NYXRoLmFicyhlLnktdS55KTtlPShlLngtdS54KSphO3JldHVybiBmJiZjPHImJjA8ZSYmZT5kJiZjL2U8aH12YXIgYz1sKGtbZ10pLHUsZjtuLmJpbmQobSx7c3RhcnQ6ZnVuY3Rpb24oZSxjKXt1PWU7Zj0hMH0sY2FuY2VsOmZ1bmN0aW9uKGUpe2Y9ITF9LGVuZDpmdW5jdGlvbihhLGYpe2UoYSkmJnAuJGFwcGx5KGZ1bmN0aW9uKCl7bS50cmlnZ2VySGFuZGxlcihiKTtjKHAseyRldmVudDpmfSl9KX19KX19XSl9dmFyIHE9di5tb2R1bGUoXCJuZ1RvdWNoXCIsW10pO3EuZmFjdG9yeShcIiRzd2lwZVwiLFtmdW5jdGlvbigpe2Z1bmN0aW9uIGcoYSl7dmFyIGI9YS50b3VjaGVzJiZhLnRvdWNoZXMubGVuZ3RoP1xyXG5hLnRvdWNoZXM6W2FdO2E9YS5jaGFuZ2VkVG91Y2hlcyYmYS5jaGFuZ2VkVG91Y2hlc1swXXx8YS5vcmlnaW5hbEV2ZW50JiZhLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXMmJmEub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXXx8YlswXS5vcmlnaW5hbEV2ZW50fHxiWzBdO3JldHVybnt4OmEuY2xpZW50WCx5OmEuY2xpZW50WX19cmV0dXJue2JpbmQ6ZnVuY3Rpb24oYSxiKXt2YXIgbCxuLHIsaCxkPSExO2Eub24oXCJ0b3VjaHN0YXJ0IG1vdXNlZG93blwiLGZ1bmN0aW9uKGEpe3I9ZyhhKTtkPSEwO249bD0wO2g9cjtiLnN0YXJ0JiZiLnN0YXJ0KHIsYSl9KTthLm9uKFwidG91Y2hjYW5jZWxcIixmdW5jdGlvbihhKXtkPSExO2IuY2FuY2VsJiZiLmNhbmNlbChhKX0pO2Eub24oXCJ0b3VjaG1vdmUgbW91c2Vtb3ZlXCIsZnVuY3Rpb24oYSl7aWYoZCYmcil7dmFyIG09ZyhhKTtsKz1NYXRoLmFicyhtLngtaC54KTtuKz1NYXRoLmFicyhtLnktaC55KTtoPW07MTA+bCYmMTA+bnx8XHJcbihuPmw/KGQ9ITEsYi5jYW5jZWwmJmIuY2FuY2VsKGEpKTooYS5wcmV2ZW50RGVmYXVsdCgpLGIubW92ZSYmYi5tb3ZlKG0sYSkpKX19KTthLm9uKFwidG91Y2hlbmQgbW91c2V1cFwiLGZ1bmN0aW9uKGEpe2QmJihkPSExLGIuZW5kJiZiLmVuZChnKGEpLGEpKX0pfX19XSk7cS5jb25maWcoW1wiJHByb3ZpZGVcIixmdW5jdGlvbihnKXtnLmRlY29yYXRvcihcIm5nQ2xpY2tEaXJlY3RpdmVcIixbXCIkZGVsZWdhdGVcIixmdW5jdGlvbihhKXthLnNoaWZ0KCk7cmV0dXJuIGF9XSl9XSk7cS5kaXJlY3RpdmUoXCJuZ0NsaWNrXCIsW1wiJHBhcnNlXCIsXCIkdGltZW91dFwiLFwiJHJvb3RFbGVtZW50XCIsZnVuY3Rpb24oZyxhLGIpe2Z1bmN0aW9uIGwoYSxjLGIpe2Zvcih2YXIgZj0wO2Y8YS5sZW5ndGg7Zis9MilpZihNYXRoLmFicyhhW2ZdLWMpPGQmJk1hdGguYWJzKGFbZisxXS1iKTxkKXJldHVybiBhLnNwbGljZShmLGYrMiksITA7cmV0dXJuITF9ZnVuY3Rpb24gbihhKXtpZighKERhdGUubm93KCktbT5oKSl7dmFyIGM9XHJcbmEudG91Y2hlcyYmYS50b3VjaGVzLmxlbmd0aD9hLnRvdWNoZXM6W2FdLGI9Y1swXS5jbGllbnRYLGM9Y1swXS5jbGllbnRZOzE+YiYmMT5jfHxsKGssYixjKXx8KGEuc3RvcFByb3BhZ2F0aW9uKCksYS5wcmV2ZW50RGVmYXVsdCgpLGEudGFyZ2V0JiZhLnRhcmdldC5ibHVyKCkpfX1mdW5jdGlvbiByKGIpe2I9Yi50b3VjaGVzJiZiLnRvdWNoZXMubGVuZ3RoP2IudG91Y2hlczpbYl07dmFyIGM9YlswXS5jbGllbnRYLGQ9YlswXS5jbGllbnRZO2sucHVzaChjLGQpO2EoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGsubGVuZ3RoO2ErPTIpaWYoa1thXT09YyYma1thKzFdPT1kKXtrLnNwbGljZShhLGErMik7YnJlYWt9fSxoLCExKX12YXIgaD0yNTAwLGQ9MjUscD1cIm5nLWNsaWNrLWFjdGl2ZVwiLG0saztyZXR1cm4gZnVuY3Rpb24oYSxjLGQpe2Z1bmN0aW9uIGYoKXtxPSExO2MucmVtb3ZlQ2xhc3MocCl9dmFyIGg9ZyhkLm5nQ2xpY2spLHE9ITEscyx0LHcseDtjLm9uKFwidG91Y2hzdGFydFwiLFxyXG5mdW5jdGlvbihhKXtxPSEwO3M9YS50YXJnZXQ/YS50YXJnZXQ6YS5zcmNFbGVtZW50OzM9PXMubm9kZVR5cGUmJihzPXMucGFyZW50Tm9kZSk7Yy5hZGRDbGFzcyhwKTt0PURhdGUubm93KCk7YT1hLnRvdWNoZXMmJmEudG91Y2hlcy5sZW5ndGg/YS50b3VjaGVzOlthXTthPWFbMF0ub3JpZ2luYWxFdmVudHx8YVswXTt3PWEuY2xpZW50WDt4PWEuY2xpZW50WX0pO2Mub24oXCJ0b3VjaG1vdmVcIixmdW5jdGlvbihhKXtmKCl9KTtjLm9uKFwidG91Y2hjYW5jZWxcIixmdW5jdGlvbihhKXtmKCl9KTtjLm9uKFwidG91Y2hlbmRcIixmdW5jdGlvbihhKXt2YXIgaD1EYXRlLm5vdygpLXQsZT1hLmNoYW5nZWRUb3VjaGVzJiZhLmNoYW5nZWRUb3VjaGVzLmxlbmd0aD9hLmNoYW5nZWRUb3VjaGVzOmEudG91Y2hlcyYmYS50b3VjaGVzLmxlbmd0aD9hLnRvdWNoZXM6W2FdLGc9ZVswXS5vcmlnaW5hbEV2ZW50fHxlWzBdLGU9Zy5jbGllbnRYLGc9Zy5jbGllbnRZLHA9TWF0aC5zcXJ0KE1hdGgucG93KGUtXHJcbncsMikrTWF0aC5wb3coZy14LDIpKTtxJiYoNzUwPmgmJjEyPnApJiYoa3x8KGJbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbiwhMCksYlswXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHIsITApLGs9W10pLG09RGF0ZS5ub3coKSxsKGssZSxnKSxzJiZzLmJsdXIoKSx2LmlzRGVmaW5lZChkLmRpc2FibGVkKSYmITEhPT1kLmRpc2FibGVkfHxjLnRyaWdnZXJIYW5kbGVyKFwiY2xpY2tcIixbYV0pKTtmKCl9KTtjLm9uY2xpY2s9ZnVuY3Rpb24oYSl7fTtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbihiLGMpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7aChhLHskZXZlbnQ6Y3x8Yn0pfSl9KTtjLm9uKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oYSl7Yy5hZGRDbGFzcyhwKX0pO2Mub24oXCJtb3VzZW1vdmUgbW91c2V1cFwiLGZ1bmN0aW9uKGEpe2MucmVtb3ZlQ2xhc3MocCl9KX19XSk7dChcIm5nU3dpcGVMZWZ0XCIsLTEsXCJzd2lwZWxlZnRcIik7dChcIm5nU3dpcGVSaWdodFwiLDEsXCJzd2lwZXJpZ2h0XCIpfSkod2luZG93LFxyXG53aW5kb3cuYW5ndWxhcik7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXItdG91Y2gubWluLmpzLm1hcFxyXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicmFyaWVzXFxcXGFuZ3VsYXItdG91Y2gubWluLmpzXCIsXCIvbGlicmFyaWVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuIEFuZ3VsYXJKUyB2MS4yLjEyXHJcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xyXG4gTGljZW5zZTogTUlUXHJcbiovXHJcbihmdW5jdGlvbihQLFIscyl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIHQoYil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzWzBdLGMsYT1cIltcIisoYj9iK1wiOlwiOlwiXCIpK2ErXCJdIGh0dHA6Ly9lcnJvcnMuYW5ndWxhcmpzLm9yZy8xLjIuMTIvXCIrKGI/YitcIi9cIjpcIlwiKSthO2ZvcihjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKylhPWErKDE9PWM/XCI/XCI6XCImXCIpK1wicFwiKyhjLTEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChcImZ1bmN0aW9uXCI9PXR5cGVvZiBhcmd1bWVudHNbY10/YXJndW1lbnRzW2NdLnRvU3RyaW5nKCkucmVwbGFjZSgvIFxce1tcXHNcXFNdKiQvLFwiXCIpOlwidW5kZWZpbmVkXCI9PXR5cGVvZiBhcmd1bWVudHNbY10/XCJ1bmRlZmluZWRcIjpcInN0cmluZ1wiIT10eXBlb2YgYXJndW1lbnRzW2NdP0pTT04uc3RyaW5naWZ5KGFyZ3VtZW50c1tjXSk6YXJndW1lbnRzW2NdKTtyZXR1cm4gRXJyb3IoYSl9fWZ1bmN0aW9uIHFiKGIpe2lmKG51bGw9PWJ8fHphKGIpKXJldHVybiExO1xyXG52YXIgYT1iLmxlbmd0aDtyZXR1cm4gMT09PWIubm9kZVR5cGUmJmE/ITA6dyhiKXx8TChiKXx8MD09PWF8fFwibnVtYmVyXCI9PT10eXBlb2YgYSYmMDxhJiZhLTEgaW4gYn1mdW5jdGlvbiBxKGIsYSxjKXt2YXIgZDtpZihiKWlmKE0oYikpZm9yKGQgaW4gYilcInByb3RvdHlwZVwiPT1kfHwoXCJsZW5ndGhcIj09ZHx8XCJuYW1lXCI9PWR8fGIuaGFzT3duUHJvcGVydHkmJiFiLmhhc093blByb3BlcnR5KGQpKXx8YS5jYWxsKGMsYltkXSxkKTtlbHNlIGlmKGIuZm9yRWFjaCYmYi5mb3JFYWNoIT09cSliLmZvckVhY2goYSxjKTtlbHNlIGlmKHFiKGIpKWZvcihkPTA7ZDxiLmxlbmd0aDtkKyspYS5jYWxsKGMsYltkXSxkKTtlbHNlIGZvcihkIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShkKSYmYS5jYWxsKGMsYltkXSxkKTtyZXR1cm4gYn1mdW5jdGlvbiBOYihiKXt2YXIgYT1bXSxjO2ZvcihjIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShjKSYmYS5wdXNoKGMpO3JldHVybiBhLnNvcnQoKX1mdW5jdGlvbiBPYyhiLFxyXG5hLGMpe2Zvcih2YXIgZD1OYihiKSxlPTA7ZTxkLmxlbmd0aDtlKyspYS5jYWxsKGMsYltkW2VdXSxkW2VdKTtyZXR1cm4gZH1mdW5jdGlvbiBPYihiKXtyZXR1cm4gZnVuY3Rpb24oYSxjKXtiKGMsYSl9fWZ1bmN0aW9uIFphKCl7Zm9yKHZhciBiPWlhLmxlbmd0aCxhO2I7KXtiLS07YT1pYVtiXS5jaGFyQ29kZUF0KDApO2lmKDU3PT1hKXJldHVybiBpYVtiXT1cIkFcIixpYS5qb2luKFwiXCIpO2lmKDkwPT1hKWlhW2JdPVwiMFwiO2Vsc2UgcmV0dXJuIGlhW2JdPVN0cmluZy5mcm9tQ2hhckNvZGUoYSsxKSxpYS5qb2luKFwiXCIpfWlhLnVuc2hpZnQoXCIwXCIpO3JldHVybiBpYS5qb2luKFwiXCIpfWZ1bmN0aW9uIFBiKGIsYSl7YT9iLiQkaGFzaEtleT1hOmRlbGV0ZSBiLiQkaGFzaEtleX1mdW5jdGlvbiB5KGIpe3ZhciBhPWIuJCRoYXNoS2V5O3EoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2EhPT1iJiZxKGEsZnVuY3Rpb24oYSxjKXtiW2NdPWF9KX0pO1BiKGIsYSk7cmV0dXJuIGJ9ZnVuY3Rpb24gVihiKXtyZXR1cm4gcGFyc2VJbnQoYixcclxuMTApfWZ1bmN0aW9uIFFiKGIsYSl7cmV0dXJuIHkobmV3ICh5KGZ1bmN0aW9uKCl7fSx7cHJvdG90eXBlOmJ9KSksYSl9ZnVuY3Rpb24gRSgpe31mdW5jdGlvbiBBYShiKXtyZXR1cm4gYn1mdW5jdGlvbiBZKGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBifX1mdW5jdGlvbiB1KGIpe3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYn1mdW5jdGlvbiBEKGIpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgYn1mdW5jdGlvbiBXKGIpe3JldHVybiBudWxsIT1iJiZcIm9iamVjdFwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gdyhiKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gcmIoYil7cmV0dXJuXCJudW1iZXJcIj09PXR5cGVvZiBifWZ1bmN0aW9uIEthKGIpe3JldHVyblwiW29iamVjdCBEYXRlXVwiPT09TGEuY2FsbChiKX1mdW5jdGlvbiBMKGIpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PUxhLmNhbGwoYil9ZnVuY3Rpb24gTShiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYn1cclxuZnVuY3Rpb24gJGEoYil7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PUxhLmNhbGwoYil9ZnVuY3Rpb24gemEoYil7cmV0dXJuIGImJmIuZG9jdW1lbnQmJmIubG9jYXRpb24mJmIuYWxlcnQmJmIuc2V0SW50ZXJ2YWx9ZnVuY3Rpb24gUGMoYil7cmV0dXJuISghYnx8IShiLm5vZGVOYW1lfHxiLm9uJiZiLmZpbmQpKX1mdW5jdGlvbiBRYyhiLGEsYyl7dmFyIGQ9W107cShiLGZ1bmN0aW9uKGIsZyxmKXtkLnB1c2goYS5jYWxsKGMsYixnLGYpKX0pO3JldHVybiBkfWZ1bmN0aW9uIGFiKGIsYSl7aWYoYi5pbmRleE9mKXJldHVybiBiLmluZGV4T2YoYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspaWYoYT09PWJbY10pcmV0dXJuIGM7cmV0dXJuLTF9ZnVuY3Rpb24gTWEoYixhKXt2YXIgYz1hYihiLGEpOzA8PWMmJmIuc3BsaWNlKGMsMSk7cmV0dXJuIGF9ZnVuY3Rpb24gJChiLGEpe2lmKHphKGIpfHxiJiZiLiRldmFsQXN5bmMmJmIuJHdhdGNoKXRocm93IE5hKFwiY3B3c1wiKTtpZihhKXtpZihiPT09XHJcbmEpdGhyb3cgTmEoXCJjcGlcIik7aWYoTChiKSlmb3IodmFyIGM9YS5sZW5ndGg9MDtjPGIubGVuZ3RoO2MrKylhLnB1c2goJChiW2NdKSk7ZWxzZXtjPWEuJCRoYXNoS2V5O3EoYSxmdW5jdGlvbihiLGMpe2RlbGV0ZSBhW2NdfSk7Zm9yKHZhciBkIGluIGIpYVtkXT0kKGJbZF0pO1BiKGEsYyl9fWVsc2UoYT1iKSYmKEwoYik/YT0kKGIsW10pOkthKGIpP2E9bmV3IERhdGUoYi5nZXRUaW1lKCkpOiRhKGIpP2E9UmVnRXhwKGIuc291cmNlKTpXKGIpJiYoYT0kKGIse30pKSk7cmV0dXJuIGF9ZnVuY3Rpb24gUmIoYixhKXthPWF8fHt9O2Zvcih2YXIgYyBpbiBiKSFiLmhhc093blByb3BlcnR5KGMpfHxcIiRcIj09PWMuY2hhckF0KDApJiZcIiRcIj09PWMuY2hhckF0KDEpfHwoYVtjXT1iW2NdKTtyZXR1cm4gYX1mdW5jdGlvbiB0YShiLGEpe2lmKGI9PT1hKXJldHVybiEwO2lmKG51bGw9PT1ifHxudWxsPT09YSlyZXR1cm4hMTtpZihiIT09YiYmYSE9PWEpcmV0dXJuITA7dmFyIGM9dHlwZW9mIGIsXHJcbmQ7aWYoYz09dHlwZW9mIGEmJlwib2JqZWN0XCI9PWMpaWYoTChiKSl7aWYoIUwoYSkpcmV0dXJuITE7aWYoKGM9Yi5sZW5ndGgpPT1hLmxlbmd0aCl7Zm9yKGQ9MDtkPGM7ZCsrKWlmKCF0YShiW2RdLGFbZF0pKXJldHVybiExO3JldHVybiEwfX1lbHNle2lmKEthKGIpKXJldHVybiBLYShhKSYmYi5nZXRUaW1lKCk9PWEuZ2V0VGltZSgpO2lmKCRhKGIpJiYkYShhKSlyZXR1cm4gYi50b1N0cmluZygpPT1hLnRvU3RyaW5nKCk7aWYoYiYmYi4kZXZhbEFzeW5jJiZiLiR3YXRjaHx8YSYmYS4kZXZhbEFzeW5jJiZhLiR3YXRjaHx8emEoYil8fHphKGEpfHxMKGEpKXJldHVybiExO2M9e307Zm9yKGQgaW4gYilpZihcIiRcIiE9PWQuY2hhckF0KDApJiYhTShiW2RdKSl7aWYoIXRhKGJbZF0sYVtkXSkpcmV0dXJuITE7Y1tkXT0hMH1mb3IoZCBpbiBhKWlmKCFjLmhhc093blByb3BlcnR5KGQpJiZcIiRcIiE9PWQuY2hhckF0KDApJiZhW2RdIT09cyYmIU0oYVtkXSkpcmV0dXJuITE7cmV0dXJuITB9cmV0dXJuITF9XHJcbmZ1bmN0aW9uIFNiKCl7cmV0dXJuIFIuc2VjdXJpdHlQb2xpY3kmJlIuc2VjdXJpdHlQb2xpY3kuaXNBY3RpdmV8fFIucXVlcnlTZWxlY3RvciYmISghUi5xdWVyeVNlbGVjdG9yKFwiW25nLWNzcF1cIikmJiFSLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZy1jc3BdXCIpKX1mdW5jdGlvbiBiYihiLGEpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aD91YS5jYWxsKGFyZ3VtZW50cywyKTpbXTtyZXR1cm4hTShhKXx8YSBpbnN0YW5jZW9mIFJlZ0V4cD9hOmMubGVuZ3RoP2Z1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/YS5hcHBseShiLGMuY29uY2F0KHVhLmNhbGwoYXJndW1lbnRzLDApKSk6YS5hcHBseShiLGMpfTpmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP2EuYXBwbHkoYixhcmd1bWVudHMpOmEuY2FsbChiKX19ZnVuY3Rpb24gUmMoYixhKXt2YXIgYz1hO1wic3RyaW5nXCI9PT10eXBlb2YgYiYmXCIkXCI9PT1iLmNoYXJBdCgwKT9jPXM6emEoYSk/Yz1cIiRXSU5ET1dcIjpcclxuYSYmUj09PWE/Yz1cIiRET0NVTUVOVFwiOmEmJihhLiRldmFsQXN5bmMmJmEuJHdhdGNoKSYmKGM9XCIkU0NPUEVcIik7cmV0dXJuIGN9ZnVuY3Rpb24gcGEoYixhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGI/czpKU09OLnN0cmluZ2lmeShiLFJjLGE/XCIgIFwiOm51bGwpfWZ1bmN0aW9uIFRiKGIpe3JldHVybiB3KGIpP0pTT04ucGFyc2UoYik6Yn1mdW5jdGlvbiBPYShiKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iPSEwOmImJjAhPT1iLmxlbmd0aD8oYj14KFwiXCIrYiksYj0hKFwiZlwiPT1ifHxcIjBcIj09Ynx8XCJmYWxzZVwiPT1ifHxcIm5vXCI9PWJ8fFwiblwiPT1ifHxcIltdXCI9PWIpKTpiPSExO3JldHVybiBifWZ1bmN0aW9uIGZhKGIpe2I9eihiKS5jbG9uZSgpO3RyeXtiLmVtcHR5KCl9Y2F0Y2goYSl7fXZhciBjPXooXCI8ZGl2PlwiKS5hcHBlbmQoYikuaHRtbCgpO3RyeXtyZXR1cm4gMz09PWJbMF0ubm9kZVR5cGU/eChjKTpjLm1hdGNoKC9eKDxbXj5dKz4pLylbMV0ucmVwbGFjZSgvXjwoW1xcd1xcLV0rKS8sXHJcbmZ1bmN0aW9uKGEsYil7cmV0dXJuXCI8XCIreChiKX0pfWNhdGNoKGQpe3JldHVybiB4KGMpfX1mdW5jdGlvbiBVYihiKXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChiKX1jYXRjaChhKXt9fWZ1bmN0aW9uIFZiKGIpe3ZhciBhPXt9LGMsZDtxKChifHxcIlwiKS5zcGxpdChcIiZcIiksZnVuY3Rpb24oYil7YiYmKGM9Yi5zcGxpdChcIj1cIiksZD1VYihjWzBdKSxEKGQpJiYoYj1EKGNbMV0pP1ViKGNbMV0pOiEwLGFbZF0/TChhW2RdKT9hW2RdLnB1c2goYik6YVtkXT1bYVtkXSxiXTphW2RdPWIpKX0pO3JldHVybiBhfWZ1bmN0aW9uIFdiKGIpe3ZhciBhPVtdO3EoYixmdW5jdGlvbihiLGQpe0woYik/cShiLGZ1bmN0aW9uKGIpe2EucHVzaCh2YShkLCEwKSsoITA9PT1iP1wiXCI6XCI9XCIrdmEoYiwhMCkpKX0pOmEucHVzaCh2YShkLCEwKSsoITA9PT1iP1wiXCI6XCI9XCIrdmEoYiwhMCkpKX0pO3JldHVybiBhLmxlbmd0aD9hLmpvaW4oXCImXCIpOlwiXCJ9ZnVuY3Rpb24gc2IoYil7cmV0dXJuIHZhKGIsXHJcbiEwKS5yZXBsYWNlKC8lMjYvZ2ksXCImXCIpLnJlcGxhY2UoLyUzRC9naSxcIj1cIikucmVwbGFjZSgvJTJCL2dpLFwiK1wiKX1mdW5jdGlvbiB2YShiLGEpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoYikucmVwbGFjZSgvJTQwL2dpLFwiQFwiKS5yZXBsYWNlKC8lM0EvZ2ksXCI6XCIpLnJlcGxhY2UoLyUyNC9nLFwiJFwiKS5yZXBsYWNlKC8lMkMvZ2ksXCIsXCIpLnJlcGxhY2UoLyUyMC9nLGE/XCIlMjBcIjpcIitcIil9ZnVuY3Rpb24gU2MoYixhKXtmdW5jdGlvbiBjKGEpe2EmJmQucHVzaChhKX12YXIgZD1bYl0sZSxnLGY9W1wibmc6YXBwXCIsXCJuZy1hcHBcIixcIngtbmctYXBwXCIsXCJkYXRhLW5nLWFwcFwiXSxoPS9cXHNuZ1s6XFwtXWFwcCg6XFxzKihbXFx3XFxkX10rKTs/KT9cXHMvO3EoZixmdW5jdGlvbihhKXtmW2FdPSEwO2MoUi5nZXRFbGVtZW50QnlJZChhKSk7YT1hLnJlcGxhY2UoXCI6XCIsXCJcXFxcOlwiKTtiLnF1ZXJ5U2VsZWN0b3JBbGwmJihxKGIucXVlcnlTZWxlY3RvckFsbChcIi5cIithKSxjKSxxKGIucXVlcnlTZWxlY3RvckFsbChcIi5cIitcclxuYStcIlxcXFw6XCIpLGMpLHEoYi5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiK2ErXCJdXCIpLGMpKX0pO3EoZCxmdW5jdGlvbihhKXtpZighZSl7dmFyIGI9aC5leGVjKFwiIFwiK2EuY2xhc3NOYW1lK1wiIFwiKTtiPyhlPWEsZz0oYlsyXXx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiLFwiKSk6cShhLmF0dHJpYnV0ZXMsZnVuY3Rpb24oYil7IWUmJmZbYi5uYW1lXSYmKGU9YSxnPWIudmFsdWUpfSl9fSk7ZSYmYShlLGc/W2ddOltdKX1mdW5jdGlvbiBYYihiLGEpe3ZhciBjPWZ1bmN0aW9uKCl7Yj16KGIpO2lmKGIuaW5qZWN0b3IoKSl7dmFyIGM9YlswXT09PVI/XCJkb2N1bWVudFwiOmZhKGIpO3Rocm93IE5hKFwiYnRzdHJwZFwiLGMpO31hPWF8fFtdO2EudW5zaGlmdChbXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe2EudmFsdWUoXCIkcm9vdEVsZW1lbnRcIixiKX1dKTthLnVuc2hpZnQoXCJuZ1wiKTtjPVliKGEpO2MuaW52b2tlKFtcIiRyb290U2NvcGVcIixcIiRyb290RWxlbWVudFwiLFwiJGNvbXBpbGVcIixcIiRpbmplY3RvclwiLFwiJGFuaW1hdGVcIixcclxuZnVuY3Rpb24oYSxiLGMsZCxlKXthLiRhcHBseShmdW5jdGlvbigpe2IuZGF0YShcIiRpbmplY3RvclwiLGQpO2MoYikoYSl9KX1dKTtyZXR1cm4gY30sZD0vXk5HX0RFRkVSX0JPT1RTVFJBUCEvO2lmKFAmJiFkLnRlc3QoUC5uYW1lKSlyZXR1cm4gYygpO1AubmFtZT1QLm5hbWUucmVwbGFjZShkLFwiXCIpO0JhLnJlc3VtZUJvb3RzdHJhcD1mdW5jdGlvbihiKXtxKGIsZnVuY3Rpb24oYil7YS5wdXNoKGIpfSk7YygpfX1mdW5jdGlvbiBjYihiLGEpe2E9YXx8XCJfXCI7cmV0dXJuIGIucmVwbGFjZShUYyxmdW5jdGlvbihiLGQpe3JldHVybihkP2E6XCJcIikrYi50b0xvd2VyQ2FzZSgpfSl9ZnVuY3Rpb24gdGIoYixhLGMpe2lmKCFiKXRocm93IE5hKFwiYXJlcVwiLGF8fFwiP1wiLGN8fFwicmVxdWlyZWRcIik7cmV0dXJuIGJ9ZnVuY3Rpb24gUGEoYixhLGMpe2MmJkwoYikmJihiPWJbYi5sZW5ndGgtMV0pO3RiKE0oYiksYSxcIm5vdCBhIGZ1bmN0aW9uLCBnb3QgXCIrKGImJlwib2JqZWN0XCI9PXR5cGVvZiBiP1xyXG5iLmNvbnN0cnVjdG9yLm5hbWV8fFwiT2JqZWN0XCI6dHlwZW9mIGIpKTtyZXR1cm4gYn1mdW5jdGlvbiB3YShiLGEpe2lmKFwiaGFzT3duUHJvcGVydHlcIj09PWIpdGhyb3cgTmEoXCJiYWRuYW1lXCIsYSk7fWZ1bmN0aW9uIFpiKGIsYSxjKXtpZighYSlyZXR1cm4gYjthPWEuc3BsaXQoXCIuXCIpO2Zvcih2YXIgZCxlPWIsZz1hLmxlbmd0aCxmPTA7ZjxnO2YrKylkPWFbZl0sYiYmKGI9KGU9YilbZF0pO3JldHVybiFjJiZNKGIpP2JiKGUsYik6Yn1mdW5jdGlvbiB1YihiKXt2YXIgYT1iWzBdO2I9YltiLmxlbmd0aC0xXTtpZihhPT09YilyZXR1cm4geihhKTt2YXIgYz1bYV07ZG97YT1hLm5leHRTaWJsaW5nO2lmKCFhKWJyZWFrO2MucHVzaChhKX13aGlsZShhIT09Yik7cmV0dXJuIHooYyl9ZnVuY3Rpb24gVWMoYil7dmFyIGE9dChcIiRpbmplY3RvclwiKSxjPXQoXCJuZ1wiKTtiPWIuYW5ndWxhcnx8KGIuYW5ndWxhcj17fSk7Yi4kJG1pbkVycj1iLiQkbWluRXJyfHx0O3JldHVybiBiLm1vZHVsZXx8XHJcbihiLm1vZHVsZT1mdW5jdGlvbigpe3ZhciBiPXt9O3JldHVybiBmdW5jdGlvbihlLGcsZil7aWYoXCJoYXNPd25Qcm9wZXJ0eVwiPT09ZSl0aHJvdyBjKFwiYmFkbmFtZVwiLFwibW9kdWxlXCIpO2cmJmIuaGFzT3duUHJvcGVydHkoZSkmJihiW2VdPW51bGwpO3JldHVybiBiW2VdfHwoYltlXT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxkLGUpe3JldHVybiBmdW5jdGlvbigpe2NbZXx8XCJwdXNoXCJdKFthLGQsYXJndW1lbnRzXSk7cmV0dXJuIG59fWlmKCFnKXRocm93IGEoXCJub21vZFwiLGUpO3ZhciBjPVtdLGQ9W10sbD1iKFwiJGluamVjdG9yXCIsXCJpbnZva2VcIiksbj17X2ludm9rZVF1ZXVlOmMsX3J1bkJsb2NrczpkLHJlcXVpcmVzOmcsbmFtZTplLHByb3ZpZGVyOmIoXCIkcHJvdmlkZVwiLFwicHJvdmlkZXJcIiksZmFjdG9yeTpiKFwiJHByb3ZpZGVcIixcImZhY3RvcnlcIiksc2VydmljZTpiKFwiJHByb3ZpZGVcIixcInNlcnZpY2VcIiksdmFsdWU6YihcIiRwcm92aWRlXCIsXCJ2YWx1ZVwiKSxjb25zdGFudDpiKFwiJHByb3ZpZGVcIixcclxuXCJjb25zdGFudFwiLFwidW5zaGlmdFwiKSxhbmltYXRpb246YihcIiRhbmltYXRlUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGZpbHRlcjpiKFwiJGZpbHRlclByb3ZpZGVyXCIsXCJyZWdpc3RlclwiKSxjb250cm9sbGVyOmIoXCIkY29udHJvbGxlclByb3ZpZGVyXCIsXCJyZWdpc3RlclwiKSxkaXJlY3RpdmU6YihcIiRjb21waWxlUHJvdmlkZXJcIixcImRpcmVjdGl2ZVwiKSxjb25maWc6bCxydW46ZnVuY3Rpb24oYSl7ZC5wdXNoKGEpO3JldHVybiB0aGlzfX07ZiYmbChmKTtyZXR1cm4gbn0oKSl9fSgpKX1mdW5jdGlvbiBRYShiKXtyZXR1cm4gYi5yZXBsYWNlKFZjLGZ1bmN0aW9uKGEsYixkLGUpe3JldHVybiBlP2QudG9VcHBlckNhc2UoKTpkfSkucmVwbGFjZShXYyxcIk1veiQxXCIpfWZ1bmN0aW9uIHZiKGIsYSxjLGQpe2Z1bmN0aW9uIGUoYil7dmFyIGU9YyYmYj9bdGhpcy5maWx0ZXIoYildOlt0aGlzXSxtPWEsayxsLG4scCxyLEY7aWYoIWR8fG51bGwhPWIpZm9yKDtlLmxlbmd0aDspZm9yKGs9ZS5zaGlmdCgpLFxyXG5sPTAsbj1rLmxlbmd0aDtsPG47bCsrKWZvcihwPXooa1tsXSksbT9wLnRyaWdnZXJIYW5kbGVyKFwiJGRlc3Ryb3lcIik6bT0hbSxyPTAscD0oRj1wLmNoaWxkcmVuKCkpLmxlbmd0aDtyPHA7cisrKWUucHVzaChDYShGW3JdKSk7cmV0dXJuIGcuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBnPUNhLmZuW2JdLGc9Zy4kb3JpZ2luYWx8fGc7ZS4kb3JpZ2luYWw9ZztDYS5mbltiXT1lfWZ1bmN0aW9uIE8oYil7aWYoYiBpbnN0YW5jZW9mIE8pcmV0dXJuIGI7dyhiKSYmKGI9WihiKSk7aWYoISh0aGlzIGluc3RhbmNlb2YgTykpe2lmKHcoYikmJlwiPFwiIT1iLmNoYXJBdCgwKSl0aHJvdyB3YihcIm5vc2VsXCIpO3JldHVybiBuZXcgTyhiKX1pZih3KGIpKXt2YXIgYT1SLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YS5pbm5lckhUTUw9XCI8ZGl2PiYjMTYwOzwvZGl2PlwiK2I7YS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO3hiKHRoaXMsYS5jaGlsZE5vZGVzKTt6KFIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKS5hcHBlbmQodGhpcyl9ZWxzZSB4Yih0aGlzLFxyXG5iKX1mdW5jdGlvbiB5YihiKXtyZXR1cm4gYi5jbG9uZU5vZGUoITApfWZ1bmN0aW9uIERhKGIpeyRiKGIpO3ZhciBhPTA7Zm9yKGI9Yi5jaGlsZE5vZGVzfHxbXTthPGIubGVuZ3RoO2ErKylEYShiW2FdKX1mdW5jdGlvbiBhYyhiLGEsYyxkKXtpZihEKGQpKXRocm93IHdiKFwib2ZmYXJnc1wiKTt2YXIgZT1qYShiLFwiZXZlbnRzXCIpO2phKGIsXCJoYW5kbGVcIikmJih1KGEpP3EoZSxmdW5jdGlvbihhLGMpe3piKGIsYyxhKTtkZWxldGUgZVtjXX0pOnEoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7dShjKT8oemIoYixhLGVbYV0pLGRlbGV0ZSBlW2FdKTpNYShlW2FdfHxbXSxjKX0pKX1mdW5jdGlvbiAkYihiLGEpe3ZhciBjPWJbZGJdLGQ9UmFbY107ZCYmKGE/ZGVsZXRlIFJhW2NdLmRhdGFbYV06KGQuaGFuZGxlJiYoZC5ldmVudHMuJGRlc3Ryb3kmJmQuaGFuZGxlKHt9LFwiJGRlc3Ryb3lcIiksYWMoYikpLGRlbGV0ZSBSYVtjXSxiW2RiXT1zKSl9ZnVuY3Rpb24gamEoYixhLGMpe3ZhciBkPVxyXG5iW2RiXSxkPVJhW2R8fC0xXTtpZihEKGMpKWR8fChiW2RiXT1kPSsrWGMsZD1SYVtkXT17fSksZFthXT1jO2Vsc2UgcmV0dXJuIGQmJmRbYV19ZnVuY3Rpb24gYmMoYixhLGMpe3ZhciBkPWphKGIsXCJkYXRhXCIpLGU9RChjKSxnPSFlJiZEKGEpLGY9ZyYmIVcoYSk7ZHx8Znx8amEoYixcImRhdGFcIixkPXt9KTtpZihlKWRbYV09YztlbHNlIGlmKGcpe2lmKGYpcmV0dXJuIGQmJmRbYV07eShkLGEpfWVsc2UgcmV0dXJuIGR9ZnVuY3Rpb24gQWIoYixhKXtyZXR1cm4gYi5nZXRBdHRyaWJ1dGU/LTE8KFwiIFwiKyhiLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcIiBcIikuaW5kZXhPZihcIiBcIithK1wiIFwiKTohMX1mdW5jdGlvbiBCYihiLGEpe2EmJmIuc2V0QXR0cmlidXRlJiZxKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe2Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixaKChcIiBcIisoYi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csXHJcblwiIFwiKS5yZXBsYWNlKFwiIFwiK1ooYSkrXCIgXCIsXCIgXCIpKSl9KX1mdW5jdGlvbiBDYihiLGEpe2lmKGEmJmIuc2V0QXR0cmlidXRlKXt2YXIgYz0oXCIgXCIrKGIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLFwiIFwiKTtxKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe2E9WihhKTstMT09PWMuaW5kZXhPZihcIiBcIithK1wiIFwiKSYmKGMrPWErXCIgXCIpfSk7Yi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFooYykpfX1mdW5jdGlvbiB4YihiLGEpe2lmKGEpe2E9YS5ub2RlTmFtZXx8IUQoYS5sZW5ndGgpfHx6YShhKT9bYV06YTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliLnB1c2goYVtjXSl9fWZ1bmN0aW9uIGNjKGIsYSl7cmV0dXJuIGViKGIsXCIkXCIrKGF8fFwibmdDb250cm9sbGVyXCIpK1wiQ29udHJvbGxlclwiKX1mdW5jdGlvbiBlYihiLGEsYyl7Yj16KGIpOzk9PWJbMF0ubm9kZVR5cGUmJihiPWIuZmluZChcImh0bWxcIikpO2ZvcihhPUwoYSk/YTpbYV07Yi5sZW5ndGg7KXtmb3IodmFyIGQ9XHJcbjAsZT1hLmxlbmd0aDtkPGU7ZCsrKWlmKChjPWIuZGF0YShhW2RdKSkhPT1zKXJldHVybiBjO2I9Yi5wYXJlbnQoKX19ZnVuY3Rpb24gZGMoYil7Zm9yKHZhciBhPTAsYz1iLmNoaWxkTm9kZXM7YTxjLmxlbmd0aDthKyspRGEoY1thXSk7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlQ2hpbGQoYi5maXJzdENoaWxkKX1mdW5jdGlvbiBlYyhiLGEpe3ZhciBjPWZiW2EudG9Mb3dlckNhc2UoKV07cmV0dXJuIGMmJmZjW2Iubm9kZU5hbWVdJiZjfWZ1bmN0aW9uIFljKGIsYSl7dmFyIGM9ZnVuY3Rpb24oYyxlKXtjLnByZXZlbnREZWZhdWx0fHwoYy5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2MucmV0dXJuVmFsdWU9ITF9KTtjLnN0b3BQcm9wYWdhdGlvbnx8KGMuc3RvcFByb3BhZ2F0aW9uPWZ1bmN0aW9uKCl7Yy5jYW5jZWxCdWJibGU9ITB9KTtjLnRhcmdldHx8KGMudGFyZ2V0PWMuc3JjRWxlbWVudHx8Uik7aWYodShjLmRlZmF1bHRQcmV2ZW50ZWQpKXt2YXIgZz1jLnByZXZlbnREZWZhdWx0O1xyXG5jLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yy5kZWZhdWx0UHJldmVudGVkPSEwO2cuY2FsbChjKX07Yy5kZWZhdWx0UHJldmVudGVkPSExfWMuaXNEZWZhdWx0UHJldmVudGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGMuZGVmYXVsdFByZXZlbnRlZHx8ITE9PT1jLnJldHVyblZhbHVlfTt2YXIgZj1SYihhW2V8fGMudHlwZV18fFtdKTtxKGYsZnVuY3Rpb24oYSl7YS5jYWxsKGIsYyl9KTs4Pj1OPyhjLnByZXZlbnREZWZhdWx0PW51bGwsYy5zdG9wUHJvcGFnYXRpb249bnVsbCxjLmlzRGVmYXVsdFByZXZlbnRlZD1udWxsKTooZGVsZXRlIGMucHJldmVudERlZmF1bHQsZGVsZXRlIGMuc3RvcFByb3BhZ2F0aW9uLGRlbGV0ZSBjLmlzRGVmYXVsdFByZXZlbnRlZCl9O2MuZWxlbT1iO3JldHVybiBjfWZ1bmN0aW9uIEVhKGIpe3ZhciBhPXR5cGVvZiBiLGM7XCJvYmplY3RcIj09YSYmbnVsbCE9PWI/XCJmdW5jdGlvblwiPT10eXBlb2YoYz1iLiQkaGFzaEtleSk/Yz1iLiQkaGFzaEtleSgpOmM9PT1cclxucyYmKGM9Yi4kJGhhc2hLZXk9WmEoKSk6Yz1iO3JldHVybiBhK1wiOlwiK2N9ZnVuY3Rpb24gU2EoYil7cShiLHRoaXMucHV0LHRoaXMpfWZ1bmN0aW9uIGdjKGIpe3ZhciBhLGM7XCJmdW5jdGlvblwiPT10eXBlb2YgYj8oYT1iLiRpbmplY3QpfHwoYT1bXSxiLmxlbmd0aCYmKGM9Yi50b1N0cmluZygpLnJlcGxhY2UoWmMsXCJcIiksYz1jLm1hdGNoKCRjKSxxKGNbMV0uc3BsaXQoYWQpLGZ1bmN0aW9uKGIpe2IucmVwbGFjZShiZCxmdW5jdGlvbihiLGMsZCl7YS5wdXNoKGQpfSl9KSksYi4kaW5qZWN0PWEpOkwoYik/KGM9Yi5sZW5ndGgtMSxQYShiW2NdLFwiZm5cIiksYT1iLnNsaWNlKDAsYykpOlBhKGIsXCJmblwiLCEwKTtyZXR1cm4gYX1mdW5jdGlvbiBZYihiKXtmdW5jdGlvbiBhKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe2lmKFcoYikpcShiLE9iKGEpKTtlbHNlIHJldHVybiBhKGIsYyl9fWZ1bmN0aW9uIGMoYSxiKXt3YShhLFwic2VydmljZVwiKTtpZihNKGIpfHxMKGIpKWI9bi5pbnN0YW50aWF0ZShiKTtcclxuaWYoIWIuJGdldCl0aHJvdyBUYShcInBnZXRcIixhKTtyZXR1cm4gbFthK2hdPWJ9ZnVuY3Rpb24gZChhLGIpe3JldHVybiBjKGEseyRnZXQ6Yn0pfWZ1bmN0aW9uIGUoYSl7dmFyIGI9W10sYyxkLGcsaDtxKGEsZnVuY3Rpb24oYSl7aWYoIWsuZ2V0KGEpKXtrLnB1dChhLCEwKTt0cnl7aWYodyhhKSlmb3IoYz1VYShhKSxiPWIuY29uY2F0KGUoYy5yZXF1aXJlcykpLmNvbmNhdChjLl9ydW5CbG9ja3MpLGQ9Yy5faW52b2tlUXVldWUsZz0wLGg9ZC5sZW5ndGg7ZzxoO2crKyl7dmFyIGY9ZFtnXSxtPW4uZ2V0KGZbMF0pO21bZlsxXV0uYXBwbHkobSxmWzJdKX1lbHNlIE0oYSk/Yi5wdXNoKG4uaW52b2tlKGEpKTpMKGEpP2IucHVzaChuLmludm9rZShhKSk6UGEoYSxcIm1vZHVsZVwiKX1jYXRjaChyKXt0aHJvdyBMKGEpJiYoYT1hW2EubGVuZ3RoLTFdKSxyLm1lc3NhZ2UmJihyLnN0YWNrJiYtMT09ci5zdGFjay5pbmRleE9mKHIubWVzc2FnZSkpJiYocj1yLm1lc3NhZ2UrXCJcXG5cIityLnN0YWNrKSxcclxuVGEoXCJtb2R1bGVyclwiLGEsci5zdGFja3x8ci5tZXNzYWdlfHxyKTt9fX0pO3JldHVybiBifWZ1bmN0aW9uIGcoYSxiKXtmdW5jdGlvbiBjKGQpe2lmKGEuaGFzT3duUHJvcGVydHkoZCkpe2lmKGFbZF09PT1mKXRocm93IFRhKFwiY2RlcFwiLG0uam9pbihcIiA8LSBcIikpO3JldHVybiBhW2RdfXRyeXtyZXR1cm4gbS51bnNoaWZ0KGQpLGFbZF09ZixhW2RdPWIoZCl9Y2F0Y2goZSl7dGhyb3cgYVtkXT09PWYmJmRlbGV0ZSBhW2RdLGU7fWZpbmFsbHl7bS5zaGlmdCgpfX1mdW5jdGlvbiBkKGEsYixlKXt2YXIgZz1bXSxoPWdjKGEpLGYsbSxrO209MDtmb3IoZj1oLmxlbmd0aDttPGY7bSsrKXtrPWhbbV07aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBrKXRocm93IFRhKFwiaXRrblwiLGspO2cucHVzaChlJiZlLmhhc093blByb3BlcnR5KGspP2Vba106YyhrKSl9YS4kaW5qZWN0fHwoYT1hW2ZdKTtyZXR1cm4gYS5hcHBseShiLGcpfXJldHVybntpbnZva2U6ZCxpbnN0YW50aWF0ZTpmdW5jdGlvbihhLFxyXG5iKXt2YXIgYz1mdW5jdGlvbigpe30sZTtjLnByb3RvdHlwZT0oTChhKT9hW2EubGVuZ3RoLTFdOmEpLnByb3RvdHlwZTtjPW5ldyBjO2U9ZChhLGMsYik7cmV0dXJuIFcoZSl8fE0oZSk/ZTpjfSxnZXQ6Yyxhbm5vdGF0ZTpnYyxoYXM6ZnVuY3Rpb24oYil7cmV0dXJuIGwuaGFzT3duUHJvcGVydHkoYitoKXx8YS5oYXNPd25Qcm9wZXJ0eShiKX19fXZhciBmPXt9LGg9XCJQcm92aWRlclwiLG09W10saz1uZXcgU2EsbD17JHByb3ZpZGU6e3Byb3ZpZGVyOmEoYyksZmFjdG9yeTphKGQpLHNlcnZpY2U6YShmdW5jdGlvbihhLGIpe3JldHVybiBkKGEsW1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5zdGFudGlhdGUoYil9XSl9KSx2YWx1ZTphKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYSxZKGIpKX0pLGNvbnN0YW50OmEoZnVuY3Rpb24oYSxiKXt3YShhLFwiY29uc3RhbnRcIik7bFthXT1iO3BbYV09Yn0pLGRlY29yYXRvcjpmdW5jdGlvbihhLGIpe3ZhciBjPW4uZ2V0KGEraCksXHJcbmQ9Yy4kZ2V0O2MuJGdldD1mdW5jdGlvbigpe3ZhciBhPXIuaW52b2tlKGQsYyk7cmV0dXJuIHIuaW52b2tlKGIsbnVsbCx7JGRlbGVnYXRlOmF9KX19fX0sbj1sLiRpbmplY3Rvcj1nKGwsZnVuY3Rpb24oKXt0aHJvdyBUYShcInVucHJcIixtLmpvaW4oXCIgPC0gXCIpKTt9KSxwPXt9LHI9cC4kaW5qZWN0b3I9ZyhwLGZ1bmN0aW9uKGEpe2E9bi5nZXQoYStoKTtyZXR1cm4gci5pbnZva2UoYS4kZ2V0LGEpfSk7cShlKGIpLGZ1bmN0aW9uKGEpe3IuaW52b2tlKGF8fEUpfSk7cmV0dXJuIHJ9ZnVuY3Rpb24gY2QoKXt2YXIgYj0hMDt0aGlzLmRpc2FibGVBdXRvU2Nyb2xsaW5nPWZ1bmN0aW9uKCl7Yj0hMX07dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiRsb2NhdGlvblwiLFwiJHJvb3RTY29wZVwiLGZ1bmN0aW9uKGEsYyxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPW51bGw7cShhLGZ1bmN0aW9uKGEpe2J8fFwiYVwiIT09eChhLm5vZGVOYW1lKXx8KGI9YSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBnKCl7dmFyIGI9XHJcbmMuaGFzaCgpLGQ7Yj8oZD1mLmdldEVsZW1lbnRCeUlkKGIpKT9kLnNjcm9sbEludG9WaWV3KCk6KGQ9ZShmLmdldEVsZW1lbnRzQnlOYW1lKGIpKSk/ZC5zY3JvbGxJbnRvVmlldygpOlwidG9wXCI9PT1iJiZhLnNjcm9sbFRvKDAsMCk6YS5zY3JvbGxUbygwLDApfXZhciBmPWEuZG9jdW1lbnQ7YiYmZC4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gYy5oYXNoKCl9LGZ1bmN0aW9uKCl7ZC4kZXZhbEFzeW5jKGcpfSk7cmV0dXJuIGd9XX1mdW5jdGlvbiBkZChiLGEsYyxkKXtmdW5jdGlvbiBlKGEpe3RyeXthLmFwcGx5KG51bGwsdWEuY2FsbChhcmd1bWVudHMsMSkpfWZpbmFsbHl7aWYoRi0tLDA9PT1GKWZvcig7QS5sZW5ndGg7KXRyeXtBLnBvcCgpKCl9Y2F0Y2goYil7Yy5lcnJvcihiKX19fWZ1bmN0aW9uIGcoYSxiKXsoZnVuY3Rpb24gUygpe3EoSCxmdW5jdGlvbihhKXthKCl9KTt2PWIoUyxhKX0pKCl9ZnVuY3Rpb24gZigpe0M9bnVsbDtRIT1oLnVybCgpJiYoUT1oLnVybCgpLHEoa2EsXHJcbmZ1bmN0aW9uKGEpe2EoaC51cmwoKSl9KSl9dmFyIGg9dGhpcyxtPWFbMF0saz1iLmxvY2F0aW9uLGw9Yi5oaXN0b3J5LG49Yi5zZXRUaW1lb3V0LHA9Yi5jbGVhclRpbWVvdXQscj17fTtoLmlzTW9jaz0hMTt2YXIgRj0wLEE9W107aC4kJGNvbXBsZXRlT3V0c3RhbmRpbmdSZXF1ZXN0PWU7aC4kJGluY091dHN0YW5kaW5nUmVxdWVzdENvdW50PWZ1bmN0aW9uKCl7RisrfTtoLm5vdGlmeVdoZW5Ob091dHN0YW5kaW5nUmVxdWVzdHM9ZnVuY3Rpb24oYSl7cShILGZ1bmN0aW9uKGEpe2EoKX0pOzA9PT1GP2EoKTpBLnB1c2goYSl9O3ZhciBIPVtdLHY7aC5hZGRQb2xsRm49ZnVuY3Rpb24oYSl7dSh2KSYmZygxMDAsbik7SC5wdXNoKGEpO3JldHVybiBhfTt2YXIgUT1rLmhyZWYsSz1hLmZpbmQoXCJiYXNlXCIpLEM9bnVsbDtoLnVybD1mdW5jdGlvbihhLGMpe2shPT1iLmxvY2F0aW9uJiYoaz1iLmxvY2F0aW9uKTtsIT09Yi5oaXN0b3J5JiYobD1iLmhpc3RvcnkpO2lmKGEpe2lmKFEhPWEpcmV0dXJuIFE9XHJcbmEsZC5oaXN0b3J5P2M/bC5yZXBsYWNlU3RhdGUobnVsbCxcIlwiLGEpOihsLnB1c2hTdGF0ZShudWxsLFwiXCIsYSksSy5hdHRyKFwiaHJlZlwiLEsuYXR0cihcImhyZWZcIikpKTooQz1hLGM/ay5yZXBsYWNlKGEpOmsuaHJlZj1hKSxofWVsc2UgcmV0dXJuIEN8fGsuaHJlZi5yZXBsYWNlKC8lMjcvZyxcIidcIil9O3ZhciBrYT1bXSxJPSExO2gub25VcmxDaGFuZ2U9ZnVuY3Rpb24oYSl7aWYoIUkpe2lmKGQuaGlzdG9yeSl6KGIpLm9uKFwicG9wc3RhdGVcIixmKTtpZihkLmhhc2hjaGFuZ2UpeihiKS5vbihcImhhc2hjaGFuZ2VcIixmKTtlbHNlIGguYWRkUG9sbEZuKGYpO0k9ITB9a2EucHVzaChhKTtyZXR1cm4gYX07aC5iYXNlSHJlZj1mdW5jdGlvbigpe3ZhciBhPUsuYXR0cihcImhyZWZcIik7cmV0dXJuIGE/YS5yZXBsYWNlKC9eKGh0dHBzP1xcOik/XFwvXFwvW15cXC9dKi8sXCJcIik6XCJcIn07dmFyIFU9e30sYmE9XCJcIixhYT1oLmJhc2VIcmVmKCk7aC5jb29raWVzPWZ1bmN0aW9uKGEsYil7dmFyIGQsZSxnLGg7XHJcbmlmKGEpYj09PXM/bS5jb29raWU9ZXNjYXBlKGEpK1wiPTtwYXRoPVwiK2FhK1wiO2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjp3KGIpJiYoZD0obS5jb29raWU9ZXNjYXBlKGEpK1wiPVwiK2VzY2FwZShiKStcIjtwYXRoPVwiK2FhKS5sZW5ndGgrMSw0MDk2PGQmJmMud2FybihcIkNvb2tpZSAnXCIrYStcIicgcG9zc2libHkgbm90IHNldCBvciBvdmVyZmxvd2VkIGJlY2F1c2UgaXQgd2FzIHRvbyBsYXJnZSAoXCIrZCtcIiA+IDQwOTYgYnl0ZXMpIVwiKSk7ZWxzZXtpZihtLmNvb2tpZSE9PWJhKWZvcihiYT1tLmNvb2tpZSxkPWJhLnNwbGl0KFwiOyBcIiksVT17fSxnPTA7ZzxkLmxlbmd0aDtnKyspZT1kW2ddLGg9ZS5pbmRleE9mKFwiPVwiKSwwPGgmJihhPXVuZXNjYXBlKGUuc3Vic3RyaW5nKDAsaCkpLFVbYV09PT1zJiYoVVthXT11bmVzY2FwZShlLnN1YnN0cmluZyhoKzEpKSkpO3JldHVybiBVfX07aC5kZWZlcj1mdW5jdGlvbihhLGIpe3ZhciBjO0YrKztjPW4oZnVuY3Rpb24oKXtkZWxldGUgcltjXTtcclxuZShhKX0sYnx8MCk7cltjXT0hMDtyZXR1cm4gY307aC5kZWZlci5jYW5jZWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHJbYV0/KGRlbGV0ZSByW2FdLHAoYSksZShFKSwhMCk6ITF9fWZ1bmN0aW9uIGVkKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiRsb2dcIixcIiRzbmlmZmVyXCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihiLGEsYyxkKXtyZXR1cm4gbmV3IGRkKGIsZCxhLGMpfV19ZnVuY3Rpb24gZmQoKXt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCl7ZnVuY3Rpb24gZShhKXthIT1uJiYocD9wPT1hJiYocD1hLm4pOnA9YSxnKGEubixhLnApLGcoYSxuKSxuPWEsbi5uPW51bGwpfWZ1bmN0aW9uIGcoYSxiKXthIT1iJiYoYSYmKGEucD1iKSxiJiYoYi5uPWEpKX1pZihiIGluIGEpdGhyb3cgdChcIiRjYWNoZUZhY3RvcnlcIikoXCJpaWRcIixiKTt2YXIgZj0wLGg9eSh7fSxkLHtpZDpifSksbT17fSxrPWQmJmQuY2FwYWNpdHl8fE51bWJlci5NQVhfVkFMVUUsbD17fSxuPW51bGwscD1udWxsO1xyXG5yZXR1cm4gYVtiXT17cHV0OmZ1bmN0aW9uKGEsYil7dmFyIGM9bFthXXx8KGxbYV09e2tleTphfSk7ZShjKTtpZighdShiKSlyZXR1cm4gYSBpbiBtfHxmKyssbVthXT1iLGY+ayYmdGhpcy5yZW1vdmUocC5rZXkpLGJ9LGdldDpmdW5jdGlvbihhKXt2YXIgYj1sW2FdO2lmKGIpcmV0dXJuIGUoYiksbVthXX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3ZhciBiPWxbYV07YiYmKGI9PW4mJihuPWIucCksYj09cCYmKHA9Yi5uKSxnKGIubixiLnApLGRlbGV0ZSBsW2FdLGRlbGV0ZSBtW2FdLGYtLSl9LHJlbW92ZUFsbDpmdW5jdGlvbigpe209e307Zj0wO2w9e307bj1wPW51bGx9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtsPWg9bT1udWxsO2RlbGV0ZSBhW2JdfSxpbmZvOmZ1bmN0aW9uKCl7cmV0dXJuIHkoe30saCx7c2l6ZTpmfSl9fX12YXIgYT17fTtiLmluZm89ZnVuY3Rpb24oKXt2YXIgYj17fTtxKGEsZnVuY3Rpb24oYSxlKXtiW2VdPWEuaW5mbygpfSk7cmV0dXJuIGJ9O2IuZ2V0PWZ1bmN0aW9uKGIpe3JldHVybiBhW2JdfTtcclxucmV0dXJuIGJ9fWZ1bmN0aW9uIGdkKCl7dGhpcy4kZ2V0PVtcIiRjYWNoZUZhY3RvcnlcIixmdW5jdGlvbihiKXtyZXR1cm4gYihcInRlbXBsYXRlc1wiKX1dfWZ1bmN0aW9uIGljKGIsYSl7dmFyIGM9e30sZD1cIkRpcmVjdGl2ZVwiLGU9L15cXHMqZGlyZWN0aXZlXFw6XFxzKihbXFxkXFx3XFwtX10rKVxccysoLiopJC8sZz0vKChbXFxkXFx3XFwtX10rKSg/OlxcOihbXjtdKykpPzs/KS8sZj0vXihvblthLXpdK3xmb3JtYWN0aW9uKSQvO3RoaXMuZGlyZWN0aXZlPWZ1bmN0aW9uIG0oYSxlKXt3YShhLFwiZGlyZWN0aXZlXCIpO3coYSk/KHRiKGUsXCJkaXJlY3RpdmVGYWN0b3J5XCIpLGMuaGFzT3duUHJvcGVydHkoYSl8fChjW2FdPVtdLGIuZmFjdG9yeShhK2QsW1wiJGluamVjdG9yXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLGZ1bmN0aW9uKGIsZCl7dmFyIGU9W107cShjW2FdLGZ1bmN0aW9uKGMsZyl7dHJ5e3ZhciBmPWIuaW52b2tlKGMpO00oZik/Zj17Y29tcGlsZTpZKGYpfTohZi5jb21waWxlJiZmLmxpbmsmJihmLmNvbXBpbGU9XHJcblkoZi5saW5rKSk7Zi5wcmlvcml0eT1mLnByaW9yaXR5fHwwO2YuaW5kZXg9ZztmLm5hbWU9Zi5uYW1lfHxhO2YucmVxdWlyZT1mLnJlcXVpcmV8fGYuY29udHJvbGxlciYmZi5uYW1lO2YucmVzdHJpY3Q9Zi5yZXN0cmljdHx8XCJBXCI7ZS5wdXNoKGYpfWNhdGNoKG0pe2QobSl9fSk7cmV0dXJuIGV9XSkpLGNbYV0ucHVzaChlKSk6cShhLE9iKG0pKTtyZXR1cm4gdGhpc307dGhpcy5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYS5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdChiKSx0aGlzKTphLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KCl9O3RoaXMuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdChiKSx0aGlzKTphLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdCgpfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkaW50ZXJwb2xhdGVcIixcclxuXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkcGFyc2VcIixcIiRjb250cm9sbGVyXCIsXCIkcm9vdFNjb3BlXCIsXCIkZG9jdW1lbnRcIixcIiRzY2VcIixcIiRhbmltYXRlXCIsXCIkJHNhbml0aXplVXJpXCIsZnVuY3Rpb24oYSxiLGwsbixwLHIsRixBLEgsdixRLEspe2Z1bmN0aW9uIEMoYSxiLGMsZCxlKXthIGluc3RhbmNlb2Ygenx8KGE9eihhKSk7cShhLGZ1bmN0aW9uKGIsYyl7Mz09Yi5ub2RlVHlwZSYmYi5ub2RlVmFsdWUubWF0Y2goL1xcUysvKSYmKGFbY109eihiKS53cmFwKFwiPHNwYW4+PC9zcGFuPlwiKS5wYXJlbnQoKVswXSl9KTt2YXIgZz1JKGEsYixhLGMsZCxlKTtrYShhLFwibmctc2NvcGVcIik7cmV0dXJuIGZ1bmN0aW9uKGIsYyxkKXt0YihiLFwic2NvcGVcIik7dmFyIGU9Yz9GYS5jbG9uZS5jYWxsKGEpOmE7cShkLGZ1bmN0aW9uKGEsYil7ZS5kYXRhKFwiJFwiK2IrXCJDb250cm9sbGVyXCIsYSl9KTtkPTA7Zm9yKHZhciBmPWUubGVuZ3RoO2Q8ZjtkKyspe3ZhciBtPVxyXG5lW2RdLm5vZGVUeXBlOzEhPT1tJiY5IT09bXx8ZS5lcShkKS5kYXRhKFwiJHNjb3BlXCIsYil9YyYmYyhlLGIpO2cmJmcoYixlLGUpO3JldHVybiBlfX1mdW5jdGlvbiBrYShhLGIpe3RyeXthLmFkZENsYXNzKGIpfWNhdGNoKGMpe319ZnVuY3Rpb24gSShhLGIsYyxkLGUsZyl7ZnVuY3Rpb24gZihhLGMsZCxlKXt2YXIgZyxrLHIsbCxuLHAsSjtnPWMubGVuZ3RoO3ZhciBGPUFycmF5KGcpO2ZvcihuPTA7bjxnO24rKylGW25dPWNbbl07Sj1uPTA7Zm9yKHA9bS5sZW5ndGg7bjxwO0orKylrPUZbSl0sYz1tW24rK10sZz1tW24rK10scj16KGspLGM/KGMuc2NvcGU/KGw9YS4kbmV3KCksci5kYXRhKFwiJHNjb3BlXCIsbCkpOmw9YSwocj1jLnRyYW5zY2x1ZGUpfHwhZSYmYj9jKGcsbCxrLGQsVShhLHJ8fGIpKTpjKGcsbCxrLGQsZSkpOmcmJmcoYSxrLmNoaWxkTm9kZXMscyxlKX1mb3IodmFyIG09W10sayxyLGwsbixwPTA7cDxhLmxlbmd0aDtwKyspaz1uZXcgRGIscj1iYShhW3BdLFtdLGssXHJcbjA9PT1wP2Q6cyxlKSwoZz1yLmxlbmd0aD9nYShyLGFbcF0sayxiLGMsbnVsbCxbXSxbXSxnKTpudWxsKSYmZy5zY29wZSYma2EoeihhW3BdKSxcIm5nLXNjb3BlXCIpLGs9ZyYmZy50ZXJtaW5hbHx8IShsPWFbcF0uY2hpbGROb2Rlcyl8fCFsLmxlbmd0aD9udWxsOkkobCxnP2cudHJhbnNjbHVkZTpiKSxtLnB1c2goZyxrKSxuPW58fGd8fGssZz1udWxsO3JldHVybiBuP2Y6bnVsbH1mdW5jdGlvbiBVKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXt2YXIgZz0hMTtjfHwoYz1hLiRuZXcoKSxnPWMuJCR0cmFuc2NsdWRlZD0hMCk7ZD1iKGMsZCxlKTtpZihnKWQub24oXCIkZGVzdHJveVwiLGJiKGMsYy4kZGVzdHJveSkpO3JldHVybiBkfX1mdW5jdGlvbiBiYShhLGIsYyxkLGYpe3ZhciBtPWMuJGF0dHIsaztzd2l0Y2goYS5ub2RlVHlwZSl7Y2FzZSAxOlMoYixsYShHYShhKS50b0xvd2VyQ2FzZSgpKSxcIkVcIixkLGYpO3ZhciByLGwsbjtrPWEuYXR0cmlidXRlcztmb3IodmFyIHA9MCxGPVxyXG5rJiZrLmxlbmd0aDtwPEY7cCsrKXt2YXIgQT0hMSxRPSExO3I9a1twXTtpZighTnx8ODw9Tnx8ci5zcGVjaWZpZWQpe2w9ci5uYW1lO249bGEobCk7VC50ZXN0KG4pJiYobD1jYihuLnN1YnN0cig2KSxcIi1cIikpO3ZhciBDPW4ucmVwbGFjZSgvKFN0YXJ0fEVuZCkkLyxcIlwiKTtuPT09QytcIlN0YXJ0XCImJihBPWwsUT1sLnN1YnN0cigwLGwubGVuZ3RoLTUpK1wiZW5kXCIsbD1sLnN1YnN0cigwLGwubGVuZ3RoLTYpKTtuPWxhKGwudG9Mb3dlckNhc2UoKSk7bVtuXT1sO2Nbbl09cj1aKHIudmFsdWUpO2VjKGEsbikmJihjW25dPSEwKTtPKGEsYixyLG4pO1MoYixuLFwiQVwiLGQsZixBLFEpfX1hPWEuY2xhc3NOYW1lO2lmKHcoYSkmJlwiXCIhPT1hKWZvcig7az1nLmV4ZWMoYSk7KW49bGEoa1syXSksUyhiLG4sXCJDXCIsZCxmKSYmKGNbbl09WihrWzNdKSksYT1hLnN1YnN0cihrLmluZGV4K2tbMF0ubGVuZ3RoKTticmVhaztjYXNlIDM6dChiLGEubm9kZVZhbHVlKTticmVhaztjYXNlIDg6dHJ5e2lmKGs9XHJcbmUuZXhlYyhhLm5vZGVWYWx1ZSkpbj1sYShrWzFdKSxTKGIsbixcIk1cIixkLGYpJiYoY1tuXT1aKGtbMl0pKX1jYXRjaChIKXt9fWIuc29ydCh1KTtyZXR1cm4gYn1mdW5jdGlvbiBhYShhLGIsYyl7dmFyIGQ9W10sZT0wO2lmKGImJmEuaGFzQXR0cmlidXRlJiZhLmhhc0F0dHJpYnV0ZShiKSl7ZG97aWYoIWEpdGhyb3cgaGEoXCJ1dGVyZGlyXCIsYixjKTsxPT1hLm5vZGVUeXBlJiYoYS5oYXNBdHRyaWJ1dGUoYikmJmUrKyxhLmhhc0F0dHJpYnV0ZShjKSYmZS0tKTtkLnB1c2goYSk7YT1hLm5leHRTaWJsaW5nfXdoaWxlKDA8ZSl9ZWxzZSBkLnB1c2goYSk7cmV0dXJuIHooZCl9ZnVuY3Rpb24gQihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQsZSxnLGYsayl7ZT1hYShlWzBdLGIsYyk7cmV0dXJuIGEoZCxlLGcsZixrKX19ZnVuY3Rpb24gZ2EoYSxjLGQsZSxnLGYsbSxuLHApe2Z1bmN0aW9uIEEoYSxiLGMsZCl7aWYoYSl7YyYmKGE9QihhLGMsZCkpO2EucmVxdWlyZT1HLnJlcXVpcmU7aWYoSz09PVxyXG5HfHxHLiQkaXNvbGF0ZVNjb3BlKWE9amMoYSx7aXNvbGF0ZVNjb3BlOiEwfSk7bS5wdXNoKGEpfWlmKGIpe2MmJihiPUIoYixjLGQpKTtiLnJlcXVpcmU9Ry5yZXF1aXJlO2lmKEs9PT1HfHxHLiQkaXNvbGF0ZVNjb3BlKWI9amMoYix7aXNvbGF0ZVNjb3BlOiEwfSk7bi5wdXNoKGIpfX1mdW5jdGlvbiBRKGEsYixjKXt2YXIgZCxlPVwiZGF0YVwiLGc9ITE7aWYodyhhKSl7Zm9yKDtcIl5cIj09KGQ9YS5jaGFyQXQoMCkpfHxcIj9cIj09ZDspYT1hLnN1YnN0cigxKSxcIl5cIj09ZCYmKGU9XCJpbmhlcml0ZWREYXRhXCIpLGc9Z3x8XCI/XCI9PWQ7ZD1udWxsO2MmJlwiZGF0YVwiPT09ZSYmKGQ9Y1thXSk7ZD1kfHxiW2VdKFwiJFwiK2ErXCJDb250cm9sbGVyXCIpO2lmKCFkJiYhZyl0aHJvdyBoYShcImN0cmVxXCIsYSxjYSk7fWVsc2UgTChhKSYmKGQ9W10scShhLGZ1bmN0aW9uKGEpe2QucHVzaChRKGEsYixjKSl9KSk7cmV0dXJuIGR9ZnVuY3Rpb24gSChhLGUsZyxmLHApe2Z1bmN0aW9uIEEoYSxiKXt2YXIgYzsyPlxyXG5hcmd1bWVudHMubGVuZ3RoJiYoYj1hLGE9cyk7dSYmKGM9YWEpO3JldHVybiBwKGEsYixjKX12YXIgSixDLHYsSSxiYSxCLGFhPXt9LGdiO0o9Yz09PWc/ZDpSYihkLG5ldyBEYih6KGcpLGQuJGF0dHIpKTtDPUouJCRlbGVtZW50O2lmKEspe3ZhciB0PS9eXFxzKihbQD0mXSkoXFw/PylcXHMqKFxcdyopXFxzKiQvO2Y9eihnKTtCPWUuJG5ldyghMCk7Z2EmJmdhPT09Sy4kJG9yaWdpbmFsRGlyZWN0aXZlP2YuZGF0YShcIiRpc29sYXRlU2NvcGVcIixCKTpmLmRhdGEoXCIkaXNvbGF0ZVNjb3BlTm9UZW1wbGF0ZVwiLEIpO2thKGYsXCJuZy1pc29sYXRlLXNjb3BlXCIpO3EoSy5zY29wZSxmdW5jdGlvbihhLGMpe3ZhciBkPWEubWF0Y2godCl8fFtdLGc9ZFszXXx8YyxmPVwiP1wiPT1kWzJdLGQ9ZFsxXSxtLGwsbixwO0IuJCRpc29sYXRlQmluZGluZ3NbY109ZCtnO3N3aXRjaChkKXtjYXNlIFwiQFwiOkouJG9ic2VydmUoZyxmdW5jdGlvbihhKXtCW2NdPWF9KTtKLiQkb2JzZXJ2ZXJzW2ddLiQkc2NvcGU9ZTtcclxuSltnXSYmKEJbY109YihKW2ddKShlKSk7YnJlYWs7Y2FzZSBcIj1cIjppZihmJiYhSltnXSlicmVhaztsPXIoSltnXSk7cD1sLmxpdGVyYWw/dGE6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWJ9O249bC5hc3NpZ258fGZ1bmN0aW9uKCl7bT1CW2NdPWwoZSk7dGhyb3cgaGEoXCJub25hc3NpZ25cIixKW2ddLEsubmFtZSk7fTttPUJbY109bChlKTtCLiR3YXRjaChmdW5jdGlvbigpe3ZhciBhPWwoZSk7cChhLEJbY10pfHwocChhLG0pP24oZSxhPUJbY10pOkJbY109YSk7cmV0dXJuIG09YX0sbnVsbCxsLmxpdGVyYWwpO2JyZWFrO2Nhc2UgXCImXCI6bD1yKEpbZ10pO0JbY109ZnVuY3Rpb24oYSl7cmV0dXJuIGwoZSxhKX07YnJlYWs7ZGVmYXVsdDp0aHJvdyBoYShcImlzY3BcIixLLm5hbWUsYyxhKTt9fSl9Z2I9cCYmQTtVJiZxKFUsZnVuY3Rpb24oYSl7dmFyIGI9eyRzY29wZTphPT09S3x8YS4kJGlzb2xhdGVTY29wZT9COmUsJGVsZW1lbnQ6QywkYXR0cnM6SiwkdHJhbnNjbHVkZTpnYn0sYztcclxuYmE9YS5jb250cm9sbGVyO1wiQFwiPT1iYSYmKGJhPUpbYS5uYW1lXSk7Yz1GKGJhLGIpO2FhW2EubmFtZV09Yzt1fHxDLmRhdGEoXCIkXCIrYS5uYW1lK1wiQ29udHJvbGxlclwiLGMpO2EuY29udHJvbGxlckFzJiYoYi4kc2NvcGVbYS5jb250cm9sbGVyQXNdPWMpfSk7Zj0wO2Zvcih2PW0ubGVuZ3RoO2Y8djtmKyspdHJ5e0k9bVtmXSxJKEkuaXNvbGF0ZVNjb3BlP0I6ZSxDLEosSS5yZXF1aXJlJiZRKEkucmVxdWlyZSxDLGFhKSxnYil9Y2F0Y2goUyl7bChTLGZhKEMpKX1mPWU7SyYmKEsudGVtcGxhdGV8fG51bGw9PT1LLnRlbXBsYXRlVXJsKSYmKGY9Qik7YSYmYShmLGcuY2hpbGROb2RlcyxzLHApO2ZvcihmPW4ubGVuZ3RoLTE7MDw9ZjtmLS0pdHJ5e0k9bltmXSxJKEkuaXNvbGF0ZVNjb3BlP0I6ZSxDLEosSS5yZXF1aXJlJiZRKEkucmVxdWlyZSxDLGFhKSxnYil9Y2F0Y2goRyl7bChHLGZhKEMpKX19cD1wfHx7fTt2YXIgdj0tTnVtYmVyLk1BWF9WQUxVRSxJLFU9cC5jb250cm9sbGVyRGlyZWN0aXZlcyxcclxuSz1wLm5ld0lzb2xhdGVTY29wZURpcmVjdGl2ZSxnYT1wLnRlbXBsYXRlRGlyZWN0aXZlO3A9cC5ub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlO2Zvcih2YXIgUz0hMSx1PSExLHk9ZC4kJGVsZW1lbnQ9eihjKSxHLGNhLHQsUD1lLE8sTj0wLG1hPWEubGVuZ3RoO048bWE7TisrKXtHPWFbTl07dmFyIFZhPUcuJCRzdGFydCxUPUcuJCRlbmQ7VmEmJih5PWFhKGMsVmEsVCkpO3Q9cztpZih2PkcucHJpb3JpdHkpYnJlYWs7aWYodD1HLnNjb3BlKUk9SXx8RyxHLnRlbXBsYXRlVXJsfHwoeChcIm5ldy9pc29sYXRlZCBzY29wZVwiLEssRyx5KSxXKHQpJiYoSz1HKSk7Y2E9Ry5uYW1lOyFHLnRlbXBsYXRlVXJsJiZHLmNvbnRyb2xsZXImJih0PUcuY29udHJvbGxlcixVPVV8fHt9LHgoXCInXCIrY2ErXCInIGNvbnRyb2xsZXJcIixVW2NhXSxHLHkpLFVbY2FdPUcpO2lmKHQ9Ry50cmFuc2NsdWRlKVM9ITAsRy4kJHRsYnx8KHgoXCJ0cmFuc2NsdXNpb25cIixwLEcseSkscD1HKSxcImVsZW1lbnRcIj09dD8odT1cclxuITAsdj1HLnByaW9yaXR5LHQ9YWEoYyxWYSxUKSx5PWQuJCRlbGVtZW50PXooUi5jcmVhdGVDb21tZW50KFwiIFwiK2NhK1wiOiBcIitkW2NhXStcIiBcIikpLGM9eVswXSxoYihnLHoodWEuY2FsbCh0LDApKSxjKSxQPUModCxlLHYsZiYmZi5uYW1lLHtub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlOnB9KSk6KHQ9eih5YihjKSkuY29udGVudHMoKSx5LmVtcHR5KCksUD1DKHQsZSkpO2lmKEcudGVtcGxhdGUpaWYoeChcInRlbXBsYXRlXCIsZ2EsRyx5KSxnYT1HLHQ9TShHLnRlbXBsYXRlKT9HLnRlbXBsYXRlKHksZCk6Ry50ZW1wbGF0ZSx0PVYodCksRy5yZXBsYWNlKXtmPUc7dD16KFwiPGRpdj5cIitaKHQpK1wiPC9kaXY+XCIpLmNvbnRlbnRzKCk7Yz10WzBdO2lmKDEhPXQubGVuZ3RofHwxIT09Yy5ub2RlVHlwZSl0aHJvdyBoYShcInRwbHJ0XCIsY2EsXCJcIik7aGIoZyx5LGMpO21hPXskYXR0cjp7fX07dD1iYShjLFtdLG1hKTt2YXIgWD1hLnNwbGljZShOKzEsYS5sZW5ndGgtKE4rMSkpO0smJmhjKHQpO1xyXG5hPWEuY29uY2F0KHQpLmNvbmNhdChYKTtEKGQsbWEpO21hPWEubGVuZ3RofWVsc2UgeS5odG1sKHQpO2lmKEcudGVtcGxhdGVVcmwpeChcInRlbXBsYXRlXCIsZ2EsRyx5KSxnYT1HLEcucmVwbGFjZSYmKGY9RyksSD1FKGEuc3BsaWNlKE4sYS5sZW5ndGgtTikseSxkLGcsUCxtLG4se2NvbnRyb2xsZXJEaXJlY3RpdmVzOlUsbmV3SXNvbGF0ZVNjb3BlRGlyZWN0aXZlOkssdGVtcGxhdGVEaXJlY3RpdmU6Z2Esbm9uVGxiVHJhbnNjbHVkZURpcmVjdGl2ZTpwfSksbWE9YS5sZW5ndGg7ZWxzZSBpZihHLmNvbXBpbGUpdHJ5e089Ry5jb21waWxlKHksZCxQKSxNKE8pP0EobnVsbCxPLFZhLFQpOk8mJkEoTy5wcmUsTy5wb3N0LFZhLFQpfWNhdGNoKFkpe2woWSxmYSh5KSl9Ry50ZXJtaW5hbCYmKEgudGVybWluYWw9ITAsdj1NYXRoLm1heCh2LEcucHJpb3JpdHkpKX1ILnNjb3BlPUkmJiEwPT09SS5zY29wZTtILnRyYW5zY2x1ZGU9UyYmUDtyZXR1cm4gSH1mdW5jdGlvbiBoYyhhKXtmb3IodmFyIGI9XHJcbjAsYz1hLmxlbmd0aDtiPGM7YisrKWFbYl09UWIoYVtiXSx7JCRpc29sYXRlU2NvcGU6ITB9KX1mdW5jdGlvbiBTKGIsZSxnLGYsayxyLG4pe2lmKGU9PT1rKXJldHVybiBudWxsO2s9bnVsbDtpZihjLmhhc093blByb3BlcnR5KGUpKXt2YXIgcDtlPWEuZ2V0KGUrZCk7Zm9yKHZhciBGPTAsQT1lLmxlbmd0aDtGPEE7RisrKXRyeXtwPWVbRl0sKGY9PT1zfHxmPnAucHJpb3JpdHkpJiYtMSE9cC5yZXN0cmljdC5pbmRleE9mKGcpJiYociYmKHA9UWIocCx7JCRzdGFydDpyLCQkZW5kOm59KSksYi5wdXNoKHApLGs9cCl9Y2F0Y2goUSl7bChRKX19cmV0dXJuIGt9ZnVuY3Rpb24gRChhLGIpe3ZhciBjPWIuJGF0dHIsZD1hLiRhdHRyLGU9YS4kJGVsZW1lbnQ7cShhLGZ1bmN0aW9uKGQsZSl7XCIkXCIhPWUuY2hhckF0KDApJiYoYltlXSYmKGQrPShcInN0eWxlXCI9PT1lP1wiO1wiOlwiIFwiKStiW2VdKSxhLiRzZXQoZSxkLCEwLGNbZV0pKX0pO3EoYixmdW5jdGlvbihiLGcpe1wiY2xhc3NcIj09Zz8oa2EoZSxcclxuYiksYVtcImNsYXNzXCJdPShhW1wiY2xhc3NcIl0/YVtcImNsYXNzXCJdK1wiIFwiOlwiXCIpK2IpOlwic3R5bGVcIj09Zz8oZS5hdHRyKFwic3R5bGVcIixlLmF0dHIoXCJzdHlsZVwiKStcIjtcIitiKSxhLnN0eWxlPShhLnN0eWxlP2Euc3R5bGUrXCI7XCI6XCJcIikrYik6XCIkXCI9PWcuY2hhckF0KDApfHxhLmhhc093blByb3BlcnR5KGcpfHwoYVtnXT1iLGRbZ109Y1tnXSl9KX1mdW5jdGlvbiBFKGEsYixjLGQsZSxnLGYsayl7dmFyIG09W10scixsLEY9YlswXSxBPWEuc2hpZnQoKSxRPXkoe30sQSx7dGVtcGxhdGVVcmw6bnVsbCx0cmFuc2NsdWRlOm51bGwscmVwbGFjZTpudWxsLCQkb3JpZ2luYWxEaXJlY3RpdmU6QX0pLEM9TShBLnRlbXBsYXRlVXJsKT9BLnRlbXBsYXRlVXJsKGIsYyk6QS50ZW1wbGF0ZVVybDtiLmVtcHR5KCk7bi5nZXQodi5nZXRUcnVzdGVkUmVzb3VyY2VVcmwoQykse2NhY2hlOnB9KS5zdWNjZXNzKGZ1bmN0aW9uKG4pe3ZhciBwLEg7bj1WKG4pO2lmKEEucmVwbGFjZSl7bj16KFwiPGRpdj5cIitcclxuWihuKStcIjwvZGl2PlwiKS5jb250ZW50cygpO3A9blswXTtpZigxIT1uLmxlbmd0aHx8MSE9PXAubm9kZVR5cGUpdGhyb3cgaGEoXCJ0cGxydFwiLEEubmFtZSxDKTtuPXskYXR0cjp7fX07aGIoZCxiLHApO3ZhciB2PWJhKHAsW10sbik7VyhBLnNjb3BlKSYmaGModik7YT12LmNvbmNhdChhKTtEKGMsbil9ZWxzZSBwPUYsYi5odG1sKG4pO2EudW5zaGlmdChRKTtyPWdhKGEscCxjLGUsYixBLGcsZixrKTtxKGQsZnVuY3Rpb24oYSxjKXthPT1wJiYoZFtjXT1iWzBdKX0pO2ZvcihsPUkoYlswXS5jaGlsZE5vZGVzLGUpO20ubGVuZ3RoOyl7bj1tLnNoaWZ0KCk7SD1tLnNoaWZ0KCk7dmFyIEs9bS5zaGlmdCgpLEI9bS5zaGlmdCgpLHY9YlswXTtpZihIIT09Ril7dmFyIGFhPUguY2xhc3NOYW1lLHY9eWIocCk7aGIoSyx6KEgpLHYpO2thKHoodiksYWEpfUg9ci50cmFuc2NsdWRlP1UobixyLnRyYW5zY2x1ZGUpOkI7cihsLG4sdixkLEgpfW09bnVsbH0pLmVycm9yKGZ1bmN0aW9uKGEsYixjLFxyXG5kKXt0aHJvdyBoYShcInRwbG9hZFwiLGQudXJsKTt9KTtyZXR1cm4gZnVuY3Rpb24oYSxiLGMsZCxlKXttPyhtLnB1c2goYiksbS5wdXNoKGMpLG0ucHVzaChkKSxtLnB1c2goZSkpOnIobCxiLGMsZCxlKX19ZnVuY3Rpb24gdShhLGIpe3ZhciBjPWIucHJpb3JpdHktYS5wcmlvcml0eTtyZXR1cm4gMCE9PWM/YzphLm5hbWUhPT1iLm5hbWU/YS5uYW1lPGIubmFtZT8tMToxOmEuaW5kZXgtYi5pbmRleH1mdW5jdGlvbiB4KGEsYixjLGQpe2lmKGIpdGhyb3cgaGEoXCJtdWx0aWRpclwiLGIubmFtZSxjLm5hbWUsYSxmYShkKSk7fWZ1bmN0aW9uIHQoYSxjKXt2YXIgZD1iKGMsITApO2QmJmEucHVzaCh7cHJpb3JpdHk6MCxjb21waWxlOlkoZnVuY3Rpb24oYSxiKXt2YXIgYz1iLnBhcmVudCgpLGU9Yy5kYXRhKFwiJGJpbmRpbmdcIil8fFtdO2UucHVzaChkKTtrYShjLmRhdGEoXCIkYmluZGluZ1wiLGUpLFwibmctYmluZGluZ1wiKTthLiR3YXRjaChkLGZ1bmN0aW9uKGEpe2JbMF0ubm9kZVZhbHVlPWF9KX0pfSl9XHJcbmZ1bmN0aW9uIFAoYSxiKXtpZihcInNyY2RvY1wiPT1iKXJldHVybiB2LkhUTUw7dmFyIGM9R2EoYSk7aWYoXCJ4bGlua0hyZWZcIj09Ynx8XCJGT1JNXCI9PWMmJlwiYWN0aW9uXCI9PWJ8fFwiSU1HXCIhPWMmJihcInNyY1wiPT1ifHxcIm5nU3JjXCI9PWIpKXJldHVybiB2LlJFU09VUkNFX1VSTH1mdW5jdGlvbiBPKGEsYyxkLGUpe3ZhciBnPWIoZCwhMCk7aWYoZyl7aWYoXCJtdWx0aXBsZVwiPT09ZSYmXCJTRUxFQ1RcIj09PUdhKGEpKXRocm93IGhhKFwic2VsbXVsdGlcIixmYShhKSk7Yy5wdXNoKHtwcmlvcml0eToxMDAsY29tcGlsZTpmdW5jdGlvbigpe3JldHVybntwcmU6ZnVuY3Rpb24oYyxkLG0pe2Q9bS4kJG9ic2VydmVyc3x8KG0uJCRvYnNlcnZlcnM9e30pO2lmKGYudGVzdChlKSl0aHJvdyBoYShcIm5vZG9tZXZlbnRzXCIpO2lmKGc9YihtW2VdLCEwLFAoYSxlKSkpbVtlXT1nKGMpLChkW2VdfHwoZFtlXT1bXSkpLiQkaW50ZXI9ITAsKG0uJCRvYnNlcnZlcnMmJm0uJCRvYnNlcnZlcnNbZV0uJCRzY29wZXx8XHJcbmMpLiR3YXRjaChnLGZ1bmN0aW9uKGEsYil7XCJjbGFzc1wiPT09ZSYmYSE9Yj9tLiR1cGRhdGVDbGFzcyhhLGIpOm0uJHNldChlLGEpfSl9fX19KX19ZnVuY3Rpb24gaGIoYSxiLGMpe3ZhciBkPWJbMF0sZT1iLmxlbmd0aCxnPWQucGFyZW50Tm9kZSxmLG07aWYoYSlmb3IoZj0wLG09YS5sZW5ndGg7ZjxtO2YrKylpZihhW2ZdPT1kKXthW2YrK109YzttPWYrZS0xO2Zvcih2YXIgaz1hLmxlbmd0aDtmPGs7ZisrLG0rKyltPGs/YVtmXT1hW21dOmRlbGV0ZSBhW2ZdO2EubGVuZ3RoLT1lLTE7YnJlYWt9ZyYmZy5yZXBsYWNlQ2hpbGQoYyxkKTthPVIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2EuYXBwZW5kQ2hpbGQoZCk7Y1t6LmV4cGFuZG9dPWRbei5leHBhbmRvXTtkPTE7Zm9yKGU9Yi5sZW5ndGg7ZDxlO2QrKylnPWJbZF0seihnKS5yZW1vdmUoKSxhLmFwcGVuZENoaWxkKGcpLGRlbGV0ZSBiW2RdO2JbMF09YztiLmxlbmd0aD0xfWZ1bmN0aW9uIGpjKGEsYil7cmV0dXJuIHkoZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShudWxsLFxyXG5hcmd1bWVudHMpfSxhLGIpfXZhciBEYj1mdW5jdGlvbihhLGIpe3RoaXMuJCRlbGVtZW50PWE7dGhpcy4kYXR0cj1ifHx7fX07RGIucHJvdG90eXBlPXskbm9ybWFsaXplOmxhLCRhZGRDbGFzczpmdW5jdGlvbihhKXthJiYwPGEubGVuZ3RoJiZRLmFkZENsYXNzKHRoaXMuJCRlbGVtZW50LGEpfSwkcmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7YSYmMDxhLmxlbmd0aCYmUS5yZW1vdmVDbGFzcyh0aGlzLiQkZWxlbWVudCxhKX0sJHVwZGF0ZUNsYXNzOmZ1bmN0aW9uKGEsYil7dGhpcy4kcmVtb3ZlQ2xhc3Moa2MoYixhKSk7dGhpcy4kYWRkQ2xhc3Moa2MoYSxiKSl9LCRzZXQ6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ZWModGhpcy4kJGVsZW1lbnRbMF0sYSk7ZSYmKHRoaXMuJCRlbGVtZW50LnByb3AoYSxiKSxkPWUpO3RoaXNbYV09YjtkP3RoaXMuJGF0dHJbYV09ZDooZD10aGlzLiRhdHRyW2FdKXx8KHRoaXMuJGF0dHJbYV09ZD1jYihhLFwiLVwiKSk7ZT1HYSh0aGlzLiQkZWxlbWVudCk7XHJcbmlmKFwiQVwiPT09ZSYmXCJocmVmXCI9PT1hfHxcIklNR1wiPT09ZSYmXCJzcmNcIj09PWEpdGhpc1thXT1iPUsoYixcInNyY1wiPT09YSk7ITEhPT1jJiYobnVsbD09PWJ8fGI9PT1zP3RoaXMuJCRlbGVtZW50LnJlbW92ZUF0dHIoZCk6dGhpcy4kJGVsZW1lbnQuYXR0cihkLGIpKTsoYz10aGlzLiQkb2JzZXJ2ZXJzKSYmcShjW2FdLGZ1bmN0aW9uKGEpe3RyeXthKGIpfWNhdGNoKGMpe2woYyl9fSl9LCRvYnNlcnZlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuJCRvYnNlcnZlcnN8fChjLiQkb2JzZXJ2ZXJzPXt9KSxlPWRbYV18fChkW2FdPVtdKTtlLnB1c2goYik7QS4kZXZhbEFzeW5jKGZ1bmN0aW9uKCl7ZS4kJGludGVyfHxiKGNbYV0pfSk7cmV0dXJuIGJ9fTt2YXIgY2E9Yi5zdGFydFN5bWJvbCgpLG1hPWIuZW5kU3ltYm9sKCksVj1cInt7XCI9PWNhfHxcIn19XCI9PW1hP0FhOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoL1xce1xcey9nLGNhKS5yZXBsYWNlKC99fS9nLG1hKX0sVD0vXm5nQXR0cltBLVpdLztcclxucmV0dXJuIEN9XX1mdW5jdGlvbiBsYShiKXtyZXR1cm4gUWEoYi5yZXBsYWNlKGhkLFwiXCIpKX1mdW5jdGlvbiBrYyhiLGEpe3ZhciBjPVwiXCIsZD1iLnNwbGl0KC9cXHMrLyksZT1hLnNwbGl0KC9cXHMrLyksZz0wO2E6Zm9yKDtnPGQubGVuZ3RoO2crKyl7Zm9yKHZhciBmPWRbZ10saD0wO2g8ZS5sZW5ndGg7aCsrKWlmKGY9PWVbaF0pY29udGludWUgYTtjKz0oMDxjLmxlbmd0aD9cIiBcIjpcIlwiKStmfXJldHVybiBjfWZ1bmN0aW9uIGlkKCl7dmFyIGI9e30sYT0vXihcXFMrKShcXHMrYXNcXHMrKFxcdyspKT8kLzt0aGlzLnJlZ2lzdGVyPWZ1bmN0aW9uKGEsZCl7d2EoYSxcImNvbnRyb2xsZXJcIik7VyhhKT95KGIsYSk6YlthXT1kfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkd2luZG93XCIsZnVuY3Rpb24oYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxnKXt2YXIgZixoLG07dyhlKSYmKGY9ZS5tYXRjaChhKSxoPWZbMV0sbT1mWzNdLGU9Yi5oYXNPd25Qcm9wZXJ0eShoKT9iW2hdOlpiKGcuJHNjb3BlLGgsXHJcbiEwKXx8WmIoZCxoLCEwKSxQYShlLGgsITApKTtmPWMuaW5zdGFudGlhdGUoZSxnKTtpZihtKXtpZighZ3x8XCJvYmplY3RcIiE9dHlwZW9mIGcuJHNjb3BlKXRocm93IHQoXCIkY29udHJvbGxlclwiKShcIm5vc2NwXCIsaHx8ZS5uYW1lLG0pO2cuJHNjb3BlW21dPWZ9cmV0dXJuIGZ9fV19ZnVuY3Rpb24gamQoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLGZ1bmN0aW9uKGIpe3JldHVybiB6KGIuZG9jdW1lbnQpfV19ZnVuY3Rpb24ga2QoKXt0aGlzLiRnZXQ9W1wiJGxvZ1wiLGZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbihhLGMpe2IuZXJyb3IuYXBwbHkoYixhcmd1bWVudHMpfX1dfWZ1bmN0aW9uIGxjKGIpe3ZhciBhPXt9LGMsZCxlO2lmKCFiKXJldHVybiBhO3EoYi5zcGxpdChcIlxcblwiKSxmdW5jdGlvbihiKXtlPWIuaW5kZXhPZihcIjpcIik7Yz14KFooYi5zdWJzdHIoMCxlKSkpO2Q9WihiLnN1YnN0cihlKzEpKTtjJiYoYVtjXT1hW2NdP2FbY10rKFwiLCBcIitkKTpkKX0pO3JldHVybiBhfWZ1bmN0aW9uIG1jKGIpe3ZhciBhPVxyXG5XKGIpP2I6cztyZXR1cm4gZnVuY3Rpb24oYyl7YXx8KGE9bGMoYikpO3JldHVybiBjP2FbeChjKV18fG51bGw6YX19ZnVuY3Rpb24gbmMoYixhLGMpe2lmKE0oYykpcmV0dXJuIGMoYixhKTtxKGMsZnVuY3Rpb24oYyl7Yj1jKGIsYSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBsZCgpe3ZhciBiPS9eXFxzKihcXFt8XFx7W15cXHtdKS8sYT0vW1xcfVxcXV1cXHMqJC8sYz0vXlxcKVxcXVxcfScsP1xcbi8sZD17XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOFwifSxlPXRoaXMuZGVmYXVsdHM9e3RyYW5zZm9ybVJlc3BvbnNlOltmdW5jdGlvbihkKXt3KGQpJiYoZD1kLnJlcGxhY2UoYyxcIlwiKSxiLnRlc3QoZCkmJmEudGVzdChkKSYmKGQ9VGIoZCkpKTtyZXR1cm4gZH1dLHRyYW5zZm9ybVJlcXVlc3Q6W2Z1bmN0aW9uKGEpe3JldHVybiBXKGEpJiZcIltvYmplY3QgRmlsZV1cIiE9PUxhLmNhbGwoYSk/cGEoYSk6YX1dLGhlYWRlcnM6e2NvbW1vbjp7QWNjZXB0OlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCJ9LFxyXG5wb3N0OiQoZCkscHV0OiQoZCkscGF0Y2g6JChkKX0seHNyZkNvb2tpZU5hbWU6XCJYU1JGLVRPS0VOXCIseHNyZkhlYWRlck5hbWU6XCJYLVhTUkYtVE9LRU5cIn0sZz10aGlzLmludGVyY2VwdG9ycz1bXSxmPXRoaXMucmVzcG9uc2VJbnRlcmNlcHRvcnM9W107dGhpcy4kZ2V0PVtcIiRodHRwQmFja2VuZFwiLFwiJGJyb3dzZXJcIixcIiRjYWNoZUZhY3RvcnlcIixcIiRyb290U2NvcGVcIixcIiRxXCIsXCIkaW5qZWN0b3JcIixmdW5jdGlvbihhLGIsYyxkLG4scCl7ZnVuY3Rpb24gcihhKXtmdW5jdGlvbiBjKGEpe3ZhciBiPXkoe30sYSx7ZGF0YTpuYyhhLmRhdGEsYS5oZWFkZXJzLGQudHJhbnNmb3JtUmVzcG9uc2UpfSk7cmV0dXJuIDIwMDw9YS5zdGF0dXMmJjMwMD5hLnN0YXR1cz9iOm4ucmVqZWN0KGIpfXZhciBkPXt0cmFuc2Zvcm1SZXF1ZXN0OmUudHJhbnNmb3JtUmVxdWVzdCx0cmFuc2Zvcm1SZXNwb25zZTplLnRyYW5zZm9ybVJlc3BvbnNlfSxnPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGM7XHJcbnEoYSxmdW5jdGlvbihiLGQpe00oYikmJihjPWIoKSxudWxsIT1jP2FbZF09YzpkZWxldGUgYVtkXSl9KX12YXIgYz1lLmhlYWRlcnMsZD15KHt9LGEuaGVhZGVycyksZyxmLGM9eSh7fSxjLmNvbW1vbixjW3goYS5tZXRob2QpXSk7YihjKTtiKGQpO2E6Zm9yKGcgaW4gYyl7YT14KGcpO2ZvcihmIGluIGQpaWYoeChmKT09PWEpY29udGludWUgYTtkW2ddPWNbZ119cmV0dXJuIGR9KGEpO3koZCxhKTtkLmhlYWRlcnM9ZztkLm1ldGhvZD1IYShkLm1ldGhvZCk7KGE9RWIoZC51cmwpP2IuY29va2llcygpW2QueHNyZkNvb2tpZU5hbWV8fGUueHNyZkNvb2tpZU5hbWVdOnMpJiYoZ1tkLnhzcmZIZWFkZXJOYW1lfHxlLnhzcmZIZWFkZXJOYW1lXT1hKTt2YXIgZj1bZnVuY3Rpb24oYSl7Zz1hLmhlYWRlcnM7dmFyIGI9bmMoYS5kYXRhLG1jKGcpLGEudHJhbnNmb3JtUmVxdWVzdCk7dShhLmRhdGEpJiZxKGcsZnVuY3Rpb24oYSxiKXtcImNvbnRlbnQtdHlwZVwiPT09eChiKSYmZGVsZXRlIGdbYl19KTtcclxudShhLndpdGhDcmVkZW50aWFscykmJiF1KGUud2l0aENyZWRlbnRpYWxzKSYmKGEud2l0aENyZWRlbnRpYWxzPWUud2l0aENyZWRlbnRpYWxzKTtyZXR1cm4gRihhLGIsZykudGhlbihjLGMpfSxzXSxrPW4ud2hlbihkKTtmb3IocSh2LGZ1bmN0aW9uKGEpeyhhLnJlcXVlc3R8fGEucmVxdWVzdEVycm9yKSYmZi51bnNoaWZ0KGEucmVxdWVzdCxhLnJlcXVlc3RFcnJvcik7KGEucmVzcG9uc2V8fGEucmVzcG9uc2VFcnJvcikmJmYucHVzaChhLnJlc3BvbnNlLGEucmVzcG9uc2VFcnJvcil9KTtmLmxlbmd0aDspe2E9Zi5zaGlmdCgpO3ZhciBoPWYuc2hpZnQoKSxrPWsudGhlbihhLGgpfWsuc3VjY2Vzcz1mdW5jdGlvbihhKXtrLnRoZW4oZnVuY3Rpb24oYil7YShiLmRhdGEsYi5zdGF0dXMsYi5oZWFkZXJzLGQpfSk7cmV0dXJuIGt9O2suZXJyb3I9ZnVuY3Rpb24oYSl7ay50aGVuKG51bGwsZnVuY3Rpb24oYil7YShiLmRhdGEsYi5zdGF0dXMsYi5oZWFkZXJzLGQpfSk7cmV0dXJuIGt9O1xyXG5yZXR1cm4ga31mdW5jdGlvbiBGKGIsYyxnKXtmdW5jdGlvbiBmKGEsYixjKXt2JiYoMjAwPD1hJiYzMDA+YT92LnB1dChzLFthLGIsbGMoYyldKTp2LnJlbW92ZShzKSk7bShiLGEsYyk7ZC4kJHBoYXNlfHxkLiRhcHBseSgpfWZ1bmN0aW9uIG0oYSxjLGQpe2M9TWF0aC5tYXgoYywwKTsoMjAwPD1jJiYzMDA+Yz9wLnJlc29sdmU6cC5yZWplY3QpKHtkYXRhOmEsc3RhdHVzOmMsaGVhZGVyczptYyhkKSxjb25maWc6Yn0pfWZ1bmN0aW9uIGsoKXt2YXIgYT1hYihyLnBlbmRpbmdSZXF1ZXN0cyxiKTstMSE9PWEmJnIucGVuZGluZ1JlcXVlc3RzLnNwbGljZShhLDEpfXZhciBwPW4uZGVmZXIoKSxGPXAucHJvbWlzZSx2LHEscz1BKGIudXJsLGIucGFyYW1zKTtyLnBlbmRpbmdSZXF1ZXN0cy5wdXNoKGIpO0YudGhlbihrLGspOyhiLmNhY2hlfHxlLmNhY2hlKSYmKCExIT09Yi5jYWNoZSYmXCJHRVRcIj09Yi5tZXRob2QpJiYodj1XKGIuY2FjaGUpP2IuY2FjaGU6VyhlLmNhY2hlKT9lLmNhY2hlOlxyXG5IKTtpZih2KWlmKHE9di5nZXQocyksRChxKSl7aWYocS50aGVuKXJldHVybiBxLnRoZW4oayxrKSxxO0wocSk/bShxWzFdLHFbMF0sJChxWzJdKSk6bShxLDIwMCx7fSl9ZWxzZSB2LnB1dChzLEYpO3UocSkmJmEoYi5tZXRob2QscyxjLGYsZyxiLnRpbWVvdXQsYi53aXRoQ3JlZGVudGlhbHMsYi5yZXNwb25zZVR5cGUpO3JldHVybiBGfWZ1bmN0aW9uIEEoYSxiKXtpZighYilyZXR1cm4gYTt2YXIgYz1bXTtPYyhiLGZ1bmN0aW9uKGEsYil7bnVsbD09PWF8fHUoYSl8fChMKGEpfHwoYT1bYV0pLHEoYSxmdW5jdGlvbihhKXtXKGEpJiYoYT1wYShhKSk7Yy5wdXNoKHZhKGIpK1wiPVwiK3ZhKGEpKX0pKX0pO3JldHVybiBhKygtMT09YS5pbmRleE9mKFwiP1wiKT9cIj9cIjpcIiZcIikrYy5qb2luKFwiJlwiKX12YXIgSD1jKFwiJGh0dHBcIiksdj1bXTtxKGcsZnVuY3Rpb24oYSl7di51bnNoaWZ0KHcoYSk/cC5nZXQoYSk6cC5pbnZva2UoYSkpfSk7cShmLGZ1bmN0aW9uKGEsYil7dmFyIGM9dyhhKT9wLmdldChhKTpcclxucC5pbnZva2UoYSk7di5zcGxpY2UoYiwwLHtyZXNwb25zZTpmdW5jdGlvbihhKXtyZXR1cm4gYyhuLndoZW4oYSkpfSxyZXNwb25zZUVycm9yOmZ1bmN0aW9uKGEpe3JldHVybiBjKG4ucmVqZWN0KGEpKX19KX0pO3IucGVuZGluZ1JlcXVlc3RzPVtdOyhmdW5jdGlvbihhKXtxKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtyW2FdPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIHIoeShjfHx7fSx7bWV0aG9kOmEsdXJsOmJ9KSl9fSl9KShcImdldFwiLFwiZGVsZXRlXCIsXCJoZWFkXCIsXCJqc29ucFwiKTsoZnVuY3Rpb24oYSl7cShhcmd1bWVudHMsZnVuY3Rpb24oYSl7clthXT1mdW5jdGlvbihiLGMsZCl7cmV0dXJuIHIoeShkfHx7fSx7bWV0aG9kOmEsdXJsOmIsZGF0YTpjfSkpfX0pfSkoXCJwb3N0XCIsXCJwdXRcIik7ci5kZWZhdWx0cz1lO3JldHVybiByfV19ZnVuY3Rpb24gbWQoYil7aWYoOD49TiYmKCFiLm1hdGNoKC9eKGdldHxwb3N0fGhlYWR8cHV0fGRlbGV0ZXxvcHRpb25zKSQvaSl8fCFQLlhNTEh0dHBSZXF1ZXN0KSlyZXR1cm4gbmV3IFAuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xyXG5pZihQLlhNTEh0dHBSZXF1ZXN0KXJldHVybiBuZXcgUC5YTUxIdHRwUmVxdWVzdDt0aHJvdyB0KFwiJGh0dHBCYWNrZW5kXCIpKFwibm94aHJcIik7fWZ1bmN0aW9uIG5kKCl7dGhpcy4kZ2V0PVtcIiRicm93c2VyXCIsXCIkd2luZG93XCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihiLGEsYyl7cmV0dXJuIG9kKGIsbWQsYi5kZWZlcixhLmFuZ3VsYXIuY2FsbGJhY2tzLGNbMF0pfV19ZnVuY3Rpb24gb2QoYixhLGMsZCxlKXtmdW5jdGlvbiBnKGEsYil7dmFyIGM9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGQ9ZnVuY3Rpb24oKXtjLm9ucmVhZHlzdGF0ZWNoYW5nZT1jLm9ubG9hZD1jLm9uZXJyb3I9bnVsbDtlLmJvZHkucmVtb3ZlQ2hpbGQoYyk7YiYmYigpfTtjLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtjLnNyYz1hO04mJjg+PU4/Yy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXsvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGMucmVhZHlTdGF0ZSkmJmQoKX06Yy5vbmxvYWQ9Yy5vbmVycm9yPVxyXG5mdW5jdGlvbigpe2QoKX07ZS5ib2R5LmFwcGVuZENoaWxkKGMpO3JldHVybiBkfXZhciBmPS0xO3JldHVybiBmdW5jdGlvbihlLG0sayxsLG4scCxyLEYpe2Z1bmN0aW9uIEEoKXt2PWY7SyYmSygpO0MmJkMuYWJvcnQoKX1mdW5jdGlvbiBIKGEsZCxlLGcpe0kmJmMuY2FuY2VsKEkpO0s9Qz1udWxsO2Q9MD09PWQ/ZT8yMDA6NDA0OmQ7YSgxMjIzPT1kPzIwNDpkLGUsZyk7Yi4kJGNvbXBsZXRlT3V0c3RhbmRpbmdSZXF1ZXN0KEUpfXZhciB2O2IuJCRpbmNPdXRzdGFuZGluZ1JlcXVlc3RDb3VudCgpO209bXx8Yi51cmwoKTtpZihcImpzb25wXCI9PXgoZSkpe3ZhciBRPVwiX1wiKyhkLmNvdW50ZXIrKykudG9TdHJpbmcoMzYpO2RbUV09ZnVuY3Rpb24oYSl7ZFtRXS5kYXRhPWF9O3ZhciBLPWcobS5yZXBsYWNlKFwiSlNPTl9DQUxMQkFDS1wiLFwiYW5ndWxhci5jYWxsYmFja3MuXCIrUSksZnVuY3Rpb24oKXtkW1FdLmRhdGE/SChsLDIwMCxkW1FdLmRhdGEpOkgobCx2fHwtMik7ZFtRXT1CYS5ub29wfSl9ZWxzZXt2YXIgQz1cclxuYShlKTtDLm9wZW4oZSxtLCEwKTtxKG4sZnVuY3Rpb24oYSxiKXtEKGEpJiZDLnNldFJlcXVlc3RIZWFkZXIoYixhKX0pO0Mub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoQyYmND09Qy5yZWFkeVN0YXRlKXt2YXIgYT1udWxsLGI9bnVsbDt2IT09ZiYmKGE9Qy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxiPVwicmVzcG9uc2VcImluIEM/Qy5yZXNwb25zZTpDLnJlc3BvbnNlVGV4dCk7SChsLHZ8fEMuc3RhdHVzLGIsYSl9fTtyJiYoQy53aXRoQ3JlZGVudGlhbHM9ITApO2lmKEYpdHJ5e0MucmVzcG9uc2VUeXBlPUZ9Y2F0Y2gocyl7aWYoXCJqc29uXCIhPT1GKXRocm93IHM7fUMuc2VuZChrfHxudWxsKX1pZigwPHApdmFyIEk9YyhBLHApO2Vsc2UgcCYmcC50aGVuJiZwLnRoZW4oQSl9fWZ1bmN0aW9uIHBkKCl7dmFyIGI9XCJ7e1wiLGE9XCJ9fVwiO3RoaXMuc3RhcnRTeW1ib2w9ZnVuY3Rpb24oYSl7cmV0dXJuIGE/KGI9YSx0aGlzKTpifTt0aGlzLmVuZFN5bWJvbD1mdW5jdGlvbihiKXtyZXR1cm4gYj9cclxuKGE9Yix0aGlzKTphfTt0aGlzLiRnZXQ9W1wiJHBhcnNlXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJHNjZVwiLGZ1bmN0aW9uKGMsZCxlKXtmdW5jdGlvbiBnKGcsayxsKXtmb3IodmFyIG4scCxyPTAsRj1bXSxBPWcubGVuZ3RoLEg9ITEsdj1bXTtyPEE7KS0xIT0obj1nLmluZGV4T2YoYixyKSkmJi0xIT0ocD1nLmluZGV4T2YoYSxuK2YpKT8ociE9biYmRi5wdXNoKGcuc3Vic3RyaW5nKHIsbikpLEYucHVzaChyPWMoSD1nLnN1YnN0cmluZyhuK2YscCkpKSxyLmV4cD1ILHI9cCtoLEg9ITApOihyIT1BJiZGLnB1c2goZy5zdWJzdHJpbmcocikpLHI9QSk7KEE9Ri5sZW5ndGgpfHwoRi5wdXNoKFwiXCIpLEE9MSk7aWYobCYmMTxGLmxlbmd0aCl0aHJvdyBvYyhcIm5vY29uY2F0XCIsZyk7aWYoIWt8fEgpcmV0dXJuIHYubGVuZ3RoPUEscj1mdW5jdGlvbihhKXt0cnl7Zm9yKHZhciBiPTAsYz1BLGY7YjxjO2IrKylcImZ1bmN0aW9uXCI9PXR5cGVvZihmPUZbYl0pJiYoZj1mKGEpLGY9bD9lLmdldFRydXN0ZWQobCxcclxuZik6ZS52YWx1ZU9mKGYpLG51bGw9PT1mfHx1KGYpP2Y9XCJcIjpcInN0cmluZ1wiIT10eXBlb2YgZiYmKGY9cGEoZikpKSx2W2JdPWY7cmV0dXJuIHYuam9pbihcIlwiKX1jYXRjaChrKXthPW9jKFwiaW50ZXJyXCIsZyxrLnRvU3RyaW5nKCkpLGQoYSl9fSxyLmV4cD1nLHIucGFydHM9RixyfXZhciBmPWIubGVuZ3RoLGg9YS5sZW5ndGg7Zy5zdGFydFN5bWJvbD1mdW5jdGlvbigpe3JldHVybiBifTtnLmVuZFN5bWJvbD1mdW5jdGlvbigpe3JldHVybiBhfTtyZXR1cm4gZ31dfWZ1bmN0aW9uIHFkKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiR3aW5kb3dcIixcIiRxXCIsZnVuY3Rpb24oYixhLGMpe2Z1bmN0aW9uIGQoZCxmLGgsbSl7dmFyIGs9YS5zZXRJbnRlcnZhbCxsPWEuY2xlYXJJbnRlcnZhbCxuPWMuZGVmZXIoKSxwPW4ucHJvbWlzZSxyPTAsRj1EKG0pJiYhbTtoPUQoaCk/aDowO3AudGhlbihudWxsLG51bGwsZCk7cC4kJGludGVydmFsSWQ9ayhmdW5jdGlvbigpe24ubm90aWZ5KHIrKyk7XHJcbjA8aCYmcj49aCYmKG4ucmVzb2x2ZShyKSxsKHAuJCRpbnRlcnZhbElkKSxkZWxldGUgZVtwLiQkaW50ZXJ2YWxJZF0pO0Z8fGIuJGFwcGx5KCl9LGYpO2VbcC4kJGludGVydmFsSWRdPW47cmV0dXJuIHB9dmFyIGU9e307ZC5jYW5jZWw9ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEuJCRpbnRlcnZhbElkIGluIGU/KGVbYS4kJGludGVydmFsSWRdLnJlamVjdChcImNhbmNlbGVkXCIpLGNsZWFySW50ZXJ2YWwoYS4kJGludGVydmFsSWQpLGRlbGV0ZSBlW2EuJCRpbnRlcnZhbElkXSwhMCk6ITF9O3JldHVybiBkfV19ZnVuY3Rpb24gcmQoKXt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm57aWQ6XCJlbi11c1wiLE5VTUJFUl9GT1JNQVRTOntERUNJTUFMX1NFUDpcIi5cIixHUk9VUF9TRVA6XCIsXCIsUEFUVEVSTlM6W3ttaW5JbnQ6MSxtaW5GcmFjOjAsbWF4RnJhYzozLHBvc1ByZTpcIlwiLHBvc1N1ZjpcIlwiLG5lZ1ByZTpcIi1cIixuZWdTdWY6XCJcIixnU2l6ZTozLGxnU2l6ZTozfSx7bWluSW50OjEsbWluRnJhYzoyLFxyXG5tYXhGcmFjOjIscG9zUHJlOlwiXFx1MDBhNFwiLHBvc1N1ZjpcIlwiLG5lZ1ByZTpcIihcXHUwMGE0XCIsbmVnU3VmOlwiKVwiLGdTaXplOjMsbGdTaXplOjN9XSxDVVJSRU5DWV9TWU06XCIkXCJ9LERBVEVUSU1FX0ZPUk1BVFM6e01PTlRIOlwiSmFudWFyeSBGZWJydWFyeSBNYXJjaCBBcHJpbCBNYXkgSnVuZSBKdWx5IEF1Z3VzdCBTZXB0ZW1iZXIgT2N0b2JlciBOb3ZlbWJlciBEZWNlbWJlclwiLnNwbGl0KFwiIFwiKSxTSE9SVE1PTlRIOlwiSmFuIEZlYiBNYXIgQXByIE1heSBKdW4gSnVsIEF1ZyBTZXAgT2N0IE5vdiBEZWNcIi5zcGxpdChcIiBcIiksREFZOlwiU3VuZGF5IE1vbmRheSBUdWVzZGF5IFdlZG5lc2RheSBUaHVyc2RheSBGcmlkYXkgU2F0dXJkYXlcIi5zcGxpdChcIiBcIiksU0hPUlREQVk6XCJTdW4gTW9uIFR1ZSBXZWQgVGh1IEZyaSBTYXRcIi5zcGxpdChcIiBcIiksQU1QTVM6W1wiQU1cIixcIlBNXCJdLG1lZGl1bTpcIk1NTSBkLCB5IGg6bW06c3MgYVwiLFwic2hvcnRcIjpcIk0vZC95eSBoOm1tIGFcIixmdWxsRGF0ZTpcIkVFRUUsIE1NTU0gZCwgeVwiLFxyXG5sb25nRGF0ZTpcIk1NTU0gZCwgeVwiLG1lZGl1bURhdGU6XCJNTU0gZCwgeVwiLHNob3J0RGF0ZTpcIk0vZC95eVwiLG1lZGl1bVRpbWU6XCJoOm1tOnNzIGFcIixzaG9ydFRpbWU6XCJoOm1tIGFcIn0scGx1cmFsQ2F0OmZ1bmN0aW9uKGIpe3JldHVybiAxPT09Yj9cIm9uZVwiOlwib3RoZXJcIn19fX1mdW5jdGlvbiBwYyhiKXtiPWIuc3BsaXQoXCIvXCIpO2Zvcih2YXIgYT1iLmxlbmd0aDthLS07KWJbYV09c2IoYlthXSk7cmV0dXJuIGIuam9pbihcIi9cIil9ZnVuY3Rpb24gcWMoYixhLGMpe2I9eGEoYixjKTthLiQkcHJvdG9jb2w9Yi5wcm90b2NvbDthLiQkaG9zdD1iLmhvc3RuYW1lO2EuJCRwb3J0PVYoYi5wb3J0KXx8c2RbYi5wcm90b2NvbF18fG51bGx9ZnVuY3Rpb24gcmMoYixhLGMpe3ZhciBkPVwiL1wiIT09Yi5jaGFyQXQoMCk7ZCYmKGI9XCIvXCIrYik7Yj14YShiLGMpO2EuJCRwYXRoPWRlY29kZVVSSUNvbXBvbmVudChkJiZcIi9cIj09PWIucGF0aG5hbWUuY2hhckF0KDApP2IucGF0aG5hbWUuc3Vic3RyaW5nKDEpOlxyXG5iLnBhdGhuYW1lKTthLiQkc2VhcmNoPVZiKGIuc2VhcmNoKTthLiQkaGFzaD1kZWNvZGVVUklDb21wb25lbnQoYi5oYXNoKTthLiQkcGF0aCYmXCIvXCIhPWEuJCRwYXRoLmNoYXJBdCgwKSYmKGEuJCRwYXRoPVwiL1wiK2EuJCRwYXRoKX1mdW5jdGlvbiBuYShiLGEpe2lmKDA9PT1hLmluZGV4T2YoYikpcmV0dXJuIGEuc3Vic3RyKGIubGVuZ3RoKX1mdW5jdGlvbiBXYShiKXt2YXIgYT1iLmluZGV4T2YoXCIjXCIpO3JldHVybi0xPT1hP2I6Yi5zdWJzdHIoMCxhKX1mdW5jdGlvbiBGYihiKXtyZXR1cm4gYi5zdWJzdHIoMCxXYShiKS5sYXN0SW5kZXhPZihcIi9cIikrMSl9ZnVuY3Rpb24gc2MoYixhKXt0aGlzLiQkaHRtbDU9ITA7YT1hfHxcIlwiO3ZhciBjPUZiKGIpO3FjKGIsdGhpcyxiKTt0aGlzLiQkcGFyc2U9ZnVuY3Rpb24oYSl7dmFyIGU9bmEoYyxhKTtpZighdyhlKSl0aHJvdyBHYihcImlwdGhwcmZ4XCIsYSxjKTtyYyhlLHRoaXMsYik7dGhpcy4kJHBhdGh8fCh0aGlzLiQkcGF0aD1cIi9cIik7dGhpcy4kJGNvbXBvc2UoKX07XHJcbnRoaXMuJCRjb21wb3NlPWZ1bmN0aW9uKCl7dmFyIGE9V2IodGhpcy4kJHNlYXJjaCksYj10aGlzLiQkaGFzaD9cIiNcIitzYih0aGlzLiQkaGFzaCk6XCJcIjt0aGlzLiQkdXJsPXBjKHRoaXMuJCRwYXRoKSsoYT9cIj9cIithOlwiXCIpK2I7dGhpcy4kJGFic1VybD1jK3RoaXMuJCR1cmwuc3Vic3RyKDEpfTt0aGlzLiQkcmV3cml0ZT1mdW5jdGlvbihkKXt2YXIgZTtpZigoZT1uYShiLGQpKSE9PXMpcmV0dXJuIGQ9ZSwoZT1uYShhLGUpKSE9PXM/YysobmEoXCIvXCIsZSl8fGUpOmIrZDtpZigoZT1uYShjLGQpKSE9PXMpcmV0dXJuIGMrZTtpZihjPT1kK1wiL1wiKXJldHVybiBjfX1mdW5jdGlvbiBIYihiLGEpe3ZhciBjPUZiKGIpO3FjKGIsdGhpcyxiKTt0aGlzLiQkcGFyc2U9ZnVuY3Rpb24oZCl7dmFyIGU9bmEoYixkKXx8bmEoYyxkKSxlPVwiI1wiPT1lLmNoYXJBdCgwKT9uYShhLGUpOnRoaXMuJCRodG1sNT9lOlwiXCI7aWYoIXcoZSkpdGhyb3cgR2IoXCJpaHNocHJmeFwiLGQsYSk7cmMoZSx0aGlzLGIpO1xyXG5kPXRoaXMuJCRwYXRoO3ZhciBnPS9eXFwvPy4qPzooXFwvLiopLzswPT09ZS5pbmRleE9mKGIpJiYoZT1lLnJlcGxhY2UoYixcIlwiKSk7Zy5leGVjKGUpfHwoZD0oZT1nLmV4ZWMoZCkpP2VbMV06ZCk7dGhpcy4kJHBhdGg9ZDt0aGlzLiQkY29tcG9zZSgpfTt0aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBjPVdiKHRoaXMuJCRzZWFyY2gpLGU9dGhpcy4kJGhhc2g/XCIjXCIrc2IodGhpcy4kJGhhc2gpOlwiXCI7dGhpcy4kJHVybD1wYyh0aGlzLiQkcGF0aCkrKGM/XCI/XCIrYzpcIlwiKStlO3RoaXMuJCRhYnNVcmw9YisodGhpcy4kJHVybD9hK3RoaXMuJCR1cmw6XCJcIil9O3RoaXMuJCRyZXdyaXRlPWZ1bmN0aW9uKGEpe2lmKFdhKGIpPT1XYShhKSlyZXR1cm4gYX19ZnVuY3Rpb24gdGMoYixhKXt0aGlzLiQkaHRtbDU9ITA7SGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBjPUZiKGIpO3RoaXMuJCRyZXdyaXRlPWZ1bmN0aW9uKGQpe3ZhciBlO2lmKGI9PVdhKGQpKXJldHVybiBkO2lmKGU9bmEoYyxcclxuZCkpcmV0dXJuIGIrYStlO2lmKGM9PT1kK1wiL1wiKXJldHVybiBjfX1mdW5jdGlvbiBpYihiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tiXX19ZnVuY3Rpb24gdWMoYixhKXtyZXR1cm4gZnVuY3Rpb24oYyl7aWYodShjKSlyZXR1cm4gdGhpc1tiXTt0aGlzW2JdPWEoYyk7dGhpcy4kJGNvbXBvc2UoKTtyZXR1cm4gdGhpc319ZnVuY3Rpb24gdGQoKXt2YXIgYj1cIlwiLGE9ITE7dGhpcy5oYXNoUHJlZml4PWZ1bmN0aW9uKGEpe3JldHVybiBEKGEpPyhiPWEsdGhpcyk6Yn07dGhpcy5odG1sNU1vZGU9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGE9Yix0aGlzKTphfTt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJGJyb3dzZXJcIixcIiRzbmlmZmVyXCIsXCIkcm9vdEVsZW1lbnRcIixmdW5jdGlvbihjLGQsZSxnKXtmdW5jdGlvbiBmKGEpe2MuJGJyb2FkY2FzdChcIiRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NcIixoLmFic1VybCgpLGEpfXZhciBoLG09ZC5iYXNlSHJlZigpLGs9ZC51cmwoKTtcclxuYT8obT1rLnN1YnN0cmluZygwLGsuaW5kZXhPZihcIi9cIixrLmluZGV4T2YoXCIvL1wiKSsyKSkrKG18fFwiL1wiKSxlPWUuaGlzdG9yeT9zYzp0Yyk6KG09V2EoayksZT1IYik7aD1uZXcgZShtLFwiI1wiK2IpO2guJCRwYXJzZShoLiQkcmV3cml0ZShrKSk7Zy5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7aWYoIWEuY3RybEtleSYmIWEubWV0YUtleSYmMiE9YS53aGljaCl7Zm9yKHZhciBiPXooYS50YXJnZXQpO1wiYVwiIT09eChiWzBdLm5vZGVOYW1lKTspaWYoYlswXT09PWdbMF18fCEoYj1iLnBhcmVudCgpKVswXSlyZXR1cm47dmFyIGU9Yi5wcm9wKFwiaHJlZlwiKTtXKGUpJiZcIltvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddXCI9PT1lLnRvU3RyaW5nKCkmJihlPXhhKGUuYW5pbVZhbCkuaHJlZik7dmFyIGY9aC4kJHJld3JpdGUoZSk7ZSYmKCFiLmF0dHIoXCJ0YXJnZXRcIikmJmYmJiFhLmlzRGVmYXVsdFByZXZlbnRlZCgpKSYmKGEucHJldmVudERlZmF1bHQoKSxmIT1kLnVybCgpJiYoaC4kJHBhcnNlKGYpLFxyXG5jLiRhcHBseSgpLFAuYW5ndWxhcltcImZmLTY4NDIwOC1wcmV2ZW50RGVmYXVsdFwiXT0hMCkpfX0pO2guYWJzVXJsKCkhPWsmJmQudXJsKGguYWJzVXJsKCksITApO2Qub25VcmxDaGFuZ2UoZnVuY3Rpb24oYSl7aC5hYnNVcmwoKSE9YSYmKGMuJGV2YWxBc3luYyhmdW5jdGlvbigpe3ZhciBiPWguYWJzVXJsKCk7aC4kJHBhcnNlKGEpO2MuJGJyb2FkY2FzdChcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XCIsYSxiKS5kZWZhdWx0UHJldmVudGVkPyhoLiQkcGFyc2UoYiksZC51cmwoYikpOmYoYil9KSxjLiQkcGhhc2V8fGMuJGRpZ2VzdCgpKX0pO3ZhciBsPTA7Yy4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYT1kLnVybCgpLGI9aC4kJHJlcGxhY2U7bCYmYT09aC5hYnNVcmwoKXx8KGwrKyxjLiRldmFsQXN5bmMoZnVuY3Rpb24oKXtjLiRicm9hZGNhc3QoXCIkbG9jYXRpb25DaGFuZ2VTdGFydFwiLGguYWJzVXJsKCksYSkuZGVmYXVsdFByZXZlbnRlZD9oLiQkcGFyc2UoYSk6KGQudXJsKGguYWJzVXJsKCksXHJcbmIpLGYoYSkpfSkpO2guJCRyZXBsYWNlPSExO3JldHVybiBsfSk7cmV0dXJuIGh9XX1mdW5jdGlvbiB1ZCgpe3ZhciBiPSEwLGE9dGhpczt0aGlzLmRlYnVnRW5hYmxlZD1mdW5jdGlvbihhKXtyZXR1cm4gRChhKT8oYj1hLHRoaXMpOmJ9O3RoaXMuJGdldD1bXCIkd2luZG93XCIsZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhKXthIGluc3RhbmNlb2YgRXJyb3ImJihhLnN0YWNrP2E9YS5tZXNzYWdlJiYtMT09PWEuc3RhY2suaW5kZXhPZihhLm1lc3NhZ2UpP1wiRXJyb3I6IFwiK2EubWVzc2FnZStcIlxcblwiK2Euc3RhY2s6YS5zdGFjazphLnNvdXJjZVVSTCYmKGE9YS5tZXNzYWdlK1wiXFxuXCIrYS5zb3VyY2VVUkwrXCI6XCIrYS5saW5lKSk7cmV0dXJuIGF9ZnVuY3Rpb24gZShhKXt2YXIgYj1jLmNvbnNvbGV8fHt9LGU9YlthXXx8Yi5sb2d8fEU7YT0hMTt0cnl7YT0hIWUuYXBwbHl9Y2F0Y2gobSl7fXJldHVybiBhP2Z1bmN0aW9uKCl7dmFyIGE9W107cShhcmd1bWVudHMsZnVuY3Rpb24oYil7YS5wdXNoKGQoYikpfSk7XHJcbnJldHVybiBlLmFwcGx5KGIsYSl9OmZ1bmN0aW9uKGEsYil7ZShhLG51bGw9PWI/XCJcIjpiKX19cmV0dXJue2xvZzplKFwibG9nXCIpLGluZm86ZShcImluZm9cIiksd2FybjplKFwid2FyblwiKSxlcnJvcjplKFwiZXJyb3JcIiksZGVidWc6ZnVuY3Rpb24oKXt2YXIgYz1lKFwiZGVidWdcIik7cmV0dXJuIGZ1bmN0aW9uKCl7YiYmYy5hcHBseShhLGFyZ3VtZW50cyl9fSgpfX1dfWZ1bmN0aW9uIGRhKGIsYSl7aWYoXCJjb25zdHJ1Y3RvclwiPT09Yil0aHJvdyB5YShcImlzZWNmbGRcIixhKTtyZXR1cm4gYn1mdW5jdGlvbiBYYShiLGEpe2lmKGIpe2lmKGIuY29uc3RydWN0b3I9PT1iKXRocm93IHlhKFwiaXNlY2ZuXCIsYSk7aWYoYi5kb2N1bWVudCYmYi5sb2NhdGlvbiYmYi5hbGVydCYmYi5zZXRJbnRlcnZhbCl0aHJvdyB5YShcImlzZWN3aW5kb3dcIixhKTtpZihiLmNoaWxkcmVuJiYoYi5ub2RlTmFtZXx8Yi5vbiYmYi5maW5kKSl0aHJvdyB5YShcImlzZWNkb21cIixhKTt9cmV0dXJuIGJ9ZnVuY3Rpb24gamIoYixcclxuYSxjLGQsZSl7ZT1lfHx7fTthPWEuc3BsaXQoXCIuXCIpO2Zvcih2YXIgZyxmPTA7MTxhLmxlbmd0aDtmKyspe2c9ZGEoYS5zaGlmdCgpLGQpO3ZhciBoPWJbZ107aHx8KGg9e30sYltnXT1oKTtiPWg7Yi50aGVuJiZlLnVud3JhcFByb21pc2VzJiYocWEoZCksXCIkJHZcImluIGJ8fGZ1bmN0aW9uKGEpe2EudGhlbihmdW5jdGlvbihiKXthLiQkdj1ifSl9KGIpLGIuJCR2PT09cyYmKGIuJCR2PXt9KSxiPWIuJCR2KX1nPWRhKGEuc2hpZnQoKSxkKTtyZXR1cm4gYltnXT1jfWZ1bmN0aW9uIHZjKGIsYSxjLGQsZSxnLGYpe2RhKGIsZyk7ZGEoYSxnKTtkYShjLGcpO2RhKGQsZyk7ZGEoZSxnKTtyZXR1cm4gZi51bndyYXBQcm9taXNlcz9mdW5jdGlvbihmLG0pe3ZhciBrPW0mJm0uaGFzT3duUHJvcGVydHkoYik/bTpmLGw7aWYobnVsbD09aylyZXR1cm4gazsoaz1rW2JdKSYmay50aGVuJiYocWEoZyksXCIkJHZcImluIGt8fChsPWssbC4kJHY9cyxsLnRoZW4oZnVuY3Rpb24oYSl7bC4kJHY9YX0pKSxcclxuaz1rLiQkdik7aWYoIWEpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gczsoaz1rW2FdKSYmay50aGVuJiYocWEoZyksXCIkJHZcImluIGt8fChsPWssbC4kJHY9cyxsLnRoZW4oZnVuY3Rpb24oYSl7bC4kJHY9YX0pKSxrPWsuJCR2KTtpZighYylyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzOyhrPWtbY10pJiZrLnRoZW4mJihxYShnKSxcIiQkdlwiaW4ga3x8KGw9ayxsLiQkdj1zLGwudGhlbihmdW5jdGlvbihhKXtsLiQkdj1hfSkpLGs9ay4kJHYpO2lmKCFkKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7KGs9a1tkXSkmJmsudGhlbiYmKHFhKGcpLFwiJCR2XCJpbiBrfHwobD1rLGwuJCR2PXMsbC50aGVuKGZ1bmN0aW9uKGEpe2wuJCR2PWF9KSksaz1rLiQkdik7aWYoIWUpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gczsoaz1rW2VdKSYmay50aGVuJiYocWEoZyksXCIkJHZcImluIGt8fChsPWssbC4kJHY9cyxsLnRoZW4oZnVuY3Rpb24oYSl7bC4kJHY9YX0pKSxrPWsuJCR2KTtcclxucmV0dXJuIGt9OmZ1bmN0aW9uKGcsZil7dmFyIGs9ZiYmZi5oYXNPd25Qcm9wZXJ0eShiKT9mOmc7aWYobnVsbD09aylyZXR1cm4gaztrPWtbYl07aWYoIWEpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbYV07aWYoIWMpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbY107aWYoIWQpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbZF07cmV0dXJuIGU/bnVsbD09az9zOms9a1tlXTprfX1mdW5jdGlvbiB2ZChiLGEpe2RhKGIsYSk7cmV0dXJuIGZ1bmN0aW9uKGEsZCl7cmV0dXJuIG51bGw9PWE/czooZCYmZC5oYXNPd25Qcm9wZXJ0eShiKT9kOmEpW2JdfX1mdW5jdGlvbiB3ZChiLGEsYyl7ZGEoYixjKTtkYShhLGMpO3JldHVybiBmdW5jdGlvbihjLGUpe2lmKG51bGw9PWMpcmV0dXJuIHM7Yz0oZSYmZS5oYXNPd25Qcm9wZXJ0eShiKT9lOmMpW2JdO3JldHVybiBudWxsPT1jP3M6Y1thXX19ZnVuY3Rpb24gd2MoYixhLGMpe2lmKEliLmhhc093blByb3BlcnR5KGIpKXJldHVybiBJYltiXTtcclxudmFyIGQ9Yi5zcGxpdChcIi5cIiksZT1kLmxlbmd0aCxnO2lmKGEudW53cmFwUHJvbWlzZXN8fDEhPT1lKWlmKGEudW53cmFwUHJvbWlzZXN8fDIhPT1lKWlmKGEuY3NwKWc9Nj5lP3ZjKGRbMF0sZFsxXSxkWzJdLGRbM10sZFs0XSxjLGEpOmZ1bmN0aW9uKGIsZyl7dmFyIGY9MCxoO2RvIGg9dmMoZFtmKytdLGRbZisrXSxkW2YrK10sZFtmKytdLGRbZisrXSxjLGEpKGIsZyksZz1zLGI9aDt3aGlsZShmPGUpO3JldHVybiBofTtlbHNle3ZhciBmPVwidmFyIHA7XFxuXCI7cShkLGZ1bmN0aW9uKGIsZCl7ZGEoYixjKTtmKz1cImlmKHMgPT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDtcXG5zPVwiKyhkP1wic1wiOicoKGsmJmsuaGFzT3duUHJvcGVydHkoXCInK2IrJ1wiKSk/azpzKScpKydbXCInK2IrJ1wiXTtcXG4nKyhhLnVud3JhcFByb21pc2VzPydpZiAocyAmJiBzLnRoZW4pIHtcXG4gcHcoXCInK2MucmVwbGFjZSgvKFtcIlxcclxcbl0pL2csXCJcXFxcJDFcIikrJ1wiKTtcXG4gaWYgKCEoXCIkJHZcIiBpbiBzKSkge1xcbiBwPXM7XFxuIHAuJCR2ID0gdW5kZWZpbmVkO1xcbiBwLnRoZW4oZnVuY3Rpb24odikge3AuJCR2PXY7fSk7XFxufVxcbiBzPXMuJCR2XFxufVxcbic6XHJcblwiXCIpfSk7dmFyIGY9ZitcInJldHVybiBzO1wiLGg9bmV3IEZ1bmN0aW9uKFwic1wiLFwia1wiLFwicHdcIixmKTtoLnRvU3RyaW5nPVkoZik7Zz1hLnVud3JhcFByb21pc2VzP2Z1bmN0aW9uKGEsYil7cmV0dXJuIGgoYSxiLHFhKX06aH1lbHNlIGc9d2QoZFswXSxkWzFdLGMpO2Vsc2UgZz12ZChkWzBdLGMpO1wiaGFzT3duUHJvcGVydHlcIiE9PWImJihJYltiXT1nKTtyZXR1cm4gZ31mdW5jdGlvbiB4ZCgpe3ZhciBiPXt9LGE9e2NzcDohMSx1bndyYXBQcm9taXNlczohMSxsb2dQcm9taXNlV2FybmluZ3M6ITB9O3RoaXMudW53cmFwUHJvbWlzZXM9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGEudW53cmFwUHJvbWlzZXM9ISFiLHRoaXMpOmEudW53cmFwUHJvbWlzZXN9O3RoaXMubG9nUHJvbWlzZVdhcm5pbmdzPWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhLmxvZ1Byb21pc2VXYXJuaW5ncz1iLHRoaXMpOmEubG9nUHJvbWlzZVdhcm5pbmdzfTt0aGlzLiRnZXQ9W1wiJGZpbHRlclwiLFwiJHNuaWZmZXJcIixcclxuXCIkbG9nXCIsZnVuY3Rpb24oYyxkLGUpe2EuY3NwPWQuY3NwO3FhPWZ1bmN0aW9uKGIpe2EubG9nUHJvbWlzZVdhcm5pbmdzJiYheGMuaGFzT3duUHJvcGVydHkoYikmJih4Y1tiXT0hMCxlLndhcm4oXCJbJHBhcnNlXSBQcm9taXNlIGZvdW5kIGluIHRoZSBleHByZXNzaW9uIGBcIitiK1wiYC4gQXV0b21hdGljIHVud3JhcHBpbmcgb2YgcHJvbWlzZXMgaW4gQW5ndWxhciBleHByZXNzaW9ucyBpcyBkZXByZWNhdGVkLlwiKSl9O3JldHVybiBmdW5jdGlvbihkKXt2YXIgZTtzd2l0Y2godHlwZW9mIGQpe2Nhc2UgXCJzdHJpbmdcIjppZihiLmhhc093blByb3BlcnR5KGQpKXJldHVybiBiW2RdO2U9bmV3IEpiKGEpO2U9KG5ldyBZYShlLGMsYSkpLnBhcnNlKGQsITEpO1wiaGFzT3duUHJvcGVydHlcIiE9PWQmJihiW2RdPWUpO3JldHVybiBlO2Nhc2UgXCJmdW5jdGlvblwiOnJldHVybiBkO2RlZmF1bHQ6cmV0dXJuIEV9fX1dfWZ1bmN0aW9uIHlkKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXHJcbmZ1bmN0aW9uKGIsYSl7cmV0dXJuIHpkKGZ1bmN0aW9uKGEpe2IuJGV2YWxBc3luYyhhKX0sYSl9XX1mdW5jdGlvbiB6ZChiLGEpe2Z1bmN0aW9uIGMoYSl7cmV0dXJuIGF9ZnVuY3Rpb24gZChhKXtyZXR1cm4gZihhKX12YXIgZT1mdW5jdGlvbigpe3ZhciBmPVtdLGssbDtyZXR1cm4gbD17cmVzb2x2ZTpmdW5jdGlvbihhKXtpZihmKXt2YXIgYz1mO2Y9cztrPWcoYSk7Yy5sZW5ndGgmJmIoZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wLGQ9Yy5sZW5ndGg7YjxkO2IrKylhPWNbYl0say50aGVuKGFbMF0sYVsxXSxhWzJdKX0pfX0scmVqZWN0OmZ1bmN0aW9uKGEpe2wucmVzb2x2ZShoKGEpKX0sbm90aWZ5OmZ1bmN0aW9uKGEpe2lmKGYpe3ZhciBjPWY7Zi5sZW5ndGgmJmIoZnVuY3Rpb24oKXtmb3IodmFyIGIsZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKyliPWNbZF0sYlsyXShhKX0pfX0scHJvbWlzZTp7dGhlbjpmdW5jdGlvbihiLGcsaCl7dmFyIGw9ZSgpLEE9ZnVuY3Rpb24oZCl7dHJ5e2wucmVzb2x2ZSgoTShiKT9cclxuYjpjKShkKSl9Y2F0Y2goZSl7bC5yZWplY3QoZSksYShlKX19LEg9ZnVuY3Rpb24oYil7dHJ5e2wucmVzb2x2ZSgoTShnKT9nOmQpKGIpKX1jYXRjaChjKXtsLnJlamVjdChjKSxhKGMpfX0sdj1mdW5jdGlvbihiKXt0cnl7bC5ub3RpZnkoKE0oaCk/aDpjKShiKSl9Y2F0Y2goZCl7YShkKX19O2Y/Zi5wdXNoKFtBLEgsdl0pOmsudGhlbihBLEgsdik7cmV0dXJuIGwucHJvbWlzZX0sXCJjYXRjaFwiOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnRoZW4obnVsbCxhKX0sXCJmaW5hbGx5XCI6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGMpe3ZhciBkPWUoKTtjP2QucmVzb2x2ZShhKTpkLnJlamVjdChhKTtyZXR1cm4gZC5wcm9taXNlfWZ1bmN0aW9uIGQoZSxnKXt2YXIgZj1udWxsO3RyeXtmPShhfHxjKSgpfWNhdGNoKGspe3JldHVybiBiKGssITEpfXJldHVybiBmJiZNKGYudGhlbik/Zi50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIoZSxnKX0sZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSwhMSl9KTpcclxuYihlLGcpfXJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGQoYSwhMCl9LGZ1bmN0aW9uKGEpe3JldHVybiBkKGEsITEpfSl9fX19LGc9ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJk0oYS50aGVuKT9hOnt0aGVuOmZ1bmN0aW9uKGMpe3ZhciBkPWUoKTtiKGZ1bmN0aW9uKCl7ZC5yZXNvbHZlKGMoYSkpfSk7cmV0dXJuIGQucHJvbWlzZX19fSxmPWZ1bmN0aW9uKGEpe3ZhciBiPWUoKTtiLnJlamVjdChhKTtyZXR1cm4gYi5wcm9taXNlfSxoPWZ1bmN0aW9uKGMpe3JldHVybnt0aGVuOmZ1bmN0aW9uKGcsZil7dmFyIGg9ZSgpO2IoZnVuY3Rpb24oKXt0cnl7aC5yZXNvbHZlKChNKGYpP2Y6ZCkoYykpfWNhdGNoKGIpe2gucmVqZWN0KGIpLGEoYil9fSk7cmV0dXJuIGgucHJvbWlzZX19fTtyZXR1cm57ZGVmZXI6ZSxyZWplY3Q6Zix3aGVuOmZ1bmN0aW9uKGgsayxsLG4pe3ZhciBwPWUoKSxyLEY9ZnVuY3Rpb24oYil7dHJ5e3JldHVybihNKGspP2s6YykoYil9Y2F0Y2goZCl7cmV0dXJuIGEoZCksXHJcbmYoZCl9fSxBPWZ1bmN0aW9uKGIpe3RyeXtyZXR1cm4oTShsKT9sOmQpKGIpfWNhdGNoKGMpe3JldHVybiBhKGMpLGYoYyl9fSxxPWZ1bmN0aW9uKGIpe3RyeXtyZXR1cm4oTShuKT9uOmMpKGIpfWNhdGNoKGQpe2EoZCl9fTtiKGZ1bmN0aW9uKCl7ZyhoKS50aGVuKGZ1bmN0aW9uKGEpe3J8fChyPSEwLHAucmVzb2x2ZShnKGEpLnRoZW4oRixBLHEpKSl9LGZ1bmN0aW9uKGEpe3J8fChyPSEwLHAucmVzb2x2ZShBKGEpKSl9LGZ1bmN0aW9uKGEpe3J8fHAubm90aWZ5KHEoYSkpfSl9KTtyZXR1cm4gcC5wcm9taXNlfSxhbGw6ZnVuY3Rpb24oYSl7dmFyIGI9ZSgpLGM9MCxkPUwoYSk/W106e307cShhLGZ1bmN0aW9uKGEsZSl7YysrO2coYSkudGhlbihmdW5jdGlvbihhKXtkLmhhc093blByb3BlcnR5KGUpfHwoZFtlXT1hLC0tY3x8Yi5yZXNvbHZlKGQpKX0sZnVuY3Rpb24oYSl7ZC5oYXNPd25Qcm9wZXJ0eShlKXx8Yi5yZWplY3QoYSl9KX0pOzA9PT1jJiZiLnJlc29sdmUoZCk7cmV0dXJuIGIucHJvbWlzZX19fVxyXG5mdW5jdGlvbiBBZCgpe3ZhciBiPTEwLGE9dChcIiRyb290U2NvcGVcIiksYz1udWxsO3RoaXMuZGlnZXN0VHRsPWZ1bmN0aW9uKGEpe2FyZ3VtZW50cy5sZW5ndGgmJihiPWEpO3JldHVybiBifTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJHBhcnNlXCIsXCIkYnJvd3NlclwiLGZ1bmN0aW9uKGQsZSxnLGYpe2Z1bmN0aW9uIGgoKXt0aGlzLiRpZD1aYSgpO3RoaXMuJCRwaGFzZT10aGlzLiRwYXJlbnQ9dGhpcy4kJHdhdGNoZXJzPXRoaXMuJCRuZXh0U2libGluZz10aGlzLiQkcHJldlNpYmxpbmc9dGhpcy4kJGNoaWxkSGVhZD10aGlzLiQkY2hpbGRUYWlsPW51bGw7dGhpc1tcInRoaXNcIl09dGhpcy4kcm9vdD10aGlzO3RoaXMuJCRkZXN0cm95ZWQ9ITE7dGhpcy4kJGFzeW5jUXVldWU9W107dGhpcy4kJHBvc3REaWdlc3RRdWV1ZT1bXTt0aGlzLiQkbGlzdGVuZXJzPXt9O3RoaXMuJCRsaXN0ZW5lckNvdW50PXt9O3RoaXMuJCRpc29sYXRlQmluZGluZ3M9e319XHJcbmZ1bmN0aW9uIG0oYil7aWYocC4kJHBoYXNlKXRocm93IGEoXCJpbnByb2dcIixwLiQkcGhhc2UpO3AuJCRwaGFzZT1ifWZ1bmN0aW9uIGsoYSxiKXt2YXIgYz1nKGEpO1BhKGMsYik7cmV0dXJuIGN9ZnVuY3Rpb24gbChhLGIsYyl7ZG8gYS4kJGxpc3RlbmVyQ291bnRbY10tPWIsMD09PWEuJCRsaXN0ZW5lckNvdW50W2NdJiZkZWxldGUgYS4kJGxpc3RlbmVyQ291bnRbY107d2hpbGUoYT1hLiRwYXJlbnQpfWZ1bmN0aW9uIG4oKXt9aC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmgsJG5ldzpmdW5jdGlvbihhKXthPyhhPW5ldyBoLGEuJHJvb3Q9dGhpcy4kcm9vdCxhLiQkYXN5bmNRdWV1ZT10aGlzLiQkYXN5bmNRdWV1ZSxhLiQkcG9zdERpZ2VzdFF1ZXVlPXRoaXMuJCRwb3N0RGlnZXN0UXVldWUpOihhPWZ1bmN0aW9uKCl7fSxhLnByb3RvdHlwZT10aGlzLGE9bmV3IGEsYS4kaWQ9WmEoKSk7YVtcInRoaXNcIl09YTthLiQkbGlzdGVuZXJzPXt9O2EuJCRsaXN0ZW5lckNvdW50PXt9O2EuJHBhcmVudD1cclxudGhpczthLiQkd2F0Y2hlcnM9YS4kJG5leHRTaWJsaW5nPWEuJCRjaGlsZEhlYWQ9YS4kJGNoaWxkVGFpbD1udWxsO2EuJCRwcmV2U2libGluZz10aGlzLiQkY2hpbGRUYWlsO3RoaXMuJCRjaGlsZEhlYWQ/dGhpcy4kJGNoaWxkVGFpbD10aGlzLiQkY2hpbGRUYWlsLiQkbmV4dFNpYmxpbmc9YTp0aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9YTtyZXR1cm4gYX0sJHdhdGNoOmZ1bmN0aW9uKGEsYixkKXt2YXIgZT1rKGEsXCJ3YXRjaFwiKSxnPXRoaXMuJCR3YXRjaGVycyxmPXtmbjpiLGxhc3Q6bixnZXQ6ZSxleHA6YSxlcTohIWR9O2M9bnVsbDtpZighTShiKSl7dmFyIGg9ayhifHxFLFwibGlzdGVuZXJcIik7Zi5mbj1mdW5jdGlvbihhLGIsYyl7aChjKX19aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmUuY29uc3RhbnQpe3ZhciBtPWYuZm47Zi5mbj1mdW5jdGlvbihhLGIsYyl7bS5jYWxsKHRoaXMsYSxiLGMpO01hKGcsZil9fWd8fChnPXRoaXMuJCR3YXRjaGVycz1bXSk7Zy51bnNoaWZ0KGYpO1xyXG5yZXR1cm4gZnVuY3Rpb24oKXtNYShnLGYpO2M9bnVsbH19LCR3YXRjaENvbGxlY3Rpb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQsZSxmPTAsaD1nKGEpLGs9W10sbT17fSxsPTA7cmV0dXJuIHRoaXMuJHdhdGNoKGZ1bmN0aW9uKCl7ZT1oKGMpO3ZhciBhLGI7aWYoVyhlKSlpZihxYihlKSlmb3IoZCE9PWsmJihkPWssbD1kLmxlbmd0aD0wLGYrKyksYT1lLmxlbmd0aCxsIT09YSYmKGYrKyxkLmxlbmd0aD1sPWEpLGI9MDtiPGE7YisrKWRbYl0hPT1lW2JdJiYoZisrLGRbYl09ZVtiXSk7ZWxzZXtkIT09bSYmKGQ9bT17fSxsPTAsZisrKTthPTA7Zm9yKGIgaW4gZSllLmhhc093blByb3BlcnR5KGIpJiYoYSsrLGQuaGFzT3duUHJvcGVydHkoYik/ZFtiXSE9PWVbYl0mJihmKyssZFtiXT1lW2JdKToobCsrLGRbYl09ZVtiXSxmKyspKTtpZihsPmEpZm9yKGIgaW4gZisrLGQpZC5oYXNPd25Qcm9wZXJ0eShiKSYmIWUuaGFzT3duUHJvcGVydHkoYikmJihsLS0sZGVsZXRlIGRbYl0pfWVsc2UgZCE9PVxyXG5lJiYoZD1lLGYrKyk7cmV0dXJuIGZ9LGZ1bmN0aW9uKCl7YihlLGQsYyl9KX0sJGRpZ2VzdDpmdW5jdGlvbigpe3ZhciBkLGYsZyxoLGs9dGhpcy4kJGFzeW5jUXVldWUsbD10aGlzLiQkcG9zdERpZ2VzdFF1ZXVlLHEsQyxzPWIsSSxVPVtdLHQseixCO20oXCIkZGlnZXN0XCIpO2M9bnVsbDtkb3tDPSExO2ZvcihJPXRoaXM7ay5sZW5ndGg7KXt0cnl7Qj1rLnNoaWZ0KCksQi5zY29wZS4kZXZhbChCLmV4cHJlc3Npb24pfWNhdGNoKEQpe3AuJCRwaGFzZT1udWxsLGUoRCl9Yz1udWxsfWE6ZG97aWYoaD1JLiQkd2F0Y2hlcnMpZm9yKHE9aC5sZW5ndGg7cS0tOyl0cnl7aWYoZD1oW3FdKWlmKChmPWQuZ2V0KEkpKSE9PShnPWQubGFzdCkmJiEoZC5lcT90YShmLGcpOlwibnVtYmVyXCI9PXR5cGVvZiBmJiZcIm51bWJlclwiPT10eXBlb2YgZyYmaXNOYU4oZikmJmlzTmFOKGcpKSlDPSEwLGM9ZCxkLmxhc3Q9ZC5lcT8kKGYpOmYsZC5mbihmLGc9PT1uP2Y6ZyxJKSw1PnMmJih0PTQtcyxVW3RdfHxcclxuKFVbdF09W10pLHo9TShkLmV4cCk/XCJmbjogXCIrKGQuZXhwLm5hbWV8fGQuZXhwLnRvU3RyaW5nKCkpOmQuZXhwLHorPVwiOyBuZXdWYWw6IFwiK3BhKGYpK1wiOyBvbGRWYWw6IFwiK3BhKGcpLFVbdF0ucHVzaCh6KSk7ZWxzZSBpZihkPT09Yyl7Qz0hMTticmVhayBhfX1jYXRjaCh5KXtwLiQkcGhhc2U9bnVsbCxlKHkpfWlmKCEoaD1JLiQkY2hpbGRIZWFkfHxJIT09dGhpcyYmSS4kJG5leHRTaWJsaW5nKSlmb3IoO0khPT10aGlzJiYhKGg9SS4kJG5leHRTaWJsaW5nKTspST1JLiRwYXJlbnR9d2hpbGUoST1oKTtpZigoQ3x8ay5sZW5ndGgpJiYhcy0tKXRocm93IHAuJCRwaGFzZT1udWxsLGEoXCJpbmZkaWdcIixiLHBhKFUpKTt9d2hpbGUoQ3x8ay5sZW5ndGgpO2ZvcihwLiQkcGhhc2U9bnVsbDtsLmxlbmd0aDspdHJ5e2wuc2hpZnQoKSgpfWNhdGNoKHcpe2Uodyl9fSwkZGVzdHJveTpmdW5jdGlvbigpe2lmKCF0aGlzLiQkZGVzdHJveWVkKXt2YXIgYT10aGlzLiRwYXJlbnQ7dGhpcy4kYnJvYWRjYXN0KFwiJGRlc3Ryb3lcIik7XHJcbnRoaXMuJCRkZXN0cm95ZWQ9ITA7dGhpcyE9PXAmJihxKHRoaXMuJCRsaXN0ZW5lckNvdW50LGJiKG51bGwsbCx0aGlzKSksYS4kJGNoaWxkSGVhZD09dGhpcyYmKGEuJCRjaGlsZEhlYWQ9dGhpcy4kJG5leHRTaWJsaW5nKSxhLiQkY2hpbGRUYWlsPT10aGlzJiYoYS4kJGNoaWxkVGFpbD10aGlzLiQkcHJldlNpYmxpbmcpLHRoaXMuJCRwcmV2U2libGluZyYmKHRoaXMuJCRwcmV2U2libGluZy4kJG5leHRTaWJsaW5nPXRoaXMuJCRuZXh0U2libGluZyksdGhpcy4kJG5leHRTaWJsaW5nJiYodGhpcy4kJG5leHRTaWJsaW5nLiQkcHJldlNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nKSx0aGlzLiRwYXJlbnQ9dGhpcy4kJG5leHRTaWJsaW5nPXRoaXMuJCRwcmV2U2libGluZz10aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9bnVsbCl9fSwkZXZhbDpmdW5jdGlvbihhLGIpe3JldHVybiBnKGEpKHRoaXMsYil9LCRldmFsQXN5bmM6ZnVuY3Rpb24oYSl7cC4kJHBoYXNlfHxwLiQkYXN5bmNRdWV1ZS5sZW5ndGh8fFxyXG5mLmRlZmVyKGZ1bmN0aW9uKCl7cC4kJGFzeW5jUXVldWUubGVuZ3RoJiZwLiRkaWdlc3QoKX0pO3RoaXMuJCRhc3luY1F1ZXVlLnB1c2goe3Njb3BlOnRoaXMsZXhwcmVzc2lvbjphfSl9LCQkcG9zdERpZ2VzdDpmdW5jdGlvbihhKXt0aGlzLiQkcG9zdERpZ2VzdFF1ZXVlLnB1c2goYSl9LCRhcHBseTpmdW5jdGlvbihhKXt0cnl7cmV0dXJuIG0oXCIkYXBwbHlcIiksdGhpcy4kZXZhbChhKX1jYXRjaChiKXtlKGIpfWZpbmFsbHl7cC4kJHBoYXNlPW51bGw7dHJ5e3AuJGRpZ2VzdCgpfWNhdGNoKGMpe3Rocm93IGUoYyksYzt9fX0sJG9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy4kJGxpc3RlbmVyc1thXTtjfHwodGhpcy4kJGxpc3RlbmVyc1thXT1jPVtdKTtjLnB1c2goYik7dmFyIGQ9dGhpcztkbyBkLiQkbGlzdGVuZXJDb3VudFthXXx8KGQuJCRsaXN0ZW5lckNvdW50W2FdPTApLGQuJCRsaXN0ZW5lckNvdW50W2FdKys7d2hpbGUoZD1kLiRwYXJlbnQpO3ZhciBlPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKCl7Y1thYihjLFxyXG5iKV09bnVsbDtsKGUsMSxhKX19LCRlbWl0OmZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZCxmPXRoaXMsZz0hMSxoPXtuYW1lOmEsdGFyZ2V0U2NvcGU6ZixzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXtnPSEwfSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe2guZGVmYXVsdFByZXZlbnRlZD0hMH0sZGVmYXVsdFByZXZlbnRlZDohMX0saz1baF0uY29uY2F0KHVhLmNhbGwoYXJndW1lbnRzLDEpKSxtLGw7ZG97ZD1mLiQkbGlzdGVuZXJzW2FdfHxjO2guY3VycmVudFNjb3BlPWY7bT0wO2ZvcihsPWQubGVuZ3RoO208bDttKyspaWYoZFttXSl0cnl7ZFttXS5hcHBseShudWxsLGspfWNhdGNoKHApe2UocCl9ZWxzZSBkLnNwbGljZShtLDEpLG0tLSxsLS07aWYoZylicmVhaztmPWYuJHBhcmVudH13aGlsZShmKTtyZXR1cm4gaH0sJGJyb2FkY2FzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz10aGlzLGQ9dGhpcyxmPXtuYW1lOmEsdGFyZ2V0U2NvcGU6dGhpcyxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe2YuZGVmYXVsdFByZXZlbnRlZD1cclxuITB9LGRlZmF1bHRQcmV2ZW50ZWQ6ITF9LGc9W2ZdLmNvbmNhdCh1YS5jYWxsKGFyZ3VtZW50cywxKSksaCxrO2M9ZDspe2YuY3VycmVudFNjb3BlPWM7ZD1jLiQkbGlzdGVuZXJzW2FdfHxbXTtoPTA7Zm9yKGs9ZC5sZW5ndGg7aDxrO2grKylpZihkW2hdKXRyeXtkW2hdLmFwcGx5KG51bGwsZyl9Y2F0Y2gobSl7ZShtKX1lbHNlIGQuc3BsaWNlKGgsMSksaC0tLGstLTtpZighKGQ9Yy4kJGxpc3RlbmVyQ291bnRbYV0mJmMuJCRjaGlsZEhlYWR8fGMhPT10aGlzJiZjLiQkbmV4dFNpYmxpbmcpKWZvcig7YyE9PXRoaXMmJiEoZD1jLiQkbmV4dFNpYmxpbmcpOyljPWMuJHBhcmVudH1yZXR1cm4gZn19O3ZhciBwPW5ldyBoO3JldHVybiBwfV19ZnVuY3Rpb24gQmQoKXt2YXIgYj0vXlxccyooaHR0cHM/fGZ0cHxtYWlsdG98dGVsfGZpbGUpOi8sYT0vXlxccyooaHR0cHM/fGZ0cHxmaWxlKTp8ZGF0YTppbWFnZVxcLy87dGhpcy5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihhKXtyZXR1cm4gRChhKT9cclxuKGI9YSx0aGlzKTpifTt0aGlzLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlPWQ/YTpiLGc7aWYoIU58fDg8PU4paWYoZz14YShjKS5ocmVmLFwiXCIhPT1nJiYhZy5tYXRjaChlKSlyZXR1cm5cInVuc2FmZTpcIitnO3JldHVybiBjfX19ZnVuY3Rpb24gQ2QoYil7aWYoXCJzZWxmXCI9PT1iKXJldHVybiBiO2lmKHcoYikpe2lmKC0xPGIuaW5kZXhPZihcIioqKlwiKSl0aHJvdyByYShcIml3Y2FyZFwiLGIpO2I9Yi5yZXBsYWNlKC8oWy0oKVxcW1xcXXt9Kz8qLiRcXF58LDojPCFcXFxcXSkvZyxcIlxcXFwkMVwiKS5yZXBsYWNlKC9cXHgwOC9nLFwiXFxcXHgwOFwiKS5yZXBsYWNlKFwiXFxcXCpcXFxcKlwiLFwiLipcIikucmVwbGFjZShcIlxcXFwqXCIsXCJbXjovLj8mO10qXCIpO3JldHVybiBSZWdFeHAoXCJeXCIrYitcIiRcIil9aWYoJGEoYikpcmV0dXJuIFJlZ0V4cChcIl5cIitiLnNvdXJjZStcIiRcIik7XHJcbnRocm93IHJhKFwiaW1hdGNoZXJcIik7fWZ1bmN0aW9uIHljKGIpe3ZhciBhPVtdO0QoYikmJnEoYixmdW5jdGlvbihiKXthLnB1c2goQ2QoYikpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gRGQoKXt0aGlzLlNDRV9DT05URVhUUz1lYTt2YXIgYj1bXCJzZWxmXCJdLGE9W107dGhpcy5yZXNvdXJjZVVybFdoaXRlbGlzdD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj15YyhhKSk7cmV0dXJuIGJ9O3RoaXMucmVzb3VyY2VVcmxCbGFja2xpc3Q9ZnVuY3Rpb24oYil7YXJndW1lbnRzLmxlbmd0aCYmKGE9eWMoYikpO3JldHVybiBhfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhKXt2YXIgYj1mdW5jdGlvbihhKXt0aGlzLiQkdW53cmFwVHJ1c3RlZFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIGF9fTthJiYoYi5wcm90b3R5cGU9bmV3IGEpO2IucHJvdG90eXBlLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpfTtcclxuYi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpLnRvU3RyaW5nKCl9O3JldHVybiBifXZhciBlPWZ1bmN0aW9uKGEpe3Rocm93IHJhKFwidW5zYWZlXCIpO307Yy5oYXMoXCIkc2FuaXRpemVcIikmJihlPWMuZ2V0KFwiJHNhbml0aXplXCIpKTt2YXIgZz1kKCksZj17fTtmW2VhLkhUTUxdPWQoZyk7ZltlYS5DU1NdPWQoZyk7ZltlYS5VUkxdPWQoZyk7ZltlYS5KU109ZChnKTtmW2VhLlJFU09VUkNFX1VSTF09ZChmW2VhLlVSTF0pO3JldHVybnt0cnVzdEFzOmZ1bmN0aW9uKGEsYil7dmFyIGM9Zi5oYXNPd25Qcm9wZXJ0eShhKT9mW2FdOm51bGw7aWYoIWMpdGhyb3cgcmEoXCJpY29udGV4dFwiLGEsYik7aWYobnVsbD09PWJ8fGI9PT1zfHxcIlwiPT09YilyZXR1cm4gYjtpZihcInN0cmluZ1wiIT09dHlwZW9mIGIpdGhyb3cgcmEoXCJpdHlwZVwiLGEpO3JldHVybiBuZXcgYyhiKX0sZ2V0VHJ1c3RlZDpmdW5jdGlvbihjLGQpe2lmKG51bGw9PT1cclxuZHx8ZD09PXN8fFwiXCI9PT1kKXJldHVybiBkO3ZhciBnPWYuaGFzT3duUHJvcGVydHkoYyk/ZltjXTpudWxsO2lmKGcmJmQgaW5zdGFuY2VvZiBnKXJldHVybiBkLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCk7aWYoYz09PWVhLlJFU09VUkNFX1VSTCl7dmFyIGc9eGEoZC50b1N0cmluZygpKSxsLG4scD0hMTtsPTA7Zm9yKG49Yi5sZW5ndGg7bDxuO2wrKylpZihcInNlbGZcIj09PWJbbF0/RWIoZyk6YltsXS5leGVjKGcuaHJlZikpe3A9ITA7YnJlYWt9aWYocClmb3IobD0wLG49YS5sZW5ndGg7bDxuO2wrKylpZihcInNlbGZcIj09PWFbbF0/RWIoZyk6YVtsXS5leGVjKGcuaHJlZikpe3A9ITE7YnJlYWt9aWYocClyZXR1cm4gZDt0aHJvdyByYShcImluc2VjdXJsXCIsZC50b1N0cmluZygpKTt9aWYoYz09PWVhLkhUTUwpcmV0dXJuIGUoZCk7dGhyb3cgcmEoXCJ1bnNhZmVcIik7fSx2YWx1ZU9mOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgZz9hLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCk6YX19fV19XHJcbmZ1bmN0aW9uIEVkKCl7dmFyIGI9ITA7dGhpcy5lbmFibGVkPWZ1bmN0aW9uKGEpe2FyZ3VtZW50cy5sZW5ndGgmJihiPSEhYSk7cmV0dXJuIGJ9O3RoaXMuJGdldD1bXCIkcGFyc2VcIixcIiRzbmlmZmVyXCIsXCIkc2NlRGVsZWdhdGVcIixmdW5jdGlvbihhLGMsZCl7aWYoYiYmYy5tc2llJiY4PmMubXNpZURvY3VtZW50TW9kZSl0aHJvdyByYShcImllcXVpcmtzXCIpO3ZhciBlPSQoZWEpO2UuaXNFbmFibGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9O2UudHJ1c3RBcz1kLnRydXN0QXM7ZS5nZXRUcnVzdGVkPWQuZ2V0VHJ1c3RlZDtlLnZhbHVlT2Y9ZC52YWx1ZU9mO2J8fChlLnRydXN0QXM9ZS5nZXRUcnVzdGVkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGJ9LGUudmFsdWVPZj1BYSk7ZS5wYXJzZUFzPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9YShjKTtyZXR1cm4gZC5saXRlcmFsJiZkLmNvbnN0YW50P2Q6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZS5nZXRUcnVzdGVkKGIsZChhLGMpKX19O3ZhciBnPWUucGFyc2VBcyxcclxuZj1lLmdldFRydXN0ZWQsaD1lLnRydXN0QXM7cShlYSxmdW5jdGlvbihhLGIpe3ZhciBjPXgoYik7ZVtRYShcInBhcnNlX2FzX1wiK2MpXT1mdW5jdGlvbihiKXtyZXR1cm4gZyhhLGIpfTtlW1FhKFwiZ2V0X3RydXN0ZWRfXCIrYyldPWZ1bmN0aW9uKGIpe3JldHVybiBmKGEsYil9O2VbUWEoXCJ0cnVzdF9hc19cIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGgoYSxiKX19KTtyZXR1cm4gZX1dfWZ1bmN0aW9uIEZkKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGIsYSl7dmFyIGM9e30sZD1WKCgvYW5kcm9pZCAoXFxkKykvLmV4ZWMoeCgoYi5uYXZpZ2F0b3J8fHt9KS51c2VyQWdlbnQpKXx8W10pWzFdKSxlPS9Cb3hlZS9pLnRlc3QoKGIubmF2aWdhdG9yfHx7fSkudXNlckFnZW50KSxnPWFbMF18fHt9LGY9Zy5kb2N1bWVudE1vZGUsaCxtPS9eKE1venx3ZWJraXR8T3xtcykoPz1bQS1aXSkvLGs9Zy5ib2R5JiZnLmJvZHkuc3R5bGUsbD0hMSxuPSExO2lmKGspe2Zvcih2YXIgcCBpbiBrKWlmKGw9XHJcbm0uZXhlYyhwKSl7aD1sWzBdO2g9aC5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2guc3Vic3RyKDEpO2JyZWFrfWh8fChoPVwiV2Via2l0T3BhY2l0eVwiaW4gayYmXCJ3ZWJraXRcIik7bD0hIShcInRyYW5zaXRpb25cImluIGt8fGgrXCJUcmFuc2l0aW9uXCJpbiBrKTtuPSEhKFwiYW5pbWF0aW9uXCJpbiBrfHxoK1wiQW5pbWF0aW9uXCJpbiBrKTshZHx8bCYmbnx8KGw9dyhnLmJvZHkuc3R5bGUud2Via2l0VHJhbnNpdGlvbiksbj13KGcuYm9keS5zdHlsZS53ZWJraXRBbmltYXRpb24pKX1yZXR1cm57aGlzdG9yeTohKCFiLmhpc3Rvcnl8fCFiLmhpc3RvcnkucHVzaFN0YXRlfHw0PmR8fGUpLGhhc2hjaGFuZ2U6XCJvbmhhc2hjaGFuZ2VcImluIGImJighZnx8NzxmKSxoYXNFdmVudDpmdW5jdGlvbihhKXtpZihcImlucHV0XCI9PWEmJjk9PU4pcmV0dXJuITE7aWYodShjW2FdKSl7dmFyIGI9Zy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2NbYV09XCJvblwiK2EgaW4gYn1yZXR1cm4gY1thXX0sY3NwOlNiKCksdmVuZG9yUHJlZml4OmgsXHJcbnRyYW5zaXRpb25zOmwsYW5pbWF0aW9uczpuLGFuZHJvaWQ6ZCxtc2llOk4sbXNpZURvY3VtZW50TW9kZTpmfX1dfWZ1bmN0aW9uIEdkKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRicm93c2VyXCIsXCIkcVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixmdW5jdGlvbihiLGEsYyxkKXtmdW5jdGlvbiBlKGUsaCxtKXt2YXIgaz1jLmRlZmVyKCksbD1rLnByb21pc2Usbj1EKG0pJiYhbTtoPWEuZGVmZXIoZnVuY3Rpb24oKXt0cnl7ay5yZXNvbHZlKGUoKSl9Y2F0Y2goYSl7ay5yZWplY3QoYSksZChhKX1maW5hbGx5e2RlbGV0ZSBnW2wuJCR0aW1lb3V0SWRdfW58fGIuJGFwcGx5KCl9LGgpO2wuJCR0aW1lb3V0SWQ9aDtnW2hdPWs7cmV0dXJuIGx9dmFyIGc9e307ZS5jYW5jZWw9ZnVuY3Rpb24oYil7cmV0dXJuIGImJmIuJCR0aW1lb3V0SWQgaW4gZz8oZ1tiLiQkdGltZW91dElkXS5yZWplY3QoXCJjYW5jZWxlZFwiKSxkZWxldGUgZ1tiLiQkdGltZW91dElkXSxhLmRlZmVyLmNhbmNlbChiLiQkdGltZW91dElkKSk6XHJcbiExfTtyZXR1cm4gZX1dfWZ1bmN0aW9uIHhhKGIsYSl7dmFyIGM9YjtOJiYoVC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsYyksYz1ULmhyZWYpO1Quc2V0QXR0cmlidXRlKFwiaHJlZlwiLGMpO3JldHVybntocmVmOlQuaHJlZixwcm90b2NvbDpULnByb3RvY29sP1QucHJvdG9jb2wucmVwbGFjZSgvOiQvLFwiXCIpOlwiXCIsaG9zdDpULmhvc3Qsc2VhcmNoOlQuc2VhcmNoP1Quc2VhcmNoLnJlcGxhY2UoL15cXD8vLFwiXCIpOlwiXCIsaGFzaDpULmhhc2g/VC5oYXNoLnJlcGxhY2UoL14jLyxcIlwiKTpcIlwiLGhvc3RuYW1lOlQuaG9zdG5hbWUscG9ydDpULnBvcnQscGF0aG5hbWU6XCIvXCI9PT1ULnBhdGhuYW1lLmNoYXJBdCgwKT9ULnBhdGhuYW1lOlwiL1wiK1QucGF0aG5hbWV9fWZ1bmN0aW9uIEViKGIpe2I9dyhiKT94YShiKTpiO3JldHVybiBiLnByb3RvY29sPT09emMucHJvdG9jb2wmJmIuaG9zdD09PXpjLmhvc3R9ZnVuY3Rpb24gSGQoKXt0aGlzLiRnZXQ9WShQKX1mdW5jdGlvbiBBYyhiKXtmdW5jdGlvbiBhKGQsXHJcbmUpe2lmKFcoZCkpe3ZhciBnPXt9O3EoZCxmdW5jdGlvbihiLGMpe2dbY109YShjLGIpfSk7cmV0dXJuIGd9cmV0dXJuIGIuZmFjdG9yeShkK2MsZSl9dmFyIGM9XCJGaWx0ZXJcIjt0aGlzLnJlZ2lzdGVyPWE7dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYS5nZXQoYitjKX19XTthKFwiY3VycmVuY3lcIixCYyk7YShcImRhdGVcIixDYyk7YShcImZpbHRlclwiLElkKTthKFwianNvblwiLEpkKTthKFwibGltaXRUb1wiLEtkKTthKFwibG93ZXJjYXNlXCIsTGQpO2EoXCJudW1iZXJcIixEYyk7YShcIm9yZGVyQnlcIixFYyk7YShcInVwcGVyY2FzZVwiLE1kKX1mdW5jdGlvbiBJZCgpe3JldHVybiBmdW5jdGlvbihiLGEsYyl7aWYoIUwoYikpcmV0dXJuIGI7dmFyIGQ9dHlwZW9mIGMsZT1bXTtlLmNoZWNrPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8ZS5sZW5ndGg7YisrKWlmKCFlW2JdKGEpKXJldHVybiExO3JldHVybiEwfTtcImZ1bmN0aW9uXCIhPT1kJiZcclxuKGM9XCJib29sZWFuXCI9PT1kJiZjP2Z1bmN0aW9uKGEsYil7cmV0dXJuIEJhLmVxdWFscyhhLGIpfTpmdW5jdGlvbihhLGIpe2I9KFwiXCIrYikudG9Mb3dlckNhc2UoKTtyZXR1cm4tMTwoXCJcIithKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYil9KTt2YXIgZz1mdW5jdGlvbihhLGIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiJiZcIiFcIj09PWIuY2hhckF0KDApKXJldHVybiFnKGEsYi5zdWJzdHIoMSkpO3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOnJldHVybiBjKGEsYik7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaCh0eXBlb2YgYil7Y2FzZSBcIm9iamVjdFwiOnJldHVybiBjKGEsYik7ZGVmYXVsdDpmb3IodmFyIGQgaW4gYSlpZihcIiRcIiE9PWQuY2hhckF0KDApJiZnKGFbZF0sYikpcmV0dXJuITB9cmV0dXJuITE7Y2FzZSBcImFycmF5XCI6Zm9yKGQ9MDtkPGEubGVuZ3RoO2QrKylpZihnKGFbZF0sYikpcmV0dXJuITA7cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMX19O1xyXG5zd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJzdHJpbmdcIjphPXskOmF9O2Nhc2UgXCJvYmplY3RcIjpmb3IodmFyIGYgaW4gYSkoZnVuY3Rpb24oYil7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGFbYl0mJmUucHVzaChmdW5jdGlvbihjKXtyZXR1cm4gZyhcIiRcIj09Yj9jOmMmJmNbYl0sYVtiXSl9KX0pKGYpO2JyZWFrO2Nhc2UgXCJmdW5jdGlvblwiOmUucHVzaChhKTticmVhaztkZWZhdWx0OnJldHVybiBifWQ9W107Zm9yKGY9MDtmPGIubGVuZ3RoO2YrKyl7dmFyIGg9YltmXTtlLmNoZWNrKGgpJiZkLnB1c2goaCl9cmV0dXJuIGR9fWZ1bmN0aW9uIEJjKGIpe3ZhciBhPWIuTlVNQkVSX0ZPUk1BVFM7cmV0dXJuIGZ1bmN0aW9uKGIsZCl7dShkKSYmKGQ9YS5DVVJSRU5DWV9TWU0pO3JldHVybiBGYyhiLGEuUEFUVEVSTlNbMV0sYS5HUk9VUF9TRVAsYS5ERUNJTUFMX1NFUCwyKS5yZXBsYWNlKC9cXHUwMEE0L2csZCl9fWZ1bmN0aW9uIERjKGIpe3ZhciBhPVxyXG5iLk5VTUJFUl9GT1JNQVRTO3JldHVybiBmdW5jdGlvbihiLGQpe3JldHVybiBGYyhiLGEuUEFUVEVSTlNbMF0sYS5HUk9VUF9TRVAsYS5ERUNJTUFMX1NFUCxkKX19ZnVuY3Rpb24gRmMoYixhLGMsZCxlKXtpZihpc05hTihiKXx8IWlzRmluaXRlKGIpKXJldHVyblwiXCI7dmFyIGc9MD5iO2I9TWF0aC5hYnMoYik7dmFyIGY9YitcIlwiLGg9XCJcIixtPVtdLGs9ITE7aWYoLTEhPT1mLmluZGV4T2YoXCJlXCIpKXt2YXIgbD1mLm1hdGNoKC8oW1xcZFxcLl0rKWUoLT8pKFxcZCspLyk7bCYmXCItXCI9PWxbMl0mJmxbM10+ZSsxP2Y9XCIwXCI6KGg9ZixrPSEwKX1pZihrKTA8ZSYmKC0xPGImJjE+YikmJihoPWIudG9GaXhlZChlKSk7ZWxzZXtmPShmLnNwbGl0KEdjKVsxXXx8XCJcIikubGVuZ3RoO3UoZSkmJihlPU1hdGgubWluKE1hdGgubWF4KGEubWluRnJhYyxmKSxhLm1heEZyYWMpKTtmPU1hdGgucG93KDEwLGUpO2I9TWF0aC5yb3VuZChiKmYpL2Y7Yj0oXCJcIitiKS5zcGxpdChHYyk7Zj1iWzBdO2I9YlsxXXx8XHJcblwiXCI7dmFyIGw9MCxuPWEubGdTaXplLHA9YS5nU2l6ZTtpZihmLmxlbmd0aD49bitwKWZvcihsPWYubGVuZ3RoLW4saz0wO2s8bDtrKyspMD09PShsLWspJXAmJjAhPT1rJiYoaCs9YyksaCs9Zi5jaGFyQXQoayk7Zm9yKGs9bDtrPGYubGVuZ3RoO2srKykwPT09KGYubGVuZ3RoLWspJW4mJjAhPT1rJiYoaCs9YyksaCs9Zi5jaGFyQXQoayk7Zm9yKDtiLmxlbmd0aDxlOyliKz1cIjBcIjtlJiZcIjBcIiE9PWUmJihoKz1kK2Iuc3Vic3RyKDAsZSkpfW0ucHVzaChnP2EubmVnUHJlOmEucG9zUHJlKTttLnB1c2goaCk7bS5wdXNoKGc/YS5uZWdTdWY6YS5wb3NTdWYpO3JldHVybiBtLmpvaW4oXCJcIil9ZnVuY3Rpb24gS2IoYixhLGMpe3ZhciBkPVwiXCI7MD5iJiYoZD1cIi1cIixiPS1iKTtmb3IoYj1cIlwiK2I7Yi5sZW5ndGg8YTspYj1cIjBcIitiO2MmJihiPWIuc3Vic3RyKGIubGVuZ3RoLWEpKTtyZXR1cm4gZCtifWZ1bmN0aW9uIFgoYixhLGMsZCl7Yz1jfHwwO3JldHVybiBmdW5jdGlvbihlKXtlPWVbXCJnZXRcIitcclxuYl0oKTtpZigwPGN8fGU+LWMpZSs9YzswPT09ZSYmLTEyPT1jJiYoZT0xMik7cmV0dXJuIEtiKGUsYSxkKX19ZnVuY3Rpb24ga2IoYixhKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXt2YXIgZT1jW1wiZ2V0XCIrYl0oKSxnPUhhKGE/XCJTSE9SVFwiK2I6Yik7cmV0dXJuIGRbZ11bZV19fWZ1bmN0aW9uIENjKGIpe2Z1bmN0aW9uIGEoYSl7dmFyIGI7aWYoYj1hLm1hdGNoKGMpKXthPW5ldyBEYXRlKDApO3ZhciBnPTAsZj0wLGg9Yls4XT9hLnNldFVUQ0Z1bGxZZWFyOmEuc2V0RnVsbFllYXIsbT1iWzhdP2Euc2V0VVRDSG91cnM6YS5zZXRIb3VycztiWzldJiYoZz1WKGJbOV0rYlsxMF0pLGY9VihiWzldK2JbMTFdKSk7aC5jYWxsKGEsVihiWzFdKSxWKGJbMl0pLTEsVihiWzNdKSk7Zz1WKGJbNF18fDApLWc7Zj1WKGJbNV18fDApLWY7aD1WKGJbNl18fDApO2I9TWF0aC5yb3VuZCgxRTMqcGFyc2VGbG9hdChcIjAuXCIrKGJbN118fDApKSk7bS5jYWxsKGEsZyxmLGgsYil9cmV0dXJuIGF9dmFyIGM9XHJcbi9eKFxcZHs0fSktPyhcXGRcXGQpLT8oXFxkXFxkKSg/OlQoXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86XFwuKFxcZCspKT8pPyk/KFp8KFsrLV0pKFxcZFxcZCk6PyhcXGRcXGQpKT8pPyQvO3JldHVybiBmdW5jdGlvbihjLGUpe3ZhciBnPVwiXCIsZj1bXSxoLG07ZT1lfHxcIm1lZGl1bURhdGVcIjtlPWIuREFURVRJTUVfRk9STUFUU1tlXXx8ZTt3KGMpJiYoYz1OZC50ZXN0KGMpP1YoYyk6YShjKSk7cmIoYykmJihjPW5ldyBEYXRlKGMpKTtpZighS2EoYykpcmV0dXJuIGM7Zm9yKDtlOykobT1PZC5leGVjKGUpKT8oZj1mLmNvbmNhdCh1YS5jYWxsKG0sMSkpLGU9Zi5wb3AoKSk6KGYucHVzaChlKSxlPW51bGwpO3EoZixmdW5jdGlvbihhKXtoPVBkW2FdO2crPWg/aChjLGIuREFURVRJTUVfRk9STUFUUyk6YS5yZXBsYWNlKC8oXid8JyQpL2csXCJcIikucmVwbGFjZSgvJycvZyxcIidcIil9KTtyZXR1cm4gZ319ZnVuY3Rpb24gSmQoKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIHBhKGIsITApfX1mdW5jdGlvbiBLZCgpe3JldHVybiBmdW5jdGlvbihiLFxyXG5hKXtpZighTChiKSYmIXcoYikpcmV0dXJuIGI7YT1WKGEpO2lmKHcoYikpcmV0dXJuIGE/MDw9YT9iLnNsaWNlKDAsYSk6Yi5zbGljZShhLGIubGVuZ3RoKTpcIlwiO3ZhciBjPVtdLGQsZTthPmIubGVuZ3RoP2E9Yi5sZW5ndGg6YTwtYi5sZW5ndGgmJihhPS1iLmxlbmd0aCk7MDxhPyhkPTAsZT1hKTooZD1iLmxlbmd0aCthLGU9Yi5sZW5ndGgpO2Zvcig7ZDxlO2QrKyljLnB1c2goYltkXSk7cmV0dXJuIGN9fWZ1bmN0aW9uIEVjKGIpe3JldHVybiBmdW5jdGlvbihhLGMsZCl7ZnVuY3Rpb24gZShhLGIpe3JldHVybiBPYShiKT9mdW5jdGlvbihiLGMpe3JldHVybiBhKGMsYil9OmF9aWYoIUwoYSl8fCFjKXJldHVybiBhO2M9TChjKT9jOltjXTtjPVFjKGMsZnVuY3Rpb24oYSl7dmFyIGM9ITEsZD1hfHxBYTtpZih3KGEpKXtpZihcIitcIj09YS5jaGFyQXQoMCl8fFwiLVwiPT1hLmNoYXJBdCgwKSljPVwiLVwiPT1hLmNoYXJBdCgwKSxhPWEuc3Vic3RyaW5nKDEpO2Q9YihhKX1yZXR1cm4gZShmdW5jdGlvbihhLFxyXG5iKXt2YXIgYztjPWQoYSk7dmFyIGU9ZChiKSxmPXR5cGVvZiBjLGc9dHlwZW9mIGU7Zj09Zz8oXCJzdHJpbmdcIj09ZiYmKGM9Yy50b0xvd2VyQ2FzZSgpLGU9ZS50b0xvd2VyQ2FzZSgpKSxjPWM9PT1lPzA6YzxlPy0xOjEpOmM9ZjxnPy0xOjE7cmV0dXJuIGN9LGMpfSk7Zm9yKHZhciBnPVtdLGY9MDtmPGEubGVuZ3RoO2YrKylnLnB1c2goYVtmXSk7cmV0dXJuIGcuc29ydChlKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0oYSxiKTtpZigwIT09ZSlyZXR1cm4gZX1yZXR1cm4gMH0sZCkpfX1mdW5jdGlvbiBzYShiKXtNKGIpJiYoYj17bGluazpifSk7Yi5yZXN0cmljdD1iLnJlc3RyaWN0fHxcIkFDXCI7cmV0dXJuIFkoYil9ZnVuY3Rpb24gSGMoYixhKXtmdW5jdGlvbiBjKGEsYyl7Yz1jP1wiLVwiK2NiKGMsXCItXCIpOlwiXCI7Yi5yZW1vdmVDbGFzcygoYT9sYjptYikrYykuYWRkQ2xhc3MoKGE/bWI6bGIpK2MpfXZhciBkPXRoaXMsZT1iLnBhcmVudCgpLmNvbnRyb2xsZXIoXCJmb3JtXCIpfHxcclxubmIsZz0wLGY9ZC4kZXJyb3I9e30saD1bXTtkLiRuYW1lPWEubmFtZXx8YS5uZ0Zvcm07ZC4kZGlydHk9ITE7ZC4kcHJpc3RpbmU9ITA7ZC4kdmFsaWQ9ITA7ZC4kaW52YWxpZD0hMTtlLiRhZGRDb250cm9sKGQpO2IuYWRkQ2xhc3MoSWEpO2MoITApO2QuJGFkZENvbnRyb2w9ZnVuY3Rpb24oYSl7d2EoYS4kbmFtZSxcImlucHV0XCIpO2gucHVzaChhKTthLiRuYW1lJiYoZFthLiRuYW1lXT1hKX07ZC4kcmVtb3ZlQ29udHJvbD1mdW5jdGlvbihhKXthLiRuYW1lJiZkW2EuJG5hbWVdPT09YSYmZGVsZXRlIGRbYS4kbmFtZV07cShmLGZ1bmN0aW9uKGIsYyl7ZC4kc2V0VmFsaWRpdHkoYywhMCxhKX0pO01hKGgsYSl9O2QuJHNldFZhbGlkaXR5PWZ1bmN0aW9uKGEsYixoKXt2YXIgbj1mW2FdO2lmKGIpbiYmKE1hKG4saCksbi5sZW5ndGh8fChnLS0sZ3x8KGMoYiksZC4kdmFsaWQ9ITAsZC4kaW52YWxpZD0hMSksZlthXT0hMSxjKCEwLGEpLGUuJHNldFZhbGlkaXR5KGEsITAsZCkpKTtlbHNle2d8fFxyXG5jKGIpO2lmKG4pe2lmKC0xIT1hYihuLGgpKXJldHVybn1lbHNlIGZbYV09bj1bXSxnKyssYyghMSxhKSxlLiRzZXRWYWxpZGl0eShhLCExLGQpO24ucHVzaChoKTtkLiR2YWxpZD0hMTtkLiRpbnZhbGlkPSEwfX07ZC4kc2V0RGlydHk9ZnVuY3Rpb24oKXtiLnJlbW92ZUNsYXNzKElhKS5hZGRDbGFzcyhvYik7ZC4kZGlydHk9ITA7ZC4kcHJpc3RpbmU9ITE7ZS4kc2V0RGlydHkoKX07ZC4kc2V0UHJpc3RpbmU9ZnVuY3Rpb24oKXtiLnJlbW92ZUNsYXNzKG9iKS5hZGRDbGFzcyhJYSk7ZC4kZGlydHk9ITE7ZC4kcHJpc3RpbmU9ITA7cShoLGZ1bmN0aW9uKGEpe2EuJHNldFByaXN0aW5lKCl9KX19ZnVuY3Rpb24gb2EoYixhLGMsZCl7Yi4kc2V0VmFsaWRpdHkoYSxjKTtyZXR1cm4gYz9kOnN9ZnVuY3Rpb24gcGIoYixhLGMsZCxlLGcpe2lmKCFlLmFuZHJvaWQpe3ZhciBmPSExO2Eub24oXCJjb21wb3NpdGlvbnN0YXJ0XCIsZnVuY3Rpb24oYSl7Zj0hMH0pO2Eub24oXCJjb21wb3NpdGlvbmVuZFwiLFxyXG5mdW5jdGlvbigpe2Y9ITF9KX12YXIgaD1mdW5jdGlvbigpe2lmKCFmKXt2YXIgZT1hLnZhbCgpO09hKGMubmdUcmltfHxcIlRcIikmJihlPVooZSkpO2QuJHZpZXdWYWx1ZSE9PWUmJihiLiQkcGhhc2U/ZC4kc2V0Vmlld1ZhbHVlKGUpOmIuJGFwcGx5KGZ1bmN0aW9uKCl7ZC4kc2V0Vmlld1ZhbHVlKGUpfSkpfX07aWYoZS5oYXNFdmVudChcImlucHV0XCIpKWEub24oXCJpbnB1dFwiLGgpO2Vsc2V7dmFyIG0saz1mdW5jdGlvbigpe218fChtPWcuZGVmZXIoZnVuY3Rpb24oKXtoKCk7bT1udWxsfSkpfTthLm9uKFwia2V5ZG93blwiLGZ1bmN0aW9uKGEpe2E9YS5rZXlDb2RlOzkxPT09YXx8KDE1PGEmJjE5PmF8fDM3PD1hJiY0MD49YSl8fGsoKX0pO2lmKGUuaGFzRXZlbnQoXCJwYXN0ZVwiKSlhLm9uKFwicGFzdGUgY3V0XCIsayl9YS5vbihcImNoYW5nZVwiLGgpO2QuJHJlbmRlcj1mdW5jdGlvbigpe2EudmFsKGQuJGlzRW1wdHkoZC4kdmlld1ZhbHVlKT9cIlwiOmQuJHZpZXdWYWx1ZSl9O3ZhciBsPWMubmdQYXR0ZXJuO1xyXG5sJiYoKGU9bC5tYXRjaCgvXlxcLyguKilcXC8oW2dpbV0qKSQvKSk/KGw9UmVnRXhwKGVbMV0sZVsyXSksZT1mdW5jdGlvbihhKXtyZXR1cm4gb2EoZCxcInBhdHRlcm5cIixkLiRpc0VtcHR5KGEpfHxsLnRlc3QoYSksYSl9KTplPWZ1bmN0aW9uKGMpe3ZhciBlPWIuJGV2YWwobCk7aWYoIWV8fCFlLnRlc3QpdGhyb3cgdChcIm5nUGF0dGVyblwiKShcIm5vcmVnZXhwXCIsbCxlLGZhKGEpKTtyZXR1cm4gb2EoZCxcInBhdHRlcm5cIixkLiRpc0VtcHR5KGMpfHxlLnRlc3QoYyksYyl9LGQuJGZvcm1hdHRlcnMucHVzaChlKSxkLiRwYXJzZXJzLnB1c2goZSkpO2lmKGMubmdNaW5sZW5ndGgpe3ZhciBuPVYoYy5uZ01pbmxlbmd0aCk7ZT1mdW5jdGlvbihhKXtyZXR1cm4gb2EoZCxcIm1pbmxlbmd0aFwiLGQuJGlzRW1wdHkoYSl8fGEubGVuZ3RoPj1uLGEpfTtkLiRwYXJzZXJzLnB1c2goZSk7ZC4kZm9ybWF0dGVycy5wdXNoKGUpfWlmKGMubmdNYXhsZW5ndGgpe3ZhciBwPVYoYy5uZ01heGxlbmd0aCk7ZT1cclxuZnVuY3Rpb24oYSl7cmV0dXJuIG9hKGQsXCJtYXhsZW5ndGhcIixkLiRpc0VtcHR5KGEpfHxhLmxlbmd0aDw9cCxhKX07ZC4kcGFyc2Vycy5wdXNoKGUpO2QuJGZvcm1hdHRlcnMucHVzaChlKX19ZnVuY3Rpb24gTGIoYixhKXtiPVwibmdDbGFzc1wiK2I7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQUNcIixsaW5rOmZ1bmN0aW9uKGMsZCxlKXtmdW5jdGlvbiBnKGIpe2lmKCEwPT09YXx8Yy4kaW5kZXglMj09PWEpe3ZhciBkPWYoYnx8XCJcIik7aD90YShiLGgpfHxlLiR1cGRhdGVDbGFzcyhkLGYoaCkpOmUuJGFkZENsYXNzKGQpfWg9JChiKX1mdW5jdGlvbiBmKGEpe2lmKEwoYSkpcmV0dXJuIGEuam9pbihcIiBcIik7aWYoVyhhKSl7dmFyIGI9W107cShhLGZ1bmN0aW9uKGEsYyl7YSYmYi5wdXNoKGMpfSk7cmV0dXJuIGIuam9pbihcIiBcIil9cmV0dXJuIGF9dmFyIGg7Yy4kd2F0Y2goZVtiXSxnLCEwKTtlLiRvYnNlcnZlKFwiY2xhc3NcIixmdW5jdGlvbihhKXtnKGMuJGV2YWwoZVtiXSkpfSk7XHJcblwibmdDbGFzc1wiIT09YiYmYy4kd2F0Y2goXCIkaW5kZXhcIixmdW5jdGlvbihkLGcpe3ZhciBoPWQmMTtpZihoIT09ZyYxKXt2YXIgbj1mKGMuJGV2YWwoZVtiXSkpO2g9PT1hP2UuJGFkZENsYXNzKG4pOmUuJHJlbW92ZUNsYXNzKG4pfX0pfX19fXZhciB4PWZ1bmN0aW9uKGIpe3JldHVybiB3KGIpP2IudG9Mb3dlckNhc2UoKTpifSxIYT1mdW5jdGlvbihiKXtyZXR1cm4gdyhiKT9iLnRvVXBwZXJDYXNlKCk6Yn0sTix6LENhLHVhPVtdLnNsaWNlLFFkPVtdLnB1c2gsTGE9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxOYT10KFwibmdcIiksQmE9UC5hbmd1bGFyfHwoUC5hbmd1bGFyPXt9KSxVYSxHYSxpYT1bXCIwXCIsXCIwXCIsXCIwXCJdO049VigoL21zaWUgKFxcZCspLy5leGVjKHgobmF2aWdhdG9yLnVzZXJBZ2VudCkpfHxbXSlbMV0pO2lzTmFOKE4pJiYoTj1WKCgvdHJpZGVudFxcLy4qOyBydjooXFxkKykvLmV4ZWMoeChuYXZpZ2F0b3IudXNlckFnZW50KSl8fFtdKVsxXSkpO0UuJGluamVjdD1bXTtcclxuQWEuJGluamVjdD1bXTt2YXIgWj1mdW5jdGlvbigpe3JldHVybiBTdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi50cmltKCk6Yn06ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi5yZXBsYWNlKC9eXFxzXFxzKi8sXCJcIikucmVwbGFjZSgvXFxzXFxzKiQvLFwiXCIpOmJ9fSgpO0dhPTk+Tj9mdW5jdGlvbihiKXtiPWIubm9kZU5hbWU/YjpiWzBdO3JldHVybiBiLnNjb3BlTmFtZSYmXCJIVE1MXCIhPWIuc2NvcGVOYW1lP0hhKGIuc2NvcGVOYW1lK1wiOlwiK2Iubm9kZU5hbWUpOmIubm9kZU5hbWV9OmZ1bmN0aW9uKGIpe3JldHVybiBiLm5vZGVOYW1lP2Iubm9kZU5hbWU6YlswXS5ub2RlTmFtZX07dmFyIFRjPS9bQS1aXS9nLFJkPXtmdWxsOlwiMS4yLjEyXCIsbWFqb3I6MSxtaW5vcjoyLGRvdDoxMixjb2RlTmFtZTpcImNhdWxpZmxvd2VyLWVyYWRpY2F0aW9uXCJ9LFJhPU8uY2FjaGU9e30sZGI9Ty5leHBhbmRvPVwibmctXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksWGM9MSxJYz1cclxuUC5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2Z1bmN0aW9uKGIsYSxjKXtiLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCExKX06ZnVuY3Rpb24oYixhLGMpe2IuYXR0YWNoRXZlbnQoXCJvblwiK2EsYyl9LHpiPVAuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcj9mdW5jdGlvbihiLGEsYyl7Yi5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMSl9OmZ1bmN0aW9uKGIsYSxjKXtiLmRldGFjaEV2ZW50KFwib25cIithLGMpfSxWYz0vKFtcXDpcXC1cXF9dKyguKSkvZyxXYz0vXm1veihbQS1aXSkvLHdiPXQoXCJqcUxpdGVcIiksRmE9Ty5wcm90b3R5cGU9e3JlYWR5OmZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGEoKXtjfHwoYz0hMCxiKCkpfXZhciBjPSExO1wiY29tcGxldGVcIj09PVIucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KGEpOih0aGlzLm9uKFwiRE9NQ29udGVudExvYWRlZFwiLGEpLE8oUCkub24oXCJsb2FkXCIsYSkpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBiPVtdO3EodGhpcyxmdW5jdGlvbihhKXtiLnB1c2goXCJcIitcclxuYSl9KTtyZXR1cm5cIltcIitiLmpvaW4oXCIsIFwiKStcIl1cIn0sZXE6ZnVuY3Rpb24oYil7cmV0dXJuIDA8PWI/eih0aGlzW2JdKTp6KHRoaXNbdGhpcy5sZW5ndGgrYl0pfSxsZW5ndGg6MCxwdXNoOlFkLHNvcnQ6W10uc29ydCxzcGxpY2U6W10uc3BsaWNlfSxmYj17fTtxKFwibXVsdGlwbGUgc2VsZWN0ZWQgY2hlY2tlZCBkaXNhYmxlZCByZWFkT25seSByZXF1aXJlZCBvcGVuXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIpe2ZiW3goYildPWJ9KTt2YXIgZmM9e307cShcImlucHV0IHNlbGVjdCBvcHRpb24gdGV4dGFyZWEgYnV0dG9uIGZvcm0gZGV0YWlsc1wiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXtmY1tIYShiKV09ITB9KTtxKHtkYXRhOmJjLGluaGVyaXRlZERhdGE6ZWIsc2NvcGU6ZnVuY3Rpb24oYil7cmV0dXJuIHooYikuZGF0YShcIiRzY29wZVwiKXx8ZWIoYi5wYXJlbnROb2RlfHxiLFtcIiRpc29sYXRlU2NvcGVcIixcIiRzY29wZVwiXSl9LGlzb2xhdGVTY29wZTpmdW5jdGlvbihiKXtyZXR1cm4geihiKS5kYXRhKFwiJGlzb2xhdGVTY29wZVwiKXx8XHJcbnooYikuZGF0YShcIiRpc29sYXRlU2NvcGVOb1RlbXBsYXRlXCIpfSxjb250cm9sbGVyOmNjLGluamVjdG9yOmZ1bmN0aW9uKGIpe3JldHVybiBlYihiLFwiJGluamVjdG9yXCIpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGIsYSl7Yi5yZW1vdmVBdHRyaWJ1dGUoYSl9LGhhc0NsYXNzOkFiLGNzczpmdW5jdGlvbihiLGEsYyl7YT1RYShhKTtpZihEKGMpKWIuc3R5bGVbYV09YztlbHNle3ZhciBkOzg+PU4mJihkPWIuY3VycmVudFN0eWxlJiZiLmN1cnJlbnRTdHlsZVthXSxcIlwiPT09ZCYmKGQ9XCJhdXRvXCIpKTtkPWR8fGIuc3R5bGVbYV07OD49TiYmKGQ9XCJcIj09PWQ/czpkKTtyZXR1cm4gZH19LGF0dHI6ZnVuY3Rpb24oYixhLGMpe3ZhciBkPXgoYSk7aWYoZmJbZF0paWYoRChjKSljPyhiW2FdPSEwLGIuc2V0QXR0cmlidXRlKGEsZCkpOihiW2FdPSExLGIucmVtb3ZlQXR0cmlidXRlKGQpKTtlbHNlIHJldHVybiBiW2FdfHwoYi5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShhKXx8RSkuc3BlY2lmaWVkP1xyXG5kOnM7ZWxzZSBpZihEKGMpKWIuc2V0QXR0cmlidXRlKGEsYyk7ZWxzZSBpZihiLmdldEF0dHJpYnV0ZSlyZXR1cm4gYj1iLmdldEF0dHJpYnV0ZShhLDIpLG51bGw9PT1iP3M6Yn0scHJvcDpmdW5jdGlvbihiLGEsYyl7aWYoRChjKSliW2FdPWM7ZWxzZSByZXR1cm4gYlthXX0sdGV4dDpmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkKXt2YXIgZT1hW2Iubm9kZVR5cGVdO2lmKHUoZCkpcmV0dXJuIGU/YltlXTpcIlwiO2JbZV09ZH12YXIgYT1bXTs5Pk4/KGFbMV09XCJpbm5lclRleHRcIixhWzNdPVwibm9kZVZhbHVlXCIpOmFbMV09YVszXT1cInRleHRDb250ZW50XCI7Yi4kZHY9XCJcIjtyZXR1cm4gYn0oKSx2YWw6ZnVuY3Rpb24oYixhKXtpZih1KGEpKXtpZihcIlNFTEVDVFwiPT09R2EoYikmJmIubXVsdGlwbGUpe3ZhciBjPVtdO3EoYi5vcHRpb25zLGZ1bmN0aW9uKGEpe2Euc2VsZWN0ZWQmJmMucHVzaChhLnZhbHVlfHxhLnRleHQpfSk7cmV0dXJuIDA9PT1jLmxlbmd0aD9udWxsOmN9cmV0dXJuIGIudmFsdWV9Yi52YWx1ZT1cclxuYX0saHRtbDpmdW5jdGlvbihiLGEpe2lmKHUoYSkpcmV0dXJuIGIuaW5uZXJIVE1MO2Zvcih2YXIgYz0wLGQ9Yi5jaGlsZE5vZGVzO2M8ZC5sZW5ndGg7YysrKURhKGRbY10pO2IuaW5uZXJIVE1MPWF9LGVtcHR5OmRjfSxmdW5jdGlvbihiLGEpe08ucHJvdG90eXBlW2FdPWZ1bmN0aW9uKGEsZCl7dmFyIGUsZztpZihiIT09ZGMmJigyPT1iLmxlbmd0aCYmYiE9PUFiJiZiIT09Y2M/YTpkKT09PXMpe2lmKFcoYSkpe2ZvcihlPTA7ZTx0aGlzLmxlbmd0aDtlKyspaWYoYj09PWJjKWIodGhpc1tlXSxhKTtlbHNlIGZvcihnIGluIGEpYih0aGlzW2VdLGcsYVtnXSk7cmV0dXJuIHRoaXN9ZT1iLiRkdjtnPWU9PT1zP01hdGgubWluKHRoaXMubGVuZ3RoLDEpOnRoaXMubGVuZ3RoO2Zvcih2YXIgZj0wO2Y8ZztmKyspe3ZhciBoPWIodGhpc1tmXSxhLGQpO2U9ZT9lK2g6aH1yZXR1cm4gZX1mb3IoZT0wO2U8dGhpcy5sZW5ndGg7ZSsrKWIodGhpc1tlXSxhLGQpO3JldHVybiB0aGlzfX0pO3Eoe3JlbW92ZURhdGE6JGIsXHJcbmRlYWxvYzpEYSxvbjpmdW5jdGlvbiBhKGMsZCxlLGcpe2lmKEQoZykpdGhyb3cgd2IoXCJvbmFyZ3NcIik7dmFyIGY9amEoYyxcImV2ZW50c1wiKSxoPWphKGMsXCJoYW5kbGVcIik7Znx8amEoYyxcImV2ZW50c1wiLGY9e30pO2h8fGphKGMsXCJoYW5kbGVcIixoPVljKGMsZikpO3EoZC5zcGxpdChcIiBcIiksZnVuY3Rpb24oZCl7dmFyIGc9ZltkXTtpZighZyl7aWYoXCJtb3VzZWVudGVyXCI9PWR8fFwibW91c2VsZWF2ZVwiPT1kKXt2YXIgbD1SLmJvZHkuY29udGFpbnN8fFIuYm9keS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj9mdW5jdGlvbihhLGMpe3ZhciBkPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZT1jJiZjLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1lfHwhIShlJiYxPT09ZS5ub2RlVHlwZSYmKGQuY29udGFpbnM/ZC5jb250YWlucyhlKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpJjE2KSl9OmZ1bmN0aW9uKGEsYyl7aWYoYylmb3IoO2M9XHJcbmMucGFyZW50Tm9kZTspaWYoYz09PWEpcmV0dXJuITA7cmV0dXJuITF9O2ZbZF09W107YShjLHttb3VzZWxlYXZlOlwibW91c2VvdXRcIixtb3VzZWVudGVyOlwibW91c2VvdmVyXCJ9W2RdLGZ1bmN0aW9uKGEpe3ZhciBjPWEucmVsYXRlZFRhcmdldDtjJiYoYz09PXRoaXN8fGwodGhpcyxjKSl8fGgoYSxkKX0pfWVsc2UgSWMoYyxkLGgpLGZbZF09W107Zz1mW2RdfWcucHVzaChlKX0pfSxvZmY6YWMsb25lOmZ1bmN0aW9uKGEsYyxkKXthPXooYSk7YS5vbihjLGZ1bmN0aW9uIGcoKXthLm9mZihjLGQpO2Eub2ZmKGMsZyl9KTthLm9uKGMsZCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKGEsYyl7dmFyIGQsZT1hLnBhcmVudE5vZGU7RGEoYSk7cShuZXcgTyhjKSxmdW5jdGlvbihjKXtkP2UuaW5zZXJ0QmVmb3JlKGMsZC5uZXh0U2libGluZyk6ZS5yZXBsYWNlQ2hpbGQoYyxhKTtkPWN9KX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7dmFyIGM9W107cShhLmNoaWxkTm9kZXMsZnVuY3Rpb24oYSl7MT09PVxyXG5hLm5vZGVUeXBlJiZjLnB1c2goYSl9KTtyZXR1cm4gY30sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2hpbGROb2Rlc3x8W119LGFwcGVuZDpmdW5jdGlvbihhLGMpe3EobmV3IE8oYyksZnVuY3Rpb24oYyl7MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8YS5hcHBlbmRDaGlsZChjKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKGEsYyl7aWYoMT09PWEubm9kZVR5cGUpe3ZhciBkPWEuZmlyc3RDaGlsZDtxKG5ldyBPKGMpLGZ1bmN0aW9uKGMpe2EuaW5zZXJ0QmVmb3JlKGMsZCl9KX19LHdyYXA6ZnVuY3Rpb24oYSxjKXtjPXooYylbMF07dmFyIGQ9YS5wYXJlbnROb2RlO2QmJmQucmVwbGFjZUNoaWxkKGMsYSk7Yy5hcHBlbmRDaGlsZChhKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe0RhKGEpO3ZhciBjPWEucGFyZW50Tm9kZTtjJiZjLnJlbW92ZUNoaWxkKGEpfSxhZnRlcjpmdW5jdGlvbihhLGMpe3ZhciBkPWEsZT1hLnBhcmVudE5vZGU7cShuZXcgTyhjKSxmdW5jdGlvbihhKXtlLmluc2VydEJlZm9yZShhLFxyXG5kLm5leHRTaWJsaW5nKTtkPWF9KX0sYWRkQ2xhc3M6Q2IscmVtb3ZlQ2xhc3M6QmIsdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxjLGQpe3UoZCkmJihkPSFBYihhLGMpKTsoZD9DYjpCYikoYSxjKX0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybihhPWEucGFyZW50Tm9kZSkmJjExIT09YS5ub2RlVHlwZT9hOm51bGx9LG5leHQ6ZnVuY3Rpb24oYSl7aWYoYS5uZXh0RWxlbWVudFNpYmxpbmcpcmV0dXJuIGEubmV4dEVsZW1lbnRTaWJsaW5nO2ZvcihhPWEubmV4dFNpYmxpbmc7bnVsbCE9YSYmMSE9PWEubm9kZVR5cGU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX0sZmluZDpmdW5jdGlvbihhLGMpe3JldHVybiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYyk6W119LGNsb25lOnliLHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYyxkKXtjPShqYShhLFwiZXZlbnRzXCIpfHx7fSlbY107ZD1kfHxbXTt2YXIgZT1be3ByZXZlbnREZWZhdWx0OkUsc3RvcFByb3BhZ2F0aW9uOkV9XTtcclxucShjLGZ1bmN0aW9uKGMpe2MuYXBwbHkoYSxlLmNvbmNhdChkKSl9KX19LGZ1bmN0aW9uKGEsYyl7Ty5wcm90b3R5cGVbY109ZnVuY3Rpb24oYyxlLGcpe2Zvcih2YXIgZixoPTA7aDx0aGlzLmxlbmd0aDtoKyspdShmKT8oZj1hKHRoaXNbaF0sYyxlLGcpLEQoZikmJihmPXooZikpKTp4YihmLGEodGhpc1toXSxjLGUsZykpO3JldHVybiBEKGYpP2Y6dGhpc307Ty5wcm90b3R5cGUuYmluZD1PLnByb3RvdHlwZS5vbjtPLnByb3RvdHlwZS51bmJpbmQ9Ty5wcm90b3R5cGUub2ZmfSk7U2EucHJvdG90eXBlPXtwdXQ6ZnVuY3Rpb24oYSxjKXt0aGlzW0VhKGEpXT1jfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXNbRWEoYSldfSxyZW1vdmU6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpc1thPUVhKGEpXTtkZWxldGUgdGhpc1thXTtyZXR1cm4gY319O3ZhciAkYz0vXmZ1bmN0aW9uXFxzKlteXFwoXSpcXChcXHMqKFteXFwpXSopXFwpL20sYWQ9LywvLGJkPS9eXFxzKihfPykoXFxTKz8pXFwxXFxzKiQvLFpjPVxyXG4vKChcXC9cXC8uKiQpfChcXC9cXCpbXFxzXFxTXSo/XFwqXFwvKSkvbWcsVGE9dChcIiRpbmplY3RvclwiKSxTZD10KFwiJGFuaW1hdGVcIiksVGQ9W1wiJHByb3ZpZGVcIixmdW5jdGlvbihhKXt0aGlzLiQkc2VsZWN0b3JzPXt9O3RoaXMucmVnaXN0ZXI9ZnVuY3Rpb24oYyxkKXt2YXIgZT1jK1wiLWFuaW1hdGlvblwiO2lmKGMmJlwiLlwiIT1jLmNoYXJBdCgwKSl0aHJvdyBTZChcIm5vdGNzZWxcIixjKTt0aGlzLiQkc2VsZWN0b3JzW2Muc3Vic3RyKDEpXT1lO2EuZmFjdG9yeShlLGQpfTt0aGlzLmNsYXNzTmFtZUZpbHRlcj1mdW5jdGlvbihhKXsxPT09YXJndW1lbnRzLmxlbmd0aCYmKHRoaXMuJCRjbGFzc05hbWVGaWx0ZXI9YSBpbnN0YW5jZW9mIFJlZ0V4cD9hOm51bGwpO3JldHVybiB0aGlzLiQkY2xhc3NOYW1lRmlsdGVyfTt0aGlzLiRnZXQ9W1wiJHRpbWVvdXRcIixmdW5jdGlvbihhKXtyZXR1cm57ZW50ZXI6ZnVuY3Rpb24oZCxlLGcsZil7Zz9nLmFmdGVyKGQpOihlJiZlWzBdfHwoZT1nLnBhcmVudCgpKSxlLmFwcGVuZChkKSk7XHJcbmYmJmEoZiwwLCExKX0sbGVhdmU6ZnVuY3Rpb24oZCxlKXtkLnJlbW92ZSgpO2UmJmEoZSwwLCExKX0sbW92ZTpmdW5jdGlvbihhLGMsZyxmKXt0aGlzLmVudGVyKGEsYyxnLGYpfSxhZGRDbGFzczpmdW5jdGlvbihkLGUsZyl7ZT13KGUpP2U6TChlKT9lLmpvaW4oXCIgXCIpOlwiXCI7cShkLGZ1bmN0aW9uKGEpe0NiKGEsZSl9KTtnJiZhKGcsMCwhMSl9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGQsZSxnKXtlPXcoZSk/ZTpMKGUpP2Uuam9pbihcIiBcIik6XCJcIjtxKGQsZnVuY3Rpb24oYSl7QmIoYSxlKX0pO2cmJmEoZywwLCExKX0sZW5hYmxlZDpFfX1dfV0saGE9dChcIiRjb21waWxlXCIpO2ljLiRpbmplY3Q9W1wiJHByb3ZpZGVcIixcIiQkc2FuaXRpemVVcmlQcm92aWRlclwiXTt2YXIgaGQ9L14oeFtcXDpcXC1fXXxkYXRhW1xcOlxcLV9dKS9pLG9jPXQoXCIkaW50ZXJwb2xhdGVcIiksVWQ9L14oW15cXD8jXSopKFxcPyhbXiNdKikpPygjKC4qKSk/JC8sc2Q9e2h0dHA6ODAsaHR0cHM6NDQzLGZ0cDoyMX0sR2I9dChcIiRsb2NhdGlvblwiKTtcclxudGMucHJvdG90eXBlPUhiLnByb3RvdHlwZT1zYy5wcm90b3R5cGU9eyQkaHRtbDU6ITEsJCRyZXBsYWNlOiExLGFic1VybDppYihcIiQkYWJzVXJsXCIpLHVybDpmdW5jdGlvbihhLGMpe2lmKHUoYSkpcmV0dXJuIHRoaXMuJCR1cmw7dmFyIGQ9VWQuZXhlYyhhKTtkWzFdJiZ0aGlzLnBhdGgoZGVjb2RlVVJJQ29tcG9uZW50KGRbMV0pKTsoZFsyXXx8ZFsxXSkmJnRoaXMuc2VhcmNoKGRbM118fFwiXCIpO3RoaXMuaGFzaChkWzVdfHxcIlwiLGMpO3JldHVybiB0aGlzfSxwcm90b2NvbDppYihcIiQkcHJvdG9jb2xcIiksaG9zdDppYihcIiQkaG9zdFwiKSxwb3J0OmliKFwiJCRwb3J0XCIpLHBhdGg6dWMoXCIkJHBhdGhcIixmdW5jdGlvbihhKXtyZXR1cm5cIi9cIj09YS5jaGFyQXQoMCk/YTpcIi9cIithfSksc2VhcmNoOmZ1bmN0aW9uKGEsYyl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdGhpcy4kJHNlYXJjaDtjYXNlIDE6aWYodyhhKSl0aGlzLiQkc2VhcmNoPVZiKGEpO2Vsc2UgaWYoVyhhKSl0aGlzLiQkc2VhcmNoPVxyXG5hO2Vsc2UgdGhyb3cgR2IoXCJpc3JjaGFyZ1wiKTticmVhaztkZWZhdWx0OnUoYyl8fG51bGw9PT1jP2RlbGV0ZSB0aGlzLiQkc2VhcmNoW2FdOnRoaXMuJCRzZWFyY2hbYV09Y310aGlzLiQkY29tcG9zZSgpO3JldHVybiB0aGlzfSxoYXNoOnVjKFwiJCRoYXNoXCIsQWEpLHJlcGxhY2U6ZnVuY3Rpb24oKXt0aGlzLiQkcmVwbGFjZT0hMDtyZXR1cm4gdGhpc319O3ZhciB5YT10KFwiJHBhcnNlXCIpLHhjPXt9LHFhLEphPXtcIm51bGxcIjpmdW5jdGlvbigpe3JldHVybiBudWxsfSxcInRydWVcIjpmdW5jdGlvbigpe3JldHVybiEwfSxcImZhbHNlXCI6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sdW5kZWZpbmVkOkUsXCIrXCI6ZnVuY3Rpb24oYSxjLGQsZSl7ZD1kKGEsYyk7ZT1lKGEsYyk7cmV0dXJuIEQoZCk/RChlKT9kK2U6ZDpEKGUpP2U6c30sXCItXCI6ZnVuY3Rpb24oYSxjLGQsZSl7ZD1kKGEsYyk7ZT1lKGEsYyk7cmV0dXJuKEQoZCk/ZDowKS0oRChlKT9lOjApfSxcIipcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLFxyXG5jKSplKGEsYyl9LFwiL1wiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykvZShhLGMpfSxcIiVcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJWUoYSxjKX0sXCJeXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKV5lKGEsYyl9LFwiPVwiOkUsXCI9PT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPT09ZShhLGMpfSxcIiE9PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykhPT1lKGEsYyl9LFwiPT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPT1lKGEsYyl9LFwiIT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpIT1lKGEsYyl9LFwiPFwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk8ZShhLGMpfSxcIj5cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPmUoYSxjKX0sXCI8PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk8PWUoYSxjKX0sXCI+PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsXHJcbmMpPj1lKGEsYyl9LFwiJiZcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJiZlKGEsYyl9LFwifHxcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpfHxlKGEsYyl9LFwiJlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykmZShhLGMpfSxcInxcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZShhLGMpKGEsYyxkKGEsYykpfSxcIiFcIjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIWQoYSxjKX19LFZkPXtuOlwiXFxuXCIsZjpcIlxcZlwiLHI6XCJcXHJcIix0OlwiXFx0XCIsdjpcIlxcdlwiLFwiJ1wiOlwiJ1wiLCdcIic6J1wiJ30sSmI9ZnVuY3Rpb24oYSl7dGhpcy5vcHRpb25zPWF9O0piLnByb3RvdHlwZT17Y29uc3RydWN0b3I6SmIsbGV4OmZ1bmN0aW9uKGEpe3RoaXMudGV4dD1hO3RoaXMuaW5kZXg9MDt0aGlzLmNoPXM7dGhpcy5sYXN0Q2g9XCI6XCI7dGhpcy50b2tlbnM9W107dmFyIGM7Zm9yKGE9W107dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7dGhpcy5jaD10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG5pZih0aGlzLmlzKFwiXFxcIidcIikpdGhpcy5yZWFkU3RyaW5nKHRoaXMuY2gpO2Vsc2UgaWYodGhpcy5pc051bWJlcih0aGlzLmNoKXx8dGhpcy5pcyhcIi5cIikmJnRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKXRoaXMucmVhZE51bWJlcigpO2Vsc2UgaWYodGhpcy5pc0lkZW50KHRoaXMuY2gpKXRoaXMucmVhZElkZW50KCksdGhpcy53YXMoXCJ7LFwiKSYmKFwie1wiPT09YVswXSYmKGM9dGhpcy50b2tlbnNbdGhpcy50b2tlbnMubGVuZ3RoLTFdKSkmJihjLmpzb249LTE9PT1jLnRleHQuaW5kZXhPZihcIi5cIikpO2Vsc2UgaWYodGhpcy5pcyhcIigpe31bXS4sOzo/XCIpKXRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDp0aGlzLmNoLGpzb246dGhpcy53YXMoXCI6WyxcIikmJnRoaXMuaXMoXCJ7W1wiKXx8dGhpcy5pcyhcIn1dOixcIil9KSx0aGlzLmlzKFwie1tcIikmJmEudW5zaGlmdCh0aGlzLmNoKSx0aGlzLmlzKFwifV1cIikmJmEuc2hpZnQoKSx0aGlzLmluZGV4Kys7ZWxzZSBpZih0aGlzLmlzV2hpdGVzcGFjZSh0aGlzLmNoKSl7dGhpcy5pbmRleCsrO1xyXG5jb250aW51ZX1lbHNle3ZhciBkPXRoaXMuY2grdGhpcy5wZWVrKCksZT1kK3RoaXMucGVlaygyKSxnPUphW3RoaXMuY2hdLGY9SmFbZF0saD1KYVtlXTtoPyh0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6ZSxmbjpofSksdGhpcy5pbmRleCs9Myk6Zj8odGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OmQsZm46Zn0pLHRoaXMuaW5kZXgrPTIpOmc/KHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDp0aGlzLmNoLGZuOmcsanNvbjp0aGlzLndhcyhcIlssOlwiKSYmdGhpcy5pcyhcIistXCIpfSksdGhpcy5pbmRleCs9MSk6dGhpcy50aHJvd0Vycm9yKFwiVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciBcIix0aGlzLmluZGV4LHRoaXMuaW5kZXgrMSl9dGhpcy5sYXN0Q2g9dGhpcy5jaH1yZXR1cm4gdGhpcy50b2tlbnN9LGlzOmZ1bmN0aW9uKGEpe3JldHVybi0xIT09YS5pbmRleE9mKHRoaXMuY2gpfSx3YXM6ZnVuY3Rpb24oYSl7cmV0dXJuLTEhPT1cclxuYS5pbmRleE9mKHRoaXMubGFzdENoKX0scGVlazpmdW5jdGlvbihhKXthPWF8fDE7cmV0dXJuIHRoaXMuaW5kZXgrYTx0aGlzLnRleHQubGVuZ3RoP3RoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCthKTohMX0saXNOdW1iZXI6ZnVuY3Rpb24oYSl7cmV0dXJuXCIwXCI8PWEmJlwiOVwiPj1hfSxpc1doaXRlc3BhY2U6ZnVuY3Rpb24oYSl7cmV0dXJuXCIgXCI9PT1hfHxcIlxcclwiPT09YXx8XCJcXHRcIj09PWF8fFwiXFxuXCI9PT1hfHxcIlxcdlwiPT09YXx8XCJcXHUwMGEwXCI9PT1hfSxpc0lkZW50OmZ1bmN0aW9uKGEpe3JldHVyblwiYVwiPD1hJiZcInpcIj49YXx8XCJBXCI8PWEmJlwiWlwiPj1hfHxcIl9cIj09PWF8fFwiJFwiPT09YX0saXNFeHBPcGVyYXRvcjpmdW5jdGlvbihhKXtyZXR1cm5cIi1cIj09PWF8fFwiK1wiPT09YXx8dGhpcy5pc051bWJlcihhKX0sdGhyb3dFcnJvcjpmdW5jdGlvbihhLGMsZCl7ZD1kfHx0aGlzLmluZGV4O2M9RChjKT9cInMgXCIrYytcIi1cIit0aGlzLmluZGV4K1wiIFtcIit0aGlzLnRleHQuc3Vic3RyaW5nKGMsZCkrXHJcblwiXVwiOlwiIFwiK2Q7dGhyb3cgeWEoXCJsZXhlcnJcIixhLGMsdGhpcy50ZXh0KTt9LHJlYWROdW1iZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGE9XCJcIixjPXRoaXMuaW5kZXg7dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7dmFyIGQ9eCh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtpZihcIi5cIj09ZHx8dGhpcy5pc051bWJlcihkKSlhKz1kO2Vsc2V7dmFyIGU9dGhpcy5wZWVrKCk7aWYoXCJlXCI9PWQmJnRoaXMuaXNFeHBPcGVyYXRvcihlKSlhKz1kO2Vsc2UgaWYodGhpcy5pc0V4cE9wZXJhdG9yKGQpJiZlJiZ0aGlzLmlzTnVtYmVyKGUpJiZcImVcIj09YS5jaGFyQXQoYS5sZW5ndGgtMSkpYSs9ZDtlbHNlIGlmKCF0aGlzLmlzRXhwT3BlcmF0b3IoZCl8fGUmJnRoaXMuaXNOdW1iZXIoZSl8fFwiZVwiIT1hLmNoYXJBdChhLmxlbmd0aC0xKSlicmVhaztlbHNlIHRoaXMudGhyb3dFcnJvcihcIkludmFsaWQgZXhwb25lbnRcIil9dGhpcy5pbmRleCsrfWEqPTE7dGhpcy50b2tlbnMucHVzaCh7aW5kZXg6YyxcclxudGV4dDphLGpzb246ITAsZm46ZnVuY3Rpb24oKXtyZXR1cm4gYX19KX0scmVhZElkZW50OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMsYz1cIlwiLGQ9dGhpcy5pbmRleCxlLGcsZixoO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe2g9dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtpZihcIi5cIj09PWh8fHRoaXMuaXNJZGVudChoKXx8dGhpcy5pc051bWJlcihoKSlcIi5cIj09PWgmJihlPXRoaXMuaW5kZXgpLGMrPWg7ZWxzZSBicmVhazt0aGlzLmluZGV4Kyt9aWYoZSlmb3IoZz10aGlzLmluZGV4O2c8dGhpcy50ZXh0Lmxlbmd0aDspe2g9dGhpcy50ZXh0LmNoYXJBdChnKTtpZihcIihcIj09PWgpe2Y9Yy5zdWJzdHIoZS1kKzEpO2M9Yy5zdWJzdHIoMCxlLWQpO3RoaXMuaW5kZXg9ZzticmVha31pZih0aGlzLmlzV2hpdGVzcGFjZShoKSlnKys7ZWxzZSBicmVha31kPXtpbmRleDpkLHRleHQ6Y307aWYoSmEuaGFzT3duUHJvcGVydHkoYykpZC5mbj1KYVtjXSxkLmpzb249SmFbY107XHJcbmVsc2V7dmFyIG09d2MoYyx0aGlzLm9wdGlvbnMsdGhpcy50ZXh0KTtkLmZuPXkoZnVuY3Rpb24oYSxjKXtyZXR1cm4gbShhLGMpfSx7YXNzaWduOmZ1bmN0aW9uKGQsZSl7cmV0dXJuIGpiKGQsYyxlLGEudGV4dCxhLm9wdGlvbnMpfX0pfXRoaXMudG9rZW5zLnB1c2goZCk7ZiYmKHRoaXMudG9rZW5zLnB1c2goe2luZGV4OmUsdGV4dDpcIi5cIixqc29uOiExfSksdGhpcy50b2tlbnMucHVzaCh7aW5kZXg6ZSsxLHRleHQ6Zixqc29uOiExfSkpfSxyZWFkU3RyaW5nOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMuaW5kZXg7dGhpcy5pbmRleCsrO2Zvcih2YXIgZD1cIlwiLGU9YSxnPSExO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3ZhciBmPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCksZT1lK2Y7aWYoZylcInVcIj09PWY/KGY9dGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4KzEsdGhpcy5pbmRleCs1KSxmLm1hdGNoKC9bXFxkYS1mXXs0fS9pKXx8dGhpcy50aHJvd0Vycm9yKFwiSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHVcIitcclxuZitcIl1cIiksdGhpcy5pbmRleCs9NCxkKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGYsMTYpKSk6ZD0oZz1WZFtmXSk/ZCtnOmQrZixnPSExO2Vsc2UgaWYoXCJcXFxcXCI9PT1mKWc9ITA7ZWxzZXtpZihmPT09YSl7dGhpcy5pbmRleCsrO3RoaXMudG9rZW5zLnB1c2goe2luZGV4OmMsdGV4dDplLHN0cmluZzpkLGpzb246ITAsZm46ZnVuY3Rpb24oKXtyZXR1cm4gZH19KTtyZXR1cm59ZCs9Zn10aGlzLmluZGV4Kyt9dGhpcy50aHJvd0Vycm9yKFwiVW50ZXJtaW5hdGVkIHF1b3RlXCIsYyl9fTt2YXIgWWE9ZnVuY3Rpb24oYSxjLGQpe3RoaXMubGV4ZXI9YTt0aGlzLiRmaWx0ZXI9Yzt0aGlzLm9wdGlvbnM9ZH07WWEuWkVSTz1mdW5jdGlvbigpe3JldHVybiAwfTtZYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOllhLHBhcnNlOmZ1bmN0aW9uKGEsYyl7dGhpcy50ZXh0PWE7dGhpcy5qc29uPWM7dGhpcy50b2tlbnM9dGhpcy5sZXhlci5sZXgoYSk7YyYmKHRoaXMuYXNzaWdubWVudD10aGlzLmxvZ2ljYWxPUixcclxudGhpcy5mdW5jdGlvbkNhbGw9dGhpcy5maWVsZEFjY2Vzcz10aGlzLm9iamVjdEluZGV4PXRoaXMuZmlsdGVyQ2hhaW49ZnVuY3Rpb24oKXt0aGlzLnRocm93RXJyb3IoXCJpcyBub3QgdmFsaWQganNvblwiLHt0ZXh0OmEsaW5kZXg6MH0pfSk7dmFyIGQ9Yz90aGlzLnByaW1hcnkoKTp0aGlzLnN0YXRlbWVudHMoKTswIT09dGhpcy50b2tlbnMubGVuZ3RoJiZ0aGlzLnRocm93RXJyb3IoXCJpcyBhbiB1bmV4cGVjdGVkIHRva2VuXCIsdGhpcy50b2tlbnNbMF0pO2QubGl0ZXJhbD0hIWQubGl0ZXJhbDtkLmNvbnN0YW50PSEhZC5jb25zdGFudDtyZXR1cm4gZH0scHJpbWFyeTpmdW5jdGlvbigpe3ZhciBhO2lmKHRoaXMuZXhwZWN0KFwiKFwiKSlhPXRoaXMuZmlsdGVyQ2hhaW4oKSx0aGlzLmNvbnN1bWUoXCIpXCIpO2Vsc2UgaWYodGhpcy5leHBlY3QoXCJbXCIpKWE9dGhpcy5hcnJheURlY2xhcmF0aW9uKCk7ZWxzZSBpZih0aGlzLmV4cGVjdChcIntcIikpYT10aGlzLm9iamVjdCgpO2Vsc2V7dmFyIGM9XHJcbnRoaXMuZXhwZWN0KCk7KGE9Yy5mbil8fHRoaXMudGhyb3dFcnJvcihcIm5vdCBhIHByaW1hcnkgZXhwcmVzc2lvblwiLGMpO2MuanNvbiYmKGEuY29uc3RhbnQ9ITAsYS5saXRlcmFsPSEwKX1mb3IodmFyIGQ7Yz10aGlzLmV4cGVjdChcIihcIixcIltcIixcIi5cIik7KVwiKFwiPT09Yy50ZXh0PyhhPXRoaXMuZnVuY3Rpb25DYWxsKGEsZCksZD1udWxsKTpcIltcIj09PWMudGV4dD8oZD1hLGE9dGhpcy5vYmplY3RJbmRleChhKSk6XCIuXCI9PT1jLnRleHQ/KGQ9YSxhPXRoaXMuZmllbGRBY2Nlc3MoYSkpOnRoaXMudGhyb3dFcnJvcihcIklNUE9TU0lCTEVcIik7cmV0dXJuIGF9LHRocm93RXJyb3I6ZnVuY3Rpb24oYSxjKXt0aHJvdyB5YShcInN5bnRheFwiLGMudGV4dCxhLGMuaW5kZXgrMSx0aGlzLnRleHQsdGhpcy50ZXh0LnN1YnN0cmluZyhjLmluZGV4KSk7fSxwZWVrVG9rZW46ZnVuY3Rpb24oKXtpZigwPT09dGhpcy50b2tlbnMubGVuZ3RoKXRocm93IHlhKFwidWVvZVwiLHRoaXMudGV4dCk7cmV0dXJuIHRoaXMudG9rZW5zWzBdfSxcclxucGVlazpmdW5jdGlvbihhLGMsZCxlKXtpZigwPHRoaXMudG9rZW5zLmxlbmd0aCl7dmFyIGc9dGhpcy50b2tlbnNbMF0sZj1nLnRleHQ7aWYoZj09PWF8fGY9PT1jfHxmPT09ZHx8Zj09PWV8fCEoYXx8Y3x8ZHx8ZSkpcmV0dXJuIGd9cmV0dXJuITF9LGV4cGVjdDpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4oYT10aGlzLnBlZWsoYSxjLGQsZSkpPyh0aGlzLmpzb24mJiFhLmpzb24mJnRoaXMudGhyb3dFcnJvcihcImlzIG5vdCB2YWxpZCBqc29uXCIsYSksdGhpcy50b2tlbnMuc2hpZnQoKSxhKTohMX0sY29uc3VtZTpmdW5jdGlvbihhKXt0aGlzLmV4cGVjdChhKXx8dGhpcy50aHJvd0Vycm9yKFwiaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFtcIithK1wiXVwiLHRoaXMucGVlaygpKX0sdW5hcnlGbjpmdW5jdGlvbihhLGMpe3JldHVybiB5KGZ1bmN0aW9uKGQsZSl7cmV0dXJuIGEoZCxlLGMpfSx7Y29uc3RhbnQ6Yy5jb25zdGFudH0pfSx0ZXJuYXJ5Rm46ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB5KGZ1bmN0aW9uKGUsXHJcbmcpe3JldHVybiBhKGUsZyk/YyhlLGcpOmQoZSxnKX0se2NvbnN0YW50OmEuY29uc3RhbnQmJmMuY29uc3RhbnQmJmQuY29uc3RhbnR9KX0sYmluYXJ5Rm46ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB5KGZ1bmN0aW9uKGUsZyl7cmV0dXJuIGMoZSxnLGEsZCl9LHtjb25zdGFudDphLmNvbnN0YW50JiZkLmNvbnN0YW50fSl9LHN0YXRlbWVudHM6ZnVuY3Rpb24oKXtmb3IodmFyIGE9W107OylpZigwPHRoaXMudG9rZW5zLmxlbmd0aCYmIXRoaXMucGVlayhcIn1cIixcIilcIixcIjtcIixcIl1cIikmJmEucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpLCF0aGlzLmV4cGVjdChcIjtcIikpcmV0dXJuIDE9PT1hLmxlbmd0aD9hWzBdOmZ1bmN0aW9uKGMsZCl7Zm9yKHZhciBlLGc9MDtnPGEubGVuZ3RoO2crKyl7dmFyIGY9YVtnXTtmJiYoZT1mKGMsZCkpfXJldHVybiBlfX0sZmlsdGVyQ2hhaW46ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5leHByZXNzaW9uKCksYzs7KWlmKGM9dGhpcy5leHBlY3QoXCJ8XCIpKWE9XHJcbnRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMuZmlsdGVyKCkpO2Vsc2UgcmV0dXJuIGF9LGZpbHRlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmV4cGVjdCgpLGM9dGhpcy4kZmlsdGVyKGEudGV4dCksZD1bXTs7KWlmKGE9dGhpcy5leHBlY3QoXCI6XCIpKWQucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7ZWxzZXt2YXIgZT1mdW5jdGlvbihhLGUsaCl7aD1baF07Zm9yKHZhciBtPTA7bTxkLmxlbmd0aDttKyspaC5wdXNoKGRbbV0oYSxlKSk7cmV0dXJuIGMuYXBwbHkoYSxoKX07cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGV9fX0sZXhwcmVzc2lvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmFzc2lnbm1lbnQoKX0sYXNzaWdubWVudDpmdW5jdGlvbigpe3ZhciBhPXRoaXMudGVybmFyeSgpLGMsZDtyZXR1cm4oZD10aGlzLmV4cGVjdChcIj1cIikpPyhhLmFzc2lnbnx8dGhpcy50aHJvd0Vycm9yKFwiaW1wbGllcyBhc3NpZ25tZW50IGJ1dCBbXCIrdGhpcy50ZXh0LnN1YnN0cmluZygwLGQuaW5kZXgpK1xyXG5cIl0gY2FuIG5vdCBiZSBhc3NpZ25lZCB0b1wiLGQpLGM9dGhpcy50ZXJuYXJ5KCksZnVuY3Rpb24oZCxnKXtyZXR1cm4gYS5hc3NpZ24oZCxjKGQsZyksZyl9KTphfSx0ZXJuYXJ5OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5sb2dpY2FsT1IoKSxjLGQ7aWYodGhpcy5leHBlY3QoXCI/XCIpKXtjPXRoaXMudGVybmFyeSgpO2lmKGQ9dGhpcy5leHBlY3QoXCI6XCIpKXJldHVybiB0aGlzLnRlcm5hcnlGbihhLGMsdGhpcy50ZXJuYXJ5KCkpO3RoaXMudGhyb3dFcnJvcihcImV4cGVjdGVkIDpcIixkKX1lbHNlIHJldHVybiBhfSxsb2dpY2FsT1I6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5sb2dpY2FsQU5EKCksYzs7KWlmKGM9dGhpcy5leHBlY3QoXCJ8fFwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMubG9naWNhbEFORCgpKTtlbHNlIHJldHVybiBhfSxsb2dpY2FsQU5EOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5lcXVhbGl0eSgpLGM7aWYoYz10aGlzLmV4cGVjdChcIiYmXCIpKWE9dGhpcy5iaW5hcnlGbihhLFxyXG5jLmZuLHRoaXMubG9naWNhbEFORCgpKTtyZXR1cm4gYX0sZXF1YWxpdHk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnJlbGF0aW9uYWwoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCI9PVwiLFwiIT1cIixcIj09PVwiLFwiIT09XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5lcXVhbGl0eSgpKTtyZXR1cm4gYX0scmVsYXRpb25hbDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuYWRkaXRpdmUoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCI8XCIsXCI+XCIsXCI8PVwiLFwiPj1cIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLnJlbGF0aW9uYWwoKSk7cmV0dXJuIGF9LGFkZGl0aXZlOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMubXVsdGlwbGljYXRpdmUoKSxjO2M9dGhpcy5leHBlY3QoXCIrXCIsXCItXCIpOylhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMubXVsdGlwbGljYXRpdmUoKSk7cmV0dXJuIGF9LG11bHRpcGxpY2F0aXZlOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMudW5hcnkoKSxjO2M9dGhpcy5leHBlY3QoXCIqXCIsXHJcblwiL1wiLFwiJVwiKTspYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLnVuYXJ5KCkpO3JldHVybiBhfSx1bmFyeTpmdW5jdGlvbigpe3ZhciBhO3JldHVybiB0aGlzLmV4cGVjdChcIitcIik/dGhpcy5wcmltYXJ5KCk6KGE9dGhpcy5leHBlY3QoXCItXCIpKT90aGlzLmJpbmFyeUZuKFlhLlpFUk8sYS5mbix0aGlzLnVuYXJ5KCkpOihhPXRoaXMuZXhwZWN0KFwiIVwiKSk/dGhpcy51bmFyeUZuKGEuZm4sdGhpcy51bmFyeSgpKTp0aGlzLnByaW1hcnkoKX0sZmllbGRBY2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxkPXRoaXMuZXhwZWN0KCkudGV4dCxlPXdjKGQsdGhpcy5vcHRpb25zLHRoaXMudGV4dCk7cmV0dXJuIHkoZnVuY3Rpb24oYyxkLGgpe3JldHVybiBlKGh8fGEoYyxkKSl9LHthc3NpZ246ZnVuY3Rpb24oZSxmLGgpe3JldHVybiBqYihhKGUsaCksZCxmLGMudGV4dCxjLm9wdGlvbnMpfX0pfSxvYmplY3RJbmRleDpmdW5jdGlvbihhKXt2YXIgYz10aGlzLGQ9dGhpcy5leHByZXNzaW9uKCk7XHJcbnRoaXMuY29uc3VtZShcIl1cIik7cmV0dXJuIHkoZnVuY3Rpb24oZSxnKXt2YXIgZj1hKGUsZyksaD1kKGUsZyksbTtpZighZilyZXR1cm4gczsoZj1YYShmW2hdLGMudGV4dCkpJiYoZi50aGVuJiZjLm9wdGlvbnMudW53cmFwUHJvbWlzZXMpJiYobT1mLFwiJCR2XCJpbiBmfHwobS4kJHY9cyxtLnRoZW4oZnVuY3Rpb24oYSl7bS4kJHY9YX0pKSxmPWYuJCR2KTtyZXR1cm4gZn0se2Fzc2lnbjpmdW5jdGlvbihlLGcsZil7dmFyIGg9ZChlLGYpO3JldHVybiBYYShhKGUsZiksYy50ZXh0KVtoXT1nfX0pfSxmdW5jdGlvbkNhbGw6ZnVuY3Rpb24oYSxjKXt2YXIgZD1bXTtpZihcIilcIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG8gZC5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTt3aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIilcIik7dmFyIGU9dGhpcztyZXR1cm4gZnVuY3Rpb24oZyxmKXtmb3IodmFyIGg9W10sbT1jP2MoZyxmKTpnLGs9MDtrPGQubGVuZ3RoO2srKyloLnB1c2goZFtrXShnLFxyXG5mKSk7az1hKGcsZixtKXx8RTtYYShtLGUudGV4dCk7WGEoayxlLnRleHQpO2g9ay5hcHBseT9rLmFwcGx5KG0saCk6ayhoWzBdLGhbMV0saFsyXSxoWzNdLGhbNF0pO3JldHVybiBYYShoLGUudGV4dCl9fSxhcnJheURlY2xhcmF0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9W10sYz0hMDtpZihcIl1cIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG97dmFyIGQ9dGhpcy5leHByZXNzaW9uKCk7YS5wdXNoKGQpO2QuY29uc3RhbnR8fChjPSExKX13aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIl1cIik7cmV0dXJuIHkoZnVuY3Rpb24oYyxkKXtmb3IodmFyIGY9W10saD0wO2g8YS5sZW5ndGg7aCsrKWYucHVzaChhW2hdKGMsZCkpO3JldHVybiBmfSx7bGl0ZXJhbDohMCxjb25zdGFudDpjfSl9LG9iamVjdDpmdW5jdGlvbigpe3ZhciBhPVtdLGM9ITA7aWYoXCJ9XCIhPT10aGlzLnBlZWtUb2tlbigpLnRleHQpe2Rve3ZhciBkPXRoaXMuZXhwZWN0KCksZD1kLnN0cmluZ3x8ZC50ZXh0O1xyXG50aGlzLmNvbnN1bWUoXCI6XCIpO3ZhciBlPXRoaXMuZXhwcmVzc2lvbigpO2EucHVzaCh7a2V5OmQsdmFsdWU6ZX0pO2UuY29uc3RhbnR8fChjPSExKX13aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIn1cIik7cmV0dXJuIHkoZnVuY3Rpb24oYyxkKXtmb3IodmFyIGU9e30sbT0wO208YS5sZW5ndGg7bSsrKXt2YXIgaz1hW21dO2Vbay5rZXldPWsudmFsdWUoYyxkKX1yZXR1cm4gZX0se2xpdGVyYWw6ITAsY29uc3RhbnQ6Y30pfX07dmFyIEliPXt9LHJhPXQoXCIkc2NlXCIpLGVhPXtIVE1MOlwiaHRtbFwiLENTUzpcImNzc1wiLFVSTDpcInVybFwiLFJFU09VUkNFX1VSTDpcInJlc291cmNlVXJsXCIsSlM6XCJqc1wifSxUPVIuY3JlYXRlRWxlbWVudChcImFcIiksemM9eGEoUC5sb2NhdGlvbi5ocmVmLCEwKTtBYy4kaW5qZWN0PVtcIiRwcm92aWRlXCJdO0JjLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTtEYy4kaW5qZWN0PVtcIiRsb2NhbGVcIl07dmFyIEdjPVwiLlwiLFBkPXt5eXl5OlgoXCJGdWxsWWVhclwiLDQpLFxyXG55eTpYKFwiRnVsbFllYXJcIiwyLDAsITApLHk6WChcIkZ1bGxZZWFyXCIsMSksTU1NTTprYihcIk1vbnRoXCIpLE1NTTprYihcIk1vbnRoXCIsITApLE1NOlgoXCJNb250aFwiLDIsMSksTTpYKFwiTW9udGhcIiwxLDEpLGRkOlgoXCJEYXRlXCIsMiksZDpYKFwiRGF0ZVwiLDEpLEhIOlgoXCJIb3Vyc1wiLDIpLEg6WChcIkhvdXJzXCIsMSksaGg6WChcIkhvdXJzXCIsMiwtMTIpLGg6WChcIkhvdXJzXCIsMSwtMTIpLG1tOlgoXCJNaW51dGVzXCIsMiksbTpYKFwiTWludXRlc1wiLDEpLHNzOlgoXCJTZWNvbmRzXCIsMiksczpYKFwiU2Vjb25kc1wiLDEpLHNzczpYKFwiTWlsbGlzZWNvbmRzXCIsMyksRUVFRTprYihcIkRheVwiKSxFRUU6a2IoXCJEYXlcIiwhMCksYTpmdW5jdGlvbihhLGMpe3JldHVybiAxMj5hLmdldEhvdXJzKCk/Yy5BTVBNU1swXTpjLkFNUE1TWzFdfSxaOmZ1bmN0aW9uKGEpe2E9LTEqYS5nZXRUaW1lem9uZU9mZnNldCgpO3JldHVybiBhPSgwPD1hP1wiK1wiOlwiXCIpKyhLYihNYXRoWzA8YT9cImZsb29yXCI6XCJjZWlsXCJdKGEvNjApLDIpK1xyXG5LYihNYXRoLmFicyhhJTYwKSwyKSl9fSxPZD0vKCg/OlteeU1kSGhtc2FaRSddKyl8KD86Jyg/OlteJ118JycpKicpfCg/OkUrfHkrfE0rfGQrfEgrfGgrfG0rfHMrfGF8WikpKC4qKS8sTmQ9L15cXC0/XFxkKyQvO0NjLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTt2YXIgTGQ9WSh4KSxNZD1ZKEhhKTtFYy4kaW5qZWN0PVtcIiRwYXJzZVwiXTt2YXIgV2Q9WSh7cmVzdHJpY3Q6XCJFXCIsY29tcGlsZTpmdW5jdGlvbihhLGMpezg+PU4mJihjLmhyZWZ8fGMubmFtZXx8Yy4kc2V0KFwiaHJlZlwiLFwiXCIpLGEuYXBwZW5kKFIuY3JlYXRlQ29tbWVudChcIklFIGZpeFwiKSkpO2lmKCFjLmhyZWYmJiFjLnhsaW5rSHJlZiYmIWMubmFtZSlyZXR1cm4gZnVuY3Rpb24oYSxjKXt2YXIgZz1cIltvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddXCI9PT1MYS5jYWxsKGMucHJvcChcImhyZWZcIikpP1wieGxpbms6aHJlZlwiOlwiaHJlZlwiO2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKGEpe2MuYXR0cihnKXx8YS5wcmV2ZW50RGVmYXVsdCgpfSl9fX0pLFxyXG5NYj17fTtxKGZiLGZ1bmN0aW9uKGEsYyl7aWYoXCJtdWx0aXBsZVwiIT1hKXt2YXIgZD1sYShcIm5nLVwiK2MpO01iW2RdPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5OjEwMCxsaW5rOmZ1bmN0aW9uKGEsZyxmKXthLiR3YXRjaChmW2RdLGZ1bmN0aW9uKGEpe2YuJHNldChjLCEhYSl9KX19fX19KTtxKFtcInNyY1wiLFwic3Jjc2V0XCIsXCJocmVmXCJdLGZ1bmN0aW9uKGEpe3ZhciBjPWxhKFwibmctXCIrYSk7TWJbY109ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6OTksbGluazpmdW5jdGlvbihkLGUsZyl7Zy4kb2JzZXJ2ZShjLGZ1bmN0aW9uKGMpe2MmJihnLiRzZXQoYSxjKSxOJiZlLnByb3AoYSxnW2FdKSl9KX19fX0pO3ZhciBuYj17JGFkZENvbnRyb2w6RSwkcmVtb3ZlQ29udHJvbDpFLCRzZXRWYWxpZGl0eTpFLCRzZXREaXJ0eTpFLCRzZXRQcmlzdGluZTpFfTtIYy4kaW5qZWN0PVtcIiRlbGVtZW50XCIsXCIkYXR0cnNcIixcIiRzY29wZVwiXTt2YXIgSmM9ZnVuY3Rpb24oYSl7cmV0dXJuW1wiJHRpbWVvdXRcIixcclxuZnVuY3Rpb24oYyl7cmV0dXJue25hbWU6XCJmb3JtXCIscmVzdHJpY3Q6YT9cIkVBQ1wiOlwiRVwiLGNvbnRyb2xsZXI6SGMsY29tcGlsZTpmdW5jdGlvbigpe3JldHVybntwcmU6ZnVuY3Rpb24oYSxlLGcsZil7aWYoIWcuYWN0aW9uKXt2YXIgaD1mdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExfTtJYyhlWzBdLFwic3VibWl0XCIsaCk7ZS5vbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtjKGZ1bmN0aW9uKCl7emIoZVswXSxcInN1Ym1pdFwiLGgpfSwwLCExKX0pfXZhciBtPWUucGFyZW50KCkuY29udHJvbGxlcihcImZvcm1cIiksaz1nLm5hbWV8fGcubmdGb3JtO2smJmpiKGEsayxmLGspO2lmKG0pZS5vbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXttLiRyZW1vdmVDb250cm9sKGYpO2smJmpiKGEsayxzLGspO3koZixuYil9KX19fX19XX0sWGQ9SmMoKSxZZD1KYyghMCksWmQ9L14oZnRwfGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/JC8sXHJcbiRkPS9eW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi4tXStAW2EtejAtOS1dKyhcXC5bYS16MC05LV0rKSokL2ksYWU9L15cXHMqKFxcLXxcXCspPyhcXGQrfChcXGQqKFxcLlxcZCopKSlcXHMqJC8sS2M9e3RleHQ6cGIsbnVtYmVyOmZ1bmN0aW9uKGEsYyxkLGUsZyxmKXtwYihhLGMsZCxlLGcsZik7ZS4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGEpe3ZhciBjPWUuJGlzRW1wdHkoYSk7aWYoY3x8YWUudGVzdChhKSlyZXR1cm4gZS4kc2V0VmFsaWRpdHkoXCJudW1iZXJcIiwhMCksXCJcIj09PWE/bnVsbDpjP2E6cGFyc2VGbG9hdChhKTtlLiRzZXRWYWxpZGl0eShcIm51bWJlclwiLCExKTtyZXR1cm4gc30pO2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gZS4kaXNFbXB0eShhKT9cIlwiOlwiXCIrYX0pO2QubWluJiYoYT1mdW5jdGlvbihhKXt2YXIgYz1wYXJzZUZsb2F0KGQubWluKTtyZXR1cm4gb2EoZSxcIm1pblwiLGUuJGlzRW1wdHkoYSl8fGE+PWMsYSl9LGUuJHBhcnNlcnMucHVzaChhKSxlLiRmb3JtYXR0ZXJzLnB1c2goYSkpO1xyXG5kLm1heCYmKGE9ZnVuY3Rpb24oYSl7dmFyIGM9cGFyc2VGbG9hdChkLm1heCk7cmV0dXJuIG9hKGUsXCJtYXhcIixlLiRpc0VtcHR5KGEpfHxhPD1jLGEpfSxlLiRwYXJzZXJzLnB1c2goYSksZS4kZm9ybWF0dGVycy5wdXNoKGEpKTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIG9hKGUsXCJudW1iZXJcIixlLiRpc0VtcHR5KGEpfHxyYihhKSxhKX0pfSx1cmw6ZnVuY3Rpb24oYSxjLGQsZSxnLGYpe3BiKGEsYyxkLGUsZyxmKTthPWZ1bmN0aW9uKGEpe3JldHVybiBvYShlLFwidXJsXCIsZS4kaXNFbXB0eShhKXx8WmQudGVzdChhKSxhKX07ZS4kZm9ybWF0dGVycy5wdXNoKGEpO2UuJHBhcnNlcnMucHVzaChhKX0sZW1haWw6ZnVuY3Rpb24oYSxjLGQsZSxnLGYpe3BiKGEsYyxkLGUsZyxmKTthPWZ1bmN0aW9uKGEpe3JldHVybiBvYShlLFwiZW1haWxcIixlLiRpc0VtcHR5KGEpfHwkZC50ZXN0KGEpLGEpfTtlLiRmb3JtYXR0ZXJzLnB1c2goYSk7ZS4kcGFyc2Vycy5wdXNoKGEpfSxcclxucmFkaW86ZnVuY3Rpb24oYSxjLGQsZSl7dShkLm5hbWUpJiZjLmF0dHIoXCJuYW1lXCIsWmEoKSk7Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXtjWzBdLmNoZWNrZWQmJmEuJGFwcGx5KGZ1bmN0aW9uKCl7ZS4kc2V0Vmlld1ZhbHVlKGQudmFsdWUpfSl9KTtlLiRyZW5kZXI9ZnVuY3Rpb24oKXtjWzBdLmNoZWNrZWQ9ZC52YWx1ZT09ZS4kdmlld1ZhbHVlfTtkLiRvYnNlcnZlKFwidmFsdWVcIixlLiRyZW5kZXIpfSxjaGVja2JveDpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZz1kLm5nVHJ1ZVZhbHVlLGY9ZC5uZ0ZhbHNlVmFsdWU7dyhnKXx8KGc9ITApO3coZil8fChmPSExKTtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7ZS4kc2V0Vmlld1ZhbHVlKGNbMF0uY2hlY2tlZCl9KX0pO2UuJHJlbmRlcj1mdW5jdGlvbigpe2NbMF0uY2hlY2tlZD1lLiR2aWV3VmFsdWV9O2UuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT1nfTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1cclxuZ30pO2UuJHBhcnNlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gYT9nOmZ9KX0saGlkZGVuOkUsYnV0dG9uOkUsc3VibWl0OkUscmVzZXQ6RX0sTGM9W1wiJGJyb3dzZXJcIixcIiRzbmlmZmVyXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVxdWlyZTpcIj9uZ01vZGVsXCIsbGluazpmdW5jdGlvbihkLGUsZyxmKXtmJiYoS2NbeChnLnR5cGUpXXx8S2MudGV4dCkoZCxlLGcsZixjLGEpfX19XSxtYj1cIm5nLXZhbGlkXCIsbGI9XCJuZy1pbnZhbGlkXCIsSWE9XCJuZy1wcmlzdGluZVwiLG9iPVwibmctZGlydHlcIixiZT1bXCIkc2NvcGVcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkYXR0cnNcIixcIiRlbGVtZW50XCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGMsZCxlLGcpe2Z1bmN0aW9uIGYoYSxjKXtjPWM/XCItXCIrY2IoYyxcIi1cIik6XCJcIjtlLnJlbW92ZUNsYXNzKChhP2xiOm1iKStjKS5hZGRDbGFzcygoYT9tYjpsYikrYyl9dGhpcy4kbW9kZWxWYWx1ZT10aGlzLiR2aWV3VmFsdWU9TnVtYmVyLk5hTjtcclxudGhpcy4kcGFyc2Vycz1bXTt0aGlzLiRmb3JtYXR0ZXJzPVtdO3RoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnM9W107dGhpcy4kcHJpc3RpbmU9ITA7dGhpcy4kZGlydHk9ITE7dGhpcy4kdmFsaWQ9ITA7dGhpcy4kaW52YWxpZD0hMTt0aGlzLiRuYW1lPWQubmFtZTt2YXIgaD1nKGQubmdNb2RlbCksbT1oLmFzc2lnbjtpZighbSl0aHJvdyB0KFwibmdNb2RlbFwiKShcIm5vbmFzc2lnblwiLGQubmdNb2RlbCxmYShlKSk7dGhpcy4kcmVuZGVyPUU7dGhpcy4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4gdShhKXx8XCJcIj09PWF8fG51bGw9PT1hfHxhIT09YX07dmFyIGs9ZS5pbmhlcml0ZWREYXRhKFwiJGZvcm1Db250cm9sbGVyXCIpfHxuYixsPTAsbj10aGlzLiRlcnJvcj17fTtlLmFkZENsYXNzKElhKTtmKCEwKTt0aGlzLiRzZXRWYWxpZGl0eT1mdW5jdGlvbihhLGMpe25bYV0hPT0hYyYmKGM/KG5bYV0mJmwtLSxsfHwoZighMCksdGhpcy4kdmFsaWQ9ITAsdGhpcy4kaW52YWxpZD0hMSkpOihmKCExKSxcclxudGhpcy4kaW52YWxpZD0hMCx0aGlzLiR2YWxpZD0hMSxsKyspLG5bYV09IWMsZihjLGEpLGsuJHNldFZhbGlkaXR5KGEsYyx0aGlzKSl9O3RoaXMuJHNldFByaXN0aW5lPWZ1bmN0aW9uKCl7dGhpcy4kZGlydHk9ITE7dGhpcy4kcHJpc3RpbmU9ITA7ZS5yZW1vdmVDbGFzcyhvYikuYWRkQ2xhc3MoSWEpfTt0aGlzLiRzZXRWaWV3VmFsdWU9ZnVuY3Rpb24oZCl7dGhpcy4kdmlld1ZhbHVlPWQ7dGhpcy4kcHJpc3RpbmUmJih0aGlzLiRkaXJ0eT0hMCx0aGlzLiRwcmlzdGluZT0hMSxlLnJlbW92ZUNsYXNzKElhKS5hZGRDbGFzcyhvYiksay4kc2V0RGlydHkoKSk7cSh0aGlzLiRwYXJzZXJzLGZ1bmN0aW9uKGEpe2Q9YShkKX0pO3RoaXMuJG1vZGVsVmFsdWUhPT1kJiYodGhpcy4kbW9kZWxWYWx1ZT1kLG0oYSxkKSxxKHRoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMsZnVuY3Rpb24oYSl7dHJ5e2EoKX1jYXRjaChkKXtjKGQpfX0pKX07dmFyIHA9dGhpczthLiR3YXRjaChmdW5jdGlvbigpe3ZhciBjPVxyXG5oKGEpO2lmKHAuJG1vZGVsVmFsdWUhPT1jKXt2YXIgZD1wLiRmb3JtYXR0ZXJzLGU9ZC5sZW5ndGg7Zm9yKHAuJG1vZGVsVmFsdWU9YztlLS07KWM9ZFtlXShjKTtwLiR2aWV3VmFsdWUhPT1jJiYocC4kdmlld1ZhbHVlPWMscC4kcmVuZGVyKCkpfXJldHVybiBjfSl9XSxjZT1mdW5jdGlvbigpe3JldHVybntyZXF1aXJlOltcIm5nTW9kZWxcIixcIl4/Zm9ybVwiXSxjb250cm9sbGVyOmJlLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGc9ZVswXSxmPWVbMV18fG5iO2YuJGFkZENvbnRyb2woZyk7YS4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7Zi4kcmVtb3ZlQ29udHJvbChnKX0pfX19LGRlPVkoe3JlcXVpcmU6XCJuZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsZCxlKXtlLiR2aWV3Q2hhbmdlTGlzdGVuZXJzLnB1c2goZnVuY3Rpb24oKXthLiRldmFsKGQubmdDaGFuZ2UpfSl9fSksTWM9ZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpcIj9uZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsXHJcbmQsZSl7aWYoZSl7ZC5yZXF1aXJlZD0hMDt2YXIgZz1mdW5jdGlvbihhKXtpZihkLnJlcXVpcmVkJiZlLiRpc0VtcHR5KGEpKWUuJHNldFZhbGlkaXR5KFwicmVxdWlyZWRcIiwhMSk7ZWxzZSByZXR1cm4gZS4kc2V0VmFsaWRpdHkoXCJyZXF1aXJlZFwiLCEwKSxhfTtlLiRmb3JtYXR0ZXJzLnB1c2goZyk7ZS4kcGFyc2Vycy51bnNoaWZ0KGcpO2QuJG9ic2VydmUoXCJyZXF1aXJlZFwiLGZ1bmN0aW9uKCl7ZyhlLiR2aWV3VmFsdWUpfSl9fX19LGVlPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6XCJuZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZz0oYT0vXFwvKC4qKVxcLy8uZXhlYyhkLm5nTGlzdCkpJiZSZWdFeHAoYVsxXSl8fGQubmdMaXN0fHxcIixcIjtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7aWYoIXUoYSkpe3ZhciBjPVtdO2EmJnEoYS5zcGxpdChnKSxmdW5jdGlvbihhKXthJiZjLnB1c2goWihhKSl9KTtyZXR1cm4gY319KTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIEwoYSk/XHJcbmEuam9pbihcIiwgXCIpOnN9KTtlLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiFhfHwhYS5sZW5ndGh9fX19LGZlPS9eKHRydWV8ZmFsc2V8XFxkKykkLyxnZT1mdW5jdGlvbigpe3JldHVybntwcmlvcml0eToxMDAsY29tcGlsZTpmdW5jdGlvbihhLGMpe3JldHVybiBmZS50ZXN0KGMubmdWYWx1ZSk/ZnVuY3Rpb24oYSxjLGcpe2cuJHNldChcInZhbHVlXCIsYS4kZXZhbChnLm5nVmFsdWUpKX06ZnVuY3Rpb24oYSxjLGcpe2EuJHdhdGNoKGcubmdWYWx1ZSxmdW5jdGlvbihhKXtnLiRzZXQoXCJ2YWx1ZVwiLGEpfSl9fX19LGhlPXNhKGZ1bmN0aW9uKGEsYyxkKXtjLmFkZENsYXNzKFwibmctYmluZGluZ1wiKS5kYXRhKFwiJGJpbmRpbmdcIixkLm5nQmluZCk7YS4kd2F0Y2goZC5uZ0JpbmQsZnVuY3Rpb24oYSl7Yy50ZXh0KGE9PXM/XCJcIjphKX0pfSksaWU9W1wiJGludGVycG9sYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXtjPWEoZC5hdHRyKGUuJGF0dHIubmdCaW5kVGVtcGxhdGUpKTtcclxuZC5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIikuZGF0YShcIiRiaW5kaW5nXCIsYyk7ZS4kb2JzZXJ2ZShcIm5nQmluZFRlbXBsYXRlXCIsZnVuY3Rpb24oYSl7ZC50ZXh0KGEpfSl9fV0samU9W1wiJHNjZVwiLFwiJHBhcnNlXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gZnVuY3Rpb24oZCxlLGcpe2UuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpLmRhdGEoXCIkYmluZGluZ1wiLGcubmdCaW5kSHRtbCk7dmFyIGY9YyhnLm5nQmluZEh0bWwpO2QuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuKGYoZCl8fFwiXCIpLnRvU3RyaW5nKCl9LGZ1bmN0aW9uKGMpe2UuaHRtbChhLmdldFRydXN0ZWRIdG1sKGYoZCkpfHxcIlwiKX0pfX1dLGtlPUxiKFwiXCIsITApLGxlPUxiKFwiT2RkXCIsMCksbWU9TGIoXCJFdmVuXCIsMSksbmU9c2Eoe2NvbXBpbGU6ZnVuY3Rpb24oYSxjKXtjLiRzZXQoXCJuZ0Nsb2FrXCIscyk7YS5yZW1vdmVDbGFzcyhcIm5nLWNsb2FrXCIpfX0pLG9lPVtmdW5jdGlvbigpe3JldHVybntzY29wZTohMCxjb250cm9sbGVyOlwiQFwiLFxyXG5wcmlvcml0eTo1MDB9fV0sTmM9e307cShcImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgbW91c2VlbnRlciBtb3VzZWxlYXZlIGtleWRvd24ga2V5dXAga2V5cHJlc3Mgc3VibWl0IGZvY3VzIGJsdXIgY29weSBjdXQgcGFzdGVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7dmFyIGM9bGEoXCJuZy1cIithKTtOY1tjXT1bXCIkcGFyc2VcIixmdW5jdGlvbihkKXtyZXR1cm57Y29tcGlsZTpmdW5jdGlvbihlLGcpe3ZhciBmPWQoZ1tjXSk7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXtkLm9uKHgoYSksZnVuY3Rpb24oYSl7Yy4kYXBwbHkoZnVuY3Rpb24oKXtmKGMseyRldmVudDphfSl9KX0pfX19fV19KTt2YXIgcGU9W1wiJGFuaW1hdGVcIixmdW5jdGlvbihhKXtyZXR1cm57dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eTo2MDAsdGVybWluYWw6ITAscmVzdHJpY3Q6XCJBXCIsJCR0bGI6ITAsbGluazpmdW5jdGlvbihjLGQsZSxnLGYpe3ZhciBoLFxyXG5tO2MuJHdhdGNoKGUubmdJZixmdW5jdGlvbihnKXtPYShnKT9tfHwobT1jLiRuZXcoKSxmKG0sZnVuY3Rpb24oYyl7Y1tjLmxlbmd0aCsrXT1SLmNyZWF0ZUNvbW1lbnQoXCIgZW5kIG5nSWY6IFwiK2UubmdJZitcIiBcIik7aD17Y2xvbmU6Y307YS5lbnRlcihjLGQucGFyZW50KCksZCl9KSk6KG0mJihtLiRkZXN0cm95KCksbT1udWxsKSxoJiYoYS5sZWF2ZSh1YihoLmNsb25lKSksaD1udWxsKSl9KX19fV0scWU9W1wiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkYW5jaG9yU2Nyb2xsXCIsXCIkYW5pbWF0ZVwiLFwiJHNjZVwiLGZ1bmN0aW9uKGEsYyxkLGUsZyl7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIscHJpb3JpdHk6NDAwLHRlcm1pbmFsOiEwLHRyYW5zY2x1ZGU6XCJlbGVtZW50XCIsY29udHJvbGxlcjpCYS5ub29wLGNvbXBpbGU6ZnVuY3Rpb24oZixoKXt2YXIgbT1oLm5nSW5jbHVkZXx8aC5zcmMsaz1oLm9ubG9hZHx8XCJcIixsPWguYXV0b3Njcm9sbDtyZXR1cm4gZnVuY3Rpb24oZixoLHEscyxBKXt2YXIgdD1cclxuMCx2LHosSz1mdW5jdGlvbigpe3YmJih2LiRkZXN0cm95KCksdj1udWxsKTt6JiYoZS5sZWF2ZSh6KSx6PW51bGwpfTtmLiR3YXRjaChnLnBhcnNlQXNSZXNvdXJjZVVybChtKSxmdW5jdGlvbihnKXt2YXIgbT1mdW5jdGlvbigpeyFEKGwpfHxsJiYhZi4kZXZhbChsKXx8ZCgpfSxxPSsrdDtnPyhhLmdldChnLHtjYWNoZTpjfSkuc3VjY2VzcyhmdW5jdGlvbihhKXtpZihxPT09dCl7dmFyIGM9Zi4kbmV3KCk7cy50ZW1wbGF0ZT1hO2E9QShjLGZ1bmN0aW9uKGEpe0soKTtlLmVudGVyKGEsbnVsbCxoLG0pfSk7dj1jO3o9YTt2LiRlbWl0KFwiJGluY2x1ZGVDb250ZW50TG9hZGVkXCIpO2YuJGV2YWwoayl9fSkuZXJyb3IoZnVuY3Rpb24oKXtxPT09dCYmSygpfSksZi4kZW1pdChcIiRpbmNsdWRlQ29udGVudFJlcXVlc3RlZFwiKSk6KEsoKSxzLnRlbXBsYXRlPW51bGwpfSl9fX19XSxyZT1bXCIkY29tcGlsZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5Oi00MDAsXHJcbnJlcXVpcmU6XCJuZ0luY2x1ZGVcIixsaW5rOmZ1bmN0aW9uKGMsZCxlLGcpe2QuaHRtbChnLnRlbXBsYXRlKTthKGQuY29udGVudHMoKSkoYyl9fX1dLHNlPXNhKHtwcmlvcml0eTo0NTAsY29tcGlsZTpmdW5jdGlvbigpe3JldHVybntwcmU6ZnVuY3Rpb24oYSxjLGQpe2EuJGV2YWwoZC5uZ0luaXQpfX19fSksdGU9c2Eoe3Rlcm1pbmFsOiEwLHByaW9yaXR5OjFFM30pLHVlPVtcIiRsb2NhbGVcIixcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9L3t9L2c7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixsaW5rOmZ1bmN0aW9uKGUsZyxmKXt2YXIgaD1mLmNvdW50LG09Zi4kYXR0ci53aGVuJiZnLmF0dHIoZi4kYXR0ci53aGVuKSxrPWYub2Zmc2V0fHwwLGw9ZS4kZXZhbChtKXx8e30sbj17fSxwPWMuc3RhcnRTeW1ib2woKSxyPWMuZW5kU3ltYm9sKCkscz0vXndoZW4oTWludXMpPyguKykkLztxKGYsZnVuY3Rpb24oYSxjKXtzLnRlc3QoYykmJihsW3goYy5yZXBsYWNlKFwid2hlblwiLFwiXCIpLnJlcGxhY2UoXCJNaW51c1wiLFxyXG5cIi1cIikpXT1nLmF0dHIoZi4kYXR0cltjXSkpfSk7cShsLGZ1bmN0aW9uKGEsZSl7bltlXT1jKGEucmVwbGFjZShkLHAraCtcIi1cIitrK3IpKX0pO2UuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGM9cGFyc2VGbG9hdChlLiRldmFsKGgpKTtpZihpc05hTihjKSlyZXR1cm5cIlwiO2MgaW4gbHx8KGM9YS5wbHVyYWxDYXQoYy1rKSk7cmV0dXJuIG5bY10oZSxnLCEwKX0sZnVuY3Rpb24oYSl7Zy50ZXh0KGEpfSl9fX1dLHZlPVtcIiRwYXJzZVwiLFwiJGFuaW1hdGVcIixmdW5jdGlvbihhLGMpe3ZhciBkPXQoXCJuZ1JlcGVhdFwiKTtyZXR1cm57dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eToxRTMsdGVybWluYWw6ITAsJCR0bGI6ITAsbGluazpmdW5jdGlvbihlLGcsZixoLG0pe3ZhciBrPWYubmdSZXBlYXQsbD1rLm1hdGNoKC9eXFxzKihbXFxzXFxTXSs/KVxccytpblxccysoW1xcc1xcU10rPykoPzpcXHMrdHJhY2tcXHMrYnlcXHMrKFtcXHNcXFNdKz8pKT9cXHMqJC8pLG4scCxyLHMsQSx0LHY9eyRpZDpFYX07aWYoIWwpdGhyb3cgZChcImlleHBcIixcclxuayk7Zj1sWzFdO2g9bFsyXTsobD1sWzNdKT8obj1hKGwpLHA9ZnVuY3Rpb24oYSxjLGQpe3QmJih2W3RdPWEpO3ZbQV09Yzt2LiRpbmRleD1kO3JldHVybiBuKGUsdil9KToocj1mdW5jdGlvbihhLGMpe3JldHVybiBFYShjKX0scz1mdW5jdGlvbihhKXtyZXR1cm4gYX0pO2w9Zi5tYXRjaCgvXig/OihbXFwkXFx3XSspfFxcKChbXFwkXFx3XSspXFxzKixcXHMqKFtcXCRcXHddKylcXCkpJC8pO2lmKCFsKXRocm93IGQoXCJpaWRleHBcIixmKTtBPWxbM118fGxbMV07dD1sWzJdO3ZhciBEPXt9O2UuJHdhdGNoQ29sbGVjdGlvbihoLGZ1bmN0aW9uKGEpe3ZhciBmLGgsbD1nWzBdLG4sdj17fSx5LEIsdyx1LFMsRSx4PVtdO2lmKHFiKGEpKVM9YSxuPXB8fHI7ZWxzZXtuPXB8fHM7Uz1bXTtmb3IodyBpbiBhKWEuaGFzT3duUHJvcGVydHkodykmJlwiJFwiIT13LmNoYXJBdCgwKSYmUy5wdXNoKHcpO1Muc29ydCgpfXk9Uy5sZW5ndGg7aD14Lmxlbmd0aD1TLmxlbmd0aDtmb3IoZj0wO2Y8aDtmKyspaWYodz1hPT09XHJcblM/ZjpTW2ZdLHU9YVt3XSx1PW4odyx1LGYpLHdhKHUsXCJgdHJhY2sgYnlgIGlkXCIpLEQuaGFzT3duUHJvcGVydHkodSkpRT1EW3VdLGRlbGV0ZSBEW3VdLHZbdV09RSx4W2ZdPUU7ZWxzZXtpZih2Lmhhc093blByb3BlcnR5KHUpKXRocm93IHEoeCxmdW5jdGlvbihhKXthJiZhLnNjb3BlJiYoRFthLmlkXT1hKX0pLGQoXCJkdXBlc1wiLGssdSk7eFtmXT17aWQ6dX07dlt1XT0hMX1mb3IodyBpbiBEKUQuaGFzT3duUHJvcGVydHkodykmJihFPURbd10sZj11YihFLmNsb25lKSxjLmxlYXZlKGYpLHEoZixmdW5jdGlvbihhKXthLiQkTkdfUkVNT1ZFRD0hMH0pLEUuc2NvcGUuJGRlc3Ryb3koKSk7Zj0wO2ZvcihoPVMubGVuZ3RoO2Y8aDtmKyspe3c9YT09PVM/ZjpTW2ZdO3U9YVt3XTtFPXhbZl07eFtmLTFdJiYobD14W2YtMV0uY2xvbmVbeFtmLTFdLmNsb25lLmxlbmd0aC0xXSk7aWYoRS5zY29wZSl7Qj1FLnNjb3BlO249bDtkbyBuPW4ubmV4dFNpYmxpbmc7d2hpbGUobiYmbi4kJE5HX1JFTU9WRUQpO1xyXG5FLmNsb25lWzBdIT1uJiZjLm1vdmUodWIoRS5jbG9uZSksbnVsbCx6KGwpKTtsPUUuY2xvbmVbRS5jbG9uZS5sZW5ndGgtMV19ZWxzZSBCPWUuJG5ldygpO0JbQV09dTt0JiYoQlt0XT13KTtCLiRpbmRleD1mO0IuJGZpcnN0PTA9PT1mO0IuJGxhc3Q9Zj09PXktMTtCLiRtaWRkbGU9IShCLiRmaXJzdHx8Qi4kbGFzdCk7Qi4kb2RkPSEoQi4kZXZlbj0wPT09KGYmMSkpO0Uuc2NvcGV8fG0oQixmdW5jdGlvbihhKXthW2EubGVuZ3RoKytdPVIuY3JlYXRlQ29tbWVudChcIiBlbmQgbmdSZXBlYXQ6IFwiK2srXCIgXCIpO2MuZW50ZXIoYSxudWxsLHoobCkpO2w9YTtFLnNjb3BlPUI7RS5jbG9uZT1hO3ZbRS5pZF09RX0pfUQ9dn0pfX19XSx3ZT1bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7Yy4kd2F0Y2goZS5uZ1Nob3csZnVuY3Rpb24oYyl7YVtPYShjKT9cInJlbW92ZUNsYXNzXCI6XCJhZGRDbGFzc1wiXShkLFwibmctaGlkZVwiKX0pfX1dLHhlPVtcIiRhbmltYXRlXCIsXHJcbmZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7Yy4kd2F0Y2goZS5uZ0hpZGUsZnVuY3Rpb24oYyl7YVtPYShjKT9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShkLFwibmctaGlkZVwiKX0pfX1dLHllPXNhKGZ1bmN0aW9uKGEsYyxkKXthLiR3YXRjaChkLm5nU3R5bGUsZnVuY3Rpb24oYSxkKXtkJiZhIT09ZCYmcShkLGZ1bmN0aW9uKGEsZCl7Yy5jc3MoZCxcIlwiKX0pO2EmJmMuY3NzKGEpfSwhMCl9KSx6ZT1bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVxdWlyZTpcIm5nU3dpdGNoXCIsY29udHJvbGxlcjpbXCIkc2NvcGVcIixmdW5jdGlvbigpe3RoaXMuY2FzZXM9e319XSxsaW5rOmZ1bmN0aW9uKGMsZCxlLGcpe3ZhciBmLGgsbT1bXTtjLiR3YXRjaChlLm5nU3dpdGNofHxlLm9uLGZ1bmN0aW9uKGQpe2Zvcih2YXIgbD0wLG49bS5sZW5ndGg7bDxuO2wrKyltW2xdLiRkZXN0cm95KCksYS5sZWF2ZShoW2xdKTtoPVtdO209W107aWYoZj1nLmNhc2VzW1wiIVwiK1xyXG5kXXx8Zy5jYXNlc1tcIj9cIl0pYy4kZXZhbChlLmNoYW5nZSkscShmLGZ1bmN0aW9uKGQpe3ZhciBlPWMuJG5ldygpO20ucHVzaChlKTtkLnRyYW5zY2x1ZGUoZSxmdW5jdGlvbihjKXt2YXIgZT1kLmVsZW1lbnQ7aC5wdXNoKGMpO2EuZW50ZXIoYyxlLnBhcmVudCgpLGUpfSl9KX0pfX19XSxBZT1zYSh7dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eTo4MDAscmVxdWlyZTpcIl5uZ1N3aXRjaFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxnKXtlLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXT1lLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXXx8W107ZS5jYXNlc1tcIiFcIitkLm5nU3dpdGNoV2hlbl0ucHVzaCh7dHJhbnNjbHVkZTpnLGVsZW1lbnQ6Y30pfX0pLEJlPXNhKHt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjgwMCxyZXF1aXJlOlwiXm5nU3dpdGNoXCIsbGluazpmdW5jdGlvbihhLGMsZCxlLGcpe2UuY2FzZXNbXCI/XCJdPWUuY2FzZXNbXCI/XCJdfHxbXTtlLmNhc2VzW1wiP1wiXS5wdXNoKHt0cmFuc2NsdWRlOmcsXHJcbmVsZW1lbnQ6Y30pfX0pLENlPXNhKHtjb250cm9sbGVyOltcIiRlbGVtZW50XCIsXCIkdHJhbnNjbHVkZVwiLGZ1bmN0aW9uKGEsYyl7aWYoIWMpdGhyb3cgdChcIm5nVHJhbnNjbHVkZVwiKShcIm9ycGhhblwiLGZhKGEpKTt0aGlzLiR0cmFuc2NsdWRlPWN9XSxsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe2UuJHRyYW5zY2x1ZGUoZnVuY3Rpb24oYSl7Yy5lbXB0eSgpO2MuYXBwZW5kKGEpfSl9fSksRGU9W1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIsdGVybWluYWw6ITAsY29tcGlsZTpmdW5jdGlvbihjLGQpe1widGV4dC9uZy10ZW1wbGF0ZVwiPT1kLnR5cGUmJmEucHV0KGQuaWQsY1swXS50ZXh0KX19fV0sRWU9dChcIm5nT3B0aW9uc1wiKSxGZT1ZKHt0ZXJtaW5hbDohMH0pLEdlPVtcIiRjb21waWxlXCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGMpe3ZhciBkPS9eXFxzKihbXFxzXFxTXSs/KSg/Olxccythc1xccysoW1xcc1xcU10rPykpPyg/Olxccytncm91cFxccytieVxccysoW1xcc1xcU10rPykpP1xccytmb3JcXHMrKD86KFtcXCRcXHddW1xcJFxcd10qKXwoPzpcXChcXHMqKFtcXCRcXHddW1xcJFxcd10qKVxccyosXFxzKihbXFwkXFx3XVtcXCRcXHddKilcXHMqXFwpKSlcXHMraW5cXHMrKFtcXHNcXFNdKz8pKD86XFxzK3RyYWNrXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/JC8sXHJcbmU9eyRzZXRWaWV3VmFsdWU6RX07cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHJlcXVpcmU6W1wic2VsZWN0XCIsXCI/bmdNb2RlbFwiXSxjb250cm9sbGVyOltcIiRlbGVtZW50XCIsXCIkc2NvcGVcIixcIiRhdHRyc1wiLGZ1bmN0aW9uKGEsYyxkKXt2YXIgbT10aGlzLGs9e30sbD1lLG47bS5kYXRhYm91bmQ9ZC5uZ01vZGVsO20uaW5pdD1mdW5jdGlvbihhLGMsZCl7bD1hO249ZH07bS5hZGRPcHRpb249ZnVuY3Rpb24oYyl7d2EoYywnXCJvcHRpb24gdmFsdWVcIicpO2tbY109ITA7bC4kdmlld1ZhbHVlPT1jJiYoYS52YWwoYyksbi5wYXJlbnQoKSYmbi5yZW1vdmUoKSl9O20ucmVtb3ZlT3B0aW9uPWZ1bmN0aW9uKGEpe3RoaXMuaGFzT3B0aW9uKGEpJiYoZGVsZXRlIGtbYV0sbC4kdmlld1ZhbHVlPT1hJiZ0aGlzLnJlbmRlclVua25vd25PcHRpb24oYSkpfTttLnJlbmRlclVua25vd25PcHRpb249ZnVuY3Rpb24oYyl7Yz1cIj8gXCIrRWEoYykrXCIgP1wiO24udmFsKGMpO2EucHJlcGVuZChuKTthLnZhbChjKTtuLnByb3AoXCJzZWxlY3RlZFwiLFxyXG4hMCl9O20uaGFzT3B0aW9uPWZ1bmN0aW9uKGEpe3JldHVybiBrLmhhc093blByb3BlcnR5KGEpfTtjLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXttLnJlbmRlclVua25vd25PcHRpb249RX0pfV0sbGluazpmdW5jdGlvbihlLGYsaCxtKXtmdW5jdGlvbiBrKGEsYyxkLGUpe2QuJHJlbmRlcj1mdW5jdGlvbigpe3ZhciBhPWQuJHZpZXdWYWx1ZTtlLmhhc09wdGlvbihhKT8oeS5wYXJlbnQoKSYmeS5yZW1vdmUoKSxjLnZhbChhKSxcIlwiPT09YSYmdy5wcm9wKFwic2VsZWN0ZWRcIiwhMCkpOnUoYSkmJnc/Yy52YWwoXCJcIik6ZS5yZW5kZXJVbmtub3duT3B0aW9uKGEpfTtjLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe3kucGFyZW50KCkmJnkucmVtb3ZlKCk7ZC4kc2V0Vmlld1ZhbHVlKGMudmFsKCkpfSl9KX1mdW5jdGlvbiBsKGEsYyxkKXt2YXIgZTtkLiRyZW5kZXI9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgU2EoZC4kdmlld1ZhbHVlKTtxKGMuZmluZChcIm9wdGlvblwiKSxcclxuZnVuY3Rpb24oYyl7Yy5zZWxlY3RlZD1EKGEuZ2V0KGMudmFsdWUpKX0pfTthLiR3YXRjaChmdW5jdGlvbigpe3RhKGUsZC4kdmlld1ZhbHVlKXx8KGU9JChkLiR2aWV3VmFsdWUpLGQuJHJlbmRlcigpKX0pO2Mub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7dmFyIGE9W107cShjLmZpbmQoXCJvcHRpb25cIiksZnVuY3Rpb24oYyl7Yy5zZWxlY3RlZCYmYS5wdXNoKGMudmFsdWUpfSk7ZC4kc2V0Vmlld1ZhbHVlKGEpfSl9KX1mdW5jdGlvbiBuKGUsZixnKXtmdW5jdGlvbiBoKCl7dmFyIGE9e1wiXCI6W119LGM9W1wiXCJdLGQsayxzLHQsdTt0PWcuJG1vZGVsVmFsdWU7dT16KGUpfHxbXTt2YXIgQz1uP05iKHUpOnUsRixKLHg7Sj17fTtzPSExO3ZhciBCLEg7aWYocilpZih3JiZMKHQpKWZvcihzPW5ldyBTYShbXSkseD0wO3g8dC5sZW5ndGg7eCsrKUpbbV09dFt4XSxzLnB1dCh3KGUsSiksdFt4XSk7ZWxzZSBzPW5ldyBTYSh0KTtmb3IoeD0wO0Y9Qy5sZW5ndGgsXHJcbng8Rjt4Kyspe2s9eDtpZihuKXtrPUNbeF07aWYoXCIkXCI9PT1rLmNoYXJBdCgwKSljb250aW51ZTtKW25dPWt9SlttXT11W2tdO2Q9cChlLEopfHxcIlwiOyhrPWFbZF0pfHwoaz1hW2RdPVtdLGMucHVzaChkKSk7cj9kPUQocy5yZW1vdmUodz93KGUsSik6cShlLEopKSk6KHc/KGQ9e30sZFttXT10LGQ9dyhlLGQpPT09dyhlLEopKTpkPXQ9PT1xKGUsSikscz1zfHxkKTtCPWwoZSxKKTtCPUQoQik/QjpcIlwiO2sucHVzaCh7aWQ6dz93KGUsSik6bj9DW3hdOngsbGFiZWw6QixzZWxlY3RlZDpkfSl9cnx8KEF8fG51bGw9PT10P2FbXCJcIl0udW5zaGlmdCh7aWQ6XCJcIixsYWJlbDpcIlwiLHNlbGVjdGVkOiFzfSk6c3x8YVtcIlwiXS51bnNoaWZ0KHtpZDpcIj9cIixsYWJlbDpcIlwiLHNlbGVjdGVkOiEwfSkpO0o9MDtmb3IoQz1jLmxlbmd0aDtKPEM7SisrKXtkPWNbSl07az1hW2RdO3kubGVuZ3RoPD1KPyh0PXtlbGVtZW50OkUuY2xvbmUoKS5hdHRyKFwibGFiZWxcIixkKSxsYWJlbDprLmxhYmVsfSx1PVt0XSx5LnB1c2godSksXHJcbmYuYXBwZW5kKHQuZWxlbWVudCkpOih1PXlbSl0sdD11WzBdLHQubGFiZWwhPWQmJnQuZWxlbWVudC5hdHRyKFwibGFiZWxcIix0LmxhYmVsPWQpKTtCPW51bGw7eD0wO2ZvcihGPWsubGVuZ3RoO3g8Rjt4Kyspcz1rW3hdLChkPXVbeCsxXSk/KEI9ZC5lbGVtZW50LGQubGFiZWwhPT1zLmxhYmVsJiZCLnRleHQoZC5sYWJlbD1zLmxhYmVsKSxkLmlkIT09cy5pZCYmQi52YWwoZC5pZD1zLmlkKSxCWzBdLnNlbGVjdGVkIT09cy5zZWxlY3RlZCYmQi5wcm9wKFwic2VsZWN0ZWRcIixkLnNlbGVjdGVkPXMuc2VsZWN0ZWQpKTooXCJcIj09PXMuaWQmJkE/SD1BOihIPXYuY2xvbmUoKSkudmFsKHMuaWQpLmF0dHIoXCJzZWxlY3RlZFwiLHMuc2VsZWN0ZWQpLnRleHQocy5sYWJlbCksdS5wdXNoKHtlbGVtZW50OkgsbGFiZWw6cy5sYWJlbCxpZDpzLmlkLHNlbGVjdGVkOnMuc2VsZWN0ZWR9KSxCP0IuYWZ0ZXIoSCk6dC5lbGVtZW50LmFwcGVuZChIKSxCPUgpO2Zvcih4Kys7dS5sZW5ndGg+eDspdS5wb3AoKS5lbGVtZW50LnJlbW92ZSgpfWZvcig7eS5sZW5ndGg+XHJcbko7KXkucG9wKClbMF0uZWxlbWVudC5yZW1vdmUoKX12YXIgaztpZighKGs9dC5tYXRjaChkKSkpdGhyb3cgRWUoXCJpZXhwXCIsdCxmYShmKSk7dmFyIGw9YyhrWzJdfHxrWzFdKSxtPWtbNF18fGtbNl0sbj1rWzVdLHA9YyhrWzNdfHxcIlwiKSxxPWMoa1syXT9rWzFdOm0pLHo9YyhrWzddKSx3PWtbOF0/YyhrWzhdKTpudWxsLHk9W1t7ZWxlbWVudDpmLGxhYmVsOlwiXCJ9XV07QSYmKGEoQSkoZSksQS5yZW1vdmVDbGFzcyhcIm5nLXNjb3BlXCIpLEEucmVtb3ZlKCkpO2YuZW1wdHkoKTtmLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXtlLiRhcHBseShmdW5jdGlvbigpe3ZhciBhLGM9eihlKXx8W10sZD17fSxoLGssbCxwLHQsdix1O2lmKHIpZm9yKGs9W10scD0wLHY9eS5sZW5ndGg7cDx2O3ArKylmb3IoYT15W3BdLGw9MSx0PWEubGVuZ3RoO2w8dDtsKyspe2lmKChoPWFbbF0uZWxlbWVudClbMF0uc2VsZWN0ZWQpe2g9aC52YWwoKTtuJiYoZFtuXT1oKTtpZih3KWZvcih1PTA7dTxjLmxlbmd0aCYmXHJcbihkW21dPWNbdV0sdyhlLGQpIT1oKTt1KyspO2Vsc2UgZFttXT1jW2hdO2sucHVzaChxKGUsZCkpfX1lbHNlIGlmKGg9Zi52YWwoKSxcIj9cIj09aClrPXM7ZWxzZSBpZihcIlwiPT09aClrPW51bGw7ZWxzZSBpZih3KWZvcih1PTA7dTxjLmxlbmd0aDt1Kyspe2lmKGRbbV09Y1t1XSx3KGUsZCk9PWgpe2s9cShlLGQpO2JyZWFrfX1lbHNlIGRbbV09Y1toXSxuJiYoZFtuXT1oKSxrPXEoZSxkKTtnLiRzZXRWaWV3VmFsdWUoayl9KX0pO2cuJHJlbmRlcj1oO2UuJHdhdGNoKGgpfWlmKG1bMV0pe3ZhciBwPW1bMF07bT1tWzFdO3ZhciByPWgubXVsdGlwbGUsdD1oLm5nT3B0aW9ucyxBPSExLHcsdj16KFIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSksRT16KFIuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpKSx5PXYuY2xvbmUoKTtoPTA7Zm9yKHZhciBDPWYuY2hpbGRyZW4oKSx4PUMubGVuZ3RoO2g8eDtoKyspaWYoXCJcIj09PUNbaF0udmFsdWUpe3c9QT1DLmVxKGgpO2JyZWFrfXAuaW5pdChtLEEsXHJcbnkpO3ImJihtLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiFhfHwwPT09YS5sZW5ndGh9KTt0P24oZSxmLG0pOnI/bChlLGYsbSk6ayhlLGYsbSxwKX19fX1dLEhlPVtcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGEpe3ZhciBjPXthZGRPcHRpb246RSxyZW1vdmVPcHRpb246RX07cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKGQsZSl7aWYodShlLnZhbHVlKSl7dmFyIGc9YShkLnRleHQoKSwhMCk7Z3x8ZS4kc2V0KFwidmFsdWVcIixkLnRleHQoKSl9cmV0dXJuIGZ1bmN0aW9uKGEsZCxlKXt2YXIgaz1kLnBhcmVudCgpLGw9ay5kYXRhKFwiJHNlbGVjdENvbnRyb2xsZXJcIil8fGsucGFyZW50KCkuZGF0YShcIiRzZWxlY3RDb250cm9sbGVyXCIpO2wmJmwuZGF0YWJvdW5kP2QucHJvcChcInNlbGVjdGVkXCIsITEpOmw9YztnP2EuJHdhdGNoKGcsZnVuY3Rpb24oYSxjKXtlLiRzZXQoXCJ2YWx1ZVwiLGEpO2EhPT1jJiZsLnJlbW92ZU9wdGlvbihjKTtsLmFkZE9wdGlvbihhKX0pOlxyXG5sLmFkZE9wdGlvbihlLnZhbHVlKTtkLm9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2wucmVtb3ZlT3B0aW9uKGUudmFsdWUpfSl9fX19XSxJZT1ZKHtyZXN0cmljdDpcIkVcIix0ZXJtaW5hbDohMH0pOyhDYT1QLmpRdWVyeSk/KHo9Q2EseShDYS5mbix7c2NvcGU6RmEuc2NvcGUsaXNvbGF0ZVNjb3BlOkZhLmlzb2xhdGVTY29wZSxjb250cm9sbGVyOkZhLmNvbnRyb2xsZXIsaW5qZWN0b3I6RmEuaW5qZWN0b3IsaW5oZXJpdGVkRGF0YTpGYS5pbmhlcml0ZWREYXRhfSksdmIoXCJyZW1vdmVcIiwhMCwhMCwhMSksdmIoXCJlbXB0eVwiLCExLCExLCExKSx2YihcImh0bWxcIiwhMSwhMSwhMCkpOno9TztCYS5lbGVtZW50PXo7KGZ1bmN0aW9uKGEpe3koYSx7Ym9vdHN0cmFwOlhiLGNvcHk6JCxleHRlbmQ6eSxlcXVhbHM6dGEsZWxlbWVudDp6LGZvckVhY2g6cSxpbmplY3RvcjpZYixub29wOkUsYmluZDpiYix0b0pzb246cGEsZnJvbUpzb246VGIsaWRlbnRpdHk6QWEsaXNVbmRlZmluZWQ6dSxpc0RlZmluZWQ6RCxcclxuaXNTdHJpbmc6dyxpc0Z1bmN0aW9uOk0saXNPYmplY3Q6Vyxpc051bWJlcjpyYixpc0VsZW1lbnQ6UGMsaXNBcnJheTpMLHZlcnNpb246UmQsaXNEYXRlOkthLGxvd2VyY2FzZTp4LHVwcGVyY2FzZTpIYSxjYWxsYmFja3M6e2NvdW50ZXI6MH0sJCRtaW5FcnI6dCwkJGNzcDpTYn0pO1VhPVVjKFApO3RyeXtVYShcIm5nTG9jYWxlXCIpfWNhdGNoKGMpe1VhKFwibmdMb2NhbGVcIixbXSkucHJvdmlkZXIoXCIkbG9jYWxlXCIscmQpfVVhKFwibmdcIixbXCJuZ0xvY2FsZVwiXSxbXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe2EucHJvdmlkZXIoeyQkc2FuaXRpemVVcmk6QmR9KTthLnByb3ZpZGVyKFwiJGNvbXBpbGVcIixpYykuZGlyZWN0aXZlKHthOldkLGlucHV0OkxjLHRleHRhcmVhOkxjLGZvcm06WGQsc2NyaXB0OkRlLHNlbGVjdDpHZSxzdHlsZTpJZSxvcHRpb246SGUsbmdCaW5kOmhlLG5nQmluZEh0bWw6amUsbmdCaW5kVGVtcGxhdGU6aWUsbmdDbGFzczprZSxuZ0NsYXNzRXZlbjptZSxuZ0NsYXNzT2RkOmxlLFxyXG5uZ0Nsb2FrOm5lLG5nQ29udHJvbGxlcjpvZSxuZ0Zvcm06WWQsbmdIaWRlOnhlLG5nSWY6cGUsbmdJbmNsdWRlOnFlLG5nSW5pdDpzZSxuZ05vbkJpbmRhYmxlOnRlLG5nUGx1cmFsaXplOnVlLG5nUmVwZWF0OnZlLG5nU2hvdzp3ZSxuZ1N0eWxlOnllLG5nU3dpdGNoOnplLG5nU3dpdGNoV2hlbjpBZSxuZ1N3aXRjaERlZmF1bHQ6QmUsbmdPcHRpb25zOkZlLG5nVHJhbnNjbHVkZTpDZSxuZ01vZGVsOmNlLG5nTGlzdDplZSxuZ0NoYW5nZTpkZSxyZXF1aXJlZDpNYyxuZ1JlcXVpcmVkOk1jLG5nVmFsdWU6Z2V9KS5kaXJlY3RpdmUoe25nSW5jbHVkZTpyZX0pLmRpcmVjdGl2ZShNYikuZGlyZWN0aXZlKE5jKTthLnByb3ZpZGVyKHskYW5jaG9yU2Nyb2xsOmNkLCRhbmltYXRlOlRkLCRicm93c2VyOmVkLCRjYWNoZUZhY3Rvcnk6ZmQsJGNvbnRyb2xsZXI6aWQsJGRvY3VtZW50OmpkLCRleGNlcHRpb25IYW5kbGVyOmtkLCRmaWx0ZXI6QWMsJGludGVycG9sYXRlOnBkLCRpbnRlcnZhbDpxZCxcclxuJGh0dHA6bGQsJGh0dHBCYWNrZW5kOm5kLCRsb2NhdGlvbjp0ZCwkbG9nOnVkLCRwYXJzZTp4ZCwkcm9vdFNjb3BlOkFkLCRxOnlkLCRzY2U6RWQsJHNjZURlbGVnYXRlOkRkLCRzbmlmZmVyOkZkLCR0ZW1wbGF0ZUNhY2hlOmdkLCR0aW1lb3V0OkdkLCR3aW5kb3c6SGR9KX1dKX0pKEJhKTt6KFIpLnJlYWR5KGZ1bmN0aW9uKCl7U2MoUixYYil9KX0pKHdpbmRvdyxkb2N1bWVudCk7IWFuZ3VsYXIuJCRjc3AoKSYmYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5maW5kKFwiaGVhZFwiKS5wcmVwZW5kKCc8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+QGNoYXJzZXQgXCJVVEYtOFwiO1tuZ1xcXFw6Y2xvYWtdLFtuZy1jbG9ha10sW2RhdGEtbmctY2xvYWtdLFt4LW5nLWNsb2FrXSwubmctY2xvYWssLngtbmctY2xvYWssLm5nLWhpZGV7ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fW5nXFxcXDpmb3Jte2Rpc3BsYXk6YmxvY2s7fTwvc3R5bGU+Jyk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXIubWluLmpzLm1hcFxyXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicmFyaWVzXFxcXGFuZ3VsYXIubWluLmpzXCIsXCIvbGlicmFyaWVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBwcm9taXNlXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS4xOVxyXG4qIHJlZmVyZW5jZTpcclxuKiAgICBodHRwOi8vcHJvbWlzZXNhcGx1cy5jb20vXHJcbiogICAgaHR0cDovL3d3dy5odG1sNXJvY2tzLmNvbS96aC90dXRvcmlhbHMvZXM2L3Byb21pc2VzL1xyXG4qICAgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb21pc2VcclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB0eXBlID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FsbCcpLnR5cGUsXHJcblx0aXNGdW5jID0gZnVuY3Rpb24oZm4pIHsgcmV0dXJuIHR5cGUoZm4pID09PSAnZnVuY3Rpb24nOyB9LFxyXG5cdGlzQXJyYXkgPSBmdW5jdGlvbihvYmopIHsgcmV0dXJuIHR5cGUob2JqKSA9PT0gJ2FycmF5JzsgfSxcclxuXHR0aGVuYWJsZSA9IGZ1bmN0aW9uKG9iaikgeyByZXR1cm4gb2JqICYmIGlzRnVuYyhvYmpbJ3RoZW4nXSk7IH07XHJcblxyXG52YXIgU1RBVFVTID0geyBwZW5kaW5nOiAwLCBmdWxmaWxsZWQ6IDEsIHJlamVjdGVkOiAyIH07XHJcbnZhciB0aGVuQWxsID0gZnVuY3Rpb24oaXRlcmFibGUsIHJlc29sdmUsIHJlamVjdCkge1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmFibGUubGVuZ3RoOyBpKyspIHsgdmFyIHA7XHJcblx0XHQodGhlbmFibGUocCA9IGl0ZXJhYmxlW2ldKSA/IHAgOiBQcm9taXNlLnJlc29sdmUocCkpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuXHR9XHJcbn07XHJcblxyXG52YXIgUHJvbWlzZSA9IGZ1bmN0aW9uKHJlc29sdmVyKSB7XHJcblx0aWYgKCFpc0Z1bmMocmVzb2x2ZXIpKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Byb21pc2UgY29uc3RydWN0b3IgdGFrZXMgYSBmdW5jdGlvbiBhcmd1bWVudCcpO1xyXG5cdH1cclxuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlcik7XHJcblx0fVxyXG5cdC8vXHJcblx0dGhpcy5fc3RhdHVzID0gU1RBVFVTLnBlbmRpbmc7XHJcblx0dGhpcy5fcmVzb2x2ZXMgPSBbXTsgdGhpcy5fcmVqZWN0cyA9IFtdO1xyXG5cdC8vXHJcblx0dmFyIHNlbGYgPSB0aGlzLCByZXNvbHZlID0gcmVzb2x2ZXIoZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmIChzZWxmLl9zdGF0dXMgPT09IFNUQVRVUy5wZW5kaW5nKSB7XHJcblx0XHRcdHNlbGYuX3N0YXR1cyA9IFNUQVRVUy5mdWxmaWxsZWQ7XHJcblx0XHRcdHNlbGYuX3ZhbHVlID0gdmFsdWU7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5fcmVzb2x2ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRzZWxmLl9yZXNvbHZlc1tpXShzZWxmLl92YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LCByZWplY3QgPSBmdW5jdGlvbihyZWFzb24pIHtcclxuXHRcdGlmIChzZWxmLl9zdGF0dXMgPT09IFNUQVRVUy5wZW5kaW5nKSB7XHJcblx0XHRcdHNlbGYuX3N0YXR1cyA9IFNUQVRVUy5yZWplY3RlZDtcclxuXHRcdFx0c2VsZi5fcmVhc29uID0gcmVhc29uO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuX3JlamVjdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRzZWxmLl9yZWplY3RzW2ldKHNlbGYuX3JlYXNvbik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmVzb2x2ZXIocmVzb2x2ZSwgcmVqZWN0KTtcclxuXHRcdH0gY2F0Y2ggKGV4KSB7XHJcblx0XHRcdHJlamVjdChleCk7XHJcblx0XHR9XHJcblx0fSwgMCk7XHJcbn07XHJcblxyXG5Qcm9taXNlLnByb3RvdHlwZSA9IHtcclxuXHRjb25zdHJ1Y3RvcjogUHJvbWlzZSxcclxuXHRcclxuICAgIF9zdGF0dXM6IG51bGwsIF9yZXNvbHZlczogbnVsbCwgX3JlamVjdHM6IG51bGwsXHJcbiAgICBcclxuICAgIC8vXHJcblx0dGhlbjogZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcclxuXHRcdGlmIChpc0Z1bmMob25GdWxmaWxsZWQpKSB7XHJcblx0XHRcdGlmICh0aGlzLl9zdGF0dXMgPT09IFNUQVRVUy5wZW5kaW5nKSB7IHRoaXMuX3Jlc29sdmVzLnB1c2gob25GdWxmaWxsZWQpOyB9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuX3N0YXR1cyA9PT0gU1RBVFVTLmZ1bGZpbGxlZCkgeyBvbkZ1bGZpbGxlZCh0aGlzLl92YWx1ZSk7IH1cclxuXHRcdH1cclxuXHRcdGlmIChpc0Z1bmMob25SZWplY3RlZCkpIHtcclxuXHRcdFx0aWYgKHRoaXMuX3N0YXR1cyA9PT0gU1RBVFVTLnBlbmRpbmcpIHsgdGhpcy5fcmVqZWN0cy5wdXNoKG9uUmVqZWN0ZWQpOyB9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuX3N0YXR1cyA9PT0gU1RBVFVTLnJlamVjdGVkKSB7IG9uUmVqZWN0ZWQodGhpcy5fcmVhc29uKTsgfVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuX19mdGhlbiA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRkZWxldGUgdGhpcy5fX2Z0aGVuO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fX2Z0aGVuID0gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvL1xyXG5cdGNhdGNoOiBmdW5jdGlvbihvblJlamVjdGVkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xyXG5cdH1cclxufTtcclxuXHJcblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0aWYgKHRoZW5hYmxlKHZhbHVlKSkge1xyXG5cdFx0XHR2YWx1ZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXNvbHZlKHZhbHVlKTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcblByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24ocmVhc29uKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0cmVqZWN0KHJlYXNvbik7XHJcblx0fSk7XHJcbn07XHJcblxyXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKGl0ZXJhYmxlKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0dmFyIHZhbHVlcyA9IFtdO1xyXG5cdFx0aWYgKGlzQXJyYXkoaXRlcmFibGUpKSB7XHJcblx0XHRcdHRoZW5BbGwoaXRlcmFibGUsIGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdFx0dmFsdWVzLnB1c2godmFsdWUpO1xyXG5cdFx0XHRcdGlmICh2YWx1ZXMubGVuZ3RoID09PSBpdGVyYWJsZS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHJlc29sdmUodmFsdWVzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHJlamVjdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXNvbHZlKHZhbHVlcyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5Qcm9taXNlLnJhY2UgPSBmdW5jdGlvbihpdGVyYWJsZSkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdGlmIChpc0FycmF5KGl0ZXJhYmxlKSkge1xyXG5cdFx0XHR0aGVuQWxsKGl0ZXJhYmxlLCByZXNvbHZlLCByZWplY3QpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcbi8vUHJvbWlzZS5uYW1lID0gJ1Byb21pc2UnO1xyXG5cclxuaWYgKHR5cGVvZih3aW5kb3cpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFByb21pc2UuX3Byb21pc2UgPSB3aW5kb3cuUHJvbWlzZTtcclxuXHR3aW5kb3cuUHJvbWlzZSA9IFByb21pc2U7XHJcbn1cclxuaWYgKHR5cGVvZihtb2R1bGUpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdG1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcclxufVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJyYXJpZXNcXFxccnVsZWUtcHJvbWlzZS5qc1wiLFwiL2xpYnJhcmllc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogdGVzdHNcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gW1xyXG5cdHJlcXVpcmUoJy4vdGVzdDEvYWxsJykubmFtZVxyXG5dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi90ZXN0c1xcXFxhbGwuanNcIixcIi90ZXN0c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogdGVzdDFcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbnZhciBuYW1lID0gbW9kdWxlLmV4cG9ydHMubmFtZSA9ICdCbG9nYS50ZXN0MSc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShuYW1lLCBbXSlcclxuLnByb3ZpZGVyKCd0ZXN0UHJvdmlkZXInLCByZXF1aXJlKCcuL3Rlc3QxLXByb3ZpZGVyJykpXHJcbi5mYWN0b3J5KCd0ZXN0RmFjdG9yeScsIHJlcXVpcmUoJy4vdGVzdDEtZmFjdG9yeScpKVxyXG4uc2VydmljZSgndGVzdFNlcnZpY2UnLCByZXF1aXJlKCcuL3Rlc3QxLXNlcnZpY2UnKSk7XHJcblxyXG4vKlxyXG5cclxuaHR0cDovL3d3dy5jbmJsb2dzLmNvbS9zdGFuemh1L3AvMzE4NjY5MC5odG1sXHJcblxyXG7or7TmmI7vvJpcclxuXHJcbuazqOWFpXByb3ZpZGVy77yM55u45b2T5LqO5rOo5YWlcHJvdmlkZXLlhoUkZ2V05a6a5LmJ55qE5Ye95pWw5a6e5L6L55qE6LCD55So44CCXHJcblxyXG7ms6jlhaVmYWN0b3J577yM55u45b2T5LqO5rOo5YWlZmFjdG9yeeWumuS5ieaXtueahOWHveaVsOiwg+eUqOWFpeWPo+OAglxyXG5cclxu5rOo5YWlc2VydmljZe+8jOebuOW9k+S6juazqOWFpXNlcnZpY2XlrprkuYnml7bnmoRmdW5jdGlvbuWunuS+i+OAglxyXG5cclxuXHJcblxyXG5wcm92aWRlciDmmK/ln7rnoYDmlrnms5XvvIxcclxuZmFjdG9yeSDmmK/lr7lwcm92aWRlcueahOWwgeijhVxyXG5zZXJ2aWNlIOaYr+WvuWZhY3RvcnnnmoTlsIHoo4VcclxuXHJcbmZ1bmN0aW9uIHByb3ZpZGVyKG5hbWUsIHByb3ZpZGVyXykge1xyXG5cdGlmIChpc0Z1bmN0aW9uKHByb3ZpZGVyXykgfHwgaXNBcnJheShwcm92aWRlcl8pKSB7IC8v5Yik5pat5piv5Ye95pWw6L+Y5piv5pWw57uEXHJcblx0XHRwcm92aWRlcl8gPSBwcm92aWRlckluamVjdG9yLmluc3RhbnRpYXRlKHByb3ZpZGVyXyk7XHJcblx0fVxyXG5cdGlmICghcHJvdmlkZXJfLiRnZXQpIHtcclxuXHRcdHRocm93IEVycm9yKCdQcm92aWRlciAnICsgbmFtZSArICcgbXVzdCBkZWZpbmUgJGdldCBmYWN0b3J5IG1ldGhvZC4nKTtcclxuXHR9XHJcblx0cmV0dXJuIHByb3ZpZGVyQ2FjaGVbbmFtZSArIHByb3ZpZGVyU3VmZml4XSA9IHByb3ZpZGVyXztcclxufVxyXG4gXHJcbmZ1bmN0aW9uIGZhY3RvcnkobmFtZSwgZmFjdG9yeUZuKSB7XHJcblx0cmV0dXJuIHByb3ZpZGVyKG5hbWUsIHsgJGdldDogZmFjdG9yeUZuIH0pO1xyXG59XHJcbiBcclxuIFxyXG5mdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGNvbnN0cnVjdG9yKSB7XHJcblx0cmV0dXJuIGZhY3RvcnkobmFtZSwgWyckaW5qZWN0b3InLCBmdW5jdGlvbigkaW5qZWN0b3IpIHtcclxuXHRcdHJldHVybiAkaW5qZWN0b3IuaW5zdGFudGlhdGUoY29uc3RydWN0b3IpO1xyXG5cdH1dKTtcclxufVxyXG5cclxuKi9cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdGVzdHNcXFxcdGVzdDFcXFxcYWxsLmpzXCIsXCIvdGVzdHNcXFxcdGVzdDFcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIGZhY3RvcnlcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFx0cmV0dXJuICd0aGlzIGlzIGZhY3RvcnknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdGVzdHNcXFxcdGVzdDFcXFxcdGVzdDEtZmFjdG9yeS5qc1wiLFwiL3Rlc3RzXFxcXHRlc3QxXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBwcm92aWRlclxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuJGdldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAndGhpcyBpcyBwcm92aWRlcic7XHJcbiAgICB9O1xyXG59O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi90ZXN0c1xcXFx0ZXN0MVxcXFx0ZXN0MS1wcm92aWRlci5qc1wiLFwiL3Rlc3RzXFxcXHRlc3QxXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBzZXJ2aWNlXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgdGhpcy5sYWJlbCA9ICd0aGlzIGlzIHNlcnZpY2UnO1xyXG59O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi90ZXN0c1xcXFx0ZXN0MVxcXFx0ZXN0MS1zZXJ2aWNlLmpzXCIsXCIvdGVzdHNcXFxcdGVzdDFcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIHV0aWxpdGllc1xyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxudmFyIHBhZExlZnQgPSBmdW5jdGlvbihzdHIsIGxlbiwgY2hyLCByZXZlcnNlKSB7XHJcblx0aWYgKHN0ciAhPT0gbnVsbCAmJiBzdHIgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0c3RyID0gc3RyICsgJyc7IHZhciBudW0gPSBsZW4gLSBzdHIubGVuZ3RoO1xyXG5cdFx0aWYgKG51bSA+IDApIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG5cdFx0XHRcdGlmIChyZXZlcnNlID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRzdHIgPSBzdHIgKyBjaHI7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHN0ciA9IGNociArIHN0cjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHN0cjtcclxufTtcclxuXHJcbnZhciByZWFkT2JqID0gZnVuY3Rpb24ob2JqLCBuYW1lc3BhY2UpIHtcclxuICAgIHZhciBuYW1lcyA9IG5hbWVzcGFjZS5zcGxpdCgvXFwufFxcW3xcXF18XFwoLyksIHJldCA9IG9iajtcclxuICAgIGFuZ3VsYXIuZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSwgaSkgeyBpZiAoa2V5ICYmIHJldCkgeyByZXQgPSAoaXNOYU4oa2V5KSA/IChrZXkgPT09ICcpJyA/IHJldCgpIDogcmV0W2tleV0pIDogcmV0W3BhcnNlSW50KGtleSwgMTApXSk7IH0gfSk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG5cdGFyZzJhcnI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHNwbGljZSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2U7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oYXJncywgc2tpcCkge1xyXG5cdFx0XHRyZXR1cm4gc3BsaWNlLmNhbGwoYXJncywgc2tpcCB8fCAwKTtcclxuXHRcdH07XHJcblx0fSgpLFxyXG5cclxuXHR0eXBlOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBvcCA9IE9iamVjdC5wcm90b3R5cGU7XHJcblx0XHR2YXIgY2xhc3MydHlwZSA9IHt9LCBuYXRpdmVzID0gJ0Jvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3InLnNwbGl0KCcgJyk7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5hdGl2ZXMubGVuZ3RoOyBpKyspIHtjbGFzczJ0eXBlWydbb2JqZWN0ICcgKyBuYXRpdmVzW2ldICsgJ10nXSA9IG5hdGl2ZXNbaV0udG9Mb3dlckNhc2UoKTsgfVxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gb2JqID09IG51bGwgPyBTdHJpbmcob2JqKSA6IGNsYXNzMnR5cGVbb3AudG9TdHJpbmcuY2FsbChvYmopXSB8fCAnb2JqZWN0JztcclxuXHRcdH07XHJcblx0fSgpLFxyXG5cclxuXHRpc0FuY2VzdG9yOiBmdW5jdGlvbiAocCwgYykge1xyXG4gICAgICAgIHZhciByZXQgPSBmYWxzZTtcclxuICAgICAgICBpZiAocCAmJiBjKSB7XHJcbiAgICAgICAgICAgIGlmIChwLmNvbnRhaW5zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5jb250YWlucyhjKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gISEocC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihjKSAmIDE2KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChjID0gYy5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gYyA9PSBwIHx8IHJldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSxcclxuXHJcblx0cGFkTGVmdDogcGFkTGVmdCxcclxuXHJcblx0cGFkUmlnaHQ6IGZ1bmN0aW9uKHN0ciwgbGVuLCBjaHIpIHtcclxuXHRcdHJldHVybiBwYWRMZWZ0KHN0ciwgbGVuLCBjaHIsIHRydWUpO1xyXG5cdH0sXHJcblxyXG5cdHZpZXdVcmw6IGZ1bmN0aW9uICh1cmwpe1xyXG5cdFx0cmV0dXJuIHVybDtcclxuXHR9LFxyXG5cclxuXHRyZWFkT2JqOiByZWFkT2JqLFxyXG5cclxuXHRpMThuOiBmdW5jdGlvbihrZXksIHZhbCkge1xyXG5cdFx0dmFyIGdldFZhbCA9IHJlYWRPYmooe30sIGtleSk7XHJcblx0XHRyZXR1cm4gZ2V0VmFsICE9PSB1bmRlZmluZWQgPyBnZXRWYWwgOiB2YWw7XHJcblx0fSxcclxuXHJcblx0ZG9tOiB7XHJcblx0XHRwYXJzZVVybDogcmVxdWlyZSgnLi9kb20vcGFyc2VVcmwnKSxcclxuXHRcdGhhc1Njcm9sbDogcmVxdWlyZSgnLi9kb20vaGFzU2Nyb2xsJylcclxuXHR9XHJcbn07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3V0aWxpdGllc1xcXFxhbGwuanNcIixcIi91dGlsaXRpZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIGhhc1Njcm9sbFxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuMjJcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIC8vIHRlc3QgdGFyZ2V0c1xyXG4gICAgdmFyIGVsZW1zID0gZWwgPyBbZWxdIDogW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV07XHJcbiAgICB2YXIgc2Nyb2xsWCA9IGZhbHNlLCBzY3JvbGxZID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG8gPSBlbGVtc1tpXTtcclxuICAgICAgICAvLyB0ZXN0IGhvcml6b250YWxcclxuICAgICAgICB2YXIgc2wgPSBvLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgby5zY3JvbGxMZWZ0ICs9IChzbCA+IDApID8gLTEgOiAxO1xyXG4gICAgICAgIG8uc2Nyb2xsTGVmdCAhPT0gc2wgJiYgKHNjcm9sbFggPSBzY3JvbGxYIHx8IHRydWUpO1xyXG4gICAgICAgIG8uc2Nyb2xsTGVmdCA9IHNsO1xyXG4gICAgICAgIC8vIHRlc3QgdmVydGljYWxcclxuICAgICAgICB2YXIgc3QgPSBvLnNjcm9sbFRvcDtcclxuICAgICAgICBvLnNjcm9sbFRvcCArPSAoc3QgPiAwKSA/IC0xIDogMTtcclxuICAgICAgICBvLnNjcm9sbFRvcCAhPT0gc3QgJiYgKHNjcm9sbFkgPSBzY3JvbGxZIHx8IHRydWUpO1xyXG4gICAgICAgIG8uc2Nyb2xsVG9wID0gc3Q7XHJcbiAgICB9XHJcbiAgICAvLyByZXRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2Nyb2xsWDogc2Nyb2xsWCxcclxuICAgICAgICBzY3JvbGxZOiBzY3JvbGxZXHJcbiAgICB9O1xyXG59O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi91dGlsaXRpZXNcXFxcZG9tXFxcXGhhc1Njcm9sbC5qc1wiLFwiL3V0aWxpdGllc1xcXFxkb21cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIHBhcnNlVXJsXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS4yMlxyXG4qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGEuaHJlZiA9IHVybDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc291cmNlOiB1cmwsXHJcbiAgICAgICAgcHJvdG9jb2w6IGEucHJvdG9jb2wucmVwbGFjZSgnOicsICcnKSxcclxuICAgICAgICBob3N0OiBhLmhvc3RuYW1lLFxyXG4gICAgICAgIHBvcnQ6IGEucG9ydCxcclxuICAgICAgICBxdWVyeTogYS5zZWFyY2gsXHJcbiAgICAgICAgcGFyYW1zOiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge30sXHJcbiAgICAgICAgICAgIHNlZyA9IGEuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykuc3BsaXQoJyYnKSxcclxuICAgICAgICAgICAgbGVuID0gc2VnLmxlbmd0aCwgaSA9IDAsIHM7XHJcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2VnW2ldKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICBzID0gc2VnW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICByZXRbc1swXV0gPSBzWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfSkoKSxcclxuICAgICAgICBmaWxlOiAoYS5wYXRobmFtZS5tYXRjaCgvXFwvKFteXFwvPyNdKykkL2kpIHx8IFssICcnXSlbMV0sXHJcbiAgICAgICAgaGFzaDogYS5oYXNoLnJlcGxhY2UoJyMnLCAnJyksXHJcbiAgICAgICAgcGF0aDogYS5wYXRobmFtZS5yZXBsYWNlKC9eKFteXFwvXSkvLCAnLyQxJyksXHJcbiAgICAgICAgcmVsYXRpdmU6IChhLmhyZWYubWF0Y2goL3Rwcz86XFwvXFwvW15cXC9dKyguKykvKSB8fCBbLCAnJ10pWzFdLFxyXG4gICAgICAgIHNlZ21lbnRzOiBhLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJy8nKVxyXG4gICAgfTtcclxufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdXRpbGl0aWVzXFxcXGRvbVxcXFxwYXJzZVVybC5qc1wiLFwiL3V0aWxpdGllc1xcXFxkb21cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5fdXNlVHlwZWRBcnJheXNgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAoY29tcGF0aWJsZSBkb3duIHRvIElFNilcbiAqL1xuQnVmZmVyLl91c2VUeXBlZEFycmF5cyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIERldGVjdCBpZiBicm93c2VyIHN1cHBvcnRzIFR5cGVkIEFycmF5cy4gU3VwcG9ydGVkIGJyb3dzZXJzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssXG4gIC8vIENocm9tZSA3KywgU2FmYXJpIDUuMSssIE9wZXJhIDExLjYrLCBpT1MgNC4yKy4gSWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhZGRpbmdcbiAgLy8gcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLCB0aGVuIHRoYXQncyB0aGUgc2FtZSBhcyBubyBgVWludDhBcnJheWAgc3VwcG9ydFxuICAvLyBiZWNhdXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBhZGQgYWxsIHRoZSBub2RlIEJ1ZmZlciBBUEkgbWV0aG9kcy4gVGhpcyBpcyBhbiBpc3N1ZVxuICAvLyBpbiBGaXJlZm94IDQtMjkuIE5vdyBmaXhlZDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJlxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nIC8vIENocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBXb3JrYXJvdW5kOiBub2RlJ3MgYmFzZTY0IGltcGxlbWVudGF0aW9uIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBzdHJpbmdzXG4gIC8vIHdoaWxlIGJhc2U2NC1qcyBkb2VzIG5vdC5cbiAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JyAmJiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHN1YmplY3QgPSBzdHJpbmd0cmltKHN1YmplY3QpXG4gICAgd2hpbGUgKHN1YmplY3QubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgICAgc3ViamVjdCA9IHN1YmplY3QgKyAnPSdcbiAgICB9XG4gIH1cblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdC5sZW5ndGgpIC8vIGFzc3VtZSB0aGF0IG9iamVjdCBpcyBhcnJheS1saWtlXG4gIGVsc2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG5lZWRzIHRvIGJlIGEgbnVtYmVyLCBhcnJheSBvciBzdHJpbmcuJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSlcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICAgIGVsc2VcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdFtpXVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBTVEFUSUMgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9PSBudWxsICYmIGIgIT09IHVuZGVmaW5lZCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggLyAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgYXNzZXJ0KGlzQXJyYXkobGlzdCksICdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0LCBbdG90YWxMZW5ndGhdKVxcbicgK1xuICAgICAgJ2xpc3Qgc2hvdWxkIGJlIGFuIEFycmF5LicpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHRvdGFsTGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbi8vIEJVRkZFUiBJTlNUQU5DRSBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBfaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBhc3NlcnQoc3RyTGVuICUgMiA9PT0gMCwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGFzc2VydCghaXNOYU4oYnl0ZSksICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9IGkgKiAyXG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIF91dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gX2FzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuICBzdGFydCA9IE51bWJlcihzdGFydCkgfHwgMFxuICBlbmQgPSAoZW5kICE9PSB1bmRlZmluZWQpXG4gICAgPyBOdW1iZXIoZW5kKVxuICAgIDogZW5kID0gc2VsZi5sZW5ndGhcblxuICAvLyBGYXN0cGF0aCBlbXB0eSBzdHJpbmdzXG4gIGlmIChlbmQgPT09IHN0YXJ0KVxuICAgIHJldHVybiAnJ1xuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgYXNzZXJ0KHRhcmdldF9zdGFydCA+PSAwICYmIHRhcmdldF9zdGFydCA8IHRhcmdldC5sZW5ndGgsXG4gICAgICAndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgc291cmNlLmxlbmd0aCwgJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMCB8fCAhQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIF91dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gX2FzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKVxuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBfYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gX2FzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBfaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpKzFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IGNsYW1wKHN0YXJ0LCBsZW4sIDApXG4gIGVuZCA9IGNsYW1wKGVuZCwgbGVuLCBsZW4pXG5cbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gIH0gZWxzZSB7XG4gICAgdmFsID0gYnVmW29mZnNldF0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMl0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICAgIHZhbCB8PSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXQgKyAzXSA8PCAyNCA+Pj4gMClcbiAgfSBlbHNlIHtcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAxXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAyXSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDNdXG4gICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXRdIDw8IDI0ID4+PiAwKVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCxcbiAgICAgICAgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHZhciBuZWcgPSB0aGlzW29mZnNldF0gJiAweDgwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDE2KGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQzMihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwMDAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRGbG9hdCAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZERvdWJsZSAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmYpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKSByZXR1cm5cblxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgICAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZiwgLTB4ODApXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIHRoaXMud3JpdGVVSW50OCh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydClcbiAgZWxzZVxuICAgIHRoaXMud3JpdGVVSW50OCgweGZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmYsIC0weDgwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MTYoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgMHhmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQzMihidWYsIDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLFxuICAgICAgICAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmNoYXJDb2RlQXQoMClcbiAgfVxuXG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSksICd2YWx1ZSBpcyBub3QgYSBudW1iZXInKVxuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCB0aGlzLmxlbmd0aCwgJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHRoaXMubGVuZ3RoLCAnZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdGhpc1tpXSA9IHZhbHVlXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0ID0gW11cbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBvdXRbaV0gPSB0b0hleCh0aGlzW2ldKVxuICAgIGlmIChpID09PSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTKSB7XG4gICAgICBvdXRbaSArIDFdID0gJy4uLidcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgb3V0LmpvaW4oJyAnKSArICc+J1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSlcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG4vLyBzbGljZShzdGFydCwgZW5kKVxuZnVuY3Rpb24gY2xhbXAgKGluZGV4LCBsZW4sIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICBpbmRleCA9IH5+aW5kZXg7ICAvLyBDb2VyY2UgdG8gaW50ZWdlci5cbiAgaWYgKGluZGV4ID49IGxlbikgcmV0dXJuIGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIGluZGV4ICs9IGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGNvZXJjZSAobGVuZ3RoKSB7XG4gIC8vIENvZXJjZSBsZW5ndGggdG8gYSBudW1iZXIgKHBvc3NpYmx5IE5hTiksIHJvdW5kIHVwXG4gIC8vIGluIGNhc2UgaXQncyBmcmFjdGlvbmFsIChlLmcuIDEyMy40NTYpIHRoZW4gZG8gYVxuICAvLyBkb3VibGUgbmVnYXRlIHRvIGNvZXJjZSBhIE5hTiB0byAwLiBFYXN5LCByaWdodD9cbiAgbGVuZ3RoID0gfn5NYXRoLmNlaWwoK2xlbmd0aClcbiAgcmV0dXJuIGxlbmd0aCA8IDAgPyAwIDogbGVuZ3RoXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKHN1YmplY3QpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChzdWJqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdWJqZWN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICB9KShzdWJqZWN0KVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKVxuICAgICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKVxuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBwb3NcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG5cbi8qXG4gKiBXZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGludGVnZXIuIFRoaXMgbWVhbnMgdGhhdCBpdFxuICogaXMgbm9uLW5lZ2F0aXZlLiBJdCBoYXMgbm8gZnJhY3Rpb25hbCBjb21wb25lbnQgYW5kIHRoYXQgaXQgZG9lcyBub3RcbiAqIGV4Y2VlZCB0aGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlLlxuICovXG5mdW5jdGlvbiB2ZXJpZnVpbnQgKHZhbHVlLCBtYXgpIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlID49IDAsICdzcGVjaWZpZWQgYSBuZWdhdGl2ZSB2YWx1ZSBmb3Igd3JpdGluZyBhbiB1bnNpZ25lZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBpcyBsYXJnZXIgdGhhbiBtYXhpbXVtIHZhbHVlIGZvciB0eXBlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZzaW50ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZJRUVFNzU0ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbn1cblxuZnVuY3Rpb24gYXNzZXJ0ICh0ZXN0LCBtZXNzYWdlKSB7XG4gIGlmICghdGVzdCkgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ0ZhaWxlZCBhc3NlcnRpb24nKVxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclxcXFxpbmRleC5qc1wiLFwiLy4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgWkVSTyAgID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSClcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRtb2R1bGUuZXhwb3J0cy50b0J5dGVBcnJheSA9IGI2NFRvQnl0ZUFycmF5XG5cdG1vZHVsZS5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KCkpXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnVmZmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYXNlNjQtanNcXFxcbGliXFxcXGI2NC5qc1wiLFwiLy4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclxcXFxub2RlX21vZHVsZXNcXFxcYmFzZTY0LWpzXFxcXGxpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgbkJpdHMgPSAtNyxcbiAgICAgIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMCxcbiAgICAgIGQgPSBpc0xFID8gLTEgOiAxLFxuICAgICAgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYyxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCksXG4gICAgICBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSksXG4gICAgICBkID0gaXNMRSA/IDEgOiAtMSxcbiAgICAgIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclxcXFxub2RlX21vZHVsZXNcXFxcaWVlZTc1NFxcXFxpbmRleC5qc1wiLFwiLy4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclxcXFxub2RlX21vZHVsZXNcXFxcaWVlZTc1NFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXHByb2Nlc3NcXFxcYnJvd3Nlci5qc1wiLFwiLy4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXHByb2Nlc3NcIikiXX0=
