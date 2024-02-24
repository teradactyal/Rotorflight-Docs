"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1008],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:80},i="Failsafe",l={unversionedId:"Tutorial-Setup/Failsafe",id:"Tutorial-Setup/Failsafe",title:"Failsafe",description:"Failsafe Tab",source:"@site/docs/Tutorial-Setup/Failsafe.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Failsafe",permalink:"/docs/Tutorial-Setup/Failsafe",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Failsafe.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Receiver",permalink:"/docs/Tutorial-Setup/Receiver"},next:{title:"Power",permalink:"/docs/Tutorial-Setup/Power"}},c={},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"failsafe"},"Failsafe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Failsafe Tab",src:r(45922).Z,width:"839",height:"816"})),(0,a.kt)("p",null,"In the event of receiver failsafe the flight controller will set Roll, Pitch, Yaw, and Collective commands to 0, and it will shut off the throttle."),(0,a.kt)("p",null,"You can set other failsafe options for auxiliary channels, (Default is HOLD)."))}f.isMDXComponent=!0},45922:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/failsafe-main-655e9cdcc857b699eae1ab5452f4012e.png"}}]);