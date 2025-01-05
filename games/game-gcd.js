import {gameDataGen} from "./game-layout.js";

export const gameGcd = () => {
    // сборка данных для игры
    const rules = "Find the greatest common divisor of given numbers.";

    // вызов функции-интерфейса для создания данных в формате объекта
    const gameGcdData = gameDataGen(rules, genData);

    return gameGcdData;
}

// генерация чисел для игры
const genData = () => {
    const num1 = Math.round(Math.random() * 200 - 100);
    const num2 = Math.round(Math.random() * 200 - 100);
    let rightAnswer = euclideanAlgorithm(num1, num2);

    return {expression: `${num1} ${num2}`, rightAnswer: rightAnswer};
}

// алгоритм вычисления НОД
const euclideanAlgorithm = (num1, num2) => {
    let a = Math.abs(num1);
    let b = Math.abs(num2);

    // Если одно из чисел равно 0, возвращаем другое
    if (a === 0) return b;
    if (b === 0) return a;

    // Алгоритм Евклида с использованием деления с остатком
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}