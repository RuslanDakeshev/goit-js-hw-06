
//  const categoriesEl = document.querySelector("ul#categories");
//  const countOfChildren = categoriesEl.children.length;
// console.log(`Number of categories: ${countOfChildren}`);
 

const listEl = document.querySelectorAll('li.item');

 console.log(`Number of categories: ${listEl.length}`);

 const ulEl = document.querySelectorAll('#categories>li');
 ulEl.forEach(el => {

   console.log(
     `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`,
   );
 });