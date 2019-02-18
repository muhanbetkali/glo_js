//использовали это для быстрого загрузки скриптов.так,ведь?!
window.addEventListener('DOMContentLoaded', () => {

    //выбирая селекторов, объявляем констант
    const cartWrapper = document.querySelector('.cart__wrapper'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.cart__close'),
        open = document.querySelector('#cart'),
        goodsBtn = document.querySelectorAll('.goods__btn'),
        products = document.querySelectorAll('.goods__item'),
        confirm = document.querySelector('.confirm'),
        badge = document.querySelector('.nav__badge'),
        totalCost = document.querySelector('.cart__total > span'),
        titles = document.querySelector('.goods__title');

    // создаем функцию для открытия корзины
    function openCart() {
        cart.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    //это для закрытия корзину :)
    function closeCart() {
        cart.style.display = 'none';
        document.body.style.overflow = '';
    }

    //чтобы работало функций, назначаем обработчики событий
    open.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

    //создаем массив кнопки "Добавить в корзину" для всех товаров
    goodsBtn.forEach(function (btn, i) {
        btn.addEventListener('click', () => {
            let item = products[i].cloneNode(true),
                trigger = item.querySelector('button'),
                removeBtn = document.createElement('div'),
                empty = cartWrapper.querySelector('.empty');

            trigger.remove();

            removeBtn.classList.add('goods__item-remove');
            removeBtn.innerHTML = '&times';
            item.appendChild(removeBtn);
            cartWrapper.appendChild(item);

            if (empty) {
                empty.remove();
            }

            //removeBtn.addEventListener('click',); хотел удалить товары внутри корзины

        });
    })
            /*P.S Eсли что-то неправильно напишите мне на почту
              mail: muhanbetkali@gmail.com
              */
})
