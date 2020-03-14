import {createMovieInfoEl} from "./movieinfo";

const showMovieInfo = function (el) {
    console.log(el);

    let conteinerMovie = createMovieInfoEl(el);
    // let conteinerMovie = document.createElement("div");
    // conteinerMovie.className = "conteiner-movie";

    // let poster = document.createElement("img");
    // poster.src = `https://image.tmdb.org/t/p/w500/${el.poster_path}`;
    // poster.alt = "Poster movie";

    // let resumeMovie = document.createElement("div");
    // let textResumeMovie = document.createTextNode(`${el.overview}`);
    // resumeMovie.append(textResumeMovie);

    // let nameMovie = document.createElement("h1");
    // let textNameMovie = document.createTextNode(`${el.title || el.name}`);
    // nameMovie.append(textNameMovie);
    // let appConteiner = document.getElementById("app");
    let ullist = document.getElementsByClassName("conteiner-list");
    // conteinerMovie.append(poster, nameMovie, resumeMovie);
    ullist[0].replaceWith(conteinerMovie);
    
}



export function createListMovie (f) {
    let ul = document.createElement("ul");
    ul.className = "conteiner-list";
    f.forEach(el => {
      let movieTitle = el.title || el.name;
      let li = document.createElement("li");
      li.addEventListener("click", ()=> {return showMovieInfo(el)})  
      let text = document.createTextNode(`${movieTitle}`);
      li.append(text);
      ul.append(li);
    });
    return ul;
  }