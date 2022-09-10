



const incrementBtnEl = document.querySelector("[data-action='increment']");
const decrementBtnEl = document.querySelector("[data-action='decrement']");
const valueEl = document.querySelector('#value');
const counterEl = document.querySelector('#counter');

let counterValue = 0;

const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};
incrementBtnEl.addEventListener('click', increment);
decrementBtnEl.addEventListener('click', decrement);