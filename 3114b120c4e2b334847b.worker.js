!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){return e<0?e+t:e>=t?e-t:e}function o(e,t,r,o,u,i,f){var a=o[e],c=n(a+1,f);return o[t+n(r-1,i)*u]===c||o[t+n(r+1,i)*u]===c||o[n(t-1,u)+r*u]===c||o[n(t+1,u)+r*u]===c?c:a}r.r(t);onmessage=function(e){for(var t=e.data,r=t.field,n=t.width,u=t.height,i=t.states,f=t.from,a=t.to,c=new Uint8Array(a-f),l=f;l<a;l+=1){var s=l%n,d=l/n|0;c[l-f]=o(l,s,d,r,n,u,i)}postMessage(c)}}]);