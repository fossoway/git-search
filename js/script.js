import { searchRequest, resetResults } from "./form.js";


const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  const form = document.querySelector('.form');
  const input = document.querySelector('.form__input');
  const preloader = document.querySelector('.preloader');
  searchRequest(form, app, preloader);
  resetResults(input, app);
}


window.searchResult = init;
