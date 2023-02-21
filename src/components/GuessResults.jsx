import React from "react";
import { v4 as uuidv4 } from "uuid";

function GuessCells({ letters }) {
  return (
    <li className="cell-container">
      {letters.map((letter) => (
        <span key={uuidv4()} className={`cell ${letter.status}`}>
          {letter.letter}
        </span>
      ))}
    </li>
  );
}

function GuessResults({ predictions }) {
  return (
    <ol className="guess-results">
      {predictions.map(({ evaluation }) => (
        <GuessCells key={uuidv4()} letters={evaluation.result} />
      ))}
    </ol>
  );
}

export default GuessResults;
