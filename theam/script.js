let list = document.getElementById(`list`);

let color = document.getElementById(`background`);

let text = document.getElementById(`text`);


function changeTheam() {
    if (list.value === "red") {
        color.style.backgroundColor = `red`;
    } else if (list.value === "black") {
        color.style.backgroundColor = `black`;
        text.style.color = 'white';
    } else {
        color.style.backgroundColor = `white`;
    }
}