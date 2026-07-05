//Задача 1: найти сумму всех чисел 
// const arr = [3, 5, 7]
// let num = 0
// for(let i of arr) {
//     num += i
// }
// console.log(num);

// const arr = [3, 5, 7]
// let num = 0
// for(let i = 0; i < arr.length; i++) {
//     num += arr[i]
// }
// console.log(num);

// 2. Задача: создать новый массив, где каждый элемент умножен на 2
// const arr = [2, 4, 6];
// let mult = [];
// for(let i of arr){
//     mult.push(i * 2)
// }
// console.log(mult);

// const arr = [2, 4, 6];
// let mult = [];
// for(let i = 0; i < arr.length; i++) {
//     mult.push(arr[i] * 2)
// }
// console.log(mult);

// 3. Задача: вывести строки длиной больше 5
// const arr = ['apple', 'banana', 'kiwi', 'orange'];
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 5) {
//         console.log(arr[i]);
//     }
// }

// const arr = ['apple', 'banana', 'kiwi', 'orange'];
// for(let i of arr) {
//     if (i.length > 5) {
//         console.log(i);
//     }
// }

// 4. Задача: вывести индекс и значение
// const arr = ['apple', 'banana', 'orange'];
// for(let i = 0; i < arr.length; i++) {
//     console.log(i + ":" + " " + arr[i]);
// }

// 5. Задача: вывести приветствие каждого участника
// const names = ['Алекс', 'Маша', 'Иван'];
// names.forEach(item => {
//     console.log("привет" + " " + item);
// })

// const names = ['Алекс', 'Маша', 'Иван'];
// for(let i = 0; i < names.length; i++) {
//     console.log("привет" + " " + names[i]);
// }

// 6. Поиск максимального числа (for и forEach)
// const arr = [3, 7, 2, 9, 5];
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max);

// const arr = [3, 7, 2, 9, 5];
// max = arr[0]
// arr.forEach(item => {
// if (arr[item] > max) {
//     max = arr[item]
// }
// })
// console.log(max);

// 7. Задача: посчитать, сколько в массиве положительных чисел.
// const arr = [-2, 5, 0, 7, -1, 3];
// let sum = 0
// for(let i of arr) {
//     if(i >= 0){
//         sum ++
//     }
// }
// console.log(sum);

// 8. Задача: найти сумму только чётных чисел.
// const arr = [1, 2, 3, 4, 6];
// let sum = 0
// for(let i of arr){
//     if(i % 2 == 0) {
//         sum += i
//     }
// }
// console.log(sum);

// 9. Задача: посчитать общее количество символов во всех строках.
// const arr = ['hi', 'hello', 'hey'];
// let str = 0
// for(let i = 0; i < arr.length; i++) {
//     str += arr[i].length 
// }
// console.log(str);

// const arr = ['hi', 'hello', 'hey'];
// let str = 0
// arr.forEach(i => {
//     str += i.length
// })
// console.log(str);

// 10. Задача: разложить числа в два массива четные и нечетные.
// const arr = [1, 2, 3, 4, 5];
// let even = [];
// let odd = [];
// for(let i of arr){
//     if (i % 2 == 0) {
//         even.push(i)
//     } else {
//         odd.push(i)
//     }
// }
// console.log(even);
// console.log(odd);

// 11. Задача: найти минимальный элемент массива.
// const arr = [5, 2, 9, 1, 7];
// let min = arr[0]
// for(let i of arr){
//     if (i < min) {
//         min = i
//     }
// }
// console.log(min);

// 12. Задача: собрать одну строку из массива слов.
// const words = ['Я', 'учу', 'JavaScript'];
// str = ""
// for(let i of words) {
//     str += i + " "
// }
// console.log(str);

// 13. Задача: найти самую длинную строку в массиве.
// const arr = ['hi', 'hello', 'goodbye', 'hey'];
// let str = arr[0]
// for(let i of arr) {
//     if(i.length > str.length) {
//         str = i
//     }
// }
// console.log(str);

// 14. Задача: создать новый массив в обратном порядке
const arr = [1, 2, 3, 4];
