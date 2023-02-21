import React from "react";
import { useState } from "react";
import { MAX_WORD_LENGTH } from "../constants";

function GuessForm({ validatePrediction, stopPlaying }) {
  
  const [userGuess, setUserGuess] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const submittedData = new FormData(event.target);
    const word = submittedData.get("user-prediction");
    validatePrediction(word);
    setUserGuess("");
  };

  const changeHandler = ({ target: input }) => {
    const upperInput = input.value.toUpperCase();
    setUserGuess(upperInput);
  };

  return (

    <form
      autoComplete="OFF"
      method="POST"
      onSubmit={submitHandler}
    >
      <fieldset disabled={stopPlaying}>
        <legend>Required Inputs</legend>
        <label htmlFor="user-prediction">Your Prediction:</label>
        <input
          type="text"
          id="user-prediction"
          name="user-prediction"
          pattern={`[A-Z]{${MAX_WORD_LENGTH}}`}
          title="Five letters word"
          value={userGuess}
          onInput={changeHandler}
          required
        />

        <button type="submit"> Check yoour guess</button>

      </fieldset>
    </form>
  );
}

export default GuessForm;
