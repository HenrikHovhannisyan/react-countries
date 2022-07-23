import React from "react";
import UserName from "./userName";

const ContextChildren = () => {
  return <div style={{
    border: '1px solid tomato',
    width: '50%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  }}>
    <UserName />
  </div>;
};

export default ContextChildren;
