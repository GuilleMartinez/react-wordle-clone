import React from "react";
import { ANSWER } from "../constants";

function GameMessage({ winner, attemps }) {

  const type = winner ? "correct" : "incorrect";
  const message =
    winner
      ? `Congrats! You did it in ${attemps} ${attemps > 1 ? "times" : "time"}`
      : `You lose! The answer was: ${ANSWER}. Try again 💪`

  return (
    <div className={`box ${type}`}>
       {message}
    </div>
  );
}

export default GameMessage;
