"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{6010:function(e,t,n){function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(l&&(l+=" "),l+=r);else for(n in t)t[n]&&(l&&(l+=" "),l+=n)}return l}(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{W:function(){return r}}),t.Z=r},9515:function(e,t,n){n.r(t),n.d(t,{Heading:function(){return a}});var r=n(7294),l=n(8735);let u={sm:"h3",md:"h2",lg:"h1"},i=(0,l.j)(["text-neutral-100 font-mazzard-h font-medium dark:text-white"],{variants:{size:{sm:["text-base"],md:["text-lg leading-6"],lg:["text-2xl"]}}}),a=e=>{let{content:t="Block Title - L",size:n="sm"}=e;return(0,r.createElement)(u[n],{children:t,className:i({size:n})})}},8735:function(e,t,n){n.d(t,{j:function(){return i}});var r=n(6010);let l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,u=r.Z,i=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return u(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:a}=t,s=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],r=null==a?void 0:a[e];if(null===t)return null;let u=l(t)||l(r);return i[e][u]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...l}=t;return Object.entries(l).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...a,...o}[t]):({...a,...o})[t]===n})?[...e,n,r]:e},[]);return u(e,s,c,null==n?void 0:n.class,null==n?void 0:n.className)}}}]);