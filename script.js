function showPassword() {

    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

}

function checkPassword() {

    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let bar = document.getElementById("strength-bar");
    let strengthText = document.getElementById("strength-text");

    let capital = /[A-Z]/;
    let small = /[a-z]/;
    let number = /[0-9]/;
    let special = /[!@#$%^&*]/;

    if (password.length < 8) {

        result.innerHTML = "❌ Password is Too Short";
        result.style.color = "red";
        bar.style.width = "30%";
        bar.style.background = "red";
        strengthText.innerHTML = "Strength: Weak";

    } else if (!capital.test(password)) {

        result.innerHTML = "❌ Add One Capital Letter";
        result.style.color = "orange";
        bar.style.width = "60%";
        bar.style.background = "orange";
        strengthText.innerHTML = "Strength: Medium";

    } else if (!small.test(password)) {

        result.innerHTML = "❌ Add One Small Letter";
        result.style.color = "orange";
        bar.style.width = "60%";
        bar.style.background = "orange";
        strengthText.innerHTML = "Strength: Weak";

    } else if (!number.test(password)) {

        result.innerHTML = "❌ Add One Number";
        result.style.color = "orange";
        bar.style.width = "60%";
        bar.style.background = "orange";
        strengthText.innerHTML = "Strength: Weak";

    } else if (!special.test(password)) {

        result.innerHTML = "❌ Add One Special Character";
        result.style.color = "orange";
        bar.style.width = "60%";
        bar.style.background = "orange";
        strengthText.innerHTML = "Strength: Weak";

    } else {

        result.innerHTML = "✅ Strong Password";
        result.style.color = "green";
        bar.style.width = "100%";
        bar.style.background = "green";
        strengthText.innerHTML = "Strength: Strong";

    }

}

function resetForm() {

  document.getElementById("password").value = "";
    document.getElementById("result").innerHTML = "";

    let bar = document.getElementById("strength-bar");
    bar.style.width = "0%";
    bar.style.background = "red";
    document.getElementById("strength-text").innerHTML = "Strength: None";

}
function generatePassword() {

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for (let i = 0; i < 12; i++) {

        let randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];

    }

    document.getElementById("password").value = password;

    checkPassword();

}
function copyPassword() {

    let password = document.getElementById("password");

    password.select();
    password.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(password.value);

    alert("Password Copied Successfully!");

}