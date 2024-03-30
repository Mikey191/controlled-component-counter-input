import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
    console.log(count);
  }
  function decrement() {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Ink</button>
      <button onClick={decrement}>Dec</button>
    </div>
  );
};

export default Counter;