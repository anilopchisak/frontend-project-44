#!/usr/bin/env node

import { index } from '../src/index.js';
import { gameGcd } from '../games/game-gcd.js';

// вызывается интерфейс для игры Brain-Gcd
// передаются данные об игре: правила игры, числа для поиска НОД, правильные ответы
index(gameGcd());
