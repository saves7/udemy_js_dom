//alert('Скрипт работает');

window.onload = function() {
    const circleItems = document.querySelectorAll('.circle__item');
    const rectItems = document.querySelectorAll('.rect__item');
    const buttons = document.querySelectorAll('.button__item');
    const wrapper = document.querySelector('.wrapper');
/*     const circleItems2 = document.getElementsByClassName('circle__item');
    const circleItems3 = document.getElementsById('circle__item');
    const circleItems4 = document.getElementsByTagName('div'); */

    
    //переборка пвсевдо массива html эллементов
   /*  circleItems.forEach(function(item,i,circleItems){
        if (i%2==0) {
            item.style.background = 'blue';
        }
    });
 */
    //circleItems[0].style.background = 'blue';

    console.dir(circleItems[0]); //получаем список свойств и методов какие имеет html элемент, найти style и посмотреть

    circleItems[0].style.backgroundColor = 'green';
    rectItems[0].style.width = '200px';
    buttons[0].style.width = '100px';
    buttons[0].style.borderRadius = '30px';
    rectItems[1].style.cssText = 'width: 250px; height: 100px; background-color: green';

    //создание элемента
    const divJs = document.createElement('div'); // в скобках название тэга
    divJs.classList.add('black');
    
// document.querySelector('.wrapper').append(divJs); //получаем эллемент и добавляем в конец
     //document.body.append(divJs); //добавляем элемент в конец body
    //wrapper.append(divJs); //эллемент добавляем в конец
    wrapper.prepend(divJs); // элемент и добавляем в начало
    rectItems[1].before(divJs);
    rectItems[3].after(divJs);
    rectItems[4].remove();
    rectItems[2].replaceWith(circleItems[2]);
    divJs.innerHTML = '<h3>Hello world</h3>';
   // divJs.textContent = 'Hello world';
   divJs.insertAdjacentHTML('beforebegin', '<h3> вставленно с помощью insertAdjacentHTML</h3>'); //перед элементом
   divJs.insertAdjacentHTML('beforeend', '<h3> вставленно с помощью insertAdjacentHTML</h3>'); //в конец элемента - вставить перед концом
   divJs.insertAdjacentHTML('afterbegin', '<h3> вставленно с помощью insertAdjacentHTML</h3>'); //в начало элемента
   divJs.insertAdjacentHTML('afterend', '<h3> вставленно с помощью insertAdjacentHTML</h3>'); // после элемента 
  
    

   
   
    

}; 