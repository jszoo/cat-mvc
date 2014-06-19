(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* controllers
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'rulee.controllers';

angular.module(name, [])
.controller('MainCtrl', require('./main-controller'))
.controller('HomeCtrl', require('./home-controller'));
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers\\all.js","/controllers")
},{"./home-controller":2,"./main-controller":3,"buffer":29,"ngpmcQ":32}],2:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],3:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* data service
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'rulee.dataService';

angular.module(name, [])
.factory('Blogs', require('./blog-service'));
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/dataservice\\all.js","/dataservice")
},{"./blog-service":5,"buffer":29,"ngpmcQ":32}],5:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* directives
* author: ronglin
* create date: 2014.5.4
*/

var name = module.exports.name = 'rulee.directives';

angular.module(name, [])
.directive('ruleeHeader', require('./header'))
.directive('ruleeFooter', require('./footer'))
.directive('ruleeMenu', require('./menu'))
.directive('imgSrc', require('./imgsrc'));
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives\\all.js","/directives")
},{"./footer":7,"./header":8,"./imgsrc":9,"./menu":10,"buffer":29,"ngpmcQ":32}],7:[function(require,module,exports){
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
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives\\footer.js","/directives")
},{"buffer":29,"ngpmcQ":32}],8:[function(require,module,exports){
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
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives\\header.js","/directives")
},{"buffer":29,"ngpmcQ":32}],9:[function(require,module,exports){
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
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives\\imgsrc.js","/directives")
},{"buffer":29,"ngpmcQ":32}],10:[function(require,module,exports){
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
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/directives\\menu.js","/directives")
},{"buffer":29,"ngpmcQ":32}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* main
* author: ronglin
* create date: 2014.4.22
*/

'use strict';

require('./libraries/all');
var utilitiesName = 'rulee.utilities';
angular.module(utilitiesName, []).constant('utils', require('./utilities/all'));

var filters = require('./filters/all');
var directives = require('./directives/all');
var dataService = require('./dataservice/all');
var controllers = require('./controllers/all');
var tests = require('./tests/all');

var rulee = angular.module('rulee', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    utilitiesName,
    filters.name,
    directives.name,
    dataService.name,
    controllers.name
].concat(tests));

rulee.config(['$routeProvider', 'utils', function ($routeProvider, utils) {
    $routeProvider.when('/home', { templateUrl: utils.viewUrl('views/home.html'), controller: 'HomeCtrl' });
    $routeProvider.when('/about', { templateUrl: utils.viewUrl('views/about.html') });
    $routeProvider.when('/admin', { templateUrl: utils.viewUrl('views/admin.html') });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);

}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_ca816333.js","/")
},{"./controllers/all":1,"./dataservice/all":4,"./directives/all":6,"./filters/all":12,"./libraries/all":14,"./tests/all":21,"./utilities/all":26,"buffer":29,"ngpmcQ":32}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* filters
* author: ronglin
* create date: 2014.6.18
*/

var name = module.exports.name = 'rulee.filters';

angular.module(name, [])
.filter('i18n', require('./i18n'));
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/filters\\all.js","/filters")
},{"./i18n":13,"buffer":29,"ngpmcQ":32}],13:[function(require,module,exports){
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
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/filters\\i18n.js","/filters")
},{"buffer":29,"ngpmcQ":32}],14:[function(require,module,exports){
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
},{"./angular-animate.min":15,"./angular-resource.min":16,"./angular-route.min":17,"./angular-touch.min":18,"./angular.min":19,"./rulee-promise":20,"buffer":29,"ngpmcQ":32}],15:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],16:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],17:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],18:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],19:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],20:[function(require,module,exports){
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
},{"../utilities/all":26,"buffer":29,"ngpmcQ":32}],21:[function(require,module,exports){
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
},{"./test1/all":22,"buffer":29,"ngpmcQ":32}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/tests\\test1\\all.js","/tests\\test1")
},{"./test1-factory":23,"./test1-provider":24,"./test1-service":25,"buffer":29,"ngpmcQ":32}],23:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],24:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],25:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],26:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
* utilities
* author: ronglin
* create date: 2014.5.4
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
        angular.forEach(names, function (key, i) { if (key && ret) { ret = (isNaN(key) ? (key === ')' ? ret() : ret[key]) : ret[parseInt(key, 10)]); } });
        return ret;
    },

    dom: {
        parseUrl: require('./dom/parseUrl'),
        hasScroll: require('./dom/hasScroll'),
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

    viewUrl: function (url){
        return url;
    },

    i18n: function(key, val) {
        var getVal = this.readObj({}, key);
        return getVal !== undefined ? getVal : val;
    }
};
}).call(this,require("ngpmcQ"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utilities\\all.js","/utilities")
},{"./dom/hasScroll":27,"./dom/parseUrl":28,"buffer":29,"ngpmcQ":32}],27:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],28:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],29:[function(require,module,exports){
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
},{"base64-js":30,"buffer":29,"ieee754":31,"ngpmcQ":32}],30:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],31:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}],32:[function(require,module,exports){
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
},{"buffer":29,"ngpmcQ":32}]},{},[11])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJFOlxcVGVjaG5vbG9neVxcamRcXHJ1bGVlXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL2FwcC9qcy9jb250cm9sbGVycy9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL2FwcC9qcy9jb250cm9sbGVycy9ob21lLWNvbnRyb2xsZXIuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL2FwcC9qcy9jb250cm9sbGVycy9tYWluLWNvbnRyb2xsZXIuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL2FwcC9qcy9kYXRhc2VydmljZS9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL2FwcC9qcy9kYXRhc2VydmljZS9ibG9nLXNlcnZpY2UuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL2FwcC9qcy9kaXJlY3RpdmVzL2FsbC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL2RpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ydWxlZS9hcHAvanMvZGlyZWN0aXZlcy9oZWFkZXIuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL2FwcC9qcy9kaXJlY3RpdmVzL2ltZ3NyYy5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL2RpcmVjdGl2ZXMvbWVudS5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL2Zha2VfY2E4MTYzMzMuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL2FwcC9qcy9maWx0ZXJzL2FsbC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL2ZpbHRlcnMvaTE4bi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL2xpYnJhcmllcy9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL2FwcC9qcy9saWJyYXJpZXMvYW5ndWxhci1hbmltYXRlLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLXJlc291cmNlLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLXJvdXRlLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLXRvdWNoLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL2xpYnJhcmllcy9hbmd1bGFyLm1pbi5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL2xpYnJhcmllcy9ydWxlZS1wcm9taXNlLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ydWxlZS9hcHAvanMvdGVzdHMvYWxsLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ydWxlZS9hcHAvanMvdGVzdHMvdGVzdDEvYWxsLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ydWxlZS9hcHAvanMvdGVzdHMvdGVzdDEvdGVzdDEtZmFjdG9yeS5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL3Rlc3RzL3Rlc3QxL3Rlc3QxLXByb3ZpZGVyLmpzIiwiRTovVGVjaG5vbG9neS9qZC9ydWxlZS9hcHAvanMvdGVzdHMvdGVzdDEvdGVzdDEtc2VydmljZS5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL3V0aWxpdGllcy9hbGwuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL2FwcC9qcy91dGlsaXRpZXMvZG9tL2hhc1Njcm9sbC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvYXBwL2pzL3V0aWxpdGllcy9kb20vcGFyc2VVcmwuanMiLCJFOi9UZWNobm9sb2d5L2pkL3J1bGVlL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIkU6L1RlY2hub2xvZ3kvamQvcnVsZWUvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiRTovVGVjaG5vbG9neS9qZC9ydWxlZS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdmxDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogY29udHJvbGxlcnNcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbnZhciBuYW1lID0gbW9kdWxlLmV4cG9ydHMubmFtZSA9ICdydWxlZS5jb250cm9sbGVycyc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShuYW1lLCBbXSlcclxuLmNvbnRyb2xsZXIoJ01haW5DdHJsJywgcmVxdWlyZSgnLi9tYWluLWNvbnRyb2xsZXInKSlcclxuLmNvbnRyb2xsZXIoJ0hvbWVDdHJsJywgcmVxdWlyZSgnLi9ob21lLWNvbnRyb2xsZXInKSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbnRyb2xsZXJzXFxcXGFsbC5qc1wiLFwiL2NvbnRyb2xsZXJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBob21lLWNvbnRyb2xsZXJcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gWyckc2NvcGUnLCAnQmxvZ3MnLCBmdW5jdGlvbiAoJHNjb3BlLCBCbG9ncykge1xyXG4gICAgJHNjb3BlLmJsb2dzID0gQmxvZ3MucXVlcnkoMjApO1xyXG59XTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29udHJvbGxlcnNcXFxcaG9tZS1jb250cm9sbGVyLmpzXCIsXCIvY29udHJvbGxlcnNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIG1haW4tY29udHJvbGxlclxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBbJyRzY29wZScsICckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGxvY2F0aW9uJywgJ3Rlc3RTZXJ2aWNlJywgJ3Rlc3RGYWN0b3J5JywgJ3Rlc3RQcm92aWRlcicsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsICR3aW5kb3csICRsb2NhdGlvbiwgdGVzdFNlcnZpY2UsIHRlc3RGYWN0b3J5LCB0ZXN0UHJvdmlkZXIpIHtcclxuICAgICRzY29wZS5zbGlkZSA9ICcnO1xyXG4gICAgJHJvb3RTY29wZS5iYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zbGlkZSA9ICdzbGlkZS1yaWdodCc7XHJcbiAgICAgICAgJHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH07XHJcbiAgICAkcm9vdFNjb3BlLmdvID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICAkc2NvcGUuc2xpZGUgPSAnc2xpZGUtbGVmdCc7XHJcbiAgICAgICAgJGxvY2F0aW9uLnVybChwYXRoKTtcclxuICAgIH07XHJcbiAgICB2YXIgdGVzdEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRlc3RFbmFibGVkKSB7XHJcbiAgICBcdCRyb290U2NvcGUudGVzdEVuYWJsZWQgPSB0ZXN0RW5hYmxlZDtcclxuICAgIFx0JHJvb3RTY29wZS50ZXN0cyA9IHtcclxuICAgICAgICAgICAgcHJvdmlkZXI6IHRlc3RQcm92aWRlcixcclxuICAgIFx0XHRmYWN0b3J5OiB0ZXN0RmFjdG9yeS5sYWJlbCgpLFxyXG4gICAgXHRcdHNlcnZpY2U6IHRlc3RTZXJ2aWNlLmxhYmVsXHJcbiAgICBcdH07XHJcbiAgICB9XHJcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb250cm9sbGVyc1xcXFxtYWluLWNvbnRyb2xsZXIuanNcIixcIi9jb250cm9sbGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogZGF0YSBzZXJ2aWNlXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG52YXIgbmFtZSA9IG1vZHVsZS5leHBvcnRzLm5hbWUgPSAncnVsZWUuZGF0YVNlcnZpY2UnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobmFtZSwgW10pXHJcbi5mYWN0b3J5KCdCbG9ncycsIHJlcXVpcmUoJy4vYmxvZy1zZXJ2aWNlJykpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kYXRhc2VydmljZVxcXFxhbGwuanNcIixcIi9kYXRhc2VydmljZVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogYmxvZy1zZXJ2aWNlXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFtmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHF1ZXJ5OiBmdW5jdGlvbiAodGFrZSkge1xyXG4gICAgICAgIFx0cmV0dXJuIFt7XHJcbiAgICAgICAgXHRcdHRpdGxlOid0aXRsZTEnLFxyXG4gICAgICAgIFx0XHRjb250ZW50Oidjb250ZW50MSdcclxuICAgICAgICBcdH0se1xyXG4gICAgICAgIFx0XHR0aXRsZTondGl0bGUyJyxcclxuICAgICAgICBcdFx0Y29udGVudDonY29udGVudDInXHJcbiAgICAgICAgXHR9LHtcclxuICAgICAgICBcdFx0dGl0bGU6J3RpdGxlMycsXHJcbiAgICAgICAgXHRcdGNvbnRlbnQ6J2NvbnRlbnQzJ1xyXG4gICAgICAgIFx0fSx7XHJcbiAgICAgICAgXHRcdHRpdGxlOid0aXRsZTQnLFxyXG4gICAgICAgIFx0XHRjb250ZW50Oidjb250ZW50NCdcclxuICAgICAgICBcdH0se1xyXG4gICAgICAgIFx0XHR0aXRsZTondGl0bGU1JyxcclxuICAgICAgICBcdFx0Y29udGVudDonY29udGVudDUnXHJcbiAgICAgICAgXHR9XTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZGF0YXNlcnZpY2VcXFxcYmxvZy1zZXJ2aWNlLmpzXCIsXCIvZGF0YXNlcnZpY2VcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIGRpcmVjdGl2ZXNcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbnZhciBuYW1lID0gbW9kdWxlLmV4cG9ydHMubmFtZSA9ICdydWxlZS5kaXJlY3RpdmVzJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtdKVxyXG4uZGlyZWN0aXZlKCdydWxlZUhlYWRlcicsIHJlcXVpcmUoJy4vaGVhZGVyJykpXHJcbi5kaXJlY3RpdmUoJ3J1bGVlRm9vdGVyJywgcmVxdWlyZSgnLi9mb290ZXInKSlcclxuLmRpcmVjdGl2ZSgncnVsZWVNZW51JywgcmVxdWlyZSgnLi9tZW51JykpXHJcbi5kaXJlY3RpdmUoJ2ltZ1NyYycsIHJlcXVpcmUoJy4vaW1nc3JjJykpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kaXJlY3RpdmVzXFxcXGFsbC5qc1wiLFwiL2RpcmVjdGl2ZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIGZvb3RlclxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBbJ3V0aWxzJywgZnVuY3Rpb24odXRpbHMpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dGVtcGxhdGVVcmw6IHV0aWxzLnZpZXdVcmwoJ3ZpZXdzL2RpcmVjdGl2ZXMvZm9vdGVyLmh0bWwnKSxcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlXHJcblx0fTtcclxufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RpcmVjdGl2ZXNcXFxcZm9vdGVyLmpzXCIsXCIvZGlyZWN0aXZlc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogaGVhZGVyXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFsndXRpbHMnLCBmdW5jdGlvbih1dGlscykge1xyXG5cdHJldHVybiB7XHJcblx0XHR0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvZGlyZWN0aXZlcy9oZWFkZXIuaHRtbCcpLFxyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZToge1xyXG5cdFx0XHRjdXJyZW50OiAnQGN1cnJlbnQnXHJcblx0XHR9XHJcblx0fTtcclxufV07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2RpcmVjdGl2ZXNcXFxcaGVhZGVyLmpzXCIsXCIvZGlyZWN0aXZlc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogc3JjXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNi4xOVxyXG4qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBbJ3V0aWxzJywgZnVuY3Rpb24odXRpbHMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICBcdGlmIChlbGVtZW50LnByb3AoJ3RhZ05hbWUnKSA9PT0gJ0lNRycpIHtcclxuICAgICAgICBcdFx0dmFyIGltZyA9IHV0aWxzLnRyaW0oYXR0cnMuaW1nU3JjLCB7IGZpbmQ6ICcvJ30pO1xyXG4gICAgICAgIFx0XHRlbGVtZW50LmF0dHIoJ3NyYycsIHV0aWxzLmZvcm1hdCgnaW1nL3swfScsIGltZykpO1xyXG4gICAgICAgIFx0fVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kaXJlY3RpdmVzXFxcXGltZ3NyYy5qc1wiLFwiL2RpcmVjdGl2ZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIG1lbnVcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC42LjE4XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFsndXRpbHMnLCBmdW5jdGlvbih1dGlscykge1xyXG4gICAgLy8gcmV0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNjb3BlOiB7IGN1cnJlbnQ6ICdAJyB9LFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zaG93UGFnZSA9IGZ1bmN0aW9uKHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5jdXJyZW50ID0gcGFnZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvZGlyZWN0aXZlcy9tZW51Lmh0bWwnKSxcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWVcclxuICAgIH07XHJcbn1dO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9kaXJlY3RpdmVzXFxcXG1lbnUuanNcIixcIi9kaXJlY3RpdmVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBtYWluXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNC4yMlxyXG4qL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxucmVxdWlyZSgnLi9saWJyYXJpZXMvYWxsJyk7XHJcbnZhciB1dGlsaXRpZXNOYW1lID0gJ3J1bGVlLnV0aWxpdGllcyc7XHJcbmFuZ3VsYXIubW9kdWxlKHV0aWxpdGllc05hbWUsIFtdKS5jb25zdGFudCgndXRpbHMnLCByZXF1aXJlKCcuL3V0aWxpdGllcy9hbGwnKSk7XHJcblxyXG52YXIgZmlsdGVycyA9IHJlcXVpcmUoJy4vZmlsdGVycy9hbGwnKTtcclxudmFyIGRpcmVjdGl2ZXMgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvYWxsJyk7XHJcbnZhciBkYXRhU2VydmljZSA9IHJlcXVpcmUoJy4vZGF0YXNlcnZpY2UvYWxsJyk7XHJcbnZhciBjb250cm9sbGVycyA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvYWxsJyk7XHJcbnZhciB0ZXN0cyA9IHJlcXVpcmUoJy4vdGVzdHMvYWxsJyk7XHJcblxyXG52YXIgcnVsZWUgPSBhbmd1bGFyLm1vZHVsZSgncnVsZWUnLCBbXHJcbiAgICAnbmdUb3VjaCcsXHJcbiAgICAnbmdSb3V0ZScsXHJcbiAgICAnbmdBbmltYXRlJyxcclxuICAgIHV0aWxpdGllc05hbWUsXHJcbiAgICBmaWx0ZXJzLm5hbWUsXHJcbiAgICBkaXJlY3RpdmVzLm5hbWUsXHJcbiAgICBkYXRhU2VydmljZS5uYW1lLFxyXG4gICAgY29udHJvbGxlcnMubmFtZVxyXG5dLmNvbmNhdCh0ZXN0cykpO1xyXG5cclxucnVsZWUuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCAndXRpbHMnLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIsIHV0aWxzKSB7XHJcbiAgICAkcm91dGVQcm92aWRlci53aGVuKCcvaG9tZScsIHsgdGVtcGxhdGVVcmw6IHV0aWxzLnZpZXdVcmwoJ3ZpZXdzL2hvbWUuaHRtbCcpLCBjb250cm9sbGVyOiAnSG9tZUN0cmwnIH0pO1xyXG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2Fib3V0JywgeyB0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvYWJvdXQuaHRtbCcpIH0pO1xyXG4gICAgJHJvdXRlUHJvdmlkZXIud2hlbignL2FkbWluJywgeyB0ZW1wbGF0ZVVybDogdXRpbHMudmlld1VybCgndmlld3MvYWRtaW4uaHRtbCcpIH0pO1xyXG4gICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogJy9ob21lJyB9KTtcclxufV0pO1xyXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZmFrZV9jYTgxNjMzMy5qc1wiLFwiL1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogZmlsdGVyc1xyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjYuMThcclxuKi9cclxuXHJcbnZhciBuYW1lID0gbW9kdWxlLmV4cG9ydHMubmFtZSA9ICdydWxlZS5maWx0ZXJzJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKG5hbWUsIFtdKVxyXG4uZmlsdGVyKCdpMThuJywgcmVxdWlyZSgnLi9pMThuJykpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9maWx0ZXJzXFxcXGFsbC5qc1wiLFwiL2ZpbHRlcnNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIGkxOG5cclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC42LjE4XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFsndXRpbHMnLCBmdW5jdGlvbih1dGlscykge1xyXG5cdHJldHVybiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHJldHVybiB1dGlscy5pMThuKGtleSwga2V5KTtcclxuXHR9O1xyXG59XTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZmlsdGVyc1xcXFxpMThuLmpzXCIsXCIvZmlsdGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogbGlicmFyaWVzXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG5yZXF1aXJlKCcuL2FuZ3VsYXIubWluJyk7XHJcbnJlcXVpcmUoJy4vYW5ndWxhci10b3VjaC5taW4nKTtcclxucmVxdWlyZSgnLi9hbmd1bGFyLXJlc291cmNlLm1pbicpO1xyXG5yZXF1aXJlKCcuL2FuZ3VsYXItYW5pbWF0ZS5taW4nKTtcclxucmVxdWlyZSgnLi9hbmd1bGFyLXJvdXRlLm1pbicpO1xyXG5yZXF1aXJlKCcuL3J1bGVlLXByb21pc2UnKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicmFyaWVzXFxcXGFsbC5qc1wiLFwiL2xpYnJhcmllc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiBBbmd1bGFySlMgdjEuMi4xMlxyXG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcclxuIExpY2Vuc2U6IE1JVFxyXG4qL1xyXG4oZnVuY3Rpb24odixrLHQpeyd1c2Ugc3RyaWN0JztrLm1vZHVsZShcIm5nQW5pbWF0ZVwiLFtcIm5nXCJdKS5mYWN0b3J5KFwiJCRhbmltYXRlUmVmbG93XCIsW1wiJHdpbmRvd1wiLFwiJHRpbWVvdXRcIixmdW5jdGlvbihrLEIpe3ZhciBkPWsucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxrLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZCl7cmV0dXJuIEIoZCwxMCwhMSl9LHE9ay5jYW5jZWxBbmltYXRpb25GcmFtZXx8ay53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZCl7cmV0dXJuIEIuY2FuY2VsKGQpfTtyZXR1cm4gZnVuY3Rpb24ocCl7dmFyIGs9ZChwKTtyZXR1cm4gZnVuY3Rpb24oKXtxKGspfX19XSkuY29uZmlnKFtcIiRwcm92aWRlXCIsXCIkYW5pbWF0ZVByb3ZpZGVyXCIsZnVuY3Rpb24oUixCKXtmdW5jdGlvbiBkKGQpe2Zvcih2YXIgaz0wO2s8ZC5sZW5ndGg7aysrKXt2YXIgcD1kW2tdO2lmKHAubm9kZVR5cGU9PVgpcmV0dXJuIHB9fXZhciBxPWsubm9vcCxcclxucD1rLmZvckVhY2gsJD1CLiQkc2VsZWN0b3JzLFg9MSxsPVwiJCRuZ0FuaW1hdGVTdGF0ZVwiLEs9XCJuZy1hbmltYXRlXCIsbT17cnVubmluZzohMH07Ui5kZWNvcmF0b3IoXCIkYW5pbWF0ZVwiLFtcIiRkZWxlZ2F0ZVwiLFwiJGluamVjdG9yXCIsXCIkc25pZmZlclwiLFwiJHJvb3RFbGVtZW50XCIsXCIkdGltZW91dFwiLFwiJHJvb3RTY29wZVwiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oQyx2LHQsSCx5LHcsTil7ZnVuY3Rpb24gSShhKXtpZihhKXt2YXIgZz1bXSxlPXt9O2E9YS5zdWJzdHIoMSkuc3BsaXQoXCIuXCIpOyh0LnRyYW5zaXRpb25zfHx0LmFuaW1hdGlvbnMpJiZhLnB1c2goXCJcIik7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBmPWFbY10sZD0kW2ZdO2QmJiFlW2ZdJiYoZy5wdXNoKHYuZ2V0KGQpKSxlW2ZdPSEwKX1yZXR1cm4gZ319ZnVuY3Rpb24gcihhLGcsZSxjLGYsayxtKXtmdW5jdGlvbiB0KGEpe24oKTtpZighMD09PWEpeigpO2Vsc2V7aWYoYT1lLmRhdGEobCkpYS5kb25lPXosZS5kYXRhKGwsXHJcbmEpO0MoRCxcImFmdGVyXCIseil9fWZ1bmN0aW9uIEMoYyxkLGYpe1wiYWZ0ZXJcIj09ZD9yKCk6RSgpO3ZhciBrPWQrXCJFbmRcIjtwKGMsZnVuY3Rpb24oYixhYSl7dmFyIGg9ZnVuY3Rpb24oKXthOnt2YXIgYj1kK1wiQ29tcGxldGVcIixhPWNbYWFdO2FbYl09ITA7KGFba118fHEpKCk7Zm9yKGE9MDthPGMubGVuZ3RoO2ErKylpZighY1thXVtiXSlicmVhayBhO2YoKX19O1wiYmVmb3JlXCIhPWR8fFwiZW50ZXJcIiE9YSYmXCJtb3ZlXCIhPWE/YltkXT9iW2tdPXU/YltkXShlLGcsaCk6YltkXShlLGgpOmgoKTpoKCl9KX1mdW5jdGlvbiB3KGMpe2UudHJpZ2dlckhhbmRsZXIoXCIkYW5pbWF0ZTpcIitjLHtldmVudDphLGNsYXNzTmFtZTpnfSl9ZnVuY3Rpb24gRSgpe3koZnVuY3Rpb24oKXt3KFwiYmVmb3JlXCIpfSwwLCExKX1mdW5jdGlvbiByKCl7eShmdW5jdGlvbigpe3coXCJhZnRlclwiKX0sMCwhMSl9ZnVuY3Rpb24gdigpe3koZnVuY3Rpb24oKXt3KFwiY2xvc2VcIik7bSYmbSgpfSwwLCExKX1mdW5jdGlvbiBuKCl7bi5oYXNCZWVuUnVufHxcclxuKG4uaGFzQmVlblJ1bj0hMCxrKCkpfWZ1bmN0aW9uIHooKXtpZighei5oYXNCZWVuUnVuKXt6Lmhhc0JlZW5SdW49ITA7dmFyIGE9ZS5kYXRhKGwpO2EmJih1P0EoZSk6KGEuY2xvc2VBbmltYXRpb25UaW1lb3V0PXkoZnVuY3Rpb24oKXtBKGUpfSwwLCExKSxlLmRhdGEobCxhKSkpO3YoKX19dmFyIHMseCxHPWQoZSk7RyYmKHM9Ry5jbGFzc05hbWUseD1zK1wiIFwiK2cpO2lmKEcmJkwoeCkpe3g9KFwiIFwiK3gpLnJlcGxhY2UoL1xccysvZyxcIi5cIik7Y3x8KGM9Zj9mLnBhcmVudCgpOmUucGFyZW50KCkpO3g9SSh4KTt2YXIgdT1cImFkZENsYXNzXCI9PWF8fFwicmVtb3ZlQ2xhc3NcIj09YTtmPWUuZGF0YShsKXx8e307aWYoYmEoZSxjKXx8MD09PXgubGVuZ3RoKW4oKSxFKCkscigpLHooKTtlbHNle3ZhciBEPVtdO3UmJihmLmRpc2FibGVkfHxmLnJ1bm5pbmcmJmYuc3RydWN0dXJhbCl8fHAoeCxmdW5jdGlvbihjKXtpZighYy5hbGxvd0NhbmNlbHx8Yy5hbGxvd0NhbmNlbChlLGEsZykpe3ZhciBkPVxyXG5jW2FdO1wibGVhdmVcIj09YT8oYz1kLGQ9bnVsbCk6Yz1jW1wiYmVmb3JlXCIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cigxKV07RC5wdXNoKHtiZWZvcmU6YyxhZnRlcjpkfSl9fSk7MD09PUQubGVuZ3RoPyhuKCksRSgpLHIoKSx2KCkpOihjPVwiIFwiK3MrXCIgXCIsZi5ydW5uaW5nJiYoeS5jYW5jZWwoZi5jbG9zZUFuaW1hdGlvblRpbWVvdXQpLEEoZSksSihmLmFuaW1hdGlvbnMpLHg9KHM9dSYmIWYuc3RydWN0dXJhbCkmJmYuY2xhc3NOYW1lPT1nJiZhIT1mLmV2ZW50LGYuYmVmb3JlQ29tcGxldGV8fHg/KGYuZG9uZXx8cSkoITApOnMmJihjPVwicmVtb3ZlQ2xhc3NcIj09Zi5ldmVudD9jLnJlcGxhY2UoXCIgXCIrZi5jbGFzc05hbWUrXCIgXCIsXCIgXCIpOmMrZi5jbGFzc05hbWUrXCIgXCIpKSxzPVwiIFwiK2crXCIgXCIsXCJhZGRDbGFzc1wiPT1hJiYwPD1jLmluZGV4T2Yocyl8fFwicmVtb3ZlQ2xhc3NcIj09YSYmLTE9PWMuaW5kZXhPZihzKT8obigpLEUoKSxyKCksdigpKTooZS5hZGRDbGFzcyhLKSxcclxuZS5kYXRhKGwse3J1bm5pbmc6ITAsZXZlbnQ6YSxjbGFzc05hbWU6ZyxzdHJ1Y3R1cmFsOiF1LGFuaW1hdGlvbnM6RCxkb25lOnR9KSxDKEQsXCJiZWZvcmVcIix0KSkpfX1lbHNlIG4oKSxFKCkscigpLHooKX1mdW5jdGlvbiBRKGEpe2E9ZChhKTtwKGEucXVlcnlTZWxlY3RvckFsbChcIi5cIitLKSxmdW5jdGlvbihhKXthPWsuZWxlbWVudChhKTt2YXIgZT1hLmRhdGEobCk7ZSYmKEooZS5hbmltYXRpb25zKSxBKGEpKX0pfWZ1bmN0aW9uIEooYSl7cChhLGZ1bmN0aW9uKGEpe2EuYmVmb3JlQ29tcGxldGV8fChhLmJlZm9yZUVuZHx8cSkoITApO2EuYWZ0ZXJDb21wbGV0ZXx8KGEuYWZ0ZXJFbmR8fHEpKCEwKX0pfWZ1bmN0aW9uIEEoYSl7ZChhKT09ZChIKT9tLmRpc2FibGVkfHwobS5ydW5uaW5nPSExLG0uc3RydWN0dXJhbD0hMSk6KGEucmVtb3ZlQ2xhc3MoSyksYS5yZW1vdmVEYXRhKGwpKX1mdW5jdGlvbiBiYShhLGcpe2lmKG0uZGlzYWJsZWQpcmV0dXJuITA7aWYoZChhKT09ZChIKSlyZXR1cm4gbS5kaXNhYmxlZHx8XHJcbm0ucnVubmluZztkb3tpZigwPT09Zy5sZW5ndGgpYnJlYWs7dmFyIGU9ZChnKT09ZChIKSxjPWU/bTpnLmRhdGEobCksYz1jJiYoISFjLmRpc2FibGVkfHwhIWMucnVubmluZyk7aWYoZXx8YylyZXR1cm4gYztpZihlKWJyZWFrfXdoaWxlKGc9Zy5wYXJlbnQoKSk7cmV0dXJuITB9SC5kYXRhKGwsbSk7dy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXt3LiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe20ucnVubmluZz0hMX0pfSk7dmFyIE09Qi5jbGFzc05hbWVGaWx0ZXIoKSxMPU0/ZnVuY3Rpb24oYSl7cmV0dXJuIE0udGVzdChhKX06ZnVuY3Rpb24oKXtyZXR1cm4hMH07cmV0dXJue2VudGVyOmZ1bmN0aW9uKGEsZCxlLGMpe3RoaXMuZW5hYmxlZCghMSxhKTtDLmVudGVyKGEsZCxlKTt3LiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3IoXCJlbnRlclwiLFwibmctZW50ZXJcIixhLGQsZSxxLGMpfSl9LGxlYXZlOmZ1bmN0aW9uKGEsZCl7UShhKTt0aGlzLmVuYWJsZWQoITEsYSk7dy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtyKFwibGVhdmVcIixcclxuXCJuZy1sZWF2ZVwiLGEsbnVsbCxudWxsLGZ1bmN0aW9uKCl7Qy5sZWF2ZShhKX0sZCl9KX0sbW92ZTpmdW5jdGlvbihhLGQsZSxjKXtRKGEpO3RoaXMuZW5hYmxlZCghMSxhKTtDLm1vdmUoYSxkLGUpO3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7cihcIm1vdmVcIixcIm5nLW1vdmVcIixhLGQsZSxxLGMpfSl9LGFkZENsYXNzOmZ1bmN0aW9uKGEsZCxlKXtyKFwiYWRkQ2xhc3NcIixkLGEsbnVsbCxudWxsLGZ1bmN0aW9uKCl7Qy5hZGRDbGFzcyhhLGQpfSxlKX0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSxkLGUpe3IoXCJyZW1vdmVDbGFzc1wiLGQsYSxudWxsLG51bGwsZnVuY3Rpb24oKXtDLnJlbW92ZUNsYXNzKGEsZCl9LGUpfSxlbmFibGVkOmZ1bmN0aW9uKGEsZCl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMjppZihhKUEoZCk7ZWxzZXt2YXIgZT1kLmRhdGEobCl8fHt9O2UuZGlzYWJsZWQ9ITA7ZC5kYXRhKGwsZSl9YnJlYWs7Y2FzZSAxOm0uZGlzYWJsZWQ9IWE7YnJlYWs7ZGVmYXVsdDphPVxyXG4hbS5kaXNhYmxlZH1yZXR1cm4hIWF9fX1dKTtCLnJlZ2lzdGVyKFwiXCIsW1wiJHdpbmRvd1wiLFwiJHNuaWZmZXJcIixcIiR0aW1lb3V0XCIsXCIkJGFuaW1hdGVSZWZsb3dcIixmdW5jdGlvbihtLGwsQixIKXtmdW5jdGlvbiB5KGIsYSl7TyYmTygpO1UucHVzaChhKTt2YXIgaD1kKGIpO2I9ay5lbGVtZW50KGgpO1YucHVzaChiKTt2YXIgaD1iLmRhdGEobiksYz1oLnN0YWdnZXIsYz1oLml0ZW1JbmRleCooTWF0aC5tYXgoYy5hbmltYXRpb25EZWxheSxjLnRyYW5zaXRpb25EZWxheSl8fDApO1A9TWF0aC5tYXgoUCwoYysoaC5tYXhEZWxheStoLm1heER1cmF0aW9uKSpzKSp4KTtoLmFuaW1hdGlvbkNvdW50PUc7Tz1IKGZ1bmN0aW9uKCl7cChVLGZ1bmN0aW9uKGIpe2IoKX0pO3ZhciBiPVtdLGE9RztwKFYsZnVuY3Rpb24oYSl7Yi5wdXNoKGEpfSk7QihmdW5jdGlvbigpe3coYixhKTtiPW51bGx9LFAsITEpO1U9W107Vj1bXTtPPW51bGw7dT17fTtQPTA7RysrfSl9ZnVuY3Rpb24gdyhiLGEpe3AoYixcclxuZnVuY3Rpb24oYil7KGI9Yi5kYXRhKG4pKSYmYi5hbmltYXRpb25Db3VudD09YSYmKGIuY2xvc2VBbmltYXRpb25Gbnx8cSkoKX0pfWZ1bmN0aW9uIE4oYixhKXt2YXIgaD1hP3VbYV06bnVsbDtpZighaCl7dmFyIGQ9MCxjPTAsZT0wLGs9MCxnLG4sbCxyO3AoYixmdW5jdGlvbihiKXtpZihiLm5vZGVUeXBlPT1YKXtiPW0uZ2V0Q29tcHV0ZWRTdHlsZShiKXx8e307bD1iW2YrWV07ZD1NYXRoLm1heChJKGwpLGQpO3I9YltmK1ddO2c9YltmK0VdO2M9TWF0aC5tYXgoSShnKSxjKTtuPWJbRitFXTtrPU1hdGgubWF4KEkobiksayk7dmFyIGE9SShiW0YrWV0pOzA8YSYmKGEqPXBhcnNlSW50KGJbRitSXSwxMCl8fDEpO2U9TWF0aC5tYXgoYSxlKX19KTtoPXt0b3RhbDowLHRyYW5zaXRpb25Qcm9wZXJ0eVN0eWxlOnIsdHJhbnNpdGlvbkR1cmF0aW9uU3R5bGU6bCx0cmFuc2l0aW9uRGVsYXlTdHlsZTpnLHRyYW5zaXRpb25EZWxheTpjLHRyYW5zaXRpb25EdXJhdGlvbjpkLGFuaW1hdGlvbkRlbGF5U3R5bGU6bixcclxuYW5pbWF0aW9uRGVsYXk6ayxhbmltYXRpb25EdXJhdGlvbjplfTthJiYodVthXT1oKX1yZXR1cm4gaH1mdW5jdGlvbiBJKGIpe3ZhciBhPTA7Yj1rLmlzU3RyaW5nKGIpP2Iuc3BsaXQoL1xccyosXFxzKi8pOltdO3AoYixmdW5jdGlvbihiKXthPU1hdGgubWF4KHBhcnNlRmxvYXQoYil8fDAsYSl9KTtyZXR1cm4gYX1mdW5jdGlvbiByKGIpe3ZhciBhPWIucGFyZW50KCksaD1hLmRhdGEoWik7aHx8KGEuZGF0YShaLCsrRCksaD1EKTtyZXR1cm4gaCtcIi1cIitkKGIpLmNsYXNzTmFtZX1mdW5jdGlvbiBRKGIsYSxoKXt2YXIgYz1yKGIpLGU9YytcIiBcIithLGs9e30sZz11W2VdPysrdVtlXS50b3RhbDowO2lmKDA8Zyl7dmFyIGw9YStcIi1zdGFnZ2VyXCIsaz1jK1wiIFwiK2w7KGM9IXVba10pJiZiLmFkZENsYXNzKGwpO2s9TihiLGspO2MmJmIucmVtb3ZlQ2xhc3MobCl9aD1ofHxmdW5jdGlvbihiKXtyZXR1cm4gYigpfTtiLmFkZENsYXNzKGEpO2g9aChmdW5jdGlvbigpe3JldHVybiBOKGIsZSl9KTtcclxubD1NYXRoLm1heChoLnRyYW5zaXRpb25EZWxheSxoLmFuaW1hdGlvbkRlbGF5KTtjPU1hdGgubWF4KGgudHJhbnNpdGlvbkR1cmF0aW9uLGguYW5pbWF0aW9uRHVyYXRpb24pO2lmKDA9PT1jKXJldHVybiBiLnJlbW92ZUNsYXNzKGEpLCExO3ZhciBtPVwiXCI7MDxoLnRyYW5zaXRpb25EdXJhdGlvbj9kKGIpLnN0eWxlW2YrV109XCJub25lXCI6ZChiKS5zdHlsZVtGXT1cIm5vbmUgMHNcIjtwKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIsYSl7bSs9KDA8YT9cIiBcIjpcIlwiKStiK1wiLWFjdGl2ZVwifSk7Yi5kYXRhKG4se2NsYXNzTmFtZTphLGFjdGl2ZUNsYXNzTmFtZTptLG1heER1cmF0aW9uOmMsbWF4RGVsYXk6bCxjbGFzc2VzOmErXCIgXCIrbSx0aW1pbmdzOmgsc3RhZ2dlcjprLGl0ZW1JbmRleDpnfSk7cmV0dXJuITB9ZnVuY3Rpb24gSihiKXt2YXIgYT1mK1c7Yj1kKGIpO2Iuc3R5bGVbYV0mJjA8Yi5zdHlsZVthXS5sZW5ndGgmJihiLnN0eWxlW2FdPVwiXCIpfWZ1bmN0aW9uIEEoYil7dmFyIGE9RjtiPVxyXG5kKGIpO2Iuc3R5bGVbYV0mJjA8Yi5zdHlsZVthXS5sZW5ndGgmJihiLnN0eWxlW2FdPVwiXCIpfWZ1bmN0aW9uIEsoYixhLGgpe2Z1bmN0aW9uIGUoYyl7Yi5vZmYodixrKTtiLnJlbW92ZUNsYXNzKHIpO2M9YjtjLnJlbW92ZUNsYXNzKGEpO2MucmVtb3ZlRGF0YShuKTtjPWQoYik7Zm9yKHZhciBoIGluIHMpYy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzW2hdKX1mdW5jdGlvbiBrKGIpe2Iuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGE9Yi5vcmlnaW5hbEV2ZW50fHxiO2I9YS4kbWFudWFsVGltZVN0YW1wfHxhLnRpbWVTdGFtcHx8RGF0ZS5ub3coKTthPXBhcnNlRmxvYXQoYS5lbGFwc2VkVGltZS50b0ZpeGVkKHopKTtNYXRoLm1heChiLXcsMCk+PXUmJmE+PXAmJmgoKX12YXIgZj1iLmRhdGEobiksZz1kKGIpO2lmKC0xIT1nLmNsYXNzTmFtZS5pbmRleE9mKGEpJiZmKXt2YXIgbD1mLnRpbWluZ3MsbT1mLnN0YWdnZXIscD1mLm1heER1cmF0aW9uLHI9Zi5hY3RpdmVDbGFzc05hbWUsdT1NYXRoLm1heChsLnRyYW5zaXRpb25EZWxheSxcclxubC5hbmltYXRpb25EZWxheSkqeCx3PURhdGUubm93KCksdj1UK1wiIFwiK1MsdD1mLml0ZW1JbmRleCxxPVwiXCIscz1bXTtpZigwPGwudHJhbnNpdGlvbkR1cmF0aW9uKXt2YXIgeT1sLnRyYW5zaXRpb25Qcm9wZXJ0eVN0eWxlOy0xPT15LmluZGV4T2YoXCJhbGxcIikmJihxKz1jK1widHJhbnNpdGlvbi1wcm9wZXJ0eTogXCIreStcIjtcIixxKz1jK1widHJhbnNpdGlvbi1kdXJhdGlvbjogXCIrbC50cmFuc2l0aW9uRHVyYXRpb25TdHlsZStcIjtcIixzLnB1c2goYytcInRyYW5zaXRpb24tcHJvcGVydHlcIikscy5wdXNoKGMrXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpKX0wPHQmJigwPG0udHJhbnNpdGlvbkRlbGF5JiYwPT09bS50cmFuc2l0aW9uRHVyYXRpb24mJihxKz1jK1widHJhbnNpdGlvbi1kZWxheTogXCIrTShsLnRyYW5zaXRpb25EZWxheVN0eWxlLG0udHJhbnNpdGlvbkRlbGF5LHQpK1wiOyBcIixzLnB1c2goYytcInRyYW5zaXRpb24tZGVsYXlcIikpLDA8bS5hbmltYXRpb25EZWxheSYmMD09PW0uYW5pbWF0aW9uRHVyYXRpb24mJlxyXG4ocSs9YytcImFuaW1hdGlvbi1kZWxheTogXCIrTShsLmFuaW1hdGlvbkRlbGF5U3R5bGUsbS5hbmltYXRpb25EZWxheSx0KStcIjsgXCIscy5wdXNoKGMrXCJhbmltYXRpb24tZGVsYXlcIikpKTswPHMubGVuZ3RoJiYobD1nLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpfHxcIlwiLGcuc2V0QXR0cmlidXRlKFwic3R5bGVcIixsK1wiIFwiK3EpKTtiLm9uKHYsayk7Yi5hZGRDbGFzcyhyKTtmLmNsb3NlQW5pbWF0aW9uRm49ZnVuY3Rpb24oKXtlKCk7aCgpfTtyZXR1cm4gZX1oKCl9ZnVuY3Rpb24gTShiLGEsYyl7dmFyIGQ9XCJcIjtwKGIuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKGIsZSl7ZCs9KDA8ZT9cIixcIjpcIlwiKSsoYyphK3BhcnNlSW50KGIsMTApKStcInNcIn0pO3JldHVybiBkfWZ1bmN0aW9uIEwoYixhLGMpe2lmKFEoYixhLGMpKXJldHVybiBmdW5jdGlvbihjKXtjJiYoYi5yZW1vdmVDbGFzcyhhKSxiLnJlbW92ZURhdGEobikpfX1mdW5jdGlvbiBhKGEsYyxkKXtpZihhLmRhdGEobikpcmV0dXJuIEsoYSxjLGQpO2EucmVtb3ZlQ2xhc3MoYyk7XHJcbmEucmVtb3ZlRGF0YShuKTtkKCl9ZnVuY3Rpb24gZyhiLGMsZCl7dmFyIGU9TChiLGMpO2lmKGUpe3ZhciBmPWU7eShiLGZ1bmN0aW9uKCl7SihiKTtBKGIpO2Y9YShiLGMsZCl9KTtyZXR1cm4gZnVuY3Rpb24oYSl7KGZ8fHEpKGEpfX1kKCl9ZnVuY3Rpb24gZShhLGMpe3ZhciBkPVwiXCI7YT1rLmlzQXJyYXkoYSk/YTphLnNwbGl0KC9cXHMrLyk7cChhLGZ1bmN0aW9uKGEsYil7YSYmMDxhLmxlbmd0aCYmKGQrPSgwPGI/XCIgXCI6XCJcIikrYStjKX0pO3JldHVybiBkfXZhciBjPVwiXCIsZixTLEYsVDt2Lm9udHJhbnNpdGlvbmVuZD09PXQmJnYub253ZWJraXR0cmFuc2l0aW9uZW5kIT09dD8oYz1cIi13ZWJraXQtXCIsZj1cIldlYmtpdFRyYW5zaXRpb25cIixTPVwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpOihmPVwidHJhbnNpdGlvblwiLFM9XCJ0cmFuc2l0aW9uZW5kXCIpO3Yub25hbmltYXRpb25lbmQ9PT10JiZ2Lm9ud2Via2l0YW5pbWF0aW9uZW5kIT09dD8oYz1cIi13ZWJraXQtXCIsRj1cclxuXCJXZWJraXRBbmltYXRpb25cIixUPVwid2Via2l0QW5pbWF0aW9uRW5kIGFuaW1hdGlvbmVuZFwiKTooRj1cImFuaW1hdGlvblwiLFQ9XCJhbmltYXRpb25lbmRcIik7dmFyIFk9XCJEdXJhdGlvblwiLFc9XCJQcm9wZXJ0eVwiLEU9XCJEZWxheVwiLFI9XCJJdGVyYXRpb25Db3VudFwiLFo9XCIkJG5nQW5pbWF0ZUtleVwiLG49XCIkJG5nQW5pbWF0ZUNTUzNEYXRhXCIsej0zLHM9MS41LHg9MUUzLEc9MCx1PXt9LEQ9MCxVPVtdLFY9W10sTyxQPTA7cmV0dXJue2FsbG93Q2FuY2VsOmZ1bmN0aW9uKGEsYyxoKXt2YXIgZj0oYS5kYXRhKG4pfHx7fSkuY2xhc3NlcztpZighZnx8MDw9W1wiZW50ZXJcIixcImxlYXZlXCIsXCJtb3ZlXCJdLmluZGV4T2YoYykpcmV0dXJuITA7dmFyIGw9YS5wYXJlbnQoKSxnPWsuZWxlbWVudChkKGEpLmNsb25lTm9kZSgpKTtnLmF0dHIoXCJzdHlsZVwiLFwicG9zaXRpb246YWJzb2x1dGU7IHRvcDotOTk5OXB4OyBsZWZ0Oi05OTk5cHhcIik7Zy5yZW1vdmVBdHRyKFwiaWRcIik7Zy5lbXB0eSgpO3AoZi5zcGxpdChcIiBcIiksXHJcbmZ1bmN0aW9uKGEpe2cucmVtb3ZlQ2xhc3MoYSl9KTtnLmFkZENsYXNzKGUoaCxcImFkZENsYXNzXCI9PWM/XCItYWRkXCI6XCItcmVtb3ZlXCIpKTtsLmFwcGVuZChnKTthPU4oZyk7Zy5yZW1vdmUoKTtyZXR1cm4gMDxNYXRoLm1heChhLnRyYW5zaXRpb25EdXJhdGlvbixhLmFuaW1hdGlvbkR1cmF0aW9uKX0sZW50ZXI6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZyhhLFwibmctZW50ZXJcIixjKX0sbGVhdmU6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZyhhLFwibmctbGVhdmVcIixjKX0sbW92ZTpmdW5jdGlvbihhLGMpe3JldHVybiBnKGEsXCJuZy1tb3ZlXCIsYyl9LGJlZm9yZUFkZENsYXNzOmZ1bmN0aW9uKGEsYyxkKXt2YXIgZj1MKGEsZShjLFwiLWFkZFwiKSxmdW5jdGlvbihkKXthLmFkZENsYXNzKGMpO2Q9ZCgpO2EucmVtb3ZlQ2xhc3MoYyk7cmV0dXJuIGR9KTtpZihmKXJldHVybiB5KGEsZnVuY3Rpb24oKXtKKGEpO0EoYSk7ZCgpfSksZjtkKCl9LGFkZENsYXNzOmZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gYShiLFxyXG5lKGMsXCItYWRkXCIpLGQpfSxiZWZvcmVSZW1vdmVDbGFzczpmdW5jdGlvbihhLGMsZCl7dmFyIGY9TChhLGUoYyxcIi1yZW1vdmVcIiksZnVuY3Rpb24oZCl7dmFyIGU9YS5hdHRyKFwiY2xhc3NcIik7YS5yZW1vdmVDbGFzcyhjKTtkPWQoKTthLmF0dHIoXCJjbGFzc1wiLGUpO3JldHVybiBkfSk7aWYoZilyZXR1cm4geShhLGZ1bmN0aW9uKCl7SihhKTtBKGEpO2QoKX0pLGY7ZCgpfSxyZW1vdmVDbGFzczpmdW5jdGlvbihiLGMsZCl7cmV0dXJuIGEoYixlKGMsXCItcmVtb3ZlXCIpLGQpfX19XSl9XSl9KSh3aW5kb3csd2luZG93LmFuZ3VsYXIpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLWFuaW1hdGUubWluLmpzLm1hcFxyXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicmFyaWVzXFxcXGFuZ3VsYXItYW5pbWF0ZS5taW4uanNcIixcIi9saWJyYXJpZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4gQW5ndWxhckpTIHYxLjIuMTJcclxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXHJcbiBMaWNlbnNlOiBNSVRcclxuKi9cclxuKGZ1bmN0aW9uKEgsYSxBKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gRChwLGcpe2c9Z3x8e307YS5mb3JFYWNoKGcsZnVuY3Rpb24oYSxjKXtkZWxldGUgZ1tjXX0pO2Zvcih2YXIgYyBpbiBwKSFwLmhhc093blByb3BlcnR5KGMpfHxcIiRcIj09PWMuY2hhckF0KDApJiZcIiRcIj09PWMuY2hhckF0KDEpfHwoZ1tjXT1wW2NdKTtyZXR1cm4gZ312YXIgdj1hLiQkbWluRXJyKFwiJHJlc291cmNlXCIpLEM9L14oXFwuW2EtekEtWl8kXVswLTlhLXpBLVpfJF0qKSskLzthLm1vZHVsZShcIm5nUmVzb3VyY2VcIixbXCJuZ1wiXSkuZmFjdG9yeShcIiRyZXNvdXJjZVwiLFtcIiRodHRwXCIsXCIkcVwiLGZ1bmN0aW9uKHAsZyl7ZnVuY3Rpb24gYyhhLGMpe3RoaXMudGVtcGxhdGU9YTt0aGlzLmRlZmF1bHRzPWN8fHt9O3RoaXMudXJsUGFyYW1zPXt9fWZ1bmN0aW9uIHQobix3LGwpe2Z1bmN0aW9uIHIoaCxkKXt2YXIgZT17fTtkPXgoe30sdyxkKTtzKGQsZnVuY3Rpb24oYixkKXt1KGIpJiYoYj1iKCkpO3ZhciBrO2lmKGImJlxyXG5iLmNoYXJBdCYmXCJAXCI9PWIuY2hhckF0KDApKXtrPWg7dmFyIGE9Yi5zdWJzdHIoMSk7aWYobnVsbD09YXx8XCJcIj09PWF8fFwiaGFzT3duUHJvcGVydHlcIj09PWF8fCFDLnRlc3QoXCIuXCIrYSkpdGhyb3cgdihcImJhZG1lbWJlclwiLGEpO2Zvcih2YXIgYT1hLnNwbGl0KFwiLlwiKSxmPTAsYz1hLmxlbmd0aDtmPGMmJmshPT1BO2YrKyl7dmFyIGc9YVtmXTtrPW51bGwhPT1rP2tbZ106QX19ZWxzZSBrPWI7ZVtkXT1rfSk7cmV0dXJuIGV9ZnVuY3Rpb24gZShhKXtyZXR1cm4gYS5yZXNvdXJjZX1mdW5jdGlvbiBmKGEpe0QoYXx8e30sdGhpcyl9dmFyIEY9bmV3IGMobik7bD14KHt9LEIsbCk7cyhsLGZ1bmN0aW9uKGgsZCl7dmFyIGM9L14oUE9TVHxQVVR8UEFUQ0gpJC9pLnRlc3QoaC5tZXRob2QpO2ZbZF09ZnVuY3Rpb24oYixkLGssdyl7dmFyIHE9e30sbixsLHk7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgNDp5PXcsbD1rO2Nhc2UgMzpjYXNlIDI6aWYodShkKSl7aWYodShiKSl7bD1cclxuYjt5PWQ7YnJlYWt9bD1kO3k9a31lbHNle3E9YjtuPWQ7bD1rO2JyZWFrfWNhc2UgMTp1KGIpP2w9YjpjP249YjpxPWI7YnJlYWs7Y2FzZSAwOmJyZWFrO2RlZmF1bHQ6dGhyb3cgdihcImJhZGFyZ3NcIixhcmd1bWVudHMubGVuZ3RoKTt9dmFyIHQ9dGhpcyBpbnN0YW5jZW9mIGYsbT10P246aC5pc0FycmF5P1tdOm5ldyBmKG4pLHo9e30sQj1oLmludGVyY2VwdG9yJiZoLmludGVyY2VwdG9yLnJlc3BvbnNlfHxlLEM9aC5pbnRlcmNlcHRvciYmaC5pbnRlcmNlcHRvci5yZXNwb25zZUVycm9yfHxBO3MoaCxmdW5jdGlvbihhLGIpe1wicGFyYW1zXCIhPWImJihcImlzQXJyYXlcIiE9YiYmXCJpbnRlcmNlcHRvclwiIT1iKSYmKHpbYl09RyhhKSl9KTtjJiYoei5kYXRhPW4pO0Yuc2V0VXJsUGFyYW1zKHoseCh7fSxyKG4saC5wYXJhbXN8fHt9KSxxKSxoLnVybCk7cT1wKHopLnRoZW4oZnVuY3Rpb24oYil7dmFyIGQ9Yi5kYXRhLGs9bS4kcHJvbWlzZTtpZihkKXtpZihhLmlzQXJyYXkoZCkhPT0hIWguaXNBcnJheSl0aHJvdyB2KFwiYmFkY2ZnXCIsXHJcbmguaXNBcnJheT9cImFycmF5XCI6XCJvYmplY3RcIixhLmlzQXJyYXkoZCk/XCJhcnJheVwiOlwib2JqZWN0XCIpO2guaXNBcnJheT8obS5sZW5ndGg9MCxzKGQsZnVuY3Rpb24oYil7bS5wdXNoKG5ldyBmKGIpKX0pKTooRChkLG0pLG0uJHByb21pc2U9ayl9bS4kcmVzb2x2ZWQ9ITA7Yi5yZXNvdXJjZT1tO3JldHVybiBifSxmdW5jdGlvbihiKXttLiRyZXNvbHZlZD0hMDsoeXx8RSkoYik7cmV0dXJuIGcucmVqZWN0KGIpfSk7cT1xLnRoZW4oZnVuY3Rpb24oYil7dmFyIGE9QihiKTsobHx8RSkoYSxiLmhlYWRlcnMpO3JldHVybiBhfSxDKTtyZXR1cm4gdD9xOihtLiRwcm9taXNlPXEsbS4kcmVzb2x2ZWQ9ITEsbSl9O2YucHJvdG90eXBlW1wiJFwiK2RdPWZ1bmN0aW9uKGIsYSxrKXt1KGIpJiYoaz1hLGE9YixiPXt9KTtiPWZbZF0uY2FsbCh0aGlzLGIsdGhpcyxhLGspO3JldHVybiBiLiRwcm9taXNlfHxifX0pO2YuYmluZD1mdW5jdGlvbihhKXtyZXR1cm4gdChuLHgoe30sdyxhKSxsKX07cmV0dXJuIGZ9XHJcbnZhciBCPXtnZXQ6e21ldGhvZDpcIkdFVFwifSxzYXZlOnttZXRob2Q6XCJQT1NUXCJ9LHF1ZXJ5OnttZXRob2Q6XCJHRVRcIixpc0FycmF5OiEwfSxyZW1vdmU6e21ldGhvZDpcIkRFTEVURVwifSxcImRlbGV0ZVwiOnttZXRob2Q6XCJERUxFVEVcIn19LEU9YS5ub29wLHM9YS5mb3JFYWNoLHg9YS5leHRlbmQsRz1hLmNvcHksdT1hLmlzRnVuY3Rpb247Yy5wcm90b3R5cGU9e3NldFVybFBhcmFtczpmdW5jdGlvbihjLGcsbCl7dmFyIHI9dGhpcyxlPWx8fHIudGVtcGxhdGUsZixwLGg9ci51cmxQYXJhbXM9e307cyhlLnNwbGl0KC9cXFcvKSxmdW5jdGlvbihhKXtpZihcImhhc093blByb3BlcnR5XCI9PT1hKXRocm93IHYoXCJiYWRuYW1lXCIpOyEvXlxcZCskLy50ZXN0KGEpJiYoYSYmUmVnRXhwKFwiKF58W15cXFxcXFxcXF0pOlwiK2ErXCIoXFxcXFd8JClcIikudGVzdChlKSkmJihoW2FdPSEwKX0pO2U9ZS5yZXBsYWNlKC9cXFxcOi9nLFwiOlwiKTtnPWd8fHt9O3Moci51cmxQYXJhbXMsZnVuY3Rpb24oZCxjKXtmPWcuaGFzT3duUHJvcGVydHkoYyk/XHJcbmdbY106ci5kZWZhdWx0c1tjXTthLmlzRGVmaW5lZChmKSYmbnVsbCE9PWY/KHA9ZW5jb2RlVVJJQ29tcG9uZW50KGYpLnJlcGxhY2UoLyU0MC9naSxcIkBcIikucmVwbGFjZSgvJTNBL2dpLFwiOlwiKS5yZXBsYWNlKC8lMjQvZyxcIiRcIikucmVwbGFjZSgvJTJDL2dpLFwiLFwiKS5yZXBsYWNlKC8lMjAvZyxcIiUyMFwiKS5yZXBsYWNlKC8lMjYvZ2ksXCImXCIpLnJlcGxhY2UoLyUzRC9naSxcIj1cIikucmVwbGFjZSgvJTJCL2dpLFwiK1wiKSxlPWUucmVwbGFjZShSZWdFeHAoXCI6XCIrYytcIihcXFxcV3wkKVwiLFwiZ1wiKSxmdW5jdGlvbihhLGMpe3JldHVybiBwK2N9KSk6ZT1lLnJlcGxhY2UoUmVnRXhwKFwiKC8/KTpcIitjK1wiKFxcXFxXfCQpXCIsXCJnXCIpLGZ1bmN0aW9uKGEsYyxkKXtyZXR1cm5cIi9cIj09ZC5jaGFyQXQoMCk/ZDpjK2R9KX0pO2U9ZS5yZXBsYWNlKC9cXC8rJC8sXCJcIil8fFwiL1wiO2U9ZS5yZXBsYWNlKC9cXC9cXC4oPz1cXHcrKCR8XFw/KSkvLFwiLlwiKTtjLnVybD1lLnJlcGxhY2UoL1xcL1xcXFxcXC4vLFwiLy5cIik7cyhnLGZ1bmN0aW9uKGEsXHJcbmUpe3IudXJsUGFyYW1zW2VdfHwoYy5wYXJhbXM9Yy5wYXJhbXN8fHt9LGMucGFyYW1zW2VdPWEpfSl9fTtyZXR1cm4gdH1dKX0pKHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXItcmVzb3VyY2UubWluLmpzLm1hcFxyXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicmFyaWVzXFxcXGFuZ3VsYXItcmVzb3VyY2UubWluLmpzXCIsXCIvbGlicmFyaWVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuIEFuZ3VsYXJKUyB2MS4yLjEyXHJcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xyXG4gTGljZW5zZTogTUlUXHJcbiovXHJcbihmdW5jdGlvbihoLGUsQSl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIHUodyxxLGspe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHRlcm1pbmFsOiEwLHByaW9yaXR5OjQwMCx0cmFuc2NsdWRlOlwiZWxlbWVudFwiLGxpbms6ZnVuY3Rpb24oYSxjLGIsZixuKXtmdW5jdGlvbiB5KCl7bCYmKGwuJGRlc3Ryb3koKSxsPW51bGwpO2cmJihrLmxlYXZlKGcpLGc9bnVsbCl9ZnVuY3Rpb24gdigpe3ZhciBiPXcuY3VycmVudCYmdy5jdXJyZW50LmxvY2FscztpZihlLmlzRGVmaW5lZChiJiZiLiR0ZW1wbGF0ZSkpe3ZhciBiPWEuJG5ldygpLGY9dy5jdXJyZW50O2c9bihiLGZ1bmN0aW9uKGQpe2suZW50ZXIoZCxudWxsLGd8fGMsZnVuY3Rpb24oKXshZS5pc0RlZmluZWQodCl8fHQmJiFhLiRldmFsKHQpfHxxKCl9KTt5KCl9KTtsPWYuc2NvcGU9YjtsLiRlbWl0KFwiJHZpZXdDb250ZW50TG9hZGVkXCIpO2wuJGV2YWwoaCl9ZWxzZSB5KCl9dmFyIGwsZyx0PWIuYXV0b3Njcm9sbCxoPWIub25sb2FkfHxcIlwiO1xyXG5hLiRvbihcIiRyb3V0ZUNoYW5nZVN1Y2Nlc3NcIix2KTt2KCl9fX1mdW5jdGlvbiB6KGUsaCxrKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIixwcmlvcml0eTotNDAwLGxpbms6ZnVuY3Rpb24oYSxjKXt2YXIgYj1rLmN1cnJlbnQsZj1iLmxvY2FscztjLmh0bWwoZi4kdGVtcGxhdGUpO3ZhciBuPWUoYy5jb250ZW50cygpKTtiLmNvbnRyb2xsZXImJihmLiRzY29wZT1hLGY9aChiLmNvbnRyb2xsZXIsZiksYi5jb250cm9sbGVyQXMmJihhW2IuY29udHJvbGxlckFzXT1mKSxjLmRhdGEoXCIkbmdDb250cm9sbGVyQ29udHJvbGxlclwiLGYpLGMuY2hpbGRyZW4oKS5kYXRhKFwiJG5nQ29udHJvbGxlckNvbnRyb2xsZXJcIixmKSk7bihhKX19fWg9ZS5tb2R1bGUoXCJuZ1JvdXRlXCIsW1wibmdcIl0pLnByb3ZpZGVyKFwiJHJvdXRlXCIsZnVuY3Rpb24oKXtmdW5jdGlvbiBoKGEsYyl7cmV0dXJuIGUuZXh0ZW5kKG5ldyAoZS5leHRlbmQoZnVuY3Rpb24oKXt9LHtwcm90b3R5cGU6YX0pKSxjKX1mdW5jdGlvbiBxKGEsXHJcbmUpe3ZhciBiPWUuY2FzZUluc2Vuc2l0aXZlTWF0Y2gsZj17b3JpZ2luYWxQYXRoOmEscmVnZXhwOmF9LGg9Zi5rZXlzPVtdO2E9YS5yZXBsYWNlKC8oWygpLl0pL2csXCJcXFxcJDFcIikucmVwbGFjZSgvKFxcLyk/OihcXHcrKShbXFw/XFwqXSk/L2csZnVuY3Rpb24oYSxlLGIsYyl7YT1cIj9cIj09PWM/YzpudWxsO2M9XCIqXCI9PT1jP2M6bnVsbDtoLnB1c2goe25hbWU6YixvcHRpb25hbDohIWF9KTtlPWV8fFwiXCI7cmV0dXJuXCJcIisoYT9cIlwiOmUpK1wiKD86XCIrKGE/ZTpcIlwiKSsoYyYmXCIoLis/KVwifHxcIihbXi9dKylcIikrKGF8fFwiXCIpK1wiKVwiKyhhfHxcIlwiKX0pLnJlcGxhY2UoLyhbXFwvJFxcKl0pL2csXCJcXFxcJDFcIik7Zi5yZWdleHA9UmVnRXhwKFwiXlwiK2ErXCIkXCIsYj9cImlcIjpcIlwiKTtyZXR1cm4gZn12YXIgaz17fTt0aGlzLndoZW49ZnVuY3Rpb24oYSxjKXtrW2FdPWUuZXh0ZW5kKHtyZWxvYWRPblNlYXJjaDohMH0sYyxhJiZxKGEsYykpO2lmKGEpe3ZhciBiPVwiL1wiPT1hW2EubGVuZ3RoLTFdP2Euc3Vic3RyKDAsYS5sZW5ndGgtXHJcbjEpOmErXCIvXCI7a1tiXT1lLmV4dGVuZCh7cmVkaXJlY3RUbzphfSxxKGIsYykpfXJldHVybiB0aGlzfTt0aGlzLm90aGVyd2lzZT1mdW5jdGlvbihhKXt0aGlzLndoZW4obnVsbCxhKTtyZXR1cm4gdGhpc307dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRsb2NhdGlvblwiLFwiJHJvdXRlUGFyYW1zXCIsXCIkcVwiLFwiJGluamVjdG9yXCIsXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRzY2VcIixmdW5jdGlvbihhLGMsYixmLG4scSx2LGwpe2Z1bmN0aW9uIGcoKXt2YXIgZD10KCksbT1yLmN1cnJlbnQ7aWYoZCYmbSYmZC4kJHJvdXRlPT09bS4kJHJvdXRlJiZlLmVxdWFscyhkLnBhdGhQYXJhbXMsbS5wYXRoUGFyYW1zKSYmIWQucmVsb2FkT25TZWFyY2gmJiF4KW0ucGFyYW1zPWQucGFyYW1zLGUuY29weShtLnBhcmFtcyxiKSxhLiRicm9hZGNhc3QoXCIkcm91dGVVcGRhdGVcIixtKTtlbHNlIGlmKGR8fG0peD0hMSxhLiRicm9hZGNhc3QoXCIkcm91dGVDaGFuZ2VTdGFydFwiLGQsbSksKHIuY3VycmVudD1cclxuZCkmJmQucmVkaXJlY3RUbyYmKGUuaXNTdHJpbmcoZC5yZWRpcmVjdFRvKT9jLnBhdGgodShkLnJlZGlyZWN0VG8sZC5wYXJhbXMpKS5zZWFyY2goZC5wYXJhbXMpLnJlcGxhY2UoKTpjLnVybChkLnJlZGlyZWN0VG8oZC5wYXRoUGFyYW1zLGMucGF0aCgpLGMuc2VhcmNoKCkpKS5yZXBsYWNlKCkpLGYud2hlbihkKS50aGVuKGZ1bmN0aW9uKCl7aWYoZCl7dmFyIGE9ZS5leHRlbmQoe30sZC5yZXNvbHZlKSxjLGI7ZS5mb3JFYWNoKGEsZnVuY3Rpb24oZCxjKXthW2NdPWUuaXNTdHJpbmcoZCk/bi5nZXQoZCk6bi5pbnZva2UoZCl9KTtlLmlzRGVmaW5lZChjPWQudGVtcGxhdGUpP2UuaXNGdW5jdGlvbihjKSYmKGM9YyhkLnBhcmFtcykpOmUuaXNEZWZpbmVkKGI9ZC50ZW1wbGF0ZVVybCkmJihlLmlzRnVuY3Rpb24oYikmJihiPWIoZC5wYXJhbXMpKSxiPWwuZ2V0VHJ1c3RlZFJlc291cmNlVXJsKGIpLGUuaXNEZWZpbmVkKGIpJiYoZC5sb2FkZWRUZW1wbGF0ZVVybD1iLGM9cS5nZXQoYixcclxue2NhY2hlOnZ9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLmRhdGF9KSkpO2UuaXNEZWZpbmVkKGMpJiYoYS4kdGVtcGxhdGU9Yyk7cmV0dXJuIGYuYWxsKGEpfX0pLnRoZW4oZnVuY3Rpb24oYyl7ZD09ci5jdXJyZW50JiYoZCYmKGQubG9jYWxzPWMsZS5jb3B5KGQucGFyYW1zLGIpKSxhLiRicm9hZGNhc3QoXCIkcm91dGVDaGFuZ2VTdWNjZXNzXCIsZCxtKSl9LGZ1bmN0aW9uKGMpe2Q9PXIuY3VycmVudCYmYS4kYnJvYWRjYXN0KFwiJHJvdXRlQ2hhbmdlRXJyb3JcIixkLG0sYyl9KX1mdW5jdGlvbiB0KCl7dmFyIGEsYjtlLmZvckVhY2goayxmdW5jdGlvbihmLGspe3ZhciBwO2lmKHA9IWIpe3ZhciBzPWMucGF0aCgpO3A9Zi5rZXlzO3ZhciBsPXt9O2lmKGYucmVnZXhwKWlmKHM9Zi5yZWdleHAuZXhlYyhzKSl7Zm9yKHZhciBnPTEscT1zLmxlbmd0aDtnPHE7KytnKXt2YXIgbj1wW2ctMV0scj1cInN0cmluZ1wiPT10eXBlb2Ygc1tnXT9kZWNvZGVVUklDb21wb25lbnQoc1tnXSk6c1tnXTtcclxubiYmciYmKGxbbi5uYW1lXT1yKX1wPWx9ZWxzZSBwPW51bGw7ZWxzZSBwPW51bGw7cD1hPXB9cCYmKGI9aChmLHtwYXJhbXM6ZS5leHRlbmQoe30sYy5zZWFyY2goKSxhKSxwYXRoUGFyYW1zOmF9KSxiLiQkcm91dGU9Zil9KTtyZXR1cm4gYnx8a1tudWxsXSYmaChrW251bGxdLHtwYXJhbXM6e30scGF0aFBhcmFtczp7fX0pfWZ1bmN0aW9uIHUoYSxjKXt2YXIgYj1bXTtlLmZvckVhY2goKGF8fFwiXCIpLnNwbGl0KFwiOlwiKSxmdW5jdGlvbihhLGQpe2lmKDA9PT1kKWIucHVzaChhKTtlbHNle3ZhciBlPWEubWF0Y2goLyhcXHcrKSguKikvKSxmPWVbMV07Yi5wdXNoKGNbZl0pO2IucHVzaChlWzJdfHxcIlwiKTtkZWxldGUgY1tmXX19KTtyZXR1cm4gYi5qb2luKFwiXCIpfXZhciB4PSExLHI9e3JvdXRlczprLHJlbG9hZDpmdW5jdGlvbigpe3g9ITA7YS4kZXZhbEFzeW5jKGcpfX07YS4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsZyk7cmV0dXJuIHJ9XX0pO2gucHJvdmlkZXIoXCIkcm91dGVQYXJhbXNcIixcclxuZnVuY3Rpb24oKXt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm57fX19KTtoLmRpcmVjdGl2ZShcIm5nVmlld1wiLHUpO2guZGlyZWN0aXZlKFwibmdWaWV3XCIseik7dS4kaW5qZWN0PVtcIiRyb3V0ZVwiLFwiJGFuY2hvclNjcm9sbFwiLFwiJGFuaW1hdGVcIl07ei4kaW5qZWN0PVtcIiRjb21waWxlXCIsXCIkY29udHJvbGxlclwiLFwiJHJvdXRlXCJdfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci1yb3V0ZS5taW4uanMubWFwXHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9saWJyYXJpZXNcXFxcYW5ndWxhci1yb3V0ZS5taW4uanNcIixcIi9saWJyYXJpZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4gQW5ndWxhckpTIHYxLjIuMTJcclxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXHJcbiBMaWNlbnNlOiBNSVRcclxuKi9cclxuKGZ1bmN0aW9uKHksdix6KXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gdChnLGEsYil7cS5kaXJlY3RpdmUoZyxbXCIkcGFyc2VcIixcIiRzd2lwZVwiLGZ1bmN0aW9uKGwsbil7dmFyIHI9NzUsaD0wLjMsZD0zMDtyZXR1cm4gZnVuY3Rpb24ocCxtLGspe2Z1bmN0aW9uIGUoZSl7aWYoIXUpcmV0dXJuITE7dmFyIGM9TWF0aC5hYnMoZS55LXUueSk7ZT0oZS54LXUueCkqYTtyZXR1cm4gZiYmYzxyJiYwPGUmJmU+ZCYmYy9lPGh9dmFyIGM9bChrW2ddKSx1LGY7bi5iaW5kKG0se3N0YXJ0OmZ1bmN0aW9uKGUsYyl7dT1lO2Y9ITB9LGNhbmNlbDpmdW5jdGlvbihlKXtmPSExfSxlbmQ6ZnVuY3Rpb24oYSxmKXtlKGEpJiZwLiRhcHBseShmdW5jdGlvbigpe20udHJpZ2dlckhhbmRsZXIoYik7YyhwLHskZXZlbnQ6Zn0pfSl9fSl9fV0pfXZhciBxPXYubW9kdWxlKFwibmdUb3VjaFwiLFtdKTtxLmZhY3RvcnkoXCIkc3dpcGVcIixbZnVuY3Rpb24oKXtmdW5jdGlvbiBnKGEpe3ZhciBiPWEudG91Y2hlcyYmYS50b3VjaGVzLmxlbmd0aD9cclxuYS50b3VjaGVzOlthXTthPWEuY2hhbmdlZFRvdWNoZXMmJmEuY2hhbmdlZFRvdWNoZXNbMF18fGEub3JpZ2luYWxFdmVudCYmYS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzJiZhLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF18fGJbMF0ub3JpZ2luYWxFdmVudHx8YlswXTtyZXR1cm57eDphLmNsaWVudFgseTphLmNsaWVudFl9fXJldHVybntiaW5kOmZ1bmN0aW9uKGEsYil7dmFyIGwsbixyLGgsZD0hMTthLm9uKFwidG91Y2hzdGFydCBtb3VzZWRvd25cIixmdW5jdGlvbihhKXtyPWcoYSk7ZD0hMDtuPWw9MDtoPXI7Yi5zdGFydCYmYi5zdGFydChyLGEpfSk7YS5vbihcInRvdWNoY2FuY2VsXCIsZnVuY3Rpb24oYSl7ZD0hMTtiLmNhbmNlbCYmYi5jYW5jZWwoYSl9KTthLm9uKFwidG91Y2htb3ZlIG1vdXNlbW92ZVwiLGZ1bmN0aW9uKGEpe2lmKGQmJnIpe3ZhciBtPWcoYSk7bCs9TWF0aC5hYnMobS54LWgueCk7bis9TWF0aC5hYnMobS55LWgueSk7aD1tOzEwPmwmJjEwPm58fFxyXG4obj5sPyhkPSExLGIuY2FuY2VsJiZiLmNhbmNlbChhKSk6KGEucHJldmVudERlZmF1bHQoKSxiLm1vdmUmJmIubW92ZShtLGEpKSl9fSk7YS5vbihcInRvdWNoZW5kIG1vdXNldXBcIixmdW5jdGlvbihhKXtkJiYoZD0hMSxiLmVuZCYmYi5lbmQoZyhhKSxhKSl9KX19fV0pO3EuY29uZmlnKFtcIiRwcm92aWRlXCIsZnVuY3Rpb24oZyl7Zy5kZWNvcmF0b3IoXCJuZ0NsaWNrRGlyZWN0aXZlXCIsW1wiJGRlbGVnYXRlXCIsZnVuY3Rpb24oYSl7YS5zaGlmdCgpO3JldHVybiBhfV0pfV0pO3EuZGlyZWN0aXZlKFwibmdDbGlja1wiLFtcIiRwYXJzZVwiLFwiJHRpbWVvdXRcIixcIiRyb290RWxlbWVudFwiLGZ1bmN0aW9uKGcsYSxiKXtmdW5jdGlvbiBsKGEsYyxiKXtmb3IodmFyIGY9MDtmPGEubGVuZ3RoO2YrPTIpaWYoTWF0aC5hYnMoYVtmXS1jKTxkJiZNYXRoLmFicyhhW2YrMV0tYik8ZClyZXR1cm4gYS5zcGxpY2UoZixmKzIpLCEwO3JldHVybiExfWZ1bmN0aW9uIG4oYSl7aWYoIShEYXRlLm5vdygpLW0+aCkpe3ZhciBjPVxyXG5hLnRvdWNoZXMmJmEudG91Y2hlcy5sZW5ndGg/YS50b3VjaGVzOlthXSxiPWNbMF0uY2xpZW50WCxjPWNbMF0uY2xpZW50WTsxPmImJjE+Y3x8bChrLGIsYyl8fChhLnN0b3BQcm9wYWdhdGlvbigpLGEucHJldmVudERlZmF1bHQoKSxhLnRhcmdldCYmYS50YXJnZXQuYmx1cigpKX19ZnVuY3Rpb24gcihiKXtiPWIudG91Y2hlcyYmYi50b3VjaGVzLmxlbmd0aD9iLnRvdWNoZXM6W2JdO3ZhciBjPWJbMF0uY2xpZW50WCxkPWJbMF0uY2xpZW50WTtrLnB1c2goYyxkKTthKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTxrLmxlbmd0aDthKz0yKWlmKGtbYV09PWMmJmtbYSsxXT09ZCl7ay5zcGxpY2UoYSxhKzIpO2JyZWFrfX0saCwhMSl9dmFyIGg9MjUwMCxkPTI1LHA9XCJuZy1jbGljay1hY3RpdmVcIixtLGs7cmV0dXJuIGZ1bmN0aW9uKGEsYyxkKXtmdW5jdGlvbiBmKCl7cT0hMTtjLnJlbW92ZUNsYXNzKHApfXZhciBoPWcoZC5uZ0NsaWNrKSxxPSExLHMsdCx3LHg7Yy5vbihcInRvdWNoc3RhcnRcIixcclxuZnVuY3Rpb24oYSl7cT0hMDtzPWEudGFyZ2V0P2EudGFyZ2V0OmEuc3JjRWxlbWVudDszPT1zLm5vZGVUeXBlJiYocz1zLnBhcmVudE5vZGUpO2MuYWRkQ2xhc3MocCk7dD1EYXRlLm5vdygpO2E9YS50b3VjaGVzJiZhLnRvdWNoZXMubGVuZ3RoP2EudG91Y2hlczpbYV07YT1hWzBdLm9yaWdpbmFsRXZlbnR8fGFbMF07dz1hLmNsaWVudFg7eD1hLmNsaWVudFl9KTtjLm9uKFwidG91Y2htb3ZlXCIsZnVuY3Rpb24oYSl7ZigpfSk7Yy5vbihcInRvdWNoY2FuY2VsXCIsZnVuY3Rpb24oYSl7ZigpfSk7Yy5vbihcInRvdWNoZW5kXCIsZnVuY3Rpb24oYSl7dmFyIGg9RGF0ZS5ub3coKS10LGU9YS5jaGFuZ2VkVG91Y2hlcyYmYS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg/YS5jaGFuZ2VkVG91Y2hlczphLnRvdWNoZXMmJmEudG91Y2hlcy5sZW5ndGg/YS50b3VjaGVzOlthXSxnPWVbMF0ub3JpZ2luYWxFdmVudHx8ZVswXSxlPWcuY2xpZW50WCxnPWcuY2xpZW50WSxwPU1hdGguc3FydChNYXRoLnBvdyhlLVxyXG53LDIpK01hdGgucG93KGcteCwyKSk7cSYmKDc1MD5oJiYxMj5wKSYmKGt8fChiWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG4sITApLGJbMF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixyLCEwKSxrPVtdKSxtPURhdGUubm93KCksbChrLGUsZykscyYmcy5ibHVyKCksdi5pc0RlZmluZWQoZC5kaXNhYmxlZCkmJiExIT09ZC5kaXNhYmxlZHx8Yy50cmlnZ2VySGFuZGxlcihcImNsaWNrXCIsW2FdKSk7ZigpfSk7Yy5vbmNsaWNrPWZ1bmN0aW9uKGEpe307Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oYixjKXthLiRhcHBseShmdW5jdGlvbigpe2goYSx7JGV2ZW50OmN8fGJ9KX0pfSk7Yy5vbihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGEpe2MuYWRkQ2xhc3MocCl9KTtjLm9uKFwibW91c2Vtb3ZlIG1vdXNldXBcIixmdW5jdGlvbihhKXtjLnJlbW92ZUNsYXNzKHApfSl9fV0pO3QoXCJuZ1N3aXBlTGVmdFwiLC0xLFwic3dpcGVsZWZ0XCIpO3QoXCJuZ1N3aXBlUmlnaHRcIiwxLFwic3dpcGVyaWdodFwiKX0pKHdpbmRvdyxcclxud2luZG93LmFuZ3VsYXIpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLXRvdWNoLm1pbi5qcy5tYXBcclxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnJhcmllc1xcXFxhbmd1bGFyLXRvdWNoLm1pbi5qc1wiLFwiL2xpYnJhcmllc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiBBbmd1bGFySlMgdjEuMi4xMlxyXG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcclxuIExpY2Vuc2U6IE1JVFxyXG4qL1xyXG4oZnVuY3Rpb24oUCxSLHMpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB0KGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50c1swXSxjLGE9XCJbXCIrKGI/YitcIjpcIjpcIlwiKSthK1wiXSBodHRwOi8vZXJyb3JzLmFuZ3VsYXJqcy5vcmcvMS4yLjEyL1wiKyhiP2IrXCIvXCI6XCJcIikrYTtmb3IoYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYT1hKygxPT1jP1wiP1wiOlwiJlwiKStcInBcIisoYy0xKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoXCJmdW5jdGlvblwiPT10eXBlb2YgYXJndW1lbnRzW2NdP2FyZ3VtZW50c1tjXS50b1N0cmluZygpLnJlcGxhY2UoLyBcXHtbXFxzXFxTXSokLyxcIlwiKTpcInVuZGVmaW5lZFwiPT10eXBlb2YgYXJndW1lbnRzW2NdP1widW5kZWZpbmVkXCI6XCJzdHJpbmdcIiE9dHlwZW9mIGFyZ3VtZW50c1tjXT9KU09OLnN0cmluZ2lmeShhcmd1bWVudHNbY10pOmFyZ3VtZW50c1tjXSk7cmV0dXJuIEVycm9yKGEpfX1mdW5jdGlvbiBxYihiKXtpZihudWxsPT1ifHx6YShiKSlyZXR1cm4hMTtcclxudmFyIGE9Yi5sZW5ndGg7cmV0dXJuIDE9PT1iLm5vZGVUeXBlJiZhPyEwOncoYil8fEwoYil8fDA9PT1hfHxcIm51bWJlclwiPT09dHlwZW9mIGEmJjA8YSYmYS0xIGluIGJ9ZnVuY3Rpb24gcShiLGEsYyl7dmFyIGQ7aWYoYilpZihNKGIpKWZvcihkIGluIGIpXCJwcm90b3R5cGVcIj09ZHx8KFwibGVuZ3RoXCI9PWR8fFwibmFtZVwiPT1kfHxiLmhhc093blByb3BlcnR5JiYhYi5oYXNPd25Qcm9wZXJ0eShkKSl8fGEuY2FsbChjLGJbZF0sZCk7ZWxzZSBpZihiLmZvckVhY2gmJmIuZm9yRWFjaCE9PXEpYi5mb3JFYWNoKGEsYyk7ZWxzZSBpZihxYihiKSlmb3IoZD0wO2Q8Yi5sZW5ndGg7ZCsrKWEuY2FsbChjLGJbZF0sZCk7ZWxzZSBmb3IoZCBpbiBiKWIuaGFzT3duUHJvcGVydHkoZCkmJmEuY2FsbChjLGJbZF0sZCk7cmV0dXJuIGJ9ZnVuY3Rpb24gTmIoYil7dmFyIGE9W10sYztmb3IoYyBpbiBiKWIuaGFzT3duUHJvcGVydHkoYykmJmEucHVzaChjKTtyZXR1cm4gYS5zb3J0KCl9ZnVuY3Rpb24gT2MoYixcclxuYSxjKXtmb3IodmFyIGQ9TmIoYiksZT0wO2U8ZC5sZW5ndGg7ZSsrKWEuY2FsbChjLGJbZFtlXV0sZFtlXSk7cmV0dXJuIGR9ZnVuY3Rpb24gT2IoYil7cmV0dXJuIGZ1bmN0aW9uKGEsYyl7YihjLGEpfX1mdW5jdGlvbiBaYSgpe2Zvcih2YXIgYj1pYS5sZW5ndGgsYTtiOyl7Yi0tO2E9aWFbYl0uY2hhckNvZGVBdCgwKTtpZig1Nz09YSlyZXR1cm4gaWFbYl09XCJBXCIsaWEuam9pbihcIlwiKTtpZig5MD09YSlpYVtiXT1cIjBcIjtlbHNlIHJldHVybiBpYVtiXT1TdHJpbmcuZnJvbUNoYXJDb2RlKGErMSksaWEuam9pbihcIlwiKX1pYS51bnNoaWZ0KFwiMFwiKTtyZXR1cm4gaWEuam9pbihcIlwiKX1mdW5jdGlvbiBQYihiLGEpe2E/Yi4kJGhhc2hLZXk9YTpkZWxldGUgYi4kJGhhc2hLZXl9ZnVuY3Rpb24geShiKXt2YXIgYT1iLiQkaGFzaEtleTtxKGFyZ3VtZW50cyxmdW5jdGlvbihhKXthIT09YiYmcShhLGZ1bmN0aW9uKGEsYyl7YltjXT1hfSl9KTtQYihiLGEpO3JldHVybiBifWZ1bmN0aW9uIFYoYil7cmV0dXJuIHBhcnNlSW50KGIsXHJcbjEwKX1mdW5jdGlvbiBRYihiLGEpe3JldHVybiB5KG5ldyAoeShmdW5jdGlvbigpe30se3Byb3RvdHlwZTpifSkpLGEpfWZ1bmN0aW9uIEUoKXt9ZnVuY3Rpb24gQWEoYil7cmV0dXJuIGJ9ZnVuY3Rpb24gWShiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYn19ZnVuY3Rpb24gdShiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gRChiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIGJ9ZnVuY3Rpb24gVyhiKXtyZXR1cm4gbnVsbCE9YiYmXCJvYmplY3RcIj09PXR5cGVvZiBifWZ1bmN0aW9uIHcoYil7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBifWZ1bmN0aW9uIHJiKGIpe3JldHVyblwibnVtYmVyXCI9PT10eXBlb2YgYn1mdW5jdGlvbiBLYShiKXtyZXR1cm5cIltvYmplY3QgRGF0ZV1cIj09PUxhLmNhbGwoYil9ZnVuY3Rpb24gTChiKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1MYS5jYWxsKGIpfWZ1bmN0aW9uIE0oYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGJ9XHJcbmZ1bmN0aW9uICRhKGIpe3JldHVyblwiW29iamVjdCBSZWdFeHBdXCI9PT1MYS5jYWxsKGIpfWZ1bmN0aW9uIHphKGIpe3JldHVybiBiJiZiLmRvY3VtZW50JiZiLmxvY2F0aW9uJiZiLmFsZXJ0JiZiLnNldEludGVydmFsfWZ1bmN0aW9uIFBjKGIpe3JldHVybiEoIWJ8fCEoYi5ub2RlTmFtZXx8Yi5vbiYmYi5maW5kKSl9ZnVuY3Rpb24gUWMoYixhLGMpe3ZhciBkPVtdO3EoYixmdW5jdGlvbihiLGcsZil7ZC5wdXNoKGEuY2FsbChjLGIsZyxmKSl9KTtyZXR1cm4gZH1mdW5jdGlvbiBhYihiLGEpe2lmKGIuaW5kZXhPZilyZXR1cm4gYi5pbmRleE9mKGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKWlmKGE9PT1iW2NdKXJldHVybiBjO3JldHVybi0xfWZ1bmN0aW9uIE1hKGIsYSl7dmFyIGM9YWIoYixhKTswPD1jJiZiLnNwbGljZShjLDEpO3JldHVybiBhfWZ1bmN0aW9uICQoYixhKXtpZih6YShiKXx8YiYmYi4kZXZhbEFzeW5jJiZiLiR3YXRjaCl0aHJvdyBOYShcImNwd3NcIik7aWYoYSl7aWYoYj09PVxyXG5hKXRocm93IE5hKFwiY3BpXCIpO2lmKEwoYikpZm9yKHZhciBjPWEubGVuZ3RoPTA7YzxiLmxlbmd0aDtjKyspYS5wdXNoKCQoYltjXSkpO2Vsc2V7Yz1hLiQkaGFzaEtleTtxKGEsZnVuY3Rpb24oYixjKXtkZWxldGUgYVtjXX0pO2Zvcih2YXIgZCBpbiBiKWFbZF09JChiW2RdKTtQYihhLGMpfX1lbHNlKGE9YikmJihMKGIpP2E9JChiLFtdKTpLYShiKT9hPW5ldyBEYXRlKGIuZ2V0VGltZSgpKTokYShiKT9hPVJlZ0V4cChiLnNvdXJjZSk6VyhiKSYmKGE9JChiLHt9KSkpO3JldHVybiBhfWZ1bmN0aW9uIFJiKGIsYSl7YT1hfHx7fTtmb3IodmFyIGMgaW4gYikhYi5oYXNPd25Qcm9wZXJ0eShjKXx8XCIkXCI9PT1jLmNoYXJBdCgwKSYmXCIkXCI9PT1jLmNoYXJBdCgxKXx8KGFbY109YltjXSk7cmV0dXJuIGF9ZnVuY3Rpb24gdGEoYixhKXtpZihiPT09YSlyZXR1cm4hMDtpZihudWxsPT09Ynx8bnVsbD09PWEpcmV0dXJuITE7aWYoYiE9PWImJmEhPT1hKXJldHVybiEwO3ZhciBjPXR5cGVvZiBiLFxyXG5kO2lmKGM9PXR5cGVvZiBhJiZcIm9iamVjdFwiPT1jKWlmKEwoYikpe2lmKCFMKGEpKXJldHVybiExO2lmKChjPWIubGVuZ3RoKT09YS5sZW5ndGgpe2ZvcihkPTA7ZDxjO2QrKylpZighdGEoYltkXSxhW2RdKSlyZXR1cm4hMTtyZXR1cm4hMH19ZWxzZXtpZihLYShiKSlyZXR1cm4gS2EoYSkmJmIuZ2V0VGltZSgpPT1hLmdldFRpbWUoKTtpZigkYShiKSYmJGEoYSkpcmV0dXJuIGIudG9TdHJpbmcoKT09YS50b1N0cmluZygpO2lmKGImJmIuJGV2YWxBc3luYyYmYi4kd2F0Y2h8fGEmJmEuJGV2YWxBc3luYyYmYS4kd2F0Y2h8fHphKGIpfHx6YShhKXx8TChhKSlyZXR1cm4hMTtjPXt9O2ZvcihkIGluIGIpaWYoXCIkXCIhPT1kLmNoYXJBdCgwKSYmIU0oYltkXSkpe2lmKCF0YShiW2RdLGFbZF0pKXJldHVybiExO2NbZF09ITB9Zm9yKGQgaW4gYSlpZighYy5oYXNPd25Qcm9wZXJ0eShkKSYmXCIkXCIhPT1kLmNoYXJBdCgwKSYmYVtkXSE9PXMmJiFNKGFbZF0pKXJldHVybiExO3JldHVybiEwfXJldHVybiExfVxyXG5mdW5jdGlvbiBTYigpe3JldHVybiBSLnNlY3VyaXR5UG9saWN5JiZSLnNlY3VyaXR5UG9saWN5LmlzQWN0aXZlfHxSLnF1ZXJ5U2VsZWN0b3ImJiEoIVIucXVlcnlTZWxlY3RvcihcIltuZy1jc3BdXCIpJiYhUi5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmctY3NwXVwiKSl9ZnVuY3Rpb24gYmIoYixhKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGg/dWEuY2FsbChhcmd1bWVudHMsMik6W107cmV0dXJuIU0oYSl8fGEgaW5zdGFuY2VvZiBSZWdFeHA/YTpjLmxlbmd0aD9mdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP2EuYXBwbHkoYixjLmNvbmNhdCh1YS5jYWxsKGFyZ3VtZW50cywwKSkpOmEuYXBwbHkoYixjKX06ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD9hLmFwcGx5KGIsYXJndW1lbnRzKTphLmNhbGwoYil9fWZ1bmN0aW9uIFJjKGIsYSl7dmFyIGM9YTtcInN0cmluZ1wiPT09dHlwZW9mIGImJlwiJFwiPT09Yi5jaGFyQXQoMCk/Yz1zOnphKGEpP2M9XCIkV0lORE9XXCI6XHJcbmEmJlI9PT1hP2M9XCIkRE9DVU1FTlRcIjphJiYoYS4kZXZhbEFzeW5jJiZhLiR3YXRjaCkmJihjPVwiJFNDT1BFXCIpO3JldHVybiBjfWZ1bmN0aW9uIHBhKGIsYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBiP3M6SlNPTi5zdHJpbmdpZnkoYixSYyxhP1wiICBcIjpudWxsKX1mdW5jdGlvbiBUYihiKXtyZXR1cm4gdyhiKT9KU09OLnBhcnNlKGIpOmJ9ZnVuY3Rpb24gT2EoYil7XCJmdW5jdGlvblwiPT09dHlwZW9mIGI/Yj0hMDpiJiYwIT09Yi5sZW5ndGg/KGI9eChcIlwiK2IpLGI9IShcImZcIj09Ynx8XCIwXCI9PWJ8fFwiZmFsc2VcIj09Ynx8XCJub1wiPT1ifHxcIm5cIj09Ynx8XCJbXVwiPT1iKSk6Yj0hMTtyZXR1cm4gYn1mdW5jdGlvbiBmYShiKXtiPXooYikuY2xvbmUoKTt0cnl7Yi5lbXB0eSgpfWNhdGNoKGEpe312YXIgYz16KFwiPGRpdj5cIikuYXBwZW5kKGIpLmh0bWwoKTt0cnl7cmV0dXJuIDM9PT1iWzBdLm5vZGVUeXBlP3goYyk6Yy5tYXRjaCgvXig8W14+XSs+KS8pWzFdLnJlcGxhY2UoL148KFtcXHdcXC1dKykvLFxyXG5mdW5jdGlvbihhLGIpe3JldHVyblwiPFwiK3goYil9KX1jYXRjaChkKXtyZXR1cm4geChjKX19ZnVuY3Rpb24gVWIoYil7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoYil9Y2F0Y2goYSl7fX1mdW5jdGlvbiBWYihiKXt2YXIgYT17fSxjLGQ7cSgoYnx8XCJcIikuc3BsaXQoXCImXCIpLGZ1bmN0aW9uKGIpe2ImJihjPWIuc3BsaXQoXCI9XCIpLGQ9VWIoY1swXSksRChkKSYmKGI9RChjWzFdKT9VYihjWzFdKTohMCxhW2RdP0woYVtkXSk/YVtkXS5wdXNoKGIpOmFbZF09W2FbZF0sYl06YVtkXT1iKSl9KTtyZXR1cm4gYX1mdW5jdGlvbiBXYihiKXt2YXIgYT1bXTtxKGIsZnVuY3Rpb24oYixkKXtMKGIpP3EoYixmdW5jdGlvbihiKXthLnB1c2godmEoZCwhMCkrKCEwPT09Yj9cIlwiOlwiPVwiK3ZhKGIsITApKSl9KTphLnB1c2godmEoZCwhMCkrKCEwPT09Yj9cIlwiOlwiPVwiK3ZhKGIsITApKSl9KTtyZXR1cm4gYS5sZW5ndGg/YS5qb2luKFwiJlwiKTpcIlwifWZ1bmN0aW9uIHNiKGIpe3JldHVybiB2YShiLFxyXG4hMCkucmVwbGFjZSgvJTI2L2dpLFwiJlwiKS5yZXBsYWNlKC8lM0QvZ2ksXCI9XCIpLnJlcGxhY2UoLyUyQi9naSxcIitcIil9ZnVuY3Rpb24gdmEoYixhKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGIpLnJlcGxhY2UoLyU0MC9naSxcIkBcIikucmVwbGFjZSgvJTNBL2dpLFwiOlwiKS5yZXBsYWNlKC8lMjQvZyxcIiRcIikucmVwbGFjZSgvJTJDL2dpLFwiLFwiKS5yZXBsYWNlKC8lMjAvZyxhP1wiJTIwXCI6XCIrXCIpfWZ1bmN0aW9uIFNjKGIsYSl7ZnVuY3Rpb24gYyhhKXthJiZkLnB1c2goYSl9dmFyIGQ9W2JdLGUsZyxmPVtcIm5nOmFwcFwiLFwibmctYXBwXCIsXCJ4LW5nLWFwcFwiLFwiZGF0YS1uZy1hcHBcIl0saD0vXFxzbmdbOlxcLV1hcHAoOlxccyooW1xcd1xcZF9dKyk7Pyk/XFxzLztxKGYsZnVuY3Rpb24oYSl7ZlthXT0hMDtjKFIuZ2V0RWxlbWVudEJ5SWQoYSkpO2E9YS5yZXBsYWNlKFwiOlwiLFwiXFxcXDpcIik7Yi5xdWVyeVNlbGVjdG9yQWxsJiYocShiLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrYSksYykscShiLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrXHJcbmErXCJcXFxcOlwiKSxjKSxxKGIucXVlcnlTZWxlY3RvckFsbChcIltcIithK1wiXVwiKSxjKSl9KTtxKGQsZnVuY3Rpb24oYSl7aWYoIWUpe3ZhciBiPWguZXhlYyhcIiBcIithLmNsYXNzTmFtZStcIiBcIik7Yj8oZT1hLGc9KGJbMl18fFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIixcIikpOnEoYS5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGIpeyFlJiZmW2IubmFtZV0mJihlPWEsZz1iLnZhbHVlKX0pfX0pO2UmJmEoZSxnP1tnXTpbXSl9ZnVuY3Rpb24gWGIoYixhKXt2YXIgYz1mdW5jdGlvbigpe2I9eihiKTtpZihiLmluamVjdG9yKCkpe3ZhciBjPWJbMF09PT1SP1wiZG9jdW1lbnRcIjpmYShiKTt0aHJvdyBOYShcImJ0c3RycGRcIixjKTt9YT1hfHxbXTthLnVuc2hpZnQoW1wiJHByb3ZpZGVcIixmdW5jdGlvbihhKXthLnZhbHVlKFwiJHJvb3RFbGVtZW50XCIsYil9XSk7YS51bnNoaWZ0KFwibmdcIik7Yz1ZYihhKTtjLmludm9rZShbXCIkcm9vdFNjb3BlXCIsXCIkcm9vdEVsZW1lbnRcIixcIiRjb21waWxlXCIsXCIkaW5qZWN0b3JcIixcIiRhbmltYXRlXCIsXHJcbmZ1bmN0aW9uKGEsYixjLGQsZSl7YS4kYXBwbHkoZnVuY3Rpb24oKXtiLmRhdGEoXCIkaW5qZWN0b3JcIixkKTtjKGIpKGEpfSl9XSk7cmV0dXJuIGN9LGQ9L15OR19ERUZFUl9CT09UU1RSQVAhLztpZihQJiYhZC50ZXN0KFAubmFtZSkpcmV0dXJuIGMoKTtQLm5hbWU9UC5uYW1lLnJlcGxhY2UoZCxcIlwiKTtCYS5yZXN1bWVCb290c3RyYXA9ZnVuY3Rpb24oYil7cShiLGZ1bmN0aW9uKGIpe2EucHVzaChiKX0pO2MoKX19ZnVuY3Rpb24gY2IoYixhKXthPWF8fFwiX1wiO3JldHVybiBiLnJlcGxhY2UoVGMsZnVuY3Rpb24oYixkKXtyZXR1cm4oZD9hOlwiXCIpK2IudG9Mb3dlckNhc2UoKX0pfWZ1bmN0aW9uIHRiKGIsYSxjKXtpZighYil0aHJvdyBOYShcImFyZXFcIixhfHxcIj9cIixjfHxcInJlcXVpcmVkXCIpO3JldHVybiBifWZ1bmN0aW9uIFBhKGIsYSxjKXtjJiZMKGIpJiYoYj1iW2IubGVuZ3RoLTFdKTt0YihNKGIpLGEsXCJub3QgYSBmdW5jdGlvbiwgZ290IFwiKyhiJiZcIm9iamVjdFwiPT10eXBlb2YgYj9cclxuYi5jb25zdHJ1Y3Rvci5uYW1lfHxcIk9iamVjdFwiOnR5cGVvZiBiKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gd2EoYixhKXtpZihcImhhc093blByb3BlcnR5XCI9PT1iKXRocm93IE5hKFwiYmFkbmFtZVwiLGEpO31mdW5jdGlvbiBaYihiLGEsYyl7aWYoIWEpcmV0dXJuIGI7YT1hLnNwbGl0KFwiLlwiKTtmb3IodmFyIGQsZT1iLGc9YS5sZW5ndGgsZj0wO2Y8ZztmKyspZD1hW2ZdLGImJihiPShlPWIpW2RdKTtyZXR1cm4hYyYmTShiKT9iYihlLGIpOmJ9ZnVuY3Rpb24gdWIoYil7dmFyIGE9YlswXTtiPWJbYi5sZW5ndGgtMV07aWYoYT09PWIpcmV0dXJuIHooYSk7dmFyIGM9W2FdO2Rve2E9YS5uZXh0U2libGluZztpZighYSlicmVhaztjLnB1c2goYSl9d2hpbGUoYSE9PWIpO3JldHVybiB6KGMpfWZ1bmN0aW9uIFVjKGIpe3ZhciBhPXQoXCIkaW5qZWN0b3JcIiksYz10KFwibmdcIik7Yj1iLmFuZ3VsYXJ8fChiLmFuZ3VsYXI9e30pO2IuJCRtaW5FcnI9Yi4kJG1pbkVycnx8dDtyZXR1cm4gYi5tb2R1bGV8fFxyXG4oYi5tb2R1bGU9ZnVuY3Rpb24oKXt2YXIgYj17fTtyZXR1cm4gZnVuY3Rpb24oZSxnLGYpe2lmKFwiaGFzT3duUHJvcGVydHlcIj09PWUpdGhyb3cgYyhcImJhZG5hbWVcIixcIm1vZHVsZVwiKTtnJiZiLmhhc093blByb3BlcnR5KGUpJiYoYltlXT1udWxsKTtyZXR1cm4gYltlXXx8KGJbZV09ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsZCxlKXtyZXR1cm4gZnVuY3Rpb24oKXtjW2V8fFwicHVzaFwiXShbYSxkLGFyZ3VtZW50c10pO3JldHVybiBufX1pZighZyl0aHJvdyBhKFwibm9tb2RcIixlKTt2YXIgYz1bXSxkPVtdLGw9YihcIiRpbmplY3RvclwiLFwiaW52b2tlXCIpLG49e19pbnZva2VRdWV1ZTpjLF9ydW5CbG9ja3M6ZCxyZXF1aXJlczpnLG5hbWU6ZSxwcm92aWRlcjpiKFwiJHByb3ZpZGVcIixcInByb3ZpZGVyXCIpLGZhY3Rvcnk6YihcIiRwcm92aWRlXCIsXCJmYWN0b3J5XCIpLHNlcnZpY2U6YihcIiRwcm92aWRlXCIsXCJzZXJ2aWNlXCIpLHZhbHVlOmIoXCIkcHJvdmlkZVwiLFwidmFsdWVcIiksY29uc3RhbnQ6YihcIiRwcm92aWRlXCIsXHJcblwiY29uc3RhbnRcIixcInVuc2hpZnRcIiksYW5pbWF0aW9uOmIoXCIkYW5pbWF0ZVByb3ZpZGVyXCIsXCJyZWdpc3RlclwiKSxmaWx0ZXI6YihcIiRmaWx0ZXJQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksY29udHJvbGxlcjpiKFwiJGNvbnRyb2xsZXJQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksZGlyZWN0aXZlOmIoXCIkY29tcGlsZVByb3ZpZGVyXCIsXCJkaXJlY3RpdmVcIiksY29uZmlnOmwscnVuOmZ1bmN0aW9uKGEpe2QucHVzaChhKTtyZXR1cm4gdGhpc319O2YmJmwoZik7cmV0dXJuIG59KCkpfX0oKSl9ZnVuY3Rpb24gUWEoYil7cmV0dXJuIGIucmVwbGFjZShWYyxmdW5jdGlvbihhLGIsZCxlKXtyZXR1cm4gZT9kLnRvVXBwZXJDYXNlKCk6ZH0pLnJlcGxhY2UoV2MsXCJNb3okMVwiKX1mdW5jdGlvbiB2YihiLGEsYyxkKXtmdW5jdGlvbiBlKGIpe3ZhciBlPWMmJmI/W3RoaXMuZmlsdGVyKGIpXTpbdGhpc10sbT1hLGssbCxuLHAscixGO2lmKCFkfHxudWxsIT1iKWZvcig7ZS5sZW5ndGg7KWZvcihrPWUuc2hpZnQoKSxcclxubD0wLG49ay5sZW5ndGg7bDxuO2wrKylmb3IocD16KGtbbF0pLG0/cC50cmlnZ2VySGFuZGxlcihcIiRkZXN0cm95XCIpOm09IW0scj0wLHA9KEY9cC5jaGlsZHJlbigpKS5sZW5ndGg7cjxwO3IrKyllLnB1c2goQ2EoRltyXSkpO3JldHVybiBnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZz1DYS5mbltiXSxnPWcuJG9yaWdpbmFsfHxnO2UuJG9yaWdpbmFsPWc7Q2EuZm5bYl09ZX1mdW5jdGlvbiBPKGIpe2lmKGIgaW5zdGFuY2VvZiBPKXJldHVybiBiO3coYikmJihiPVooYikpO2lmKCEodGhpcyBpbnN0YW5jZW9mIE8pKXtpZih3KGIpJiZcIjxcIiE9Yi5jaGFyQXQoMCkpdGhyb3cgd2IoXCJub3NlbFwiKTtyZXR1cm4gbmV3IE8oYil9aWYodyhiKSl7dmFyIGE9Ui5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2EuaW5uZXJIVE1MPVwiPGRpdj4mIzE2MDs8L2Rpdj5cIitiO2EucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTt4Yih0aGlzLGEuY2hpbGROb2Rlcyk7eihSLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSkuYXBwZW5kKHRoaXMpfWVsc2UgeGIodGhpcyxcclxuYil9ZnVuY3Rpb24geWIoYil7cmV0dXJuIGIuY2xvbmVOb2RlKCEwKX1mdW5jdGlvbiBEYShiKXskYihiKTt2YXIgYT0wO2ZvcihiPWIuY2hpbGROb2Rlc3x8W107YTxiLmxlbmd0aDthKyspRGEoYlthXSl9ZnVuY3Rpb24gYWMoYixhLGMsZCl7aWYoRChkKSl0aHJvdyB3YihcIm9mZmFyZ3NcIik7dmFyIGU9amEoYixcImV2ZW50c1wiKTtqYShiLFwiaGFuZGxlXCIpJiYodShhKT9xKGUsZnVuY3Rpb24oYSxjKXt6YihiLGMsYSk7ZGVsZXRlIGVbY119KTpxKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe3UoYyk/KHpiKGIsYSxlW2FdKSxkZWxldGUgZVthXSk6TWEoZVthXXx8W10sYyl9KSl9ZnVuY3Rpb24gJGIoYixhKXt2YXIgYz1iW2RiXSxkPVJhW2NdO2QmJihhP2RlbGV0ZSBSYVtjXS5kYXRhW2FdOihkLmhhbmRsZSYmKGQuZXZlbnRzLiRkZXN0cm95JiZkLmhhbmRsZSh7fSxcIiRkZXN0cm95XCIpLGFjKGIpKSxkZWxldGUgUmFbY10sYltkYl09cykpfWZ1bmN0aW9uIGphKGIsYSxjKXt2YXIgZD1cclxuYltkYl0sZD1SYVtkfHwtMV07aWYoRChjKSlkfHwoYltkYl09ZD0rK1hjLGQ9UmFbZF09e30pLGRbYV09YztlbHNlIHJldHVybiBkJiZkW2FdfWZ1bmN0aW9uIGJjKGIsYSxjKXt2YXIgZD1qYShiLFwiZGF0YVwiKSxlPUQoYyksZz0hZSYmRChhKSxmPWcmJiFXKGEpO2R8fGZ8fGphKGIsXCJkYXRhXCIsZD17fSk7aWYoZSlkW2FdPWM7ZWxzZSBpZihnKXtpZihmKXJldHVybiBkJiZkW2FdO3koZCxhKX1lbHNlIHJldHVybiBkfWZ1bmN0aW9uIEFiKGIsYSl7cmV0dXJuIGIuZ2V0QXR0cmlidXRlPy0xPChcIiBcIisoYi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csXCIgXCIpLmluZGV4T2YoXCIgXCIrYStcIiBcIik6ITF9ZnVuY3Rpb24gQmIoYixhKXthJiZiLnNldEF0dHJpYnV0ZSYmcShhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhKXtiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsWigoXCIgXCIrKGIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLFxyXG5cIiBcIikucmVwbGFjZShcIiBcIitaKGEpK1wiIFwiLFwiIFwiKSkpfSl9ZnVuY3Rpb24gQ2IoYixhKXtpZihhJiZiLnNldEF0dHJpYnV0ZSl7dmFyIGM9KFwiIFwiKyhiLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcIiBcIik7cShhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhKXthPVooYSk7LTE9PT1jLmluZGV4T2YoXCIgXCIrYStcIiBcIikmJihjKz1hK1wiIFwiKX0pO2Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixaKGMpKX19ZnVuY3Rpb24geGIoYixhKXtpZihhKXthPWEubm9kZU5hbWV8fCFEKGEubGVuZ3RoKXx8emEoYSk/W2FdOmE7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspYi5wdXNoKGFbY10pfX1mdW5jdGlvbiBjYyhiLGEpe3JldHVybiBlYihiLFwiJFwiKyhhfHxcIm5nQ29udHJvbGxlclwiKStcIkNvbnRyb2xsZXJcIil9ZnVuY3Rpb24gZWIoYixhLGMpe2I9eihiKTs5PT1iWzBdLm5vZGVUeXBlJiYoYj1iLmZpbmQoXCJodG1sXCIpKTtmb3IoYT1MKGEpP2E6W2FdO2IubGVuZ3RoOyl7Zm9yKHZhciBkPVxyXG4wLGU9YS5sZW5ndGg7ZDxlO2QrKylpZigoYz1iLmRhdGEoYVtkXSkpIT09cylyZXR1cm4gYztiPWIucGFyZW50KCl9fWZ1bmN0aW9uIGRjKGIpe2Zvcih2YXIgYT0wLGM9Yi5jaGlsZE5vZGVzO2E8Yy5sZW5ndGg7YSsrKURhKGNbYV0pO2Zvcig7Yi5maXJzdENoaWxkOyliLnJlbW92ZUNoaWxkKGIuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gZWMoYixhKXt2YXIgYz1mYlthLnRvTG93ZXJDYXNlKCldO3JldHVybiBjJiZmY1tiLm5vZGVOYW1lXSYmY31mdW5jdGlvbiBZYyhiLGEpe3ZhciBjPWZ1bmN0aW9uKGMsZSl7Yy5wcmV2ZW50RGVmYXVsdHx8KGMucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtjLnJldHVyblZhbHVlPSExfSk7Yy5zdG9wUHJvcGFnYXRpb258fChjLnN0b3BQcm9wYWdhdGlvbj1mdW5jdGlvbigpe2MuY2FuY2VsQnViYmxlPSEwfSk7Yy50YXJnZXR8fChjLnRhcmdldD1jLnNyY0VsZW1lbnR8fFIpO2lmKHUoYy5kZWZhdWx0UHJldmVudGVkKSl7dmFyIGc9Yy5wcmV2ZW50RGVmYXVsdDtcclxuYy5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2MuZGVmYXVsdFByZXZlbnRlZD0hMDtnLmNhbGwoYyl9O2MuZGVmYXVsdFByZXZlbnRlZD0hMX1jLmlzRGVmYXVsdFByZXZlbnRlZD1mdW5jdGlvbigpe3JldHVybiBjLmRlZmF1bHRQcmV2ZW50ZWR8fCExPT09Yy5yZXR1cm5WYWx1ZX07dmFyIGY9UmIoYVtlfHxjLnR5cGVdfHxbXSk7cShmLGZ1bmN0aW9uKGEpe2EuY2FsbChiLGMpfSk7OD49Tj8oYy5wcmV2ZW50RGVmYXVsdD1udWxsLGMuc3RvcFByb3BhZ2F0aW9uPW51bGwsYy5pc0RlZmF1bHRQcmV2ZW50ZWQ9bnVsbCk6KGRlbGV0ZSBjLnByZXZlbnREZWZhdWx0LGRlbGV0ZSBjLnN0b3BQcm9wYWdhdGlvbixkZWxldGUgYy5pc0RlZmF1bHRQcmV2ZW50ZWQpfTtjLmVsZW09YjtyZXR1cm4gY31mdW5jdGlvbiBFYShiKXt2YXIgYT10eXBlb2YgYixjO1wib2JqZWN0XCI9PWEmJm51bGwhPT1iP1wiZnVuY3Rpb25cIj09dHlwZW9mKGM9Yi4kJGhhc2hLZXkpP2M9Yi4kJGhhc2hLZXkoKTpjPT09XHJcbnMmJihjPWIuJCRoYXNoS2V5PVphKCkpOmM9YjtyZXR1cm4gYStcIjpcIitjfWZ1bmN0aW9uIFNhKGIpe3EoYix0aGlzLnB1dCx0aGlzKX1mdW5jdGlvbiBnYyhiKXt2YXIgYSxjO1wiZnVuY3Rpb25cIj09dHlwZW9mIGI/KGE9Yi4kaW5qZWN0KXx8KGE9W10sYi5sZW5ndGgmJihjPWIudG9TdHJpbmcoKS5yZXBsYWNlKFpjLFwiXCIpLGM9Yy5tYXRjaCgkYykscShjWzFdLnNwbGl0KGFkKSxmdW5jdGlvbihiKXtiLnJlcGxhY2UoYmQsZnVuY3Rpb24oYixjLGQpe2EucHVzaChkKX0pfSkpLGIuJGluamVjdD1hKTpMKGIpPyhjPWIubGVuZ3RoLTEsUGEoYltjXSxcImZuXCIpLGE9Yi5zbGljZSgwLGMpKTpQYShiLFwiZm5cIiwhMCk7cmV0dXJuIGF9ZnVuY3Rpb24gWWIoYil7ZnVuY3Rpb24gYShhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtpZihXKGIpKXEoYixPYihhKSk7ZWxzZSByZXR1cm4gYShiLGMpfX1mdW5jdGlvbiBjKGEsYil7d2EoYSxcInNlcnZpY2VcIik7aWYoTShiKXx8TChiKSliPW4uaW5zdGFudGlhdGUoYik7XHJcbmlmKCFiLiRnZXQpdGhyb3cgVGEoXCJwZ2V0XCIsYSk7cmV0dXJuIGxbYStoXT1ifWZ1bmN0aW9uIGQoYSxiKXtyZXR1cm4gYyhhLHskZ2V0OmJ9KX1mdW5jdGlvbiBlKGEpe3ZhciBiPVtdLGMsZCxnLGg7cShhLGZ1bmN0aW9uKGEpe2lmKCFrLmdldChhKSl7ay5wdXQoYSwhMCk7dHJ5e2lmKHcoYSkpZm9yKGM9VWEoYSksYj1iLmNvbmNhdChlKGMucmVxdWlyZXMpKS5jb25jYXQoYy5fcnVuQmxvY2tzKSxkPWMuX2ludm9rZVF1ZXVlLGc9MCxoPWQubGVuZ3RoO2c8aDtnKyspe3ZhciBmPWRbZ10sbT1uLmdldChmWzBdKTttW2ZbMV1dLmFwcGx5KG0sZlsyXSl9ZWxzZSBNKGEpP2IucHVzaChuLmludm9rZShhKSk6TChhKT9iLnB1c2gobi5pbnZva2UoYSkpOlBhKGEsXCJtb2R1bGVcIil9Y2F0Y2gocil7dGhyb3cgTChhKSYmKGE9YVthLmxlbmd0aC0xXSksci5tZXNzYWdlJiYoci5zdGFjayYmLTE9PXIuc3RhY2suaW5kZXhPZihyLm1lc3NhZ2UpKSYmKHI9ci5tZXNzYWdlK1wiXFxuXCIrci5zdGFjayksXHJcblRhKFwibW9kdWxlcnJcIixhLHIuc3RhY2t8fHIubWVzc2FnZXx8cik7fX19KTtyZXR1cm4gYn1mdW5jdGlvbiBnKGEsYil7ZnVuY3Rpb24gYyhkKXtpZihhLmhhc093blByb3BlcnR5KGQpKXtpZihhW2RdPT09Zil0aHJvdyBUYShcImNkZXBcIixtLmpvaW4oXCIgPC0gXCIpKTtyZXR1cm4gYVtkXX10cnl7cmV0dXJuIG0udW5zaGlmdChkKSxhW2RdPWYsYVtkXT1iKGQpfWNhdGNoKGUpe3Rocm93IGFbZF09PT1mJiZkZWxldGUgYVtkXSxlO31maW5hbGx5e20uc2hpZnQoKX19ZnVuY3Rpb24gZChhLGIsZSl7dmFyIGc9W10saD1nYyhhKSxmLG0sazttPTA7Zm9yKGY9aC5sZW5ndGg7bTxmO20rKyl7az1oW21dO2lmKFwic3RyaW5nXCIhPT10eXBlb2Ygayl0aHJvdyBUYShcIml0a25cIixrKTtnLnB1c2goZSYmZS5oYXNPd25Qcm9wZXJ0eShrKT9lW2tdOmMoaykpfWEuJGluamVjdHx8KGE9YVtmXSk7cmV0dXJuIGEuYXBwbHkoYixnKX1yZXR1cm57aW52b2tlOmQsaW5zdGFudGlhdGU6ZnVuY3Rpb24oYSxcclxuYil7dmFyIGM9ZnVuY3Rpb24oKXt9LGU7Yy5wcm90b3R5cGU9KEwoYSk/YVthLmxlbmd0aC0xXTphKS5wcm90b3R5cGU7Yz1uZXcgYztlPWQoYSxjLGIpO3JldHVybiBXKGUpfHxNKGUpP2U6Y30sZ2V0OmMsYW5ub3RhdGU6Z2MsaGFzOmZ1bmN0aW9uKGIpe3JldHVybiBsLmhhc093blByb3BlcnR5KGIraCl8fGEuaGFzT3duUHJvcGVydHkoYil9fX12YXIgZj17fSxoPVwiUHJvdmlkZXJcIixtPVtdLGs9bmV3IFNhLGw9eyRwcm92aWRlOntwcm92aWRlcjphKGMpLGZhY3Rvcnk6YShkKSxzZXJ2aWNlOmEoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZChhLFtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEpe3JldHVybiBhLmluc3RhbnRpYXRlKGIpfV0pfSksdmFsdWU6YShmdW5jdGlvbihhLGIpe3JldHVybiBkKGEsWShiKSl9KSxjb25zdGFudDphKGZ1bmN0aW9uKGEsYil7d2EoYSxcImNvbnN0YW50XCIpO2xbYV09YjtwW2FdPWJ9KSxkZWNvcmF0b3I6ZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmdldChhK2gpLFxyXG5kPWMuJGdldDtjLiRnZXQ9ZnVuY3Rpb24oKXt2YXIgYT1yLmludm9rZShkLGMpO3JldHVybiByLmludm9rZShiLG51bGwseyRkZWxlZ2F0ZTphfSl9fX19LG49bC4kaW5qZWN0b3I9ZyhsLGZ1bmN0aW9uKCl7dGhyb3cgVGEoXCJ1bnByXCIsbS5qb2luKFwiIDwtIFwiKSk7fSkscD17fSxyPXAuJGluamVjdG9yPWcocCxmdW5jdGlvbihhKXthPW4uZ2V0KGEraCk7cmV0dXJuIHIuaW52b2tlKGEuJGdldCxhKX0pO3EoZShiKSxmdW5jdGlvbihhKXtyLmludm9rZShhfHxFKX0pO3JldHVybiByfWZ1bmN0aW9uIGNkKCl7dmFyIGI9ITA7dGhpcy5kaXNhYmxlQXV0b1Njcm9sbGluZz1mdW5jdGlvbigpe2I9ITF9O3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkbG9jYXRpb25cIixcIiRyb290U2NvcGVcIixmdW5jdGlvbihhLGMsZCl7ZnVuY3Rpb24gZShhKXt2YXIgYj1udWxsO3EoYSxmdW5jdGlvbihhKXtifHxcImFcIiE9PXgoYS5ub2RlTmFtZSl8fChiPWEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZygpe3ZhciBiPVxyXG5jLmhhc2goKSxkO2I/KGQ9Zi5nZXRFbGVtZW50QnlJZChiKSk/ZC5zY3JvbGxJbnRvVmlldygpOihkPWUoZi5nZXRFbGVtZW50c0J5TmFtZShiKSkpP2Quc2Nyb2xsSW50b1ZpZXcoKTpcInRvcFwiPT09YiYmYS5zY3JvbGxUbygwLDApOmEuc2Nyb2xsVG8oMCwwKX12YXIgZj1hLmRvY3VtZW50O2ImJmQuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIGMuaGFzaCgpfSxmdW5jdGlvbigpe2QuJGV2YWxBc3luYyhnKX0pO3JldHVybiBnfV19ZnVuY3Rpb24gZGQoYixhLGMsZCl7ZnVuY3Rpb24gZShhKXt0cnl7YS5hcHBseShudWxsLHVhLmNhbGwoYXJndW1lbnRzLDEpKX1maW5hbGx5e2lmKEYtLSwwPT09Rilmb3IoO0EubGVuZ3RoOyl0cnl7QS5wb3AoKSgpfWNhdGNoKGIpe2MuZXJyb3IoYil9fX1mdW5jdGlvbiBnKGEsYil7KGZ1bmN0aW9uIFMoKXtxKEgsZnVuY3Rpb24oYSl7YSgpfSk7dj1iKFMsYSl9KSgpfWZ1bmN0aW9uIGYoKXtDPW51bGw7USE9aC51cmwoKSYmKFE9aC51cmwoKSxxKGthLFxyXG5mdW5jdGlvbihhKXthKGgudXJsKCkpfSkpfXZhciBoPXRoaXMsbT1hWzBdLGs9Yi5sb2NhdGlvbixsPWIuaGlzdG9yeSxuPWIuc2V0VGltZW91dCxwPWIuY2xlYXJUaW1lb3V0LHI9e307aC5pc01vY2s9ITE7dmFyIEY9MCxBPVtdO2guJCRjb21wbGV0ZU91dHN0YW5kaW5nUmVxdWVzdD1lO2guJCRpbmNPdXRzdGFuZGluZ1JlcXVlc3RDb3VudD1mdW5jdGlvbigpe0YrK307aC5ub3RpZnlXaGVuTm9PdXRzdGFuZGluZ1JlcXVlc3RzPWZ1bmN0aW9uKGEpe3EoSCxmdW5jdGlvbihhKXthKCl9KTswPT09Rj9hKCk6QS5wdXNoKGEpfTt2YXIgSD1bXSx2O2guYWRkUG9sbEZuPWZ1bmN0aW9uKGEpe3UodikmJmcoMTAwLG4pO0gucHVzaChhKTtyZXR1cm4gYX07dmFyIFE9ay5ocmVmLEs9YS5maW5kKFwiYmFzZVwiKSxDPW51bGw7aC51cmw9ZnVuY3Rpb24oYSxjKXtrIT09Yi5sb2NhdGlvbiYmKGs9Yi5sb2NhdGlvbik7bCE9PWIuaGlzdG9yeSYmKGw9Yi5oaXN0b3J5KTtpZihhKXtpZihRIT1hKXJldHVybiBRPVxyXG5hLGQuaGlzdG9yeT9jP2wucmVwbGFjZVN0YXRlKG51bGwsXCJcIixhKToobC5wdXNoU3RhdGUobnVsbCxcIlwiLGEpLEsuYXR0cihcImhyZWZcIixLLmF0dHIoXCJocmVmXCIpKSk6KEM9YSxjP2sucmVwbGFjZShhKTprLmhyZWY9YSksaH1lbHNlIHJldHVybiBDfHxrLmhyZWYucmVwbGFjZSgvJTI3L2csXCInXCIpfTt2YXIga2E9W10sST0hMTtoLm9uVXJsQ2hhbmdlPWZ1bmN0aW9uKGEpe2lmKCFJKXtpZihkLmhpc3RvcnkpeihiKS5vbihcInBvcHN0YXRlXCIsZik7aWYoZC5oYXNoY2hhbmdlKXooYikub24oXCJoYXNoY2hhbmdlXCIsZik7ZWxzZSBoLmFkZFBvbGxGbihmKTtJPSEwfWthLnB1c2goYSk7cmV0dXJuIGF9O2guYmFzZUhyZWY9ZnVuY3Rpb24oKXt2YXIgYT1LLmF0dHIoXCJocmVmXCIpO3JldHVybiBhP2EucmVwbGFjZSgvXihodHRwcz9cXDopP1xcL1xcL1teXFwvXSovLFwiXCIpOlwiXCJ9O3ZhciBVPXt9LGJhPVwiXCIsYWE9aC5iYXNlSHJlZigpO2guY29va2llcz1mdW5jdGlvbihhLGIpe3ZhciBkLGUsZyxoO1xyXG5pZihhKWI9PT1zP20uY29va2llPWVzY2FwZShhKStcIj07cGF0aD1cIithYStcIjtleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCI6dyhiKSYmKGQ9KG0uY29va2llPWVzY2FwZShhKStcIj1cIitlc2NhcGUoYikrXCI7cGF0aD1cIithYSkubGVuZ3RoKzEsNDA5NjxkJiZjLndhcm4oXCJDb29raWUgJ1wiK2ErXCInIHBvc3NpYmx5IG5vdCBzZXQgb3Igb3ZlcmZsb3dlZCBiZWNhdXNlIGl0IHdhcyB0b28gbGFyZ2UgKFwiK2QrXCIgPiA0MDk2IGJ5dGVzKSFcIikpO2Vsc2V7aWYobS5jb29raWUhPT1iYSlmb3IoYmE9bS5jb29raWUsZD1iYS5zcGxpdChcIjsgXCIpLFU9e30sZz0wO2c8ZC5sZW5ndGg7ZysrKWU9ZFtnXSxoPWUuaW5kZXhPZihcIj1cIiksMDxoJiYoYT11bmVzY2FwZShlLnN1YnN0cmluZygwLGgpKSxVW2FdPT09cyYmKFVbYV09dW5lc2NhcGUoZS5zdWJzdHJpbmcoaCsxKSkpKTtyZXR1cm4gVX19O2guZGVmZXI9ZnVuY3Rpb24oYSxiKXt2YXIgYztGKys7Yz1uKGZ1bmN0aW9uKCl7ZGVsZXRlIHJbY107XHJcbmUoYSl9LGJ8fDApO3JbY109ITA7cmV0dXJuIGN9O2guZGVmZXIuY2FuY2VsPWZ1bmN0aW9uKGEpe3JldHVybiByW2FdPyhkZWxldGUgclthXSxwKGEpLGUoRSksITApOiExfX1mdW5jdGlvbiBlZCgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkbG9nXCIsXCIkc25pZmZlclwiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oYixhLGMsZCl7cmV0dXJuIG5ldyBkZChiLGQsYSxjKX1dfWZ1bmN0aW9uIGZkKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGQpe2Z1bmN0aW9uIGUoYSl7YSE9biYmKHA/cD09YSYmKHA9YS5uKTpwPWEsZyhhLm4sYS5wKSxnKGEsbiksbj1hLG4ubj1udWxsKX1mdW5jdGlvbiBnKGEsYil7YSE9YiYmKGEmJihhLnA9YiksYiYmKGIubj1hKSl9aWYoYiBpbiBhKXRocm93IHQoXCIkY2FjaGVGYWN0b3J5XCIpKFwiaWlkXCIsYik7dmFyIGY9MCxoPXkoe30sZCx7aWQ6Yn0pLG09e30saz1kJiZkLmNhcGFjaXR5fHxOdW1iZXIuTUFYX1ZBTFVFLGw9e30sbj1udWxsLHA9bnVsbDtcclxucmV0dXJuIGFbYl09e3B1dDpmdW5jdGlvbihhLGIpe3ZhciBjPWxbYV18fChsW2FdPXtrZXk6YX0pO2UoYyk7aWYoIXUoYikpcmV0dXJuIGEgaW4gbXx8ZisrLG1bYV09YixmPmsmJnRoaXMucmVtb3ZlKHAua2V5KSxifSxnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bFthXTtpZihiKXJldHVybiBlKGIpLG1bYV19LHJlbW92ZTpmdW5jdGlvbihhKXt2YXIgYj1sW2FdO2ImJihiPT1uJiYobj1iLnApLGI9PXAmJihwPWIubiksZyhiLm4sYi5wKSxkZWxldGUgbFthXSxkZWxldGUgbVthXSxmLS0pfSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXttPXt9O2Y9MDtsPXt9O249cD1udWxsfSxkZXN0cm95OmZ1bmN0aW9uKCl7bD1oPW09bnVsbDtkZWxldGUgYVtiXX0saW5mbzpmdW5jdGlvbigpe3JldHVybiB5KHt9LGgse3NpemU6Zn0pfX19dmFyIGE9e307Yi5pbmZvPWZ1bmN0aW9uKCl7dmFyIGI9e307cShhLGZ1bmN0aW9uKGEsZSl7YltlXT1hLmluZm8oKX0pO3JldHVybiBifTtiLmdldD1mdW5jdGlvbihiKXtyZXR1cm4gYVtiXX07XHJcbnJldHVybiBifX1mdW5jdGlvbiBnZCgpe3RoaXMuJGdldD1bXCIkY2FjaGVGYWN0b3J5XCIsZnVuY3Rpb24oYil7cmV0dXJuIGIoXCJ0ZW1wbGF0ZXNcIil9XX1mdW5jdGlvbiBpYyhiLGEpe3ZhciBjPXt9LGQ9XCJEaXJlY3RpdmVcIixlPS9eXFxzKmRpcmVjdGl2ZVxcOlxccyooW1xcZFxcd1xcLV9dKylcXHMrKC4qKSQvLGc9LygoW1xcZFxcd1xcLV9dKykoPzpcXDooW147XSspKT87PykvLGY9L14ob25bYS16XSt8Zm9ybWFjdGlvbikkLzt0aGlzLmRpcmVjdGl2ZT1mdW5jdGlvbiBtKGEsZSl7d2EoYSxcImRpcmVjdGl2ZVwiKTt3KGEpPyh0YihlLFwiZGlyZWN0aXZlRmFjdG9yeVwiKSxjLmhhc093blByb3BlcnR5KGEpfHwoY1thXT1bXSxiLmZhY3RvcnkoYStkLFtcIiRpbmplY3RvclwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixmdW5jdGlvbihiLGQpe3ZhciBlPVtdO3EoY1thXSxmdW5jdGlvbihjLGcpe3RyeXt2YXIgZj1iLmludm9rZShjKTtNKGYpP2Y9e2NvbXBpbGU6WShmKX06IWYuY29tcGlsZSYmZi5saW5rJiYoZi5jb21waWxlPVxyXG5ZKGYubGluaykpO2YucHJpb3JpdHk9Zi5wcmlvcml0eXx8MDtmLmluZGV4PWc7Zi5uYW1lPWYubmFtZXx8YTtmLnJlcXVpcmU9Zi5yZXF1aXJlfHxmLmNvbnRyb2xsZXImJmYubmFtZTtmLnJlc3RyaWN0PWYucmVzdHJpY3R8fFwiQVwiO2UucHVzaChmKX1jYXRjaChtKXtkKG0pfX0pO3JldHVybiBlfV0pKSxjW2FdLnB1c2goZSkpOnEoYSxPYihtKSk7cmV0dXJuIHRoaXN9O3RoaXMuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGEuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3QoYiksdGhpcyk6YS5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdCgpfTt0aGlzLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYS5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3QoYiksdGhpcyk6YS5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3QoKX07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJGludGVycG9sYXRlXCIsXHJcblwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRodHRwXCIsXCIkdGVtcGxhdGVDYWNoZVwiLFwiJHBhcnNlXCIsXCIkY29udHJvbGxlclwiLFwiJHJvb3RTY29wZVwiLFwiJGRvY3VtZW50XCIsXCIkc2NlXCIsXCIkYW5pbWF0ZVwiLFwiJCRzYW5pdGl6ZVVyaVwiLGZ1bmN0aW9uKGEsYixsLG4scCxyLEYsQSxILHYsUSxLKXtmdW5jdGlvbiBDKGEsYixjLGQsZSl7YSBpbnN0YW5jZW9mIHp8fChhPXooYSkpO3EoYSxmdW5jdGlvbihiLGMpezM9PWIubm9kZVR5cGUmJmIubm9kZVZhbHVlLm1hdGNoKC9cXFMrLykmJihhW2NdPXooYikud3JhcChcIjxzcGFuPjwvc3Bhbj5cIikucGFyZW50KClbMF0pfSk7dmFyIGc9SShhLGIsYSxjLGQsZSk7a2EoYSxcIm5nLXNjb3BlXCIpO3JldHVybiBmdW5jdGlvbihiLGMsZCl7dGIoYixcInNjb3BlXCIpO3ZhciBlPWM/RmEuY2xvbmUuY2FsbChhKTphO3EoZCxmdW5jdGlvbihhLGIpe2UuZGF0YShcIiRcIitiK1wiQ29udHJvbGxlclwiLGEpfSk7ZD0wO2Zvcih2YXIgZj1lLmxlbmd0aDtkPGY7ZCsrKXt2YXIgbT1cclxuZVtkXS5ub2RlVHlwZTsxIT09bSYmOSE9PW18fGUuZXEoZCkuZGF0YShcIiRzY29wZVwiLGIpfWMmJmMoZSxiKTtnJiZnKGIsZSxlKTtyZXR1cm4gZX19ZnVuY3Rpb24ga2EoYSxiKXt0cnl7YS5hZGRDbGFzcyhiKX1jYXRjaChjKXt9fWZ1bmN0aW9uIEkoYSxiLGMsZCxlLGcpe2Z1bmN0aW9uIGYoYSxjLGQsZSl7dmFyIGcsayxyLGwsbixwLEo7Zz1jLmxlbmd0aDt2YXIgRj1BcnJheShnKTtmb3Iobj0wO248ZztuKyspRltuXT1jW25dO0o9bj0wO2ZvcihwPW0ubGVuZ3RoO248cDtKKyspaz1GW0pdLGM9bVtuKytdLGc9bVtuKytdLHI9eihrKSxjPyhjLnNjb3BlPyhsPWEuJG5ldygpLHIuZGF0YShcIiRzY29wZVwiLGwpKTpsPWEsKHI9Yy50cmFuc2NsdWRlKXx8IWUmJmI/YyhnLGwsayxkLFUoYSxyfHxiKSk6YyhnLGwsayxkLGUpKTpnJiZnKGEsay5jaGlsZE5vZGVzLHMsZSl9Zm9yKHZhciBtPVtdLGsscixsLG4scD0wO3A8YS5sZW5ndGg7cCsrKWs9bmV3IERiLHI9YmEoYVtwXSxbXSxrLFxyXG4wPT09cD9kOnMsZSksKGc9ci5sZW5ndGg/Z2EocixhW3BdLGssYixjLG51bGwsW10sW10sZyk6bnVsbCkmJmcuc2NvcGUmJmthKHooYVtwXSksXCJuZy1zY29wZVwiKSxrPWcmJmcudGVybWluYWx8fCEobD1hW3BdLmNoaWxkTm9kZXMpfHwhbC5sZW5ndGg/bnVsbDpJKGwsZz9nLnRyYW5zY2x1ZGU6YiksbS5wdXNoKGcsayksbj1ufHxnfHxrLGc9bnVsbDtyZXR1cm4gbj9mOm51bGx9ZnVuY3Rpb24gVShhLGIpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7dmFyIGc9ITE7Y3x8KGM9YS4kbmV3KCksZz1jLiQkdHJhbnNjbHVkZWQ9ITApO2Q9YihjLGQsZSk7aWYoZylkLm9uKFwiJGRlc3Ryb3lcIixiYihjLGMuJGRlc3Ryb3kpKTtyZXR1cm4gZH19ZnVuY3Rpb24gYmEoYSxiLGMsZCxmKXt2YXIgbT1jLiRhdHRyLGs7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgMTpTKGIsbGEoR2EoYSkudG9Mb3dlckNhc2UoKSksXCJFXCIsZCxmKTt2YXIgcixsLG47az1hLmF0dHJpYnV0ZXM7Zm9yKHZhciBwPTAsRj1cclxuayYmay5sZW5ndGg7cDxGO3ArKyl7dmFyIEE9ITEsUT0hMTtyPWtbcF07aWYoIU58fDg8PU58fHIuc3BlY2lmaWVkKXtsPXIubmFtZTtuPWxhKGwpO1QudGVzdChuKSYmKGw9Y2Iobi5zdWJzdHIoNiksXCItXCIpKTt2YXIgQz1uLnJlcGxhY2UoLyhTdGFydHxFbmQpJC8sXCJcIik7bj09PUMrXCJTdGFydFwiJiYoQT1sLFE9bC5zdWJzdHIoMCxsLmxlbmd0aC01KStcImVuZFwiLGw9bC5zdWJzdHIoMCxsLmxlbmd0aC02KSk7bj1sYShsLnRvTG93ZXJDYXNlKCkpO21bbl09bDtjW25dPXI9WihyLnZhbHVlKTtlYyhhLG4pJiYoY1tuXT0hMCk7TyhhLGIscixuKTtTKGIsbixcIkFcIixkLGYsQSxRKX19YT1hLmNsYXNzTmFtZTtpZih3KGEpJiZcIlwiIT09YSlmb3IoO2s9Zy5leGVjKGEpOyluPWxhKGtbMl0pLFMoYixuLFwiQ1wiLGQsZikmJihjW25dPVooa1szXSkpLGE9YS5zdWJzdHIoay5pbmRleCtrWzBdLmxlbmd0aCk7YnJlYWs7Y2FzZSAzOnQoYixhLm5vZGVWYWx1ZSk7YnJlYWs7Y2FzZSA4OnRyeXtpZihrPVxyXG5lLmV4ZWMoYS5ub2RlVmFsdWUpKW49bGEoa1sxXSksUyhiLG4sXCJNXCIsZCxmKSYmKGNbbl09WihrWzJdKSl9Y2F0Y2goSCl7fX1iLnNvcnQodSk7cmV0dXJuIGJ9ZnVuY3Rpb24gYWEoYSxiLGMpe3ZhciBkPVtdLGU9MDtpZihiJiZhLmhhc0F0dHJpYnV0ZSYmYS5oYXNBdHRyaWJ1dGUoYikpe2Rve2lmKCFhKXRocm93IGhhKFwidXRlcmRpclwiLGIsYyk7MT09YS5ub2RlVHlwZSYmKGEuaGFzQXR0cmlidXRlKGIpJiZlKyssYS5oYXNBdHRyaWJ1dGUoYykmJmUtLSk7ZC5wdXNoKGEpO2E9YS5uZXh0U2libGluZ313aGlsZSgwPGUpfWVsc2UgZC5wdXNoKGEpO3JldHVybiB6KGQpfWZ1bmN0aW9uIEIoYSxiLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZyxmLGspe2U9YWEoZVswXSxiLGMpO3JldHVybiBhKGQsZSxnLGYsayl9fWZ1bmN0aW9uIGdhKGEsYyxkLGUsZyxmLG0sbixwKXtmdW5jdGlvbiBBKGEsYixjLGQpe2lmKGEpe2MmJihhPUIoYSxjLGQpKTthLnJlcXVpcmU9Ry5yZXF1aXJlO2lmKEs9PT1cclxuR3x8Ry4kJGlzb2xhdGVTY29wZSlhPWpjKGEse2lzb2xhdGVTY29wZTohMH0pO20ucHVzaChhKX1pZihiKXtjJiYoYj1CKGIsYyxkKSk7Yi5yZXF1aXJlPUcucmVxdWlyZTtpZihLPT09R3x8Ry4kJGlzb2xhdGVTY29wZSliPWpjKGIse2lzb2xhdGVTY29wZTohMH0pO24ucHVzaChiKX19ZnVuY3Rpb24gUShhLGIsYyl7dmFyIGQsZT1cImRhdGFcIixnPSExO2lmKHcoYSkpe2Zvcig7XCJeXCI9PShkPWEuY2hhckF0KDApKXx8XCI/XCI9PWQ7KWE9YS5zdWJzdHIoMSksXCJeXCI9PWQmJihlPVwiaW5oZXJpdGVkRGF0YVwiKSxnPWd8fFwiP1wiPT1kO2Q9bnVsbDtjJiZcImRhdGFcIj09PWUmJihkPWNbYV0pO2Q9ZHx8YltlXShcIiRcIithK1wiQ29udHJvbGxlclwiKTtpZighZCYmIWcpdGhyb3cgaGEoXCJjdHJlcVwiLGEsY2EpO31lbHNlIEwoYSkmJihkPVtdLHEoYSxmdW5jdGlvbihhKXtkLnB1c2goUShhLGIsYykpfSkpO3JldHVybiBkfWZ1bmN0aW9uIEgoYSxlLGcsZixwKXtmdW5jdGlvbiBBKGEsYil7dmFyIGM7Mj5cclxuYXJndW1lbnRzLmxlbmd0aCYmKGI9YSxhPXMpO3UmJihjPWFhKTtyZXR1cm4gcChhLGIsYyl9dmFyIEosQyx2LEksYmEsQixhYT17fSxnYjtKPWM9PT1nP2Q6UmIoZCxuZXcgRGIoeihnKSxkLiRhdHRyKSk7Qz1KLiQkZWxlbWVudDtpZihLKXt2YXIgdD0vXlxccyooW0A9Jl0pKFxcPz8pXFxzKihcXHcqKVxccyokLztmPXooZyk7Qj1lLiRuZXcoITApO2dhJiZnYT09PUsuJCRvcmlnaW5hbERpcmVjdGl2ZT9mLmRhdGEoXCIkaXNvbGF0ZVNjb3BlXCIsQik6Zi5kYXRhKFwiJGlzb2xhdGVTY29wZU5vVGVtcGxhdGVcIixCKTtrYShmLFwibmctaXNvbGF0ZS1zY29wZVwiKTtxKEsuc2NvcGUsZnVuY3Rpb24oYSxjKXt2YXIgZD1hLm1hdGNoKHQpfHxbXSxnPWRbM118fGMsZj1cIj9cIj09ZFsyXSxkPWRbMV0sbSxsLG4scDtCLiQkaXNvbGF0ZUJpbmRpbmdzW2NdPWQrZztzd2l0Y2goZCl7Y2FzZSBcIkBcIjpKLiRvYnNlcnZlKGcsZnVuY3Rpb24oYSl7QltjXT1hfSk7Si4kJG9ic2VydmVyc1tnXS4kJHNjb3BlPWU7XHJcbkpbZ10mJihCW2NdPWIoSltnXSkoZSkpO2JyZWFrO2Nhc2UgXCI9XCI6aWYoZiYmIUpbZ10pYnJlYWs7bD1yKEpbZ10pO3A9bC5saXRlcmFsP3RhOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1ifTtuPWwuYXNzaWdufHxmdW5jdGlvbigpe209QltjXT1sKGUpO3Rocm93IGhhKFwibm9uYXNzaWduXCIsSltnXSxLLm5hbWUpO307bT1CW2NdPWwoZSk7Qi4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYT1sKGUpO3AoYSxCW2NdKXx8KHAoYSxtKT9uKGUsYT1CW2NdKTpCW2NdPWEpO3JldHVybiBtPWF9LG51bGwsbC5saXRlcmFsKTticmVhaztjYXNlIFwiJlwiOmw9cihKW2ddKTtCW2NdPWZ1bmN0aW9uKGEpe3JldHVybiBsKGUsYSl9O2JyZWFrO2RlZmF1bHQ6dGhyb3cgaGEoXCJpc2NwXCIsSy5uYW1lLGMsYSk7fX0pfWdiPXAmJkE7VSYmcShVLGZ1bmN0aW9uKGEpe3ZhciBiPXskc2NvcGU6YT09PUt8fGEuJCRpc29sYXRlU2NvcGU/QjplLCRlbGVtZW50OkMsJGF0dHJzOkosJHRyYW5zY2x1ZGU6Z2J9LGM7XHJcbmJhPWEuY29udHJvbGxlcjtcIkBcIj09YmEmJihiYT1KW2EubmFtZV0pO2M9RihiYSxiKTthYVthLm5hbWVdPWM7dXx8Qy5kYXRhKFwiJFwiK2EubmFtZStcIkNvbnRyb2xsZXJcIixjKTthLmNvbnRyb2xsZXJBcyYmKGIuJHNjb3BlW2EuY29udHJvbGxlckFzXT1jKX0pO2Y9MDtmb3Iodj1tLmxlbmd0aDtmPHY7ZisrKXRyeXtJPW1bZl0sSShJLmlzb2xhdGVTY29wZT9COmUsQyxKLEkucmVxdWlyZSYmUShJLnJlcXVpcmUsQyxhYSksZ2IpfWNhdGNoKFMpe2woUyxmYShDKSl9Zj1lO0smJihLLnRlbXBsYXRlfHxudWxsPT09Sy50ZW1wbGF0ZVVybCkmJihmPUIpO2EmJmEoZixnLmNoaWxkTm9kZXMscyxwKTtmb3IoZj1uLmxlbmd0aC0xOzA8PWY7Zi0tKXRyeXtJPW5bZl0sSShJLmlzb2xhdGVTY29wZT9COmUsQyxKLEkucmVxdWlyZSYmUShJLnJlcXVpcmUsQyxhYSksZ2IpfWNhdGNoKEcpe2woRyxmYShDKSl9fXA9cHx8e307dmFyIHY9LU51bWJlci5NQVhfVkFMVUUsSSxVPXAuY29udHJvbGxlckRpcmVjdGl2ZXMsXHJcbks9cC5uZXdJc29sYXRlU2NvcGVEaXJlY3RpdmUsZ2E9cC50ZW1wbGF0ZURpcmVjdGl2ZTtwPXAubm9uVGxiVHJhbnNjbHVkZURpcmVjdGl2ZTtmb3IodmFyIFM9ITEsdT0hMSx5PWQuJCRlbGVtZW50PXooYyksRyxjYSx0LFA9ZSxPLE49MCxtYT1hLmxlbmd0aDtOPG1hO04rKyl7Rz1hW05dO3ZhciBWYT1HLiQkc3RhcnQsVD1HLiQkZW5kO1ZhJiYoeT1hYShjLFZhLFQpKTt0PXM7aWYodj5HLnByaW9yaXR5KWJyZWFrO2lmKHQ9Ry5zY29wZSlJPUl8fEcsRy50ZW1wbGF0ZVVybHx8KHgoXCJuZXcvaXNvbGF0ZWQgc2NvcGVcIixLLEcseSksVyh0KSYmKEs9RykpO2NhPUcubmFtZTshRy50ZW1wbGF0ZVVybCYmRy5jb250cm9sbGVyJiYodD1HLmNvbnRyb2xsZXIsVT1VfHx7fSx4KFwiJ1wiK2NhK1wiJyBjb250cm9sbGVyXCIsVVtjYV0sRyx5KSxVW2NhXT1HKTtpZih0PUcudHJhbnNjbHVkZSlTPSEwLEcuJCR0bGJ8fCh4KFwidHJhbnNjbHVzaW9uXCIscCxHLHkpLHA9RyksXCJlbGVtZW50XCI9PXQ/KHU9XHJcbiEwLHY9Ry5wcmlvcml0eSx0PWFhKGMsVmEsVCkseT1kLiQkZWxlbWVudD16KFIuY3JlYXRlQ29tbWVudChcIiBcIitjYStcIjogXCIrZFtjYV0rXCIgXCIpKSxjPXlbMF0saGIoZyx6KHVhLmNhbGwodCwwKSksYyksUD1DKHQsZSx2LGYmJmYubmFtZSx7bm9uVGxiVHJhbnNjbHVkZURpcmVjdGl2ZTpwfSkpOih0PXooeWIoYykpLmNvbnRlbnRzKCkseS5lbXB0eSgpLFA9Qyh0LGUpKTtpZihHLnRlbXBsYXRlKWlmKHgoXCJ0ZW1wbGF0ZVwiLGdhLEcseSksZ2E9Ryx0PU0oRy50ZW1wbGF0ZSk/Ry50ZW1wbGF0ZSh5LGQpOkcudGVtcGxhdGUsdD1WKHQpLEcucmVwbGFjZSl7Zj1HO3Q9eihcIjxkaXY+XCIrWih0KStcIjwvZGl2PlwiKS5jb250ZW50cygpO2M9dFswXTtpZigxIT10Lmxlbmd0aHx8MSE9PWMubm9kZVR5cGUpdGhyb3cgaGEoXCJ0cGxydFwiLGNhLFwiXCIpO2hiKGcseSxjKTttYT17JGF0dHI6e319O3Q9YmEoYyxbXSxtYSk7dmFyIFg9YS5zcGxpY2UoTisxLGEubGVuZ3RoLShOKzEpKTtLJiZoYyh0KTtcclxuYT1hLmNvbmNhdCh0KS5jb25jYXQoWCk7RChkLG1hKTttYT1hLmxlbmd0aH1lbHNlIHkuaHRtbCh0KTtpZihHLnRlbXBsYXRlVXJsKXgoXCJ0ZW1wbGF0ZVwiLGdhLEcseSksZ2E9RyxHLnJlcGxhY2UmJihmPUcpLEg9RShhLnNwbGljZShOLGEubGVuZ3RoLU4pLHksZCxnLFAsbSxuLHtjb250cm9sbGVyRGlyZWN0aXZlczpVLG5ld0lzb2xhdGVTY29wZURpcmVjdGl2ZTpLLHRlbXBsYXRlRGlyZWN0aXZlOmdhLG5vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmU6cH0pLG1hPWEubGVuZ3RoO2Vsc2UgaWYoRy5jb21waWxlKXRyeXtPPUcuY29tcGlsZSh5LGQsUCksTShPKT9BKG51bGwsTyxWYSxUKTpPJiZBKE8ucHJlLE8ucG9zdCxWYSxUKX1jYXRjaChZKXtsKFksZmEoeSkpfUcudGVybWluYWwmJihILnRlcm1pbmFsPSEwLHY9TWF0aC5tYXgodixHLnByaW9yaXR5KSl9SC5zY29wZT1JJiYhMD09PUkuc2NvcGU7SC50cmFuc2NsdWRlPVMmJlA7cmV0dXJuIEh9ZnVuY3Rpb24gaGMoYSl7Zm9yKHZhciBiPVxyXG4wLGM9YS5sZW5ndGg7YjxjO2IrKylhW2JdPVFiKGFbYl0seyQkaXNvbGF0ZVNjb3BlOiEwfSl9ZnVuY3Rpb24gUyhiLGUsZyxmLGsscixuKXtpZihlPT09aylyZXR1cm4gbnVsbDtrPW51bGw7aWYoYy5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIHA7ZT1hLmdldChlK2QpO2Zvcih2YXIgRj0wLEE9ZS5sZW5ndGg7RjxBO0YrKyl0cnl7cD1lW0ZdLChmPT09c3x8Zj5wLnByaW9yaXR5KSYmLTEhPXAucmVzdHJpY3QuaW5kZXhPZihnKSYmKHImJihwPVFiKHAseyQkc3RhcnQ6ciwkJGVuZDpufSkpLGIucHVzaChwKSxrPXApfWNhdGNoKFEpe2woUSl9fXJldHVybiBrfWZ1bmN0aW9uIEQoYSxiKXt2YXIgYz1iLiRhdHRyLGQ9YS4kYXR0cixlPWEuJCRlbGVtZW50O3EoYSxmdW5jdGlvbihkLGUpe1wiJFwiIT1lLmNoYXJBdCgwKSYmKGJbZV0mJihkKz0oXCJzdHlsZVwiPT09ZT9cIjtcIjpcIiBcIikrYltlXSksYS4kc2V0KGUsZCwhMCxjW2VdKSl9KTtxKGIsZnVuY3Rpb24oYixnKXtcImNsYXNzXCI9PWc/KGthKGUsXHJcbmIpLGFbXCJjbGFzc1wiXT0oYVtcImNsYXNzXCJdP2FbXCJjbGFzc1wiXStcIiBcIjpcIlwiKStiKTpcInN0eWxlXCI9PWc/KGUuYXR0cihcInN0eWxlXCIsZS5hdHRyKFwic3R5bGVcIikrXCI7XCIrYiksYS5zdHlsZT0oYS5zdHlsZT9hLnN0eWxlK1wiO1wiOlwiXCIpK2IpOlwiJFwiPT1nLmNoYXJBdCgwKXx8YS5oYXNPd25Qcm9wZXJ0eShnKXx8KGFbZ109YixkW2ddPWNbZ10pfSl9ZnVuY3Rpb24gRShhLGIsYyxkLGUsZyxmLGspe3ZhciBtPVtdLHIsbCxGPWJbMF0sQT1hLnNoaWZ0KCksUT15KHt9LEEse3RlbXBsYXRlVXJsOm51bGwsdHJhbnNjbHVkZTpudWxsLHJlcGxhY2U6bnVsbCwkJG9yaWdpbmFsRGlyZWN0aXZlOkF9KSxDPU0oQS50ZW1wbGF0ZVVybCk/QS50ZW1wbGF0ZVVybChiLGMpOkEudGVtcGxhdGVVcmw7Yi5lbXB0eSgpO24uZ2V0KHYuZ2V0VHJ1c3RlZFJlc291cmNlVXJsKEMpLHtjYWNoZTpwfSkuc3VjY2VzcyhmdW5jdGlvbihuKXt2YXIgcCxIO249VihuKTtpZihBLnJlcGxhY2Upe249eihcIjxkaXY+XCIrXHJcbloobikrXCI8L2Rpdj5cIikuY29udGVudHMoKTtwPW5bMF07aWYoMSE9bi5sZW5ndGh8fDEhPT1wLm5vZGVUeXBlKXRocm93IGhhKFwidHBscnRcIixBLm5hbWUsQyk7bj17JGF0dHI6e319O2hiKGQsYixwKTt2YXIgdj1iYShwLFtdLG4pO1coQS5zY29wZSkmJmhjKHYpO2E9di5jb25jYXQoYSk7RChjLG4pfWVsc2UgcD1GLGIuaHRtbChuKTthLnVuc2hpZnQoUSk7cj1nYShhLHAsYyxlLGIsQSxnLGYsayk7cShkLGZ1bmN0aW9uKGEsYyl7YT09cCYmKGRbY109YlswXSl9KTtmb3IobD1JKGJbMF0uY2hpbGROb2RlcyxlKTttLmxlbmd0aDspe249bS5zaGlmdCgpO0g9bS5zaGlmdCgpO3ZhciBLPW0uc2hpZnQoKSxCPW0uc2hpZnQoKSx2PWJbMF07aWYoSCE9PUYpe3ZhciBhYT1ILmNsYXNzTmFtZSx2PXliKHApO2hiKEsseihIKSx2KTtrYSh6KHYpLGFhKX1IPXIudHJhbnNjbHVkZT9VKG4sci50cmFuc2NsdWRlKTpCO3IobCxuLHYsZCxIKX1tPW51bGx9KS5lcnJvcihmdW5jdGlvbihhLGIsYyxcclxuZCl7dGhyb3cgaGEoXCJ0cGxvYWRcIixkLnVybCk7fSk7cmV0dXJuIGZ1bmN0aW9uKGEsYixjLGQsZSl7bT8obS5wdXNoKGIpLG0ucHVzaChjKSxtLnB1c2goZCksbS5wdXNoKGUpKTpyKGwsYixjLGQsZSl9fWZ1bmN0aW9uIHUoYSxiKXt2YXIgYz1iLnByaW9yaXR5LWEucHJpb3JpdHk7cmV0dXJuIDAhPT1jP2M6YS5uYW1lIT09Yi5uYW1lP2EubmFtZTxiLm5hbWU/LTE6MTphLmluZGV4LWIuaW5kZXh9ZnVuY3Rpb24geChhLGIsYyxkKXtpZihiKXRocm93IGhhKFwibXVsdGlkaXJcIixiLm5hbWUsYy5uYW1lLGEsZmEoZCkpO31mdW5jdGlvbiB0KGEsYyl7dmFyIGQ9YihjLCEwKTtkJiZhLnB1c2goe3ByaW9yaXR5OjAsY29tcGlsZTpZKGZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5wYXJlbnQoKSxlPWMuZGF0YShcIiRiaW5kaW5nXCIpfHxbXTtlLnB1c2goZCk7a2EoYy5kYXRhKFwiJGJpbmRpbmdcIixlKSxcIm5nLWJpbmRpbmdcIik7YS4kd2F0Y2goZCxmdW5jdGlvbihhKXtiWzBdLm5vZGVWYWx1ZT1hfSl9KX0pfVxyXG5mdW5jdGlvbiBQKGEsYil7aWYoXCJzcmNkb2NcIj09YilyZXR1cm4gdi5IVE1MO3ZhciBjPUdhKGEpO2lmKFwieGxpbmtIcmVmXCI9PWJ8fFwiRk9STVwiPT1jJiZcImFjdGlvblwiPT1ifHxcIklNR1wiIT1jJiYoXCJzcmNcIj09Ynx8XCJuZ1NyY1wiPT1iKSlyZXR1cm4gdi5SRVNPVVJDRV9VUkx9ZnVuY3Rpb24gTyhhLGMsZCxlKXt2YXIgZz1iKGQsITApO2lmKGcpe2lmKFwibXVsdGlwbGVcIj09PWUmJlwiU0VMRUNUXCI9PT1HYShhKSl0aHJvdyBoYShcInNlbG11bHRpXCIsZmEoYSkpO2MucHVzaCh7cHJpb3JpdHk6MTAwLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGMsZCxtKXtkPW0uJCRvYnNlcnZlcnN8fChtLiQkb2JzZXJ2ZXJzPXt9KTtpZihmLnRlc3QoZSkpdGhyb3cgaGEoXCJub2RvbWV2ZW50c1wiKTtpZihnPWIobVtlXSwhMCxQKGEsZSkpKW1bZV09ZyhjKSwoZFtlXXx8KGRbZV09W10pKS4kJGludGVyPSEwLChtLiQkb2JzZXJ2ZXJzJiZtLiQkb2JzZXJ2ZXJzW2VdLiQkc2NvcGV8fFxyXG5jKS4kd2F0Y2goZyxmdW5jdGlvbihhLGIpe1wiY2xhc3NcIj09PWUmJmEhPWI/bS4kdXBkYXRlQ2xhc3MoYSxiKTptLiRzZXQoZSxhKX0pfX19fSl9fWZ1bmN0aW9uIGhiKGEsYixjKXt2YXIgZD1iWzBdLGU9Yi5sZW5ndGgsZz1kLnBhcmVudE5vZGUsZixtO2lmKGEpZm9yKGY9MCxtPWEubGVuZ3RoO2Y8bTtmKyspaWYoYVtmXT09ZCl7YVtmKytdPWM7bT1mK2UtMTtmb3IodmFyIGs9YS5sZW5ndGg7ZjxrO2YrKyxtKyspbTxrP2FbZl09YVttXTpkZWxldGUgYVtmXTthLmxlbmd0aC09ZS0xO2JyZWFrfWcmJmcucmVwbGFjZUNoaWxkKGMsZCk7YT1SLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTthLmFwcGVuZENoaWxkKGQpO2Nbei5leHBhbmRvXT1kW3ouZXhwYW5kb107ZD0xO2ZvcihlPWIubGVuZ3RoO2Q8ZTtkKyspZz1iW2RdLHooZykucmVtb3ZlKCksYS5hcHBlbmRDaGlsZChnKSxkZWxldGUgYltkXTtiWzBdPWM7Yi5sZW5ndGg9MX1mdW5jdGlvbiBqYyhhLGIpe3JldHVybiB5KGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkobnVsbCxcclxuYXJndW1lbnRzKX0sYSxiKX12YXIgRGI9ZnVuY3Rpb24oYSxiKXt0aGlzLiQkZWxlbWVudD1hO3RoaXMuJGF0dHI9Ynx8e319O0RiLnByb3RvdHlwZT17JG5vcm1hbGl6ZTpsYSwkYWRkQ2xhc3M6ZnVuY3Rpb24oYSl7YSYmMDxhLmxlbmd0aCYmUS5hZGRDbGFzcyh0aGlzLiQkZWxlbWVudCxhKX0sJHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe2EmJjA8YS5sZW5ndGgmJlEucmVtb3ZlQ2xhc3ModGhpcy4kJGVsZW1lbnQsYSl9LCR1cGRhdGVDbGFzczpmdW5jdGlvbihhLGIpe3RoaXMuJHJlbW92ZUNsYXNzKGtjKGIsYSkpO3RoaXMuJGFkZENsYXNzKGtjKGEsYikpfSwkc2V0OmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWVjKHRoaXMuJCRlbGVtZW50WzBdLGEpO2UmJih0aGlzLiQkZWxlbWVudC5wcm9wKGEsYiksZD1lKTt0aGlzW2FdPWI7ZD90aGlzLiRhdHRyW2FdPWQ6KGQ9dGhpcy4kYXR0clthXSl8fCh0aGlzLiRhdHRyW2FdPWQ9Y2IoYSxcIi1cIikpO2U9R2EodGhpcy4kJGVsZW1lbnQpO1xyXG5pZihcIkFcIj09PWUmJlwiaHJlZlwiPT09YXx8XCJJTUdcIj09PWUmJlwic3JjXCI9PT1hKXRoaXNbYV09Yj1LKGIsXCJzcmNcIj09PWEpOyExIT09YyYmKG51bGw9PT1ifHxiPT09cz90aGlzLiQkZWxlbWVudC5yZW1vdmVBdHRyKGQpOnRoaXMuJCRlbGVtZW50LmF0dHIoZCxiKSk7KGM9dGhpcy4kJG9ic2VydmVycykmJnEoY1thXSxmdW5jdGlvbihhKXt0cnl7YShiKX1jYXRjaChjKXtsKGMpfX0pfSwkb2JzZXJ2ZTpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsZD1jLiQkb2JzZXJ2ZXJzfHwoYy4kJG9ic2VydmVycz17fSksZT1kW2FdfHwoZFthXT1bXSk7ZS5wdXNoKGIpO0EuJGV2YWxBc3luYyhmdW5jdGlvbigpe2UuJCRpbnRlcnx8YihjW2FdKX0pO3JldHVybiBifX07dmFyIGNhPWIuc3RhcnRTeW1ib2woKSxtYT1iLmVuZFN5bWJvbCgpLFY9XCJ7e1wiPT1jYXx8XCJ9fVwiPT1tYT9BYTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXHtcXHsvZyxjYSkucmVwbGFjZSgvfX0vZyxtYSl9LFQ9L15uZ0F0dHJbQS1aXS87XHJcbnJldHVybiBDfV19ZnVuY3Rpb24gbGEoYil7cmV0dXJuIFFhKGIucmVwbGFjZShoZCxcIlwiKSl9ZnVuY3Rpb24ga2MoYixhKXt2YXIgYz1cIlwiLGQ9Yi5zcGxpdCgvXFxzKy8pLGU9YS5zcGxpdCgvXFxzKy8pLGc9MDthOmZvcig7ZzxkLmxlbmd0aDtnKyspe2Zvcih2YXIgZj1kW2ddLGg9MDtoPGUubGVuZ3RoO2grKylpZihmPT1lW2hdKWNvbnRpbnVlIGE7Yys9KDA8Yy5sZW5ndGg/XCIgXCI6XCJcIikrZn1yZXR1cm4gY31mdW5jdGlvbiBpZCgpe3ZhciBiPXt9LGE9L14oXFxTKykoXFxzK2FzXFxzKyhcXHcrKSk/JC87dGhpcy5yZWdpc3Rlcj1mdW5jdGlvbihhLGQpe3dhKGEsXCJjb250cm9sbGVyXCIpO1coYSk/eShiLGEpOmJbYV09ZH07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJHdpbmRvd1wiLGZ1bmN0aW9uKGMsZCl7cmV0dXJuIGZ1bmN0aW9uKGUsZyl7dmFyIGYsaCxtO3coZSkmJihmPWUubWF0Y2goYSksaD1mWzFdLG09ZlszXSxlPWIuaGFzT3duUHJvcGVydHkoaCk/YltoXTpaYihnLiRzY29wZSxoLFxyXG4hMCl8fFpiKGQsaCwhMCksUGEoZSxoLCEwKSk7Zj1jLmluc3RhbnRpYXRlKGUsZyk7aWYobSl7aWYoIWd8fFwib2JqZWN0XCIhPXR5cGVvZiBnLiRzY29wZSl0aHJvdyB0KFwiJGNvbnRyb2xsZXJcIikoXCJub3NjcFwiLGh8fGUubmFtZSxtKTtnLiRzY29wZVttXT1mfXJldHVybiBmfX1dfWZ1bmN0aW9uIGpkKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixmdW5jdGlvbihiKXtyZXR1cm4geihiLmRvY3VtZW50KX1dfWZ1bmN0aW9uIGtkKCl7dGhpcy4kZ2V0PVtcIiRsb2dcIixmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oYSxjKXtiLmVycm9yLmFwcGx5KGIsYXJndW1lbnRzKX19XX1mdW5jdGlvbiBsYyhiKXt2YXIgYT17fSxjLGQsZTtpZighYilyZXR1cm4gYTtxKGIuc3BsaXQoXCJcXG5cIiksZnVuY3Rpb24oYil7ZT1iLmluZGV4T2YoXCI6XCIpO2M9eChaKGIuc3Vic3RyKDAsZSkpKTtkPVooYi5zdWJzdHIoZSsxKSk7YyYmKGFbY109YVtjXT9hW2NdKyhcIiwgXCIrZCk6ZCl9KTtyZXR1cm4gYX1mdW5jdGlvbiBtYyhiKXt2YXIgYT1cclxuVyhiKT9iOnM7cmV0dXJuIGZ1bmN0aW9uKGMpe2F8fChhPWxjKGIpKTtyZXR1cm4gYz9hW3goYyldfHxudWxsOmF9fWZ1bmN0aW9uIG5jKGIsYSxjKXtpZihNKGMpKXJldHVybiBjKGIsYSk7cShjLGZ1bmN0aW9uKGMpe2I9YyhiLGEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gbGQoKXt2YXIgYj0vXlxccyooXFxbfFxce1teXFx7XSkvLGE9L1tcXH1cXF1dXFxzKiQvLGM9L15cXClcXF1cXH0nLD9cXG4vLGQ9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIn0sZT10aGlzLmRlZmF1bHRzPXt0cmFuc2Zvcm1SZXNwb25zZTpbZnVuY3Rpb24oZCl7dyhkKSYmKGQ9ZC5yZXBsYWNlKGMsXCJcIiksYi50ZXN0KGQpJiZhLnRlc3QoZCkmJihkPVRiKGQpKSk7cmV0dXJuIGR9XSx0cmFuc2Zvcm1SZXF1ZXN0OltmdW5jdGlvbihhKXtyZXR1cm4gVyhhKSYmXCJbb2JqZWN0IEZpbGVdXCIhPT1MYS5jYWxsKGEpP3BhKGEpOmF9XSxoZWFkZXJzOntjb21tb246e0FjY2VwdDpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwifSxcclxucG9zdDokKGQpLHB1dDokKGQpLHBhdGNoOiQoZCl9LHhzcmZDb29raWVOYW1lOlwiWFNSRi1UT0tFTlwiLHhzcmZIZWFkZXJOYW1lOlwiWC1YU1JGLVRPS0VOXCJ9LGc9dGhpcy5pbnRlcmNlcHRvcnM9W10sZj10aGlzLnJlc3BvbnNlSW50ZXJjZXB0b3JzPVtdO3RoaXMuJGdldD1bXCIkaHR0cEJhY2tlbmRcIixcIiRicm93c2VyXCIsXCIkY2FjaGVGYWN0b3J5XCIsXCIkcm9vdFNjb3BlXCIsXCIkcVwiLFwiJGluamVjdG9yXCIsZnVuY3Rpb24oYSxiLGMsZCxuLHApe2Z1bmN0aW9uIHIoYSl7ZnVuY3Rpb24gYyhhKXt2YXIgYj15KHt9LGEse2RhdGE6bmMoYS5kYXRhLGEuaGVhZGVycyxkLnRyYW5zZm9ybVJlc3BvbnNlKX0pO3JldHVybiAyMDA8PWEuc3RhdHVzJiYzMDA+YS5zdGF0dXM/YjpuLnJlamVjdChiKX12YXIgZD17dHJhbnNmb3JtUmVxdWVzdDplLnRyYW5zZm9ybVJlcXVlc3QsdHJhbnNmb3JtUmVzcG9uc2U6ZS50cmFuc2Zvcm1SZXNwb25zZX0sZz1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3ZhciBjO1xyXG5xKGEsZnVuY3Rpb24oYixkKXtNKGIpJiYoYz1iKCksbnVsbCE9Yz9hW2RdPWM6ZGVsZXRlIGFbZF0pfSl9dmFyIGM9ZS5oZWFkZXJzLGQ9eSh7fSxhLmhlYWRlcnMpLGcsZixjPXkoe30sYy5jb21tb24sY1t4KGEubWV0aG9kKV0pO2IoYyk7YihkKTthOmZvcihnIGluIGMpe2E9eChnKTtmb3IoZiBpbiBkKWlmKHgoZik9PT1hKWNvbnRpbnVlIGE7ZFtnXT1jW2ddfXJldHVybiBkfShhKTt5KGQsYSk7ZC5oZWFkZXJzPWc7ZC5tZXRob2Q9SGEoZC5tZXRob2QpOyhhPUViKGQudXJsKT9iLmNvb2tpZXMoKVtkLnhzcmZDb29raWVOYW1lfHxlLnhzcmZDb29raWVOYW1lXTpzKSYmKGdbZC54c3JmSGVhZGVyTmFtZXx8ZS54c3JmSGVhZGVyTmFtZV09YSk7dmFyIGY9W2Z1bmN0aW9uKGEpe2c9YS5oZWFkZXJzO3ZhciBiPW5jKGEuZGF0YSxtYyhnKSxhLnRyYW5zZm9ybVJlcXVlc3QpO3UoYS5kYXRhKSYmcShnLGZ1bmN0aW9uKGEsYil7XCJjb250ZW50LXR5cGVcIj09PXgoYikmJmRlbGV0ZSBnW2JdfSk7XHJcbnUoYS53aXRoQ3JlZGVudGlhbHMpJiYhdShlLndpdGhDcmVkZW50aWFscykmJihhLndpdGhDcmVkZW50aWFscz1lLndpdGhDcmVkZW50aWFscyk7cmV0dXJuIEYoYSxiLGcpLnRoZW4oYyxjKX0sc10saz1uLndoZW4oZCk7Zm9yKHEodixmdW5jdGlvbihhKXsoYS5yZXF1ZXN0fHxhLnJlcXVlc3RFcnJvcikmJmYudW5zaGlmdChhLnJlcXVlc3QsYS5yZXF1ZXN0RXJyb3IpOyhhLnJlc3BvbnNlfHxhLnJlc3BvbnNlRXJyb3IpJiZmLnB1c2goYS5yZXNwb25zZSxhLnJlc3BvbnNlRXJyb3IpfSk7Zi5sZW5ndGg7KXthPWYuc2hpZnQoKTt2YXIgaD1mLnNoaWZ0KCksaz1rLnRoZW4oYSxoKX1rLnN1Y2Nlc3M9ZnVuY3Rpb24oYSl7ay50aGVuKGZ1bmN0aW9uKGIpe2EoYi5kYXRhLGIuc3RhdHVzLGIuaGVhZGVycyxkKX0pO3JldHVybiBrfTtrLmVycm9yPWZ1bmN0aW9uKGEpe2sudGhlbihudWxsLGZ1bmN0aW9uKGIpe2EoYi5kYXRhLGIuc3RhdHVzLGIuaGVhZGVycyxkKX0pO3JldHVybiBrfTtcclxucmV0dXJuIGt9ZnVuY3Rpb24gRihiLGMsZyl7ZnVuY3Rpb24gZihhLGIsYyl7diYmKDIwMDw9YSYmMzAwPmE/di5wdXQocyxbYSxiLGxjKGMpXSk6di5yZW1vdmUocykpO20oYixhLGMpO2QuJCRwaGFzZXx8ZC4kYXBwbHkoKX1mdW5jdGlvbiBtKGEsYyxkKXtjPU1hdGgubWF4KGMsMCk7KDIwMDw9YyYmMzAwPmM/cC5yZXNvbHZlOnAucmVqZWN0KSh7ZGF0YTphLHN0YXR1czpjLGhlYWRlcnM6bWMoZCksY29uZmlnOmJ9KX1mdW5jdGlvbiBrKCl7dmFyIGE9YWIoci5wZW5kaW5nUmVxdWVzdHMsYik7LTEhPT1hJiZyLnBlbmRpbmdSZXF1ZXN0cy5zcGxpY2UoYSwxKX12YXIgcD1uLmRlZmVyKCksRj1wLnByb21pc2UsdixxLHM9QShiLnVybCxiLnBhcmFtcyk7ci5wZW5kaW5nUmVxdWVzdHMucHVzaChiKTtGLnRoZW4oayxrKTsoYi5jYWNoZXx8ZS5jYWNoZSkmJighMSE9PWIuY2FjaGUmJlwiR0VUXCI9PWIubWV0aG9kKSYmKHY9VyhiLmNhY2hlKT9iLmNhY2hlOlcoZS5jYWNoZSk/ZS5jYWNoZTpcclxuSCk7aWYodilpZihxPXYuZ2V0KHMpLEQocSkpe2lmKHEudGhlbilyZXR1cm4gcS50aGVuKGssaykscTtMKHEpP20ocVsxXSxxWzBdLCQocVsyXSkpOm0ocSwyMDAse30pfWVsc2Ugdi5wdXQocyxGKTt1KHEpJiZhKGIubWV0aG9kLHMsYyxmLGcsYi50aW1lb3V0LGIud2l0aENyZWRlbnRpYWxzLGIucmVzcG9uc2VUeXBlKTtyZXR1cm4gRn1mdW5jdGlvbiBBKGEsYil7aWYoIWIpcmV0dXJuIGE7dmFyIGM9W107T2MoYixmdW5jdGlvbihhLGIpe251bGw9PT1hfHx1KGEpfHwoTChhKXx8KGE9W2FdKSxxKGEsZnVuY3Rpb24oYSl7VyhhKSYmKGE9cGEoYSkpO2MucHVzaCh2YShiKStcIj1cIit2YShhKSl9KSl9KTtyZXR1cm4gYSsoLTE9PWEuaW5kZXhPZihcIj9cIik/XCI/XCI6XCImXCIpK2Muam9pbihcIiZcIil9dmFyIEg9YyhcIiRodHRwXCIpLHY9W107cShnLGZ1bmN0aW9uKGEpe3YudW5zaGlmdCh3KGEpP3AuZ2V0KGEpOnAuaW52b2tlKGEpKX0pO3EoZixmdW5jdGlvbihhLGIpe3ZhciBjPXcoYSk/cC5nZXQoYSk6XHJcbnAuaW52b2tlKGEpO3Yuc3BsaWNlKGIsMCx7cmVzcG9uc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGMobi53aGVuKGEpKX0scmVzcG9uc2VFcnJvcjpmdW5jdGlvbihhKXtyZXR1cm4gYyhuLnJlamVjdChhKSl9fSl9KTtyLnBlbmRpbmdSZXF1ZXN0cz1bXTsoZnVuY3Rpb24oYSl7cShhcmd1bWVudHMsZnVuY3Rpb24oYSl7clthXT1mdW5jdGlvbihiLGMpe3JldHVybiByKHkoY3x8e30se21ldGhvZDphLHVybDpifSkpfX0pfSkoXCJnZXRcIixcImRlbGV0ZVwiLFwiaGVhZFwiLFwianNvbnBcIik7KGZ1bmN0aW9uKGEpe3EoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3JbYV09ZnVuY3Rpb24oYixjLGQpe3JldHVybiByKHkoZHx8e30se21ldGhvZDphLHVybDpiLGRhdGE6Y30pKX19KX0pKFwicG9zdFwiLFwicHV0XCIpO3IuZGVmYXVsdHM9ZTtyZXR1cm4gcn1dfWZ1bmN0aW9uIG1kKGIpe2lmKDg+PU4mJighYi5tYXRjaCgvXihnZXR8cG9zdHxoZWFkfHB1dHxkZWxldGV8b3B0aW9ucykkL2kpfHwhUC5YTUxIdHRwUmVxdWVzdCkpcmV0dXJuIG5ldyBQLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcclxuaWYoUC5YTUxIdHRwUmVxdWVzdClyZXR1cm4gbmV3IFAuWE1MSHR0cFJlcXVlc3Q7dGhyb3cgdChcIiRodHRwQmFja2VuZFwiKShcIm5veGhyXCIpO31mdW5jdGlvbiBuZCgpe3RoaXMuJGdldD1bXCIkYnJvd3NlclwiLFwiJHdpbmRvd1wiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oYixhLGMpe3JldHVybiBvZChiLG1kLGIuZGVmZXIsYS5hbmd1bGFyLmNhbGxiYWNrcyxjWzBdKX1dfWZ1bmN0aW9uIG9kKGIsYSxjLGQsZSl7ZnVuY3Rpb24gZyhhLGIpe3ZhciBjPWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxkPWZ1bmN0aW9uKCl7Yy5vbnJlYWR5c3RhdGVjaGFuZ2U9Yy5vbmxvYWQ9Yy5vbmVycm9yPW51bGw7ZS5ib2R5LnJlbW92ZUNoaWxkKGMpO2ImJmIoKX07Yy50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7Yy5zcmM9YTtOJiY4Pj1OP2Mub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7L2xvYWRlZHxjb21wbGV0ZS8udGVzdChjLnJlYWR5U3RhdGUpJiZkKCl9OmMub25sb2FkPWMub25lcnJvcj1cclxuZnVuY3Rpb24oKXtkKCl9O2UuYm9keS5hcHBlbmRDaGlsZChjKTtyZXR1cm4gZH12YXIgZj0tMTtyZXR1cm4gZnVuY3Rpb24oZSxtLGssbCxuLHAscixGKXtmdW5jdGlvbiBBKCl7dj1mO0smJksoKTtDJiZDLmFib3J0KCl9ZnVuY3Rpb24gSChhLGQsZSxnKXtJJiZjLmNhbmNlbChJKTtLPUM9bnVsbDtkPTA9PT1kP2U/MjAwOjQwNDpkO2EoMTIyMz09ZD8yMDQ6ZCxlLGcpO2IuJCRjb21wbGV0ZU91dHN0YW5kaW5nUmVxdWVzdChFKX12YXIgdjtiLiQkaW5jT3V0c3RhbmRpbmdSZXF1ZXN0Q291bnQoKTttPW18fGIudXJsKCk7aWYoXCJqc29ucFwiPT14KGUpKXt2YXIgUT1cIl9cIisoZC5jb3VudGVyKyspLnRvU3RyaW5nKDM2KTtkW1FdPWZ1bmN0aW9uKGEpe2RbUV0uZGF0YT1hfTt2YXIgSz1nKG0ucmVwbGFjZShcIkpTT05fQ0FMTEJBQ0tcIixcImFuZ3VsYXIuY2FsbGJhY2tzLlwiK1EpLGZ1bmN0aW9uKCl7ZFtRXS5kYXRhP0gobCwyMDAsZFtRXS5kYXRhKTpIKGwsdnx8LTIpO2RbUV09QmEubm9vcH0pfWVsc2V7dmFyIEM9XHJcbmEoZSk7Qy5vcGVuKGUsbSwhMCk7cShuLGZ1bmN0aW9uKGEsYil7RChhKSYmQy5zZXRSZXF1ZXN0SGVhZGVyKGIsYSl9KTtDLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKEMmJjQ9PUMucmVhZHlTdGF0ZSl7dmFyIGE9bnVsbCxiPW51bGw7diE9PWYmJihhPUMuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCksYj1cInJlc3BvbnNlXCJpbiBDP0MucmVzcG9uc2U6Qy5yZXNwb25zZVRleHQpO0gobCx2fHxDLnN0YXR1cyxiLGEpfX07ciYmKEMud2l0aENyZWRlbnRpYWxzPSEwKTtpZihGKXRyeXtDLnJlc3BvbnNlVHlwZT1GfWNhdGNoKHMpe2lmKFwianNvblwiIT09Ril0aHJvdyBzO31DLnNlbmQoa3x8bnVsbCl9aWYoMDxwKXZhciBJPWMoQSxwKTtlbHNlIHAmJnAudGhlbiYmcC50aGVuKEEpfX1mdW5jdGlvbiBwZCgpe3ZhciBiPVwie3tcIixhPVwifX1cIjt0aGlzLnN0YXJ0U3ltYm9sPWZ1bmN0aW9uKGEpe3JldHVybiBhPyhiPWEsdGhpcyk6Yn07dGhpcy5lbmRTeW1ib2w9ZnVuY3Rpb24oYil7cmV0dXJuIGI/XHJcbihhPWIsdGhpcyk6YX07dGhpcy4kZ2V0PVtcIiRwYXJzZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRzY2VcIixmdW5jdGlvbihjLGQsZSl7ZnVuY3Rpb24gZyhnLGssbCl7Zm9yKHZhciBuLHAscj0wLEY9W10sQT1nLmxlbmd0aCxIPSExLHY9W107cjxBOyktMSE9KG49Zy5pbmRleE9mKGIscikpJiYtMSE9KHA9Zy5pbmRleE9mKGEsbitmKSk/KHIhPW4mJkYucHVzaChnLnN1YnN0cmluZyhyLG4pKSxGLnB1c2gocj1jKEg9Zy5zdWJzdHJpbmcobitmLHApKSksci5leHA9SCxyPXAraCxIPSEwKToociE9QSYmRi5wdXNoKGcuc3Vic3RyaW5nKHIpKSxyPUEpOyhBPUYubGVuZ3RoKXx8KEYucHVzaChcIlwiKSxBPTEpO2lmKGwmJjE8Ri5sZW5ndGgpdGhyb3cgb2MoXCJub2NvbmNhdFwiLGcpO2lmKCFrfHxIKXJldHVybiB2Lmxlbmd0aD1BLHI9ZnVuY3Rpb24oYSl7dHJ5e2Zvcih2YXIgYj0wLGM9QSxmO2I8YztiKyspXCJmdW5jdGlvblwiPT10eXBlb2YoZj1GW2JdKSYmKGY9ZihhKSxmPWw/ZS5nZXRUcnVzdGVkKGwsXHJcbmYpOmUudmFsdWVPZihmKSxudWxsPT09Znx8dShmKT9mPVwiXCI6XCJzdHJpbmdcIiE9dHlwZW9mIGYmJihmPXBhKGYpKSksdltiXT1mO3JldHVybiB2LmpvaW4oXCJcIil9Y2F0Y2goayl7YT1vYyhcImludGVyclwiLGcsay50b1N0cmluZygpKSxkKGEpfX0sci5leHA9ZyxyLnBhcnRzPUYscn12YXIgZj1iLmxlbmd0aCxoPWEubGVuZ3RoO2cuc3RhcnRTeW1ib2w9ZnVuY3Rpb24oKXtyZXR1cm4gYn07Zy5lbmRTeW1ib2w9ZnVuY3Rpb24oKXtyZXR1cm4gYX07cmV0dXJuIGd9XX1mdW5jdGlvbiBxZCgpe3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkd2luZG93XCIsXCIkcVwiLGZ1bmN0aW9uKGIsYSxjKXtmdW5jdGlvbiBkKGQsZixoLG0pe3ZhciBrPWEuc2V0SW50ZXJ2YWwsbD1hLmNsZWFySW50ZXJ2YWwsbj1jLmRlZmVyKCkscD1uLnByb21pc2Uscj0wLEY9RChtKSYmIW07aD1EKGgpP2g6MDtwLnRoZW4obnVsbCxudWxsLGQpO3AuJCRpbnRlcnZhbElkPWsoZnVuY3Rpb24oKXtuLm5vdGlmeShyKyspO1xyXG4wPGgmJnI+PWgmJihuLnJlc29sdmUociksbChwLiQkaW50ZXJ2YWxJZCksZGVsZXRlIGVbcC4kJGludGVydmFsSWRdKTtGfHxiLiRhcHBseSgpfSxmKTtlW3AuJCRpbnRlcnZhbElkXT1uO3JldHVybiBwfXZhciBlPXt9O2QuY2FuY2VsPWZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLiQkaW50ZXJ2YWxJZCBpbiBlPyhlW2EuJCRpbnRlcnZhbElkXS5yZWplY3QoXCJjYW5jZWxlZFwiKSxjbGVhckludGVydmFsKGEuJCRpbnRlcnZhbElkKSxkZWxldGUgZVthLiQkaW50ZXJ2YWxJZF0sITApOiExfTtyZXR1cm4gZH1dfWZ1bmN0aW9uIHJkKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJue2lkOlwiZW4tdXNcIixOVU1CRVJfRk9STUFUUzp7REVDSU1BTF9TRVA6XCIuXCIsR1JPVVBfU0VQOlwiLFwiLFBBVFRFUk5TOlt7bWluSW50OjEsbWluRnJhYzowLG1heEZyYWM6Myxwb3NQcmU6XCJcIixwb3NTdWY6XCJcIixuZWdQcmU6XCItXCIsbmVnU3VmOlwiXCIsZ1NpemU6MyxsZ1NpemU6M30se21pbkludDoxLG1pbkZyYWM6MixcclxubWF4RnJhYzoyLHBvc1ByZTpcIlxcdTAwYTRcIixwb3NTdWY6XCJcIixuZWdQcmU6XCIoXFx1MDBhNFwiLG5lZ1N1ZjpcIilcIixnU2l6ZTozLGxnU2l6ZTozfV0sQ1VSUkVOQ1lfU1lNOlwiJFwifSxEQVRFVElNRV9GT1JNQVRTOntNT05USDpcIkphbnVhcnkgRmVicnVhcnkgTWFyY2ggQXByaWwgTWF5IEp1bmUgSnVseSBBdWd1c3QgU2VwdGVtYmVyIE9jdG9iZXIgTm92ZW1iZXIgRGVjZW1iZXJcIi5zcGxpdChcIiBcIiksU0hPUlRNT05USDpcIkphbiBGZWIgTWFyIEFwciBNYXkgSnVuIEp1bCBBdWcgU2VwIE9jdCBOb3YgRGVjXCIuc3BsaXQoXCIgXCIpLERBWTpcIlN1bmRheSBNb25kYXkgVHVlc2RheSBXZWRuZXNkYXkgVGh1cnNkYXkgRnJpZGF5IFNhdHVyZGF5XCIuc3BsaXQoXCIgXCIpLFNIT1JUREFZOlwiU3VuIE1vbiBUdWUgV2VkIFRodSBGcmkgU2F0XCIuc3BsaXQoXCIgXCIpLEFNUE1TOltcIkFNXCIsXCJQTVwiXSxtZWRpdW06XCJNTU0gZCwgeSBoOm1tOnNzIGFcIixcInNob3J0XCI6XCJNL2QveXkgaDptbSBhXCIsZnVsbERhdGU6XCJFRUVFLCBNTU1NIGQsIHlcIixcclxubG9uZ0RhdGU6XCJNTU1NIGQsIHlcIixtZWRpdW1EYXRlOlwiTU1NIGQsIHlcIixzaG9ydERhdGU6XCJNL2QveXlcIixtZWRpdW1UaW1lOlwiaDptbTpzcyBhXCIsc2hvcnRUaW1lOlwiaDptbSBhXCJ9LHBsdXJhbENhdDpmdW5jdGlvbihiKXtyZXR1cm4gMT09PWI/XCJvbmVcIjpcIm90aGVyXCJ9fX19ZnVuY3Rpb24gcGMoYil7Yj1iLnNwbGl0KFwiL1wiKTtmb3IodmFyIGE9Yi5sZW5ndGg7YS0tOyliW2FdPXNiKGJbYV0pO3JldHVybiBiLmpvaW4oXCIvXCIpfWZ1bmN0aW9uIHFjKGIsYSxjKXtiPXhhKGIsYyk7YS4kJHByb3RvY29sPWIucHJvdG9jb2w7YS4kJGhvc3Q9Yi5ob3N0bmFtZTthLiQkcG9ydD1WKGIucG9ydCl8fHNkW2IucHJvdG9jb2xdfHxudWxsfWZ1bmN0aW9uIHJjKGIsYSxjKXt2YXIgZD1cIi9cIiE9PWIuY2hhckF0KDApO2QmJihiPVwiL1wiK2IpO2I9eGEoYixjKTthLiQkcGF0aD1kZWNvZGVVUklDb21wb25lbnQoZCYmXCIvXCI9PT1iLnBhdGhuYW1lLmNoYXJBdCgwKT9iLnBhdGhuYW1lLnN1YnN0cmluZygxKTpcclxuYi5wYXRobmFtZSk7YS4kJHNlYXJjaD1WYihiLnNlYXJjaCk7YS4kJGhhc2g9ZGVjb2RlVVJJQ29tcG9uZW50KGIuaGFzaCk7YS4kJHBhdGgmJlwiL1wiIT1hLiQkcGF0aC5jaGFyQXQoMCkmJihhLiQkcGF0aD1cIi9cIithLiQkcGF0aCl9ZnVuY3Rpb24gbmEoYixhKXtpZigwPT09YS5pbmRleE9mKGIpKXJldHVybiBhLnN1YnN0cihiLmxlbmd0aCl9ZnVuY3Rpb24gV2EoYil7dmFyIGE9Yi5pbmRleE9mKFwiI1wiKTtyZXR1cm4tMT09YT9iOmIuc3Vic3RyKDAsYSl9ZnVuY3Rpb24gRmIoYil7cmV0dXJuIGIuc3Vic3RyKDAsV2EoYikubGFzdEluZGV4T2YoXCIvXCIpKzEpfWZ1bmN0aW9uIHNjKGIsYSl7dGhpcy4kJGh0bWw1PSEwO2E9YXx8XCJcIjt2YXIgYz1GYihiKTtxYyhiLHRoaXMsYik7dGhpcy4kJHBhcnNlPWZ1bmN0aW9uKGEpe3ZhciBlPW5hKGMsYSk7aWYoIXcoZSkpdGhyb3cgR2IoXCJpcHRocHJmeFwiLGEsYyk7cmMoZSx0aGlzLGIpO3RoaXMuJCRwYXRofHwodGhpcy4kJHBhdGg9XCIvXCIpO3RoaXMuJCRjb21wb3NlKCl9O1xyXG50aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBhPVdiKHRoaXMuJCRzZWFyY2gpLGI9dGhpcy4kJGhhc2g/XCIjXCIrc2IodGhpcy4kJGhhc2gpOlwiXCI7dGhpcy4kJHVybD1wYyh0aGlzLiQkcGF0aCkrKGE/XCI/XCIrYTpcIlwiKStiO3RoaXMuJCRhYnNVcmw9Yyt0aGlzLiQkdXJsLnN1YnN0cigxKX07dGhpcy4kJHJld3JpdGU9ZnVuY3Rpb24oZCl7dmFyIGU7aWYoKGU9bmEoYixkKSkhPT1zKXJldHVybiBkPWUsKGU9bmEoYSxlKSkhPT1zP2MrKG5hKFwiL1wiLGUpfHxlKTpiK2Q7aWYoKGU9bmEoYyxkKSkhPT1zKXJldHVybiBjK2U7aWYoYz09ZCtcIi9cIilyZXR1cm4gY319ZnVuY3Rpb24gSGIoYixhKXt2YXIgYz1GYihiKTtxYyhiLHRoaXMsYik7dGhpcy4kJHBhcnNlPWZ1bmN0aW9uKGQpe3ZhciBlPW5hKGIsZCl8fG5hKGMsZCksZT1cIiNcIj09ZS5jaGFyQXQoMCk/bmEoYSxlKTp0aGlzLiQkaHRtbDU/ZTpcIlwiO2lmKCF3KGUpKXRocm93IEdiKFwiaWhzaHByZnhcIixkLGEpO3JjKGUsdGhpcyxiKTtcclxuZD10aGlzLiQkcGF0aDt2YXIgZz0vXlxcLz8uKj86KFxcLy4qKS87MD09PWUuaW5kZXhPZihiKSYmKGU9ZS5yZXBsYWNlKGIsXCJcIikpO2cuZXhlYyhlKXx8KGQ9KGU9Zy5leGVjKGQpKT9lWzFdOmQpO3RoaXMuJCRwYXRoPWQ7dGhpcy4kJGNvbXBvc2UoKX07dGhpcy4kJGNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgYz1XYih0aGlzLiQkc2VhcmNoKSxlPXRoaXMuJCRoYXNoP1wiI1wiK3NiKHRoaXMuJCRoYXNoKTpcIlwiO3RoaXMuJCR1cmw9cGModGhpcy4kJHBhdGgpKyhjP1wiP1wiK2M6XCJcIikrZTt0aGlzLiQkYWJzVXJsPWIrKHRoaXMuJCR1cmw/YSt0aGlzLiQkdXJsOlwiXCIpfTt0aGlzLiQkcmV3cml0ZT1mdW5jdGlvbihhKXtpZihXYShiKT09V2EoYSkpcmV0dXJuIGF9fWZ1bmN0aW9uIHRjKGIsYSl7dGhpcy4kJGh0bWw1PSEwO0hiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgYz1GYihiKTt0aGlzLiQkcmV3cml0ZT1mdW5jdGlvbihkKXt2YXIgZTtpZihiPT1XYShkKSlyZXR1cm4gZDtpZihlPW5hKGMsXHJcbmQpKXJldHVybiBiK2ErZTtpZihjPT09ZCtcIi9cIilyZXR1cm4gY319ZnVuY3Rpb24gaWIoYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbYl19fWZ1bmN0aW9uIHVjKGIsYSl7cmV0dXJuIGZ1bmN0aW9uKGMpe2lmKHUoYykpcmV0dXJuIHRoaXNbYl07dGhpc1tiXT1hKGMpO3RoaXMuJCRjb21wb3NlKCk7cmV0dXJuIHRoaXN9fWZ1bmN0aW9uIHRkKCl7dmFyIGI9XCJcIixhPSExO3RoaXMuaGFzaFByZWZpeD1mdW5jdGlvbihhKXtyZXR1cm4gRChhKT8oYj1hLHRoaXMpOmJ9O3RoaXMuaHRtbDVNb2RlPWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhPWIsdGhpcyk6YX07dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRicm93c2VyXCIsXCIkc25pZmZlclwiLFwiJHJvb3RFbGVtZW50XCIsZnVuY3Rpb24oYyxkLGUsZyl7ZnVuY3Rpb24gZihhKXtjLiRicm9hZGNhc3QoXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsaC5hYnNVcmwoKSxhKX12YXIgaCxtPWQuYmFzZUhyZWYoKSxrPWQudXJsKCk7XHJcbmE/KG09ay5zdWJzdHJpbmcoMCxrLmluZGV4T2YoXCIvXCIsay5pbmRleE9mKFwiLy9cIikrMikpKyhtfHxcIi9cIiksZT1lLmhpc3Rvcnk/c2M6dGMpOihtPVdhKGspLGU9SGIpO2g9bmV3IGUobSxcIiNcIitiKTtoLiQkcGFyc2UoaC4kJHJld3JpdGUoaykpO2cub24oXCJjbGlja1wiLGZ1bmN0aW9uKGEpe2lmKCFhLmN0cmxLZXkmJiFhLm1ldGFLZXkmJjIhPWEud2hpY2gpe2Zvcih2YXIgYj16KGEudGFyZ2V0KTtcImFcIiE9PXgoYlswXS5ub2RlTmFtZSk7KWlmKGJbMF09PT1nWzBdfHwhKGI9Yi5wYXJlbnQoKSlbMF0pcmV0dXJuO3ZhciBlPWIucHJvcChcImhyZWZcIik7VyhlKSYmXCJbb2JqZWN0IFNWR0FuaW1hdGVkU3RyaW5nXVwiPT09ZS50b1N0cmluZygpJiYoZT14YShlLmFuaW1WYWwpLmhyZWYpO3ZhciBmPWguJCRyZXdyaXRlKGUpO2UmJighYi5hdHRyKFwidGFyZ2V0XCIpJiZmJiYhYS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkmJihhLnByZXZlbnREZWZhdWx0KCksZiE9ZC51cmwoKSYmKGguJCRwYXJzZShmKSxcclxuYy4kYXBwbHkoKSxQLmFuZ3VsYXJbXCJmZi02ODQyMDgtcHJldmVudERlZmF1bHRcIl09ITApKX19KTtoLmFic1VybCgpIT1rJiZkLnVybChoLmFic1VybCgpLCEwKTtkLm9uVXJsQ2hhbmdlKGZ1bmN0aW9uKGEpe2guYWJzVXJsKCkhPWEmJihjLiRldmFsQXN5bmMoZnVuY3Rpb24oKXt2YXIgYj1oLmFic1VybCgpO2guJCRwYXJzZShhKTtjLiRicm9hZGNhc3QoXCIkbG9jYXRpb25DaGFuZ2VTdGFydFwiLGEsYikuZGVmYXVsdFByZXZlbnRlZD8oaC4kJHBhcnNlKGIpLGQudXJsKGIpKTpmKGIpfSksYy4kJHBoYXNlfHxjLiRkaWdlc3QoKSl9KTt2YXIgbD0wO2MuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGE9ZC51cmwoKSxiPWguJCRyZXBsYWNlO2wmJmE9PWguYWJzVXJsKCl8fChsKyssYy4kZXZhbEFzeW5jKGZ1bmN0aW9uKCl7Yy4kYnJvYWRjYXN0KFwiJGxvY2F0aW9uQ2hhbmdlU3RhcnRcIixoLmFic1VybCgpLGEpLmRlZmF1bHRQcmV2ZW50ZWQ/aC4kJHBhcnNlKGEpOihkLnVybChoLmFic1VybCgpLFxyXG5iKSxmKGEpKX0pKTtoLiQkcmVwbGFjZT0hMTtyZXR1cm4gbH0pO3JldHVybiBofV19ZnVuY3Rpb24gdWQoKXt2YXIgYj0hMCxhPXRoaXM7dGhpcy5kZWJ1Z0VuYWJsZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/KGI9YSx0aGlzKTpifTt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSl7YSBpbnN0YW5jZW9mIEVycm9yJiYoYS5zdGFjaz9hPWEubWVzc2FnZSYmLTE9PT1hLnN0YWNrLmluZGV4T2YoYS5tZXNzYWdlKT9cIkVycm9yOiBcIithLm1lc3NhZ2UrXCJcXG5cIithLnN0YWNrOmEuc3RhY2s6YS5zb3VyY2VVUkwmJihhPWEubWVzc2FnZStcIlxcblwiK2Euc291cmNlVVJMK1wiOlwiK2EubGluZSkpO3JldHVybiBhfWZ1bmN0aW9uIGUoYSl7dmFyIGI9Yy5jb25zb2xlfHx7fSxlPWJbYV18fGIubG9nfHxFO2E9ITE7dHJ5e2E9ISFlLmFwcGx5fWNhdGNoKG0pe31yZXR1cm4gYT9mdW5jdGlvbigpe3ZhciBhPVtdO3EoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2EucHVzaChkKGIpKX0pO1xyXG5yZXR1cm4gZS5hcHBseShiLGEpfTpmdW5jdGlvbihhLGIpe2UoYSxudWxsPT1iP1wiXCI6Yil9fXJldHVybntsb2c6ZShcImxvZ1wiKSxpbmZvOmUoXCJpbmZvXCIpLHdhcm46ZShcIndhcm5cIiksZXJyb3I6ZShcImVycm9yXCIpLGRlYnVnOmZ1bmN0aW9uKCl7dmFyIGM9ZShcImRlYnVnXCIpO3JldHVybiBmdW5jdGlvbigpe2ImJmMuYXBwbHkoYSxhcmd1bWVudHMpfX0oKX19XX1mdW5jdGlvbiBkYShiLGEpe2lmKFwiY29uc3RydWN0b3JcIj09PWIpdGhyb3cgeWEoXCJpc2VjZmxkXCIsYSk7cmV0dXJuIGJ9ZnVuY3Rpb24gWGEoYixhKXtpZihiKXtpZihiLmNvbnN0cnVjdG9yPT09Yil0aHJvdyB5YShcImlzZWNmblwiLGEpO2lmKGIuZG9jdW1lbnQmJmIubG9jYXRpb24mJmIuYWxlcnQmJmIuc2V0SW50ZXJ2YWwpdGhyb3cgeWEoXCJpc2Vjd2luZG93XCIsYSk7aWYoYi5jaGlsZHJlbiYmKGIubm9kZU5hbWV8fGIub24mJmIuZmluZCkpdGhyb3cgeWEoXCJpc2VjZG9tXCIsYSk7fXJldHVybiBifWZ1bmN0aW9uIGpiKGIsXHJcbmEsYyxkLGUpe2U9ZXx8e307YT1hLnNwbGl0KFwiLlwiKTtmb3IodmFyIGcsZj0wOzE8YS5sZW5ndGg7ZisrKXtnPWRhKGEuc2hpZnQoKSxkKTt2YXIgaD1iW2ddO2h8fChoPXt9LGJbZ109aCk7Yj1oO2IudGhlbiYmZS51bndyYXBQcm9taXNlcyYmKHFhKGQpLFwiJCR2XCJpbiBifHxmdW5jdGlvbihhKXthLnRoZW4oZnVuY3Rpb24oYil7YS4kJHY9Yn0pfShiKSxiLiQkdj09PXMmJihiLiQkdj17fSksYj1iLiQkdil9Zz1kYShhLnNoaWZ0KCksZCk7cmV0dXJuIGJbZ109Y31mdW5jdGlvbiB2YyhiLGEsYyxkLGUsZyxmKXtkYShiLGcpO2RhKGEsZyk7ZGEoYyxnKTtkYShkLGcpO2RhKGUsZyk7cmV0dXJuIGYudW53cmFwUHJvbWlzZXM/ZnVuY3Rpb24oZixtKXt2YXIgaz1tJiZtLmhhc093blByb3BlcnR5KGIpP206ZixsO2lmKG51bGw9PWspcmV0dXJuIGs7KGs9a1tiXSkmJmsudGhlbiYmKHFhKGcpLFwiJCR2XCJpbiBrfHwobD1rLGwuJCR2PXMsbC50aGVuKGZ1bmN0aW9uKGEpe2wuJCR2PWF9KSksXHJcbms9ay4kJHYpO2lmKCFhKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7KGs9a1thXSkmJmsudGhlbiYmKHFhKGcpLFwiJCR2XCJpbiBrfHwobD1rLGwuJCR2PXMsbC50aGVuKGZ1bmN0aW9uKGEpe2wuJCR2PWF9KSksaz1rLiQkdik7aWYoIWMpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gczsoaz1rW2NdKSYmay50aGVuJiYocWEoZyksXCIkJHZcImluIGt8fChsPWssbC4kJHY9cyxsLnRoZW4oZnVuY3Rpb24oYSl7bC4kJHY9YX0pKSxrPWsuJCR2KTtpZighZClyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzOyhrPWtbZF0pJiZrLnRoZW4mJihxYShnKSxcIiQkdlwiaW4ga3x8KGw9ayxsLiQkdj1zLGwudGhlbihmdW5jdGlvbihhKXtsLiQkdj1hfSkpLGs9ay4kJHYpO2lmKCFlKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7KGs9a1tlXSkmJmsudGhlbiYmKHFhKGcpLFwiJCR2XCJpbiBrfHwobD1rLGwuJCR2PXMsbC50aGVuKGZ1bmN0aW9uKGEpe2wuJCR2PWF9KSksaz1rLiQkdik7XHJcbnJldHVybiBrfTpmdW5jdGlvbihnLGYpe3ZhciBrPWYmJmYuaGFzT3duUHJvcGVydHkoYik/ZjpnO2lmKG51bGw9PWspcmV0dXJuIGs7az1rW2JdO2lmKCFhKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7az1rW2FdO2lmKCFjKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7az1rW2NdO2lmKCFkKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7az1rW2RdO3JldHVybiBlP251bGw9PWs/czprPWtbZV06a319ZnVuY3Rpb24gdmQoYixhKXtkYShiLGEpO3JldHVybiBmdW5jdGlvbihhLGQpe3JldHVybiBudWxsPT1hP3M6KGQmJmQuaGFzT3duUHJvcGVydHkoYik/ZDphKVtiXX19ZnVuY3Rpb24gd2QoYixhLGMpe2RhKGIsYyk7ZGEoYSxjKTtyZXR1cm4gZnVuY3Rpb24oYyxlKXtpZihudWxsPT1jKXJldHVybiBzO2M9KGUmJmUuaGFzT3duUHJvcGVydHkoYik/ZTpjKVtiXTtyZXR1cm4gbnVsbD09Yz9zOmNbYV19fWZ1bmN0aW9uIHdjKGIsYSxjKXtpZihJYi5oYXNPd25Qcm9wZXJ0eShiKSlyZXR1cm4gSWJbYl07XHJcbnZhciBkPWIuc3BsaXQoXCIuXCIpLGU9ZC5sZW5ndGgsZztpZihhLnVud3JhcFByb21pc2VzfHwxIT09ZSlpZihhLnVud3JhcFByb21pc2VzfHwyIT09ZSlpZihhLmNzcClnPTY+ZT92YyhkWzBdLGRbMV0sZFsyXSxkWzNdLGRbNF0sYyxhKTpmdW5jdGlvbihiLGcpe3ZhciBmPTAsaDtkbyBoPXZjKGRbZisrXSxkW2YrK10sZFtmKytdLGRbZisrXSxkW2YrK10sYyxhKShiLGcpLGc9cyxiPWg7d2hpbGUoZjxlKTtyZXR1cm4gaH07ZWxzZXt2YXIgZj1cInZhciBwO1xcblwiO3EoZCxmdW5jdGlvbihiLGQpe2RhKGIsYyk7Zis9XCJpZihzID09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XFxucz1cIisoZD9cInNcIjonKChrJiZrLmhhc093blByb3BlcnR5KFwiJytiKydcIikpP2s6cyknKSsnW1wiJytiKydcIl07XFxuJysoYS51bndyYXBQcm9taXNlcz8naWYgKHMgJiYgcy50aGVuKSB7XFxuIHB3KFwiJytjLnJlcGxhY2UoLyhbXCJcXHJcXG5dKS9nLFwiXFxcXCQxXCIpKydcIik7XFxuIGlmICghKFwiJCR2XCIgaW4gcykpIHtcXG4gcD1zO1xcbiBwLiQkdiA9IHVuZGVmaW5lZDtcXG4gcC50aGVuKGZ1bmN0aW9uKHYpIHtwLiQkdj12O30pO1xcbn1cXG4gcz1zLiQkdlxcbn1cXG4nOlxyXG5cIlwiKX0pO3ZhciBmPWYrXCJyZXR1cm4gcztcIixoPW5ldyBGdW5jdGlvbihcInNcIixcImtcIixcInB3XCIsZik7aC50b1N0cmluZz1ZKGYpO2c9YS51bndyYXBQcm9taXNlcz9mdW5jdGlvbihhLGIpe3JldHVybiBoKGEsYixxYSl9Omh9ZWxzZSBnPXdkKGRbMF0sZFsxXSxjKTtlbHNlIGc9dmQoZFswXSxjKTtcImhhc093blByb3BlcnR5XCIhPT1iJiYoSWJbYl09Zyk7cmV0dXJuIGd9ZnVuY3Rpb24geGQoKXt2YXIgYj17fSxhPXtjc3A6ITEsdW53cmFwUHJvbWlzZXM6ITEsbG9nUHJvbWlzZVdhcm5pbmdzOiEwfTt0aGlzLnVud3JhcFByb21pc2VzPWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhLnVud3JhcFByb21pc2VzPSEhYix0aGlzKTphLnVud3JhcFByb21pc2VzfTt0aGlzLmxvZ1Byb21pc2VXYXJuaW5ncz1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYS5sb2dQcm9taXNlV2FybmluZ3M9Yix0aGlzKTphLmxvZ1Byb21pc2VXYXJuaW5nc307dGhpcy4kZ2V0PVtcIiRmaWx0ZXJcIixcIiRzbmlmZmVyXCIsXHJcblwiJGxvZ1wiLGZ1bmN0aW9uKGMsZCxlKXthLmNzcD1kLmNzcDtxYT1mdW5jdGlvbihiKXthLmxvZ1Byb21pc2VXYXJuaW5ncyYmIXhjLmhhc093blByb3BlcnR5KGIpJiYoeGNbYl09ITAsZS53YXJuKFwiWyRwYXJzZV0gUHJvbWlzZSBmb3VuZCBpbiB0aGUgZXhwcmVzc2lvbiBgXCIrYitcImAuIEF1dG9tYXRpYyB1bndyYXBwaW5nIG9mIHByb21pc2VzIGluIEFuZ3VsYXIgZXhwcmVzc2lvbnMgaXMgZGVwcmVjYXRlZC5cIikpfTtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU7c3dpdGNoKHR5cGVvZiBkKXtjYXNlIFwic3RyaW5nXCI6aWYoYi5oYXNPd25Qcm9wZXJ0eShkKSlyZXR1cm4gYltkXTtlPW5ldyBKYihhKTtlPShuZXcgWWEoZSxjLGEpKS5wYXJzZShkLCExKTtcImhhc093blByb3BlcnR5XCIhPT1kJiYoYltkXT1lKTtyZXR1cm4gZTtjYXNlIFwiZnVuY3Rpb25cIjpyZXR1cm4gZDtkZWZhdWx0OnJldHVybiBFfX19XX1mdW5jdGlvbiB5ZCgpe3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLFxyXG5mdW5jdGlvbihiLGEpe3JldHVybiB6ZChmdW5jdGlvbihhKXtiLiRldmFsQXN5bmMoYSl9LGEpfV19ZnVuY3Rpb24gemQoYixhKXtmdW5jdGlvbiBjKGEpe3JldHVybiBhfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGYoYSl9dmFyIGU9ZnVuY3Rpb24oKXt2YXIgZj1bXSxrLGw7cmV0dXJuIGw9e3Jlc29sdmU6ZnVuY3Rpb24oYSl7aWYoZil7dmFyIGM9ZjtmPXM7az1nKGEpO2MubGVuZ3RoJiZiKGZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MCxkPWMubGVuZ3RoO2I8ZDtiKyspYT1jW2JdLGsudGhlbihhWzBdLGFbMV0sYVsyXSl9KX19LHJlamVjdDpmdW5jdGlvbihhKXtsLnJlc29sdmUoaChhKSl9LG5vdGlmeTpmdW5jdGlvbihhKXtpZihmKXt2YXIgYz1mO2YubGVuZ3RoJiZiKGZ1bmN0aW9uKCl7Zm9yKHZhciBiLGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspYj1jW2RdLGJbMl0oYSl9KX19LHByb21pc2U6e3RoZW46ZnVuY3Rpb24oYixnLGgpe3ZhciBsPWUoKSxBPWZ1bmN0aW9uKGQpe3RyeXtsLnJlc29sdmUoKE0oYik/XHJcbmI6YykoZCkpfWNhdGNoKGUpe2wucmVqZWN0KGUpLGEoZSl9fSxIPWZ1bmN0aW9uKGIpe3RyeXtsLnJlc29sdmUoKE0oZyk/ZzpkKShiKSl9Y2F0Y2goYyl7bC5yZWplY3QoYyksYShjKX19LHY9ZnVuY3Rpb24oYil7dHJ5e2wubm90aWZ5KChNKGgpP2g6YykoYikpfWNhdGNoKGQpe2EoZCl9fTtmP2YucHVzaChbQSxILHZdKTprLnRoZW4oQSxILHYpO3JldHVybiBsLnByb21pc2V9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsYSl9LFwiZmluYWxseVwiOmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxjKXt2YXIgZD1lKCk7Yz9kLnJlc29sdmUoYSk6ZC5yZWplY3QoYSk7cmV0dXJuIGQucHJvbWlzZX1mdW5jdGlvbiBkKGUsZyl7dmFyIGY9bnVsbDt0cnl7Zj0oYXx8YykoKX1jYXRjaChrKXtyZXR1cm4gYihrLCExKX1yZXR1cm4gZiYmTShmLnRoZW4pP2YudGhlbihmdW5jdGlvbigpe3JldHVybiBiKGUsZyl9LGZ1bmN0aW9uKGEpe3JldHVybiBiKGEsITEpfSk6XHJcbmIoZSxnKX1yZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBkKGEsITApfSxmdW5jdGlvbihhKXtyZXR1cm4gZChhLCExKX0pfX19fSxnPWZ1bmN0aW9uKGEpe3JldHVybiBhJiZNKGEudGhlbik/YTp7dGhlbjpmdW5jdGlvbihjKXt2YXIgZD1lKCk7YihmdW5jdGlvbigpe2QucmVzb2x2ZShjKGEpKX0pO3JldHVybiBkLnByb21pc2V9fX0sZj1mdW5jdGlvbihhKXt2YXIgYj1lKCk7Yi5yZWplY3QoYSk7cmV0dXJuIGIucHJvbWlzZX0saD1mdW5jdGlvbihjKXtyZXR1cm57dGhlbjpmdW5jdGlvbihnLGYpe3ZhciBoPWUoKTtiKGZ1bmN0aW9uKCl7dHJ5e2gucmVzb2x2ZSgoTShmKT9mOmQpKGMpKX1jYXRjaChiKXtoLnJlamVjdChiKSxhKGIpfX0pO3JldHVybiBoLnByb21pc2V9fX07cmV0dXJue2RlZmVyOmUscmVqZWN0OmYsd2hlbjpmdW5jdGlvbihoLGssbCxuKXt2YXIgcD1lKCkscixGPWZ1bmN0aW9uKGIpe3RyeXtyZXR1cm4oTShrKT9rOmMpKGIpfWNhdGNoKGQpe3JldHVybiBhKGQpLFxyXG5mKGQpfX0sQT1mdW5jdGlvbihiKXt0cnl7cmV0dXJuKE0obCk/bDpkKShiKX1jYXRjaChjKXtyZXR1cm4gYShjKSxmKGMpfX0scT1mdW5jdGlvbihiKXt0cnl7cmV0dXJuKE0obik/bjpjKShiKX1jYXRjaChkKXthKGQpfX07YihmdW5jdGlvbigpe2coaCkudGhlbihmdW5jdGlvbihhKXtyfHwocj0hMCxwLnJlc29sdmUoZyhhKS50aGVuKEYsQSxxKSkpfSxmdW5jdGlvbihhKXtyfHwocj0hMCxwLnJlc29sdmUoQShhKSkpfSxmdW5jdGlvbihhKXtyfHxwLm5vdGlmeShxKGEpKX0pfSk7cmV0dXJuIHAucHJvbWlzZX0sYWxsOmZ1bmN0aW9uKGEpe3ZhciBiPWUoKSxjPTAsZD1MKGEpP1tdOnt9O3EoYSxmdW5jdGlvbihhLGUpe2MrKztnKGEpLnRoZW4oZnVuY3Rpb24oYSl7ZC5oYXNPd25Qcm9wZXJ0eShlKXx8KGRbZV09YSwtLWN8fGIucmVzb2x2ZShkKSl9LGZ1bmN0aW9uKGEpe2QuaGFzT3duUHJvcGVydHkoZSl8fGIucmVqZWN0KGEpfSl9KTswPT09YyYmYi5yZXNvbHZlKGQpO3JldHVybiBiLnByb21pc2V9fX1cclxuZnVuY3Rpb24gQWQoKXt2YXIgYj0xMCxhPXQoXCIkcm9vdFNjb3BlXCIpLGM9bnVsbDt0aGlzLmRpZ2VzdFR0bD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj1hKTtyZXR1cm4gYn07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRwYXJzZVwiLFwiJGJyb3dzZXJcIixmdW5jdGlvbihkLGUsZyxmKXtmdW5jdGlvbiBoKCl7dGhpcy4kaWQ9WmEoKTt0aGlzLiQkcGhhc2U9dGhpcy4kcGFyZW50PXRoaXMuJCR3YXRjaGVycz10aGlzLiQkbmV4dFNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD1udWxsO3RoaXNbXCJ0aGlzXCJdPXRoaXMuJHJvb3Q9dGhpczt0aGlzLiQkZGVzdHJveWVkPSExO3RoaXMuJCRhc3luY1F1ZXVlPVtdO3RoaXMuJCRwb3N0RGlnZXN0UXVldWU9W107dGhpcy4kJGxpc3RlbmVycz17fTt0aGlzLiQkbGlzdGVuZXJDb3VudD17fTt0aGlzLiQkaXNvbGF0ZUJpbmRpbmdzPXt9fVxyXG5mdW5jdGlvbiBtKGIpe2lmKHAuJCRwaGFzZSl0aHJvdyBhKFwiaW5wcm9nXCIscC4kJHBoYXNlKTtwLiQkcGhhc2U9Yn1mdW5jdGlvbiBrKGEsYil7dmFyIGM9ZyhhKTtQYShjLGIpO3JldHVybiBjfWZ1bmN0aW9uIGwoYSxiLGMpe2RvIGEuJCRsaXN0ZW5lckNvdW50W2NdLT1iLDA9PT1hLiQkbGlzdGVuZXJDb3VudFtjXSYmZGVsZXRlIGEuJCRsaXN0ZW5lckNvdW50W2NdO3doaWxlKGE9YS4kcGFyZW50KX1mdW5jdGlvbiBuKCl7fWgucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpoLCRuZXc6ZnVuY3Rpb24oYSl7YT8oYT1uZXcgaCxhLiRyb290PXRoaXMuJHJvb3QsYS4kJGFzeW5jUXVldWU9dGhpcy4kJGFzeW5jUXVldWUsYS4kJHBvc3REaWdlc3RRdWV1ZT10aGlzLiQkcG9zdERpZ2VzdFF1ZXVlKTooYT1mdW5jdGlvbigpe30sYS5wcm90b3R5cGU9dGhpcyxhPW5ldyBhLGEuJGlkPVphKCkpO2FbXCJ0aGlzXCJdPWE7YS4kJGxpc3RlbmVycz17fTthLiQkbGlzdGVuZXJDb3VudD17fTthLiRwYXJlbnQ9XHJcbnRoaXM7YS4kJHdhdGNoZXJzPWEuJCRuZXh0U2libGluZz1hLiQkY2hpbGRIZWFkPWEuJCRjaGlsZFRhaWw9bnVsbDthLiQkcHJldlNpYmxpbmc9dGhpcy4kJGNoaWxkVGFpbDt0aGlzLiQkY2hpbGRIZWFkP3RoaXMuJCRjaGlsZFRhaWw9dGhpcy4kJGNoaWxkVGFpbC4kJG5leHRTaWJsaW5nPWE6dGhpcy4kJGNoaWxkSGVhZD10aGlzLiQkY2hpbGRUYWlsPWE7cmV0dXJuIGF9LCR3YXRjaDpmdW5jdGlvbihhLGIsZCl7dmFyIGU9ayhhLFwid2F0Y2hcIiksZz10aGlzLiQkd2F0Y2hlcnMsZj17Zm46YixsYXN0Om4sZ2V0OmUsZXhwOmEsZXE6ISFkfTtjPW51bGw7aWYoIU0oYikpe3ZhciBoPWsoYnx8RSxcImxpc3RlbmVyXCIpO2YuZm49ZnVuY3Rpb24oYSxiLGMpe2goYyl9fWlmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZlLmNvbnN0YW50KXt2YXIgbT1mLmZuO2YuZm49ZnVuY3Rpb24oYSxiLGMpe20uY2FsbCh0aGlzLGEsYixjKTtNYShnLGYpfX1nfHwoZz10aGlzLiQkd2F0Y2hlcnM9W10pO2cudW5zaGlmdChmKTtcclxucmV0dXJuIGZ1bmN0aW9uKCl7TWEoZyxmKTtjPW51bGx9fSwkd2F0Y2hDb2xsZWN0aW9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkLGUsZj0wLGg9ZyhhKSxrPVtdLG09e30sbD0wO3JldHVybiB0aGlzLiR3YXRjaChmdW5jdGlvbigpe2U9aChjKTt2YXIgYSxiO2lmKFcoZSkpaWYocWIoZSkpZm9yKGQhPT1rJiYoZD1rLGw9ZC5sZW5ndGg9MCxmKyspLGE9ZS5sZW5ndGgsbCE9PWEmJihmKyssZC5sZW5ndGg9bD1hKSxiPTA7YjxhO2IrKylkW2JdIT09ZVtiXSYmKGYrKyxkW2JdPWVbYl0pO2Vsc2V7ZCE9PW0mJihkPW09e30sbD0wLGYrKyk7YT0wO2ZvcihiIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShiKSYmKGErKyxkLmhhc093blByb3BlcnR5KGIpP2RbYl0hPT1lW2JdJiYoZisrLGRbYl09ZVtiXSk6KGwrKyxkW2JdPWVbYl0sZisrKSk7aWYobD5hKWZvcihiIGluIGYrKyxkKWQuaGFzT3duUHJvcGVydHkoYikmJiFlLmhhc093blByb3BlcnR5KGIpJiYobC0tLGRlbGV0ZSBkW2JdKX1lbHNlIGQhPT1cclxuZSYmKGQ9ZSxmKyspO3JldHVybiBmfSxmdW5jdGlvbigpe2IoZSxkLGMpfSl9LCRkaWdlc3Q6ZnVuY3Rpb24oKXt2YXIgZCxmLGcsaCxrPXRoaXMuJCRhc3luY1F1ZXVlLGw9dGhpcy4kJHBvc3REaWdlc3RRdWV1ZSxxLEMscz1iLEksVT1bXSx0LHosQjttKFwiJGRpZ2VzdFwiKTtjPW51bGw7ZG97Qz0hMTtmb3IoST10aGlzO2subGVuZ3RoOyl7dHJ5e0I9ay5zaGlmdCgpLEIuc2NvcGUuJGV2YWwoQi5leHByZXNzaW9uKX1jYXRjaChEKXtwLiQkcGhhc2U9bnVsbCxlKEQpfWM9bnVsbH1hOmRve2lmKGg9SS4kJHdhdGNoZXJzKWZvcihxPWgubGVuZ3RoO3EtLTspdHJ5e2lmKGQ9aFtxXSlpZigoZj1kLmdldChJKSkhPT0oZz1kLmxhc3QpJiYhKGQuZXE/dGEoZixnKTpcIm51bWJlclwiPT10eXBlb2YgZiYmXCJudW1iZXJcIj09dHlwZW9mIGcmJmlzTmFOKGYpJiZpc05hTihnKSkpQz0hMCxjPWQsZC5sYXN0PWQuZXE/JChmKTpmLGQuZm4oZixnPT09bj9mOmcsSSksNT5zJiYodD00LXMsVVt0XXx8XHJcbihVW3RdPVtdKSx6PU0oZC5leHApP1wiZm46IFwiKyhkLmV4cC5uYW1lfHxkLmV4cC50b1N0cmluZygpKTpkLmV4cCx6Kz1cIjsgbmV3VmFsOiBcIitwYShmKStcIjsgb2xkVmFsOiBcIitwYShnKSxVW3RdLnB1c2goeikpO2Vsc2UgaWYoZD09PWMpe0M9ITE7YnJlYWsgYX19Y2F0Y2goeSl7cC4kJHBoYXNlPW51bGwsZSh5KX1pZighKGg9SS4kJGNoaWxkSGVhZHx8SSE9PXRoaXMmJkkuJCRuZXh0U2libGluZykpZm9yKDtJIT09dGhpcyYmIShoPUkuJCRuZXh0U2libGluZyk7KUk9SS4kcGFyZW50fXdoaWxlKEk9aCk7aWYoKEN8fGsubGVuZ3RoKSYmIXMtLSl0aHJvdyBwLiQkcGhhc2U9bnVsbCxhKFwiaW5mZGlnXCIsYixwYShVKSk7fXdoaWxlKEN8fGsubGVuZ3RoKTtmb3IocC4kJHBoYXNlPW51bGw7bC5sZW5ndGg7KXRyeXtsLnNoaWZ0KCkoKX1jYXRjaCh3KXtlKHcpfX0sJGRlc3Ryb3k6ZnVuY3Rpb24oKXtpZighdGhpcy4kJGRlc3Ryb3llZCl7dmFyIGE9dGhpcy4kcGFyZW50O3RoaXMuJGJyb2FkY2FzdChcIiRkZXN0cm95XCIpO1xyXG50aGlzLiQkZGVzdHJveWVkPSEwO3RoaXMhPT1wJiYocSh0aGlzLiQkbGlzdGVuZXJDb3VudCxiYihudWxsLGwsdGhpcykpLGEuJCRjaGlsZEhlYWQ9PXRoaXMmJihhLiQkY2hpbGRIZWFkPXRoaXMuJCRuZXh0U2libGluZyksYS4kJGNoaWxkVGFpbD09dGhpcyYmKGEuJCRjaGlsZFRhaWw9dGhpcy4kJHByZXZTaWJsaW5nKSx0aGlzLiQkcHJldlNpYmxpbmcmJih0aGlzLiQkcHJldlNpYmxpbmcuJCRuZXh0U2libGluZz10aGlzLiQkbmV4dFNpYmxpbmcpLHRoaXMuJCRuZXh0U2libGluZyYmKHRoaXMuJCRuZXh0U2libGluZy4kJHByZXZTaWJsaW5nPXRoaXMuJCRwcmV2U2libGluZyksdGhpcy4kcGFyZW50PXRoaXMuJCRuZXh0U2libGluZz10aGlzLiQkcHJldlNpYmxpbmc9dGhpcy4kJGNoaWxkSGVhZD10aGlzLiQkY2hpbGRUYWlsPW51bGwpfX0sJGV2YWw6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZyhhKSh0aGlzLGIpfSwkZXZhbEFzeW5jOmZ1bmN0aW9uKGEpe3AuJCRwaGFzZXx8cC4kJGFzeW5jUXVldWUubGVuZ3RofHxcclxuZi5kZWZlcihmdW5jdGlvbigpe3AuJCRhc3luY1F1ZXVlLmxlbmd0aCYmcC4kZGlnZXN0KCl9KTt0aGlzLiQkYXN5bmNRdWV1ZS5wdXNoKHtzY29wZTp0aGlzLGV4cHJlc3Npb246YX0pfSwkJHBvc3REaWdlc3Q6ZnVuY3Rpb24oYSl7dGhpcy4kJHBvc3REaWdlc3RRdWV1ZS5wdXNoKGEpfSwkYXBwbHk6ZnVuY3Rpb24oYSl7dHJ5e3JldHVybiBtKFwiJGFwcGx5XCIpLHRoaXMuJGV2YWwoYSl9Y2F0Y2goYil7ZShiKX1maW5hbGx5e3AuJCRwaGFzZT1udWxsO3RyeXtwLiRkaWdlc3QoKX1jYXRjaChjKXt0aHJvdyBlKGMpLGM7fX19LCRvbjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuJCRsaXN0ZW5lcnNbYV07Y3x8KHRoaXMuJCRsaXN0ZW5lcnNbYV09Yz1bXSk7Yy5wdXNoKGIpO3ZhciBkPXRoaXM7ZG8gZC4kJGxpc3RlbmVyQ291bnRbYV18fChkLiQkbGlzdGVuZXJDb3VudFthXT0wKSxkLiQkbGlzdGVuZXJDb3VudFthXSsrO3doaWxlKGQ9ZC4kcGFyZW50KTt2YXIgZT10aGlzO3JldHVybiBmdW5jdGlvbigpe2NbYWIoYyxcclxuYildPW51bGw7bChlLDEsYSl9fSwkZW1pdDpmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQsZj10aGlzLGc9ITEsaD17bmFtZTphLHRhcmdldFNjb3BlOmYsc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7Zz0hMH0scHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXtoLmRlZmF1bHRQcmV2ZW50ZWQ9ITB9LGRlZmF1bHRQcmV2ZW50ZWQ6ITF9LGs9W2hdLmNvbmNhdCh1YS5jYWxsKGFyZ3VtZW50cywxKSksbSxsO2Rve2Q9Zi4kJGxpc3RlbmVyc1thXXx8YztoLmN1cnJlbnRTY29wZT1mO209MDtmb3IobD1kLmxlbmd0aDttPGw7bSsrKWlmKGRbbV0pdHJ5e2RbbV0uYXBwbHkobnVsbCxrKX1jYXRjaChwKXtlKHApfWVsc2UgZC5zcGxpY2UobSwxKSxtLS0sbC0tO2lmKGcpYnJlYWs7Zj1mLiRwYXJlbnR9d2hpbGUoZik7cmV0dXJuIGh9LCRicm9hZGNhc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9dGhpcyxkPXRoaXMsZj17bmFtZTphLHRhcmdldFNjb3BlOnRoaXMscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXtmLmRlZmF1bHRQcmV2ZW50ZWQ9XHJcbiEwfSxkZWZhdWx0UHJldmVudGVkOiExfSxnPVtmXS5jb25jYXQodWEuY2FsbChhcmd1bWVudHMsMSkpLGgsaztjPWQ7KXtmLmN1cnJlbnRTY29wZT1jO2Q9Yy4kJGxpc3RlbmVyc1thXXx8W107aD0wO2ZvcihrPWQubGVuZ3RoO2g8aztoKyspaWYoZFtoXSl0cnl7ZFtoXS5hcHBseShudWxsLGcpfWNhdGNoKG0pe2UobSl9ZWxzZSBkLnNwbGljZShoLDEpLGgtLSxrLS07aWYoIShkPWMuJCRsaXN0ZW5lckNvdW50W2FdJiZjLiQkY2hpbGRIZWFkfHxjIT09dGhpcyYmYy4kJG5leHRTaWJsaW5nKSlmb3IoO2MhPT10aGlzJiYhKGQ9Yy4kJG5leHRTaWJsaW5nKTspYz1jLiRwYXJlbnR9cmV0dXJuIGZ9fTt2YXIgcD1uZXcgaDtyZXR1cm4gcH1dfWZ1bmN0aW9uIEJkKCl7dmFyIGI9L15cXHMqKGh0dHBzP3xmdHB8bWFpbHRvfHRlbHxmaWxlKTovLGE9L15cXHMqKGh0dHBzP3xmdHB8ZmlsZSk6fGRhdGE6aW1hZ2VcXC8vO3RoaXMuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/XHJcbihiPWEsdGhpcyk6Yn07dGhpcy5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGE9Yix0aGlzKTphfTt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXt2YXIgZT1kP2E6YixnO2lmKCFOfHw4PD1OKWlmKGc9eGEoYykuaHJlZixcIlwiIT09ZyYmIWcubWF0Y2goZSkpcmV0dXJuXCJ1bnNhZmU6XCIrZztyZXR1cm4gY319fWZ1bmN0aW9uIENkKGIpe2lmKFwic2VsZlwiPT09YilyZXR1cm4gYjtpZih3KGIpKXtpZigtMTxiLmluZGV4T2YoXCIqKipcIikpdGhyb3cgcmEoXCJpd2NhcmRcIixiKTtiPWIucmVwbGFjZSgvKFstKClcXFtcXF17fSs/Ki4kXFxefCw6IzwhXFxcXF0pL2csXCJcXFxcJDFcIikucmVwbGFjZSgvXFx4MDgvZyxcIlxcXFx4MDhcIikucmVwbGFjZShcIlxcXFwqXFxcXCpcIixcIi4qXCIpLnJlcGxhY2UoXCJcXFxcKlwiLFwiW146Ly4/JjtdKlwiKTtyZXR1cm4gUmVnRXhwKFwiXlwiK2IrXCIkXCIpfWlmKCRhKGIpKXJldHVybiBSZWdFeHAoXCJeXCIrYi5zb3VyY2UrXCIkXCIpO1xyXG50aHJvdyByYShcImltYXRjaGVyXCIpO31mdW5jdGlvbiB5YyhiKXt2YXIgYT1bXTtEKGIpJiZxKGIsZnVuY3Rpb24oYil7YS5wdXNoKENkKGIpKX0pO3JldHVybiBhfWZ1bmN0aW9uIERkKCl7dGhpcy5TQ0VfQ09OVEVYVFM9ZWE7dmFyIGI9W1wic2VsZlwiXSxhPVtdO3RoaXMucmVzb3VyY2VVcmxXaGl0ZWxpc3Q9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9eWMoYSkpO3JldHVybiBifTt0aGlzLnJlc291cmNlVXJsQmxhY2tsaXN0PWZ1bmN0aW9uKGIpe2FyZ3VtZW50cy5sZW5ndGgmJihhPXljKGIpKTtyZXR1cm4gYX07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSl7dmFyIGI9ZnVuY3Rpb24oYSl7dGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBhfX07YSYmKGIucHJvdG90eXBlPW5ldyBhKTtiLnByb3RvdHlwZS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWUoKX07XHJcbmIucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWUoKS50b1N0cmluZygpfTtyZXR1cm4gYn12YXIgZT1mdW5jdGlvbihhKXt0aHJvdyByYShcInVuc2FmZVwiKTt9O2MuaGFzKFwiJHNhbml0aXplXCIpJiYoZT1jLmdldChcIiRzYW5pdGl6ZVwiKSk7dmFyIGc9ZCgpLGY9e307ZltlYS5IVE1MXT1kKGcpO2ZbZWEuQ1NTXT1kKGcpO2ZbZWEuVVJMXT1kKGcpO2ZbZWEuSlNdPWQoZyk7ZltlYS5SRVNPVVJDRV9VUkxdPWQoZltlYS5VUkxdKTtyZXR1cm57dHJ1c3RBczpmdW5jdGlvbihhLGIpe3ZhciBjPWYuaGFzT3duUHJvcGVydHkoYSk/ZlthXTpudWxsO2lmKCFjKXRocm93IHJhKFwiaWNvbnRleHRcIixhLGIpO2lmKG51bGw9PT1ifHxiPT09c3x8XCJcIj09PWIpcmV0dXJuIGI7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBiKXRocm93IHJhKFwiaXR5cGVcIixhKTtyZXR1cm4gbmV3IGMoYil9LGdldFRydXN0ZWQ6ZnVuY3Rpb24oYyxkKXtpZihudWxsPT09XHJcbmR8fGQ9PT1zfHxcIlwiPT09ZClyZXR1cm4gZDt2YXIgZz1mLmhhc093blByb3BlcnR5KGMpP2ZbY106bnVsbDtpZihnJiZkIGluc3RhbmNlb2YgZylyZXR1cm4gZC4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpO2lmKGM9PT1lYS5SRVNPVVJDRV9VUkwpe3ZhciBnPXhhKGQudG9TdHJpbmcoKSksbCxuLHA9ITE7bD0wO2ZvcihuPWIubGVuZ3RoO2w8bjtsKyspaWYoXCJzZWxmXCI9PT1iW2xdP0ViKGcpOmJbbF0uZXhlYyhnLmhyZWYpKXtwPSEwO2JyZWFrfWlmKHApZm9yKGw9MCxuPWEubGVuZ3RoO2w8bjtsKyspaWYoXCJzZWxmXCI9PT1hW2xdP0ViKGcpOmFbbF0uZXhlYyhnLmhyZWYpKXtwPSExO2JyZWFrfWlmKHApcmV0dXJuIGQ7dGhyb3cgcmEoXCJpbnNlY3VybFwiLGQudG9TdHJpbmcoKSk7fWlmKGM9PT1lYS5IVE1MKXJldHVybiBlKGQpO3Rocm93IHJhKFwidW5zYWZlXCIpO30sdmFsdWVPZjpmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIGc/YS4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpOmF9fX1dfVxyXG5mdW5jdGlvbiBFZCgpe3ZhciBiPSEwO3RoaXMuZW5hYmxlZD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj0hIWEpO3JldHVybiBifTt0aGlzLiRnZXQ9W1wiJHBhcnNlXCIsXCIkc25pZmZlclwiLFwiJHNjZURlbGVnYXRlXCIsZnVuY3Rpb24oYSxjLGQpe2lmKGImJmMubXNpZSYmOD5jLm1zaWVEb2N1bWVudE1vZGUpdGhyb3cgcmEoXCJpZXF1aXJrc1wiKTt2YXIgZT0kKGVhKTtlLmlzRW5hYmxlZD1mdW5jdGlvbigpe3JldHVybiBifTtlLnRydXN0QXM9ZC50cnVzdEFzO2UuZ2V0VHJ1c3RlZD1kLmdldFRydXN0ZWQ7ZS52YWx1ZU9mPWQudmFsdWVPZjtifHwoZS50cnVzdEFzPWUuZ2V0VHJ1c3RlZD1mdW5jdGlvbihhLGIpe3JldHVybiBifSxlLnZhbHVlT2Y9QWEpO2UucGFyc2VBcz1mdW5jdGlvbihiLGMpe3ZhciBkPWEoYyk7cmV0dXJuIGQubGl0ZXJhbCYmZC5jb25zdGFudD9kOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGUuZ2V0VHJ1c3RlZChiLGQoYSxjKSl9fTt2YXIgZz1lLnBhcnNlQXMsXHJcbmY9ZS5nZXRUcnVzdGVkLGg9ZS50cnVzdEFzO3EoZWEsZnVuY3Rpb24oYSxiKXt2YXIgYz14KGIpO2VbUWEoXCJwYXJzZV9hc19cIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGcoYSxiKX07ZVtRYShcImdldF90cnVzdGVkX1wiK2MpXT1mdW5jdGlvbihiKXtyZXR1cm4gZihhLGIpfTtlW1FhKFwidHJ1c3RfYXNfXCIrYyldPWZ1bmN0aW9uKGIpe3JldHVybiBoKGEsYil9fSk7cmV0dXJuIGV9XX1mdW5jdGlvbiBGZCgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihiLGEpe3ZhciBjPXt9LGQ9VigoL2FuZHJvaWQgKFxcZCspLy5leGVjKHgoKGIubmF2aWdhdG9yfHx7fSkudXNlckFnZW50KSl8fFtdKVsxXSksZT0vQm94ZWUvaS50ZXN0KChiLm5hdmlnYXRvcnx8e30pLnVzZXJBZ2VudCksZz1hWzBdfHx7fSxmPWcuZG9jdW1lbnRNb2RlLGgsbT0vXihNb3p8d2Via2l0fE98bXMpKD89W0EtWl0pLyxrPWcuYm9keSYmZy5ib2R5LnN0eWxlLGw9ITEsbj0hMTtpZihrKXtmb3IodmFyIHAgaW4gaylpZihsPVxyXG5tLmV4ZWMocCkpe2g9bFswXTtoPWguc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStoLnN1YnN0cigxKTticmVha31ofHwoaD1cIldlYmtpdE9wYWNpdHlcImluIGsmJlwid2Via2l0XCIpO2w9ISEoXCJ0cmFuc2l0aW9uXCJpbiBrfHxoK1wiVHJhbnNpdGlvblwiaW4gayk7bj0hIShcImFuaW1hdGlvblwiaW4ga3x8aCtcIkFuaW1hdGlvblwiaW4gayk7IWR8fGwmJm58fChsPXcoZy5ib2R5LnN0eWxlLndlYmtpdFRyYW5zaXRpb24pLG49dyhnLmJvZHkuc3R5bGUud2Via2l0QW5pbWF0aW9uKSl9cmV0dXJue2hpc3Rvcnk6ISghYi5oaXN0b3J5fHwhYi5oaXN0b3J5LnB1c2hTdGF0ZXx8ND5kfHxlKSxoYXNoY2hhbmdlOlwib25oYXNoY2hhbmdlXCJpbiBiJiYoIWZ8fDc8ZiksaGFzRXZlbnQ6ZnVuY3Rpb24oYSl7aWYoXCJpbnB1dFwiPT1hJiY5PT1OKXJldHVybiExO2lmKHUoY1thXSkpe3ZhciBiPWcuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjW2FdPVwib25cIithIGluIGJ9cmV0dXJuIGNbYV19LGNzcDpTYigpLHZlbmRvclByZWZpeDpoLFxyXG50cmFuc2l0aW9uczpsLGFuaW1hdGlvbnM6bixhbmRyb2lkOmQsbXNpZTpOLG1zaWVEb2N1bWVudE1vZGU6Zn19XX1mdW5jdGlvbiBHZCgpe3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkYnJvd3NlclwiLFwiJHFcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsZnVuY3Rpb24oYixhLGMsZCl7ZnVuY3Rpb24gZShlLGgsbSl7dmFyIGs9Yy5kZWZlcigpLGw9ay5wcm9taXNlLG49RChtKSYmIW07aD1hLmRlZmVyKGZ1bmN0aW9uKCl7dHJ5e2sucmVzb2x2ZShlKCkpfWNhdGNoKGEpe2sucmVqZWN0KGEpLGQoYSl9ZmluYWxseXtkZWxldGUgZ1tsLiQkdGltZW91dElkXX1ufHxiLiRhcHBseSgpfSxoKTtsLiQkdGltZW91dElkPWg7Z1toXT1rO3JldHVybiBsfXZhciBnPXt9O2UuY2FuY2VsPWZ1bmN0aW9uKGIpe3JldHVybiBiJiZiLiQkdGltZW91dElkIGluIGc/KGdbYi4kJHRpbWVvdXRJZF0ucmVqZWN0KFwiY2FuY2VsZWRcIiksZGVsZXRlIGdbYi4kJHRpbWVvdXRJZF0sYS5kZWZlci5jYW5jZWwoYi4kJHRpbWVvdXRJZCkpOlxyXG4hMX07cmV0dXJuIGV9XX1mdW5jdGlvbiB4YShiLGEpe3ZhciBjPWI7TiYmKFQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGMpLGM9VC5ocmVmKTtULnNldEF0dHJpYnV0ZShcImhyZWZcIixjKTtyZXR1cm57aHJlZjpULmhyZWYscHJvdG9jb2w6VC5wcm90b2NvbD9ULnByb3RvY29sLnJlcGxhY2UoLzokLyxcIlwiKTpcIlwiLGhvc3Q6VC5ob3N0LHNlYXJjaDpULnNlYXJjaD9ULnNlYXJjaC5yZXBsYWNlKC9eXFw/LyxcIlwiKTpcIlwiLGhhc2g6VC5oYXNoP1QuaGFzaC5yZXBsYWNlKC9eIy8sXCJcIik6XCJcIixob3N0bmFtZTpULmhvc3RuYW1lLHBvcnQ6VC5wb3J0LHBhdGhuYW1lOlwiL1wiPT09VC5wYXRobmFtZS5jaGFyQXQoMCk/VC5wYXRobmFtZTpcIi9cIitULnBhdGhuYW1lfX1mdW5jdGlvbiBFYihiKXtiPXcoYik/eGEoYik6YjtyZXR1cm4gYi5wcm90b2NvbD09PXpjLnByb3RvY29sJiZiLmhvc3Q9PT16Yy5ob3N0fWZ1bmN0aW9uIEhkKCl7dGhpcy4kZ2V0PVkoUCl9ZnVuY3Rpb24gQWMoYil7ZnVuY3Rpb24gYShkLFxyXG5lKXtpZihXKGQpKXt2YXIgZz17fTtxKGQsZnVuY3Rpb24oYixjKXtnW2NdPWEoYyxiKX0pO3JldHVybiBnfXJldHVybiBiLmZhY3RvcnkoZCtjLGUpfXZhciBjPVwiRmlsdGVyXCI7dGhpcy5yZWdpc3Rlcj1hO3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGEuZ2V0KGIrYyl9fV07YShcImN1cnJlbmN5XCIsQmMpO2EoXCJkYXRlXCIsQ2MpO2EoXCJmaWx0ZXJcIixJZCk7YShcImpzb25cIixKZCk7YShcImxpbWl0VG9cIixLZCk7YShcImxvd2VyY2FzZVwiLExkKTthKFwibnVtYmVyXCIsRGMpO2EoXCJvcmRlckJ5XCIsRWMpO2EoXCJ1cHBlcmNhc2VcIixNZCl9ZnVuY3Rpb24gSWQoKXtyZXR1cm4gZnVuY3Rpb24oYixhLGMpe2lmKCFMKGIpKXJldHVybiBiO3ZhciBkPXR5cGVvZiBjLGU9W107ZS5jaGVjaz1mdW5jdGlvbihhKXtmb3IodmFyIGI9MDtiPGUubGVuZ3RoO2IrKylpZighZVtiXShhKSlyZXR1cm4hMTtyZXR1cm4hMH07XCJmdW5jdGlvblwiIT09ZCYmXHJcbihjPVwiYm9vbGVhblwiPT09ZCYmYz9mdW5jdGlvbihhLGIpe3JldHVybiBCYS5lcXVhbHMoYSxiKX06ZnVuY3Rpb24oYSxiKXtiPShcIlwiK2IpLnRvTG93ZXJDYXNlKCk7cmV0dXJuLTE8KFwiXCIrYSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGIpfSk7dmFyIGc9ZnVuY3Rpb24oYSxiKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYiYmXCIhXCI9PT1iLmNoYXJBdCgwKSlyZXR1cm4hZyhhLGIuc3Vic3RyKDEpKTtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJzdHJpbmdcIjpyZXR1cm4gYyhhLGIpO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJvYmplY3RcIjpyZXR1cm4gYyhhLGIpO2RlZmF1bHQ6Zm9yKHZhciBkIGluIGEpaWYoXCIkXCIhPT1kLmNoYXJBdCgwKSYmZyhhW2RdLGIpKXJldHVybiEwfXJldHVybiExO2Nhc2UgXCJhcnJheVwiOmZvcihkPTA7ZDxhLmxlbmd0aDtkKyspaWYoZyhhW2RdLGIpKXJldHVybiEwO3JldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fTtcclxuc3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6YT17JDphfTtjYXNlIFwib2JqZWN0XCI6Zm9yKHZhciBmIGluIGEpKGZ1bmN0aW9uKGIpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBhW2JdJiZlLnB1c2goZnVuY3Rpb24oYyl7cmV0dXJuIGcoXCIkXCI9PWI/YzpjJiZjW2JdLGFbYl0pfSl9KShmKTticmVhaztjYXNlIFwiZnVuY3Rpb25cIjplLnB1c2goYSk7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gYn1kPVtdO2ZvcihmPTA7ZjxiLmxlbmd0aDtmKyspe3ZhciBoPWJbZl07ZS5jaGVjayhoKSYmZC5wdXNoKGgpfXJldHVybiBkfX1mdW5jdGlvbiBCYyhiKXt2YXIgYT1iLk5VTUJFUl9GT1JNQVRTO3JldHVybiBmdW5jdGlvbihiLGQpe3UoZCkmJihkPWEuQ1VSUkVOQ1lfU1lNKTtyZXR1cm4gRmMoYixhLlBBVFRFUk5TWzFdLGEuR1JPVVBfU0VQLGEuREVDSU1BTF9TRVAsMikucmVwbGFjZSgvXFx1MDBBNC9nLGQpfX1mdW5jdGlvbiBEYyhiKXt2YXIgYT1cclxuYi5OVU1CRVJfRk9STUFUUztyZXR1cm4gZnVuY3Rpb24oYixkKXtyZXR1cm4gRmMoYixhLlBBVFRFUk5TWzBdLGEuR1JPVVBfU0VQLGEuREVDSU1BTF9TRVAsZCl9fWZ1bmN0aW9uIEZjKGIsYSxjLGQsZSl7aWYoaXNOYU4oYil8fCFpc0Zpbml0ZShiKSlyZXR1cm5cIlwiO3ZhciBnPTA+YjtiPU1hdGguYWJzKGIpO3ZhciBmPWIrXCJcIixoPVwiXCIsbT1bXSxrPSExO2lmKC0xIT09Zi5pbmRleE9mKFwiZVwiKSl7dmFyIGw9Zi5tYXRjaCgvKFtcXGRcXC5dKyllKC0/KShcXGQrKS8pO2wmJlwiLVwiPT1sWzJdJiZsWzNdPmUrMT9mPVwiMFwiOihoPWYsaz0hMCl9aWYoaykwPGUmJigtMTxiJiYxPmIpJiYoaD1iLnRvRml4ZWQoZSkpO2Vsc2V7Zj0oZi5zcGxpdChHYylbMV18fFwiXCIpLmxlbmd0aDt1KGUpJiYoZT1NYXRoLm1pbihNYXRoLm1heChhLm1pbkZyYWMsZiksYS5tYXhGcmFjKSk7Zj1NYXRoLnBvdygxMCxlKTtiPU1hdGgucm91bmQoYipmKS9mO2I9KFwiXCIrYikuc3BsaXQoR2MpO2Y9YlswXTtiPWJbMV18fFxyXG5cIlwiO3ZhciBsPTAsbj1hLmxnU2l6ZSxwPWEuZ1NpemU7aWYoZi5sZW5ndGg+PW4rcClmb3IobD1mLmxlbmd0aC1uLGs9MDtrPGw7aysrKTA9PT0obC1rKSVwJiYwIT09ayYmKGgrPWMpLGgrPWYuY2hhckF0KGspO2ZvcihrPWw7azxmLmxlbmd0aDtrKyspMD09PShmLmxlbmd0aC1rKSVuJiYwIT09ayYmKGgrPWMpLGgrPWYuY2hhckF0KGspO2Zvcig7Yi5sZW5ndGg8ZTspYis9XCIwXCI7ZSYmXCIwXCIhPT1lJiYoaCs9ZCtiLnN1YnN0cigwLGUpKX1tLnB1c2goZz9hLm5lZ1ByZTphLnBvc1ByZSk7bS5wdXNoKGgpO20ucHVzaChnP2EubmVnU3VmOmEucG9zU3VmKTtyZXR1cm4gbS5qb2luKFwiXCIpfWZ1bmN0aW9uIEtiKGIsYSxjKXt2YXIgZD1cIlwiOzA+YiYmKGQ9XCItXCIsYj0tYik7Zm9yKGI9XCJcIitiO2IubGVuZ3RoPGE7KWI9XCIwXCIrYjtjJiYoYj1iLnN1YnN0cihiLmxlbmd0aC1hKSk7cmV0dXJuIGQrYn1mdW5jdGlvbiBYKGIsYSxjLGQpe2M9Y3x8MDtyZXR1cm4gZnVuY3Rpb24oZSl7ZT1lW1wiZ2V0XCIrXHJcbmJdKCk7aWYoMDxjfHxlPi1jKWUrPWM7MD09PWUmJi0xMj09YyYmKGU9MTIpO3JldHVybiBLYihlLGEsZCl9fWZ1bmN0aW9uIGtiKGIsYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7dmFyIGU9Y1tcImdldFwiK2JdKCksZz1IYShhP1wiU0hPUlRcIitiOmIpO3JldHVybiBkW2ddW2VdfX1mdW5jdGlvbiBDYyhiKXtmdW5jdGlvbiBhKGEpe3ZhciBiO2lmKGI9YS5tYXRjaChjKSl7YT1uZXcgRGF0ZSgwKTt2YXIgZz0wLGY9MCxoPWJbOF0/YS5zZXRVVENGdWxsWWVhcjphLnNldEZ1bGxZZWFyLG09Yls4XT9hLnNldFVUQ0hvdXJzOmEuc2V0SG91cnM7Yls5XSYmKGc9VihiWzldK2JbMTBdKSxmPVYoYls5XStiWzExXSkpO2guY2FsbChhLFYoYlsxXSksVihiWzJdKS0xLFYoYlszXSkpO2c9VihiWzRdfHwwKS1nO2Y9VihiWzVdfHwwKS1mO2g9VihiWzZdfHwwKTtiPU1hdGgucm91bmQoMUUzKnBhcnNlRmxvYXQoXCIwLlwiKyhiWzddfHwwKSkpO20uY2FsbChhLGcsZixoLGIpfXJldHVybiBhfXZhciBjPVxyXG4vXihcXGR7NH0pLT8oXFxkXFxkKS0/KFxcZFxcZCkoPzpUKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlxcLihcXGQrKSk/KT8pPyhafChbKy1dKShcXGRcXGQpOj8oXFxkXFxkKSk/KT8kLztyZXR1cm4gZnVuY3Rpb24oYyxlKXt2YXIgZz1cIlwiLGY9W10saCxtO2U9ZXx8XCJtZWRpdW1EYXRlXCI7ZT1iLkRBVEVUSU1FX0ZPUk1BVFNbZV18fGU7dyhjKSYmKGM9TmQudGVzdChjKT9WKGMpOmEoYykpO3JiKGMpJiYoYz1uZXcgRGF0ZShjKSk7aWYoIUthKGMpKXJldHVybiBjO2Zvcig7ZTspKG09T2QuZXhlYyhlKSk/KGY9Zi5jb25jYXQodWEuY2FsbChtLDEpKSxlPWYucG9wKCkpOihmLnB1c2goZSksZT1udWxsKTtxKGYsZnVuY3Rpb24oYSl7aD1QZFthXTtnKz1oP2goYyxiLkRBVEVUSU1FX0ZPUk1BVFMpOmEucmVwbGFjZSgvKF4nfCckKS9nLFwiXCIpLnJlcGxhY2UoLycnL2csXCInXCIpfSk7cmV0dXJuIGd9fWZ1bmN0aW9uIEpkKCl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBwYShiLCEwKX19ZnVuY3Rpb24gS2QoKXtyZXR1cm4gZnVuY3Rpb24oYixcclxuYSl7aWYoIUwoYikmJiF3KGIpKXJldHVybiBiO2E9VihhKTtpZih3KGIpKXJldHVybiBhPzA8PWE/Yi5zbGljZSgwLGEpOmIuc2xpY2UoYSxiLmxlbmd0aCk6XCJcIjt2YXIgYz1bXSxkLGU7YT5iLmxlbmd0aD9hPWIubGVuZ3RoOmE8LWIubGVuZ3RoJiYoYT0tYi5sZW5ndGgpOzA8YT8oZD0wLGU9YSk6KGQ9Yi5sZW5ndGgrYSxlPWIubGVuZ3RoKTtmb3IoO2Q8ZTtkKyspYy5wdXNoKGJbZF0pO3JldHVybiBjfX1mdW5jdGlvbiBFYyhiKXtyZXR1cm4gZnVuY3Rpb24oYSxjLGQpe2Z1bmN0aW9uIGUoYSxiKXtyZXR1cm4gT2EoYik/ZnVuY3Rpb24oYixjKXtyZXR1cm4gYShjLGIpfTphfWlmKCFMKGEpfHwhYylyZXR1cm4gYTtjPUwoYyk/YzpbY107Yz1RYyhjLGZ1bmN0aW9uKGEpe3ZhciBjPSExLGQ9YXx8QWE7aWYodyhhKSl7aWYoXCIrXCI9PWEuY2hhckF0KDApfHxcIi1cIj09YS5jaGFyQXQoMCkpYz1cIi1cIj09YS5jaGFyQXQoMCksYT1hLnN1YnN0cmluZygxKTtkPWIoYSl9cmV0dXJuIGUoZnVuY3Rpb24oYSxcclxuYil7dmFyIGM7Yz1kKGEpO3ZhciBlPWQoYiksZj10eXBlb2YgYyxnPXR5cGVvZiBlO2Y9PWc/KFwic3RyaW5nXCI9PWYmJihjPWMudG9Mb3dlckNhc2UoKSxlPWUudG9Mb3dlckNhc2UoKSksYz1jPT09ZT8wOmM8ZT8tMToxKTpjPWY8Zz8tMToxO3JldHVybiBjfSxjKX0pO2Zvcih2YXIgZz1bXSxmPTA7ZjxhLmxlbmd0aDtmKyspZy5wdXNoKGFbZl0pO3JldHVybiBnLnNvcnQoZShmdW5jdGlvbihhLGIpe2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdKGEsYik7aWYoMCE9PWUpcmV0dXJuIGV9cmV0dXJuIDB9LGQpKX19ZnVuY3Rpb24gc2EoYil7TShiKSYmKGI9e2xpbms6Yn0pO2IucmVzdHJpY3Q9Yi5yZXN0cmljdHx8XCJBQ1wiO3JldHVybiBZKGIpfWZ1bmN0aW9uIEhjKGIsYSl7ZnVuY3Rpb24gYyhhLGMpe2M9Yz9cIi1cIitjYihjLFwiLVwiKTpcIlwiO2IucmVtb3ZlQ2xhc3MoKGE/bGI6bWIpK2MpLmFkZENsYXNzKChhP21iOmxiKStjKX12YXIgZD10aGlzLGU9Yi5wYXJlbnQoKS5jb250cm9sbGVyKFwiZm9ybVwiKXx8XHJcbm5iLGc9MCxmPWQuJGVycm9yPXt9LGg9W107ZC4kbmFtZT1hLm5hbWV8fGEubmdGb3JtO2QuJGRpcnR5PSExO2QuJHByaXN0aW5lPSEwO2QuJHZhbGlkPSEwO2QuJGludmFsaWQ9ITE7ZS4kYWRkQ29udHJvbChkKTtiLmFkZENsYXNzKElhKTtjKCEwKTtkLiRhZGRDb250cm9sPWZ1bmN0aW9uKGEpe3dhKGEuJG5hbWUsXCJpbnB1dFwiKTtoLnB1c2goYSk7YS4kbmFtZSYmKGRbYS4kbmFtZV09YSl9O2QuJHJlbW92ZUNvbnRyb2w9ZnVuY3Rpb24oYSl7YS4kbmFtZSYmZFthLiRuYW1lXT09PWEmJmRlbGV0ZSBkW2EuJG5hbWVdO3EoZixmdW5jdGlvbihiLGMpe2QuJHNldFZhbGlkaXR5KGMsITAsYSl9KTtNYShoLGEpfTtkLiRzZXRWYWxpZGl0eT1mdW5jdGlvbihhLGIsaCl7dmFyIG49ZlthXTtpZihiKW4mJihNYShuLGgpLG4ubGVuZ3RofHwoZy0tLGd8fChjKGIpLGQuJHZhbGlkPSEwLGQuJGludmFsaWQ9ITEpLGZbYV09ITEsYyghMCxhKSxlLiRzZXRWYWxpZGl0eShhLCEwLGQpKSk7ZWxzZXtnfHxcclxuYyhiKTtpZihuKXtpZigtMSE9YWIobixoKSlyZXR1cm59ZWxzZSBmW2FdPW49W10sZysrLGMoITEsYSksZS4kc2V0VmFsaWRpdHkoYSwhMSxkKTtuLnB1c2goaCk7ZC4kdmFsaWQ9ITE7ZC4kaW52YWxpZD0hMH19O2QuJHNldERpcnR5PWZ1bmN0aW9uKCl7Yi5yZW1vdmVDbGFzcyhJYSkuYWRkQ2xhc3Mob2IpO2QuJGRpcnR5PSEwO2QuJHByaXN0aW5lPSExO2UuJHNldERpcnR5KCl9O2QuJHNldFByaXN0aW5lPWZ1bmN0aW9uKCl7Yi5yZW1vdmVDbGFzcyhvYikuYWRkQ2xhc3MoSWEpO2QuJGRpcnR5PSExO2QuJHByaXN0aW5lPSEwO3EoaCxmdW5jdGlvbihhKXthLiRzZXRQcmlzdGluZSgpfSl9fWZ1bmN0aW9uIG9hKGIsYSxjLGQpe2IuJHNldFZhbGlkaXR5KGEsYyk7cmV0dXJuIGM/ZDpzfWZ1bmN0aW9uIHBiKGIsYSxjLGQsZSxnKXtpZighZS5hbmRyb2lkKXt2YXIgZj0hMTthLm9uKFwiY29tcG9zaXRpb25zdGFydFwiLGZ1bmN0aW9uKGEpe2Y9ITB9KTthLm9uKFwiY29tcG9zaXRpb25lbmRcIixcclxuZnVuY3Rpb24oKXtmPSExfSl9dmFyIGg9ZnVuY3Rpb24oKXtpZighZil7dmFyIGU9YS52YWwoKTtPYShjLm5nVHJpbXx8XCJUXCIpJiYoZT1aKGUpKTtkLiR2aWV3VmFsdWUhPT1lJiYoYi4kJHBoYXNlP2QuJHNldFZpZXdWYWx1ZShlKTpiLiRhcHBseShmdW5jdGlvbigpe2QuJHNldFZpZXdWYWx1ZShlKX0pKX19O2lmKGUuaGFzRXZlbnQoXCJpbnB1dFwiKSlhLm9uKFwiaW5wdXRcIixoKTtlbHNle3ZhciBtLGs9ZnVuY3Rpb24oKXttfHwobT1nLmRlZmVyKGZ1bmN0aW9uKCl7aCgpO209bnVsbH0pKX07YS5vbihcImtleWRvd25cIixmdW5jdGlvbihhKXthPWEua2V5Q29kZTs5MT09PWF8fCgxNTxhJiYxOT5hfHwzNzw9YSYmNDA+PWEpfHxrKCl9KTtpZihlLmhhc0V2ZW50KFwicGFzdGVcIikpYS5vbihcInBhc3RlIGN1dFwiLGspfWEub24oXCJjaGFuZ2VcIixoKTtkLiRyZW5kZXI9ZnVuY3Rpb24oKXthLnZhbChkLiRpc0VtcHR5KGQuJHZpZXdWYWx1ZSk/XCJcIjpkLiR2aWV3VmFsdWUpfTt2YXIgbD1jLm5nUGF0dGVybjtcclxubCYmKChlPWwubWF0Y2goL15cXC8oLiopXFwvKFtnaW1dKikkLykpPyhsPVJlZ0V4cChlWzFdLGVbMl0pLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIG9hKGQsXCJwYXR0ZXJuXCIsZC4kaXNFbXB0eShhKXx8bC50ZXN0KGEpLGEpfSk6ZT1mdW5jdGlvbihjKXt2YXIgZT1iLiRldmFsKGwpO2lmKCFlfHwhZS50ZXN0KXRocm93IHQoXCJuZ1BhdHRlcm5cIikoXCJub3JlZ2V4cFwiLGwsZSxmYShhKSk7cmV0dXJuIG9hKGQsXCJwYXR0ZXJuXCIsZC4kaXNFbXB0eShjKXx8ZS50ZXN0KGMpLGMpfSxkLiRmb3JtYXR0ZXJzLnB1c2goZSksZC4kcGFyc2Vycy5wdXNoKGUpKTtpZihjLm5nTWlubGVuZ3RoKXt2YXIgbj1WKGMubmdNaW5sZW5ndGgpO2U9ZnVuY3Rpb24oYSl7cmV0dXJuIG9hKGQsXCJtaW5sZW5ndGhcIixkLiRpc0VtcHR5KGEpfHxhLmxlbmd0aD49bixhKX07ZC4kcGFyc2Vycy5wdXNoKGUpO2QuJGZvcm1hdHRlcnMucHVzaChlKX1pZihjLm5nTWF4bGVuZ3RoKXt2YXIgcD1WKGMubmdNYXhsZW5ndGgpO2U9XHJcbmZ1bmN0aW9uKGEpe3JldHVybiBvYShkLFwibWF4bGVuZ3RoXCIsZC4kaXNFbXB0eShhKXx8YS5sZW5ndGg8PXAsYSl9O2QuJHBhcnNlcnMucHVzaChlKTtkLiRmb3JtYXR0ZXJzLnB1c2goZSl9fWZ1bmN0aW9uIExiKGIsYSl7Yj1cIm5nQ2xhc3NcIitiO3JldHVybiBmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkFDXCIsbGluazpmdW5jdGlvbihjLGQsZSl7ZnVuY3Rpb24gZyhiKXtpZighMD09PWF8fGMuJGluZGV4JTI9PT1hKXt2YXIgZD1mKGJ8fFwiXCIpO2g/dGEoYixoKXx8ZS4kdXBkYXRlQ2xhc3MoZCxmKGgpKTplLiRhZGRDbGFzcyhkKX1oPSQoYil9ZnVuY3Rpb24gZihhKXtpZihMKGEpKXJldHVybiBhLmpvaW4oXCIgXCIpO2lmKFcoYSkpe3ZhciBiPVtdO3EoYSxmdW5jdGlvbihhLGMpe2EmJmIucHVzaChjKX0pO3JldHVybiBiLmpvaW4oXCIgXCIpfXJldHVybiBhfXZhciBoO2MuJHdhdGNoKGVbYl0sZywhMCk7ZS4kb2JzZXJ2ZShcImNsYXNzXCIsZnVuY3Rpb24oYSl7ZyhjLiRldmFsKGVbYl0pKX0pO1xyXG5cIm5nQ2xhc3NcIiE9PWImJmMuJHdhdGNoKFwiJGluZGV4XCIsZnVuY3Rpb24oZCxnKXt2YXIgaD1kJjE7aWYoaCE9PWcmMSl7dmFyIG49ZihjLiRldmFsKGVbYl0pKTtoPT09YT9lLiRhZGRDbGFzcyhuKTplLiRyZW1vdmVDbGFzcyhuKX19KX19fX12YXIgeD1mdW5jdGlvbihiKXtyZXR1cm4gdyhiKT9iLnRvTG93ZXJDYXNlKCk6Yn0sSGE9ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi50b1VwcGVyQ2FzZSgpOmJ9LE4seixDYSx1YT1bXS5zbGljZSxRZD1bXS5wdXNoLExhPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsTmE9dChcIm5nXCIpLEJhPVAuYW5ndWxhcnx8KFAuYW5ndWxhcj17fSksVWEsR2EsaWE9W1wiMFwiLFwiMFwiLFwiMFwiXTtOPVYoKC9tc2llIChcXGQrKS8uZXhlYyh4KG5hdmlnYXRvci51c2VyQWdlbnQpKXx8W10pWzFdKTtpc05hTihOKSYmKE49VigoL3RyaWRlbnRcXC8uKjsgcnY6KFxcZCspLy5leGVjKHgobmF2aWdhdG9yLnVzZXJBZ2VudCkpfHxbXSlbMV0pKTtFLiRpbmplY3Q9W107XHJcbkFhLiRpbmplY3Q9W107dmFyIFo9ZnVuY3Rpb24oKXtyZXR1cm4gU3RyaW5nLnByb3RvdHlwZS50cmltP2Z1bmN0aW9uKGIpe3JldHVybiB3KGIpP2IudHJpbSgpOmJ9OmZ1bmN0aW9uKGIpe3JldHVybiB3KGIpP2IucmVwbGFjZSgvXlxcc1xccyovLFwiXCIpLnJlcGxhY2UoL1xcc1xccyokLyxcIlwiKTpifX0oKTtHYT05Pk4/ZnVuY3Rpb24oYil7Yj1iLm5vZGVOYW1lP2I6YlswXTtyZXR1cm4gYi5zY29wZU5hbWUmJlwiSFRNTFwiIT1iLnNjb3BlTmFtZT9IYShiLnNjb3BlTmFtZStcIjpcIitiLm5vZGVOYW1lKTpiLm5vZGVOYW1lfTpmdW5jdGlvbihiKXtyZXR1cm4gYi5ub2RlTmFtZT9iLm5vZGVOYW1lOmJbMF0ubm9kZU5hbWV9O3ZhciBUYz0vW0EtWl0vZyxSZD17ZnVsbDpcIjEuMi4xMlwiLG1ham9yOjEsbWlub3I6Mixkb3Q6MTIsY29kZU5hbWU6XCJjYXVsaWZsb3dlci1lcmFkaWNhdGlvblwifSxSYT1PLmNhY2hlPXt9LGRiPU8uZXhwYW5kbz1cIm5nLVwiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLFhjPTEsSWM9XHJcblAuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9mdW5jdGlvbihiLGEsYyl7Yi5hZGRFdmVudExpc3RlbmVyKGEsYywhMSl9OmZ1bmN0aW9uKGIsYSxjKXtiLmF0dGFjaEV2ZW50KFwib25cIithLGMpfSx6Yj1QLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oYixhLGMpe2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITEpfTpmdW5jdGlvbihiLGEsYyl7Yi5kZXRhY2hFdmVudChcIm9uXCIrYSxjKX0sVmM9LyhbXFw6XFwtXFxfXSsoLikpL2csV2M9L15tb3ooW0EtWl0pLyx3Yj10KFwianFMaXRlXCIpLEZhPU8ucHJvdG90eXBlPXtyZWFkeTpmdW5jdGlvbihiKXtmdW5jdGlvbiBhKCl7Y3x8KGM9ITAsYigpKX12YXIgYz0hMTtcImNvbXBsZXRlXCI9PT1SLnJlYWR5U3RhdGU/c2V0VGltZW91dChhKToodGhpcy5vbihcIkRPTUNvbnRlbnRMb2FkZWRcIixhKSxPKFApLm9uKFwibG9hZFwiLGEpKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXt2YXIgYj1bXTtxKHRoaXMsZnVuY3Rpb24oYSl7Yi5wdXNoKFwiXCIrXHJcbmEpfSk7cmV0dXJuXCJbXCIrYi5qb2luKFwiLCBcIikrXCJdXCJ9LGVxOmZ1bmN0aW9uKGIpe3JldHVybiAwPD1iP3oodGhpc1tiXSk6eih0aGlzW3RoaXMubGVuZ3RoK2JdKX0sbGVuZ3RoOjAscHVzaDpRZCxzb3J0OltdLnNvcnQsc3BsaWNlOltdLnNwbGljZX0sZmI9e307cShcIm11bHRpcGxlIHNlbGVjdGVkIGNoZWNrZWQgZGlzYWJsZWQgcmVhZE9ubHkgcmVxdWlyZWQgb3BlblwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXtmYlt4KGIpXT1ifSk7dmFyIGZjPXt9O3EoXCJpbnB1dCBzZWxlY3Qgb3B0aW9uIHRleHRhcmVhIGJ1dHRvbiBmb3JtIGRldGFpbHNcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYil7ZmNbSGEoYildPSEwfSk7cSh7ZGF0YTpiYyxpbmhlcml0ZWREYXRhOmViLHNjb3BlOmZ1bmN0aW9uKGIpe3JldHVybiB6KGIpLmRhdGEoXCIkc2NvcGVcIil8fGViKGIucGFyZW50Tm9kZXx8YixbXCIkaXNvbGF0ZVNjb3BlXCIsXCIkc2NvcGVcIl0pfSxpc29sYXRlU2NvcGU6ZnVuY3Rpb24oYil7cmV0dXJuIHooYikuZGF0YShcIiRpc29sYXRlU2NvcGVcIil8fFxyXG56KGIpLmRhdGEoXCIkaXNvbGF0ZVNjb3BlTm9UZW1wbGF0ZVwiKX0sY29udHJvbGxlcjpjYyxpbmplY3RvcjpmdW5jdGlvbihiKXtyZXR1cm4gZWIoYixcIiRpbmplY3RvclwiKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihiLGEpe2IucmVtb3ZlQXR0cmlidXRlKGEpfSxoYXNDbGFzczpBYixjc3M6ZnVuY3Rpb24oYixhLGMpe2E9UWEoYSk7aWYoRChjKSliLnN0eWxlW2FdPWM7ZWxzZXt2YXIgZDs4Pj1OJiYoZD1iLmN1cnJlbnRTdHlsZSYmYi5jdXJyZW50U3R5bGVbYV0sXCJcIj09PWQmJihkPVwiYXV0b1wiKSk7ZD1kfHxiLnN0eWxlW2FdOzg+PU4mJihkPVwiXCI9PT1kP3M6ZCk7cmV0dXJuIGR9fSxhdHRyOmZ1bmN0aW9uKGIsYSxjKXt2YXIgZD14KGEpO2lmKGZiW2RdKWlmKEQoYykpYz8oYlthXT0hMCxiLnNldEF0dHJpYnV0ZShhLGQpKTooYlthXT0hMSxiLnJlbW92ZUF0dHJpYnV0ZShkKSk7ZWxzZSByZXR1cm4gYlthXXx8KGIuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oYSl8fEUpLnNwZWNpZmllZD9cclxuZDpzO2Vsc2UgaWYoRChjKSliLnNldEF0dHJpYnV0ZShhLGMpO2Vsc2UgaWYoYi5nZXRBdHRyaWJ1dGUpcmV0dXJuIGI9Yi5nZXRBdHRyaWJ1dGUoYSwyKSxudWxsPT09Yj9zOmJ9LHByb3A6ZnVuY3Rpb24oYixhLGMpe2lmKEQoYykpYlthXT1jO2Vsc2UgcmV0dXJuIGJbYV19LHRleHQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCl7dmFyIGU9YVtiLm5vZGVUeXBlXTtpZih1KGQpKXJldHVybiBlP2JbZV06XCJcIjtiW2VdPWR9dmFyIGE9W107OT5OPyhhWzFdPVwiaW5uZXJUZXh0XCIsYVszXT1cIm5vZGVWYWx1ZVwiKTphWzFdPWFbM109XCJ0ZXh0Q29udGVudFwiO2IuJGR2PVwiXCI7cmV0dXJuIGJ9KCksdmFsOmZ1bmN0aW9uKGIsYSl7aWYodShhKSl7aWYoXCJTRUxFQ1RcIj09PUdhKGIpJiZiLm11bHRpcGxlKXt2YXIgYz1bXTtxKGIub3B0aW9ucyxmdW5jdGlvbihhKXthLnNlbGVjdGVkJiZjLnB1c2goYS52YWx1ZXx8YS50ZXh0KX0pO3JldHVybiAwPT09Yy5sZW5ndGg/bnVsbDpjfXJldHVybiBiLnZhbHVlfWIudmFsdWU9XHJcbmF9LGh0bWw6ZnVuY3Rpb24oYixhKXtpZih1KGEpKXJldHVybiBiLmlubmVySFRNTDtmb3IodmFyIGM9MCxkPWIuY2hpbGROb2RlcztjPGQubGVuZ3RoO2MrKylEYShkW2NdKTtiLmlubmVySFRNTD1hfSxlbXB0eTpkY30sZnVuY3Rpb24oYixhKXtPLnByb3RvdHlwZVthXT1mdW5jdGlvbihhLGQpe3ZhciBlLGc7aWYoYiE9PWRjJiYoMj09Yi5sZW5ndGgmJmIhPT1BYiYmYiE9PWNjP2E6ZCk9PT1zKXtpZihXKGEpKXtmb3IoZT0wO2U8dGhpcy5sZW5ndGg7ZSsrKWlmKGI9PT1iYyliKHRoaXNbZV0sYSk7ZWxzZSBmb3IoZyBpbiBhKWIodGhpc1tlXSxnLGFbZ10pO3JldHVybiB0aGlzfWU9Yi4kZHY7Zz1lPT09cz9NYXRoLm1pbih0aGlzLmxlbmd0aCwxKTp0aGlzLmxlbmd0aDtmb3IodmFyIGY9MDtmPGc7ZisrKXt2YXIgaD1iKHRoaXNbZl0sYSxkKTtlPWU/ZStoOmh9cmV0dXJuIGV9Zm9yKGU9MDtlPHRoaXMubGVuZ3RoO2UrKyliKHRoaXNbZV0sYSxkKTtyZXR1cm4gdGhpc319KTtxKHtyZW1vdmVEYXRhOiRiLFxyXG5kZWFsb2M6RGEsb246ZnVuY3Rpb24gYShjLGQsZSxnKXtpZihEKGcpKXRocm93IHdiKFwib25hcmdzXCIpO3ZhciBmPWphKGMsXCJldmVudHNcIiksaD1qYShjLFwiaGFuZGxlXCIpO2Z8fGphKGMsXCJldmVudHNcIixmPXt9KTtofHxqYShjLFwiaGFuZGxlXCIsaD1ZYyhjLGYpKTtxKGQuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGQpe3ZhciBnPWZbZF07aWYoIWcpe2lmKFwibW91c2VlbnRlclwiPT1kfHxcIm1vdXNlbGVhdmVcIj09ZCl7dmFyIGw9Ui5ib2R5LmNvbnRhaW5zfHxSLmJvZHkuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ZnVuY3Rpb24oYSxjKXt2YXIgZD05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGU9YyYmYy5wYXJlbnROb2RlO3JldHVybiBhPT09ZXx8ISEoZSYmMT09PWUubm9kZVR5cGUmJihkLmNvbnRhaW5zP2QuY29udGFpbnMoZSk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKSYxNikpfTpmdW5jdGlvbihhLGMpe2lmKGMpZm9yKDtjPVxyXG5jLnBhcmVudE5vZGU7KWlmKGM9PT1hKXJldHVybiEwO3JldHVybiExfTtmW2RdPVtdO2EoYyx7bW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIsbW91c2VlbnRlcjpcIm1vdXNlb3ZlclwifVtkXSxmdW5jdGlvbihhKXt2YXIgYz1hLnJlbGF0ZWRUYXJnZXQ7YyYmKGM9PT10aGlzfHxsKHRoaXMsYykpfHxoKGEsZCl9KX1lbHNlIEljKGMsZCxoKSxmW2RdPVtdO2c9ZltkXX1nLnB1c2goZSl9KX0sb2ZmOmFjLG9uZTpmdW5jdGlvbihhLGMsZCl7YT16KGEpO2Eub24oYyxmdW5jdGlvbiBnKCl7YS5vZmYoYyxkKTthLm9mZihjLGcpfSk7YS5vbihjLGQpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbihhLGMpe3ZhciBkLGU9YS5wYXJlbnROb2RlO0RhKGEpO3EobmV3IE8oYyksZnVuY3Rpb24oYyl7ZD9lLmluc2VydEJlZm9yZShjLGQubmV4dFNpYmxpbmcpOmUucmVwbGFjZUNoaWxkKGMsYSk7ZD1jfSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3ZhciBjPVtdO3EoYS5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpezE9PT1cclxuYS5ub2RlVHlwZSYmYy5wdXNoKGEpfSk7cmV0dXJuIGN9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNoaWxkTm9kZXN8fFtdfSxhcHBlbmQ6ZnVuY3Rpb24oYSxjKXtxKG5ldyBPKGMpLGZ1bmN0aW9uKGMpezEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fGEuYXBwZW5kQ2hpbGQoYyl9KX0scHJlcGVuZDpmdW5jdGlvbihhLGMpe2lmKDE9PT1hLm5vZGVUeXBlKXt2YXIgZD1hLmZpcnN0Q2hpbGQ7cShuZXcgTyhjKSxmdW5jdGlvbihjKXthLmluc2VydEJlZm9yZShjLGQpfSl9fSx3cmFwOmZ1bmN0aW9uKGEsYyl7Yz16KGMpWzBdO3ZhciBkPWEucGFyZW50Tm9kZTtkJiZkLnJlcGxhY2VDaGlsZChjLGEpO2MuYXBwZW5kQ2hpbGQoYSl9LHJlbW92ZTpmdW5jdGlvbihhKXtEYShhKTt2YXIgYz1hLnBhcmVudE5vZGU7YyYmYy5yZW1vdmVDaGlsZChhKX0sYWZ0ZXI6ZnVuY3Rpb24oYSxjKXt2YXIgZD1hLGU9YS5wYXJlbnROb2RlO3EobmV3IE8oYyksZnVuY3Rpb24oYSl7ZS5pbnNlcnRCZWZvcmUoYSxcclxuZC5uZXh0U2libGluZyk7ZD1hfSl9LGFkZENsYXNzOkNiLHJlbW92ZUNsYXNzOkJiLHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYyxkKXt1KGQpJiYoZD0hQWIoYSxjKSk7KGQ/Q2I6QmIpKGEsYyl9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLnBhcmVudE5vZGUpJiYxMSE9PWEubm9kZVR5cGU/YTpudWxsfSxuZXh0OmZ1bmN0aW9uKGEpe2lmKGEubmV4dEVsZW1lbnRTaWJsaW5nKXJldHVybiBhLm5leHRFbGVtZW50U2libGluZztmb3IoYT1hLm5leHRTaWJsaW5nO251bGwhPWEmJjEhPT1hLm5vZGVUeXBlOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9LGZpbmQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGMpOltdfSxjbG9uZTp5Yix0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGMsZCl7Yz0oamEoYSxcImV2ZW50c1wiKXx8e30pW2NdO2Q9ZHx8W107dmFyIGU9W3twcmV2ZW50RGVmYXVsdDpFLHN0b3BQcm9wYWdhdGlvbjpFfV07XHJcbnEoYyxmdW5jdGlvbihjKXtjLmFwcGx5KGEsZS5jb25jYXQoZCkpfSl9fSxmdW5jdGlvbihhLGMpe08ucHJvdG90eXBlW2NdPWZ1bmN0aW9uKGMsZSxnKXtmb3IodmFyIGYsaD0wO2g8dGhpcy5sZW5ndGg7aCsrKXUoZik/KGY9YSh0aGlzW2hdLGMsZSxnKSxEKGYpJiYoZj16KGYpKSk6eGIoZixhKHRoaXNbaF0sYyxlLGcpKTtyZXR1cm4gRChmKT9mOnRoaXN9O08ucHJvdG90eXBlLmJpbmQ9Ty5wcm90b3R5cGUub247Ty5wcm90b3R5cGUudW5iaW5kPU8ucHJvdG90eXBlLm9mZn0pO1NhLnByb3RvdHlwZT17cHV0OmZ1bmN0aW9uKGEsYyl7dGhpc1tFYShhKV09Y30sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzW0VhKGEpXX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXNbYT1FYShhKV07ZGVsZXRlIHRoaXNbYV07cmV0dXJuIGN9fTt2YXIgJGM9L15mdW5jdGlvblxccypbXlxcKF0qXFwoXFxzKihbXlxcKV0qKVxcKS9tLGFkPS8sLyxiZD0vXlxccyooXz8pKFxcUys/KVxcMVxccyokLyxaYz1cclxuLygoXFwvXFwvLiokKXwoXFwvXFwqW1xcc1xcU10qP1xcKlxcLykpL21nLFRhPXQoXCIkaW5qZWN0b3JcIiksU2Q9dChcIiRhbmltYXRlXCIpLFRkPVtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7dGhpcy4kJHNlbGVjdG9ycz17fTt0aGlzLnJlZ2lzdGVyPWZ1bmN0aW9uKGMsZCl7dmFyIGU9YytcIi1hbmltYXRpb25cIjtpZihjJiZcIi5cIiE9Yy5jaGFyQXQoMCkpdGhyb3cgU2QoXCJub3Rjc2VsXCIsYyk7dGhpcy4kJHNlbGVjdG9yc1tjLnN1YnN0cigxKV09ZTthLmZhY3RvcnkoZSxkKX07dGhpcy5jbGFzc05hbWVGaWx0ZXI9ZnVuY3Rpb24oYSl7MT09PWFyZ3VtZW50cy5sZW5ndGgmJih0aGlzLiQkY2xhc3NOYW1lRmlsdGVyPWEgaW5zdGFuY2VvZiBSZWdFeHA/YTpudWxsKTtyZXR1cm4gdGhpcy4kJGNsYXNzTmFtZUZpbHRlcn07dGhpcy4kZ2V0PVtcIiR0aW1lb3V0XCIsZnVuY3Rpb24oYSl7cmV0dXJue2VudGVyOmZ1bmN0aW9uKGQsZSxnLGYpe2c/Zy5hZnRlcihkKTooZSYmZVswXXx8KGU9Zy5wYXJlbnQoKSksZS5hcHBlbmQoZCkpO1xyXG5mJiZhKGYsMCwhMSl9LGxlYXZlOmZ1bmN0aW9uKGQsZSl7ZC5yZW1vdmUoKTtlJiZhKGUsMCwhMSl9LG1vdmU6ZnVuY3Rpb24oYSxjLGcsZil7dGhpcy5lbnRlcihhLGMsZyxmKX0sYWRkQ2xhc3M6ZnVuY3Rpb24oZCxlLGcpe2U9dyhlKT9lOkwoZSk/ZS5qb2luKFwiIFwiKTpcIlwiO3EoZCxmdW5jdGlvbihhKXtDYihhLGUpfSk7ZyYmYShnLDAsITEpfSxyZW1vdmVDbGFzczpmdW5jdGlvbihkLGUsZyl7ZT13KGUpP2U6TChlKT9lLmpvaW4oXCIgXCIpOlwiXCI7cShkLGZ1bmN0aW9uKGEpe0JiKGEsZSl9KTtnJiZhKGcsMCwhMSl9LGVuYWJsZWQ6RX19XX1dLGhhPXQoXCIkY29tcGlsZVwiKTtpYy4kaW5qZWN0PVtcIiRwcm92aWRlXCIsXCIkJHNhbml0aXplVXJpUHJvdmlkZXJcIl07dmFyIGhkPS9eKHhbXFw6XFwtX118ZGF0YVtcXDpcXC1fXSkvaSxvYz10KFwiJGludGVycG9sYXRlXCIpLFVkPS9eKFteXFw/I10qKShcXD8oW14jXSopKT8oIyguKikpPyQvLHNkPXtodHRwOjgwLGh0dHBzOjQ0MyxmdHA6MjF9LEdiPXQoXCIkbG9jYXRpb25cIik7XHJcbnRjLnByb3RvdHlwZT1IYi5wcm90b3R5cGU9c2MucHJvdG90eXBlPXskJGh0bWw1OiExLCQkcmVwbGFjZTohMSxhYnNVcmw6aWIoXCIkJGFic1VybFwiKSx1cmw6ZnVuY3Rpb24oYSxjKXtpZih1KGEpKXJldHVybiB0aGlzLiQkdXJsO3ZhciBkPVVkLmV4ZWMoYSk7ZFsxXSYmdGhpcy5wYXRoKGRlY29kZVVSSUNvbXBvbmVudChkWzFdKSk7KGRbMl18fGRbMV0pJiZ0aGlzLnNlYXJjaChkWzNdfHxcIlwiKTt0aGlzLmhhc2goZFs1XXx8XCJcIixjKTtyZXR1cm4gdGhpc30scHJvdG9jb2w6aWIoXCIkJHByb3RvY29sXCIpLGhvc3Q6aWIoXCIkJGhvc3RcIikscG9ydDppYihcIiQkcG9ydFwiKSxwYXRoOnVjKFwiJCRwYXRoXCIsZnVuY3Rpb24oYSl7cmV0dXJuXCIvXCI9PWEuY2hhckF0KDApP2E6XCIvXCIrYX0pLHNlYXJjaDpmdW5jdGlvbihhLGMpe3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHRoaXMuJCRzZWFyY2g7Y2FzZSAxOmlmKHcoYSkpdGhpcy4kJHNlYXJjaD1WYihhKTtlbHNlIGlmKFcoYSkpdGhpcy4kJHNlYXJjaD1cclxuYTtlbHNlIHRocm93IEdiKFwiaXNyY2hhcmdcIik7YnJlYWs7ZGVmYXVsdDp1KGMpfHxudWxsPT09Yz9kZWxldGUgdGhpcy4kJHNlYXJjaFthXTp0aGlzLiQkc2VhcmNoW2FdPWN9dGhpcy4kJGNvbXBvc2UoKTtyZXR1cm4gdGhpc30saGFzaDp1YyhcIiQkaGFzaFwiLEFhKSxyZXBsYWNlOmZ1bmN0aW9uKCl7dGhpcy4kJHJlcGxhY2U9ITA7cmV0dXJuIHRoaXN9fTt2YXIgeWE9dChcIiRwYXJzZVwiKSx4Yz17fSxxYSxKYT17XCJudWxsXCI6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sXCJ0cnVlXCI6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sXCJmYWxzZVwiOmZ1bmN0aW9uKCl7cmV0dXJuITF9LHVuZGVmaW5lZDpFLFwiK1wiOmZ1bmN0aW9uKGEsYyxkLGUpe2Q9ZChhLGMpO2U9ZShhLGMpO3JldHVybiBEKGQpP0QoZSk/ZCtlOmQ6RChlKT9lOnN9LFwiLVwiOmZ1bmN0aW9uKGEsYyxkLGUpe2Q9ZChhLGMpO2U9ZShhLGMpO3JldHVybihEKGQpP2Q6MCktKEQoZSk/ZTowKX0sXCIqXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxcclxuYykqZShhLGMpfSxcIi9cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpL2UoYSxjKX0sXCIlXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSVlKGEsYyl9LFwiXlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyleZShhLGMpfSxcIj1cIjpFLFwiPT09XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKT09PWUoYSxjKX0sXCIhPT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpIT09ZShhLGMpfSxcIj09XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKT09ZShhLGMpfSxcIiE9XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSE9ZShhLGMpfSxcIjxcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPGUoYSxjKX0sXCI+XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKT5lKGEsYyl9LFwiPD1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPD1lKGEsYyl9LFwiPj1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLFxyXG5jKT49ZShhLGMpfSxcIiYmXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSYmZShhLGMpfSxcInx8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKXx8ZShhLGMpfSxcIiZcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJmUoYSxjKX0sXCJ8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGUoYSxjKShhLGMsZChhLGMpKX0sXCIhXCI6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiFkKGEsYyl9fSxWZD17bjpcIlxcblwiLGY6XCJcXGZcIixyOlwiXFxyXCIsdDpcIlxcdFwiLHY6XCJcXHZcIixcIidcIjpcIidcIiwnXCInOidcIid9LEpiPWZ1bmN0aW9uKGEpe3RoaXMub3B0aW9ucz1hfTtKYi5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOkpiLGxleDpmdW5jdGlvbihhKXt0aGlzLnRleHQ9YTt0aGlzLmluZGV4PTA7dGhpcy5jaD1zO3RoaXMubGFzdENoPVwiOlwiO3RoaXMudG9rZW5zPVtdO3ZhciBjO2ZvcihhPVtdO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3RoaXMuY2g9dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuaWYodGhpcy5pcyhcIlxcXCInXCIpKXRoaXMucmVhZFN0cmluZyh0aGlzLmNoKTtlbHNlIGlmKHRoaXMuaXNOdW1iZXIodGhpcy5jaCl8fHRoaXMuaXMoXCIuXCIpJiZ0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSl0aGlzLnJlYWROdW1iZXIoKTtlbHNlIGlmKHRoaXMuaXNJZGVudCh0aGlzLmNoKSl0aGlzLnJlYWRJZGVudCgpLHRoaXMud2FzKFwieyxcIikmJihcIntcIj09PWFbMF0mJihjPXRoaXMudG9rZW5zW3RoaXMudG9rZW5zLmxlbmd0aC0xXSkpJiYoYy5qc29uPS0xPT09Yy50ZXh0LmluZGV4T2YoXCIuXCIpKTtlbHNlIGlmKHRoaXMuaXMoXCIoKXt9W10uLDs6P1wiKSl0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6dGhpcy5jaCxqc29uOnRoaXMud2FzKFwiOlssXCIpJiZ0aGlzLmlzKFwie1tcIil8fHRoaXMuaXMoXCJ9XTosXCIpfSksdGhpcy5pcyhcIntbXCIpJiZhLnVuc2hpZnQodGhpcy5jaCksdGhpcy5pcyhcIn1dXCIpJiZhLnNoaWZ0KCksdGhpcy5pbmRleCsrO2Vsc2UgaWYodGhpcy5pc1doaXRlc3BhY2UodGhpcy5jaCkpe3RoaXMuaW5kZXgrKztcclxuY29udGludWV9ZWxzZXt2YXIgZD10aGlzLmNoK3RoaXMucGVlaygpLGU9ZCt0aGlzLnBlZWsoMiksZz1KYVt0aGlzLmNoXSxmPUphW2RdLGg9SmFbZV07aD8odGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OmUsZm46aH0pLHRoaXMuaW5kZXgrPTMpOmY/KHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDpkLGZuOmZ9KSx0aGlzLmluZGV4Kz0yKTpnPyh0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6dGhpcy5jaCxmbjpnLGpzb246dGhpcy53YXMoXCJbLDpcIikmJnRoaXMuaXMoXCIrLVwiKX0pLHRoaXMuaW5kZXgrPTEpOnRoaXMudGhyb3dFcnJvcihcIlVuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgXCIsdGhpcy5pbmRleCx0aGlzLmluZGV4KzEpfXRoaXMubGFzdENoPXRoaXMuY2h9cmV0dXJuIHRoaXMudG9rZW5zfSxpczpmdW5jdGlvbihhKXtyZXR1cm4tMSE9PWEuaW5kZXhPZih0aGlzLmNoKX0sd2FzOmZ1bmN0aW9uKGEpe3JldHVybi0xIT09XHJcbmEuaW5kZXhPZih0aGlzLmxhc3RDaCl9LHBlZWs6ZnVuY3Rpb24oYSl7YT1hfHwxO3JldHVybiB0aGlzLmluZGV4K2E8dGhpcy50ZXh0Lmxlbmd0aD90aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgrYSk6ITF9LGlzTnVtYmVyOmZ1bmN0aW9uKGEpe3JldHVyblwiMFwiPD1hJiZcIjlcIj49YX0saXNXaGl0ZXNwYWNlOmZ1bmN0aW9uKGEpe3JldHVyblwiIFwiPT09YXx8XCJcXHJcIj09PWF8fFwiXFx0XCI9PT1hfHxcIlxcblwiPT09YXx8XCJcXHZcIj09PWF8fFwiXFx1MDBhMFwiPT09YX0saXNJZGVudDpmdW5jdGlvbihhKXtyZXR1cm5cImFcIjw9YSYmXCJ6XCI+PWF8fFwiQVwiPD1hJiZcIlpcIj49YXx8XCJfXCI9PT1hfHxcIiRcIj09PWF9LGlzRXhwT3BlcmF0b3I6ZnVuY3Rpb24oYSl7cmV0dXJuXCItXCI9PT1hfHxcIitcIj09PWF8fHRoaXMuaXNOdW1iZXIoYSl9LHRocm93RXJyb3I6ZnVuY3Rpb24oYSxjLGQpe2Q9ZHx8dGhpcy5pbmRleDtjPUQoYyk/XCJzIFwiK2MrXCItXCIrdGhpcy5pbmRleCtcIiBbXCIrdGhpcy50ZXh0LnN1YnN0cmluZyhjLGQpK1xyXG5cIl1cIjpcIiBcIitkO3Rocm93IHlhKFwibGV4ZXJyXCIsYSxjLHRoaXMudGV4dCk7fSxyZWFkTnVtYmVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVwiXCIsYz10aGlzLmluZGV4O3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3ZhciBkPXgodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7aWYoXCIuXCI9PWR8fHRoaXMuaXNOdW1iZXIoZCkpYSs9ZDtlbHNle3ZhciBlPXRoaXMucGVlaygpO2lmKFwiZVwiPT1kJiZ0aGlzLmlzRXhwT3BlcmF0b3IoZSkpYSs9ZDtlbHNlIGlmKHRoaXMuaXNFeHBPcGVyYXRvcihkKSYmZSYmdGhpcy5pc051bWJlcihlKSYmXCJlXCI9PWEuY2hhckF0KGEubGVuZ3RoLTEpKWErPWQ7ZWxzZSBpZighdGhpcy5pc0V4cE9wZXJhdG9yKGQpfHxlJiZ0aGlzLmlzTnVtYmVyKGUpfHxcImVcIiE9YS5jaGFyQXQoYS5sZW5ndGgtMSkpYnJlYWs7ZWxzZSB0aGlzLnRocm93RXJyb3IoXCJJbnZhbGlkIGV4cG9uZW50XCIpfXRoaXMuaW5kZXgrK31hKj0xO3RoaXMudG9rZW5zLnB1c2goe2luZGV4OmMsXHJcbnRleHQ6YSxqc29uOiEwLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIGF9fSl9LHJlYWRJZGVudDpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLGM9XCJcIixkPXRoaXMuaW5kZXgsZSxnLGYsaDt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXtoPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7aWYoXCIuXCI9PT1ofHx0aGlzLmlzSWRlbnQoaCl8fHRoaXMuaXNOdW1iZXIoaCkpXCIuXCI9PT1oJiYoZT10aGlzLmluZGV4KSxjKz1oO2Vsc2UgYnJlYWs7dGhpcy5pbmRleCsrfWlmKGUpZm9yKGc9dGhpcy5pbmRleDtnPHRoaXMudGV4dC5sZW5ndGg7KXtoPXRoaXMudGV4dC5jaGFyQXQoZyk7aWYoXCIoXCI9PT1oKXtmPWMuc3Vic3RyKGUtZCsxKTtjPWMuc3Vic3RyKDAsZS1kKTt0aGlzLmluZGV4PWc7YnJlYWt9aWYodGhpcy5pc1doaXRlc3BhY2UoaCkpZysrO2Vsc2UgYnJlYWt9ZD17aW5kZXg6ZCx0ZXh0OmN9O2lmKEphLmhhc093blByb3BlcnR5KGMpKWQuZm49SmFbY10sZC5qc29uPUphW2NdO1xyXG5lbHNle3ZhciBtPXdjKGMsdGhpcy5vcHRpb25zLHRoaXMudGV4dCk7ZC5mbj15KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG0oYSxjKX0se2Fzc2lnbjpmdW5jdGlvbihkLGUpe3JldHVybiBqYihkLGMsZSxhLnRleHQsYS5vcHRpb25zKX19KX10aGlzLnRva2Vucy5wdXNoKGQpO2YmJih0aGlzLnRva2Vucy5wdXNoKHtpbmRleDplLHRleHQ6XCIuXCIsanNvbjohMX0pLHRoaXMudG9rZW5zLnB1c2goe2luZGV4OmUrMSx0ZXh0OmYsanNvbjohMX0pKX0scmVhZFN0cmluZzpmdW5jdGlvbihhKXt2YXIgYz10aGlzLmluZGV4O3RoaXMuaW5kZXgrKztmb3IodmFyIGQ9XCJcIixlPWEsZz0hMTt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXt2YXIgZj10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpLGU9ZStmO2lmKGcpXCJ1XCI9PT1mPyhmPXRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCsxLHRoaXMuaW5kZXgrNSksZi5tYXRjaCgvW1xcZGEtZl17NH0vaSl8fHRoaXMudGhyb3dFcnJvcihcIkludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1XCIrXHJcbmYrXCJdXCIpLHRoaXMuaW5kZXgrPTQsZCs9U3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChmLDE2KSkpOmQ9KGc9VmRbZl0pP2QrZzpkK2YsZz0hMTtlbHNlIGlmKFwiXFxcXFwiPT09ZilnPSEwO2Vsc2V7aWYoZj09PWEpe3RoaXMuaW5kZXgrKzt0aGlzLnRva2Vucy5wdXNoKHtpbmRleDpjLHRleHQ6ZSxzdHJpbmc6ZCxqc29uOiEwLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIGR9fSk7cmV0dXJufWQrPWZ9dGhpcy5pbmRleCsrfXRoaXMudGhyb3dFcnJvcihcIlVudGVybWluYXRlZCBxdW90ZVwiLGMpfX07dmFyIFlhPWZ1bmN0aW9uKGEsYyxkKXt0aGlzLmxleGVyPWE7dGhpcy4kZmlsdGVyPWM7dGhpcy5vcHRpb25zPWR9O1lhLlpFUk89ZnVuY3Rpb24oKXtyZXR1cm4gMH07WWEucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpZYSxwYXJzZTpmdW5jdGlvbihhLGMpe3RoaXMudGV4dD1hO3RoaXMuanNvbj1jO3RoaXMudG9rZW5zPXRoaXMubGV4ZXIubGV4KGEpO2MmJih0aGlzLmFzc2lnbm1lbnQ9dGhpcy5sb2dpY2FsT1IsXHJcbnRoaXMuZnVuY3Rpb25DYWxsPXRoaXMuZmllbGRBY2Nlc3M9dGhpcy5vYmplY3RJbmRleD10aGlzLmZpbHRlckNoYWluPWZ1bmN0aW9uKCl7dGhpcy50aHJvd0Vycm9yKFwiaXMgbm90IHZhbGlkIGpzb25cIix7dGV4dDphLGluZGV4OjB9KX0pO3ZhciBkPWM/dGhpcy5wcmltYXJ5KCk6dGhpcy5zdGF0ZW1lbnRzKCk7MCE9PXRoaXMudG9rZW5zLmxlbmd0aCYmdGhpcy50aHJvd0Vycm9yKFwiaXMgYW4gdW5leHBlY3RlZCB0b2tlblwiLHRoaXMudG9rZW5zWzBdKTtkLmxpdGVyYWw9ISFkLmxpdGVyYWw7ZC5jb25zdGFudD0hIWQuY29uc3RhbnQ7cmV0dXJuIGR9LHByaW1hcnk6ZnVuY3Rpb24oKXt2YXIgYTtpZih0aGlzLmV4cGVjdChcIihcIikpYT10aGlzLmZpbHRlckNoYWluKCksdGhpcy5jb25zdW1lKFwiKVwiKTtlbHNlIGlmKHRoaXMuZXhwZWN0KFwiW1wiKSlhPXRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO2Vsc2UgaWYodGhpcy5leHBlY3QoXCJ7XCIpKWE9dGhpcy5vYmplY3QoKTtlbHNle3ZhciBjPVxyXG50aGlzLmV4cGVjdCgpOyhhPWMuZm4pfHx0aGlzLnRocm93RXJyb3IoXCJub3QgYSBwcmltYXJ5IGV4cHJlc3Npb25cIixjKTtjLmpzb24mJihhLmNvbnN0YW50PSEwLGEubGl0ZXJhbD0hMCl9Zm9yKHZhciBkO2M9dGhpcy5leHBlY3QoXCIoXCIsXCJbXCIsXCIuXCIpOylcIihcIj09PWMudGV4dD8oYT10aGlzLmZ1bmN0aW9uQ2FsbChhLGQpLGQ9bnVsbCk6XCJbXCI9PT1jLnRleHQ/KGQ9YSxhPXRoaXMub2JqZWN0SW5kZXgoYSkpOlwiLlwiPT09Yy50ZXh0PyhkPWEsYT10aGlzLmZpZWxkQWNjZXNzKGEpKTp0aGlzLnRocm93RXJyb3IoXCJJTVBPU1NJQkxFXCIpO3JldHVybiBhfSx0aHJvd0Vycm9yOmZ1bmN0aW9uKGEsYyl7dGhyb3cgeWEoXCJzeW50YXhcIixjLnRleHQsYSxjLmluZGV4KzEsdGhpcy50ZXh0LHRoaXMudGV4dC5zdWJzdHJpbmcoYy5pbmRleCkpO30scGVla1Rva2VuOmZ1bmN0aW9uKCl7aWYoMD09PXRoaXMudG9rZW5zLmxlbmd0aCl0aHJvdyB5YShcInVlb2VcIix0aGlzLnRleHQpO3JldHVybiB0aGlzLnRva2Vuc1swXX0sXHJcbnBlZWs6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoMDx0aGlzLnRva2Vucy5sZW5ndGgpe3ZhciBnPXRoaXMudG9rZW5zWzBdLGY9Zy50ZXh0O2lmKGY9PT1hfHxmPT09Y3x8Zj09PWR8fGY9PT1lfHwhKGF8fGN8fGR8fGUpKXJldHVybiBnfXJldHVybiExfSxleHBlY3Q6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuKGE9dGhpcy5wZWVrKGEsYyxkLGUpKT8odGhpcy5qc29uJiYhYS5qc29uJiZ0aGlzLnRocm93RXJyb3IoXCJpcyBub3QgdmFsaWQganNvblwiLGEpLHRoaXMudG9rZW5zLnNoaWZ0KCksYSk6ITF9LGNvbnN1bWU6ZnVuY3Rpb24oYSl7dGhpcy5leHBlY3QoYSl8fHRoaXMudGhyb3dFcnJvcihcImlzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbXCIrYStcIl1cIix0aGlzLnBlZWsoKSl9LHVuYXJ5Rm46ZnVuY3Rpb24oYSxjKXtyZXR1cm4geShmdW5jdGlvbihkLGUpe3JldHVybiBhKGQsZSxjKX0se2NvbnN0YW50OmMuY29uc3RhbnR9KX0sdGVybmFyeUZuOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4geShmdW5jdGlvbihlLFxyXG5nKXtyZXR1cm4gYShlLGcpP2MoZSxnKTpkKGUsZyl9LHtjb25zdGFudDphLmNvbnN0YW50JiZjLmNvbnN0YW50JiZkLmNvbnN0YW50fSl9LGJpbmFyeUZuOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4geShmdW5jdGlvbihlLGcpe3JldHVybiBjKGUsZyxhLGQpfSx7Y29uc3RhbnQ6YS5jb25zdGFudCYmZC5jb25zdGFudH0pfSxzdGF0ZW1lbnRzOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdOzspaWYoMDx0aGlzLnRva2Vucy5sZW5ndGgmJiF0aGlzLnBlZWsoXCJ9XCIsXCIpXCIsXCI7XCIsXCJdXCIpJiZhLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKSwhdGhpcy5leHBlY3QoXCI7XCIpKXJldHVybiAxPT09YS5sZW5ndGg/YVswXTpmdW5jdGlvbihjLGQpe2Zvcih2YXIgZSxnPTA7ZzxhLmxlbmd0aDtnKyspe3ZhciBmPWFbZ107ZiYmKGU9ZihjLGQpKX1yZXR1cm4gZX19LGZpbHRlckNoYWluOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuZXhwcmVzc2lvbigpLGM7OylpZihjPXRoaXMuZXhwZWN0KFwifFwiKSlhPVxyXG50aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmZpbHRlcigpKTtlbHNlIHJldHVybiBhfSxmaWx0ZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5leHBlY3QoKSxjPXRoaXMuJGZpbHRlcihhLnRleHQpLGQ9W107OylpZihhPXRoaXMuZXhwZWN0KFwiOlwiKSlkLnB1c2godGhpcy5leHByZXNzaW9uKCkpO2Vsc2V7dmFyIGU9ZnVuY3Rpb24oYSxlLGgpe2g9W2hdO2Zvcih2YXIgbT0wO208ZC5sZW5ndGg7bSsrKWgucHVzaChkW21dKGEsZSkpO3JldHVybiBjLmFwcGx5KGEsaCl9O3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlfX19LGV4cHJlc3Npb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hc3NpZ25tZW50KCl9LGFzc2lnbm1lbnQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRlcm5hcnkoKSxjLGQ7cmV0dXJuKGQ9dGhpcy5leHBlY3QoXCI9XCIpKT8oYS5hc3NpZ258fHRoaXMudGhyb3dFcnJvcihcImltcGxpZXMgYXNzaWdubWVudCBidXQgW1wiK3RoaXMudGV4dC5zdWJzdHJpbmcoMCxkLmluZGV4KStcclxuXCJdIGNhbiBub3QgYmUgYXNzaWduZWQgdG9cIixkKSxjPXRoaXMudGVybmFyeSgpLGZ1bmN0aW9uKGQsZyl7cmV0dXJuIGEuYXNzaWduKGQsYyhkLGcpLGcpfSk6YX0sdGVybmFyeTpmdW5jdGlvbigpe3ZhciBhPXRoaXMubG9naWNhbE9SKCksYyxkO2lmKHRoaXMuZXhwZWN0KFwiP1wiKSl7Yz10aGlzLnRlcm5hcnkoKTtpZihkPXRoaXMuZXhwZWN0KFwiOlwiKSlyZXR1cm4gdGhpcy50ZXJuYXJ5Rm4oYSxjLHRoaXMudGVybmFyeSgpKTt0aGlzLnRocm93RXJyb3IoXCJleHBlY3RlZCA6XCIsZCl9ZWxzZSByZXR1cm4gYX0sbG9naWNhbE9SOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMubG9naWNhbEFORCgpLGM7OylpZihjPXRoaXMuZXhwZWN0KFwifHxcIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmxvZ2ljYWxBTkQoKSk7ZWxzZSByZXR1cm4gYX0sbG9naWNhbEFORDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZXF1YWxpdHkoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCImJlwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxcclxuYy5mbix0aGlzLmxvZ2ljYWxBTkQoKSk7cmV0dXJuIGF9LGVxdWFsaXR5OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5yZWxhdGlvbmFsKCksYztpZihjPXRoaXMuZXhwZWN0KFwiPT1cIixcIiE9XCIsXCI9PT1cIixcIiE9PVwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMuZXF1YWxpdHkoKSk7cmV0dXJuIGF9LHJlbGF0aW9uYWw6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmFkZGl0aXZlKCksYztpZihjPXRoaXMuZXhwZWN0KFwiPFwiLFwiPlwiLFwiPD1cIixcIj49XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5yZWxhdGlvbmFsKCkpO3JldHVybiBhfSxhZGRpdGl2ZTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLm11bHRpcGxpY2F0aXZlKCksYztjPXRoaXMuZXhwZWN0KFwiK1wiLFwiLVwiKTspYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLm11bHRpcGxpY2F0aXZlKCkpO3JldHVybiBhfSxtdWx0aXBsaWNhdGl2ZTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLnVuYXJ5KCksYztjPXRoaXMuZXhwZWN0KFwiKlwiLFxyXG5cIi9cIixcIiVcIik7KWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy51bmFyeSgpKTtyZXR1cm4gYX0sdW5hcnk6ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gdGhpcy5leHBlY3QoXCIrXCIpP3RoaXMucHJpbWFyeSgpOihhPXRoaXMuZXhwZWN0KFwiLVwiKSk/dGhpcy5iaW5hcnlGbihZYS5aRVJPLGEuZm4sdGhpcy51bmFyeSgpKTooYT10aGlzLmV4cGVjdChcIiFcIikpP3RoaXMudW5hcnlGbihhLmZuLHRoaXMudW5hcnkoKSk6dGhpcy5wcmltYXJ5KCl9LGZpZWxkQWNjZXNzOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZD10aGlzLmV4cGVjdCgpLnRleHQsZT13YyhkLHRoaXMub3B0aW9ucyx0aGlzLnRleHQpO3JldHVybiB5KGZ1bmN0aW9uKGMsZCxoKXtyZXR1cm4gZShofHxhKGMsZCkpfSx7YXNzaWduOmZ1bmN0aW9uKGUsZixoKXtyZXR1cm4gamIoYShlLGgpLGQsZixjLnRleHQsYy5vcHRpb25zKX19KX0sb2JqZWN0SW5kZXg6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxkPXRoaXMuZXhwcmVzc2lvbigpO1xyXG50aGlzLmNvbnN1bWUoXCJdXCIpO3JldHVybiB5KGZ1bmN0aW9uKGUsZyl7dmFyIGY9YShlLGcpLGg9ZChlLGcpLG07aWYoIWYpcmV0dXJuIHM7KGY9WGEoZltoXSxjLnRleHQpKSYmKGYudGhlbiYmYy5vcHRpb25zLnVud3JhcFByb21pc2VzKSYmKG09ZixcIiQkdlwiaW4gZnx8KG0uJCR2PXMsbS50aGVuKGZ1bmN0aW9uKGEpe20uJCR2PWF9KSksZj1mLiQkdik7cmV0dXJuIGZ9LHthc3NpZ246ZnVuY3Rpb24oZSxnLGYpe3ZhciBoPWQoZSxmKTtyZXR1cm4gWGEoYShlLGYpLGMudGV4dClbaF09Z319KX0sZnVuY3Rpb25DYWxsOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9W107aWYoXCIpXCIhPT10aGlzLnBlZWtUb2tlbigpLnRleHQpe2RvIGQucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7d2hpbGUodGhpcy5leHBlY3QoXCIsXCIpKX10aGlzLmNvbnN1bWUoXCIpXCIpO3ZhciBlPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKGcsZil7Zm9yKHZhciBoPVtdLG09Yz9jKGcsZik6ZyxrPTA7azxkLmxlbmd0aDtrKyspaC5wdXNoKGRba10oZyxcclxuZikpO2s9YShnLGYsbSl8fEU7WGEobSxlLnRleHQpO1hhKGssZS50ZXh0KTtoPWsuYXBwbHk/ay5hcHBseShtLGgpOmsoaFswXSxoWzFdLGhbMl0saFszXSxoWzRdKTtyZXR1cm4gWGEoaCxlLnRleHQpfX0sYXJyYXlEZWNsYXJhdGlvbjpmdW5jdGlvbigpe3ZhciBhPVtdLGM9ITA7aWYoXCJdXCIhPT10aGlzLnBlZWtUb2tlbigpLnRleHQpe2Rve3ZhciBkPXRoaXMuZXhwcmVzc2lvbigpO2EucHVzaChkKTtkLmNvbnN0YW50fHwoYz0hMSl9d2hpbGUodGhpcy5leHBlY3QoXCIsXCIpKX10aGlzLmNvbnN1bWUoXCJdXCIpO3JldHVybiB5KGZ1bmN0aW9uKGMsZCl7Zm9yKHZhciBmPVtdLGg9MDtoPGEubGVuZ3RoO2grKylmLnB1c2goYVtoXShjLGQpKTtyZXR1cm4gZn0se2xpdGVyYWw6ITAsY29uc3RhbnQ6Y30pfSxvYmplY3Q6ZnVuY3Rpb24oKXt2YXIgYT1bXSxjPSEwO2lmKFwifVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkb3t2YXIgZD10aGlzLmV4cGVjdCgpLGQ9ZC5zdHJpbmd8fGQudGV4dDtcclxudGhpcy5jb25zdW1lKFwiOlwiKTt2YXIgZT10aGlzLmV4cHJlc3Npb24oKTthLnB1c2goe2tleTpkLHZhbHVlOmV9KTtlLmNvbnN0YW50fHwoYz0hMSl9d2hpbGUodGhpcy5leHBlY3QoXCIsXCIpKX10aGlzLmNvbnN1bWUoXCJ9XCIpO3JldHVybiB5KGZ1bmN0aW9uKGMsZCl7Zm9yKHZhciBlPXt9LG09MDttPGEubGVuZ3RoO20rKyl7dmFyIGs9YVttXTtlW2sua2V5XT1rLnZhbHVlKGMsZCl9cmV0dXJuIGV9LHtsaXRlcmFsOiEwLGNvbnN0YW50OmN9KX19O3ZhciBJYj17fSxyYT10KFwiJHNjZVwiKSxlYT17SFRNTDpcImh0bWxcIixDU1M6XCJjc3NcIixVUkw6XCJ1cmxcIixSRVNPVVJDRV9VUkw6XCJyZXNvdXJjZVVybFwiLEpTOlwianNcIn0sVD1SLmNyZWF0ZUVsZW1lbnQoXCJhXCIpLHpjPXhhKFAubG9jYXRpb24uaHJlZiwhMCk7QWMuJGluamVjdD1bXCIkcHJvdmlkZVwiXTtCYy4kaW5qZWN0PVtcIiRsb2NhbGVcIl07RGMuJGluamVjdD1bXCIkbG9jYWxlXCJdO3ZhciBHYz1cIi5cIixQZD17eXl5eTpYKFwiRnVsbFllYXJcIiw0KSxcclxueXk6WChcIkZ1bGxZZWFyXCIsMiwwLCEwKSx5OlgoXCJGdWxsWWVhclwiLDEpLE1NTU06a2IoXCJNb250aFwiKSxNTU06a2IoXCJNb250aFwiLCEwKSxNTTpYKFwiTW9udGhcIiwyLDEpLE06WChcIk1vbnRoXCIsMSwxKSxkZDpYKFwiRGF0ZVwiLDIpLGQ6WChcIkRhdGVcIiwxKSxISDpYKFwiSG91cnNcIiwyKSxIOlgoXCJIb3Vyc1wiLDEpLGhoOlgoXCJIb3Vyc1wiLDIsLTEyKSxoOlgoXCJIb3Vyc1wiLDEsLTEyKSxtbTpYKFwiTWludXRlc1wiLDIpLG06WChcIk1pbnV0ZXNcIiwxKSxzczpYKFwiU2Vjb25kc1wiLDIpLHM6WChcIlNlY29uZHNcIiwxKSxzc3M6WChcIk1pbGxpc2Vjb25kc1wiLDMpLEVFRUU6a2IoXCJEYXlcIiksRUVFOmtiKFwiRGF5XCIsITApLGE6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gMTI+YS5nZXRIb3VycygpP2MuQU1QTVNbMF06Yy5BTVBNU1sxXX0sWjpmdW5jdGlvbihhKXthPS0xKmEuZ2V0VGltZXpvbmVPZmZzZXQoKTtyZXR1cm4gYT0oMDw9YT9cIitcIjpcIlwiKSsoS2IoTWF0aFswPGE/XCJmbG9vclwiOlwiY2VpbFwiXShhLzYwKSwyKStcclxuS2IoTWF0aC5hYnMoYSU2MCksMikpfX0sT2Q9LygoPzpbXnlNZEhobXNhWkUnXSspfCg/OicoPzpbXiddfCcnKSonKXwoPzpFK3x5K3xNK3xkK3xIK3xoK3xtK3xzK3xhfFopKSguKikvLE5kPS9eXFwtP1xcZCskLztDYy4kaW5qZWN0PVtcIiRsb2NhbGVcIl07dmFyIExkPVkoeCksTWQ9WShIYSk7RWMuJGluamVjdD1bXCIkcGFyc2VcIl07dmFyIFdkPVkoe3Jlc3RyaWN0OlwiRVwiLGNvbXBpbGU6ZnVuY3Rpb24oYSxjKXs4Pj1OJiYoYy5ocmVmfHxjLm5hbWV8fGMuJHNldChcImhyZWZcIixcIlwiKSxhLmFwcGVuZChSLmNyZWF0ZUNvbW1lbnQoXCJJRSBmaXhcIikpKTtpZighYy5ocmVmJiYhYy54bGlua0hyZWYmJiFjLm5hbWUpcmV0dXJuIGZ1bmN0aW9uKGEsYyl7dmFyIGc9XCJbb2JqZWN0IFNWR0FuaW1hdGVkU3RyaW5nXVwiPT09TGEuY2FsbChjLnByb3AoXCJocmVmXCIpKT9cInhsaW5rOmhyZWZcIjpcImhyZWZcIjtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbihhKXtjLmF0dHIoZyl8fGEucHJldmVudERlZmF1bHQoKX0pfX19KSxcclxuTWI9e307cShmYixmdW5jdGlvbihhLGMpe2lmKFwibXVsdGlwbGVcIiE9YSl7dmFyIGQ9bGEoXCJuZy1cIitjKTtNYltkXT1mdW5jdGlvbigpe3JldHVybntwcmlvcml0eToxMDAsbGluazpmdW5jdGlvbihhLGcsZil7YS4kd2F0Y2goZltkXSxmdW5jdGlvbihhKXtmLiRzZXQoYywhIWEpfSl9fX19fSk7cShbXCJzcmNcIixcInNyY3NldFwiLFwiaHJlZlwiXSxmdW5jdGlvbihhKXt2YXIgYz1sYShcIm5nLVwiK2EpO01iW2NdPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5Ojk5LGxpbms6ZnVuY3Rpb24oZCxlLGcpe2cuJG9ic2VydmUoYyxmdW5jdGlvbihjKXtjJiYoZy4kc2V0KGEsYyksTiYmZS5wcm9wKGEsZ1thXSkpfSl9fX19KTt2YXIgbmI9eyRhZGRDb250cm9sOkUsJHJlbW92ZUNvbnRyb2w6RSwkc2V0VmFsaWRpdHk6RSwkc2V0RGlydHk6RSwkc2V0UHJpc3RpbmU6RX07SGMuJGluamVjdD1bXCIkZWxlbWVudFwiLFwiJGF0dHJzXCIsXCIkc2NvcGVcIl07dmFyIEpjPWZ1bmN0aW9uKGEpe3JldHVybltcIiR0aW1lb3V0XCIsXHJcbmZ1bmN0aW9uKGMpe3JldHVybntuYW1lOlwiZm9ybVwiLHJlc3RyaWN0OmE/XCJFQUNcIjpcIkVcIixjb250cm9sbGVyOkhjLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGEsZSxnLGYpe2lmKCFnLmFjdGlvbil7dmFyIGg9ZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMX07SWMoZVswXSxcInN1Ym1pdFwiLGgpO2Uub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7YyhmdW5jdGlvbigpe3piKGVbMF0sXCJzdWJtaXRcIixoKX0sMCwhMSl9KX12YXIgbT1lLnBhcmVudCgpLmNvbnRyb2xsZXIoXCJmb3JtXCIpLGs9Zy5uYW1lfHxnLm5nRm9ybTtrJiZqYihhLGssZixrKTtpZihtKWUub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7bS4kcmVtb3ZlQ29udHJvbChmKTtrJiZqYihhLGsscyxrKTt5KGYsbmIpfSl9fX19fV19LFhkPUpjKCksWWQ9SmMoITApLFpkPS9eKGZ0cHxodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdypAKT8oXFxTKykoOlswLTldKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJUAhXFwtXFwvXSkpPyQvLFxyXG4kZD0vXlthLXowLTkhIyQlJicqKy89P15fYHt8fX4uLV0rQFthLXowLTktXSsoXFwuW2EtejAtOS1dKykqJC9pLGFlPS9eXFxzKihcXC18XFwrKT8oXFxkK3woXFxkKihcXC5cXGQqKSkpXFxzKiQvLEtjPXt0ZXh0OnBiLG51bWJlcjpmdW5jdGlvbihhLGMsZCxlLGcsZil7cGIoYSxjLGQsZSxnLGYpO2UuJHBhcnNlcnMucHVzaChmdW5jdGlvbihhKXt2YXIgYz1lLiRpc0VtcHR5KGEpO2lmKGN8fGFlLnRlc3QoYSkpcmV0dXJuIGUuJHNldFZhbGlkaXR5KFwibnVtYmVyXCIsITApLFwiXCI9PT1hP251bGw6Yz9hOnBhcnNlRmxvYXQoYSk7ZS4kc2V0VmFsaWRpdHkoXCJudW1iZXJcIiwhMSk7cmV0dXJuIHN9KTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIGUuJGlzRW1wdHkoYSk/XCJcIjpcIlwiK2F9KTtkLm1pbiYmKGE9ZnVuY3Rpb24oYSl7dmFyIGM9cGFyc2VGbG9hdChkLm1pbik7cmV0dXJuIG9hKGUsXCJtaW5cIixlLiRpc0VtcHR5KGEpfHxhPj1jLGEpfSxlLiRwYXJzZXJzLnB1c2goYSksZS4kZm9ybWF0dGVycy5wdXNoKGEpKTtcclxuZC5tYXgmJihhPWZ1bmN0aW9uKGEpe3ZhciBjPXBhcnNlRmxvYXQoZC5tYXgpO3JldHVybiBvYShlLFwibWF4XCIsZS4kaXNFbXB0eShhKXx8YTw9YyxhKX0sZS4kcGFyc2Vycy5wdXNoKGEpLGUuJGZvcm1hdHRlcnMucHVzaChhKSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBvYShlLFwibnVtYmVyXCIsZS4kaXNFbXB0eShhKXx8cmIoYSksYSl9KX0sdXJsOmZ1bmN0aW9uKGEsYyxkLGUsZyxmKXtwYihhLGMsZCxlLGcsZik7YT1mdW5jdGlvbihhKXtyZXR1cm4gb2EoZSxcInVybFwiLGUuJGlzRW1wdHkoYSl8fFpkLnRlc3QoYSksYSl9O2UuJGZvcm1hdHRlcnMucHVzaChhKTtlLiRwYXJzZXJzLnB1c2goYSl9LGVtYWlsOmZ1bmN0aW9uKGEsYyxkLGUsZyxmKXtwYihhLGMsZCxlLGcsZik7YT1mdW5jdGlvbihhKXtyZXR1cm4gb2EoZSxcImVtYWlsXCIsZS4kaXNFbXB0eShhKXx8JGQudGVzdChhKSxhKX07ZS4kZm9ybWF0dGVycy5wdXNoKGEpO2UuJHBhcnNlcnMucHVzaChhKX0sXHJcbnJhZGlvOmZ1bmN0aW9uKGEsYyxkLGUpe3UoZC5uYW1lKSYmYy5hdHRyKFwibmFtZVwiLFphKCkpO2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7Y1swXS5jaGVja2VkJiZhLiRhcHBseShmdW5jdGlvbigpe2UuJHNldFZpZXdWYWx1ZShkLnZhbHVlKX0pfSk7ZS4kcmVuZGVyPWZ1bmN0aW9uKCl7Y1swXS5jaGVja2VkPWQudmFsdWU9PWUuJHZpZXdWYWx1ZX07ZC4kb2JzZXJ2ZShcInZhbHVlXCIsZS4kcmVuZGVyKX0sY2hlY2tib3g6ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGc9ZC5uZ1RydWVWYWx1ZSxmPWQubmdGYWxzZVZhbHVlO3coZyl8fChnPSEwKTt3KGYpfHwoZj0hMSk7Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe2UuJHNldFZpZXdWYWx1ZShjWzBdLmNoZWNrZWQpfSl9KTtlLiRyZW5kZXI9ZnVuY3Rpb24oKXtjWzBdLmNoZWNrZWQ9ZS4kdmlld1ZhbHVlfTtlLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiBhIT09Z307ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09XHJcbmd9KTtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIGE/ZzpmfSl9LGhpZGRlbjpFLGJ1dHRvbjpFLHN1Ym1pdDpFLHJlc2V0OkV9LExjPVtcIiRicm93c2VyXCIsXCIkc25pZmZlclwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHJlcXVpcmU6XCI/bmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oZCxlLGcsZil7ZiYmKEtjW3goZy50eXBlKV18fEtjLnRleHQpKGQsZSxnLGYsYyxhKX19fV0sbWI9XCJuZy12YWxpZFwiLGxiPVwibmctaW52YWxpZFwiLElhPVwibmctcHJpc3RpbmVcIixvYj1cIm5nLWRpcnR5XCIsYmU9W1wiJHNjb3BlXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJGF0dHJzXCIsXCIkZWxlbWVudFwiLFwiJHBhcnNlXCIsZnVuY3Rpb24oYSxjLGQsZSxnKXtmdW5jdGlvbiBmKGEsYyl7Yz1jP1wiLVwiK2NiKGMsXCItXCIpOlwiXCI7ZS5yZW1vdmVDbGFzcygoYT9sYjptYikrYykuYWRkQ2xhc3MoKGE/bWI6bGIpK2MpfXRoaXMuJG1vZGVsVmFsdWU9dGhpcy4kdmlld1ZhbHVlPU51bWJlci5OYU47XHJcbnRoaXMuJHBhcnNlcnM9W107dGhpcy4kZm9ybWF0dGVycz1bXTt0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzPVtdO3RoaXMuJHByaXN0aW5lPSEwO3RoaXMuJGRpcnR5PSExO3RoaXMuJHZhbGlkPSEwO3RoaXMuJGludmFsaWQ9ITE7dGhpcy4kbmFtZT1kLm5hbWU7dmFyIGg9ZyhkLm5nTW9kZWwpLG09aC5hc3NpZ247aWYoIW0pdGhyb3cgdChcIm5nTW9kZWxcIikoXCJub25hc3NpZ25cIixkLm5nTW9kZWwsZmEoZSkpO3RoaXMuJHJlbmRlcj1FO3RoaXMuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSl8fFwiXCI9PT1hfHxudWxsPT09YXx8YSE9PWF9O3ZhciBrPWUuaW5oZXJpdGVkRGF0YShcIiRmb3JtQ29udHJvbGxlclwiKXx8bmIsbD0wLG49dGhpcy4kZXJyb3I9e307ZS5hZGRDbGFzcyhJYSk7ZighMCk7dGhpcy4kc2V0VmFsaWRpdHk9ZnVuY3Rpb24oYSxjKXtuW2FdIT09IWMmJihjPyhuW2FdJiZsLS0sbHx8KGYoITApLHRoaXMuJHZhbGlkPSEwLHRoaXMuJGludmFsaWQ9ITEpKTooZighMSksXHJcbnRoaXMuJGludmFsaWQ9ITAsdGhpcy4kdmFsaWQ9ITEsbCsrKSxuW2FdPSFjLGYoYyxhKSxrLiRzZXRWYWxpZGl0eShhLGMsdGhpcykpfTt0aGlzLiRzZXRQcmlzdGluZT1mdW5jdGlvbigpe3RoaXMuJGRpcnR5PSExO3RoaXMuJHByaXN0aW5lPSEwO2UucmVtb3ZlQ2xhc3Mob2IpLmFkZENsYXNzKElhKX07dGhpcy4kc2V0Vmlld1ZhbHVlPWZ1bmN0aW9uKGQpe3RoaXMuJHZpZXdWYWx1ZT1kO3RoaXMuJHByaXN0aW5lJiYodGhpcy4kZGlydHk9ITAsdGhpcy4kcHJpc3RpbmU9ITEsZS5yZW1vdmVDbGFzcyhJYSkuYWRkQ2xhc3Mob2IpLGsuJHNldERpcnR5KCkpO3EodGhpcy4kcGFyc2VycyxmdW5jdGlvbihhKXtkPWEoZCl9KTt0aGlzLiRtb2RlbFZhbHVlIT09ZCYmKHRoaXMuJG1vZGVsVmFsdWU9ZCxtKGEsZCkscSh0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzLGZ1bmN0aW9uKGEpe3RyeXthKCl9Y2F0Y2goZCl7YyhkKX19KSl9O3ZhciBwPXRoaXM7YS4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYz1cclxuaChhKTtpZihwLiRtb2RlbFZhbHVlIT09Yyl7dmFyIGQ9cC4kZm9ybWF0dGVycyxlPWQubGVuZ3RoO2ZvcihwLiRtb2RlbFZhbHVlPWM7ZS0tOyljPWRbZV0oYyk7cC4kdmlld1ZhbHVlIT09YyYmKHAuJHZpZXdWYWx1ZT1jLHAuJHJlbmRlcigpKX1yZXR1cm4gY30pfV0sY2U9ZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpbXCJuZ01vZGVsXCIsXCJeP2Zvcm1cIl0sY29udHJvbGxlcjpiZSxsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBnPWVbMF0sZj1lWzFdfHxuYjtmLiRhZGRDb250cm9sKGcpO2EuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2YuJHJlbW92ZUNvbnRyb2woZyl9KX19fSxkZT1ZKHtyZXF1aXJlOlwibmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7ZS4kdmlld0NoYW5nZUxpc3RlbmVycy5wdXNoKGZ1bmN0aW9uKCl7YS4kZXZhbChkLm5nQ2hhbmdlKX0pfX0pLE1jPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6XCI/bmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLFxyXG5kLGUpe2lmKGUpe2QucmVxdWlyZWQ9ITA7dmFyIGc9ZnVuY3Rpb24oYSl7aWYoZC5yZXF1aXJlZCYmZS4kaXNFbXB0eShhKSllLiRzZXRWYWxpZGl0eShcInJlcXVpcmVkXCIsITEpO2Vsc2UgcmV0dXJuIGUuJHNldFZhbGlkaXR5KFwicmVxdWlyZWRcIiwhMCksYX07ZS4kZm9ybWF0dGVycy5wdXNoKGcpO2UuJHBhcnNlcnMudW5zaGlmdChnKTtkLiRvYnNlcnZlKFwicmVxdWlyZWRcIixmdW5jdGlvbigpe2coZS4kdmlld1ZhbHVlKX0pfX19fSxlZT1mdW5jdGlvbigpe3JldHVybntyZXF1aXJlOlwibmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGc9KGE9L1xcLyguKilcXC8vLmV4ZWMoZC5uZ0xpc3QpKSYmUmVnRXhwKGFbMV0pfHxkLm5nTGlzdHx8XCIsXCI7ZS4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGEpe2lmKCF1KGEpKXt2YXIgYz1bXTthJiZxKGEuc3BsaXQoZyksZnVuY3Rpb24oYSl7YSYmYy5wdXNoKFooYSkpfSk7cmV0dXJuIGN9fSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBMKGEpP1xyXG5hLmpvaW4oXCIsIFwiKTpzfSk7ZS4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4hYXx8IWEubGVuZ3RofX19fSxmZT0vXih0cnVlfGZhbHNlfFxcZCspJC8sZ2U9ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6MTAwLGNvbXBpbGU6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZmUudGVzdChjLm5nVmFsdWUpP2Z1bmN0aW9uKGEsYyxnKXtnLiRzZXQoXCJ2YWx1ZVwiLGEuJGV2YWwoZy5uZ1ZhbHVlKSl9OmZ1bmN0aW9uKGEsYyxnKXthLiR3YXRjaChnLm5nVmFsdWUsZnVuY3Rpb24oYSl7Zy4kc2V0KFwidmFsdWVcIixhKX0pfX19fSxoZT1zYShmdW5jdGlvbihhLGMsZCl7Yy5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIikuZGF0YShcIiRiaW5kaW5nXCIsZC5uZ0JpbmQpO2EuJHdhdGNoKGQubmdCaW5kLGZ1bmN0aW9uKGEpe2MudGV4dChhPT1zP1wiXCI6YSl9KX0pLGllPVtcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7Yz1hKGQuYXR0cihlLiRhdHRyLm5nQmluZFRlbXBsYXRlKSk7XHJcbmQuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpLmRhdGEoXCIkYmluZGluZ1wiLGMpO2UuJG9ic2VydmUoXCJuZ0JpbmRUZW1wbGF0ZVwiLGZ1bmN0aW9uKGEpe2QudGV4dChhKX0pfX1dLGplPVtcIiRzY2VcIixcIiRwYXJzZVwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGZ1bmN0aW9uKGQsZSxnKXtlLmFkZENsYXNzKFwibmctYmluZGluZ1wiKS5kYXRhKFwiJGJpbmRpbmdcIixnLm5nQmluZEh0bWwpO3ZhciBmPWMoZy5uZ0JpbmRIdG1sKTtkLiR3YXRjaChmdW5jdGlvbigpe3JldHVybihmKGQpfHxcIlwiKS50b1N0cmluZygpfSxmdW5jdGlvbihjKXtlLmh0bWwoYS5nZXRUcnVzdGVkSHRtbChmKGQpKXx8XCJcIil9KX19XSxrZT1MYihcIlwiLCEwKSxsZT1MYihcIk9kZFwiLDApLG1lPUxiKFwiRXZlblwiLDEpLG5lPXNhKHtjb21waWxlOmZ1bmN0aW9uKGEsYyl7Yy4kc2V0KFwibmdDbG9ha1wiLHMpO2EucmVtb3ZlQ2xhc3MoXCJuZy1jbG9ha1wiKX19KSxvZT1bZnVuY3Rpb24oKXtyZXR1cm57c2NvcGU6ITAsY29udHJvbGxlcjpcIkBcIixcclxucHJpb3JpdHk6NTAwfX1dLE5jPXt9O3EoXCJjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBrZXlkb3duIGtleXVwIGtleXByZXNzIHN1Ym1pdCBmb2N1cyBibHVyIGNvcHkgY3V0IHBhc3RlXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe3ZhciBjPWxhKFwibmctXCIrYSk7TmNbY109W1wiJHBhcnNlXCIsZnVuY3Rpb24oZCl7cmV0dXJue2NvbXBpbGU6ZnVuY3Rpb24oZSxnKXt2YXIgZj1kKGdbY10pO3JldHVybiBmdW5jdGlvbihjLGQsZSl7ZC5vbih4KGEpLGZ1bmN0aW9uKGEpe2MuJGFwcGx5KGZ1bmN0aW9uKCl7ZihjLHskZXZlbnQ6YX0pfSl9KX19fX1dfSk7dmFyIHBlPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6NjAwLHRlcm1pbmFsOiEwLHJlc3RyaWN0OlwiQVwiLCQkdGxiOiEwLGxpbms6ZnVuY3Rpb24oYyxkLGUsZyxmKXt2YXIgaCxcclxubTtjLiR3YXRjaChlLm5nSWYsZnVuY3Rpb24oZyl7T2EoZyk/bXx8KG09Yy4kbmV3KCksZihtLGZ1bmN0aW9uKGMpe2NbYy5sZW5ndGgrK109Ui5jcmVhdGVDb21tZW50KFwiIGVuZCBuZ0lmOiBcIitlLm5nSWYrXCIgXCIpO2g9e2Nsb25lOmN9O2EuZW50ZXIoYyxkLnBhcmVudCgpLGQpfSkpOihtJiYobS4kZGVzdHJveSgpLG09bnVsbCksaCYmKGEubGVhdmUodWIoaC5jbG9uZSkpLGg9bnVsbCkpfSl9fX1dLHFlPVtcIiRodHRwXCIsXCIkdGVtcGxhdGVDYWNoZVwiLFwiJGFuY2hvclNjcm9sbFwiLFwiJGFuaW1hdGVcIixcIiRzY2VcIixmdW5jdGlvbihhLGMsZCxlLGcpe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5OjQwMCx0ZXJtaW5hbDohMCx0cmFuc2NsdWRlOlwiZWxlbWVudFwiLGNvbnRyb2xsZXI6QmEubm9vcCxjb21waWxlOmZ1bmN0aW9uKGYsaCl7dmFyIG09aC5uZ0luY2x1ZGV8fGguc3JjLGs9aC5vbmxvYWR8fFwiXCIsbD1oLmF1dG9zY3JvbGw7cmV0dXJuIGZ1bmN0aW9uKGYsaCxxLHMsQSl7dmFyIHQ9XHJcbjAsdix6LEs9ZnVuY3Rpb24oKXt2JiYodi4kZGVzdHJveSgpLHY9bnVsbCk7eiYmKGUubGVhdmUoeiksej1udWxsKX07Zi4kd2F0Y2goZy5wYXJzZUFzUmVzb3VyY2VVcmwobSksZnVuY3Rpb24oZyl7dmFyIG09ZnVuY3Rpb24oKXshRChsKXx8bCYmIWYuJGV2YWwobCl8fGQoKX0scT0rK3Q7Zz8oYS5nZXQoZyx7Y2FjaGU6Y30pLnN1Y2Nlc3MoZnVuY3Rpb24oYSl7aWYocT09PXQpe3ZhciBjPWYuJG5ldygpO3MudGVtcGxhdGU9YTthPUEoYyxmdW5jdGlvbihhKXtLKCk7ZS5lbnRlcihhLG51bGwsaCxtKX0pO3Y9Yzt6PWE7di4kZW1pdChcIiRpbmNsdWRlQ29udGVudExvYWRlZFwiKTtmLiRldmFsKGspfX0pLmVycm9yKGZ1bmN0aW9uKCl7cT09PXQmJksoKX0pLGYuJGVtaXQoXCIkaW5jbHVkZUNvbnRlbnRSZXF1ZXN0ZWRcIikpOihLKCkscy50ZW1wbGF0ZT1udWxsKX0pfX19fV0scmU9W1wiJGNvbXBpbGVcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIixwcmlvcml0eTotNDAwLFxyXG5yZXF1aXJlOlwibmdJbmNsdWRlXCIsbGluazpmdW5jdGlvbihjLGQsZSxnKXtkLmh0bWwoZy50ZW1wbGF0ZSk7YShkLmNvbnRlbnRzKCkpKGMpfX19XSxzZT1zYSh7cHJpb3JpdHk6NDUwLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGEsYyxkKXthLiRldmFsKGQubmdJbml0KX19fX0pLHRlPXNhKHt0ZXJtaW5hbDohMCxwcmlvcml0eToxRTN9KSx1ZT1bXCIkbG9jYWxlXCIsXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihhLGMpe3ZhciBkPS97fS9nO3JldHVybntyZXN0cmljdDpcIkVBXCIsbGluazpmdW5jdGlvbihlLGcsZil7dmFyIGg9Zi5jb3VudCxtPWYuJGF0dHIud2hlbiYmZy5hdHRyKGYuJGF0dHIud2hlbiksaz1mLm9mZnNldHx8MCxsPWUuJGV2YWwobSl8fHt9LG49e30scD1jLnN0YXJ0U3ltYm9sKCkscj1jLmVuZFN5bWJvbCgpLHM9L153aGVuKE1pbnVzKT8oLispJC87cShmLGZ1bmN0aW9uKGEsYyl7cy50ZXN0KGMpJiYobFt4KGMucmVwbGFjZShcIndoZW5cIixcIlwiKS5yZXBsYWNlKFwiTWludXNcIixcclxuXCItXCIpKV09Zy5hdHRyKGYuJGF0dHJbY10pKX0pO3EobCxmdW5jdGlvbihhLGUpe25bZV09YyhhLnJlcGxhY2UoZCxwK2grXCItXCIraytyKSl9KTtlLiR3YXRjaChmdW5jdGlvbigpe3ZhciBjPXBhcnNlRmxvYXQoZS4kZXZhbChoKSk7aWYoaXNOYU4oYykpcmV0dXJuXCJcIjtjIGluIGx8fChjPWEucGx1cmFsQ2F0KGMtaykpO3JldHVybiBuW2NdKGUsZywhMCl9LGZ1bmN0aW9uKGEpe2cudGV4dChhKX0pfX19XSx2ZT1bXCIkcGFyc2VcIixcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD10KFwibmdSZXBlYXRcIik7cmV0dXJue3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6MUUzLHRlcm1pbmFsOiEwLCQkdGxiOiEwLGxpbms6ZnVuY3Rpb24oZSxnLGYsaCxtKXt2YXIgaz1mLm5nUmVwZWF0LGw9ay5tYXRjaCgvXlxccyooW1xcc1xcU10rPylcXHMraW5cXHMrKFtcXHNcXFNdKz8pKD86XFxzK3RyYWNrXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/XFxzKiQvKSxuLHAscixzLEEsdCx2PXskaWQ6RWF9O2lmKCFsKXRocm93IGQoXCJpZXhwXCIsXHJcbmspO2Y9bFsxXTtoPWxbMl07KGw9bFszXSk/KG49YShsKSxwPWZ1bmN0aW9uKGEsYyxkKXt0JiYodlt0XT1hKTt2W0FdPWM7di4kaW5kZXg9ZDtyZXR1cm4gbihlLHYpfSk6KHI9ZnVuY3Rpb24oYSxjKXtyZXR1cm4gRWEoYyl9LHM9ZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTtsPWYubWF0Y2goL14oPzooW1xcJFxcd10rKXxcXCgoW1xcJFxcd10rKVxccyosXFxzKihbXFwkXFx3XSspXFwpKSQvKTtpZighbCl0aHJvdyBkKFwiaWlkZXhwXCIsZik7QT1sWzNdfHxsWzFdO3Q9bFsyXTt2YXIgRD17fTtlLiR3YXRjaENvbGxlY3Rpb24oaCxmdW5jdGlvbihhKXt2YXIgZixoLGw9Z1swXSxuLHY9e30seSxCLHcsdSxTLEUseD1bXTtpZihxYihhKSlTPWEsbj1wfHxyO2Vsc2V7bj1wfHxzO1M9W107Zm9yKHcgaW4gYSlhLmhhc093blByb3BlcnR5KHcpJiZcIiRcIiE9dy5jaGFyQXQoMCkmJlMucHVzaCh3KTtTLnNvcnQoKX15PVMubGVuZ3RoO2g9eC5sZW5ndGg9Uy5sZW5ndGg7Zm9yKGY9MDtmPGg7ZisrKWlmKHc9YT09PVxyXG5TP2Y6U1tmXSx1PWFbd10sdT1uKHcsdSxmKSx3YSh1LFwiYHRyYWNrIGJ5YCBpZFwiKSxELmhhc093blByb3BlcnR5KHUpKUU9RFt1XSxkZWxldGUgRFt1XSx2W3VdPUUseFtmXT1FO2Vsc2V7aWYodi5oYXNPd25Qcm9wZXJ0eSh1KSl0aHJvdyBxKHgsZnVuY3Rpb24oYSl7YSYmYS5zY29wZSYmKERbYS5pZF09YSl9KSxkKFwiZHVwZXNcIixrLHUpO3hbZl09e2lkOnV9O3ZbdV09ITF9Zm9yKHcgaW4gRClELmhhc093blByb3BlcnR5KHcpJiYoRT1EW3ddLGY9dWIoRS5jbG9uZSksYy5sZWF2ZShmKSxxKGYsZnVuY3Rpb24oYSl7YS4kJE5HX1JFTU9WRUQ9ITB9KSxFLnNjb3BlLiRkZXN0cm95KCkpO2Y9MDtmb3IoaD1TLmxlbmd0aDtmPGg7ZisrKXt3PWE9PT1TP2Y6U1tmXTt1PWFbd107RT14W2ZdO3hbZi0xXSYmKGw9eFtmLTFdLmNsb25lW3hbZi0xXS5jbG9uZS5sZW5ndGgtMV0pO2lmKEUuc2NvcGUpe0I9RS5zY29wZTtuPWw7ZG8gbj1uLm5leHRTaWJsaW5nO3doaWxlKG4mJm4uJCROR19SRU1PVkVEKTtcclxuRS5jbG9uZVswXSE9biYmYy5tb3ZlKHViKEUuY2xvbmUpLG51bGwseihsKSk7bD1FLmNsb25lW0UuY2xvbmUubGVuZ3RoLTFdfWVsc2UgQj1lLiRuZXcoKTtCW0FdPXU7dCYmKEJbdF09dyk7Qi4kaW5kZXg9ZjtCLiRmaXJzdD0wPT09ZjtCLiRsYXN0PWY9PT15LTE7Qi4kbWlkZGxlPSEoQi4kZmlyc3R8fEIuJGxhc3QpO0IuJG9kZD0hKEIuJGV2ZW49MD09PShmJjEpKTtFLnNjb3BlfHxtKEIsZnVuY3Rpb24oYSl7YVthLmxlbmd0aCsrXT1SLmNyZWF0ZUNvbW1lbnQoXCIgZW5kIG5nUmVwZWF0OiBcIitrK1wiIFwiKTtjLmVudGVyKGEsbnVsbCx6KGwpKTtsPWE7RS5zY29wZT1CO0UuY2xvbmU9YTt2W0UuaWRdPUV9KX1EPXZ9KX19fV0sd2U9W1wiJGFuaW1hdGVcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe2MuJHdhdGNoKGUubmdTaG93LGZ1bmN0aW9uKGMpe2FbT2EoYyk/XCJyZW1vdmVDbGFzc1wiOlwiYWRkQ2xhc3NcIl0oZCxcIm5nLWhpZGVcIil9KX19XSx4ZT1bXCIkYW5pbWF0ZVwiLFxyXG5mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe2MuJHdhdGNoKGUubmdIaWRlLGZ1bmN0aW9uKGMpe2FbT2EoYyk/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0oZCxcIm5nLWhpZGVcIil9KX19XSx5ZT1zYShmdW5jdGlvbihhLGMsZCl7YS4kd2F0Y2goZC5uZ1N0eWxlLGZ1bmN0aW9uKGEsZCl7ZCYmYSE9PWQmJnEoZCxmdW5jdGlvbihhLGQpe2MuY3NzKGQsXCJcIil9KTthJiZjLmNzcyhhKX0sITApfSksemU9W1wiJGFuaW1hdGVcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcXVpcmU6XCJuZ1N3aXRjaFwiLGNvbnRyb2xsZXI6W1wiJHNjb3BlXCIsZnVuY3Rpb24oKXt0aGlzLmNhc2VzPXt9fV0sbGluazpmdW5jdGlvbihjLGQsZSxnKXt2YXIgZixoLG09W107Yy4kd2F0Y2goZS5uZ1N3aXRjaHx8ZS5vbixmdW5jdGlvbihkKXtmb3IodmFyIGw9MCxuPW0ubGVuZ3RoO2w8bjtsKyspbVtsXS4kZGVzdHJveSgpLGEubGVhdmUoaFtsXSk7aD1bXTttPVtdO2lmKGY9Zy5jYXNlc1tcIiFcIitcclxuZF18fGcuY2FzZXNbXCI/XCJdKWMuJGV2YWwoZS5jaGFuZ2UpLHEoZixmdW5jdGlvbihkKXt2YXIgZT1jLiRuZXcoKTttLnB1c2goZSk7ZC50cmFuc2NsdWRlKGUsZnVuY3Rpb24oYyl7dmFyIGU9ZC5lbGVtZW50O2gucHVzaChjKTthLmVudGVyKGMsZS5wYXJlbnQoKSxlKX0pfSl9KX19fV0sQWU9c2Eoe3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6ODAwLHJlcXVpcmU6XCJebmdTd2l0Y2hcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUsZyl7ZS5jYXNlc1tcIiFcIitkLm5nU3dpdGNoV2hlbl09ZS5jYXNlc1tcIiFcIitkLm5nU3dpdGNoV2hlbl18fFtdO2UuY2FzZXNbXCIhXCIrZC5uZ1N3aXRjaFdoZW5dLnB1c2goe3RyYW5zY2x1ZGU6ZyxlbGVtZW50OmN9KX19KSxCZT1zYSh7dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eTo4MDAscmVxdWlyZTpcIl5uZ1N3aXRjaFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxnKXtlLmNhc2VzW1wiP1wiXT1lLmNhc2VzW1wiP1wiXXx8W107ZS5jYXNlc1tcIj9cIl0ucHVzaCh7dHJhbnNjbHVkZTpnLFxyXG5lbGVtZW50OmN9KX19KSxDZT1zYSh7Y29udHJvbGxlcjpbXCIkZWxlbWVudFwiLFwiJHRyYW5zY2x1ZGVcIixmdW5jdGlvbihhLGMpe2lmKCFjKXRocm93IHQoXCJuZ1RyYW5zY2x1ZGVcIikoXCJvcnBoYW5cIixmYShhKSk7dGhpcy4kdHJhbnNjbHVkZT1jfV0sbGluazpmdW5jdGlvbihhLGMsZCxlKXtlLiR0cmFuc2NsdWRlKGZ1bmN0aW9uKGEpe2MuZW1wdHkoKTtjLmFwcGVuZChhKX0pfX0pLERlPVtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHRlcm1pbmFsOiEwLGNvbXBpbGU6ZnVuY3Rpb24oYyxkKXtcInRleHQvbmctdGVtcGxhdGVcIj09ZC50eXBlJiZhLnB1dChkLmlkLGNbMF0udGV4dCl9fX1dLEVlPXQoXCJuZ09wdGlvbnNcIiksRmU9WSh7dGVybWluYWw6ITB9KSxHZT1bXCIkY29tcGlsZVwiLFwiJHBhcnNlXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD0vXlxccyooW1xcc1xcU10rPykoPzpcXHMrYXNcXHMrKFtcXHNcXFNdKz8pKT8oPzpcXHMrZ3JvdXBcXHMrYnlcXHMrKFtcXHNcXFNdKz8pKT9cXHMrZm9yXFxzKyg/OihbXFwkXFx3XVtcXCRcXHddKil8KD86XFwoXFxzKihbXFwkXFx3XVtcXCRcXHddKilcXHMqLFxccyooW1xcJFxcd11bXFwkXFx3XSopXFxzKlxcKSkpXFxzK2luXFxzKyhbXFxzXFxTXSs/KSg/Olxccyt0cmFja1xccytieVxccysoW1xcc1xcU10rPykpPyQvLFxyXG5lPXskc2V0Vmlld1ZhbHVlOkV9O3JldHVybntyZXN0cmljdDpcIkVcIixyZXF1aXJlOltcInNlbGVjdFwiLFwiP25nTW9kZWxcIl0sY29udHJvbGxlcjpbXCIkZWxlbWVudFwiLFwiJHNjb3BlXCIsXCIkYXR0cnNcIixmdW5jdGlvbihhLGMsZCl7dmFyIG09dGhpcyxrPXt9LGw9ZSxuO20uZGF0YWJvdW5kPWQubmdNb2RlbDttLmluaXQ9ZnVuY3Rpb24oYSxjLGQpe2w9YTtuPWR9O20uYWRkT3B0aW9uPWZ1bmN0aW9uKGMpe3dhKGMsJ1wib3B0aW9uIHZhbHVlXCInKTtrW2NdPSEwO2wuJHZpZXdWYWx1ZT09YyYmKGEudmFsKGMpLG4ucGFyZW50KCkmJm4ucmVtb3ZlKCkpfTttLnJlbW92ZU9wdGlvbj1mdW5jdGlvbihhKXt0aGlzLmhhc09wdGlvbihhKSYmKGRlbGV0ZSBrW2FdLGwuJHZpZXdWYWx1ZT09YSYmdGhpcy5yZW5kZXJVbmtub3duT3B0aW9uKGEpKX07bS5yZW5kZXJVbmtub3duT3B0aW9uPWZ1bmN0aW9uKGMpe2M9XCI/IFwiK0VhKGMpK1wiID9cIjtuLnZhbChjKTthLnByZXBlbmQobik7YS52YWwoYyk7bi5wcm9wKFwic2VsZWN0ZWRcIixcclxuITApfTttLmhhc09wdGlvbj1mdW5jdGlvbihhKXtyZXR1cm4gay5oYXNPd25Qcm9wZXJ0eShhKX07Yy4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7bS5yZW5kZXJVbmtub3duT3B0aW9uPUV9KX1dLGxpbms6ZnVuY3Rpb24oZSxmLGgsbSl7ZnVuY3Rpb24gayhhLGMsZCxlKXtkLiRyZW5kZXI9ZnVuY3Rpb24oKXt2YXIgYT1kLiR2aWV3VmFsdWU7ZS5oYXNPcHRpb24oYSk/KHkucGFyZW50KCkmJnkucmVtb3ZlKCksYy52YWwoYSksXCJcIj09PWEmJncucHJvcChcInNlbGVjdGVkXCIsITApKTp1KGEpJiZ3P2MudmFsKFwiXCIpOmUucmVuZGVyVW5rbm93bk9wdGlvbihhKX07Yy5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXt5LnBhcmVudCgpJiZ5LnJlbW92ZSgpO2QuJHNldFZpZXdWYWx1ZShjLnZhbCgpKX0pfSl9ZnVuY3Rpb24gbChhLGMsZCl7dmFyIGU7ZC4kcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IFNhKGQuJHZpZXdWYWx1ZSk7cShjLmZpbmQoXCJvcHRpb25cIiksXHJcbmZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQ9RChhLmdldChjLnZhbHVlKSl9KX07YS4kd2F0Y2goZnVuY3Rpb24oKXt0YShlLGQuJHZpZXdWYWx1ZSl8fChlPSQoZC4kdmlld1ZhbHVlKSxkLiRyZW5kZXIoKSl9KTtjLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe3ZhciBhPVtdO3EoYy5maW5kKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQmJmEucHVzaChjLnZhbHVlKX0pO2QuJHNldFZpZXdWYWx1ZShhKX0pfSl9ZnVuY3Rpb24gbihlLGYsZyl7ZnVuY3Rpb24gaCgpe3ZhciBhPXtcIlwiOltdfSxjPVtcIlwiXSxkLGsscyx0LHU7dD1nLiRtb2RlbFZhbHVlO3U9eihlKXx8W107dmFyIEM9bj9OYih1KTp1LEYsSix4O0o9e307cz0hMTt2YXIgQixIO2lmKHIpaWYodyYmTCh0KSlmb3Iocz1uZXcgU2EoW10pLHg9MDt4PHQubGVuZ3RoO3grKylKW21dPXRbeF0scy5wdXQodyhlLEopLHRbeF0pO2Vsc2Ugcz1uZXcgU2EodCk7Zm9yKHg9MDtGPUMubGVuZ3RoLFxyXG54PEY7eCsrKXtrPXg7aWYobil7az1DW3hdO2lmKFwiJFwiPT09ay5jaGFyQXQoMCkpY29udGludWU7SltuXT1rfUpbbV09dVtrXTtkPXAoZSxKKXx8XCJcIjsoaz1hW2RdKXx8KGs9YVtkXT1bXSxjLnB1c2goZCkpO3I/ZD1EKHMucmVtb3ZlKHc/dyhlLEopOnEoZSxKKSkpOih3PyhkPXt9LGRbbV09dCxkPXcoZSxkKT09PXcoZSxKKSk6ZD10PT09cShlLEopLHM9c3x8ZCk7Qj1sKGUsSik7Qj1EKEIpP0I6XCJcIjtrLnB1c2goe2lkOnc/dyhlLEopOm4/Q1t4XTp4LGxhYmVsOkIsc2VsZWN0ZWQ6ZH0pfXJ8fChBfHxudWxsPT09dD9hW1wiXCJdLnVuc2hpZnQoe2lkOlwiXCIsbGFiZWw6XCJcIixzZWxlY3RlZDohc30pOnN8fGFbXCJcIl0udW5zaGlmdCh7aWQ6XCI/XCIsbGFiZWw6XCJcIixzZWxlY3RlZDohMH0pKTtKPTA7Zm9yKEM9Yy5sZW5ndGg7SjxDO0orKyl7ZD1jW0pdO2s9YVtkXTt5Lmxlbmd0aDw9Sj8odD17ZWxlbWVudDpFLmNsb25lKCkuYXR0cihcImxhYmVsXCIsZCksbGFiZWw6ay5sYWJlbH0sdT1bdF0seS5wdXNoKHUpLFxyXG5mLmFwcGVuZCh0LmVsZW1lbnQpKToodT15W0pdLHQ9dVswXSx0LmxhYmVsIT1kJiZ0LmVsZW1lbnQuYXR0cihcImxhYmVsXCIsdC5sYWJlbD1kKSk7Qj1udWxsO3g9MDtmb3IoRj1rLmxlbmd0aDt4PEY7eCsrKXM9a1t4XSwoZD11W3grMV0pPyhCPWQuZWxlbWVudCxkLmxhYmVsIT09cy5sYWJlbCYmQi50ZXh0KGQubGFiZWw9cy5sYWJlbCksZC5pZCE9PXMuaWQmJkIudmFsKGQuaWQ9cy5pZCksQlswXS5zZWxlY3RlZCE9PXMuc2VsZWN0ZWQmJkIucHJvcChcInNlbGVjdGVkXCIsZC5zZWxlY3RlZD1zLnNlbGVjdGVkKSk6KFwiXCI9PT1zLmlkJiZBP0g9QTooSD12LmNsb25lKCkpLnZhbChzLmlkKS5hdHRyKFwic2VsZWN0ZWRcIixzLnNlbGVjdGVkKS50ZXh0KHMubGFiZWwpLHUucHVzaCh7ZWxlbWVudDpILGxhYmVsOnMubGFiZWwsaWQ6cy5pZCxzZWxlY3RlZDpzLnNlbGVjdGVkfSksQj9CLmFmdGVyKEgpOnQuZWxlbWVudC5hcHBlbmQoSCksQj1IKTtmb3IoeCsrO3UubGVuZ3RoPng7KXUucG9wKCkuZWxlbWVudC5yZW1vdmUoKX1mb3IoO3kubGVuZ3RoPlxyXG5KOyl5LnBvcCgpWzBdLmVsZW1lbnQucmVtb3ZlKCl9dmFyIGs7aWYoIShrPXQubWF0Y2goZCkpKXRocm93IEVlKFwiaWV4cFwiLHQsZmEoZikpO3ZhciBsPWMoa1syXXx8a1sxXSksbT1rWzRdfHxrWzZdLG49a1s1XSxwPWMoa1szXXx8XCJcIikscT1jKGtbMl0/a1sxXTptKSx6PWMoa1s3XSksdz1rWzhdP2Moa1s4XSk6bnVsbCx5PVtbe2VsZW1lbnQ6ZixsYWJlbDpcIlwifV1dO0EmJihhKEEpKGUpLEEucmVtb3ZlQ2xhc3MoXCJuZy1zY29wZVwiKSxBLnJlbW92ZSgpKTtmLmVtcHR5KCk7Zi5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7ZS4kYXBwbHkoZnVuY3Rpb24oKXt2YXIgYSxjPXooZSl8fFtdLGQ9e30saCxrLGwscCx0LHYsdTtpZihyKWZvcihrPVtdLHA9MCx2PXkubGVuZ3RoO3A8djtwKyspZm9yKGE9eVtwXSxsPTEsdD1hLmxlbmd0aDtsPHQ7bCsrKXtpZigoaD1hW2xdLmVsZW1lbnQpWzBdLnNlbGVjdGVkKXtoPWgudmFsKCk7biYmKGRbbl09aCk7aWYodylmb3IodT0wO3U8Yy5sZW5ndGgmJlxyXG4oZFttXT1jW3VdLHcoZSxkKSE9aCk7dSsrKTtlbHNlIGRbbV09Y1toXTtrLnB1c2gocShlLGQpKX19ZWxzZSBpZihoPWYudmFsKCksXCI/XCI9PWgpaz1zO2Vsc2UgaWYoXCJcIj09PWgpaz1udWxsO2Vsc2UgaWYodylmb3IodT0wO3U8Yy5sZW5ndGg7dSsrKXtpZihkW21dPWNbdV0sdyhlLGQpPT1oKXtrPXEoZSxkKTticmVha319ZWxzZSBkW21dPWNbaF0sbiYmKGRbbl09aCksaz1xKGUsZCk7Zy4kc2V0Vmlld1ZhbHVlKGspfSl9KTtnLiRyZW5kZXI9aDtlLiR3YXRjaChoKX1pZihtWzFdKXt2YXIgcD1tWzBdO209bVsxXTt2YXIgcj1oLm11bHRpcGxlLHQ9aC5uZ09wdGlvbnMsQT0hMSx3LHY9eihSLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLEU9eihSLmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKSkseT12LmNsb25lKCk7aD0wO2Zvcih2YXIgQz1mLmNoaWxkcmVuKCkseD1DLmxlbmd0aDtoPHg7aCsrKWlmKFwiXCI9PT1DW2hdLnZhbHVlKXt3PUE9Qy5lcShoKTticmVha31wLmluaXQobSxBLFxyXG55KTtyJiYobS4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4hYXx8MD09PWEubGVuZ3RofSk7dD9uKGUsZixtKTpyP2woZSxmLG0pOmsoZSxmLG0scCl9fX19XSxIZT1bXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihhKXt2YXIgYz17YWRkT3B0aW9uOkUscmVtb3ZlT3B0aW9uOkV9O3JldHVybntyZXN0cmljdDpcIkVcIixwcmlvcml0eToxMDAsY29tcGlsZTpmdW5jdGlvbihkLGUpe2lmKHUoZS52YWx1ZSkpe3ZhciBnPWEoZC50ZXh0KCksITApO2d8fGUuJHNldChcInZhbHVlXCIsZC50ZXh0KCkpfXJldHVybiBmdW5jdGlvbihhLGQsZSl7dmFyIGs9ZC5wYXJlbnQoKSxsPWsuZGF0YShcIiRzZWxlY3RDb250cm9sbGVyXCIpfHxrLnBhcmVudCgpLmRhdGEoXCIkc2VsZWN0Q29udHJvbGxlclwiKTtsJiZsLmRhdGFib3VuZD9kLnByb3AoXCJzZWxlY3RlZFwiLCExKTpsPWM7Zz9hLiR3YXRjaChnLGZ1bmN0aW9uKGEsYyl7ZS4kc2V0KFwidmFsdWVcIixhKTthIT09YyYmbC5yZW1vdmVPcHRpb24oYyk7bC5hZGRPcHRpb24oYSl9KTpcclxubC5hZGRPcHRpb24oZS52YWx1ZSk7ZC5vbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtsLnJlbW92ZU9wdGlvbihlLnZhbHVlKX0pfX19fV0sSWU9WSh7cmVzdHJpY3Q6XCJFXCIsdGVybWluYWw6ITB9KTsoQ2E9UC5qUXVlcnkpPyh6PUNhLHkoQ2EuZm4se3Njb3BlOkZhLnNjb3BlLGlzb2xhdGVTY29wZTpGYS5pc29sYXRlU2NvcGUsY29udHJvbGxlcjpGYS5jb250cm9sbGVyLGluamVjdG9yOkZhLmluamVjdG9yLGluaGVyaXRlZERhdGE6RmEuaW5oZXJpdGVkRGF0YX0pLHZiKFwicmVtb3ZlXCIsITAsITAsITEpLHZiKFwiZW1wdHlcIiwhMSwhMSwhMSksdmIoXCJodG1sXCIsITEsITEsITApKTp6PU87QmEuZWxlbWVudD16OyhmdW5jdGlvbihhKXt5KGEse2Jvb3RzdHJhcDpYYixjb3B5OiQsZXh0ZW5kOnksZXF1YWxzOnRhLGVsZW1lbnQ6eixmb3JFYWNoOnEsaW5qZWN0b3I6WWIsbm9vcDpFLGJpbmQ6YmIsdG9Kc29uOnBhLGZyb21Kc29uOlRiLGlkZW50aXR5OkFhLGlzVW5kZWZpbmVkOnUsaXNEZWZpbmVkOkQsXHJcbmlzU3RyaW5nOncsaXNGdW5jdGlvbjpNLGlzT2JqZWN0OlcsaXNOdW1iZXI6cmIsaXNFbGVtZW50OlBjLGlzQXJyYXk6TCx2ZXJzaW9uOlJkLGlzRGF0ZTpLYSxsb3dlcmNhc2U6eCx1cHBlcmNhc2U6SGEsY2FsbGJhY2tzOntjb3VudGVyOjB9LCQkbWluRXJyOnQsJCRjc3A6U2J9KTtVYT1VYyhQKTt0cnl7VWEoXCJuZ0xvY2FsZVwiKX1jYXRjaChjKXtVYShcIm5nTG9jYWxlXCIsW10pLnByb3ZpZGVyKFwiJGxvY2FsZVwiLHJkKX1VYShcIm5nXCIsW1wibmdMb2NhbGVcIl0sW1wiJHByb3ZpZGVcIixmdW5jdGlvbihhKXthLnByb3ZpZGVyKHskJHNhbml0aXplVXJpOkJkfSk7YS5wcm92aWRlcihcIiRjb21waWxlXCIsaWMpLmRpcmVjdGl2ZSh7YTpXZCxpbnB1dDpMYyx0ZXh0YXJlYTpMYyxmb3JtOlhkLHNjcmlwdDpEZSxzZWxlY3Q6R2Usc3R5bGU6SWUsb3B0aW9uOkhlLG5nQmluZDpoZSxuZ0JpbmRIdG1sOmplLG5nQmluZFRlbXBsYXRlOmllLG5nQ2xhc3M6a2UsbmdDbGFzc0V2ZW46bWUsbmdDbGFzc09kZDpsZSxcclxubmdDbG9hazpuZSxuZ0NvbnRyb2xsZXI6b2UsbmdGb3JtOllkLG5nSGlkZTp4ZSxuZ0lmOnBlLG5nSW5jbHVkZTpxZSxuZ0luaXQ6c2UsbmdOb25CaW5kYWJsZTp0ZSxuZ1BsdXJhbGl6ZTp1ZSxuZ1JlcGVhdDp2ZSxuZ1Nob3c6d2UsbmdTdHlsZTp5ZSxuZ1N3aXRjaDp6ZSxuZ1N3aXRjaFdoZW46QWUsbmdTd2l0Y2hEZWZhdWx0OkJlLG5nT3B0aW9uczpGZSxuZ1RyYW5zY2x1ZGU6Q2UsbmdNb2RlbDpjZSxuZ0xpc3Q6ZWUsbmdDaGFuZ2U6ZGUscmVxdWlyZWQ6TWMsbmdSZXF1aXJlZDpNYyxuZ1ZhbHVlOmdlfSkuZGlyZWN0aXZlKHtuZ0luY2x1ZGU6cmV9KS5kaXJlY3RpdmUoTWIpLmRpcmVjdGl2ZShOYyk7YS5wcm92aWRlcih7JGFuY2hvclNjcm9sbDpjZCwkYW5pbWF0ZTpUZCwkYnJvd3NlcjplZCwkY2FjaGVGYWN0b3J5OmZkLCRjb250cm9sbGVyOmlkLCRkb2N1bWVudDpqZCwkZXhjZXB0aW9uSGFuZGxlcjprZCwkZmlsdGVyOkFjLCRpbnRlcnBvbGF0ZTpwZCwkaW50ZXJ2YWw6cWQsXHJcbiRodHRwOmxkLCRodHRwQmFja2VuZDpuZCwkbG9jYXRpb246dGQsJGxvZzp1ZCwkcGFyc2U6eGQsJHJvb3RTY29wZTpBZCwkcTp5ZCwkc2NlOkVkLCRzY2VEZWxlZ2F0ZTpEZCwkc25pZmZlcjpGZCwkdGVtcGxhdGVDYWNoZTpnZCwkdGltZW91dDpHZCwkd2luZG93OkhkfSl9XSl9KShCYSk7eihSKS5yZWFkeShmdW5jdGlvbigpe1NjKFIsWGIpfSl9KSh3aW5kb3csZG9jdW1lbnQpOyFhbmd1bGFyLiQkY3NwKCkmJmFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkuZmluZChcImhlYWRcIikucHJlcGVuZCgnPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPkBjaGFyc2V0IFwiVVRGLThcIjtbbmdcXFxcOmNsb2FrXSxbbmctY2xvYWtdLFtkYXRhLW5nLWNsb2FrXSxbeC1uZy1jbG9ha10sLm5nLWNsb2FrLC54LW5nLWNsb2FrLC5uZy1oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O31uZ1xcXFw6Zm9ybXtkaXNwbGF5OmJsb2NrO308L3N0eWxlPicpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLm1pbi5qcy5tYXBcclxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2xpYnJhcmllc1xcXFxhbmd1bGFyLm1pbi5qc1wiLFwiL2xpYnJhcmllc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogcHJvbWlzZVxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuMTlcclxuKiByZWZlcmVuY2U6XHJcbiogICAgaHR0cDovL3Byb21pc2VzYXBsdXMuY29tL1xyXG4qICAgIGh0dHA6Ly93d3cuaHRtbDVyb2Nrcy5jb20vemgvdHV0b3JpYWxzL2VzNi9wcm9taXNlcy9cclxuKiAgICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9Qcm9taXNlXHJcbiovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdHlwZSA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hbGwnKS50eXBlLFxyXG5cdGlzRnVuYyA9IGZ1bmN0aW9uKGZuKSB7IHJldHVybiB0eXBlKGZuKSA9PT0gJ2Z1bmN0aW9uJzsgfSxcclxuXHRpc0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7IHJldHVybiB0eXBlKG9iaikgPT09ICdhcnJheSc7IH0sXHJcblx0dGhlbmFibGUgPSBmdW5jdGlvbihvYmopIHsgcmV0dXJuIG9iaiAmJiBpc0Z1bmMob2JqWyd0aGVuJ10pOyB9O1xyXG5cclxudmFyIFNUQVRVUyA9IHsgcGVuZGluZzogMCwgZnVsZmlsbGVkOiAxLCByZWplY3RlZDogMiB9O1xyXG52YXIgdGhlbkFsbCA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXNvbHZlLCByZWplY3QpIHtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhYmxlLmxlbmd0aDsgaSsrKSB7IHZhciBwO1xyXG5cdFx0KHRoZW5hYmxlKHAgPSBpdGVyYWJsZVtpXSkgPyBwIDogUHJvbWlzZS5yZXNvbHZlKHApKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcblx0fVxyXG59O1xyXG5cclxudmFyIFByb21pc2UgPSBmdW5jdGlvbihyZXNvbHZlcikge1xyXG5cdGlmICghaXNGdW5jKHJlc29sdmVyKSkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdQcm9taXNlIGNvbnN0cnVjdG9yIHRha2VzIGEgZnVuY3Rpb24gYXJndW1lbnQnKTtcclxuXHR9XHJcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZXIpO1xyXG5cdH1cclxuXHQvL1xyXG5cdHRoaXMuX3N0YXR1cyA9IFNUQVRVUy5wZW5kaW5nO1xyXG5cdHRoaXMuX3Jlc29sdmVzID0gW107IHRoaXMuX3JlamVjdHMgPSBbXTtcclxuXHQvL1xyXG5cdHZhciBzZWxmID0gdGhpcywgcmVzb2x2ZSA9IHJlc29sdmVyKGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoc2VsZi5fc3RhdHVzID09PSBTVEFUVVMucGVuZGluZykge1xyXG5cdFx0XHRzZWxmLl9zdGF0dXMgPSBTVEFUVVMuZnVsZmlsbGVkO1xyXG5cdFx0XHRzZWxmLl92YWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuX3Jlc29sdmVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0c2VsZi5fcmVzb2x2ZXNbaV0oc2VsZi5fdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwgcmVqZWN0ID0gZnVuY3Rpb24ocmVhc29uKSB7XHJcblx0XHRpZiAoc2VsZi5fc3RhdHVzID09PSBTVEFUVVMucGVuZGluZykge1xyXG5cdFx0XHRzZWxmLl9zdGF0dXMgPSBTVEFUVVMucmVqZWN0ZWQ7XHJcblx0XHRcdHNlbGYuX3JlYXNvbiA9IHJlYXNvbjtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLl9yZWplY3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0c2VsZi5fcmVqZWN0c1tpXShzZWxmLl9yZWFzb24pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHJlc29sdmVyKHJlc29sdmUsIHJlamVjdCk7XHJcblx0XHR9IGNhdGNoIChleCkge1xyXG5cdFx0XHRyZWplY3QoZXgpO1xyXG5cdFx0fVxyXG5cdH0sIDApO1xyXG59O1xyXG5cclxuUHJvbWlzZS5wcm90b3R5cGUgPSB7XHJcblx0Y29uc3RydWN0b3I6IFByb21pc2UsXHJcblx0XHJcbiAgICBfc3RhdHVzOiBudWxsLCBfcmVzb2x2ZXM6IG51bGwsIF9yZWplY3RzOiBudWxsLFxyXG4gICAgXHJcbiAgICAvL1xyXG5cdHRoZW46IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XHJcblx0XHRpZiAoaXNGdW5jKG9uRnVsZmlsbGVkKSkge1xyXG5cdFx0XHRpZiAodGhpcy5fc3RhdHVzID09PSBTVEFUVVMucGVuZGluZykgeyB0aGlzLl9yZXNvbHZlcy5wdXNoKG9uRnVsZmlsbGVkKTsgfVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLl9zdGF0dXMgPT09IFNUQVRVUy5mdWxmaWxsZWQpIHsgb25GdWxmaWxsZWQodGhpcy5fdmFsdWUpOyB9XHJcblx0XHR9XHJcblx0XHRpZiAoaXNGdW5jKG9uUmVqZWN0ZWQpKSB7XHJcblx0XHRcdGlmICh0aGlzLl9zdGF0dXMgPT09IFNUQVRVUy5wZW5kaW5nKSB7IHRoaXMuX3JlamVjdHMucHVzaChvblJlamVjdGVkKTsgfVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLl9zdGF0dXMgPT09IFNUQVRVUy5yZWplY3RlZCkgeyBvblJlamVjdGVkKHRoaXMuX3JlYXNvbik7IH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLl9fZnRoZW4gPT09IHRydWUpIHtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuX19mdGhlbjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX19mdGhlbiA9IHRydWU7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly9cclxuXHRjYXRjaDogZnVuY3Rpb24ob25SZWplY3RlZCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcclxuXHR9XHJcbn07XHJcblxyXG5Qcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdGlmICh0aGVuYWJsZSh2YWx1ZSkpIHtcclxuXHRcdFx0dmFsdWUudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVzb2x2ZSh2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKHJlYXNvbikge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdHJlamVjdChyZWFzb24pO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbihpdGVyYWJsZSkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdHZhciB2YWx1ZXMgPSBbXTtcclxuXHRcdGlmIChpc0FycmF5KGl0ZXJhYmxlKSkge1xyXG5cdFx0XHR0aGVuQWxsKGl0ZXJhYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRcdHZhbHVlcy5wdXNoKHZhbHVlKTtcclxuXHRcdFx0XHRpZiAodmFsdWVzLmxlbmd0aCA9PT0gaXRlcmFibGUubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHZhbHVlcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCByZWplY3QpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVzb2x2ZSh2YWx1ZXMpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24oaXRlcmFibGUpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0XHRpZiAoaXNBcnJheShpdGVyYWJsZSkpIHtcclxuXHRcdFx0dGhlbkFsbChpdGVyYWJsZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcblxyXG4vL1Byb21pc2UubmFtZSA9ICdQcm9taXNlJztcclxuXHJcbmlmICh0eXBlb2Yod2luZG93KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRQcm9taXNlLl9wcm9taXNlID0gd2luZG93LlByb21pc2U7XHJcblx0d2luZG93LlByb21pc2UgPSBQcm9taXNlO1xyXG59XHJcbmlmICh0eXBlb2YobW9kdWxlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRtb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XHJcbn1cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbGlicmFyaWVzXFxcXHJ1bGVlLXByb21pc2UuanNcIixcIi9saWJyYXJpZXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIHRlc3RzXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFtcclxuXHRyZXF1aXJlKCcuL3Rlc3QxL2FsbCcpLm5hbWVcclxuXTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdGVzdHNcXFxcYWxsLmpzXCIsXCIvdGVzdHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKlxyXG4qIHRlc3QxXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG52YXIgbmFtZSA9IG1vZHVsZS5leHBvcnRzLm5hbWUgPSAncnVsZWUudGVzdDEnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobmFtZSwgW10pXHJcbi5wcm92aWRlcigndGVzdFByb3ZpZGVyJywgcmVxdWlyZSgnLi90ZXN0MS1wcm92aWRlcicpKVxyXG4uZmFjdG9yeSgndGVzdEZhY3RvcnknLCByZXF1aXJlKCcuL3Rlc3QxLWZhY3RvcnknKSlcclxuLnNlcnZpY2UoJ3Rlc3RTZXJ2aWNlJywgcmVxdWlyZSgnLi90ZXN0MS1zZXJ2aWNlJykpO1xyXG5cclxuLypcclxuXHJcbmh0dHA6Ly93d3cuY25ibG9ncy5jb20vc3RhbnpodS9wLzMxODY2OTAuaHRtbFxyXG5cclxu6K+05piO77yaXHJcblxyXG7ms6jlhaVwcm92aWRlcu+8jOebuOW9k+S6juazqOWFpXByb3ZpZGVy5YaFJGdldOWumuS5ieeahOWHveaVsOWunuS+i+eahOiwg+eUqOOAglxyXG5cclxu5rOo5YWlZmFjdG9yee+8jOebuOW9k+S6juazqOWFpWZhY3RvcnnlrprkuYnml7bnmoTlh73mlbDosIPnlKjlhaXlj6PjgIJcclxuXHJcbuazqOWFpXNlcnZpY2XvvIznm7jlvZPkuo7ms6jlhaVzZXJ2aWNl5a6a5LmJ5pe255qEZnVuY3Rpb27lrp7kvovjgIJcclxuXHJcblxyXG5cclxucHJvdmlkZXIg5piv5Z+656GA5pa55rOV77yMXHJcbmZhY3Rvcnkg5piv5a+5cHJvdmlkZXLnmoTlsIHoo4Vcclxuc2VydmljZSDmmK/lr7lmYWN0b3J555qE5bCB6KOFXHJcblxyXG5mdW5jdGlvbiBwcm92aWRlcihuYW1lLCBwcm92aWRlcl8pIHtcclxuXHRpZiAoaXNGdW5jdGlvbihwcm92aWRlcl8pIHx8IGlzQXJyYXkocHJvdmlkZXJfKSkgeyAvL+WIpOaWreaYr+WHveaVsOi/mOaYr+aVsOe7hFxyXG5cdFx0cHJvdmlkZXJfID0gcHJvdmlkZXJJbmplY3Rvci5pbnN0YW50aWF0ZShwcm92aWRlcl8pO1xyXG5cdH1cclxuXHRpZiAoIXByb3ZpZGVyXy4kZ2V0KSB7XHJcblx0XHR0aHJvdyBFcnJvcignUHJvdmlkZXIgJyArIG5hbWUgKyAnIG11c3QgZGVmaW5lICRnZXQgZmFjdG9yeSBtZXRob2QuJyk7XHJcblx0fVxyXG5cdHJldHVybiBwcm92aWRlckNhY2hlW25hbWUgKyBwcm92aWRlclN1ZmZpeF0gPSBwcm92aWRlcl87XHJcbn1cclxuIFxyXG5mdW5jdGlvbiBmYWN0b3J5KG5hbWUsIGZhY3RvcnlGbikge1xyXG5cdHJldHVybiBwcm92aWRlcihuYW1lLCB7ICRnZXQ6IGZhY3RvcnlGbiB9KTtcclxufVxyXG4gXHJcbiBcclxuZnVuY3Rpb24gc2VydmljZShuYW1lLCBjb25zdHJ1Y3Rvcikge1xyXG5cdHJldHVybiBmYWN0b3J5KG5hbWUsIFsnJGluamVjdG9yJywgZnVuY3Rpb24oJGluamVjdG9yKSB7XHJcblx0XHRyZXR1cm4gJGluamVjdG9yLmluc3RhbnRpYXRlKGNvbnN0cnVjdG9yKTtcclxuXHR9XSk7XHJcbn1cclxuXHJcbiovXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3Rlc3RzXFxcXHRlc3QxXFxcXGFsbC5qc1wiLFwiL3Rlc3RzXFxcXHRlc3QxXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiBmYWN0b3J5XHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS40XHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhYmVsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBcdHJldHVybiAndGhpcyBpcyBmYWN0b3J5JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3Rlc3RzXFxcXHRlc3QxXFxcXHRlc3QxLWZhY3RvcnkuanNcIixcIi90ZXN0c1xcXFx0ZXN0MVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogcHJvdmlkZXJcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLiRnZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gJ3RoaXMgaXMgcHJvdmlkZXInO1xyXG4gICAgfTtcclxufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdGVzdHNcXFxcdGVzdDFcXFxcdGVzdDEtcHJvdmlkZXIuanNcIixcIi90ZXN0c1xcXFx0ZXN0MVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogc2VydmljZVxyXG4qIGF1dGhvcjogcm9uZ2xpblxyXG4qIGNyZWF0ZSBkYXRlOiAyMDE0LjUuNFxyXG4qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xyXG4gICAgIHRoaXMubGFiZWwgPSAndGhpcyBpcyBzZXJ2aWNlJztcclxufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdGVzdHNcXFxcdGVzdDFcXFxcdGVzdDEtc2VydmljZS5qc1wiLFwiL3Rlc3RzXFxcXHRlc3QxXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLypcclxuKiB1dGlsaXRpZXNcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjRcclxuKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGFyZzJhcnI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzcGxpY2UgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcmdzLCBza2lwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzcGxpY2UuY2FsbChhcmdzLCBza2lwIHx8IDApO1xyXG4gICAgICAgIH07XHJcbiAgICB9KCksXHJcblxyXG4gICAgdHlwZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG9wID0gT2JqZWN0LnByb3RvdHlwZTtcclxuICAgICAgICB2YXIgY2xhc3MydHlwZSA9IHt9LCBuYXRpdmVzID0gJ0Jvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3InLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXRpdmVzLmxlbmd0aDsgaSsrKSB7Y2xhc3MydHlwZVsnW29iamVjdCAnICsgbmF0aXZlc1tpXSArICddJ10gPSBuYXRpdmVzW2ldLnRvTG93ZXJDYXNlKCk7IH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmogPT0gbnVsbCA/IFN0cmluZyhvYmopIDogY2xhc3MydHlwZVtvcC50b1N0cmluZy5jYWxsKG9iaildIHx8ICdvYmplY3QnO1xyXG4gICAgICAgIH07XHJcbiAgICB9KCksXHJcblxyXG4gICAgcGFkTGVmdDogZnVuY3Rpb24oc3RyLCBsZW4sIGNociwgcmV2ZXJzZSkge1xyXG4gICAgICAgIGlmIChzdHIgIT09IG51bGwgJiYgc3RyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3RyID0gc3RyICsgJyc7IHZhciBudW0gPSBsZW4gLSBzdHIubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXZlcnNlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIGNocjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBjaHIgKyBzdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9LFxyXG5cclxuICAgIHBhZFJpZ2h0OiBmdW5jdGlvbihzdHIsIGxlbiwgY2hyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFkTGVmdChzdHIsIGxlbiwgY2hyLCB0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZm9ybWF0OiBmdW5jdGlvbiAoZm9ybWF0KSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSB0aGlzLmFyZzJhcnIoYXJndW1lbnRzLCAxKSwgYXJnO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgvXFx7KFxcZCspXFx9L2csIGZ1bmN0aW9uIChtLCBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYXJnID0gYXJnc1tpXSwgKGFyZyA9PT0gbnVsbCB8fCBhcmcgPT09IHVuZGVmaW5lZCkgPyAnJyA6IGFyZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRyaW06IGZ1bmN0aW9uIChzdHIsIHNldCkge1xyXG4gICAgICAgIHN0ciA9IHN0ciB8fCAnJzsgc2V0ID0gc2V0IHx8IHt9O1xyXG4gICAgICAgIGlmIChzZXQuZmluZCkge1xyXG4gICAgICAgICAgICB2YXIgZXhwID0gdGhpcy5mb3JtYXQoJ157MH0rfHswfSskJywgc2V0LmZpbmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChleHAsICdnJyksIHNldC5ob2xkIHx8ICcnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNldC5maW5kRW5kKSB7XHJcbiAgICAgICAgICAgIHZhciBleHAgPSB0aGlzLmZvcm1hdCgnezB9KyQnLCBzZXQuZmluZEVuZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGV4cCwgJ2cnKSwgc2V0LmhvbGQgfHwgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2V0LmZpbmRTdGFydCkge1xyXG4gICAgICAgICAgICB2YXIgZXhwID0gdGhpcy5mb3JtYXQoJ157MH0rJywgc2V0LmZpbmRTdGFydCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGV4cCwgJ2cnKSwgc2V0LmhvbGQgfHwgJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgc2V0LmhvbGQgfHwgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVhZE9iajogZnVuY3Rpb24ob2JqLCBuYW1lc3BhY2UpIHtcclxuICAgICAgICB2YXIgbmFtZXMgPSBuYW1lc3BhY2Uuc3BsaXQoL1xcLnxcXFt8XFxdfFxcKC8pLCByZXQgPSBvYmo7XHJcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5LCBpKSB7IGlmIChrZXkgJiYgcmV0KSB7IHJldCA9IChpc05hTihrZXkpID8gKGtleSA9PT0gJyknID8gcmV0KCkgOiByZXRba2V5XSkgOiByZXRbcGFyc2VJbnQoa2V5LCAxMCldKTsgfSB9KTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSxcclxuXHJcbiAgICBkb206IHtcclxuICAgICAgICBwYXJzZVVybDogcmVxdWlyZSgnLi9kb20vcGFyc2VVcmwnKSxcclxuICAgICAgICBoYXNTY3JvbGw6IHJlcXVpcmUoJy4vZG9tL2hhc1Njcm9sbCcpLFxyXG4gICAgICAgIGlzQW5jZXN0b3I6IGZ1bmN0aW9uIChwLCBjKSB7XHJcbiAgICAgICAgICAgIHZhciByZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHAgJiYgYykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHAuY29udGFpbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcC5jb250YWlucyhjKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIShwLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGMpICYgMTYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYyA9IGMucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSBjID09IHAgfHwgcmV0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdmlld1VybDogZnVuY3Rpb24gKHVybCl7XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH0sXHJcblxyXG4gICAgaTE4bjogZnVuY3Rpb24oa2V5LCB2YWwpIHtcclxuICAgICAgICB2YXIgZ2V0VmFsID0gdGhpcy5yZWFkT2JqKHt9LCBrZXkpO1xyXG4gICAgICAgIHJldHVybiBnZXRWYWwgIT09IHVuZGVmaW5lZCA/IGdldFZhbCA6IHZhbDtcclxuICAgIH1cclxufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdXRpbGl0aWVzXFxcXGFsbC5qc1wiLFwiL3V0aWxpdGllc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogaGFzU2Nyb2xsXHJcbiogYXV0aG9yOiByb25nbGluXHJcbiogY3JlYXRlIGRhdGU6IDIwMTQuNS4yMlxyXG4qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgLy8gdGVzdCB0YXJnZXRzXHJcbiAgICB2YXIgZWxlbXMgPSBlbCA/IFtlbF0gOiBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XTtcclxuICAgIHZhciBzY3JvbGxYID0gZmFsc2UsIHNjcm9sbFkgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgbyA9IGVsZW1zW2ldO1xyXG4gICAgICAgIC8vIHRlc3QgaG9yaXpvbnRhbFxyXG4gICAgICAgIHZhciBzbCA9IG8uc2Nyb2xsTGVmdDtcclxuICAgICAgICBvLnNjcm9sbExlZnQgKz0gKHNsID4gMCkgPyAtMSA6IDE7XHJcbiAgICAgICAgby5zY3JvbGxMZWZ0ICE9PSBzbCAmJiAoc2Nyb2xsWCA9IHNjcm9sbFggfHwgdHJ1ZSk7XHJcbiAgICAgICAgby5zY3JvbGxMZWZ0ID0gc2w7XHJcbiAgICAgICAgLy8gdGVzdCB2ZXJ0aWNhbFxyXG4gICAgICAgIHZhciBzdCA9IG8uc2Nyb2xsVG9wO1xyXG4gICAgICAgIG8uc2Nyb2xsVG9wICs9IChzdCA+IDApID8gLTEgOiAxO1xyXG4gICAgICAgIG8uc2Nyb2xsVG9wICE9PSBzdCAmJiAoc2Nyb2xsWSA9IHNjcm9sbFkgfHwgdHJ1ZSk7XHJcbiAgICAgICAgby5zY3JvbGxUb3AgPSBzdDtcclxuICAgIH1cclxuICAgIC8vIHJldFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzY3JvbGxYOiBzY3JvbGxYLFxyXG4gICAgICAgIHNjcm9sbFk6IHNjcm9sbFlcclxuICAgIH07XHJcbn07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm5ncG1jUVwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3V0aWxpdGllc1xcXFxkb21cXFxcaGFzU2Nyb2xsLmpzXCIsXCIvdXRpbGl0aWVzXFxcXGRvbVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXHJcbiogcGFyc2VVcmxcclxuKiBhdXRob3I6IHJvbmdsaW5cclxuKiBjcmVhdGUgZGF0ZTogMjAxNC41LjIyXHJcbiovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYS5ocmVmID0gdXJsO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzb3VyY2U6IHVybCxcclxuICAgICAgICBwcm90b2NvbDogYS5wcm90b2NvbC5yZXBsYWNlKCc6JywgJycpLFxyXG4gICAgICAgIGhvc3Q6IGEuaG9zdG5hbWUsXHJcbiAgICAgICAgcG9ydDogYS5wb3J0LFxyXG4gICAgICAgIHF1ZXJ5OiBhLnNlYXJjaCxcclxuICAgICAgICBwYXJhbXM6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXQgPSB7fSxcclxuICAgICAgICAgICAgc2VnID0gYS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKS5zcGxpdCgnJicpLFxyXG4gICAgICAgICAgICBsZW4gPSBzZWcubGVuZ3RoLCBpID0gMCwgcztcclxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZWdbaV0pIHsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgIHMgPSBzZWdbaV0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgIHJldFtzWzBdXSA9IHNbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9KSgpLFxyXG4gICAgICAgIGZpbGU6IChhLnBhdGhuYW1lLm1hdGNoKC9cXC8oW15cXC8/I10rKSQvaSkgfHwgWywgJyddKVsxXSxcclxuICAgICAgICBoYXNoOiBhLmhhc2gucmVwbGFjZSgnIycsICcnKSxcclxuICAgICAgICBwYXRoOiBhLnBhdGhuYW1lLnJlcGxhY2UoL14oW15cXC9dKS8sICcvJDEnKSxcclxuICAgICAgICByZWxhdGl2ZTogKGEuaHJlZi5tYXRjaCgvdHBzPzpcXC9cXC9bXlxcL10rKC4rKS8pIHx8IFssICcnXSlbMV0sXHJcbiAgICAgICAgc2VnbWVudHM6IGEucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpXHJcbiAgICB9O1xyXG59O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi91dGlsaXRpZXNcXFxcZG9tXFxcXHBhcnNlVXJsLmpzXCIsXCIvdXRpbGl0aWVzXFxcXGRvbVwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTJcblxuLyoqXG4gKiBJZiBgQnVmZmVyLl91c2VUeXBlZEFycmF5c2A6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChjb21wYXRpYmxlIGRvd24gdG8gSUU2KVxuICovXG5CdWZmZXIuX3VzZVR5cGVkQXJyYXlzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IGlmIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWQgQXJyYXlzLiBTdXBwb3J0ZWQgYnJvd3NlcnMgYXJlIElFIDEwKywgRmlyZWZveCA0KyxcbiAgLy8gQ2hyb21lIDcrLCBTYWZhcmkgNS4xKywgT3BlcmEgMTEuNissIGlPUyA0LjIrLiBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFkZGluZ1xuICAvLyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsIHRoZW4gdGhhdCdzIHRoZSBzYW1lIGFzIG5vIGBVaW50OEFycmF5YCBzdXBwb3J0XG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGFkZCBhbGwgdGhlIG5vZGUgQnVmZmVyIEFQSSBtZXRob2RzLiBUaGlzIGlzIGFuIGlzc3VlXG4gIC8vIGluIEZpcmVmb3ggNC0yOS4gTm93IGZpeGVkOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzhcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgLy8gQ2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIFdvcmthcm91bmQ6IG5vZGUncyBiYXNlNjQgaW1wbGVtZW50YXRpb24gYWxsb3dzIGZvciBub24tcGFkZGVkIHN0cmluZ3NcbiAgLy8gd2hpbGUgYmFzZTY0LWpzIGRvZXMgbm90LlxuICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnICYmIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgc3ViamVjdCA9IHN0cmluZ3RyaW0oc3ViamVjdClcbiAgICB3aGlsZSAoc3ViamVjdC5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgICBzdWJqZWN0ID0gc3ViamVjdCArICc9J1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdClcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0Lmxlbmd0aCkgLy8gYXNzdW1lIHRoYXQgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbmVlZHMgdG8gYmUgYSBudW1iZXIsIGFycmF5IG9yIHN0cmluZy4nKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgICAgZWxzZVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0W2ldXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbi8vIFNUQVRJQyBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT09IG51bGwgJiYgYiAhPT0gdW5kZWZpbmVkICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAvIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBhc3NlcnQoaXNBcnJheShsaXN0KSwgJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3QsIFt0b3RhbExlbmd0aF0pXFxuJyArXG4gICAgICAnbGlzdCBzaG91bGQgYmUgYW4gQXJyYXkuJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdG90YWxMZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuLy8gQlVGRkVSIElOU1RBTkNFIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIF9oZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGFzc2VydChzdHJMZW4gJSAyID09PSAwLCAnSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgYXNzZXJ0KCFpc05hTihieXRlKSwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIEJ1ZmZlci5fY2hhcnNXcml0dGVuID0gaSAqIDJcbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gX3V0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBfYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG4gIHN0YXJ0ID0gTnVtYmVyKHN0YXJ0KSB8fCAwXG4gIGVuZCA9IChlbmQgIT09IHVuZGVmaW5lZClcbiAgICA/IE51bWJlcihlbmQpXG4gICAgOiBlbmQgPSBzZWxmLmxlbmd0aFxuXG4gIC8vIEZhc3RwYXRoIGVtcHR5IHN0cmluZ3NcbiAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgcmV0dXJuICcnXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBhc3NlcnQodGFyZ2V0X3N0YXJ0ID49IDAgJiYgdGFyZ2V0X3N0YXJ0IDwgdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCBzb3VyY2UubGVuZ3RoLCAnc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gc291cmNlLmxlbmd0aCwgJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwIHx8ICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gX3V0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBfYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspXG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBfYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIF9oZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2krMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gY2xhbXAoc3RhcnQsIGxlbiwgMClcbiAgZW5kID0gY2xhbXAoZW5kLCBsZW4sIGxlbilcblxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAyXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gICAgdmFsIHw9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldCArIDNdIDw8IDI0ID4+PiAwKVxuICB9IGVsc2Uge1xuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDFdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDJdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgM11cbiAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldF0gPDwgMjQgPj4+IDApXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLFxuICAgICAgICAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgdmFyIG5lZyA9IHRoaXNbb2Zmc2V0XSAmIDB4ODBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MTYoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDMyKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDAwMDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmZmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEZsb2F0IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRG91YmxlIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZilcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmZmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmLCAtMHg4MClcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgdGhpcy53cml0ZVVJbnQ4KHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgdGhpcy53cml0ZVVJbnQ4KDB4ZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZiwgLTB4ODAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQxNihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MTYoYnVmLCAweGZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MzIoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgMHhmZmZmZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsXG4gICAgICAgICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKSwgJ3ZhbHVlIGlzIG5vdCBhIG51bWJlcicpXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHRoaXMubGVuZ3RoLCAnc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gdGhpcy5sZW5ndGgsICdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICB0aGlzW2ldID0gdmFsdWVcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXQgPSBbXVxuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IHRvSGV4KHRoaXNbaV0pXG4gICAgaWYgKGkgPT09IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMpIHtcbiAgICAgIG91dFtpICsgMV0gPSAnLi4uJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBvdXQuam9pbignICcpICsgJz4nXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKVxuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbi8vIHNsaWNlKHN0YXJ0LCBlbmQpXG5mdW5jdGlvbiBjbGFtcCAoaW5kZXgsIGxlbiwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIGluZGV4ID0gfn5pbmRleDsgIC8vIENvZXJjZSB0byBpbnRlZ2VyLlxuICBpZiAoaW5kZXggPj0gbGVuKSByZXR1cm4gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgaW5kZXggKz0gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gY29lcmNlIChsZW5ndGgpIHtcbiAgLy8gQ29lcmNlIGxlbmd0aCB0byBhIG51bWJlciAocG9zc2libHkgTmFOKSwgcm91bmQgdXBcbiAgLy8gaW4gY2FzZSBpdCdzIGZyYWN0aW9uYWwgKGUuZy4gMTIzLjQ1NikgdGhlbiBkbyBhXG4gIC8vIGRvdWJsZSBuZWdhdGUgdG8gY29lcmNlIGEgTmFOIHRvIDAuIEVhc3ksIHJpZ2h0P1xuICBsZW5ndGggPSB+fk1hdGguY2VpbCgrbGVuZ3RoKVxuICByZXR1cm4gbGVuZ3RoIDwgMCA/IDAgOiBsZW5ndGhcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoc3ViamVjdCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBBcnJheV0nXG4gIH0pKHN1YmplY3QpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpXG4gICAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSlcbiAgICBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspXG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIHBvc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cblxuLypcbiAqIFdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGlzIGEgdmFsaWQgaW50ZWdlci4gVGhpcyBtZWFucyB0aGF0IGl0XG4gKiBpcyBub24tbmVnYXRpdmUuIEl0IGhhcyBubyBmcmFjdGlvbmFsIGNvbXBvbmVudCBhbmQgdGhhdCBpdCBkb2VzIG5vdFxuICogZXhjZWVkIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHZlcmlmdWludCAodmFsdWUsIG1heCkge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPj0gMCwgJ3NwZWNpZmllZCBhIG5lZ2F0aXZlIHZhbHVlIGZvciB3cml0aW5nIGFuIHVuc2lnbmVkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGlzIGxhcmdlciB0aGFuIG1heGltdW0gdmFsdWUgZm9yIHR5cGUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnNpbnQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZklFRUU3NTQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxufVxuXG5mdW5jdGlvbiBhc3NlcnQgKHRlc3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0ZXN0KSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnRmFpbGVkIGFzc2VydGlvbicpXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnVmZmVyXFxcXGluZGV4LmpzXCIsXCIvLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnVmZmVyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xudmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBaRVJPICAgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdG1vZHVsZS5leHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0bW9kdWxlLmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IHVpbnQ4VG9CYXNlNjRcbn0oKSlcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJuZ3BtY1FcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcZ3VscC1icm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxicm93c2VyaWZ5XFxcXG5vZGVfbW9kdWxlc1xcXFxidWZmZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhc2U2NC1qc1xcXFxsaWJcXFxcYjY0LmpzXCIsXCIvLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnVmZmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYXNlNjQtanNcXFxcbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnVmZmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxpZWVlNzU0XFxcXGluZGV4LmpzXCIsXCIvLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnVmZmVyXFxcXG5vZGVfbW9kdWxlc1xcXFxpZWVlNzU0XCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwibmdwbWNRXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxccHJvY2Vzc1xcXFxicm93c2VyLmpzXCIsXCIvLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxccHJvY2Vzc1wiKSJdfQ==
