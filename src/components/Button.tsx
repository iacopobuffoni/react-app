import { useState } from "react";

function Button() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Aumenta contatore
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Diminuisci contatore
      </button>
      <p> Il contatore sta a {counter}</p>
    </>
  );
}

export default Button;
