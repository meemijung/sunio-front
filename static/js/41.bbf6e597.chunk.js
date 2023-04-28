/*! For license information please see 41.bbf6e597.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[41],{1115:function(t,e,r){},1116:function(t,e,r){},1117:function(t,e,r){},1168:function(t,e,r){"use strict";r.d(e,"a",(function(){return j}));var n=r(1),o=r(43),i=r(2),a=r(74),c=r(19),u=r.n(c),s=(r(780),r(32)),f=r(49),l=(r(1115),r(183)),h=(r(1116),r(6));function d(t){var e=Object(i.useState)(!1),r=Object(o.a)(e,2),n=r[0],c=r[1],u=function(e,r){var n=t.reverse,o="next"==r,i=t[n?"min":"max"],a=t[n?"max":"min"];return o?e==i?a:e+(n?-1:1):e==a?i:e+(n?1:-1)};Object(i.useEffect)((function(){c(!n)}),[t.now]);var s=function(t){var e=u(t,"prev"),r=[t,e,u(e,"prev")];return r[n?"push":"unshift"](n?u(e,"prev"):u(t,"next")),r};return Object(h.jsx)(a.a,{children:function(){return Object(h.jsx)("div",{className:"cards",children:s(t.now).map((function(e,r){return Object(h.jsx)("div",{className:"card".concat(e==t.now?" now":""),children:Object(h.jsx)("div",{className:"sides",children:["front","back"].map((function(t){return Object(h.jsx)("div",{className:"side ".concat(t),children:Object(h.jsx)("div",{className:"side-num",children:"front"==t?e:u(e,"next")})},"side".concat(t))}))})},"flip-card".concat(r))}))})}})}r(1117);var v=r(0),p=null;function m(t){var e=Object(a.d)((function(){return l.a.network})),r=Object(a.d)((function(){return l.a.farmStore})),n=Object(i.useState)(r.farmData[t.id].start||t.start),c=Object(o.a)(n,2),u=c[0],s=c[1],f=Object(i.useState)(r.farmData[t.id].diff||{}),m=Object(o.a)(f,2),y=m[0],j=m[1],b=Object(i.useState)(r.farmData[t.id].end||t.end),g=Object(o.a)(b,2),w=g[0];g[1];Object(i.useEffect)((function(){L(y)?O():p=window.setTimeout((function(){x(),L()&&O()}),1e3)}),[u]);var O=function(){window.clearTimeout(p),e.setData({isTimeOver:!0}),t.onStop&&t.onStop()},x=function(){var e=Math.abs(w-u),n=Math.floor(e/1e3),o=Math.floor(n/60),i=Math.floor(o/60),a=(Math.floor(i/24),{hours:i%24,minutes:o%60,seconds:n%60}),c=u+1e3;Object(v.a)(w).isNaN()||Object(v.a)(u).isNaN()||(j(a),s(c),r.farmData[t.id].diff=a,r.farmData[t.id].start=c)},L=function(){return w&&u>w},E={days:[[0,9],[0,9]],hours:[[0,2],[0,4]],minutes:[[0,5],[0,9]],seconds:[[0,5],[0,9]]};return Object(h.jsx)(a.a,{children:function(){return Object(h.jsx)("div",{className:"countdown",children:Object.keys(y).map((function(t){return Object(h.jsx)("div",{className:"countdown-".concat(t),children:Array(2).fill(0).map((function(e,r){return Object(h.jsx)(d,{reverse:!0,now:+(n=y[t],(n<10?"0"+n:n)+"")[r],min:E[t][r][0],max:E[t][r][1]},"".concat(t).concat(r));var n}))},t)}))})}})}r(3);function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new N(o||[]);return n(a,"_invoke",{value:O(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=s;var l={};function h(){}function d(){}function v(){}var p={};u(p,i,(function(){return this}));var m=Object.getPrototypeOf,j=m&&m(m(S([])));j&&j!==e&&r.call(j,i)&&(p=j);var b=v.prototype=h.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var u=f(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,l;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function j(t){Object(a.d)((function(){return l.a.pool})),Object(a.d)((function(){return l.a.network}));var e,r,c=Object(a.d)((function(){return l.a.farmStore})),d=Object(i.useState)((new Date).getTime()),v=Object(o.a)(d,2),p=v[0],j=v[1],b=Object(i.useState)(1e3*(null===(e=c.farmData[t.id])||void 0===e?void 0:e.remainingTime)+1e3*f.a.unfreezeTime),g=Object(o.a)(b,2),w=g[0],O=g[1],x=1e3*(null===(r=c.farmData[t.id])||void 0===r?void 0:r.remainingTime)+1e3*f.a.unfreezeTime;Object(i.useEffect)((function(){L()}),[]);var L=function(){var e=Object(n.a)(y().mark((function e(){var r,n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.v)();case 3:(r=e.sent).success&&(n=r.time,j(n),O(x),c.farmData[t.id].start=n,c.farmData[t.id].end=w),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("get time error",e.t0),setTimeout((function(){L()}),3e3);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(a.a,{children:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"count-down-wrap",children:[Object(h.jsx)("div",{className:"count",children:Object(h.jsx)(m,{start:p,end:w,id:t.id,onStop:t.stopCount})}),Object(h.jsxs)("div",{className:"countdesc",children:[Object(h.jsx)("span",{className:"cd-hour",children:u.a.get("century.h")}),Object(h.jsxs)("span",{className:"cd-minute",children:[u.a.get("century.m")," "]}),Object(h.jsx)("span",{className:"cd-second",children:u.a.get("century.s")})]})]})})}})}},1909:function(t,e,r){"use strict";r.r(e);r(2);var n=r(1168),o=(r(804),r(6));e.default=function(){return Object(o.jsx)(n.a,{})}},804:function(t,e,r){}}]);