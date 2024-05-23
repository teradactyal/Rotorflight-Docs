"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(r),c=n,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||i;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:20},l="Getting started with LEDs",o={unversionedId:"Tutorial-Walkthroughs/led-strip-quick-start",id:"Tutorial-Walkthroughs/led-strip-quick-start",title:"Getting started with LEDs",description:"Introduction to LED strips",source:"@site/docs/Tutorial-Walkthroughs/led-strip-quick-start.md",sourceDirName:"Tutorial-Walkthroughs",slug:"/Tutorial-Walkthroughs/led-strip-quick-start",permalink:"/docs/Tutorial-Walkthroughs/led-strip-quick-start",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Walkthroughs/led-strip-quick-start.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Adding an extra servo",permalink:"/docs/Tutorial-Walkthroughs/Extra-servo"}},s={},u=[{value:"Introduction to LED strips",id:"introduction-to-led-strips",level:2},{value:"Create a LED_STRIP resource",id:"create-a-led_strip-resource",level:2},{value:"Testing hardware",id:"testing-hardware",level:2},{value:"The <em>LED Strip</em> tab",id:"the-led-strip-tab",level:2},{value:"Define the 3 LEDs",id:"define-the-3-leds",level:3},{value:"To create the green navigation light",id:"to-create-the-green-navigation-light",level:3},{value:"To create the red ACL light",id:"to-create-the-red-acl-light",level:3},{value:"To create the white landing light",id:"to-create-the-white-landing-light",level:3},{value:"FlyDragon F722",id:"flydragon-f722",level:3},{value:"1. Remap RPM-S to LED_STRIP",id:"1-remap-rpm-s-to-led_strip",level:4},{value:"2. Remap F.Port to LED_STRIP",id:"2-remap-fport-to-led_strip",level:4},{value:"Flywing HELI405",id:"flywing-heli405",level:3}],p={toc:u},h="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-leds"},"Getting started with LEDs"),(0,n.kt)("h2",{id:"introduction-to-led-strips"},"Introduction to LED strips"),(0,n.kt)("p",null,"Rotorflight supports up to 32 individually addressable WS2811/2812 RGB LEDs. You can control them with just one data pin, and set the brightness and color of each led individually. LEDs can have different functions, for example display a color, visualize warnings or battery state, or just blink. This walk-through will show you how to set up a simple LED strip with some scale lights."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GB6hGU9MKpI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowfullscreen:!0}),(0,n.kt)("p",null,"Each LED has 4 pins: 5V, ground, ",(0,n.kt)("em",{parentName:"p"},"data in")," and ",(0,n.kt)("em",{parentName:"p"},"data out"),". The FC should be connected to ",(0,n.kt)("em",{parentName:"p"},"data in")," of the first LED. ",(0,n.kt)("em",{parentName:"p"},"Data out")," of the first LED should be connected to ",(0,n.kt)("em",{parentName:"p"},"data in")," of the second LED. And the ",(0,n.kt)("em",{parentName:"p"},"data out")," of the second LED should again be connected to ",(0,n.kt)("em",{parentName:"p"},"data in")," of the third LED. And so on."),(0,n.kt)("p",null,"There are ready made WS2812 strips with 30, 60 or 144 LEDs per meter. That's great for testing or maybe on the boom for some night flying, but there are also more conventional WS2811 5mm and 8mm LEDs available. Those are more suited for scale lighting."),(0,n.kt)("p",null,"There are quite a lot of tutorials/videos for Betaflight, and Rotorflight supports all the functions of Betaflight 4.3. In addition, Rotorflight supports ",(0,n.kt)("em",{parentName:"p"},"scale lights"),", with which you can program anti collision lights, strobe lights or landing lights."),(0,n.kt)("h2",{id:"create-a-led_strip-resource"},"Create a LED_STRIP resource"),(0,n.kt)("p",null,"In order to use a LED strip, you'll need a LED_STRIP resource to which you can connect your LEDs. A LED_STRIP resource requires a timer and DMA should be enabled."),(0,n.kt)("p",null,"Some FCs might already have a LED_STRIP resource and then you can just use that pin. But if you want to use another pin on your FC, or if your FC doesn't have a LED_STRIP resource, you'll need to do some resource remapping. For example, to use the TX pin of port B on the Radiomaster Nexus as LED_STRIP, enter the following in the CLI:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"resource SERIAL_TX 6 NONE\nresource LED_STRIP 1 C07\ntimer C07 AF3    # TIM8, default is also AF3\ndma pin C07 0    # default is NONE\nsave\n")),(0,n.kt)("p",null,"Now go to the ",(0,n.kt)("em",{parentName:"p"},"Configuration")," tab and enable ",(0,n.kt)("em",{parentName:"p"},"LED_STRIP")," under ",(0,n.kt)("em",{parentName:"p"},"Features"),". Press ",(0,n.kt)("em",{parentName:"p"},"Save and reboot"),"."),(0,n.kt)("h2",{id:"testing-hardware"},"Testing hardware"),(0,n.kt)("p",null,"A piece of LED strip is ideal for testing. I'll be using one with 3 LEDs connected to Port B on the Nexus. Wiring is simple: just connect 5V, ground and LED_STRIP (formerly known as TX6) to the strip."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Wiring",src:r(44313).Z,width:"3377",height:"1545"})),(0,n.kt)("h2",{id:"the-led-strip-tab"},"The ",(0,n.kt)("em",{parentName:"h2"},"LED Strip")," tab"),(0,n.kt)("p",null,"Now go to the ",(0,n.kt)("em",{parentName:"p"},"LED Strip")," tab. Note that this tab will only be visible if you have the ",(0,n.kt)("em",{parentName:"p"},"LED_STRIP")," feature enabled under ",(0,n.kt)("em",{parentName:"p"},"Configuration"),"."),(0,n.kt)("p",null,"We're going to define:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a green navigation light that also functions as a strobe"),(0,n.kt)("li",{parentName:"ul"},"a red ACL light that slowly blinks"),(0,n.kt)("li",{parentName:"ul"},"a white landing light that can be operated from the TX.")),(0,n.kt)("p",null,"Connect the Nexus to the Configurator using USB. 5V will now be available on port A, B and C. If you're using many LEDs, consider using an external 5V power supply."),(0,n.kt)("h3",{id:"define-the-3-leds"},"Define the 3 LEDs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("em",{parentName:"li"},"Wire Ordening Mode"),". The 16x16 matrix will become greenish."),(0,n.kt)("li",{parentName:"ul"},"Select a square in the matrix. A '0' should now be displayed in it."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"Color")," as ",(0,n.kt)("em",{parentName:"li"},"Function")),(0,n.kt)("li",{parentName:"ul"},"Now select another square in the matrix. A '1' should now be displayed in it."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"Color")," again as ",(0,n.kt)("em",{parentName:"li"},"Function")),(0,n.kt)("li",{parentName:"ul"},"Select yet another square in the matrix. A '2' should now be displayed in it."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"Color")," as ",(0,n.kt)("em",{parentName:"li"},"Function")),(0,n.kt)("li",{parentName:"ul"},"Press ",(0,n.kt)("em",{parentName:"li"},"Save"))),(0,n.kt)("p",null,"Your screen might now look like this, although the actual position of the three squares will likely be different:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LED Profile Adjustments",src:r(37459).Z,width:"1225",height:"782"})),(0,n.kt)("h3",{id:"to-create-the-green-navigation-light"},"To create the green navigation light"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select the square with '0' in it"),(0,n.kt)("li",{parentName:"ul"},"In the color palette, left-click on green. The LED should now light up."),(0,n.kt)("li",{parentName:"ul"},"If you find the LED too bright, adjust the overal LED brightness under ",(0,n.kt)("em",{parentName:"li"},"LED Strip Global Settings")),(0,n.kt)("li",{parentName:"ul"},"Enable ",(0,n.kt)("em",{parentName:"li"},"Blink")," and set one checkmark. The LED wil now shortly turn off (=black)."),(0,n.kt)("li",{parentName:"ul"},"In the color palette, right-click on white. Now the LED will shortly flash a white light."),(0,n.kt)("li",{parentName:"ul"},"Press ",(0,n.kt)("em",{parentName:"li"},"Save"))),(0,n.kt)("h3",{id:"to-create-the-red-acl-light"},"To create the red ACL light"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select the square with '1' in it"),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"Blink")," and set some check marks next to each other"),(0,n.kt)("li",{parentName:"ul"},"Right-click the red color. The second LED should now flash red"),(0,n.kt)("li",{parentName:"ul"},"Press ",(0,n.kt)("em",{parentName:"li"},"Save"))),(0,n.kt)("h3",{id:"to-create-the-white-landing-light"},"To create the white landing light"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select the square with '2' in it"),(0,n.kt)("li",{parentName:"ul"},"Enable the ",(0,n.kt)("em",{parentName:"li"},"Fade to alt color")," feature"),(0,n.kt)("li",{parentName:"ul"},"Left-click white. The LED should now light up"),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("em",{parentName:"li"},"Status Alt")," next to ",(0,n.kt)("em",{parentName:"li"},"Profile"),", under ",(0,n.kt)("em",{parentName:"li"},"LED Strip Global Settings"),". The LED should now dim."),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("em",{parentName:"li"},"Fade rate")," to 10 to dim slowly"),(0,n.kt)("li",{parentName:"ul"},"Press ",(0,n.kt)("em",{parentName:"li"},"Save")),(0,n.kt)("li",{parentName:"ul"},"You can use ",(0,n.kt)("em",{parentName:"li"},"Adjustments")," to switch the LED profile from your transmitter. It might look something like:")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LED Profile Adjustments",src:r(84939).Z,width:"1622",height:"445"})),(0,n.kt)("p",null,"Here's another video showing the techniques used in this Quick Start on a Walkera 4F200LM, for which I used two 3mm and four 5mm LEDs."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/72LsrcEJEK0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowfullscreen:!0}),(0,n.kt)("h3",{id:"flydragon-f722"},"FlyDragon F722"),(0,n.kt)("p",null,"The FlyDragon F722 has a built in LED 'strip' with just one LED. It has the ",(0,n.kt)("a",{parentName:"p",href:"#warning"},"Warning overlay")," enabled by default and is connected to the FC using pin B08. However, the ",(0,n.kt)("em",{parentName:"p"},"data out")," pin of that LED isn't exposed, so you have to remap some other port to LED_STRIP to make use of your own LEDs. There are two options: RPM-S and F.Port."),(0,n.kt)("h4",{id:"1-remap-rpm-s-to-led_strip"},"1. Remap RPM-S to LED_STRIP"),(0,n.kt)("p",null,"RPM-S isn't connected to VBec and supplies 5V, which will probably be all right for a couple of LEDs."),(0,n.kt)("p",null,"To remap RPM-S to LED_STRIP, enter the following in the CLI:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"resource LED_STRIP 1 A08   # default is B08\ntimer A08 AF1              # TIM1\ndma pin A08 0\nsave\n")),(0,n.kt)("h4",{id:"2-remap-fport-to-led_strip"},"2. Remap F.Port to LED_STRIP"),(0,n.kt)("p",null,"Be careful: F.Port uses VBec, which might be too high for your LEDs. Most LEDs require 5V."),(0,n.kt)("p",null,"To remap F.Port to LED_STRIP, enter the following in the CLI:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"resource LED_STRIP 1 A02   # default is B08\ntimer A02 AF1              # TIM2\ndma pin A02 0\n# Change motor 1 timer from TIM2 to TIM5\ntimer A00 AF2\nsave\n")),(0,n.kt)("h3",{id:"flywing-heli405"},"Flywing HELI405"),(0,n.kt)("p",null,"You can remap SBUS to LED_STRIP on the Flywing HELI405. To do this, enter the following in the CLI:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"resource SERIAL_RX 2 NONE\nresource LED_STRIP 1 A03\ntimer A03 AF2\ndma pin A03 1\nsave\n")))}d.isMDXComponent=!0},84939:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ledstrip-adjustments-4595f17e8a84421e5fc23f417049eb09.png"},37459:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ledstrip-grid-94f8d398f658a24c7776fbc07633894c.png"},44313:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ledstrip-wiring-cc684e7e35799fac3c28f55937c931c3.jpg"}}]);