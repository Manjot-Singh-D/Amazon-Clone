// 1. Setup Data layer
// 2. We need this to track basket.

import React, { createContext, useContext, useReducer } from "react";

//This is Data Layer
export const StateContext = createContext();

//Build a Provider
export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
