import removeCart from './removeCart';
import hideBasket from './hideBasket';
import couting from './couting';

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
            couting();
        }

        if(e.target.dataset.action === 'minus'){
            // Проверка числа
            if(+current.innerText > 1){

                // Уменьшить значение на ед.
                current.innerText = --current.innerText;

                 // Итоговый подсчёт 
                 couting();
            } else{
                // Удалить корзину
                removeCart(e.target);

                // Скрыть "Корзина пуста"
                hideBasket();
            }
        }

    });
}   

export default counter;