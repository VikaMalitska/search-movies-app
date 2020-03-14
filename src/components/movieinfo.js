import {getMovieRecommendationsFetch} from "../api";
import {createListMovie} from "./listmovie";

// function getMovieRecommendations (id) {
//     getMovieRecommendationsFetch (id).then(response => {return response.json()})
//         .then(result => {});
// }

// const createMovieRecommendationEl = (listRecomMovies) => {
//     let conteinerRecommendMovies = createListMovie(listRecomMovies);
//     console.log(conteinerRecommendMovies);
//     return conteinerRecommendMovies;
// }
export const createMovieInfoEl = function (el) {
    let recommendMovies = document.createElement("div");

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