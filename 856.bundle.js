(this.webpackChunkgriffeath_machine=this.webpackChunkgriffeath_machine||[]).push([[856],{336:function(e){function t(e){const t=e<0?e+1:e%1;return t<1/6?Math.round(1530*t):t<.5?255:t<2/3?Math.round(1530*(2/3-t)):0}e.exports.mapColor=e=>({r:t(e+1/3),g:t(e),b:t(e-1/3)})},195:function(e,t,n){"use strict";n.d(t,{Jl:function(){return J},Wi:function(){return w},pd:function(){return _}});var r=n(540),o=n(556),a=n.n(o);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,n)}}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=function(){};function C(e,t){for(var n=e,r=function(e,t){return null!=e[t]?[t]:Array.isArray(t)?t:t.split(".")}(e,t),o=r.length,a=0;null!==n&&a<o;a+=1)n=n[r[a]];return n}function O(e){if(void 0!==e.selectionStart)return{start:e.selectionStart,end:e.selectionEnd};if(document.selection){e.focus();var t=document.selection.createRange();t.moveStart("character",-e.value.length);var n=t.text.length;return{start:n,end:n}}return{start:0,end:0}}var x=function(e){var t=e.text,n=e.tabIndex,o=e.onClick;return r.createElement("div",{style:{marginBottom:"0.6em"}},r.createElement("button",{type:"button",onClick:o,tabIndex:n},t))};x.propTypes={text:a().string,tabIndex:a().number,onClick:a().func},x.defaultProps={text:"",tabIndex:-1,onClick:k};var N=function(e,t){return function(){Object.entries(t).forEach((function(t){var n=v(t,2),r=n[0],o=n[1];e(r,o)}))}},S=function(e){var t=e.className,n=e.setters,o=e.setHandler,a=e.tabIndexOffset,l=Array.isArray(n)?n.map((function(e){return[e.text,e.params]})):Object.entries(n);return r.createElement("div",{className:t},l.map((function(e,t){var n=v(e,2),l=n[0],u=n[1];return r.createElement(x,{onClick:N(o,u),key:l,tabIndex:t+a,text:l})})))};S.propTypes={className:a().string,setters:a().oneOfType([a().object,a().array]).isRequired,setHandler:a().func.isRequired,tabIndexOffset:a().number},S.defaultProps={className:"",tabIndexOffset:1};var E=["children"],w=function(e){var t=e.children,n=y(e,E);return r.createElement("div",{className:"controlled-connector"},r.Children.map(t,(function(e){return e&&"function"==typeof e.type?r.createElement(e.type,f({},e.props,n)):e})))};w.propTypes={children:a().oneOfType([a().arrayOf(a().node),a().node]).isRequired};var P=a().oneOfType([a().string,a().number,a().bool]),H=a().oneOfType([a().string,a().array]),F=a().oneOfType([a().bool,a().string]),R=["id","state","path","value","defaultNum","onChange","onClick","onFocus","decimalMark","numberColor","thousandsSeparator","alternateDecimalMark","trimOnPaste"],T={onChange:k,onClick:k,onFocus:k,decimalMark:".",numberColor:!1,alternateDecimalMark:",",trimOnPaste:!0},j={".":[",","'","’"," "],",":[" ","."],"·":[","],"'":["."]},I=function(e){return new RegExp("[".concat((Array.isArray(e)?e.join(""):e).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(" ","\\s"),"]"),"g")},A=function(e){var t=function(t){p(o,t);var n=b(o);function o(){var e;u(this,o);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return s(h(e=n.call.apply(n,[this].concat(r))),"afterUpdate",null),s(h(e),"getId",(function(){return"labeled-control-".concat(e.props.id)})),s(h(e),"getPath",(function(){return e.props.path||e.props.id})),s(h(e),"getValue",(function(){return void 0!==e.props.value?e.props.value:C(e.props.state,e.getPath())})),s(h(e),"getThousandsSeparator",(function(){return e.props.thousandsSeparator||j[e.props.decimalMark]})),s(h(e),"getColorIfNumber",(function(){return"number"==typeof e.getValue()?e.props.numberColor:void 0})),s(h(e),"prepareNum",(function(t){return t.replace(e.getThousandsSeparator()?I(e.getThousandsSeparator()):null,"").replace(I(e.props.alternateDecimalMark),".").replace(e.props.decimalMark,".")})),s(h(e),"wasNumber",(function(t,n){return!Number.isNaN(Number(t))&&t.length||"number"===n&&!t.length&&e.props.defaultNum})),s(h(e),"processNewValue",(function(t,n){var r=t.value,o=t.checked,a=t.type,u=l(e.getValue()),i=r;if("boolean"!==u&&"checkbox"!==a){var c=e.prepareNum(i);if(n){var s=new RegExp("^(\\d+\\.(?:0*(?:\\d?[1-9])+)?)0*$").exec(c);if(s&&s[1])c=v(s,2)[1],/\.$/.test(c)&&(c=c.slice(0,-1))}if(e.wasNumber(c,u)&&!/(\.|\s|\.[0-9]*0)$/.test(c))i=(/\./.test(c)?parseFloat:parseInt)(c,10)||e.props.defaultNum||0;e.props.onChange(e.getPath(),i)}else e.props.onChange(e.getPath(),o)})),s(h(e),"changeHandler",(function(t){var n=t.target,r=n.value,o=n.checked,a=n.type;e.processNewValue({value:r,checked:o,type:a})})),s(h(e),"pasteHandler",(function(t){t.preventDefault();var n,r=t.target,o=t.clipboardData,a=r.selectionStart,l=r.selectionEnd,u=r.checked,i=r.type,c=o.getData("Text");e.props.trimOnPaste&&(n=" \\t\\n",c=c.replace(new RegExp("^[".concat(n,"]+"),"g"),"").replace(new RegExp("[".concat(n,"]+$"),"g"),""));var s=a;c.toString&&(s+=c.toString().length);var f=e.getValue();if(f&&f.toString){var p=l-a,d=f.toString().split("");d.splice(a,p,c),c=d.join("")}e.afterUpdate=function(){r.setSelectionRange(s,s)},e.processNewValue({value:c,checked:u,type:i},e.props.trimOnPaste)})),s(h(e),"clickHandler",(function(t){return function(){return e.props.onClick(t.control)}})),s(h(e),"focusHandler",(function(t){return function(){return e.props.onFocus(t.control)}})),s(h(e),"formatNum",(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.getValue()).toString().replace(".",e.props.decimalMark)})),s(h(e),"showValue",(function(){var t=e.getValue();switch(l(t)){case"number":return e.props.values?t:e.formatNum();case"boolean":case"string":return t;default:return void 0===t?t:t.toString()}})),s(h(e),"refHandler",(function(e){return function(t){e.control=t}})),e}return c(o,[{key:"componentDidUpdate",value:function(){this.afterUpdate&&(this.afterUpdate(),this.afterUpdate=null)}},{key:"render",value:function(){var t=this.props;t.id,t.state,t.path,t.value,t.defaultNum,t.onChange,t.onClick,t.onFocus,t.decimalMark,t.numberColor,t.thousandsSeparator,t.alternateDecimalMark,t.trimOnPaste;var n=y(t,R);return r.createElement(e,f({},n,{id:this.getId(),value:this.showValue(),onChange:this.changeHandler,onPaste:this.pasteHandler,onClick:this.clickHandler,onFocus:this.focusHandler,refHandler:this.refHandler,numberColor:this.getColorIfNumber()}))}}]),o}(r.Component);return s(t,"propTypes",{id:a().string.isRequired,state:a().objectOf(a().any),path:a().string,value:P,values:a().arrayOf(P),defaultNum:a().number,onChange:a().func,onClick:a().func,onFocus:a().func,decimalMark:a().string,numberColor:F,thousandsSeparator:H,alternateDecimalMark:H,trimOnPaste:a().bool}),t},M=function(e){return(t=T,function(e){var n=function(t){return(0,r.createElement)(e,t)};return n.defaultProps=t,n})(A(e));var t},D=["className","label","refHandler","onFocus","multiLine","numberColor"],V=function(e){p(n,e);var t=b(n);function n(){var e;u(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return s(h(e=t.call.apply(t,[this].concat(o))),"getInnerStyles",(function(){return{display:"inline-block",height:e.props.multiLine?"5em":"auto",verticalAlign:e.props.multiLine?"top":"inherit",padding:"0.1em 0.2em",border:"1px solid darkgrey",backgroundColor:(t=e.props,n=t.readOnly,r=t.numberColor,n?"#eee":r?r.length?r:"#cfffcf":"white")};var t,n,r})),s(h(e),"handleRef",(function(t){return function(n){e.target=n,t(n)}})),s(h(e),"eventHandler",(function(t){return function(n){t(h(e))(n),e.selection=O(e.target)}})),e}return c(n,[{key:"componentDidUpdate",value:function(){!function(e,t){var n=t.start,r=t.end;if(e&&void 0!==n&&(e!==document.activeElement||e.selectionStart!==n||e.selectionEnd!==r)&&("text"===e.type||"textarea"===e.type)&&e===document.activeElement)if(e.setSelectionRange)e.setSelectionRange(n,r);else if(e.createTextRange){var o=e.createTextRange();o.collapse(!0),o.moveStart("character",n),o.moveEnd("character",r),o.select()}}(this.target,this.selection)}},{key:"getSnapshotBeforeUpdate",value:function(){return this.selection=O(this.target),this.selection}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.label,o=e.refHandler,a=e.onFocus,l=e.multiLine;e.numberColor;var u=y(e,D),i=l?"textarea":"input";return r.createElement("div",{className:t,style:{marginBottom:"0.7em"}},r.createElement("label",{htmlFor:this.props.id,style:{display:"inline-block",paddingRight:"0.3em"}},n),r.createElement(i,f({ref:this.handleRef(o(this)),onFocus:this.eventHandler(a),style:this.getInnerStyles()},u)),r.createElement("span",{style:{paddingLeft:"0.3em"}},this.props.suffix))}}]),n}(r.Component);s(V,"propTypes",{className:a().string,id:a().string.isRequired,label:a().string,suffix:a().string,refHandler:a().func,onClick:a().func,onFocus:a().func,onChange:a().func,value:P,multiLine:a().bool,readOnly:a().bool,numberColor:F}),s(V,"defaultProps",{className:"",label:"",suffix:"",refHandler:k,onClick:k,onFocus:k,onChange:k,value:"",multiLine:!1,readOnly:!1,numberColor:!1});var _=M(V),U=["className","id","label","suffix","values","value","refHandler","onClick","onFocus","readOnly","numberColor"],L=a().oneOfType([a().string,a().number]),B=function(e){p(n,e);var t=b(n);function n(){return u(this,n),t.apply(this,arguments)}return c(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=t.id,a=t.label,l=t.suffix,u=t.values,i=t.value,c=t.refHandler,s=t.onClick,p=t.onFocus,d=t.readOnly;t.numberColor;var m=y(t,U);return r.createElement("div",{className:n,id:o,style:{marginBottom:"0.8em"}},a,u.map((function(t){var n="".concat(o,"-").concat(t);return r.createElement("div",{key:n},r.createElement("input",f({id:n,name:o,type:"radio",checked:i===t,value:t,ref:c(e),onClick:s(e),onFocus:p(e),disabled:d,style:{margin:"3px 3px 2px 5px"}},m)),r.createElement("label",{htmlFor:n},t.label||t))})),l)}}]),n}(r.PureComponent);s(B,"propTypes",{className:a().string,id:a().string,label:a().oneOfType([a().string,a().node]),suffix:a().oneOfType([a().string,a().node]),value:L,values:a().arrayOf(L),refHandler:a().func,onClick:a().func,onFocus:a().func,readOnly:a().bool,numberColor:F}),s(B,"defaultProps",{className:"",id:"",label:"",suffix:"",value:"",values:[],refHandler:k,onClick:k,onFocus:k,readOnly:!1,numberColor:!1});M(B);var $=["className","value","refHandler","onClick","onFocus","label","readOnly","numberColor","type"],q=function(e){p(n,e);var t=b(n);function n(){return u(this,n),t.apply(this,arguments)}return c(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.value,o=e.refHandler,a=e.onClick,l=e.onFocus,u=e.label,i=e.readOnly;e.numberColor,e.type;var c=y(e,$);return r.createElement("div",{className:t},r.createElement("input",f({type:"checkbox",checked:n,ref:o(this),onClick:a(this),onFocus:l(this),disabled:i,style:{marginBottom:"0.8em",marginLeft:"1px"}},c)),r.createElement("label",{htmlFor:this.props.id},u))}}]),n}(r.PureComponent);s(q,"propTypes",{className:a().string,id:a().string.isRequired,label:a().string,value:a().bool,refHandler:a().func,onClick:a().func,onFocus:a().func,readOnly:a().bool,numberColor:F}),s(q,"defaultProps",{className:"",label:"",value:!1,refHandler:k,onClick:k,onFocus:k,readOnly:!1,numberColor:!1});var J=M(q)}}]);