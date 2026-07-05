let paragraph = document.getElementById("paragraph");
let toggle = document.getElementById("toggle");

toggle.addEventListener("click" , () => {
    
    if (paragraph.style.display === "none") {
        toggle.textContent = "скрыть";
        paragraph.style.display = "block";
    } else {
        toggle.textContent = "показать";
        paragraph.style.display = "none";
    }
})