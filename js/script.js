'use strict';

const movieDB = {
    movies: [
        "Аватар",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Титаник",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const promoAdv = document.querySelectorAll(".promo__adv img");
promoAdv.forEach(imgs => imgs.remove());

const genre = document.querySelector(".promo__genre");
genre.textContent = "ДРАМА";

const bg = document.querySelector(".promo__bg");
bg.style.backgroundImage = "url(img/bg.jpg)";

const movieList = document.querySelector(".promo__interactive-list");
movieDB.movies.sort().forEach((movie, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">
            ${i + 1}. 
            ${movie}
            <div class="delete"></div>
        </li>
    `;
})