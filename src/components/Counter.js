import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  return (
    <div>
      <h2 data-testid="header">Counter</h2>
      <p data-testid="count">{count}</p>
      <button data-testid="inc" onClick={increment}> + </button>
      <button data-testid="dec" onClick={decrement}> - </button>
    </div>
  );
}
