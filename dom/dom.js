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

    console.log(document.documentElement); //вывести весь html
    console.log(document.body.childNodes); //вывести всех потомков узла, text, div.wrapper, text, script где text - перенос строки (текстовая нода )
    console.log(document.body.firstChild); //вывести первого потомка
    console.log(document.body.lastChild); //вывести последнего потомка
    console.log(document.body.firstElementChild); //вывести первый элемент родителя
    console.log(document.body.lastElementChild); //вывести последнего элемент родителя
   

    console.log(document.querySelector('[data-number="1"]').nextElementSibling); //вывести следующий соседний элемент
    console.log(document.querySelector('[data-number="2"]').previousElementSibling);//вывести предыдущий  соседний элемент
    console.log(document.querySelector('[data-number="2"]').parentElement);//вывести родительский элемент

    
    //Чтобы получить все вложенные элементы нужно пройтись циклом for of, пропуская текстовые ноды (nodeName: "#text")
    for (let node of document.body.childNodes) {
        if (node.nodeName == '#text') {
            continue;
        }
        console.log(node);
    }
    

};