import "./styles.css";
import {getTrendingMoviesFetch} from "./api";
import {createListMovie} from "./components/listmovie";
import {createSearchMovieForm} from "./components/searchform";

let appConteiner = document.getElementById("app");
const addListMovie = function (f) {
  const list = createListMovie(f);
  appConteiner.append(list);
}
const getTrendingMovies = function () {
  getTrendingMoviesFetch().then(result => {addListMovie(result)});
}

createSearchMovieForm(addListMovie);
getTrendingMovies();


// .innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;


