const userName = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm")
const button = document.getElementById("submitBtn")
const message = document.getElementById("message")

button.addEventListener("click" , () => {
    const userNameValue = userName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    //name check
    if(userNameValue === "") {
        message.textContent = "поле не должно остаться пустым";
        message.style.color = "red";
        return
    }

    if(/\d/.test(userNameValue)) {
        message.textContent = "в именни не может быть цифр"
        message.style.color = "red";
        return
    }
    //email check
    if(!emailValue.includes("@") || !emailValue.includes(".")) {
        message.textContent = "почта написана не коректно";
        message.style.color = "red";
        return
    }
    //password check
    if(passwordValue.length <= 7 || passwordValue.length >= 16) {
        message.textContent = "ваше количество символов  в пароле должно быть от 8 до 16"
        message.style.color = "red";
        return
    }
    //confirm check
    if(confirmPasswordValue !== passwordValue) {
        message.textContent = "пароли не совподают"
        message.style.color = "red";
        return
    }
    //if everything ok
    message.textContent = `Здравствуйте ${userNameValue}!`
        message.style.color = "green";
})