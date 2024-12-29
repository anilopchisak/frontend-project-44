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
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    let rightAnswer = euclideanAlgorithm(num1, num2);

    return {expression: `${num1} ${num2}`, rightAnswer: rightAnswer};
}

// алгоритм вычисления НОД
const euclideanAlgorithm = (num1, num2) => {
    let a = num1;
    let b = num2;

    while (a !== b) {
        if (a > b) a = a - b;
        else b = b - a;
    }

    return a;
}