const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients');
// console.log(ulEl);

const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const element = ingredients[i];
  // console.log(ingredients[i])


  const itemEl = document.createElement('li');
  itemEl.textContent = ingredients[i]
  // console.log(itemEl);

  ulEl.append(itemEl)
}

console.log(ulEl);
