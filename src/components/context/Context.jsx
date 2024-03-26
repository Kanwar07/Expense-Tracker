import React, { createContext } from "react";

export const data = createContext();

function Contextdata({ children }) {
  return <data.Provider value={{}}>{children}</data.Provider>;
}

export default Contextdata;
