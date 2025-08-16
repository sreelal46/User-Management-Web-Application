document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  //Email input field and error message element
  const emailField = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  //Password input field and error message element
  const passwordField = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  //Email validation
  function validateEmail() {
    const email = emailField.value.trim();
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
    const password = passwordField.value.trim();

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
  emailField.addEventListener("input", validateEmail);
  passwordField.addEventListener("input", validatePassword);

  //preventing from submiting
  loginButton.addEventListener("submit", (e) => {
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    if (!validEmail || !validPassword) {
      e.preventDefault();
    }
  });
});
