const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navIngredientsEl = document.querySelector('#ingredients');

const functionMakeArrayByEl = ingredients =>
  ingredients.map(element => {
    const itemEl = document.createElement('li');

    itemEl.textContent = element;
    itemEl.classList.add('item');

    return itemEl;
  });

navIngredientsEl.append(...functionMakeArrayByEl(ingredients));