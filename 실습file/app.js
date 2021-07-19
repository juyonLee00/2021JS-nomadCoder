const loginform = document.getElementById("login-form");
const loginInput = loginform.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){
console.dir(loginInput.dir);

}

loginButton.addEventListener("click", onLoginBtnClick);