var emailTextField = document.getElementById("emailTextField");
var emailWarning = document.getElementById("incorrectEmailWarning");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var password_warning = document.getElementById("incorrectPasswordWarning");
var confirm_password_warning = document.getElementById("confirmWarning");
var button = document.getElementById("button");
var form = document.getElementById("form");

var emailIsCorrect = false;
var passwordIsCorrect = false;
var confirmIsCorrect = false;

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

password.onkeyup = validateConfirm;
confirm_password.onkeyup = validateConfirm;

emailTextField.onkeypress = function() {
    if (!validateEmail(emailTextField)) {
        emailWarning.classList.remove("display-none");
        emailTextField.classList.add("incorrectInput");
    } else {
        emailWarning.classList.add("display-none");
        emailTextField.classList.remove("incorrectInput");
    }
    disableSubmitButton();
}

function validateEmail(email) {
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(email.value)) {
        return true;
    } else { return false; }
}

function validatePassword() {
    filter = PASSWORD_REGEX;
    if (!filter.test(password.value)) {
        password_warning.classList.remove("display-none");
        passwordIsCorrect = false;
    } else {
        password_warning.classList.add("display-none");
        passwordIsCorrect = true;
    }
}

function validateConfirm() {
    validatePassword();
    if (password.value != confirm_password.value) {
        confirm_password_warning.classList.remove("display-none");
        confirmIsCorrect = false;
    } else {
        confirmIsCorrect = true;
        confirm_password_warning.classList.add("display-none");
    }
    disableSubmitButton();
}

button.onclick = function() {
    emailIsCorrect = validateEmail(emailTextField);
    if (emailIsCorrect && passwordIsCorrect && confirmIsCorrect)
        form.submit();
}