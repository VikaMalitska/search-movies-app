import {showMovieInfo} from "./movieinfo";

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