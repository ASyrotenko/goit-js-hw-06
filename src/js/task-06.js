const passwordInput = document.querySelector('#validation-input');

function passwordCheck() {
  if (passwordInput.value.length > 1 && passwordInput.value.length < 6) {
    passwordInput.classList.add('invalid');
    passwordInput.classList.remove('valid');
  } else if (passwordInput.value.length >= 6) {
    passwordInput.classList.add('valid');
    passwordInput.classList.remove('invalid');
  } else {
    passwordInput.classList.remove('valid');
    passwordInput.classList.remove('invalid');
  }
}

passwordInput.addEventListener('blur', passwordCheck);
