import React from "react";

import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  let results = checkGuess(value, answer);
  if (!results) {
    results = Array(5).fill({
      letter: "",
      status: null,
    });
  }

  return (
    <p className="guess">
      {results.map((x, i) => {
        const className = `cell ${x.status}`;

        return (
          <span className={className} key={i}>
            {x.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
