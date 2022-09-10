

const fontSizeInput = document.querySelector('#font-size-control');
console.log(fontSizeInput);

const textInput = document.querySelector('#text');
console.log(textInput);

fontSizeInput.addEventListener('input', onChange);


function onChange(event) {
    textInput.style.fontSize = event.target.value + "px";
}

