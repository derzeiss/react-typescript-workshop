import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  return {
    count,
    incrementCount: () => setCount(count + 1),
    decrementCount: () => setCount(count - 1),
    resetCount: () => setCount(0),
  };
};

export const Counter = () => {
  const { count, incrementCount, decrementCount, resetCount } = useCount();

  return (
    <div className="counter">
      <button className="secondary" onClick={decrementCount}>
        <h3>-</h3>
      </button>
      <h2>{count}</h2>
      <button className="secondary" onClick={incrementCount}>
        <h3>+</h3>
      </button>
      <br />
      <button className="tertiary" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
};
