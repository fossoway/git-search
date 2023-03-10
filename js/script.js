import { searchRequest, resetResults } from "./form.js";


const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  const form = document.querySelector('.form');
  const input = document.querySelector('.form__input');
  searchRequest(form, app);
  resetResults(input, app);
}


window.searchResult = init;
