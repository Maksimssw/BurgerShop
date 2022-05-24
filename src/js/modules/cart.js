import hideBasket from "./hideBasket";
import couting from "./couting";

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
            hideBasket();

            // Итоговый подсчёт 
            couting();

        }

    });
}

export default cart;