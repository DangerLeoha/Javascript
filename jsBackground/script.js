let select = document.getElementById("colorSelect");
let button = document.getElementById("acceptButton");

button.addEventListener("click" , () => {
    let chosenColor = select.value;
    document.body.style.backgroundColor = chosenColor;
})