(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[45],{1049:function(e,t,a){"use strict";a.p},1148:function(e,t,a){"use strict";var n=a(63),s=a(1),c=a(11),l=a.n(c),o=(a(973),a(1049),a(4)),i=a(61),r=a(0),u=(a(1010),a(3));var p=a(995),d=a(993);const{usdcInfo:b,usdtPools:j,currencyKeys:O}=o.default,{Fee:g,A:m,ADMIN_FEE:_}=b;t.a=e=>{const t=Object(n.d)((()=>i.default.network)),a=Object(n.d)((()=>i.default.usdcPool)),c=Object(n.d)((()=>i.default.thrSunPool)),[b,j]=Object(s.useState)(a);Object(s.useEffect)((()=>{j("sun3"===e.type?c:a)}));const w=(e,t)=>{const a=Object(r.a)(e).times(t).div(1e18);return a.isNaN()?"--":Object(r.u)(a,2)},h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{let a=Object(r.a)(0);for(let n in e){const{userSwapBalance:s,priceKey:c}=e[n],l=t?t[c]:"--";a=a.plus(Object(r.a)(s).times(l))}return Object(r.u)(a)}catch(a){return console.log(a),"--"}},v=window.localStorage.getItem("lang"),f=O.map((e=>b.currencyData[e])).filter((e=>e)),y="".concat("en-US"===v?"USDC Old":"Old USDC"," ").concat(l.a.get("pool.pool_contract")),x="USDC3SUN ".concat(l.a.get("pool.token_contract2")),S=b.volData?b.volData.usdcpvol24Hours:"";return Object(u.jsx)(n.a,{children:()=>Object(u.jsxs)("div",{children:[Object(u.jsx)(p.a,{curveLPSymbol:"sun3",poolTokens:f,totalSwapBalance:b.totalSwapBalance,adminFee:_,fee:g,virtualPrice:b.virtualPrice,dailyVol:S,poolContract:o.default.usdcContracts.usdcSwap,poolName:y,lpTokenAddress:o.default.tokens.thrsunlp.token,lpTokenName:x,aValue:m}),t.isConnected&&Object(r.a)(b.sharePer).gt(0)&&Object(u.jsx)(d.a,{sharePer:b.sharePer,usdBalance:h(b.poolData,b.volData),avgUsdBalance:w(b.swapBalanceInfo.userUsdcLpBalance,b.virtualPrice),userTotalBalance:b.swapBalanceInfo.userTotalBalance,myPoolTokens:f})]})})}},1409:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(11),c=a.n(s),l=a(1405),o=a(1407),i=a(276),r=a(931),u=a(273),p=a(63),d=a(61),b=a(18),j=a(4),O=a(8),g=a(0),m=a(1148),_=a(948),w=a(959),h=(a(967),a(954)),v=a(955),f=a(950),y=a(956),x=a(953),S=a(949),L=a(952),U=a(963),C=a(3);const{usdcPools:B,thrSunPools:T,usdcPoolKeys:k,thrSunPoolKeys:I,usdcContracts:N,usdcInfo:D,tokens:P}=j.default,{ALL_FEE:A}=D,H=P.thrsunlp.token,E="3SUN LP",F=P.thrsunlp.symbol,{USDCDepositer:M,usdcSwap:V}=N,q="---",K="CUSTOM",z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t={};return k.map((a=>{t[a]=e})),t};t.default=e=>{const{tabPaneKey:t,pageList:a}=e,[s=z("--"),j]=Object(n.useState)(),[N,D]=Object(n.useState)("100.00"),[P,J]=Object(n.useState)(.2),[Y,G]=Object(n.useState)(""),[Q,R]=Object(n.useState)(!0),[Z,X]=Object(n.useState)(!1),[W,$]=Object(n.useState)("--"),[ee,te]=Object(n.useState)(!1),[ae=z(!1),ne]=Object(n.useState)(),[se,ce]=Object(n.useState)(!1),[le,oe]=Object(n.useState)(!1),[ie,re]=Object(n.useState)(k),[ue,pe]=Object(n.useState)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t={};return I.map((a=>{t[a]=e})),t}("--")),de=Object(p.d)((()=>d.default.system)),be=Object(p.d)((()=>d.default.usdcPool)),je=Object(p.d)((()=>d.default.network)),Oe=Object(p.d)((()=>d.default.thrSunPool));let ge=null,me=null;Object(n.useEffect)((async()=>{le&&_e()}),[s,N,P,Y,ae]),Object(n.useEffect)((()=>{Ne(s,Z)}),[s]),Object(n.useEffect)((()=>{De(ue,Z)}),[ue]);const _e=()=>N!==q&&Object(g.hb)(N).gt(100)?(ce(c.a.get("error.e3")),!0):(()=>{const e=ee?ue:s;for(let t in e)if(Object(g.hb)(e[t]).gt(0)||"--"===e[t])return!1;return!0})()?(ce(c.a.get("error.e4")),!0):P===K&&(fe()||N===q)&&(Object(g.a)(Y).lt(.1)||Object(g.a)(Y).gt(50)||Object(g.a)(Y).isNaN())?(ce(c.a.get("error.e5")),!0):(ce(!1),!1),we=async(e,t)=>{try{const a=e.length,n=e.map((e=>e.inputValue.isNaN()?0:e.inputValue._toIntegerDown()._toHex()))||[];if(ee){const e=await Object(O.o)(n,!1);if(!e.success)return;let s=e.value.times(Object(g.a)(1).plus(Object(g.a)(A).times(a).div(4*(a-1)).div(1e10)));const c=Object(g.a)(100).plus(t).div(100);if(s=s.times(c)._toIntegerDown(),Object(g.a)(s).gt(be.swapBalanceInfo.userUsdcLpBalance)&&(s=be.swapBalanceInfo.userUsdcLpBalance),Q&&Object(g.a)(be.userLpAllowance).lt(s)){if(!await de.approveToken(H,V,{title:"deposit.approve_token",obj:{value:E},continuous:!0},[["thrSunPool/getUserLp"]]))return;R(!1)}const l=s._toHex(),o={title:"actions.remove",obj:{detail:Object(g.C)(ue,"sun3")},forTransitionModal:{title:"banner.title_withdraw",symbols:Object(g.C)(ue,"sun3")}};await de.removeLiqImBalanceSUN3(n,l,o,[["thrSunPool/updateCurrencyData"]]);return}const c=await Object(O.l)(n,!1);if(!c.success)return;let l=c.value.times(Object(g.a)(1).plus(Object(g.a)(A).times(a).div(4*(a-1)).div(1e10)));const o=Object(g.a)(100).plus(t).div(100);if(l=l.times(o)._toIntegerDown(),Object(g.a)(l).gt(be.swapBalanceInfo.userUsdcLpBalance)&&(l=be.swapBalanceInfo.userUsdcLpBalance),Q&&Object(g.a)(be.userLpAllowance).lt(l)){if(!await de.approveToken(H,M,{title:"deposit.approve_token",obj:{value:F},continuous:!0},[["usdcPool/getUserLp"]]))return;R(!1)}const i=l._toHex(),r={title:"actions.remove",obj:{detail:Object(g.C)(s,"usdc")},forTransitionModal:{title:"banner.title_withdraw",symbols:Object(g.C)(s,"usdc")}};await de.removeLiqImBalanceUSDC(n,i,r,[["usdcPool/updateCurrencyData"]])}catch(a){console.log(a)}},he=async(e,t)=>{try{if(ee){const a=await Le(t,e,N);if(!a)return;const{userLpBalance:n,userLpAllowanceUsdcSwap:s,minAmounts:c}=a,l=Object(g.hb)(N).div(100).times(n)._toIntegerDown();if(Q&&Object(g.a)(s).lt(l._toIntegerDown())){if(!await de.approveToken(H,V,{title:"deposit.approve_token",obj:{value:E},continuous:!0},[["thrSunPool/getUserLp"]]))return;R(!1)}const o={title:"actions.remove",obj:{detail:Object(g.C)(ue,"sun3")},forTransitionModal:{title:"banner.title_withdraw",symbols:Object(g.C)(ue,"sun3")}},i=l._toHex();await de.removeLiquiditySUN3(i,c,o,[["thrSunPool/updateCurrencyData"]])}else{const a=await Se(t,e,N);if(!a)return;const{userLpBalance:n,userLpAllowance:c,minAmounts:l}=a,o=Object(g.hb)(N).div(100).times(n)._toIntegerDown();if(Q&&Object(g.a)(c).lt(o._toIntegerDown())){if(!await de.approveToken(H,M,{title:"deposit.approve_token",obj:{value:F},continuous:!0},[["usdcPool/getUserLp"]]))return;R(!1)}const i={title:"actions.remove",obj:{detail:Object(g.C)(s,"usdc")},forTransitionModal:{title:"banner.title_withdraw",symbols:Object(g.C)(s,"usdc")}},r=o._toHex();await de.removeLiquidityUSDC(r,l,i,[["usdcPool/updateCurrencyData"]])}}catch(a){console.log(a)}},ve=async(e,t,a)=>{try{if(ee){const n=await Object(O.vb)(t,e);if(!n.success)return;const{balances3pool:s,balancesUsdc:c,sun3LpBalance:l,sun3TotalSupply:o,usdcLpTotalSupply:i,userLpAllowance:r,userUsdcLpBalance:u}=n,p=(xe({balances3pool:s,balancesUsdc:c,sun3LpBalance:l,sun3TotalSupply:o,usdcLpTotalSupply:i,userLpAllowance:r,userUsdcLpBalance:u,coins:e}),Object(g.hb)(N).div(100).times(u)._toIntegerDown());if(Q&&Object(g.a)(r).lt(p._toIntegerDown())){if(!await de.approveToken(H,V,{title:"deposit.approve_token",obj:{value:E},continuous:!0},[["thrSunPool/getUserLp"]]))return;R(!1)}const d=p._toHex();let b=!1;for(let e in ae)!0===ae[e]&&(b=T[e].index);const j=await Object(O.t)(d,b);if(!j.success)return;const m=j.value,_=e.length,w=m.times(Object(g.a)(1).minus(Object(g.a)(A).times(_).div(4*(_-1)).div(1e10))),h=Object(g.a)(100).div(Object(g.a)(100).plus(a)),v=w.times(h)._toIntegerDown()._toHex(),f={title:"actions.remove",obj:{detail:Object(g.C)(ue,"sun3")},forTransitionModal:{title:"banner.title_withdraw",symbols:Object(g.C)(ue,"sun3")}};await de.removeLiqOneCoinSUN3(d,b,v,f,[["thrSunPool/updateCurrencyData"]]);return}const n=await Object(O.vb)(t,e);if(!n.success)return;const{balances3pool:c,balancesUsdc:l,sun3LpBalance:o,sun3TotalSupply:i,usdcLpTotalSupply:r,userLpAllowance:u,userUsdcLpBalance:p}=n,d=(ye({balances3pool:c,balancesUsdc:l,sun3LpBalance:o,sun3TotalSupply:i,usdcLpTotalSupply:r,userLpAllowance:u,userUsdcLpBalance:p,coins:e}),Object(g.hb)(N).div(100).times(p)._toIntegerDown());if(Q&&Object(g.a)(u).lt(d._toIntegerDown())){if(!await de.approveToken(H,M,{title:"deposit.approve_token",obj:{value:F},continuous:!0},[["usdcPool/getUserLp"]]))return;R(!1)}const b=d._toHex();let j=!1;for(let e in ae)!0===ae[e]&&(j=B[e].index);const m=await Object(O.v)(b,j);if(!m.success)return;const _=m.value,w=e.length,h=_.times(Object(g.a)(1).minus(Object(g.a)(A).times(w).div(4*(w-1)).div(1e10))),v=Object(g.a)(100).div(Object(g.a)(100).plus(a)),f=h.times(v)._toIntegerDown()._toHex(),y={title:"actions.remove",obj:{detail:Object(g.C)(s,"usdc")},forTransitionModal:{title:"banner.title_withdraw",symbols:Object(g.C)(s,"usdc")}};await de.removeLiqOneCoinUSDC(b,j,f,y,[["usdcPool/updateCurrencyData"]])}catch(n){console.log(n)}},fe=()=>{for(let e in ae)if(ae[e])return e;return!1},ye=function(){let{balances3pool:e,balancesUsdc:t,sun3LpBalance:a,sun3TotalSupply:n,usdcLpTotalSupply:s,userLpAllowance:c,userUsdcLpBalance:l,coins:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const c=[],i=Object(g.a)(l).div(s),r=Object(g.a)(i).times(t),u=Object(g.a)(i).times(a).div(n);return o.map((t=>{const{index:a,precision:n,symbol:s,id:l}=t;let o=Object(g.a)(0);o="usdc"===l?r.div(n):u.times(e[l]).div(n),c[a]=o||Object(g.a)(0)})),c}catch(i){return console.log(i),[]}},xe=function(){let{balances3pool:e,balancesUsdc:t,sun3LpBalance:a,sun3TotalSupply:n,usdcLpTotalSupply:s,userLpAllowance:c,userUsdcLpBalance:l,coins:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const e=[],n=Object(g.a)(l).div(s),c=Object(g.a)(n).times(t),i=Object(g.a)(n).times(a);return o.map((t=>{const{index:a,precision:n,symbol:s,id:l}=t;let o=Object(g.a)(0);o="usdc"===l?c.div(n):i.div(n),e[a]=o||Object(g.a)(0)})),e}catch(i){return console.log(i),[]}},Se=async function(e,t,a){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];try{const s=await Object(O.vb)(e,t);if(!s.success)return;const{balances3pool:c,balancesUsdc:l,sun3LpBalance:o,sun3TotalSupply:i,usdcLpTotalSupply:r,userLpAllowance:u,userUsdcLpBalance:p}=s,d=ye({balances3pool:c,balancesUsdc:l,sun3LpBalance:o,sun3TotalSupply:i,usdcLpTotalSupply:r,userLpAllowance:u,userUsdcLpBalance:p,coins:t}),b=[],j={};return t.map((e=>{const{index:t,id:s,decimal:c,precision:l}=e;let o=Object(g.hb)(a).div(100).times(d[t]);n||(o=Object(g.a)(.98).times(o)),b[t]=o._toIntegerDown()._toHex(),j[s]=Object(g.c)(o._toFixed(c,1))})),{balances:d,userLpAllowance:u,minAmounts:b,amountsStr:j,userLpBalance:p}}catch(s){console.log(s)}},Le=async function(e,t,a){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];try{const s=await Object(O.vb)(e,t);if(!s.success)return;const{balances3pool:c,balancesUsdc:l,sun3LpBalance:o,sun3TotalSupply:i,usdcLpTotalSupply:r,userLpAllowance:u,userUsdcLpBalance:p,userLpAllowanceUsdcSwap:d}=s,b=xe({balances3pool:c,balancesUsdc:l,sun3LpBalance:o,sun3TotalSupply:i,usdcLpTotalSupply:r,userLpAllowance:u,userUsdcLpBalance:p,coins:t}),j=[],m={};return t.map((e=>{const{index:t,id:s,decimal:c,precision:l}=e;let o=Object(g.hb)(a).div(100).times(b[t]);n||(o=Object(g.a)(.98).times(o)),j[t]=o._toIntegerDown()._toHex(),m[s]=o._toFixed(c,1)})),{balances:b,userLpAllowance:u,minAmounts:j,amountsStr:m,userLpBalance:p,userLpAllowanceUsdcSwap:d}}catch(s){console.log(s)}},Ue=async(e,t)=>{try{await be.getUserLp();const{userUsdcLpBalance:a}=be.swapBalanceInfo,{precision:n,decimal:s}=B[e],c=Object(g.hb)(t).div(100).times(a)._toIntegerDown(),l=B[e].index,o=c._toHex(),i=await Object(O.v)(o,l);if(!i.success)return!1;const r=i.value;return Object(g.a)(r).div(n)._toFixed(s,1)}catch(a){console.log(a)}},Ce=async(e,t)=>{try{await Oe.getUserLp();const{userUsdcLpBalance:a}=Oe.swapBalanceInfo,{precision:n,decimal:s}=T[e],c=Object(g.hb)(t).div(100).times(a)._toIntegerDown(),l=T[e].index,o=c._toHex(),i=await Object(O.t)(o,l);if(!i.success)return!1;const r=i.value;return Object(g.a)(r).div(n)._toFixed(s,1)}catch(a){console.log(a)}},Be=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?(Oe.getSwapBalance(),Oe.getVirtualPriceUSDC(),Oe.getVolData()):(be.getSwapBalance(),be.getVirtualPriceUSDC(),be.getVolData())},Te=async function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]){await Promise.all([Oe.getSwapBalance(),Oe.getUserLp(),Oe.getBalanceInfo()]);const e={};I.map((t=>{const{userSwapBalance:a,decimal:n}=Oe.poolData[t];e[t]=Object(g.c)(Object(g.a)(a)._toFixed(n,1))})),pe(e)}else{await Promise.all([be.getUserLp(),be.getBalanceInfo()]);const e={};k.map((t=>{const{userSwapBalance:a,decimal:n}=be.poolData[t];e[t]=Object(g.c)(Object(g.a)(a)._toFixed(n,1))})),j(e)}!le&&oe(!0),ge||(ge=setInterval((async()=>{Be(!1),await be.getUserLp()}),je.defaultIntervalSec))};Object(n.useEffect)((()=>{!me&&ee&&(me=setInterval((async()=>{Be(!0),await Oe.getUserLp()}),je.defaultIntervalSec))}),[ee]),Object(n.useEffect)((()=>(Te(),Be(),()=>{clearInterval(ge),clearInterval(me)})),[]);const ke=async(e,t)=>{!le&&oe(!0);let a=N;const n={},c={},l={};if(ee)if(e){X(!0);for(let e in ue)e!==t&&(n[e]=!1,l[e]=0);ne({...ue,...n,[t]:e}),(N===q||Object(g.hb)(N).lte(0))&&(a="100.00",D(a)),Object(g.hb)(a).gt(100)&&(a=100);const s=await Ce(t,a);s&&pe({...ue,...l,[t]:Object(g.c)(s)})}else D(q),X(!1),ne({...ae,[t]:e});else if(e){X(!0);for(let e in ae)e!==t&&(n[e]=!1,c[e]=0);ne({...ae,...n,[t]:e}),(N===q||Object(g.hb)(N).lte(0))&&(a="100.00",D(a)),Object(g.hb)(a).gt(100)&&(a=100);const l=await Ue(t,a);l&&j({...s,...c,[t]:Object(g.c)(l)})}else D(q),X(!1),ne({...ae,[t]:e})},Ie=e=>{D("100"),e?(re(I),clearInterval(ge)):(re(k),clearInterval(me)),te(e),X(!1),ne(z(!1)),Be(e),Te(e)},Ne=async(e,t)=>{const a=await be.calcInclPrice(e,!1,t);$(a)},De=async(e,t)=>{const a=await Oe.calcInclPrice(e,!1,t);$(a)},Pe=async e=>{var t;!le&&oe(!0);let a=e.target.value,n=a.split(".");if((null===(t=n[1])||void 0===t?void 0:t.length)>2&&(a="".concat(n[0]+"."+n[1].substr(0,2))),Object(g.a)(a).gt(100))return;const{valid:c,str:l}=Object(g.Y)(a,10);if(N===q)return ee?(()=>{const e={},t={};I.map((a=>{e[a]=0,t[0]=!1})),pe(e),ne(ae),D(0)})():(()=>{const e={},t={};k.map((a=>{e[a]=0,t[0]=!1})),j(e),ne(ae),D(0)})();if(""===a)return D(""),ee?(()=>{const e={};I.map((t=>{e[t]=0})),pe(e)})():(()=>{const e={};k.map((t=>{e[t]=0})),j(e)})();if(c){D(l);const t=Object(g.a)(l).gt(100)?Object(g.a)(100):Object(g.a)(l);if(t.isNaN())return;if(!je.defaultAccount)return;const n=je.defaultAccount,c=fe();if(ee){if(c){const e=await Ce(c,t);return e&&pe({...ue,[c]:Object(g.c)(e)})}if(l!==q){const e=[];I.map((t=>{e.push({...T[t]})}));const t=e.sort(((e,t)=>e.index-t.index)),a=await Le(n,t,l,!0),{amountsStr:s={}}=a;a&&pe(s)}return}if(c){const e=await Ue(c,t);return e&&j({...s,[c]:Object(g.c)(e)})}if(l!==q){const t=[];k.map((e=>{t.push({...B[e]})}));const s=t.sort(((e,t)=>e.index-t.index)),c=await Se(n,s,l,!0);if(a===e.target.value){const{amountsStr:e={}}=c;c&&j(e)}}}},Ae=e=>{!le&&oe(!0),J(e),e!==q&&G("")},He=e=>{const{valid:t,str:a}=Object(g.Y)(e,10);if(t)if(""===a)G("");else if(Object(g.a)(a).lte(100)){var n;let e=a,t=a.split(".");(null===(n=t[1])||void 0===n?void 0:n.length)>2&&(e="".concat(t[0]+"."+t[1].substr(0,2))),G(e)}},Ee=e=>fe()||N===q?Object(C.jsx)("div",{className:"flex start mt-20",children:Object(C.jsx)(y.a,{slippage:e,customSlippage:Y,CUSTOM_SLIPPAGE:K,onChangeSlippage:Ae,onChangeCustomSlippage:He})}):Object(C.jsx)(C.Fragment,{});return Object(C.jsx)(p.a,{children:()=>Object(C.jsxs)(l.a,{...x.a.row,children:[Object(C.jsxs)(o.a,{...x.a.colLeft,children:[Object(C.jsx)(S.a,{list:a,activeKey:t[0]}),Object(C.jsxs)("div",{className:"pool-deposit",children:[e.isSinglePage?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(_.a,{routeName:"usdc/withdraw",mountedActions:Te,instantActions:Be}),Object(C.jsx)(w.a,{title:c.a.get("buysell.usdc_pool")+" "+c.a.get("banner.title_withdraw"),desc:c.a.get("banner.desc_withdraw")}),Object(C.jsx)(h.a,{})]}):null,je.isConnected?Object(C.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(C.jsxs)("div",{className:"add-liq withdraw-liq",children:[Object(C.jsxs)("div",{className:"flex",children:[c.a.get("withdraw.share_of_liq"),Object(C.jsx)(U.a,{showMax:!1,placeholder:"100.00",value:N,onChange:Pe,className:"flex-1 ml-20"})]}),Object(C.jsxs)("fieldset",{className:"currencies mt-35",children:[Object(C.jsx)("legend",{children:c.a.get("deposit.currencies")}),Object(C.jsx)("ul",{children:ie.map((e=>{const t=ee?T[e]:B[e],{symbol:a=""}=t;return Object(C.jsxs)("li",{children:[Object(C.jsx)("div",{className:"cur-label",children:Object(C.jsxs)("span",{className:"icon",children:[Object(C.jsx)("img",{src:b.c[e]?b.c[e]:u.default,alt:"",className:"token-logo"}),a]})}),Object(C.jsx)(U.a,{showMax:!1,value:ee?ue[e]:s[e],onChange:t=>{(async(e,t)=>{if(!le&&oe(!0),ee){const{decimal:a}=T[t],{valid:n,str:s}=Object(g.Y)((""+e.target.value).replace(/,/g,""),a);n&&pe({...ue,[t]:Object(g.c)(s)}),D(q),X(!1);const c={};for(let e in ae)c[e]=!1;return void ne(c)}const{decimal:a}=B[t],{valid:n,str:c}=Object(g.Y)((""+e.target.value).replace(/,/g,""),a);n&&j({...s,[t]:Object(g.c)(c)}),D(q),X(!1);const l={};for(let s in ae)l[s]=!1;ne(l)})(t,e)}})]},e)}))})]}),Object(g.cb)(W),Object(C.jsxs)("fieldset",{children:[Object(C.jsxs)("legend",{className:"flex aic jcs pt20",children:[Object(C.jsx)("span",{className:"mr-10",children:c.a.get("withdraw.withdraw_text")}),Object(C.jsx)(i.a,{title:c.a.get("withdraw.tip"),children:Object(C.jsx)(r.a,{})})]}),Object(C.jsxs)("div",{className:"withdraw-one mt-10",children:[ie.map((e=>{const{symbol:t=""}=ee?T[e]:B[e];return Object(C.jsx)(v.a,{id:e,checked:ae[e],tokenLogo:b.c[e]?b.c[e]:u.default,symbol:t,onChange:ke})})),Object(C.jsx)(v.a,{checked:ee,symbol:c.a.get("withdraw.as_3sun"),onChange:Ie})]})]}),Ee(P),se?Object(C.jsx)(f.a,{styleName:"mt-40",type:"single",disabled:!0,info:c.a.get("withdraw.action")}):Object(C.jsx)(f.a,{styleName:"mt-40",type:"single",info:c.a.get("withdraw.action"),onClick:()=>(async t=>{try{if(!je.defaultAccount)return;if(!le&&oe(!0),!se&&_e(t))return;if(se)return;const a=je.defaultAccount,n=[];ee?I.map((e=>{n.push({...T[e],inputValue:Object(g.hb)(t[e]).times(T[e].precision)})})):k.map((e=>{n.push({...B[e],inputValue:Object(g.hb)(t[e]).times(B[e].precision)})}));const s=n.sort(((e,t)=>e.index-t.index)),c=P===K?Y:P;return e.onSubmit&&e.onSubmit(),Z?await ve(s,a,c):N!==q?await he(s,a):await we(s,c)}catch(a){console.log(a)}})(ee?ue:s)}),se&&Object(C.jsx)("div",{className:"error-content mt-12",children:Object(C.jsx)("div",{className:"error-tip",children:se})})]})}):Object(C.jsx)(L.a,{})]})]}),Object(C.jsx)(o.a,{...x.a.colRight,children:Object(C.jsx)(m.a,{type:ee?"sun3":"usdc",className:je.isConnected?null:"window-for-tabs-pane"})})]})})}},949:function(e,t,a){"use strict";a(964);var n=a(15),s=a.n(n),c=a(3);t.a=e=>Object(c.jsx)("div",{className:"tempalte-pageTab-nav",children:e.list.map((t=>Object(c.jsx)("div",{className:s()("tempalte-pageTab-nav-item",{"tempalte-pageTab-nav-active":e.activeKey===t.value}),onClick:()=>t.handler(t),children:t.label},t.value)))})},953:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o}));var n=a(11),s=a.n(n);const c={row:{gutter:[{xs:8,sm:16,md:32},20]},colLeft:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:15}},colRight:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:9}}},l={1:{title:s.a.get("banner.title_deposit"),content:s.a.get("banner.desc_deposit"),tabTitle:s.a.get("header.deposit")},2:{title:s.a.get("banner.title_withdraw"),content:s.a.get("banner.desc_withdraw"),tabTitle:s.a.get("header.withdraw")},3:{title:s.a.get("banner.title_1"),content:s.a.get("banner.desc_1"),tabTitle:s.a.get("header.swap")}},o=[{label:l[1].tabTitle,value:"1"},{label:l[2].tabTitle,value:"2"},{label:l[3].tabTitle,value:"3"}]},955:function(e,t,a){"use strict";var n=a(15),s=a.n(n),c=a(985),l=a(3);t.a=e=>{const{checked:t,tokenLogo:a,symbol:n="",onChange:o,id:i=""}=e;return Object(l.jsxs)("div",{className:s()({[c.sun_check_button]:!0,[c.sun_check_active_button]:t}),onClick:()=>{o&&o(!t,i)},children:[a&&Object(l.jsx)("img",{src:a,alt:"",className:"token-logo"}),Object(l.jsx)("span",{children:n})]})}},956:function(e,t,a){"use strict";var n=a(11),s=a.n(n),c=a(15),l=a.n(c),o=a(2167),i=a(966),r=a(3);const u=[{key:.2,label:"0.2%"},{key:3,label:"3%"}],p=[{key:.005,label:"0.5%"},{key:.01,label:"1%"}];t.a=e=>{const{slippage:t,customSlippage:a,CUSTOM_SLIPPAGE:n,type:c="withdraw"}=e,d="withdraw"===c?u:p;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"mr-10",children:s.a.get("withdraw.slippage")}),Object(r.jsxs)("div",{className:l()(i.setting_btns),children:[Object(r.jsx)("div",{className:i.setting_btn_wrap,children:d.map((a=>Object(r.jsx)("span",{className:l()(i.setting_item,t===a.key?i.active:""),onClick:()=>{return t=a.key,void(e.onChangeSlippage&&e.onChangeSlippage(t));var t},children:a.label})))}),Object(r.jsx)(o.a,{className:l()(i.setting_input,i.module_important,["ml-20"]),suffix:"%",value:a,onFocus:()=>{a||e.onChangeSlippage&&e.onChangeSlippage(n)},onBlur:()=>{a||e.onChangeSlippage&&e.onChangeSlippage(String(d[0].key))},onChange:t=>{e.onChangeCustomSlippage&&e.onChangeCustomSlippage(t.target.value)}})]})]})}},964:function(e,t,a){},966:function(e,t,a){e.exports={"page-head":"style_page-head__1vdv7",link:"style_link__1gfSr","gradient-title":"style_gradient-title__UDoMs",animateTitle:"style_animateTitle__2zU_Z","dim-content":"style_dim-content__1LeiT",uppercase:"style_uppercase__Jhzo4","window-for-tabs-pane":"style_window-for-tabs-pane__3E-mr","dark-btn":"style_dark-btn__2vZ_n","purple-btn":"style_purple-btn__3V5jL","cur-input":"style_cur-input__2s9we","max-btn":"style_max-btn__32jEQ",setting_wrap:"style_setting_wrap__L7ld9",setting_label:"style_setting_label__3qQrG",setting_btns:"style_setting_btns__zH_61",setting_btn_wrap:"style_setting_btn_wrap__uxT1B",setting_item:"style_setting_item__1VwnL",setting_input:"style_setting_input__kvJzs",active:"style_active__10VTC",module_important:"style_module_important__PuwNO",info_text:"style_info_text__3K73H",setting_minutes:"style_setting_minutes__1mIXw",flex_right:"style_flex_right__3aanL"}},985:function(e,t,a){e.exports={sun_check_button:"style_sun_check_button__5diEB",sun_check_active_button:"style_sun_check_active_button__28IzL"}}}]);