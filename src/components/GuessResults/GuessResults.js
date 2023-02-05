import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ key, value }) => (
        <p className="guess" key={key}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
