import "./styles.css";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Current Value {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setCounter(counter + 1);
          setCounter(counter + 1);
        }}
      >
        BULK INCREMENT
      </button>
    </div>
  );
}
