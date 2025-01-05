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
    const first = Math.round(Math.random() * 100);
    const hiddenElementIndex = Math.round(Math.random() * progressionLength);
    let rightAnswer = first + step * hiddenElementIndex;

    // рассчет элементов прогрессии
    for (let i = 0; i < progressionLength; i++) {
        // если элемент должен быть скрытым
        if (hiddenElementIndex === i) {
            progression[i] = '..';
        }
        else progression[i] = first + step * i;
    }

    return {progression: progression, rightAnswer: rightAnswer};
}