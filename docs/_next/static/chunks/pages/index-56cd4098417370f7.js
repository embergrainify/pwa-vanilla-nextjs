(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4186)}])},4186:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var l=t(5893),s=t(9008),i=t.n(s),r=t(7294);let a=()=>{console.log("test1");let e=document.getElementById("container"),n=document.createElement("img");n.src="".concat("/pwa-vanilla-nextjs","/vercel.svg"),null==e||e.appendChild(n)},c=()=>{console.log("test2");let e=document.getElementById("container"),n=document.createElement("img");n.src="http://localhost:3000/pwa-vanilla-nextjs/pic01.png",null==e||e.appendChild(n)};function o(){let e=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{if(!e.current){if(console.log("didRunOnce"),e.current=!0,"serviceWorker"in navigator){console.log("serviceWorker in navigator"),navigator.serviceWorker.register("".concat("/pwa-vanilla-nextjs","/serviceworker.js")).then(e=>console.log("serviceworker registered",e)).catch(e=>console.log("serviceworker failed to register",e));let n=async()=>{let e=await navigator.serviceWorker.ready;e.addEventListener("updatefound",n=>{let t=e.installing;t.addEventListener("statechange",e=>{"installed"==t.state&&console.log("index.tsx / New service worker is installed, but waiting activation")})})};n()}else console.log("not found serviceWorker in navigator")}},[]),(0,l.jsxs)("div",{children:[(0,l.jsxs)(i(),{children:[(0,l.jsx)("title",{children:"pwa-vanilla-nextjs"}),(0,l.jsx)("meta",{name:"description",content:"Progressive Web App - Vanilla - Next.JS"}),(0,l.jsx)("link",{rel:"icon",href:"".concat("/pwa-vanilla-nextjs","/favicon.ico")})]}),(0,l.jsxs)("div",{id:"container",className:"flex flex-col justify-center items-center gap-4",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold",children:"Progressive Web App - Vanilla - Next.JS"}),(0,l.jsx)("button",{className:"rounded-lg px-8 py-2 bg-red-600 text-gray-100",onClick:a,children:"Test1"}),(0,l.jsx)("button",{className:"rounded-lg px-8 py-2 bg-green-600 text-gray-100",onClick:c,children:"Test2"}),(0,l.jsx)("img",{src:"".concat("/pwa-vanilla-nextjs","/vercel.svg")}),(0,l.jsx)("div",{className:"w-64 h-64 bg-slate-400",children:(0,l.jsx)("img",{src:"http://localhost:3000/pwa-vanilla-nextjs/pic01.png"})})]})]})}},9008:function(e,n,t){e.exports=t(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
//# sourceMappingURL=index-56cd4098417370f7.js.map