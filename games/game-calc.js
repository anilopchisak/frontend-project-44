import {gameDataGen} from "./game-layout.js";

// сборка данных для игры
export const gameCalc = () => {
    const rules = "What is the result of the expression?";
    const operators = ['+', '-', '*'];
    
    // вызов функции-интерфейса для создания данных в формате объекта
    const gameCalcData = gameDataGen(rules, genData, operators);

    return gameCalcData;
}

// генерация выражений для игры
const genData = (operators) => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = operators[Math.floor(Math.random() * 3)];
    let rightAnswer = null;

    switch (operator) {
        case('+'):
            rightAnswer = num1 + num2;
            break;

        case('-'):
            rightAnswer = num1 - num2;
            break;

        case('*'):
            rightAnswer = num1 * num2;
            break;
    }

    return {expression: `${num1} ${operator} ${num2}`, rightAnswer: rightAnswer};
}