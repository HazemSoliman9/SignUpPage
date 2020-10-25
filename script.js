document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  function showSuccess(field) {
    const formControl = field.parentElement;
    formControl.className = "form-control success";
  }

  function showError(field, message) {
    const formControl = field.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }
  function verifyUsername(inputUsername) {
    if (inputUsername.trim() === "") {
      showError(username, "Field Required.");
    } else if (inputUsername.length < 3) {
      showError(username, "Username Too Short");
    } else {
      showSuccess(username);
    }
  }
  function verifyEmail(inputEmail) {
    if (inputEmail.trim() === "") {
      showError(email, "Field Required.");
    } else if (inputEmail.length < 3) {
      showError(email, "Email Too Short");
    } else {
      showSuccess(email);
    }
  }
  function verifyPassword(inputPass, inputPass2) {
    if (inputPass == "") {
      showError(password, "Field Required.");
    }
    if (inputPass.length < 3) {
      showError(password, "Password Too Short");
    } else if (inputPass !== inputPass2) {
      showError(password2, "Passwords do NOT match");
      showSuccess(password);
    } else {
      showSuccess(password);
      showSuccess(password2);
    }
    if (inputPass == "") {
      showError(password, "Field Required.");
    }
    if (inputPass2 == "") {
      showError(password2, "Field Required.");
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    verifyUsername(username.value);
    verifyEmail(email.value);
    verifyPassword(password.value, password2.value);
    console.log(password2.value);
  });
});
