import { useState } from "react";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import UnControlled from "./components/Uncontroled";
import { ThemeContext } from "./context";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="App font-[rubik] px-4 lg:px-24"
        style={{ backgroundColor: theme === "light" ? "#f8f8f8" : "#212121" }}>
        <Navbar
          setTheme={setTheme}
          theme={theme}
        />
        {/* <UnControlled /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
