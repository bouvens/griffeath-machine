(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SPACE_CODE; });
var _DEFAULT;

var IDS = {
  width: 'width',
  height: 'height',
  states: 'states',
  status: 'status'
};

var DEFAULT = (_DEFAULT = {}, _DEFAULT[IDS.width] = 700, _DEFAULT[IDS.height] = 700, _DEFAULT[IDS.states] = 16, _DEFAULT);

var STATUSES = {
  play: 'Play',
  pause: 'Pause'
};

var SPACE_CODE = 32;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"field":"GriffeathMachine__field__2ugWL","bigButton":"GriffeathMachine__bigButton__1GY-9"};

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRandomField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUpdatedField; });
function getRandomField(_ref) {
  var width = _ref.width,
      height = _ref.height,
      states = _ref.states;

  var field = [];

  for (var x = 0; x < width; x += 1) {
    field[x] = [];
    for (var y = 0; y < height; y += 1) {
      field[x][y] = Math.floor(Math.random() * states);
    }
  }

  return field;
}

var mod = function mod(number, limit) {
  return number < 0 ? number + limit : number % limit;
};

var getUpdatedField = function getUpdatedField(_ref2) {
  var field = _ref2.field,
      width = _ref2.width,
      height = _ref2.height,
      states = _ref2.states;
  return field.map(function (line, x) {
    return line.map(function (element, y) {
      var plusOne = mod(element + 1, states);

      if (field[x][mod(y - 1, height)] === plusOne || field[x][mod(y + 1, height)] === plusOne || field[mod(x - 1, width)][y] === plusOne || field[mod(x + 1, width)][y] === plusOne) {
        return plusOne;
      }

      return element;
    });
  });
};

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var number_to_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var number_to_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(number_to_color__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CanvasField = function (_React$PureComponent) {
  _inherits(CanvasField, _React$PureComponent);

  function CanvasField() {
    var _temp, _this, _ret;

    _classCallCheck(this, CanvasField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.drawPixel = function (x, y, h, states) {
      var index = x + y * _this.props.width;

      var _getColor = number_to_color__WEBPACK_IMPORTED_MODULE_2___default()(h, states),
          r = _getColor.r,
          g = _getColor.g,
          b = _getColor.b;

      /* eslint-disable-next-line no-bitwise */


      _this.uInt32Array[index] = 255 << 24 | b << 16 | g << 8 | r;
    }, _this.paint = function (field) {
      var _this$props = _this.props,
          width = _this$props.width,
          height = _this$props.height,
          states = _this$props.states;


      _this.uInt32Array = new Uint32Array(width * height);

      for (var x = 0; x < width; x += 1) {
        for (var y = 0; y < height; y += 1) {
          if (field[x]) {
            _this.drawPixel(x, y, field[x][y], states);
          }
        }
      }

      var canvasData = new ImageData(new Uint8ClampedArray(_this.uInt32Array.buffer), width, height);
      _this.canvasContext.putImageData(canvasData, 0, 0);
    }, _this.refCanvas = function (elem) {
      _this.canvasContext = elem && elem.getContext('2d');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CanvasField.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'canvas',
      {
        ref: this.refCanvas,
        width: this.props.width,
        height: this.props.height
      },
      'You are using an outdated browser without support of canvas elements.'
    );
  };

  return CanvasField;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/state-control/es/index.js + 14 modules
var es = __webpack_require__(83);

// EXTERNAL MODULE: ./src/components/constants.js
var constants = __webpack_require__(86);

// EXTERNAL MODULE: ./src/components/common/GriffeathMachine.css
var common_GriffeathMachine = __webpack_require__(87);
var GriffeathMachine_default = /*#__PURE__*/__webpack_require__.n(common_GriffeathMachine);

// EXTERNAL MODULE: ./src/components/common/CanvasField.jsx
var CanvasField = __webpack_require__(90);

// EXTERNAL MODULE: ./src/components/common/utils.js
var utils = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/gpu.js/dist/index.js
var dist = __webpack_require__(16);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/components/gpu/gpu-utils.js


function myMod(number, limit) {
  if (number < 0) {
    return number + limit;
  }
  return number % limit;
}

function myKernel(field, width, height, states) {
  // what a mess
  var ver = this.thread.x;
  var hor = this.thread.y;
  var element = field[hor][ver];
  var plusOne = myMod(element + 1, states);

  var next = myMod(hor - 1, width);
  if (field[next][ver] === plusOne) {
    return plusOne;
  }

  next = myMod(hor + 1, width);
  if (field[next][ver] === plusOne) {
    return plusOne;
  }

  next = myMod(ver - 1, height);
  if (field[hor][next] === plusOne) {
    return plusOne;
  }

  next = myMod(ver + 1, height);
  if (field[hor][next] === plusOne) {
    return plusOne;
  }

  return element;
}

var gpu = new dist_default.a();

var makeGetUpdatedField = function makeGetUpdatedField(fieldWidth, fieldHeight) {
  return gpu.createKernel(myKernel).setOutput([fieldHeight, fieldWidth]) // more of the mess
  .setFunctions([myMod]);
};
// CONCATENATED MODULE: ./src/components/gpu/GriffeathMachine.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GriffeathMachine_GriffeathMachine; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var _ref2 = react_default.a.createElement(
  'p',
  null,
  react_default.a.createElement(
    'em',
    null,
    'Press Space or click field for play / pause'
  )
);

var GriffeathMachine_GriffeathMachine = (_temp2 = _class = function (_PureComponent) {
  _inherits(GriffeathMachine, _PureComponent);

  function GriffeathMachine() {
    var _temp, _this, _ret;

    _classCallCheck(this, GriffeathMachine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      width: _this.props.width,
      height: _this.props.height,
      states: _this.props.states,
      status: constants["d" /* STATUSES */].pause
    }, _this.field = null, _this.canvas = react_default.a.createRef(), _this.getActionName = function () {
      return _this.state.status === constants["d" /* STATUSES */].play ? constants["d" /* STATUSES */].pause : constants["d" /* STATUSES */].play;
    }, _this.randomizeField = function () {
      _this.field = Object(utils["a" /* getRandomField */])(_this.state);
    }, _this.processKey = function (e) {
      if (e.keyCode === constants["c" /* SPACE_CODE */]) {
        e.preventDefault();
        _this.handlePlay();
      }
    }, _this.updateFieldSize = function (_ref) {
      var _ref$width = _ref.width,
          width = _ref$width === undefined ? _this.props.width : _ref$width,
          _ref$height = _ref.height,
          height = _ref$height === undefined ? _this.props.height : _ref$height;

      _this.fieldUpdater = makeGetUpdatedField(width, height);
    }, _this.getUpdatedField = function () {
      var _this$state = _this.state,
          width = _this$state.width,
          height = _this$state.height,
          states = _this$state.states;

      return _this.fieldUpdater(_this.field, width, height, states);
    }, _this.nextStep = function () {
      try {
        _this.field = _this.getUpdatedField();

        if (_this.state.status === constants["d" /* STATUSES */].play) {
          _this.requestID = requestAnimationFrame(_this.nextStep);
        }
      } catch (e) {
        cancelAnimationFrame(_this.requestID);
        _this.field = Object(utils["a" /* getRandomField */])(_this.state);
        _this.setState({
          status: constants["d" /* STATUSES */].pause
        });
      }
      _this.canvas.current.paint(_this.field);
    }, _this.handleNew = function () {
      _this.randomizeField();
      _this.canvas.current.paint(_this.field);
    }, _this.handleNext = function () {
      _this.field = _this.getUpdatedField();
      _this.canvas.current.paint(_this.field);
    }, _this.handlePlay = function () {
      switch (_this.state.status) {
        case constants["d" /* STATUSES */].play:
          _this.setState({ status: constants["d" /* STATUSES */].pause });
          break;
        case constants["d" /* STATUSES */].pause:
          _this.setState({ status: constants["d" /* STATUSES */].play }, _this.nextStep);
          break;
        default:
      }
    }, _this.changeHandler = function (name, value) {
      var _this$setState;

      switch (name) {
        case constants["b" /* IDS */].width:
          _this.updateFieldSize({ width: value });
          break;
        case constants["b" /* IDS */].height:
          _this.updateFieldSize({ height: value });
          break;
        default:
      }
      _this.setState((_this$setState = {}, _this$setState[name] = value, _this$setState));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  GriffeathMachine.prototype.componentWillMount = function componentWillMount() {
    this.randomizeField();
    this.handlePlay();
    document.addEventListener('keydown', this.processKey);
    this.updateFieldSize({});
  };

  GriffeathMachine.prototype.componentWillUnmount = function componentWillUnmount() {
    cancelAnimationFrame(this.requestID);
  };

  GriffeathMachine.prototype.render = function render() {
    return react_default.a.createElement(
      'div',
      null,
      react_default.a.createElement(
        es["a" /* Connector */],
        {
          state: this.state,
          onChange: this.changeHandler
        },
        react_default.a.createElement(es["b" /* Input */], {
          id: constants["b" /* IDS */].width,
          label: 'Field width',
          defaultNum: 1
        }),
        react_default.a.createElement(es["b" /* Input */], {
          id: constants["b" /* IDS */].height,
          label: 'Field height',
          defaultNum: 1
        }),
        react_default.a.createElement(es["b" /* Input */], {
          id: constants["b" /* IDS */].states,
          label: 'Number of states',
          defaultNum: 1
        })
      ),
      react_default.a.createElement(
        'div',
        {
          onClick: this.handlePlay,
          onKeyDown: this.processKey,
          className: GriffeathMachine_default.a.field,
          role: 'presentation',
          title: this.getActionName()
        },
        react_default.a.createElement(CanvasField["a" /* default */], {
          width: this.state.width,
          height: this.state.height,
          states: this.state.states,
          ref: this.canvas
        })
      ),
      _ref2,
      react_default.a.createElement(
        'button',
        { type: 'button', className: GriffeathMachine_default.a.bigButton, onClick: this.handleNew },
        'New'
      ),
      react_default.a.createElement(
        'button',
        { type: 'button', className: GriffeathMachine_default.a.bigButton, onClick: this.handlePlay },
        this.getActionName()
      ),
      this.state.status === constants["d" /* STATUSES */].pause && react_default.a.createElement(
        'button',
        { type: 'button', className: GriffeathMachine_default.a.bigButton, onClick: this.handleNext },
        'Next step'
      )
    );
  };

  return GriffeathMachine;
}(react["PureComponent"]), _class.defaultProps = _extends({}, constants["a" /* DEFAULT */]), _temp2);


/***/ })

}]);
//# sourceMappingURL=4.caeace9c.js.map