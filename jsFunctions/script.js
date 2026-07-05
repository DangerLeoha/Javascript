const number = document.getElementById("number");
const mark = document.getElementById("mark");
const button = document.getElementById("button");

// button.addEventListener("click", () => {
//     let numberValue = number.value
//     numberValue = Number(numberValue)
//     switch (numberValue) {
//         case 1:
//             mark.textContent = "Очень плохо"
//             break;
//         case 2:
//             mark.textContent = "Плохо"
//             break;
//         case 3:
//             mark.textContent = "Удовлетворительно"
//             break;
//         case 4:
//             mark.textContent = "Хорошо"
//             break;
//         case 5:
//             mark.textContent = "Отлично"
//             break;
//         default:
//             mark.textContent = "Такой оценки не существует"
//     }
// })

button.addEventListener("click", () => {
    let numberValue = number.value
    numberValue = Number(numberValue)

    if (numberValue === 1) {
        mark.textContent = "Очень плохо"
    } else if (numberValue === 2) {
        mark.textContent = "Плохо"
    } else if (numberValue === 3) {
        mark.textContent = "Удовлетворительно"
    } else if (numberValue === 4) {
        mark.textContent = "Хорошо"
    } else if (numberValue === 5) {
        mark.textContent = "Отлично"
    } else {
        mark.textContent = "Такой оценки не существует"
    }
})