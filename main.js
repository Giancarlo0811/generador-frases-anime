(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),o=n.n(r),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(820),n.b),u=c()(o());u.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap);"]);var l=s()(d);u.push([e.id,`* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    background-image: url(${l});\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    gap: 2rem;\n}\n\n#content {\n    background-color: #f4f3f3;\n    width: 50%;\n    padding: 2rem;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5rem;\n    margin-bottom: 6rem;\n}\n\n.header {\n    margin-top: 1rem;\n    background-color: #333;\n    opacity: .9;\n    width: 100%;\n    padding: 1.5rem;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.title {\n    color: #fff;\n    font-size: 4rem;\n    text-align: center;\n    font-weight: bold;\n}\n\n.links-container {\n    width: 100%;\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n}\n\n.link-btn,\n.generate-quote,\n.submit-btn {\n    padding: 1rem;\n    font-size: 1.7rem;\n    border: 1px solid #333;\n    background-color: #fff;\n    cursor: pointer;\n    text-align: center;\n    transition: all .2s ease-in;\n}\n\n.link-btn:hover,\n.generate-quote:hover,\n.submit-btn:hover {\n    background-color: #333;\n    color: #fff;\n}\n\n.generate-quote i {\n    margin: 0 .5rem;\n}\n\n.link-btn.active {\n    background-color: #333;\n    color: #fff;\n}\n\n.quote-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1.5rem;\n    width: 100%;\n}\n\n#quote {\n    font-size: 2rem;\n    color: #333;\n    text-align: center;\n}\n\n#character-name,\n#anime-name {\n    font-size: 1.5rem;\n    color: #333;\n}\n\n.user-input {\n    width: 50%;\n    padding: 1rem;\n    outline: none;\n    border: 1px solid #333;\n    color: #333;\n    background-color: #fff;\n    font-size: 1.5rem;\n}\n\nfooter {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #333;\n}\n\nfooter p {\n    font-size: 1.5rem;\n    color: #fff;\n}\n\nfooter a {\n    font-size: 2rem;\n    color: #fff;\n    text-decoration: none;\n}\n\n@media(max-width: 768px) {\n    html {\n        font-size: 50%;\n    }\n    #content {\n        width: 90%;\n    }\n    .user-input {\n        width: 50%;\n    }\n    .links-container {\n        width: 30%;\n    }\n}`,""]);const m=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var m=n(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=o(p,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},820:(e,t,n)=>{e.exports=n.p+"01b43ba82fed6b8c8ae6.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),u=n.n(d),l=n(589),m=n.n(l),p=n(426),f={};async function h(e,t){const n=document.querySelector("#quote"),r=document.querySelector("#character-name"),o=document.querySelector("#anime-name"),a=await fetch(e+t,{mode:"cors"});if(404==a.status||400==a.status)alert("Introduce un anime correcto");else{let e=await a.json();n.textContent=`"${e.quote}"`,r.textContent=`Personaje: ${e.character}`,o.textContent=`Anime: ${e.anime}`}}f.styleTagTransform=m(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v=function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("quote-container"),e.appendChild(t);const n=document.createElement("p");n.setAttribute("id","quote"),t.appendChild(n);const r=document.createElement("p");r.setAttribute("id","character-name"),t.appendChild(r);const o=document.createElement("p");o.setAttribute("id","anime-name"),t.appendChild(o);const a=document.createElement("button");a.classList.add("generate-quote");const c=document.createElement("i");c.classList.add("fa-solid","fa-arrows-rotate"),a.textContent="Nueva Frase",a.appendChild(c),t.appendChild(a),document.querySelector(".generate-quote").addEventListener("click",(async()=>{await async function(e){const t=document.querySelector("#quote"),n=document.querySelector("#character-name"),r=document.querySelector("#anime-name"),o=await fetch(e,{mode:"cors"});let a=await o.json();t.textContent=`"${a.quote}"`,n.textContent=`Personaje: ${a.character}`,r.textContent=`Anime: ${a.anime}`}("https://animechan.xyz/api/random")}))};function b(){const e=document.querySelector("#content"),t=e.children[1];t&&e.removeChild(t)}(function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("links-container"),e.appendChild(t);const n=["Random","Por Anime","Por Personaje"];for(let e=0;e<n.length;e++){const r=document.createElement("button");r.classList.add("link-btn"),r.textContent=n[e],t.appendChild(r)}t.children[0].setAttribute("id","random-quote"),t.children[1].setAttribute("id","anime-name-quote"),t.children[2].setAttribute("id","character-quote");const r=document.querySelector("#random-quote"),o=document.querySelector("#anime-name-quote"),a=document.querySelector("#character-quote");r.addEventListener("click",(()=>{b(),v(),r.classList.add("active"),(o.classList.contains("active")||a.classList.contains("active"))&&(o.classList.remove("active"),a.classList.remove("active"))})),o.addEventListener("click",(()=>{b(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("quote-container"),e.appendChild(t);const n=document.createElement("input");n.classList.add("user-input"),n.setAttribute("id","anime-input"),n.placeholder="Nombre del Anime",t.appendChild(n);const r=document.createElement("p");r.setAttribute("id","quote"),t.appendChild(r);const o=document.createElement("p");o.setAttribute("id","character-name"),t.appendChild(o);const a=document.createElement("p");a.setAttribute("id","anime-name"),t.appendChild(a);const c=document.createElement("button");c.classList.add("submit-btn"),c.setAttribute("id","anime-name-btn"),c.textContent="Buscar Frase",t.appendChild(c),function(){const e=document.querySelector(".submit-btn"),t=document.querySelector(".user-input");e.addEventListener("click",(()=>{h("https://animechan.xyz/api/random/anime?title=",t.value),t.value=""}))}()}(),o.classList.add("active"),(r.classList.contains("active")||a.classList.contains("active"))&&(r.classList.remove("active"),a.classList.remove("active"))})),a.addEventListener("click",(()=>{b(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("quote-container"),e.appendChild(t);const n=document.createElement("input");n.classList.add("user-input"),n.setAttribute("id","character-input"),n.placeholder="Nombre del Personaje",t.appendChild(n);const r=document.createElement("p");r.setAttribute("id","quote"),t.appendChild(r);const o=document.createElement("p");o.setAttribute("id","character-name"),t.appendChild(o);const a=document.createElement("p");a.setAttribute("id","anime-name"),t.appendChild(a);const c=document.createElement("button");c.classList.add("submit-btn"),c.setAttribute("id","character-name-btn"),c.textContent="Buscar Frase",t.appendChild(c),function(){const e=document.querySelector(".submit-btn"),t=document.querySelector(".user-input");e.addEventListener("click",(()=>{h("https://animechan.xyz/api/random/character?name=",t.value),t.value=""}))}()}(),a.classList.add("active"),(o.classList.contains("active")||r.classList.contains("active"))&&(o.classList.remove("active"),r.classList.remove("active"))}))})(),v(),document.querySelector("#random-quote").classList.add("active")})()})();