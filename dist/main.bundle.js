(()=>{"use strict";var e={426:(e,t,n)=>{var c=n(81),a=n.n(c),o=n(645);n.n(o)()(a()).push([e.id,".pointer{\n  cursor: pointer;\n\n}\n\n\n.esconder {\n  display: none;\n}\n\n.editImg {\n  display: inline-block;\n  width: 10%;\n}\n\n.addFlex{\n  display: flex;\n  flex-direction: column;\n\n}\n\n.add{\n  color: red;\n}\n\n.img{\n  width: 300px;\n}",""])},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",c=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),c&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),c&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,c,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(c)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(r[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);c&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}}},t={};function n(c){var a=t[c];if(void 0!==a)return a.exports;var o=t[c]={id:c,exports:{}};return e[c](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var c in t)n.o(t,c)&&!n.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var c=t.getElementsByTagName("script");if(c.length)for(var a=c.length-1;a>-1&&!e;)e=c[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})();var c={};(()=>{n.d(c,{$:()=>p,J:()=>h}),n(426);const e=n.p+"6c0b18e71abd8887ca84.jpg",t=n.p+"e601f5792f3f82e1f078.jpg",a=n.p+"cf81aca97655066664ef.jpg",o=n.p+"8633afe0fcbe95c26def.jpg",r=document.createElement("section"),i=document.createElement("article");r.appendChild(i);const d=document.createElement("h1"),s=document.createElement("h2");function l(){h(),document.querySelectorAll("li").forEach((e=>{console.log(e),e.addEventListener("click",(t=>{"Menu"===e.innerText&&(r.classList.remove("esconder"),i.classList.remove("esconder")),"Home"===e.innerText&&(console.log("oi"),r.classList.add("esconder"),i.classList.add("esconder"))}))}))}document.createElement("h3");class m{constructor(e,t,n){this.name=e,this.img=t,this.price=n}mostrarItens=()=>{const e=document.createElement("h3"),t=document.createElement("h4");i.appendChild(e),e.innerText=this.name,i.appendChild(t),t.innerText=this.price,i.appendChild(this.img)}}l(),class extends m{static addBebidas=()=>{const n=new Image;n.src=e,n.classList.add("img");const c=new m("Hot Chocolat",n,"2 R$"),a=new Image;a.src=t,a.classList.add("img");const o=new m("Icecream",a,"2 R$");c.mostrarItens(),o.mostrarItens()}}.addBebidas(),class extends m{static addSides=()=>{const e=new Image;e.src=a,e.classList.add("img"),new m("Small Milk",e,"1 R$").mostrarItens();const t=new Image;t.src=o,t.classList.add("img"),new m("Chocolate with fruit",t,"1 R$").mostrarItens()}}.addSides();const u=document.querySelector("#content"),p=document.querySelector("main");function h(){return document.querySelectorAll("li")}p.appendChild(u),function(){const e=document.querySelector("section"),t=document.createElement("h1");u.appendChild(e),e.appendChild(t),t.textContent="Fábrica de Cholocates";const n=document.createElement("article"),c=document.createElement("blockquote"),a=document.createElement("cite");e.appendChild(n),n.appendChild(c),c.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda ratione quod, ipsam aliquid autem fugiat repudiandae necessitatibus aut consequatur! ",e.appendChild(a),a.textContent=" Albert Einstein"}(),function(){const e=document.createElement("article2"),t=document.createElement("h2"),n=(document.createElement("table"),document.createElement("thead"),document.createElement("th"),["Sunday: 8am - 8pm","Monday: 6am - 6pm","Tuesday: 6am - 6pm","Wednesday: 6am - 6pm","Thursday: 6am - 10pm","Friday: 6am - 10pm","Saturday: 8am - 10pm"]),c=document.createElement("ul");u.appendChild(e),e.appendChild(t),e.appendChild(c),t.textContent="Schedule";for(let e=0;e<7;e++){const t=document.createElement("li");c.appendChild(t),t.innerText=n[e]}}(),function(){const e=document.createElement("article"),t=document.createElement("h2"),n=document.createElement("p");u.appendChild(e),e.appendChild(t),t.innerText="Location",e.appendChild(n),n.textContent="Netuno, Avenida Luiz Dias Harserhoff"}(),function(){const e=document.querySelector("header"),t=document.createElement("ul");e.appendChild(t);const n=["Home","Menu","Contact"];for(let e=0;e<3;e++){const c=document.createElement("li");t.appendChild(c),c.innerText=n[e],c.classList.add("pointer")}}(),h(),document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(t=>{"Home"===e.innerText&&u.classList.remove("esconder"),"Menu"===e.innerText&&(u.classList.add("esconder"),l(),p.appendChild(r),p.appendChild(i),r.appendChild(d),d.innerText="Menu",r.appendChild(s),s.innerText="Beverages")}))}))})()})();