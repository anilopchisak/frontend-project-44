#!/usr/bin/env node

import {greeting} from "../src/cli.js";
import readlineSync from 'readline-sync';

const name = greeting();

console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

var numOfTry = 0;
while(numOfTry < 3) {
    const num = Math.floor(Math.random() * 100);
    const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (rightAnswer === answer) {
        numOfTry = numOfTry + 1;
        console.log("Correct!");
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
        numOfTry = -1;
        break;
    }
}

if (numOfTry === 3) {
    console.log(`Congratulations, ${name}!`);
}

