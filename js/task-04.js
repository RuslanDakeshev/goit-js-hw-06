



const incrementBtnEl = document.querySelector("[data-action='increment']");
const decrementBtnEl = document.querySelector("[data-action='decrement']");
const valueEl = document.querySelector('#value');
const counterEl = document.querySelector('#counter');

let counterValue = 0;

const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;

  valueEl.textContent = counterValue;

  console.log('counterValue', counterValue);
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;

  valueEl.textContent = counterValue;

 console.log('counterValue', counterValue);
};
incrementBtnEl.addEventListener('click', increment);
decrementBtnEl.addEventListener('click', decrement);





