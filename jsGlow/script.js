const input = document.getElementById("input")

input.addEventListener("focus" , () => {
    input.style.borderColor = "blue"
})

input.addEventListener("blur" , () => {
    input.style.borderColor = "grey"
    return
})