/*! For license information please see 49.038eeae3.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[49],{1143:function(e,t,n){"use strict";n(2),n(19),n(6)},1165:function(e,t,n){"use strict";var a=n(5),r=n(1),c=n(43),o=n(2),i=n(37),s=n.n(i),l=n(74),u=n(115),d=n(19),b=n.n(d),p=n(993),j=n(1922),h=n(158),f=(n(804),n(793)),m=n(794),v=n(795),O=n(222),x=n(3),g=n(11),y=n(0),w=n(25),N=n(183),k=n(780),_=(n(784),n(787),n(6)),S=n(1913),L=(n(396),n(389),n(388),n(385)),D=n(384),E=function(){var e=Object(l.d)((function(){return N.a.pool})),t=Object(o.useState)(Object(u.a)(window.navigator).any),n=Object(c.a)(t,1)[0],a=[{title:b.a.get("home.pools.pool"),dataIndex:"name",key:"name",fixed:"left",render:function(e,t){return Object(_.jsxs)("div",{className:"long",children:["USDC"===t.symbol?Object(_.jsxs)("div",{className:"swap-pool-img",children:[Object(_.jsx)("img",{src:L.default,alt:""}),Object(_.jsx)("img",{src:D.default,alt:""})]}):Object(_.jsx)("div",{className:"swap-pool-img",children:Object(_.jsx)("img",{className:"pool3-img",src:w.a[t.symbol],alt:""})}),Object(_.jsxs)("div",{className:"flex column start",children:[Object(_.jsx)("span",{className:"symbol",children:t.symbol}),Object(_.jsx)("span",{className:"name",children:t.name})]})]})}},{title:b.a.get("home.pools.base_apy"),dataIndex:"baseApy",key:"baseApy",render:function(e,t){return"--"!==e?"".concat(Object(y.s)(e),"%"):"--"}},{title:b.a.get("home.pools.rewards_apy"),dataIndex:"rewardsApy",key:"rewardsApy",render:function(e,t){return"--"!==e?"".concat(Object(y.s)(e),"%"):"--"}},{title:b.a.get("home.pools.volume"),dataIndex:"volume",key:"volume",render:function(e,t){return"--"!==e?"$".concat(Object(y.e)(e)):"--"}}];return Object(_.jsx)(l.a,{children:function(){return Object(_.jsx)("div",{className:"window white pl-0",children:Object(_.jsxs)("fieldset",{children:[Object(_.jsx)("legend",{className:"text-center",children:b.a.get("home.pools_title")}),Object(_.jsx)(S.a,{className:"table-swap",dataSource:e.sspTableData,columns:a,pagination:!1,rowKey:function(e){return e.name},scroll:{x:!!n&&600},onRow:function(e){return{onClick:function(t){!function(e){var t=window.localStorage.getItem("lang")||b.a.options.currentLocale,n=window.location.origin+window.location.pathname;window.location.href=n+"?lang=".concat(t,"#/").concat(e)}(e.symbol.toLowerCase())}}}})]})})}})},C=window.location.origin+"/"+window.location.search+"#/3pool/deposit",I=window.location.origin+"/"+window.location.search+"#/usdc/deposit",A=window.location.origin+"/"+window.location.search+"#/stake",F=function(){var e=Object(l.d)((function(){return N.a.pool})),t=e.sspTableData,n=Object(o.useState)("--"),a=Object(c.a)(n,2),r=a[0],i=a[1],s=function(t){"deposit"===t&&(Object(y.a)(e.totalApy).gte(r)?window.open(C,"deposit"):window.open(I,"deposit")),"stake"===t&&window.open(A,"stake")};return Object(o.useEffect)((function(){t.length>=2&&i(Object(y.a)(t[1].baseApy).plus(t[1].rewardsApy))}),[e.sspTableData]),Object(_.jsx)(l.a,{children:function(){return Object(_.jsx)("div",{className:"window white no-bg padding-0",children:Object(_.jsxs)("div",{className:"flex around apys",children:[Object(_.jsx)("div",{onClick:function(){return s("deposit")},className:"cp",children:Object(_.jsxs)("fieldset",{className:"",children:[Object(_.jsxs)("div",{className:"jcst",children:[Object(_.jsx)("h2",{className:"legend-title title1",children:b.a.get("home.stake_apy.stable_deposit")}),Object(_.jsxs)("h2",{className:"legend-title nowrap",children:[Object(y.a)(e.totalApy).gt(r)?Object(y.s)(e.totalApy):Object(y.s)(r),"%"]})]}),Object(_.jsxs)("div",{className:"jcst mt-10",children:[Object(_.jsx)("span",{className:"c-999",children:b.a.get("home.stake_apy.stable_deposit_desc")}),Object(_.jsx)("span",{className:"c-999 min-100 right",children:b.a.get("home.stake_apy.highest_apy")})]})]})}),Object(_.jsx)("div",{onClick:function(){return s("stake")},className:"cp",children:Object(_.jsxs)("fieldset",{className:"",children:[Object(_.jsxs)("div",{className:"jcst",children:[Object(_.jsx)("h2",{className:"legend-title",children:b.a.get("home.stake_apy.join_deposit")}),Object(_.jsxs)("h2",{className:"legend-title",children:[Object(y.s)(e.highestApy),"%"]})]}),Object(_.jsxs)("div",{className:"jcst mt-10",children:[Object(_.jsx)("span",{className:"c-999",children:b.a.get("home.stake_apy.join_deposit_desc")}),Object(_.jsx)("span",{className:"c-999 min-100 right",children:b.a.get("home.stake_apy.highest_apy")})]})]})})]})})}})},T=n(1059);function P(){P=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(L){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var c=t&&t.prototype instanceof b?t:b,o=Object.create(c.prototype),i=new k(r||[]);return a(o,"_invoke",{value:g(e,n,i)}),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var d={};function b(){}function p(){}function j(){}var h={};s(h,c,(function(){return this}));var f=Object.getPrototypeOf,m=f&&f(f(_([])));m&&m!==t&&n.call(m,c)&&(h=m);var v=j.prototype=b.prototype=Object.create(h);function O(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(a,c,o,i){var s=u(e[a],e,c);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,o,i)}),(function(e){r("throw",e,o,i)})):t.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return r("throw",e,o,i)}))}i(s.arg)}var c;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return c=c?c.then(a,a):a()}})}function g(e,t,n){var a="suspendedStart";return function(r,c){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw c;return S()}for(n.method=r,n.arg=c;;){var o=n.delegate;if(o){var i=y(o,n);if(i){if(i===d)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var s=u(e,t,n);if("normal"===s.type){if(a=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a="completed",n.method="throw",n.arg=s.arg)}}}function y(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var c=r.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function _(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=j,a(v,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:p,configurable:!0}),p.displayName=s(j,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,s(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},O(x.prototype),s(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,a,r,c){void 0===c&&(c=Promise);var o=new x(l(t,n,a,r),c);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},O(v),s(v,i,"Generator"),s(v,c,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=_,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],o=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var i=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(i&&s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;N(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}x.a.pools;var B=x.a.usdcPools,G=x.a.poolKeys,H=x.a.usdcPoolKeys,V=x.a.stablePool,K=x.a.usdcContracts,U=p.a.Option,J=x.a.lockKeys,R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t={};return e.map((function(e){t[e]=""})),t};t.a=function(e){var t=null,n=Object(l.d)((function(){return N.a.system})),i=Object(l.d)((function(){return N.a.network})),d=Object(l.d)((function(){return N.a.pool})),x=Object(l.d)((function(){return N.a.home})),S=Object(l.d)((function(){return N.a.usdcPool})),L=R(),D=R(H),C=Object(u.a)(window.navigator).any,I=Object(o.useState)("--"),A=Object(c.a)(I,2),G=(A[0],A[1]),X=Object(o.useState)("--"),Y=Object(c.a)(X,2),q=(Y[0],Y[1]),$=Object(o.useState)("--"),z=Object(c.a)($,2),M=(z[0],z[1]),Q=Object(o.useState)("--"),W=Object(c.a)(Q,2),Z=(W[0],W[1]),ee=function(){var e=Object(r.a)(P().mark((function e(){var t,n,a,r,c;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getHomePageBottomApy();case 2:return e.next=4,d.getVolumeData();case 4:return e.next=6,x.getAllTvlData();case 6:t=e.sent,n=t.allSwaps,a=t.miningPools,r=t.stableCoins,c=t.totalTvl,G(c),q(n),M(a),Z(r);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(r.a)(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getBalanceInfo();case 2:return e.next=4,S.getBalanceInfo(K.usdcSwap);case 4:return e.next=6,d.getSwapBalance();case 6:Ie&&He();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){return t||(Fe({rageChange:!0}),t=setInterval(Object(r.a)(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:case"end":return e.stop()}}),e)}))),i.defaultIntervalSec)),function(){clearInterval(t)}}),[]);var ne=Object(o.useState)("usdt"),ae=Object(c.a)(ne,2),re=ae[0],ce=ae[1],oe=Object(o.useState)(1),ie=Object(c.a)(oe,2),se=ie[0],le=ie[1],ue=Object(o.useState)("usdj"),de=Object(c.a)(ue,2),be=de[0],pe=de[1],je=Object(o.useState)(1),he=Object(c.a)(je,2),fe=he[0],me=he[1],ve=Object(o.useState)(s()(1)),Oe=Object(c.a)(ve,2),xe=Oe[0],ge=Oe[1],ye=Object(o.useState)(!1),we=Object(c.a)(ye,2),Ne=we[0],ke=we[1],_e=Object(o.useState)(1),Se=Object(c.a)(_e,2),Le=Se[0],De=Se[1],Ee=Object(o.useState)(!1),Ce=Object(c.a)(Ee,2),Ie=Ce[0],Ae=Ce[1],Fe=function(){var e=Object(r.a)(P().mark((function e(){var t,n,a,r,c,o,i,l,u,d,b,p,j,h,f,m,v,O,x=arguments;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=x.length>0&&void 0!==x[0]?x[0]:{},n=t.i,a=void 0===n?re:n,r=t.j,c=void 0===r?be:r,o=t.dx_base,i=void 0===o?se:o,l=t.rageChange,u=void 0!==l&&l,(i=Object(y.ab)(i)).gt(0)){e.next=4;break}return e.abrupt("return");case 4:return d=B[a].index,b=B[c].index,p=B[a].precision,j=B[c].precision,h=i.times(p)._toIntegerDown()._toHex(),e.prev=9,e.next=12,Object(g.tb)(d,b,h);case 12:if((f=e.sent).success){e.next=15;break}return e.abrupt("return");case 15:if(me(Object(y.c)(f.value.div(j)._toFixed(B[c].decimal,1))),!u){e.next=21;break}return e.next=19,Object(g.tb)(d,b,h);case 19:m=e.sent,1===Le?(v=m.value.div(j).div(i),s()(v).gt(0)?ge(v):ge("--")):(O=s()(1).div(m.value.div(j).div(Object(y.ab)(se))._toFixed(4,1)),s()(O).gt(0)?ge(O):ge("--"));case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(9),console.log("get dy error: ",e.t0);case 26:case"end":return e.stop()}}),e,null,[[9,23]])})));return function(){return e.apply(this,arguments)}}(),Te=function(){var e=Object(r.a)(P().mark((function e(){var t,r,c,o,i,l,u;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Ne){e.next=5;break}if(!He()){e.next=5;break}return e.abrupt("return");case 5:if(!Ne){e.next=7;break}return e.abrupt("return");case 7:if(t=Object(a.a)({},d.poolData),r=Object(a.a)({},L),(c=[re,be].includes("usdc"))&&(t=Object(a.a)(Object(a.a)({},S.poolData),S.poolData1),r=Object(a.a)({},D)),o=t[re],i=o.allowance,l=o.precision,i=s()(i).div(l),!Object(y.ab)(se).gt(i)||r[re]){e.next=23;break}return u={action:"approve",title:"deposit.approve_token",obj:{value:B[re].symbol},continuous:!0},e.next=17,n.approveToken(B[re].token,c?K.usdcSwap:V,u,[["pool/getBalanceInfo"]]);case 17:if(!e.sent){e.next=22;break}c?D[re]=2:L[re]=2,e.next=23;break;case 22:return e.abrupt("return");case 23:Pe(),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(0),console.log(e.t0);case 29:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(r.a)(P().mark((function e(){var t,a,r,c,o,i,s;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=B[re].index,a=B[be].index,r=Object(y.ab)(se),c=Object(y.ab)(fe),o=B[re].precision,i=B[be].precision,s={title:"notification.tip1",obj:{fromValue:Object(y.t)(r),fromToken:re.toUpperCase(),toValue:Object(y.t)(c),toToken:be.toUpperCase()}},e.prev=7,![re,be].includes("usdc")){e.next=14;break}return e.next=11,n.toUsdcExchange(t,a,r.times(o)._toIntegerDown()._toHex(),c.times(i).times(.995)._toIntegerDown()._toHex(),s,[["pool/getBalanceInfo"],["pool/getStakeApyData"],["pool/getVolumeData"],["pool/getStatsData"]]);case 11:e.t0=e.sent,e.next=17;break;case 14:return e.next=16,n.toExchange(t-1,a-1,r.times(o)._toIntegerDown()._toHex(),c.times(i).times(.995)._toIntegerDown()._toHex(),s,[["pool/getBalanceInfo"],["pool/getStakeApyData"],["pool/getVolumeData"],["pool/getStatsData"]]);case 16:e.t0=e.sent;case 17:e.t0&&setTimeout((function(){d.getBalanceInfo(),S.getBalanceInfo(K.usdcSwap),Fe()}),5e3),e.next=24;break;case 21:e.prev=21,e.t1=e.catch(7),console.log("exchange error: ",e.t1);case 24:case"end":return e.stop()}}),e,null,[[7,21]])})));return function(){return e.apply(this,arguments)}}(),Be=function(){!Ie&&Ae(!0),ce(be),pe(re),le(Object(y.c)(Object(y.ab)(fe)._toFixed(B[be].decimal),1)),Fe({i:be,j:re,dx_base:fe,rageChange:!0}),De(1)},Ge=function(e){!Ie&&Ae(!0);var t=B[re],n=t.decimal,r=(t.symbol,Object(y.R)((""+e).replace(/,/g,""),n)),c=r.valid,o=r.str,i=Object(a.a)(Object(a.a)({},S.poolData),S.poolData1)[re],l=i.precision,u=i.balance;u=s()(u).div(l),c&&(le(Object(y.c)(o)),Fe({dx_base:s()(o),rageChange:!0}))};Object(o.useEffect)((function(){Ie&&He()}),[re,be,se]);var He=function(){var e=Object(a.a)(Object(a.a)({},S.poolData),S.poolData1)[re],t=e.precision,n=e.balance,r=e.symbol;return n=s()(n).div(t),Object(y.ab)(se).eq(0)||Object(y.ab)(se).isNaN()?(ke(b.a.get("error.e1")),!0):Object(y.ab)(se).gt(n)?(ke(b.a.get("error.e2",{token:r})),!0):(ke(!1),!1)},Ve=function(){var e=Object(r.a)(P().mark((function e(t){var n;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!Ie&&Ae(!0),ce(t),le(Object(y.c)(Object(y.ab)(se)._toFixed(B[t].decimal),1)),Fe({i:t,rageChange:!0}),n=Object(y.ab)(se)._toFixed(B[t].decimal,1),le(Object(y.c)(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ke=function(e){!Ie&&Ae(!0),pe(e),Fe({j:e,rageChange:!0})},Ue=function(){var e=Object(r.a)(P().mark((function e(){var t,n,a,r,c,o,i;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Ie&&Ae(!0),t=[re,be],De(1!==Le?1:2),s()(xe).gt(0)){e.next=6;break}return ge("--"),e.abrupt("return");case 6:return n=B[t[0].toLocaleLowerCase()].precision,a=B[t[0]].index,r=B[t[1]].index,c=B[t[1]].precision,o=Object(y.ab)(se).times(n)._toIntegerDown()._toHex(),e.next=13,Object(g.tb)(a,r,o);case 13:i=e.sent,ge(1!==Le?i.value.div(c).div(Object(y.ab)(se)):s()(1).div(i.value.div(c).div(Object(y.ab)(se))._toFixed(4,1)));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Je=function(e){try{var t=Object(a.a)(Object(a.a)({},S.poolData),S.poolData1)[e],n=t.precision,r=t.balance;return r=s()(r).isNaN()?"--":s()(r).div(n),Object(_.jsxs)("span",{className:"clickable c-purple fs-12",onClick:function(){return Ge(r)},children:[b.a.get("buysell.max"),": ",s()(r)._toFixed(2,1)]})}catch(c){}},Re=function(){return Object(_.jsxs)("div",{className:"page-head",children:[Object(_.jsx)("div",{className:"gradient-title",children:b.a.get("home.swap_all_title")}),Object(_.jsx)("div",{className:"dim-content",children:b.a.get("banner.desc_1")})]})};return Object(_.jsx)(l.a,{children:function(){return Object(_.jsxs)("div",{className:"container",children:[!e.headerHidden&&Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(k.a,{routeName:"home",instantActions:ee,mountedActions:te})}),Object(_.jsx)(Re,{}),Object(_.jsx)("div",{className:"window white",children:Object(_.jsxs)("fieldset",{children:[Object(_.jsx)("legend",{className:"text-center",children:b.a.get("home.swap_all_title")}),(S.poolData,Object(_.jsxs)("div",{className:"swap flex mt-24",children:[Object(_.jsxs)("div",{className:"swap-block",children:[Object(_.jsx)(p.a,{onChange:Ve,value:re,children:H.map((function(e){var t=B[e];return Object(_.jsxs)(U,{value:e,disabled:be===e,children:[Object(_.jsx)("img",{src:w.a[e]?w.a[e]:O.default,alt:"",className:"token-logo"}),t.symbol]},e)}))}),Object(_.jsxs)("div",{className:"flex column all-end a-end w-200 mobile-top",children:[Je(re),Object(_.jsx)(j.a,{value:se,onChange:function(e){return Ge(e.target.value)}})]})]}),C?Object(_.jsx)("img",{className:"mobile-top mobile-rotate",src:f.a,onClick:function(){return Be()}}):Object(_.jsx)("img",{className:"mobile-top mobile-rotate mobile-rotate-new ",src:m.a,onClick:function(){return Be()}}),Object(_.jsxs)("div",{className:"swap-block",children:[Object(_.jsx)(p.a,{className:"mobile-top",onChange:Ke,value:be,children:H.map((function(e){var t=B[e];return Object(_.jsxs)(U,{value:e,disabled:re===e,children:[Object(_.jsx)("img",{src:w.a[e]?w.a[e]:O.default,alt:"",className:"token-logo"}),t.symbol]},e)}))}),Object(_.jsx)(j.a,{className:"mobile-top",value:fe,disabled:!0})]})]})),Object(_.jsxs)("p",{className:"flex jce a-middle mt-20 exchange-rate",children:[Object(_.jsxs)("span",{className:"c-999 mobile-text",children:[b.a.get("buysell.exchange_rate"),1===Le?" ".concat(B[re].symbol,"/").concat(B[be].symbol):" ".concat(B[be].symbol,"/").concat(B[re].symbol)]}),Object(_.jsx)("img",{src:v.a,className:"swaprates-icon",onClick:function(){return Ue()}}),Object(_.jsxs)("span",{className:"clickable c-999 mobile-text",children:["(",b.a.get("buysell.including_fees"),"):"," ",Object(_.jsx)("span",{className:"c-999",children:"--"===xe?"--":xe._toFixed(4,1)})]})]}),Object(_.jsxs)("p",{className:"flex jce swap-pool-des",children:[Object(_.jsx)("span",{className:"c-999",children:b.a.get("buysell.trade_through")}),Object(_.jsx)("span",{className:"ml-2 c-999",children:"usdc"===re||"usdc"===be?b.a.get("buysell.usdc_pool"):"3pool"})]}),Ne&&Object(_.jsx)("p",{className:"red-error mt-10",children:Ne}),Object(_.jsx)("p",{className:"flex center mt-20",children:Object(_.jsx)(h.a,{className:"sell",onClick:function(){return Te()},disabled:Ne,children:b.a.get("sell_btn")})})]})}),Object(_.jsx)(E,{}),Object(_.jsx)(T.a,{}),Object(_.jsx)(F,{data:J},J)]})}})}},1905:function(e,t,n){"use strict";n.r(t);n(2);var a=n(780),r=n(784),c=(n(1143),n(1165),n(400),n(804),n(985)),o=n(6);t.default=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(a.a,{routeName:"3pool/trade"}),Object(o.jsx)(r.a,{}),Object(o.jsx)(c.a,{})]})}},793:function(e,t,n){"use strict";t.a=n.p+"static/media/exchange-alt-solid.730f2c6b.svg"},794:function(e,t,n){"use strict";t.a=n.p+"static/media/exchange-alt-solid-cn.24d365f8.svg"},795:function(e,t,n){"use strict";t.a=n.p+"static/media/sync-solid.2db08506.svg"},985:function(e,t,n){"use strict";var a=n(43),r=n(2),c=(n(804),n(19)),o=n.n(c),i=n(6);t.a=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!0),l=Object(a.a)(s,2),u=l[0],d=l[1];return Object(i.jsxs)("div",{className:"window charts",children:[Object(i.jsxs)("ul",{className:"li-inline",children:[Object(i.jsxs)("li",{onClick:function(){return c(!n)},children:["[",n&&Object(i.jsx)("span",{children:"X"}),"] usdt"]}),Object(i.jsxs)("li",{onClick:function(){return d(!u)},children:["[",u&&Object(i.jsx)("span",{children:"X"}),"] 3pool"]})]}),Object(i.jsx)("div",{className:"mt-10",children:Object(i.jsx)("button",{children:o.a.get("volume_percoin.select")})})]})}}}]);