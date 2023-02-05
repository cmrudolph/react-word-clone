import React from "react";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  const updateGuess = (raw) => {
    if (raw.length > 5) {
      return;
    }

    const allowed = /^[A-Za-z]+$/;
    if (!raw.match(allowed)) {
      return;
    }

    setGuess(raw.toUpperCase());
  };

  const submit = (evt) => {
    evt.preventDefault();
    if (guess.length !== 5) {
      return;
    }

    addGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(evt) => updateGuess(evt.target.value)}
      />
    </form>
  );
}

export default GuessInput;
