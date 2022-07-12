import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>{count}</p>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        disabled={count >= 5 ? true : false}
      >
        Increment +
      </button>
      <br />
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
        disabled={count <= 0 ? true : false}
      >
        Decrement -
      </button>
    </div>
  );
};

export default State;
