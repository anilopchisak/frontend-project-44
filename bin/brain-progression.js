#!/usr/bin/env node

import { index } from "../src/index.js";
import { gameProgression } from "../games/game-progression.js";


// вызывается интерфейс для игры Brain-Progression
// передаются данные об игре: правила игры, прогрессии, правильные ответы
index(gameProgression());