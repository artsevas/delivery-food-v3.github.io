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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\n\n\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTs7QUFFbEMseURBQUk7QUFDSiwwREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5LWZvb2QtdjMuZ2l0aHViLmlvLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xuXG5hdXRoKClcbm1lbnUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\n  const buttonAuth = document.querySelector(\".button-auth\");\n  const modalAuth = document.querySelector(\".modal-auth\");\n  const closeAuth = document.querySelector(\".close-auth\");\n  const buttonOut = document.querySelector(\".button-out\");\n  const userName = document.querySelector(\".user-name\");\n  const logInForm = document.getElementById(\"logInForm\");\n  const inputLogin = document.getElementById(\"login\");\n  const inputPassword = document.getElementById(\"password\");\n\n  const login = (user) => {\n    buttonAuth.style.display = \"none\";\n    buttonOut.style.display = \"flex\";\n    userName.style.display = \"flex\";\n\n    userName.textContent = user.login;\n    modalAuth.style.display = \"none\";\n  };\n\n  const logout = () => {\n    buttonAuth.style.display = \"flex\";\n    buttonOut.style.display = \"none\";\n    userName.style.display = \"none\";\n    userName.textContent = \"\";\n\n    localStorage.removeItem(\"user\");\n  };\n\n  buttonAuth.addEventListener(\"click\", () => {\n    modalAuth.style.display = \"flex\";\n  });\n\n  closeAuth.addEventListener(\"click\", () => {\n    modalAuth.style.display = \"none\";\n  });\n\n  buttonOut.addEventListener(\"click\", () => {\n    logout();\n  });\n\n  logInForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n\n    const user = {\n      login: inputLogin.value,\n      password: inputPassword.value,\n    };\n\n    localStorage.setItem(\"user\", JSON.stringify(user));\n    login(user);\n  });\n\n  if (localStorage.getItem(\"user\")) {\n    login(JSON.parse(localStorage.getItem(\"user\")));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS1mb29kLXYzLmdpdGh1Yi5pby8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xuICBjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tYXV0aFwiKTtcbiAgY29uc3QgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1hdXRoXCIpO1xuICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWF1dGhcIik7XG4gIGNvbnN0IGJ1dHRvbk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW91dFwiKTtcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbmFtZVwiKTtcbiAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dJbkZvcm1cIik7XG4gIGNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xuICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcblxuICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW47XG4gICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICB9O1xuXG4gIGJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcblxuICBjbG9zZUF1dGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICBidXR0b25PdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2dvdXQoKTtcbiAgfSk7XG5cbiAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICBsb2dpbjogaW5wdXRMb2dpbi52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlLFxuICAgIH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgIGxvZ2luKHVzZXIpO1xuICB9KTtcblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XG4gICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardsMenu = document.querySelector(\".cards-menu\");\nconst changeTitle = (restaurant) => {\n  const restaurantTitle = document.querySelector(\".restaurant-title\");\n  restaurantTitle.textContent = restaurant.name;\n  const restaurantPrice = document.querySelector(\".price\");\n  restaurantPrice.textContent = restaurant.price;\n  const restaurantRating = document.querySelector(\".rating\");\n  restaurantRating.textContent = restaurant.stars;\n  const restaurantCategory = document.querySelector(\".category\");\n  restaurantCategory.textContent = restaurant.kitchen;\n};\n\nconst menu = () => {\n  const renderItems = (data) => {\n    data.forEach(({ description, id, image, name, price }) => {\n      const card = document.createElement(\"div\");\n\n      card.classList.add(\"card\");\n\n      card.innerHTML = `\n        <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\n        <div class=\"card-text\">\n          <div class=\"card-heading\">\n            <h3 class=\"card-title card-title-reg\">${name}</h3>\n          </div>\n          <div class=\"card-info\">\n            <div class=\"ingredients\">\n              ${description}\n            </div>\n          </div>\n          <div class=\"card-buttons\">\n            <button class=\"button button-primary button-add-cart\">\n              <span class=\"button-card-text\">В корзину</span>\n              <span class=\"button-cart-svg\"></span>\n            </button>\n            <strong class=\"card-price-bold\">${price} ₽</strong>\n          </div>\n        </div>\n      `;\n\n      cardsMenu.append(card);\n    });\n  };\n\n  if (localStorage.getItem(\"restaurant\")) {\n    const restaurant = JSON.parse(localStorage.getItem(\"restaurant\"));\n    changeTitle(restaurant);\n    fetch(`./db/${restaurant.products}`)\n      .then((response) => response.json())\n      .then((data) => {\n        renderItems(data);\n      })\n      .catch((error) => {\n        console.log(error);\n      });\n  } else {\n    window.ondeviceorientation.href = \"/\";\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IscUNBQXFDO0FBQ3pEOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLE1BQU0sU0FBUyxLQUFLO0FBQ3hDO0FBQ0E7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5LWZvb2QtdjMuZ2l0aHViLmlvLy4vc3JjL21vZHVsZXMvbWVudS5qcz8yZmFkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcmRzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHMtbWVudVwiKTtcbmNvbnN0IGNoYW5nZVRpdGxlID0gKHJlc3RhdXJhbnQpID0+IHtcbiAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50LXRpdGxlXCIpO1xuICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSByZXN0YXVyYW50Lm5hbWU7XG4gIGNvbnN0IHJlc3RhdXJhbnRQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpY2VcIik7XG4gIHJlc3RhdXJhbnRQcmljZS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQucHJpY2U7XG4gIGNvbnN0IHJlc3RhdXJhbnRSYXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhdGluZ1wiKTtcbiAgcmVzdGF1cmFudFJhdGluZy50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQuc3RhcnM7XG4gIGNvbnN0IHJlc3RhdXJhbnRDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnlcIik7XG4gIHJlc3RhdXJhbnRDYXRlZ29yeS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQua2l0Y2hlbjtcbn07XG5cbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckl0ZW1zID0gKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKHsgZGVzY3JpcHRpb24sIGlkLCBpbWFnZSwgbmFtZSwgcHJpY2UgfSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICAgIGNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgYWx0PVwiJHtuYW1lfVwiIGNsYXNzPVwiY2FyZC1pbWFnZVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtcmVnXCI+JHtuYW1lfTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+XG4gICAgICAgICAgICAgICR7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1hZGQtY2FydFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbi1jYXJkLXRleHRcIj7QkiDQutC+0YDQt9C40L3Rgzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FydC1zdmdcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJjYXJkLXByaWNlLWJvbGRcIj4ke3ByaWNlfSDigr08L3N0cm9uZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuXG4gICAgICBjYXJkc01lbnUuYXBwZW5kKGNhcmQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlc3RhdXJhbnRcIikpIHtcbiAgICBjb25zdCByZXN0YXVyYW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlc3RhdXJhbnRcIikpO1xuICAgIGNoYW5nZVRpdGxlKHJlc3RhdXJhbnQpO1xuICAgIGZldGNoKGAuL2RiLyR7cmVzdGF1cmFudC5wcm9kdWN0c31gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZW5kZXJJdGVtcyhkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5vbmRldmljZW9yaWVudGF0aW9uLmhyZWYgPSBcIi9cIjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;