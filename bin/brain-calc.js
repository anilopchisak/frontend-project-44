#!/usr/bin/env node

import { index } from "../src/index.js";
import { gameCalc } from "../games/game-calc.js";

// вызывается интерфейс для игры Brain-Calc
// передаются данные об игре: правила игры, выражения для вычисления, правильные ответы
index(gameCalc());