(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"routes":"Routing__routes__1Ylcn","active":"Routing__active__2g7D7"};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
module.exports = __webpack_require__(82);


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(12);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/common/ErrorBoundary.jsx
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function reloadPage() {
  window.location.reload();
}

var ErrorBoundary_ref = react_default.a.createElement(
  'h1',
  null,
  'I\'m sorry. Something went wrong.'
);

var _ref2 = react_default.a.createElement(
  'button',
  { onClick: reloadPage, type: 'button' },
  'Reload'
);

var ErrorBoundary = function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    _classCallCheck(this, ErrorBoundary);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { hasError: false };
    return _this;
  }

  ErrorBoundary.prototype.componentDidCatch = function componentDidCatch() {
    this.setState({ hasError: true });
  };

  ErrorBoundary.prototype.render = function render() {
    if (this.state.hasError) {
      return [ErrorBoundary_ref, _ref2];
    }
    return this.props.children;
  };

  return ErrorBoundary;
}(react_default.a.Component);


// EXTERNAL MODULE: ./node_modules/react-router-dom/es/HashRouter.js + 2 modules
var HashRouter = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/NavLink.js + 1 modules
var NavLink = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Switch.js + 1 modules
var Switch = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Route.js + 1 modules
var Route = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Redirect.js + 2 modules
var Redirect = __webpack_require__(94);

// EXTERNAL MODULE: ./src/components/common/Routing.css
var common_Routing = __webpack_require__(25);
var Routing_default = /*#__PURE__*/__webpack_require__.n(common_Routing);

// CONCATENATED MODULE: ./src/components/common/Routing.jsx





var Routing_ref2 = react_default.a.createElement(
  'div',
  null,
  'Loading...'
);

var Routing_WrapLazy = function WrapLazy(Children) {
  var _ref = react_default.a.createElement(
    react["Suspense"],
    { fallback: Routing_ref2 },
    react_default.a.createElement(Children, null)
  );

  return function () {
    return _ref;
  };
};

var Routing_Routing = function Routing(_ref3) {
  var routes = _ref3.routes;
  return react_default.a.createElement(
    HashRouter["a" /* default */],
    null,
    react_default.a.createElement(
      'div',
      { className: 'app' },
      react_default.a.createElement(
        'ul',
        { className: Routing_default.a.routes },
        routes.map(function (route) {
          return react_default.a.createElement(
            'li',
            { key: route.path },
            react_default.a.createElement(
              NavLink["a" /* default */],
              { to: route.path, activeClassName: Routing_default.a.active },
              route.name
            )
          );
        })
      ),
      react_default.a.createElement(
        Switch["a" /* default */],
        null,
        routes.map(function (route) {
          return react_default.a.createElement(Route["a" /* default */], {
            key: route.path,
            path: route.path,
            component: Routing_WrapLazy(route.component)
          });
        }),
        react_default.a.createElement(Redirect["a" /* default */], { exact: true, from: '/', to: routes[0].path })
      )
    )
  );
};

/* harmony default export */ var components_common_Routing = (Routing_Routing);
// CONCATENATED MODULE: ./src/components/routes.js


var ROUTES = [{
  name: 'Optimized',
  path: '/optimized',
  component: Object(react["lazy"])(function () {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 92));
  })
}, {
  name: 'Original',
  path: '/original',
  component: Object(react["lazy"])(function () {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 98));
  })
}, {
  name: 'GPU Accelerated',
  path: '/gpu',
  component: Object(react["lazy"])(function () {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, 96));
  })
}];
// CONCATENATED MODULE: ./src/components/App.jsx





var App_ref = react_default.a.createElement(
  ErrorBoundary,
  null,
  react_default.a.createElement(components_common_Routing, { routes: ROUTES })
);

var App = function App() {
  return App_ref;
};

/* harmony default export */ var components_App = (App);
// CONCATENATED MODULE: ./src/index.js






Object(react_dom["render"])(react_default.a.createElement(components_App, null), document.querySelector('#app'));

// eslint-disable-next-line no-undef, comment: it's global
var stats = new Stats();
document.body.appendChild(stats.dom);
requestAnimationFrame(function loop() {
  stats.update();
  requestAnimationFrame(loop);
});

/***/ })

},[[47,5,0]]]);
//# sourceMappingURL=app.d9f342d8.js.map