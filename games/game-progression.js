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
    const progressionLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // длина прогрессии от 5 до 10 
    const step = Math.floor(Math.random() * 10) + 1; // шаг от 1 до 10
    const first = Math.round(Math.random() * 100); // первый элемент от 0 до 100

    // индекс скрытого элемента всегда меньше длины прогрессии
    const hiddenElementIndex = Math.floor(Math.random() * progressionLength);

    // рассчет элементов прогрессии
    for (let i = 0; i < progressionLength; i++) {
        // если элемент должен быть скрытым
        if (hiddenElementIndex === i) {
            progression[i] = '..';
        }
        else progression[i] = first + step * i;
    }

    const rightAnswer = first + step * hiddenElementIndex;

    return {progression: progression, rightAnswer: rightAnswer};
}