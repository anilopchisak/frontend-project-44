import gameDataGen from './game-data-layout.js';
import getRandomNumber from './get-random-number.js';
import index from '../src/index.js';

// генерация чисел для игры
const genData = () => {
  const num = getRandomNumber(0, 100);
  return { expression: num, rightAnswer: num % 2 === 0 ? 'yes' : 'no' };
};

const gameEven = () => {
  // сборка данных для игры
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  // вызов функции-интерфейса для создания данных в формате объекта
  const gameEvenData = gameDataGen(rules, genData);

  return gameEvenData;
};

// вызывается интерфейс для игры Brain-Even
// передаются данные об игре: правила игры, числа для определения четности, правильные ответы
export default () => index(gameEven());
