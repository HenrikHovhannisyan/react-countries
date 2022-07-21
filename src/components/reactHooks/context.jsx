import React, { useState, createContext } from "react";
import Footer from "../layout/footer";
import Header from "../layout/header";
import ContextChildren from "../../pages/contextChildren";

export const UserNameContext = createContext();

const Context = () => {
  const [inputHandler, setInputHandler] = useState();
  const [name, setName] = useState("React Context");

  const handlerInput = (event) => {
    event.preventDefault();
    setName(inputHandler);
  };

  return (
    <>
      <Header />
      <UserNameContext.Provider value={{ name, handlerInput, setInputHandler }}>
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
