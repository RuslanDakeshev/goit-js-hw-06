
const textInput = document.querySelector('#name-input');
console.log(textInput);

const textOutput = document.querySelector('#name-output');
console.log(textOutput);

textInput.addEventListener('input', onTextInput);



function onTextInput(event) {
    if (textOutput.textContent = event.target.value) {
        console.log(event.target.value);
    }
    else if (event.target.value === '') {
       textOutput.textContent='Anonymous' 
    }
}


