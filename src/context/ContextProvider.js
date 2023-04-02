import { createContext, useReducer, useState } from "react";

export const GameContext = createContext();

const reducerFn = (state, action) => {
  switch (action.type) {
    case `increase-level`: {
      return {
        ...state,
        level: state.level + 1,
      };
    }
    case `reset-context`: {
      return { level: 1, score: 0 };
    }
  }
};

export const ContextProvider = ({ children }) => {
  const [context, dispatch] = useReducer(reducerFn, { level: 1, score: 0 });
  const value = { context, dispatch };
  return (
    <>
      <GameContext.Provider value={value}>{children}</GameContext.Provider>
    </>
  );
};
