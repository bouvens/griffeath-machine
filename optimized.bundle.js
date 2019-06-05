(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{32:function(t,e,n){"use strict";var r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return u}),n.d(e,"c",function(){return s});var o={width:"width",height:"height",states:"states",status:"status"},i=(a(r={},o.width,1200),a(r,o.height,700),a(r,o.states,16),r),u={play:"Play",pause:"Pause"},s=32},33:function(t,e,n){const r=n(35),a={r:0,g:0,b:0},o=[];t.exports=function(t,e,n){if(!o[e]){o[e]=[];for(let t=0;t<=e;t+=1)o[e].push(r(t/e))}return o[e][t]||n||a}},41:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n(0),a=n.n(r),o=n(1),i=n.n(o),u=n(33),s=n.n(u);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(t){function e(){var t,n,r,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return r=this,a=(t=f(e)).call.apply(t,[this].concat(i)),n=!a||"object"!==c(a)&&"function"!=typeof a?p(r):a,d(p(n),"paint",function(t){var e=n.props,r=e.width,a=e.height,o=e.states,i=r*a;n.colorsOfField=new Uint32Array(i);for(var u=0;u<i;u+=1){var c=s()(t[u],o),l=c.r,f=c.g,p=c.b;n.colorsOfField[u]=255<<24|p<<16|f<<8|l}var h=new ImageData(new Uint8ClampedArray(n.colorsOfField.buffer),r,a);n.canvasContext.putImageData(h,0,0)}),d(p(n),"refCanvas",function(t){n.canvasContext=t&&t.getContext("2d")}),d(p(n),"canvasContext",void 0),d(p(n),"colorsOfField",void 0),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,a.a.PureComponent),n=e,(r=[{key:"render",value:function(){return a.a.createElement("canvas",{ref:this.refCanvas,width:this.props.width,height:this.props.height},"You are using an outdated browser without support of canvas elements.")}}])&&l(n.prototype,r),o&&l(n,o),e}();d(b,"propTypes",{width:i.a.number.isRequired,height:i.a.number.isRequired,states:i.a.number.isRequired})},42:function(t,e,n){"use strict";function r(t){for(var e=t.width,n=t.height,r=t.states,a=e*n,o=new Uint8Array(a),i=0;i<a;i+=1)o[i]=Math.floor(Math.random()*r);return o}function a(t,e){return t<0?t+e:t>=e?t-e:t}function o(t,e,n,r,o,i,u){var s=r[t],c=a(s+1,u);return r[e+a(n-1,i)*o]===c||r[e+a(n+1,i)*o]===c||r[a(e-1,o)+n*o]===c||r[a(e+1,o)+n*o]===c?c:s}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var i=function(t){for(var e=t.field,n=t.width,r=t.height,a=t.states,i=new Uint8Array(n*r),u=0;u<r;u+=1)for(var s=u*n,c=0;c<n;c+=1){var l=c+s;i[l]=o(l,c,u,e,n,r,a)}return i}},80:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return g});var r=n(0),a=n.n(r),o=n(1),i=n.n(o),u=n(39),s=n(32),c=n(30),l=n.n(c),f=n(41),p=n(42);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){w(t,e,n[e])})}return t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=function(t){function e(){var t,n,r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return r=this,o=(t=y(e)).call.apply(t,[this].concat(u)),n=!o||"object"!==h(o)&&"function"!=typeof o?m(r):o,w(m(n),"state",{width:n.props.width,height:n.props.height,states:n.props.states,status:s.d.pause}),w(m(n),"field",null),w(m(n),"canvas",a.a.createRef()),w(m(n),"getActionName",function(){return n.state.status===s.d.play?s.d.pause:s.d.play}),w(m(n),"processKey",function(t){t.keyCode===s.c&&(t.preventDefault(),n.handlePlay())}),w(m(n),"nextStep",function(){try{n.field=Object(p.b)(d({},n.state,{field:n.field})),n.state.status===s.d.play&&(n.requestID=requestAnimationFrame(n.nextStep))}catch(t){cancelAnimationFrame(n.requestID),n.field=Object(p.a)(n.state),n.setState({status:s.d.pause})}n.canvas.current.paint(n.field)}),w(m(n),"handleNew",function(){n.field=Object(p.a)(n.state),n.canvas.current.paint(n.field)}),w(m(n),"handleNext",function(){n.field=Object(p.b)(d({},n.state,{field:n.field})),n.canvas.current.paint(n.field)}),w(m(n),"handlePlay",function(){switch(n.state.status){case s.d.play:n.setState({status:s.d.pause});break;case s.d.pause:n.setState({status:s.d.play},n.nextStep)}}),w(m(n),"changeHandler",function(t,e){var r=e;t===s.b.states&&r>255&&(r=255),n.setState(w({},t,r))}),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,r["PureComponent"]),n=e,(o=[{key:"componentDidMount",value:function(){this.handleNew(),this.handlePlay(),document.addEventListener("keydown",this.processKey)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.requestID),document.removeEventListener("keydown",this.processKey)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{state:this.state,onChange:this.changeHandler},a.a.createElement(u.b,{id:s.b.width,label:"Field width",defaultNum:1}),a.a.createElement(u.b,{id:s.b.height,label:"Field height",defaultNum:1}),a.a.createElement(u.b,{id:s.b.states,label:"Number of states",defaultNum:1})),a.a.createElement("div",{onClick:this.handlePlay,onKeyDown:this.processKey,className:l.a.field,role:"presentation",title:this.getActionName()},a.a.createElement(f.a,{width:this.state.width,height:this.state.height,states:this.state.states,ref:this.canvas})),a.a.createElement("p",null,a.a.createElement("em",null,"Press Space or click field for play / pause")),a.a.createElement("button",{type:"button",className:l.a.bigButton,onClick:this.handleNew},"New"),a.a.createElement("button",{type:"button",className:l.a.bigButton,onClick:this.handlePlay},this.getActionName()),this.state.status===s.d.pause&&a.a.createElement("button",{type:"button",className:l.a.bigButton,onClick:this.handleNext},"Next step"))}}])&&b(n.prototype,o),i&&b(n,i),e}();w(g,"propTypes",{width:i.a.number.isRequired,height:i.a.number.isRequired,states:i.a.number.isRequired}),w(g,"defaultProps",d({},s.a))}}]);