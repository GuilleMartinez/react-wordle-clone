import { ANSWER } from "./constants";

function checkPrediciton(prediction = "") {
  
  const letters = prediction.split("");
  const result = [];


  const evaluate = (char, index) => {

    const areEqual = ANSWER[index] === char;
    const includesLetter = ANSWER.includes(char);

    const prevResult = result.some((result) => result.char === char);

    if (areEqual) result.push({ char, status: "correct" });
    else if (includesLetter && !prevResult)
      result.push({ char, status: "incongruent" });
    else result.push({ char, status: "incorrect" });
  };

  letters.forEach(evaluate);

  return result;
}

export default checkPrediciton;
