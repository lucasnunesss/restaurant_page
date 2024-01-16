(()=>{"use strict";var e={495:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(81),s=n.n(a),r=n(645),c=n.n(r)()(s());c.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=c},197:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(81),s=n.n(a),r=n(645),c=n.n(r)()(s());c.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},c=[],o=0;o<e.length;o++){var i=e[o],d=a.base?i[0]+a.base:i[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var m=n(u),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=s(p,a);a.byIndex=o,t.splice(o,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=a(e=e||[],s=s||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var o=n(r[c]);t[o].references--}for(var i=a(e,s),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=i}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var s=a.length-1;s>-1&&!e;)e=a[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var a={};(()=>{n.d(a,{$S:()=>B});var e=n(379),t=n.n(e),s=n(795),r=n.n(s),c=n(569),o=n.n(c),i=n(565),d=n.n(i),l=n(216),u=n.n(l),m=n(589),p=n.n(m),h=n(495),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var g=n(197),v={};v.styleTagTransform=p(),v.setAttributes=d(),v.insert=o().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=u(),t()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const y=n.p+"6c0b18e71abd8887ca84.jpg",w=n.p+"e601f5792f3f82e1f078.jpg",b=n.p+"cf81aca97655066664ef.jpg",C=n.p+"8633afe0fcbe95c26def.jpg",x=n.p+"92a9632ee0114409c5e3.jpg",E=n.p+"8186300ab18c57e18f80.jpg",L=n.p+"b6eb6dbdcc84ecb0d882.jpg",I=n.p+"d31a15bb640aeebd979b.jpg",T=n.p+"4674847cf7ee41453eb0.jpg",S=n.p+"7a49fac84f56b5c57553.jpg",k=n.p+"8fa221d413b1f2186f0a.jpg",j=n.p+"8e4ffa3e5237048ee06f.jpg",R=document.createElement("section"),M=document.createElement("article");R.appendChild(M);const q=document.createElement("h1"),A=document.createElement("h2");function $(){document.querySelectorAll("li").forEach((e=>{console.log(e),e.addEventListener("click",(t=>{"Menu"===e.innerText&&(R.classList.remove("esconder"),M.classList.remove("esconder")),"Contact"===e.innerText&&(R.classList.add("esconder"),M.classList.add("esconder")),"Home"===e.innerText&&(R.classList.add("esconder"),M.classList.add("esconder"))}))}))}document.createElement("h3");class P{constructor(e,t,n,a){this.name=e,this.desc=t,this.img=n,this.price=a}mostrarItens=()=>{const e=document.createElement("article");M.appendChild(e);const t=document.createElement("h3"),n=document.createElement("p"),a=document.createElement("h4");e.classList.add("art1"),e.appendChild(t),t.innerText=this.name,e.appendChild(n),n.innerText=this.desc,e.appendChild(a),a.innerText=this.price,e.appendChild(this.img)}}$(),class extends P{static addBebidas=()=>{const e=new Image;e.src=y,e.classList.add("img"),new P("Hot Chocolat","Savor the rich, velvety goodness of our artisanal hot chocolate. Crafted from the finest cocoa beans, each sip offers a luxurious and comforting experience.",e,"2 R$").mostrarItens();const t=new Image;t.src=w,t.classList.add("img"),new P("Ice cream","Indulge in pure delight with our rich and creamy gourmet ice cream, a perfect blend of luxurious flavors that will tantalize your taste buds. Treat yourself to a moment of pure indulgence.",t,"2 R$").mostrarItens()}}.addBebidas(),class extends P{static addSides=()=>{const e=document.createElement("h2");M.appendChild(e),e.classList.add("head-h2"),e.innerText="Sides";const t=new Image;t.src=b,t.classList.add("img"),new P("Small Chocolat","Discover bliss in every bite with our collection of fine, bite-sized chocolates. Indulge in a world of rich flavors, perfect for sweet moments of pure delight.",t,"1 R$").mostrarItens();const n=new Image;n.src=C,n.classList.add("img"),new P("Chocolate with fruit","Our chocolate with fruit selection offers a delightful fusion of rich, velvety chocolate and vibrant, juicy fruits. Experience the exquisite balance of sweetness that will transport your taste buds to a realm of pure decadence.",n,"1 R$").mostrarItens()}}.addSides(),class extends P{static addPratos=()=>{const e=document.createElement("h2");M.appendChild(e),e.classList.add("head-h2"),e.innerText="Main Dishes";const t=new Image;t.src=x,t.classList.add("img"),new P("Chocolat Pancake","Satisfy your sweet cravings with our luscious chocolate pancakes. Each fluffy bite is a heavenly combination of rich cocoa flavor and indulgent pancake perfection, creating a delightful breakfast or dessert experience.",t,"4 R$").mostrarItens();const n=new Image;n.src=E,n.classList.add("img"),new P("Chocolat Toast","Experience pure indulgence with our decadent chocolate cake. Each moist layer promises a symphony of rich cocoa goodness, creating a heavenly treat for your senses.",n,"5 R$").mostrarItens();const a=new Image;a.src=L,a.classList.add("img"),new P("Chocolat Sandwich (30 UNITS)","Savor the delightful fusion of smooth chocolate spread between layers of soft bread, creating a delectable treat for your sweet cravings. Indulgence, perfectly wrapped in every bite.",a,"6 R$").mostrarItens();const s=new Image;s.src=I,s.classList.add("img"),new P("Chocolat Pizza","Indulge in a unique delight as rich chocolate melds with a crisp, golden crust, creating a dessert pizza thats both decadent and satisfying. A sweet twist on a classic favorite.",s,"8 R$").mostrarItens();const r=new Image;r.src=T,r.classList.add("img"),new P("Cake with white and dark chocolate","Treat yourself to the perfect blend of moist vanilla cake and decadent chocolate layers, creating a heavenly confection that captivates the senses with each sumptuous bite.",r,"8 R$").mostrarItens();const c=new Image;c.src=S,c.classList.add("img"),new P("Chocolat Truffles","Experience the epitome of luxury as our velvety chocolate truffles melt in your mouth, revealing a symphony of rich flavors and a delightful, indulgent center. A treat that transcends ordinary sweetness.",c,"6 R$").mostrarItens();const o=new Image;o.src=k,o.classList.add("img"),new P("Cake with Fruits and Chocolat","Experience a perfect fusion of luscious fruits and decadent chocolate in every moist and flavorful bite. Our cake is a celebration of sweet harmony, combining the richness of chocolate with the freshness of vibrant fruits for an indulgent treat that captivates the senses.",o,"7 R$").mostrarItens();const i=new Image;i.src=j,i.classList.add("img"),new P("Cake with Ice cream","Indulge in the ultimate dessert experience with our delectable cake paired perfectly with velvety ice cream. Each bite is a symphony of flavors and textures, creating a heavenly treat that satisfies your sweet cravings.",i,"6 R$").mostrarItens()}}.addPratos();const Z=document.createElement("h1"),F=document.createElement("article"),H=document.createElement("section");function z(){document.querySelectorAll("li").forEach((e=>{console.log(e),e.addEventListener("click",(t=>{"Menu"===e.innerText&&(H.classList.add("esconder"),F.classList.add("esconder")),"Contact"===e.innerText&&(H.classList.remove("esconder"),F.classList.remove("esconder")),"Home"===e.innerText&&(H.classList.add("esconder"),F.classList.add("esconder"))}))}))}function N(e,t,n,a,s){this.name=e,this.title=t,this.tel=n,this.email=a,this.img=s,this.mostrar=function(){const e=document.createElement("article");F.appendChild(e);const t=document.createElement("h2"),n=document.createElement("h3"),a=document.createElement("h4"),s=document.createElement("h5");e.classList.add("addGrid"),e.classList.add("art1"),e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(s),e.appendChild(this.img),t.classList.add("gridItem"),n.classList.add("gridItem"),a.classList.add("gridItem"),s.classList.add("gridItem"),t.innerText=this.name,n.innerText=this.title,a.innerText=this.tel,s.innerText=this.email}}z(),function(){const e=new Image;e.src=j,e.classList.add("img1"),new N("SP","We are in all regions of São Paulo","555-555-5554","totallyRealEmail@notFake.com",e).mostrar()}(),function(){const e=new Image;e.src=x,e.classList.add("img1"),new N("RJ","We are in center of Rio de Janeiro","555-555-5555","perfectlyRealEmail@notFake.com",e).mostrar()}(),function(){const e=new Image;e.src=S,e.classList.add("img1"),new N("MG","We are in all regions of Minas Gerais","555-555-5556","totallyRealEmail@notFake.com",e).mostrar()}();const O=document.querySelector("#content"),B=document.querySelector("main");B.appendChild(O),document.querySelector("section"),function(){const e=document.querySelector("section"),t=document.createElement("h1");O.appendChild(e),e.appendChild(t),t.textContent="Chocolat Factory";const n=document.createElement("article"),a=document.createElement("blockquote"),s=document.createElement("cite");e.appendChild(n),n.classList.add("art1"),n.appendChild(a),a.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda ratione quod, ipsam aliquid autem fugiat repudiandae necessitatibus aut consequatur! ",n.appendChild(s),s.textContent=" Aaalbert Einstein"}(),function(){const e=document.createElement("article"),t=document.createElement("h2"),n=["Sunday: 8am - 8pm","Monday: 6am - 6pm","Tuesday: 6am - 6pm","Wednesday: 6am - 6pm","Thursday: 6am - 10pm","Friday: 6am - 10pm","Saturday: 8am - 10pm"],a=document.createElement("ul");e.classList.add("art1"),O.appendChild(e),e.appendChild(t),e.appendChild(a),t.textContent="Schedule";for(let e=0;e<7;e++){const t=document.createElement("li");a.appendChild(t),t.innerText=n[e]}}(),function(){const e=document.createElement("article"),t=document.createElement("h2"),n=document.createElement("p");O.appendChild(e),e.classList.add("art1"),e.appendChild(t),t.innerText="Location",e.appendChild(n),n.textContent="Netuno, Avenida Luiz Dias Harserhoff"}(),function(){const e=document.createElement("footer");document.body.appendChild(e),e.innerText="https://github.com/lucasnunesss"}(),function(){const e=document.querySelector("header"),t=document.createElement("ul");e.appendChild(t);const n=["Home","Menu","Contact"];for(let e=0;e<3;e++){const a=document.createElement("li");t.appendChild(a),a.innerText=n[e],a.classList.add("pointer")}}(),document.querySelectorAll("li"),document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(t=>{"Home"===e.innerText&&O.classList.remove("esconder"),"Menu"===e.innerText&&(O.classList.add("esconder"),$(),R.classList.add(),B.appendChild(R),B.appendChild(M),R.appendChild(q),q.innerText="Menu",q.classList.add("head-h1"),R.appendChild(A),A.classList.add("head-h2"),A.innerText="Beverages"),"Contact"===e.innerText&&(O.classList.add("esconder"),B.appendChild(H),B.appendChild(F),H.appendChild(Z),Z.innerText="Contact Us",z())}))}))})()})();