//alert('Скрипт работает');

window.onload = function() {
    const circleItems = document.querySelectorAll('.circle__item');

    circleItems.forEach(function(item,i,circleItems){
        if (i%2==0) {
            item.style.background = 'blue';
        }
    });

    //circleItems[0].style.background = 'blue';

};