(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[48],{1897:function(e,c,t){},1898:function(e,c,t){},2004:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(910),n=(t(1897),t(70)),i=t(68),l=t(0),j=t(11),r=t.n(j),m=t.p+"static/media/qianbao.6253be4c.svg",o=t(14),d=t.n(o),b=t(3),g=Object(s.memo)((()=>{const e=Object(n.d)((()=>i.default.network)),c=()=>{e.setData({loginModalVisible:!0,loginModalStep:1})};return Object(b.jsx)(n.a,{children:()=>Object(b.jsxs)("div",{className:"s-login-wrap",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"s-login-img",src:m,alt:"login"})}),Object(b.jsx)("div",{className:d()({"s-login-middle":!0,"s-login-middle-no-login":!e.isConnected}),children:e.isConnected?Object(l.r)(e.defaultAccount,14,5):r.a.get("more_page.unconnectedWallet")}),Object(b.jsx)("div",{className:"s-login-right",children:e.isConnected?Object(b.jsx)("div",{className:"s-login-copy",onClick:()=>{Object(l.q)({value:e.defaultAccount})}}):Object(b.jsx)("div",{className:"s-login-btn",onClick:c,children:r.a.get("header.connect_wallet")})})]})})})),h=t(972),O=t.p+"static/media/view_arrow.09d5c99c.svg",x=t.p+"static/media/view_arrow_light.9eed4b5d.svg",p=t(926);t(1898);const u=Object(s.memo)((e=>{const{menu:c,onItemClick:t}=e,a=Object(n.d)((()=>i.default.themeStore)),l=Object(s.useCallback)((e=>Object(b.jsx)(n.a,{children:()=>Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:e.icon,alt:"icon",className:"more-page-nav-icon"}),Object(b.jsxs)("span",{className:"more-page-nav-text",children:[Object(b.jsx)("span",{children:e.text}),e.selectValue&&Object(b.jsx)("span",{className:"more-page-nav-desc",children:e.selectValue})]}),Object(b.jsx)("img",{src:"dark"===a.theme?O:x,alt:"arrow",className:"more-page-nav-arrow"})]})})),[a.theme]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"more-page-menu",children:c.map((e=>Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h.a,{isCustom:e.isCustom,clsPrefix:"more-page",item:e,renderContent:l,handleClick:t},e.id)})))})})})),v=Object(s.memo)((e=>{const c=Object(n.d)((()=>i.default.themeStore)),t=()=>{c.changeTheme()};return Object(b.jsx)(n.a,{children:()=>Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"more-page-menu",children:Object(b.jsxs)("div",{className:"more-page-nav-item",children:[Object(b.jsx)("img",{src:"dark"===c.theme?p.i.icon:p.i.icon_light,alt:"icon",className:"more-page-nav-icon"}),Object(b.jsx)("span",{className:"more-page-nav-text",children:Object(b.jsx)("span",{children:"dark"===c.theme?p.i.text:p.i.text_light})}),Object(b.jsx)("div",{className:"more-page-nav-switch",onClick:t,children:Object(b.jsx)("img",{src:"dark"===c.theme?p.i.switch_dark:p.i.switch_light,alt:"switch_mode"})})]})})})})}));c.default=Object(s.memo)((()=>Object(b.jsxs)("div",{className:"more-page",children:[Object(b.jsx)(a.a,{routeName:"more_page"}),Object(b.jsxs)("div",{className:"more-page-content",children:[Object(b.jsx)(g,{}),Object(b.jsx)(u,{menu:p.j}),Object(b.jsx)(u,{menu:p.k}),Object(b.jsx)(v,{})]})]})))}}]);