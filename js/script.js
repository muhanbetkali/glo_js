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
        titles = document.querySelectorAll('.goods__title');

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

            showConfirm();

            removeBtn.classList.add('goods__item-remove');
            removeBtn.innerHTML = '&times';
            item.appendChild(removeBtn);

            cartWrapper.appendChild(item);

            calcGoods();
            calcTotal();
            rmFromCart();

        });

    });
            //сокращаем описание товаров до 70 символов
            function sliceTitle() {
                titles.forEach(function (item) {
                    if(item.textContent.length < 70) {
                        return;
                    } else {
                        const str = item.textContent.slice(0 , 71) + '...';
                        item.textContent = str;
                    }
                });
            }

            sliceTitle();

            //анимация добавление товара на корзину
            function showConfirm() {
                confirm.style.display = 'block';
                let counter = 100;
                const id = setInterval(frame, 10);

                function frame() {
                    if (counter == 10) {
                        clearInterval(id);
                        confirm.style.display = 'none';
                    } else {
                        counter--;
                        confirm.style.opacity = '.' + counter;
                        confirm.style.transform = `translateY(-${counter}px)`;
                    }
                }
            }

            //считаем товары
            function calcGoods(i) {
                const items = cartWrapper.querySelectorAll('.goods__item');
                      empty = cartWrapper.querySelector('.empty');
                badge.textContent = items.length;
                if(items.length == 0) {
                    empty.style.display = 'block';
                } else {
                    empty.style.display = 'none';
                }
            }

            //считает цены всех товаров
            function calcTotal() {
                const prices = document.querySelectorAll('.cart__wrapper > .goods__item > .goods__price > span');
                let total = 0;
                prices.forEach(function (item) {
                   total += +item.textContent;
                });
                totalCost.textContent = total;
            }

            //функция удаление товара ранее созданный кнопкой
            function rmFromCart() {
                const  rmFromCart = cartWrapper.querySelectorAll('.goods__item-remove');
                rmFromCart.forEach(function (btn) {
                    btn.addEventListener('click', () => {
                        btn.parentElement.remove();
                        calcGoods();
                        calcTotal();
                    });
                });
            }


            /*P.S Eсли что-то неправильно напишите мне на почту
              mail: muhanbetkali@gmail.com
              */

        });



