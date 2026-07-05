// Вывести числа на html страницу в виде кнопок (button)
// const numbers = [1, 2, 3, 4];
// let container = document.getElementById("container");

// numbers.forEach(num => {
//     let button = document.createElement("button");
//     button.textContent = num;
//     container.appendChild(button)
// })
// for(let num of numbers) {
//     let button = document.createElement("button");
//     button.textContent = num;
//     container.appendChild(button);
// }

// 2. Поместить числа в список и выделить зеленым цветом чётные числа
// const arr = [1, 2, 3, 4, 5];

// let list = document.getElementById("list");

// for (let num of arr) {
//     let li = document.createElement("li");
//     li.textContent = num
//     if (num % 2 == 0) {
//         li.style.color = "green"
//     }
//     list.appendChild(li)
// }

// 3. создать карточку товара для каждого элемента массива с бордером и отступами внешними и внутренними
// const products = ['Телефон', 'Ноутбук', 'Наушники'];

// let container = document.getElementById("container");

// for (let elem of products) {
//     let div = document.createElement("div");
//     div.textContent = elem;
//     div.style.border = "1px solid black";
//     div.style.margin = "10px";
//     div.style.padding = "10px";
//     div.style.maxWidth = "200px"
//     container.appendChild(div);
// }

// 4. Нумерованный список вручную
// const items = ['HTML', 'CSS', 'JS'];

// let list = document.getElementById("list");

// for(let elem = 0; elem < items.length; elem++) {
//     let li = document.createElement("li")
//     li.textContent = elem + 1 + "." + " " + items[elem]
//     list.appendChild(li)
// }

// 5. вывести сообщение в html что в базе нет ни одного пользователя 
// const users = [];

// let div = document.getElementById("div");

// if (users.length == 0) {
//     let p = document.createElement("p");
//     p.textContent = "в базе нет ни одного пользователя"
//     div.appendChild(p)
// }

// 6. сделай квадратики из массива и закрась их тем цветом, что написаны в массиве 
const colors = ['red', 'blue', 'green'];

let container = document.getElementById("div");

for(let color of colors) {
    let div = document.createElement("div")
    if (color == "red") {
        div.style.color = "red";
    } else if (color == "blue") {
        div.style.color = "blue"
    } else if (color == "green") {
        div.style.color = "green"
    }
    div.innerHTML = color
    div.style.maxWidth = "200px"
    container.appendChild(div)
}