import React from "react";
import { v4 as uuidv4 } from "uuid";
import checkPrediciton from "../utils";

function GuessCell({ prediction }) {
  const predictionResults = checkPrediciton(prediction);

  return (
    <li className="cells">
      {predictionResults.map((result) => (
        <span key={uuidv4()} className={`cell ${result.status}`}>
          {result.char}
        </span>
      ))}
    </li>
  );
}

function GuessResults({ predictions }) {
  return (
    <ol className="guess-results">
      {predictions.map((prediction) => (
        <GuessCell key={uuidv4()} prediction={prediction} />
      ))}
    </ol>
  );
}

export default GuessResults;