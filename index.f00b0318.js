function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire2e47;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire2e47=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var n=a.default(e,t,"get");return l.default(e,n)};var a=c(o("fExtF")),l=c(o("iaRLo"));function c(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){d.default(e,t),t.set(e,n)};var u,d=(u=o("7K24o"))&&u.__esModule?u:{default:u};var f=new WeakMap;const h=(e,t)=>{const n=t-e+1;return Array.from({length:n},((t,n)=>e+n))},p=(e,t,n)=>Math.min(Math.max(e,t),n),g=(e,t,n,r=5)=>{let o;e=p(e,1,t);const i=(n=p(n,r,t))-3;o=t<=n?n:e<i||e>t-i?i:n-5;const a={start:Math.round(e-o/2),end:Math.round(e+o/2)};a.start-1!=1&&a.end+1!==t||(a.start+=1,a.end+=1);let l=e>o?h(Math.min(a.start,t-o),Math.min(a.end,t)):h(1,Math.min(t,o+1));e>t-i&&t>n&&(l=h(t-o,t));const c=(e,n)=>l.length+1!==t?n:[e],s=l[l.length-1];return 1!==l[0]&&(l=c(1,[1,"..."]).concat(l)),s&&s<t&&(l=l.concat(c(t,["...",t]))),l},m=document.querySelector("#pagination"),y=document.querySelector(".gallery"),v=document.querySelectorAll(".btn-pagination");function b(e,t=1){const n=1*(t-1),r=n+1,o=e.slice(n,r);console.log(t),y.replaceChildren(),y.insertAdjacentHTML("beforeend",o.map((({strDrink:e,strDrinkThumb:t,strGlass:n})=>`\n<li>\n<img src = ${t} alt="${n}">\n<p>${e}</p>\n</li>\n`)).join(""));const i=Math.ceil(e.length/1);m.replaceChildren();const a=g(t,i,7);a.forEach(((e,n)=>{const r=document.createElement("button");r.classList.add("btn-pagination"),r.textContent=e,a[n]===t&&r.classList.add("active"),m.appendChild(r)}))}function _(e){v&&m.addEventListener("click",(t=>{if(!t.target.classList.contains("btn-pagination"))return;const n=+t.target.textContent;b(e,n)})),b(e)}const C=document.querySelector("form"),M=document.querySelector(".gallery"),w=document.querySelector(".container"),x=document.querySelector("#pagination"),q=document.querySelector(".container-gallery"),L=new class{fetchCoctail(){return fetch(`${e(i)(this,f)}?s=${this.query}`).then((e=>e.json()))}firstLetter(){return fetch(`${e(i)(this,f)}?f=${this.letter}`).then((e=>e.json()))}constructor(){e(s)(this,f,{writable:!0,value:"https://www.thecocktaildb.com/api/json/v1/1/search.php"}),this.page=1,this.query=null,this.letter=null}};function k(e){const t=document.createElement("h2");t.classList.add("gallery__title"),t.textContent=e,q.insertBefore(t,q.firstChild)}C.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.input.value.trim();if(!t)return;L.query=t,M.replaceChildren(),x.replaceChildren(),q.firstChild.remove(),L.fetchCoctail().then((e=>{e.drinks?(k("Cocktails"),_(e.drinks),C.reset()):k("Sorry, we didn't find any cocktail for you")}))})),w.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;const t=e.target.textContent;L.letter=t,L.query=null,M.replaceChildren(),x.replaceChildren(),q.firstChild.remove(),L.firstLetter().then((e=>{e.drinks?(k("Searching results"),_(e.drinks)):console.log("bad")}))}));
//# sourceMappingURL=index.f00b0318.js.map
