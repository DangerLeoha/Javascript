const image = document.getElementById("image");
const button = document.getElementById("button");
let showImage = 0;

button.addEventListener("click", () => {
    showImage = showImage + 1;

    if (showImage === 1){
        image.style.opacity = 100;
    }
    
    if (showImage > 1){
        image.style.opacity = 0;
        showImage = 0;
    }
})

// const image = document.getElementById("image");
// const show = document.getElementById("show");
// const hide = document.getElementById("hide");

// show.addEventListener("click", () => {
//     image.style.opacity = 100;
// })

// hide.addEventListener("click", () => {
//     image.style.opacity = 0;
// })