import React from "react";
import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map(({ key, value }) => (
        <Guess key={key} value={value} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
