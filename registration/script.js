let inputName = document.getElementById('name');

let inputEmail = document.getElementById('email');

let inputPassword = document.getElementById('password');

let inputError = document.getElementById("error");

function checkValid() {
    if (inputName.value === "" || inputEmail.value ==="" || inputPassword.value  === "") {
        inputError.textContent = 'Все поля формы должны быть заполнены!!!';
    } else {
        alert(`Добро пожаловать, ${inputName.value}!`);
    }
}

