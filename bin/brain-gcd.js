#!/usr/bin/env node

import { index } from "../src/index.js";
import { gameGcd } from "../games/game-gcd.js";


// вызывается интерфейс для игры Brain-Even
// передаются данные об игре: правила игры, числа для определения четности, правильные ответы
index(gameGcd());