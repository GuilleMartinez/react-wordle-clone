import React from "react";
import { useState } from "react";
import { MAX_WORD_LENGTH } from "../constants";

function GuessForm({ updateGameStatus, stopPlaying }) {
  
  const [userGuess, setUserGuess] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const submittedData = new FormData(event.target);
    const word = submittedData.get("user-prediction");
    updateGameStatus(word);
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
        <label htmlFor="user-prediction">Your prediction</label>
        <input
          type="text"
          id="user-prediction"
          name="user-prediction"
          pattern={`[A-Z]{${MAX_WORD_LENGTH}}`}
          title="Five letters word"
          value={userGuess}
          onInput={changeHandler}
          maxLength={MAX_WORD_LENGTH}
          required
        />

        <button type="submit"> Check</button>

      </fieldset>
    </form>
  );
}

export default GuessForm;
