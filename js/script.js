'use strict';

document.addEventListener("DOMContentLoaded", () => { 
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
    
    const moviesList = document.querySelector(".promo__interactive-list"); 
    const promoAdv = document.querySelectorAll(".promo__adv img");
    const bg = document.querySelector(".promo__bg");
    const genre = document.querySelector(".promo__genre");
    const addForm = document.querySelector("form.add");
    const addInput = document.querySelector(".adding__input");
    const addCheckbox = document.querySelector("[type='checkbox']");
    
    promoAdv.forEach(imgs => imgs.remove());
    bg.style.backgroundImage = "url(img/bg.jpg)";
    genre.textContent = "ДРАМА";
    
    
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let newFilm = addInput.value.trim();
        const isMovieFavorite = addCheckbox.checked;
        if(newFilm !== "") {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            e.target.reset();
            createMoviesList(movieDB.movies, moviesList);
        }
        if(isMovieFavorite) console.log(`${newFilm} - любимый фильм!`);
        
    });
    
    function createMoviesList(moviesArr, parent) {
        parent.innerHTML = "";
        moviesArr.sort().forEach((movie, i) => {
        parent.innerHTML += `
                <li class="promo__interactive-item">
                    ${i + 1}. 
                    ${movie}
                    <div class="delete"></div>
                </li>
            `;
        });
        
        document.querySelectorAll(".delete").forEach((button, i) => {
            button.addEventListener("click", (e) => {
                e.target.parentElement.remove();
                moviesArr.splice(i, 1);
                createMoviesList(moviesArr, parent);
            })
        })
    }
    
    createMoviesList(movieDB.movies, moviesList);
});


