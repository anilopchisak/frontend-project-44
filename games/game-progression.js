import {gameDataGen} from "./game-layout.js";

export const gameProgression = () => {
    // сборка данных для игры
    const rules = "What number is missing in the progression?";

    // вызов функции-интерфейса для создания данных в формате объекта
    const gameProgressionData = gameDataGen(rules, genData);

    return gameProgressionData;
}

// генерация прогрессии для игры
const genData = () => {
    const result = createProgression();
    let expression = '';

    // склейка прогрессии в строку
    for (let i = 0; i < result.progression.length; i++) {
        expression += `${result.progression[i]} `;
    }

    return {expression: expression, rightAnswer: result.rightAnswer};
}

const createProgression = () => {
    const progression = [];
    const progressionLength = Math.round(Math.random() * (10 - 5) + 5);
    const step = Math.round(Math.random() * 10);
    const hiddenElement = Math.round(Math.random() * progressionLength);
    let rightAnswer = null;

    let tmp = 0;
    for (let i = 0; i < progressionLength; i++) {
        if (i === 0) { // генерируется первый элемент
            tmp = Math.round(Math.random() * 100);
            progression.push(tmp);
        }
        else {
            tmp = tmp + step;
            if (i === (hiddenElement - 1)) { // если элемент прогрессии должен быть скрытым
                progression.push('..');
                rightAnswer = tmp; // число скрытого элемента записывается в правильный ответ
            }
            else {
                progression.push(tmp);
            }
        }
    }

    return {progression: progression, rightAnswer: rightAnswer};
}