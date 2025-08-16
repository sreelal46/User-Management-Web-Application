document.addEventListener("DOMContentLoaded", () => {
  const from = document.getElementById("adminLoginForm");

  //Email input field and error message element
  const emailFiled = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  //Password input field and error message element
  const passwordFiled = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");

  //Email validation
  function validateEmail() {
    const email = emailFiled.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      emailError.textContent = "Email is required";
      emailError.style.display = "block";
      return false;
    } else if (!regex.test(email)) {
      emailError.textContent = "Invalid email";
      emailError.style.display = "block";
      return false;
    } else {
      emailError.textContent = "";
      emailError.style.display = "none";
      return true;
    }
  }

  //password validation
  function validatePassword() {
    const password = passwordFiled.value.trim();

    if (password === "") {
      passwordError.textContent = "Password is required";
      passwordError.style.display = "block";
      return false;
    } else if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters";
      passwordError.style.display = "block";
      return false;
    } else {
      passwordError.textContent = "";
      passwordError.style.display = "none";
      return true;
    }
  }

  // Run validation when typing
  emailFiled.addEventListener("input", validateEmail);
  passwordFiled.addEventListener("input", validatePassword);

  //preventing from submiting
  form.addEventListener("submit", (e) => {
    if (!validateEmail || !validatePassword) {
      e.preventDefault();
    }
  });
});
