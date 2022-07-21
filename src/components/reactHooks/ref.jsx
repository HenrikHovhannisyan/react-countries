import React, { useRef, useState } from "react";
import { Container } from "@mui/system";
import Footer from "../layout/footer";
import Header from "../layout/header";

const Ref = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const countRef = useRef(0);

  const buttonFocus = () => {
    inputRef.current.focus();
  };

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <button onClick={() => buttonFocus()}>Focus to input</button>
        <div
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            style={{
              width: "50%",
              height: "30px",
            }}
          />

          {console.log("I rendered!")}
          <h2>Open Console</h2>
          <p>Clicked {count} times</p>
          <div>
            <button onClick={handle}>Click me</button>
            <button onClick={() => setCount(countRef.current)}>
              Get clicked
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Ref;
