const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ulEl = document.querySelector('#ingredients');
// console.log(ulEl);
// const elements = [];
// for (let i = 0; i < ingredients.length; i+=1) {
//   const element = ingredients[i];

//   // console.log(ingredients[i]);

//   const itemEl = document.createElement('li');
// // console.log(itemEl);
// itemEl.textContent = ingredients[i];
//   itemEl.classList.add('item');
//   elements.push(itemEl);
 
// }

// console.log(elements);







const ulEl = document.querySelector('#ingredients');


const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
 
ulEl.innerHTML = list;

console.log(ulEl);

