import { getMovieQueryFetch } from "../api";
import { createListMovie } from "./listmovie";

const addListMovieBySearch = function(f) {
    const list = createListMovie(f);
    let listPrevios = document.querySelector("#app > .conteiner-list");
    if (!listPrevios) {
        listPrevios = document.querySelector("#app > .conteiner-movie");
    }
    console.log(listPrevios);
    listPrevios.replaceWith(list);
};
const getMoviesByQuery = function(query) {
    getMovieQueryFetch(query).then(result => {
        addListMovieBySearch(result);
    });
};
export const createSearchMovieForm = function() {
    const appConteiner = document.getElementById("app");
    let form = document.createElement("form");
    form.name = "containerForm";
    let inputForm = document.createElement("input");
    inputForm.name = "userInput";
    inputForm.required;
    let buttonForm = document.createElement("input");
    buttonForm.type = "submit";

    form.addEventListener("submit", event => {
        let userInput =
            document.forms["containerForm"].elements.userInput.value;
        console.log(userInput);
        if (userInput) {
            event.preventDefault();
            getMoviesByQuery(userInput);
            document.forms[0].userInput.value = "";
        }
    });
    form.append(inputForm, buttonForm);
    appConteiner.prepend(form);
};
