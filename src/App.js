import { useState } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { ThemeContext } from "./context";

function App() {
  const [theme, setTheme] = useState("light");
  

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="App font-[rubik] px-24"
        style={{ backgroundColor: theme == "light" ? "#f8f8f8" : "#212121" }}>
        <Navbar setTheme={setTheme} theme={theme}/>
        <HomePage />
        <Skills />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
