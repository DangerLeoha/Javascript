let num1 = document.getElementById ('num1');

let num2 = document.getElementById ('num2');

let answer = document.getElementById ('answer');

function plus() {
    let plus = Number(num1.value) + Number(num2.value);
    answer.textContent = plus;
} 

function minus() {
    let minus = Number(num1.value) - Number(num2.value);
    answer.textContent = minus;
}

function multiplication() {
    let multiplication = Number(num1.value) * Number(num2.value);
    answer.textContent = multiplication;
}

function division() {
    if (Number(num2.value) === 0) {
        answer.textContent = "На ноль делить нельзя";
    } else {
        let division = Number(num1.value) / Number(num2.value);
        answer.textContent = division;
    }
} 
