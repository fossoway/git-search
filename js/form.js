import { renderResult } from "./render.js";


export const searchRequest = (form, elem) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchRequest = Object.fromEntries(formData);
    console.log(searchRequest.request);
    let response = await fetch(`https://api.github.com/search/repositories?q=${searchRequest.request}`);
    const data = await response.json();
    form.reset();
    renderResult(elem, data.items.splice(0, 10));
  })

}
