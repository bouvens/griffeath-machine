(this.webpackChunkgriffeath_machine=this.webpackChunkgriffeath_machine||[]).push([[608],{905:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(294),o=n(697),a=n.n(o),i=n(779);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,o,a=l(u);function u(){var e;c(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return y(h(e=a.call.apply(a,[this].concat(n))),"canvasContext",void 0),y(h(e),"colorsOfField",void 0),y(h(e),"paint",(function(t){var n=e.props,r=n.width,o=n.height,a=n.states,u=n.shuffle,c=r*o;e.colorsOfField=new Uint32Array(c);for(var s=0;s<c;s+=1){var f=(0,i.g)(t[s],a,u),l=f.r,p=f.g,h=f.b;e.colorsOfField[s]=255<<24|h<<16|p<<8|l}var d=new ImageData(new Uint8ClampedArray(e.colorsOfField.buffer),r,o);e.canvasContext.putImageData(d,0,0)})),y(h(e),"refCanvas",(function(t){e.canvasContext=t&&t.getContext("2d",{desynchronized:!0})})),e}return t=u,(n=[{key:"render",value:function(){return r.createElement("canvas",{ref:this.refCanvas,width:this.props.width,height:this.props.height},"You are using an outdated browser without support of canvas elements.")}}])&&s(t.prototype,n),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.PureComponent);y(b,"propTypes",{width:a().number.isRequired,height:a().number.isRequired,states:a().number.isRequired,shuffle:a().bool.isRequired})},885:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(294),o=n(697),a=n.n(o),i=n(752),u=n(688),c=n(712);function s(e){var t=e.state,n=e.onChange,o=e.onReset,a=e.onPlayPause,s=e.onNextStep;return(0,r.useEffect)((function(){var e=function(e){switch(e.key){case u.Vk:e.preventDefault(),e.getModifierState(u.ik)?s():a();break;case u.UJ:e.preventDefault(),o()}};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),r.createElement(r.Fragment,null,r.createElement(i.wR,{state:t,onChange:n},r.createElement(i.II,{id:u.YD.width,label:"Field width",defaultNum:1}),r.createElement(i.II,{id:u.YD.height,label:"Field height",defaultNum:1}),r.createElement(i.II,{id:u.YD.states,label:"Number of states",defaultNum:1}),r.createElement(i.Jr,{id:u.YD.shuffle,label:"Shuffle colors"})),r.createElement("p",null,r.createElement("span",{onClick:o,role:"button"},r.createElement("span",{className:c.Z.key},"Enter"),r.createElement("span",{className:c.Z.activeDescription},"New (Reset)"))),r.createElement("p",null,r.createElement("span",{onClick:a,role:"button"},r.createElement("span",{className:c.Z.key},"Space"),r.createElement("span",{className:c.Z.activeDescription},"Play / Pause"))),r.createElement("p",{className:t.status!==u.n$.pause?c.Z.hidden:void 0},r.createElement("span",{onClick:s,role:"button"},r.createElement("span",{className:c.Z.key},"Shift")," + ",r.createElement("span",{className:c.Z.key},"Space"),r.createElement("span",{className:c.Z.activeDescription},"One step forward"))))}s.propTypes={state:a().exact({width:a().number.isRequired,height:a().number.isRequired,states:a().number.isRequired,shuffle:a().bool.isRequired,status:a().string.isRequired}).isRequired,onChange:a().func.isRequired,onReset:a().func.isRequired,onPlayPause:a().func.isRequired,onNextStep:a().func.isRequired}},483:function(e,t,n){"use strict";function r(e){for(var t=e.width,n=e.height,r=e.states,o=t*n,a=new Uint8Array(o),i=0;i<o;i+=1)a[i]=Math.floor(Math.random()*r);return a}function o(e,t){return e<0?e+t:e>=t?e-t:e}function a(e,t,n,r,a,i,u){var c=r[e],s=o(c+1,u);return r[t+o(n-1,i)*a]===s||r[t+o(n+1,i)*a]===s||r[o(t-1,a)+n*a]===s||r[o(t+1,a)+n*a]===s?s:c}n.d(t,{BS:function(){return r},ds:function(){return i}});var i=function(e){for(var t=e.field,n=e.width,r=e.height,o=e.states,i=new Uint8Array(n*r),u=0;u<r;u+=1)for(var c=u*n,s=0;s<n;s+=1){var f=s+c;i[f]=a(f,s,u,t,n,r,o)}return i}},688:function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{TP:function(){return u},UJ:function(){return c},Vk:function(){return s},YD:function(){return a},ik:function(){return f},n$:function(){return i}});var a={width:"width",height:"height",states:"states",shuffle:"shuffle"},i={play:"Play",pause:"Pause"},u=(o(r={},a.width,1200),o(r,a.height,700),o(r,a.states,18),o(r,a.shuffle,!1),r),c="Enter",s=" ",f="Shift"},768:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(294),o=n(688),a=n(483),i=n(905),u=n(885),c=n(712);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(b,e);var t,n,s,f=y(b);function b(){var e;p(this,b);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return w(m(e=f.call.apply(f,[this].concat(n))),"field",null),w(m(e),"canvas",r.createRef()),w(m(e),"state",l(l({},o.TP),{},{status:o.n$.play})),w(m(e),"nextStep",(function(){try{e.field=(0,a.ds)(l(l({},e.state),{},{field:e.field})),e.state.status===o.n$.play&&(e.requestID=requestAnimationFrame(e.nextStep))}catch(t){cancelAnimationFrame(e.requestID),e.field=(0,a.BS)(e.state),e.setState({status:o.n$.pause})}e.canvas.current.paint(e.field)})),w(m(e),"handleNew",(function(){e.field=(0,a.BS)(e.state),e.canvas.current.paint(e.field)})),w(m(e),"handleNext",(function(){e.field=(0,a.ds)(l(l({},e.state),{},{field:e.field})),e.canvas.current.paint(e.field)})),w(m(e),"handlePlay",(function(){switch(e.state.status){case o.n$.play:e.setState({status:o.n$.pause});break;case o.n$.pause:e.setState({status:o.n$.play},e.nextStep)}})),w(m(e),"changeHandler",(function(t,n){var r=n;t===o.YD.states&&r>255&&(r=255),e.setState(w({},t,r))})),e}return t=b,(n=[{key:"componentDidMount",value:function(){this.handleNew(),this.nextStep()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.requestID)}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(u.Z,{state:this.state,onChange:this.changeHandler,onReset:this.handleNew,onPlayPause:this.handlePlay,onNextStep:this.handleNext}),r.createElement("div",{onClick:this.handlePlay,className:c.Z.field,role:"presentation",title:"⏯"},r.createElement(i.Z,{width:this.state.width,height:this.state.height,states:this.state.states,shuffle:this.state.shuffle,ref:this.canvas})))}}])&&h(t.prototype,n),s&&h(t,s),Object.defineProperty(t,"prototype",{writable:!1}),b}(r.PureComponent)},779:function(e,t,n){const{mapColor:r}=n(557),o={r:0,g:0,b:0},a=[],i=[];e.exports.g=(e,t,n=!1,u=o)=>{const c=n?i:a;if(!c[t]){c[t]=[];for(let e=0;e<t;e++)c[t].push(r(e/t));n&&(c[t]=function(e){const t=[...e];for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}(c[t]))}return c[t][e]||u}}}]);