import readlineSync from 'readline-sync';
import greeting from '../games/greeting.js';

// интерфейс игры
const brainGamesInterface = (game) => {
  // приветствие пользователя и запоминание имени
  const name = greeting();

  // правила игры
  console.log(game.rules);

  // счетчик попыток
  let stageCount = 0;

  while (stageCount < 3) {
    // генерируем данные для этапа в формате {expression, rightAnswer}
    const stageData = game.getData();

    // ответ пользователя (expression: `${num1} ${num2}`)
    const answer = readlineSync.question(`Question: ${stageData.expression}\nYour answer: `);

    if (stageData.rightAnswer.toString() === answer) {
      stageCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${stageData.rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainGamesInterface;
