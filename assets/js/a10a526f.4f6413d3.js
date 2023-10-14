"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:70},s="Cyclic Cross Coupling",a={unversionedId:"Tuning/Cyclic Cross Coupling",id:"Tuning/Cyclic Cross Coupling",title:"Cyclic Cross Coupling",description:"What is it?",source:"@site/docs/Tuning/Cyclic Cross Coupling.md",sourceDirName:"Tuning",slug:"/Tuning/Cyclic Cross Coupling",permalink:"/docs/Tuning/Cyclic Cross Coupling",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tuning/Cyclic Cross Coupling.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tuningSidebar",previous:{title:"Rescue mode settings",permalink:"/docs/Tuning/Rescue mode settings"}},c={},l=[{value:"What is it?",id:"what-is-it",level:2},{value:"How to tune it?",id:"how-to-tune-it",level:2},{value:"(Advanced Topic) Constant Cross Coupling",id:"advanced-topic-constant-cross-coupling",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cyclic-cross-coupling"},"Cyclic Cross Coupling"),(0,r.kt)("h2",{id:"what-is-it"},"What is it?"),(0,r.kt)("p",null,"During ticktocks, one might observe that the center of the main rotor rotates during stops. Another scenario is during hover, one can shake the elevator stick and observe a tilt in the roll axis and a significant drift in the yaw axis. These are both the symptoms of uncompensated cyclic cross coupling. "),(0,r.kt)("p",null,'Cyclic cross coupling happens mainly due to the pitch axis inputs. When the pitch command is given, due to the high moment of inertia of the helicopter in the pitch axis, the frame would "lag" behind the rotor disks. This difference in position creates a torque on the rotor blade and thus transfer to the roll axis due to gyroscopic precession. '),(0,r.kt)("p",null,"The cross coupling compensation simply take a derivative on the pitch SETPOINT and add it proportionally to the roll axis. This effectively pre-load the roll axis with a input command so that when the above scenario happens, the two effects cancel each other."),(0,r.kt)("h2",{id:"how-to-tune-it"},"How to tune it?"),(0,r.kt)("p",null,"Start with a low value and increase when theres no significant coupling is observed or when there is a dimishing return. You might also want to try piroflips because cross-coupling gain changes the corresponding commands at different orientations during piroflips. Try increase the gain slowly so you can get used to the feeling."),(0,r.kt)("p",null,"From experience, the harder the main rotor dampener is, the lower cross coupling gain is required."),(0,r.kt)("h2",{id:"advanced-topic-constant-cross-coupling"},"(Advanced Topic) Constant Cross Coupling"),(0,r.kt)("p",null,"The above cross coupling only happens at the moment of pitch (could also be a little bit of roll) input. However, there could be another scenario that a constant cross-coupling might occur. If the main blade flap axis is not centered at the middle commonly due to very hard dampeners, very low headspeed, or rotorhead designs, a constant cross coupling might occur because the phase lag of the rotor blade is no longer perfectly $90^{\\circ}$. In this case, you might want to consider adjusting the phase angle in the Mixer page. Usually a +2 to +10 deg would be a good range to start and more testing is needed. You might also want to make sure that it is doing the right thing. For CW rotor, when pushing the elevator, the swash should tilt slightly right, and when you pull the elevator stick, the swash should tilt slightly left."))}h.isMDXComponent=!0}}]);