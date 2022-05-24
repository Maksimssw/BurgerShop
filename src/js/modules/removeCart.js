function removeCart(tar){
    const cart = tar.closest('.basket__item');
    if(cart)cart.remove(); 
}

export default removeCart;