(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[39],{1078:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var c=a(1),l=a(38),n=a(1952),o=a(14),s=a.n(o),r=a(98),i=a(1079),d=a.n(i),b=a(3);const m=e=>{const t=Object(r.useCurrentThemeConfig)(),{children:a,themes:c,...o}=e;return Object(b.jsx)(l.a,{theme:{token:{colorBgContainer:t["color-input-bg"],colorBorder:t["color-button-bordered"],colorPrimaryHover:t["color-button-bordered-text"],colorText:t["color-text-default"],controlOutline:"none",colorIcon:t["color-text-default"],colorFillAlter:t["color-input-bg"],colorErrorBorderHover:"none",colorErrorOutline:"none",colorTextBase:t["color-text-default"],colorBgElevated:t["color-input-bg"],controlItemBgActive:t["color-select-active"],controlItemBgHover:t["color-text-default-06"],colorTextQuaternary:t["color-text-default"],colorBgContainerDisabled:t["color-text-default-06"],colorTextDisabled:t["color-button-bordered-text"],colorTextPlaceholder:t["color-text-default-5"],...c}},children:Object(b.jsx)(n.a,{size:"large",className:s()("pure-comp",d.a.common_select),popupClassName:s()("pure-comp",d.a.common_select_pop),...o,children:a})})},_=n.a.Option;t.b=Object(c.memo)(m)},1079:function(e,t,a){e.exports={common_select_pop:"style_common_select_pop__1Gvf-",common_select:"style_common_select__16Itm"}},1578:function(e,t,a){e.exports={error_text:"style_error_text__OpqDT"}},1579:function(e,t,a){},1580:function(e,t,a){},1997:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));var c=a(1),l=a(11),n=a.n(l),o=a(910),s=a(920),r=a(3);function i(){const e=window.localStorage.getItem("lang");return Object(r.jsxs)("section",{className:"en-US"===e?"en":"",children:[Object(r.jsx)("div",{className:"header mb-20",children:n.a.get("claim.steps")}),Object(r.jsxs)("div",{className:"about",children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:n.a.get("claim.desc.content_1")}),Object(r.jsx)("li",{children:n.a.get("claim.desc.content_2")}),Object(r.jsx)("li",{children:n.a.get("claim.desc.content_3")}),Object(r.jsx)("li",{children:n.a.get("claim.desc.content_3_1")})]}),Object(r.jsx)("div",{className:"subTitle mt-20 mb-10",children:n.a.get("claim.desc.content_4")}),Object(r.jsxs)("ol",{children:[Object(r.jsx)("li",{children:n.a.getHTML("claim.desc.content_5")}),Object(r.jsx)("li",{children:n.a.get("claim.desc.content_6")}),Object(r.jsx)("li",{children:n.a.get("claim.desc.content_7")})]})]})]})}var d=a(68),b=a(1952),m=a(50),_=a.n(m),j=a(0),u=a(8),p=a(70),g=a(4),x=a(22),O=a.p+"static/media/drop.3249db03.svg",h=a.p+"static/media/Up.69cc37ff.svg",y=a(1078),f=a(952),w=a(131),v=a(1578);var k=e=>{const{text:t,...a}=e;return Object(r.jsx)("div",{className:v.error_text,...a,children:t})};const{Option:N}=b.a;function S(e){const{tokens:t,defaultId:a}=g.a,[l,o]=Object(c.useState)(""),[s,i]=Object(c.useState)(""),[b,m]=Object(c.useState)(""),[v,S]=Object(c.useState)(O),[T,C]=Object(c.useState)(n.a.get("claim.check_text")),[B,D]=Object(c.useState)(!1),[I,A]=Object(c.useState)([]),[H,z]=Object(c.useState)(""),[F,P]=Object(c.useState)(""),E=Object(p.d)((()=>d.default.system));Object(c.useEffect)((()=>{o(window.defaultAccount),i(_.a.address.toHex(window.defaultAccount).replace("41","0x"))}),[window.defaultAccount]);const L=async e=>{let t=F;e&&(t=e);let c=await Object(x.a)(t,s);try{if(c.success){let e=await Object(u.Hb)(Number(t-1),c.data.index);Object(j.a)(e).gt(0)?(C(n.a.get("claim.messages.claimed")),D(!1),A([]),m("")):(m(n.a.get("claim.messages.claim",{value:Object(j.u)(Object(j.a)(_.a.toDecimal(c.data.amount)).div(Object(j.a)(10).pow(18))),symbol:a.toUpperCase()})),A(c.data))}else C(n.a.get("claim.messages.nothing")),D(!1),A([]),m("")}catch(l){}};return Object(r.jsxs)("section",{children:[Object(r.jsx)("div",{className:"header mb-20",children:n.a.get("claim.claim_text")}),Object(r.jsx)(y.b,{onChange:e=>(e=>{P(e),s&&"--"!==s&&(D(!1),C(n.a.get("claim.messages.checking")),L(e))})(e),placeholder:n.a.get("claim.select_week"),notFoundContent:n.a.get("governance.empty_text"),onDropdownVisibleChange:e=>{S(e?h:O)},children:e.dropData&&e.dropData.length>0&&e.dropData.map((e=>Object(r.jsx)(N,{value:e.week,children:n.a.get("claim.which_week",{value:e.week})},e.week)))}),Object(r.jsxs)("p",{className:"subTitle mb-10 mt-20",children:[n.a.get("claim.tron_address"),":"]}),Object(r.jsx)(f.a,{style:{fontSize:"14px"},value:l,onChange:e=>(e=>{let t=e.target.value;o(t),A([]),m(""),C(n.a.get("claim.check_text")),_.a.isAddress(t)?(z(!1),i(_.a.address.toHex(t).replace("41","0x")),F&&D(!0)):(z(n.a.get("claim.messages.address")),i("--"),D(!1))})(e),placeholder:n.a.get("claim.messages.placeholder")}),H&&Object(r.jsx)(k,{style:{marginTop:10},text:H}),Object(r.jsxs)("p",{className:"subTitle mb-10  mt-20",children:[n.a.get("claim.eth_address"),":"]}),Object(r.jsx)(f.a,{style:{fontSize:"14px"},value:s,disabled:!0,placeholder:"--"}),Object(r.jsx)("p",{className:"subTitle mb-10",children:b}),I.index?Object(r.jsx)(w.a,{style:{width:"100%"},className:"mt-30",onClick:()=>(async()=>{if(I.index){const c={title:"actions.claim_lp",obj:{value:Object(j.u)(Object(j.a)(_.a.toDecimal(I.amount)).div(Object(j.a)(10).pow(18))),symbol:t[a].symbol}};let l=I.index,n=I.amount,o=I.proof,s=Number(F-1),r=await E.claim(s,l,n,o,c);e.getDropData(),r&&L(F)}else m(n.a.get("claim.messages.clickCheck"))})(),children:n.a.get("claim.claim_btn")}):Object(r.jsx)(w.a,{style:{width:"100%"},className:"mt-30",disabled:!B,onClick:()=>L(),children:T})]})}var T=a(99),C=a(942),B=a(98);const{claimPageSize:D}=g.a;function I(e){const t=D,[a,l]=Object(c.useState)(1),[o,s]=Object(c.useState)(0),[i,d]=Object(c.useState)(t-1),b=Object(T.a)(window.navigator).any,m=Object(B.useCurrentThemeConfig)(),_=window.localStorage.getItem("lang"),u=[{title:n.a.get("claim.table.week_text"),dataIndex:"week",key:"week",width:b?"en-US"===_?void 0:50:80},{title:n.a.get("claim.table.total_text"),dataIndex:"total",key:"total",render:(e,t)=>Object(r.jsxs)(r.Fragment,{children:[t.alreadyHead,"/",t.totalHead]})},{title:n.a.get("claim.table.amount_text"),dataIndex:"amount",key:"amount",render:(e,t)=>Object(r.jsx)(r.Fragment,{children:t.week&&!t.alreadyAmount?0:Object(j.u)(Object(j.a)(t.alreadyAmount).div(Object(j.a)(10).pow(18)))})},{title:n.a.get("claim.table.percent"),dataIndex:"operate",key:"operate",width:b?void 0:110,render:(e,t)=>Object(r.jsxs)(r.Fragment,{children:[t.week&&!t.alreadyAmount?0:Object(j.u)(Object(j.a)(t.alreadyAmount).div(Object(j.a)(t.totalAmount)).times(100),{percent:!0,miniText:.01}),"%"]})}];return Object(r.jsxs)("section",{children:[Object(r.jsx)("div",{className:"header mb-20",children:n.a.get("claim.table.title")}),Object(r.jsx)(C.a,{dataSource:e.data,pagination:!1,columns:u,scroll:{y:220},locale:{emptyText:n.a.get("scan.no_pair_tips")},tableTheme:{colorTextHeading:m["color-text-default-7"],headerBg:m["color-table-header-bg"],borderRadius:10,borderRadiusLG:10,stickyScrollBarBorderRadius:10}})]})}a(1579),a(1580);function A(e){const t=window.localStorage.getItem("lang")||n.a.options.currentLocale;return Object(r.jsxs)("div",{className:"start-tips"+("en-US"===t?" en ":""),children:[Object(r.jsx)("p",{children:n.a.get("countdown.start")}),Object(r.jsx)("span",{className:"close",onClick:()=>e.cb()})]})}var H=a(926),z=a(171);function F(){const{startTipTime:e}=g.a,[t,a]=Object(c.useState)([]),[l,b]=Object(c.useState)(!0),m=(Object(p.d)((()=>d.default.network)),Object(T.a)(window.navigator).any,async()=>{j()}),_=window.localStorage.getItem("lang"),j=async()=>{try{let e=await Object(x.b)();e.success&&a(e.data)}catch(e){console.log(e)}},u=async()=>{b(!1)},O=Object(c.useMemo)((()=>({showBack:!0,onBack:()=>{Object(H.h)({id:"more"})}})),[]),h=Object(c.useMemo)((()=>Object(r.jsxs)(r.Fragment,{children:[n.a.get("banner.desc_5"),Object(r.jsx)(z.a,{href:"zh-CN"===window.localStorage.getItem("lang")?g.a.bannerLinkCn:g.a.bannerLinkEn,target:"_blank",style:{marginLeft:10},children:n.a.get("banner.link")})]})),[]);return Object(r.jsx)(p.a,{children:()=>Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{routeName:"claim",mShowLogo:!1,mShowBottomNav:!1,subNavProps:O,instantActions:m}),Object(r.jsxs)("div",{className:"main-page-content",children:[Object(r.jsx)(s.a,{title:n.a.get("banner.title_5"),subTitle:h,isRevert:!1}),(new Date).getTime()<e&&l&&Object(r.jsx)(A,{cb:u}),Object(r.jsxs)("div",{id:"claim",className:"en-US"===_?"en":"",children:[Object(r.jsxs)("div",{className:"claim-box",children:[Object(r.jsx)(S,{getDropData:j,dropData:t}),Object(r.jsx)(I,{data:t})]}),Object(r.jsx)(i,{})]})]})]})})}},920:function(e,t,a){"use strict";var c=a(1),l=a(14),n=a.n(l),o=a(922),s=a(3);const r=e=>{const{title:t,subTitle:a,isRevert:c}=e,l="string"===typeof t;return Object(s.jsxs)("div",{className:o.page_title_wrap,children:[c&&a&&Object(s.jsx)("div",{className:o.page_title_sub,children:a}),t&&Object(s.jsx)("div",{className:n()({[o.page_title]:!0,[o.page_title_revert]:c,[o.page_title_ele]:!l}),children:l?t.split("").map(((e,t)=>Object(s.jsx)("span",{className:o.page_title_ele,children:e},t))):t}),a&&!c&&Object(s.jsx)("div",{className:o.page_title_sub,children:a})]})};t.a=Object(c.memo)(r)},922:function(e,t,a){e.exports={"page-head":"style_page-head__1_76J",link:"style_link__JVBBX","gradient-title":"style_gradient-title__14115",animateTitle:"style_animateTitle__1W1A5","dim-content":"style_dim-content__1MZ32",uppercase:"style_uppercase__2R_0z","window-for-tabs-pane":"style_window-for-tabs-pane__3S1zF","dark-btn":"style_dark-btn__VnSQD","purple-btn":"style_purple-btn__3Ez4v","cur-input":"style_cur-input__1VPh5","max-btn":"style_max-btn__2ujF3",page_title:"style_page_title__dfZPh",page_title_wrap:"style_page_title_wrap__7dtV_",page_title_ele:"style_page_title_ele__Tktf1",page_title_sub:"style_page_title_sub__1IUsF",page_title_revert:"style_page_title_revert__18HMS"}},952:function(e,t,a){"use strict";var c=a(1),l=a(38),n=a(1951),o=a(14),s=a.n(o),r=a(975),i=a.n(r),d=a(98),b=a(53),m=a(11),_=a.n(m),j=a(3);const u=e=>{const{showMax:t,onMaxClick:a,className:c,themes:o,...r}=e,m=Object(d.useCurrentThemeConfig)();return Object(j.jsx)(l.a,{theme:{token:{colorBgContainer:m["color-input-bg"],colorBorder:"transparent",colorPrimaryHover:m["color-a"],colorText:m["color-text-default"],controlOutline:"none",colorIcon:m["color-text-default"],colorFillAlter:m["color-input-bg"],colorErrorBorderHover:"none",colorErrorOutline:"none",colorTextBase:m["color-text-default"],colorBgContainerDisabled:Object(b.a)(m["color-input-bg"],.5),colorTextDisabled:Object(b.a)(m["color-text-default"],.5),colorTextPlaceholder:m["color-text-default-3"],...o}},children:Object(j.jsx)(n.a,{className:s()("pure-comp",c),size:"large",suffix:t?Object(j.jsx)("span",{className:i.a.max_btn,onClick:()=>a&&a(),children:_.a.get("swap.input_from_max")}):null,...r})})};t.a=Object(c.memo)(u)},975:function(e,t,a){e.exports={"page-head":"style_page-head__3Df8R",link:"style_link__13CUf","gradient-title":"style_gradient-title__2a8zy",animateTitle:"style_animateTitle__3AmLh","dim-content":"style_dim-content__33wh4",uppercase:"style_uppercase__3nmXo","window-for-tabs-pane":"style_window-for-tabs-pane__19SGv","dark-btn":"style_dark-btn__3l8ji","purple-btn":"style_purple-btn__37XNP","cur-input":"style_cur-input__3Kzlm","max-btn":"style_max-btn__WydB3",max_btn:"style_max_btn__29JsD"}}}]);