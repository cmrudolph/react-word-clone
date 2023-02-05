import React from "react";

function GuessInput() {
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

    console.log(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Za-z]"
        onChange={(evt) => updateGuess(evt.target.value)}
      />
    </form>
  );
}

export default GuessInput;
