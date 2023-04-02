import { createContext, useState } from "react";

export const GameContext = createContext();

export const ContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const changeScore = (val) => {
    setScore(val);
  };
  const changeLevel = (val) => {
    setLevel(val);
  };
  return (
    <>
      <GameContext.Provider value={{ score, level, changeScore, changeLevel }}>
        {children}
      </GameContext.Provider>
    </>
  );
};
