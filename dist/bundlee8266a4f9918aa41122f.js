/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemsArray": () => (/* binding */ itemsArray)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/status.js */ "./src/modules/status.js");


var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function activateEditListeners() {
  var editBtn = document.querySelectorAll('.editBtn');
  var updateController = document.querySelectorAll('.update-controller');
  var inputs = document.querySelectorAll('.input-controller textarea');
  editBtn.forEach(function (eb, i) {
    eb.addEventListener('click', function () {
      updateController[i].style.display = 'flex';
      editBtn[i].style.display = 'none';
      inputs[i].disabled = false;
    });
  });
}
function activateCancelListeners() {
  var cancelBtn = document.querySelectorAll('.cancelBtn');
  var editBtn = document.querySelectorAll('.editBtn');
  var updateController = document.querySelectorAll('.update-controller');
  var inputs = document.querySelectorAll('.input-controller textarea');
  cancelBtn.forEach(function (cb, i) {
    cb.addEventListener('click', function () {
      updateController[i].style.display = 'none';
      editBtn[i].style.display = 'block';
      inputs[i].disabled = true;
      window.location.reload();
    });
  });
}
function updateItem(text, i) {
  itemsArray[i] = text;
  localStorage.setItem('items', JSON.stringify(itemsArray));
  window.location.reload();
}
function activateSaveListeners() {
  var saveBtn = document.querySelectorAll('.saveBtn');
  var inputs = document.querySelectorAll('.input-controller textarea');
  saveBtn.forEach(function (sb, i) {
    sb.addEventListener('click', function () {
      updateItem(inputs[i].value, i);
    });
  });
}
function deleteItem(i) {
  itemsArray = itemsArray.filter(function (item, index) {
    return index !== i;
  });
  localStorage.setItem('items', JSON.stringify(itemsArray));
  window.location.reload();
}
function activateDeleteListeners() {
  var deleteBtn = document.querySelectorAll('.deleteBtn');
  deleteBtn.forEach(function (db, i) {
    db.addEventListener('click', function () {
      deleteItem(i);
    });
  });
}
var createItem = function createItem() {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    task: item.value,
    index: itemsArray.length,
    completed: false
  };
  itemsArray.push(item);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  window.location.reload();
};
document.querySelector('#enter').addEventListener('click', function () {
  var item = document.querySelector('#item');
  createItem(item.value);
});
function checkBox() {
  var checks = document.querySelectorAll('input[type=checkbox]');
  var inputs = document.querySelectorAll('.input-controller textarea');
  checks.forEach(function (ck, i) {
    ck.addEventListener('change', function () {
      if (checks[i].checked) {
        inputs[i].style.textDecoration = 'line-through';
        inputs[i].style.color = 'grey';
        (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_1__.updateCompletedStatus)(i, true);
      } else {
        inputs[i].style.textDecoration = 'none';
        inputs[i].style.color = 'black';
        (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_1__.updateCompletedStatus)(i, false);
      }
    });
  });
}
function displayItems() {
  var items = '';
  for (var i = 0; i < itemsArray.length; i += 1) {
    items += " <div class=\"item\" >\n  <div class=\"input-controller\">\n      <input type=\"checkbox\" class=\"complete\" name=\"completed\" />\n      <textarea disabled>".concat(itemsArray[i], "</textarea>\n      <div class=\"edit-controller\">\n          <i class=\"fa fa-ellipsis-v editBtn\"></i>\n      </div>\n  </div>\n\n  <div class=\"update-controller\">\n  <button class=\"saveBtn\"><i class=\"fa fa-save\"></i></button>\n  <button class=\"cancelBtn\"><i class=\"fa fa-times\"></i></button>\n  <button class=\"deleteBtn\"><i class=\"fa fa-trash\"></i></button>\n  </div>\n          </div>");
  }
  document.querySelector('.to-do-list').innerHTML = items;
  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();
  checkBox();
}
var clearBtn = document.querySelector('.clean');
clearBtn.addEventListener('click', function () {
  var checks = document.querySelectorAll('input[type=checkbox]');
  var indexesToDelete = [];
  checks.forEach(function (checkbox, i) {
    if (checkbox.checked) {
      indexesToDelete.push(i);
    }
  });
  var filteredItemsArray = itemsArray.filter(function (item, i) {
    return !indexesToDelete.includes(i);
  });
  localStorage.setItem('items', JSON.stringify(filteredItemsArray));
  window.location.reload();
});
window.onload = function () {
  displayItems();
};

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateCompletedStatus": () => (/* binding */ updateCompletedStatus)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");

function updateCompletedStatus(index, completed) {
  var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  var item = itemsArray[index];
  if (typeof item === 'string') {
    itemsArray[index] = {
      task: item,
      index: index,
      completed: completed
    };
  } else {
    item.completed = completed;
  }
  localStorage.setItem('items', JSON.stringify(itemsArray));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: #fff;\r\n  min-height: 98vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#titled {\r\n  padding: 4% 2%;\r\n  text-transform: uppercase;\r\n}\r\n\r\nmain {\r\n  padding: 1% 30%;\r\n}\r\n\r\n.update-controller {\r\n  display: none;\r\n  flex-direction: row;\r\n}\r\n\r\n.update-controller button {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.update-controller button i {\r\n  font-size: 19px;\r\n  padding: 5px;\r\n  border-radius: 6px;\r\n}\r\n\r\n.update-controller button i:hover {\r\n  background-color: rgb(226, 225, 225);\r\n}\r\n\r\n.contact-Section {\r\n  display: flex;\r\n  box-shadow: 2px 2px 8px grey;\r\n  flex-direction: column;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.input-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-bottom: 1px solid grey;\r\n}\r\n\r\n.to-do-input {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.to-do-input input {\r\n  width: 90%;\r\n  padding: 2%;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 25px;\r\n}\r\n\r\n#enter {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  background-color: white;\r\n  flex-direction: row;\r\n  padding: 0%;\r\n  border-bottom: 1px solid grey;\r\n}\r\n\r\n.fa-refresh {\r\n  float: right;\r\n  color: grey;\r\n}\r\n\r\n.editBtn {\r\n  font-size: 25px;\r\n  padding: 10px;\r\n}\r\n\r\n.editBtn:hover {\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\n.input-controller {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  align-items: last baseline;\r\n  justify-content: space-around;\r\n}\r\n\r\n.input-controller textarea {\r\n  width: 90%;\r\n  background-color: white;\r\n  border: none;\r\n  padding-top: 5%;\r\n  outline: none;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 400;\r\n  color: black;\r\n  font-size: 20px;\r\n  resize: none;\r\n}\r\n\r\n.input-controller input {\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\nsection h1 {\r\n  border-bottom: 1px solid rgb(172, 172, 172);\r\n  margin: 0;\r\n  padding: 12px;\r\n}\r\n\r\n.in {\r\n  border: none;\r\n  background-color: inherit;\r\n}\r\n\r\n.fa-caret-left {\r\n  font-size: 20px;\r\n  padding: 10px;\r\n}\r\n\r\n.fa-caret-left:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(240, 239, 239);\r\n}\r\n\r\n.clean {\r\n  border-radius: 0;\r\n  border: none;\r\n  text-transform: capitalize;\r\n  padding: 2%;\r\n  font-size: 20px;\r\n  background-color: rgb(248, 248, 248);\r\n}\r\n\r\n.clean:hover {\r\n  background-color: rgb(185, 185, 185);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,kCAAkC;EAClC,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,2CAA2C;EAC3C,SAAS;EACT,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,0BAA0B;EAC1B,WAAW;EACX,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["body {\r\n  background-color: #fff;\r\n  min-height: 98vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#titled {\r\n  padding: 4% 2%;\r\n  text-transform: uppercase;\r\n}\r\n\r\nmain {\r\n  padding: 1% 30%;\r\n}\r\n\r\n.update-controller {\r\n  display: none;\r\n  flex-direction: row;\r\n}\r\n\r\n.update-controller button {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.update-controller button i {\r\n  font-size: 19px;\r\n  padding: 5px;\r\n  border-radius: 6px;\r\n}\r\n\r\n.update-controller button i:hover {\r\n  background-color: rgb(226, 225, 225);\r\n}\r\n\r\n.contact-Section {\r\n  display: flex;\r\n  box-shadow: 2px 2px 8px grey;\r\n  flex-direction: column;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.input-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-bottom: 1px solid grey;\r\n}\r\n\r\n.to-do-input {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.to-do-input input {\r\n  width: 90%;\r\n  padding: 2%;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 25px;\r\n}\r\n\r\n#enter {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  background-color: white;\r\n  flex-direction: row;\r\n  padding: 0%;\r\n  border-bottom: 1px solid grey;\r\n}\r\n\r\n.fa-refresh {\r\n  float: right;\r\n  color: grey;\r\n}\r\n\r\n.editBtn {\r\n  font-size: 25px;\r\n  padding: 10px;\r\n}\r\n\r\n.editBtn:hover {\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\n.input-controller {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  align-items: last baseline;\r\n  justify-content: space-around;\r\n}\r\n\r\n.input-controller textarea {\r\n  width: 90%;\r\n  background-color: white;\r\n  border: none;\r\n  padding-top: 5%;\r\n  outline: none;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 400;\r\n  color: black;\r\n  font-size: 20px;\r\n  resize: none;\r\n}\r\n\r\n.input-controller input {\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\nsection h1 {\r\n  border-bottom: 1px solid rgb(172, 172, 172);\r\n  margin: 0;\r\n  padding: 12px;\r\n}\r\n\r\n.in {\r\n  border: none;\r\n  background-color: inherit;\r\n}\r\n\r\n.fa-caret-left {\r\n  font-size: 20px;\r\n  padding: 10px;\r\n}\r\n\r\n.fa-caret-left:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(240, 239, 239);\r\n}\r\n\r\n.clean {\r\n  border-radius: 0;\r\n  border: none;\r\n  text-transform: capitalize;\r\n  padding: 2%;\r\n  font-size: 20px;\r\n  background-color: rgb(248, 248, 248);\r\n}\r\n\r\n.clean:hover {\r\n  background-color: rgb(185, 185, 185);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundlee8266a4f9918aa41122f.js.map