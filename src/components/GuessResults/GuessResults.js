import React from "react";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ key, value }) => (
        <Guess key={key} value={value} />
      ))}
    </div>
  );
}

export default GuessResults;
