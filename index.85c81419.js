!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire2e47;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire2e47=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var n=u.default(e,t,"get");return l.default(e,n)};var u=c(o("1UHsN")),l=c(o("ffZzF"));function c(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){d.default(e,t),t.set(e,n)};var f,d=(f=o("5k7tO"))&&f.__esModule?f:{default:f};var p={};function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,n){t&&v(e.prototype,t);n&&v(e,n);return e};var h=new WeakMap,y=function(){"use strict";function t(){e(i)(this,t),e(s)(this,h,{writable:!0,value:"https://www.thecocktaildb.com/api/json/v1/1/search.php"}),this.query=null,this.letter=null}return e(p)(t,[{key:"fetchCoctail",value:function(){return fetch("".concat(e(a)(this,h),"?s=").concat(this.query)).then((function(e){return e.json()}))}},{key:"firstLetter",value:function(){return fetch("".concat(e(a)(this,h),"?f=").concat(this.letter)).then((function(e){return e.json()}))}}]),t}(),g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e){return b.default(e)||m.default(e)||w.default(e)||_.default()};var b=M(o("kMC0W")),m=M(o("7AJDX")),_=M(o("8CtQK")),w=M(o("auk6i"));function M(e){return e&&e.__esModule?e:{default:e}}var x=function(e){return e.map((function(e){var t=e.strDrink,n=e.strDrinkThumb,r=e.strGlass;return"\n<li>\n<img src = ".concat(n,' alt="').concat(r,'">\n<p>').concat(t,"</p>\n</li>\n")})).join("")};function k(t,n,r){for(var o=Math.floor(r/2),i=n-o,a=1+o,u=[],l=[],c=[],s=[],f=i;f<=n;f++)l.push(f);for(var d=1;d<=a;d++)c.push(d);for(var p=n-r+1;p<l[0];p++)s.push(p);if(n<=r)for(var v=1;v<=n;v++)u.push(v);else{if(t<a)u=e(g)(c).concat(["...",n]);else if(t>=a){for(var h=t;h<=t+o;h++)u.push(h-1);u.push("..."),u.push(n)}t>=i&&(u=[1,"..."].concat(e(g)(l))),t!==i-1&&t!==i||(u=e(g)(s).concat(e(g)(l)))}return u}var C,j=document.querySelector(".pagination-number"),L=document.querySelector(".gallery"),O=9,P=7,S=[],E=1,T=window.innerWidth;function q(t){var n=t.drinks;A(n),S=e(g)(n)}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=(t-1)*O,r=n+O,o=e.slice(n,r);E=t,L.replaceChildren(),L.insertAdjacentHTML("beforeend",x(o)),j.replaceChildren();var i=Math.ceil(e.length/O);i>1&&(I(t),N(t,i,P),D(i,t))}function I(e){var t=document.createElement("button");t.classList.add("prev"),t.textContent="<",j.appendChild(t),e<2&&(t.disabled=!0)}function N(e,t,n){var r=k(e,t,n);return r.forEach((function(t,n){var o=document.createElement("button");o.classList.add("btn-pagination"),o.textContent=t,r[n]===e&&(o.classList.add("active"),o.disabled=!0),"..."===r[n]&&(o.disabled=!0),j.appendChild(o)}))}function D(e,t){var n=document.createElement("button");n.classList.add("next"),n.textContent=">",j.appendChild(n),e===t&&(n.disabled=!0)}function H(){(T=window.innerWidth)<768?(O=3,P=5):O=T<1280?6:9,localStorage.setItem("PerPages",JSON.stringify(O))}null!==(C=JSON.parse(localStorage.getItem("PerPage")))&&(O=parseInt(C)),j.addEventListener("click",(function(e){e.target.classList.contains("next")&&(E++,A(S,E))})),j.addEventListener("click",(function(e){e.target.classList.contains("prev")&&(E--,A(S,E))})),j.addEventListener("click",(function(e){if(e.target.classList.contains("btn-pagination")){var t=+e.target.textContent;A(S,t)}})),window.addEventListener("resize",H),H();var U=document.querySelector("form"),W=document.querySelector(".gallery"),z=document.querySelector(".container"),J=document.querySelector(".pagination-number"),F=document.querySelector(".container-gallery"),K=new y;function Q(e){var t=document.createElement("h2");t.classList.add("gallery__title"),t.textContent=e,F.insertBefore(t,F.firstChild)}U.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.input.value.trim();if(!t)return;K.query=t,W.innerHTML="",J.innerHTML="",F.firstChild.remove(),K.fetchCoctail().then((function(e){e.drinks?(Q("Cocktails"),q(e),U.reset()):Q("Sorry, we didn't find any cocktail for you")}))})),z.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;var t=e.target.textContent;if(K.letter=t,!K.letter)return;W.innerHTML="",J.innerHTML="",F.firstChild.remove(),K.firstLetter().then((function(e){null!==e.drinks?(Q("Searching results"),q(e)):Q("Sorry, we didn't find any cocktail for you")}))}))}();
//# sourceMappingURL=index.85c81419.js.map
