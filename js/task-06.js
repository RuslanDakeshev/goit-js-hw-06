

const textInput = document.querySelector('#validation-input');
console.log(textInput);

const inputLength = textInput.getAttribute('data-length');
console.log(inputLength);

textInput.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
    if (inputLength > event.target.value.length) { 
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');

        
    }
    else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
        
        
    }
}