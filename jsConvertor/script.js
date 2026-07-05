let minutes = document.getElementById("minutesInput");
let seconds = document.getElementById("seconds");
let button = document.getElementById("button");

button.addEventListener("click", () => {
    let minutesValue = Number(minutes.value)
    let secondsValue = minutesValue * 60

    if (minutesValue >= 1) {
        seconds.textContent = secondsValue
    } else if (minutesValue <= 0) {
        seconds.textContent = "введите число больше 0"
    }
})