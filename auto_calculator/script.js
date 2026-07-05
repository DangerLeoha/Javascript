const mark = document.getElementById("mark");

// function of addiction from mark to model
function getModels() { 
    const model = document.getElementById("model");
    model.innerHTML = '<option>Модель</option>';

    if (mark.value === "bmw") {
        model.innerHTML += '<option value= "1000000">x5</option>';
        model.innerHTML += '<option value= "1250000">i3</option>';
        model.innerHTML += '<option value= "1500000">m5f90</option>';
    } else if (mark.value === "mercedes") {
        model.innerHTML += '<option value= "750000">E-class</option>';
        model.innerHTML += '<option value= "1425000">S-class</option>';
        model.innerHTML += '<option value= "2100000">Maybach</option>';
    } else if (mark.value === "volvo") {
        model.innerHTML += '<option value= "1750000">EX90</option>';
        model.innerHTML += '<option value= "975000">ES90</option>';
        model.innerHTML += '<option value= "1150000">V90</option>';
    }
}

//function which print a caution, which obliges you to choose a car mode, year and mileage and if it's all right, function will calculate a total sum of car
function calculate() {
    const model = Number(document.getElementById("model").value);
    const year = Number(document.getElementById("year").value);
    const generation = Number(document.getElementById("generation").value);
    const modification = Number(document.getElementById("modification").value);
    const bodyType = Number(document.getElementById("bodyType").value);
    const level = Number(document.getElementById("level").value);
    const mileage = Number(document.getElementById("mileage").value);
    const message = document.getElementById("message");

    if (!model || !year || isNaN(mileage)) {
        message.textContent = 'Эти поля обязательны для заполнения: Модель, Год, Пробег!';
        message.style.color = "red";
        return
    } else {
        message.style.color = "black";
        message.textContent = "";
    }

    let sum = (model * year * bodyType) + (generation + modification + level) - (mileage * 5);
    message.textContent = `Ваша итоговая цена:` + " " + Math.round(sum).toLocaleString() + " " + "₽";
    message.style.fontWeight = "500"
} 