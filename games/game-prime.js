import getRandomNumber from './get-random-number.js';
import brainGamesInterface from '../src/index.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// генерация чисел для игры
const genGamePrimeData = () => {
  const num = getRandomNumber(0, 100);
  return { expression: num, rightAnswer: isPrime(num) === true ? 'yes' : 'no' };
};

const getGamePrimeData = () => {
  // сборка данных для игры
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  return { getData: genGamePrimeData, rules };
};

export default () => brainGamesInterface(getGamePrimeData());
