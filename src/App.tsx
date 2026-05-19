/** @format */

import { useEffect, useState } from "react";

import "./App.css";
import Lenis from "lenis";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import TechStack from "./components/Techstack";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("Russian");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,

      smoothWheel: true,
      syncTouch: false,

      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,

      infinite: false,

      lerp: 0.085,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen justify-center font-nunito bg-[#0a0a0f]">
      <Header
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      <Hero selectedLanguage={selectedLanguage} />

      <Experience />

      <TechStack />
    </div>
  );
}

export default App;
