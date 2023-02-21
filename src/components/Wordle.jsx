import React, { useRef, useState } from "react";
import { MAX_ATTEMPS } from "../constants";

import GuessForm from "./GuessForm";
import GuessResults from "./GuessResults";

import Evaluation from "../Evaluation";

const initialState = new Array(MAX_ATTEMPS).fill(new Evaluation());

function Wordle() {
  
  const [predictions, setPredictions] = useState(initialState);
  
  const game = useRef({ winner: false, stopPlaying: false });

  const attemp = useRef(0);

  const validatePrediction = (word) => {

    const test = new Evaluation(word);
    const haveAttemps = attemp.current < MAX_ATTEMPS;

    if (test.evaluation.winner) game.current = { winner: true, stopPlaying: true };
    else if (!haveAttemps) game.current = { winner: false, stopPlaying: true };

    
    const guesses = [...predictions];
    guesses[attemp.current] = test;

    attemp.current += 1;
    setPredictions(guesses);
      
  };

  return (
    <>
      <GuessResults predictions={predictions} attemp={attemp.current} />
      <GuessForm
        stopPlaying={game.current.stopPlaying}
        validatePrediction={validatePrediction} />
    </>
  );
}

export default Wordle;
