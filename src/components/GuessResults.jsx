import React from "react";
import { v4 as uuidv4 } from "uuid";

function GuessCell({ prediction }) {
  return (
    <li className="cells">
      {prediction.map((result) => (
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
