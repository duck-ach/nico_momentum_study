const loginFome = document.getElementById("login-form");
const loginInput =loginFome.querySelector("input");
const loginButton =loginFome.querySelector("button");

function onLoginButtonClick() {
    console.dir(loginInput.value);
}


loginButton.addEventListener("click", onLoginButtonClick);