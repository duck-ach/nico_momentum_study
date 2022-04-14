const loginFome = document.getElementById("login-form");
const loginInput =loginFome.querySelector("input");
const loginButton =loginFome.querySelector("button");

function onLoginButtonClick() {
    const username = loginInput.value;
    console.log(username);
}


loginButton.addEventListener("click", onLoginButtonClick);