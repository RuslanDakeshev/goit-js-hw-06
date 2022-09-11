function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
console.log(button);
button.addEventListener("click", onColor)
const nameColor = document.querySelector('.color')


function onColor(event) {
  document.body.style.backgroundColor=getRandomHexColor()
  nameColor.textContent = getRandomHexColor()
}


