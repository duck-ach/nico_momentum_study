const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    console.log(username);
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem("username",username);
    //localStorage.getItem("username")
}


loginForm.addEventListener("submit",onLoginSubmit);
