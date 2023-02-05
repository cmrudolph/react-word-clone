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
  const initGuesses = range(1, NUM_OF_GUESSES_ALLOWED + 1).map((i) => {
    return {
      value: "",
      key: i,
    };
  });

  const [guesses, setGuesses] = React.useState(initGuesses);
  const [numGuesses, setNumGuesses] = React.useState(0);
  const [done, setDone] = React.useState(false);

  function HappyBanner() {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      </div>
    );
  }

  function SadBanner() {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  const addGuess = (guess) => {
    if (numGuesses === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const guessObj = {
      value: guess,
      key: numGuesses + 1,
    };

    const nextGuesses = [...guesses];
    const nextNumGuesses = numGuesses + 1;
    nextGuesses[numGuesses] = guessObj;
    setGuesses(nextGuesses);
    setNumGuesses(nextNumGuesses);

    const nextDone =
      nextNumGuesses === NUM_OF_GUESSES_ALLOWED ||
      nextGuesses[numGuesses].value === answer;

    console.log(
      nextNumGuesses,
      NUM_OF_GUESSES_ALLOWED,
      nextGuesses[numGuesses],
      answer,
      nextDone
    );

    setDone(nextDone);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} inProgress={!done} />
      {done &&
        (guesses[numGuesses - 1].value === answer
          ? HappyBanner()
          : SadBanner())}
    </>
  );
}

export default Game;
