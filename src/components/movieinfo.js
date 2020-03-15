import {getMovieRecommendationsFetch} from "../api";
import {createListMovie} from "./listmovie";

export const showMovieInfo = function (el) {
    console.log(el);

    let conteinerMovie = createMovieInfoEl(el);
    
    let listRecomendations = document.querySelector(".conteiner-movie > .conteiner-recomendation");
    if(!listRecomendations) {
      listRecomendations = document.querySelector("#app > .conteiner-list");
    }
    listRecomendations.replaceWith(conteinerMovie);
}

export const createMovieInfoEl = function (el) {
    let recommendMovies = document.createElement("div");
    recommendMovies.className = "conteiner-recomendation";
    let titleRecom = document.createElement("h2");
    let texttitleRecom = document.createTextNode("Recommendations");
    titleRecom.append(texttitleRecom);
    recommendMovies.append(titleRecom);
    
    function getMovieRecommendations (id, elRecomend) {
        getMovieRecommendationsFetch (id).then(response => {return response.json()})
            .then(result => {elRecomend.append(createListMovie(result.results))});
    }

    let conteinerMovieInfo = document.createElement("div");
    conteinerMovieInfo.className = "conteiner-movie";

    let poster = document.createElement("img");
    poster.src = `https://image.tmdb.org/t/p/w500/${el.poster_path}`;
    poster.alt = "Poster movie";

    let resumeMovie = document.createElement("div");
    let textResumeMovie = document.createTextNode(`${el.overview}`);
    resumeMovie.append(textResumeMovie);

    let nameMovie = document.createElement("h1");
    let textNameMovie = document.createTextNode(`${el.title || el.name}`);
    nameMovie.append(textNameMovie);
    
    getMovieRecommendations(el.id, recommendMovies);
    
    conteinerMovieInfo.append(poster, nameMovie, resumeMovie, recommendMovies);

    return conteinerMovieInfo;
}