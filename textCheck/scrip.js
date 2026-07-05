const input = document.getElementById("input")
const check = document.getElementById("check")
const answer = document.getElementById("answer")

check.addEventListener("click" , () => {
    const inputValue = input.value

    if(inputValue === "JavaScript") {
        answer.textContent = "Верно!"
        answer.style.color = "green"
        return
    } else {
        answer.textContent = "Попробуй ещё раз"
        answer.style.color = "red"
        return
    }
})