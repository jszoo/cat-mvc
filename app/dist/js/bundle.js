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
},{"./home-controller":2,"./main-controller":3,"buffer":25,"ngpmcQ":28}],2:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],3:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],4:[function(require,module,exports){
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
},{"./blog-service":5,"buffer":25,"ngpmcQ":28}],5:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],6:[function(require,module,exports){
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
},{"./header":7,"buffer":25,"ngpmcQ":28}],7:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],8:[function(require,module,exports){
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

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_cc731101.js","/")
},{"./controllers/all":1,"./dataservice/all":4,"./directives/all":6,"./libraries/all":9,"./tests/all":16,"./utilities/all":21,"buffer":25,"ngpmcQ":28}],9:[function(require,module,exports){
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
},{"./angular-animate.min":10,"./angular-resource.min":11,"./angular-route.min":12,"./angular-touch.min":13,"./angular.min":14,"./rulee-promise":15,"buffer":25,"ngpmcQ":28}],10:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],11:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],12:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],13:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],14:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],15:[function(require,module,exports){
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
	thenable = function(obj) { return obj && isFunc(obj['then']); };

var STATUS = {
	pending: 0,
	fulfilled: 1,
	rejected: 2 
};

var Promise = function(resolver) {
	if (!isFunc(resolver)) {
		throw new Error('Promise constructor takes a function argument');
	}
	this._status = STATUS.pending;
	this._resolves = [];
	this._rejects = [];
	var self = this;
	resolver(function(value) {
		if (self._status === STATUS.pending) {
			self._status = STATUS.fulfilled;
			self._value = value;
			for (var i = 0; i < self._resolves.length; i++) {
				self._resolves[i](self._value);
			}
		}
	}, function(reason) {
		if (self._status === STATUS.pending) {
			self._status = STATUS.rejected;
			self._reason = reason;
			for (var i = 0; i < self._rejects.length; i++) {
				self._rejects[i](self._reason);
			}
		}
	});
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
	var doResolve, doReject, promise = new Promise(function(resolve, reject) {
		doResolve = resolve; doReject = reject;
	});
	if (thenable(value)) {
		value.then(doResolve, doReject);
	} else {
		doResolve(value);
	}
	return promise;
};

Promise.reject = function(reason) {
	return new Promise(function(resolve, reject) {
		reject(reason);
	});
};

Promise.all = function(iterable) {
	var doResolve, doReject, promise = new Promise(function(resolve, reject) {
		doResolve = resolve; doReject = reject;
	});
	if (type(iterable) === 'array') {
		var resolveNum = 0, rejectNum = 0, values = [],
		resolve = function(value) {
			values.push(value);
			if (++resolveNum === iterable.length) {
				doResolve(values);
			}
		},
		reject = function(reason) {
			if (++rejectNum === 1) {
				doReject(reason);
			}
		};
		for (var i = 0; i < iterable.length; i++) {
			var p = iterable[i];
			if (!thenable(p)) {
				// cast
				p = Promise.resolve(p);
			}
			p.then(resolve, reject);
		}
	} else {
		doResolve();
	}
	return promise;
};

Promise.race = function(iterable) {
	var doResolve, doReject, promise = new Promise(function(resolve, reject) {
		doResolve = resolve; doReject = reject;
	});
	if (type(iterable) === 'array') {
		var doneNum = 0,
		resolve = function(value) {
			if (++doneNum === 1) {
				doResolve(value);
			}
		},
		reject = function(reason) {
			if (++doneNum === 1) {
				doReject(reason);
			}
		};
		for (var i = 0; i < iterable.length; i++) {
			if (thenable(iterable[i])) {
				iterable[i].then(resolve, reject);
			}
		}
	}
	return promise;
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
},{"../utilities/all":21,"buffer":25,"ngpmcQ":28}],16:[function(require,module,exports){
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
},{"./test1/all":17,"buffer":25,"ngpmcQ":28}],17:[function(require,module,exports){
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
},{"./test1-factory":18,"./test1-provider":19,"./test1-service":20,"buffer":25,"ngpmcQ":28}],18:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],19:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],20:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],21:[function(require,module,exports){
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
		hasScroll: require('./dom/hasScroll'),
		scrollbarWidth: require('./dom/scrollbarWidth')
	}
};
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utilities\\all.js","/utilities")
},{"./dom/hasScroll":22,"./dom/parseUrl":23,"./dom/scrollbarWidth":24,"buffer":25,"ngpmcQ":28}],22:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],23:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],24:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* scrollbar width
* author: ronglin
* create date: 2014.5.22
*/

module.exports = (function () {
    var helper = document.createElement('div');
    // fix opera bug: put style (position:absolute;top:-99999px;) to hide the test div, or the page would be flashed.
    helper.style.cssText = 'overflow:scroll;width:100px;height:100px;position:absolute;top:-99999px;';
    document.body.appendChild(helper);
    var ret = {
        vertical: helper.offsetWidth - helper.clientWidth,
        horizontal: helper.offsetHeight - helper.clientHeight
    };
    document.body.removeChild(helper);
    return ret;
})();
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utilities\\dom\\scrollbarWidth.js","/utilities\\dom")
},{"buffer":25,"ngpmcQ":28}],25:[function(require,module,exports){
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
},{"base64-js":26,"buffer":25,"ieee754":27,"ngpmcQ":28}],26:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],27:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}],28:[function(require,module,exports){
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
},{"buffer":25,"ngpmcQ":28}]},{},[8])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJFOlxcVGVjaG5vbG9neVxcamRcXGJsb2dhXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9jb250cm9sbGVycy9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9jb250cm9sbGVycy9ob21lLWNvbnRyb2xsZXIuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9jb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9kYXRhc2VydmljZS9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9kYXRhc2VydmljZS9ibG9nLXNlcnZpY2UuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9kaXJlY3RpdmVzL2FsbC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2RpcmVjdGl2ZXMvaGVhZGVyLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9hcHAvanMvZmFrZV9jYzczMTEwMS5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy9saWJyYXJpZXMvYW5ndWxhci1hbmltYXRlLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLXJlc291cmNlLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLXJvdXRlLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLXRvdWNoLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL2xpYnJhcmllcy9ydWxlZS1wcm9taXNlLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9hcHAvanMvdGVzdHMvYWxsLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9hcHAvanMvdGVzdHMvdGVzdDEvYWxsLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9hcHAvanMvdGVzdHMvdGVzdDEvdGVzdDEtZmFjdG9yeS5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL3Rlc3RzL3Rlc3QxL3Rlc3QxLXByb3ZpZGVyLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9hcHAvanMvdGVzdHMvdGVzdDEvdGVzdDEtc2VydmljZS5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL3V0aWxpdGllcy9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy91dGlsaXRpZXMvZG9tL2hhc1Njcm9sbC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2EvYXBwL2pzL3V0aWxpdGllcy9kb20vcGFyc2VVcmwuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL2FwcC9qcy91dGlsaXRpZXMvZG9tL3Njcm9sbGJhcldpZHRoLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ibG9nYS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCJFOi9UZWNobm9sb2d5L2pkL2Jsb2dhL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvYmxvZ2Evbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIGNvbnRyb2xsZXJzXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG52YXIgbmFtZSA9IG1vZHVsZS5leHBvcnRzLm5hbWUgPSAnQmxvZ2EuY29udHJvbGxlcnMnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobmFtZSwgW10pXHJcbi5jb250cm9sbGVyKCdNYWluQ3RybCcsIHJlcXVpcmUoJy4vbWFpbi1jb250cm9sbGVyJykpXHJcbi5jb250cm9sbGVyKCdIb21lQ3RybCcsIHJlcXVpcmUoJy4vaG9tZS1jb250cm9sbGVyJykpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb250cm9sbGVyc1xcXFxhbGwuanNcIixcIi9jb250cm9sbGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogaG9tZS1jb250cm9sbGVyXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFsnJHNjb3BlJywgJ0Jsb2dzJywgZnVuY3Rpb24gKCRzY29wZSwgQmxvZ3MpIHtcclxuICAgICRzY29wZS5ibG9ncyA9IEJsb2dzLnF1ZXJ5KDIwKTtcclxufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbnRyb2xsZXJzXFxcXGhvbWUtY29udHJvbGxlci5qc1wiLFwiL2NvbnRyb2xsZXJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBtYWluLWNvbnRyb2xsZXJcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICckd2luZG93JywgJyRsb2NhdGlvbicsICd0ZXN0U2VydmljZScsICd0ZXN0RmFjdG9yeScsICd0ZXN0UHJvdmlkZXInLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkbG9jYXRpb24sIHRlc3RTZXJ2aWNlLCB0ZXN0RmFjdG9yeSwgdGVzdFByb3ZpZGVyKSB7XHJcbiAgICAkc2NvcGUuc2xpZGUgPSAnJztcclxuICAgICRyb290U2NvcGUuYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuc2xpZGUgPSAnc2xpZGUtcmlnaHQnO1xyXG4gICAgICAgICR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9O1xyXG4gICAgJHJvb3RTY29wZS5nbyA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNsaWRlID0gJ3NsaWRlLWxlZnQnO1xyXG4gICAgICAgICRsb2NhdGlvbi51cmwocGF0aCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRlc3RFbmFibGVkID0gdHJ1ZTtcclxuICAgIGlmICh0ZXN0RW5hYmxlZCkge1xyXG4gICAgXHQkcm9vdFNjb3BlLnRlc3RFbmFibGVkID0gdGVzdEVuYWJsZWQ7XHJcbiAgICBcdCRyb290U2NvcGUudGVzdHMgPSB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyOiB0ZXN0UHJvdmlkZXIsXHJcbiAgICBcdFx0ZmFjdG9yeTogdGVzdEZhY3RvcnkubGFiZWwoKSxcclxuICAgIFx0XHRzZXJ2aWNlOiB0ZXN0U2VydmljZS5sYWJlbFxyXG4gICAgXHR9O1xyXG4gICAgfVxyXG59XTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29udHJvbGxlcnNcXFxcbWFpbi1jb250cm9sbGVyLmpzXCIsXCIvY29udHJvbGxlcnNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIGRhdGEgc2VydmljZVxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxudmFyIG5hbWUgPSBtb2R1bGUuZXhwb3J0cy5uYW1lID0gJ0Jsb2dhLmRhdGFTZXJ2aWNlJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtdKVxyXG4uZmFjdG9yeSgnQmxvZ3MnLCByZXF1aXJlKCcuL2Jsb2ctc2VydmljZScpKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZGF0YXNlcnZpY2VcXFxcYWxsLmpzXCIsXCIvZGF0YXNlcnZpY2VcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIGJsb2ctc2VydmljZVxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBbZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBxdWVyeTogZnVuY3Rpb24gKHRha2UpIHtcclxuICAgICAgICBcdHJldHVybiBbe1xyXG4gICAgICAgIFx0XHR0aXRsZTondGl0bGUxJyxcclxuICAgICAgICBcdFx0Y29udGVudDonY29udGVudDEnXHJcbiAgICAgICAgXHR9LHtcclxuICAgICAgICBcdFx0dGl0bGU6J3RpdGxlMicsXHJcbiAgICAgICAgXHRcdGNvbnRlbnQ6J2NvbnRlbnQyJ1xyXG4gICAgICAgIFx0fSx7XHJcbiAgICAgICAgXHRcdHRpdGxlOid0aXRsZTMnLFxyXG4gICAgICAgIFx0XHRjb250ZW50Oidjb250ZW50MydcclxuICAgICAgICBcdH0se1xyXG4gICAgICAgIFx0XHR0aXRsZTondGl0bGU0JyxcclxuICAgICAgICBcdFx0Y29udGVudDonY29udGVudDQnXHJcbiAgICAgICAgXHR9LHtcclxuICAgICAgICBcdFx0dGl0bGU6J3RpdGxlNScsXHJcbiAgICAgICAgXHRcdGNvbnRlbnQ6J2NvbnRlbnQ1J1xyXG4gICAgICAgIFx0fV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RhdGFzZXJ2aWNlXFxcXGJsb2ctc2VydmljZS5qc1wiLFwiL2RhdGFzZXJ2aWNlXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBkaXJlY3RpdmVzXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG52YXIgbmFtZSA9IG1vZHVsZS5leHBvcnRzLm5hbWUgPSAnQmxvZ2EuZGlyZWN0aXZlcyc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShuYW1lLCBbXSlcclxuLmRpcmVjdGl2ZSgnYmxvZ2FIZWFkZXInLCByZXF1aXJlKCcuL2hlYWRlcicpKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZGlyZWN0aXZlc1xcXFxhbGwuanNcIixcIi9kaXJlY3RpdmVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBoZWFkZXJcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gWyd1dGlscycsIGZ1bmN0aW9uKHV0aWxzKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRlbXBsYXRlVXJsOiB1dGlscy52aWV3VXJsKCd2aWV3cy9kaXJlY3RpdmVzL2hlYWRlci5odG1sJyksXHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZVxyXG5cdH07XHJcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kaXJlY3RpdmVzXFxcXGhlYWRlci5qc1wiLFwiL2RpcmVjdGl2ZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIG1haW5cclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC40LjIyXHJcbiovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5yZXF1aXJlKCcuL2xpYnJhcmllcy9hbGwnKTtcclxudmFyIHV0aWxpdGllc05hbWUgPSAnQmxvZ2EudXRpbGl0aWVzJztcclxuYW5ndWxhci5tb2R1bGUodXRpbGl0aWVzTmFtZSwgW10pLmNvbnN0YW50KCd1dGlscycsIHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FsbCcpKTtcclxuXHJcbnZhciBkaXJlY3RpdmVzID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2FsbCcpO1xyXG52YXIgZGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuL2RhdGFzZXJ2aWNlL2FsbCcpO1xyXG52YXIgY29udHJvbGxlcnMgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2FsbCcpO1xyXG52YXIgdGVzdHMgPSByZXF1aXJlKCcuL3Rlc3RzL2FsbCcpO1xyXG5cclxudmFyIGJsb2dhID0gYW5ndWxhci5tb2R1bGUoJ0Jsb2dhJywgW1xyXG4gICAgJ25nVG91Y2gnLFxyXG4gICAgJ25nUm91dGUnLFxyXG4gICAgJ25nQW5pbWF0ZScsXHJcbiAgICB1dGlsaXRpZXNOYW1lLFxyXG4gICAgZGlyZWN0aXZlcy5uYW1lLFxyXG4gICAgZGF0YVNlcnZpY2UubmFtZSxcclxuICAgIGNvbnRyb2xsZXJzLm5hbWVcclxuXS5jb25jYXQodGVzdHMpKTtcclxuXHJcbmJsb2dhLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgJ3V0aWxzJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyLCB1dGlscykge1xyXG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2hvbWUnLCB7IHRlbXBsYXRlVXJsOiB1dGlscy52aWV3VXJsKCd2aWV3cy9ob21lLmh0bWwnKSwgY29udHJvbGxlcjogJ0hvbWVDdHJsJyB9KTtcclxuICAgICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86ICcvaG9tZScgfSk7XHJcbn1dKTtcclxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Zha2VfY2M3MzExMDEuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIGxpYnJhcmllc1xyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxucmVxdWlyZSgnLi9hbmd1bGFyLm1pbicpO1xyXG5yZXF1aXJlKCcuL2FuZ3VsYXItdG91Y2gubWluJyk7XHJcbnJlcXVpcmUoJy4vYW5ndWxhci1yZXNvdXJjZS5taW4nKTtcclxucmVxdWlyZSgnLi9hbmd1bGFyLWFuaW1hdGUubWluJyk7XHJcbnJlcXVpcmUoJy4vYW5ndWxhci1yb3V0ZS5taW4nKTtcclxucmVxdWlyZSgnLi9ydWxlZS1wcm9taXNlJyk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnJhcmllc1xcXFxhbGwuanNcIixcIi9saWJyYXJpZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4gQW5ndWxhckpTIHYxLjIuMTJcclxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXHJcbiBMaWNlbnNlOiBNSVRcclxuKi9cclxuKGZ1bmN0aW9uKHYsayx0KXsndXNlIHN0cmljdCc7ay5tb2R1bGUoXCJuZ0FuaW1hdGVcIixbXCJuZ1wiXSkuZmFjdG9yeShcIiQkYW5pbWF0ZVJlZmxvd1wiLFtcIiR3aW5kb3dcIixcIiR0aW1lb3V0XCIsZnVuY3Rpb24oayxCKXt2YXIgZD1rLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ay53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGQpe3JldHVybiBCKGQsMTAsITEpfSxxPWsuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fGsud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGQpe3JldHVybiBCLmNhbmNlbChkKX07cmV0dXJuIGZ1bmN0aW9uKHApe3ZhciBrPWQocCk7cmV0dXJuIGZ1bmN0aW9uKCl7cShrKX19fV0pLmNvbmZpZyhbXCIkcHJvdmlkZVwiLFwiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKFIsQil7ZnVuY3Rpb24gZChkKXtmb3IodmFyIGs9MDtrPGQubGVuZ3RoO2srKyl7dmFyIHA9ZFtrXTtpZihwLm5vZGVUeXBlPT1YKXJldHVybiBwfX12YXIgcT1rLm5vb3AsXHJcbnA9ay5mb3JFYWNoLCQ9Qi4kJHNlbGVjdG9ycyxYPTEsbD1cIiQkbmdBbmltYXRlU3RhdGVcIixLPVwibmctYW5pbWF0ZVwiLG09e3J1bm5pbmc6ITB9O1IuZGVjb3JhdG9yKFwiJGFuaW1hdGVcIixbXCIkZGVsZWdhdGVcIixcIiRpbmplY3RvclwiLFwiJHNuaWZmZXJcIixcIiRyb290RWxlbWVudFwiLFwiJHRpbWVvdXRcIixcIiRyb290U2NvcGVcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKEMsdix0LEgseSx3LE4pe2Z1bmN0aW9uIEkoYSl7aWYoYSl7dmFyIGc9W10sZT17fTthPWEuc3Vic3RyKDEpLnNwbGl0KFwiLlwiKTsodC50cmFuc2l0aW9uc3x8dC5hbmltYXRpb25zKSYmYS5wdXNoKFwiXCIpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZj1hW2NdLGQ9JFtmXTtkJiYhZVtmXSYmKGcucHVzaCh2LmdldChkKSksZVtmXT0hMCl9cmV0dXJuIGd9fWZ1bmN0aW9uIHIoYSxnLGUsYyxmLGssbSl7ZnVuY3Rpb24gdChhKXtuKCk7aWYoITA9PT1hKXooKTtlbHNle2lmKGE9ZS5kYXRhKGwpKWEuZG9uZT16LGUuZGF0YShsLFxyXG5hKTtDKEQsXCJhZnRlclwiLHopfX1mdW5jdGlvbiBDKGMsZCxmKXtcImFmdGVyXCI9PWQ/cigpOkUoKTt2YXIgaz1kK1wiRW5kXCI7cChjLGZ1bmN0aW9uKGIsYWEpe3ZhciBoPWZ1bmN0aW9uKCl7YTp7dmFyIGI9ZCtcIkNvbXBsZXRlXCIsYT1jW2FhXTthW2JdPSEwOyhhW2tdfHxxKSgpO2ZvcihhPTA7YTxjLmxlbmd0aDthKyspaWYoIWNbYV1bYl0pYnJlYWsgYTtmKCl9fTtcImJlZm9yZVwiIT1kfHxcImVudGVyXCIhPWEmJlwibW92ZVwiIT1hP2JbZF0/YltrXT11P2JbZF0oZSxnLGgpOmJbZF0oZSxoKTpoKCk6aCgpfSl9ZnVuY3Rpb24gdyhjKXtlLnRyaWdnZXJIYW5kbGVyKFwiJGFuaW1hdGU6XCIrYyx7ZXZlbnQ6YSxjbGFzc05hbWU6Z30pfWZ1bmN0aW9uIEUoKXt5KGZ1bmN0aW9uKCl7dyhcImJlZm9yZVwiKX0sMCwhMSl9ZnVuY3Rpb24gcigpe3koZnVuY3Rpb24oKXt3KFwiYWZ0ZXJcIil9LDAsITEpfWZ1bmN0aW9uIHYoKXt5KGZ1bmN0aW9uKCl7dyhcImNsb3NlXCIpO20mJm0oKX0sMCwhMSl9ZnVuY3Rpb24gbigpe24uaGFzQmVlblJ1bnx8XHJcbihuLmhhc0JlZW5SdW49ITAsaygpKX1mdW5jdGlvbiB6KCl7aWYoIXouaGFzQmVlblJ1bil7ei5oYXNCZWVuUnVuPSEwO3ZhciBhPWUuZGF0YShsKTthJiYodT9BKGUpOihhLmNsb3NlQW5pbWF0aW9uVGltZW91dD15KGZ1bmN0aW9uKCl7QShlKX0sMCwhMSksZS5kYXRhKGwsYSkpKTt2KCl9fXZhciBzLHgsRz1kKGUpO0cmJihzPUcuY2xhc3NOYW1lLHg9cytcIiBcIitnKTtpZihHJiZMKHgpKXt4PShcIiBcIit4KS5yZXBsYWNlKC9cXHMrL2csXCIuXCIpO2N8fChjPWY/Zi5wYXJlbnQoKTplLnBhcmVudCgpKTt4PUkoeCk7dmFyIHU9XCJhZGRDbGFzc1wiPT1hfHxcInJlbW92ZUNsYXNzXCI9PWE7Zj1lLmRhdGEobCl8fHt9O2lmKGJhKGUsYyl8fDA9PT14Lmxlbmd0aCluKCksRSgpLHIoKSx6KCk7ZWxzZXt2YXIgRD1bXTt1JiYoZi5kaXNhYmxlZHx8Zi5ydW5uaW5nJiZmLnN0cnVjdHVyYWwpfHxwKHgsZnVuY3Rpb24oYyl7aWYoIWMuYWxsb3dDYW5jZWx8fGMuYWxsb3dDYW5jZWwoZSxhLGcpKXt2YXIgZD1cclxuY1thXTtcImxlYXZlXCI9PWE/KGM9ZCxkPW51bGwpOmM9Y1tcImJlZm9yZVwiK2EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHIoMSldO0QucHVzaCh7YmVmb3JlOmMsYWZ0ZXI6ZH0pfX0pOzA9PT1ELmxlbmd0aD8obigpLEUoKSxyKCksdigpKTooYz1cIiBcIitzK1wiIFwiLGYucnVubmluZyYmKHkuY2FuY2VsKGYuY2xvc2VBbmltYXRpb25UaW1lb3V0KSxBKGUpLEooZi5hbmltYXRpb25zKSx4PShzPXUmJiFmLnN0cnVjdHVyYWwpJiZmLmNsYXNzTmFtZT09ZyYmYSE9Zi5ldmVudCxmLmJlZm9yZUNvbXBsZXRlfHx4PyhmLmRvbmV8fHEpKCEwKTpzJiYoYz1cInJlbW92ZUNsYXNzXCI9PWYuZXZlbnQ/Yy5yZXBsYWNlKFwiIFwiK2YuY2xhc3NOYW1lK1wiIFwiLFwiIFwiKTpjK2YuY2xhc3NOYW1lK1wiIFwiKSkscz1cIiBcIitnK1wiIFwiLFwiYWRkQ2xhc3NcIj09YSYmMDw9Yy5pbmRleE9mKHMpfHxcInJlbW92ZUNsYXNzXCI9PWEmJi0xPT1jLmluZGV4T2Yocyk/KG4oKSxFKCkscigpLHYoKSk6KGUuYWRkQ2xhc3MoSyksXHJcbmUuZGF0YShsLHtydW5uaW5nOiEwLGV2ZW50OmEsY2xhc3NOYW1lOmcsc3RydWN0dXJhbDohdSxhbmltYXRpb25zOkQsZG9uZTp0fSksQyhELFwiYmVmb3JlXCIsdCkpKX19ZWxzZSBuKCksRSgpLHIoKSx6KCl9ZnVuY3Rpb24gUShhKXthPWQoYSk7cChhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrSyksZnVuY3Rpb24oYSl7YT1rLmVsZW1lbnQoYSk7dmFyIGU9YS5kYXRhKGwpO2UmJihKKGUuYW5pbWF0aW9ucyksQShhKSl9KX1mdW5jdGlvbiBKKGEpe3AoYSxmdW5jdGlvbihhKXthLmJlZm9yZUNvbXBsZXRlfHwoYS5iZWZvcmVFbmR8fHEpKCEwKTthLmFmdGVyQ29tcGxldGV8fChhLmFmdGVyRW5kfHxxKSghMCl9KX1mdW5jdGlvbiBBKGEpe2QoYSk9PWQoSCk/bS5kaXNhYmxlZHx8KG0ucnVubmluZz0hMSxtLnN0cnVjdHVyYWw9ITEpOihhLnJlbW92ZUNsYXNzKEspLGEucmVtb3ZlRGF0YShsKSl9ZnVuY3Rpb24gYmEoYSxnKXtpZihtLmRpc2FibGVkKXJldHVybiEwO2lmKGQoYSk9PWQoSCkpcmV0dXJuIG0uZGlzYWJsZWR8fFxyXG5tLnJ1bm5pbmc7ZG97aWYoMD09PWcubGVuZ3RoKWJyZWFrO3ZhciBlPWQoZyk9PWQoSCksYz1lP206Zy5kYXRhKGwpLGM9YyYmKCEhYy5kaXNhYmxlZHx8ISFjLnJ1bm5pbmcpO2lmKGV8fGMpcmV0dXJuIGM7aWYoZSlicmVha313aGlsZShnPWcucGFyZW50KCkpO3JldHVybiEwfUguZGF0YShsLG0pO3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7dy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXttLnJ1bm5pbmc9ITF9KX0pO3ZhciBNPUIuY2xhc3NOYW1lRmlsdGVyKCksTD1NP2Z1bmN0aW9uKGEpe3JldHVybiBNLnRlc3QoYSl9OmZ1bmN0aW9uKCl7cmV0dXJuITB9O3JldHVybntlbnRlcjpmdW5jdGlvbihhLGQsZSxjKXt0aGlzLmVuYWJsZWQoITEsYSk7Qy5lbnRlcihhLGQsZSk7dy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtyKFwiZW50ZXJcIixcIm5nLWVudGVyXCIsYSxkLGUscSxjKX0pfSxsZWF2ZTpmdW5jdGlvbihhLGQpe1EoYSk7dGhpcy5lbmFibGVkKCExLGEpO3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7cihcImxlYXZlXCIsXHJcblwibmctbGVhdmVcIixhLG51bGwsbnVsbCxmdW5jdGlvbigpe0MubGVhdmUoYSl9LGQpfSl9LG1vdmU6ZnVuY3Rpb24oYSxkLGUsYyl7UShhKTt0aGlzLmVuYWJsZWQoITEsYSk7Qy5tb3ZlKGEsZCxlKTt3LiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3IoXCJtb3ZlXCIsXCJuZy1tb3ZlXCIsYSxkLGUscSxjKX0pfSxhZGRDbGFzczpmdW5jdGlvbihhLGQsZSl7cihcImFkZENsYXNzXCIsZCxhLG51bGwsbnVsbCxmdW5jdGlvbigpe0MuYWRkQ2xhc3MoYSxkKX0sZSl9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEsZCxlKXtyKFwicmVtb3ZlQ2xhc3NcIixkLGEsbnVsbCxudWxsLGZ1bmN0aW9uKCl7Qy5yZW1vdmVDbGFzcyhhLGQpfSxlKX0sZW5hYmxlZDpmdW5jdGlvbihhLGQpe3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDI6aWYoYSlBKGQpO2Vsc2V7dmFyIGU9ZC5kYXRhKGwpfHx7fTtlLmRpc2FibGVkPSEwO2QuZGF0YShsLGUpfWJyZWFrO2Nhc2UgMTptLmRpc2FibGVkPSFhO2JyZWFrO2RlZmF1bHQ6YT1cclxuIW0uZGlzYWJsZWR9cmV0dXJuISFhfX19XSk7Qi5yZWdpc3RlcihcIlwiLFtcIiR3aW5kb3dcIixcIiRzbmlmZmVyXCIsXCIkdGltZW91dFwiLFwiJCRhbmltYXRlUmVmbG93XCIsZnVuY3Rpb24obSxsLEIsSCl7ZnVuY3Rpb24geShiLGEpe08mJk8oKTtVLnB1c2goYSk7dmFyIGg9ZChiKTtiPWsuZWxlbWVudChoKTtWLnB1c2goYik7dmFyIGg9Yi5kYXRhKG4pLGM9aC5zdGFnZ2VyLGM9aC5pdGVtSW5kZXgqKE1hdGgubWF4KGMuYW5pbWF0aW9uRGVsYXksYy50cmFuc2l0aW9uRGVsYXkpfHwwKTtQPU1hdGgubWF4KFAsKGMrKGgubWF4RGVsYXkraC5tYXhEdXJhdGlvbikqcykqeCk7aC5hbmltYXRpb25Db3VudD1HO089SChmdW5jdGlvbigpe3AoVSxmdW5jdGlvbihiKXtiKCl9KTt2YXIgYj1bXSxhPUc7cChWLGZ1bmN0aW9uKGEpe2IucHVzaChhKX0pO0IoZnVuY3Rpb24oKXt3KGIsYSk7Yj1udWxsfSxQLCExKTtVPVtdO1Y9W107Tz1udWxsO3U9e307UD0wO0crK30pfWZ1bmN0aW9uIHcoYixhKXtwKGIsXHJcbmZ1bmN0aW9uKGIpeyhiPWIuZGF0YShuKSkmJmIuYW5pbWF0aW9uQ291bnQ9PWEmJihiLmNsb3NlQW5pbWF0aW9uRm58fHEpKCl9KX1mdW5jdGlvbiBOKGIsYSl7dmFyIGg9YT91W2FdOm51bGw7aWYoIWgpe3ZhciBkPTAsYz0wLGU9MCxrPTAsZyxuLGwscjtwKGIsZnVuY3Rpb24oYil7aWYoYi5ub2RlVHlwZT09WCl7Yj1tLmdldENvbXB1dGVkU3R5bGUoYil8fHt9O2w9YltmK1ldO2Q9TWF0aC5tYXgoSShsKSxkKTtyPWJbZitXXTtnPWJbZitFXTtjPU1hdGgubWF4KEkoZyksYyk7bj1iW0YrRV07az1NYXRoLm1heChJKG4pLGspO3ZhciBhPUkoYltGK1ldKTswPGEmJihhKj1wYXJzZUludChiW0YrUl0sMTApfHwxKTtlPU1hdGgubWF4KGEsZSl9fSk7aD17dG90YWw6MCx0cmFuc2l0aW9uUHJvcGVydHlTdHlsZTpyLHRyYW5zaXRpb25EdXJhdGlvblN0eWxlOmwsdHJhbnNpdGlvbkRlbGF5U3R5bGU6Zyx0cmFuc2l0aW9uRGVsYXk6Yyx0cmFuc2l0aW9uRHVyYXRpb246ZCxhbmltYXRpb25EZWxheVN0eWxlOm4sXHJcbmFuaW1hdGlvbkRlbGF5OmssYW5pbWF0aW9uRHVyYXRpb246ZX07YSYmKHVbYV09aCl9cmV0dXJuIGh9ZnVuY3Rpb24gSShiKXt2YXIgYT0wO2I9ay5pc1N0cmluZyhiKT9iLnNwbGl0KC9cXHMqLFxccyovKTpbXTtwKGIsZnVuY3Rpb24oYil7YT1NYXRoLm1heChwYXJzZUZsb2F0KGIpfHwwLGEpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gcihiKXt2YXIgYT1iLnBhcmVudCgpLGg9YS5kYXRhKFopO2h8fChhLmRhdGEoWiwrK0QpLGg9RCk7cmV0dXJuIGgrXCItXCIrZChiKS5jbGFzc05hbWV9ZnVuY3Rpb24gUShiLGEsaCl7dmFyIGM9cihiKSxlPWMrXCIgXCIrYSxrPXt9LGc9dVtlXT8rK3VbZV0udG90YWw6MDtpZigwPGcpe3ZhciBsPWErXCItc3RhZ2dlclwiLGs9YytcIiBcIitsOyhjPSF1W2tdKSYmYi5hZGRDbGFzcyhsKTtrPU4oYixrKTtjJiZiLnJlbW92ZUNsYXNzKGwpfWg9aHx8ZnVuY3Rpb24oYil7cmV0dXJuIGIoKX07Yi5hZGRDbGFzcyhhKTtoPWgoZnVuY3Rpb24oKXtyZXR1cm4gTihiLGUpfSk7XHJcbmw9TWF0aC5tYXgoaC50cmFuc2l0aW9uRGVsYXksaC5hbmltYXRpb25EZWxheSk7Yz1NYXRoLm1heChoLnRyYW5zaXRpb25EdXJhdGlvbixoLmFuaW1hdGlvbkR1cmF0aW9uKTtpZigwPT09YylyZXR1cm4gYi5yZW1vdmVDbGFzcyhhKSwhMTt2YXIgbT1cIlwiOzA8aC50cmFuc2l0aW9uRHVyYXRpb24/ZChiKS5zdHlsZVtmK1ddPVwibm9uZVwiOmQoYikuc3R5bGVbRl09XCJub25lIDBzXCI7cChhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiLGEpe20rPSgwPGE/XCIgXCI6XCJcIikrYitcIi1hY3RpdmVcIn0pO2IuZGF0YShuLHtjbGFzc05hbWU6YSxhY3RpdmVDbGFzc05hbWU6bSxtYXhEdXJhdGlvbjpjLG1heERlbGF5OmwsY2xhc3NlczphK1wiIFwiK20sdGltaW5nczpoLHN0YWdnZXI6ayxpdGVtSW5kZXg6Z30pO3JldHVybiEwfWZ1bmN0aW9uIEooYil7dmFyIGE9ZitXO2I9ZChiKTtiLnN0eWxlW2FdJiYwPGIuc3R5bGVbYV0ubGVuZ3RoJiYoYi5zdHlsZVthXT1cIlwiKX1mdW5jdGlvbiBBKGIpe3ZhciBhPUY7Yj1cclxuZChiKTtiLnN0eWxlW2FdJiYwPGIuc3R5bGVbYV0ubGVuZ3RoJiYoYi5zdHlsZVthXT1cIlwiKX1mdW5jdGlvbiBLKGIsYSxoKXtmdW5jdGlvbiBlKGMpe2Iub2ZmKHYsayk7Yi5yZW1vdmVDbGFzcyhyKTtjPWI7Yy5yZW1vdmVDbGFzcyhhKTtjLnJlbW92ZURhdGEobik7Yz1kKGIpO2Zvcih2YXIgaCBpbiBzKWMuc3R5bGUucmVtb3ZlUHJvcGVydHkoc1toXSl9ZnVuY3Rpb24gayhiKXtiLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBhPWIub3JpZ2luYWxFdmVudHx8YjtiPWEuJG1hbnVhbFRpbWVTdGFtcHx8YS50aW1lU3RhbXB8fERhdGUubm93KCk7YT1wYXJzZUZsb2F0KGEuZWxhcHNlZFRpbWUudG9GaXhlZCh6KSk7TWF0aC5tYXgoYi13LDApPj11JiZhPj1wJiZoKCl9dmFyIGY9Yi5kYXRhKG4pLGc9ZChiKTtpZigtMSE9Zy5jbGFzc05hbWUuaW5kZXhPZihhKSYmZil7dmFyIGw9Zi50aW1pbmdzLG09Zi5zdGFnZ2VyLHA9Zi5tYXhEdXJhdGlvbixyPWYuYWN0aXZlQ2xhc3NOYW1lLHU9TWF0aC5tYXgobC50cmFuc2l0aW9uRGVsYXksXHJcbmwuYW5pbWF0aW9uRGVsYXkpKngsdz1EYXRlLm5vdygpLHY9VCtcIiBcIitTLHQ9Zi5pdGVtSW5kZXgscT1cIlwiLHM9W107aWYoMDxsLnRyYW5zaXRpb25EdXJhdGlvbil7dmFyIHk9bC50cmFuc2l0aW9uUHJvcGVydHlTdHlsZTstMT09eS5pbmRleE9mKFwiYWxsXCIpJiYocSs9YytcInRyYW5zaXRpb24tcHJvcGVydHk6IFwiK3krXCI7XCIscSs9YytcInRyYW5zaXRpb24tZHVyYXRpb246IFwiK2wudHJhbnNpdGlvbkR1cmF0aW9uU3R5bGUrXCI7XCIscy5wdXNoKGMrXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpLHMucHVzaChjK1widHJhbnNpdGlvbi1kdXJhdGlvblwiKSl9MDx0JiYoMDxtLnRyYW5zaXRpb25EZWxheSYmMD09PW0udHJhbnNpdGlvbkR1cmF0aW9uJiYocSs9YytcInRyYW5zaXRpb24tZGVsYXk6IFwiK00obC50cmFuc2l0aW9uRGVsYXlTdHlsZSxtLnRyYW5zaXRpb25EZWxheSx0KStcIjsgXCIscy5wdXNoKGMrXCJ0cmFuc2l0aW9uLWRlbGF5XCIpKSwwPG0uYW5pbWF0aW9uRGVsYXkmJjA9PT1tLmFuaW1hdGlvbkR1cmF0aW9uJiZcclxuKHErPWMrXCJhbmltYXRpb24tZGVsYXk6IFwiK00obC5hbmltYXRpb25EZWxheVN0eWxlLG0uYW5pbWF0aW9uRGVsYXksdCkrXCI7IFwiLHMucHVzaChjK1wiYW5pbWF0aW9uLWRlbGF5XCIpKSk7MDxzLmxlbmd0aCYmKGw9Zy5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKXx8XCJcIixnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsbCtcIiBcIitxKSk7Yi5vbih2LGspO2IuYWRkQ2xhc3Mocik7Zi5jbG9zZUFuaW1hdGlvbkZuPWZ1bmN0aW9uKCl7ZSgpO2goKX07cmV0dXJuIGV9aCgpfWZ1bmN0aW9uIE0oYixhLGMpe3ZhciBkPVwiXCI7cChiLnNwbGl0KFwiLFwiKSxmdW5jdGlvbihiLGUpe2QrPSgwPGU/XCIsXCI6XCJcIikrKGMqYStwYXJzZUludChiLDEwKSkrXCJzXCJ9KTtyZXR1cm4gZH1mdW5jdGlvbiBMKGIsYSxjKXtpZihRKGIsYSxjKSlyZXR1cm4gZnVuY3Rpb24oYyl7YyYmKGIucmVtb3ZlQ2xhc3MoYSksYi5yZW1vdmVEYXRhKG4pKX19ZnVuY3Rpb24gYShhLGMsZCl7aWYoYS5kYXRhKG4pKXJldHVybiBLKGEsYyxkKTthLnJlbW92ZUNsYXNzKGMpO1xyXG5hLnJlbW92ZURhdGEobik7ZCgpfWZ1bmN0aW9uIGcoYixjLGQpe3ZhciBlPUwoYixjKTtpZihlKXt2YXIgZj1lO3koYixmdW5jdGlvbigpe0ooYik7QShiKTtmPWEoYixjLGQpfSk7cmV0dXJuIGZ1bmN0aW9uKGEpeyhmfHxxKShhKX19ZCgpfWZ1bmN0aW9uIGUoYSxjKXt2YXIgZD1cIlwiO2E9ay5pc0FycmF5KGEpP2E6YS5zcGxpdCgvXFxzKy8pO3AoYSxmdW5jdGlvbihhLGIpe2EmJjA8YS5sZW5ndGgmJihkKz0oMDxiP1wiIFwiOlwiXCIpK2ErYyl9KTtyZXR1cm4gZH12YXIgYz1cIlwiLGYsUyxGLFQ7di5vbnRyYW5zaXRpb25lbmQ9PT10JiZ2Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCE9PXQ/KGM9XCItd2Via2l0LVwiLGY9XCJXZWJraXRUcmFuc2l0aW9uXCIsUz1cIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKTooZj1cInRyYW5zaXRpb25cIixTPVwidHJhbnNpdGlvbmVuZFwiKTt2Lm9uYW5pbWF0aW9uZW5kPT09dCYmdi5vbndlYmtpdGFuaW1hdGlvbmVuZCE9PXQ/KGM9XCItd2Via2l0LVwiLEY9XHJcblwiV2Via2l0QW5pbWF0aW9uXCIsVD1cIndlYmtpdEFuaW1hdGlvbkVuZCBhbmltYXRpb25lbmRcIik6KEY9XCJhbmltYXRpb25cIixUPVwiYW5pbWF0aW9uZW5kXCIpO3ZhciBZPVwiRHVyYXRpb25cIixXPVwiUHJvcGVydHlcIixFPVwiRGVsYXlcIixSPVwiSXRlcmF0aW9uQ291bnRcIixaPVwiJCRuZ0FuaW1hdGVLZXlcIixuPVwiJCRuZ0FuaW1hdGVDU1MzRGF0YVwiLHo9MyxzPTEuNSx4PTFFMyxHPTAsdT17fSxEPTAsVT1bXSxWPVtdLE8sUD0wO3JldHVybnthbGxvd0NhbmNlbDpmdW5jdGlvbihhLGMsaCl7dmFyIGY9KGEuZGF0YShuKXx8e30pLmNsYXNzZXM7aWYoIWZ8fDA8PVtcImVudGVyXCIsXCJsZWF2ZVwiLFwibW92ZVwiXS5pbmRleE9mKGMpKXJldHVybiEwO3ZhciBsPWEucGFyZW50KCksZz1rLmVsZW1lbnQoZChhKS5jbG9uZU5vZGUoKSk7Zy5hdHRyKFwic3R5bGVcIixcInBvc2l0aW9uOmFic29sdXRlOyB0b3A6LTk5OTlweDsgbGVmdDotOTk5OXB4XCIpO2cucmVtb3ZlQXR0cihcImlkXCIpO2cuZW1wdHkoKTtwKGYuc3BsaXQoXCIgXCIpLFxyXG5mdW5jdGlvbihhKXtnLnJlbW92ZUNsYXNzKGEpfSk7Zy5hZGRDbGFzcyhlKGgsXCJhZGRDbGFzc1wiPT1jP1wiLWFkZFwiOlwiLXJlbW92ZVwiKSk7bC5hcHBlbmQoZyk7YT1OKGcpO2cucmVtb3ZlKCk7cmV0dXJuIDA8TWF0aC5tYXgoYS50cmFuc2l0aW9uRHVyYXRpb24sYS5hbmltYXRpb25EdXJhdGlvbil9LGVudGVyOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGcoYSxcIm5nLWVudGVyXCIsYyl9LGxlYXZlOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGcoYSxcIm5nLWxlYXZlXCIsYyl9LG1vdmU6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZyhhLFwibmctbW92ZVwiLGMpfSxiZWZvcmVBZGRDbGFzczpmdW5jdGlvbihhLGMsZCl7dmFyIGY9TChhLGUoYyxcIi1hZGRcIiksZnVuY3Rpb24oZCl7YS5hZGRDbGFzcyhjKTtkPWQoKTthLnJlbW92ZUNsYXNzKGMpO3JldHVybiBkfSk7aWYoZilyZXR1cm4geShhLGZ1bmN0aW9uKCl7SihhKTtBKGEpO2QoKX0pLGY7ZCgpfSxhZGRDbGFzczpmdW5jdGlvbihiLGMsZCl7cmV0dXJuIGEoYixcclxuZShjLFwiLWFkZFwiKSxkKX0sYmVmb3JlUmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSxjLGQpe3ZhciBmPUwoYSxlKGMsXCItcmVtb3ZlXCIpLGZ1bmN0aW9uKGQpe3ZhciBlPWEuYXR0cihcImNsYXNzXCIpO2EucmVtb3ZlQ2xhc3MoYyk7ZD1kKCk7YS5hdHRyKFwiY2xhc3NcIixlKTtyZXR1cm4gZH0pO2lmKGYpcmV0dXJuIHkoYSxmdW5jdGlvbigpe0ooYSk7QShhKTtkKCl9KSxmO2QoKX0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYixjLGQpe3JldHVybiBhKGIsZShjLFwiLXJlbW92ZVwiKSxkKX19fV0pfV0pfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci1hbmltYXRlLm1pbi5qcy5tYXBcclxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnJhcmllc1xcXFxhbmd1bGFyLWFuaW1hdGUubWluLmpzXCIsXCIvbGlicmFyaWVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuIEFuZ3VsYXJKUyB2MS4yLjEyXHJcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xyXG4gTGljZW5zZTogTUlUXHJcbiovXHJcbihmdW5jdGlvbihILGEsQSl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIEQocCxnKXtnPWd8fHt9O2EuZm9yRWFjaChnLGZ1bmN0aW9uKGEsYyl7ZGVsZXRlIGdbY119KTtmb3IodmFyIGMgaW4gcCkhcC5oYXNPd25Qcm9wZXJ0eShjKXx8XCIkXCI9PT1jLmNoYXJBdCgwKSYmXCIkXCI9PT1jLmNoYXJBdCgxKXx8KGdbY109cFtjXSk7cmV0dXJuIGd9dmFyIHY9YS4kJG1pbkVycihcIiRyZXNvdXJjZVwiKSxDPS9eKFxcLlthLXpBLVpfJF1bMC05YS16QS1aXyRdKikrJC87YS5tb2R1bGUoXCJuZ1Jlc291cmNlXCIsW1wibmdcIl0pLmZhY3RvcnkoXCIkcmVzb3VyY2VcIixbXCIkaHR0cFwiLFwiJHFcIixmdW5jdGlvbihwLGcpe2Z1bmN0aW9uIGMoYSxjKXt0aGlzLnRlbXBsYXRlPWE7dGhpcy5kZWZhdWx0cz1jfHx7fTt0aGlzLnVybFBhcmFtcz17fX1mdW5jdGlvbiB0KG4sdyxsKXtmdW5jdGlvbiByKGgsZCl7dmFyIGU9e307ZD14KHt9LHcsZCk7cyhkLGZ1bmN0aW9uKGIsZCl7dShiKSYmKGI9YigpKTt2YXIgaztpZihiJiZcclxuYi5jaGFyQXQmJlwiQFwiPT1iLmNoYXJBdCgwKSl7az1oO3ZhciBhPWIuc3Vic3RyKDEpO2lmKG51bGw9PWF8fFwiXCI9PT1hfHxcImhhc093blByb3BlcnR5XCI9PT1hfHwhQy50ZXN0KFwiLlwiK2EpKXRocm93IHYoXCJiYWRtZW1iZXJcIixhKTtmb3IodmFyIGE9YS5zcGxpdChcIi5cIiksZj0wLGM9YS5sZW5ndGg7ZjxjJiZrIT09QTtmKyspe3ZhciBnPWFbZl07az1udWxsIT09az9rW2ddOkF9fWVsc2Ugaz1iO2VbZF09a30pO3JldHVybiBlfWZ1bmN0aW9uIGUoYSl7cmV0dXJuIGEucmVzb3VyY2V9ZnVuY3Rpb24gZihhKXtEKGF8fHt9LHRoaXMpfXZhciBGPW5ldyBjKG4pO2w9eCh7fSxCLGwpO3MobCxmdW5jdGlvbihoLGQpe3ZhciBjPS9eKFBPU1R8UFVUfFBBVENIKSQvaS50ZXN0KGgubWV0aG9kKTtmW2RdPWZ1bmN0aW9uKGIsZCxrLHcpe3ZhciBxPXt9LG4sbCx5O3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDQ6eT13LGw9aztjYXNlIDM6Y2FzZSAyOmlmKHUoZCkpe2lmKHUoYikpe2w9XHJcbmI7eT1kO2JyZWFrfWw9ZDt5PWt9ZWxzZXtxPWI7bj1kO2w9azticmVha31jYXNlIDE6dShiKT9sPWI6Yz9uPWI6cT1iO2JyZWFrO2Nhc2UgMDpicmVhaztkZWZhdWx0OnRocm93IHYoXCJiYWRhcmdzXCIsYXJndW1lbnRzLmxlbmd0aCk7fXZhciB0PXRoaXMgaW5zdGFuY2VvZiBmLG09dD9uOmguaXNBcnJheT9bXTpuZXcgZihuKSx6PXt9LEI9aC5pbnRlcmNlcHRvciYmaC5pbnRlcmNlcHRvci5yZXNwb25zZXx8ZSxDPWguaW50ZXJjZXB0b3ImJmguaW50ZXJjZXB0b3IucmVzcG9uc2VFcnJvcnx8QTtzKGgsZnVuY3Rpb24oYSxiKXtcInBhcmFtc1wiIT1iJiYoXCJpc0FycmF5XCIhPWImJlwiaW50ZXJjZXB0b3JcIiE9YikmJih6W2JdPUcoYSkpfSk7YyYmKHouZGF0YT1uKTtGLnNldFVybFBhcmFtcyh6LHgoe30scihuLGgucGFyYW1zfHx7fSkscSksaC51cmwpO3E9cCh6KS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBkPWIuZGF0YSxrPW0uJHByb21pc2U7aWYoZCl7aWYoYS5pc0FycmF5KGQpIT09ISFoLmlzQXJyYXkpdGhyb3cgdihcImJhZGNmZ1wiLFxyXG5oLmlzQXJyYXk/XCJhcnJheVwiOlwib2JqZWN0XCIsYS5pc0FycmF5KGQpP1wiYXJyYXlcIjpcIm9iamVjdFwiKTtoLmlzQXJyYXk/KG0ubGVuZ3RoPTAscyhkLGZ1bmN0aW9uKGIpe20ucHVzaChuZXcgZihiKSl9KSk6KEQoZCxtKSxtLiRwcm9taXNlPWspfW0uJHJlc29sdmVkPSEwO2IucmVzb3VyY2U9bTtyZXR1cm4gYn0sZnVuY3Rpb24oYil7bS4kcmVzb2x2ZWQ9ITA7KHl8fEUpKGIpO3JldHVybiBnLnJlamVjdChiKX0pO3E9cS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBhPUIoYik7KGx8fEUpKGEsYi5oZWFkZXJzKTtyZXR1cm4gYX0sQyk7cmV0dXJuIHQ/cToobS4kcHJvbWlzZT1xLG0uJHJlc29sdmVkPSExLG0pfTtmLnByb3RvdHlwZVtcIiRcIitkXT1mdW5jdGlvbihiLGEsayl7dShiKSYmKGs9YSxhPWIsYj17fSk7Yj1mW2RdLmNhbGwodGhpcyxiLHRoaXMsYSxrKTtyZXR1cm4gYi4kcHJvbWlzZXx8Yn19KTtmLmJpbmQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHQobix4KHt9LHcsYSksbCl9O3JldHVybiBmfVxyXG52YXIgQj17Z2V0OnttZXRob2Q6XCJHRVRcIn0sc2F2ZTp7bWV0aG9kOlwiUE9TVFwifSxxdWVyeTp7bWV0aG9kOlwiR0VUXCIsaXNBcnJheTohMH0scmVtb3ZlOnttZXRob2Q6XCJERUxFVEVcIn0sXCJkZWxldGVcIjp7bWV0aG9kOlwiREVMRVRFXCJ9fSxFPWEubm9vcCxzPWEuZm9yRWFjaCx4PWEuZXh0ZW5kLEc9YS5jb3B5LHU9YS5pc0Z1bmN0aW9uO2MucHJvdG90eXBlPXtzZXRVcmxQYXJhbXM6ZnVuY3Rpb24oYyxnLGwpe3ZhciByPXRoaXMsZT1sfHxyLnRlbXBsYXRlLGYscCxoPXIudXJsUGFyYW1zPXt9O3MoZS5zcGxpdCgvXFxXLyksZnVuY3Rpb24oYSl7aWYoXCJoYXNPd25Qcm9wZXJ0eVwiPT09YSl0aHJvdyB2KFwiYmFkbmFtZVwiKTshL15cXGQrJC8udGVzdChhKSYmKGEmJlJlZ0V4cChcIihefFteXFxcXFxcXFxdKTpcIithK1wiKFxcXFxXfCQpXCIpLnRlc3QoZSkpJiYoaFthXT0hMCl9KTtlPWUucmVwbGFjZSgvXFxcXDovZyxcIjpcIik7Zz1nfHx7fTtzKHIudXJsUGFyYW1zLGZ1bmN0aW9uKGQsYyl7Zj1nLmhhc093blByb3BlcnR5KGMpP1xyXG5nW2NdOnIuZGVmYXVsdHNbY107YS5pc0RlZmluZWQoZikmJm51bGwhPT1mPyhwPWVuY29kZVVSSUNvbXBvbmVudChmKS5yZXBsYWNlKC8lNDAvZ2ksXCJAXCIpLnJlcGxhY2UoLyUzQS9naSxcIjpcIikucmVwbGFjZSgvJTI0L2csXCIkXCIpLnJlcGxhY2UoLyUyQy9naSxcIixcIikucmVwbGFjZSgvJTIwL2csXCIlMjBcIikucmVwbGFjZSgvJTI2L2dpLFwiJlwiKS5yZXBsYWNlKC8lM0QvZ2ksXCI9XCIpLnJlcGxhY2UoLyUyQi9naSxcIitcIiksZT1lLnJlcGxhY2UoUmVnRXhwKFwiOlwiK2MrXCIoXFxcXFd8JClcIixcImdcIiksZnVuY3Rpb24oYSxjKXtyZXR1cm4gcCtjfSkpOmU9ZS5yZXBsYWNlKFJlZ0V4cChcIigvPyk6XCIrYytcIihcXFxcV3wkKVwiLFwiZ1wiKSxmdW5jdGlvbihhLGMsZCl7cmV0dXJuXCIvXCI9PWQuY2hhckF0KDApP2Q6YytkfSl9KTtlPWUucmVwbGFjZSgvXFwvKyQvLFwiXCIpfHxcIi9cIjtlPWUucmVwbGFjZSgvXFwvXFwuKD89XFx3KygkfFxcPykpLyxcIi5cIik7Yy51cmw9ZS5yZXBsYWNlKC9cXC9cXFxcXFwuLyxcIi8uXCIpO3MoZyxmdW5jdGlvbihhLFxyXG5lKXtyLnVybFBhcmFtc1tlXXx8KGMucGFyYW1zPWMucGFyYW1zfHx7fSxjLnBhcmFtc1tlXT1hKX0pfX07cmV0dXJuIHR9XSl9KSh3aW5kb3csd2luZG93LmFuZ3VsYXIpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXJlc291cmNlLm1pbi5qcy5tYXBcclxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnJhcmllc1xcXFxhbmd1bGFyLXJlc291cmNlLm1pbi5qc1wiLFwiL2xpYnJhcmllc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiBBbmd1bGFySlMgdjEuMi4xMlxyXG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcclxuIExpY2Vuc2U6IE1JVFxyXG4qL1xyXG4oZnVuY3Rpb24oaCxlLEEpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB1KHcscSxrKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIix0ZXJtaW5hbDohMCxwcmlvcml0eTo0MDAsdHJhbnNjbHVkZTpcImVsZW1lbnRcIixsaW5rOmZ1bmN0aW9uKGEsYyxiLGYsbil7ZnVuY3Rpb24geSgpe2wmJihsLiRkZXN0cm95KCksbD1udWxsKTtnJiYoay5sZWF2ZShnKSxnPW51bGwpfWZ1bmN0aW9uIHYoKXt2YXIgYj13LmN1cnJlbnQmJncuY3VycmVudC5sb2NhbHM7aWYoZS5pc0RlZmluZWQoYiYmYi4kdGVtcGxhdGUpKXt2YXIgYj1hLiRuZXcoKSxmPXcuY3VycmVudDtnPW4oYixmdW5jdGlvbihkKXtrLmVudGVyKGQsbnVsbCxnfHxjLGZ1bmN0aW9uKCl7IWUuaXNEZWZpbmVkKHQpfHx0JiYhYS4kZXZhbCh0KXx8cSgpfSk7eSgpfSk7bD1mLnNjb3BlPWI7bC4kZW1pdChcIiR2aWV3Q29udGVudExvYWRlZFwiKTtsLiRldmFsKGgpfWVsc2UgeSgpfXZhciBsLGcsdD1iLmF1dG9zY3JvbGwsaD1iLm9ubG9hZHx8XCJcIjtcclxuYS4kb24oXCIkcm91dGVDaGFuZ2VTdWNjZXNzXCIsdik7digpfX19ZnVuY3Rpb24geihlLGgsayl7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIscHJpb3JpdHk6LTQwMCxsaW5rOmZ1bmN0aW9uKGEsYyl7dmFyIGI9ay5jdXJyZW50LGY9Yi5sb2NhbHM7Yy5odG1sKGYuJHRlbXBsYXRlKTt2YXIgbj1lKGMuY29udGVudHMoKSk7Yi5jb250cm9sbGVyJiYoZi4kc2NvcGU9YSxmPWgoYi5jb250cm9sbGVyLGYpLGIuY29udHJvbGxlckFzJiYoYVtiLmNvbnRyb2xsZXJBc109ZiksYy5kYXRhKFwiJG5nQ29udHJvbGxlckNvbnRyb2xsZXJcIixmKSxjLmNoaWxkcmVuKCkuZGF0YShcIiRuZ0NvbnRyb2xsZXJDb250cm9sbGVyXCIsZikpO24oYSl9fX1oPWUubW9kdWxlKFwibmdSb3V0ZVwiLFtcIm5nXCJdKS5wcm92aWRlcihcIiRyb3V0ZVwiLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gaChhLGMpe3JldHVybiBlLmV4dGVuZChuZXcgKGUuZXh0ZW5kKGZ1bmN0aW9uKCl7fSx7cHJvdG90eXBlOmF9KSksYyl9ZnVuY3Rpb24gcShhLFxyXG5lKXt2YXIgYj1lLmNhc2VJbnNlbnNpdGl2ZU1hdGNoLGY9e29yaWdpbmFsUGF0aDphLHJlZ2V4cDphfSxoPWYua2V5cz1bXTthPWEucmVwbGFjZSgvKFsoKS5dKS9nLFwiXFxcXCQxXCIpLnJlcGxhY2UoLyhcXC8pPzooXFx3KykoW1xcP1xcKl0pPy9nLGZ1bmN0aW9uKGEsZSxiLGMpe2E9XCI/XCI9PT1jP2M6bnVsbDtjPVwiKlwiPT09Yz9jOm51bGw7aC5wdXNoKHtuYW1lOmIsb3B0aW9uYWw6ISFhfSk7ZT1lfHxcIlwiO3JldHVyblwiXCIrKGE/XCJcIjplKStcIig/OlwiKyhhP2U6XCJcIikrKGMmJlwiKC4rPylcInx8XCIoW14vXSspXCIpKyhhfHxcIlwiKStcIilcIisoYXx8XCJcIil9KS5yZXBsYWNlKC8oW1xcLyRcXCpdKS9nLFwiXFxcXCQxXCIpO2YucmVnZXhwPVJlZ0V4cChcIl5cIithK1wiJFwiLGI/XCJpXCI6XCJcIik7cmV0dXJuIGZ9dmFyIGs9e307dGhpcy53aGVuPWZ1bmN0aW9uKGEsYyl7a1thXT1lLmV4dGVuZCh7cmVsb2FkT25TZWFyY2g6ITB9LGMsYSYmcShhLGMpKTtpZihhKXt2YXIgYj1cIi9cIj09YVthLmxlbmd0aC0xXT9hLnN1YnN0cigwLGEubGVuZ3RoLVxyXG4xKTphK1wiL1wiO2tbYl09ZS5leHRlbmQoe3JlZGlyZWN0VG86YX0scShiLGMpKX1yZXR1cm4gdGhpc307dGhpcy5vdGhlcndpc2U9ZnVuY3Rpb24oYSl7dGhpcy53aGVuKG51bGwsYSk7cmV0dXJuIHRoaXN9O3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkbG9jYXRpb25cIixcIiRyb3V0ZVBhcmFtc1wiLFwiJHFcIixcIiRpbmplY3RvclwiLFwiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkc2NlXCIsZnVuY3Rpb24oYSxjLGIsZixuLHEsdixsKXtmdW5jdGlvbiBnKCl7dmFyIGQ9dCgpLG09ci5jdXJyZW50O2lmKGQmJm0mJmQuJCRyb3V0ZT09PW0uJCRyb3V0ZSYmZS5lcXVhbHMoZC5wYXRoUGFyYW1zLG0ucGF0aFBhcmFtcykmJiFkLnJlbG9hZE9uU2VhcmNoJiYheCltLnBhcmFtcz1kLnBhcmFtcyxlLmNvcHkobS5wYXJhbXMsYiksYS4kYnJvYWRjYXN0KFwiJHJvdXRlVXBkYXRlXCIsbSk7ZWxzZSBpZihkfHxtKXg9ITEsYS4kYnJvYWRjYXN0KFwiJHJvdXRlQ2hhbmdlU3RhcnRcIixkLG0pLChyLmN1cnJlbnQ9XHJcbmQpJiZkLnJlZGlyZWN0VG8mJihlLmlzU3RyaW5nKGQucmVkaXJlY3RUbyk/Yy5wYXRoKHUoZC5yZWRpcmVjdFRvLGQucGFyYW1zKSkuc2VhcmNoKGQucGFyYW1zKS5yZXBsYWNlKCk6Yy51cmwoZC5yZWRpcmVjdFRvKGQucGF0aFBhcmFtcyxjLnBhdGgoKSxjLnNlYXJjaCgpKSkucmVwbGFjZSgpKSxmLndoZW4oZCkudGhlbihmdW5jdGlvbigpe2lmKGQpe3ZhciBhPWUuZXh0ZW5kKHt9LGQucmVzb2x2ZSksYyxiO2UuZm9yRWFjaChhLGZ1bmN0aW9uKGQsYyl7YVtjXT1lLmlzU3RyaW5nKGQpP24uZ2V0KGQpOm4uaW52b2tlKGQpfSk7ZS5pc0RlZmluZWQoYz1kLnRlbXBsYXRlKT9lLmlzRnVuY3Rpb24oYykmJihjPWMoZC5wYXJhbXMpKTplLmlzRGVmaW5lZChiPWQudGVtcGxhdGVVcmwpJiYoZS5pc0Z1bmN0aW9uKGIpJiYoYj1iKGQucGFyYW1zKSksYj1sLmdldFRydXN0ZWRSZXNvdXJjZVVybChiKSxlLmlzRGVmaW5lZChiKSYmKGQubG9hZGVkVGVtcGxhdGVVcmw9YixjPXEuZ2V0KGIsXHJcbntjYWNoZTp2fSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYS5kYXRhfSkpKTtlLmlzRGVmaW5lZChjKSYmKGEuJHRlbXBsYXRlPWMpO3JldHVybiBmLmFsbChhKX19KS50aGVuKGZ1bmN0aW9uKGMpe2Q9PXIuY3VycmVudCYmKGQmJihkLmxvY2Fscz1jLGUuY29weShkLnBhcmFtcyxiKSksYS4kYnJvYWRjYXN0KFwiJHJvdXRlQ2hhbmdlU3VjY2Vzc1wiLGQsbSkpfSxmdW5jdGlvbihjKXtkPT1yLmN1cnJlbnQmJmEuJGJyb2FkY2FzdChcIiRyb3V0ZUNoYW5nZUVycm9yXCIsZCxtLGMpfSl9ZnVuY3Rpb24gdCgpe3ZhciBhLGI7ZS5mb3JFYWNoKGssZnVuY3Rpb24oZixrKXt2YXIgcDtpZihwPSFiKXt2YXIgcz1jLnBhdGgoKTtwPWYua2V5czt2YXIgbD17fTtpZihmLnJlZ2V4cClpZihzPWYucmVnZXhwLmV4ZWMocykpe2Zvcih2YXIgZz0xLHE9cy5sZW5ndGg7ZzxxOysrZyl7dmFyIG49cFtnLTFdLHI9XCJzdHJpbmdcIj09dHlwZW9mIHNbZ10/ZGVjb2RlVVJJQ29tcG9uZW50KHNbZ10pOnNbZ107XHJcbm4mJnImJihsW24ubmFtZV09cil9cD1sfWVsc2UgcD1udWxsO2Vsc2UgcD1udWxsO3A9YT1wfXAmJihiPWgoZix7cGFyYW1zOmUuZXh0ZW5kKHt9LGMuc2VhcmNoKCksYSkscGF0aFBhcmFtczphfSksYi4kJHJvdXRlPWYpfSk7cmV0dXJuIGJ8fGtbbnVsbF0mJmgoa1tudWxsXSx7cGFyYW1zOnt9LHBhdGhQYXJhbXM6e319KX1mdW5jdGlvbiB1KGEsYyl7dmFyIGI9W107ZS5mb3JFYWNoKChhfHxcIlwiKS5zcGxpdChcIjpcIiksZnVuY3Rpb24oYSxkKXtpZigwPT09ZCliLnB1c2goYSk7ZWxzZXt2YXIgZT1hLm1hdGNoKC8oXFx3KykoLiopLyksZj1lWzFdO2IucHVzaChjW2ZdKTtiLnB1c2goZVsyXXx8XCJcIik7ZGVsZXRlIGNbZl19fSk7cmV0dXJuIGIuam9pbihcIlwiKX12YXIgeD0hMSxyPXtyb3V0ZXM6ayxyZWxvYWQ6ZnVuY3Rpb24oKXt4PSEwO2EuJGV2YWxBc3luYyhnKX19O2EuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLGcpO3JldHVybiByfV19KTtoLnByb3ZpZGVyKFwiJHJvdXRlUGFyYW1zXCIsXHJcbmZ1bmN0aW9uKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJue319fSk7aC5kaXJlY3RpdmUoXCJuZ1ZpZXdcIix1KTtoLmRpcmVjdGl2ZShcIm5nVmlld1wiLHopO3UuJGluamVjdD1bXCIkcm91dGVcIixcIiRhbmNob3JTY3JvbGxcIixcIiRhbmltYXRlXCJdO3ouJGluamVjdD1bXCIkY29tcGlsZVwiLFwiJGNvbnRyb2xsZXJcIixcIiRyb3V0ZVwiXX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXItcm91dGUubWluLmpzLm1hcFxyXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicmFyaWVzXFxcXGFuZ3VsYXItcm91dGUubWluLmpzXCIsXCIvbGlicmFyaWVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuIEFuZ3VsYXJKUyB2MS4yLjEyXHJcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xyXG4gTGljZW5zZTogTUlUXHJcbiovXHJcbihmdW5jdGlvbih5LHYseil7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIHQoZyxhLGIpe3EuZGlyZWN0aXZlKGcsW1wiJHBhcnNlXCIsXCIkc3dpcGVcIixmdW5jdGlvbihsLG4pe3ZhciByPTc1LGg9MC4zLGQ9MzA7cmV0dXJuIGZ1bmN0aW9uKHAsbSxrKXtmdW5jdGlvbiBlKGUpe2lmKCF1KXJldHVybiExO3ZhciBjPU1hdGguYWJzKGUueS11LnkpO2U9KGUueC11LngpKmE7cmV0dXJuIGYmJmM8ciYmMDxlJiZlPmQmJmMvZTxofXZhciBjPWwoa1tnXSksdSxmO24uYmluZChtLHtzdGFydDpmdW5jdGlvbihlLGMpe3U9ZTtmPSEwfSxjYW5jZWw6ZnVuY3Rpb24oZSl7Zj0hMX0sZW5kOmZ1bmN0aW9uKGEsZil7ZShhKSYmcC4kYXBwbHkoZnVuY3Rpb24oKXttLnRyaWdnZXJIYW5kbGVyKGIpO2MocCx7JGV2ZW50OmZ9KX0pfX0pfX1dKX12YXIgcT12Lm1vZHVsZShcIm5nVG91Y2hcIixbXSk7cS5mYWN0b3J5KFwiJHN3aXBlXCIsW2Z1bmN0aW9uKCl7ZnVuY3Rpb24gZyhhKXt2YXIgYj1hLnRvdWNoZXMmJmEudG91Y2hlcy5sZW5ndGg/XHJcbmEudG91Y2hlczpbYV07YT1hLmNoYW5nZWRUb3VjaGVzJiZhLmNoYW5nZWRUb3VjaGVzWzBdfHxhLm9yaWdpbmFsRXZlbnQmJmEub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcyYmYS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdfHxiWzBdLm9yaWdpbmFsRXZlbnR8fGJbMF07cmV0dXJue3g6YS5jbGllbnRYLHk6YS5jbGllbnRZfX1yZXR1cm57YmluZDpmdW5jdGlvbihhLGIpe3ZhciBsLG4scixoLGQ9ITE7YS5vbihcInRvdWNoc3RhcnQgbW91c2Vkb3duXCIsZnVuY3Rpb24oYSl7cj1nKGEpO2Q9ITA7bj1sPTA7aD1yO2Iuc3RhcnQmJmIuc3RhcnQocixhKX0pO2Eub24oXCJ0b3VjaGNhbmNlbFwiLGZ1bmN0aW9uKGEpe2Q9ITE7Yi5jYW5jZWwmJmIuY2FuY2VsKGEpfSk7YS5vbihcInRvdWNobW92ZSBtb3VzZW1vdmVcIixmdW5jdGlvbihhKXtpZihkJiZyKXt2YXIgbT1nKGEpO2wrPU1hdGguYWJzKG0ueC1oLngpO24rPU1hdGguYWJzKG0ueS1oLnkpO2g9bTsxMD5sJiYxMD5ufHxcclxuKG4+bD8oZD0hMSxiLmNhbmNlbCYmYi5jYW5jZWwoYSkpOihhLnByZXZlbnREZWZhdWx0KCksYi5tb3ZlJiZiLm1vdmUobSxhKSkpfX0pO2Eub24oXCJ0b3VjaGVuZCBtb3VzZXVwXCIsZnVuY3Rpb24oYSl7ZCYmKGQ9ITEsYi5lbmQmJmIuZW5kKGcoYSksYSkpfSl9fX1dKTtxLmNvbmZpZyhbXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGcpe2cuZGVjb3JhdG9yKFwibmdDbGlja0RpcmVjdGl2ZVwiLFtcIiRkZWxlZ2F0ZVwiLGZ1bmN0aW9uKGEpe2Euc2hpZnQoKTtyZXR1cm4gYX1dKX1dKTtxLmRpcmVjdGl2ZShcIm5nQ2xpY2tcIixbXCIkcGFyc2VcIixcIiR0aW1lb3V0XCIsXCIkcm9vdEVsZW1lbnRcIixmdW5jdGlvbihnLGEsYil7ZnVuY3Rpb24gbChhLGMsYil7Zm9yKHZhciBmPTA7ZjxhLmxlbmd0aDtmKz0yKWlmKE1hdGguYWJzKGFbZl0tYyk8ZCYmTWF0aC5hYnMoYVtmKzFdLWIpPGQpcmV0dXJuIGEuc3BsaWNlKGYsZisyKSwhMDtyZXR1cm4hMX1mdW5jdGlvbiBuKGEpe2lmKCEoRGF0ZS5ub3coKS1tPmgpKXt2YXIgYz1cclxuYS50b3VjaGVzJiZhLnRvdWNoZXMubGVuZ3RoP2EudG91Y2hlczpbYV0sYj1jWzBdLmNsaWVudFgsYz1jWzBdLmNsaWVudFk7MT5iJiYxPmN8fGwoayxiLGMpfHwoYS5zdG9wUHJvcGFnYXRpb24oKSxhLnByZXZlbnREZWZhdWx0KCksYS50YXJnZXQmJmEudGFyZ2V0LmJsdXIoKSl9fWZ1bmN0aW9uIHIoYil7Yj1iLnRvdWNoZXMmJmIudG91Y2hlcy5sZW5ndGg/Yi50b3VjaGVzOltiXTt2YXIgYz1iWzBdLmNsaWVudFgsZD1iWzBdLmNsaWVudFk7ay5wdXNoKGMsZCk7YShmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8ay5sZW5ndGg7YSs9MilpZihrW2FdPT1jJiZrW2ErMV09PWQpe2suc3BsaWNlKGEsYSsyKTticmVha319LGgsITEpfXZhciBoPTI1MDAsZD0yNSxwPVwibmctY2xpY2stYWN0aXZlXCIsbSxrO3JldHVybiBmdW5jdGlvbihhLGMsZCl7ZnVuY3Rpb24gZigpe3E9ITE7Yy5yZW1vdmVDbGFzcyhwKX12YXIgaD1nKGQubmdDbGljaykscT0hMSxzLHQsdyx4O2Mub24oXCJ0b3VjaHN0YXJ0XCIsXHJcbmZ1bmN0aW9uKGEpe3E9ITA7cz1hLnRhcmdldD9hLnRhcmdldDphLnNyY0VsZW1lbnQ7Mz09cy5ub2RlVHlwZSYmKHM9cy5wYXJlbnROb2RlKTtjLmFkZENsYXNzKHApO3Q9RGF0ZS5ub3coKTthPWEudG91Y2hlcyYmYS50b3VjaGVzLmxlbmd0aD9hLnRvdWNoZXM6W2FdO2E9YVswXS5vcmlnaW5hbEV2ZW50fHxhWzBdO3c9YS5jbGllbnRYO3g9YS5jbGllbnRZfSk7Yy5vbihcInRvdWNobW92ZVwiLGZ1bmN0aW9uKGEpe2YoKX0pO2Mub24oXCJ0b3VjaGNhbmNlbFwiLGZ1bmN0aW9uKGEpe2YoKX0pO2Mub24oXCJ0b3VjaGVuZFwiLGZ1bmN0aW9uKGEpe3ZhciBoPURhdGUubm93KCktdCxlPWEuY2hhbmdlZFRvdWNoZXMmJmEuY2hhbmdlZFRvdWNoZXMubGVuZ3RoP2EuY2hhbmdlZFRvdWNoZXM6YS50b3VjaGVzJiZhLnRvdWNoZXMubGVuZ3RoP2EudG91Y2hlczpbYV0sZz1lWzBdLm9yaWdpbmFsRXZlbnR8fGVbMF0sZT1nLmNsaWVudFgsZz1nLmNsaWVudFkscD1NYXRoLnNxcnQoTWF0aC5wb3coZS1cclxudywyKStNYXRoLnBvdyhnLXgsMikpO3EmJig3NTA+aCYmMTI+cCkmJihrfHwoYlswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixuLCEwKSxiWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsciwhMCksaz1bXSksbT1EYXRlLm5vdygpLGwoayxlLGcpLHMmJnMuYmx1cigpLHYuaXNEZWZpbmVkKGQuZGlzYWJsZWQpJiYhMSE9PWQuZGlzYWJsZWR8fGMudHJpZ2dlckhhbmRsZXIoXCJjbGlja1wiLFthXSkpO2YoKX0pO2Mub25jbGljaz1mdW5jdGlvbihhKXt9O2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKGIsYyl7YS4kYXBwbHkoZnVuY3Rpb24oKXtoKGEseyRldmVudDpjfHxifSl9KX0pO2Mub24oXCJtb3VzZWRvd25cIixmdW5jdGlvbihhKXtjLmFkZENsYXNzKHApfSk7Yy5vbihcIm1vdXNlbW92ZSBtb3VzZXVwXCIsZnVuY3Rpb24oYSl7Yy5yZW1vdmVDbGFzcyhwKX0pfX1dKTt0KFwibmdTd2lwZUxlZnRcIiwtMSxcInN3aXBlbGVmdFwiKTt0KFwibmdTd2lwZVJpZ2h0XCIsMSxcInN3aXBlcmlnaHRcIil9KSh3aW5kb3csXHJcbndpbmRvdy5hbmd1bGFyKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci10b3VjaC5taW4uanMubWFwXHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJyYXJpZXNcXFxcYW5ndWxhci10b3VjaC5taW4uanNcIixcIi9saWJyYXJpZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4gQW5ndWxhckpTIHYxLjIuMTJcclxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXHJcbiBMaWNlbnNlOiBNSVRcclxuKi9cclxuKGZ1bmN0aW9uKFAsUixzKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gdChiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF0sYyxhPVwiW1wiKyhiP2IrXCI6XCI6XCJcIikrYStcIl0gaHR0cDovL2Vycm9ycy5hbmd1bGFyanMub3JnLzEuMi4xMi9cIisoYj9iK1wiL1wiOlwiXCIpK2E7Zm9yKGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWE9YSsoMT09Yz9cIj9cIjpcIiZcIikrXCJwXCIrKGMtMSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFwiZnVuY3Rpb25cIj09dHlwZW9mIGFyZ3VtZW50c1tjXT9hcmd1bWVudHNbY10udG9TdHJpbmcoKS5yZXBsYWNlKC8gXFx7W1xcc1xcU10qJC8sXCJcIik6XCJ1bmRlZmluZWRcIj09dHlwZW9mIGFyZ3VtZW50c1tjXT9cInVuZGVmaW5lZFwiOlwic3RyaW5nXCIhPXR5cGVvZiBhcmd1bWVudHNbY10/SlNPTi5zdHJpbmdpZnkoYXJndW1lbnRzW2NdKTphcmd1bWVudHNbY10pO3JldHVybiBFcnJvcihhKX19ZnVuY3Rpb24gcWIoYil7aWYobnVsbD09Ynx8emEoYikpcmV0dXJuITE7XHJcbnZhciBhPWIubGVuZ3RoO3JldHVybiAxPT09Yi5ub2RlVHlwZSYmYT8hMDp3KGIpfHxMKGIpfHwwPT09YXx8XCJudW1iZXJcIj09PXR5cGVvZiBhJiYwPGEmJmEtMSBpbiBifWZ1bmN0aW9uIHEoYixhLGMpe3ZhciBkO2lmKGIpaWYoTShiKSlmb3IoZCBpbiBiKVwicHJvdG90eXBlXCI9PWR8fChcImxlbmd0aFwiPT1kfHxcIm5hbWVcIj09ZHx8Yi5oYXNPd25Qcm9wZXJ0eSYmIWIuaGFzT3duUHJvcGVydHkoZCkpfHxhLmNhbGwoYyxiW2RdLGQpO2Vsc2UgaWYoYi5mb3JFYWNoJiZiLmZvckVhY2ghPT1xKWIuZm9yRWFjaChhLGMpO2Vsc2UgaWYocWIoYikpZm9yKGQ9MDtkPGIubGVuZ3RoO2QrKylhLmNhbGwoYyxiW2RdLGQpO2Vsc2UgZm9yKGQgaW4gYiliLmhhc093blByb3BlcnR5KGQpJiZhLmNhbGwoYyxiW2RdLGQpO3JldHVybiBifWZ1bmN0aW9uIE5iKGIpe3ZhciBhPVtdLGM7Zm9yKGMgaW4gYiliLmhhc093blByb3BlcnR5KGMpJiZhLnB1c2goYyk7cmV0dXJuIGEuc29ydCgpfWZ1bmN0aW9uIE9jKGIsXHJcbmEsYyl7Zm9yKHZhciBkPU5iKGIpLGU9MDtlPGQubGVuZ3RoO2UrKylhLmNhbGwoYyxiW2RbZV1dLGRbZV0pO3JldHVybiBkfWZ1bmN0aW9uIE9iKGIpe3JldHVybiBmdW5jdGlvbihhLGMpe2IoYyxhKX19ZnVuY3Rpb24gWmEoKXtmb3IodmFyIGI9aWEubGVuZ3RoLGE7Yjspe2ItLTthPWlhW2JdLmNoYXJDb2RlQXQoMCk7aWYoNTc9PWEpcmV0dXJuIGlhW2JdPVwiQVwiLGlhLmpvaW4oXCJcIik7aWYoOTA9PWEpaWFbYl09XCIwXCI7ZWxzZSByZXR1cm4gaWFbYl09U3RyaW5nLmZyb21DaGFyQ29kZShhKzEpLGlhLmpvaW4oXCJcIil9aWEudW5zaGlmdChcIjBcIik7cmV0dXJuIGlhLmpvaW4oXCJcIil9ZnVuY3Rpb24gUGIoYixhKXthP2IuJCRoYXNoS2V5PWE6ZGVsZXRlIGIuJCRoYXNoS2V5fWZ1bmN0aW9uIHkoYil7dmFyIGE9Yi4kJGhhc2hLZXk7cShhcmd1bWVudHMsZnVuY3Rpb24oYSl7YSE9PWImJnEoYSxmdW5jdGlvbihhLGMpe2JbY109YX0pfSk7UGIoYixhKTtyZXR1cm4gYn1mdW5jdGlvbiBWKGIpe3JldHVybiBwYXJzZUludChiLFxyXG4xMCl9ZnVuY3Rpb24gUWIoYixhKXtyZXR1cm4geShuZXcgKHkoZnVuY3Rpb24oKXt9LHtwcm90b3R5cGU6Yn0pKSxhKX1mdW5jdGlvbiBFKCl7fWZ1bmN0aW9uIEFhKGIpe3JldHVybiBifWZ1bmN0aW9uIFkoYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGJ9fWZ1bmN0aW9uIHUoYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifWZ1bmN0aW9uIEQoYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBifWZ1bmN0aW9uIFcoYil7cmV0dXJuIG51bGwhPWImJlwib2JqZWN0XCI9PT10eXBlb2YgYn1mdW5jdGlvbiB3KGIpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYn1mdW5jdGlvbiByYihiKXtyZXR1cm5cIm51bWJlclwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gS2EoYil7cmV0dXJuXCJbb2JqZWN0IERhdGVdXCI9PT1MYS5jYWxsKGIpfWZ1bmN0aW9uIEwoYil7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09TGEuY2FsbChiKX1mdW5jdGlvbiBNKGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBifVxyXG5mdW5jdGlvbiAkYShiKXtyZXR1cm5cIltvYmplY3QgUmVnRXhwXVwiPT09TGEuY2FsbChiKX1mdW5jdGlvbiB6YShiKXtyZXR1cm4gYiYmYi5kb2N1bWVudCYmYi5sb2NhdGlvbiYmYi5hbGVydCYmYi5zZXRJbnRlcnZhbH1mdW5jdGlvbiBQYyhiKXtyZXR1cm4hKCFifHwhKGIubm9kZU5hbWV8fGIub24mJmIuZmluZCkpfWZ1bmN0aW9uIFFjKGIsYSxjKXt2YXIgZD1bXTtxKGIsZnVuY3Rpb24oYixnLGYpe2QucHVzaChhLmNhbGwoYyxiLGcsZikpfSk7cmV0dXJuIGR9ZnVuY3Rpb24gYWIoYixhKXtpZihiLmluZGV4T2YpcmV0dXJuIGIuaW5kZXhPZihhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKylpZihhPT09YltjXSlyZXR1cm4gYztyZXR1cm4tMX1mdW5jdGlvbiBNYShiLGEpe3ZhciBjPWFiKGIsYSk7MDw9YyYmYi5zcGxpY2UoYywxKTtyZXR1cm4gYX1mdW5jdGlvbiAkKGIsYSl7aWYoemEoYil8fGImJmIuJGV2YWxBc3luYyYmYi4kd2F0Y2gpdGhyb3cgTmEoXCJjcHdzXCIpO2lmKGEpe2lmKGI9PT1cclxuYSl0aHJvdyBOYShcImNwaVwiKTtpZihMKGIpKWZvcih2YXIgYz1hLmxlbmd0aD0wO2M8Yi5sZW5ndGg7YysrKWEucHVzaCgkKGJbY10pKTtlbHNle2M9YS4kJGhhc2hLZXk7cShhLGZ1bmN0aW9uKGIsYyl7ZGVsZXRlIGFbY119KTtmb3IodmFyIGQgaW4gYilhW2RdPSQoYltkXSk7UGIoYSxjKX19ZWxzZShhPWIpJiYoTChiKT9hPSQoYixbXSk6S2EoYik/YT1uZXcgRGF0ZShiLmdldFRpbWUoKSk6JGEoYik/YT1SZWdFeHAoYi5zb3VyY2UpOlcoYikmJihhPSQoYix7fSkpKTtyZXR1cm4gYX1mdW5jdGlvbiBSYihiLGEpe2E9YXx8e307Zm9yKHZhciBjIGluIGIpIWIuaGFzT3duUHJvcGVydHkoYyl8fFwiJFwiPT09Yy5jaGFyQXQoMCkmJlwiJFwiPT09Yy5jaGFyQXQoMSl8fChhW2NdPWJbY10pO3JldHVybiBhfWZ1bmN0aW9uIHRhKGIsYSl7aWYoYj09PWEpcmV0dXJuITA7aWYobnVsbD09PWJ8fG51bGw9PT1hKXJldHVybiExO2lmKGIhPT1iJiZhIT09YSlyZXR1cm4hMDt2YXIgYz10eXBlb2YgYixcclxuZDtpZihjPT10eXBlb2YgYSYmXCJvYmplY3RcIj09YylpZihMKGIpKXtpZighTChhKSlyZXR1cm4hMTtpZigoYz1iLmxlbmd0aCk9PWEubGVuZ3RoKXtmb3IoZD0wO2Q8YztkKyspaWYoIXRhKGJbZF0sYVtkXSkpcmV0dXJuITE7cmV0dXJuITB9fWVsc2V7aWYoS2EoYikpcmV0dXJuIEthKGEpJiZiLmdldFRpbWUoKT09YS5nZXRUaW1lKCk7aWYoJGEoYikmJiRhKGEpKXJldHVybiBiLnRvU3RyaW5nKCk9PWEudG9TdHJpbmcoKTtpZihiJiZiLiRldmFsQXN5bmMmJmIuJHdhdGNofHxhJiZhLiRldmFsQXN5bmMmJmEuJHdhdGNofHx6YShiKXx8emEoYSl8fEwoYSkpcmV0dXJuITE7Yz17fTtmb3IoZCBpbiBiKWlmKFwiJFwiIT09ZC5jaGFyQXQoMCkmJiFNKGJbZF0pKXtpZighdGEoYltkXSxhW2RdKSlyZXR1cm4hMTtjW2RdPSEwfWZvcihkIGluIGEpaWYoIWMuaGFzT3duUHJvcGVydHkoZCkmJlwiJFwiIT09ZC5jaGFyQXQoMCkmJmFbZF0hPT1zJiYhTShhW2RdKSlyZXR1cm4hMTtyZXR1cm4hMH1yZXR1cm4hMX1cclxuZnVuY3Rpb24gU2IoKXtyZXR1cm4gUi5zZWN1cml0eVBvbGljeSYmUi5zZWN1cml0eVBvbGljeS5pc0FjdGl2ZXx8Ui5xdWVyeVNlbGVjdG9yJiYhKCFSLnF1ZXJ5U2VsZWN0b3IoXCJbbmctY3NwXVwiKSYmIVIucXVlcnlTZWxlY3RvcihcIltkYXRhLW5nLWNzcF1cIikpfWZ1bmN0aW9uIGJiKGIsYSl7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoP3VhLmNhbGwoYXJndW1lbnRzLDIpOltdO3JldHVybiFNKGEpfHxhIGluc3RhbmNlb2YgUmVnRXhwP2E6Yy5sZW5ndGg/ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD9hLmFwcGx5KGIsYy5jb25jYXQodWEuY2FsbChhcmd1bWVudHMsMCkpKTphLmFwcGx5KGIsYyl9OmZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/YS5hcHBseShiLGFyZ3VtZW50cyk6YS5jYWxsKGIpfX1mdW5jdGlvbiBSYyhiLGEpe3ZhciBjPWE7XCJzdHJpbmdcIj09PXR5cGVvZiBiJiZcIiRcIj09PWIuY2hhckF0KDApP2M9czp6YShhKT9jPVwiJFdJTkRPV1wiOlxyXG5hJiZSPT09YT9jPVwiJERPQ1VNRU5UXCI6YSYmKGEuJGV2YWxBc3luYyYmYS4kd2F0Y2gpJiYoYz1cIiRTQ09QRVwiKTtyZXR1cm4gY31mdW5jdGlvbiBwYShiLGEpe3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYj9zOkpTT04uc3RyaW5naWZ5KGIsUmMsYT9cIiAgXCI6bnVsbCl9ZnVuY3Rpb24gVGIoYil7cmV0dXJuIHcoYik/SlNPTi5wYXJzZShiKTpifWZ1bmN0aW9uIE9hKGIpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2I9ITA6YiYmMCE9PWIubGVuZ3RoPyhiPXgoXCJcIitiKSxiPSEoXCJmXCI9PWJ8fFwiMFwiPT1ifHxcImZhbHNlXCI9PWJ8fFwibm9cIj09Ynx8XCJuXCI9PWJ8fFwiW11cIj09YikpOmI9ITE7cmV0dXJuIGJ9ZnVuY3Rpb24gZmEoYil7Yj16KGIpLmNsb25lKCk7dHJ5e2IuZW1wdHkoKX1jYXRjaChhKXt9dmFyIGM9eihcIjxkaXY+XCIpLmFwcGVuZChiKS5odG1sKCk7dHJ5e3JldHVybiAzPT09YlswXS5ub2RlVHlwZT94KGMpOmMubWF0Y2goL14oPFtePl0rPikvKVsxXS5yZXBsYWNlKC9ePChbXFx3XFwtXSspLyxcclxuZnVuY3Rpb24oYSxiKXtyZXR1cm5cIjxcIit4KGIpfSl9Y2F0Y2goZCl7cmV0dXJuIHgoYyl9fWZ1bmN0aW9uIFViKGIpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGIpfWNhdGNoKGEpe319ZnVuY3Rpb24gVmIoYil7dmFyIGE9e30sYyxkO3EoKGJ8fFwiXCIpLnNwbGl0KFwiJlwiKSxmdW5jdGlvbihiKXtiJiYoYz1iLnNwbGl0KFwiPVwiKSxkPVViKGNbMF0pLEQoZCkmJihiPUQoY1sxXSk/VWIoY1sxXSk6ITAsYVtkXT9MKGFbZF0pP2FbZF0ucHVzaChiKTphW2RdPVthW2RdLGJdOmFbZF09YikpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gV2IoYil7dmFyIGE9W107cShiLGZ1bmN0aW9uKGIsZCl7TChiKT9xKGIsZnVuY3Rpb24oYil7YS5wdXNoKHZhKGQsITApKyghMD09PWI/XCJcIjpcIj1cIit2YShiLCEwKSkpfSk6YS5wdXNoKHZhKGQsITApKyghMD09PWI/XCJcIjpcIj1cIit2YShiLCEwKSkpfSk7cmV0dXJuIGEubGVuZ3RoP2Euam9pbihcIiZcIik6XCJcIn1mdW5jdGlvbiBzYihiKXtyZXR1cm4gdmEoYixcclxuITApLnJlcGxhY2UoLyUyNi9naSxcIiZcIikucmVwbGFjZSgvJTNEL2dpLFwiPVwiKS5yZXBsYWNlKC8lMkIvZ2ksXCIrXCIpfWZ1bmN0aW9uIHZhKGIsYSl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChiKS5yZXBsYWNlKC8lNDAvZ2ksXCJAXCIpLnJlcGxhY2UoLyUzQS9naSxcIjpcIikucmVwbGFjZSgvJTI0L2csXCIkXCIpLnJlcGxhY2UoLyUyQy9naSxcIixcIikucmVwbGFjZSgvJTIwL2csYT9cIiUyMFwiOlwiK1wiKX1mdW5jdGlvbiBTYyhiLGEpe2Z1bmN0aW9uIGMoYSl7YSYmZC5wdXNoKGEpfXZhciBkPVtiXSxlLGcsZj1bXCJuZzphcHBcIixcIm5nLWFwcFwiLFwieC1uZy1hcHBcIixcImRhdGEtbmctYXBwXCJdLGg9L1xcc25nWzpcXC1dYXBwKDpcXHMqKFtcXHdcXGRfXSspOz8pP1xccy87cShmLGZ1bmN0aW9uKGEpe2ZbYV09ITA7YyhSLmdldEVsZW1lbnRCeUlkKGEpKTthPWEucmVwbGFjZShcIjpcIixcIlxcXFw6XCIpO2IucXVlcnlTZWxlY3RvckFsbCYmKHEoYi5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2EpLGMpLHEoYi5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK1xyXG5hK1wiXFxcXDpcIiksYykscShiLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIrYStcIl1cIiksYykpfSk7cShkLGZ1bmN0aW9uKGEpe2lmKCFlKXt2YXIgYj1oLmV4ZWMoXCIgXCIrYS5jbGFzc05hbWUrXCIgXCIpO2I/KGU9YSxnPShiWzJdfHxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIsXCIpKTpxKGEuYXR0cmlidXRlcyxmdW5jdGlvbihiKXshZSYmZltiLm5hbWVdJiYoZT1hLGc9Yi52YWx1ZSl9KX19KTtlJiZhKGUsZz9bZ106W10pfWZ1bmN0aW9uIFhiKGIsYSl7dmFyIGM9ZnVuY3Rpb24oKXtiPXooYik7aWYoYi5pbmplY3RvcigpKXt2YXIgYz1iWzBdPT09Uj9cImRvY3VtZW50XCI6ZmEoYik7dGhyb3cgTmEoXCJidHN0cnBkXCIsYyk7fWE9YXx8W107YS51bnNoaWZ0KFtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7YS52YWx1ZShcIiRyb290RWxlbWVudFwiLGIpfV0pO2EudW5zaGlmdChcIm5nXCIpO2M9WWIoYSk7Yy5pbnZva2UoW1wiJHJvb3RTY29wZVwiLFwiJHJvb3RFbGVtZW50XCIsXCIkY29tcGlsZVwiLFwiJGluamVjdG9yXCIsXCIkYW5pbWF0ZVwiLFxyXG5mdW5jdGlvbihhLGIsYyxkLGUpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7Yi5kYXRhKFwiJGluamVjdG9yXCIsZCk7YyhiKShhKX0pfV0pO3JldHVybiBjfSxkPS9eTkdfREVGRVJfQk9PVFNUUkFQIS87aWYoUCYmIWQudGVzdChQLm5hbWUpKXJldHVybiBjKCk7UC5uYW1lPVAubmFtZS5yZXBsYWNlKGQsXCJcIik7QmEucmVzdW1lQm9vdHN0cmFwPWZ1bmN0aW9uKGIpe3EoYixmdW5jdGlvbihiKXthLnB1c2goYil9KTtjKCl9fWZ1bmN0aW9uIGNiKGIsYSl7YT1hfHxcIl9cIjtyZXR1cm4gYi5yZXBsYWNlKFRjLGZ1bmN0aW9uKGIsZCl7cmV0dXJuKGQ/YTpcIlwiKStiLnRvTG93ZXJDYXNlKCl9KX1mdW5jdGlvbiB0YihiLGEsYyl7aWYoIWIpdGhyb3cgTmEoXCJhcmVxXCIsYXx8XCI/XCIsY3x8XCJyZXF1aXJlZFwiKTtyZXR1cm4gYn1mdW5jdGlvbiBQYShiLGEsYyl7YyYmTChiKSYmKGI9YltiLmxlbmd0aC0xXSk7dGIoTShiKSxhLFwibm90IGEgZnVuY3Rpb24sIGdvdCBcIisoYiYmXCJvYmplY3RcIj09dHlwZW9mIGI/XHJcbmIuY29uc3RydWN0b3IubmFtZXx8XCJPYmplY3RcIjp0eXBlb2YgYikpO3JldHVybiBifWZ1bmN0aW9uIHdhKGIsYSl7aWYoXCJoYXNPd25Qcm9wZXJ0eVwiPT09Yil0aHJvdyBOYShcImJhZG5hbWVcIixhKTt9ZnVuY3Rpb24gWmIoYixhLGMpe2lmKCFhKXJldHVybiBiO2E9YS5zcGxpdChcIi5cIik7Zm9yKHZhciBkLGU9YixnPWEubGVuZ3RoLGY9MDtmPGc7ZisrKWQ9YVtmXSxiJiYoYj0oZT1iKVtkXSk7cmV0dXJuIWMmJk0oYik/YmIoZSxiKTpifWZ1bmN0aW9uIHViKGIpe3ZhciBhPWJbMF07Yj1iW2IubGVuZ3RoLTFdO2lmKGE9PT1iKXJldHVybiB6KGEpO3ZhciBjPVthXTtkb3thPWEubmV4dFNpYmxpbmc7aWYoIWEpYnJlYWs7Yy5wdXNoKGEpfXdoaWxlKGEhPT1iKTtyZXR1cm4geihjKX1mdW5jdGlvbiBVYyhiKXt2YXIgYT10KFwiJGluamVjdG9yXCIpLGM9dChcIm5nXCIpO2I9Yi5hbmd1bGFyfHwoYi5hbmd1bGFyPXt9KTtiLiQkbWluRXJyPWIuJCRtaW5FcnJ8fHQ7cmV0dXJuIGIubW9kdWxlfHxcclxuKGIubW9kdWxlPWZ1bmN0aW9uKCl7dmFyIGI9e307cmV0dXJuIGZ1bmN0aW9uKGUsZyxmKXtpZihcImhhc093blByb3BlcnR5XCI9PT1lKXRocm93IGMoXCJiYWRuYW1lXCIsXCJtb2R1bGVcIik7ZyYmYi5oYXNPd25Qcm9wZXJ0eShlKSYmKGJbZV09bnVsbCk7cmV0dXJuIGJbZV18fChiW2VdPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhLGQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7Y1tlfHxcInB1c2hcIl0oW2EsZCxhcmd1bWVudHNdKTtyZXR1cm4gbn19aWYoIWcpdGhyb3cgYShcIm5vbW9kXCIsZSk7dmFyIGM9W10sZD1bXSxsPWIoXCIkaW5qZWN0b3JcIixcImludm9rZVwiKSxuPXtfaW52b2tlUXVldWU6YyxfcnVuQmxvY2tzOmQscmVxdWlyZXM6ZyxuYW1lOmUscHJvdmlkZXI6YihcIiRwcm92aWRlXCIsXCJwcm92aWRlclwiKSxmYWN0b3J5OmIoXCIkcHJvdmlkZVwiLFwiZmFjdG9yeVwiKSxzZXJ2aWNlOmIoXCIkcHJvdmlkZVwiLFwic2VydmljZVwiKSx2YWx1ZTpiKFwiJHByb3ZpZGVcIixcInZhbHVlXCIpLGNvbnN0YW50OmIoXCIkcHJvdmlkZVwiLFxyXG5cImNvbnN0YW50XCIsXCJ1bnNoaWZ0XCIpLGFuaW1hdGlvbjpiKFwiJGFuaW1hdGVQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksZmlsdGVyOmIoXCIkZmlsdGVyUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGNvbnRyb2xsZXI6YihcIiRjb250cm9sbGVyUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGRpcmVjdGl2ZTpiKFwiJGNvbXBpbGVQcm92aWRlclwiLFwiZGlyZWN0aXZlXCIpLGNvbmZpZzpsLHJ1bjpmdW5jdGlvbihhKXtkLnB1c2goYSk7cmV0dXJuIHRoaXN9fTtmJiZsKGYpO3JldHVybiBufSgpKX19KCkpfWZ1bmN0aW9uIFFhKGIpe3JldHVybiBiLnJlcGxhY2UoVmMsZnVuY3Rpb24oYSxiLGQsZSl7cmV0dXJuIGU/ZC50b1VwcGVyQ2FzZSgpOmR9KS5yZXBsYWNlKFdjLFwiTW96JDFcIil9ZnVuY3Rpb24gdmIoYixhLGMsZCl7ZnVuY3Rpb24gZShiKXt2YXIgZT1jJiZiP1t0aGlzLmZpbHRlcihiKV06W3RoaXNdLG09YSxrLGwsbixwLHIsRjtpZighZHx8bnVsbCE9Yilmb3IoO2UubGVuZ3RoOylmb3Ioaz1lLnNoaWZ0KCksXHJcbmw9MCxuPWsubGVuZ3RoO2w8bjtsKyspZm9yKHA9eihrW2xdKSxtP3AudHJpZ2dlckhhbmRsZXIoXCIkZGVzdHJveVwiKTptPSFtLHI9MCxwPShGPXAuY2hpbGRyZW4oKSkubGVuZ3RoO3I8cDtyKyspZS5wdXNoKENhKEZbcl0pKTtyZXR1cm4gZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGc9Q2EuZm5bYl0sZz1nLiRvcmlnaW5hbHx8ZztlLiRvcmlnaW5hbD1nO0NhLmZuW2JdPWV9ZnVuY3Rpb24gTyhiKXtpZihiIGluc3RhbmNlb2YgTylyZXR1cm4gYjt3KGIpJiYoYj1aKGIpKTtpZighKHRoaXMgaW5zdGFuY2VvZiBPKSl7aWYodyhiKSYmXCI8XCIhPWIuY2hhckF0KDApKXRocm93IHdiKFwibm9zZWxcIik7cmV0dXJuIG5ldyBPKGIpfWlmKHcoYikpe3ZhciBhPVIuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLmlubmVySFRNTD1cIjxkaXY+JiMxNjA7PC9kaXY+XCIrYjthLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7eGIodGhpcyxhLmNoaWxkTm9kZXMpO3ooUi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpLmFwcGVuZCh0aGlzKX1lbHNlIHhiKHRoaXMsXHJcbmIpfWZ1bmN0aW9uIHliKGIpe3JldHVybiBiLmNsb25lTm9kZSghMCl9ZnVuY3Rpb24gRGEoYil7JGIoYik7dmFyIGE9MDtmb3IoYj1iLmNoaWxkTm9kZXN8fFtdO2E8Yi5sZW5ndGg7YSsrKURhKGJbYV0pfWZ1bmN0aW9uIGFjKGIsYSxjLGQpe2lmKEQoZCkpdGhyb3cgd2IoXCJvZmZhcmdzXCIpO3ZhciBlPWphKGIsXCJldmVudHNcIik7amEoYixcImhhbmRsZVwiKSYmKHUoYSk/cShlLGZ1bmN0aW9uKGEsYyl7emIoYixjLGEpO2RlbGV0ZSBlW2NdfSk6cShhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhKXt1KGMpPyh6YihiLGEsZVthXSksZGVsZXRlIGVbYV0pOk1hKGVbYV18fFtdLGMpfSkpfWZ1bmN0aW9uICRiKGIsYSl7dmFyIGM9YltkYl0sZD1SYVtjXTtkJiYoYT9kZWxldGUgUmFbY10uZGF0YVthXTooZC5oYW5kbGUmJihkLmV2ZW50cy4kZGVzdHJveSYmZC5oYW5kbGUoe30sXCIkZGVzdHJveVwiKSxhYyhiKSksZGVsZXRlIFJhW2NdLGJbZGJdPXMpKX1mdW5jdGlvbiBqYShiLGEsYyl7dmFyIGQ9XHJcbmJbZGJdLGQ9UmFbZHx8LTFdO2lmKEQoYykpZHx8KGJbZGJdPWQ9KytYYyxkPVJhW2RdPXt9KSxkW2FdPWM7ZWxzZSByZXR1cm4gZCYmZFthXX1mdW5jdGlvbiBiYyhiLGEsYyl7dmFyIGQ9amEoYixcImRhdGFcIiksZT1EKGMpLGc9IWUmJkQoYSksZj1nJiYhVyhhKTtkfHxmfHxqYShiLFwiZGF0YVwiLGQ9e30pO2lmKGUpZFthXT1jO2Vsc2UgaWYoZyl7aWYoZilyZXR1cm4gZCYmZFthXTt5KGQsYSl9ZWxzZSByZXR1cm4gZH1mdW5jdGlvbiBBYihiLGEpe3JldHVybiBiLmdldEF0dHJpYnV0ZT8tMTwoXCIgXCIrKGIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLFwiIFwiKS5pbmRleE9mKFwiIFwiK2ErXCIgXCIpOiExfWZ1bmN0aW9uIEJiKGIsYSl7YSYmYi5zZXRBdHRyaWJ1dGUmJnEoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7Yi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFooKFwiIFwiKyhiLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcclxuXCIgXCIpLnJlcGxhY2UoXCIgXCIrWihhKStcIiBcIixcIiBcIikpKX0pfWZ1bmN0aW9uIENiKGIsYSl7aWYoYSYmYi5zZXRBdHRyaWJ1dGUpe3ZhciBjPShcIiBcIisoYi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csXCIgXCIpO3EoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7YT1aKGEpOy0xPT09Yy5pbmRleE9mKFwiIFwiK2ErXCIgXCIpJiYoYys9YStcIiBcIil9KTtiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsWihjKSl9fWZ1bmN0aW9uIHhiKGIsYSl7aWYoYSl7YT1hLm5vZGVOYW1lfHwhRChhLmxlbmd0aCl8fHphKGEpP1thXTphO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWIucHVzaChhW2NdKX19ZnVuY3Rpb24gY2MoYixhKXtyZXR1cm4gZWIoYixcIiRcIisoYXx8XCJuZ0NvbnRyb2xsZXJcIikrXCJDb250cm9sbGVyXCIpfWZ1bmN0aW9uIGViKGIsYSxjKXtiPXooYik7OT09YlswXS5ub2RlVHlwZSYmKGI9Yi5maW5kKFwiaHRtbFwiKSk7Zm9yKGE9TChhKT9hOlthXTtiLmxlbmd0aDspe2Zvcih2YXIgZD1cclxuMCxlPWEubGVuZ3RoO2Q8ZTtkKyspaWYoKGM9Yi5kYXRhKGFbZF0pKSE9PXMpcmV0dXJuIGM7Yj1iLnBhcmVudCgpfX1mdW5jdGlvbiBkYyhiKXtmb3IodmFyIGE9MCxjPWIuY2hpbGROb2RlczthPGMubGVuZ3RoO2ErKylEYShjW2FdKTtmb3IoO2IuZmlyc3RDaGlsZDspYi5yZW1vdmVDaGlsZChiLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIGVjKGIsYSl7dmFyIGM9ZmJbYS50b0xvd2VyQ2FzZSgpXTtyZXR1cm4gYyYmZmNbYi5ub2RlTmFtZV0mJmN9ZnVuY3Rpb24gWWMoYixhKXt2YXIgYz1mdW5jdGlvbihjLGUpe2MucHJldmVudERlZmF1bHR8fChjLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yy5yZXR1cm5WYWx1ZT0hMX0pO2Muc3RvcFByb3BhZ2F0aW9ufHwoYy5zdG9wUHJvcGFnYXRpb249ZnVuY3Rpb24oKXtjLmNhbmNlbEJ1YmJsZT0hMH0pO2MudGFyZ2V0fHwoYy50YXJnZXQ9Yy5zcmNFbGVtZW50fHxSKTtpZih1KGMuZGVmYXVsdFByZXZlbnRlZCkpe3ZhciBnPWMucHJldmVudERlZmF1bHQ7XHJcbmMucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtjLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7Zy5jYWxsKGMpfTtjLmRlZmF1bHRQcmV2ZW50ZWQ9ITF9Yy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gYy5kZWZhdWx0UHJldmVudGVkfHwhMT09PWMucmV0dXJuVmFsdWV9O3ZhciBmPVJiKGFbZXx8Yy50eXBlXXx8W10pO3EoZixmdW5jdGlvbihhKXthLmNhbGwoYixjKX0pOzg+PU4/KGMucHJldmVudERlZmF1bHQ9bnVsbCxjLnN0b3BQcm9wYWdhdGlvbj1udWxsLGMuaXNEZWZhdWx0UHJldmVudGVkPW51bGwpOihkZWxldGUgYy5wcmV2ZW50RGVmYXVsdCxkZWxldGUgYy5zdG9wUHJvcGFnYXRpb24sZGVsZXRlIGMuaXNEZWZhdWx0UHJldmVudGVkKX07Yy5lbGVtPWI7cmV0dXJuIGN9ZnVuY3Rpb24gRWEoYil7dmFyIGE9dHlwZW9mIGIsYztcIm9iamVjdFwiPT1hJiZudWxsIT09Yj9cImZ1bmN0aW9uXCI9PXR5cGVvZihjPWIuJCRoYXNoS2V5KT9jPWIuJCRoYXNoS2V5KCk6Yz09PVxyXG5zJiYoYz1iLiQkaGFzaEtleT1aYSgpKTpjPWI7cmV0dXJuIGErXCI6XCIrY31mdW5jdGlvbiBTYShiKXtxKGIsdGhpcy5wdXQsdGhpcyl9ZnVuY3Rpb24gZ2MoYil7dmFyIGEsYztcImZ1bmN0aW9uXCI9PXR5cGVvZiBiPyhhPWIuJGluamVjdCl8fChhPVtdLGIubGVuZ3RoJiYoYz1iLnRvU3RyaW5nKCkucmVwbGFjZShaYyxcIlwiKSxjPWMubWF0Y2goJGMpLHEoY1sxXS5zcGxpdChhZCksZnVuY3Rpb24oYil7Yi5yZXBsYWNlKGJkLGZ1bmN0aW9uKGIsYyxkKXthLnB1c2goZCl9KX0pKSxiLiRpbmplY3Q9YSk6TChiKT8oYz1iLmxlbmd0aC0xLFBhKGJbY10sXCJmblwiKSxhPWIuc2xpY2UoMCxjKSk6UGEoYixcImZuXCIsITApO3JldHVybiBhfWZ1bmN0aW9uIFliKGIpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7aWYoVyhiKSlxKGIsT2IoYSkpO2Vsc2UgcmV0dXJuIGEoYixjKX19ZnVuY3Rpb24gYyhhLGIpe3dhKGEsXCJzZXJ2aWNlXCIpO2lmKE0oYil8fEwoYikpYj1uLmluc3RhbnRpYXRlKGIpO1xyXG5pZighYi4kZ2V0KXRocm93IFRhKFwicGdldFwiLGEpO3JldHVybiBsW2EraF09Yn1mdW5jdGlvbiBkKGEsYil7cmV0dXJuIGMoYSx7JGdldDpifSl9ZnVuY3Rpb24gZShhKXt2YXIgYj1bXSxjLGQsZyxoO3EoYSxmdW5jdGlvbihhKXtpZighay5nZXQoYSkpe2sucHV0KGEsITApO3RyeXtpZih3KGEpKWZvcihjPVVhKGEpLGI9Yi5jb25jYXQoZShjLnJlcXVpcmVzKSkuY29uY2F0KGMuX3J1bkJsb2NrcyksZD1jLl9pbnZva2VRdWV1ZSxnPTAsaD1kLmxlbmd0aDtnPGg7ZysrKXt2YXIgZj1kW2ddLG09bi5nZXQoZlswXSk7bVtmWzFdXS5hcHBseShtLGZbMl0pfWVsc2UgTShhKT9iLnB1c2gobi5pbnZva2UoYSkpOkwoYSk/Yi5wdXNoKG4uaW52b2tlKGEpKTpQYShhLFwibW9kdWxlXCIpfWNhdGNoKHIpe3Rocm93IEwoYSkmJihhPWFbYS5sZW5ndGgtMV0pLHIubWVzc2FnZSYmKHIuc3RhY2smJi0xPT1yLnN0YWNrLmluZGV4T2Yoci5tZXNzYWdlKSkmJihyPXIubWVzc2FnZStcIlxcblwiK3Iuc3RhY2spLFxyXG5UYShcIm1vZHVsZXJyXCIsYSxyLnN0YWNrfHxyLm1lc3NhZ2V8fHIpO319fSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZyhhLGIpe2Z1bmN0aW9uIGMoZCl7aWYoYS5oYXNPd25Qcm9wZXJ0eShkKSl7aWYoYVtkXT09PWYpdGhyb3cgVGEoXCJjZGVwXCIsbS5qb2luKFwiIDwtIFwiKSk7cmV0dXJuIGFbZF19dHJ5e3JldHVybiBtLnVuc2hpZnQoZCksYVtkXT1mLGFbZF09YihkKX1jYXRjaChlKXt0aHJvdyBhW2RdPT09ZiYmZGVsZXRlIGFbZF0sZTt9ZmluYWxseXttLnNoaWZ0KCl9fWZ1bmN0aW9uIGQoYSxiLGUpe3ZhciBnPVtdLGg9Z2MoYSksZixtLGs7bT0wO2ZvcihmPWgubGVuZ3RoO208ZjttKyspe2s9aFttXTtpZihcInN0cmluZ1wiIT09dHlwZW9mIGspdGhyb3cgVGEoXCJpdGtuXCIsayk7Zy5wdXNoKGUmJmUuaGFzT3duUHJvcGVydHkoayk/ZVtrXTpjKGspKX1hLiRpbmplY3R8fChhPWFbZl0pO3JldHVybiBhLmFwcGx5KGIsZyl9cmV0dXJue2ludm9rZTpkLGluc3RhbnRpYXRlOmZ1bmN0aW9uKGEsXHJcbmIpe3ZhciBjPWZ1bmN0aW9uKCl7fSxlO2MucHJvdG90eXBlPShMKGEpP2FbYS5sZW5ndGgtMV06YSkucHJvdG90eXBlO2M9bmV3IGM7ZT1kKGEsYyxiKTtyZXR1cm4gVyhlKXx8TShlKT9lOmN9LGdldDpjLGFubm90YXRlOmdjLGhhczpmdW5jdGlvbihiKXtyZXR1cm4gbC5oYXNPd25Qcm9wZXJ0eShiK2gpfHxhLmhhc093blByb3BlcnR5KGIpfX19dmFyIGY9e30saD1cIlByb3ZpZGVyXCIsbT1bXSxrPW5ldyBTYSxsPXskcHJvdmlkZTp7cHJvdmlkZXI6YShjKSxmYWN0b3J5OmEoZCksc2VydmljZTphKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYSxbXCIkaW5qZWN0b3JcIixmdW5jdGlvbihhKXtyZXR1cm4gYS5pbnN0YW50aWF0ZShiKX1dKX0pLHZhbHVlOmEoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZChhLFkoYikpfSksY29uc3RhbnQ6YShmdW5jdGlvbihhLGIpe3dhKGEsXCJjb25zdGFudFwiKTtsW2FdPWI7cFthXT1ifSksZGVjb3JhdG9yOmZ1bmN0aW9uKGEsYil7dmFyIGM9bi5nZXQoYStoKSxcclxuZD1jLiRnZXQ7Yy4kZ2V0PWZ1bmN0aW9uKCl7dmFyIGE9ci5pbnZva2UoZCxjKTtyZXR1cm4gci5pbnZva2UoYixudWxsLHskZGVsZWdhdGU6YX0pfX19fSxuPWwuJGluamVjdG9yPWcobCxmdW5jdGlvbigpe3Rocm93IFRhKFwidW5wclwiLG0uam9pbihcIiA8LSBcIikpO30pLHA9e30scj1wLiRpbmplY3Rvcj1nKHAsZnVuY3Rpb24oYSl7YT1uLmdldChhK2gpO3JldHVybiByLmludm9rZShhLiRnZXQsYSl9KTtxKGUoYiksZnVuY3Rpb24oYSl7ci5pbnZva2UoYXx8RSl9KTtyZXR1cm4gcn1mdW5jdGlvbiBjZCgpe3ZhciBiPSEwO3RoaXMuZGlzYWJsZUF1dG9TY3JvbGxpbmc9ZnVuY3Rpb24oKXtiPSExfTt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGxvY2F0aW9uXCIsXCIkcm9vdFNjb3BlXCIsZnVuY3Rpb24oYSxjLGQpe2Z1bmN0aW9uIGUoYSl7dmFyIGI9bnVsbDtxKGEsZnVuY3Rpb24oYSl7Ynx8XCJhXCIhPT14KGEubm9kZU5hbWUpfHwoYj1hKX0pO3JldHVybiBifWZ1bmN0aW9uIGcoKXt2YXIgYj1cclxuYy5oYXNoKCksZDtiPyhkPWYuZ2V0RWxlbWVudEJ5SWQoYikpP2Quc2Nyb2xsSW50b1ZpZXcoKTooZD1lKGYuZ2V0RWxlbWVudHNCeU5hbWUoYikpKT9kLnNjcm9sbEludG9WaWV3KCk6XCJ0b3BcIj09PWImJmEuc2Nyb2xsVG8oMCwwKTphLnNjcm9sbFRvKDAsMCl9dmFyIGY9YS5kb2N1bWVudDtiJiZkLiR3YXRjaChmdW5jdGlvbigpe3JldHVybiBjLmhhc2goKX0sZnVuY3Rpb24oKXtkLiRldmFsQXN5bmMoZyl9KTtyZXR1cm4gZ31dfWZ1bmN0aW9uIGRkKGIsYSxjLGQpe2Z1bmN0aW9uIGUoYSl7dHJ5e2EuYXBwbHkobnVsbCx1YS5jYWxsKGFyZ3VtZW50cywxKSl9ZmluYWxseXtpZihGLS0sMD09PUYpZm9yKDtBLmxlbmd0aDspdHJ5e0EucG9wKCkoKX1jYXRjaChiKXtjLmVycm9yKGIpfX19ZnVuY3Rpb24gZyhhLGIpeyhmdW5jdGlvbiBTKCl7cShILGZ1bmN0aW9uKGEpe2EoKX0pO3Y9YihTLGEpfSkoKX1mdW5jdGlvbiBmKCl7Qz1udWxsO1EhPWgudXJsKCkmJihRPWgudXJsKCkscShrYSxcclxuZnVuY3Rpb24oYSl7YShoLnVybCgpKX0pKX12YXIgaD10aGlzLG09YVswXSxrPWIubG9jYXRpb24sbD1iLmhpc3Rvcnksbj1iLnNldFRpbWVvdXQscD1iLmNsZWFyVGltZW91dCxyPXt9O2guaXNNb2NrPSExO3ZhciBGPTAsQT1bXTtoLiQkY29tcGxldGVPdXRzdGFuZGluZ1JlcXVlc3Q9ZTtoLiQkaW5jT3V0c3RhbmRpbmdSZXF1ZXN0Q291bnQ9ZnVuY3Rpb24oKXtGKyt9O2gubm90aWZ5V2hlbk5vT3V0c3RhbmRpbmdSZXF1ZXN0cz1mdW5jdGlvbihhKXtxKEgsZnVuY3Rpb24oYSl7YSgpfSk7MD09PUY/YSgpOkEucHVzaChhKX07dmFyIEg9W10sdjtoLmFkZFBvbGxGbj1mdW5jdGlvbihhKXt1KHYpJiZnKDEwMCxuKTtILnB1c2goYSk7cmV0dXJuIGF9O3ZhciBRPWsuaHJlZixLPWEuZmluZChcImJhc2VcIiksQz1udWxsO2gudXJsPWZ1bmN0aW9uKGEsYyl7ayE9PWIubG9jYXRpb24mJihrPWIubG9jYXRpb24pO2whPT1iLmhpc3RvcnkmJihsPWIuaGlzdG9yeSk7aWYoYSl7aWYoUSE9YSlyZXR1cm4gUT1cclxuYSxkLmhpc3Rvcnk/Yz9sLnJlcGxhY2VTdGF0ZShudWxsLFwiXCIsYSk6KGwucHVzaFN0YXRlKG51bGwsXCJcIixhKSxLLmF0dHIoXCJocmVmXCIsSy5hdHRyKFwiaHJlZlwiKSkpOihDPWEsYz9rLnJlcGxhY2UoYSk6ay5ocmVmPWEpLGh9ZWxzZSByZXR1cm4gQ3x8ay5ocmVmLnJlcGxhY2UoLyUyNy9nLFwiJ1wiKX07dmFyIGthPVtdLEk9ITE7aC5vblVybENoYW5nZT1mdW5jdGlvbihhKXtpZighSSl7aWYoZC5oaXN0b3J5KXooYikub24oXCJwb3BzdGF0ZVwiLGYpO2lmKGQuaGFzaGNoYW5nZSl6KGIpLm9uKFwiaGFzaGNoYW5nZVwiLGYpO2Vsc2UgaC5hZGRQb2xsRm4oZik7ST0hMH1rYS5wdXNoKGEpO3JldHVybiBhfTtoLmJhc2VIcmVmPWZ1bmN0aW9uKCl7dmFyIGE9Sy5hdHRyKFwiaHJlZlwiKTtyZXR1cm4gYT9hLnJlcGxhY2UoL14oaHR0cHM/XFw6KT9cXC9cXC9bXlxcL10qLyxcIlwiKTpcIlwifTt2YXIgVT17fSxiYT1cIlwiLGFhPWguYmFzZUhyZWYoKTtoLmNvb2tpZXM9ZnVuY3Rpb24oYSxiKXt2YXIgZCxlLGcsaDtcclxuaWYoYSliPT09cz9tLmNvb2tpZT1lc2NhcGUoYSkrXCI9O3BhdGg9XCIrYWErXCI7ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiOncoYikmJihkPShtLmNvb2tpZT1lc2NhcGUoYSkrXCI9XCIrZXNjYXBlKGIpK1wiO3BhdGg9XCIrYWEpLmxlbmd0aCsxLDQwOTY8ZCYmYy53YXJuKFwiQ29va2llICdcIithK1wiJyBwb3NzaWJseSBub3Qgc2V0IG9yIG92ZXJmbG93ZWQgYmVjYXVzZSBpdCB3YXMgdG9vIGxhcmdlIChcIitkK1wiID4gNDA5NiBieXRlcykhXCIpKTtlbHNle2lmKG0uY29va2llIT09YmEpZm9yKGJhPW0uY29va2llLGQ9YmEuc3BsaXQoXCI7IFwiKSxVPXt9LGc9MDtnPGQubGVuZ3RoO2crKyllPWRbZ10saD1lLmluZGV4T2YoXCI9XCIpLDA8aCYmKGE9dW5lc2NhcGUoZS5zdWJzdHJpbmcoMCxoKSksVVthXT09PXMmJihVW2FdPXVuZXNjYXBlKGUuc3Vic3RyaW5nKGgrMSkpKSk7cmV0dXJuIFV9fTtoLmRlZmVyPWZ1bmN0aW9uKGEsYil7dmFyIGM7RisrO2M9bihmdW5jdGlvbigpe2RlbGV0ZSByW2NdO1xyXG5lKGEpfSxifHwwKTtyW2NdPSEwO3JldHVybiBjfTtoLmRlZmVyLmNhbmNlbD1mdW5jdGlvbihhKXtyZXR1cm4gclthXT8oZGVsZXRlIHJbYV0scChhKSxlKEUpLCEwKTohMX19ZnVuY3Rpb24gZWQoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGxvZ1wiLFwiJHNuaWZmZXJcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGIsYSxjLGQpe3JldHVybiBuZXcgZGQoYixkLGEsYyl9XX1mdW5jdGlvbiBmZCgpe3RoaXMuJGdldD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkKXtmdW5jdGlvbiBlKGEpe2EhPW4mJihwP3A9PWEmJihwPWEubik6cD1hLGcoYS5uLGEucCksZyhhLG4pLG49YSxuLm49bnVsbCl9ZnVuY3Rpb24gZyhhLGIpe2EhPWImJihhJiYoYS5wPWIpLGImJihiLm49YSkpfWlmKGIgaW4gYSl0aHJvdyB0KFwiJGNhY2hlRmFjdG9yeVwiKShcImlpZFwiLGIpO3ZhciBmPTAsaD15KHt9LGQse2lkOmJ9KSxtPXt9LGs9ZCYmZC5jYXBhY2l0eXx8TnVtYmVyLk1BWF9WQUxVRSxsPXt9LG49bnVsbCxwPW51bGw7XHJcbnJldHVybiBhW2JdPXtwdXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1sW2FdfHwobFthXT17a2V5OmF9KTtlKGMpO2lmKCF1KGIpKXJldHVybiBhIGluIG18fGYrKyxtW2FdPWIsZj5rJiZ0aGlzLnJlbW92ZShwLmtleSksYn0sZ2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWxbYV07aWYoYilyZXR1cm4gZShiKSxtW2FdfSxyZW1vdmU6ZnVuY3Rpb24oYSl7dmFyIGI9bFthXTtiJiYoYj09biYmKG49Yi5wKSxiPT1wJiYocD1iLm4pLGcoYi5uLGIucCksZGVsZXRlIGxbYV0sZGVsZXRlIG1bYV0sZi0tKX0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7bT17fTtmPTA7bD17fTtuPXA9bnVsbH0sZGVzdHJveTpmdW5jdGlvbigpe2w9aD1tPW51bGw7ZGVsZXRlIGFbYl19LGluZm86ZnVuY3Rpb24oKXtyZXR1cm4geSh7fSxoLHtzaXplOmZ9KX19fXZhciBhPXt9O2IuaW5mbz1mdW5jdGlvbigpe3ZhciBiPXt9O3EoYSxmdW5jdGlvbihhLGUpe2JbZV09YS5pbmZvKCl9KTtyZXR1cm4gYn07Yi5nZXQ9ZnVuY3Rpb24oYil7cmV0dXJuIGFbYl19O1xyXG5yZXR1cm4gYn19ZnVuY3Rpb24gZ2QoKXt0aGlzLiRnZXQ9W1wiJGNhY2hlRmFjdG9yeVwiLGZ1bmN0aW9uKGIpe3JldHVybiBiKFwidGVtcGxhdGVzXCIpfV19ZnVuY3Rpb24gaWMoYixhKXt2YXIgYz17fSxkPVwiRGlyZWN0aXZlXCIsZT0vXlxccypkaXJlY3RpdmVcXDpcXHMqKFtcXGRcXHdcXC1fXSspXFxzKyguKikkLyxnPS8oKFtcXGRcXHdcXC1fXSspKD86XFw6KFteO10rKSk/Oz8pLyxmPS9eKG9uW2Etel0rfGZvcm1hY3Rpb24pJC87dGhpcy5kaXJlY3RpdmU9ZnVuY3Rpb24gbShhLGUpe3dhKGEsXCJkaXJlY3RpdmVcIik7dyhhKT8odGIoZSxcImRpcmVjdGl2ZUZhY3RvcnlcIiksYy5oYXNPd25Qcm9wZXJ0eShhKXx8KGNbYV09W10sYi5mYWN0b3J5KGErZCxbXCIkaW5qZWN0b3JcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsZnVuY3Rpb24oYixkKXt2YXIgZT1bXTtxKGNbYV0sZnVuY3Rpb24oYyxnKXt0cnl7dmFyIGY9Yi5pbnZva2UoYyk7TShmKT9mPXtjb21waWxlOlkoZil9OiFmLmNvbXBpbGUmJmYubGluayYmKGYuY29tcGlsZT1cclxuWShmLmxpbmspKTtmLnByaW9yaXR5PWYucHJpb3JpdHl8fDA7Zi5pbmRleD1nO2YubmFtZT1mLm5hbWV8fGE7Zi5yZXF1aXJlPWYucmVxdWlyZXx8Zi5jb250cm9sbGVyJiZmLm5hbWU7Zi5yZXN0cmljdD1mLnJlc3RyaWN0fHxcIkFcIjtlLnB1c2goZil9Y2F0Y2gobSl7ZChtKX19KTtyZXR1cm4gZX1dKSksY1thXS5wdXNoKGUpKTpxKGEsT2IobSkpO3JldHVybiB0aGlzfTt0aGlzLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KGIpLHRoaXMpOmEuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3QoKX07dGhpcy5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGEuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KGIpLHRoaXMpOmEuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KCl9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiRpbnRlcnBvbGF0ZVwiLFxyXG5cIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRwYXJzZVwiLFwiJGNvbnRyb2xsZXJcIixcIiRyb290U2NvcGVcIixcIiRkb2N1bWVudFwiLFwiJHNjZVwiLFwiJGFuaW1hdGVcIixcIiQkc2FuaXRpemVVcmlcIixmdW5jdGlvbihhLGIsbCxuLHAscixGLEEsSCx2LFEsSyl7ZnVuY3Rpb24gQyhhLGIsYyxkLGUpe2EgaW5zdGFuY2VvZiB6fHwoYT16KGEpKTtxKGEsZnVuY3Rpb24oYixjKXszPT1iLm5vZGVUeXBlJiZiLm5vZGVWYWx1ZS5tYXRjaCgvXFxTKy8pJiYoYVtjXT16KGIpLndyYXAoXCI8c3Bhbj48L3NwYW4+XCIpLnBhcmVudCgpWzBdKX0pO3ZhciBnPUkoYSxiLGEsYyxkLGUpO2thKGEsXCJuZy1zY29wZVwiKTtyZXR1cm4gZnVuY3Rpb24oYixjLGQpe3RiKGIsXCJzY29wZVwiKTt2YXIgZT1jP0ZhLmNsb25lLmNhbGwoYSk6YTtxKGQsZnVuY3Rpb24oYSxiKXtlLmRhdGEoXCIkXCIrYitcIkNvbnRyb2xsZXJcIixhKX0pO2Q9MDtmb3IodmFyIGY9ZS5sZW5ndGg7ZDxmO2QrKyl7dmFyIG09XHJcbmVbZF0ubm9kZVR5cGU7MSE9PW0mJjkhPT1tfHxlLmVxKGQpLmRhdGEoXCIkc2NvcGVcIixiKX1jJiZjKGUsYik7ZyYmZyhiLGUsZSk7cmV0dXJuIGV9fWZ1bmN0aW9uIGthKGEsYil7dHJ5e2EuYWRkQ2xhc3MoYil9Y2F0Y2goYyl7fX1mdW5jdGlvbiBJKGEsYixjLGQsZSxnKXtmdW5jdGlvbiBmKGEsYyxkLGUpe3ZhciBnLGsscixsLG4scCxKO2c9Yy5sZW5ndGg7dmFyIEY9QXJyYXkoZyk7Zm9yKG49MDtuPGc7bisrKUZbbl09Y1tuXTtKPW49MDtmb3IocD1tLmxlbmd0aDtuPHA7SisrKWs9RltKXSxjPW1bbisrXSxnPW1bbisrXSxyPXooayksYz8oYy5zY29wZT8obD1hLiRuZXcoKSxyLmRhdGEoXCIkc2NvcGVcIixsKSk6bD1hLChyPWMudHJhbnNjbHVkZSl8fCFlJiZiP2MoZyxsLGssZCxVKGEscnx8YikpOmMoZyxsLGssZCxlKSk6ZyYmZyhhLGsuY2hpbGROb2RlcyxzLGUpfWZvcih2YXIgbT1bXSxrLHIsbCxuLHA9MDtwPGEubGVuZ3RoO3ArKylrPW5ldyBEYixyPWJhKGFbcF0sW10sayxcclxuMD09PXA/ZDpzLGUpLChnPXIubGVuZ3RoP2dhKHIsYVtwXSxrLGIsYyxudWxsLFtdLFtdLGcpOm51bGwpJiZnLnNjb3BlJiZrYSh6KGFbcF0pLFwibmctc2NvcGVcIiksaz1nJiZnLnRlcm1pbmFsfHwhKGw9YVtwXS5jaGlsZE5vZGVzKXx8IWwubGVuZ3RoP251bGw6SShsLGc/Zy50cmFuc2NsdWRlOmIpLG0ucHVzaChnLGspLG49bnx8Z3x8ayxnPW51bGw7cmV0dXJuIG4/ZjpudWxsfWZ1bmN0aW9uIFUoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe3ZhciBnPSExO2N8fChjPWEuJG5ldygpLGc9Yy4kJHRyYW5zY2x1ZGVkPSEwKTtkPWIoYyxkLGUpO2lmKGcpZC5vbihcIiRkZXN0cm95XCIsYmIoYyxjLiRkZXN0cm95KSk7cmV0dXJuIGR9fWZ1bmN0aW9uIGJhKGEsYixjLGQsZil7dmFyIG09Yy4kYXR0cixrO3N3aXRjaChhLm5vZGVUeXBlKXtjYXNlIDE6UyhiLGxhKEdhKGEpLnRvTG93ZXJDYXNlKCkpLFwiRVwiLGQsZik7dmFyIHIsbCxuO2s9YS5hdHRyaWJ1dGVzO2Zvcih2YXIgcD0wLEY9XHJcbmsmJmsubGVuZ3RoO3A8RjtwKyspe3ZhciBBPSExLFE9ITE7cj1rW3BdO2lmKCFOfHw4PD1OfHxyLnNwZWNpZmllZCl7bD1yLm5hbWU7bj1sYShsKTtULnRlc3QobikmJihsPWNiKG4uc3Vic3RyKDYpLFwiLVwiKSk7dmFyIEM9bi5yZXBsYWNlKC8oU3RhcnR8RW5kKSQvLFwiXCIpO249PT1DK1wiU3RhcnRcIiYmKEE9bCxRPWwuc3Vic3RyKDAsbC5sZW5ndGgtNSkrXCJlbmRcIixsPWwuc3Vic3RyKDAsbC5sZW5ndGgtNikpO249bGEobC50b0xvd2VyQ2FzZSgpKTttW25dPWw7Y1tuXT1yPVooci52YWx1ZSk7ZWMoYSxuKSYmKGNbbl09ITApO08oYSxiLHIsbik7UyhiLG4sXCJBXCIsZCxmLEEsUSl9fWE9YS5jbGFzc05hbWU7aWYodyhhKSYmXCJcIiE9PWEpZm9yKDtrPWcuZXhlYyhhKTspbj1sYShrWzJdKSxTKGIsbixcIkNcIixkLGYpJiYoY1tuXT1aKGtbM10pKSxhPWEuc3Vic3RyKGsuaW5kZXgra1swXS5sZW5ndGgpO2JyZWFrO2Nhc2UgMzp0KGIsYS5ub2RlVmFsdWUpO2JyZWFrO2Nhc2UgODp0cnl7aWYoaz1cclxuZS5leGVjKGEubm9kZVZhbHVlKSluPWxhKGtbMV0pLFMoYixuLFwiTVwiLGQsZikmJihjW25dPVooa1syXSkpfWNhdGNoKEgpe319Yi5zb3J0KHUpO3JldHVybiBifWZ1bmN0aW9uIGFhKGEsYixjKXt2YXIgZD1bXSxlPTA7aWYoYiYmYS5oYXNBdHRyaWJ1dGUmJmEuaGFzQXR0cmlidXRlKGIpKXtkb3tpZighYSl0aHJvdyBoYShcInV0ZXJkaXJcIixiLGMpOzE9PWEubm9kZVR5cGUmJihhLmhhc0F0dHJpYnV0ZShiKSYmZSsrLGEuaGFzQXR0cmlidXRlKGMpJiZlLS0pO2QucHVzaChhKTthPWEubmV4dFNpYmxpbmd9d2hpbGUoMDxlKX1lbHNlIGQucHVzaChhKTtyZXR1cm4geihkKX1mdW5jdGlvbiBCKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCxlLGcsZixrKXtlPWFhKGVbMF0sYixjKTtyZXR1cm4gYShkLGUsZyxmLGspfX1mdW5jdGlvbiBnYShhLGMsZCxlLGcsZixtLG4scCl7ZnVuY3Rpb24gQShhLGIsYyxkKXtpZihhKXtjJiYoYT1CKGEsYyxkKSk7YS5yZXF1aXJlPUcucmVxdWlyZTtpZihLPT09XHJcbkd8fEcuJCRpc29sYXRlU2NvcGUpYT1qYyhhLHtpc29sYXRlU2NvcGU6ITB9KTttLnB1c2goYSl9aWYoYil7YyYmKGI9QihiLGMsZCkpO2IucmVxdWlyZT1HLnJlcXVpcmU7aWYoSz09PUd8fEcuJCRpc29sYXRlU2NvcGUpYj1qYyhiLHtpc29sYXRlU2NvcGU6ITB9KTtuLnB1c2goYil9fWZ1bmN0aW9uIFEoYSxiLGMpe3ZhciBkLGU9XCJkYXRhXCIsZz0hMTtpZih3KGEpKXtmb3IoO1wiXlwiPT0oZD1hLmNoYXJBdCgwKSl8fFwiP1wiPT1kOylhPWEuc3Vic3RyKDEpLFwiXlwiPT1kJiYoZT1cImluaGVyaXRlZERhdGFcIiksZz1nfHxcIj9cIj09ZDtkPW51bGw7YyYmXCJkYXRhXCI9PT1lJiYoZD1jW2FdKTtkPWR8fGJbZV0oXCIkXCIrYStcIkNvbnRyb2xsZXJcIik7aWYoIWQmJiFnKXRocm93IGhhKFwiY3RyZXFcIixhLGNhKTt9ZWxzZSBMKGEpJiYoZD1bXSxxKGEsZnVuY3Rpb24oYSl7ZC5wdXNoKFEoYSxiLGMpKX0pKTtyZXR1cm4gZH1mdW5jdGlvbiBIKGEsZSxnLGYscCl7ZnVuY3Rpb24gQShhLGIpe3ZhciBjOzI+XHJcbmFyZ3VtZW50cy5sZW5ndGgmJihiPWEsYT1zKTt1JiYoYz1hYSk7cmV0dXJuIHAoYSxiLGMpfXZhciBKLEMsdixJLGJhLEIsYWE9e30sZ2I7Sj1jPT09Zz9kOlJiKGQsbmV3IERiKHooZyksZC4kYXR0cikpO0M9Si4kJGVsZW1lbnQ7aWYoSyl7dmFyIHQ9L15cXHMqKFtAPSZdKShcXD8/KVxccyooXFx3KilcXHMqJC87Zj16KGcpO0I9ZS4kbmV3KCEwKTtnYSYmZ2E9PT1LLiQkb3JpZ2luYWxEaXJlY3RpdmU/Zi5kYXRhKFwiJGlzb2xhdGVTY29wZVwiLEIpOmYuZGF0YShcIiRpc29sYXRlU2NvcGVOb1RlbXBsYXRlXCIsQik7a2EoZixcIm5nLWlzb2xhdGUtc2NvcGVcIik7cShLLnNjb3BlLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9YS5tYXRjaCh0KXx8W10sZz1kWzNdfHxjLGY9XCI/XCI9PWRbMl0sZD1kWzFdLG0sbCxuLHA7Qi4kJGlzb2xhdGVCaW5kaW5nc1tjXT1kK2c7c3dpdGNoKGQpe2Nhc2UgXCJAXCI6Si4kb2JzZXJ2ZShnLGZ1bmN0aW9uKGEpe0JbY109YX0pO0ouJCRvYnNlcnZlcnNbZ10uJCRzY29wZT1lO1xyXG5KW2ddJiYoQltjXT1iKEpbZ10pKGUpKTticmVhaztjYXNlIFwiPVwiOmlmKGYmJiFKW2ddKWJyZWFrO2w9cihKW2ddKTtwPWwubGl0ZXJhbD90YTpmdW5jdGlvbihhLGIpe3JldHVybiBhPT09Yn07bj1sLmFzc2lnbnx8ZnVuY3Rpb24oKXttPUJbY109bChlKTt0aHJvdyBoYShcIm5vbmFzc2lnblwiLEpbZ10sSy5uYW1lKTt9O209QltjXT1sKGUpO0IuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGE9bChlKTtwKGEsQltjXSl8fChwKGEsbSk/bihlLGE9QltjXSk6QltjXT1hKTtyZXR1cm4gbT1hfSxudWxsLGwubGl0ZXJhbCk7YnJlYWs7Y2FzZSBcIiZcIjpsPXIoSltnXSk7QltjXT1mdW5jdGlvbihhKXtyZXR1cm4gbChlLGEpfTticmVhaztkZWZhdWx0OnRocm93IGhhKFwiaXNjcFwiLEsubmFtZSxjLGEpO319KX1nYj1wJiZBO1UmJnEoVSxmdW5jdGlvbihhKXt2YXIgYj17JHNjb3BlOmE9PT1LfHxhLiQkaXNvbGF0ZVNjb3BlP0I6ZSwkZWxlbWVudDpDLCRhdHRyczpKLCR0cmFuc2NsdWRlOmdifSxjO1xyXG5iYT1hLmNvbnRyb2xsZXI7XCJAXCI9PWJhJiYoYmE9SlthLm5hbWVdKTtjPUYoYmEsYik7YWFbYS5uYW1lXT1jO3V8fEMuZGF0YShcIiRcIithLm5hbWUrXCJDb250cm9sbGVyXCIsYyk7YS5jb250cm9sbGVyQXMmJihiLiRzY29wZVthLmNvbnRyb2xsZXJBc109Yyl9KTtmPTA7Zm9yKHY9bS5sZW5ndGg7Zjx2O2YrKyl0cnl7ST1tW2ZdLEkoSS5pc29sYXRlU2NvcGU/QjplLEMsSixJLnJlcXVpcmUmJlEoSS5yZXF1aXJlLEMsYWEpLGdiKX1jYXRjaChTKXtsKFMsZmEoQykpfWY9ZTtLJiYoSy50ZW1wbGF0ZXx8bnVsbD09PUsudGVtcGxhdGVVcmwpJiYoZj1CKTthJiZhKGYsZy5jaGlsZE5vZGVzLHMscCk7Zm9yKGY9bi5sZW5ndGgtMTswPD1mO2YtLSl0cnl7ST1uW2ZdLEkoSS5pc29sYXRlU2NvcGU/QjplLEMsSixJLnJlcXVpcmUmJlEoSS5yZXF1aXJlLEMsYWEpLGdiKX1jYXRjaChHKXtsKEcsZmEoQykpfX1wPXB8fHt9O3ZhciB2PS1OdW1iZXIuTUFYX1ZBTFVFLEksVT1wLmNvbnRyb2xsZXJEaXJlY3RpdmVzLFxyXG5LPXAubmV3SXNvbGF0ZVNjb3BlRGlyZWN0aXZlLGdhPXAudGVtcGxhdGVEaXJlY3RpdmU7cD1wLm5vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmU7Zm9yKHZhciBTPSExLHU9ITEseT1kLiQkZWxlbWVudD16KGMpLEcsY2EsdCxQPWUsTyxOPTAsbWE9YS5sZW5ndGg7TjxtYTtOKyspe0c9YVtOXTt2YXIgVmE9Ry4kJHN0YXJ0LFQ9Ry4kJGVuZDtWYSYmKHk9YWEoYyxWYSxUKSk7dD1zO2lmKHY+Ry5wcmlvcml0eSlicmVhaztpZih0PUcuc2NvcGUpST1JfHxHLEcudGVtcGxhdGVVcmx8fCh4KFwibmV3L2lzb2xhdGVkIHNjb3BlXCIsSyxHLHkpLFcodCkmJihLPUcpKTtjYT1HLm5hbWU7IUcudGVtcGxhdGVVcmwmJkcuY29udHJvbGxlciYmKHQ9Ry5jb250cm9sbGVyLFU9VXx8e30seChcIidcIitjYStcIicgY29udHJvbGxlclwiLFVbY2FdLEcseSksVVtjYV09Ryk7aWYodD1HLnRyYW5zY2x1ZGUpUz0hMCxHLiQkdGxifHwoeChcInRyYW5zY2x1c2lvblwiLHAsRyx5KSxwPUcpLFwiZWxlbWVudFwiPT10Pyh1PVxyXG4hMCx2PUcucHJpb3JpdHksdD1hYShjLFZhLFQpLHk9ZC4kJGVsZW1lbnQ9eihSLmNyZWF0ZUNvbW1lbnQoXCIgXCIrY2ErXCI6IFwiK2RbY2FdK1wiIFwiKSksYz15WzBdLGhiKGcseih1YS5jYWxsKHQsMCkpLGMpLFA9Qyh0LGUsdixmJiZmLm5hbWUse25vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmU6cH0pKToodD16KHliKGMpKS5jb250ZW50cygpLHkuZW1wdHkoKSxQPUModCxlKSk7aWYoRy50ZW1wbGF0ZSlpZih4KFwidGVtcGxhdGVcIixnYSxHLHkpLGdhPUcsdD1NKEcudGVtcGxhdGUpP0cudGVtcGxhdGUoeSxkKTpHLnRlbXBsYXRlLHQ9Vih0KSxHLnJlcGxhY2Upe2Y9Rzt0PXooXCI8ZGl2PlwiK1oodCkrXCI8L2Rpdj5cIikuY29udGVudHMoKTtjPXRbMF07aWYoMSE9dC5sZW5ndGh8fDEhPT1jLm5vZGVUeXBlKXRocm93IGhhKFwidHBscnRcIixjYSxcIlwiKTtoYihnLHksYyk7bWE9eyRhdHRyOnt9fTt0PWJhKGMsW10sbWEpO3ZhciBYPWEuc3BsaWNlKE4rMSxhLmxlbmd0aC0oTisxKSk7SyYmaGModCk7XHJcbmE9YS5jb25jYXQodCkuY29uY2F0KFgpO0QoZCxtYSk7bWE9YS5sZW5ndGh9ZWxzZSB5Lmh0bWwodCk7aWYoRy50ZW1wbGF0ZVVybCl4KFwidGVtcGxhdGVcIixnYSxHLHkpLGdhPUcsRy5yZXBsYWNlJiYoZj1HKSxIPUUoYS5zcGxpY2UoTixhLmxlbmd0aC1OKSx5LGQsZyxQLG0sbix7Y29udHJvbGxlckRpcmVjdGl2ZXM6VSxuZXdJc29sYXRlU2NvcGVEaXJlY3RpdmU6Syx0ZW1wbGF0ZURpcmVjdGl2ZTpnYSxub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlOnB9KSxtYT1hLmxlbmd0aDtlbHNlIGlmKEcuY29tcGlsZSl0cnl7Tz1HLmNvbXBpbGUoeSxkLFApLE0oTyk/QShudWxsLE8sVmEsVCk6TyYmQShPLnByZSxPLnBvc3QsVmEsVCl9Y2F0Y2goWSl7bChZLGZhKHkpKX1HLnRlcm1pbmFsJiYoSC50ZXJtaW5hbD0hMCx2PU1hdGgubWF4KHYsRy5wcmlvcml0eSkpfUguc2NvcGU9SSYmITA9PT1JLnNjb3BlO0gudHJhbnNjbHVkZT1TJiZQO3JldHVybiBIfWZ1bmN0aW9uIGhjKGEpe2Zvcih2YXIgYj1cclxuMCxjPWEubGVuZ3RoO2I8YztiKyspYVtiXT1RYihhW2JdLHskJGlzb2xhdGVTY29wZTohMH0pfWZ1bmN0aW9uIFMoYixlLGcsZixrLHIsbil7aWYoZT09PWspcmV0dXJuIG51bGw7az1udWxsO2lmKGMuaGFzT3duUHJvcGVydHkoZSkpe3ZhciBwO2U9YS5nZXQoZStkKTtmb3IodmFyIEY9MCxBPWUubGVuZ3RoO0Y8QTtGKyspdHJ5e3A9ZVtGXSwoZj09PXN8fGY+cC5wcmlvcml0eSkmJi0xIT1wLnJlc3RyaWN0LmluZGV4T2YoZykmJihyJiYocD1RYihwLHskJHN0YXJ0OnIsJCRlbmQ6bn0pKSxiLnB1c2gocCksaz1wKX1jYXRjaChRKXtsKFEpfX1yZXR1cm4ga31mdW5jdGlvbiBEKGEsYil7dmFyIGM9Yi4kYXR0cixkPWEuJGF0dHIsZT1hLiQkZWxlbWVudDtxKGEsZnVuY3Rpb24oZCxlKXtcIiRcIiE9ZS5jaGFyQXQoMCkmJihiW2VdJiYoZCs9KFwic3R5bGVcIj09PWU/XCI7XCI6XCIgXCIpK2JbZV0pLGEuJHNldChlLGQsITAsY1tlXSkpfSk7cShiLGZ1bmN0aW9uKGIsZyl7XCJjbGFzc1wiPT1nPyhrYShlLFxyXG5iKSxhW1wiY2xhc3NcIl09KGFbXCJjbGFzc1wiXT9hW1wiY2xhc3NcIl0rXCIgXCI6XCJcIikrYik6XCJzdHlsZVwiPT1nPyhlLmF0dHIoXCJzdHlsZVwiLGUuYXR0cihcInN0eWxlXCIpK1wiO1wiK2IpLGEuc3R5bGU9KGEuc3R5bGU/YS5zdHlsZStcIjtcIjpcIlwiKStiKTpcIiRcIj09Zy5jaGFyQXQoMCl8fGEuaGFzT3duUHJvcGVydHkoZyl8fChhW2ddPWIsZFtnXT1jW2ddKX0pfWZ1bmN0aW9uIEUoYSxiLGMsZCxlLGcsZixrKXt2YXIgbT1bXSxyLGwsRj1iWzBdLEE9YS5zaGlmdCgpLFE9eSh7fSxBLHt0ZW1wbGF0ZVVybDpudWxsLHRyYW5zY2x1ZGU6bnVsbCxyZXBsYWNlOm51bGwsJCRvcmlnaW5hbERpcmVjdGl2ZTpBfSksQz1NKEEudGVtcGxhdGVVcmwpP0EudGVtcGxhdGVVcmwoYixjKTpBLnRlbXBsYXRlVXJsO2IuZW1wdHkoKTtuLmdldCh2LmdldFRydXN0ZWRSZXNvdXJjZVVybChDKSx7Y2FjaGU6cH0pLnN1Y2Nlc3MoZnVuY3Rpb24obil7dmFyIHAsSDtuPVYobik7aWYoQS5yZXBsYWNlKXtuPXooXCI8ZGl2PlwiK1xyXG5aKG4pK1wiPC9kaXY+XCIpLmNvbnRlbnRzKCk7cD1uWzBdO2lmKDEhPW4ubGVuZ3RofHwxIT09cC5ub2RlVHlwZSl0aHJvdyBoYShcInRwbHJ0XCIsQS5uYW1lLEMpO249eyRhdHRyOnt9fTtoYihkLGIscCk7dmFyIHY9YmEocCxbXSxuKTtXKEEuc2NvcGUpJiZoYyh2KTthPXYuY29uY2F0KGEpO0QoYyxuKX1lbHNlIHA9RixiLmh0bWwobik7YS51bnNoaWZ0KFEpO3I9Z2EoYSxwLGMsZSxiLEEsZyxmLGspO3EoZCxmdW5jdGlvbihhLGMpe2E9PXAmJihkW2NdPWJbMF0pfSk7Zm9yKGw9SShiWzBdLmNoaWxkTm9kZXMsZSk7bS5sZW5ndGg7KXtuPW0uc2hpZnQoKTtIPW0uc2hpZnQoKTt2YXIgSz1tLnNoaWZ0KCksQj1tLnNoaWZ0KCksdj1iWzBdO2lmKEghPT1GKXt2YXIgYWE9SC5jbGFzc05hbWUsdj15YihwKTtoYihLLHooSCksdik7a2Eoeih2KSxhYSl9SD1yLnRyYW5zY2x1ZGU/VShuLHIudHJhbnNjbHVkZSk6QjtyKGwsbix2LGQsSCl9bT1udWxsfSkuZXJyb3IoZnVuY3Rpb24oYSxiLGMsXHJcbmQpe3Rocm93IGhhKFwidHBsb2FkXCIsZC51cmwpO30pO3JldHVybiBmdW5jdGlvbihhLGIsYyxkLGUpe20/KG0ucHVzaChiKSxtLnB1c2goYyksbS5wdXNoKGQpLG0ucHVzaChlKSk6cihsLGIsYyxkLGUpfX1mdW5jdGlvbiB1KGEsYil7dmFyIGM9Yi5wcmlvcml0eS1hLnByaW9yaXR5O3JldHVybiAwIT09Yz9jOmEubmFtZSE9PWIubmFtZT9hLm5hbWU8Yi5uYW1lPy0xOjE6YS5pbmRleC1iLmluZGV4fWZ1bmN0aW9uIHgoYSxiLGMsZCl7aWYoYil0aHJvdyBoYShcIm11bHRpZGlyXCIsYi5uYW1lLGMubmFtZSxhLGZhKGQpKTt9ZnVuY3Rpb24gdChhLGMpe3ZhciBkPWIoYywhMCk7ZCYmYS5wdXNoKHtwcmlvcml0eTowLGNvbXBpbGU6WShmdW5jdGlvbihhLGIpe3ZhciBjPWIucGFyZW50KCksZT1jLmRhdGEoXCIkYmluZGluZ1wiKXx8W107ZS5wdXNoKGQpO2thKGMuZGF0YShcIiRiaW5kaW5nXCIsZSksXCJuZy1iaW5kaW5nXCIpO2EuJHdhdGNoKGQsZnVuY3Rpb24oYSl7YlswXS5ub2RlVmFsdWU9YX0pfSl9KX1cclxuZnVuY3Rpb24gUChhLGIpe2lmKFwic3JjZG9jXCI9PWIpcmV0dXJuIHYuSFRNTDt2YXIgYz1HYShhKTtpZihcInhsaW5rSHJlZlwiPT1ifHxcIkZPUk1cIj09YyYmXCJhY3Rpb25cIj09Ynx8XCJJTUdcIiE9YyYmKFwic3JjXCI9PWJ8fFwibmdTcmNcIj09YikpcmV0dXJuIHYuUkVTT1VSQ0VfVVJMfWZ1bmN0aW9uIE8oYSxjLGQsZSl7dmFyIGc9YihkLCEwKTtpZihnKXtpZihcIm11bHRpcGxlXCI9PT1lJiZcIlNFTEVDVFwiPT09R2EoYSkpdGhyb3cgaGEoXCJzZWxtdWx0aVwiLGZhKGEpKTtjLnB1c2goe3ByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihjLGQsbSl7ZD1tLiQkb2JzZXJ2ZXJzfHwobS4kJG9ic2VydmVycz17fSk7aWYoZi50ZXN0KGUpKXRocm93IGhhKFwibm9kb21ldmVudHNcIik7aWYoZz1iKG1bZV0sITAsUChhLGUpKSltW2VdPWcoYyksKGRbZV18fChkW2VdPVtdKSkuJCRpbnRlcj0hMCwobS4kJG9ic2VydmVycyYmbS4kJG9ic2VydmVyc1tlXS4kJHNjb3BlfHxcclxuYykuJHdhdGNoKGcsZnVuY3Rpb24oYSxiKXtcImNsYXNzXCI9PT1lJiZhIT1iP20uJHVwZGF0ZUNsYXNzKGEsYik6bS4kc2V0KGUsYSl9KX19fX0pfX1mdW5jdGlvbiBoYihhLGIsYyl7dmFyIGQ9YlswXSxlPWIubGVuZ3RoLGc9ZC5wYXJlbnROb2RlLGYsbTtpZihhKWZvcihmPTAsbT1hLmxlbmd0aDtmPG07ZisrKWlmKGFbZl09PWQpe2FbZisrXT1jO209ZitlLTE7Zm9yKHZhciBrPWEubGVuZ3RoO2Y8aztmKyssbSsrKW08az9hW2ZdPWFbbV06ZGVsZXRlIGFbZl07YS5sZW5ndGgtPWUtMTticmVha31nJiZnLnJlcGxhY2VDaGlsZChjLGQpO2E9Ui5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7YS5hcHBlbmRDaGlsZChkKTtjW3ouZXhwYW5kb109ZFt6LmV4cGFuZG9dO2Q9MTtmb3IoZT1iLmxlbmd0aDtkPGU7ZCsrKWc9YltkXSx6KGcpLnJlbW92ZSgpLGEuYXBwZW5kQ2hpbGQoZyksZGVsZXRlIGJbZF07YlswXT1jO2IubGVuZ3RoPTF9ZnVuY3Rpb24gamMoYSxiKXtyZXR1cm4geShmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KG51bGwsXHJcbmFyZ3VtZW50cyl9LGEsYil9dmFyIERiPWZ1bmN0aW9uKGEsYil7dGhpcy4kJGVsZW1lbnQ9YTt0aGlzLiRhdHRyPWJ8fHt9fTtEYi5wcm90b3R5cGU9eyRub3JtYWxpemU6bGEsJGFkZENsYXNzOmZ1bmN0aW9uKGEpe2EmJjA8YS5sZW5ndGgmJlEuYWRkQ2xhc3ModGhpcy4kJGVsZW1lbnQsYSl9LCRyZW1vdmVDbGFzczpmdW5jdGlvbihhKXthJiYwPGEubGVuZ3RoJiZRLnJlbW92ZUNsYXNzKHRoaXMuJCRlbGVtZW50LGEpfSwkdXBkYXRlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt0aGlzLiRyZW1vdmVDbGFzcyhrYyhiLGEpKTt0aGlzLiRhZGRDbGFzcyhrYyhhLGIpKX0sJHNldDpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1lYyh0aGlzLiQkZWxlbWVudFswXSxhKTtlJiYodGhpcy4kJGVsZW1lbnQucHJvcChhLGIpLGQ9ZSk7dGhpc1thXT1iO2Q/dGhpcy4kYXR0clthXT1kOihkPXRoaXMuJGF0dHJbYV0pfHwodGhpcy4kYXR0clthXT1kPWNiKGEsXCItXCIpKTtlPUdhKHRoaXMuJCRlbGVtZW50KTtcclxuaWYoXCJBXCI9PT1lJiZcImhyZWZcIj09PWF8fFwiSU1HXCI9PT1lJiZcInNyY1wiPT09YSl0aGlzW2FdPWI9SyhiLFwic3JjXCI9PT1hKTshMSE9PWMmJihudWxsPT09Ynx8Yj09PXM/dGhpcy4kJGVsZW1lbnQucmVtb3ZlQXR0cihkKTp0aGlzLiQkZWxlbWVudC5hdHRyKGQsYikpOyhjPXRoaXMuJCRvYnNlcnZlcnMpJiZxKGNbYV0sZnVuY3Rpb24oYSl7dHJ5e2EoYil9Y2F0Y2goYyl7bChjKX19KX0sJG9ic2VydmU6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy4kJG9ic2VydmVyc3x8KGMuJCRvYnNlcnZlcnM9e30pLGU9ZFthXXx8KGRbYV09W10pO2UucHVzaChiKTtBLiRldmFsQXN5bmMoZnVuY3Rpb24oKXtlLiQkaW50ZXJ8fGIoY1thXSl9KTtyZXR1cm4gYn19O3ZhciBjYT1iLnN0YXJ0U3ltYm9sKCksbWE9Yi5lbmRTeW1ib2woKSxWPVwie3tcIj09Y2F8fFwifX1cIj09bWE/QWE6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvXFx7XFx7L2csY2EpLnJlcGxhY2UoL319L2csbWEpfSxUPS9ebmdBdHRyW0EtWl0vO1xyXG5yZXR1cm4gQ31dfWZ1bmN0aW9uIGxhKGIpe3JldHVybiBRYShiLnJlcGxhY2UoaGQsXCJcIikpfWZ1bmN0aW9uIGtjKGIsYSl7dmFyIGM9XCJcIixkPWIuc3BsaXQoL1xccysvKSxlPWEuc3BsaXQoL1xccysvKSxnPTA7YTpmb3IoO2c8ZC5sZW5ndGg7ZysrKXtmb3IodmFyIGY9ZFtnXSxoPTA7aDxlLmxlbmd0aDtoKyspaWYoZj09ZVtoXSljb250aW51ZSBhO2MrPSgwPGMubGVuZ3RoP1wiIFwiOlwiXCIpK2Z9cmV0dXJuIGN9ZnVuY3Rpb24gaWQoKXt2YXIgYj17fSxhPS9eKFxcUyspKFxccythc1xccysoXFx3KykpPyQvO3RoaXMucmVnaXN0ZXI9ZnVuY3Rpb24oYSxkKXt3YShhLFwiY29udHJvbGxlclwiKTtXKGEpP3koYixhKTpiW2FdPWR9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiR3aW5kb3dcIixmdW5jdGlvbihjLGQpe3JldHVybiBmdW5jdGlvbihlLGcpe3ZhciBmLGgsbTt3KGUpJiYoZj1lLm1hdGNoKGEpLGg9ZlsxXSxtPWZbM10sZT1iLmhhc093blByb3BlcnR5KGgpP2JbaF06WmIoZy4kc2NvcGUsaCxcclxuITApfHxaYihkLGgsITApLFBhKGUsaCwhMCkpO2Y9Yy5pbnN0YW50aWF0ZShlLGcpO2lmKG0pe2lmKCFnfHxcIm9iamVjdFwiIT10eXBlb2YgZy4kc2NvcGUpdGhyb3cgdChcIiRjb250cm9sbGVyXCIpKFwibm9zY3BcIixofHxlLm5hbWUsbSk7Zy4kc2NvcGVbbV09Zn1yZXR1cm4gZn19XX1mdW5jdGlvbiBqZCgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsZnVuY3Rpb24oYil7cmV0dXJuIHooYi5kb2N1bWVudCl9XX1mdW5jdGlvbiBrZCgpe3RoaXMuJGdldD1bXCIkbG9nXCIsZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKGEsYyl7Yi5lcnJvci5hcHBseShiLGFyZ3VtZW50cyl9fV19ZnVuY3Rpb24gbGMoYil7dmFyIGE9e30sYyxkLGU7aWYoIWIpcmV0dXJuIGE7cShiLnNwbGl0KFwiXFxuXCIpLGZ1bmN0aW9uKGIpe2U9Yi5pbmRleE9mKFwiOlwiKTtjPXgoWihiLnN1YnN0cigwLGUpKSk7ZD1aKGIuc3Vic3RyKGUrMSkpO2MmJihhW2NdPWFbY10/YVtjXSsoXCIsIFwiK2QpOmQpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gbWMoYil7dmFyIGE9XHJcblcoYik/YjpzO3JldHVybiBmdW5jdGlvbihjKXthfHwoYT1sYyhiKSk7cmV0dXJuIGM/YVt4KGMpXXx8bnVsbDphfX1mdW5jdGlvbiBuYyhiLGEsYyl7aWYoTShjKSlyZXR1cm4gYyhiLGEpO3EoYyxmdW5jdGlvbihjKXtiPWMoYixhKX0pO3JldHVybiBifWZ1bmN0aW9uIGxkKCl7dmFyIGI9L15cXHMqKFxcW3xcXHtbXlxce10pLyxhPS9bXFx9XFxdXVxccyokLyxjPS9eXFwpXFxdXFx9Jyw/XFxuLyxkPXtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04XCJ9LGU9dGhpcy5kZWZhdWx0cz17dHJhbnNmb3JtUmVzcG9uc2U6W2Z1bmN0aW9uKGQpe3coZCkmJihkPWQucmVwbGFjZShjLFwiXCIpLGIudGVzdChkKSYmYS50ZXN0KGQpJiYoZD1UYihkKSkpO3JldHVybiBkfV0sdHJhbnNmb3JtUmVxdWVzdDpbZnVuY3Rpb24oYSl7cmV0dXJuIFcoYSkmJlwiW29iamVjdCBGaWxlXVwiIT09TGEuY2FsbChhKT9wYShhKTphfV0saGVhZGVyczp7Y29tbW9uOntBY2NlcHQ6XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIn0sXHJcbnBvc3Q6JChkKSxwdXQ6JChkKSxwYXRjaDokKGQpfSx4c3JmQ29va2llTmFtZTpcIlhTUkYtVE9LRU5cIix4c3JmSGVhZGVyTmFtZTpcIlgtWFNSRi1UT0tFTlwifSxnPXRoaXMuaW50ZXJjZXB0b3JzPVtdLGY9dGhpcy5yZXNwb25zZUludGVyY2VwdG9ycz1bXTt0aGlzLiRnZXQ9W1wiJGh0dHBCYWNrZW5kXCIsXCIkYnJvd3NlclwiLFwiJGNhY2hlRmFjdG9yeVwiLFwiJHJvb3RTY29wZVwiLFwiJHFcIixcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEsYixjLGQsbixwKXtmdW5jdGlvbiByKGEpe2Z1bmN0aW9uIGMoYSl7dmFyIGI9eSh7fSxhLHtkYXRhOm5jKGEuZGF0YSxhLmhlYWRlcnMsZC50cmFuc2Zvcm1SZXNwb25zZSl9KTtyZXR1cm4gMjAwPD1hLnN0YXR1cyYmMzAwPmEuc3RhdHVzP2I6bi5yZWplY3QoYil9dmFyIGQ9e3RyYW5zZm9ybVJlcXVlc3Q6ZS50cmFuc2Zvcm1SZXF1ZXN0LHRyYW5zZm9ybVJlc3BvbnNlOmUudHJhbnNmb3JtUmVzcG9uc2V9LGc9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXt2YXIgYztcclxucShhLGZ1bmN0aW9uKGIsZCl7TShiKSYmKGM9YigpLG51bGwhPWM/YVtkXT1jOmRlbGV0ZSBhW2RdKX0pfXZhciBjPWUuaGVhZGVycyxkPXkoe30sYS5oZWFkZXJzKSxnLGYsYz15KHt9LGMuY29tbW9uLGNbeChhLm1ldGhvZCldKTtiKGMpO2IoZCk7YTpmb3IoZyBpbiBjKXthPXgoZyk7Zm9yKGYgaW4gZClpZih4KGYpPT09YSljb250aW51ZSBhO2RbZ109Y1tnXX1yZXR1cm4gZH0oYSk7eShkLGEpO2QuaGVhZGVycz1nO2QubWV0aG9kPUhhKGQubWV0aG9kKTsoYT1FYihkLnVybCk/Yi5jb29raWVzKClbZC54c3JmQ29va2llTmFtZXx8ZS54c3JmQ29va2llTmFtZV06cykmJihnW2QueHNyZkhlYWRlck5hbWV8fGUueHNyZkhlYWRlck5hbWVdPWEpO3ZhciBmPVtmdW5jdGlvbihhKXtnPWEuaGVhZGVyczt2YXIgYj1uYyhhLmRhdGEsbWMoZyksYS50cmFuc2Zvcm1SZXF1ZXN0KTt1KGEuZGF0YSkmJnEoZyxmdW5jdGlvbihhLGIpe1wiY29udGVudC10eXBlXCI9PT14KGIpJiZkZWxldGUgZ1tiXX0pO1xyXG51KGEud2l0aENyZWRlbnRpYWxzKSYmIXUoZS53aXRoQ3JlZGVudGlhbHMpJiYoYS53aXRoQ3JlZGVudGlhbHM9ZS53aXRoQ3JlZGVudGlhbHMpO3JldHVybiBGKGEsYixnKS50aGVuKGMsYyl9LHNdLGs9bi53aGVuKGQpO2ZvcihxKHYsZnVuY3Rpb24oYSl7KGEucmVxdWVzdHx8YS5yZXF1ZXN0RXJyb3IpJiZmLnVuc2hpZnQoYS5yZXF1ZXN0LGEucmVxdWVzdEVycm9yKTsoYS5yZXNwb25zZXx8YS5yZXNwb25zZUVycm9yKSYmZi5wdXNoKGEucmVzcG9uc2UsYS5yZXNwb25zZUVycm9yKX0pO2YubGVuZ3RoOyl7YT1mLnNoaWZ0KCk7dmFyIGg9Zi5zaGlmdCgpLGs9ay50aGVuKGEsaCl9ay5zdWNjZXNzPWZ1bmN0aW9uKGEpe2sudGhlbihmdW5jdGlvbihiKXthKGIuZGF0YSxiLnN0YXR1cyxiLmhlYWRlcnMsZCl9KTtyZXR1cm4ga307ay5lcnJvcj1mdW5jdGlvbihhKXtrLnRoZW4obnVsbCxmdW5jdGlvbihiKXthKGIuZGF0YSxiLnN0YXR1cyxiLmhlYWRlcnMsZCl9KTtyZXR1cm4ga307XHJcbnJldHVybiBrfWZ1bmN0aW9uIEYoYixjLGcpe2Z1bmN0aW9uIGYoYSxiLGMpe3YmJigyMDA8PWEmJjMwMD5hP3YucHV0KHMsW2EsYixsYyhjKV0pOnYucmVtb3ZlKHMpKTttKGIsYSxjKTtkLiQkcGhhc2V8fGQuJGFwcGx5KCl9ZnVuY3Rpb24gbShhLGMsZCl7Yz1NYXRoLm1heChjLDApOygyMDA8PWMmJjMwMD5jP3AucmVzb2x2ZTpwLnJlamVjdCkoe2RhdGE6YSxzdGF0dXM6YyxoZWFkZXJzOm1jKGQpLGNvbmZpZzpifSl9ZnVuY3Rpb24gaygpe3ZhciBhPWFiKHIucGVuZGluZ1JlcXVlc3RzLGIpOy0xIT09YSYmci5wZW5kaW5nUmVxdWVzdHMuc3BsaWNlKGEsMSl9dmFyIHA9bi5kZWZlcigpLEY9cC5wcm9taXNlLHYscSxzPUEoYi51cmwsYi5wYXJhbXMpO3IucGVuZGluZ1JlcXVlc3RzLnB1c2goYik7Ri50aGVuKGssayk7KGIuY2FjaGV8fGUuY2FjaGUpJiYoITEhPT1iLmNhY2hlJiZcIkdFVFwiPT1iLm1ldGhvZCkmJih2PVcoYi5jYWNoZSk/Yi5jYWNoZTpXKGUuY2FjaGUpP2UuY2FjaGU6XHJcbkgpO2lmKHYpaWYocT12LmdldChzKSxEKHEpKXtpZihxLnRoZW4pcmV0dXJuIHEudGhlbihrLGspLHE7TChxKT9tKHFbMV0scVswXSwkKHFbMl0pKTptKHEsMjAwLHt9KX1lbHNlIHYucHV0KHMsRik7dShxKSYmYShiLm1ldGhvZCxzLGMsZixnLGIudGltZW91dCxiLndpdGhDcmVkZW50aWFscyxiLnJlc3BvbnNlVHlwZSk7cmV0dXJuIEZ9ZnVuY3Rpb24gQShhLGIpe2lmKCFiKXJldHVybiBhO3ZhciBjPVtdO09jKGIsZnVuY3Rpb24oYSxiKXtudWxsPT09YXx8dShhKXx8KEwoYSl8fChhPVthXSkscShhLGZ1bmN0aW9uKGEpe1coYSkmJihhPXBhKGEpKTtjLnB1c2godmEoYikrXCI9XCIrdmEoYSkpfSkpfSk7cmV0dXJuIGErKC0xPT1hLmluZGV4T2YoXCI/XCIpP1wiP1wiOlwiJlwiKStjLmpvaW4oXCImXCIpfXZhciBIPWMoXCIkaHR0cFwiKSx2PVtdO3EoZyxmdW5jdGlvbihhKXt2LnVuc2hpZnQodyhhKT9wLmdldChhKTpwLmludm9rZShhKSl9KTtxKGYsZnVuY3Rpb24oYSxiKXt2YXIgYz13KGEpP3AuZ2V0KGEpOlxyXG5wLmludm9rZShhKTt2LnNwbGljZShiLDAse3Jlc3BvbnNlOmZ1bmN0aW9uKGEpe3JldHVybiBjKG4ud2hlbihhKSl9LHJlc3BvbnNlRXJyb3I6ZnVuY3Rpb24oYSl7cmV0dXJuIGMobi5yZWplY3QoYSkpfX0pfSk7ci5wZW5kaW5nUmVxdWVzdHM9W107KGZ1bmN0aW9uKGEpe3EoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3JbYV09ZnVuY3Rpb24oYixjKXtyZXR1cm4gcih5KGN8fHt9LHttZXRob2Q6YSx1cmw6Yn0pKX19KX0pKFwiZ2V0XCIsXCJkZWxldGVcIixcImhlYWRcIixcImpzb25wXCIpOyhmdW5jdGlvbihhKXtxKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtyW2FdPWZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gcih5KGR8fHt9LHttZXRob2Q6YSx1cmw6YixkYXRhOmN9KSl9fSl9KShcInBvc3RcIixcInB1dFwiKTtyLmRlZmF1bHRzPWU7cmV0dXJuIHJ9XX1mdW5jdGlvbiBtZChiKXtpZig4Pj1OJiYoIWIubWF0Y2goL14oZ2V0fHBvc3R8aGVhZHxwdXR8ZGVsZXRlfG9wdGlvbnMpJC9pKXx8IVAuWE1MSHR0cFJlcXVlc3QpKXJldHVybiBuZXcgUC5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7XHJcbmlmKFAuWE1MSHR0cFJlcXVlc3QpcmV0dXJuIG5ldyBQLlhNTEh0dHBSZXF1ZXN0O3Rocm93IHQoXCIkaHR0cEJhY2tlbmRcIikoXCJub3hoclwiKTt9ZnVuY3Rpb24gbmQoKXt0aGlzLiRnZXQ9W1wiJGJyb3dzZXJcIixcIiR3aW5kb3dcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGIsYSxjKXtyZXR1cm4gb2QoYixtZCxiLmRlZmVyLGEuYW5ndWxhci5jYWxsYmFja3MsY1swXSl9XX1mdW5jdGlvbiBvZChiLGEsYyxkLGUpe2Z1bmN0aW9uIGcoYSxiKXt2YXIgYz1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksZD1mdW5jdGlvbigpe2Mub25yZWFkeXN0YXRlY2hhbmdlPWMub25sb2FkPWMub25lcnJvcj1udWxsO2UuYm9keS5yZW1vdmVDaGlsZChjKTtiJiZiKCl9O2MudHlwZT1cInRleHQvamF2YXNjcmlwdFwiO2Muc3JjPWE7TiYmOD49Tj9jLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpey9sb2FkZWR8Y29tcGxldGUvLnRlc3QoYy5yZWFkeVN0YXRlKSYmZCgpfTpjLm9ubG9hZD1jLm9uZXJyb3I9XHJcbmZ1bmN0aW9uKCl7ZCgpfTtlLmJvZHkuYXBwZW5kQ2hpbGQoYyk7cmV0dXJuIGR9dmFyIGY9LTE7cmV0dXJuIGZ1bmN0aW9uKGUsbSxrLGwsbixwLHIsRil7ZnVuY3Rpb24gQSgpe3Y9ZjtLJiZLKCk7QyYmQy5hYm9ydCgpfWZ1bmN0aW9uIEgoYSxkLGUsZyl7SSYmYy5jYW5jZWwoSSk7Sz1DPW51bGw7ZD0wPT09ZD9lPzIwMDo0MDQ6ZDthKDEyMjM9PWQ/MjA0OmQsZSxnKTtiLiQkY29tcGxldGVPdXRzdGFuZGluZ1JlcXVlc3QoRSl9dmFyIHY7Yi4kJGluY091dHN0YW5kaW5nUmVxdWVzdENvdW50KCk7bT1tfHxiLnVybCgpO2lmKFwianNvbnBcIj09eChlKSl7dmFyIFE9XCJfXCIrKGQuY291bnRlcisrKS50b1N0cmluZygzNik7ZFtRXT1mdW5jdGlvbihhKXtkW1FdLmRhdGE9YX07dmFyIEs9ZyhtLnJlcGxhY2UoXCJKU09OX0NBTExCQUNLXCIsXCJhbmd1bGFyLmNhbGxiYWNrcy5cIitRKSxmdW5jdGlvbigpe2RbUV0uZGF0YT9IKGwsMjAwLGRbUV0uZGF0YSk6SChsLHZ8fC0yKTtkW1FdPUJhLm5vb3B9KX1lbHNle3ZhciBDPVxyXG5hKGUpO0Mub3BlbihlLG0sITApO3EobixmdW5jdGlvbihhLGIpe0QoYSkmJkMuc2V0UmVxdWVzdEhlYWRlcihiLGEpfSk7Qy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZihDJiY0PT1DLnJlYWR5U3RhdGUpe3ZhciBhPW51bGwsYj1udWxsO3YhPT1mJiYoYT1DLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLGI9XCJyZXNwb25zZVwiaW4gQz9DLnJlc3BvbnNlOkMucmVzcG9uc2VUZXh0KTtIKGwsdnx8Qy5zdGF0dXMsYixhKX19O3ImJihDLndpdGhDcmVkZW50aWFscz0hMCk7aWYoRil0cnl7Qy5yZXNwb25zZVR5cGU9Rn1jYXRjaChzKXtpZihcImpzb25cIiE9PUYpdGhyb3cgczt9Qy5zZW5kKGt8fG51bGwpfWlmKDA8cCl2YXIgST1jKEEscCk7ZWxzZSBwJiZwLnRoZW4mJnAudGhlbihBKX19ZnVuY3Rpb24gcGQoKXt2YXIgYj1cInt7XCIsYT1cIn19XCI7dGhpcy5zdGFydFN5bWJvbD1mdW5jdGlvbihhKXtyZXR1cm4gYT8oYj1hLHRoaXMpOmJ9O3RoaXMuZW5kU3ltYm9sPWZ1bmN0aW9uKGIpe3JldHVybiBiP1xyXG4oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1bXCIkcGFyc2VcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkc2NlXCIsZnVuY3Rpb24oYyxkLGUpe2Z1bmN0aW9uIGcoZyxrLGwpe2Zvcih2YXIgbixwLHI9MCxGPVtdLEE9Zy5sZW5ndGgsSD0hMSx2PVtdO3I8QTspLTEhPShuPWcuaW5kZXhPZihiLHIpKSYmLTEhPShwPWcuaW5kZXhPZihhLG4rZikpPyhyIT1uJiZGLnB1c2goZy5zdWJzdHJpbmcocixuKSksRi5wdXNoKHI9YyhIPWcuc3Vic3RyaW5nKG4rZixwKSkpLHIuZXhwPUgscj1wK2gsSD0hMCk6KHIhPUEmJkYucHVzaChnLnN1YnN0cmluZyhyKSkscj1BKTsoQT1GLmxlbmd0aCl8fChGLnB1c2goXCJcIiksQT0xKTtpZihsJiYxPEYubGVuZ3RoKXRocm93IG9jKFwibm9jb25jYXRcIixnKTtpZigha3x8SClyZXR1cm4gdi5sZW5ndGg9QSxyPWZ1bmN0aW9uKGEpe3RyeXtmb3IodmFyIGI9MCxjPUEsZjtiPGM7YisrKVwiZnVuY3Rpb25cIj09dHlwZW9mKGY9RltiXSkmJihmPWYoYSksZj1sP2UuZ2V0VHJ1c3RlZChsLFxyXG5mKTplLnZhbHVlT2YoZiksbnVsbD09PWZ8fHUoZik/Zj1cIlwiOlwic3RyaW5nXCIhPXR5cGVvZiBmJiYoZj1wYShmKSkpLHZbYl09ZjtyZXR1cm4gdi5qb2luKFwiXCIpfWNhdGNoKGspe2E9b2MoXCJpbnRlcnJcIixnLGsudG9TdHJpbmcoKSksZChhKX19LHIuZXhwPWcsci5wYXJ0cz1GLHJ9dmFyIGY9Yi5sZW5ndGgsaD1hLmxlbmd0aDtnLnN0YXJ0U3ltYm9sPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9O2cuZW5kU3ltYm9sPWZ1bmN0aW9uKCl7cmV0dXJuIGF9O3JldHVybiBnfV19ZnVuY3Rpb24gcWQoKXt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJHdpbmRvd1wiLFwiJHFcIixmdW5jdGlvbihiLGEsYyl7ZnVuY3Rpb24gZChkLGYsaCxtKXt2YXIgaz1hLnNldEludGVydmFsLGw9YS5jbGVhckludGVydmFsLG49Yy5kZWZlcigpLHA9bi5wcm9taXNlLHI9MCxGPUQobSkmJiFtO2g9RChoKT9oOjA7cC50aGVuKG51bGwsbnVsbCxkKTtwLiQkaW50ZXJ2YWxJZD1rKGZ1bmN0aW9uKCl7bi5ub3RpZnkocisrKTtcclxuMDxoJiZyPj1oJiYobi5yZXNvbHZlKHIpLGwocC4kJGludGVydmFsSWQpLGRlbGV0ZSBlW3AuJCRpbnRlcnZhbElkXSk7Rnx8Yi4kYXBwbHkoKX0sZik7ZVtwLiQkaW50ZXJ2YWxJZF09bjtyZXR1cm4gcH12YXIgZT17fTtkLmNhbmNlbD1mdW5jdGlvbihhKXtyZXR1cm4gYSYmYS4kJGludGVydmFsSWQgaW4gZT8oZVthLiQkaW50ZXJ2YWxJZF0ucmVqZWN0KFwiY2FuY2VsZWRcIiksY2xlYXJJbnRlcnZhbChhLiQkaW50ZXJ2YWxJZCksZGVsZXRlIGVbYS4kJGludGVydmFsSWRdLCEwKTohMX07cmV0dXJuIGR9XX1mdW5jdGlvbiByZCgpe3RoaXMuJGdldD1mdW5jdGlvbigpe3JldHVybntpZDpcImVuLXVzXCIsTlVNQkVSX0ZPUk1BVFM6e0RFQ0lNQUxfU0VQOlwiLlwiLEdST1VQX1NFUDpcIixcIixQQVRURVJOUzpbe21pbkludDoxLG1pbkZyYWM6MCxtYXhGcmFjOjMscG9zUHJlOlwiXCIscG9zU3VmOlwiXCIsbmVnUHJlOlwiLVwiLG5lZ1N1ZjpcIlwiLGdTaXplOjMsbGdTaXplOjN9LHttaW5JbnQ6MSxtaW5GcmFjOjIsXHJcbm1heEZyYWM6Mixwb3NQcmU6XCJcXHUwMGE0XCIscG9zU3VmOlwiXCIsbmVnUHJlOlwiKFxcdTAwYTRcIixuZWdTdWY6XCIpXCIsZ1NpemU6MyxsZ1NpemU6M31dLENVUlJFTkNZX1NZTTpcIiRcIn0sREFURVRJTUVfRk9STUFUUzp7TU9OVEg6XCJKYW51YXJ5IEZlYnJ1YXJ5IE1hcmNoIEFwcmlsIE1heSBKdW5lIEp1bHkgQXVndXN0IFNlcHRlbWJlciBPY3RvYmVyIE5vdmVtYmVyIERlY2VtYmVyXCIuc3BsaXQoXCIgXCIpLFNIT1JUTU9OVEg6XCJKYW4gRmViIE1hciBBcHIgTWF5IEp1biBKdWwgQXVnIFNlcCBPY3QgTm92IERlY1wiLnNwbGl0KFwiIFwiKSxEQVk6XCJTdW5kYXkgTW9uZGF5IFR1ZXNkYXkgV2VkbmVzZGF5IFRodXJzZGF5IEZyaWRheSBTYXR1cmRheVwiLnNwbGl0KFwiIFwiKSxTSE9SVERBWTpcIlN1biBNb24gVHVlIFdlZCBUaHUgRnJpIFNhdFwiLnNwbGl0KFwiIFwiKSxBTVBNUzpbXCJBTVwiLFwiUE1cIl0sbWVkaXVtOlwiTU1NIGQsIHkgaDptbTpzcyBhXCIsXCJzaG9ydFwiOlwiTS9kL3l5IGg6bW0gYVwiLGZ1bGxEYXRlOlwiRUVFRSwgTU1NTSBkLCB5XCIsXHJcbmxvbmdEYXRlOlwiTU1NTSBkLCB5XCIsbWVkaXVtRGF0ZTpcIk1NTSBkLCB5XCIsc2hvcnREYXRlOlwiTS9kL3l5XCIsbWVkaXVtVGltZTpcImg6bW06c3MgYVwiLHNob3J0VGltZTpcImg6bW0gYVwifSxwbHVyYWxDYXQ6ZnVuY3Rpb24oYil7cmV0dXJuIDE9PT1iP1wib25lXCI6XCJvdGhlclwifX19fWZ1bmN0aW9uIHBjKGIpe2I9Yi5zcGxpdChcIi9cIik7Zm9yKHZhciBhPWIubGVuZ3RoO2EtLTspYlthXT1zYihiW2FdKTtyZXR1cm4gYi5qb2luKFwiL1wiKX1mdW5jdGlvbiBxYyhiLGEsYyl7Yj14YShiLGMpO2EuJCRwcm90b2NvbD1iLnByb3RvY29sO2EuJCRob3N0PWIuaG9zdG5hbWU7YS4kJHBvcnQ9VihiLnBvcnQpfHxzZFtiLnByb3RvY29sXXx8bnVsbH1mdW5jdGlvbiByYyhiLGEsYyl7dmFyIGQ9XCIvXCIhPT1iLmNoYXJBdCgwKTtkJiYoYj1cIi9cIitiKTtiPXhhKGIsYyk7YS4kJHBhdGg9ZGVjb2RlVVJJQ29tcG9uZW50KGQmJlwiL1wiPT09Yi5wYXRobmFtZS5jaGFyQXQoMCk/Yi5wYXRobmFtZS5zdWJzdHJpbmcoMSk6XHJcbmIucGF0aG5hbWUpO2EuJCRzZWFyY2g9VmIoYi5zZWFyY2gpO2EuJCRoYXNoPWRlY29kZVVSSUNvbXBvbmVudChiLmhhc2gpO2EuJCRwYXRoJiZcIi9cIiE9YS4kJHBhdGguY2hhckF0KDApJiYoYS4kJHBhdGg9XCIvXCIrYS4kJHBhdGgpfWZ1bmN0aW9uIG5hKGIsYSl7aWYoMD09PWEuaW5kZXhPZihiKSlyZXR1cm4gYS5zdWJzdHIoYi5sZW5ndGgpfWZ1bmN0aW9uIFdhKGIpe3ZhciBhPWIuaW5kZXhPZihcIiNcIik7cmV0dXJuLTE9PWE/YjpiLnN1YnN0cigwLGEpfWZ1bmN0aW9uIEZiKGIpe3JldHVybiBiLnN1YnN0cigwLFdhKGIpLmxhc3RJbmRleE9mKFwiL1wiKSsxKX1mdW5jdGlvbiBzYyhiLGEpe3RoaXMuJCRodG1sNT0hMDthPWF8fFwiXCI7dmFyIGM9RmIoYik7cWMoYix0aGlzLGIpO3RoaXMuJCRwYXJzZT1mdW5jdGlvbihhKXt2YXIgZT1uYShjLGEpO2lmKCF3KGUpKXRocm93IEdiKFwiaXB0aHByZnhcIixhLGMpO3JjKGUsdGhpcyxiKTt0aGlzLiQkcGF0aHx8KHRoaXMuJCRwYXRoPVwiL1wiKTt0aGlzLiQkY29tcG9zZSgpfTtcclxudGhpcy4kJGNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgYT1XYih0aGlzLiQkc2VhcmNoKSxiPXRoaXMuJCRoYXNoP1wiI1wiK3NiKHRoaXMuJCRoYXNoKTpcIlwiO3RoaXMuJCR1cmw9cGModGhpcy4kJHBhdGgpKyhhP1wiP1wiK2E6XCJcIikrYjt0aGlzLiQkYWJzVXJsPWMrdGhpcy4kJHVybC5zdWJzdHIoMSl9O3RoaXMuJCRyZXdyaXRlPWZ1bmN0aW9uKGQpe3ZhciBlO2lmKChlPW5hKGIsZCkpIT09cylyZXR1cm4gZD1lLChlPW5hKGEsZSkpIT09cz9jKyhuYShcIi9cIixlKXx8ZSk6YitkO2lmKChlPW5hKGMsZCkpIT09cylyZXR1cm4gYytlO2lmKGM9PWQrXCIvXCIpcmV0dXJuIGN9fWZ1bmN0aW9uIEhiKGIsYSl7dmFyIGM9RmIoYik7cWMoYix0aGlzLGIpO3RoaXMuJCRwYXJzZT1mdW5jdGlvbihkKXt2YXIgZT1uYShiLGQpfHxuYShjLGQpLGU9XCIjXCI9PWUuY2hhckF0KDApP25hKGEsZSk6dGhpcy4kJGh0bWw1P2U6XCJcIjtpZighdyhlKSl0aHJvdyBHYihcImloc2hwcmZ4XCIsZCxhKTtyYyhlLHRoaXMsYik7XHJcbmQ9dGhpcy4kJHBhdGg7dmFyIGc9L15cXC8/Lio/OihcXC8uKikvOzA9PT1lLmluZGV4T2YoYikmJihlPWUucmVwbGFjZShiLFwiXCIpKTtnLmV4ZWMoZSl8fChkPShlPWcuZXhlYyhkKSk/ZVsxXTpkKTt0aGlzLiQkcGF0aD1kO3RoaXMuJCRjb21wb3NlKCl9O3RoaXMuJCRjb21wb3NlPWZ1bmN0aW9uKCl7dmFyIGM9V2IodGhpcy4kJHNlYXJjaCksZT10aGlzLiQkaGFzaD9cIiNcIitzYih0aGlzLiQkaGFzaCk6XCJcIjt0aGlzLiQkdXJsPXBjKHRoaXMuJCRwYXRoKSsoYz9cIj9cIitjOlwiXCIpK2U7dGhpcy4kJGFic1VybD1iKyh0aGlzLiQkdXJsP2ErdGhpcy4kJHVybDpcIlwiKX07dGhpcy4kJHJld3JpdGU9ZnVuY3Rpb24oYSl7aWYoV2EoYik9PVdhKGEpKXJldHVybiBhfX1mdW5jdGlvbiB0YyhiLGEpe3RoaXMuJCRodG1sNT0hMDtIYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGM9RmIoYik7dGhpcy4kJHJld3JpdGU9ZnVuY3Rpb24oZCl7dmFyIGU7aWYoYj09V2EoZCkpcmV0dXJuIGQ7aWYoZT1uYShjLFxyXG5kKSlyZXR1cm4gYithK2U7aWYoYz09PWQrXCIvXCIpcmV0dXJuIGN9fWZ1bmN0aW9uIGliKGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0aGlzW2JdfX1mdW5jdGlvbiB1YyhiLGEpe3JldHVybiBmdW5jdGlvbihjKXtpZih1KGMpKXJldHVybiB0aGlzW2JdO3RoaXNbYl09YShjKTt0aGlzLiQkY29tcG9zZSgpO3JldHVybiB0aGlzfX1mdW5jdGlvbiB0ZCgpe3ZhciBiPVwiXCIsYT0hMTt0aGlzLmhhc2hQcmVmaXg9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/KGI9YSx0aGlzKTpifTt0aGlzLmh0bWw1TW9kZT1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkYnJvd3NlclwiLFwiJHNuaWZmZXJcIixcIiRyb290RWxlbWVudFwiLGZ1bmN0aW9uKGMsZCxlLGcpe2Z1bmN0aW9uIGYoYSl7Yy4kYnJvYWRjYXN0KFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLGguYWJzVXJsKCksYSl9dmFyIGgsbT1kLmJhc2VIcmVmKCksaz1kLnVybCgpO1xyXG5hPyhtPWsuc3Vic3RyaW5nKDAsay5pbmRleE9mKFwiL1wiLGsuaW5kZXhPZihcIi8vXCIpKzIpKSsobXx8XCIvXCIpLGU9ZS5oaXN0b3J5P3NjOnRjKToobT1XYShrKSxlPUhiKTtoPW5ldyBlKG0sXCIjXCIrYik7aC4kJHBhcnNlKGguJCRyZXdyaXRlKGspKTtnLm9uKFwiY2xpY2tcIixmdW5jdGlvbihhKXtpZighYS5jdHJsS2V5JiYhYS5tZXRhS2V5JiYyIT1hLndoaWNoKXtmb3IodmFyIGI9eihhLnRhcmdldCk7XCJhXCIhPT14KGJbMF0ubm9kZU5hbWUpOylpZihiWzBdPT09Z1swXXx8IShiPWIucGFyZW50KCkpWzBdKXJldHVybjt2YXIgZT1iLnByb3AoXCJocmVmXCIpO1coZSkmJlwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cIj09PWUudG9TdHJpbmcoKSYmKGU9eGEoZS5hbmltVmFsKS5ocmVmKTt2YXIgZj1oLiQkcmV3cml0ZShlKTtlJiYoIWIuYXR0cihcInRhcmdldFwiKSYmZiYmIWEuaXNEZWZhdWx0UHJldmVudGVkKCkpJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGYhPWQudXJsKCkmJihoLiQkcGFyc2UoZiksXHJcbmMuJGFwcGx5KCksUC5hbmd1bGFyW1wiZmYtNjg0MjA4LXByZXZlbnREZWZhdWx0XCJdPSEwKSl9fSk7aC5hYnNVcmwoKSE9ayYmZC51cmwoaC5hYnNVcmwoKSwhMCk7ZC5vblVybENoYW5nZShmdW5jdGlvbihhKXtoLmFic1VybCgpIT1hJiYoYy4kZXZhbEFzeW5jKGZ1bmN0aW9uKCl7dmFyIGI9aC5hYnNVcmwoKTtoLiQkcGFyc2UoYSk7Yy4kYnJvYWRjYXN0KFwiJGxvY2F0aW9uQ2hhbmdlU3RhcnRcIixhLGIpLmRlZmF1bHRQcmV2ZW50ZWQ/KGguJCRwYXJzZShiKSxkLnVybChiKSk6ZihiKX0pLGMuJCRwaGFzZXx8Yy4kZGlnZXN0KCkpfSk7dmFyIGw9MDtjLiR3YXRjaChmdW5jdGlvbigpe3ZhciBhPWQudXJsKCksYj1oLiQkcmVwbGFjZTtsJiZhPT1oLmFic1VybCgpfHwobCsrLGMuJGV2YWxBc3luYyhmdW5jdGlvbigpe2MuJGJyb2FkY2FzdChcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XCIsaC5hYnNVcmwoKSxhKS5kZWZhdWx0UHJldmVudGVkP2guJCRwYXJzZShhKTooZC51cmwoaC5hYnNVcmwoKSxcclxuYiksZihhKSl9KSk7aC4kJHJlcGxhY2U9ITE7cmV0dXJuIGx9KTtyZXR1cm4gaH1dfWZ1bmN0aW9uIHVkKCl7dmFyIGI9ITAsYT10aGlzO3RoaXMuZGVidWdFbmFibGVkPWZ1bmN0aW9uKGEpe3JldHVybiBEKGEpPyhiPWEsdGhpcyk6Yn07dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGEpe2EgaW5zdGFuY2VvZiBFcnJvciYmKGEuc3RhY2s/YT1hLm1lc3NhZ2UmJi0xPT09YS5zdGFjay5pbmRleE9mKGEubWVzc2FnZSk/XCJFcnJvcjogXCIrYS5tZXNzYWdlK1wiXFxuXCIrYS5zdGFjazphLnN0YWNrOmEuc291cmNlVVJMJiYoYT1hLm1lc3NhZ2UrXCJcXG5cIithLnNvdXJjZVVSTCtcIjpcIithLmxpbmUpKTtyZXR1cm4gYX1mdW5jdGlvbiBlKGEpe3ZhciBiPWMuY29uc29sZXx8e30sZT1iW2FdfHxiLmxvZ3x8RTthPSExO3RyeXthPSEhZS5hcHBseX1jYXRjaChtKXt9cmV0dXJuIGE/ZnVuY3Rpb24oKXt2YXIgYT1bXTtxKGFyZ3VtZW50cyxmdW5jdGlvbihiKXthLnB1c2goZChiKSl9KTtcclxucmV0dXJuIGUuYXBwbHkoYixhKX06ZnVuY3Rpb24oYSxiKXtlKGEsbnVsbD09Yj9cIlwiOmIpfX1yZXR1cm57bG9nOmUoXCJsb2dcIiksaW5mbzplKFwiaW5mb1wiKSx3YXJuOmUoXCJ3YXJuXCIpLGVycm9yOmUoXCJlcnJvclwiKSxkZWJ1ZzpmdW5jdGlvbigpe3ZhciBjPWUoXCJkZWJ1Z1wiKTtyZXR1cm4gZnVuY3Rpb24oKXtiJiZjLmFwcGx5KGEsYXJndW1lbnRzKX19KCl9fV19ZnVuY3Rpb24gZGEoYixhKXtpZihcImNvbnN0cnVjdG9yXCI9PT1iKXRocm93IHlhKFwiaXNlY2ZsZFwiLGEpO3JldHVybiBifWZ1bmN0aW9uIFhhKGIsYSl7aWYoYil7aWYoYi5jb25zdHJ1Y3Rvcj09PWIpdGhyb3cgeWEoXCJpc2VjZm5cIixhKTtpZihiLmRvY3VtZW50JiZiLmxvY2F0aW9uJiZiLmFsZXJ0JiZiLnNldEludGVydmFsKXRocm93IHlhKFwiaXNlY3dpbmRvd1wiLGEpO2lmKGIuY2hpbGRyZW4mJihiLm5vZGVOYW1lfHxiLm9uJiZiLmZpbmQpKXRocm93IHlhKFwiaXNlY2RvbVwiLGEpO31yZXR1cm4gYn1mdW5jdGlvbiBqYihiLFxyXG5hLGMsZCxlKXtlPWV8fHt9O2E9YS5zcGxpdChcIi5cIik7Zm9yKHZhciBnLGY9MDsxPGEubGVuZ3RoO2YrKyl7Zz1kYShhLnNoaWZ0KCksZCk7dmFyIGg9YltnXTtofHwoaD17fSxiW2ddPWgpO2I9aDtiLnRoZW4mJmUudW53cmFwUHJvbWlzZXMmJihxYShkKSxcIiQkdlwiaW4gYnx8ZnVuY3Rpb24oYSl7YS50aGVuKGZ1bmN0aW9uKGIpe2EuJCR2PWJ9KX0oYiksYi4kJHY9PT1zJiYoYi4kJHY9e30pLGI9Yi4kJHYpfWc9ZGEoYS5zaGlmdCgpLGQpO3JldHVybiBiW2ddPWN9ZnVuY3Rpb24gdmMoYixhLGMsZCxlLGcsZil7ZGEoYixnKTtkYShhLGcpO2RhKGMsZyk7ZGEoZCxnKTtkYShlLGcpO3JldHVybiBmLnVud3JhcFByb21pc2VzP2Z1bmN0aW9uKGYsbSl7dmFyIGs9bSYmbS5oYXNPd25Qcm9wZXJ0eShiKT9tOmYsbDtpZihudWxsPT1rKXJldHVybiBrOyhrPWtbYl0pJiZrLnRoZW4mJihxYShnKSxcIiQkdlwiaW4ga3x8KGw9ayxsLiQkdj1zLGwudGhlbihmdW5jdGlvbihhKXtsLiQkdj1hfSkpLFxyXG5rPWsuJCR2KTtpZighYSlyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzOyhrPWtbYV0pJiZrLnRoZW4mJihxYShnKSxcIiQkdlwiaW4ga3x8KGw9ayxsLiQkdj1zLGwudGhlbihmdW5jdGlvbihhKXtsLiQkdj1hfSkpLGs9ay4kJHYpO2lmKCFjKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7KGs9a1tjXSkmJmsudGhlbiYmKHFhKGcpLFwiJCR2XCJpbiBrfHwobD1rLGwuJCR2PXMsbC50aGVuKGZ1bmN0aW9uKGEpe2wuJCR2PWF9KSksaz1rLiQkdik7aWYoIWQpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gczsoaz1rW2RdKSYmay50aGVuJiYocWEoZyksXCIkJHZcImluIGt8fChsPWssbC4kJHY9cyxsLnRoZW4oZnVuY3Rpb24oYSl7bC4kJHY9YX0pKSxrPWsuJCR2KTtpZighZSlyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzOyhrPWtbZV0pJiZrLnRoZW4mJihxYShnKSxcIiQkdlwiaW4ga3x8KGw9ayxsLiQkdj1zLGwudGhlbihmdW5jdGlvbihhKXtsLiQkdj1hfSkpLGs9ay4kJHYpO1xyXG5yZXR1cm4ga306ZnVuY3Rpb24oZyxmKXt2YXIgaz1mJiZmLmhhc093blByb3BlcnR5KGIpP2Y6ZztpZihudWxsPT1rKXJldHVybiBrO2s9a1tiXTtpZighYSlyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzO2s9a1thXTtpZighYylyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzO2s9a1tjXTtpZighZClyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzO2s9a1tkXTtyZXR1cm4gZT9udWxsPT1rP3M6az1rW2VdOmt9fWZ1bmN0aW9uIHZkKGIsYSl7ZGEoYixhKTtyZXR1cm4gZnVuY3Rpb24oYSxkKXtyZXR1cm4gbnVsbD09YT9zOihkJiZkLmhhc093blByb3BlcnR5KGIpP2Q6YSlbYl19fWZ1bmN0aW9uIHdkKGIsYSxjKXtkYShiLGMpO2RhKGEsYyk7cmV0dXJuIGZ1bmN0aW9uKGMsZSl7aWYobnVsbD09YylyZXR1cm4gcztjPShlJiZlLmhhc093blByb3BlcnR5KGIpP2U6YylbYl07cmV0dXJuIG51bGw9PWM/czpjW2FdfX1mdW5jdGlvbiB3YyhiLGEsYyl7aWYoSWIuaGFzT3duUHJvcGVydHkoYikpcmV0dXJuIEliW2JdO1xyXG52YXIgZD1iLnNwbGl0KFwiLlwiKSxlPWQubGVuZ3RoLGc7aWYoYS51bndyYXBQcm9taXNlc3x8MSE9PWUpaWYoYS51bndyYXBQcm9taXNlc3x8MiE9PWUpaWYoYS5jc3ApZz02PmU/dmMoZFswXSxkWzFdLGRbMl0sZFszXSxkWzRdLGMsYSk6ZnVuY3Rpb24oYixnKXt2YXIgZj0wLGg7ZG8gaD12YyhkW2YrK10sZFtmKytdLGRbZisrXSxkW2YrK10sZFtmKytdLGMsYSkoYixnKSxnPXMsYj1oO3doaWxlKGY8ZSk7cmV0dXJuIGh9O2Vsc2V7dmFyIGY9XCJ2YXIgcDtcXG5cIjtxKGQsZnVuY3Rpb24oYixkKXtkYShiLGMpO2YrPVwiaWYocyA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xcbnM9XCIrKGQ/XCJzXCI6JygoayYmay5oYXNPd25Qcm9wZXJ0eShcIicrYisnXCIpKT9rOnMpJykrJ1tcIicrYisnXCJdO1xcbicrKGEudW53cmFwUHJvbWlzZXM/J2lmIChzICYmIHMudGhlbikge1xcbiBwdyhcIicrYy5yZXBsYWNlKC8oW1wiXFxyXFxuXSkvZyxcIlxcXFwkMVwiKSsnXCIpO1xcbiBpZiAoIShcIiQkdlwiIGluIHMpKSB7XFxuIHA9cztcXG4gcC4kJHYgPSB1bmRlZmluZWQ7XFxuIHAudGhlbihmdW5jdGlvbih2KSB7cC4kJHY9djt9KTtcXG59XFxuIHM9cy4kJHZcXG59XFxuJzpcclxuXCJcIil9KTt2YXIgZj1mK1wicmV0dXJuIHM7XCIsaD1uZXcgRnVuY3Rpb24oXCJzXCIsXCJrXCIsXCJwd1wiLGYpO2gudG9TdHJpbmc9WShmKTtnPWEudW53cmFwUHJvbWlzZXM/ZnVuY3Rpb24oYSxiKXtyZXR1cm4gaChhLGIscWEpfTpofWVsc2UgZz13ZChkWzBdLGRbMV0sYyk7ZWxzZSBnPXZkKGRbMF0sYyk7XCJoYXNPd25Qcm9wZXJ0eVwiIT09YiYmKEliW2JdPWcpO3JldHVybiBnfWZ1bmN0aW9uIHhkKCl7dmFyIGI9e30sYT17Y3NwOiExLHVud3JhcFByb21pc2VzOiExLGxvZ1Byb21pc2VXYXJuaW5nczohMH07dGhpcy51bndyYXBQcm9taXNlcz1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYS51bndyYXBQcm9taXNlcz0hIWIsdGhpcyk6YS51bndyYXBQcm9taXNlc307dGhpcy5sb2dQcm9taXNlV2FybmluZ3M9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGEubG9nUHJvbWlzZVdhcm5pbmdzPWIsdGhpcyk6YS5sb2dQcm9taXNlV2FybmluZ3N9O3RoaXMuJGdldD1bXCIkZmlsdGVyXCIsXCIkc25pZmZlclwiLFxyXG5cIiRsb2dcIixmdW5jdGlvbihjLGQsZSl7YS5jc3A9ZC5jc3A7cWE9ZnVuY3Rpb24oYil7YS5sb2dQcm9taXNlV2FybmluZ3MmJiF4Yy5oYXNPd25Qcm9wZXJ0eShiKSYmKHhjW2JdPSEwLGUud2FybihcIlskcGFyc2VdIFByb21pc2UgZm91bmQgaW4gdGhlIGV4cHJlc3Npb24gYFwiK2IrXCJgLiBBdXRvbWF0aWMgdW53cmFwcGluZyBvZiBwcm9taXNlcyBpbiBBbmd1bGFyIGV4cHJlc3Npb25zIGlzIGRlcHJlY2F0ZWQuXCIpKX07cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlO3N3aXRjaCh0eXBlb2YgZCl7Y2FzZSBcInN0cmluZ1wiOmlmKGIuaGFzT3duUHJvcGVydHkoZCkpcmV0dXJuIGJbZF07ZT1uZXcgSmIoYSk7ZT0obmV3IFlhKGUsYyxhKSkucGFyc2UoZCwhMSk7XCJoYXNPd25Qcm9wZXJ0eVwiIT09ZCYmKGJbZF09ZSk7cmV0dXJuIGU7Y2FzZSBcImZ1bmN0aW9uXCI6cmV0dXJuIGQ7ZGVmYXVsdDpyZXR1cm4gRX19fV19ZnVuY3Rpb24geWQoKXt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcclxuZnVuY3Rpb24oYixhKXtyZXR1cm4gemQoZnVuY3Rpb24oYSl7Yi4kZXZhbEFzeW5jKGEpfSxhKX1dfWZ1bmN0aW9uIHpkKGIsYSl7ZnVuY3Rpb24gYyhhKXtyZXR1cm4gYX1mdW5jdGlvbiBkKGEpe3JldHVybiBmKGEpfXZhciBlPWZ1bmN0aW9uKCl7dmFyIGY9W10sayxsO3JldHVybiBsPXtyZXNvbHZlOmZ1bmN0aW9uKGEpe2lmKGYpe3ZhciBjPWY7Zj1zO2s9ZyhhKTtjLmxlbmd0aCYmYihmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTAsZD1jLmxlbmd0aDtiPGQ7YisrKWE9Y1tiXSxrLnRoZW4oYVswXSxhWzFdLGFbMl0pfSl9fSxyZWplY3Q6ZnVuY3Rpb24oYSl7bC5yZXNvbHZlKGgoYSkpfSxub3RpZnk6ZnVuY3Rpb24oYSl7aWYoZil7dmFyIGM9ZjtmLmxlbmd0aCYmYihmdW5jdGlvbigpe2Zvcih2YXIgYixkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWI9Y1tkXSxiWzJdKGEpfSl9fSxwcm9taXNlOnt0aGVuOmZ1bmN0aW9uKGIsZyxoKXt2YXIgbD1lKCksQT1mdW5jdGlvbihkKXt0cnl7bC5yZXNvbHZlKChNKGIpP1xyXG5iOmMpKGQpKX1jYXRjaChlKXtsLnJlamVjdChlKSxhKGUpfX0sSD1mdW5jdGlvbihiKXt0cnl7bC5yZXNvbHZlKChNKGcpP2c6ZCkoYikpfWNhdGNoKGMpe2wucmVqZWN0KGMpLGEoYyl9fSx2PWZ1bmN0aW9uKGIpe3RyeXtsLm5vdGlmeSgoTShoKT9oOmMpKGIpKX1jYXRjaChkKXthKGQpfX07Zj9mLnB1c2goW0EsSCx2XSk6ay50aGVuKEEsSCx2KTtyZXR1cm4gbC5wcm9taXNlfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGEpfSxcImZpbmFsbHlcIjpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYyl7dmFyIGQ9ZSgpO2M/ZC5yZXNvbHZlKGEpOmQucmVqZWN0KGEpO3JldHVybiBkLnByb21pc2V9ZnVuY3Rpb24gZChlLGcpe3ZhciBmPW51bGw7dHJ5e2Y9KGF8fGMpKCl9Y2F0Y2goayl7cmV0dXJuIGIoaywhMSl9cmV0dXJuIGYmJk0oZi50aGVuKT9mLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYihlLGcpfSxmdW5jdGlvbihhKXtyZXR1cm4gYihhLCExKX0pOlxyXG5iKGUsZyl9cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gZChhLCEwKX0sZnVuY3Rpb24oYSl7cmV0dXJuIGQoYSwhMSl9KX19fX0sZz1mdW5jdGlvbihhKXtyZXR1cm4gYSYmTShhLnRoZW4pP2E6e3RoZW46ZnVuY3Rpb24oYyl7dmFyIGQ9ZSgpO2IoZnVuY3Rpb24oKXtkLnJlc29sdmUoYyhhKSl9KTtyZXR1cm4gZC5wcm9taXNlfX19LGY9ZnVuY3Rpb24oYSl7dmFyIGI9ZSgpO2IucmVqZWN0KGEpO3JldHVybiBiLnByb21pc2V9LGg9ZnVuY3Rpb24oYyl7cmV0dXJue3RoZW46ZnVuY3Rpb24oZyxmKXt2YXIgaD1lKCk7YihmdW5jdGlvbigpe3RyeXtoLnJlc29sdmUoKE0oZik/ZjpkKShjKSl9Y2F0Y2goYil7aC5yZWplY3QoYiksYShiKX19KTtyZXR1cm4gaC5wcm9taXNlfX19O3JldHVybntkZWZlcjplLHJlamVjdDpmLHdoZW46ZnVuY3Rpb24oaCxrLGwsbil7dmFyIHA9ZSgpLHIsRj1mdW5jdGlvbihiKXt0cnl7cmV0dXJuKE0oayk/azpjKShiKX1jYXRjaChkKXtyZXR1cm4gYShkKSxcclxuZihkKX19LEE9ZnVuY3Rpb24oYil7dHJ5e3JldHVybihNKGwpP2w6ZCkoYil9Y2F0Y2goYyl7cmV0dXJuIGEoYyksZihjKX19LHE9ZnVuY3Rpb24oYil7dHJ5e3JldHVybihNKG4pP246YykoYil9Y2F0Y2goZCl7YShkKX19O2IoZnVuY3Rpb24oKXtnKGgpLnRoZW4oZnVuY3Rpb24oYSl7cnx8KHI9ITAscC5yZXNvbHZlKGcoYSkudGhlbihGLEEscSkpKX0sZnVuY3Rpb24oYSl7cnx8KHI9ITAscC5yZXNvbHZlKEEoYSkpKX0sZnVuY3Rpb24oYSl7cnx8cC5ub3RpZnkocShhKSl9KX0pO3JldHVybiBwLnByb21pc2V9LGFsbDpmdW5jdGlvbihhKXt2YXIgYj1lKCksYz0wLGQ9TChhKT9bXTp7fTtxKGEsZnVuY3Rpb24oYSxlKXtjKys7ZyhhKS50aGVuKGZ1bmN0aW9uKGEpe2QuaGFzT3duUHJvcGVydHkoZSl8fChkW2VdPWEsLS1jfHxiLnJlc29sdmUoZCkpfSxmdW5jdGlvbihhKXtkLmhhc093blByb3BlcnR5KGUpfHxiLnJlamVjdChhKX0pfSk7MD09PWMmJmIucmVzb2x2ZShkKTtyZXR1cm4gYi5wcm9taXNlfX19XHJcbmZ1bmN0aW9uIEFkKCl7dmFyIGI9MTAsYT10KFwiJHJvb3RTY29wZVwiKSxjPW51bGw7dGhpcy5kaWdlc3RUdGw9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9YSk7cmV0dXJuIGJ9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkcGFyc2VcIixcIiRicm93c2VyXCIsZnVuY3Rpb24oZCxlLGcsZil7ZnVuY3Rpb24gaCgpe3RoaXMuJGlkPVphKCk7dGhpcy4kJHBoYXNlPXRoaXMuJHBhcmVudD10aGlzLiQkd2F0Y2hlcnM9dGhpcy4kJG5leHRTaWJsaW5nPXRoaXMuJCRwcmV2U2libGluZz10aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9bnVsbDt0aGlzW1widGhpc1wiXT10aGlzLiRyb290PXRoaXM7dGhpcy4kJGRlc3Ryb3llZD0hMTt0aGlzLiQkYXN5bmNRdWV1ZT1bXTt0aGlzLiQkcG9zdERpZ2VzdFF1ZXVlPVtdO3RoaXMuJCRsaXN0ZW5lcnM9e307dGhpcy4kJGxpc3RlbmVyQ291bnQ9e307dGhpcy4kJGlzb2xhdGVCaW5kaW5ncz17fX1cclxuZnVuY3Rpb24gbShiKXtpZihwLiQkcGhhc2UpdGhyb3cgYShcImlucHJvZ1wiLHAuJCRwaGFzZSk7cC4kJHBoYXNlPWJ9ZnVuY3Rpb24gayhhLGIpe3ZhciBjPWcoYSk7UGEoYyxiKTtyZXR1cm4gY31mdW5jdGlvbiBsKGEsYixjKXtkbyBhLiQkbGlzdGVuZXJDb3VudFtjXS09YiwwPT09YS4kJGxpc3RlbmVyQ291bnRbY10mJmRlbGV0ZSBhLiQkbGlzdGVuZXJDb3VudFtjXTt3aGlsZShhPWEuJHBhcmVudCl9ZnVuY3Rpb24gbigpe31oLnByb3RvdHlwZT17Y29uc3RydWN0b3I6aCwkbmV3OmZ1bmN0aW9uKGEpe2E/KGE9bmV3IGgsYS4kcm9vdD10aGlzLiRyb290LGEuJCRhc3luY1F1ZXVlPXRoaXMuJCRhc3luY1F1ZXVlLGEuJCRwb3N0RGlnZXN0UXVldWU9dGhpcy4kJHBvc3REaWdlc3RRdWV1ZSk6KGE9ZnVuY3Rpb24oKXt9LGEucHJvdG90eXBlPXRoaXMsYT1uZXcgYSxhLiRpZD1aYSgpKTthW1widGhpc1wiXT1hO2EuJCRsaXN0ZW5lcnM9e307YS4kJGxpc3RlbmVyQ291bnQ9e307YS4kcGFyZW50PVxyXG50aGlzO2EuJCR3YXRjaGVycz1hLiQkbmV4dFNpYmxpbmc9YS4kJGNoaWxkSGVhZD1hLiQkY2hpbGRUYWlsPW51bGw7YS4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZFRhaWw7dGhpcy4kJGNoaWxkSGVhZD90aGlzLiQkY2hpbGRUYWlsPXRoaXMuJCRjaGlsZFRhaWwuJCRuZXh0U2libGluZz1hOnRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD1hO3JldHVybiBhfSwkd2F0Y2g6ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPWsoYSxcIndhdGNoXCIpLGc9dGhpcy4kJHdhdGNoZXJzLGY9e2ZuOmIsbGFzdDpuLGdldDplLGV4cDphLGVxOiEhZH07Yz1udWxsO2lmKCFNKGIpKXt2YXIgaD1rKGJ8fEUsXCJsaXN0ZW5lclwiKTtmLmZuPWZ1bmN0aW9uKGEsYixjKXtoKGMpfX1pZihcInN0cmluZ1wiPT10eXBlb2YgYSYmZS5jb25zdGFudCl7dmFyIG09Zi5mbjtmLmZuPWZ1bmN0aW9uKGEsYixjKXttLmNhbGwodGhpcyxhLGIsYyk7TWEoZyxmKX19Z3x8KGc9dGhpcy4kJHdhdGNoZXJzPVtdKTtnLnVuc2hpZnQoZik7XHJcbnJldHVybiBmdW5jdGlvbigpe01hKGcsZik7Yz1udWxsfX0sJHdhdGNoQ29sbGVjdGlvbjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsZCxlLGY9MCxoPWcoYSksaz1bXSxtPXt9LGw9MDtyZXR1cm4gdGhpcy4kd2F0Y2goZnVuY3Rpb24oKXtlPWgoYyk7dmFyIGEsYjtpZihXKGUpKWlmKHFiKGUpKWZvcihkIT09ayYmKGQ9ayxsPWQubGVuZ3RoPTAsZisrKSxhPWUubGVuZ3RoLGwhPT1hJiYoZisrLGQubGVuZ3RoPWw9YSksYj0wO2I8YTtiKyspZFtiXSE9PWVbYl0mJihmKyssZFtiXT1lW2JdKTtlbHNle2QhPT1tJiYoZD1tPXt9LGw9MCxmKyspO2E9MDtmb3IoYiBpbiBlKWUuaGFzT3duUHJvcGVydHkoYikmJihhKyssZC5oYXNPd25Qcm9wZXJ0eShiKT9kW2JdIT09ZVtiXSYmKGYrKyxkW2JdPWVbYl0pOihsKyssZFtiXT1lW2JdLGYrKykpO2lmKGw+YSlmb3IoYiBpbiBmKyssZClkLmhhc093blByb3BlcnR5KGIpJiYhZS5oYXNPd25Qcm9wZXJ0eShiKSYmKGwtLSxkZWxldGUgZFtiXSl9ZWxzZSBkIT09XHJcbmUmJihkPWUsZisrKTtyZXR1cm4gZn0sZnVuY3Rpb24oKXtiKGUsZCxjKX0pfSwkZGlnZXN0OmZ1bmN0aW9uKCl7dmFyIGQsZixnLGgsaz10aGlzLiQkYXN5bmNRdWV1ZSxsPXRoaXMuJCRwb3N0RGlnZXN0UXVldWUscSxDLHM9YixJLFU9W10sdCx6LEI7bShcIiRkaWdlc3RcIik7Yz1udWxsO2Rve0M9ITE7Zm9yKEk9dGhpcztrLmxlbmd0aDspe3RyeXtCPWsuc2hpZnQoKSxCLnNjb3BlLiRldmFsKEIuZXhwcmVzc2lvbil9Y2F0Y2goRCl7cC4kJHBoYXNlPW51bGwsZShEKX1jPW51bGx9YTpkb3tpZihoPUkuJCR3YXRjaGVycylmb3IocT1oLmxlbmd0aDtxLS07KXRyeXtpZihkPWhbcV0paWYoKGY9ZC5nZXQoSSkpIT09KGc9ZC5sYXN0KSYmIShkLmVxP3RhKGYsZyk6XCJudW1iZXJcIj09dHlwZW9mIGYmJlwibnVtYmVyXCI9PXR5cGVvZiBnJiZpc05hTihmKSYmaXNOYU4oZykpKUM9ITAsYz1kLGQubGFzdD1kLmVxPyQoZik6ZixkLmZuKGYsZz09PW4/ZjpnLEkpLDU+cyYmKHQ9NC1zLFVbdF18fFxyXG4oVVt0XT1bXSksej1NKGQuZXhwKT9cImZuOiBcIisoZC5leHAubmFtZXx8ZC5leHAudG9TdHJpbmcoKSk6ZC5leHAseis9XCI7IG5ld1ZhbDogXCIrcGEoZikrXCI7IG9sZFZhbDogXCIrcGEoZyksVVt0XS5wdXNoKHopKTtlbHNlIGlmKGQ9PT1jKXtDPSExO2JyZWFrIGF9fWNhdGNoKHkpe3AuJCRwaGFzZT1udWxsLGUoeSl9aWYoIShoPUkuJCRjaGlsZEhlYWR8fEkhPT10aGlzJiZJLiQkbmV4dFNpYmxpbmcpKWZvcig7SSE9PXRoaXMmJiEoaD1JLiQkbmV4dFNpYmxpbmcpOylJPUkuJHBhcmVudH13aGlsZShJPWgpO2lmKChDfHxrLmxlbmd0aCkmJiFzLS0pdGhyb3cgcC4kJHBoYXNlPW51bGwsYShcImluZmRpZ1wiLGIscGEoVSkpO313aGlsZShDfHxrLmxlbmd0aCk7Zm9yKHAuJCRwaGFzZT1udWxsO2wubGVuZ3RoOyl0cnl7bC5zaGlmdCgpKCl9Y2F0Y2godyl7ZSh3KX19LCRkZXN0cm95OmZ1bmN0aW9uKCl7aWYoIXRoaXMuJCRkZXN0cm95ZWQpe3ZhciBhPXRoaXMuJHBhcmVudDt0aGlzLiRicm9hZGNhc3QoXCIkZGVzdHJveVwiKTtcclxudGhpcy4kJGRlc3Ryb3llZD0hMDt0aGlzIT09cCYmKHEodGhpcy4kJGxpc3RlbmVyQ291bnQsYmIobnVsbCxsLHRoaXMpKSxhLiQkY2hpbGRIZWFkPT10aGlzJiYoYS4kJGNoaWxkSGVhZD10aGlzLiQkbmV4dFNpYmxpbmcpLGEuJCRjaGlsZFRhaWw9PXRoaXMmJihhLiQkY2hpbGRUYWlsPXRoaXMuJCRwcmV2U2libGluZyksdGhpcy4kJHByZXZTaWJsaW5nJiYodGhpcy4kJHByZXZTaWJsaW5nLiQkbmV4dFNpYmxpbmc9dGhpcy4kJG5leHRTaWJsaW5nKSx0aGlzLiQkbmV4dFNpYmxpbmcmJih0aGlzLiQkbmV4dFNpYmxpbmcuJCRwcmV2U2libGluZz10aGlzLiQkcHJldlNpYmxpbmcpLHRoaXMuJHBhcmVudD10aGlzLiQkbmV4dFNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD1udWxsKX19LCRldmFsOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGcoYSkodGhpcyxiKX0sJGV2YWxBc3luYzpmdW5jdGlvbihhKXtwLiQkcGhhc2V8fHAuJCRhc3luY1F1ZXVlLmxlbmd0aHx8XHJcbmYuZGVmZXIoZnVuY3Rpb24oKXtwLiQkYXN5bmNRdWV1ZS5sZW5ndGgmJnAuJGRpZ2VzdCgpfSk7dGhpcy4kJGFzeW5jUXVldWUucHVzaCh7c2NvcGU6dGhpcyxleHByZXNzaW9uOmF9KX0sJCRwb3N0RGlnZXN0OmZ1bmN0aW9uKGEpe3RoaXMuJCRwb3N0RGlnZXN0UXVldWUucHVzaChhKX0sJGFwcGx5OmZ1bmN0aW9uKGEpe3RyeXtyZXR1cm4gbShcIiRhcHBseVwiKSx0aGlzLiRldmFsKGEpfWNhdGNoKGIpe2UoYil9ZmluYWxseXtwLiQkcGhhc2U9bnVsbDt0cnl7cC4kZGlnZXN0KCl9Y2F0Y2goYyl7dGhyb3cgZShjKSxjO319fSwkb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLiQkbGlzdGVuZXJzW2FdO2N8fCh0aGlzLiQkbGlzdGVuZXJzW2FdPWM9W10pO2MucHVzaChiKTt2YXIgZD10aGlzO2RvIGQuJCRsaXN0ZW5lckNvdW50W2FdfHwoZC4kJGxpc3RlbmVyQ291bnRbYV09MCksZC4kJGxpc3RlbmVyQ291bnRbYV0rKzt3aGlsZShkPWQuJHBhcmVudCk7dmFyIGU9dGhpcztyZXR1cm4gZnVuY3Rpb24oKXtjW2FiKGMsXHJcbmIpXT1udWxsO2woZSwxLGEpfX0sJGVtaXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkLGY9dGhpcyxnPSExLGg9e25hbWU6YSx0YXJnZXRTY29wZTpmLHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe2c9ITB9LHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7aC5kZWZhdWx0UHJldmVudGVkPSEwfSxkZWZhdWx0UHJldmVudGVkOiExfSxrPVtoXS5jb25jYXQodWEuY2FsbChhcmd1bWVudHMsMSkpLG0sbDtkb3tkPWYuJCRsaXN0ZW5lcnNbYV18fGM7aC5jdXJyZW50U2NvcGU9ZjttPTA7Zm9yKGw9ZC5sZW5ndGg7bTxsO20rKylpZihkW21dKXRyeXtkW21dLmFwcGx5KG51bGwsayl9Y2F0Y2gocCl7ZShwKX1lbHNlIGQuc3BsaWNlKG0sMSksbS0tLGwtLTtpZihnKWJyZWFrO2Y9Zi4kcGFyZW50fXdoaWxlKGYpO3JldHVybiBofSwkYnJvYWRjYXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPXRoaXMsZD10aGlzLGY9e25hbWU6YSx0YXJnZXRTY29wZTp0aGlzLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7Zi5kZWZhdWx0UHJldmVudGVkPVxyXG4hMH0sZGVmYXVsdFByZXZlbnRlZDohMX0sZz1bZl0uY29uY2F0KHVhLmNhbGwoYXJndW1lbnRzLDEpKSxoLGs7Yz1kOyl7Zi5jdXJyZW50U2NvcGU9YztkPWMuJCRsaXN0ZW5lcnNbYV18fFtdO2g9MDtmb3Ioaz1kLmxlbmd0aDtoPGs7aCsrKWlmKGRbaF0pdHJ5e2RbaF0uYXBwbHkobnVsbCxnKX1jYXRjaChtKXtlKG0pfWVsc2UgZC5zcGxpY2UoaCwxKSxoLS0say0tO2lmKCEoZD1jLiQkbGlzdGVuZXJDb3VudFthXSYmYy4kJGNoaWxkSGVhZHx8YyE9PXRoaXMmJmMuJCRuZXh0U2libGluZykpZm9yKDtjIT09dGhpcyYmIShkPWMuJCRuZXh0U2libGluZyk7KWM9Yy4kcGFyZW50fXJldHVybiBmfX07dmFyIHA9bmV3IGg7cmV0dXJuIHB9XX1mdW5jdGlvbiBCZCgpe3ZhciBiPS9eXFxzKihodHRwcz98ZnRwfG1haWx0b3x0ZWx8ZmlsZSk6LyxhPS9eXFxzKihodHRwcz98ZnRwfGZpbGUpOnxkYXRhOmltYWdlXFwvLzt0aGlzLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGEpe3JldHVybiBEKGEpP1xyXG4oYj1hLHRoaXMpOmJ9O3RoaXMuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhPWIsdGhpcyk6YX07dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7dmFyIGU9ZD9hOmIsZztpZighTnx8ODw9TilpZihnPXhhKGMpLmhyZWYsXCJcIiE9PWcmJiFnLm1hdGNoKGUpKXJldHVyblwidW5zYWZlOlwiK2c7cmV0dXJuIGN9fX1mdW5jdGlvbiBDZChiKXtpZihcInNlbGZcIj09PWIpcmV0dXJuIGI7aWYodyhiKSl7aWYoLTE8Yi5pbmRleE9mKFwiKioqXCIpKXRocm93IHJhKFwiaXdjYXJkXCIsYik7Yj1iLnJlcGxhY2UoLyhbLSgpXFxbXFxde30rPyouJFxcXnwsOiM8IVxcXFxdKS9nLFwiXFxcXCQxXCIpLnJlcGxhY2UoL1xceDA4L2csXCJcXFxceDA4XCIpLnJlcGxhY2UoXCJcXFxcKlxcXFwqXCIsXCIuKlwiKS5yZXBsYWNlKFwiXFxcXCpcIixcIlteOi8uPyY7XSpcIik7cmV0dXJuIFJlZ0V4cChcIl5cIitiK1wiJFwiKX1pZigkYShiKSlyZXR1cm4gUmVnRXhwKFwiXlwiK2Iuc291cmNlK1wiJFwiKTtcclxudGhyb3cgcmEoXCJpbWF0Y2hlclwiKTt9ZnVuY3Rpb24geWMoYil7dmFyIGE9W107RChiKSYmcShiLGZ1bmN0aW9uKGIpe2EucHVzaChDZChiKSl9KTtyZXR1cm4gYX1mdW5jdGlvbiBEZCgpe3RoaXMuU0NFX0NPTlRFWFRTPWVhO3ZhciBiPVtcInNlbGZcIl0sYT1bXTt0aGlzLnJlc291cmNlVXJsV2hpdGVsaXN0PWZ1bmN0aW9uKGEpe2FyZ3VtZW50cy5sZW5ndGgmJihiPXljKGEpKTtyZXR1cm4gYn07dGhpcy5yZXNvdXJjZVVybEJsYWNrbGlzdD1mdW5jdGlvbihiKXthcmd1bWVudHMubGVuZ3RoJiYoYT15YyhiKSk7cmV0dXJuIGF9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGEpe3ZhciBiPWZ1bmN0aW9uKGEpe3RoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gYX19O2EmJihiLnByb3RvdHlwZT1uZXcgYSk7Yi5wcm90b3R5cGUudmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCl9O1xyXG5iLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCkudG9TdHJpbmcoKX07cmV0dXJuIGJ9dmFyIGU9ZnVuY3Rpb24oYSl7dGhyb3cgcmEoXCJ1bnNhZmVcIik7fTtjLmhhcyhcIiRzYW5pdGl6ZVwiKSYmKGU9Yy5nZXQoXCIkc2FuaXRpemVcIikpO3ZhciBnPWQoKSxmPXt9O2ZbZWEuSFRNTF09ZChnKTtmW2VhLkNTU109ZChnKTtmW2VhLlVSTF09ZChnKTtmW2VhLkpTXT1kKGcpO2ZbZWEuUkVTT1VSQ0VfVVJMXT1kKGZbZWEuVVJMXSk7cmV0dXJue3RydXN0QXM6ZnVuY3Rpb24oYSxiKXt2YXIgYz1mLmhhc093blByb3BlcnR5KGEpP2ZbYV06bnVsbDtpZighYyl0aHJvdyByYShcImljb250ZXh0XCIsYSxiKTtpZihudWxsPT09Ynx8Yj09PXN8fFwiXCI9PT1iKXJldHVybiBiO2lmKFwic3RyaW5nXCIhPT10eXBlb2YgYil0aHJvdyByYShcIml0eXBlXCIsYSk7cmV0dXJuIG5ldyBjKGIpfSxnZXRUcnVzdGVkOmZ1bmN0aW9uKGMsZCl7aWYobnVsbD09PVxyXG5kfHxkPT09c3x8XCJcIj09PWQpcmV0dXJuIGQ7dmFyIGc9Zi5oYXNPd25Qcm9wZXJ0eShjKT9mW2NdOm51bGw7aWYoZyYmZCBpbnN0YW5jZW9mIGcpcmV0dXJuIGQuJCR1bndyYXBUcnVzdGVkVmFsdWUoKTtpZihjPT09ZWEuUkVTT1VSQ0VfVVJMKXt2YXIgZz14YShkLnRvU3RyaW5nKCkpLGwsbixwPSExO2w9MDtmb3Iobj1iLmxlbmd0aDtsPG47bCsrKWlmKFwic2VsZlwiPT09YltsXT9FYihnKTpiW2xdLmV4ZWMoZy5ocmVmKSl7cD0hMDticmVha31pZihwKWZvcihsPTAsbj1hLmxlbmd0aDtsPG47bCsrKWlmKFwic2VsZlwiPT09YVtsXT9FYihnKTphW2xdLmV4ZWMoZy5ocmVmKSl7cD0hMTticmVha31pZihwKXJldHVybiBkO3Rocm93IHJhKFwiaW5zZWN1cmxcIixkLnRvU3RyaW5nKCkpO31pZihjPT09ZWEuSFRNTClyZXR1cm4gZShkKTt0aHJvdyByYShcInVuc2FmZVwiKTt9LHZhbHVlT2Y6ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBnP2EuJCR1bndyYXBUcnVzdGVkVmFsdWUoKTphfX19XX1cclxuZnVuY3Rpb24gRWQoKXt2YXIgYj0hMDt0aGlzLmVuYWJsZWQ9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9ISFhKTtyZXR1cm4gYn07dGhpcy4kZ2V0PVtcIiRwYXJzZVwiLFwiJHNuaWZmZXJcIixcIiRzY2VEZWxlZ2F0ZVwiLGZ1bmN0aW9uKGEsYyxkKXtpZihiJiZjLm1zaWUmJjg+Yy5tc2llRG9jdW1lbnRNb2RlKXRocm93IHJhKFwiaWVxdWlya3NcIik7dmFyIGU9JChlYSk7ZS5pc0VuYWJsZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gYn07ZS50cnVzdEFzPWQudHJ1c3RBcztlLmdldFRydXN0ZWQ9ZC5nZXRUcnVzdGVkO2UudmFsdWVPZj1kLnZhbHVlT2Y7Ynx8KGUudHJ1c3RBcz1lLmdldFRydXN0ZWQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYn0sZS52YWx1ZU9mPUFhKTtlLnBhcnNlQXM9ZnVuY3Rpb24oYixjKXt2YXIgZD1hKGMpO3JldHVybiBkLmxpdGVyYWwmJmQuY29uc3RhbnQ/ZDpmdW5jdGlvbihhLGMpe3JldHVybiBlLmdldFRydXN0ZWQoYixkKGEsYykpfX07dmFyIGc9ZS5wYXJzZUFzLFxyXG5mPWUuZ2V0VHJ1c3RlZCxoPWUudHJ1c3RBcztxKGVhLGZ1bmN0aW9uKGEsYil7dmFyIGM9eChiKTtlW1FhKFwicGFyc2VfYXNfXCIrYyldPWZ1bmN0aW9uKGIpe3JldHVybiBnKGEsYil9O2VbUWEoXCJnZXRfdHJ1c3RlZF9cIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGYoYSxiKX07ZVtRYShcInRydXN0X2FzX1wiK2MpXT1mdW5jdGlvbihiKXtyZXR1cm4gaChhLGIpfX0pO3JldHVybiBlfV19ZnVuY3Rpb24gRmQoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oYixhKXt2YXIgYz17fSxkPVYoKC9hbmRyb2lkIChcXGQrKS8uZXhlYyh4KChiLm5hdmlnYXRvcnx8e30pLnVzZXJBZ2VudCkpfHxbXSlbMV0pLGU9L0JveGVlL2kudGVzdCgoYi5uYXZpZ2F0b3J8fHt9KS51c2VyQWdlbnQpLGc9YVswXXx8e30sZj1nLmRvY3VtZW50TW9kZSxoLG09L14oTW96fHdlYmtpdHxPfG1zKSg/PVtBLVpdKS8saz1nLmJvZHkmJmcuYm9keS5zdHlsZSxsPSExLG49ITE7aWYoayl7Zm9yKHZhciBwIGluIGspaWYobD1cclxubS5leGVjKHApKXtoPWxbMF07aD1oLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkraC5zdWJzdHIoMSk7YnJlYWt9aHx8KGg9XCJXZWJraXRPcGFjaXR5XCJpbiBrJiZcIndlYmtpdFwiKTtsPSEhKFwidHJhbnNpdGlvblwiaW4ga3x8aCtcIlRyYW5zaXRpb25cImluIGspO249ISEoXCJhbmltYXRpb25cImluIGt8fGgrXCJBbmltYXRpb25cImluIGspOyFkfHxsJiZufHwobD13KGcuYm9keS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uKSxuPXcoZy5ib2R5LnN0eWxlLndlYmtpdEFuaW1hdGlvbikpfXJldHVybntoaXN0b3J5OiEoIWIuaGlzdG9yeXx8IWIuaGlzdG9yeS5wdXNoU3RhdGV8fDQ+ZHx8ZSksaGFzaGNoYW5nZTpcIm9uaGFzaGNoYW5nZVwiaW4gYiYmKCFmfHw3PGYpLGhhc0V2ZW50OmZ1bmN0aW9uKGEpe2lmKFwiaW5wdXRcIj09YSYmOT09TilyZXR1cm4hMTtpZih1KGNbYV0pKXt2YXIgYj1nLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Y1thXT1cIm9uXCIrYSBpbiBifXJldHVybiBjW2FdfSxjc3A6U2IoKSx2ZW5kb3JQcmVmaXg6aCxcclxudHJhbnNpdGlvbnM6bCxhbmltYXRpb25zOm4sYW5kcm9pZDpkLG1zaWU6Tixtc2llRG9jdW1lbnRNb2RlOmZ9fV19ZnVuY3Rpb24gR2QoKXt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJGJyb3dzZXJcIixcIiRxXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLGZ1bmN0aW9uKGIsYSxjLGQpe2Z1bmN0aW9uIGUoZSxoLG0pe3ZhciBrPWMuZGVmZXIoKSxsPWsucHJvbWlzZSxuPUQobSkmJiFtO2g9YS5kZWZlcihmdW5jdGlvbigpe3RyeXtrLnJlc29sdmUoZSgpKX1jYXRjaChhKXtrLnJlamVjdChhKSxkKGEpfWZpbmFsbHl7ZGVsZXRlIGdbbC4kJHRpbWVvdXRJZF19bnx8Yi4kYXBwbHkoKX0saCk7bC4kJHRpbWVvdXRJZD1oO2dbaF09aztyZXR1cm4gbH12YXIgZz17fTtlLmNhbmNlbD1mdW5jdGlvbihiKXtyZXR1cm4gYiYmYi4kJHRpbWVvdXRJZCBpbiBnPyhnW2IuJCR0aW1lb3V0SWRdLnJlamVjdChcImNhbmNlbGVkXCIpLGRlbGV0ZSBnW2IuJCR0aW1lb3V0SWRdLGEuZGVmZXIuY2FuY2VsKGIuJCR0aW1lb3V0SWQpKTpcclxuITF9O3JldHVybiBlfV19ZnVuY3Rpb24geGEoYixhKXt2YXIgYz1iO04mJihULnNldEF0dHJpYnV0ZShcImhyZWZcIixjKSxjPVQuaHJlZik7VC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsYyk7cmV0dXJue2hyZWY6VC5ocmVmLHByb3RvY29sOlQucHJvdG9jb2w/VC5wcm90b2NvbC5yZXBsYWNlKC86JC8sXCJcIik6XCJcIixob3N0OlQuaG9zdCxzZWFyY2g6VC5zZWFyY2g/VC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sXCJcIik6XCJcIixoYXNoOlQuaGFzaD9ULmhhc2gucmVwbGFjZSgvXiMvLFwiXCIpOlwiXCIsaG9zdG5hbWU6VC5ob3N0bmFtZSxwb3J0OlQucG9ydCxwYXRobmFtZTpcIi9cIj09PVQucGF0aG5hbWUuY2hhckF0KDApP1QucGF0aG5hbWU6XCIvXCIrVC5wYXRobmFtZX19ZnVuY3Rpb24gRWIoYil7Yj13KGIpP3hhKGIpOmI7cmV0dXJuIGIucHJvdG9jb2w9PT16Yy5wcm90b2NvbCYmYi5ob3N0PT09emMuaG9zdH1mdW5jdGlvbiBIZCgpe3RoaXMuJGdldD1ZKFApfWZ1bmN0aW9uIEFjKGIpe2Z1bmN0aW9uIGEoZCxcclxuZSl7aWYoVyhkKSl7dmFyIGc9e307cShkLGZ1bmN0aW9uKGIsYyl7Z1tjXT1hKGMsYil9KTtyZXR1cm4gZ31yZXR1cm4gYi5mYWN0b3J5KGQrYyxlKX12YXIgYz1cIkZpbHRlclwiO3RoaXMucmVnaXN0ZXI9YTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBhLmdldChiK2MpfX1dO2EoXCJjdXJyZW5jeVwiLEJjKTthKFwiZGF0ZVwiLENjKTthKFwiZmlsdGVyXCIsSWQpO2EoXCJqc29uXCIsSmQpO2EoXCJsaW1pdFRvXCIsS2QpO2EoXCJsb3dlcmNhc2VcIixMZCk7YShcIm51bWJlclwiLERjKTthKFwib3JkZXJCeVwiLEVjKTthKFwidXBwZXJjYXNlXCIsTWQpfWZ1bmN0aW9uIElkKCl7cmV0dXJuIGZ1bmN0aW9uKGIsYSxjKXtpZighTChiKSlyZXR1cm4gYjt2YXIgZD10eXBlb2YgYyxlPVtdO2UuY2hlY2s9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTA7YjxlLmxlbmd0aDtiKyspaWYoIWVbYl0oYSkpcmV0dXJuITE7cmV0dXJuITB9O1wiZnVuY3Rpb25cIiE9PWQmJlxyXG4oYz1cImJvb2xlYW5cIj09PWQmJmM/ZnVuY3Rpb24oYSxiKXtyZXR1cm4gQmEuZXF1YWxzKGEsYil9OmZ1bmN0aW9uKGEsYil7Yj0oXCJcIitiKS50b0xvd2VyQ2FzZSgpO3JldHVybi0xPChcIlwiK2EpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihiKX0pO3ZhciBnPWZ1bmN0aW9uKGEsYil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGImJlwiIVwiPT09Yi5jaGFyQXQoMCkpcmV0dXJuIWcoYSxiLnN1YnN0cigxKSk7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6cmV0dXJuIGMoYSxiKTtjYXNlIFwib2JqZWN0XCI6c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwib2JqZWN0XCI6cmV0dXJuIGMoYSxiKTtkZWZhdWx0OmZvcih2YXIgZCBpbiBhKWlmKFwiJFwiIT09ZC5jaGFyQXQoMCkmJmcoYVtkXSxiKSlyZXR1cm4hMH1yZXR1cm4hMTtjYXNlIFwiYXJyYXlcIjpmb3IoZD0wO2Q8YS5sZW5ndGg7ZCsrKWlmKGcoYVtkXSxiKSlyZXR1cm4hMDtyZXR1cm4hMTtkZWZhdWx0OnJldHVybiExfX07XHJcbnN3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOmE9eyQ6YX07Y2FzZSBcIm9iamVjdFwiOmZvcih2YXIgZiBpbiBhKShmdW5jdGlvbihiKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgYVtiXSYmZS5wdXNoKGZ1bmN0aW9uKGMpe3JldHVybiBnKFwiJFwiPT1iP2M6YyYmY1tiXSxhW2JdKX0pfSkoZik7YnJlYWs7Y2FzZSBcImZ1bmN0aW9uXCI6ZS5wdXNoKGEpO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIGJ9ZD1bXTtmb3IoZj0wO2Y8Yi5sZW5ndGg7ZisrKXt2YXIgaD1iW2ZdO2UuY2hlY2soaCkmJmQucHVzaChoKX1yZXR1cm4gZH19ZnVuY3Rpb24gQmMoYil7dmFyIGE9Yi5OVU1CRVJfRk9STUFUUztyZXR1cm4gZnVuY3Rpb24oYixkKXt1KGQpJiYoZD1hLkNVUlJFTkNZX1NZTSk7cmV0dXJuIEZjKGIsYS5QQVRURVJOU1sxXSxhLkdST1VQX1NFUCxhLkRFQ0lNQUxfU0VQLDIpLnJlcGxhY2UoL1xcdTAwQTQvZyxkKX19ZnVuY3Rpb24gRGMoYil7dmFyIGE9XHJcbmIuTlVNQkVSX0ZPUk1BVFM7cmV0dXJuIGZ1bmN0aW9uKGIsZCl7cmV0dXJuIEZjKGIsYS5QQVRURVJOU1swXSxhLkdST1VQX1NFUCxhLkRFQ0lNQUxfU0VQLGQpfX1mdW5jdGlvbiBGYyhiLGEsYyxkLGUpe2lmKGlzTmFOKGIpfHwhaXNGaW5pdGUoYikpcmV0dXJuXCJcIjt2YXIgZz0wPmI7Yj1NYXRoLmFicyhiKTt2YXIgZj1iK1wiXCIsaD1cIlwiLG09W10saz0hMTtpZigtMSE9PWYuaW5kZXhPZihcImVcIikpe3ZhciBsPWYubWF0Y2goLyhbXFxkXFwuXSspZSgtPykoXFxkKykvKTtsJiZcIi1cIj09bFsyXSYmbFszXT5lKzE/Zj1cIjBcIjooaD1mLGs9ITApfWlmKGspMDxlJiYoLTE8YiYmMT5iKSYmKGg9Yi50b0ZpeGVkKGUpKTtlbHNle2Y9KGYuc3BsaXQoR2MpWzFdfHxcIlwiKS5sZW5ndGg7dShlKSYmKGU9TWF0aC5taW4oTWF0aC5tYXgoYS5taW5GcmFjLGYpLGEubWF4RnJhYykpO2Y9TWF0aC5wb3coMTAsZSk7Yj1NYXRoLnJvdW5kKGIqZikvZjtiPShcIlwiK2IpLnNwbGl0KEdjKTtmPWJbMF07Yj1iWzFdfHxcclxuXCJcIjt2YXIgbD0wLG49YS5sZ1NpemUscD1hLmdTaXplO2lmKGYubGVuZ3RoPj1uK3ApZm9yKGw9Zi5sZW5ndGgtbixrPTA7azxsO2srKykwPT09KGwtayklcCYmMCE9PWsmJihoKz1jKSxoKz1mLmNoYXJBdChrKTtmb3Ioaz1sO2s8Zi5sZW5ndGg7aysrKTA9PT0oZi5sZW5ndGgtayklbiYmMCE9PWsmJihoKz1jKSxoKz1mLmNoYXJBdChrKTtmb3IoO2IubGVuZ3RoPGU7KWIrPVwiMFwiO2UmJlwiMFwiIT09ZSYmKGgrPWQrYi5zdWJzdHIoMCxlKSl9bS5wdXNoKGc/YS5uZWdQcmU6YS5wb3NQcmUpO20ucHVzaChoKTttLnB1c2goZz9hLm5lZ1N1ZjphLnBvc1N1Zik7cmV0dXJuIG0uam9pbihcIlwiKX1mdW5jdGlvbiBLYihiLGEsYyl7dmFyIGQ9XCJcIjswPmImJihkPVwiLVwiLGI9LWIpO2ZvcihiPVwiXCIrYjtiLmxlbmd0aDxhOyliPVwiMFwiK2I7YyYmKGI9Yi5zdWJzdHIoYi5sZW5ndGgtYSkpO3JldHVybiBkK2J9ZnVuY3Rpb24gWChiLGEsYyxkKXtjPWN8fDA7cmV0dXJuIGZ1bmN0aW9uKGUpe2U9ZVtcImdldFwiK1xyXG5iXSgpO2lmKDA8Y3x8ZT4tYyllKz1jOzA9PT1lJiYtMTI9PWMmJihlPTEyKTtyZXR1cm4gS2IoZSxhLGQpfX1mdW5jdGlvbiBrYihiLGEpe3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlPWNbXCJnZXRcIitiXSgpLGc9SGEoYT9cIlNIT1JUXCIrYjpiKTtyZXR1cm4gZFtnXVtlXX19ZnVuY3Rpb24gQ2MoYil7ZnVuY3Rpb24gYShhKXt2YXIgYjtpZihiPWEubWF0Y2goYykpe2E9bmV3IERhdGUoMCk7dmFyIGc9MCxmPTAsaD1iWzhdP2Euc2V0VVRDRnVsbFllYXI6YS5zZXRGdWxsWWVhcixtPWJbOF0/YS5zZXRVVENIb3VyczphLnNldEhvdXJzO2JbOV0mJihnPVYoYls5XStiWzEwXSksZj1WKGJbOV0rYlsxMV0pKTtoLmNhbGwoYSxWKGJbMV0pLFYoYlsyXSktMSxWKGJbM10pKTtnPVYoYls0XXx8MCktZztmPVYoYls1XXx8MCktZjtoPVYoYls2XXx8MCk7Yj1NYXRoLnJvdW5kKDFFMypwYXJzZUZsb2F0KFwiMC5cIisoYls3XXx8MCkpKTttLmNhbGwoYSxnLGYsaCxiKX1yZXR1cm4gYX12YXIgYz1cclxuL14oXFxkezR9KS0/KFxcZFxcZCktPyhcXGRcXGQpKD86VChcXGRcXGQpKD86Oj8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzpcXC4oXFxkKykpPyk/KT8oWnwoWystXSkoXFxkXFxkKTo/KFxcZFxcZCkpPyk/JC87cmV0dXJuIGZ1bmN0aW9uKGMsZSl7dmFyIGc9XCJcIixmPVtdLGgsbTtlPWV8fFwibWVkaXVtRGF0ZVwiO2U9Yi5EQVRFVElNRV9GT1JNQVRTW2VdfHxlO3coYykmJihjPU5kLnRlc3QoYyk/VihjKTphKGMpKTtyYihjKSYmKGM9bmV3IERhdGUoYykpO2lmKCFLYShjKSlyZXR1cm4gYztmb3IoO2U7KShtPU9kLmV4ZWMoZSkpPyhmPWYuY29uY2F0KHVhLmNhbGwobSwxKSksZT1mLnBvcCgpKTooZi5wdXNoKGUpLGU9bnVsbCk7cShmLGZ1bmN0aW9uKGEpe2g9UGRbYV07Zys9aD9oKGMsYi5EQVRFVElNRV9GT1JNQVRTKTphLnJlcGxhY2UoLyheJ3wnJCkvZyxcIlwiKS5yZXBsYWNlKC8nJy9nLFwiJ1wiKX0pO3JldHVybiBnfX1mdW5jdGlvbiBKZCgpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gcGEoYiwhMCl9fWZ1bmN0aW9uIEtkKCl7cmV0dXJuIGZ1bmN0aW9uKGIsXHJcbmEpe2lmKCFMKGIpJiYhdyhiKSlyZXR1cm4gYjthPVYoYSk7aWYodyhiKSlyZXR1cm4gYT8wPD1hP2Iuc2xpY2UoMCxhKTpiLnNsaWNlKGEsYi5sZW5ndGgpOlwiXCI7dmFyIGM9W10sZCxlO2E+Yi5sZW5ndGg/YT1iLmxlbmd0aDphPC1iLmxlbmd0aCYmKGE9LWIubGVuZ3RoKTswPGE/KGQ9MCxlPWEpOihkPWIubGVuZ3RoK2EsZT1iLmxlbmd0aCk7Zm9yKDtkPGU7ZCsrKWMucHVzaChiW2RdKTtyZXR1cm4gY319ZnVuY3Rpb24gRWMoYil7cmV0dXJuIGZ1bmN0aW9uKGEsYyxkKXtmdW5jdGlvbiBlKGEsYil7cmV0dXJuIE9hKGIpP2Z1bmN0aW9uKGIsYyl7cmV0dXJuIGEoYyxiKX06YX1pZighTChhKXx8IWMpcmV0dXJuIGE7Yz1MKGMpP2M6W2NdO2M9UWMoYyxmdW5jdGlvbihhKXt2YXIgYz0hMSxkPWF8fEFhO2lmKHcoYSkpe2lmKFwiK1wiPT1hLmNoYXJBdCgwKXx8XCItXCI9PWEuY2hhckF0KDApKWM9XCItXCI9PWEuY2hhckF0KDApLGE9YS5zdWJzdHJpbmcoMSk7ZD1iKGEpfXJldHVybiBlKGZ1bmN0aW9uKGEsXHJcbmIpe3ZhciBjO2M9ZChhKTt2YXIgZT1kKGIpLGY9dHlwZW9mIGMsZz10eXBlb2YgZTtmPT1nPyhcInN0cmluZ1wiPT1mJiYoYz1jLnRvTG93ZXJDYXNlKCksZT1lLnRvTG93ZXJDYXNlKCkpLGM9Yz09PWU/MDpjPGU/LTE6MSk6Yz1mPGc/LTE6MTtyZXR1cm4gY30sYyl9KTtmb3IodmFyIGc9W10sZj0wO2Y8YS5sZW5ndGg7ZisrKWcucHVzaChhW2ZdKTtyZXR1cm4gZy5zb3J0KGUoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXShhLGIpO2lmKDAhPT1lKXJldHVybiBlfXJldHVybiAwfSxkKSl9fWZ1bmN0aW9uIHNhKGIpe00oYikmJihiPXtsaW5rOmJ9KTtiLnJlc3RyaWN0PWIucmVzdHJpY3R8fFwiQUNcIjtyZXR1cm4gWShiKX1mdW5jdGlvbiBIYyhiLGEpe2Z1bmN0aW9uIGMoYSxjKXtjPWM/XCItXCIrY2IoYyxcIi1cIik6XCJcIjtiLnJlbW92ZUNsYXNzKChhP2xiOm1iKStjKS5hZGRDbGFzcygoYT9tYjpsYikrYyl9dmFyIGQ9dGhpcyxlPWIucGFyZW50KCkuY29udHJvbGxlcihcImZvcm1cIil8fFxyXG5uYixnPTAsZj1kLiRlcnJvcj17fSxoPVtdO2QuJG5hbWU9YS5uYW1lfHxhLm5nRm9ybTtkLiRkaXJ0eT0hMTtkLiRwcmlzdGluZT0hMDtkLiR2YWxpZD0hMDtkLiRpbnZhbGlkPSExO2UuJGFkZENvbnRyb2woZCk7Yi5hZGRDbGFzcyhJYSk7YyghMCk7ZC4kYWRkQ29udHJvbD1mdW5jdGlvbihhKXt3YShhLiRuYW1lLFwiaW5wdXRcIik7aC5wdXNoKGEpO2EuJG5hbWUmJihkW2EuJG5hbWVdPWEpfTtkLiRyZW1vdmVDb250cm9sPWZ1bmN0aW9uKGEpe2EuJG5hbWUmJmRbYS4kbmFtZV09PT1hJiZkZWxldGUgZFthLiRuYW1lXTtxKGYsZnVuY3Rpb24oYixjKXtkLiRzZXRWYWxpZGl0eShjLCEwLGEpfSk7TWEoaCxhKX07ZC4kc2V0VmFsaWRpdHk9ZnVuY3Rpb24oYSxiLGgpe3ZhciBuPWZbYV07aWYoYiluJiYoTWEobixoKSxuLmxlbmd0aHx8KGctLSxnfHwoYyhiKSxkLiR2YWxpZD0hMCxkLiRpbnZhbGlkPSExKSxmW2FdPSExLGMoITAsYSksZS4kc2V0VmFsaWRpdHkoYSwhMCxkKSkpO2Vsc2V7Z3x8XHJcbmMoYik7aWYobil7aWYoLTEhPWFiKG4saCkpcmV0dXJufWVsc2UgZlthXT1uPVtdLGcrKyxjKCExLGEpLGUuJHNldFZhbGlkaXR5KGEsITEsZCk7bi5wdXNoKGgpO2QuJHZhbGlkPSExO2QuJGludmFsaWQ9ITB9fTtkLiRzZXREaXJ0eT1mdW5jdGlvbigpe2IucmVtb3ZlQ2xhc3MoSWEpLmFkZENsYXNzKG9iKTtkLiRkaXJ0eT0hMDtkLiRwcmlzdGluZT0hMTtlLiRzZXREaXJ0eSgpfTtkLiRzZXRQcmlzdGluZT1mdW5jdGlvbigpe2IucmVtb3ZlQ2xhc3Mob2IpLmFkZENsYXNzKElhKTtkLiRkaXJ0eT0hMTtkLiRwcmlzdGluZT0hMDtxKGgsZnVuY3Rpb24oYSl7YS4kc2V0UHJpc3RpbmUoKX0pfX1mdW5jdGlvbiBvYShiLGEsYyxkKXtiLiRzZXRWYWxpZGl0eShhLGMpO3JldHVybiBjP2Q6c31mdW5jdGlvbiBwYihiLGEsYyxkLGUsZyl7aWYoIWUuYW5kcm9pZCl7dmFyIGY9ITE7YS5vbihcImNvbXBvc2l0aW9uc3RhcnRcIixmdW5jdGlvbihhKXtmPSEwfSk7YS5vbihcImNvbXBvc2l0aW9uZW5kXCIsXHJcbmZ1bmN0aW9uKCl7Zj0hMX0pfXZhciBoPWZ1bmN0aW9uKCl7aWYoIWYpe3ZhciBlPWEudmFsKCk7T2EoYy5uZ1RyaW18fFwiVFwiKSYmKGU9WihlKSk7ZC4kdmlld1ZhbHVlIT09ZSYmKGIuJCRwaGFzZT9kLiRzZXRWaWV3VmFsdWUoZSk6Yi4kYXBwbHkoZnVuY3Rpb24oKXtkLiRzZXRWaWV3VmFsdWUoZSl9KSl9fTtpZihlLmhhc0V2ZW50KFwiaW5wdXRcIikpYS5vbihcImlucHV0XCIsaCk7ZWxzZXt2YXIgbSxrPWZ1bmN0aW9uKCl7bXx8KG09Zy5kZWZlcihmdW5jdGlvbigpe2goKTttPW51bGx9KSl9O2Eub24oXCJrZXlkb3duXCIsZnVuY3Rpb24oYSl7YT1hLmtleUNvZGU7OTE9PT1hfHwoMTU8YSYmMTk+YXx8Mzc8PWEmJjQwPj1hKXx8aygpfSk7aWYoZS5oYXNFdmVudChcInBhc3RlXCIpKWEub24oXCJwYXN0ZSBjdXRcIixrKX1hLm9uKFwiY2hhbmdlXCIsaCk7ZC4kcmVuZGVyPWZ1bmN0aW9uKCl7YS52YWwoZC4kaXNFbXB0eShkLiR2aWV3VmFsdWUpP1wiXCI6ZC4kdmlld1ZhbHVlKX07dmFyIGw9Yy5uZ1BhdHRlcm47XHJcbmwmJigoZT1sLm1hdGNoKC9eXFwvKC4qKVxcLyhbZ2ltXSopJC8pKT8obD1SZWdFeHAoZVsxXSxlWzJdKSxlPWZ1bmN0aW9uKGEpe3JldHVybiBvYShkLFwicGF0dGVyblwiLGQuJGlzRW1wdHkoYSl8fGwudGVzdChhKSxhKX0pOmU9ZnVuY3Rpb24oYyl7dmFyIGU9Yi4kZXZhbChsKTtpZighZXx8IWUudGVzdCl0aHJvdyB0KFwibmdQYXR0ZXJuXCIpKFwibm9yZWdleHBcIixsLGUsZmEoYSkpO3JldHVybiBvYShkLFwicGF0dGVyblwiLGQuJGlzRW1wdHkoYyl8fGUudGVzdChjKSxjKX0sZC4kZm9ybWF0dGVycy5wdXNoKGUpLGQuJHBhcnNlcnMucHVzaChlKSk7aWYoYy5uZ01pbmxlbmd0aCl7dmFyIG49VihjLm5nTWlubGVuZ3RoKTtlPWZ1bmN0aW9uKGEpe3JldHVybiBvYShkLFwibWlubGVuZ3RoXCIsZC4kaXNFbXB0eShhKXx8YS5sZW5ndGg+PW4sYSl9O2QuJHBhcnNlcnMucHVzaChlKTtkLiRmb3JtYXR0ZXJzLnB1c2goZSl9aWYoYy5uZ01heGxlbmd0aCl7dmFyIHA9VihjLm5nTWF4bGVuZ3RoKTtlPVxyXG5mdW5jdGlvbihhKXtyZXR1cm4gb2EoZCxcIm1heGxlbmd0aFwiLGQuJGlzRW1wdHkoYSl8fGEubGVuZ3RoPD1wLGEpfTtkLiRwYXJzZXJzLnB1c2goZSk7ZC4kZm9ybWF0dGVycy5wdXNoKGUpfX1mdW5jdGlvbiBMYihiLGEpe2I9XCJuZ0NsYXNzXCIrYjtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJBQ1wiLGxpbms6ZnVuY3Rpb24oYyxkLGUpe2Z1bmN0aW9uIGcoYil7aWYoITA9PT1hfHxjLiRpbmRleCUyPT09YSl7dmFyIGQ9ZihifHxcIlwiKTtoP3RhKGIsaCl8fGUuJHVwZGF0ZUNsYXNzKGQsZihoKSk6ZS4kYWRkQ2xhc3MoZCl9aD0kKGIpfWZ1bmN0aW9uIGYoYSl7aWYoTChhKSlyZXR1cm4gYS5qb2luKFwiIFwiKTtpZihXKGEpKXt2YXIgYj1bXTtxKGEsZnVuY3Rpb24oYSxjKXthJiZiLnB1c2goYyl9KTtyZXR1cm4gYi5qb2luKFwiIFwiKX1yZXR1cm4gYX12YXIgaDtjLiR3YXRjaChlW2JdLGcsITApO2UuJG9ic2VydmUoXCJjbGFzc1wiLGZ1bmN0aW9uKGEpe2coYy4kZXZhbChlW2JdKSl9KTtcclxuXCJuZ0NsYXNzXCIhPT1iJiZjLiR3YXRjaChcIiRpbmRleFwiLGZ1bmN0aW9uKGQsZyl7dmFyIGg9ZCYxO2lmKGghPT1nJjEpe3ZhciBuPWYoYy4kZXZhbChlW2JdKSk7aD09PWE/ZS4kYWRkQ2xhc3Mobik6ZS4kcmVtb3ZlQ2xhc3Mobil9fSl9fX19dmFyIHg9ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi50b0xvd2VyQ2FzZSgpOmJ9LEhhPWZ1bmN0aW9uKGIpe3JldHVybiB3KGIpP2IudG9VcHBlckNhc2UoKTpifSxOLHosQ2EsdWE9W10uc2xpY2UsUWQ9W10ucHVzaCxMYT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLE5hPXQoXCJuZ1wiKSxCYT1QLmFuZ3VsYXJ8fChQLmFuZ3VsYXI9e30pLFVhLEdhLGlhPVtcIjBcIixcIjBcIixcIjBcIl07Tj1WKCgvbXNpZSAoXFxkKykvLmV4ZWMoeChuYXZpZ2F0b3IudXNlckFnZW50KSl8fFtdKVsxXSk7aXNOYU4oTikmJihOPVYoKC90cmlkZW50XFwvLio7IHJ2OihcXGQrKS8uZXhlYyh4KG5hdmlnYXRvci51c2VyQWdlbnQpKXx8W10pWzFdKSk7RS4kaW5qZWN0PVtdO1xyXG5BYS4kaW5qZWN0PVtdO3ZhciBaPWZ1bmN0aW9uKCl7cmV0dXJuIFN0cmluZy5wcm90b3R5cGUudHJpbT9mdW5jdGlvbihiKXtyZXR1cm4gdyhiKT9iLnRyaW0oKTpifTpmdW5jdGlvbihiKXtyZXR1cm4gdyhiKT9iLnJlcGxhY2UoL15cXHNcXHMqLyxcIlwiKS5yZXBsYWNlKC9cXHNcXHMqJC8sXCJcIik6Yn19KCk7R2E9OT5OP2Z1bmN0aW9uKGIpe2I9Yi5ub2RlTmFtZT9iOmJbMF07cmV0dXJuIGIuc2NvcGVOYW1lJiZcIkhUTUxcIiE9Yi5zY29wZU5hbWU/SGEoYi5zY29wZU5hbWUrXCI6XCIrYi5ub2RlTmFtZSk6Yi5ub2RlTmFtZX06ZnVuY3Rpb24oYil7cmV0dXJuIGIubm9kZU5hbWU/Yi5ub2RlTmFtZTpiWzBdLm5vZGVOYW1lfTt2YXIgVGM9L1tBLVpdL2csUmQ9e2Z1bGw6XCIxLjIuMTJcIixtYWpvcjoxLG1pbm9yOjIsZG90OjEyLGNvZGVOYW1lOlwiY2F1bGlmbG93ZXItZXJhZGljYXRpb25cIn0sUmE9Ty5jYWNoZT17fSxkYj1PLmV4cGFuZG89XCJuZy1cIisobmV3IERhdGUpLmdldFRpbWUoKSxYYz0xLEljPVxyXG5QLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oYixhLGMpe2IuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITEpfTpmdW5jdGlvbihiLGEsYyl7Yi5hdHRhY2hFdmVudChcIm9uXCIrYSxjKX0semI9UC5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyP2Z1bmN0aW9uKGIsYSxjKXtiLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCExKX06ZnVuY3Rpb24oYixhLGMpe2IuZGV0YWNoRXZlbnQoXCJvblwiK2EsYyl9LFZjPS8oW1xcOlxcLVxcX10rKC4pKS9nLFdjPS9ebW96KFtBLVpdKS8sd2I9dChcImpxTGl0ZVwiKSxGYT1PLnByb3RvdHlwZT17cmVhZHk6ZnVuY3Rpb24oYil7ZnVuY3Rpb24gYSgpe2N8fChjPSEwLGIoKSl9dmFyIGM9ITE7XCJjb21wbGV0ZVwiPT09Ui5yZWFkeVN0YXRlP3NldFRpbWVvdXQoYSk6KHRoaXMub24oXCJET01Db250ZW50TG9hZGVkXCIsYSksTyhQKS5vbihcImxvYWRcIixhKSl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGI9W107cSh0aGlzLGZ1bmN0aW9uKGEpe2IucHVzaChcIlwiK1xyXG5hKX0pO3JldHVyblwiW1wiK2Iuam9pbihcIiwgXCIpK1wiXVwifSxlcTpmdW5jdGlvbihiKXtyZXR1cm4gMDw9Yj96KHRoaXNbYl0pOnoodGhpc1t0aGlzLmxlbmd0aCtiXSl9LGxlbmd0aDowLHB1c2g6UWQsc29ydDpbXS5zb3J0LHNwbGljZTpbXS5zcGxpY2V9LGZiPXt9O3EoXCJtdWx0aXBsZSBzZWxlY3RlZCBjaGVja2VkIGRpc2FibGVkIHJlYWRPbmx5IHJlcXVpcmVkIG9wZW5cIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYil7ZmJbeChiKV09Yn0pO3ZhciBmYz17fTtxKFwiaW5wdXQgc2VsZWN0IG9wdGlvbiB0ZXh0YXJlYSBidXR0b24gZm9ybSBkZXRhaWxzXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIpe2ZjW0hhKGIpXT0hMH0pO3Eoe2RhdGE6YmMsaW5oZXJpdGVkRGF0YTplYixzY29wZTpmdW5jdGlvbihiKXtyZXR1cm4geihiKS5kYXRhKFwiJHNjb3BlXCIpfHxlYihiLnBhcmVudE5vZGV8fGIsW1wiJGlzb2xhdGVTY29wZVwiLFwiJHNjb3BlXCJdKX0saXNvbGF0ZVNjb3BlOmZ1bmN0aW9uKGIpe3JldHVybiB6KGIpLmRhdGEoXCIkaXNvbGF0ZVNjb3BlXCIpfHxcclxueihiKS5kYXRhKFwiJGlzb2xhdGVTY29wZU5vVGVtcGxhdGVcIil9LGNvbnRyb2xsZXI6Y2MsaW5qZWN0b3I6ZnVuY3Rpb24oYil7cmV0dXJuIGViKGIsXCIkaW5qZWN0b3JcIil9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYixhKXtiLnJlbW92ZUF0dHJpYnV0ZShhKX0saGFzQ2xhc3M6QWIsY3NzOmZ1bmN0aW9uKGIsYSxjKXthPVFhKGEpO2lmKEQoYykpYi5zdHlsZVthXT1jO2Vsc2V7dmFyIGQ7OD49TiYmKGQ9Yi5jdXJyZW50U3R5bGUmJmIuY3VycmVudFN0eWxlW2FdLFwiXCI9PT1kJiYoZD1cImF1dG9cIikpO2Q9ZHx8Yi5zdHlsZVthXTs4Pj1OJiYoZD1cIlwiPT09ZD9zOmQpO3JldHVybiBkfX0sYXR0cjpmdW5jdGlvbihiLGEsYyl7dmFyIGQ9eChhKTtpZihmYltkXSlpZihEKGMpKWM/KGJbYV09ITAsYi5zZXRBdHRyaWJ1dGUoYSxkKSk6KGJbYV09ITEsYi5yZW1vdmVBdHRyaWJ1dGUoZCkpO2Vsc2UgcmV0dXJuIGJbYV18fChiLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKGEpfHxFKS5zcGVjaWZpZWQ/XHJcbmQ6cztlbHNlIGlmKEQoYykpYi5zZXRBdHRyaWJ1dGUoYSxjKTtlbHNlIGlmKGIuZ2V0QXR0cmlidXRlKXJldHVybiBiPWIuZ2V0QXR0cmlidXRlKGEsMiksbnVsbD09PWI/czpifSxwcm9wOmZ1bmN0aW9uKGIsYSxjKXtpZihEKGMpKWJbYV09YztlbHNlIHJldHVybiBiW2FdfSx0ZXh0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGQpe3ZhciBlPWFbYi5ub2RlVHlwZV07aWYodShkKSlyZXR1cm4gZT9iW2VdOlwiXCI7YltlXT1kfXZhciBhPVtdOzk+Tj8oYVsxXT1cImlubmVyVGV4dFwiLGFbM109XCJub2RlVmFsdWVcIik6YVsxXT1hWzNdPVwidGV4dENvbnRlbnRcIjtiLiRkdj1cIlwiO3JldHVybiBifSgpLHZhbDpmdW5jdGlvbihiLGEpe2lmKHUoYSkpe2lmKFwiU0VMRUNUXCI9PT1HYShiKSYmYi5tdWx0aXBsZSl7dmFyIGM9W107cShiLm9wdGlvbnMsZnVuY3Rpb24oYSl7YS5zZWxlY3RlZCYmYy5wdXNoKGEudmFsdWV8fGEudGV4dCl9KTtyZXR1cm4gMD09PWMubGVuZ3RoP251bGw6Y31yZXR1cm4gYi52YWx1ZX1iLnZhbHVlPVxyXG5hfSxodG1sOmZ1bmN0aW9uKGIsYSl7aWYodShhKSlyZXR1cm4gYi5pbm5lckhUTUw7Zm9yKHZhciBjPTAsZD1iLmNoaWxkTm9kZXM7YzxkLmxlbmd0aDtjKyspRGEoZFtjXSk7Yi5pbm5lckhUTUw9YX0sZW1wdHk6ZGN9LGZ1bmN0aW9uKGIsYSl7Ty5wcm90b3R5cGVbYV09ZnVuY3Rpb24oYSxkKXt2YXIgZSxnO2lmKGIhPT1kYyYmKDI9PWIubGVuZ3RoJiZiIT09QWImJmIhPT1jYz9hOmQpPT09cyl7aWYoVyhhKSl7Zm9yKGU9MDtlPHRoaXMubGVuZ3RoO2UrKylpZihiPT09YmMpYih0aGlzW2VdLGEpO2Vsc2UgZm9yKGcgaW4gYSliKHRoaXNbZV0sZyxhW2ddKTtyZXR1cm4gdGhpc31lPWIuJGR2O2c9ZT09PXM/TWF0aC5taW4odGhpcy5sZW5ndGgsMSk6dGhpcy5sZW5ndGg7Zm9yKHZhciBmPTA7ZjxnO2YrKyl7dmFyIGg9Yih0aGlzW2ZdLGEsZCk7ZT1lP2UraDpofXJldHVybiBlfWZvcihlPTA7ZTx0aGlzLmxlbmd0aDtlKyspYih0aGlzW2VdLGEsZCk7cmV0dXJuIHRoaXN9fSk7cSh7cmVtb3ZlRGF0YTokYixcclxuZGVhbG9jOkRhLG9uOmZ1bmN0aW9uIGEoYyxkLGUsZyl7aWYoRChnKSl0aHJvdyB3YihcIm9uYXJnc1wiKTt2YXIgZj1qYShjLFwiZXZlbnRzXCIpLGg9amEoYyxcImhhbmRsZVwiKTtmfHxqYShjLFwiZXZlbnRzXCIsZj17fSk7aHx8amEoYyxcImhhbmRsZVwiLGg9WWMoYyxmKSk7cShkLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihkKXt2YXIgZz1mW2RdO2lmKCFnKXtpZihcIm1vdXNlZW50ZXJcIj09ZHx8XCJtb3VzZWxlYXZlXCI9PWQpe3ZhciBsPVIuYm9keS5jb250YWluc3x8Ui5ib2R5LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uP2Z1bmN0aW9uKGEsYyl7dmFyIGQ9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxlPWMmJmMucGFyZW50Tm9kZTtyZXR1cm4gYT09PWV8fCEhKGUmJjE9PT1lLm5vZGVUeXBlJiYoZC5jb250YWlucz9kLmNvbnRhaW5zKGUpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSkmMTYpKX06ZnVuY3Rpb24oYSxjKXtpZihjKWZvcig7Yz1cclxuYy5wYXJlbnROb2RlOylpZihjPT09YSlyZXR1cm4hMDtyZXR1cm4hMX07ZltkXT1bXTthKGMse21vdXNlbGVhdmU6XCJtb3VzZW91dFwiLG1vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIn1bZF0sZnVuY3Rpb24oYSl7dmFyIGM9YS5yZWxhdGVkVGFyZ2V0O2MmJihjPT09dGhpc3x8bCh0aGlzLGMpKXx8aChhLGQpfSl9ZWxzZSBJYyhjLGQsaCksZltkXT1bXTtnPWZbZF19Zy5wdXNoKGUpfSl9LG9mZjphYyxvbmU6ZnVuY3Rpb24oYSxjLGQpe2E9eihhKTthLm9uKGMsZnVuY3Rpb24gZygpe2Eub2ZmKGMsZCk7YS5vZmYoYyxnKX0pO2Eub24oYyxkKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oYSxjKXt2YXIgZCxlPWEucGFyZW50Tm9kZTtEYShhKTtxKG5ldyBPKGMpLGZ1bmN0aW9uKGMpe2Q/ZS5pbnNlcnRCZWZvcmUoYyxkLm5leHRTaWJsaW5nKTplLnJlcGxhY2VDaGlsZChjLGEpO2Q9Y30pfSxjaGlsZHJlbjpmdW5jdGlvbihhKXt2YXIgYz1bXTtxKGEuY2hpbGROb2RlcyxmdW5jdGlvbihhKXsxPT09XHJcbmEubm9kZVR5cGUmJmMucHVzaChhKX0pO3JldHVybiBjfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jaGlsZE5vZGVzfHxbXX0sYXBwZW5kOmZ1bmN0aW9uKGEsYyl7cShuZXcgTyhjKSxmdW5jdGlvbihjKXsxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxhLmFwcGVuZENoaWxkKGMpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oYSxjKXtpZigxPT09YS5ub2RlVHlwZSl7dmFyIGQ9YS5maXJzdENoaWxkO3EobmV3IE8oYyksZnVuY3Rpb24oYyl7YS5pbnNlcnRCZWZvcmUoYyxkKX0pfX0sd3JhcDpmdW5jdGlvbihhLGMpe2M9eihjKVswXTt2YXIgZD1hLnBhcmVudE5vZGU7ZCYmZC5yZXBsYWNlQ2hpbGQoYyxhKTtjLmFwcGVuZENoaWxkKGEpfSxyZW1vdmU6ZnVuY3Rpb24oYSl7RGEoYSk7dmFyIGM9YS5wYXJlbnROb2RlO2MmJmMucmVtb3ZlQ2hpbGQoYSl9LGFmdGVyOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9YSxlPWEucGFyZW50Tm9kZTtxKG5ldyBPKGMpLGZ1bmN0aW9uKGEpe2UuaW5zZXJ0QmVmb3JlKGEsXHJcbmQubmV4dFNpYmxpbmcpO2Q9YX0pfSxhZGRDbGFzczpDYixyZW1vdmVDbGFzczpCYix0b2dnbGVDbGFzczpmdW5jdGlvbihhLGMsZCl7dShkKSYmKGQ9IUFiKGEsYykpOyhkP0NiOkJiKShhLGMpfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5wYXJlbnROb2RlKSYmMTEhPT1hLm5vZGVUeXBlP2E6bnVsbH0sbmV4dDpmdW5jdGlvbihhKXtpZihhLm5leHRFbGVtZW50U2libGluZylyZXR1cm4gYS5uZXh0RWxlbWVudFNpYmxpbmc7Zm9yKGE9YS5uZXh0U2libGluZztudWxsIT1hJiYxIT09YS5ub2RlVHlwZTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfSxmaW5kOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShjKTpbXX0sY2xvbmU6eWIsdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxjLGQpe2M9KGphKGEsXCJldmVudHNcIil8fHt9KVtjXTtkPWR8fFtdO3ZhciBlPVt7cHJldmVudERlZmF1bHQ6RSxzdG9wUHJvcGFnYXRpb246RX1dO1xyXG5xKGMsZnVuY3Rpb24oYyl7Yy5hcHBseShhLGUuY29uY2F0KGQpKX0pfX0sZnVuY3Rpb24oYSxjKXtPLnByb3RvdHlwZVtjXT1mdW5jdGlvbihjLGUsZyl7Zm9yKHZhciBmLGg9MDtoPHRoaXMubGVuZ3RoO2grKyl1KGYpPyhmPWEodGhpc1toXSxjLGUsZyksRChmKSYmKGY9eihmKSkpOnhiKGYsYSh0aGlzW2hdLGMsZSxnKSk7cmV0dXJuIEQoZik/Zjp0aGlzfTtPLnByb3RvdHlwZS5iaW5kPU8ucHJvdG90eXBlLm9uO08ucHJvdG90eXBlLnVuYmluZD1PLnByb3RvdHlwZS5vZmZ9KTtTYS5wcm90b3R5cGU9e3B1dDpmdW5jdGlvbihhLGMpe3RoaXNbRWEoYSldPWN9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpc1tFYShhKV19LHJlbW92ZTpmdW5jdGlvbihhKXt2YXIgYz10aGlzW2E9RWEoYSldO2RlbGV0ZSB0aGlzW2FdO3JldHVybiBjfX07dmFyICRjPS9eZnVuY3Rpb25cXHMqW15cXChdKlxcKFxccyooW15cXCldKilcXCkvbSxhZD0vLC8sYmQ9L15cXHMqKF8/KShcXFMrPylcXDFcXHMqJC8sWmM9XHJcbi8oKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pKS9tZyxUYT10KFwiJGluamVjdG9yXCIpLFNkPXQoXCIkYW5pbWF0ZVwiKSxUZD1bXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe3RoaXMuJCRzZWxlY3RvcnM9e307dGhpcy5yZWdpc3Rlcj1mdW5jdGlvbihjLGQpe3ZhciBlPWMrXCItYW5pbWF0aW9uXCI7aWYoYyYmXCIuXCIhPWMuY2hhckF0KDApKXRocm93IFNkKFwibm90Y3NlbFwiLGMpO3RoaXMuJCRzZWxlY3RvcnNbYy5zdWJzdHIoMSldPWU7YS5mYWN0b3J5KGUsZCl9O3RoaXMuY2xhc3NOYW1lRmlsdGVyPWZ1bmN0aW9uKGEpezE9PT1hcmd1bWVudHMubGVuZ3RoJiYodGhpcy4kJGNsYXNzTmFtZUZpbHRlcj1hIGluc3RhbmNlb2YgUmVnRXhwP2E6bnVsbCk7cmV0dXJuIHRoaXMuJCRjbGFzc05hbWVGaWx0ZXJ9O3RoaXMuJGdldD1bXCIkdGltZW91dFwiLGZ1bmN0aW9uKGEpe3JldHVybntlbnRlcjpmdW5jdGlvbihkLGUsZyxmKXtnP2cuYWZ0ZXIoZCk6KGUmJmVbMF18fChlPWcucGFyZW50KCkpLGUuYXBwZW5kKGQpKTtcclxuZiYmYShmLDAsITEpfSxsZWF2ZTpmdW5jdGlvbihkLGUpe2QucmVtb3ZlKCk7ZSYmYShlLDAsITEpfSxtb3ZlOmZ1bmN0aW9uKGEsYyxnLGYpe3RoaXMuZW50ZXIoYSxjLGcsZil9LGFkZENsYXNzOmZ1bmN0aW9uKGQsZSxnKXtlPXcoZSk/ZTpMKGUpP2Uuam9pbihcIiBcIik6XCJcIjtxKGQsZnVuY3Rpb24oYSl7Q2IoYSxlKX0pO2cmJmEoZywwLCExKX0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZCxlLGcpe2U9dyhlKT9lOkwoZSk/ZS5qb2luKFwiIFwiKTpcIlwiO3EoZCxmdW5jdGlvbihhKXtCYihhLGUpfSk7ZyYmYShnLDAsITEpfSxlbmFibGVkOkV9fV19XSxoYT10KFwiJGNvbXBpbGVcIik7aWMuJGluamVjdD1bXCIkcHJvdmlkZVwiLFwiJCRzYW5pdGl6ZVVyaVByb3ZpZGVyXCJdO3ZhciBoZD0vXih4W1xcOlxcLV9dfGRhdGFbXFw6XFwtX10pL2ksb2M9dChcIiRpbnRlcnBvbGF0ZVwiKSxVZD0vXihbXlxcPyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8kLyxzZD17aHR0cDo4MCxodHRwczo0NDMsZnRwOjIxfSxHYj10KFwiJGxvY2F0aW9uXCIpO1xyXG50Yy5wcm90b3R5cGU9SGIucHJvdG90eXBlPXNjLnByb3RvdHlwZT17JCRodG1sNTohMSwkJHJlcGxhY2U6ITEsYWJzVXJsOmliKFwiJCRhYnNVcmxcIiksdXJsOmZ1bmN0aW9uKGEsYyl7aWYodShhKSlyZXR1cm4gdGhpcy4kJHVybDt2YXIgZD1VZC5leGVjKGEpO2RbMV0mJnRoaXMucGF0aChkZWNvZGVVUklDb21wb25lbnQoZFsxXSkpOyhkWzJdfHxkWzFdKSYmdGhpcy5zZWFyY2goZFszXXx8XCJcIik7dGhpcy5oYXNoKGRbNV18fFwiXCIsYyk7cmV0dXJuIHRoaXN9LHByb3RvY29sOmliKFwiJCRwcm90b2NvbFwiKSxob3N0OmliKFwiJCRob3N0XCIpLHBvcnQ6aWIoXCIkJHBvcnRcIikscGF0aDp1YyhcIiQkcGF0aFwiLGZ1bmN0aW9uKGEpe3JldHVyblwiL1wiPT1hLmNoYXJBdCgwKT9hOlwiL1wiK2F9KSxzZWFyY2g6ZnVuY3Rpb24oYSxjKXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0aGlzLiQkc2VhcmNoO2Nhc2UgMTppZih3KGEpKXRoaXMuJCRzZWFyY2g9VmIoYSk7ZWxzZSBpZihXKGEpKXRoaXMuJCRzZWFyY2g9XHJcbmE7ZWxzZSB0aHJvdyBHYihcImlzcmNoYXJnXCIpO2JyZWFrO2RlZmF1bHQ6dShjKXx8bnVsbD09PWM/ZGVsZXRlIHRoaXMuJCRzZWFyY2hbYV06dGhpcy4kJHNlYXJjaFthXT1jfXRoaXMuJCRjb21wb3NlKCk7cmV0dXJuIHRoaXN9LGhhc2g6dWMoXCIkJGhhc2hcIixBYSkscmVwbGFjZTpmdW5jdGlvbigpe3RoaXMuJCRyZXBsYWNlPSEwO3JldHVybiB0aGlzfX07dmFyIHlhPXQoXCIkcGFyc2VcIikseGM9e30scWEsSmE9e1wibnVsbFwiOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LFwidHJ1ZVwiOmZ1bmN0aW9uKCl7cmV0dXJuITB9LFwiZmFsc2VcIjpmdW5jdGlvbigpe3JldHVybiExfSx1bmRlZmluZWQ6RSxcIitcIjpmdW5jdGlvbihhLGMsZCxlKXtkPWQoYSxjKTtlPWUoYSxjKTtyZXR1cm4gRChkKT9EKGUpP2QrZTpkOkQoZSk/ZTpzfSxcIi1cIjpmdW5jdGlvbihhLGMsZCxlKXtkPWQoYSxjKTtlPWUoYSxjKTtyZXR1cm4oRChkKT9kOjApLShEKGUpP2U6MCl9LFwiKlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsXHJcbmMpKmUoYSxjKX0sXCIvXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKS9lKGEsYyl9LFwiJVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyklZShhLGMpfSxcIl5cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpXmUoYSxjKX0sXCI9XCI6RSxcIj09PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk9PT1lKGEsYyl9LFwiIT09XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSE9PWUoYSxjKX0sXCI9PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk9PWUoYSxjKX0sXCIhPVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykhPWUoYSxjKX0sXCI8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKTxlKGEsYyl9LFwiPlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk+ZShhLGMpfSxcIjw9XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKTw9ZShhLGMpfSxcIj49XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxcclxuYyk+PWUoYSxjKX0sXCImJlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykmJmUoYSxjKX0sXCJ8fFwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyl8fGUoYSxjKX0sXCImXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSZlKGEsYyl9LFwifFwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBlKGEsYykoYSxjLGQoYSxjKSl9LFwiIVwiOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4hZChhLGMpfX0sVmQ9e246XCJcXG5cIixmOlwiXFxmXCIscjpcIlxcclwiLHQ6XCJcXHRcIix2OlwiXFx2XCIsXCInXCI6XCInXCIsJ1wiJzonXCInfSxKYj1mdW5jdGlvbihhKXt0aGlzLm9wdGlvbnM9YX07SmIucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpKYixsZXg6ZnVuY3Rpb24oYSl7dGhpcy50ZXh0PWE7dGhpcy5pbmRleD0wO3RoaXMuY2g9czt0aGlzLmxhc3RDaD1cIjpcIjt0aGlzLnRva2Vucz1bXTt2YXIgYztmb3IoYT1bXTt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXt0aGlzLmNoPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbmlmKHRoaXMuaXMoXCJcXFwiJ1wiKSl0aGlzLnJlYWRTdHJpbmcodGhpcy5jaCk7ZWxzZSBpZih0aGlzLmlzTnVtYmVyKHRoaXMuY2gpfHx0aGlzLmlzKFwiLlwiKSYmdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpdGhpcy5yZWFkTnVtYmVyKCk7ZWxzZSBpZih0aGlzLmlzSWRlbnQodGhpcy5jaCkpdGhpcy5yZWFkSWRlbnQoKSx0aGlzLndhcyhcInssXCIpJiYoXCJ7XCI9PT1hWzBdJiYoYz10aGlzLnRva2Vuc1t0aGlzLnRva2Vucy5sZW5ndGgtMV0pKSYmKGMuanNvbj0tMT09PWMudGV4dC5pbmRleE9mKFwiLlwiKSk7ZWxzZSBpZih0aGlzLmlzKFwiKCl7fVtdLiw7Oj9cIikpdGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OnRoaXMuY2gsanNvbjp0aGlzLndhcyhcIjpbLFwiKSYmdGhpcy5pcyhcIntbXCIpfHx0aGlzLmlzKFwifV06LFwiKX0pLHRoaXMuaXMoXCJ7W1wiKSYmYS51bnNoaWZ0KHRoaXMuY2gpLHRoaXMuaXMoXCJ9XVwiKSYmYS5zaGlmdCgpLHRoaXMuaW5kZXgrKztlbHNlIGlmKHRoaXMuaXNXaGl0ZXNwYWNlKHRoaXMuY2gpKXt0aGlzLmluZGV4Kys7XHJcbmNvbnRpbnVlfWVsc2V7dmFyIGQ9dGhpcy5jaCt0aGlzLnBlZWsoKSxlPWQrdGhpcy5wZWVrKDIpLGc9SmFbdGhpcy5jaF0sZj1KYVtkXSxoPUphW2VdO2g/KHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDplLGZuOmh9KSx0aGlzLmluZGV4Kz0zKTpmPyh0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6ZCxmbjpmfSksdGhpcy5pbmRleCs9Mik6Zz8odGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OnRoaXMuY2gsZm46Zyxqc29uOnRoaXMud2FzKFwiWyw6XCIpJiZ0aGlzLmlzKFwiKy1cIil9KSx0aGlzLmluZGV4Kz0xKTp0aGlzLnRocm93RXJyb3IoXCJVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyIFwiLHRoaXMuaW5kZXgsdGhpcy5pbmRleCsxKX10aGlzLmxhc3RDaD10aGlzLmNofXJldHVybiB0aGlzLnRva2Vuc30saXM6ZnVuY3Rpb24oYSl7cmV0dXJuLTEhPT1hLmluZGV4T2YodGhpcy5jaCl9LHdhczpmdW5jdGlvbihhKXtyZXR1cm4tMSE9PVxyXG5hLmluZGV4T2YodGhpcy5sYXN0Q2gpfSxwZWVrOmZ1bmN0aW9uKGEpe2E9YXx8MTtyZXR1cm4gdGhpcy5pbmRleCthPHRoaXMudGV4dC5sZW5ndGg/dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4K2EpOiExfSxpc051bWJlcjpmdW5jdGlvbihhKXtyZXR1cm5cIjBcIjw9YSYmXCI5XCI+PWF9LGlzV2hpdGVzcGFjZTpmdW5jdGlvbihhKXtyZXR1cm5cIiBcIj09PWF8fFwiXFxyXCI9PT1hfHxcIlxcdFwiPT09YXx8XCJcXG5cIj09PWF8fFwiXFx2XCI9PT1hfHxcIlxcdTAwYTBcIj09PWF9LGlzSWRlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuXCJhXCI8PWEmJlwielwiPj1hfHxcIkFcIjw9YSYmXCJaXCI+PWF8fFwiX1wiPT09YXx8XCIkXCI9PT1hfSxpc0V4cE9wZXJhdG9yOmZ1bmN0aW9uKGEpe3JldHVyblwiLVwiPT09YXx8XCIrXCI9PT1hfHx0aGlzLmlzTnVtYmVyKGEpfSx0aHJvd0Vycm9yOmZ1bmN0aW9uKGEsYyxkKXtkPWR8fHRoaXMuaW5kZXg7Yz1EKGMpP1wicyBcIitjK1wiLVwiK3RoaXMuaW5kZXgrXCIgW1wiK3RoaXMudGV4dC5zdWJzdHJpbmcoYyxkKStcclxuXCJdXCI6XCIgXCIrZDt0aHJvdyB5YShcImxleGVyclwiLGEsYyx0aGlzLnRleHQpO30scmVhZE51bWJlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT1cIlwiLGM9dGhpcy5pbmRleDt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXt2YXIgZD14KHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO2lmKFwiLlwiPT1kfHx0aGlzLmlzTnVtYmVyKGQpKWErPWQ7ZWxzZXt2YXIgZT10aGlzLnBlZWsoKTtpZihcImVcIj09ZCYmdGhpcy5pc0V4cE9wZXJhdG9yKGUpKWErPWQ7ZWxzZSBpZih0aGlzLmlzRXhwT3BlcmF0b3IoZCkmJmUmJnRoaXMuaXNOdW1iZXIoZSkmJlwiZVwiPT1hLmNoYXJBdChhLmxlbmd0aC0xKSlhKz1kO2Vsc2UgaWYoIXRoaXMuaXNFeHBPcGVyYXRvcihkKXx8ZSYmdGhpcy5pc051bWJlcihlKXx8XCJlXCIhPWEuY2hhckF0KGEubGVuZ3RoLTEpKWJyZWFrO2Vsc2UgdGhpcy50aHJvd0Vycm9yKFwiSW52YWxpZCBleHBvbmVudFwiKX10aGlzLmluZGV4Kyt9YSo9MTt0aGlzLnRva2Vucy5wdXNoKHtpbmRleDpjLFxyXG50ZXh0OmEsanNvbjohMCxmbjpmdW5jdGlvbigpe3JldHVybiBhfX0pfSxyZWFkSWRlbnQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcyxjPVwiXCIsZD10aGlzLmluZGV4LGUsZyxmLGg7dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7aD10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO2lmKFwiLlwiPT09aHx8dGhpcy5pc0lkZW50KGgpfHx0aGlzLmlzTnVtYmVyKGgpKVwiLlwiPT09aCYmKGU9dGhpcy5pbmRleCksYys9aDtlbHNlIGJyZWFrO3RoaXMuaW5kZXgrK31pZihlKWZvcihnPXRoaXMuaW5kZXg7Zzx0aGlzLnRleHQubGVuZ3RoOyl7aD10aGlzLnRleHQuY2hhckF0KGcpO2lmKFwiKFwiPT09aCl7Zj1jLnN1YnN0cihlLWQrMSk7Yz1jLnN1YnN0cigwLGUtZCk7dGhpcy5pbmRleD1nO2JyZWFrfWlmKHRoaXMuaXNXaGl0ZXNwYWNlKGgpKWcrKztlbHNlIGJyZWFrfWQ9e2luZGV4OmQsdGV4dDpjfTtpZihKYS5oYXNPd25Qcm9wZXJ0eShjKSlkLmZuPUphW2NdLGQuanNvbj1KYVtjXTtcclxuZWxzZXt2YXIgbT13YyhjLHRoaXMub3B0aW9ucyx0aGlzLnRleHQpO2QuZm49eShmdW5jdGlvbihhLGMpe3JldHVybiBtKGEsYyl9LHthc3NpZ246ZnVuY3Rpb24oZCxlKXtyZXR1cm4gamIoZCxjLGUsYS50ZXh0LGEub3B0aW9ucyl9fSl9dGhpcy50b2tlbnMucHVzaChkKTtmJiYodGhpcy50b2tlbnMucHVzaCh7aW5kZXg6ZSx0ZXh0OlwiLlwiLGpzb246ITF9KSx0aGlzLnRva2Vucy5wdXNoKHtpbmRleDplKzEsdGV4dDpmLGpzb246ITF9KSl9LHJlYWRTdHJpbmc6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcy5pbmRleDt0aGlzLmluZGV4Kys7Zm9yKHZhciBkPVwiXCIsZT1hLGc9ITE7dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7dmFyIGY9dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSxlPWUrZjtpZihnKVwidVwiPT09Zj8oZj10aGlzLnRleHQuc3Vic3RyaW5nKHRoaXMuaW5kZXgrMSx0aGlzLmluZGV4KzUpLGYubWF0Y2goL1tcXGRhLWZdezR9L2kpfHx0aGlzLnRocm93RXJyb3IoXCJJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdVwiK1xyXG5mK1wiXVwiKSx0aGlzLmluZGV4Kz00LGQrPVN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZiwxNikpKTpkPShnPVZkW2ZdKT9kK2c6ZCtmLGc9ITE7ZWxzZSBpZihcIlxcXFxcIj09PWYpZz0hMDtlbHNle2lmKGY9PT1hKXt0aGlzLmluZGV4Kys7dGhpcy50b2tlbnMucHVzaCh7aW5kZXg6Yyx0ZXh0OmUsc3RyaW5nOmQsanNvbjohMCxmbjpmdW5jdGlvbigpe3JldHVybiBkfX0pO3JldHVybn1kKz1mfXRoaXMuaW5kZXgrK310aGlzLnRocm93RXJyb3IoXCJVbnRlcm1pbmF0ZWQgcXVvdGVcIixjKX19O3ZhciBZYT1mdW5jdGlvbihhLGMsZCl7dGhpcy5sZXhlcj1hO3RoaXMuJGZpbHRlcj1jO3RoaXMub3B0aW9ucz1kfTtZYS5aRVJPPWZ1bmN0aW9uKCl7cmV0dXJuIDB9O1lhLnByb3RvdHlwZT17Y29uc3RydWN0b3I6WWEscGFyc2U6ZnVuY3Rpb24oYSxjKXt0aGlzLnRleHQ9YTt0aGlzLmpzb249Yzt0aGlzLnRva2Vucz10aGlzLmxleGVyLmxleChhKTtjJiYodGhpcy5hc3NpZ25tZW50PXRoaXMubG9naWNhbE9SLFxyXG50aGlzLmZ1bmN0aW9uQ2FsbD10aGlzLmZpZWxkQWNjZXNzPXRoaXMub2JqZWN0SW5kZXg9dGhpcy5maWx0ZXJDaGFpbj1mdW5jdGlvbigpe3RoaXMudGhyb3dFcnJvcihcImlzIG5vdCB2YWxpZCBqc29uXCIse3RleHQ6YSxpbmRleDowfSl9KTt2YXIgZD1jP3RoaXMucHJpbWFyeSgpOnRoaXMuc3RhdGVtZW50cygpOzAhPT10aGlzLnRva2Vucy5sZW5ndGgmJnRoaXMudGhyb3dFcnJvcihcImlzIGFuIHVuZXhwZWN0ZWQgdG9rZW5cIix0aGlzLnRva2Vuc1swXSk7ZC5saXRlcmFsPSEhZC5saXRlcmFsO2QuY29uc3RhbnQ9ISFkLmNvbnN0YW50O3JldHVybiBkfSxwcmltYXJ5OmZ1bmN0aW9uKCl7dmFyIGE7aWYodGhpcy5leHBlY3QoXCIoXCIpKWE9dGhpcy5maWx0ZXJDaGFpbigpLHRoaXMuY29uc3VtZShcIilcIik7ZWxzZSBpZih0aGlzLmV4cGVjdChcIltcIikpYT10aGlzLmFycmF5RGVjbGFyYXRpb24oKTtlbHNlIGlmKHRoaXMuZXhwZWN0KFwie1wiKSlhPXRoaXMub2JqZWN0KCk7ZWxzZXt2YXIgYz1cclxudGhpcy5leHBlY3QoKTsoYT1jLmZuKXx8dGhpcy50aHJvd0Vycm9yKFwibm90IGEgcHJpbWFyeSBleHByZXNzaW9uXCIsYyk7Yy5qc29uJiYoYS5jb25zdGFudD0hMCxhLmxpdGVyYWw9ITApfWZvcih2YXIgZDtjPXRoaXMuZXhwZWN0KFwiKFwiLFwiW1wiLFwiLlwiKTspXCIoXCI9PT1jLnRleHQ/KGE9dGhpcy5mdW5jdGlvbkNhbGwoYSxkKSxkPW51bGwpOlwiW1wiPT09Yy50ZXh0PyhkPWEsYT10aGlzLm9iamVjdEluZGV4KGEpKTpcIi5cIj09PWMudGV4dD8oZD1hLGE9dGhpcy5maWVsZEFjY2VzcyhhKSk6dGhpcy50aHJvd0Vycm9yKFwiSU1QT1NTSUJMRVwiKTtyZXR1cm4gYX0sdGhyb3dFcnJvcjpmdW5jdGlvbihhLGMpe3Rocm93IHlhKFwic3ludGF4XCIsYy50ZXh0LGEsYy5pbmRleCsxLHRoaXMudGV4dCx0aGlzLnRleHQuc3Vic3RyaW5nKGMuaW5kZXgpKTt9LHBlZWtUb2tlbjpmdW5jdGlvbigpe2lmKDA9PT10aGlzLnRva2Vucy5sZW5ndGgpdGhyb3cgeWEoXCJ1ZW9lXCIsdGhpcy50ZXh0KTtyZXR1cm4gdGhpcy50b2tlbnNbMF19LFxyXG5wZWVrOmZ1bmN0aW9uKGEsYyxkLGUpe2lmKDA8dGhpcy50b2tlbnMubGVuZ3RoKXt2YXIgZz10aGlzLnRva2Vuc1swXSxmPWcudGV4dDtpZihmPT09YXx8Zj09PWN8fGY9PT1kfHxmPT09ZXx8IShhfHxjfHxkfHxlKSlyZXR1cm4gZ31yZXR1cm4hMX0sZXhwZWN0OmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybihhPXRoaXMucGVlayhhLGMsZCxlKSk/KHRoaXMuanNvbiYmIWEuanNvbiYmdGhpcy50aHJvd0Vycm9yKFwiaXMgbm90IHZhbGlkIGpzb25cIixhKSx0aGlzLnRva2Vucy5zaGlmdCgpLGEpOiExfSxjb25zdW1lOmZ1bmN0aW9uKGEpe3RoaXMuZXhwZWN0KGEpfHx0aGlzLnRocm93RXJyb3IoXCJpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgW1wiK2ErXCJdXCIsdGhpcy5wZWVrKCkpfSx1bmFyeUZuOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIHkoZnVuY3Rpb24oZCxlKXtyZXR1cm4gYShkLGUsYyl9LHtjb25zdGFudDpjLmNvbnN0YW50fSl9LHRlcm5hcnlGbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIHkoZnVuY3Rpb24oZSxcclxuZyl7cmV0dXJuIGEoZSxnKT9jKGUsZyk6ZChlLGcpfSx7Y29uc3RhbnQ6YS5jb25zdGFudCYmYy5jb25zdGFudCYmZC5jb25zdGFudH0pfSxiaW5hcnlGbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIHkoZnVuY3Rpb24oZSxnKXtyZXR1cm4gYyhlLGcsYSxkKX0se2NvbnN0YW50OmEuY29uc3RhbnQmJmQuY29uc3RhbnR9KX0sc3RhdGVtZW50czpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXTs7KWlmKDA8dGhpcy50b2tlbnMubGVuZ3RoJiYhdGhpcy5wZWVrKFwifVwiLFwiKVwiLFwiO1wiLFwiXVwiKSYmYS5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSksIXRoaXMuZXhwZWN0KFwiO1wiKSlyZXR1cm4gMT09PWEubGVuZ3RoP2FbMF06ZnVuY3Rpb24oYyxkKXtmb3IodmFyIGUsZz0wO2c8YS5sZW5ndGg7ZysrKXt2YXIgZj1hW2ddO2YmJihlPWYoYyxkKSl9cmV0dXJuIGV9fSxmaWx0ZXJDaGFpbjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmV4cHJlc3Npb24oKSxjOzspaWYoYz10aGlzLmV4cGVjdChcInxcIikpYT1cclxudGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5maWx0ZXIoKSk7ZWxzZSByZXR1cm4gYX0sZmlsdGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuZXhwZWN0KCksYz10aGlzLiRmaWx0ZXIoYS50ZXh0KSxkPVtdOzspaWYoYT10aGlzLmV4cGVjdChcIjpcIikpZC5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtlbHNle3ZhciBlPWZ1bmN0aW9uKGEsZSxoKXtoPVtoXTtmb3IodmFyIG09MDttPGQubGVuZ3RoO20rKyloLnB1c2goZFttXShhLGUpKTtyZXR1cm4gYy5hcHBseShhLGgpfTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZX19fSxleHByZXNzaW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYXNzaWdubWVudCgpfSxhc3NpZ25tZW50OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50ZXJuYXJ5KCksYyxkO3JldHVybihkPXRoaXMuZXhwZWN0KFwiPVwiKSk/KGEuYXNzaWdufHx0aGlzLnRocm93RXJyb3IoXCJpbXBsaWVzIGFzc2lnbm1lbnQgYnV0IFtcIit0aGlzLnRleHQuc3Vic3RyaW5nKDAsZC5pbmRleCkrXHJcblwiXSBjYW4gbm90IGJlIGFzc2lnbmVkIHRvXCIsZCksYz10aGlzLnRlcm5hcnkoKSxmdW5jdGlvbihkLGcpe3JldHVybiBhLmFzc2lnbihkLGMoZCxnKSxnKX0pOmF9LHRlcm5hcnk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmxvZ2ljYWxPUigpLGMsZDtpZih0aGlzLmV4cGVjdChcIj9cIikpe2M9dGhpcy50ZXJuYXJ5KCk7aWYoZD10aGlzLmV4cGVjdChcIjpcIikpcmV0dXJuIHRoaXMudGVybmFyeUZuKGEsYyx0aGlzLnRlcm5hcnkoKSk7dGhpcy50aHJvd0Vycm9yKFwiZXhwZWN0ZWQgOlwiLGQpfWVsc2UgcmV0dXJuIGF9LGxvZ2ljYWxPUjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmxvZ2ljYWxBTkQoKSxjOzspaWYoYz10aGlzLmV4cGVjdChcInx8XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5sb2dpY2FsQU5EKCkpO2Vsc2UgcmV0dXJuIGF9LGxvZ2ljYWxBTkQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmVxdWFsaXR5KCksYztpZihjPXRoaXMuZXhwZWN0KFwiJiZcIikpYT10aGlzLmJpbmFyeUZuKGEsXHJcbmMuZm4sdGhpcy5sb2dpY2FsQU5EKCkpO3JldHVybiBhfSxlcXVhbGl0eTpmdW5jdGlvbigpe3ZhciBhPXRoaXMucmVsYXRpb25hbCgpLGM7aWYoYz10aGlzLmV4cGVjdChcIj09XCIsXCIhPVwiLFwiPT09XCIsXCIhPT1cIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmVxdWFsaXR5KCkpO3JldHVybiBhfSxyZWxhdGlvbmFsOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5hZGRpdGl2ZSgpLGM7aWYoYz10aGlzLmV4cGVjdChcIjxcIixcIj5cIixcIjw9XCIsXCI+PVwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMucmVsYXRpb25hbCgpKTtyZXR1cm4gYX0sYWRkaXRpdmU6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5tdWx0aXBsaWNhdGl2ZSgpLGM7Yz10aGlzLmV4cGVjdChcIitcIixcIi1cIik7KWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtyZXR1cm4gYX0sbXVsdGlwbGljYXRpdmU6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy51bmFyeSgpLGM7Yz10aGlzLmV4cGVjdChcIipcIixcclxuXCIvXCIsXCIlXCIpOylhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMudW5hcnkoKSk7cmV0dXJuIGF9LHVuYXJ5OmZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIHRoaXMuZXhwZWN0KFwiK1wiKT90aGlzLnByaW1hcnkoKTooYT10aGlzLmV4cGVjdChcIi1cIikpP3RoaXMuYmluYXJ5Rm4oWWEuWkVSTyxhLmZuLHRoaXMudW5hcnkoKSk6KGE9dGhpcy5leHBlY3QoXCIhXCIpKT90aGlzLnVuYXJ5Rm4oYS5mbix0aGlzLnVuYXJ5KCkpOnRoaXMucHJpbWFyeSgpfSxmaWVsZEFjY2VzczpmdW5jdGlvbihhKXt2YXIgYz10aGlzLGQ9dGhpcy5leHBlY3QoKS50ZXh0LGU9d2MoZCx0aGlzLm9wdGlvbnMsdGhpcy50ZXh0KTtyZXR1cm4geShmdW5jdGlvbihjLGQsaCl7cmV0dXJuIGUoaHx8YShjLGQpKX0se2Fzc2lnbjpmdW5jdGlvbihlLGYsaCl7cmV0dXJuIGpiKGEoZSxoKSxkLGYsYy50ZXh0LGMub3B0aW9ucyl9fSl9LG9iamVjdEluZGV4OmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZD10aGlzLmV4cHJlc3Npb24oKTtcclxudGhpcy5jb25zdW1lKFwiXVwiKTtyZXR1cm4geShmdW5jdGlvbihlLGcpe3ZhciBmPWEoZSxnKSxoPWQoZSxnKSxtO2lmKCFmKXJldHVybiBzOyhmPVhhKGZbaF0sYy50ZXh0KSkmJihmLnRoZW4mJmMub3B0aW9ucy51bndyYXBQcm9taXNlcykmJihtPWYsXCIkJHZcImluIGZ8fChtLiQkdj1zLG0udGhlbihmdW5jdGlvbihhKXttLiQkdj1hfSkpLGY9Zi4kJHYpO3JldHVybiBmfSx7YXNzaWduOmZ1bmN0aW9uKGUsZyxmKXt2YXIgaD1kKGUsZik7cmV0dXJuIFhhKGEoZSxmKSxjLnRleHQpW2hdPWd9fSl9LGZ1bmN0aW9uQ2FsbDpmdW5jdGlvbihhLGMpe3ZhciBkPVtdO2lmKFwiKVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkbyBkLnB1c2godGhpcy5leHByZXNzaW9uKCkpO3doaWxlKHRoaXMuZXhwZWN0KFwiLFwiKSl9dGhpcy5jb25zdW1lKFwiKVwiKTt2YXIgZT10aGlzO3JldHVybiBmdW5jdGlvbihnLGYpe2Zvcih2YXIgaD1bXSxtPWM/YyhnLGYpOmcsaz0wO2s8ZC5sZW5ndGg7aysrKWgucHVzaChkW2tdKGcsXHJcbmYpKTtrPWEoZyxmLG0pfHxFO1hhKG0sZS50ZXh0KTtYYShrLGUudGV4dCk7aD1rLmFwcGx5P2suYXBwbHkobSxoKTprKGhbMF0saFsxXSxoWzJdLGhbM10saFs0XSk7cmV0dXJuIFhhKGgsZS50ZXh0KX19LGFycmF5RGVjbGFyYXRpb246ZnVuY3Rpb24oKXt2YXIgYT1bXSxjPSEwO2lmKFwiXVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkb3t2YXIgZD10aGlzLmV4cHJlc3Npb24oKTthLnB1c2goZCk7ZC5jb25zdGFudHx8KGM9ITEpfXdoaWxlKHRoaXMuZXhwZWN0KFwiLFwiKSl9dGhpcy5jb25zdW1lKFwiXVwiKTtyZXR1cm4geShmdW5jdGlvbihjLGQpe2Zvcih2YXIgZj1bXSxoPTA7aDxhLmxlbmd0aDtoKyspZi5wdXNoKGFbaF0oYyxkKSk7cmV0dXJuIGZ9LHtsaXRlcmFsOiEwLGNvbnN0YW50OmN9KX0sb2JqZWN0OmZ1bmN0aW9uKCl7dmFyIGE9W10sYz0hMDtpZihcIn1cIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG97dmFyIGQ9dGhpcy5leHBlY3QoKSxkPWQuc3RyaW5nfHxkLnRleHQ7XHJcbnRoaXMuY29uc3VtZShcIjpcIik7dmFyIGU9dGhpcy5leHByZXNzaW9uKCk7YS5wdXNoKHtrZXk6ZCx2YWx1ZTplfSk7ZS5jb25zdGFudHx8KGM9ITEpfXdoaWxlKHRoaXMuZXhwZWN0KFwiLFwiKSl9dGhpcy5jb25zdW1lKFwifVwiKTtyZXR1cm4geShmdW5jdGlvbihjLGQpe2Zvcih2YXIgZT17fSxtPTA7bTxhLmxlbmd0aDttKyspe3ZhciBrPWFbbV07ZVtrLmtleV09ay52YWx1ZShjLGQpfXJldHVybiBlfSx7bGl0ZXJhbDohMCxjb25zdGFudDpjfSl9fTt2YXIgSWI9e30scmE9dChcIiRzY2VcIiksZWE9e0hUTUw6XCJodG1sXCIsQ1NTOlwiY3NzXCIsVVJMOlwidXJsXCIsUkVTT1VSQ0VfVVJMOlwicmVzb3VyY2VVcmxcIixKUzpcImpzXCJ9LFQ9Ui5jcmVhdGVFbGVtZW50KFwiYVwiKSx6Yz14YShQLmxvY2F0aW9uLmhyZWYsITApO0FjLiRpbmplY3Q9W1wiJHByb3ZpZGVcIl07QmMuJGluamVjdD1bXCIkbG9jYWxlXCJdO0RjLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTt2YXIgR2M9XCIuXCIsUGQ9e3l5eXk6WChcIkZ1bGxZZWFyXCIsNCksXHJcbnl5OlgoXCJGdWxsWWVhclwiLDIsMCwhMCkseTpYKFwiRnVsbFllYXJcIiwxKSxNTU1NOmtiKFwiTW9udGhcIiksTU1NOmtiKFwiTW9udGhcIiwhMCksTU06WChcIk1vbnRoXCIsMiwxKSxNOlgoXCJNb250aFwiLDEsMSksZGQ6WChcIkRhdGVcIiwyKSxkOlgoXCJEYXRlXCIsMSksSEg6WChcIkhvdXJzXCIsMiksSDpYKFwiSG91cnNcIiwxKSxoaDpYKFwiSG91cnNcIiwyLC0xMiksaDpYKFwiSG91cnNcIiwxLC0xMiksbW06WChcIk1pbnV0ZXNcIiwyKSxtOlgoXCJNaW51dGVzXCIsMSksc3M6WChcIlNlY29uZHNcIiwyKSxzOlgoXCJTZWNvbmRzXCIsMSksc3NzOlgoXCJNaWxsaXNlY29uZHNcIiwzKSxFRUVFOmtiKFwiRGF5XCIpLEVFRTprYihcIkRheVwiLCEwKSxhOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIDEyPmEuZ2V0SG91cnMoKT9jLkFNUE1TWzBdOmMuQU1QTVNbMV19LFo6ZnVuY3Rpb24oYSl7YT0tMSphLmdldFRpbWV6b25lT2Zmc2V0KCk7cmV0dXJuIGE9KDA8PWE/XCIrXCI6XCJcIikrKEtiKE1hdGhbMDxhP1wiZmxvb3JcIjpcImNlaWxcIl0oYS82MCksMikrXHJcbktiKE1hdGguYWJzKGElNjApLDIpKX19LE9kPS8oKD86W155TWRIaG1zYVpFJ10rKXwoPzonKD86W14nXXwnJykqJyl8KD86RSt8eSt8TSt8ZCt8SCt8aCt8bSt8cyt8YXxaKSkoLiopLyxOZD0vXlxcLT9cXGQrJC87Q2MuJGluamVjdD1bXCIkbG9jYWxlXCJdO3ZhciBMZD1ZKHgpLE1kPVkoSGEpO0VjLiRpbmplY3Q9W1wiJHBhcnNlXCJdO3ZhciBXZD1ZKHtyZXN0cmljdDpcIkVcIixjb21waWxlOmZ1bmN0aW9uKGEsYyl7OD49TiYmKGMuaHJlZnx8Yy5uYW1lfHxjLiRzZXQoXCJocmVmXCIsXCJcIiksYS5hcHBlbmQoUi5jcmVhdGVDb21tZW50KFwiSUUgZml4XCIpKSk7aWYoIWMuaHJlZiYmIWMueGxpbmtIcmVmJiYhYy5uYW1lKXJldHVybiBmdW5jdGlvbihhLGMpe3ZhciBnPVwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cIj09PUxhLmNhbGwoYy5wcm9wKFwiaHJlZlwiKSk/XCJ4bGluazpocmVmXCI6XCJocmVmXCI7Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7Yy5hdHRyKGcpfHxhLnByZXZlbnREZWZhdWx0KCl9KX19fSksXHJcbk1iPXt9O3EoZmIsZnVuY3Rpb24oYSxjKXtpZihcIm11bHRpcGxlXCIhPWEpe3ZhciBkPWxhKFwibmctXCIrYyk7TWJbZF09ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6MTAwLGxpbms6ZnVuY3Rpb24oYSxnLGYpe2EuJHdhdGNoKGZbZF0sZnVuY3Rpb24oYSl7Zi4kc2V0KGMsISFhKX0pfX19fX0pO3EoW1wic3JjXCIsXCJzcmNzZXRcIixcImhyZWZcIl0sZnVuY3Rpb24oYSl7dmFyIGM9bGEoXCJuZy1cIithKTtNYltjXT1mdW5jdGlvbigpe3JldHVybntwcmlvcml0eTo5OSxsaW5rOmZ1bmN0aW9uKGQsZSxnKXtnLiRvYnNlcnZlKGMsZnVuY3Rpb24oYyl7YyYmKGcuJHNldChhLGMpLE4mJmUucHJvcChhLGdbYV0pKX0pfX19fSk7dmFyIG5iPXskYWRkQ29udHJvbDpFLCRyZW1vdmVDb250cm9sOkUsJHNldFZhbGlkaXR5OkUsJHNldERpcnR5OkUsJHNldFByaXN0aW5lOkV9O0hjLiRpbmplY3Q9W1wiJGVsZW1lbnRcIixcIiRhdHRyc1wiLFwiJHNjb3BlXCJdO3ZhciBKYz1mdW5jdGlvbihhKXtyZXR1cm5bXCIkdGltZW91dFwiLFxyXG5mdW5jdGlvbihjKXtyZXR1cm57bmFtZTpcImZvcm1cIixyZXN0cmljdDphP1wiRUFDXCI6XCJFXCIsY29udHJvbGxlcjpIYyxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihhLGUsZyxmKXtpZighZy5hY3Rpb24pe3ZhciBoPWZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOmEucmV0dXJuVmFsdWU9ITF9O0ljKGVbMF0sXCJzdWJtaXRcIixoKTtlLm9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2MoZnVuY3Rpb24oKXt6YihlWzBdLFwic3VibWl0XCIsaCl9LDAsITEpfSl9dmFyIG09ZS5wYXJlbnQoKS5jb250cm9sbGVyKFwiZm9ybVwiKSxrPWcubmFtZXx8Zy5uZ0Zvcm07ayYmamIoYSxrLGYsayk7aWYobSllLm9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe20uJHJlbW92ZUNvbnRyb2woZik7ayYmamIoYSxrLHMsayk7eShmLG5iKX0pfX19fX1dfSxYZD1KYygpLFlkPUpjKCEwKSxaZD0vXihmdHB8aHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiVAIVxcLVxcL10pKT8kLyxcclxuJGQ9L15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+Li1dK0BbYS16MC05LV0rKFxcLlthLXowLTktXSspKiQvaSxhZT0vXlxccyooXFwtfFxcKyk/KFxcZCt8KFxcZCooXFwuXFxkKikpKVxccyokLyxLYz17dGV4dDpwYixudW1iZXI6ZnVuY3Rpb24oYSxjLGQsZSxnLGYpe3BiKGEsYyxkLGUsZyxmKTtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7dmFyIGM9ZS4kaXNFbXB0eShhKTtpZihjfHxhZS50ZXN0KGEpKXJldHVybiBlLiRzZXRWYWxpZGl0eShcIm51bWJlclwiLCEwKSxcIlwiPT09YT9udWxsOmM/YTpwYXJzZUZsb2F0KGEpO2UuJHNldFZhbGlkaXR5KFwibnVtYmVyXCIsITEpO3JldHVybiBzfSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBlLiRpc0VtcHR5KGEpP1wiXCI6XCJcIithfSk7ZC5taW4mJihhPWZ1bmN0aW9uKGEpe3ZhciBjPXBhcnNlRmxvYXQoZC5taW4pO3JldHVybiBvYShlLFwibWluXCIsZS4kaXNFbXB0eShhKXx8YT49YyxhKX0sZS4kcGFyc2Vycy5wdXNoKGEpLGUuJGZvcm1hdHRlcnMucHVzaChhKSk7XHJcbmQubWF4JiYoYT1mdW5jdGlvbihhKXt2YXIgYz1wYXJzZUZsb2F0KGQubWF4KTtyZXR1cm4gb2EoZSxcIm1heFwiLGUuJGlzRW1wdHkoYSl8fGE8PWMsYSl9LGUuJHBhcnNlcnMucHVzaChhKSxlLiRmb3JtYXR0ZXJzLnB1c2goYSkpO2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gb2EoZSxcIm51bWJlclwiLGUuJGlzRW1wdHkoYSl8fHJiKGEpLGEpfSl9LHVybDpmdW5jdGlvbihhLGMsZCxlLGcsZil7cGIoYSxjLGQsZSxnLGYpO2E9ZnVuY3Rpb24oYSl7cmV0dXJuIG9hKGUsXCJ1cmxcIixlLiRpc0VtcHR5KGEpfHxaZC50ZXN0KGEpLGEpfTtlLiRmb3JtYXR0ZXJzLnB1c2goYSk7ZS4kcGFyc2Vycy5wdXNoKGEpfSxlbWFpbDpmdW5jdGlvbihhLGMsZCxlLGcsZil7cGIoYSxjLGQsZSxnLGYpO2E9ZnVuY3Rpb24oYSl7cmV0dXJuIG9hKGUsXCJlbWFpbFwiLGUuJGlzRW1wdHkoYSl8fCRkLnRlc3QoYSksYSl9O2UuJGZvcm1hdHRlcnMucHVzaChhKTtlLiRwYXJzZXJzLnB1c2goYSl9LFxyXG5yYWRpbzpmdW5jdGlvbihhLGMsZCxlKXt1KGQubmFtZSkmJmMuYXR0cihcIm5hbWVcIixaYSgpKTtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2NbMF0uY2hlY2tlZCYmYS4kYXBwbHkoZnVuY3Rpb24oKXtlLiRzZXRWaWV3VmFsdWUoZC52YWx1ZSl9KX0pO2UuJHJlbmRlcj1mdW5jdGlvbigpe2NbMF0uY2hlY2tlZD1kLnZhbHVlPT1lLiR2aWV3VmFsdWV9O2QuJG9ic2VydmUoXCJ2YWx1ZVwiLGUuJHJlbmRlcil9LGNoZWNrYm94OmZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBnPWQubmdUcnVlVmFsdWUsZj1kLm5nRmFsc2VWYWx1ZTt3KGcpfHwoZz0hMCk7dyhmKXx8KGY9ITEpO2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXtlLiRzZXRWaWV3VmFsdWUoY1swXS5jaGVja2VkKX0pfSk7ZS4kcmVuZGVyPWZ1bmN0aW9uKCl7Y1swXS5jaGVja2VkPWUuJHZpZXdWYWx1ZX07ZS4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4gYSE9PWd9O2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gYT09PVxyXG5nfSk7ZS4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBhP2c6Zn0pfSxoaWRkZW46RSxidXR0b246RSxzdWJtaXQ6RSxyZXNldDpFfSxMYz1bXCIkYnJvd3NlclwiLFwiJHNuaWZmZXJcIixmdW5jdGlvbihhLGMpe3JldHVybntyZXN0cmljdDpcIkVcIixyZXF1aXJlOlwiP25nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGQsZSxnLGYpe2YmJihLY1t4KGcudHlwZSldfHxLYy50ZXh0KShkLGUsZyxmLGMsYSl9fX1dLG1iPVwibmctdmFsaWRcIixsYj1cIm5nLWludmFsaWRcIixJYT1cIm5nLXByaXN0aW5lXCIsb2I9XCJuZy1kaXJ0eVwiLGJlPVtcIiRzY29wZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRhdHRyc1wiLFwiJGVsZW1lbnRcIixcIiRwYXJzZVwiLGZ1bmN0aW9uKGEsYyxkLGUsZyl7ZnVuY3Rpb24gZihhLGMpe2M9Yz9cIi1cIitjYihjLFwiLVwiKTpcIlwiO2UucmVtb3ZlQ2xhc3MoKGE/bGI6bWIpK2MpLmFkZENsYXNzKChhP21iOmxiKStjKX10aGlzLiRtb2RlbFZhbHVlPXRoaXMuJHZpZXdWYWx1ZT1OdW1iZXIuTmFOO1xyXG50aGlzLiRwYXJzZXJzPVtdO3RoaXMuJGZvcm1hdHRlcnM9W107dGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycz1bXTt0aGlzLiRwcmlzdGluZT0hMDt0aGlzLiRkaXJ0eT0hMTt0aGlzLiR2YWxpZD0hMDt0aGlzLiRpbnZhbGlkPSExO3RoaXMuJG5hbWU9ZC5uYW1lO3ZhciBoPWcoZC5uZ01vZGVsKSxtPWguYXNzaWduO2lmKCFtKXRocm93IHQoXCJuZ01vZGVsXCIpKFwibm9uYXNzaWduXCIsZC5uZ01vZGVsLGZhKGUpKTt0aGlzLiRyZW5kZXI9RTt0aGlzLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiB1KGEpfHxcIlwiPT09YXx8bnVsbD09PWF8fGEhPT1hfTt2YXIgaz1lLmluaGVyaXRlZERhdGEoXCIkZm9ybUNvbnRyb2xsZXJcIil8fG5iLGw9MCxuPXRoaXMuJGVycm9yPXt9O2UuYWRkQ2xhc3MoSWEpO2YoITApO3RoaXMuJHNldFZhbGlkaXR5PWZ1bmN0aW9uKGEsYyl7blthXSE9PSFjJiYoYz8oblthXSYmbC0tLGx8fChmKCEwKSx0aGlzLiR2YWxpZD0hMCx0aGlzLiRpbnZhbGlkPSExKSk6KGYoITEpLFxyXG50aGlzLiRpbnZhbGlkPSEwLHRoaXMuJHZhbGlkPSExLGwrKyksblthXT0hYyxmKGMsYSksay4kc2V0VmFsaWRpdHkoYSxjLHRoaXMpKX07dGhpcy4kc2V0UHJpc3RpbmU9ZnVuY3Rpb24oKXt0aGlzLiRkaXJ0eT0hMTt0aGlzLiRwcmlzdGluZT0hMDtlLnJlbW92ZUNsYXNzKG9iKS5hZGRDbGFzcyhJYSl9O3RoaXMuJHNldFZpZXdWYWx1ZT1mdW5jdGlvbihkKXt0aGlzLiR2aWV3VmFsdWU9ZDt0aGlzLiRwcmlzdGluZSYmKHRoaXMuJGRpcnR5PSEwLHRoaXMuJHByaXN0aW5lPSExLGUucmVtb3ZlQ2xhc3MoSWEpLmFkZENsYXNzKG9iKSxrLiRzZXREaXJ0eSgpKTtxKHRoaXMuJHBhcnNlcnMsZnVuY3Rpb24oYSl7ZD1hKGQpfSk7dGhpcy4kbW9kZWxWYWx1ZSE9PWQmJih0aGlzLiRtb2RlbFZhbHVlPWQsbShhLGQpLHEodGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycyxmdW5jdGlvbihhKXt0cnl7YSgpfWNhdGNoKGQpe2MoZCl9fSkpfTt2YXIgcD10aGlzO2EuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGM9XHJcbmgoYSk7aWYocC4kbW9kZWxWYWx1ZSE9PWMpe3ZhciBkPXAuJGZvcm1hdHRlcnMsZT1kLmxlbmd0aDtmb3IocC4kbW9kZWxWYWx1ZT1jO2UtLTspYz1kW2VdKGMpO3AuJHZpZXdWYWx1ZSE9PWMmJihwLiR2aWV3VmFsdWU9YyxwLiRyZW5kZXIoKSl9cmV0dXJuIGN9KX1dLGNlPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6W1wibmdNb2RlbFwiLFwiXj9mb3JtXCJdLGNvbnRyb2xsZXI6YmUsbGluazpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZz1lWzBdLGY9ZVsxXXx8bmI7Zi4kYWRkQ29udHJvbChnKTthLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtmLiRyZW1vdmVDb250cm9sKGcpfSl9fX0sZGU9WSh7cmVxdWlyZTpcIm5nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe2UuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMucHVzaChmdW5jdGlvbigpe2EuJGV2YWwoZC5uZ0NoYW5nZSl9KX19KSxNYz1mdW5jdGlvbigpe3JldHVybntyZXF1aXJlOlwiP25nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGEsYyxcclxuZCxlKXtpZihlKXtkLnJlcXVpcmVkPSEwO3ZhciBnPWZ1bmN0aW9uKGEpe2lmKGQucmVxdWlyZWQmJmUuJGlzRW1wdHkoYSkpZS4kc2V0VmFsaWRpdHkoXCJyZXF1aXJlZFwiLCExKTtlbHNlIHJldHVybiBlLiRzZXRWYWxpZGl0eShcInJlcXVpcmVkXCIsITApLGF9O2UuJGZvcm1hdHRlcnMucHVzaChnKTtlLiRwYXJzZXJzLnVuc2hpZnQoZyk7ZC4kb2JzZXJ2ZShcInJlcXVpcmVkXCIsZnVuY3Rpb24oKXtnKGUuJHZpZXdWYWx1ZSl9KX19fX0sZWU9ZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpcIm5nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBnPShhPS9cXC8oLiopXFwvLy5leGVjKGQubmdMaXN0KSkmJlJlZ0V4cChhWzFdKXx8ZC5uZ0xpc3R8fFwiLFwiO2UuJHBhcnNlcnMucHVzaChmdW5jdGlvbihhKXtpZighdShhKSl7dmFyIGM9W107YSYmcShhLnNwbGl0KGcpLGZ1bmN0aW9uKGEpe2EmJmMucHVzaChaKGEpKX0pO3JldHVybiBjfX0pO2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gTChhKT9cclxuYS5qb2luKFwiLCBcIik6c30pO2UuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIWF8fCFhLmxlbmd0aH19fX0sZmU9L14odHJ1ZXxmYWxzZXxcXGQrKSQvLGdlPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGZlLnRlc3QoYy5uZ1ZhbHVlKT9mdW5jdGlvbihhLGMsZyl7Zy4kc2V0KFwidmFsdWVcIixhLiRldmFsKGcubmdWYWx1ZSkpfTpmdW5jdGlvbihhLGMsZyl7YS4kd2F0Y2goZy5uZ1ZhbHVlLGZ1bmN0aW9uKGEpe2cuJHNldChcInZhbHVlXCIsYSl9KX19fX0saGU9c2EoZnVuY3Rpb24oYSxjLGQpe2MuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpLmRhdGEoXCIkYmluZGluZ1wiLGQubmdCaW5kKTthLiR3YXRjaChkLm5nQmluZCxmdW5jdGlvbihhKXtjLnRleHQoYT09cz9cIlwiOmEpfSl9KSxpZT1bXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe2M9YShkLmF0dHIoZS4kYXR0ci5uZ0JpbmRUZW1wbGF0ZSkpO1xyXG5kLmFkZENsYXNzKFwibmctYmluZGluZ1wiKS5kYXRhKFwiJGJpbmRpbmdcIixjKTtlLiRvYnNlcnZlKFwibmdCaW5kVGVtcGxhdGVcIixmdW5jdGlvbihhKXtkLnRleHQoYSl9KX19XSxqZT1bXCIkc2NlXCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZyl7ZS5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIikuZGF0YShcIiRiaW5kaW5nXCIsZy5uZ0JpbmRIdG1sKTt2YXIgZj1jKGcubmdCaW5kSHRtbCk7ZC4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4oZihkKXx8XCJcIikudG9TdHJpbmcoKX0sZnVuY3Rpb24oYyl7ZS5odG1sKGEuZ2V0VHJ1c3RlZEh0bWwoZihkKSl8fFwiXCIpfSl9fV0sa2U9TGIoXCJcIiwhMCksbGU9TGIoXCJPZGRcIiwwKSxtZT1MYihcIkV2ZW5cIiwxKSxuZT1zYSh7Y29tcGlsZTpmdW5jdGlvbihhLGMpe2MuJHNldChcIm5nQ2xvYWtcIixzKTthLnJlbW92ZUNsYXNzKFwibmctY2xvYWtcIil9fSksb2U9W2Z1bmN0aW9uKCl7cmV0dXJue3Njb3BlOiEwLGNvbnRyb2xsZXI6XCJAXCIsXHJcbnByaW9yaXR5OjUwMH19XSxOYz17fTtxKFwiY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlbW92ZSBtb3VzZWVudGVyIG1vdXNlbGVhdmUga2V5ZG93biBrZXl1cCBrZXlwcmVzcyBzdWJtaXQgZm9jdXMgYmx1ciBjb3B5IGN1dCBwYXN0ZVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhKXt2YXIgYz1sYShcIm5nLVwiK2EpO05jW2NdPVtcIiRwYXJzZVwiLGZ1bmN0aW9uKGQpe3JldHVybntjb21waWxlOmZ1bmN0aW9uKGUsZyl7dmFyIGY9ZChnW2NdKTtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe2Qub24oeChhKSxmdW5jdGlvbihhKXtjLiRhcHBseShmdW5jdGlvbigpe2YoYyx7JGV2ZW50OmF9KX0pfSl9fX19XX0pO3ZhciBwZT1bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybnt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjYwMCx0ZXJtaW5hbDohMCxyZXN0cmljdDpcIkFcIiwkJHRsYjohMCxsaW5rOmZ1bmN0aW9uKGMsZCxlLGcsZil7dmFyIGgsXHJcbm07Yy4kd2F0Y2goZS5uZ0lmLGZ1bmN0aW9uKGcpe09hKGcpP218fChtPWMuJG5ldygpLGYobSxmdW5jdGlvbihjKXtjW2MubGVuZ3RoKytdPVIuY3JlYXRlQ29tbWVudChcIiBlbmQgbmdJZjogXCIrZS5uZ0lmK1wiIFwiKTtoPXtjbG9uZTpjfTthLmVudGVyKGMsZC5wYXJlbnQoKSxkKX0pKToobSYmKG0uJGRlc3Ryb3koKSxtPW51bGwpLGgmJihhLmxlYXZlKHViKGguY2xvbmUpKSxoPW51bGwpKX0pfX19XSxxZT1bXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRhbmNob3JTY3JvbGxcIixcIiRhbmltYXRlXCIsXCIkc2NlXCIsZnVuY3Rpb24oYSxjLGQsZSxnKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIixwcmlvcml0eTo0MDAsdGVybWluYWw6ITAsdHJhbnNjbHVkZTpcImVsZW1lbnRcIixjb250cm9sbGVyOkJhLm5vb3AsY29tcGlsZTpmdW5jdGlvbihmLGgpe3ZhciBtPWgubmdJbmNsdWRlfHxoLnNyYyxrPWgub25sb2FkfHxcIlwiLGw9aC5hdXRvc2Nyb2xsO3JldHVybiBmdW5jdGlvbihmLGgscSxzLEEpe3ZhciB0PVxyXG4wLHYseixLPWZ1bmN0aW9uKCl7diYmKHYuJGRlc3Ryb3koKSx2PW51bGwpO3omJihlLmxlYXZlKHopLHo9bnVsbCl9O2YuJHdhdGNoKGcucGFyc2VBc1Jlc291cmNlVXJsKG0pLGZ1bmN0aW9uKGcpe3ZhciBtPWZ1bmN0aW9uKCl7IUQobCl8fGwmJiFmLiRldmFsKGwpfHxkKCl9LHE9Kyt0O2c/KGEuZ2V0KGcse2NhY2hlOmN9KS5zdWNjZXNzKGZ1bmN0aW9uKGEpe2lmKHE9PT10KXt2YXIgYz1mLiRuZXcoKTtzLnRlbXBsYXRlPWE7YT1BKGMsZnVuY3Rpb24oYSl7SygpO2UuZW50ZXIoYSxudWxsLGgsbSl9KTt2PWM7ej1hO3YuJGVtaXQoXCIkaW5jbHVkZUNvbnRlbnRMb2FkZWRcIik7Zi4kZXZhbChrKX19KS5lcnJvcihmdW5jdGlvbigpe3E9PT10JiZLKCl9KSxmLiRlbWl0KFwiJGluY2x1ZGVDb250ZW50UmVxdWVzdGVkXCIpKTooSygpLHMudGVtcGxhdGU9bnVsbCl9KX19fX1dLHJlPVtcIiRjb21waWxlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIscHJpb3JpdHk6LTQwMCxcclxucmVxdWlyZTpcIm5nSW5jbHVkZVwiLGxpbms6ZnVuY3Rpb24oYyxkLGUsZyl7ZC5odG1sKGcudGVtcGxhdGUpO2EoZC5jb250ZW50cygpKShjKX19fV0sc2U9c2Eoe3ByaW9yaXR5OjQ1MCxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihhLGMsZCl7YS4kZXZhbChkLm5nSW5pdCl9fX19KSx0ZT1zYSh7dGVybWluYWw6ITAscHJpb3JpdHk6MUUzfSksdWU9W1wiJGxvY2FsZVwiLFwiJGludGVycG9sYXRlXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD0ve30vZztyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLGxpbms6ZnVuY3Rpb24oZSxnLGYpe3ZhciBoPWYuY291bnQsbT1mLiRhdHRyLndoZW4mJmcuYXR0cihmLiRhdHRyLndoZW4pLGs9Zi5vZmZzZXR8fDAsbD1lLiRldmFsKG0pfHx7fSxuPXt9LHA9Yy5zdGFydFN5bWJvbCgpLHI9Yy5lbmRTeW1ib2woKSxzPS9ed2hlbihNaW51cyk/KC4rKSQvO3EoZixmdW5jdGlvbihhLGMpe3MudGVzdChjKSYmKGxbeChjLnJlcGxhY2UoXCJ3aGVuXCIsXCJcIikucmVwbGFjZShcIk1pbnVzXCIsXHJcblwiLVwiKSldPWcuYXR0cihmLiRhdHRyW2NdKSl9KTtxKGwsZnVuY3Rpb24oYSxlKXtuW2VdPWMoYS5yZXBsYWNlKGQscCtoK1wiLVwiK2srcikpfSk7ZS4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYz1wYXJzZUZsb2F0KGUuJGV2YWwoaCkpO2lmKGlzTmFOKGMpKXJldHVyblwiXCI7YyBpbiBsfHwoYz1hLnBsdXJhbENhdChjLWspKTtyZXR1cm4gbltjXShlLGcsITApfSxmdW5jdGlvbihhKXtnLnRleHQoYSl9KX19fV0sdmU9W1wiJHBhcnNlXCIsXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9dChcIm5nUmVwZWF0XCIpO3JldHVybnt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjFFMyx0ZXJtaW5hbDohMCwkJHRsYjohMCxsaW5rOmZ1bmN0aW9uKGUsZyxmLGgsbSl7dmFyIGs9Zi5uZ1JlcGVhdCxsPWsubWF0Y2goL15cXHMqKFtcXHNcXFNdKz8pXFxzK2luXFxzKyhbXFxzXFxTXSs/KSg/Olxccyt0cmFja1xccytieVxccysoW1xcc1xcU10rPykpP1xccyokLyksbixwLHIscyxBLHQsdj17JGlkOkVhfTtpZighbCl0aHJvdyBkKFwiaWV4cFwiLFxyXG5rKTtmPWxbMV07aD1sWzJdOyhsPWxbM10pPyhuPWEobCkscD1mdW5jdGlvbihhLGMsZCl7dCYmKHZbdF09YSk7dltBXT1jO3YuJGluZGV4PWQ7cmV0dXJuIG4oZSx2KX0pOihyPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIEVhKGMpfSxzPWZ1bmN0aW9uKGEpe3JldHVybiBhfSk7bD1mLm1hdGNoKC9eKD86KFtcXCRcXHddKyl8XFwoKFtcXCRcXHddKylcXHMqLFxccyooW1xcJFxcd10rKVxcKSkkLyk7aWYoIWwpdGhyb3cgZChcImlpZGV4cFwiLGYpO0E9bFszXXx8bFsxXTt0PWxbMl07dmFyIEQ9e307ZS4kd2F0Y2hDb2xsZWN0aW9uKGgsZnVuY3Rpb24oYSl7dmFyIGYsaCxsPWdbMF0sbix2PXt9LHksQix3LHUsUyxFLHg9W107aWYocWIoYSkpUz1hLG49cHx8cjtlbHNle249cHx8cztTPVtdO2Zvcih3IGluIGEpYS5oYXNPd25Qcm9wZXJ0eSh3KSYmXCIkXCIhPXcuY2hhckF0KDApJiZTLnB1c2godyk7Uy5zb3J0KCl9eT1TLmxlbmd0aDtoPXgubGVuZ3RoPVMubGVuZ3RoO2ZvcihmPTA7ZjxoO2YrKylpZih3PWE9PT1cclxuUz9mOlNbZl0sdT1hW3ddLHU9bih3LHUsZiksd2EodSxcImB0cmFjayBieWAgaWRcIiksRC5oYXNPd25Qcm9wZXJ0eSh1KSlFPURbdV0sZGVsZXRlIERbdV0sdlt1XT1FLHhbZl09RTtlbHNle2lmKHYuaGFzT3duUHJvcGVydHkodSkpdGhyb3cgcSh4LGZ1bmN0aW9uKGEpe2EmJmEuc2NvcGUmJihEW2EuaWRdPWEpfSksZChcImR1cGVzXCIsayx1KTt4W2ZdPXtpZDp1fTt2W3VdPSExfWZvcih3IGluIEQpRC5oYXNPd25Qcm9wZXJ0eSh3KSYmKEU9RFt3XSxmPXViKEUuY2xvbmUpLGMubGVhdmUoZikscShmLGZ1bmN0aW9uKGEpe2EuJCROR19SRU1PVkVEPSEwfSksRS5zY29wZS4kZGVzdHJveSgpKTtmPTA7Zm9yKGg9Uy5sZW5ndGg7ZjxoO2YrKyl7dz1hPT09Uz9mOlNbZl07dT1hW3ddO0U9eFtmXTt4W2YtMV0mJihsPXhbZi0xXS5jbG9uZVt4W2YtMV0uY2xvbmUubGVuZ3RoLTFdKTtpZihFLnNjb3BlKXtCPUUuc2NvcGU7bj1sO2RvIG49bi5uZXh0U2libGluZzt3aGlsZShuJiZuLiQkTkdfUkVNT1ZFRCk7XHJcbkUuY2xvbmVbMF0hPW4mJmMubW92ZSh1YihFLmNsb25lKSxudWxsLHoobCkpO2w9RS5jbG9uZVtFLmNsb25lLmxlbmd0aC0xXX1lbHNlIEI9ZS4kbmV3KCk7QltBXT11O3QmJihCW3RdPXcpO0IuJGluZGV4PWY7Qi4kZmlyc3Q9MD09PWY7Qi4kbGFzdD1mPT09eS0xO0IuJG1pZGRsZT0hKEIuJGZpcnN0fHxCLiRsYXN0KTtCLiRvZGQ9IShCLiRldmVuPTA9PT0oZiYxKSk7RS5zY29wZXx8bShCLGZ1bmN0aW9uKGEpe2FbYS5sZW5ndGgrK109Ui5jcmVhdGVDb21tZW50KFwiIGVuZCBuZ1JlcGVhdDogXCIraytcIiBcIik7Yy5lbnRlcihhLG51bGwseihsKSk7bD1hO0Uuc2NvcGU9QjtFLmNsb25lPWE7dltFLmlkXT1FfSl9RD12fSl9fX1dLHdlPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXtjLiR3YXRjaChlLm5nU2hvdyxmdW5jdGlvbihjKXthW09hKGMpP1wicmVtb3ZlQ2xhc3NcIjpcImFkZENsYXNzXCJdKGQsXCJuZy1oaWRlXCIpfSl9fV0seGU9W1wiJGFuaW1hdGVcIixcclxuZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXtjLiR3YXRjaChlLm5nSGlkZSxmdW5jdGlvbihjKXthW09hKGMpP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKGQsXCJuZy1oaWRlXCIpfSl9fV0seWU9c2EoZnVuY3Rpb24oYSxjLGQpe2EuJHdhdGNoKGQubmdTdHlsZSxmdW5jdGlvbihhLGQpe2QmJmEhPT1kJiZxKGQsZnVuY3Rpb24oYSxkKXtjLmNzcyhkLFwiXCIpfSk7YSYmYy5jc3MoYSl9LCEwKX0pLHplPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXF1aXJlOlwibmdTd2l0Y2hcIixjb250cm9sbGVyOltcIiRzY29wZVwiLGZ1bmN0aW9uKCl7dGhpcy5jYXNlcz17fX1dLGxpbms6ZnVuY3Rpb24oYyxkLGUsZyl7dmFyIGYsaCxtPVtdO2MuJHdhdGNoKGUubmdTd2l0Y2h8fGUub24sZnVuY3Rpb24oZCl7Zm9yKHZhciBsPTAsbj1tLmxlbmd0aDtsPG47bCsrKW1bbF0uJGRlc3Ryb3koKSxhLmxlYXZlKGhbbF0pO2g9W107bT1bXTtpZihmPWcuY2FzZXNbXCIhXCIrXHJcbmRdfHxnLmNhc2VzW1wiP1wiXSljLiRldmFsKGUuY2hhbmdlKSxxKGYsZnVuY3Rpb24oZCl7dmFyIGU9Yy4kbmV3KCk7bS5wdXNoKGUpO2QudHJhbnNjbHVkZShlLGZ1bmN0aW9uKGMpe3ZhciBlPWQuZWxlbWVudDtoLnB1c2goYyk7YS5lbnRlcihjLGUucGFyZW50KCksZSl9KX0pfSl9fX1dLEFlPXNhKHt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjgwMCxyZXF1aXJlOlwiXm5nU3dpdGNoXCIsbGluazpmdW5jdGlvbihhLGMsZCxlLGcpe2UuY2FzZXNbXCIhXCIrZC5uZ1N3aXRjaFdoZW5dPWUuY2FzZXNbXCIhXCIrZC5uZ1N3aXRjaFdoZW5dfHxbXTtlLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXS5wdXNoKHt0cmFuc2NsdWRlOmcsZWxlbWVudDpjfSl9fSksQmU9c2Eoe3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6ODAwLHJlcXVpcmU6XCJebmdTd2l0Y2hcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUsZyl7ZS5jYXNlc1tcIj9cIl09ZS5jYXNlc1tcIj9cIl18fFtdO2UuY2FzZXNbXCI/XCJdLnB1c2goe3RyYW5zY2x1ZGU6ZyxcclxuZWxlbWVudDpjfSl9fSksQ2U9c2Eoe2NvbnRyb2xsZXI6W1wiJGVsZW1lbnRcIixcIiR0cmFuc2NsdWRlXCIsZnVuY3Rpb24oYSxjKXtpZighYyl0aHJvdyB0KFwibmdUcmFuc2NsdWRlXCIpKFwib3JwaGFuXCIsZmEoYSkpO3RoaXMuJHRyYW5zY2x1ZGU9Y31dLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7ZS4kdHJhbnNjbHVkZShmdW5jdGlvbihhKXtjLmVtcHR5KCk7Yy5hcHBlbmQoYSl9KX19KSxEZT1bXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVcIix0ZXJtaW5hbDohMCxjb21waWxlOmZ1bmN0aW9uKGMsZCl7XCJ0ZXh0L25nLXRlbXBsYXRlXCI9PWQudHlwZSYmYS5wdXQoZC5pZCxjWzBdLnRleHQpfX19XSxFZT10KFwibmdPcHRpb25zXCIpLEZlPVkoe3Rlcm1pbmFsOiEwfSksR2U9W1wiJGNvbXBpbGVcIixcIiRwYXJzZVwiLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9L15cXHMqKFtcXHNcXFNdKz8pKD86XFxzK2FzXFxzKyhbXFxzXFxTXSs/KSk/KD86XFxzK2dyb3VwXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/XFxzK2ZvclxccysoPzooW1xcJFxcd11bXFwkXFx3XSopfCg/OlxcKFxccyooW1xcJFxcd11bXFwkXFx3XSopXFxzKixcXHMqKFtcXCRcXHddW1xcJFxcd10qKVxccypcXCkpKVxccytpblxccysoW1xcc1xcU10rPykoPzpcXHMrdHJhY2tcXHMrYnlcXHMrKFtcXHNcXFNdKz8pKT8kLyxcclxuZT17JHNldFZpZXdWYWx1ZTpFfTtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVxdWlyZTpbXCJzZWxlY3RcIixcIj9uZ01vZGVsXCJdLGNvbnRyb2xsZXI6W1wiJGVsZW1lbnRcIixcIiRzY29wZVwiLFwiJGF0dHJzXCIsZnVuY3Rpb24oYSxjLGQpe3ZhciBtPXRoaXMsaz17fSxsPWUsbjttLmRhdGFib3VuZD1kLm5nTW9kZWw7bS5pbml0PWZ1bmN0aW9uKGEsYyxkKXtsPWE7bj1kfTttLmFkZE9wdGlvbj1mdW5jdGlvbihjKXt3YShjLCdcIm9wdGlvbiB2YWx1ZVwiJyk7a1tjXT0hMDtsLiR2aWV3VmFsdWU9PWMmJihhLnZhbChjKSxuLnBhcmVudCgpJiZuLnJlbW92ZSgpKX07bS5yZW1vdmVPcHRpb249ZnVuY3Rpb24oYSl7dGhpcy5oYXNPcHRpb24oYSkmJihkZWxldGUga1thXSxsLiR2aWV3VmFsdWU9PWEmJnRoaXMucmVuZGVyVW5rbm93bk9wdGlvbihhKSl9O20ucmVuZGVyVW5rbm93bk9wdGlvbj1mdW5jdGlvbihjKXtjPVwiPyBcIitFYShjKStcIiA/XCI7bi52YWwoYyk7YS5wcmVwZW5kKG4pO2EudmFsKGMpO24ucHJvcChcInNlbGVjdGVkXCIsXHJcbiEwKX07bS5oYXNPcHRpb249ZnVuY3Rpb24oYSl7cmV0dXJuIGsuaGFzT3duUHJvcGVydHkoYSl9O2MuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe20ucmVuZGVyVW5rbm93bk9wdGlvbj1FfSl9XSxsaW5rOmZ1bmN0aW9uKGUsZixoLG0pe2Z1bmN0aW9uIGsoYSxjLGQsZSl7ZC4kcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGE9ZC4kdmlld1ZhbHVlO2UuaGFzT3B0aW9uKGEpPyh5LnBhcmVudCgpJiZ5LnJlbW92ZSgpLGMudmFsKGEpLFwiXCI9PT1hJiZ3LnByb3AoXCJzZWxlY3RlZFwiLCEwKSk6dShhKSYmdz9jLnZhbChcIlwiKTplLnJlbmRlclVua25vd25PcHRpb24oYSl9O2Mub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7eS5wYXJlbnQoKSYmeS5yZW1vdmUoKTtkLiRzZXRWaWV3VmFsdWUoYy52YWwoKSl9KX0pfWZ1bmN0aW9uIGwoYSxjLGQpe3ZhciBlO2QuJHJlbmRlcj1mdW5jdGlvbigpe3ZhciBhPW5ldyBTYShkLiR2aWV3VmFsdWUpO3EoYy5maW5kKFwib3B0aW9uXCIpLFxyXG5mdW5jdGlvbihjKXtjLnNlbGVjdGVkPUQoYS5nZXQoYy52YWx1ZSkpfSl9O2EuJHdhdGNoKGZ1bmN0aW9uKCl7dGEoZSxkLiR2aWV3VmFsdWUpfHwoZT0kKGQuJHZpZXdWYWx1ZSksZC4kcmVuZGVyKCkpfSk7Yy5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXt2YXIgYT1bXTtxKGMuZmluZChcIm9wdGlvblwiKSxmdW5jdGlvbihjKXtjLnNlbGVjdGVkJiZhLnB1c2goYy52YWx1ZSl9KTtkLiRzZXRWaWV3VmFsdWUoYSl9KX0pfWZ1bmN0aW9uIG4oZSxmLGcpe2Z1bmN0aW9uIGgoKXt2YXIgYT17XCJcIjpbXX0sYz1bXCJcIl0sZCxrLHMsdCx1O3Q9Zy4kbW9kZWxWYWx1ZTt1PXooZSl8fFtdO3ZhciBDPW4/TmIodSk6dSxGLEoseDtKPXt9O3M9ITE7dmFyIEIsSDtpZihyKWlmKHcmJkwodCkpZm9yKHM9bmV3IFNhKFtdKSx4PTA7eDx0Lmxlbmd0aDt4KyspSlttXT10W3hdLHMucHV0KHcoZSxKKSx0W3hdKTtlbHNlIHM9bmV3IFNhKHQpO2Zvcih4PTA7Rj1DLmxlbmd0aCxcclxueDxGO3grKyl7az14O2lmKG4pe2s9Q1t4XTtpZihcIiRcIj09PWsuY2hhckF0KDApKWNvbnRpbnVlO0pbbl09a31KW21dPXVba107ZD1wKGUsSil8fFwiXCI7KGs9YVtkXSl8fChrPWFbZF09W10sYy5wdXNoKGQpKTtyP2Q9RChzLnJlbW92ZSh3P3coZSxKKTpxKGUsSikpKToodz8oZD17fSxkW21dPXQsZD13KGUsZCk9PT13KGUsSikpOmQ9dD09PXEoZSxKKSxzPXN8fGQpO0I9bChlLEopO0I9RChCKT9COlwiXCI7ay5wdXNoKHtpZDp3P3coZSxKKTpuP0NbeF06eCxsYWJlbDpCLHNlbGVjdGVkOmR9KX1yfHwoQXx8bnVsbD09PXQ/YVtcIlwiXS51bnNoaWZ0KHtpZDpcIlwiLGxhYmVsOlwiXCIsc2VsZWN0ZWQ6IXN9KTpzfHxhW1wiXCJdLnVuc2hpZnQoe2lkOlwiP1wiLGxhYmVsOlwiXCIsc2VsZWN0ZWQ6ITB9KSk7Sj0wO2ZvcihDPWMubGVuZ3RoO0o8QztKKyspe2Q9Y1tKXTtrPWFbZF07eS5sZW5ndGg8PUo/KHQ9e2VsZW1lbnQ6RS5jbG9uZSgpLmF0dHIoXCJsYWJlbFwiLGQpLGxhYmVsOmsubGFiZWx9LHU9W3RdLHkucHVzaCh1KSxcclxuZi5hcHBlbmQodC5lbGVtZW50KSk6KHU9eVtKXSx0PXVbMF0sdC5sYWJlbCE9ZCYmdC5lbGVtZW50LmF0dHIoXCJsYWJlbFwiLHQubGFiZWw9ZCkpO0I9bnVsbDt4PTA7Zm9yKEY9ay5sZW5ndGg7eDxGO3grKylzPWtbeF0sKGQ9dVt4KzFdKT8oQj1kLmVsZW1lbnQsZC5sYWJlbCE9PXMubGFiZWwmJkIudGV4dChkLmxhYmVsPXMubGFiZWwpLGQuaWQhPT1zLmlkJiZCLnZhbChkLmlkPXMuaWQpLEJbMF0uc2VsZWN0ZWQhPT1zLnNlbGVjdGVkJiZCLnByb3AoXCJzZWxlY3RlZFwiLGQuc2VsZWN0ZWQ9cy5zZWxlY3RlZCkpOihcIlwiPT09cy5pZCYmQT9IPUE6KEg9di5jbG9uZSgpKS52YWwocy5pZCkuYXR0cihcInNlbGVjdGVkXCIscy5zZWxlY3RlZCkudGV4dChzLmxhYmVsKSx1LnB1c2goe2VsZW1lbnQ6SCxsYWJlbDpzLmxhYmVsLGlkOnMuaWQsc2VsZWN0ZWQ6cy5zZWxlY3RlZH0pLEI/Qi5hZnRlcihIKTp0LmVsZW1lbnQuYXBwZW5kKEgpLEI9SCk7Zm9yKHgrKzt1Lmxlbmd0aD54Oyl1LnBvcCgpLmVsZW1lbnQucmVtb3ZlKCl9Zm9yKDt5Lmxlbmd0aD5cclxuSjspeS5wb3AoKVswXS5lbGVtZW50LnJlbW92ZSgpfXZhciBrO2lmKCEoaz10Lm1hdGNoKGQpKSl0aHJvdyBFZShcImlleHBcIix0LGZhKGYpKTt2YXIgbD1jKGtbMl18fGtbMV0pLG09a1s0XXx8a1s2XSxuPWtbNV0scD1jKGtbM118fFwiXCIpLHE9YyhrWzJdP2tbMV06bSksej1jKGtbN10pLHc9a1s4XT9jKGtbOF0pOm51bGwseT1bW3tlbGVtZW50OmYsbGFiZWw6XCJcIn1dXTtBJiYoYShBKShlKSxBLnJlbW92ZUNsYXNzKFwibmctc2NvcGVcIiksQS5yZW1vdmUoKSk7Zi5lbXB0eSgpO2Yub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe2UuJGFwcGx5KGZ1bmN0aW9uKCl7dmFyIGEsYz16KGUpfHxbXSxkPXt9LGgsayxsLHAsdCx2LHU7aWYocilmb3Ioaz1bXSxwPTAsdj15Lmxlbmd0aDtwPHY7cCsrKWZvcihhPXlbcF0sbD0xLHQ9YS5sZW5ndGg7bDx0O2wrKyl7aWYoKGg9YVtsXS5lbGVtZW50KVswXS5zZWxlY3RlZCl7aD1oLnZhbCgpO24mJihkW25dPWgpO2lmKHcpZm9yKHU9MDt1PGMubGVuZ3RoJiZcclxuKGRbbV09Y1t1XSx3KGUsZCkhPWgpO3UrKyk7ZWxzZSBkW21dPWNbaF07ay5wdXNoKHEoZSxkKSl9fWVsc2UgaWYoaD1mLnZhbCgpLFwiP1wiPT1oKWs9cztlbHNlIGlmKFwiXCI9PT1oKWs9bnVsbDtlbHNlIGlmKHcpZm9yKHU9MDt1PGMubGVuZ3RoO3UrKyl7aWYoZFttXT1jW3VdLHcoZSxkKT09aCl7az1xKGUsZCk7YnJlYWt9fWVsc2UgZFttXT1jW2hdLG4mJihkW25dPWgpLGs9cShlLGQpO2cuJHNldFZpZXdWYWx1ZShrKX0pfSk7Zy4kcmVuZGVyPWg7ZS4kd2F0Y2goaCl9aWYobVsxXSl7dmFyIHA9bVswXTttPW1bMV07dmFyIHI9aC5tdWx0aXBsZSx0PWgubmdPcHRpb25zLEE9ITEsdyx2PXooUi5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSxFPXooUi5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIikpLHk9di5jbG9uZSgpO2g9MDtmb3IodmFyIEM9Zi5jaGlsZHJlbigpLHg9Qy5sZW5ndGg7aDx4O2grKylpZihcIlwiPT09Q1toXS52YWx1ZSl7dz1BPUMuZXEoaCk7YnJlYWt9cC5pbml0KG0sQSxcclxueSk7ciYmKG0uJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIWF8fDA9PT1hLmxlbmd0aH0pO3Q/bihlLGYsbSk6cj9sKGUsZixtKTprKGUsZixtLHApfX19fV0sSGU9W1wiJGludGVycG9sYXRlXCIsZnVuY3Rpb24oYSl7dmFyIGM9e2FkZE9wdGlvbjpFLHJlbW92ZU9wdGlvbjpFfTtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscHJpb3JpdHk6MTAwLGNvbXBpbGU6ZnVuY3Rpb24oZCxlKXtpZih1KGUudmFsdWUpKXt2YXIgZz1hKGQudGV4dCgpLCEwKTtnfHxlLiRzZXQoXCJ2YWx1ZVwiLGQudGV4dCgpKX1yZXR1cm4gZnVuY3Rpb24oYSxkLGUpe3ZhciBrPWQucGFyZW50KCksbD1rLmRhdGEoXCIkc2VsZWN0Q29udHJvbGxlclwiKXx8ay5wYXJlbnQoKS5kYXRhKFwiJHNlbGVjdENvbnRyb2xsZXJcIik7bCYmbC5kYXRhYm91bmQ/ZC5wcm9wKFwic2VsZWN0ZWRcIiwhMSk6bD1jO2c/YS4kd2F0Y2goZyxmdW5jdGlvbihhLGMpe2UuJHNldChcInZhbHVlXCIsYSk7YSE9PWMmJmwucmVtb3ZlT3B0aW9uKGMpO2wuYWRkT3B0aW9uKGEpfSk6XHJcbmwuYWRkT3B0aW9uKGUudmFsdWUpO2Qub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7bC5yZW1vdmVPcHRpb24oZS52YWx1ZSl9KX19fX1dLEllPVkoe3Jlc3RyaWN0OlwiRVwiLHRlcm1pbmFsOiEwfSk7KENhPVAualF1ZXJ5KT8oej1DYSx5KENhLmZuLHtzY29wZTpGYS5zY29wZSxpc29sYXRlU2NvcGU6RmEuaXNvbGF0ZVNjb3BlLGNvbnRyb2xsZXI6RmEuY29udHJvbGxlcixpbmplY3RvcjpGYS5pbmplY3Rvcixpbmhlcml0ZWREYXRhOkZhLmluaGVyaXRlZERhdGF9KSx2YihcInJlbW92ZVwiLCEwLCEwLCExKSx2YihcImVtcHR5XCIsITEsITEsITEpLHZiKFwiaHRtbFwiLCExLCExLCEwKSk6ej1PO0JhLmVsZW1lbnQ9ejsoZnVuY3Rpb24oYSl7eShhLHtib290c3RyYXA6WGIsY29weTokLGV4dGVuZDp5LGVxdWFsczp0YSxlbGVtZW50OnosZm9yRWFjaDpxLGluamVjdG9yOlliLG5vb3A6RSxiaW5kOmJiLHRvSnNvbjpwYSxmcm9tSnNvbjpUYixpZGVudGl0eTpBYSxpc1VuZGVmaW5lZDp1LGlzRGVmaW5lZDpELFxyXG5pc1N0cmluZzp3LGlzRnVuY3Rpb246TSxpc09iamVjdDpXLGlzTnVtYmVyOnJiLGlzRWxlbWVudDpQYyxpc0FycmF5OkwsdmVyc2lvbjpSZCxpc0RhdGU6S2EsbG93ZXJjYXNlOngsdXBwZXJjYXNlOkhhLGNhbGxiYWNrczp7Y291bnRlcjowfSwkJG1pbkVycjp0LCQkY3NwOlNifSk7VWE9VWMoUCk7dHJ5e1VhKFwibmdMb2NhbGVcIil9Y2F0Y2goYyl7VWEoXCJuZ0xvY2FsZVwiLFtdKS5wcm92aWRlcihcIiRsb2NhbGVcIixyZCl9VWEoXCJuZ1wiLFtcIm5nTG9jYWxlXCJdLFtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7YS5wcm92aWRlcih7JCRzYW5pdGl6ZVVyaTpCZH0pO2EucHJvdmlkZXIoXCIkY29tcGlsZVwiLGljKS5kaXJlY3RpdmUoe2E6V2QsaW5wdXQ6TGMsdGV4dGFyZWE6TGMsZm9ybTpYZCxzY3JpcHQ6RGUsc2VsZWN0OkdlLHN0eWxlOkllLG9wdGlvbjpIZSxuZ0JpbmQ6aGUsbmdCaW5kSHRtbDpqZSxuZ0JpbmRUZW1wbGF0ZTppZSxuZ0NsYXNzOmtlLG5nQ2xhc3NFdmVuOm1lLG5nQ2xhc3NPZGQ6bGUsXHJcbm5nQ2xvYWs6bmUsbmdDb250cm9sbGVyOm9lLG5nRm9ybTpZZCxuZ0hpZGU6eGUsbmdJZjpwZSxuZ0luY2x1ZGU6cWUsbmdJbml0OnNlLG5nTm9uQmluZGFibGU6dGUsbmdQbHVyYWxpemU6dWUsbmdSZXBlYXQ6dmUsbmdTaG93OndlLG5nU3R5bGU6eWUsbmdTd2l0Y2g6emUsbmdTd2l0Y2hXaGVuOkFlLG5nU3dpdGNoRGVmYXVsdDpCZSxuZ09wdGlvbnM6RmUsbmdUcmFuc2NsdWRlOkNlLG5nTW9kZWw6Y2UsbmdMaXN0OmVlLG5nQ2hhbmdlOmRlLHJlcXVpcmVkOk1jLG5nUmVxdWlyZWQ6TWMsbmdWYWx1ZTpnZX0pLmRpcmVjdGl2ZSh7bmdJbmNsdWRlOnJlfSkuZGlyZWN0aXZlKE1iKS5kaXJlY3RpdmUoTmMpO2EucHJvdmlkZXIoeyRhbmNob3JTY3JvbGw6Y2QsJGFuaW1hdGU6VGQsJGJyb3dzZXI6ZWQsJGNhY2hlRmFjdG9yeTpmZCwkY29udHJvbGxlcjppZCwkZG9jdW1lbnQ6amQsJGV4Y2VwdGlvbkhhbmRsZXI6a2QsJGZpbHRlcjpBYywkaW50ZXJwb2xhdGU6cGQsJGludGVydmFsOnFkLFxyXG4kaHR0cDpsZCwkaHR0cEJhY2tlbmQ6bmQsJGxvY2F0aW9uOnRkLCRsb2c6dWQsJHBhcnNlOnhkLCRyb290U2NvcGU6QWQsJHE6eWQsJHNjZTpFZCwkc2NlRGVsZWdhdGU6RGQsJHNuaWZmZXI6RmQsJHRlbXBsYXRlQ2FjaGU6Z2QsJHRpbWVvdXQ6R2QsJHdpbmRvdzpIZH0pfV0pfSkoQmEpO3ooUikucmVhZHkoZnVuY3Rpb24oKXtTYyhSLFhiKX0pfSkod2luZG93LGRvY3VtZW50KTshYW5ndWxhci4kJGNzcCgpJiZhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLmZpbmQoXCJoZWFkXCIpLnByZXBlbmQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5AY2hhcnNldCBcIlVURi04XCI7W25nXFxcXDpjbG9ha10sW25nLWNsb2FrXSxbZGF0YS1uZy1jbG9ha10sW3gtbmctY2xvYWtdLC5uZy1jbG9haywueC1uZy1jbG9haywubmctaGlkZXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9bmdcXFxcOmZvcm17ZGlzcGxheTpibG9jazt9PC9zdHlsZT4nKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci5taW4uanMubWFwXHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJyYXJpZXNcXFxcYW5ndWxhci5taW4uanNcIixcIi9saWJyYXJpZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIHByb21pc2VcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjE5XHJcbiogcmVmZXJlbmNlOlxyXG4qICAgIGh0dHA6Ly9wcm9taXNlc2FwbHVzLmNvbS9cclxuKiAgICBodHRwOi8vd3d3Lmh0bWw1cm9ja3MuY29tL3poL3R1dG9yaWFscy9lczYvcHJvbWlzZXMvXHJcbiogICAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUHJvbWlzZVxyXG4qL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHR5cGUgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYWxsJykudHlwZSxcclxuXHRpc0Z1bmMgPSBmdW5jdGlvbihmbikgeyByZXR1cm4gdHlwZShmbikgPT09ICdmdW5jdGlvbic7IH0sXHJcblx0dGhlbmFibGUgPSBmdW5jdGlvbihvYmopIHsgcmV0dXJuIG9iaiAmJiBpc0Z1bmMob2JqWyd0aGVuJ10pOyB9O1xyXG5cclxudmFyIFNUQVRVUyA9IHtcclxuXHRwZW5kaW5nOiAwLFxyXG5cdGZ1bGZpbGxlZDogMSxcclxuXHRyZWplY3RlZDogMiBcclxufTtcclxuXHJcbnZhciBQcm9taXNlID0gZnVuY3Rpb24ocmVzb2x2ZXIpIHtcclxuXHRpZiAoIWlzRnVuYyhyZXNvbHZlcikpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcignUHJvbWlzZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGZ1bmN0aW9uIGFyZ3VtZW50Jyk7XHJcblx0fVxyXG5cdHRoaXMuX3N0YXR1cyA9IFNUQVRVUy5wZW5kaW5nO1xyXG5cdHRoaXMuX3Jlc29sdmVzID0gW107XHJcblx0dGhpcy5fcmVqZWN0cyA9IFtdO1xyXG5cdHZhciBzZWxmID0gdGhpcztcclxuXHRyZXNvbHZlcihmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKHNlbGYuX3N0YXR1cyA9PT0gU1RBVFVTLnBlbmRpbmcpIHtcclxuXHRcdFx0c2VsZi5fc3RhdHVzID0gU1RBVFVTLmZ1bGZpbGxlZDtcclxuXHRcdFx0c2VsZi5fdmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLl9yZXNvbHZlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHNlbGYuX3Jlc29sdmVzW2ldKHNlbGYuX3ZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIGZ1bmN0aW9uKHJlYXNvbikge1xyXG5cdFx0aWYgKHNlbGYuX3N0YXR1cyA9PT0gU1RBVFVTLnBlbmRpbmcpIHtcclxuXHRcdFx0c2VsZi5fc3RhdHVzID0gU1RBVFVTLnJlamVjdGVkO1xyXG5cdFx0XHRzZWxmLl9yZWFzb24gPSByZWFzb247XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5fcmVqZWN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHNlbGYuX3JlamVjdHNbaV0oc2VsZi5fcmVhc29uKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuUHJvbWlzZS5wcm90b3R5cGUgPSB7XHJcblx0Y29uc3RydWN0b3I6IFByb21pc2UsXHJcblx0XHJcbiAgICBfc3RhdHVzOiBudWxsLCBfcmVzb2x2ZXM6IG51bGwsIF9yZWplY3RzOiBudWxsLFxyXG4gICAgXHJcbiAgICAvL1xyXG5cdHRoZW46IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XHJcblx0XHRpZiAoaXNGdW5jKG9uRnVsZmlsbGVkKSkge1xyXG5cdFx0XHRpZiAodGhpcy5fc3RhdHVzID09PSBTVEFUVVMucGVuZGluZykgeyB0aGlzLl9yZXNvbHZlcy5wdXNoKG9uRnVsZmlsbGVkKTsgfVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLl9zdGF0dXMgPT09IFNUQVRVUy5mdWxmaWxsZWQpIHsgb25GdWxmaWxsZWQodGhpcy5fdmFsdWUpOyB9XHJcblx0XHR9XHJcblx0XHRpZiAoaXNGdW5jKG9uUmVqZWN0ZWQpKSB7XHJcblx0XHRcdGlmICh0aGlzLl9zdGF0dXMgPT09IFNUQVRVUy5wZW5kaW5nKSB7IHRoaXMuX3JlamVjdHMucHVzaChvblJlamVjdGVkKTsgfVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLl9zdGF0dXMgPT09IFNUQVRVUy5yZWplY3RlZCkgeyBvblJlamVjdGVkKHRoaXMuX3JlYXNvbik7IH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLl9fZnRoZW4gPT09IHRydWUpIHtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuX19mdGhlbjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX19mdGhlbiA9IHRydWU7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly9cclxuXHRjYXRjaDogZnVuY3Rpb24ob25SZWplY3RlZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcclxuXHR9XHJcbn07XHJcblxyXG5Qcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdHZhciBkb1Jlc29sdmUsIGRvUmVqZWN0LCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRkb1Jlc29sdmUgPSByZXNvbHZlOyBkb1JlamVjdCA9IHJlamVjdDtcclxuXHR9KTtcclxuXHRpZiAodGhlbmFibGUodmFsdWUpKSB7XHJcblx0XHR2YWx1ZS50aGVuKGRvUmVzb2x2ZSwgZG9SZWplY3QpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb1Jlc29sdmUodmFsdWUpO1xyXG5cdH1cclxuXHRyZXR1cm4gcHJvbWlzZTtcclxufTtcclxuXHJcblByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24ocmVhc29uKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0cmVqZWN0KHJlYXNvbik7XHJcblx0fSk7XHJcbn07XHJcblxyXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKGl0ZXJhYmxlKSB7XHJcblx0dmFyIGRvUmVzb2x2ZSwgZG9SZWplY3QsIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdGRvUmVzb2x2ZSA9IHJlc29sdmU7IGRvUmVqZWN0ID0gcmVqZWN0O1xyXG5cdH0pO1xyXG5cdGlmICh0eXBlKGl0ZXJhYmxlKSA9PT0gJ2FycmF5Jykge1xyXG5cdFx0dmFyIHJlc29sdmVOdW0gPSAwLCByZWplY3ROdW0gPSAwLCB2YWx1ZXMgPSBbXSxcclxuXHRcdHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHR2YWx1ZXMucHVzaCh2YWx1ZSk7XHJcblx0XHRcdGlmICgrK3Jlc29sdmVOdW0gPT09IGl0ZXJhYmxlLmxlbmd0aCkge1xyXG5cdFx0XHRcdGRvUmVzb2x2ZSh2YWx1ZXMpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cmVqZWN0ID0gZnVuY3Rpb24ocmVhc29uKSB7XHJcblx0XHRcdGlmICgrK3JlamVjdE51bSA9PT0gMSkge1xyXG5cdFx0XHRcdGRvUmVqZWN0KHJlYXNvbik7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhYmxlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBwID0gaXRlcmFibGVbaV07XHJcblx0XHRcdGlmICghdGhlbmFibGUocCkpIHtcclxuXHRcdFx0XHQvLyBjYXN0XHJcblx0XHRcdFx0cCA9IFByb21pc2UucmVzb2x2ZShwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRwLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9SZXNvbHZlKCk7XHJcblx0fVxyXG5cdHJldHVybiBwcm9taXNlO1xyXG59O1xyXG5cclxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24oaXRlcmFibGUpIHtcclxuXHR2YXIgZG9SZXNvbHZlLCBkb1JlamVjdCwgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0ZG9SZXNvbHZlID0gcmVzb2x2ZTsgZG9SZWplY3QgPSByZWplY3Q7XHJcblx0fSk7XHJcblx0aWYgKHR5cGUoaXRlcmFibGUpID09PSAnYXJyYXknKSB7XHJcblx0XHR2YXIgZG9uZU51bSA9IDAsXHJcblx0XHRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdFx0aWYgKCsrZG9uZU51bSA9PT0gMSkge1xyXG5cdFx0XHRcdGRvUmVzb2x2ZSh2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRyZWplY3QgPSBmdW5jdGlvbihyZWFzb24pIHtcclxuXHRcdFx0aWYgKCsrZG9uZU51bSA9PT0gMSkge1xyXG5cdFx0XHRcdGRvUmVqZWN0KHJlYXNvbik7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhYmxlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh0aGVuYWJsZShpdGVyYWJsZVtpXSkpIHtcclxuXHRcdFx0XHRpdGVyYWJsZVtpXS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHByb21pc2U7XHJcbn07XHJcblxyXG5cclxuLy9Qcm9taXNlLm5hbWUgPSAnUHJvbWlzZSc7XHJcblxyXG5pZiAodHlwZW9mKHdpbmRvdykgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0UHJvbWlzZS5fcHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlO1xyXG5cdHdpbmRvdy5Qcm9taXNlID0gUHJvbWlzZTtcclxufVxyXG5pZiAodHlwZW9mKG1vZHVsZSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0bW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xyXG59XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnJhcmllc1xcXFxydWxlZS1wcm9taXNlLmpzXCIsXCIvbGlicmFyaWVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiB0ZXN0c1xyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBbXHJcblx0cmVxdWlyZSgnLi90ZXN0MS9hbGwnKS5uYW1lXHJcbl07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3Rlc3RzXFxcXGFsbC5qc1wiLFwiL3Rlc3RzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiB0ZXN0MVxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxudmFyIG5hbWUgPSBtb2R1bGUuZXhwb3J0cy5uYW1lID0gJ0Jsb2dhLnRlc3QxJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtdKVxyXG4ucHJvdmlkZXIoJ3Rlc3RQcm92aWRlcicsIHJlcXVpcmUoJy4vdGVzdDEtcHJvdmlkZXInKSlcclxuLmZhY3RvcnkoJ3Rlc3RGYWN0b3J5JywgcmVxdWlyZSgnLi90ZXN0MS1mYWN0b3J5JykpXHJcbi5zZXJ2aWNlKCd0ZXN0U2VydmljZScsIHJlcXVpcmUoJy4vdGVzdDEtc2VydmljZScpKTtcclxuXHJcbi8qXHJcblxyXG5odHRwOi8vd3d3LmNuYmxvZ3MuY29tL3N0YW56aHUvcC8zMTg2NjkwLmh0bWxcclxuXHJcbuivtOaYju+8mlxyXG5cclxu5rOo5YWlcHJvdmlkZXLvvIznm7jlvZPkuo7ms6jlhaVwcm92aWRlcuWGhSRnZXTlrprkuYnnmoTlh73mlbDlrp7kvovnmoTosIPnlKjjgIJcclxuXHJcbuazqOWFpWZhY3RvcnnvvIznm7jlvZPkuo7ms6jlhaVmYWN0b3J55a6a5LmJ5pe255qE5Ye95pWw6LCD55So5YWl5Y+j44CCXHJcblxyXG7ms6jlhaVzZXJ2aWNl77yM55u45b2T5LqO5rOo5YWlc2VydmljZeWumuS5ieaXtueahGZ1bmN0aW9u5a6e5L6L44CCXHJcblxyXG5cclxuXHJcbnByb3ZpZGVyIOaYr+WfuuehgOaWueazle+8jFxyXG5mYWN0b3J5IOaYr+WvuXByb3ZpZGVy55qE5bCB6KOFXHJcbnNlcnZpY2Ug5piv5a+5ZmFjdG9yeeeahOWwgeijhVxyXG5cclxuZnVuY3Rpb24gcHJvdmlkZXIobmFtZSwgcHJvdmlkZXJfKSB7XHJcblx0aWYgKGlzRnVuY3Rpb24ocHJvdmlkZXJfKSB8fCBpc0FycmF5KHByb3ZpZGVyXykpIHsgLy/liKTmlq3mmK/lh73mlbDov5jmmK/mlbDnu4RcclxuXHRcdHByb3ZpZGVyXyA9IHByb3ZpZGVySW5qZWN0b3IuaW5zdGFudGlhdGUocHJvdmlkZXJfKTtcclxuXHR9XHJcblx0aWYgKCFwcm92aWRlcl8uJGdldCkge1xyXG5cdFx0dGhyb3cgRXJyb3IoJ1Byb3ZpZGVyICcgKyBuYW1lICsgJyBtdXN0IGRlZmluZSAkZ2V0IGZhY3RvcnkgbWV0aG9kLicpO1xyXG5cdH1cclxuXHRyZXR1cm4gcHJvdmlkZXJDYWNoZVtuYW1lICsgcHJvdmlkZXJTdWZmaXhdID0gcHJvdmlkZXJfO1xyXG59XHJcbiBcclxuZnVuY3Rpb24gZmFjdG9yeShuYW1lLCBmYWN0b3J5Rm4pIHtcclxuXHRyZXR1cm4gcHJvdmlkZXIobmFtZSwgeyAkZ2V0OiBmYWN0b3J5Rm4gfSk7XHJcbn1cclxuIFxyXG4gXHJcbmZ1bmN0aW9uIHNlcnZpY2UobmFtZSwgY29uc3RydWN0b3IpIHtcclxuXHRyZXR1cm4gZmFjdG9yeShuYW1lLCBbJyRpbmplY3RvcicsIGZ1bmN0aW9uKCRpbmplY3Rvcikge1xyXG5cdFx0cmV0dXJuICRpbmplY3Rvci5pbnN0YW50aWF0ZShjb25zdHJ1Y3Rvcik7XHJcblx0fV0pO1xyXG59XHJcblxyXG4qL1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi90ZXN0c1xcXFx0ZXN0MVxcXFxhbGwuanNcIixcIi90ZXN0c1xcXFx0ZXN0MVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogZmFjdG9yeVxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHRyZXR1cm4gJ3RoaXMgaXMgZmFjdG9yeSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi90ZXN0c1xcXFx0ZXN0MVxcXFx0ZXN0MS1mYWN0b3J5LmpzXCIsXCIvdGVzdHNcXFxcdGVzdDFcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIHByb3ZpZGVyXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy4kZ2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuICd0aGlzIGlzIHByb3ZpZGVyJztcclxuICAgIH07XHJcbn07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3Rlc3RzXFxcXHRlc3QxXFxcXHRlc3QxLXByb3ZpZGVyLmpzXCIsXCIvdGVzdHNcXFxcdGVzdDFcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIHNlcnZpY2VcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcclxuICAgICB0aGlzLmxhYmVsID0gJ3RoaXMgaXMgc2VydmljZSc7XHJcbn07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3Rlc3RzXFxcXHRlc3QxXFxcXHRlc3QxLXNlcnZpY2UuanNcIixcIi90ZXN0c1xcXFx0ZXN0MVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogdXRpbGl0aWVzXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG52YXIgcGFkTGVmdCA9IGZ1bmN0aW9uKHN0ciwgbGVuLCBjaHIsIHJldmVyc2UpIHtcclxuXHRpZiAoc3RyICE9PSBudWxsICYmIHN0ciAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRzdHIgPSBzdHIgKyAnJzsgdmFyIG51bSA9IGxlbiAtIHN0ci5sZW5ndGg7XHJcblx0XHRpZiAobnVtID4gMCkge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKHJldmVyc2UgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdHN0ciA9IHN0ciArIGNocjtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c3RyID0gY2hyICsgc3RyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gc3RyO1xyXG59O1xyXG5cclxudmFyIHJlYWRPYmogPSBmdW5jdGlvbihvYmosIG5hbWVzcGFjZSkge1xyXG4gICAgdmFyIG5hbWVzID0gbmFtZXNwYWNlLnNwbGl0KC9cXC58XFxbfFxcXXxcXCgvKSwgcmV0ID0gb2JqO1xyXG4gICAgYW5ndWxhci5mb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5LCBpKSB7IGlmIChrZXkgJiYgcmV0KSB7IHJldCA9IChpc05hTihrZXkpID8gKGtleSA9PT0gJyknID8gcmV0KCkgOiByZXRba2V5XSkgOiByZXRbcGFyc2VJbnQoa2V5LCAxMCldKTsgfSB9KTtcclxuICAgIHJldHVybiByZXQ7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcblx0YXJnMmFycjogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgc3BsaWNlID0gQXJyYXkucHJvdG90eXBlLnNwbGljZTtcclxuXHRcdHJldHVybiBmdW5jdGlvbihhcmdzLCBza2lwKSB7XHJcblx0XHRcdHJldHVybiBzcGxpY2UuY2FsbChhcmdzLCBza2lwIHx8IDApO1xyXG5cdFx0fTtcclxuXHR9KCksXHJcblxyXG5cdHR5cGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG9wID0gT2JqZWN0LnByb3RvdHlwZTtcclxuXHRcdHZhciBjbGFzczJ0eXBlID0ge30sIG5hdGl2ZXMgPSAnQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvcicuc3BsaXQoJyAnKTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbmF0aXZlcy5sZW5ndGg7IGkrKykge2NsYXNzMnR5cGVbJ1tvYmplY3QgJyArIG5hdGl2ZXNbaV0gKyAnXSddID0gbmF0aXZlc1tpXS50b0xvd2VyQ2FzZSgpOyB9XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiBvYmogPT0gbnVsbCA/IFN0cmluZyhvYmopIDogY2xhc3MydHlwZVtvcC50b1N0cmluZy5jYWxsKG9iaildIHx8ICdvYmplY3QnO1xyXG5cdFx0fTtcclxuXHR9KCksXHJcblxyXG5cdGlzQW5jZXN0b3I6IGZ1bmN0aW9uIChwLCBjKSB7XHJcbiAgICAgICAgdmFyIHJldCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChwICYmIGMpIHtcclxuICAgICAgICAgICAgaWYgKHAuY29udGFpbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwLmNvbnRhaW5zKGMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHAuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhIShwLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGMpICYgMTYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGMgPSBjLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQgPSBjID09IHAgfHwgcmV0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9LFxyXG5cclxuXHRwYWRMZWZ0OiBwYWRMZWZ0LFxyXG5cclxuXHRwYWRSaWdodDogZnVuY3Rpb24oc3RyLCBsZW4sIGNocikge1xyXG5cdFx0cmV0dXJuIHBhZExlZnQoc3RyLCBsZW4sIGNociwgdHJ1ZSk7XHJcblx0fSxcclxuXHJcblx0dmlld1VybDogZnVuY3Rpb24gKHVybCl7XHJcblx0XHRyZXR1cm4gdXJsO1xyXG5cdH0sXHJcblxyXG5cdHJlYWRPYmo6IHJlYWRPYmosXHJcblxyXG5cdGkxOG46IGZ1bmN0aW9uKGtleSwgdmFsKSB7XHJcblx0XHR2YXIgZ2V0VmFsID0gcmVhZE9iaih7fSwga2V5KTtcclxuXHRcdHJldHVybiBnZXRWYWwgIT09IHVuZGVmaW5lZCA/IGdldFZhbCA6IHZhbDtcclxuXHR9LFxyXG5cclxuXHRkb206IHtcclxuXHRcdHBhcnNlVXJsOiByZXF1aXJlKCcuL2RvbS9wYXJzZVVybCcpLFxyXG5cdFx0aGFzU2Nyb2xsOiByZXF1aXJlKCcuL2RvbS9oYXNTY3JvbGwnKSxcclxuXHRcdHNjcm9sbGJhcldpZHRoOiByZXF1aXJlKCcuL2RvbS9zY3JvbGxiYXJXaWR0aCcpXHJcblx0fVxyXG59O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi91dGlsaXRpZXNcXFxcYWxsLmpzXCIsXCIvdXRpbGl0aWVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBoYXNTY3JvbGxcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjIyXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAvLyB0ZXN0IHRhcmdldHNcclxuICAgIHZhciBlbGVtcyA9IGVsID8gW2VsXSA6IFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldO1xyXG4gICAgdmFyIHNjcm9sbFggPSBmYWxzZSwgc2Nyb2xsWSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBvID0gZWxlbXNbaV07XHJcbiAgICAgICAgLy8gdGVzdCBob3Jpem9udGFsXHJcbiAgICAgICAgdmFyIHNsID0gby5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIG8uc2Nyb2xsTGVmdCArPSAoc2wgPiAwKSA/IC0xIDogMTtcclxuICAgICAgICBvLnNjcm9sbExlZnQgIT09IHNsICYmIChzY3JvbGxYID0gc2Nyb2xsWCB8fCB0cnVlKTtcclxuICAgICAgICBvLnNjcm9sbExlZnQgPSBzbDtcclxuICAgICAgICAvLyB0ZXN0IHZlcnRpY2FsXHJcbiAgICAgICAgdmFyIHN0ID0gby5zY3JvbGxUb3A7XHJcbiAgICAgICAgby5zY3JvbGxUb3AgKz0gKHN0ID4gMCkgPyAtMSA6IDE7XHJcbiAgICAgICAgby5zY3JvbGxUb3AgIT09IHN0ICYmIChzY3JvbGxZID0gc2Nyb2xsWSB8fCB0cnVlKTtcclxuICAgICAgICBvLnNjcm9sbFRvcCA9IHN0O1xyXG4gICAgfVxyXG4gICAgLy8gcmV0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNjcm9sbFg6IHNjcm9sbFgsXHJcbiAgICAgICAgc2Nyb2xsWTogc2Nyb2xsWVxyXG4gICAgfTtcclxufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdXRpbGl0aWVzXFxcXGRvbVxcXFxoYXNTY3JvbGwuanNcIixcIi91dGlsaXRpZXNcXFxcZG9tXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBwYXJzZVVybFxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuMjJcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLmhyZWYgPSB1cmw7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNvdXJjZTogdXJsLFxyXG4gICAgICAgIHByb3RvY29sOiBhLnByb3RvY29sLnJlcGxhY2UoJzonLCAnJyksXHJcbiAgICAgICAgaG9zdDogYS5ob3N0bmFtZSxcclxuICAgICAgICBwb3J0OiBhLnBvcnQsXHJcbiAgICAgICAgcXVlcnk6IGEuc2VhcmNoLFxyXG4gICAgICAgIHBhcmFtczogKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJldCA9IHt9LFxyXG4gICAgICAgICAgICBzZWcgPSBhLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpLnNwbGl0KCcmJyksXHJcbiAgICAgICAgICAgIGxlbiA9IHNlZy5sZW5ndGgsIGkgPSAwLCBzO1xyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlZ1tpXSkgeyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgcyA9IHNlZ1tpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgcmV0W3NbMF1dID0gc1sxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH0pKCksXHJcbiAgICAgICAgZmlsZTogKGEucGF0aG5hbWUubWF0Y2goL1xcLyhbXlxcLz8jXSspJC9pKSB8fCBbLCAnJ10pWzFdLFxyXG4gICAgICAgIGhhc2g6IGEuaGFzaC5yZXBsYWNlKCcjJywgJycpLFxyXG4gICAgICAgIHBhdGg6IGEucGF0aG5hbWUucmVwbGFjZSgvXihbXlxcL10pLywgJy8kMScpLFxyXG4gICAgICAgIHJlbGF0aXZlOiAoYS5ocmVmLm1hdGNoKC90cHM/OlxcL1xcL1teXFwvXSsoLispLykgfHwgWywgJyddKVsxXSxcclxuICAgICAgICBzZWdtZW50czogYS5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJylcclxuICAgIH07XHJcbn07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3V0aWxpdGllc1xcXFxkb21cXFxccGFyc2VVcmwuanNcIixcIi91dGlsaXRpZXNcXFxcZG9tXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBzY3JvbGxiYXIgd2lkdGhcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjIyXHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyBmaXggb3BlcmEgYnVnOiBwdXQgc3R5bGUgKHBvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OTlweDspIHRvIGhpZGUgdGhlIHRlc3QgZGl2LCBvciB0aGUgcGFnZSB3b3VsZCBiZSBmbGFzaGVkLlxyXG4gICAgaGVscGVyLnN0eWxlLmNzc1RleHQgPSAnb3ZlcmZsb3c6c2Nyb2xsO3dpZHRoOjEwMHB4O2hlaWdodDoxMDBweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTk5OTk5cHg7JztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVscGVyKTtcclxuICAgIHZhciByZXQgPSB7XHJcbiAgICAgICAgdmVydGljYWw6IGhlbHBlci5vZmZzZXRXaWR0aCAtIGhlbHBlci5jbGllbnRXaWR0aCxcclxuICAgICAgICBob3Jpem9udGFsOiBoZWxwZXIub2Zmc2V0SGVpZ2h0IC0gaGVscGVyLmNsaWVudEhlaWdodFxyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaGVscGVyKTtcclxuICAgIHJldHVybiByZXQ7XHJcbn0pKCk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3V0aWxpdGllc1xcXFxkb21cXFxcc2Nyb2xsYmFyV2lkdGguanNcIixcIi91dGlsaXRpZXNcXFxcZG9tXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MlxuXG4vKipcbiAqIElmIGBCdWZmZXIuX3VzZVR5cGVkQXJyYXlzYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKGNvbXBhdGlibGUgZG93biB0byBJRTYpXG4gKi9cbkJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBEZXRlY3QgaWYgYnJvd3NlciBzdXBwb3J0cyBUeXBlZCBBcnJheXMuIFN1cHBvcnRlZCBicm93c2VycyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLFxuICAvLyBDaHJvbWUgNyssIFNhZmFyaSA1LjErLCBPcGVyYSAxMS42KywgaU9TIDQuMisuIElmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWRkaW5nXG4gIC8vIHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcywgdGhlbiB0aGF0J3MgdGhlIHNhbWUgYXMgbm8gYFVpbnQ4QXJyYXlgIHN1cHBvcnRcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gYWRkIGFsbCB0aGUgbm9kZSBCdWZmZXIgQVBJIG1ldGhvZHMuIFRoaXMgaXMgYW4gaXNzdWVcbiAgLy8gaW4gRmlyZWZveCA0LTI5LiBOb3cgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOFxuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiZcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAvLyBDaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gV29ya2Fyb3VuZDogbm9kZSdzIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgc3RyaW5nc1xuICAvLyB3aGlsZSBiYXNlNjQtanMgZG9lcyBub3QuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcgJiYgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdWJqZWN0ID0gc3RyaW5ndHJpbShzdWJqZWN0KVxuICAgIHdoaWxlIChzdWJqZWN0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0ICsgJz0nXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0KVxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QubGVuZ3RoKSAvLyBhc3N1bWUgdGhhdCBvYmplY3QgaXMgYXJyYXktbGlrZVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICBlbHNlXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3RbaV1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPT0gbnVsbCAmJiBiICE9PSB1bmRlZmluZWQgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdCwgW3RvdGFsTGVuZ3RoXSlcXG4nICtcbiAgICAgICdsaXN0IHNob3VsZCBiZSBhbiBBcnJheS4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB0b3RhbExlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gX2hleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgYXNzZXJ0KHN0ckxlbiAlIDIgPT09IDAsICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBhc3NlcnQoIWlzTmFOKGJ5dGUpLCAnSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPSBpICogMlxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBfdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2FzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2JpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIF9hc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcbiAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpIHx8IDBcbiAgZW5kID0gKGVuZCAhPT0gdW5kZWZpbmVkKVxuICAgID8gTnVtYmVyKGVuZClcbiAgICA6IGVuZCA9IHNlbGYubGVuZ3RoXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKylcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gX2JpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIF9hc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gX2hleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSsxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSBjbGFtcChzdGFydCwgbGVuLCAwKVxuICBlbmQgPSBjbGFtcChlbmQsIGxlbiwgbGVuKVxuXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsXG4gICAgICAgICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICB2YXIgbmVnID0gdGhpc1tvZmZzZXRdICYgMHg4MFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MzIoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMDAwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZmZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmxvYXQgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWREb3VibGUgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAgICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQzMihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCxcbiAgICAgICAgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpLCAndmFsdWUgaXMgbm90IGEgbnVtYmVyJylcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHRoaXNbaV0gPSB2YWx1ZVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpXG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxuLy8gc2xpY2Uoc3RhcnQsIGVuZClcbmZ1bmN0aW9uIGNsYW1wIChpbmRleCwgbGVuLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgaW5kZXggPSB+fmluZGV4OyAgLy8gQ29lcmNlIHRvIGludGVnZXIuXG4gIGlmIChpbmRleCA+PSBsZW4pIHJldHVybiBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICBpbmRleCArPSBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBjb2VyY2UgKGxlbmd0aCkge1xuICAvLyBDb2VyY2UgbGVuZ3RoIHRvIGEgbnVtYmVyIChwb3NzaWJseSBOYU4pLCByb3VuZCB1cFxuICAvLyBpbiBjYXNlIGl0J3MgZnJhY3Rpb25hbCAoZS5nLiAxMjMuNDU2KSB0aGVuIGRvIGFcbiAgLy8gZG91YmxlIG5lZ2F0ZSB0byBjb2VyY2UgYSBOYU4gdG8gMC4gRWFzeSwgcmlnaHQ/XG4gIGxlbmd0aCA9IH5+TWF0aC5jZWlsKCtsZW5ndGgpXG4gIHJldHVybiBsZW5ndGggPCAwID8gMCA6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChzdWJqZWN0KSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfSkoc3ViamVjdClcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3RilcbiAgICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKylcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgcG9zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuXG4vKlxuICogV2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgaXMgYSB2YWxpZCBpbnRlZ2VyLiBUaGlzIG1lYW5zIHRoYXQgaXRcbiAqIGlzIG5vbi1uZWdhdGl2ZS4gSXQgaGFzIG5vIGZyYWN0aW9uYWwgY29tcG9uZW50IGFuZCB0aGF0IGl0IGRvZXMgbm90XG4gKiBleGNlZWQgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gdmVyaWZ1aW50ICh2YWx1ZSwgbWF4KSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA+PSAwLCAnc3BlY2lmaWVkIGEgbmVnYXRpdmUgdmFsdWUgZm9yIHdyaXRpbmcgYW4gdW5zaWduZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgaXMgbGFyZ2VyIHRoYW4gbWF4aW11bSB2YWx1ZSBmb3IgdHlwZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmc2ludCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmSUVFRTc1NCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAodGVzdCwgbWVzc2FnZSkge1xuICBpZiAoIXRlc3QpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQgYXNzZXJ0aW9uJylcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcZ3VscC1icm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxicm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxidWZmZXJcXFxcaW5kZXguanNcIixcIi8uLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcZ3VscC1icm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxicm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxidWZmZXJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG52YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFpFUk8gICA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUylcblx0XHRcdHJldHVybiA2MiAvLyAnKydcblx0XHRpZiAoY29kZSA9PT0gU0xBU0gpXG5cdFx0XHRyZXR1cm4gNjMgLy8gJy8nXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIpXG5cdFx0XHRyZXR1cm4gLTEgLy9ubyBtYXRjaFxuXHRcdGlmIChjb2RlIDwgTlVNQkVSICsgMTApXG5cdFx0XHRyZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjZcblx0XHRpZiAoY29kZSA8IFVQUEVSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIFVQUEVSXG5cdFx0aWYgKGNvZGUgPCBMT1dFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2XG5cdH1cblxuXHRmdW5jdGlvbiBiNjRUb0J5dGVBcnJheSAoYjY0KSB7XG5cdFx0dmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcblxuXHRcdGlmIChiNjQubGVuZ3RoICUgNCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcblx0XHQvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG5cdFx0Ly8gcmVwcmVzZW50IG9uZSBieXRlXG5cdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuXHRcdHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cdFx0cGxhY2VIb2xkZXJzID0gJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDIpID8gMiA6ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAxKSA/IDEgOiAwXG5cblx0XHQvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcblx0XHRhcnIgPSBuZXcgQXJyKGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuXHRcdC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcblx0XHRsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NC5sZW5ndGggLSA0IDogYjY0Lmxlbmd0aFxuXG5cdFx0dmFyIEwgPSAwXG5cblx0XHRmdW5jdGlvbiBwdXNoICh2KSB7XG5cdFx0XHRhcnJbTCsrXSA9IHZcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDE4KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDEyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpIDw8IDYpIHwgZGVjb2RlKGI2NC5jaGFyQXQoaSArIDMpKVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwMDApID4+IDE2KVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwKSA+PiA4KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA+PiA0KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDEwKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDQpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPj4gMilcblx0XHRcdHB1c2goKHRtcCA+PiA4KSAmIDB4RkYpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cblx0ZnVuY3Rpb24gdWludDhUb0Jhc2U2NCAodWludDgpIHtcblx0XHR2YXIgaSxcblx0XHRcdGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzLCAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuXHRcdFx0b3V0cHV0ID0gXCJcIixcblx0XHRcdHRlbXAsIGxlbmd0aFxuXG5cdFx0ZnVuY3Rpb24gZW5jb2RlIChudW0pIHtcblx0XHRcdHJldHVybiBsb29rdXAuY2hhckF0KG51bSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShudW0gPj4gMTggJiAweDNGKSArIGVuY29kZShudW0gPj4gMTIgJiAweDNGKSArIGVuY29kZShudW0gPj4gNiAmIDB4M0YpICsgZW5jb2RlKG51bSAmIDB4M0YpXG5cdFx0fVxuXG5cdFx0Ly8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuXHRcdGZvciAoaSA9IDAsIGxlbmd0aCA9IHVpbnQ4Lmxlbmd0aCAtIGV4dHJhQnl0ZXM7IGkgPCBsZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0dGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcblx0XHRcdG91dHB1dCArPSB0cmlwbGV0VG9CYXNlNjQodGVtcClcblx0XHR9XG5cblx0XHQvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG5cdFx0c3dpdGNoIChleHRyYUJ5dGVzKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPT0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyAodWludDhbdWludDgubGVuZ3RoIC0gMV0pXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMClcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA+PiA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgMikgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG5cblx0bW9kdWxlLmV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRtb2R1bGUuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSgpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJ1ZmZlclxcXFxub2RlX21vZHVsZXNcXFxcYmFzZTY0LWpzXFxcXGxpYlxcXFxiNjQuanNcIixcIi8uLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcZ3VscC1icm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxicm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxidWZmZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhc2U2NC1qc1xcXFxsaWJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcZ3VscC1icm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxicm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxidWZmZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGllZWU3NTRcXFxcaW5kZXguanNcIixcIi8uLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcZ3VscC1icm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxicm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxidWZmZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGllZWU3NTRcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcZ3VscC1icm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxicm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxwcm9jZXNzXFxcXGJyb3dzZXIuanNcIixcIi8uLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcZ3VscC1icm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxicm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxwcm9jZXNzXCIpIl19
