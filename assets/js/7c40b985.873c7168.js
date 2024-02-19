"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[7977],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,l(l({ref:e},u),{},{components:n})):a.createElement(h,l({ref:e},u))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34175:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4},l="Using Stability Modes",o={unversionedId:"Tutorial-Walkthroughs/Using-StabilityModes",id:"Tutorial-Walkthroughs/Using-StabilityModes",title:"Using Stability Modes",description:"Purpose",source:"@site/docs/Tutorial-Walkthroughs/Using-StabilityModes.md",sourceDirName:"Tutorial-Walkthroughs",slug:"/Tutorial-Walkthroughs/Using-StabilityModes",permalink:"/docs/Tutorial-Walkthroughs/Using-StabilityModes",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Walkthroughs/Using-StabilityModes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tuning using Adjustments",permalink:"/docs/Tutorial-Walkthroughs/Tuning-using-Adjustments"},next:{title:"Flashing Blheli_S ESC to Bluejay firmware",permalink:"/docs/Tutorial-Walkthroughs/Blheli_s-to-Bluejay"}},s={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Aim",id:"aim",level:2},{value:"Configure the Tx",id:"configure-the-tx",level:3},{value:"Configure flight controller",id:"configure-flight-controller",level:3},{value:"Calibrating stability modes",id:"calibrating-stability-modes",level:3},{value:"## Warning ## - do not use your transmitter trims!!",id:"-warning----do-not-use-your-transmitter-trims",level:4},{value:"Calibration using Lua Scripts",id:"calibration-using-lua-scripts",level:4},{value:"Calibration using Stick Commands",id:"calibration-using-stick-commands",level:4}],u={toc:d},p="wrapper";function c(t){let{components:e,...i}=t;return(0,r.kt)(p,(0,a.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-stability-modes"},"Using Stability Modes"),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"  6G modes provide self stabilization/leveling of the helicopter when the sticks are moved to the centre. This is the opposite to the standard Acro mode (used for aerobatics and 3D) which will not self level after sticks are centered and thus is inherently unstable. These modes are generally used for beginners or those wanting more of a drone feel to their helicopter. 6G modes do not provide position fixing as found with GPS systems so the heli will drift around in the wind.")),(0,r.kt)("h2",{id:"aim"},"Aim"),(0,r.kt)("p",null,"In this example we will configure a 3 position switch (SwC) to select between Stability modes. With the SwC fully down we will have ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Acro"))," mode, SwC in the centre will be ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Horizon"))," Mode and in the fully up position we will enable ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Angle"))," mode.    "),(0,r.kt)("h3",{id:"configure-the-tx"},"Configure the Tx"),(0,r.kt)("p",null,"We need to assign a spare channel to your 3 position switch (SwC) (can be any channel or switch). "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," This example shows the process for EdgeTx (same for OpenTX) but is really the same process for any transmitter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Assign Ch8 to the SwC in the ",(0,r.kt)("strong",{parentName:"p"},"Mixers")," tab"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stability Mode",src:n(64097).Z,width:"949",height:"450"})),(0,r.kt)("h3",{id:"configure-flight-controller"},"Configure flight controller"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," looking at the channels in the ",(0,r.kt)("strong",{parentName:"p"},"receiver")," tab we can see that Aux3 is the eight channel. This matches our TX assignment from step 1.  Confirm the 3 position switch changes the value seen on Aux3,  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stability Mode",src:n(4893).Z,width:"1138",height:"420"})," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Modes")," tab. Disable hide unused modes if nothing is visible."),(0,r.kt)("li",{parentName:"ul"},"Chose the Horizon Mode. Enter AUX3 in the channel and adjust the range to cover the middle section of the control channel as shown in the picture below. "),(0,r.kt)("li",{parentName:"ul"},"Chose the Angle Mode. Enter Aux3 in the channel and adjust the range to cover the top section of the control range as shown in the pic below.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stability Mode",src:n(94189).Z,width:"1122",height:"482"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Test and confirm the switch position enables and disables modes as required These values are added to the Profile so will result in (e.g. SwC down = No mode active = Acro, SwC middle = Horizon Mode, SwC up = Angle Mode).     "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stability Mode",src:n(18879).Z,width:"1576",height:"636"})),(0,r.kt)("h3",{id:"calibrating-stability-modes"},"Calibrating stability modes"),(0,r.kt)("h4",{id:"-warning----do-not-use-your-transmitter-trims"},"## Warning ## - do not use your transmitter trims!!"),(0,r.kt)("p",null,"Your Roll, Pitch and Yaw should all be trimmed to 1500 at centre stick always "),(0,r.kt)("p",null,"Stability modes will try to stabilize to the calibrated flight controller level. This is rarely perfectly aligned with the actual helicopters attitude where there is no drift (least drift... there will always be some due to wind etc). In order to calibrate this in-flight we have 2 methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/Tutorial-Setup/LUA-Scripts"},"Rotorfilght Lua Scripts")),(0,r.kt)("li",{parentName:"ul"},"Stick controls")),(0,r.kt)("p",null,"Note that it's also possible to adjust accelerometer trim values in the ",(0,r.kt)("em",{parentName:"p"},"Configuration")," tab of the Configurator."),(0,r.kt)("h4",{id:"calibration-using-lua-scripts"},"Calibration using Lua Scripts"),(0,r.kt)("p",null,"Select ",(0,r.kt)("em",{parentName:"p"},"Accelerometer Trims")," from the Rotorflight main menu. Test fly the heli tail-in in either Angle or Horizon mode, with sticks at centre. If the heli drifts left, increase roll trim. If it drifts backwards, increase pitch trim. Each time you make a change to the trims long press the wheel/roller. The Page menu should now pop up. Select Save page. Adjust trims until the heli flies hands off without any pronounced drift in any direction.    "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stability Mode",src:n(91861).Z,width:"1013",height:"272"})," "),(0,r.kt)("h4",{id:"calibration-using-stick-commands"},"Calibration using Stick Commands"),(0,r.kt)("p",null,"Standard 'Betaflight' stick commands work with Rotorflight. The accelerometer trims can be calibrated using these commands. To do this you must have ",(0,r.kt)("strong",{parentName:"p"},"Angle or Horizon")," Modes enabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Throttle"),(0,r.kt)("th",{parentName:"tr",align:null},"Yaw"),(0,r.kt)("th",{parentName:"tr",align:null},"Pitch"),(0,r.kt)("th",{parentName:"tr",align:null},"Roll"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Calibrate Gyro"),(0,r.kt)("td",{parentName:"tr",align:null},"LOW"),(0,r.kt)("td",{parentName:"tr",align:null},"LOW"),(0,r.kt)("td",{parentName:"tr",align:null},"LOW"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Calibrate Acc"),(0,r.kt)("td",{parentName:"tr",align:null},"HIGH"),(0,r.kt)("td",{parentName:"tr",align:null},"LOW"),(0,r.kt)("td",{parentName:"tr",align:null},"LOW"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trim Acc Left"),(0,r.kt)("td",{parentName:"tr",align:null},"HIGH"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTER"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTER"),(0,r.kt)("td",{parentName:"tr",align:null},"LOW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trim Acc Right"),(0,r.kt)("td",{parentName:"tr",align:null},"HIGH"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTER"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTER"),(0,r.kt)("td",{parentName:"tr",align:null},"HIGH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trim Acc Forwards"),(0,r.kt)("td",{parentName:"tr",align:null},"HIGH"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTER"),(0,r.kt)("td",{parentName:"tr",align:null},"HIGH"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trim Acc Backwards"),(0,r.kt)("td",{parentName:"tr",align:null},"HIGH"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTER"),(0,r.kt)("td",{parentName:"tr",align:null},"LOW"),(0,r.kt)("td",{parentName:"tr",align:null},"CENTER")))),(0,r.kt)("p",null,"For more details of the stick commands. See the ",(0,r.kt)("a",{parentName:"p",href:"https://betaflight.com/docs/development/Controls#Yaw%20Control%E2%80%8B"},"Betaflight Wiki here.")))}c.isMDXComponent=!0},64097:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Stability_1-ffa682b3fa035b7df24959c066740a6f.png"},4893:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Stability_2-036b7c5d0fb74b4a10c69db3c24dfe8f.png"},94189:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Stability_3-f307411be80469651e0a4a30d28dd02b.png"},18879:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Stability_4-b1a098cc439e2b317e1c96686ad2c1d8.png"},91861:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Stability_5-7481c6e6d5f19af31252f51f8cc8abac.png"}}]);