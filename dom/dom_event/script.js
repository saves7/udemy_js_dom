
const btns = document.querySelectorAll('button');
const parretnButton = document.querySelector('.parrent-button');


//если назначить элементу onclick, то мы можем не заметить что уже где то был назначен обработчик,
// а так же здесь не удалить обработчик;

btns[0].onclick = function() {
    alert('click 1');
};
btns[0].onclick = function() {
    alert('click 2');
};


//правильнее назначить addEventListener имеющий два аргумента действие и callback функция
//callback функция запускается строго после других, здесь сначала click затем функция
//addEventListener позволяет задать несколько событий на один элемент
//кроме click есть еще например mouseenter - наведение мыши.
btns[0].addEventListener('click', function(e){
    alert('Клик с помощью addEventListener');
});
//аналогичная запись через стрелочную функуию (e)=>{ }
//для того чтобы значть что произошло с элементом у него при наступлении события, событие фиксируется в нем в свойстве event
//event - является аргументом callback функции вызываемой addEventListener - объект что произошло с элементом, обычно записывается первым через e
btns[2].addEventListener('click', (e)=>{
    console.log('Клик с помощью addEventListener');
    console.log(e);
    console.log('Аргумент функции - свойство события');
}); 
//если вывести свойства объекта e, то можно увидеть главные из них: type - что произошло и target - на каком элементе произошло
//можно сразу вывести эти свойства например target

btns[2].addEventListener('click', (e)=>{
    console.log(e.target );
    console.log("Получили элемент на котором произошло событие с помощью e.targret");
});

//Получив элемент на котором произошло действие мы можем манипулировать им, например удалить

btns[2].addEventListener('click', (e)=>{
    e.target.remove();
});

//Удалять обработчик события с элемента можно с помощью removeEventListener, но должна быть та же функция


let i=0;
const clickElement = (e)=>{
    console.log('function clickElement work 2 count');
    i++;
    if (i==2){btns[3].removeEventListener('click', clickElement );}
};

btns[3].addEventListener('click', clickElement );


//Всплытие события, если родителю и вложенному элементу назначены событие,
//то сначала отображается воздействие на внутренний элемент (можно посмотреть через e.currentTargrt), а затем на родителя.

btns[4].addEventListener('click',(e)=>{
    console.log(e.currentTarget);
    console.log('Сначала отображается воздйсвие на потомка');
});

parretnButton.addEventListener('click',(e)=>{
    console.log(e.currentTarget);
    console.log('Потом отображается воздействие на родителя');
});

//Отмена стандартного поведения браузера, два способа через return folse,
//и более современный через объект события event (e): e.preventDefault();

const link = document.querySelector('a');
link.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target);
});

//addEventListener может третьим аргументом принимать опции, например {once:true} - один раз
btns[1].addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target);
}, {once:true});
