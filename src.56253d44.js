parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var n=function(n){return'<path fill="#FF0000" stroke="none" d="\nM 299.05 89.4\nQ 304.15 60.75 281.7 31.55 218 -31.55 150 31.55 81.95 -31.55 18.3 31.55 -4.15 60.75 0.95 89.4 5.25 113.1 31.05 144.55 40.45 156 57.4 174.2 77.2 195.25 87.7 206.75 126.8 249.5 150 285.6\nL 150 285.65 150.05 285.6\nQ 173.2 249.5 212.3 206.75 222.75 195.25 242.6 174.2 259.5 156 268.95 144.55 294.75 113.1 299.05 89.4 Z">\n'.concat(n,"\n</path>")},t=function(n,t,e){return'\n<animate attributeName="fill-opacity"\ndur="'.concat(e,'s"\nvalues="').concat(t-.3,";").concat(n-.3,';"\nrepeatCount="indefinite"\n/>\n')},e=function(n,t,e){return'\n\n<animateTransform attributeName="transform"\nattributeType="XML"\ntype="scale"\nfrom="'.concat(n," ").concat(n,'"\nto="').concat(t," ").concat(t,'"\ndur="').concat(e,'s"\nrepeatCount="indefinite"/>\n')},a=function(n,t,e){var a=function(n){return 150-150*n};return'\n<animateTransform attributeName="transform"\nattributeType="XML"\ntype="translate"\nfrom="'.concat(a(n)," ").concat(a(n),'"\nto="').concat(a(t)," ").concat(a(t),'"\ndur="').concat(e,'s"\nrepeatCount="indefinite"/>')},c=function(){return"\n<g>\n  ".concat(a.apply(void 0,arguments),"\n  <g>\n    ").concat(e.apply(void 0,arguments),"\n    ").concat(n(t.apply(void 0,arguments)),"\n  </g>\n</g>\n")},r=function(n){return c(1,.3,n)+c(.3,1,n)},o='<svg width="200" height="200" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="#fff">\n'.concat(r(3),"\n").concat(r(5),"\n").concat(r(8),"\n").concat(r(13),"\n</svg>"),i=function(n){var t=n.name,e=n.end_date,a=n.start_date;return"https://gps.raevskyteam.org/donation?name=".concat(t,"&end_date=").concat(e,"&start_date=").concat(a)},u=document.getElementById("h-counter"),d={name:u.getAttribute("data-name"),start_date:u.getAttribute("data-start"),end_date:u.getAttribute("data-end")},s=document.createElement("div");s.innerHTML=o,u.parentNode.insertBefore(s,u);var f=fetch(i(d));f.then(function(n){n.json().then(function(n){var t=new Date(d.end_date);s.innerHTML="\n  <h1>".concat(d.name,"</h1>\n  <h2>").concat(t.toDateString(),"</h2>\n  <pre>\n    ").concat(n.data,"\n  </pre>\n  ")})});
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-03d3k/src.56253d44.js.map