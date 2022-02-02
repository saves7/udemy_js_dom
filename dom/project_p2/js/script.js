/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const reclam = document.querySelectorAll('.promo__adv img'),
          movieList = document.querySelector('.promo__interactive-list'),
          headerBg = document.querySelector('.promo__bg'),
          genre = document.querySelector('.promo__genre'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

          addForm.addEventListener('submit', (e)=> {
            e.preventDefault();  // отменяем стандартное действие браузера (отправка формы на сервер и перезагрузка страницы);

            let newFilm = addInput.value;
            const favorite = checkbox.checked; 

            if (newFilm) {                  //проверка на пустой ввод в форму

                if (newFilm.length>20) {    // обрезка длинного названия
                    newFilm = `${newFilm.substring(0, 20)}...`;  
                }
            if (favorite) {
                console.log("Добавлен любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
            }

           // addForm.reset(); //очистить форму 
            //или универсальная очистка формы
            e.target.reset();


          });
    
    
        const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(reclam);

    const makeChange = () => {
        genre.textContent = 'драма';
        headerBg.style.backgroundImage = 'url(./img/bg.jpg)';
    };
    
    makeChange();  
    
    const sortArr = (arr) => {
        arr.sort();
    };

   

    

    function createMovieList (films, parent) {

        parent.innerHTML = "";
        sortArr(films);

        films.forEach((item,i)=>{
            parent.innerHTML+=`
            <li class="promo__interactive-item">
                ${i+1} ${item}
               <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((btnDel,i)=>{    //находим элементы корзина
               //btnDel.parentElement.remove();     
                     btnDel.addEventListener('click', ()=>{              // удаляем у элемента корзина родителя при клике
                     btnDel.parentElement.remove();
                     movieDB.movies.splice(i,1);                         //удаляем из базы данных, i элемент  
                     console.log('Клик');
                     console.log(movieDB.movies);

                     createMovieList(movieDB.movies, movieList);       //перестраиваем лист фильмов с учетом удаления
               });

               

        });

      //  createMovieList(films,parent);
                                                             

    }

    createMovieList(movieDB.movies, movieList);


});

