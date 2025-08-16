document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("editForm");
  //Username input field and error message element
  const usernameField = document.getElementById("editName");
  const usernameError = document.getElementById("editName-error");

  //Email input field and error message element
  const emailField = document.getElementById("editEmail");
  const emailError = document.getElementById("editEmail-error");

  //Password input field and error message element
  const passwordField = document.getElementById("editPassword");
  const passwordError = document.getElementById("editPassword-error");

  //Validate username
  function validateUsername() {
    const username = usernameField.value.trim();
    if (username === "") {
      usernameError.textContent = "Username can't be empty";
      usernameError.style.display = "block";
      return false;
    } else if (username.length < 3) {
      usernameError.textContent = "User name must be at least 3 letters";
      usernameError.style.display = "block";
      return false;
    } else {
      usernameError.textContent = "";
      usernameError.style.display = "none";
      return true;
    }
  }

  //Validate Email
  function validateEmail() {
    const email = emailField.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailError.textContent = "Email can't be empty";
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

  // Password validation (only if not empty)
  function validatePassword() {
    const password = passwordField.value.trim();
    if (password && password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters.";
      passwordError.style.display = "block";
      return false;
    } else {
      passwordError.textContent = "";
      passwordError.style.display = "none";
      return true;
    }
  }

  // Run validation when typing
  usernameField.addEventListener("input", validateUsername);
  emailField.addEventListener("input", validateEmail);
  passwordField.addEventListener("input", validatePassword);

  //preventing from submiting
  form.addEventListener("submit", (e) => {
    const validUsername = validateUsername();
    const validEmail = validateEmail();
    const validPassword = validatePassword(); // This only runs if password not empty

    // Prevent submission if username or email is invalid
    if (!validUsername || !validEmail) {
      e.preventDefault();
    }
  });
});
