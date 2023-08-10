import React, { useState } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <AppContext.Provider value={{ theme, handleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
