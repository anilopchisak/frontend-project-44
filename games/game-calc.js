import gameDataGen from './game-data-layout.js';

// генерация выражений для игры
const genData = (operators) => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operator = operators[Math.floor(Math.random() * 3)];
  let rightAnswer = null;

  switch (operator) {
    case ('+'):
      rightAnswer = num1 + num2;
      break;

    case ('-'):
      rightAnswer = num1 - num2;
      break;

    case ('*'):
      rightAnswer = num1 * num2;
      break;

    default:
      throw new Error('random operator generation error');
  }

  return { expression: `${num1} ${operator} ${num2}`, rightAnswer };
};

// сборка данных для игры
const gameCalc = () => {
  const rules = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];

  // вызов функции-интерфейса для создания данных в формате объекта
  const gameCalcData = gameDataGen(rules, genData, operators);

  return gameCalcData;
};

export default gameCalc;
