const createItem = (data) => {
  const div = document.createElement('div');
  div.classList.add('result__item');

  const title = document.createElement('h3');
  const link = document.createElement('a');
  link.href = data.html_url;
  link.target = '_blank';
  link.innerText = data.full_name;

  title.append(link);

  const description = document.createElement('p');
  description.innerText = data.description;

  div.append(title, description);

  return div;
};


export const renderResult = (elem, data) => {
  const allResults = data.map(createItem);
  elem.append(...allResults);
}
