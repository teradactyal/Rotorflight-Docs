"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[5482],{65141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>V,default:()=>F,frontMatter:()=>k,metadata:()=>D,toc:()=>E});var r=n(74848),a=n(28453),s=n(96540),i=n(18215),l=n(23104),o=n(56347),u=n(205),c=n(57485),d=n(31682),h=n(70679);function b(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return b(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,c]=f({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,h.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=o??d;return m({value:e,tabValues:a})?e:null})();(0,u.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,a]),tabValues:a}}var x=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=o[n].value;r!==a&&(c(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=g(e);return(0,r.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,r.jsx)(j,{...t,...e}),(0,r.jsx)(w,{...t,...e})]})}function C(e){const t=(0,x.A)();return(0,r.jsx)(y,{...e,children:b(e.children)},String(t))}const I={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(I.tabItem,a),hidden:n,children:t})}const k={sidebar_position:100},V="Flow charts/Diagrams",D={id:"Contributing/Flow-Charts",title:"Flow charts/Diagrams",description:"Using charts, flow diagrams etc",source:"@site/docs/Contributing/Flow-Charts.mdx",sourceDirName:"Contributing",slug:"/Contributing/Flow-Charts",permalink:"/docs/Contributing/Flow-Charts",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Contributing/Flow-Charts.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"developSidebar",previous:{title:"Modeling Cross Coupling",permalink:"/docs/Contributing/Modeling-Cross-Coupling"}},A={},E=[];function N(e){const t={a:"a",admonition:"admonition",h1:"h1",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"flow-chartsdiagrams",children:"Flow charts/Diagrams"}),"\n",(0,r.jsxs)(t.p,{children:["Using charts, flow diagrams etc\n",(0,r.jsx)(t.a,{href:"http://mermaid.js.org/syntax/flowchart.html",children:"Mermaid"})]}),"\n",(0,r.jsx)(t.p,{children:"Maybe we can use this somewhere."}),"\n",(0,r.jsx)(t.mermaid,{value:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;"}),"\n",(0,r.jsx)(t.mermaid,{value:"flowchart LR\n    id1[(Database)]"}),"\n",(0,r.jsx)(t.admonition,{title:"PID Tuning",type:"tip",children:(0,r.jsxs)(C,{children:[(0,r.jsx)(T,{value:"Yes",label:"NO Filtering",children:(0,r.jsx)("p",{children:":::caution help :::"})}),(0,r.jsx)(T,{value:"No",label:"Filtering is working",children:"This is an orange"})]})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"P"}),(0,r.jsx)(t.th,{children:"I"}),(0,r.jsx)(t.th,{children:"D"}),(0,r.jsx)(t.th,{children:"O"}),(0,r.jsx)(t.th,{children:"B"}),(0,r.jsx)(t.th,{children:"FF"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"6"}),(0,r.jsx)(t.td,{children:"9"}),(0,r.jsx)(t.td,{children:"8"})]})})]})}),"\n",(0,r.jsx)(t.admonition,{title:"Use tabs in admonitions",type:"tip",children:(0,r.jsxs)(C,{children:[(0,r.jsx)(T,{value:"apple",label:"Apple",children:"This is an apple \ud83c\udf4e"}),(0,r.jsx)(T,{value:"orange",label:"Orange",children:"This is an orange \ud83c\udf4a"}),(0,r.jsx)(T,{value:"banana",label:"Banana",children:"This is a banana \ud83c\udf4c"})]})})]})}function F(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);