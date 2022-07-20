import React, { useState, createContext } from "react";
import Footer from "../leyout/footer";
import Header from "../leyout/header";
import ContextChildren from "../../pages/contextChildren";

export const UserNameContext = createContext();

const Context = () => {
  const [inputHandler, setInputHandler] = useState();
  const [name, setName] = useState("React Context");

  const hendlerInput = (event) => {
    event.preventDefault();
    setName(inputHandler);
  };

  return (
    <>
      <Header />
      <UserNameContext.Provider value={{ name, hendlerInput, setInputHandler }}>
        <div
          style={{
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ContextChildren />
        </div>
      </UserNameContext.Provider>
      <Footer />
    </>
  );
};

export default Context;
