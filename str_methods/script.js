// 1. Напиши функцию, которая принимает строку и возвращает её длину.
// let str = "hello world"

// function lengthOfStr(str) {
//     return str.length
// }

// console.log(lengthOfStr(str));

// 2. Напиши функцию, которая возвращает первые 5 символов строки.
// let str="hello world"

// function symbolGet(str) {
//     let newStr = ""
//     return newStr = str.slice(0, 5)
// }

// console.log(symbolGet(str));

// 3. Замени слово "cat" на "dog" в строке.
// let str = "I have a cat"

// function replaceWord(str) {
//     return str.replace("cat", "dog")
// }

// console.log(replaceWord(str));

// 4.  Напиши функцию, которая превращает строку в массив слов.
// let str = "I love JavaScript"

// function strToArr(str) {
//     return str.split(" ")
// }

// console.log(strToArr(str));

// 5. Напиши функцию, которая удаляет пробелы в начале и в конце строки.
// let str = " hello world "

// function strTrim(str) {
//     return str.trim()
// }

// console.log(strTrim(str));

// 6. Напиши функцию, которая делает первую букву строки заглавной.
// let str = "hello world"

// function firstUpperCase(str) {
//     return str[0].toUpperCase() + str.slice(1)
// }

// console.log(firstUpperCase(str));

// 7. Напиши функцию, которая считает сколько раз буква "a" встречается в строке  через цикл
// let str = "banana"

// function numOfLetter(str) {
//     let n = 0
//     for(i of str) {
//         if(i === "a") {
//             n++
//         }
//     }
//     return n
// }

// console.log(numOfLetter(str));

// 8. Напиши функцию, которая возвращает последний символ строки.
// let str = "I love JavaScript"

// function lastSymbol(str) {
//     return str[str.length - 1]
// }

// console.log(lastSymbol(str));

// 9. Повтори строку 3 раза.
// let str = "I love JavaScript"

// function repeatStr(str) {
//     return str.repeat(3)
// }

// console.log(repeatStr(str));

// 10. Верни строку в обратном порядке.
// let str = "I love JS"

// function reversStr(str) {
//     let newArr = str.split(" ").reverse().join(" ")
//     return newArr
// }

// console.log(reversStr(str));

// 11 Удали все пробелы из строки.
// let str = "I love JS"

// function removeSpaces(str) {
//     return str.replaceAll(" ", "")
// }

// console.log(removeSpaces(str));

// 12 Проверь, заканчивается ли строка "!".
// let str = "Hello world!"

// function strCheck(str) {
//     return str.endsWith("!")
// }

// console.log(strCheck(str));

// 13. Проверь, начинается ли строка со слова "Hello". 
// let str = "Hello world"

// function strCheck(str) {
//     return str.startsWith("Hello")
// }

// console.log(strCheck(str));

// 14. Дана строка let word = "JavaScript";. Выведи в консоль количество символов в этой строке, а затем — её первый и последний символы.

// let word = "JavaScript"

// console.log(word.length);
// console.log(word[0]);
// console.log(word[word.length - 1]);

// 15. Пользователь ввел свое имя капсом: let name = "АЛЕКСАНДР";. Сделай так, чтобы оно было написано строчными (маленькими) буквами, и выведи результат.

// let user = "АЛЕКСАНДР";

// console.log(user.toLowerCase());

// 16. При регистрации пользователь случайно поставил пробелы по краям email: let email = " user@mail.com ";. Очисти строку от пробелов по краям.

// let email = " user@mail.com ";

// console.log(email.trim());

// 17. Дана строка let message = "Внимание! Вы выиграли миллион долларов, это не Спам!";. 
// Проверь, содержит ли сообщение слово "спам" (без учета регистра). Выведи true или false.

// let message = "Внимание! Вы выиграли миллион долларов, это не Спам!";

// console.log(message.toLowerCase().includes("спам"));

// 18. В строке let text = "Учим HTML, CSS и JavaScript"; найди, с какой позиции (индекса) начинается слово "JavaScript".

// let text = "Учим HTML, CSS и JavaScript";

// console.log(text.search("JavaScript"));

// 19. Дана строка let review = "Этот телефон плохой, просто плохой!";. Замени все слова "плохой" на "отличный".

// let review = "Этот телефон плохой, просто плохой!";

// console.log(review.replaceAll("плохой", "отличный"));

// 20. Дан номер телефона в формате let phone = "+7 (999) 123-45-67";. Вырежи и выведи только код оператора (цифры 999).

// let phone = "+7 (999) 123-45-67";
// let operator = phone.slice(3, 8)

// console.log(operator);

// 21. Дан список покупок в виде одной строки через запятую: let list = "яблоки, молоко, хлеб, сыр";. Преврати эту строку в массив из четырех отдельных элементов.

// let list = "яблоки, молоко, хлеб, сыр";

// let arr = list.split(",")

// console.log(arr);

// 22. Пользователь ввел имя в странном регистре: let badName = "аНаСтАсИя";. Напиши код (используя методы строк), который сделает первую букву заглавной, а все остальные — строчными. Ожидаемый результат: "Анастасия".

// let badName = "аНаСтАсИя";

// function fix(badName) {
//     let goodName = badName[0].toUpperCase() + badName.toLowerCase().slice(1);
//     return goodName
// }

// console.log(fix(badName));

// 23 Есть номер заказа let orderId = "42";. Системе нужно, чтобы номер всегда состоял из 5 символов. Заполни недостающие места нулями спереди (чтобы получилось "00042").

// let orderId = "42";

// console.log(orderId.padStart(5 , "0"));

// 24. Для печати чека нужно, чтобы название товара и цена красиво выстраивались в линию. У нас есть строка let item = "Хлеб";. Сделай так, чтобы после слова шли точки, а общая длина строки составляла 15 символов (ожидаемый результат: "Хлеб...........").

// let item = "Хлеб";

// console.log(item.padEnd(15, "."));

// 25. Дан email адрес: let email = "student@gmail.com";. Тебе нужно извлечь только доменное имя (всё, что идет после символа @).

// let email = "student@gmail.com";

// function domenName(email) {
//     let simbol = email.search("@")
//     let domen = email.slice(simbol +)
//     return domen
// }

// console.log(domenName(email));

// 26. Пользователь должен был ввести свое имя, но, возможно, оставил поле пустым или ввел одни пробелы: let input = " ";. 
// Выведи "Ошибка: пустое поле", иначе — "Имя принято".

// let input = " ";

// let noSpaces = input.trim()

// if(noSpaces.length == 0) {
//     alert("Ошибка: пустое поле")
// } else {
//     alert("Имя принято")
// }

// 27. Дано полное имя пользователя: let fullName = "Иван Петров";. Напиши код, который получит первую букву имени, добавит к ней точку, затем первую букву фамилии и тоже добавит точку. Ожидаемый результат: "И. П."

// let fullName = "Иван Петров"

// function initials(fullName) {
//     let firstLetter = fullName[0]
//     let secondLatter = fullName.search(" ")
//     let initialsLog = firstLetter + "." + " " + fullName.substr(secondLatter + 1, 1) + "."
//     return initialsLog
// }

// console.log(initials(fullName));

// 28. Для создания ссылок на статьи пробелы заменяют на дефисы, а все буквы делают строчными. Дана строка let title = " Как выучить JavaScript быстро ";. Напиши код, который уберет пробелы по краям, переведет всё в нижний регистр и заменит все оставшиеся пробелы на дефисы. Ожидаемый результат: "как-выучить-javascript-быстро".
// let title = " Как выучить JavaScript быстро ";

// function editTitle(title) {
//     return title.trim().toLowerCase().replaceAll(" ", "-")
// }

// console.log(editTitle(title));

// 29. Палиндром — это фраза, которая читается одинаково слева направо и справа налево (без учета пробелов и регистра). Дана строка let phrase = "А роза упала на лапу Азора";. Напиши код, который вернет true, если это палиндром.

// let phrase = "А роза упала на лапу Азора";

// function polindromPhrase(phrase) {
//     let lowerCasePhrase = phrase.toLowerCase().replaceAll(" ", "")
//     let reversPhrase = phrase.toLowerCase().replaceAll(" ", "").split().reverse().join()
    
//     if (lowerCasePhrase === reversPhrase) {
//         alert("true")
//     } else {
//         alert("false")
//     }
// }
// console.log(polindromPhrase(phrase));

// 30. Дан текст let text = "каждый охотник желает знать";. Сделай так, чтобы каждое слово начиналось с заглавной буквы.

// let text = "каждый охотник желает знать";

// function textCapitalise(text) {
//     let arr = text.split(" ")
//     for(let l of arr) {
//         let newArr = arr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
//         return newArr.join(" ")
//     }
// }

// console.log(textCapitalise(text));

// 31. Дана строка let sentence = "Программирование - это просто!";. Напиши код, который посчитает, сколько раз в этой строке встречается буква "о" (без учета регистра).