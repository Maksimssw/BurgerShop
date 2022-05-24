import createBurger from './modules/createBurger';
import counter from './modules/counter';
import cart from './modules/cart';
import hideBasket from './modules/hideBasket';

document.addEventListener('DOMContentLoaded', function(){
    createBurger();      
    hideBasket();
    counter();
    cart();
});