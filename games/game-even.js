import getRandomNumber from './get-random-number.js';
import brainGamesInterface from '../src/index.js';

// генерация чисел для игры
const genGameEvenData = () => {
  const num = getRandomNumber(0, 100);
  return { expression: num, rightAnswer: num % 2 === 0 ? 'yes' : 'no' };
};

// сборка данных для игры
const getGameEvenData = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  return { getData: genGameEvenData, rules };
};

// вызывается интерфейс для игры Brain-Even
// передаются данные об игре: правила игры, числа для определения четности, правильные ответы
export default () => brainGamesInterface(getGameEvenData());
