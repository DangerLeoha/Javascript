let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let border = document.getElementById("buttonColor");

red.addEventListener("click", () => {
    document.body.classList.add('redBackground')
    document.body.classList.remove('yellowBackground')
    document.body.classList.remove('greenBackground')
})

yellow.addEventListener("click", () => {
    document.body.classList.add('yellowBackground')
    document.body.classList.remove('redBackground')
    document.body.classList.remove('greenBackground')
})

green.addEventListener("click", () => {
    document.body.classList.add('greenBackground')
    document.body.classList.remove('yellowBackground')
    document.body.classList.remove('redBackground')
})