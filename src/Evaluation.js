import { ANSWER, MAX_WORD_LENGTH } from "./constants";

class Evaluation {

  constructor(word) {
    this.word = word || " ".repeat(MAX_WORD_LENGTH);
    this.evaluation = this.#evaluate(word);
  }

  #evaluate() {

    const letters = this.word.split("");

    const test = (letter, index) => {
      if (ANSWER[index] === letter) return { letter, status: "success" };
      else if (ANSWER.includes(letter)) return { letter, status: "warning" };
      else return { letter, status: "info" };
    };

    const result = letters.map(test);
    const winner = result.every((letter) => letter.status === "success");

    return { result, winner };
  }
  
}

export default Evaluation;
