const container = document.getElementById("container")
const text = document.getElementById("paragraph")

text.addEventListener("mouseenter", () => {
    text.innerText = "Кликни два раза"
    document.body.style.backgroundColor = "blue"
})

text.addEventListener("dblclick", () => {
    text.innerText = "Кликнули дважды!!"
    document.body.style.background = "none"
})

text.addEventListener("mouseleave", () => {
    text.innerText = "Наведи на меня"
    document.body.style.background = "none"
})