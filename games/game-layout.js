const gameDataGen = (rules, genData, params = null) => {
  const gameData = {
    rules,
    question: [],
  };

  for (let i = 0; i < 3; i += 1) {
    if (!params) {
      gameData.question.push(genData());
    } else {
      gameData.question.push(genData(params));
    }
  }

  return gameData;
};

export default gameDataGen;
