(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[42],{1967:function(e,t,a){"use strict";a.r(t);a(1),a(910),a(968),a(933);var c=a(976),n=a(3);t.default=()=>Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(c.a,{isSinglePage:!0})})},911:function(e,t,a){"use strict";a(925);var c=a(14),n=a.n(c),l=a(3);t.a=e=>Object(l.jsx)("div",{className:"tempalte-pageTab-nav",children:e.list.map((t=>Object(l.jsx)("div",{className:n()("tempalte-pageTab-nav-item",{"tempalte-pageTab-nav-active":e.activeKey===t.value}),onClick:()=>t.handler(t),children:t.label},t.value)))})},915:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var c=a(11),n=a.n(c);const l={row:{gutter:[{xs:8,sm:16,md:32},20]},colLeft:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:15}},colRight:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:9}}},s={1:{title:n.a.get("banner.title_deposit"),content:n.a.get("banner.desc_deposit"),tabTitle:n.a.get("header.deposit")},2:{title:n.a.get("banner.title_withdraw"),content:n.a.get("banner.desc_withdraw"),tabTitle:n.a.get("header.withdraw")},3:{title:n.a.get("banner.title_1"),content:n.a.get("banner.desc_1"),tabTitle:n.a.get("header.swap")}},o=[{label:s[1].tabTitle,value:"1"},{label:s[2].tabTitle,value:"2"},{label:s[3].tabTitle,value:"3"}]},925:function(e,t,a){},930:function(e,t,a){"use strict";var c=a(1),n=a(11),l=a.n(n),s=a(1422),o=a(168),i=a(946),r=a.n(i),j=a(3);const b=e=>{const{onCancel:t,open:a,value:c,confirmSlippageCheck:n,onChangeConfirmSlippageCheck:i,onOk:b,okText:d}=e;return Object(j.jsxs)(o.a,{title:l.a.get("deposit.high_slippage_title"),open:a,closable:!0,icon:null,onCancel:t,width:440,onOk:t,okText:l.a.get("cancel"),cancelText:d,cancelButtonProps:{disabled:!n,onClick:b},children:[Object(j.jsx)("div",{className:r.a.warning_img,children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(j.jsxs)("div",{className:r.a.box,children:[Object(j.jsx)("div",{children:l.a.get("deposit.high_tip1")}),Object(j.jsx)("div",{children:l.a.get("deposit.high_tip2",{value:c})})]}),Object(j.jsx)(s.a,{checked:n,onChange:i,children:Object(j.jsx)("span",{className:r.a.checkbox_info,children:l.a.get("deposit.confirm_slippage",{value:c})})})]})};b.defaultProps={};t.a=Object(c.memo)(b)},932:function(e,t,a){"use strict";a(1);var c=a(11),n=a.n(c),l=a(70),s=a(4),o=a(68),i=a(0),r=(a(933),a(955)),j=a(953),b=a(3);const{Fee:d,A:p,ADMIN_FEE:u,poolKeys:O,pools:h}=s.a;t.a=e=>{const t=Object(l.d)((()=>o.default.pool)),a=Object(l.d)((()=>o.default.network)),c=(e,t)=>{const a=Object(i.a)(e).times(t).div(1e18);return a.isNaN()?"--":Object(i.u)(a,2)},h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{let a=Object(i.a)(0);for(let c in e){const{userSwapBalance:n,priceKey:l}=e[c],s=t?t[l]:"--";a=a.plus(Object(i.a)(n).times(s))}return Object(i.u)(a)}catch(a){return console.log(a),"--"}},v=O.map((e=>t.poolData[e])).filter((e=>e)),g=t.volData?t.volData["3pvol24Hours"]:"",x="Old 3Pool ".concat(n.a.get("pool.pool2_contract")),f="3SUN ".concat(n.a.get("pool.token_contract2"));return Object(b.jsx)(l.a,{children:()=>Object(b.jsxs)("div",{children:[Object(b.jsx)(r.a,{poolTokens:v,totalSwapBalance:t.totalSwapBalance,adminFee:u,fee:d,virtualPrice:t.virtualPrice,dailyVol:g,poolContract:s.a.stablePool,poolName:x,lpTokenAddress:s.a.stableLp,lpTokenName:f,aValue:p}),a.isConnected&&Object(i.a)(t.sharePer).gt(0)&&Object(b.jsx)(j.a,{sharePer:t.sharePer,usdBalance:h(t.poolData,t.volData),avgUsdBalance:c(t.userLpBalance,t.virtualPrice),userTotalBalance:t.userTotalBalance,myPoolTokens:v})]})})}},946:function(e,t,a){e.exports={warning_img:"style_warning_img__1coIz",box:"style_box__mzd6y",checkbox_info:"style_checkbox_info__3Beyk"}},968:function(e,t,a){},976:function(e,t,a){"use strict";var c=a(1),n=a(11),l=a.n(n),s=a(70),o=a(1315),i=a(1317),r=a(1422),j=a(269),b=a(18),d=a(0),p=a(4),u=a(68),O=a(910),h=a(921),v=(a(929),a(932)),g=a(310),x=a(916),f=a(912),w=a(8),m=a(911),A=a(915),P=a(914),y=a(924),B=a(930),H=a(306),N=a(3);const{pools:L,poolKeys:k,ALL_FEE:z,defaultSlippage:F,stablePool:D}=p.a;t.a=e=>{const{pageList:t,tabPaneKey:a}=e,n=Object(s.d)((()=>u.default.network)),p=Object(s.d)((()=>u.default.system)),S=Object(s.d)((()=>u.default.pool)),[T,C]=Object(c.useState)((()=>{const e={};return k.map((t=>{e[t]=""})),e})()),[V,J]=Object(c.useState)(!1),[R,I]=Object(c.useState)(!0),[E,Z]=Object(c.useState)(!1),[U,Y]=Object(c.useState)("--"),[X,W]=Object(c.useState)("--"),[G,K]=Object(c.useState)(!1),[q,M]=Object(c.useState)(!1),[Q,_]=Object(c.useState)(!1);let $=null;Object(c.useEffect)((async()=>{await Promise.all([se(T),te()]),G&&ne(T)}),[T]);const ee=async t=>{try{const a=[];e.onSubmit&&e.onSubmit(),k.map((e=>{a.push({...S.poolData[e],inputValue:t[e]?Object(d.db)(t[e]).times(L[e].precision):Object(d.a)(0)})}));for(let e=0;e<a.length;e++){const{allowance:t=Object(d.a)(0),inputValue:c,token:n,symbol:l,approveStatus:s,id:o}=a[e];if(Object(d.a)(t).lt(c)&&!s){if(!await p.approveToken(n,D,{title:"deposit.approve_token",obj:{value:l},continuous:!0},[["pool/getBalanceInfo"]]))return;S.poolData[o].approveStatus=2}}const c=a.sort(((e,t)=>e.index-t.index)),n=c.length,l=c.map((e=>e.inputValue._toIntegerDown()._toHex()))||[];let s=null;if(S.lpTotalSupply.lte(0)&&await S.getUserLp(),S.lpTotalSupply.lte(0))s=Object(d.a)(1);else{const e=await Object(w.e)(l);if(!e.success)return;s=e.value}s=s.times(Object(d.a)(1).minus(Object(d.a)(z).times(n).div(Object(d.a)(4).times(n-1)).div(1e10)));const o=s.times(1-F)._toFixed(0,1),i={title:"actions.addLiq",obj:{detail:Object(d.A)(t)},forTransitionModal:{title:"banner.title_deposit",symbols:Object(d.A)(t)}};await p.addLiquidity(l,o,i,[["pool/updateCurrencyData"]])&&je()}catch(a){console.log("deposit err: ",a)}},te=async()=>{const e=[];for(let a in T){const{index:t,precision:c}=L[a],n=T[a].replace(/,/g,"");e[t]=Object(d.a)(n).isNaN()?0:Object(d.a)(n).times(c)._toIntegerDown()._toHex()}let t=null;if(S.lpTotalSupply.lte(0)&&await S.getUserLp(),S.lpTotalSupply.lte(0))t=Object(d.a)(1);else{const a=await Object(w.e)(e);if(!a.success)return;t=a.value.div(1e18)}W(t)},ae=async()=>{await Promise.all([S.getSwapBalance(),S.getVirtualPrice(),S.getVolData()])},ce=async()=>{await Promise.all([S.getUserLp(),S.getBalanceInfo()]);const e={};k.map((t=>{const{precision:a,balance:c,decimal:n}=S.poolData[t];e[t]=Object(d.c)(Object(d.a)(c).div(a)._toFixed(n,1))})),C(e),!G&&K(!0),$||($=setInterval((async()=>{ae(),S.getUserLp()}),n.defaultIntervalSec))};Object(c.useEffect)((async()=>(await Promise.all([ce(),ae()]),()=>{clearInterval($)})),[n.defaultAccount]);const ne=e=>{const t=Object.keys(e),a=t.length;if(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.keys(e),a=t.filter((t=>Object(d.db)(e[t]).eq(0)||!e[t]));return t.length===a.length}(e))return Z(l.a.get("error.e1")),!0;for(let c=0;c<a;c++){const a=t[c],n=e[a];if(!n&&(V||R))return Z(l.a.get("error.e1")),!0;const{balance:s,precision:o,symbol:i}=S.poolData[a];if(Object(d.a)(s).div(o).lt(Object(d.db)(n)))return Z(l.a.get("error.e2",{token:i})),!0}return Z(!1),!1},le=e=>{_(e.target.checked)},se=async e=>{const t=await S.calcInclPrice(e);Y(t)},oe=(e,t)=>{const a=t,c={};c[e]=Object(d.c)(String(a).replace(/,/g,""));const{precision:n,swapBalance:l,balance:s}=S.poolData[e],o=Object(d.db)(a).div(l).isNaN()?Object(d.a)(0):Object(d.db)(a).div(l);k.filter((t=>t!==e)).map((e=>{const{balance:t=Object(d.a)(0),swapBalance:a,precision:n,decimal:l}=S.poolData[e];c[e]=Object(d.c)(o.times(a)._toFixed(l,1)),t.div(n).lt(Object(d.db)(c[e]))&&(c[e]=Object(d.c)(t.div(n)._toFixed(l,1)))})),C(c)},ie=async e=>{try{const t=e.target.checked;J(t),R&&I(!t),t&&oe(k[0],T[k[0]])}catch(t){console.log(t)}},re=async e=>{try{const t=e.target.checked;I(t),V&&J(!t);const a={};k.map((e=>{const{balance:t,precision:c,decimal:n}=S.poolData[e];a[e]=Object(d.a)(t).isNaN()?0:Object(d.c)(t.div(c)._toFixed(n,1))})),C(a)}catch(t){console.log(t)}},je=()=>{_(!1),M(!1)},be=Object(H.b)();return Object(N.jsx)(s.a,{children:()=>Object(N.jsxs)(o.a,{...A.a.row,children:[Object(N.jsx)(i.a,{...A.a.colLeft,children:Object(N.jsxs)("div",{className:"pool-deposit",children:[Object(N.jsx)(m.a,{list:t,activeKey:a[0]}),e.isSinglePage?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(O.a,{routeName:"3pool/deposit",mountedActions:ce,instantActions:ae}),Object(N.jsx)(h.a,{title:"3pool "+l.a.get("banner.title_deposit"),desc:l.a.get("banner.desc_deposit")}),Object(N.jsx)(x.a,{})]}):null,n.isConnected?Object(N.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(N.jsxs)("div",{className:"add-liq",children:[Object(N.jsx)("fieldset",{className:"currencies",children:Object(N.jsx)("ul",{children:k.map((e=>{let{symbol:t="",balance:a="--",precision:c,decimal:n}=S.poolData[e];return a=Object(d.a)(a).div(c),Object(N.jsxs)("li",{children:[Object(N.jsxs)("div",{className:"cur-label",children:[Object(N.jsxs)("span",{className:"icon",children:[Object(N.jsx)("img",{src:b.b[e]?b.b[e]:j.default,alt:"",className:"token-logo"})," ",t]}),Object(N.jsx)("span",{className:"token-max",children:l.a.getHTML("deposit.token_max",{balance:Object(d.u)(a)})})]}),Object(N.jsx)(y.a,{onMaxClick:()=>{((e,t,a)=>{if(Object(d.a)(t).isNaN())return;const c=Object(d.a)(t)._toFixed(a,1);C({...T,[e]:Object(d.c)(c)}),V&&oe(e,c)})(e,a,n)},value:T[e],onChange:t=>((e,t)=>{R&&I(!1);const{decimal:a}=L[t],{valid:c,str:n}=Object(d.T)((""+e.target.value).replace(/,/g,""),a);c&&(C({...T,[t]:Object(d.c)(n)}),V&&oe(t,n))})(t,e)})]},e)}))})}),!Object(d.a)(U).isNaN()&&Object(d.Y)(U,!0),Object(N.jsxs)("div",{className:"deposit-check",children:[Object(N.jsx)(r.a,{checked:V,onChange:ie,children:l.a.get("deposit.ch1")}),Object(N.jsx)("br",{}),Object(N.jsx)(r.a,{checked:R,onChange:re,children:l.a.get("deposit.ch2")})]}),E?Object(N.jsx)(f.a,{styleName:"mt-40",type:"single",disabled:!0,info:l.a.get("deposit.action")}):Object(N.jsx)(f.a,{styleName:"mt-40",type:"single",info:be?l.a.get("not_available"):l.a.get("deposit.action"),onClick:()=>(async e=>{try{if(!E&&ne(e))return;if(E)return;if(Object(d.a)(U).abs().gt(10))return M(!0);await ee(e)}catch(t){console.log(t)}})(T),disabled:be}),E&&Object(N.jsx)("div",{className:"error-content mt-12",children:Object(N.jsx)("div",{className:"error-tip",children:E})}),Object(d.a)(X).gt(0)&&Object(N.jsxs)("div",{className:"error-content mt-12",children:[Object(N.jsxs)("div",{className:"error-tip",children:[l.a.getHTML("deposit.swap_detail",{value:Object(d.u)(X,2),symbol:"Old 3pool LP"})," "]}),Object(N.jsx)("div",{className:"error-tip",children:l.a.get("deposit.exchange_rate",{value:Object(d.u)(S.virtualPrice,6),symbol:"Old 3pool LP"})})]})]})}):Object(N.jsx)(P.a,{}),Object(N.jsx)(g.a,{}),Object(N.jsx)(B.a,{confirmSlippageCheck:Q,onChangeConfirmSlippageCheck:le,open:q,closable:!0,onCancel:je,onOk:()=>ee(T),value:Object(d.u)(Object(d.a)(U).abs(),3),okText:l.a.get("deposit.anyway")})]})}),Object(N.jsx)(i.a,{...A.a.colRight,children:Object(N.jsx)(v.a,{className:n.isConnected?null:"window-for-tabs-pane"})})]})})}}}]);