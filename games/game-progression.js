import gameDataGen from './game-data-layout.js';
import getRandomNumber from './get-random-number.js';

// генерация прогрессии для игры
const createProgression = () => {
  const progression = [];

  // длина прогрессии от 5 до 10
  const progressionLength = getRandomNumber(5, 10);

  // шаг от 1 до 10
  const step = getRandomNumber(1, 10);

  // первый элемент от 0 до 100
  const first = getRandomNumber(0, 100);

  // индекс скрытого элемента всегда меньше длины прогрессии
  const hiddenElementIndex = getRandomNumber(0, progressionLength);

  // рассчет элементов прогрессии
  for (let i = 0; i < progressionLength; i += 1) {
    // если элемент должен быть скрытым
    if (hiddenElementIndex === i) {
      progression[i] = '..';
    } else progression[i] = first + step * i;
  }

  const rightAnswer = first + step * hiddenElementIndex;

  return { progression, rightAnswer };
};

// генерация прогрессии для игры
const genData = () => {
  const result = createProgression();
  let expression = '';

  // склейка прогрессии в строку
  for (let i = 0; i < result.progression.length; i += 1) {
    expression += `${result.progression[i]} `;
  }

  return { expression, rightAnswer: result.rightAnswer };
};

const gameProgression = () => {
  // сборка данных для игры
  const rules = 'What number is missing in the progression?';

  // вызов функции-интерфейса для создания данных в формате объекта
  const gameProgressionData = gameDataGen(rules, genData);

  return gameProgressionData;
};

export default gameProgression;
