let select = document.getElementById("font");
let paragraph = document.getElementById("paragraph");

select.addEventListener("change" , () => {
    let chosenSize = select.value;
    paragraph.style.fontSize = chosenSize;
})