(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{6263:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[[...page]]",function(){return n(6817)}])},6817:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return h}});var l=n(5893),a=n(8202),i=n(2918),o=n.n(i),r=n(9008),u=n.n(r),d=n(4743),s=n(5152),c=n.n(s);let m=[{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",overflow:"hidden",minHeight:"20px",width:"100%"}},component:{name:"Infoblock",options:{heading:"Heading",description:"Description"}}}];a.Ib.registerComponent(c()(()=>n.e(515).then(n.bind(n,9515)).then(e=>({default:e.Heading})),{loadableGenerated:{webpack:()=>[9515]}}),{name:"Heading",inputs:[{name:"content",type:"text",defaultValue:"Heading"},{name:"size",type:"text",enum:["sm","md","lg"],defaultValue:"sm"}]}),a.Ib.registerComponent(c()(()=>Promise.all([n.e(333),n.e(150)]).then(n.bind(n,2150)).then(e=>({default:e.BodyText})),{loadableGenerated:{webpack:()=>[2150]}}),{name:"BodyText",inputs:[{name:"content",type:"richText"},{name:"variant",type:"text",enum:["default","black","yellow","yellow-dark"],defaultValue:"default"},{name:"icon",type:"file",allowedFileTypes:["svg"]},{name:"direction",type:"text",enum:["horizontal","vertical"],defaultValue:"horizontal"},{name:"iconHeight",type:"number",defaultValue:20},{name:"iconWidth",type:"number",defaultValue:20}]}),a.Ib.registerComponent(c()(()=>Promise.all([n.e(333),n.e(153)]).then(n.bind(n,9153)).then(e=>({default:e.InfoGraphic})),{loadableGenerated:{webpack:()=>[9153]}}),{name:"Infoblock",inputs:[{name:"heading",type:"text",defaultValue:"Heading"},{name:"description",type:"longText",defaultValue:"Description"},{name:"badge",type:"text"},{name:"variant",type:"text",enum:["default","filled","summary"],defaultValue:"default"},{name:"direction",type:"text",enum:["horizontal","vertical"],defaultValue:"vertical"},{name:"headingSize",type:"text",enum:["sm","md","lg","xl"],defaultValue:"sm"},{name:"isReverse",type:"boolean",defaultValue:!1},{name:"icon",type:"file",allowedFileTypes:["svg"]},{name:"iconHeight",type:"number",defaultValue:20},{name:"iconWidth",type:"number",defaultValue:20}]}),a.Ib.registerComponent(a.oe,{name:"Grid",inputs:[{name:"columns",type:"array",broadcast:!0,subFields:[{name:"blocks",type:"array",hideFromUI:!0},{name:"width",type:"number",hideFromUI:!0,helperText:"Width %, e.g. set to 50 to fill half of the space"},{name:"link",type:"url",helperText:"Optionally set a URL that clicking this column will link to"}],defaultValue:[{blocks:m},{blocks:m}],onChange:e=>{function t(){e.columns.forEach(e=>{e.delete("width")})}let n=e.get("columns");if(Array.isArray(n)){let e=!!n.find(e=>e.get("width"));if(e){let e=!!n.find(e=>!e.get("width"));if(e)t();else{let e=n.reduce((e,t)=>e+t.get("width"),0);100!==e&&t()}}}}},{name:"space",type:"number",defaultValue:8,helperText:"Size of gap between columns",advanced:!0},{name:"stackColumnsAt",type:"string",defaultValue:"never",helperText:"Convert horizontal columns to vertical at what device size",enum:["tablet","mobile","never"],advanced:!0},{name:"reverseColumnsWhenStacked",type:"boolean",defaultValue:!1,helperText:"When stacking columns for mobile devices, reverse the ordering",advanced:!0}]}),a.Ib.registerComponent(c()(()=>Promise.all([n.e(333),n.e(10)]).then(n.bind(n,7010)).then(e=>({default:e.Banner})),{loadableGenerated:{webpack:()=>[7010]}}),{name:"Banner",inputs:[{name:"backgroundImage",type:"file",allowedFileTypes:["jpeg","jpg","png"],defaultValue:null},{name:"content",type:"string",defaultValue:"Banner"},{name:"link",type:"link"},{name:"backgroundType",type:"text",enum:["default","accent"],defaultValue:"default"},{name:"icon",type:"file",allowedFileTypes:["svg"]},{name:"iconHeight",type:"number",defaultValue:20},{name:"iconWidth",type:"number",defaultValue:20}]}),a.Ib.registerComponent(c()(()=>n.e(274).then(n.bind(n,7274)).then(e=>({default:e.BottomSheet})),{loadableGenerated:{webpack:()=>[7274]}}),{defaultStyles:{margin:"0px"},name:"BottomSheet",inputs:[{name:"id",type:"string",required:!0}],defaultChildren:[{"@type":"@builder.io/sdk:Element",component:{name:"Text",options:{text:"Bottom sheet default content!"}}}]}),a.Ib.registerComponent(c()(()=>n.e(250).then(n.bind(n,250)).then(e=>({default:e.Box})),{loadableGenerated:{webpack:()=>[250]}}),{defaultStyles:{margin:"0px"},name:"BoxView",defaultChildren:[{"@type":"@builder.io/sdk:Element",component:{name:"Text",options:{text:"Box content"}}}]}),a.Ib.registerComponent(c()(()=>Promise.all([n.e(333),n.e(651)]).then(n.bind(n,5651)).then(e=>({default:e.Summary})),{loadableGenerated:{webpack:()=>[5651]}}),{name:"Summary",defaultStyles:{margin:"0px"},defaultChildren:[{"@type":"@builder.io/sdk:Element",component:{name:"Text",options:{text:"Summary default content!"}}}],inputs:[{name:"logo",type:"file",allowedFileTypes:["jpeg","jpg","png"]},{name:"link",type:"link"},{name:"linkIcon",type:"file",allowedFileTypes:["svg"]},{name:"backgroundImage",type:"file",allowedFileTypes:["jpeg","jpg","png"]},{name:"gradient",type:"string"},{name:"linIconHeight",type:"number",defaultValue:20},{name:"linIconWidth",type:"number",defaultValue:20}]}),a.Ib.registerComponent(c()(()=>n.e(721).then(n.bind(n,8721)).then(e=>({default:e.DropDown})),{loadableGenerated:{webpack:()=>[8721]}}),{name:"DropDown",inputs:[{name:"title",type:"string",defaultValue:"Title"},{name:"initialOpen",type:"boolean",defaultValue:!1},{name:"emoji",type:"string",defaultValue:"\uD83D\uDC4B"}],defaultChildren:[{"@type":"@builder.io/sdk:Element",component:{name:"Text",options:{text:"DropDown default content!"}}}]});let p="ffbb056c7c114e4080317099b533d26f";if(!p)throw Error("No Builder.io API key found as environment variable: ".concat(p));a.fl.init(p);var f=!0;function h(e){var t;let{page:n}=e,i=(0,a.nJ)(),r=(0,d.aB)(n);return((0,d.HS)([n]),n||i)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u(),{children:(0,l.jsx)("title",{children:null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.title})}),(0,l.jsx)(d.iz,{children:(0,l.jsxs)("div",{className:"w-full h-full bg-white text-black dark:bg-[#131416] dark:text-white overflow-auto px-4",children:[(0,l.jsx)(b,{}),(0,l.jsx)(a.VD,{ref:r,model:"page",content:n||void 0})]})})]}):(0,l.jsx)(o(),{statusCode:404})}let b=()=>{let e=(0,a.nJ)();return e?(0,l.jsx)("button",{className:"rounded bg-gray-500 text-white dark:bg-gray-50 dark:text-black px-2 py-1 text-sm",type:"button",onClick:()=>{let e=document.querySelector("html");e&&(e.classList.contains("dark")?e.classList.remove("dark"):e.classList.add("dark"))},children:"Toggle Theme"}):null}},4743:function(e,t,n){"use strict";n.d(t,{HS:function(){return c},Ow:function(){return u},aB:function(){return s},bp:function(){return r},iz:function(){return d}});var l,a=n(5893),i=n(7294);let o=(0,i.createContext)(null),r=()=>(0,i.useContext)(o),u=()=>{var e;return null!==(l=null===(e=r())||void 0===e?void 0:e.hasBottomSheet)&&void 0!==l&&l},d=e=>{let{children:t}=e,[n,l]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let e=!1,t=function(){let e=window.location.hash.slice(1),t={};return e?(m.forEach(n=>{var l,a;let[i,o]=e.split(n);for(let e=0;e<(null!==(l=null==o?void 0:o.length)&&void 0!==l?l:0);e++){let l=null==o?void 0:o.charAt(e);"number"!=typeof+l||isNaN(+l)||(t[n]=(null!==(a=t[n])&&void 0!==a?a:"")+l);let i=null==o?void 0:o.charAt(e+1);if("number"!=typeof+i||isNaN(+i))break}}),t):{}}();if(!e){var n;l(null!==(n=t["show-bottomsheet"])&&void 0!==n?n:null)}return()=>{e=!0}},[]),(0,a.jsx)(o.Provider,{value:{bottomSheetId:n,hasBottomSheet:null!==n},children:t})};function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let[l,a]=(0,i.useState)(!1),o=(0,i.useRef)(null),r=(0,i.useCallback)(e=>{let t=e[0];if(t){var n,a,i;let e=null!==(a=null===(n=t.contentBoxSize[0])||void 0===n?void 0:n.blockSize)&&void 0!==a?a:0,o={action:"resize_webview",height:null!==(i=null==e?void 0:e.toString())&&void 0!==i?i:"0"};l||console.log(JSON.stringify(o,null,2));let r=null==window?void 0:window.flutter_inappwebview;null==r||r.callHandler("handler",o)}},[l]),u=(0,i.useCallback)(function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return function(){for(var l=arguments.length,a=Array(l),i=0;i<l;i++)a[i]=arguments[i];clearTimeout(t),t=setTimeout(()=>{clearTimeout(t),e.apply(this,a)},n)}}(r,500),[r]);return(0,i.useEffect)(()=>{let e=()=>a(!0);return window.addEventListener("flutterInAppWebViewPlatformReady",e),()=>{window.removeEventListener("flutterInAppWebViewPlatformReady",e)}},[...t]),(0,i.useEffect)(()=>{var e,t;let n=new ResizeObserver(u);return(null===(e=o.current)||void 0===e?void 0:e.ref)&&n.observe(null===(t=o.current)||void 0===t?void 0:t.ref),()=>{n.disconnect()}},[...t]),o}function c(e){let[t,n]=(0,i.useState)(!1),l=(0,i.useCallback)(e=>{let{href:n}=e.currentTarget,l=n.split("?").at(-1),a=new URLSearchParams(l);if(a.has("action")){e.preventDefault();let n=a.get("action");a.delete("action");let l={action:n,params:Array.from(a.entries()).reduce((e,t)=>{let[l,a]=t;return"open_bottom_sheet"===n?e.webview_url="".concat(window.location.pathname,"#show-bottomsheet-").concat(a):e[l]=a,e},{})};t||console.log(JSON.stringify(l,null,2));let i=null==window?void 0:window.flutter_inappwebview;null==i||i.callHandler("handler",l)}},[t]);(0,i.useEffect)(()=>{let e=()=>n(!0);return window.addEventListener("flutterInAppWebViewPlatformReady",e),()=>{window.removeEventListener("flutterInAppWebViewPlatformReady",e)}},[...e]),(0,i.useEffect)(()=>{let e=document.querySelectorAll("a");return e.forEach(e=>{e.addEventListener("click",l)}),()=>{e.forEach(e=>{e.removeEventListener("click",l)})}},[l,...e])}let m=["show-bottomsheet"]}},function(e){e.O(0,[423,774,888,179],function(){return e(e.s=6263)}),_N_E=e.O()}]);