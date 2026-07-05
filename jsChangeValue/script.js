const num = document.getElementById("number");
const buttonPlus = document.getElementById("addButton");
const buttonMinus = document.getElementById("takeButton");
let number = 0;

buttonPlus.addEventListener("click", () => {
    number = number + 1;
    num.textContent = number;
})

buttonMinus.addEventListener("click", () => {
    if (number > 0) {
        number = number - 1;
        num.textContent = number;
    }
})