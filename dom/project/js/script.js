/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const reclam = document.querySelector('.promo__adv'),
      movieList = document.querySelector('.promo__interactive-list'),
      headerBg = document.querySelector('.promo__bg'),
      genre = document.querySelector('.promo__genre');


reclam.remove();
genre.textContent = 'драма';
headerBg.style.backgroundImage = 'url(./img/bg.jpg)';

movieDB.movies.sort();

movieList.innerHTML = "";

movieDB.movies.forEach((item,i)=>{
    movieList.innerHTML+=`
    <li class="promo__interactive-item">
        ${i+1} ${item}
       <div class="delete"></div>
    </li>`;
});