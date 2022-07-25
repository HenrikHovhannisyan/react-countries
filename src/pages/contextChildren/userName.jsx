import React, { useContext } from "react";
import { UserNameContext } from "../../components/reactHooks/context";

const UserName = () => {
  const { name, handlerInput, setInputHandler } = useContext(UserNameContext);
  return (
    <>
      <div>
        <p>{name}</p>
      </div>
      <div style={{marginBottom: '15px'}}>
        <input type="text" onChange={(e) => setInputHandler(e.target.value)} />
        <button type="submit" onClick={(e) => handlerInput(e)}>
          Submit
        </button>
      </div>
    </>
  );
};

export default UserName;
