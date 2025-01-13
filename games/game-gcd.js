import getRandomNumber from './get-random-number.js';
import brainGamesInterface from '../src/index.js';

// алгоритм вычисления НОД
const euclideanAlgorithm = (num1, num2) => {
  let a = Math.abs(num1);
  let b = Math.abs(num2);

  // Если одно из чисел равно 0, возвращаем другое
  if (a === 0) return b;
  if (b === 0) return a;

  // Алгоритм Евклида с использованием деления с остатком
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

// генерация чисел для игры
const genGameGcdData = () => {
  const num1 = getRandomNumber(-100, 100);
  const num2 = getRandomNumber(-100, 100);
  const rightAnswer = euclideanAlgorithm(num1, num2);

  return { expression: `${num1} ${num2}`, rightAnswer };
};

const getGameGcdData = () => {
  // сборка данных для игры
  const rules = 'Find the greatest common divisor of given numbers.';

  return { getData: genGameGcdData, rules };
};

// вызывается интерфейс для игры Brain-Gcd
export default () => brainGamesInterface(getGameGcdData());
