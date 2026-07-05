const text = document.getElementById("text");
const textLength = document.getElementById("textLength");
const textLengthCount = document.getElementById("textLengthCount");

text.addEventListener("input" , () => {
    textLengthCount.textContent = text.value.length
})