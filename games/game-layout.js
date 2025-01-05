export const gameDataGen = (rules, genData, params = null) => {

  let gameData = {
    rules,
    question: []
  };

  for (let i = 0; i < 3; i++) {
    !params ? gameData.question.push(genData()) : gameData.question.push(genData(params));
  }

  return gameData;
};
