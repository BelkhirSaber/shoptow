/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/plugins.js":
/*!***************************!*\
  !*** ./src/js/plugins.js ***!
  \***************************/
/***/ (() => {

eval("\nconst sidebar = document.querySelector(\".sidebar\");\nconst icon = sidebar.querySelector(\"#expand-sidebar i\");\n\ndocument.querySelector(\"#open-sidebar\").addEventListener(\"click\", () => {\n  sidebar.classList.add(\"open\");\n});\n\ndocument.querySelector(\"#close-sidebar\").addEventListener(\"click\", () => {\n  sidebar.classList.remove(\"open\");\n});\n\ndocument.querySelector(\"#expand-sidebar\").addEventListener(\"click\", () => {\n  sidebar.classList.toggle(\"expand\");\n\n  if (sidebar.className.includes(\"expand\")) {\n    icon.classList.remove(\"bx-menu-alt-left\");\n    icon.classList.add(\"bx-menu-alt-right\");\n  } else {\n    icon.classList.remove(\"bx-menu-alt-right\");\n    icon.classList.add(\"bx-menu-alt-left\");\n  }\n});\n\n\n//# sourceURL=webpack://shoptow/./src/js/plugins.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/plugins.js"]();
/******/ 	
/******/ })()
;