window.onload = function(){

    const rectItems = document.querySelectorAll('.rect__item');
    const circleItems = document.querySelectorAll('.circle__item');
    const buttons = document.querySelectorAll('.button__item');
    const boxH3 = document.querySelectorAll('h3');


    //Вставка с помощью append() prepend() after() before() replaceWith()
    
    const divJs = document.createElement('div');
    divJs.innerHTML = '<h3>Созданно с помощью crceateElement и innerHTML</h3>';
    boxH3[0].append(divJs); //внутри элемента, в конце него
    boxH3[0].prepend(divJs);//внутри элемента, в начале него
    boxH3[0].before(divJs);//внутри элемента, в начале него

    circleItems[1].prepend(rectItems[0]);
    circleItems[1].append(rectItems[0]);
    circleItems[3].before(rectItems[2]);
    circleItems[5].after(rectItems[5]);
    circleItems[3].replaceWith(rectItems[2]);
    
    //Вставка с помощью insertAdjacentHTML afterbegin/afterend/beforebegin/

    buttons[1].insertAdjacentHTML('afterbegin', '<h3>afterbegin</h3>');


};