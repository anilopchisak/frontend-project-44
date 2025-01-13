import readlineSync from 'readline-sync';
import greeting from '../games/greeting.js';

// интерфейс игры
const index = (game) => {
  // приветствие пользователя и запоминание имени
  const name = greeting();

  // правила игры
  console.log(game.rules);

  // счетчик попыток
  let numOfTry = 0;

  while (numOfTry < 3) {
    // ответ пользователя (expression: `${num1} ${num2}`)
    const answer = readlineSync.question(`Question: ${game.question[numOfTry].expression}\nYour answer: `);

    if (game.question[numOfTry].rightAnswer.toString() === answer) {
      numOfTry += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${game.question[numOfTry].rightAnswer}'.\nLet's try again, ${name}!`);
      numOfTry = -1;
      return;
    }
  }
};

export default index;
