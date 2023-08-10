import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./theme/theme.config";
import { GlobalStyles } from "./theme/globalStyles";
import { AppContext } from "./context/contextApi";

function App() {
  const { theme } = useContext(AppContext);
  const themeType = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={themeType}>
        <GlobalStyles $isDark={theme === "dark"} />
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
