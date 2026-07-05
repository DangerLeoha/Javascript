const figure = document.getElementById("square");
const buttonSizeBigger = document.getElementById("buttonSizeBigger");
const buttonSizeSmaller = document.getElementById("buttonSizeSmaller");

let size = 200;

buttonSizeBigger.addEventListener("click", () => {
    size += 10;
    figure.style.width = size + "px";
    figure.style.height = size + "px";
    figure.style.backgroundColor = "green";
})

buttonSizeSmaller.addEventListener("click", () => {
    size -= 10;
    if (size < 10) {
        size = 10
    }
    figure.style.width = size + "px";
    figure.style.height = size + "px";
    figure.style.backgroundColor = "red";
})