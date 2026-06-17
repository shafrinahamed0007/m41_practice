"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("This is Counter Page");
  const handleCountChange = async () => {};
  return (
    <div>
      <h2>Coun: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="btn bg-green-500">
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} className="btn bg-red-500">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
