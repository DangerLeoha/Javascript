const figure = document.getElementById("figure")

figure.addEventListener("mouseover" , () => {
    figure.style.backgroundColor = "green"
})

figure.addEventListener("mouseout" , () => {
    figure.style.backgroundColor = "red"
})