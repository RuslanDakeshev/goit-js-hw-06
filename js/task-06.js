

const textInput = document.querySelector('#validation-input');
console.log(textInput);

const inputLength = textInput.getAttribute('data-length');
// const inputLength = textInput.dataset.length;
console.log(inputLength);

textInput.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
    if (event.target.value.length === +inputLength) { 
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
  } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
        
        
    }
}



// const textInput = document.querySelector('#validation-input');
// console.log(textInput);


// const inputLength = textInput.dataset.length;
// console.log(inputLength);

// const input = document.querySelector('input');
// textInput.addEventListener('blur', event => {
//   const text = event.target.value;

//   if (text.length === +inputLength) {
//     textInput.classList.add('valid');
//     textInput.classList.remove('invalid');
//   } else {
//     textInput.classList.remove('valid');
//     textInput.classList.add('invalid');
//   }
// });