(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[3],{

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGetUpdatedField", function() { return makeGetUpdatedField; });
/* harmony import */ var gpu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var gpu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gpu_js__WEBPACK_IMPORTED_MODULE_0__);


function myMod(number, limit) {
  if (number < 0) {
    return number + limit;
  }

  if (number >= limit) {
    return number - limit;
  }

  return number;
}

function updateElement(field, width, height, states) {
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

var gpu = new gpu_js__WEBPACK_IMPORTED_MODULE_0___default.a();
var makeGetUpdatedField = function makeGetUpdatedField(fieldWidth, fieldHeight) {
  return gpu.createKernel(updateElement).setOutput([fieldHeight, fieldWidth]) // more of the mess
  .setFunctions([myMod]);
};

/***/ })

}]);