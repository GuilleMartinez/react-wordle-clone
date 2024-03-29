import React, { useRef, useState } from "react";
import { INITIAL_STATE, ANSWER, MAX_ATTEMPS } from "../constants";
import { checkPrediciton } from "../utils";

import GuessForm from "./GuessForm";
import GuessResults from "./GuessResults";
import GameMessage from "./GameMessage";

function Wordle() {
  const [predictions, setPredictions] = useState(INITIAL_STATE);

  const game = useRef({ winner: false, finished: false });

  const attemps = useRef(0);

  const updateGameStatus = (word) => {
    const guesses = [...predictions];

    guesses[attemps.current] = checkPrediciton(word);

    attemps.current += 1;

    if (ANSWER === word) game.current = { winner: true, finished: true };
    else if (MAX_ATTEMPS <= attemps.current) game.current.finished = true;

    setPredictions(guesses);
  };

  return (
    <>
      <h1 className="text-centered">Let's play spanish wordle!</h1>
      <GuessResults predictions={predictions} />
      <GuessForm
        updateGameStatus={updateGameStatus}
        stopPlaying={game.current.winner || game.current.finished}
      />
      {game.current.finished && (
        <GameMessage winner={game.current.winner} attemps={attemps.current} />
      )}
    </>
  );
}

export default Wordle;
