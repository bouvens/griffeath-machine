webpackJsonp([1],{0:function(t,e,n){n("+prg"),t.exports=n("lVK7")},BLn6:function(t,e){t.exports={field:"GriffeathMachine__field__rXP46",bigButton:"GriffeathMachine__bigButton__1sICS"}},"L/hj":function(t,e,n){"use strict";function a(t){for(var e=t.width,n=t.height,a=t.states,r=[],i=0;i<e;i+=1){r[i]=[];for(var o=0;o<n;o+=1)r[i][o]=Math.floor(Math.random()*a)}return r}function r(t){var e=function(t){var e=s(t,1);return e<1/6?6*e:e<.5?1:e<2/3?6*(2/3-e):0},n=e(t+1/3),a=e(t),r=e(t-1/3);return{r:Math.round(255*n),g:Math.round(255*a),b:Math.round(255*r)}}e.a=a,n.d(e,"b",function(){return c}),e.c=r;var i=n("M4fF"),o=n.n(i),s=function(t,e){return t<0?t+e:t%e},c=function(t){var e=t.field,n=t.width,a=t.height,r=t.states;return o.a.map(e,function(t,i){return o.a.map(t,function(t,o){var c=s(t+1,r);return e[i][s(o-1,a)]===c||e[i][s(o+1,a)]===c||e[s(i-1,n)][o]===c||e[s(i+1,n)][o]===c?c:t})})}},XVZL:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return g});var o,s,c=n("GiK3"),u=n.n(c),l=n("KSGD"),f=(n.n(l),n("RjKN")),p=n("oiih"),h=n("L/hj"),d=n("qaGz"),b=n("BLn6"),y=n.n(b),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},m=u.a.createElement("p",null,u.a.createElement("em",null,"Press Space or click field for play/pause")),g=(s=o=function(t){function e(){var n,i,o;a(this,e);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=r(this,t.call.apply(t,[this].concat(c))),i.state={width:i.props.width,height:i.props.height,states:i.props.states,status:p.d.pause},i.getActionName=function(){return i.state.status===p.d.play?p.d.pause:p.d.play},i.field=null,i.randomizeField=function(){i.field=Object(h.a)(i.state)},i.processKey=function(t){t.keyCode===p.c&&(t.preventDefault(),i.handlePlay())},i.nextStep=function(){try{i.field=Object(h.b)(v({},i.state,{field:i.field}))}catch(t){i.field=Object(h.a)(i.state),i.setState({status:p.d.pause})}i.canvas.paint(i.field),i.state.status===p.d.play&&requestAnimationFrame(i.nextStep)},i.handleNew=function(){i.randomizeField(),i.canvas.paint(i.field)},i.handleNext=function(){i.field=Object(h.b)(v({},i.state,{field:i.field})),i.canvas.paint(i.field)},i.handlePlay=function(){switch(i.state.status){case p.d.play:i.setState({status:p.d.pause});break;case p.d.pause:i.setState({status:p.d.play},i.nextStep)}},i.changeHandler=function(t,e){var n;i.setState((n={},n[t]=e,n))},i.selectAll=function(t){return t.setSelectionRange(0,t.value.length)},o=n,r(i,o)}return i(e,t),e.prototype.componentWillMount=function(){this.randomizeField(),this.handlePlay(),document.addEventListener("keydown",this.processKey)},e.prototype.render=function(){var t=this;return u.a.createElement("div",null,u.a.createElement(f.a,{state:this.state,onChange:this.changeHandler,onFocus:this.selectAll},u.a.createElement(f.b,{id:p.b.width,label:"Field width",defaultNum:1}),u.a.createElement(f.b,{id:p.b.height,label:"Field height",defaultNum:1}),u.a.createElement(f.b,{id:p.b.states,label:"Number of states",defaultNum:1})),u.a.createElement("div",{onClick:this.handlePlay,onKeyDown:this.processKey,className:y.a.field,role:"presentation",title:this.getActionName()},u.a.createElement(d.a,{width:this.state.width,height:this.state.height,field:this.field,states:this.state.states,ref:function(e){t.canvas=e}})),m,u.a.createElement("button",{className:y.a.bigButton,onClick:this.handleNew},"New"),u.a.createElement("button",{className:y.a.bigButton,onClick:this.handlePlay},this.getActionName()),this.state.status===p.d.pause&&u.a.createElement("button",{className:y.a.bigButton,onClick:this.handleNext},"Next step"))},e}(c.PureComponent),o.defaultProps=v({},p.a),s)},cilB:function(t,e){},lVK7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("GiK3"),r=n.n(a),i=n("O27J"),o=(n.n(i),n("cilB")),s=(n.n(o),n("XVZL"));Object(i.render)(r.a.createElement(s.a,null),document.querySelector("#app"))},oiih:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return s});var a,r={width:"width",height:"height",states:"states",status:"status"},i=(a={},a[r.width]=500,a[r.height]=500,a[r.states]=16,a),o={play:"Play",pause:"Pause"},s=32},qaGz:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return p});var o=n("GiK3"),s=n.n(o),c=n("KSGD"),u=(n.n(c),n("M4fF")),l=n.n(u),f=n("L/hj"),p=function(t){function e(){var n,i,o;a(this,e);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=r(this,t.call.apply(t,[this].concat(c))),i.drawPixel=function(t,e,n){var a=4*(t+e*i.props.width),r=Object(f.c)(n),o=r.r,s=r.g,c=r.b;i.canvasData.data[a]=o,i.canvasData.data[a+1]=s,i.canvasData.data[a+2]=c,i.canvasData.data[a+3]=255},i.clear=function(){i.canvasContext.clearRect(0,0,i.props.width,i.props.height)},i.paint=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.props.field;i.canvasData=i.canvasContext.getImageData(0,0,i.props.width,i.props.height);for(var e=0;e<i.props.width;e+=1)for(var n=0;n<i.props.height;n+=1)i.drawPixel(e,n,l.a.get(t,[e,n])/i.props.states);i.canvasContext.putImageData(i.canvasData,0,0)},i.refCanvas=function(t){i.canvasContext=t.getContext("2d")},o=n,r(i,o)}return i(e,t),e.prototype.componentDidMount=function(){this.paint()},e.prototype.componentDidUpdate=function(){this.paint()},e.prototype.render=function(){return s.a.createElement("canvas",{ref:this.refCanvas,width:this.props.width,height:this.props.height},"You are using an outdated browser without support of canvas elements.")},e}(s.a.PureComponent)}},[0]);
//# sourceMappingURL=app.dad6382a.js.map