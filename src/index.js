import "./styles.css";
import { getTrendingMoviesFetch } from "./api";
import { createListMovie } from "./components/listmovie";
import { createSearchMovieForm } from "./components/searchform";

let appConteiner = document.getElementById("app");
const addListMovie = function(f) {
    const list = createListMovie(f);
    appConteiner.append(list);
};
const getTrendingMovies = function() {
    getTrendingMoviesFetch().then(result => {
        addListMovie(result);
    });
};

createSearchMovieForm(addListMovie);
getTrendingMovies();


