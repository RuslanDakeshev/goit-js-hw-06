

const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.target;
    
  

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    
    const userEmail = form.elements.email.value;
    const userPassword = form.elements.password.value;


    console.log({
        email: userEmail,
        password: userPassword
    });

  event.currentTarget.reset();
}
