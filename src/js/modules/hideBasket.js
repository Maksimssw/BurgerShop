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

export default hideBasket;