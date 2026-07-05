const input = document.getElementById("input");
const upperCase = document.getElementById("upper");
const lowerCase = document.getElementById("lower");
const textResult = document.getElementById("textResult");

input.addEventListener("input" , () => {
    textResult.textContent = input.value
})

upperCase.addEventListener("click" , () => {
    textResult.style.textTransform = "uppercase" 
})

lowerCase.addEventListener("click" , () => {
    textResult.style.textTransform = 'lowercase'
})  