//first exercise
// const xAxis = document.getElementById("x");
// const yAxis = document.getElementById("y");
// const button = document.getElementById("button");

// button.addEventListener("click" , function(event) {
//     xAxis.textContent = event.clientX;
//     yAxis.textContent = event.clientY;
// })

//second exercise
// const down = document.getElementById("down");
// const up = document.getElementById("up");

// document.addEventListener("keydown" , function(event) {
//     down.textContent = event.key;
// })

// document.addEventListener("keyup" , function(event) {
//     up.textContent = event.key
// })

//third exercise
// const num = document.getElementById("count");
// const text = document.getElementById("text");

// text.addEventListener("input" , () => {
//     num.textContent = text.value.length;
// })

//fourth exercise
// const answer = document.getElementById("answer");

// document.addEventListener("keydown" , function(e){

//     if(e.key === "a") {
//         answer.textContent = "Угадал!!"
//         answer.style.color = "green"
//     } else {
//         answer.textContent = "Попробуй ещё раз"
//         answer.style.color = "red"
//     }
// })

const whiteTheme = document.getElementById("white");
const darkTheme = document.getElementById("black");

whiteTheme.addEventListener("change" , () => {
    if (whiteTheme.checked) {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
})

darkTheme.addEventListener("change" , () => {
    if (darkTheme.checked) {
        document.body.style.backgroundColor = "darkGray"
        document.body.style.color = "white"
    }
})