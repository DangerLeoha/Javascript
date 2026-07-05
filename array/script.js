//1.
// let fruits = ["Яблоко","Банан"];
// fruits.push("Груша");
// fruits.unshift("Апельсин");
// let lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

// 2. Работа с очередью
// Есть очередь:
// Пришла "Катя" — добавь её в конец.
// Первого человека из очереди обслужили — удали его и выведи имя.
// Кто остался в очереди?
// let queue = ["Петя", "Маша", "Вася"];
// queue.push("Катя");
// let firstPerson = queue.shift();
// console.log(firstPerson);
// console.log(queue);

// 3. Поиск элемента
// Дан массив чисел:
// Найди:
// первый элемент больше 30;
// его индекс.
// let numbers = [10, 25, 40, 55, 70];
// let firstElem = numbers.find(x => x > 30);
// let firstElemIndex = numbers.findIndex(x => x > 30);
// console.log(firstElem);
// console.log(firstElemIndex);

// 4. Проверка массива
// Есть массив оценок
// Проверь, есть ли хотя бы одна "3".
// Убедись, что все оценки больше 2.
// let marks = [4, 5, 3, 4, 5];
// let marksInclude = marks.includes(3);
// let marksMoreThen = marks.every(x => x > 2);
// console.log(marksInclude);
// console.log(marksMoreThen);

// 5. Преобразование элементов
// Создай массив чисел [1, 2, 3, 4, 5].
// Создай новый массив, где все числа увеличены на 10.
// let num = [1, 2, 3, 4, 5];
// let arr = num.map(x => x * 10);
// console.log(arr);

// 6. Фильтрация
// Дан массив температур:
// Создай новый массив, где останутся только положительные температуры.
// let temps = [-2, 5, 13, 22, -1, 7];
// let tempWarm = temps.filter(x => x > 0)
// console.log(tempWarm);

// 7. Сумма чисел
// Вычисли общую сумму элементов массива.
// let num = [10, 20, 30, 40];
// let numSum = num.reduce((sum, value) => sum + value, 0)
// console.log(numSum);

// 8. Сортировка
// Дан массив чисел:
// Отсортируй его по возрастанию и по убыванию.
// let nums = [5, 12, 1, 21, 8];
// let numsFromLow = nums.sort((a, b) => a - b);
// let numsFromTop = nums.sort((a, b) => b - a);
// console.log(numsFromLow);
// console.log(numsFromTop);

//9.Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:

// let input = document.getElementById("input");
// let text = document.getElementById("text")

// input.addEventListener("input", () => {
//     let answer = input.split('-')
//     .map(
//     (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     let textcontent = text.style.textcontainer `${answer}`
// })

function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}