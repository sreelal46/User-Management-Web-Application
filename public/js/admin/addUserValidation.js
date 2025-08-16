document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addUserForm");

  //Email input field and error message element
  const emailField = document.getElementById("email");
  const emailError = document.getElementById("email-error");

  //Username input field and error message element
  const usernameField = document.getElementById("username");
  const usernameError = document.getElementById("username-error");

  //Password input field and error message element
  const passwordField = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  //Conform Password input field and error message element
  const conformPasswordField = document.getElementById("conformPassword");
  const conformPasswordError = document.getElementById("conformPassword-error");

  //user name validation
  function validateUsername() {
    const username = usernameField.value.trim();
    if (username === "") {
      usernameError.textContent = "User name is required";
      usernameError.style.display = "block";
      return false;
    } else if (username.length < 3) {
      usernameError.textContent = "User name must be at least 3 letter";
      usernameError.style.display = "block";
      return false;
    } else {
      usernameError.textContent = "";
      usernameError.style.display = "none";
    }
  }

  //email validation
  function validateEmail() {
    const email = emailField.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      return false;
    } else if (!regex.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
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
      passwordError.textContent = "Password is required.";
      passwordError.style.display = "block";
      return false;
    } else if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters.";
      passwordError.style.display = "block";
      return false;
    } else {
      passwordError.textContent = "";
      passwordError.style.display = "none";
      return true;
    }
  }

  // confirm password validation
  function conformPassword() {
    const conform = conformPasswordField.value.trim();
    const password = passwordField.value.trim();

    if (password != conform) {
      conformPasswordError.textContent = "password is not same";
      conformPasswordError.style.display = "block";
      return false;
    } else {
      conformPasswordError.textContent = "";
      conformPasswordError.style.display = "none";
      return true;
    }
  }

  // Run validation when typing
  emailField.addEventListener("input", validateEmail);
  usernameField.addEventListener("input", validateUsername);
  passwordField.addEventListener("input", validatePassword);
  conformPasswordField.addEventListener("input", conformPassword);

  //preventing from submiting
  form.addEventListener("submit", function (e) {
    const validEmail = validateEmail();
    const validUsername = validateUsername();
    const validPassword = validatePassword();
    const validConfirmPassword = ConfirmPassword();

    if (
      !validEmail ||
      !validPassword ||
      !validUsername ||
      !validConfirmPassword
    ) {
      e.preventDefault();
    }
  });
});
