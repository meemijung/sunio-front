(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[26],{1e3:function(e,t,a){"use strict";var o=a(1),s=a(923),l=a(11),c=a.n(l),n=a.p+"static/media/table_no_data.fbf13c8c.png",i=a(1020),r=a(3);const d=()=>Object(r.jsx)(s.a,{img:n,emptyText:c.a.get("sunSwap.pool.base_noLiquidity_tip"),className:i.wallet_not_connect});t.a=Object(o.memo)(d)},1018:function(e,t,a){"use strict";var o=a(1),s=a(44),l=a(185),c=a(1019),n=a(11),i=a.n(n),r=a(3);const d=e=>{const{showMigrate:t,showAdd:a,showRemove:o,className:n,onMigrate:d,onAdd:u,onRemove:p,removeDisabled:b,addBtnText:j,removeBtnText:m}=e;return Object(r.jsxs)("div",{className:n,style:{textAlign:"right"},children:[t&&Object(r.jsx)(s.a,{theme:{token:{colorText:"#5A14E1",colorBgContainer:"#DECDFF",colorPrimary:"#5A14E1",colorPrimaryHover:"#5A14E1",controlHeight:30}},children:Object(r.jsx)(l.a,{style:{border:"none"},className:c.liquidity_btn_migrate+" pure-comp",onClick:()=>d&&d(),children:i.a.get("sunSwap.migrate.title")})}),a&&Object(r.jsx)(s.a,{theme:{token:{colorText:"#fff",colorBgContainer:"#8C51FF",colorPrimary:"#fff",colorPrimaryHover:"#fff",controlHeight:30}},children:Object(r.jsx)(l.a,{style:{border:"none"},className:"pure-comp",onClick:()=>u&&u(),children:j||i.a.get("sunSwap.pool.base_increase_link")})}),o&&Object(r.jsx)(s.a,{theme:{token:{colorText:"#C1A0FF",colorPrimaryHover:"#C1A0FF",controlHeight:30,colorTextDisabled:"rgba(255, 255, 255, 0.5)"}},children:Object(r.jsx)(l.a,{disabled:b,onClick:()=>p&&p(),className:c.liquidity_btn_remove+" pure-comp",type:"text",children:m||i.a.get("sunSwap.pool.base_remove_link")})})]})};t.a=Object(o.memo)(d)},1019:function(e,t,a){e.exports={liquidity_btn_remove:"style_liquidity_btn_remove__2AFYU",liquidity_btn_migrate:"style_liquidity_btn_migrate__UEXPP"}},1020:function(e,t,a){e.exports={wallet_not_connect:"style_wallet_not_connect__2Wm9c"}},1021:function(e,t,a){e.exports={"page-head":"style_page-head__2jUxO",link:"style_link__3d-MA","gradient-title":"style_gradient-title__2TZLQ",animateTitle:"style_animateTitle__21BPj","dim-content":"style_dim-content__2c9Ht",uppercase:"style_uppercase__3md0a","window-for-tabs-pane":"style_window-for-tabs-pane__WgyZJ","dark-btn":"style_dark-btn__3pp20","purple-btn":"style_purple-btn__2kJ2-","cur-input":"style_cur-input__2JT6n","max-btn":"style_max-btn__ZwIM5",table_hide_data:"style_table_hide_data__HHClD"}},1168:function(e,t,a){"use strict";var o=a(192),s=a(974);t.a=async e=>{let{inputs:t,abiForInterface:a}=e;if(!t||!t.length)return;const l=new o.b(a),c=[];t.forEach((e=>{const{value:t,functionFragment:a,params:s,abi:n}=e;if(n){const l=new o.b(n);e.CallInterface=l,c.push([t,l.encodeFunctionData(a,s||[])])}else e.CallInterface=l,c.push([t,l.encodeFunctionData(a,s||[])])}));const n=await Object(s.a)(),i=(await n.tryAggregate(!0,c).call({_isConstant:!0}))[0];return t.map(((e,t)=>{try{return e.CallInterface.decodeFunctionResult(e.functionFragment,i[t][1])}catch(a){return console.log("e",a),null}}))}},1383:function(e,t,a){},1384:function(e,t,a){},1385:function(e,t,a){},1386:function(e,t,a){},1387:function(e){e.exports=JSON.parse('[{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"totalSupply","stateMutability":"view","type":"function"}]')},1833:function(e,t,a){"use strict";a.r(t);var o=a(1),s=a.n(o),l=a(12),c=a(74),n=a(890),i=a(11),r=a.n(i),d=a(1788),u=a(1366),p=a(943),b=(a(1383),a(22)),j=a(0),m=a(103),g=a(17),v=a.n(g),f=a(944),O=a.n(f),x=a(901),h=a(53),S=a(95),y=a(921),A=a(894),N=a(1018),C=a(1e3),T=a(985),w=(a(1384),a(3));var D=e=>{var t;return Object(w.jsxs)("div",{className:"poolRow",children:[Object(w.jsx)("div",{className:"poolRow-icon",children:Object(w.jsx)("img",{src:e.poolIcon,alt:""})}),Object(w.jsx)("div",{className:"poolRow-value",children:e.fontName}),Object(w.jsx)("div",{className:"poolRow-label",children:null===(t=e.poolTokens)||void 0===t?void 0:t.join("+")})]})};var q=e=>{const{isConnected:t,hideClosedPositions:a,loading:o}=e;return a?Object(w.jsx)(T.a,{}):o?Object(w.jsx)("div",{className:"loading-content"}):t?Object(w.jsx)(C.a,{}):Object(w.jsx)(A.a,{})};const k=Object(S.a)(window.navigator).any,U=e=>{const{info:t="",totalSupply:a="",usdBalance:o=""}=e;let s="";return"name"===t?Object(w.jsx)(D,{...e}):(s="usd"===t?Object(j.v)(o,{dp:2,needDolar:!0,cutZero:!1,miniText:.01}):"share"===t?r.a.get("sunSwap.pool.base_share_text2",{value:e.rate?Object(j.u)(e.rate,{dp:2}):0}):a,Object(w.jsx)("div",{className:"poolRow-text",children:s}))};var J=e=>{const t=Object(h.g)(),{positions:a=[],isConnected:o,hideClosedPositions:s,loading:l}=e,c=e=>{e.routeName&&t.push("/".concat(e.routeName,"?type=desposit"))},n=e=>{e.routeName&&t.push("/".concat(e.routeName,"?type=withdraw"))};return Object(w.jsx)(y.a,{dataSource:s||l?[]:a,columns:[{title:r.a.get("sunSwap.liquidity_table.name"),dataIndex:"name",key:"name",fixed:!!k&&"left",width:k?"100px":"500px",render:(e,t)=>Object(w.jsx)(U,{info:"name",...t})},{title:r.a.get("sunSwap.liquidity_table.myshare"),dataIndex:"share",key:"share",fixed:!!k&&"left",width:k?"100px":"280px",render:(e,t)=>Object(w.jsx)(U,{info:"share",...t})},{title:r.a.get("sunSwap.liquidity_table.usd"),dataIndex:"usd",key:"usd",fixed:!!k&&"left",width:k?"100px":void 0,render:(e,t)=>{var a;return Object(w.jsxs)("div",{className:"flex",children:[Object(w.jsx)(U,{info:"usd",...t}),Object(w.jsx)(N.a,{showRemove:!0,showAdd:!0,removeDisabled:null===(a=Object(j.a)(null===t||void 0===t?void 0:t.liquidity))||void 0===a?void 0:a.eq(0),onAdd:()=>c(t),onRemove:()=>n(t),addBtnText:r.a.get("sunSwap.pool.base_increase_link2"),removeBtnText:r.a.get("sunSwap.pool.base_remove_link2")})]})}}],loading:{wrapperClassName:"sunCurve-loading",spinning:l&&!s,indicator:Object(w.jsx)("img",{style:{width:40,height:40,marginLeft:"-20px"},src:p.a,alt:"loading"})},locale:{emptyText:Object(w.jsx)(q,{isConnected:o,hideClosedPositions:s,loading:l})},scroll:{x:700}})},P=a(938),F=a(185);a(1385);var G=e=>{var t;const{record:a,goAdd:o,goRemove:s}=e,{usdBalance:l="",rate:c=""}=a;return Object(w.jsxs)("div",{className:"positionCard",children:[Object(w.jsxs)("div",{className:"card-top",children:[Object(w.jsxs)("div",{className:"card-header",children:[Object(w.jsx)("div",{className:"card-header-l",children:Object(w.jsx)(D,{...a})}),Object(w.jsxs)("div",{className:"card-header-r",children:[c?Object(j.u)(c,{dp:2}):0,"%"]})]}),Object(w.jsx)("div",{className:"card-body",children:Object(w.jsxs)("div",{className:"card-row",children:[Object(w.jsx)("div",{className:"card-row-label",children:r.a.get("sunSwap.liquidity_table.usd")}),Object(w.jsx)("div",{className:"card-row-value",children:"".concat(Object(j.v)(l,{dp:2,needDolar:!0,cutZero:!1,miniText:.01}))})]})})]}),Object(w.jsxs)("div",{className:"card-btm",children:[Object(w.jsx)(F.a,{type:"link",block:!0,onClick:()=>o(a),children:r.a.get("sunSwap.pool.base_increase_link2")}),Object(w.jsx)(F.a,{type:"link",block:!0,disabled:null===(t=Object(j.a)(null===a||void 0===a?void 0:a.liquidity))||void 0===t?void 0:t.eq(0),onClick:()=>s(a),children:r.a.get("sunSwap.pool.base_remove_link2")})]})]})};a(1386);var H=e=>{const t=Object(h.g)(),{positions:a=[],isConnected:o,hideClosedPositions:s,loading:l}=e,c=e=>{e.routeName&&t.push("/".concat(e.routeName,"?type=desposit"))},n=e=>{e.routeName&&t.push("/".concat(e.routeName,"?type=withdraw"))};return Object(w.jsx)("div",{className:"mobilePositionList",children:Object(w.jsx)(d.a,{wrapperClassName:"sunCurve-loading",spinning:l&&!s,indicator:Object(w.jsx)("img",{style:{width:40,height:40,marginLeft:"-20px"},src:p.a,alt:"loading"}),children:s||l||!o||!a||0===a.length?Object(w.jsx)("div",{className:"empty-wrap empty-content",children:Object(w.jsx)(q,{isConnected:o,hideClosedPositions:s,loading:l})}):Object(w.jsx)("div",{className:"card-wrap",children:a.map((e=>Object(w.jsx)(G,{record:e,goAdd:c,goRemove:n})))})})})},V=a(1168),L=a(1387),B=a(930),_=a(52);t.default=()=>{const[e,t]=Object(o.useState)(!1),[a,i]=Object(o.useState)(!1),[g,f]=Object(o.useState)([]),[h,S]=s.a.useState({}),[y,A]=Object(o.useState)(!1),[N,C]=Object(o.useState)([]),[T,D]=Object(o.useState)([]),[q,k]=Object(o.useState)(!1),[U,F]=Object(o.useState)([]),[G,E]=Object(o.useState)(!1),[R,I]=Object(o.useState)(0),[Z,z]=Object(o.useState)(0),[X,Q]=Object(o.useState)(!1),[M,W]=Object(o.useState)(!1),[K,Y]=Object(o.useState)(""),$=Object(c.d)((()=>m.a.home)),ee=Object(c.d)((()=>m.a.network));Object(o.useEffect)((()=>{ee.defaultAccount&&Y(ee.defaultAccount);const e=Object(l.p)((()=>ee.defaultAccount),((e,t,a)=>{console.log("value=====",e),Y(ee.defaultAccount)}));return()=>{e()}}),[]),Object(o.useEffect)((()=>{if(!K||y)return;W(!0),E(!1),Object(b.p)({version:"stable"}).then((e=>{let{data:t}=e;const a=t||[];F(a),W(!1),E(!0),a.length>0&&P.a.map(((e,t)=>{const o=a.filter((t=>t.pairAddress===e.poolAddress))[0],s=o&&o.lpPrice?o.lpPrice:0;return P.a[t].lpPrice=s,{...e,lpPrice:s}}))})).catch((e=>{F([]),W(!1),E(!0)}));const e=[];P.a.forEach((t=>{e.push({value:t.stableLp,functionFragment:"balanceOf",params:[Object(B.a)(K)]},{value:t.stableLp,functionFragment:"totalSupply"})})),Q(!0),Object(V.a)({inputs:e,abiForInterface:L}).then((e=>{P.a.forEach(((t,a)=>{const o=e[2*a+1],s=e[2*a],l=P.a[a].decimals,c=new j.a(o.toString()).div(Object(j.a)(10).pow(l)).toString(),n=new j.a(s.toString()).div(Object(j.a)(10).pow(l)).toString(),i=Object(j.a)(n).div(Object(j.a)(c)).times(100).toString(),r=Object(j.a)(t.lpPrice?t.lpPrice:1).times(Object(j.a)(n));t.totalSupply=c,t.balanceOf=n,t.rate=i,t.usdBalance=r}));const t=P.a.filter((e=>!Object(j.a)(e.balanceOf).eq(0))).length;z(t),D(P.a),k(!0),Q(!1)})).catch((e=>{console.log("err",e),z(0),k(!0),Q(!1)}))}),[y,K]);s.a.useEffect((()=>{(async()=>{const{allSwaps:e,miningPools:t,stableCoins:a,totalTvl:o}=await $.getAllTvlData();return{allSwaps:e,miningPools:t,stableCoins:a,totalTvl:o}})().then(S)}),[]),s.a.useEffect((()=>{const e=["stableCoins"],t=setInterval((()=>{var a;const o=document.querySelectorAll(".tvl-count-up");(null===(a=o[0])||void 0===a?void 0:a.innerHTML)==="$ "+Object(j.c)(Object(j.gb)(h[e[0]],0))&&clearInterval(t),o.forEach(((t,a)=>{t.innerHTML="$ "+Object(j.c)(Object(j.gb)(h[e[a]],0))}))}),1e3);return()=>{clearInterval(t)}}),[h]);const te=()=>{i(!a)},ae=()=>{let e=[];return g.length>0&&(e=a?g:g.slice(0,6)),e},oe=()=>{if(y)return Object(w.jsx)("div",{});{let e="--";return ee.isConnected&&(e=R||M||X||!G||!q?"".concat(M||X||!G||!q?"$ --":Object(j.v)(R,{dp:2,needDolar:!0,cutZero:!1,miniText:.01})):"$ 0"),Object(w.jsxs)("div",{className:"sunCurve-deposite-total",children:[Object(w.jsx)("span",{className:"sunCurve-deposite-total-label",children:r.a.get("farm.total_balance")}),Object(w.jsx)("span",{className:"sunCurve-deposite-total-num",children:e})]})}};return Object(o.useEffect)((()=>{t(!0),Object(b.j)({version:"stable"}).then((e=>{t(!1);const a=P.a.map((t=>{const a=e.filter((e=>e.pairAddress===t.poolAddress))[0];return{...t,...a}}));f(a||[])})).catch((e=>{t(!1),console.log("getPoolListVersion Error",e)}))}),[]),Object(o.useEffect)((()=>{if(!M&&!X&&G&&q)if(console.log("\u52a0\u8f7d\u5b8c\u6210\u2705"),T.length>0){P.a.forEach((e=>{const{balanceOf:t="",lpPrice:a=0}=e,o=Object(j.a)(a).times(Object(j.a)(t));e.usdBalanceString=o.toString(),e.usdBalance=o}));const e=P.a.filter((e=>!Object(j.a)(e.balanceOf).eq(0)));C(e);const t=P.a.reduce(((e,t)=>Object(j.a)(e).plus(t.usdBalance)),0);I(t)}else C([]),I(0)}),[M,X,G,q,U,T]),Object(w.jsx)(c.a,{children:()=>{return Object(w.jsxs)("div",{className:"sunCurve-wrap",children:[Object(w.jsx)(n.a,{routeName:"sunCurve"}),Object(w.jsx)("div",{className:"sunCurve-header-tvl",children:Object(w.jsx)(x.a,{title:(t=h.stableCoins,t&&Object(w.jsx)(O.a,{className:"tvl-count-up",end:Number(Object(j.gb)(t,0)),duration:1,prefix:"$ ",separator:","})),subTitle:r.a.get("sunCurve.total_locked"),isRevert:!0})}),Object(w.jsx)("div",{className:"sunCurve-main",children:Object(w.jsx)(d.a,{wrapperClassName:"sunCurve-loading",spinning:e,indicator:Object(w.jsx)("img",{style:{width:40,height:40,marginLeft:"-20px"},src:p.a,alt:"loading"}),children:(null===g||void 0===g?void 0:g.length)>0?Object(w.jsxs)("div",{className:"sunCurve-main-inner",children:[Object(w.jsxs)("div",{className:"sunCurve-thead",children:[Object(w.jsx)("div",{className:"sunCurve-thead-l",children:r.a.get("sunCurve.curveName")}),Object(w.jsx)("div",{className:"sunCurve-thead-c",children:r.a.get("sunCurve.volume24")}),Object(w.jsx)("div",{className:"sunCurve-thead-r",children:r.a.get("sunCurve.total_locked")})]}),Object(w.jsx)("ul",{className:"sunCurve-list",children:ae().map(((e,t)=>{var a;return Object(w.jsxs)("li",{onClick:()=>(e=>{if(!e.routeName)return;e.category&&Object(_.a)({action:Object(_.d)(e.category),event_category:e.category});const t=window.location.origin+window.location.pathname,a=window.localStorage.getItem("lang")||"zh-CN";window.location.href=t+"?lang=".concat(a,"#/").concat(e.routeName)})(e),children:[Object(w.jsxs)("div",{className:"sunCurve-row sunCurve-row-l",children:[Object(w.jsx)("div",{className:"pool-icon",children:Object(w.jsx)("img",{src:e.poolIcon,alt:""})}),Object(w.jsx)("div",{className:"sunCurve-value",children:e.fontName}),Object(w.jsx)("div",{className:"sunCurve-label",children:null===(a=e.poolTokens)||void 0===a?void 0:a.join("+")})]}),Object(w.jsxs)("div",{className:"sunCurve-row sunCurve-row-c",children:[Object(w.jsx)("div",{className:"sunCurve-label",children:r.a.get("sunCurve.volume24")}),Object(w.jsx)("div",{className:"sunCurve-value",children:Object(j.U)(e.volume24h)})]}),Object(w.jsxs)("div",{className:"sunCurve-row sunCurve-row-r",children:[Object(w.jsx)("div",{className:"sunCurve-label",children:r.a.get("sunCurve.tvl")}),Object(w.jsx)("div",{className:"sunCurve-value",children:Object(j.U)(e.liquidity)})]})]},t)}))}),Object(w.jsxs)("div",{className:v()("more-btn",{"more-btn-active":a}),onClick:te,children:[Object(w.jsx)("span",{children:a?r.a.get("sunCurve.slideup"):r.a.get("sunCurve.more")}),Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWBAMAAAAyb6E1AAAAAXNSR0IArs4c6QAAACFQTFRFAAAA////////////////////////////////////////zyHr+QAAAAp0Uk5TAAcIMT9VZG96usZEEpYAAABTSURBVAjXY2AgEzhDKBMGBtZVDSAWx6oABrZVK0DMrlUJDIyzQMIcq1YKMDBogoS7Vk0CSjEBhYGCCiBlQGGIIFgYKggShgqChGGCDAzqRQxUAQC/xxlOEYMTugAAAABJRU5ErkJggg==",alt:""})]})]}):Object(w.jsx)("div",{className:"list-holder"})})}),Object(w.jsxs)("div",{className:"sunCurve-deposite",children:[Object(w.jsxs)("div",{className:"sunCurve-deposite-header",children:[Object(w.jsxs)("div",{className:"sunCurve-deposite-l",children:[r.a.get("stakes.my_position1"),ee.isConnected&&K?"\uff08".concat(Z,"\uff09"):"",Object(w.jsx)(u.a,{className:"sunCurve-deposite-setting",defaultChecked:!y,onClick:()=>A(!y)})]}),oe()]}),Object(w.jsx)("div",{className:"sunCurve-deposite-list pc-wrap",children:Object(w.jsx)(J,{isConnected:ee.isConnected,hideClosedPositions:y,positions:M||X?[]:N,loading:M||X})}),Object(w.jsx)("div",{className:"sunCurve-deposite-list mobile-wrap",children:Object(w.jsx)(H,{isConnected:ee.isConnected,hideClosedPositions:y,positions:M||X?[]:N,loading:M||X})})]})]});var t}})}},894:function(e,t,a){"use strict";var o=a(1),s=a(923),l=a(11),c=a.n(l),n=a(74),i=a(103),r=a(946),d=a(993),u=a(3);const p=()=>{const e=Object(n.d)((()=>i.a.network));return Object(u.jsx)(s.a,{img:r.a,emptyText:c.a.get("buysell.error_msg_3"),btnText:c.a.get("header.connect_wallet"),onClick:()=>e.setData({loginModalVisible:!0,loginModalStep:1}),className:d.wallet_not_connect})};t.a=Object(o.memo)(p)},901:function(e,t,a){"use strict";var o=a(1),s=a(17),l=a.n(s),c=a(905),n=a(3);const i=e=>{const{title:t,subTitle:a,isRevert:o}=e,s="string"===typeof t;return Object(n.jsxs)("div",{className:c.page_title_wrap,children:[o&&a&&Object(n.jsx)("div",{className:c.page_title_sub,children:a}),t&&Object(n.jsx)("div",{className:l()({[c.page_title]:!0,[c.page_title_revert]:o,[c.page_title_ele]:!s}),children:s?t.split("").map(((e,t)=>Object(n.jsx)("span",{className:c.page_title_ele,children:e},t))):t}),a&&!o&&Object(n.jsx)("div",{className:c.page_title_sub,children:a})]})};t.a=Object(o.memo)(i)},905:function(e,t,a){e.exports={page_title:"style_page_title__dfZPh",page_title_wrap:"style_page_title_wrap__7dtV_",page_title_ele:"style_page_title_ele__Tktf1",page_title_sub:"style_page_title_sub__1IUsF",page_title_revert:"style_page_title_revert__18HMS"}},921:function(e,t,a){"use strict";var o=a(44),s=a(1818),l=a(1),c=a(95),n=a(951),i=a(952),r=(a(948),a(3));const d=Object(c.a)(window.navigator).any,u=Object(l.memo)((e=>{const{className:t="",pagination:a,tableTheme:l={},...c}=e;return Object(r.jsx)(o.a,{theme:{components:{Spin:{colorPrimary:"#9482f8",colorBgContainer:"#251F32",controlHeightLG:60},Table:{colorPrimary:"#9482f8",colorFillAlter:"rgba(37,31,50,.3)",colorFillSecondary:"rgba(37,31,50,.3)",colorFillContent:"rgba(37,31,50,.3)",colorBgContainer:"#362D4A",colorBorderSecondary:"rgba(255, 255, 255, .1)",colorText:"#fff",colorTextHeading:"#fff",colorIcon:"#bfbfbf",colorIconHover:"#bfbfbf",padding:d?10:20,borderRadiusLG:20,borderRadius:20,...l},Pagination:{borderRadiusLG:5,borderRadius:5,itemSize:24}}},children:Object(r.jsx)(s.a,{className:t?t+" pure-comp dark-table-container":"pure-comp dark-table-container",pagination:!!a&&{position:["bottomCenter"],className:"pure-comp",showSizeChanger:!1,itemRender:(e,t,a)=>"prev"===t?Object(r.jsx)("img",{alt:"pre",src:n.a}):"next"===t?Object(r.jsx)("img",{alt:"next",src:i.a}):a,...a},...c})})}));t.a=u},938:function(e,t,a){"use strict";var o=a(445),s=a(443),l=a(442),c=a(444),n=a(450),i=a(446),r=a(452),d=a(454),u=a(448),p=a(455),b=a(451),j=a(453),m=a(449),g=a(447),v=a(52);const f=[{poolAddress:"TS8d3ZrSxiGZkqhJqMzFKHEC1pjaowFMBJ",poolIcon:p.default,fontName:"2pool",poolTokens:["TUSD","USDT"],routeName:"usdt_tusd",stableLp:"TW1UvgYQZdZmHaT3UeWiJ9owNw2xffVnA5",decimals:18,category:v.j.liquidity_usdttusd},{poolAddress:"TLssvTsY4YZeDPwemQvUzLdoqhFCbVxDGo",poolIcon:b.default,fontName:"USDD Pool",poolTokens:["USDD","TUSD","USDT"],routeName:"usdd_usdt_tusd_2pool",stableLp:"THiz24TyXvyUXRjZHW3gW2PMBRzfNLuJdT",decimals:18,category:v.j.liquidity_oldusdc},{poolAddress:"TKBqNLyGJRQbpuMhaT49qG7adcxxmFaVxd",poolIcon:j.default,fontName:"USDJ Pool",poolTokens:["USDJ","TUSD","USDT"],routeName:"usdj_usdt_tusd_2pool",stableLp:"TM9UdzBnK7iETZie4H9moTojDXSBfqi12d",decimals:18,category:v.j.liquidity_oldusdc},{poolAddress:"TE7SB1v9vRbYRe5aJMWQWp9yfE2k9hnn3s",poolIcon:m.default,fontName:"USDC Pool",poolTokens:["USDC","TUSD","USDT"],routeName:"usdc_usdt_tusd_2pool",stableLp:"THPuVJt3oa67Erk6Akg5pjEaSN91FExqMT",decimals:18,category:v.j.liquidity_oldusdc},{poolAddress:"TExeaZuD5YPi747PN5yEwk3Ro9eT2jJfB6",poolIcon:n.default,fontName:"USDC 2pool",poolTokens:["USDC","USDT"],routeName:"usdc_2pool",stableLp:"TYEsj7fELLVwj85ZUMge227Af7iySk11zg",decimals:18,category:v.j.liquidity_usdc2pool},{poolAddress:"TNTfaTpkdd4AQDeqr8SGG7tgdkdjdhbP5c",poolIcon:l.default,fontName:"USDD 2pool",poolTokens:["USDD","USDT"],routeName:"usdd_2pool",stableLp:"TYKoYhjEpqazFLyQzn6BCigLnDL9c8Nhz8",decimals:18,category:v.j.liquidity_2pool},{poolAddress:"TNU9LfegfzLcJo2ZxTQXDYE2uh7JuxZfnP",poolIcon:r.default,fontName:"Old USDD Pool",poolTokens:["USDD","USDC","USDT"],routeName:"usdd_usd_2pool",stableLp:"TXAqvHp8qojeKDkKagGhmB3e9VyEH9qjMj",decimals:18,category:v.j.liquidity_usdd2pool},{poolAddress:"TLZacPrPKfrfbsimu5dDdrgMT16m9cnpL9",poolIcon:u.default,fontName:"Old TUSD Pool",poolTokens:["TUSD","USDC","USDT"],routeName:"tusd_2pool",stableLp:"TVjLZhmYbJ9zJiDL4ti2nWC44149J9toYa",decimals:18,category:v.j.liquidity_tusd2pool},{poolAddress:"TSbahrnT5sJwjCzN6LPa1pE5d9pdVwRQ1E",poolIcon:d.default,fontName:"Old USDJ Pool",poolTokens:["USDJ","USDC","USDT"],routeName:"usdj_2pool",stableLp:"TJxb5j38qc6PexwodjisvRvR7Uo6fJoq9A",decimals:18,category:v.j.liquidity_usdj2pool},{poolAddress:"TGG5AWMNjssDtLgsHg2QSN8CTwVTCHQMF6",poolIcon:i.default,fontName:"Old BUSD Pool",poolTokens:["BUSD","USDC","USDT"],routeName:"busd_2pool",stableLp:"TK5DFyaudUAjKP9iFscf4eNnjUDHSe9umC",decimals:18,category:v.j.liquidity_busd2pool},{poolAddress:"TKcEU8ekq2ZoFzLSGFYCUY6aocJBX9X31b",poolIcon:o.default,fontName:"Old 3pool",poolTokens:["USDJ","TUSD","USDT"],routeName:"3pool",stableLp:"TD3et9gS2pYz46ZC2mkCfYcKQGNwrnBLef",decimals:18,category:v.j.liquidity_old3pool},{poolAddress:"TQx6CdLHqjwVmJ45ecRzodKfVumAsdoRXH",poolIcon:g.default,fontName:"Old USDC",poolTokens:["USDC","USDJ","TUSD","USDT"],routeName:"usdc",stableLp:"TQ4i5sdj1VGYGFcivyqFW9NXqzpaP6X8BA",decimals:18,category:v.j.liquidity_oldusdc},{poolAddress:"TKVsYedAY23WFchBniU7kcx1ybJnmRSbGt",poolIcon:c.default,fontName:"3pool",poolTokens:["USDD","TUSD","USDT"],routeName:"usdd_3pool",stableLp:"TA1TVZdERDRDGi9QXNdLVfPxbymmi8xFyc",decimals:18,category:v.j.liquidity_3pool},{poolAddress:"TAUGwRhmCP518Bm4VBqv7hDun9fg8kYjC4",poolIcon:s.default,fontName:"Old 2pool",poolTokens:["USDD","USDT"],routeName:"usdd_old_2pool",stableLp:"TXcJ6pCEGKeLEYXrVnLhqpCVuKfV6wgsfC",decimals:18,category:v.j.liquidity_old2pool}];p.default,v.j.liquidity_usdttusd,b.default,v.j.liquidity_oldusdc,j.default,v.j.liquidity_oldusdc,m.default,v.j.liquidity_oldusdc,n.default,v.j.liquidity_usdc2pool,l.default,v.j.liquidity_2pool,r.default,v.j.liquidity_usdd2pool,u.default,v.j.liquidity_tusd2pool,d.default,v.j.liquidity_usdj2pool,i.default,v.j.liquidity_busd2pool,o.default,v.j.liquidity_old3pool,g.default,v.j.liquidity_oldusdc,c.default,v.j.liquidity_3pool,s.default,v.j.liquidity_old2pool;let O;O=f,t.a=O},946:function(e,t,a){"use strict";t.a=a.p+"static/media/big_connect_wallet.8e467f71.svg"},948:function(e,t,a){},985:function(e,t,a){"use strict";var o=a(1),s=a(923),l=a(11),c=a.n(l),n=a(1021),i=a(3);const r=()=>Object(i.jsx)(s.a,{img:"data:image/png;base64,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",emptyText:Object(i.jsx)("span",{style:{margin:"0 10px",display:"inline-block",wordBreak:"break-word"},children:c.a.getHTML("sunSwap.pool.base_hideLiquidity_tip")}),className:n.table_hide_data});t.a=Object(o.memo)(r)},993:function(e,t,a){e.exports={wallet_not_connect:"style_wallet_not_connect__2Qekr"}}}]);