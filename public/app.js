const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const goRegister = document.getElementById("goRegister");
const goLogin = document.getElementById("goLogin");

goRegister.addEventListener("click", () => {
  loginForm.classList.remove("active");
  setTimeout(() => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    setTimeout(() => registerForm.classList.add("active"), 10);
  }, 500); // espera que acabe la animación
});

goLogin.addEventListener("click", () => {
  registerForm.classList.remove("active");
  setTimeout(() => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
    setTimeout(() => loginForm.classList.add("active"), 10);
  }, 500);
});
