import React from "react";

function Guess({ value }) {
  const chars = value?.length == 5 ? value.split("") : Array(5).fill("");

  return (
    <p className="guess">
      {chars.map((x, i) => (
        <span className="cell" key={i}>
          {x}
        </span>
      ))}
    </p>
  );
}

export default Guess;
