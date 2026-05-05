/** @format */

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("Russian");

  return (
    <div className="App min-h-screen justify-center">
      <Header
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      <Hero selectedLanguage={selectedLanguage} />
    </div>
  );
}

export default App;
