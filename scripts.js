const loginTab = document.querySelector("#login")
const signupTab = document.querySelector("#signup")

const loginForm = document.querySelector("#login-form")
const signupForm = document.querySelector("#signup-form")

document.querySelectorAll(".button").forEach(
  (button) => button.addEventListener('click', (e) => e.preventDefault())
);

function setLogin() {
  signupTab.classList.remove("active")
  loginTab.classList.add("active")
  signupForm.classList.remove("active")
  loginForm.classList.add("active")
}

function setSignup() {
  loginTab.classList.remove("active")
  signupTab.classList.add("active")
  loginForm.classList.remove("active")
  signupForm.classList.add("active")
}