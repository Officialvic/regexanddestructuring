const form = document.getElementById("registration-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Regular expression patterns
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Validate name
  if (!name.match(nameRegex)) {
    showError(nameInput, "Invalid name");
  } else {
    showSuccess(nameInput);
  }

  // Validate email
  if (!email.match(emailRegex)) {
    showError(emailInput, "Invalid email");
  } else {
    showSuccess(emailInput);
  }

  // Validate password
  if (!password.match(passwordRegex)) {
    showError(
      passwordInput,
      "Password must contain at least 8 characters with at least one letter and one number"
    );
  } else {
    showSuccess(passwordInput);
  }

  // Confirm password
  if (password !== confirmPassword) {
    showError(confirmPasswordInput, "Passwords do not match");
  } else {
    showSuccess(confirmPasswordInput);
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  let errorElement = formGroup.querySelector(".error-message");

  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = "error-message";
    formGroup.appendChild(errorElement);
  }

  formGroup.classList.add("error");
  errorElement.innerText = message;
}
function showSuccess(input) {
  const formGroup = input.parentElement;

  formGroup.classList.remove("error");
}
