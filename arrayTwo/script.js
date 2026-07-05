// 1.Фильтрация положительных чисел
// Есть массив чисел. Оставь только положительные.
// let nums = [-5, 10, 0, 33, -1, 7];
// let newNums = nums.filter((item) => item > 0);
// console.log(newNums);

// 2. Удвой все числа
// Дан массив [1,2,3,4] → получи [2,4,6,8].
// let nums = [1, 2, 3, 4];
// let newNums = nums.map((item) => item * 2);
// console.log(newNums);

// 3. Найди сумму всех чётных чисел
// Из массива чисел собери сумму только чётных.
// let nums = [5, 12, 7, 4, 10, 3];
// let newNums = nums.filter((item) => item % 2 === 0)
// .reduce((result, item) => result + item)
// console.log(newNums);

// 4. Пользователь вводит строку — преврати её в массив слов
// Пользователь вводит предложение.
// Раздели его на слова.
// let question = prompt("Введите строку");
// let questionResult = question.split(" ")
// console.log(questionResult);
// let arr = ['Пользователь', 'вводит', 'строку', '—', 'преврати', 'её', 'в', 'массив', 'слов']
// let strArr = arr.join(" ")
// console.log(strArr);

// let nums = [1, 2, 3, 4];
// let revNums = nums.reverse();
// console.log(revNums);

// Удали из массива все пустые строки
// Задача
// Из массива  ["apple", "", "banana", "", "orange"]
// удали пустые строки. 
// let str = ["apple", "", "banana", "", "orange"];
// let newStr = str.filter((item) => item !== "");
// console.log(newStr);

// Дан массив [1, 2, 3, 4, 5].
// Преобразуй все элементы в строки.
// let nums = [1, 2, 3, 4, 5];
// let strNums = nums.map(String)
// console.log(strNums);

// Пользователь вводит строку "5,2,9,1"
// → преврати в массив чисел
// → отсортируй по возрастанию.

// let str = prompt("Введите числа");
// let strArr = str.split(" ")
// .map(Number)
// .sort((a, b) => a - b)
// console.log(strArr);

// Попроси пользователя ввести три числа.
// Сохрани их в массив.
// Выведи самое большое число.

// let firstNum = prompt("Введите первое число");
// let secondNum = prompt("Введите второе число");
// let thirdNum = prompt("Введите третье число");
// let numArr = [firstNum, secondNum, thirdNum];
// let biggestNum = Math.max(...numArr);
// console.log(biggestNum);

// Задание 1
// Спросить три слова.
// Сохранить в массив.
// Вывести задом наперёд.
// let firstWord = prompt("Введите первое слово");
// let secondWord = prompt("Введите второе слово");
// let thirdWord = prompt("Введите третье слово");
// let wordArr = [firstWord, secondWord, thirdWord];
// let lastWordStart = wordArr.reverse();
// console.log(lastWordStart);


// Задание 2
// Получить 4 имени.
// Сохранить в массив.
// Отсортировать.
// let firstName = prompt("Введите первое имя");
// let secondName = prompt("Введите второе имя");
// let thirdName = prompt("Введите третье имя");
// let fourthName = prompt("Введите четвертое имя");
// let nameArr = [firstName, secondName, thirdName, fourthName];
// let sortNameArr = nameArr.sort();
// console.log(sortNameArr);

// Задание 3 
// Попросить три строки.
// Найти те, что длиннее 5 символов.
// Вывести их.
// let firstStr = prompt("введите первую строку");
// let secondStr = prompt("введите первую строку");
// let thirdStr = prompt("введите первую строку");
// let strArr = [firstStr, secondStr, thirdStr];
// let findStrArr = strArr.filter((line) => line.length > 5);
// console.log(findStrArr);

// Пользователь вводит 4 слова — преврати их в строку через тире
// Задание
// Ввести 4 слова.
// Записать в массив.
// Превратить массив в одну строку вида:
// слово1 - слово2 - слово3 - слово4 
// let firstWord = prompt("Введите первое слово");
// let secondWord = prompt("Введите второе слово");
// let thirdWord = prompt("Введите третье слово");
// let fourthWord = prompt("Введите четвертое слово");
// let wordArr = [firstWord, secondWord, thirdWord, fourthWord];
// let strWordArr = wordArr.join("-");
// console.log(strWordArr);

// Выведи числа по одному в консоль
// Дан массив:
// let numbers = [10, 20, 30, 40];
// for(let i of numbers){
//     console.log(i);
// };

// 2. Вывести элементы массива вместе с индексами
// Пример: 
// 0: Яблоко
// 1: Груша
// 2: Апельсин
// let fruits = ["apple", "pear", "orange"];
// for(let i = 0; i < fruits.length; i++) {
//     console.log(i + ":" + " " + fruits[i]);
// }

// 3. Найти сумму массива
// let nums = [2, 5, 8, 1];
// let sum = 0
// for(let i of nums) {
//     console.log(sum = sum +i);
// }

// 4. Найти максимальный элемент массива
// let nums = [12, 3, 78, 4, 25];
// let max = nums[0];
// for(let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//         max = nums[i];
//     }
// } 
// console.log(max);

// 5. Попросить пользователя ввести 5 слов и вывести их через пробел
// Пример: слово1 слово2 слово3 слово4 слово5
// let firstWord = prompt("Введите первое слово");
// let secondWord = prompt("Введите второе слово");
// let thirdWord = prompt("Введите третье слово");
// let fourthWord = prompt("Введите четвертое слово");
// let fifthWord = prompt("Введите пятое слово");
// let wordsArr = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];
// let words = ""
// for(let i of wordsArr) {
//     words = i + " "
// }
// console.log(words);

// Подсчитать количество чётных чисел
// let nums = [1, 4, 7, 10, 12, 3];
// let countNums = 0;
// for(let i of nums) {
//     if(i % 2 === 0) {
//         countNums++
//     }
// }
// console.log(countNums);

// 2. Пользователь вводит 4 числа — вывести только положительные
// let firstNum = prompt("введите первое число");
// let secondNum = prompt("введите второе число");
// let thirdNum = prompt("введите третье число");
// let fourthNum = prompt("введите четвертое число");
// let nums = [firstNum, secondNum, thirdNum, fourthNum];
// for (let i of nums) {
//     if (i > 0) {
//         console.log(i);
//     }
// }

// Склеить все слова в одну строку 
// let words = ["Привет", "мир", "!"];
// let str = "";
// for(let i of words) {
//     str += i + " "
// }
// console.log(str);

// 2. Найти количество чисел больше 10
// let nums = [4, 12, 8, 30, 22];
// let count = 0;
// for(let i of nums) {
//     if(i > 10) {
//         count ++
//     }
// }
// console.log(count);

// 3. Вывести только строки из массива
// let arr = [1, "hi", true, "hello", 55, "ok"];
// for(let i of arr) {
//     if(typeof(i) === "string") {
//         console.log(i);
//     }
// }

// Сформировать новый массив из квадратов чисел
// let nums = [2, 3, 4];
// let arr = [];
// for(let i of nums) {
//     let double = i * i
//     arr.push(double)
// }
// console.log(arr);

// 5. Есть массив с покупками. Выведи их как список <li> в HTML.
// let ul = document.getElementById("list");
// let products = ["Хлеб", "Молоко", "Яйца", "Сыр", "Яблоки", "Сливки"];
// for(let i of products) {
//     ul.innerHTML += `<li>${i}</li>`
// }

// 6. Вывести цены товаров и общую сумму
// let price = document.getElementById("price");
// let total = document.getElementById("total");
// let prices = [120, 350, 99, 400];
// let totalSum = 0;
// let str = "";
// for(let i of prices) {  
//         price.innerHTML += `<p>${i}</p>`;
//         totalSum += i;
// }
// total.innerHTML = `Общая сумма: ${totalSum}`

// 7. Вывести список имен и добавить им порядковый номер
// let name = document.getElementById("names");
// let names = ["Аня", "Катя", "Миша", "Олег"];
// for(let i = 0; i < names.length ; i++) {
//     name.innerHTML += `<p>${i + 1}. ${names[i]}</p>`
// }

// Д/з 
// 1. Вывести каждую букву строки по одному
// let word = "hello"
// let wordArr = word.split("")
// console.log(wordArr);


// 2. Найти произведение всех чисел массива
// let nums = [2, 3, 4];
// let arrNums = nums.reduce((items, acc) => items * acc)
// console.log(arrNums);


// 3. Создать новый массив, содержащий только отрицательные числа
// let nums = [3, -2, 7, -8, 0, 5];
// let numsArr = nums.filter((items) => items < 0)
// console.log(numsArr);

// 4. Кнопка меняет цвет блока
// Сделать квадрат, и по клику на кнопку менять его цвет.
// let container = document.getElementById("container");
// let button = document.getElementById("button");
// let colors = ["red", "blue", "green", "yellow"];
// let i = 0;
// button.addEventListener("click", () => {
//     container.style.backgroundColor = colors[i];
//     i++;
//     if (i === colors.length) {
//         i = 0;
//     }
// })

// button.addEventListener("click", () => {
//     container.style.backgroundColor = "red";
// })

// button.addEventListener("dblclick", () => {
//     container.style.backgroundColor = "blue";
// })

// 5. Поменять картинку по наведению
// Когда мышка наводится на изображение — меняем картинку.
// Когда уводится — возвращаем назад.
// let image = document.getElementById("image");

// image.addEventListener("mouseenter", () =>  {
//     image.src = "./img/flightTwo.jpg"
// })

// image.addEventListener("mouseleave", () =>  {
//     image.src = "./img/flight.jpg"
// })

// 6. Фильтрация чётных чисел
// const numbers = [1, 4, 7, 10, 13, 16];
// let numbersEven = numbers.filter((items) => items % 2 == 0)
// console.log(numbersEven);

// 7. Найти первое отрицательное число
// const nums = [3, 5, -2, 8, -10];
// let numsMinus = nums.find((items) => items < 0);
// console.log(numsMinus);

// 8. Проверить, есть ли число больше 100
// const arr = [10, 25, 50, 99, 101];
// let arrMore = arr.some((items) => items > 100);
// console.log(arrMore);

// 9.Вывести числа от 1 до 10
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for(let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
// for(let i of nums) {
//     console.log(i);
// }

// 10. Найти сумму чисел массива
// let nums = [1, 2, 3, 4, 5];
// let start = 0;
// for(let i of nums) {
//     start = start + i;
// }
// console.log(start);

// 11. Найти максимальное число в массиве
// let nums = [12, 7, 25, 3, 18];
// let max = nums[0]
// for(let i of nums) {
//     if (i > max) {
//         max = i
//     }
// }
// console.log(max);

// 4. Подсчитать количество чётных чисел
// let nums = [12, 7, 25, 3, 18];
// let even = 0;
// for(let i = 0; i < nums.length; i++) {
//     if(nums[i] % 2 == 0) {
//         even++
//     }
// }
// console.log(even);

// Создать новый массив с квадратами чисел
// let nums = [2, 4, 6, 8, 10];
// let squares = [];
// for(let i of nums) {
//     squares.push(i * i)
// }
// console.log(squares);

// 6. Вывести элементы массива с индексами
// let arr = ["apple", "banana", "cherry"];
// for(let i = 0; i < arr.length; i++) {
//     console.log(`${i}` + "." + " " + arr[i]);
// }

// 7. Найти сумму чисел только тех, кто больше 10
// let nums = [5, 12, 8, 20, 3, 15];
// let sum = 0;
// for(let i of nums) {
// if (i >= 10) {
//     sum = sum + i
// }
// }
// console.log(sum);

// 8. Перевернуть строку
// let str = "Я люблю программирование";
// let reverseStr = "";
// for(let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i]
// }
// console.log(reverseStr);

// 9.Создать новый массив, в котором будут цифры говорящие о длине строки 
// let words = ["cat", "dog", "elephant"];
// let length = [];
// for(let i of words) {
//     length.push(i.length)
// }

// console.log(length);

// 10. Вывести только слова на букву "a"
// let words = ["apple", "banana", "avocado", "cherry"];
// for(let i of words) {
//     if (i[0] == "a") {
//         console.log(i);
//     }
// }

// Посчитать среднее арифметическое чисел массива
let nums = [4, 8, 15, 16, 23, 42];