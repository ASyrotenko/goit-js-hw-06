const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');

ingredients.forEach(element => {
  const listElement = document.createElement('li');
  listElement.textContent = element;
  list.append(listElement);
});
