(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{85:function(t,e,n){"use strict";var a;n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return s});var r={width:"width",height:"height",states:"states",status:"status"},i=((a={})[r.width]=700,a[r.height]=700,a[r.states]=16,a),o={play:"Play",pause:"Pause"},s=32},86:function(t,e,n){t.exports={field:"GriffeathMachine__field__2ugWL",bigButton:"GriffeathMachine__bigButton__1GY-9"}},89:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=(n(1),n(83)),o=n(85),s=n(86),u=n.n(s);function c(t){for(var e=t.width,n=t.height,a=t.states,r=[],i=0;i<e;i+=1){r[i]=[];for(var o=0;o<n;o+=1)r[i][o]=Math.floor(Math.random()*a)}return r}var l=function(t,e){return t<0?t+e:t%e},f=function(t){var e=t.field,n=t.width,a=t.height,r=t.states;return e.map(function(t,i){return t.map(function(t,o){var s=l(t+1,r);return e[i][l(o-1,a)]===s||e[i][l(o+1,a)]===s||e[l(i-1,n)][o]===s||e[l(i+1,n)][o]===s?s:t})})};function h(t){var e=function(t){var e=t<0?t+1:t%1;return e<1/6?6*e:e<.5?1:e<2/3?6*(2/3-e):0},n=e(t+1/3),a=e(t),r=e(t-1/3);return{r:Math.round(255*n),g:Math.round(255*a),b:Math.round(255*r)}}var p=[],d={r:0,g:0,b:0};function y(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var b=function(t){function e(){var n,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=a=y(this,t.call.apply(t,[this].concat(i))),a.drawPixel=function(t,e,n,r){var i=t+e*a.props.width,o=function(t,e){if(p.length!==e){p.length=e;for(var n=0;n<e;n+=1)p[n]=h(n/e)}return p[t]||d}(n,r),s=o.r,u=o.g,c=o.b;a.uInt32Array[i]=255<<24|c<<16|u<<8|s},a.paint=function(t){var e=a.props,n=e.width,r=e.height,i=e.states;a.uInt32Array=new Uint32Array(n*r);for(var o=0;o<n;o+=1)for(var s=0;s<r;s+=1)t[o]&&a.drawPixel(o,s,t[o][s],i);var u=new ImageData(new Uint8ClampedArray(a.uInt32Array.buffer),n,r);a.canvasContext.putImageData(u,0,0)},a.refCanvas=function(t){t&&(a.canvasContext=t.getContext("2d"))},y(a,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){return r.a.createElement("canvas",{ref:this.refCanvas,width:this.props.width,height:this.props.height},"You are using an outdated browser without support of canvas elements.")},e}(r.a.PureComponent);n.d(e,"default",function(){return P});var m,w,v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function g(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var E=r.a.createElement("p",null,r.a.createElement("em",null,"Press Space or click field for play / pause")),P=(w=m=function(t){function e(){var n,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=a=g(this,t.call.apply(t,[this].concat(s))),a.state={width:a.props.width,height:a.props.height,states:a.props.states,status:o.d.pause},a.field=null,a.canvas=r.a.createRef(),a.getActionName=function(){return a.state.status===o.d.play?o.d.pause:o.d.play},a.randomizeField=function(){a.field=c(a.state)},a.processKey=function(t){t.keyCode===o.c&&(t.preventDefault(),a.handlePlay())},a.nextStep=function(){try{a.field=f(v({},a.state,{field:a.field})),a.state.status===o.d.play&&(a.requestID=requestAnimationFrame(a.nextStep))}catch(t){cancelAnimationFrame(a.requestID),a.field=c(a.state),a.setState({status:o.d.pause})}a.canvas.current.paint(a.field)},a.handleNew=function(){a.randomizeField(),a.canvas.current.paint(a.field)},a.handleNext=function(){a.field=f(v({},a.state,{field:a.field})),a.canvas.current.paint(a.field)},a.handlePlay=function(){switch(a.state.status){case o.d.play:a.setState({status:o.d.pause});break;case o.d.pause:a.setState({status:o.d.play},a.nextStep)}},a.changeHandler=function(t,e){var n;a.setState(((n={})[t]=e,n))},g(a,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){this.randomizeField(),this.handlePlay(),document.addEventListener("keydown",this.processKey)},e.prototype.componentWillUnmount=function(){cancelAnimationFrame(this.requestID)},e.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{state:this.state,onChange:this.changeHandler},r.a.createElement(i.b,{id:o.b.width,label:"Field width",defaultNum:1}),r.a.createElement(i.b,{id:o.b.height,label:"Field height",defaultNum:1}),r.a.createElement(i.b,{id:o.b.states,label:"Number of states",defaultNum:1})),r.a.createElement("div",{onClick:this.handlePlay,onKeyDown:this.processKey,className:u.a.field,role:"presentation",title:this.getActionName()},r.a.createElement(b,{width:this.state.width,height:this.state.height,states:this.state.states,ref:this.canvas})),E,r.a.createElement("button",{type:"button",className:u.a.bigButton,onClick:this.handleNew},"New"),r.a.createElement("button",{type:"button",className:u.a.bigButton,onClick:this.handlePlay},this.getActionName()),this.state.status===o.d.pause&&r.a.createElement("button",{type:"button",className:u.a.bigButton,onClick:this.handleNext},"Next step"))},e}(a.PureComponent),m.defaultProps=v({},o.a),w)}}]);