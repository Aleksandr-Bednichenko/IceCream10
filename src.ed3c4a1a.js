parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\products\\product1.png":[["product1.cebb2490.png","AdAp"],"AdAp"],"./..\\images\\products\\product1x2.png":[["product1x2.e0a96951.png","VqqP"],"VqqP"],"./..\\images\\products\\product2.png":[["product2.ae41cebe.png","LvFp"],"LvFp"],"./..\\images\\products\\product2x2.png":[["product2x2.198be931.png","Txwo"],"Txwo"],"./..\\images\\products\\product3.png":[["product3.a59b3e3f.png","HEqh"],"HEqh"],"./..\\images\\products\\product3x2.png":[["product3x2.3f3785e3.png","BkyZ"],"BkyZ"],"./..\\images\\products\\dots.svg":[["dots.1a36bef1.svg","uba0"],"uba0"],"./..\\images\\products\\arrow-right.png":[["arrow-right.0208ff7f.png","lcwa"],"lcwa"],"./..\\images\\products\\arrow-rightx2.png":[["arrow-rightx2.687735b7.png","tfFH"],"tfFH"],"./..\\images\\advantages\\icon-milk.png":[["icon-milk.e40153a1.png","tinS"],"tinS"],"./..\\images\\advantages\\icon-apples.png":[["icon-apples.c4734f04.png","V2Rb"],"V2Rb"],"./..\\images\\advantages\\icon-icecream.png":[["icon-icecream.1c2573ad.png","RQiS"],"RQiS"],"./..\\images\\advantages\\icon-milk@2x.png":[["icon-milk@2x.719ad830.png","htxh"],"htxh"],"./..\\images\\advantages\\icon-apples@2x.png":[["icon-apples@2x.0dca7bca.png","K9uZ"],"K9uZ"],"./..\\images\\advantages\\icon-icecream@2x.png":[["icon-icecream@2x.43ee5b37.png","nCk8"],"nCk8"],"./..\\images\\customers-section\\icon-semicolon.svg":[["icon-semicolon.77501594.svg","hYCu"],"hYCu"],"./..\\images\\customers-section\\icon-dots.svg":[["icon-dots.f2215ffb.svg","RIpa"],"RIpa"],"./..\\images\\desktop\\cards\\sectionbgcards.png":[["sectionbgcards.93c65e71.png","Wqco"],"Wqco"],"./..\\images\\desktop\\cards\\sectionbgcards@2x.png":[["sectionbgcards@2x.f468b33d.png","p7oX"],"p7oX"],"C:\\Users\\user\\Documents\\GitHub\\IceCream10\\src\\images\\about\\mobile\\sectionbg1.png":[["sectionbg1.cc3a0b2e.png","OCBo"],"OCBo"],"C:\\Users\\user\\Documents\\GitHub\\IceCream10\\src\\images\\about\\mobile\\sectionbg1@2x.png":[["sectionbg1@2x.0ad58866.png","llYh"],"llYh"],"C:\\Users\\user\\Documents\\GitHub\\IceCream10\\src\\images\\about\\desktop\\sectionbg1.png":[["sectionbg1.5bc884b1.png","EHhf"],"EHhf"],"C:\\Users\\user\\Documents\\GitHub\\IceCream10\\src\\images\\about\\desktop\\sectionbg1@2x.png":[["sectionbg1@2x.d3120f0e.png","rZzd"],"rZzd"]}],"toNQ":[function(require,module,exports) {
!function(){var e=document.querySelector("[data-menu-batton]"),t=document.querySelector("[data-menu]");e.addEventListener("click",function(){var a="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-active"),e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open")})}();
},{}],"EZ65":[function(require,module,exports) {
function o(){var o=this,n=$(".back-to-top");$(window).on("scroll",function(){$(o).scrollTop()>=50?n.fadeIn():n.fadeOut()}),n.on("click",function(o){o.preventDefault(),$("html").animate({scrollTop:0},1e3)})}o();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/burger"),require("./js/back-to-top");
},{"./sass/main.scss":"clu1","./js/burger":"toNQ","./js/back-to-top":"EZ65"}]},{},["Focm"], null)
//# sourceMappingURL=/IceCream10/src.ed3c4a1a.js.map