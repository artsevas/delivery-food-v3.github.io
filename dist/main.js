/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_partners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/partners */ \"./src/modules/partners.js\");\n\n\n\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_partners__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ1E7O0FBRTFDLHlEQUFJO0FBQ0osOERBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS1mb29kLXYzLmdpdGh1Yi5pby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gXCIuL21vZHVsZXMvYXV0aFwiO1xuaW1wb3J0IHBhcnRuZXJzIGZyb20gXCIuL21vZHVsZXMvcGFydG5lcnNcIjtcblxuYXV0aCgpXG5wYXJ0bmVycygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\n  const buttonAuth = document.querySelector(\".button-auth\");\n  const modalAuth = document.querySelector(\".modal-auth\");\n  const closeAuth = document.querySelector(\".close-auth\");\n  const buttonOut = document.querySelector(\".button-out\");\n  const userName = document.querySelector(\".user-name\");\n  const logInForm = document.getElementById(\"logInForm\");\n  const inputLogin = document.getElementById(\"login\");\n  const inputPassword = document.getElementById(\"password\");\n\n  const login = (user) => {\n    buttonAuth.style.display = \"none\";\n    buttonOut.style.display = \"flex\";\n    userName.style.display = \"flex\";\n\n    userName.textContent = user.login;\n    modalAuth.style.display = \"none\";\n  };\n\n  const logout = () => {\n    buttonAuth.style.display = \"flex\";\n    buttonOut.style.display = \"none\";\n    userName.style.display = \"none\";\n    userName.textContent = \"\";\n\n    localStorage.removeItem(\"user\");\n  };\n\n  buttonAuth.addEventListener(\"click\", () => {\n    modalAuth.style.display = \"flex\";\n  });\n\n  closeAuth.addEventListener(\"click\", () => {\n    modalAuth.style.display = \"none\";\n  });\n\n  buttonOut.addEventListener(\"click\", () => {\n    logout();\n  });\n\n  logInForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n\n    const user = {\n      login: inputLogin.value,\n      password: inputPassword.value,\n    };\n\n    localStorage.setItem(\"user\", JSON.stringify(user));\n    login(user);\n  });\n\n  if (localStorage.getItem(\"user\")) {\n    login(JSON.parse(localStorage.getItem(\"user\")));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS1mb29kLXYzLmdpdGh1Yi5pby8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xuICBjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYXV0aFwiKTtcbiAgY29uc3QgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1hdXRoXCIpO1xuICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWF1dGhcIik7XG4gIGNvbnN0IGJ1dHRvbk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW91dFwiKTtcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbmFtZVwiKTtcbiAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dJbkZvcm1cIik7XG4gIGNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xuICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcblxuICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW47XG4gICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICB9O1xuXG4gIGJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcblxuICBjbG9zZUF1dGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBidXR0b25PdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2dvdXQoKTtcbiAgfSk7XG5cbiAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICBsb2dpbjogaW5wdXRMb2dpbi52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlLFxuICAgIH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgIGxvZ2luKHVzZXIpO1xuICB9KTtcblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XG4gICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/partners.js":
/*!*********************************!*\
  !*** ./src/modules/partners.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardsRestaurants = document.querySelector(\".cards-restaurants\");\n\nconst partners = () => {\n  const renderItems = (data) => {\n    data.forEach((item) => {\n      const { image, kitchen, name, price, products, stars, time_of_delivery } =\n        item;\n      const a = document.createElement(\"a\");\n\n      a.setAttribute(\"href\", \"/restaurant.html\");\n      a.classList.add(\"card\");\n      a.classList.add(\"card-restaurant\");\n      a.dataset.products = products;\n\n      a.innerHTML = `\n        <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\n        <div class=\"card-text\">\n          <div class=\"card-heading\">\n            <h3 class=\"card-title\">${name}</h3>\n            <span class=\"card-tag tag\">${time_of_delivery} мин</span>\n          </div>\n          <div class=\"card-info\">\n            <div class=\"rating\">\n            ${stars}\n            </div>\n            <div class=\"price\">От ${price} ₽</div>\n            <div class=\"category\">${kitchen}</div>\n          </div>\n        </div>\n      `;\n      a.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        localStorage.setItem(\"restaurant\", JSON.stringify(item));\n        window.location.href = \"/restaurant.html\";\n      });\n      cardsRestaurants.append(a);\n    });\n  };\n\n  fetch(\"https://delivery-food-v3-default-rtdb.firebaseio.com/db/partners.json\")\n    .then((response) => response.json())\n    .then((data) => {\n      renderItems(data);\n    })\n    .catch((error) => {\n      console.log(error);\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (partners);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9wYXJ0bmVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpRUFBaUU7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixNQUFNLFNBQVMsS0FBSztBQUN4QztBQUNBO0FBQ0EscUNBQXFDLEtBQUs7QUFDMUMseUNBQXlDLGtCQUFrQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQyxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5LWZvb2QtdjMuZ2l0aHViLmlvLy4vc3JjL21vZHVsZXMvcGFydG5lcnMuanM/MDg1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJkc1Jlc3RhdXJhbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkcy1yZXN0YXVyYW50c1wiKTtcblxuY29uc3QgcGFydG5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckl0ZW1zID0gKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgaW1hZ2UsIGtpdGNoZW4sIG5hbWUsIHByaWNlLCBwcm9kdWN0cywgc3RhcnMsIHRpbWVfb2ZfZGVsaXZlcnkgfSA9XG4gICAgICAgIGl0ZW07XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi9yZXN0YXVyYW50Lmh0bWxcIik7XG4gICAgICBhLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgICAgYS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1yZXN0YXVyYW50XCIpO1xuICAgICAgYS5kYXRhc2V0LnByb2R1Y3RzID0gcHJvZHVjdHM7XG5cbiAgICAgIGEuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgYWx0PVwiJHtuYW1lfVwiIGNsYXNzPVwiY2FyZC1pbWFnZVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtuYW1lfTwvaDM+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtdGFnIHRhZ1wiPiR7dGltZV9vZl9kZWxpdmVyeX0g0LzQuNC9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmdcIj5cbiAgICAgICAgICAgICR7c3RhcnN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZVwiPtCe0YIgJHtwcmljZX0g4oK9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj4ke2tpdGNoZW59PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZXN0YXVyYW50XCIsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9yZXN0YXVyYW50Lmh0bWxcIjtcbiAgICAgIH0pO1xuICAgICAgY2FyZHNSZXN0YXVyYW50cy5hcHBlbmQoYSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZmV0Y2goXCJodHRwczovL2RlbGl2ZXJ5LWZvb2QtdjMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2RiL3BhcnRuZXJzLmpzb25cIilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmVuZGVySXRlbXMoZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXJ0bmVycztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/partners.js\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;