const container = document.getElementById("clickContainer");
const count = document.getElementById("count");
const clickbtn = document.getElementById("clickbtn");
const resetbtn = document.getElementById("resetbtn");
let point = 0;

clickbtn.addEventListener("click" , () => {
    point++;
    count.textContent = point;
})

resetbtn.addEventListener("click" , () => {
    point = 0;
    count.textContent = point
})