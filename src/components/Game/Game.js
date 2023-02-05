import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const initGuesses = range(1, NUM_OF_GUESSES_ALLOWED).map((i) => {
    return {
      value: "",
      key: i,
    };
  });

  const [guesses, setGuesses] = React.useState(initGuesses);
  const [numGuesses, setNumGuesses] = React.useState(0);

  const addGuess = (guess) => {
    if (numGuesses === 5) {
      return;
    }

    const guessObj = {
      value: guess,
      key: numGuesses + 1,
    };

    const nextGuesses = [...guesses];
    nextGuesses[numGuesses] = guessObj;
    setGuesses(nextGuesses);
    setNumGuesses(numGuesses + 1);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
