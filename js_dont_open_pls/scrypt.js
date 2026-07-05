const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function startGame() {
    const guessNumber = parseInt(prompt("Угадайте число от 1 до 100:"));
    attempts++;

    if (guessNumber === targetNumber) {
        alert(`Поздравляем! Вы угадали число ${targetNumber} за ${attempts} попыток.`);
    } else {
        alert(guessNumber > targetNumber ? "Загаданное число меньше." : "Загаданное число больше.");
        startGame();
    }
}

