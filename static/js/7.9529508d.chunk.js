(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[7],{1077:function(t,e,n){"use strict";var s=n(45),i=n.n(s),a=n(1127),o=n.n(a),r=n(1169),u=n.n(r);i.a.extend(o.a),i.a.extend(u.a),e.a=i.a},1078:function(t,e,n){},1126:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"i",(function(){return b}));var s=n(8),i=n(0),a=n(4);const{htxConfig:o}=a.a,r=o.htxExchangeContract,u=o.htxVoteContract,c=async(t,e,n,i)=>{const o=await Object(s.Wb)(t,"approve(address,uint256)",[{type:"address",value:e},{type:"uint256",value:s.b}],{feeLimit:a.a.feeLimitMin},n,i);return o&&o.transaction?o.transaction.txID:""},l=async()=>{const t=await Object(s.ac)(r,"isActive()",[]);if(t.length){return{success:!0,value:Object(i.a)(t[0].slice(0,s.a),16).isEqualTo(1)}}return{success:!1}},p=async()=>{const t=await Object(s.ac)(r,"TokenA()",[]);if(t.length){const e=t[0];let n=0;return{success:!0,value:s.Lb.address.fromHex("41"+e.substr(n++*s.a,s.a).slice(24))}}return{success:!1}},d=async()=>{const t=await Object(s.ac)(r,"TokenB()",[]);if(t.length){const e=t[0];let n=0;return{success:!0,value:s.Lb.address.fromHex("41"+e.substr(n++*s.a,s.a).slice(24))}}return{success:!1}},f=async()=>{const t=await Object(s.ac)(r,"exchangeRate()",[]);if(t.length){return{success:!0,value:Object(i.a)(t[0].slice(0,s.a),16)}}return{success:!1}},h=async()=>{const t=await Object(s.ac)(r,"feeRate()",[]);if(t.length){return{success:!0,value:Object(i.a)(t[0].slice(0,s.a),16).toString()}}return{success:!1}},m=async(t,e)=>{const n=[{type:"uint256",value:t},{type:"bool",value:e}],a=await Object(s.ac)(r,"getAmountOut(uint256,bool)",n,{},{});if(a.length){const t=a[0];let e=0;const n=Object(i.a)(t.substr(e++*s.a,s.a),16),o=Object(i.a)(t.substr(e++*s.a,s.a),16);return{success:!0,amount:n.toString(),fee:o.toString()}}return{success:!1}},y=async(t,e,n,i)=>{const a=[{type:"uint256",value:e},{type:"bool",value:n}],o=await Object(s.Wb)(t,"swap(uint256,bool)",a,{},i);return o.transaction?o.transaction.txID:""},b=async(t,e,n)=>{const s=[{type:"uint256",value:e.integerValue(i.a.ROUND_DOWN)._toHex()},{type:"bool",value:n}],a={title:"actions.vote_for_gauge_weights",obj:{percent:"".concat(Object(i.u)(e.integerValue(i.a.ROUND_DOWN),{dp:0})),pool:"HTX-SUN"}},o=await t.trigger(u,"vote(uint256,bool)",s,{},a);return o.transaction?o.transaction.txID:""}},1127:function(t,e,n){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,a=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,r=31536e6,u=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:r,months:u,days:a,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},p=function(t){return t instanceof v},d=function(t,e,n){return new v(t,n,e.$l)},f=function(t){return e.p(t)+"s"},h=function(t){return t<0},m=function(t){return h(t)?Math.ceil(t):Math.floor(t)},y=function(t){return Math.abs(t)},b=function(t,e){return t?h(t)?{negative:!0,format:""+y(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},v=function(){function h(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return d(t*l[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(c);if(i){var a=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=a[0],this.$d.months=a[1],this.$d.weeks=a[2],this.$d.days=a[3],this.$d.hours=a[4],this.$d.minutes=a[5],this.$d.seconds=a[6],this.calMilliseconds(),this}}return this}var y=h.prototype;return y.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*l[n]}),0)},y.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/r),t%=r,this.$d.months=m(t/u),t%=u,this.$d.days=m(t/a),t%=a,this.$d.hours=m(t/i),t%=i,this.$d.minutes=m(t/s),t%=s,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},y.toISOString=function(){var t=b(this.$d.years,"Y"),e=b(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=b(n,"D"),i=b(this.$d.hours,"H"),a=b(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var r=b(o,"S"),u=t.negative||e.negative||s.negative||i.negative||a.negative||r.negative,c=i.format||a.format||r.format?"T":"",l=(u?"-":"")+"P"+t.format+e.format+s.format+c+i.format+a.format+r.format;return"P"===l||"-P"===l?"P0D":l},y.toJSON=function(){return this.toISOString()},y.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(s[t])}))},y.as=function(t){return this.$ms/l[f(t)]},y.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/l[n]):this.$d[n],0===e?0:e},y.add=function(t,e,n){var s;return s=e?t*l[f(e)]:p(t)?t.$ms:d(t,this).$ms,d(this.$ms+s*(n?-1:1),this)},y.subtract=function(t,e){return this.add(t,e,!0)},y.locale=function(t){var e=this.clone();return e.$l=t,e},y.clone=function(){return d(this.$ms,this)},y.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},y.valueOf=function(){return this.asMilliseconds()},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},h}();return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return d(t,{$l:n},e)},i.isDuration=p;var a=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(t,e){return p(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)},s.prototype.subtract=function(t,e){return p(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},1168:function(t,e,n){"use strict";n.d(e,"b",(function(){return a}));var s=n(192),i=n(974);const a=async t=>{let{inputs:e,abiForInterface:n,shouldSigner:a=!1,...o}=t;if(!e||!e.length)return;const r=new s.b(n),u=[];e.forEach((t=>{const{value:e,functionFragment:n,params:i,abi:a}=t;if(a){const o=new s.b(a);t.CallInterface=o,u.push([e,o.encodeFunctionData(n,i||[])])}else t.CallInterface=r,u.push([e,r.encodeFunctionData(n,i||[])])}));const c=await Object(i.b)({shouldSigner:a,...o}),l=(await c.tryAggregate(!0,u).call({_isConstant:!0}))[0];return e.map(((t,e)=>{try{return t.CallInterface.decodeFunctionResult(t.functionFragment,l[e][1])}catch(n){return console.log("e",n),null}}))};e.a=async t=>{let{inputs:e,abiForInterface:n}=t;if(!e||!e.length)return;const a=new s.b(n),o=[];e.forEach((t=>{const{value:e,functionFragment:n,params:i,abi:r}=t;if(r){const a=new s.b(r);t.CallInterface=a,o.push([e,a.encodeFunctionData(n,i||[])])}else t.CallInterface=a,o.push([e,a.encodeFunctionData(n,i||[])])}));const r=await Object(i.a)(),u=(await r.tryAggregate(!0,o).call({_isConstant:!0}))[0];return e.map(((t,e)=>{try{return t.CallInterface.decodeFunctionResult(t.functionFragment,u[e][1])}catch(n){return console.log("e",n),null}}))}},1169:function(t,e,n){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(s,i,a){var o=i.prototype;a.utc=function(t){return new i({date:t,utc:!0,args:arguments})},o.utc=function(e){var n=a(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},o.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var r=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),r.call(this,t)};var u=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=o.utcOffset;o.utcOffset=function(s,i){var a=this.$utils().u;if(a(s))return this.$u?0:a(this.$offset)?c.call(this):this.$offset;if("string"==typeof s&&(s=function(t){void 0===t&&(t="");var s=t.match(e);if(!s)return null;var i=(""+s[0]).match(n)||["-",0,0],a=i[0],o=60*+i[1]+ +i[2];return 0===o?0:"+"===a?o:-o}(s),null===s))return this;var o=Math.abs(s)<=16?60*s:s,r=this;if(i)return r.$offset=o,r.$u=0===s,r;if(0!==s){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(r=this.local().add(o+u,t)).$offset=o,r.$x.$localOffset=u}else r=this.utc();return r};var l=o.format;o.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var p=o.toDate;o.toDate=function(t){return"s"===t&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():p.call(this)};var d=o.diff;o.diff=function(t,e,n){if(t&&this.$u===t.$u)return d.call(this,t,e,n);var s=this.local(),i=a(t).local();return d.call(s,i,e,n)}}}()},1174:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var s=n(22);const i=async t=>{try{var e,n,i;const a="btfs",o="test"===a||"qaTest"===a?t.tokenSymbol:t.tokenAddress,{data:r}=await Object(s.C)([o]);return(null===(e=r[o])||void 0===e||null===(n=e.quote)||void 0===n||null===(i=n.USD)||void 0===i?void 0:i.price)||""}catch(a){console.log("get token price error",a)}}},1247:function(t,e,n){"use strict";n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return O})),n.d(e,"a",(function(){return j}));var s=n(1168),i=n(1),a=n(18),o=n(0),r=n(1373),u=n(1374),c=n(8),l=n(4),p=n(930),d=n(1248),f=n(1126),h=n(1249);const{htxConfig:m}=l.a,y=(t,e,n,s)=>t.gt(s)?a.a.unStart:null!==t&&void 0!==t&&t.plus(e).gt(s)?a.a.active:null!==t&&void 0!==t&&t.plus(e).lt(s)&&!n?a.a.passed:null!==t&&void 0!==t&&t.plus(e).lt(s)&&n?a.a.excused:void 0,b=()=>{const[t,e]=Object(i.useState)({});return Object(i.useEffect)((()=>{const t=["voteStartTime","voteDuration"].map((t=>({value:Object(p.a)(m.htxVoteContract),functionFragment:t})));t.push({value:Object(p.a)(m.htxExchangeContract),functionFragment:"isActive",abi:u});const n=Object(d.a)(),i=Object(s.b)({inputs:t,abiForInterface:r});Promise.allSettled([i,n]).then((t=>{let[n,s]=t;if("fulfilled"===n.status){const[t,i,a]=n.value,r=y(Object(o.a)(t[0].toString()).times(1e3),Object(o.a)(i[0].toString()).times(1e3),a[0],s.value);e({htxVoteStatus:r,voteStartTime:1e3*t[0].toString(),voteEndTime:1e3*t[0].toString()+1e3*i[0].toString()})}})).catch((t=>{console.log("useHtxSunVoteSingleStatus error",t)}))}),[]),t},v=(t,e)=>{const[n,s]=Object(i.useState)();return Object(i.useEffect)((()=>{t&&null!==e&&void 0!==e&&e.token&&Object(c.Qb)(t,[null===e||void 0===e?void 0:e.token]).then((t=>{if("-"!==t){const n=t.div(new o.a(10).pow(null===e||void 0===e?void 0:e.decimal));s(n)}}))}),[t,e]),n},g=(t,e,n)=>{const[s,o]=Object(i.useState)(n),r=Object(i.useRef)(null);return Object(i.useEffect)((()=>(Object(d.a)().then((s=>{if(clearInterval(r.current),r.current=null,o(n),!t||n===a.a.excused||n===a.a.passed||!n)return;let i=s;const u=Object(h.a)(i,+t.toString(),+e.plus(t).toString());if(u<0)return;r.current=setInterval((()=>(n=>{i+=n;const s=y(t,e,!1,i);console.log("useVoteRealStatusBeforeExcused interval",s),s===a.a.passed&&(clearInterval(r.current),r.current=null),o(s)})(u)),u)})),()=>clearInterval(r.current))),[t,e,r,n]),s},O=t=>{const e=g(t.voteStartTime,t.voteDuration,t.voteStatus),n=(t=>{const[e,n]=Object(i.useState)(!1),s=Object(i.useRef)(null);return Object(i.useEffect)((()=>{if(t===a.a.passed){clearInterval(s.current);const t=async()=>{const{value:t}=await Object(f.g)();console.log("isActive interval",t),t&&(n(t),clearInterval(s.current))};s.current=setInterval(t,1e3),t()}return()=>clearInterval(s.current)}),[t]),e})(e);return o=n,(s=e)?s===a.a.passed&&o?a.a.excused:s:null;var s,o},j=(t,e)=>{const[n,a]=Object(i.useState)({});return Object(i.useEffect)((()=>{console.log("getHtxVoteInfo"),(async()=>{const t=["voteStartTime","voteDuration","voteYes","voteNo"].map((t=>({value:Object(p.a)(m.htxVoteContract),functionFragment:t})));t.push({value:Object(p.a)(m.htxExchangeContract),functionFragment:"isActive",abi:u});const e=Object(d.a)(),n=Object(s.b)({inputs:t,abiForInterface:r}),[i,a]=await Promise.allSettled([n,e]);if("fulfilled"===i.status){const[t,e,n,s,r]=i.value,u={voteStartTime:Object(o.a)(t[0].toString()).times(1e3),voteDuration:Object(o.a)(e[0].toString()).times(1e3),voteYes:Object(o.a)(n[0].toString()),voteNo:Object(o.a)(s[0].toString()),isActive:r[0],voteEndTime:Object(o.a)(t[0].toString()).plus(e[0].toString()).times(1e3)},c=y(u.voteStartTime,u.voteDuration,u.isActive,a.value);u.totalVote=u.voteYes.plus(u.voteNo);const l=u.totalVote.gt(0),p=l?u.voteYes.div(u.voteYes.plus(u.voteNo)).times(100).integerValue().toString():"0",d=l?(100-p).toString():"0";return{...u,yesRate:p,noRate:d,voteStatus:c}}})().then((t=>a((e=>({...e,...t}))))),(async t=>{if(!t)return{};const e=["votes","voteResult"].map((e=>({value:Object(p.a)(m.htxVoteContract),functionFragment:e,params:[Object(p.a)(t)]}))),n=await Object(s.b)({inputs:e,abiForInterface:r}),[i,a]=n;return{votes:Object(o.a)(i[0].toString()),voteResult:a[0]}})(t).then((t=>t.votes&&a((e=>({...e,...t})))))}),[e,t]),n}},1248:function(t,e,n){"use strict";var s=n(14),i=n.n(s),a=n(33);e.a=async()=>{let t=(new Date).getTime();const e=await async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const e="".concat(a.a.timeService);let{data:n}=await i.a.get(e,{params:t});return 0!==Number(n.code)?{success:!1}:{success:!0,time:Number(n.data.serverTimeStamp)}}catch(e){return console.log("getServiceTime: ",e),{success:!1}}}();return e.success&&(t=e.time),t}},1249:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return i}));const s=864e5,i=(t,e,n)=>t<e||t<n?1e3:-1},1250:function(t,e,n){},1251:function(t,e,n){"use strict";var s=n(1),i=n.n(s),a=n(95),o=n(11),r=n.n(o),u=n(875),c=n(0),l=(n(1379),n(3));class p extends i.a.Component{constructor(t){super(t),this.confirm=()=>{this.props.confirm&&this.props.confirm()},this.cancel=()=>{this.props.cancel&&this.props.cancel()},this.state={}}render(){const t=Object(a.a)(window.navigator).any?0:64;return Object(l.jsxs)(u.a,{footer:null,title:null,closable:!0,maskClosable:!1,open:this.props.visible,className:"unfinished-pop base-home-swapmodal "+this.props.clsName,onCancel:this.cancel,style:{marginLeft:Object(c.F)()+t},width:430,centered:!0,transitionName:"ant-zoom-sun",maskTransitionName:"ant-fade",children:[Object(l.jsxs)("div",{className:"title",children:[r.a.get("action.popTitle"),Object(l.jsx)("p",{children:r.a.get("action.popDesc")})]}),Object(l.jsxs)("div",{className:"btns",children:[Object(l.jsx)("button",{onClick:this.confirm,children:r.a.get("action.popQuitBtn")}),Object(l.jsx)("button",{onClick:this.cancel,children:r.a.get("action.popCancelBtn")})]})]})}}e.a=p},1252:function(t,e,n){"use strict";var s=n(1),i=n.n(s),a=n(11),o=n.n(a),r=n(1788),u=n(872),c=(n(1380),n(3));const l=Object(c.jsx)(u.a,{style:{fontSize:24},spin:!0});e.a=t=>{const{children:e}=t,n=i.a.Children.toArray(e).map(((t,e)=>{const{children:n,status:s,err:i,failed:a}=t.props;let u=n;return"error"===s&&(u=i||n),"pending"===s&&(u=o.a.get("action.doingAct")),"failed"===s&&(u=a||n),Object(c.jsxs)("div",{className:"al_item ".concat(s?"".concat(s):""),children:[Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)("span",{className:"al_number",children:e+1}),Object(c.jsx)("span",{className:"al_title".concat(s?" ".concat(s):""),children:u})]}),"pending"===s&&Object(c.jsx)(r.a,{indicator:l,className:"spiny"})]},t.key)}));return Object(c.jsx)("div",{className:"action-line",children:n})}},1253:function(t,e,n){"use strict";var s=n(1),i=n.n(s),a=n(303),o=n(3);e.a=t=>{let{left:e,placement:n="bottom",toolClass:s,tip:r,titleClass:u,children:c,tail:l}=t;return Object(o.jsx)(i.a.Fragment,{children:e?Object(o.jsxs)("div",{className:"flex between ai-center "+(s||""),children:[Object(o.jsx)(a.a,{title:r,overlayClassName:"tooltip",placement:n,color:"rgba(27,31,38,0.90)",children:Object(o.jsx)("span",{className:"ques",children:"?"})}),Object(o.jsx)("span",{className:u||"",children:c})]}):Object(o.jsxs)("div",{className:"flex "+(l?"between ":"")+(s||""),children:[Object(o.jsx)("span",{className:u||"",children:c}),Object(o.jsx)(a.a,{title:r,overlayClassName:"tooltip",placement:n,color:"rgba(27,31,38,0.90)",children:Object(o.jsx)("span",{className:"ques",children:"?"})})]})})}},1254:function(t,e,n){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAMAAAB4p3UoAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEJQTFRFAAAASFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlSFDlDTbkywAAABZ0Uk5TAIDuQFf/9AFYP9cvsf78ImriLWQuePVMmBkAAABCSURBVHicY2DADRiZmNFEWFhZMYXYcAmxIwAHKysnAwMXKyrgZuABkrwQABLg40cxSIBVUIhEAWFWVhFU14hyQQQA99wCt/58bxkAAAAASUVORK5CYII="},1255:function(t,e,n){"use strict";e.a=n.p+"static/media/TransactionSuccess.9be097c2.svg"},1373:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_baseToken","type":"address"},{"internalType":"uint256","name":"_voteDuration","type":"uint256"},{"internalType":"uint256","name":"_voteStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_voteYes","type":"bool"},{"indexed":false,"internalType":"uint256","name":"voteYes","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"voteNo","type":"uint256"}],"name":"Vote","type":"event"},{"inputs":[],"name":"BaseToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"_voteResult","type":"bool"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"voteDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voteNo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voteResult","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voteStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voteYes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},1374:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_tokenA","type":"address"},{"internalType":"address","name":"_tokenB","type":"address"},{"internalType":"uint256","name":"_exchangeRate","type":"uint256"},{"internalType":"uint256","name":"_feeRate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"forward","type":"bool"},{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountOut","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"Exchange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"ExchangeRateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"FeeRateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldOperator","type":"address"},{"indexed":false,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"newStatus","type":"bool"}],"name":"PoolStatusChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"inputs":[],"name":"BASEAMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TokenA","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TokenB","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exchangeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"_forward","type":"bool"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pausePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverTRC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTRX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setExchangeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"_forward","type":"bool"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},1379:function(t,e,n){},1380:function(t,e,n){},892:function(t,e,n){"use strict";var s=n(1),i=n.n(s),a=(n(991),n(3));class o extends i.a.Component{constructor(t){super(t),this.onClick=()=>{this.props.disabled||this.props.state||this.props.onClick&&this.props.onClick()},this.onLeftClick=()=>{this.props.lDisabled||this.props.lState||this.props.onLeftClick&&this.props.onLeftClick()},this.onMiddleClick=()=>{this.props.mDisabled||this.props.mState||this.props.onMiddleClick&&this.props.onMiddleClick()},this.onRightClick=()=>{this.props.rDisabled||this.props.rState||this.props.onRightClick&&this.props.onRightClick()};const{styleName:e=""}=t;this.state={}}render(){let t=null;switch(this.props.type){case"trisection":t=Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"trisection "+(this.props.lDisabled?"gray":this.props.lState?this.props.lState:"blue"),onClick:this.onLeftClick,children:this.props.lInfo}),Object(a.jsx)("button",{className:"trisection "+(this.props.mDisabled?"gray":this.props.mState?this.props.mState:"blue"),onClick:this.onMiddleClick,children:this.props.mInfo}),Object(a.jsx)("button",{className:"trisection "+(this.props.rDisabled?"gray":this.props.rState?this.props.rState:"blue"),onClick:this.onRightClick,children:this.props.rInfo})]});break;case"half":t=Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"half "+(this.props.lDisabled?"gray":this.props.lState?this.props.lState:"blue"),onClick:this.onLeftClick,children:this.props.lInfo}),Object(a.jsx)("button",{className:"half "+(this.props.rDisabled?"gray":this.props.rState?this.props.rState:"blue"),onClick:this.onRightClick,children:this.props.rInfo})]});break;default:t=Object(a.jsx)("button",{className:"single "+(this.props.disabled?"single-disabled":this.props.state?this.props.state:this.props.btnColor?this.props.btnColor:"blue"),onClick:this.onClick,children:this.props.info})}return Object(a.jsx)("div",{className:"sun-action-btns "+this.props.styleName||!1,children:t})}}e.a=o},977:function(t,e,n){},990:function(t,e,n){},991:function(t,e,n){}}]);