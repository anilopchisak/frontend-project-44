import gameDataGen from './game-data-layout.js';
import getRandomNumber from './get-random-number.js';
import index from '../src/index.js';

// генерация выражений для игры
const genData = (operators) => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const operator = operators[getRandomNumber(0, 2)];
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

// вызывается интерфейс для игры Brain-Calc
// передаются данные об игре: правила игры, выражения для вычисления, правильные ответы
export default () => index(gameCalc());
