"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./modules/add.js":
/*!************************!*\
  !*** ./modules/add.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ADD_NEW_ITEM)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n\n\nconst ADD_NEW_ITEM = () => {\n  // Retrieving the To-do task input element\n  const INPUT_ADD_NEW_ITEM = document.getElementById('addDo');\n  const INPUT_VALUE = INPUT_ADD_NEW_ITEM.value.trim();\n\n  if (INPUT_VALUE) {\n    const UPDATED_LIST = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)();\n    const NEW_TODO = {\n      description: INPUT_VALUE,\n      completed: false,\n      index: UPDATED_LIST.length + 1,\n    };\n    UPDATED_LIST.push(NEW_TODO);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveToStorage)(UPDATED_LIST);\n  }\n  INPUT_ADD_NEW_ITEM.value = '';\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./modules/add.js?");

/***/ }),

/***/ "./modules/data.js":
/*!*************************!*\
  !*** ./modules/data.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n\n\nconst TODO_LIST_COLLECTION = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TODO_LIST_COLLECTION);\n\n\n//# sourceURL=webpack://to-do-list/./modules/data.js?");

/***/ }),

/***/ "./modules/display.js":
/*!****************************!*\
  !*** ./modules/display.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DISPLAY_TODO_LIST)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./modules/data.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.js */ \"./modules/remove.js\");\n/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ \"./modules/edit.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status.js */ \"./modules/status.js\");\n/* harmony import */ var _src_icons_remove_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/icons/remove.png */ \"./src/icons/remove.png\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n\n\n\n\n\n\n\nconst LIST_CONTAINER = document.querySelector('.list');\nconst DISPLAY_TODO_LIST = () => {\n  LIST_CONTAINER.innerHTML = '';\n  _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((todoItem) => {\n    const LIST_ITEM = document.createElement('li');\n    LIST_ITEM.classList.add('list-item');\n    const INPUT_CHECKBOX = document.createElement('input');\n    INPUT_CHECKBOX.type = 'checkbox';\n    INPUT_CHECKBOX.name = 'check';\n    INPUT_CHECKBOX.placeholder = 'check';\n    INPUT_CHECKBOX.id = todoItem.index;\n    INPUT_CHECKBOX.classList.add('checkbox');\n    const VIEW_ITEM = document.createElement('div');\n    VIEW_ITEM.classList.add('view_item');\n    const VIEW_LABEL = document.createElement('p');\n    VIEW_LABEL.classList.add('label');\n    VIEW_LABEL.textContent = todoItem.description;\n    const BUTTON_REMOVE = document.createElement('button');\n    BUTTON_REMOVE.type = 'submit';\n    BUTTON_REMOVE.id = todoItem.index;\n    BUTTON_REMOVE.classList.add('btn', 'btn-remove');\n    const REMOVE_ICON = document.createElement('img');\n    REMOVE_ICON.src = _src_icons_remove_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n    REMOVE_ICON.alt = 'Remove Icon';\n    REMOVE_ICON.classList.add('icon');\n\n    // Add double-click event to VIEW_LABEL\n    VIEW_LABEL.addEventListener('dblclick', (event) => {\n      event.stopPropagation();\n      VIEW_LABEL.contentEditable = 'true';\n      VIEW_LABEL.addEventListener('keydown', () => {\n        const data = VIEW_LABEL.textContent;\n        (0,_edit_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todoItem.index, data);\n      });\n    });\n\n    // Add click event to BUTTON_REMOVE\n    BUTTON_REMOVE.addEventListener('click', (event) => {\n      event.stopPropagation();\n      (0,_remove_js__WEBPACK_IMPORTED_MODULE_1__.removeItem)(todoItem.index);\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.saveToStorage)(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      DISPLAY_TODO_LIST();\n    });\n\n    // Add change event to INPUT_CHECKBOX\n    INPUT_CHECKBOX.addEventListener('change', () => {\n      if (INPUT_CHECKBOX.checked === true) {\n        VIEW_LABEL.classList.add('checked');\n        (0,_status_js__WEBPACK_IMPORTED_MODULE_3__.statusChecked)(todoItem.index, todoItem.completed);\n        VIEW_LABEL.addEventListener('dblclick', (event) => {\n          event.stopPropagation();\n          VIEW_LABEL.contentEditable = 'false';\n        });\n      } else {\n        VIEW_LABEL.classList.remove('checked');\n        (0,_status_js__WEBPACK_IMPORTED_MODULE_3__.statusUnchecked)(todoItem.index, todoItem.completed);\n      }\n    });\n\n    BUTTON_REMOVE.appendChild(REMOVE_ICON);\n    VIEW_ITEM.appendChild(VIEW_LABEL);\n    LIST_ITEM.appendChild(INPUT_CHECKBOX);\n    LIST_ITEM.appendChild(VIEW_ITEM);\n    LIST_ITEM.appendChild(BUTTON_REMOVE);\n    LIST_CONTAINER.appendChild(LIST_ITEM);\n  });\n};\n// Call the DISPLAY_TODO_LIST function to display the initial list\nDISPLAY_TODO_LIST();\n(0,_status_js__WEBPACK_IMPORTED_MODULE_3__.statusAfterReload)();\n\n\n\n//# sourceURL=webpack://to-do-list/./modules/display.js?");

/***/ }),

/***/ "./modules/edit.js":
/*!*************************!*\
  !*** ./modules/edit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EDIT_TODO_ITEM)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n\n\nconst EDIT_TODO_ITEM = (todoID, newDescription) => {\n  const UPDATED_LIST = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)();\n  UPDATED_LIST[todoID].description = newDescription;\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveToStorage)(UPDATED_LIST);\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./modules/edit.js?");

/***/ }),

/***/ "./modules/remove.js":
/*!***************************!*\
  !*** ./modules/remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeItem: () => (/* binding */ REMOVE_ONE_ITEM),\n/* harmony export */   removeItems: () => (/* binding */ REMOVE_ALL_COMPLETED_ITEMS)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./modules/data.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n\n\n\n// Function to remove one To-do task\nconst REMOVE_ONE_ITEM = (todoID) => {\n  const INDEX = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter(\n    (todoItem) => todoItem.index === todoID,\n  );\n  if (INDEX !== -1) {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(INDEX, 1);\n  }\n  // Refresh the To-do index order\n  let counter = 0;\n  _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((todoItem) => {\n    todoItem.index = counter + 1;\n    counter += 1;\n  });\n};\n\n// Function to remove all completed To-do tasks\nconst REMOVE_ALL_COMPLETED_ITEMS = () => {\n  const UPDATED_LIST = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getFromStorage)();\n  const FILTERED_TASKS = UPDATED_LIST.filter(\n    (todoItem) => todoItem.completed === false,\n  );\n\n  // Refresh the To-do index order\n  for (let i = 0; i < FILTERED_TASKS.length; i += 1) {\n    FILTERED_TASKS[i].index = i + 1;\n  }\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)(FILTERED_TASKS);\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./modules/remove.js?");

/***/ }),

/***/ "./modules/status.js":
/*!***************************!*\
  !*** ./modules/status.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   statusAfterReload: () => (/* binding */ STATUS_AFTER_RELOAD),\n/* harmony export */   statusChecked: () => (/* binding */ STATUS_CHECKED),\n/* harmony export */   statusUnchecked: () => (/* binding */ STATUS_UNCHECKED)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./modules/storage.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./modules/data.js\");\n\n\n\n// Function related to the checkbox status (checked: true)\nconst STATUS_CHECKED = (todoID, todoStatus) => {\n  const UPDATED_LIST = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)();\n  if (todoStatus === false) {\n    UPDATED_LIST[todoID - 1].completed = true;\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveToStorage)(UPDATED_LIST);\n  }\n};\n\n// Function related to the checkbox status (checked: false)\nconst STATUS_UNCHECKED = (todoID, todoStatus) => {\n  const UPDATED_LIST = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)();\n  if (todoStatus === true) {\n    UPDATED_LIST[todoID - 1].completed = false;\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveToStorage)(UPDATED_LIST);\n  }\n};\n\nconst STATUS_AFTER_RELOAD = () => {\n  const TODO_LABEL_ELEMENTS = document.querySelectorAll('.label');\n  const TODO_CHECKBOX_ELEMENTS = document.querySelectorAll('.checkbox');\n\n  for (let index = 0; index < _data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length; index += 1) {\n    for (let j = 0; j < TODO_CHECKBOX_ELEMENTS.length; j += 1) {\n      const element = TODO_CHECKBOX_ELEMENTS[j];\n      const todoItem = _data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][j];\n      if (todoItem.completed === true) {\n        element.checked = true;\n      } else {\n        element.checked = false;\n      }\n    }\n\n    for (let j = 0; j < TODO_LABEL_ELEMENTS.length; j += 1) {\n      const element = TODO_LABEL_ELEMENTS[j];\n      const todoItem = _data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][j];\n      if (todoItem.completed === true) {\n        element.classList.add('checked');\n      } else {\n        element.classList.remove('checked');\n      }\n    }\n  }\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./modules/status.js?");

/***/ }),

/***/ "./modules/storage.js":
/*!****************************!*\
  !*** ./modules/storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFromStorage: () => (/* binding */ GET_TODOS_FROM_STORAGE),\n/* harmony export */   saveToStorage: () => (/* binding */ SAVE_TODOS_TO_STORAGE)\n/* harmony export */ });\nconst storageKey = 'todos';\n\nconst GET_TODOS_FROM_STORAGE = () => {\n  const todos = JSON.parse(localStorage.getItem(storageKey));\n  return todos || [];\n};\n\nconst SAVE_TODOS_TO_STORAGE = (todos) => {\n  localStorage.setItem(storageKey, JSON.stringify(todos));\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./modules/storage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@400;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --main: #fff;\r\n  --sec: #eaeaea;\r\n  --third: #b9b9b9;\r\n  --fourth: #807f7f;\r\n}\r\n\r\nbody {\r\n  background-color: #f7f7f7;\r\n  font-family: \"Karla\", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nmain {\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.listCont {\r\n  background-color: var(--main);\r\n  min-width: 90%;\r\n  box-shadow:\r\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\r\n    0 10px 15px -3px rgba(0, 0, 0, 0.1);\r\n  border-radius: 5px;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.title {\r\n  font-size: 1.1rem;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid var(--sec);\r\n}\r\n\r\ni {\r\n  color: var(--third);\r\n}\r\n\r\ni:not(.enter) {\r\n  cursor: pointer;\r\n}\r\n\r\ni:not(.enter):hover {\r\n  color: var(--fourth);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 15px;\r\n  border-bottom: 1px solid var(--sec);\r\n  font-size: 14px;\r\n}\r\n\r\nli .checkList {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 14px;\r\n  font-style: italic;\r\n  outline: 0;\r\n}\r\n\r\n.checkList input {\r\n  margin-right: 10px;\r\n}\r\n\r\n#add {\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid var(--sec);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n#add i {\r\n  transform: rotate(90deg);\r\n  margin-right: 2px;\r\n}\r\n\r\n.btn-remove, .btn-more{\r\n  width: 25px;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n\r\n.remove-all {\r\n  border: none;\r\n  background: transparent;\r\n}\r\n\r\n.icon {\r\n  width: 100%;\r\n}\r\n\r\n.clearCont {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 15px;\r\n  background-color: var(--sec);\r\n}\r\n\r\n.clearCont .clrBtn {\r\n  outline: none;\r\n  border: none;\r\n  background: inherit;\r\n  line-height: 1.5rem;\r\n  font-size: inherit;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .listCont {\r\n    background-color: var(--main);\r\n    min-width: 50%;\r\n    box-shadow:\r\n      0 10px 15px -3px rgba(0, 0, 0, 0.1),\r\n      0 10px 15px -3px rgba(0, 0, 0, 0.1);\r\n    border-radius: 5px;\r\n    margin-top: 5rem;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/icons/remove.png":
/*!******************************!*\
  !*** ./src/icons/remove.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bd4df8529e77c646f5338222bc990836.png\");\n\n//# sourceURL=webpack://to-do-list/./src/icons/remove.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/add.js */ \"./modules/add.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/display.js */ \"./modules/display.js\");\n/* harmony import */ var _modules_remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/remove.js */ \"./modules/remove.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n\n\n\n\n\nconst FORM_ADD_NEW_ITEM = document.querySelector('.add-item');\nFORM_ADD_NEW_ITEM.addEventListener('submit', (event) => {\n  event.preventDefault();\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  document.location.reload();\n});\n\nconst REMOVE_ALL_BUTTON = document.querySelector('.remove-all');\nREMOVE_ALL_BUTTON.addEventListener('click', (event) => {\n  event.preventDefault();\n  (0,_modules_remove_js__WEBPACK_IMPORTED_MODULE_2__.removeItems)();\n  document.location.reload();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);