(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{85:function(t,e,a){"use strict";var n;a.d(e,"b",function(){return r}),a.d(e,"a",function(){return i}),a.d(e,"d",function(){return o}),a.d(e,"c",function(){return s});var r={width:"width",height:"height",states:"states",status:"status"},i=((n={})[r.width]=700,n[r.height]=700,n[r.states]=16,n),o={play:"Play",pause:"Pause"},s=32},86:function(t,e,a){t.exports={field:"GriffeathMachine__field__2ugWL",bigButton:"GriffeathMachine__bigButton__1GY-9"}},92:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=(a(1),a(83)),o=a(85),s=a(86),u=a.n(s);function c(t){for(var e=t.width,a=t.height,n=t.states,r=[],i=0;i<e;i+=1){r[i]=[];for(var o=0;o<a;o+=1)r[i][o]=Math.floor(Math.random()*n)}return r}var l=function(t,e){return t<0?t+e:t%e},f=function(t){var e=t.field,a=t.width,n=t.height,r=t.states;return e.map(function(t,i){return t.map(function(t,o){var s=l(t+1,r);return e[i][l(o-1,n)]===s||e[i][l(o+1,n)]===s||e[l(i-1,a)][o]===s||e[l(i+1,a)][o]===s?s:t})})};function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=function(t){function e(){var a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return a=n=p(this,t.call.apply(t,[this].concat(i))),n.drawPixel=function(t,e,a){var r=4*(t+e*n.props.width),i=function(t){var e=function(t){var e=l(t,1);return e<1/6?6*e:e<.5?1:e<2/3?6*(2/3-e):0},a=e(t+1/3),n=e(t),r=e(t-1/3);return{r:Math.round(255*a),g:Math.round(255*n),b:Math.round(255*r)}}(a),o=i.r,s=i.g,u=i.b;n.canvasData.data[r]=o,n.canvasData.data[r+1]=s,n.canvasData.data[r+2]=u,n.canvasData.data[r+3]=255},n.paint=function(t){n.canvasData=n.canvasContext.getImageData(0,0,n.props.width,n.props.height);for(var e=0;e<n.props.width;e+=1)for(var a=0;a<n.props.height;a+=1)t[e]&&n.drawPixel(e,a,t[e][a]/n.props.states);n.canvasContext.putImageData(n.canvasData,0,0)},n.refCanvas=function(t){n.canvasContext=t&&t.getContext("2d")},p(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){return r.a.createElement("canvas",{ref:this.refCanvas,width:this.props.width,height:this.props.height},"You are using an outdated browser without support of canvas elements.")},e}(r.a.PureComponent);a.d(e,"default",function(){return w});var d,y,b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};function m(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var v=r.a.createElement("p",null,r.a.createElement("em",null,"Press Space or click field for play / pause")),w=(y=d=function(t){function e(){var a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return a=n=m(this,t.call.apply(t,[this].concat(s))),n.state={width:n.props.width,height:n.props.height,states:n.props.states,status:o.d.pause},n.field=null,n.canvas=r.a.createRef(),n.getActionName=function(){return n.state.status===o.d.play?o.d.pause:o.d.play},n.randomizeField=function(){n.field=c(n.state)},n.processKey=function(t){t.keyCode===o.c&&(t.preventDefault(),n.handlePlay())},n.nextStep=function(){try{n.field=f(b({},n.state,{field:n.field})),n.state.status===o.d.play&&(n.requestID=requestAnimationFrame(n.nextStep))}catch(t){cancelAnimationFrame(n.requestID),n.field=c(n.state),n.setState({status:o.d.pause})}n.canvas.current.paint(n.field)},n.handleNew=function(){n.randomizeField(),n.canvas.current.paint(n.field)},n.handleNext=function(){n.field=f(b({},n.state,{field:n.field})),n.canvas.current.paint(n.field)},n.handlePlay=function(){switch(n.state.status){case o.d.play:n.setState({status:o.d.pause});break;case o.d.pause:n.setState({status:o.d.play},n.nextStep)}},n.changeHandler=function(t,e){var a;n.setState(((a={})[t]=e,a))},m(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){this.randomizeField(),this.handlePlay(),document.addEventListener("keydown",this.processKey)},e.prototype.componentWillUnmount=function(){cancelAnimationFrame(this.requestID)},e.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{state:this.state,onChange:this.changeHandler},r.a.createElement(i.b,{id:o.b.width,label:"Field width",defaultNum:1}),r.a.createElement(i.b,{id:o.b.height,label:"Field height",defaultNum:1}),r.a.createElement(i.b,{id:o.b.states,label:"Number of states",defaultNum:1})),r.a.createElement("div",{onClick:this.handlePlay,onKeyDown:this.processKey,className:u.a.field,role:"presentation",title:this.getActionName()},r.a.createElement(h,{width:this.state.width,height:this.state.height,field:this.field,states:this.state.states,ref:this.canvas})),v,r.a.createElement("button",{type:"button",className:u.a.bigButton,onClick:this.handleNew},"New"),r.a.createElement("button",{type:"button",className:u.a.bigButton,onClick:this.handlePlay},this.getActionName()),this.state.status===o.d.pause&&r.a.createElement("button",{type:"button",className:u.a.bigButton,onClick:this.handleNext},"Next step"))},e}(n.PureComponent),d.defaultProps=b({},o.a),y)}}]);
//# sourceMappingURL=3.e0a7f3d6.js.map