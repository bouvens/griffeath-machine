(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{85:function(t,e,n){"use strict";var a;n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return s});var r={width:"width",height:"height",states:"states",status:"status"},i=((a={})[r.width]=700,a[r.height]=700,a[r.states]=16,a),o={play:"Play",pause:"Pause"},s=32},86:function(t,e,n){t.exports={field:"GriffeathMachine__field__2ugWL",bigButton:"GriffeathMachine__bigButton__1GY-9"}},88:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=(n(1),n(83)),u=n(85),r=n(86),c=n.n(r);function l(t){for(var e=t.width,n=t.height,a=t.states,r=[],i=0;i<e;i+=1){r[i]=[];for(var o=0;o<n;o+=1)r[i][o]=Math.floor(Math.random()*a)}return r}var h=[],d={r:0,g:0,b:0},i=n(16);function p(t,e){return t<0?t+e:t%e}function f(t,e,n,a){var r=this.thread.x,i=this.thread.y,o=t[i][r],s=p(o+1,a),u=p(i-1,e);return t[u][r]===s?s:t[u=p(i+1,e)][r]===s?s:(u=p(r-1,n),t[i][u]===s?s:(u=p(r+1,n),t[i][u]===s?s:o))}var y=new(n.n(i).a);function b(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var w=function(r){function i(){var t,c;!function(t,e){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this);for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return t=c=b(this,r.call.apply(r,[this].concat(n))),c.drawPixel=function(t,e,n,a){var r=t+e*c.props.width,i=function(t,e){if(h.length!==e){h.length=e;for(var n=0;n<e;n+=1)h[n]=(void 0,i=(r=function(t){var e=t<0?t+1:t%1;return e<1/6?6*e:e<.5?1:e<2/3?6*(2/3-e):0})((a=n/e)+1/3),o=r(a),s=r(a-1/3),{r:Math.round(255*i),g:Math.round(255*o),b:Math.round(255*s)})}var a,r,i,o,s;return h[t]||d}(n,a),o=i.r,s=i.g,u=i.b;c.uInt32Array[r]=255<<24|u<<16|s<<8|o},c.paint=function(t){var e=c.props,n=e.width,a=e.height,r=e.states;c.uInt32Array=new Uint32Array(n*a);for(var i=0;i<n;i+=1)for(var o=0;o<a;o+=1)t[i]&&c.drawPixel(i,o,t[i][o],r);var s=new ImageData(new Uint8ClampedArray(c.uInt32Array.buffer),n,a);c.canvasContext.putImageData(s,0,0)},c.refCanvas=function(t){c.canvasContext=t&&t.getContext("2d")},b(c,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,r),i.prototype.render=function(){return o.a.createElement("canvas",{ref:this.refCanvas,width:this.props.width,height:this.props.height},"You are using an outdated browser without support of canvas elements.")},i}(o.a.PureComponent);n.d(e,"default",function(){return N});var m,v,g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function E(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var P=o.a.createElement("p",null,o.a.createElement("em",null,"Press Space or click field for play / pause")),N=(v=m=function(r){function i(){var t,s;!function(t,e){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this);for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return t=s=E(this,r.call.apply(r,[this].concat(n))),s.state={width:s.props.width,height:s.props.height,states:s.props.states,status:u.d.pause},s.field=null,s.canvas=o.a.createRef(),s.getActionName=function(){return s.state.status===u.d.play?u.d.pause:u.d.play},s.randomizeField=function(){s.field=l(s.state)},s.processKey=function(t){t.keyCode===u.c&&(t.preventDefault(),s.handlePlay())},s.updateFieldSize=function(t){var e,n,a=t.width,r=void 0===a?s.props.width:a,i=t.height,o=void 0===i?s.props.height:i;s.fieldUpdater=(e=r,n=o,y.createKernel(f).setOutput([n,e]).setFunctions([p]))},s.getUpdatedField=function(){var t=s.state,e=t.width,n=t.height,a=t.states;return s.fieldUpdater(s.field,e,n,a)},s.nextStep=function(){try{s.field=s.getUpdatedField(),s.state.status===u.d.play&&(s.requestID=requestAnimationFrame(s.nextStep))}catch(t){cancelAnimationFrame(s.requestID),s.field=l(s.state),s.setState({status:u.d.pause})}s.canvas.current.paint(s.field)},s.handleNew=function(){s.randomizeField(),s.canvas.current.paint(s.field)},s.handleNext=function(){s.field=s.getUpdatedField(),s.canvas.current.paint(s.field)},s.handlePlay=function(){switch(s.state.status){case u.d.play:s.setState({status:u.d.pause});break;case u.d.pause:s.setState({status:u.d.play},s.nextStep)}},s.changeHandler=function(t,e){var n;switch(t){case u.b.width:s.updateFieldSize({width:e});break;case u.b.height:s.updateFieldSize({height:e})}s.setState(((n={})[t]=e,n))},E(s,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,r),i.prototype.componentWillMount=function(){this.randomizeField(),this.handlePlay(),document.addEventListener("keydown",this.processKey),this.updateFieldSize({})},i.prototype.componentWillUnmount=function(){cancelAnimationFrame(this.requestID)},i.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(s.a,{state:this.state,onChange:this.changeHandler},o.a.createElement(s.b,{id:u.b.width,label:"Field width",defaultNum:1}),o.a.createElement(s.b,{id:u.b.height,label:"Field height",defaultNum:1}),o.a.createElement(s.b,{id:u.b.states,label:"Number of states",defaultNum:1})),o.a.createElement("div",{onClick:this.handlePlay,onKeyDown:this.processKey,className:c.a.field,role:"presentation",title:this.getActionName()},o.a.createElement(w,{width:this.state.width,height:this.state.height,states:this.state.states,ref:this.canvas})),P,o.a.createElement("button",{type:"button",className:c.a.bigButton,onClick:this.handleNew},"New"),o.a.createElement("button",{type:"button",className:c.a.bigButton,onClick:this.handlePlay},this.getActionName()),this.state.status===u.d.pause&&o.a.createElement("button",{type:"button",className:c.a.bigButton,onClick:this.handleNext},"Next step"))},i}(a.PureComponent),m.defaultProps=g({},u.a),v)}}]);