import { renderResult } from "./render.js";


export const searchRequest = (form, elem) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const preloader = document.querySelector('.preloader');
    preloader.classList.remove('hidden');
    const formData = new FormData(e.target);
    const searchRequest = Object.fromEntries(formData);
    let response = await fetch(`https://api.github.com/search/repositories?q=${searchRequest.request}`);
    const data = await response.json();
    preloader.classList.add('hidden');
    form.reset();
    renderResult(elem, data.items.splice(0, 10));
  })
}


export const resetResults = (input, app) => {
  input.addEventListener('focus', e => {
    app.innerText = '';
  })
}
