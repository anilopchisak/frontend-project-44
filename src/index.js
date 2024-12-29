import {greeting} from "../src/cli.js";
import readlineSync from 'readline-sync';

// интерфейс игры
export const index = (game) => {
    // приветствие пользователя и запоминание имени
    const name = greeting();
    
    // правила игры
    console.log(game.rules);
    
    // счетчик попыток
    let numOfTry = 0;
    
    while(numOfTry < 3) {
        // ответ пользователя
        const answer = readlineSync.question(`Question: ${game.question[numOfTry].expression}\nYour answer: `);
    
        if (game.question[numOfTry].rightAnswer == answer) {
            numOfTry = numOfTry + 1;
            console.log("Correct!");
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${game.question[numOfTry].rightAnswer}'.\nLet's try again, ${name}!`);
            numOfTry = -1;
            break;
        }
    }
    
    if (numOfTry === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}