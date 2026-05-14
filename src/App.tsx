/** @format */

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("Russian");

  return (
    <div className="min-h-screen justify-center font-nunito bg-[#0a0a0f]">
      <Header
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      <Hero selectedLanguage={selectedLanguage} />

      <Experience />
    </div>
  );
}

export default App;
