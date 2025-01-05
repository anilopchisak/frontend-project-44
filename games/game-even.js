import { gameDataGen } from './game-layout.js';

export const gameEven = () => {
  // сборка данных для игры
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  // вызов функции-интерфейса для создания данных в формате объекта
  const gameEvenData = gameDataGen(rules, genData);

  return gameEvenData;
};

// генерация чисел для игры
const genData = () => {
  const num = Math.floor(Math.random() * 100);
  return { expression: num, rightAnswer: num % 2 === 0 ? 'yes' : 'no' };
};
