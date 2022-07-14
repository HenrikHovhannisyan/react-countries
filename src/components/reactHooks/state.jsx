import React, { useState } from "react";
import Footer from "../leyout/footer";
import Header from "../leyout/header";

const State = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p>{count}</p>
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          disabled={count >= 5}
        >
          Increment +
        </button>
        <br />
        <button
          onClick={() => setCount((prevCount) => prevCount - 1)}
          disabled={count <= 0}
        >
          Decrement -
        </button>
      </div>
      <Footer/>
    </>
  );
};

export default State;
