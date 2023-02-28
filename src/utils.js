import { ANSWER, MAX_WORD_LENGTH } from "./constants";

function initializeAsIncorrect(char, index) {
  return {
    char,
    pos: index,
    status: "incorrect",
    evaluated: false,
  };
}

function checkPrediciton(prediction = "") {
  let letters = ANSWER.split("");
  const empty = "".repeat(MAX_WORD_LENGTH, " ");

  const checkResults = prediction.split("").map(initializeAsIncorrect);

  const setCorrectResults = (result, index) => {
    const areEqual = result.char === letters[result.pos];

    if (areEqual) {
      checkResults.splice(index, 1, {
        ...result,
        status: "correct",
        evaluated: true,
      });
      letters.splice(result.pos, 1, empty);
    }
  };

  const setIncongruentResults = (results, letters) => {
    results.forEach((result) => {
      const index = letters.findIndex((letter) => letter === result.char);
      if (index >= 0) {
        letters.splice(index, 1, empty);
        return checkResults.splice(result.pos, 1, {
          ...result,
          status: "incongruent",
          evaluated: true,
        });
      }
    });
  };

  checkResults.forEach(setCorrectResults);

  const notEvaluated = checkResults.filter(
    (result) => result.evaluated === false
  );

  const notEmptyLetters = letters.filter((letter) => letter !== empty);

  setIncongruentResults(notEvaluated, notEmptyLetters);

  return checkResults;
}

export { checkPrediciton, initializeAsIncorrect };
