var index =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([5,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/pages/about.js":
/*!*******************************!*\
  !*** ./src/js/pages/about.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  var aboutInfo = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".about-info\");\n  var elements = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".about-info__quote\");\n  aboutInfo.on('click', function (e) {\n    var currentButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target);\n    var currentSlide = currentButton.closest('.about-info__quote--visible');\n    var nextSlide = currentSlide.next();\n    var prevSlide = currentSlide.prev();\n\n    if (currentButton.is('#arrowRight')) {\n      if (nextSlide[0]) {\n        currentSlide.removeClass('about-info__quote--visible');\n        nextSlide.addClass('about-info__quote--visible');\n      } else {\n        currentSlide.removeClass('about-info__quote--visible');\n        elements[0].classList.add('about-info__quote--visible');\n      }\n    }\n\n    if (currentButton.is('#arrowLeft')) {\n      if (prevSlide[0]) {\n        currentSlide.removeClass('about-info__quote--visible');\n        prevSlide.addClass('about-info__quote--visible');\n      } else {\n        currentSlide.removeClass('about-info__quote--visible');\n        elements[elements.length - 1].classList.add('about-info__quote--visible');\n      }\n    }\n  });\n}));\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/pages/about.js?");

/***/ }),

/***/ "./src/js/pages/checkout.js":
/*!**********************************!*\
  !*** ./src/js/pages/checkout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log('sdf');\n/* harmony default export */ __webpack_exports__[\"default\"] = (jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.btn--order-form').hover(function (e) {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('checkout--hover');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('.price').children('.price__count').toggleClass('checkout--hover');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider').each(function () {\n    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n    var $group = $this.find('.slide_group');\n    var $slides = $this.find('.slide');\n    var bulletArray = [];\n    var currentIndex = 0;\n    var timeout;\n\n    function move(newIndex) {\n      var animateLeft, slideLeft;\n      advance();\n\n      if ($group.is(':animated') || currentIndex === newIndex) {\n        return;\n      }\n\n      bulletArray[currentIndex].removeClass('active');\n      bulletArray[newIndex].addClass('active');\n\n      if (newIndex > currentIndex) {\n        slideLeft = '100%';\n        animateLeft = '-100%';\n      } else {\n        slideLeft = '-100%';\n        animateLeft = '100%';\n      }\n\n      $slides.eq(newIndex).css({\n        display: 'flex',\n        left: slideLeft\n      });\n      $group.animate({\n        left: animateLeft\n      }, function () {\n        $slides.eq(currentIndex).css({\n          display: 'none'\n        });\n        $slides.eq(newIndex).css({\n          left: 0\n        });\n        $group.css({\n          left: 0\n        });\n        currentIndex = newIndex;\n      });\n    }\n\n    function advance() {\n      clearTimeout(timeout);\n      timeout = setTimeout(function () {\n        if (currentIndex < $slides.length - 1) {\n          move(currentIndex + 1);\n        } else {\n          move(0);\n        }\n      }, 4000);\n    }\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nextBtn').on('click', function () {\n      if (currentIndex < $slides.length - 1) {\n        move(currentIndex + 1);\n      } else {\n        move(0);\n      }\n    });\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#previousBtn').on('click', function () {\n      if (currentIndex !== 0) {\n        move(currentIndex - 1);\n      } else {\n        move(3);\n      }\n    });\n    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each($slides, function (index) {\n      var $button = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a class=\"slide_btn\"></a>');\n\n      if (index === currentIndex) {\n        $button.addClass('active');\n      }\n\n      $button.on('click', function () {\n        move(index);\n      }).appendTo('.slide_buttons');\n      bulletArray.push($button);\n    });\n    advance();\n  });\n}));\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/pages/checkout.js?");

/***/ }),

/***/ "./src/js/pages/feedback.js":
/*!**********************************!*\
  !*** ./src/js/pages/feedback.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/pages/feedback.js?");

/***/ }),

/***/ "./src/js/pages/header.js":
/*!********************************!*\
  !*** ./src/js/pages/header.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#hamburgerMenu\").on('click', function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('is-active');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav').toggleClass('nav--active');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').toggleClass('overflow-hidden');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nav').on('click', function (e) {\n    if (e.target.classList.contains('menu-item__link')) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-item__link--active').removeClass('menu-item__link--active');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).addClass('menu-item__link--active');\n      var currentId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('href');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html,body').stop().animate({\n        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(currentId).offset().top\n      }, 1000);\n      e.preventDefault();\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#hamburgerMenu\").removeClass('is-active');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav').removeClass('nav--active');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('overflow-hidden');\n    }\n  });\n}));\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/pages/header.js?");

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/js/pages/about.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/js/pages/header.js\");\n/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback */ \"./src/js/pages/feedback.js\");\n/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_feedback__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout */ \"./src/js/pages/checkout.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/pages/index.js?");

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./src/js/pages/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! G:\\code\\yoga\\src\\js\\pages\\index.js */\"./src/js/pages/index.js\");\n\n\n//# sourceURL=webpack://%5Bname%5D/multi_./src/js/pages/index.js?");

/***/ })

/******/ });