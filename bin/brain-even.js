#!/usr/bin/env node

import { index } from "../src/index.js";
import {gameEven} from "../games/game-even.js";

// вызывается интерфейс для игры Brain-Even
// передаются данные об игре: правила игры, числа для определения четности, правильные ответы
index(gameEven());