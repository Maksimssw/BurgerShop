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

export default couting;