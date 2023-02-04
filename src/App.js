import { useState } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className="App font-[rubik] px-24"
      style={{ backgroundColor: theme == "light" ? "#f8f8f8" : "#212121" }}>
      <Navbar />
      <HomePage />
      <Skills />
    </div>
  );
}

export default App;
