import getRandomNumber from './get-random-number.js';
import brainGamesInterface from '../src/index.js';

// генерация выражений для игры
const genGameCalcData = () => {
  const operators = ['+', '-', '*'];
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
const getGameCalcData = () => {
  const rules = 'What is the result of the expression?';

  return { getData: genGameCalcData, rules };
};

// вызывается интерфейс для игры Brain-Calc
// передаются данные об игре: правила игры, выражения для вычисления, правильные ответы
export default () => brainGamesInterface(getGameCalcData());
