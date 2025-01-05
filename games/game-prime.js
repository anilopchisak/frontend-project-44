import { gameDataGen } from './game-layout.js';

export const gamePrime = () => {
  // сборка данных для игры
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  // вызов функции-интерфейса для создания данных в формате объекта
  const gamePrimeData = gameDataGen(rules, genData);

  return gamePrimeData;
};

// генерация чисел для игры
const genData = () => {
  const num = Math.floor(Math.random() * 100);
  return { expression: num, rightAnswer: isPrime(num) === true ? 'yes' : 'no' };
};

const isPrime = (num) => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
};
