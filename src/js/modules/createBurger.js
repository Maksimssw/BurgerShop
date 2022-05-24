import getBurgers from '../server/server';

function createBurger(){

    // Получение элемента родителя
    const burgerWrapper = document.querySelector('.burgers__list');

    // Получение данных и отправка в createBurger
    getBurgers('../data.json')
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

export default createBurger;