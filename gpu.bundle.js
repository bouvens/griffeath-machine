(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{28:function(e,t,n){"use strict";var r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return s});var o={width:"width",height:"height",states:"states",status:"status"},i=(a(r={},o.width,1200),a(r,o.height,700),a(r,o.states,16),r),u={play:"Play",pause:"Pause"},s=32},29:function(e,t,n){const r=n(31),a={r:0,g:0,b:0},o=[];e.exports=function(e,t,n){if(!o[t]){o[t]=[];for(let e=0;e<=t;e+=1)o[t].push(r(e/t))}return o[t][e]||n||a}},39:function(e,t,n){"use strict";function r(e){for(var t=e.width,n=e.height,r=e.states,a=[],o=0;o<t;o+=1){a[o]=[];for(var i=0;i<n;i+=1)a[o][i]=Math.floor(Math.random()*r)}return a}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var a=function(e,t){return e<0?e+t:e%t};var o=function(e){var t=e.field,n=e.width,r=e.height,o=e.states;return t.map(function(e,i){return e.map(function(e,u){return function(e,t,n,r,o,i,u){var s=a(e+1,u);return r[t][a(n-1,i)]===s||r[t][a(n+1,i)]===s||r[a(t-1,o)][n]===s||r[a(t+1,o)][n]===s?s:e}(e,i,u,t,n,r,o)})})}},79:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),u=n(35),s=n(28),c=n(26),l=n.n(c),f=n(39),p=n(29),d=n.n(p);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return r=this,a=(e=y(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==h(a)&&"function"!=typeof a?m(r):a,w(m(n),"drawPixel",function(e,t,r,a){var o=e+t*n.props.width,i=d()(r,a),u=i.r,s=i.g,c=i.b;n.uInt32Array[o]=255<<24|c<<16|s<<8|u}),w(m(n),"paint",function(e){var t=n.props,r=t.width,a=t.height,o=t.states;n.uInt32Array=new Uint32Array(r*a);for(var i=0;i<r;i+=1)for(var u=0;u<a;u+=1)e[i]&&n.drawPixel(i,u,e[i][u],o);var s=new ImageData(new Uint8ClampedArray(n.uInt32Array.buffer),r,a);n.canvasContext.putImageData(s,0,0)}),w(m(n),"refCanvas",function(e){n.canvasContext=e&&e.getContext("2d")}),w(m(n),"canvasContext",void 0),w(m(n),"uInt32Array",void 0),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a.a.PureComponent),n=t,(r=[{key:"render",value:function(){return a.a.createElement("canvas",{ref:this.refCanvas,width:this.props.width,height:this.props.height},"You are using an outdated browser without support of canvas elements.")}}])&&b(n.prototype,r),o&&b(n,o),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}w(g,"propTypes",{width:i.a.number.isRequired,height:i.a.number.isRequired,states:i.a.number.isRequired}),n.d(t,"default",function(){return N});var N=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return r=this,o=(e=k(t)).call.apply(e,[this].concat(u)),n=!o||"object"!==O(o)&&"function"!=typeof o?S(r):o,E(S(n),"state",{width:n.props.width,height:n.props.height,states:n.props.states,status:s.d.pause}),E(S(n),"field",null),E(S(n),"canvas",a.a.createRef()),E(S(n),"getActionName",function(){return n.state.status===s.d.play?s.d.pause:s.d.play}),E(S(n),"processKey",function(e){e.keyCode===s.c&&(e.preventDefault(),n.handlePlay())}),E(S(n),"updateFieldSize",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.width,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.props.height;n.fieldUpdater=n.makeGetUpdatedField(e,t)}),E(S(n),"updateField",function(){var e=n.state,t=e.width,r=e.height,a=e.states;n.field=n.fieldUpdater(n.field,t,r,a)}),E(S(n),"nextStep",function(){try{n.updateField(),n.state.status===s.d.play&&(n.requestID=requestAnimationFrame(n.nextStep))}catch(e){cancelAnimationFrame(n.requestID),n.field=Object(f.a)(n.state),n.setState({status:s.d.pause})}n.canvas.current.paint(n.field)}),E(S(n),"handleNew",function(){n.field=Object(f.a)(n.state),n.canvas.current.paint(n.field)}),E(S(n),"handleNext",function(){n.updateField(),n.canvas.current.paint(n.field)}),E(S(n),"handlePlay",function(){switch(n.state.status){case s.d.play:n.setState({status:s.d.pause});break;case s.d.pause:n.setState({status:s.d.play},n.nextStep)}}),E(S(n),"changeHandler",function(e,t){var r=t;switch(e){case s.b.width:n.updateFieldSize(r);break;case s.b.height:n.updateFieldSize(void 0,r);break;case s.b.states:r>255&&(r=255)}n.setState(E({},e,r))}),E(S(n),"makeGetUpdatedField",void 0),E(S(n),"fieldUpdater",void 0),n}var o,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,r["PureComponent"]),o=t,(i=[{key:"componentDidMount",value:function(){var e=this;this.handleNew(),document.addEventListener("keydown",this.processKey),Promise.all([n.e(7),n.e(3)]).then(n.bind(null,78)).then(function(t){var n=e.props,r=n.width,a=n.height;e.makeGetUpdatedField=t.makeGetUpdatedField,e.fieldUpdater=e.makeGetUpdatedField(r,a),e.handlePlay()})}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.requestID),document.removeEventListener("keydown",this.processKey)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(u.a,{state:this.state,onChange:this.changeHandler},a.a.createElement(u.b,{id:s.b.width,label:"Field width",defaultNum:1}),a.a.createElement(u.b,{id:s.b.height,label:"Field height",defaultNum:1}),a.a.createElement(u.b,{id:s.b.states,label:"Number of states",defaultNum:1})),a.a.createElement("div",{onClick:this.handlePlay,onKeyDown:this.processKey,className:l.a.field,role:"presentation",title:this.getActionName()},a.a.createElement(g,{width:this.state.width,height:this.state.height,states:this.state.states,ref:this.canvas})),a.a.createElement("p",null,a.a.createElement("em",null,"Press Space or click field for play / pause")),a.a.createElement("button",{type:"button",className:l.a.bigButton,onClick:this.handleNew},"New"),a.a.createElement("button",{type:"button",className:l.a.bigButton,onClick:this.handlePlay},this.getActionName()),this.state.status===s.d.pause&&a.a.createElement("button",{type:"button",className:l.a.bigButton,onClick:this.handleNext},"Next step"))}}])&&P(o.prototype,i),c&&P(o,c),t}();E(N,"propTypes",{width:i.a.number.isRequired,height:i.a.number.isRequired,states:i.a.number.isRequired}),E(N,"defaultProps",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){E(e,t,n[t])})}return e}({},s.a))}}]);