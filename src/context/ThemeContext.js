import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ColorContext = ({ children }) => {
  const [isTheme, setIsTheme] = useState(true);

  return (
    <ThemeContext.Provider
      value={{
        isTheme,
        setIsTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
