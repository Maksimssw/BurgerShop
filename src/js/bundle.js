/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/cart.js":
/*!********************************!*\
  !*** ./src/js/modules/cart.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hideBasket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideBasket */ "./src/js/modules/hideBasket.js");
/* harmony import */ var _couting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./couting */ "./src/js/modules/couting.js");



function cart(){
    window.addEventListener('click', function(e){

        // Проверяем нажатие на кнопку
        if(e.target.hasAttribute('data-cart')){

            // Получение элемента родителя
            const cartWrapper = document.querySelector('.basket__list');

            // Получаем элемент
            const cart = e.target.closest('.burgers__item');

            // Все данные записываем в объект
            const cartInfo = {
                id: cart.getAttribute('data-burger'),
                img: cart.querySelector('.burgers__photo img').getAttribute('src'),
                title: cart.querySelector('.burgers__name').innerText,
                current: cart.querySelector('[data-current]').innerText,
                gram: cart.querySelector('.burgers__gram').innerText,
                pieces: cart.querySelector('.burgers__pieces').innerText,
                price: cart.querySelector('.burgers__price').innerText
            }

            const cartItem = cartWrapper.querySelector(`[data-basket="${cartInfo.id}"]`);

            // Проверяем есть ли карточка или нет
            if(cartItem){

            // Если есть то добовляем current к CardInfo
            const current = cartItem.querySelector('[data-current]');
            current.innerText = +current.innerText + +cartInfo.current;
            } else{
            
            // Если нету то создаем новую карточку
            const cardHTML = `
                <li class="basket__item" data-basket=${cartInfo.id}>
                <div class="basket__photo">
                    <img src=${cartInfo.img} alt=${cartInfo.title}>
                </div>
                <div class="basket__description">
                    <h2 class="basket__name">${cartInfo.title}</h2>
                    <span class="basket__pieces">${cartInfo.pieces}/</span>
                    <span class="basket__gram">${cartInfo.gram}</span>
                    <div class="basket__specification">
                        <div class="burgers__quantity">
                            <div class="burgers__minus btn__current" data-action="minus"></div>
                            <p data-current class="burgers__current">${cartInfo.current}</p>
                            <div class="burgers__plus btn__current" data-action="plus"></div>
                        </div>
                        <p class="basket__price">${cartInfo.price}</p>
                    </div>
                </div>
            </li>`;
            
            cartWrapper.insertAdjacentHTML('beforeend', cardHTML);
            }

            // Сбрасываем счетчик 
            cart.querySelector('[data-current]').innerText = '1';

            // Скрыть "Корзина пуста"
            (0,_hideBasket__WEBPACK_IMPORTED_MODULE_0__["default"])();

            // Итоговый подсчёт 
            (0,_couting__WEBPACK_IMPORTED_MODULE_1__["default"])();

        }

    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);

/***/ }),

/***/ "./src/js/modules/counter.js":
/*!***********************************!*\
  !*** ./src/js/modules/counter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeCart */ "./src/js/modules/removeCart.js");
/* harmony import */ var _hideBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideBasket */ "./src/js/modules/hideBasket.js");
/* harmony import */ var _couting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./couting */ "./src/js/modules/couting.js");




function counter(){
    window.addEventListener('click', function(e){

        let current;

        if(e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus'){

            // Получение родителя 
            const counterWrapper = e.target.closest('.burgers__quantity');

            // Пойск значения
            current = counterWrapper.querySelector('[data-current]');
        }

        if(e.target.dataset.action === 'plus'){

            // Увеличить значение на ед.
            current.innerText = ++current.innerText;

            // Итоговый подсчёт 
            (0,_couting__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }

        if(e.target.dataset.action === 'minus'){
            // Проверка числа
            if(+current.innerText > 1){

                // Уменьшить значение на ед.
                current.innerText = --current.innerText;

                 // Итоговый подсчёт 
                 (0,_couting__WEBPACK_IMPORTED_MODULE_2__["default"])();
            } else{
                // Удалить корзину
                (0,_removeCart__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target);

                // Скрыть "Корзина пуста"
                (0,_hideBasket__WEBPACK_IMPORTED_MODULE_1__["default"])();
            }
        }

    });
}   

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);

/***/ }),

/***/ "./src/js/modules/couting.js":
/*!***********************************!*\
  !*** ./src/js/modules/couting.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function couting(){

    // Получение всех карточек
    const carts = document.querySelectorAll('.basket__item'),
          result = document.querySelector('.basket__result__price');

    let price = 0;
    console.log(1);

    // Перебор каждой карточки
    carts.forEach(cart => {
        const current = cart.querySelector('[data-current]').innerText,
              basketPrice = cart.querySelector('.basket__price').innerText;


        price = parseInt(current) * parseInt(basketPrice) + price;
    });

    result.innerText = price + '₽';

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (couting);

/***/ }),

/***/ "./src/js/modules/createBurger.js":
/*!****************************************!*\
  !*** ./src/js/modules/createBurger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server/server */ "./src/js/server/server.js");


function createBurger(){

    // Получение элемента родителя
    const burgerWrapper = document.querySelector('.burgers__list');

    // Получение данных и отправка в createBurger
    (0,_server_server__WEBPACK_IMPORTED_MODULE_0__["default"])('../../data.json')
        .then(data => createBurger(data))
        .catch(() => console.log('error'));

    function createBurger(data){
        const wrapper = data.burgers.map(({img, name, pieces, gram, price, id}) => {

            // Создание блока
            const li = document.createElement('li');

            // Добовление классов
            li.classList.add('burgers__item', 'wow', 'animate__animated', 'animate__fadeInUp');

            // Создание атрибута
            li.setAttribute('data-burger', id);

            // Заполнение контента
            li.innerHTML = `
            <div class="burgers__photo">
                <img src=${img} alt="burger">
            </div>
            <h3 class="burgers__name">${name}</h3>
            <span class="burgers__pieces">${pieces} шт.</span>
            <div class="burgers__description">
                <div class="burgers__quantity">
                    <div class="burgers__minus btn__current" data-action="minus"></div>
                    <p data-current class="burgers__current">1</p>
                    <div class="burgers__plus btn__current" data-action="plus"></div>
                </div>
                <div class="burgers__specification">
                    <p class="burgers__gram">${gram}г.</p>
                    <p class="burgers__price">${price}₽</p>
                </div>
            </div>
            <button data-cart class="burgers__add">
                Добавить в корзину
            </button>
            `;

            burgerWrapper.appendChild(li);
        });
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBurger);

/***/ }),

/***/ "./src/js/modules/hideBasket.js":
/*!**************************************!*\
  !*** ./src/js/modules/hideBasket.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hideBasket(){
    const cartWrapper = document.querySelectorAll('.basket__item'),
          basketEmpty = document.querySelector('.basket__empty'),
          basketForm = document.querySelector('.basket form'),
          result = document.querySelector('.basket__result__price');

    if(cartWrapper.length === 0){
        basketEmpty.style.display = 'block';
        basketForm.style.display = 'none';
        result.innerText = '0₽';
    } else {
        basketEmpty.style.display = 'none';
        basketForm.style.display = 'block';
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hideBasket);

/***/ }),

/***/ "./src/js/modules/removeCart.js":
/*!**************************************!*\
  !*** ./src/js/modules/removeCart.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeCart(tar){
    const cart = tar.closest('.basket__item');
    if(cart)cart.remove(); 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeCart);

/***/ }),

/***/ "./src/js/server/server.js":
/*!*********************************!*\
  !*** ./src/js/server/server.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function getBurgers(url){

    let res = await fetch(url);

    if(!res.ok){
        throw new Error(`url: ${url}, status: ${res.status}`);
    }

    return await res.json();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBurgers);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_createBurger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createBurger */ "./src/js/modules/createBurger.js");
/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/counter */ "./src/js/modules/counter.js");
/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cart */ "./src/js/modules/cart.js");
/* harmony import */ var _modules_hideBasket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hideBasket */ "./src/js/modules/hideBasket.js");





document.addEventListener('DOMContentLoaded', function(){
    (0,_modules_createBurger__WEBPACK_IMPORTED_MODULE_0__["default"])();      
    (0,_modules_hideBasket__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_counter__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_cart__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map