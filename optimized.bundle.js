(this.webpackChunkgriffeath_machine=this.webpackChunkgriffeath_machine||[]).push([[608],{905:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(294),o=n(697),i=n.n(o),a=n(428);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,o,i=l(u);function u(){var e;c(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(h(e=i.call.apply(i,[this].concat(n))),"canvasContext",void 0),d(h(e),"colorsOfField",void 0),d(h(e),"paint",(function(t){var n=e.props,r=n.width,o=n.height,i=n.states,u=n.shuffle,c=r*o;e.colorsOfField=new Uint32Array(c);for(var s=0;s<c;s+=1){var f=(0,a.g)(t[s],i,u),l=f.r,p=f.g,h=f.b;e.colorsOfField[s]=255<<24|h<<16|p<<8|l}var y=new ImageData(new Uint8ClampedArray(e.colorsOfField.buffer),r,o);e.canvasContext.putImageData(y,0,0)})),d(h(e),"refCanvas",(function(t){e.canvasContext=t&&t.getContext("2d",{desynchronized:!0})})),e}return t=u,(n=[{key:"render",value:function(){return r.createElement("canvas",{ref:this.refCanvas,width:this.props.width,height:this.props.height},"You are using an outdated browser without support of canvas elements.")}}])&&s(t.prototype,n),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.PureComponent);d(b,"propTypes",{width:i().number.isRequired,height:i().number.isRequired,states:i().number.isRequired,shuffle:i().bool.isRequired})},483:function(e,t,n){"use strict";function r(e){for(var t=e.width,n=e.height,r=e.states,o=t*n,i=new Uint8Array(o),a=0;a<o;a+=1)i[a]=Math.floor(Math.random()*r);return i}function o(e,t){return e<0?e+t:e>=t?e-t:e}function i(e,t,n,r,i,a,u){var c=r[e],s=o(c+1,u);return r[t+o(n-1,a)*i]===s||r[t+o(n+1,a)*i]===s||r[o(t-1,i)+n*i]===s||r[o(t+1,i)+n*i]===s?s:c}n.d(t,{BS:function(){return r},ds:function(){return a}});var a=function(e){for(var t=e.field,n=e.width,r=e.height,o=e.states,a=new Uint8Array(n*r),u=0;u<r;u+=1)for(var c=u*n,s=0;s<n;s+=1){var f=s+c;a[f]=i(f,s,u,t,n,r,o)}return a}},688:function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{TP:function(){return a},YD:function(){return i},gb:function(){return c},n$:function(){return u}});var i={width:"width",height:"height",states:"states",shuffle:"shuffle"},a=(o(r={},i.width,1200),o(r,i.height,700),o(r,i.states,16),o(r,i.shuffle,!1),r),u={play:"Play",pause:"Pause"},c=32},768:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(294),o=n(697),i=n.n(o),a=n(752),u=n(688),c=n(745),s=n(905),f=n(483);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,n,o,i=m(l);function l(){var e,t;y(this,l);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return O(w(t=i.call.apply(i,[this].concat(o))),"field",null),O(w(t),"canvas",r.createRef()),O(w(t),"state",(O(e={},u.YD.width,t.props.width),O(e,u.YD.height,t.props.height),O(e,u.YD.states,t.props.states),O(e,u.YD.shuffle,t.props.shuffle),O(e,"status",u.n$.pause),e)),O(w(t),"getActionName",(function(){return t.state.status===u.n$.play?u.n$.pause:u.n$.play})),O(w(t),"processKey",(function(e){e.keyCode===u.gb&&(e.preventDefault(),t.handlePlay())})),O(w(t),"nextStep",(function(){try{t.field=(0,f.ds)(h(h({},t.state),{},{field:t.field})),t.state.status===u.n$.play&&(t.requestID=requestAnimationFrame(t.nextStep))}catch(e){cancelAnimationFrame(t.requestID),t.field=(0,f.BS)(t.state),t.setState({status:u.n$.pause})}t.canvas.current.paint(t.field)})),O(w(t),"handleNew",(function(){t.field=(0,f.BS)(t.state),t.canvas.current.paint(t.field)})),O(w(t),"handleNext",(function(){t.field=(0,f.ds)(h(h({},t.state),{},{field:t.field})),t.canvas.current.paint(t.field)})),O(w(t),"handlePlay",(function(){switch(t.state.status){case u.n$.play:t.setState({status:u.n$.pause});break;case u.n$.pause:t.setState({status:u.n$.play},t.nextStep)}})),O(w(t),"changeHandler",(function(e,n){var r=n;e===u.YD.states&&r>255&&(r=255),t.setState(O({},e,r))})),t}return t=l,(n=[{key:"componentDidMount",value:function(){this.handleNew(),this.handlePlay(),document.addEventListener("keydown",this.processKey)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.requestID),document.removeEventListener("keydown",this.processKey)}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(a.wR,{state:this.state,onChange:this.changeHandler},r.createElement(a.II,{id:u.YD.width,label:"Field width",defaultNum:1}),r.createElement(a.II,{id:u.YD.height,label:"Field height",defaultNum:1}),r.createElement(a.II,{id:u.YD.states,label:"Number of states",defaultNum:1}),r.createElement(a.Jr,{id:u.YD.shuffle,label:"Shuffle colors"})),r.createElement("div",{onClick:this.handlePlay,onKeyDown:this.processKey,className:c.Z.field,role:"presentation",title:this.getActionName()},r.createElement(s.Z,{width:this.state.width,height:this.state.height,states:this.state.states,shuffle:this.state.shuffle,ref:this.canvas})),r.createElement("p",null,r.createElement("em",null,"Press Space or click field for play / pause")),r.createElement("button",{type:"button",className:c.Z.bigButton,onClick:this.handleNew},"New"),r.createElement("button",{type:"button",className:c.Z.bigButton,onClick:this.handlePlay},this.getActionName()),this.state.status===u.n$.pause&&r.createElement("button",{type:"button",className:c.Z.bigButton,onClick:this.handleNext},"Next step"))}}])&&d(t.prototype,n),o&&d(t,o),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.PureComponent);O(P,"propTypes",{width:i().number.isRequired,height:i().number.isRequired,states:i().number.isRequired,shuffle:i().bool.isRequired}),O(P,"defaultProps",h({},u.TP))},428:function(e,t,n){const{mapColor:r}=n(557),o={r:0,g:0,b:0},i=[],a=[];e.exports.g=(e,t,n=!1,u=o)=>{const c=n?a:i;if(!c[t]){c[t]=[];for(let e=0;e<t;e++)c[t].push(r(e/t));n&&(c[t]=function(e){const t=[...e];for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}(c[t]))}return c[t][e]||u}}}]);