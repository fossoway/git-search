import { searchRequest } from "./form.js";


const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  const form = document.querySelector('.form');
  searchRequest(form, app);

}


window.searchResult = init;
