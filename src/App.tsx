/** @format */

import { useEffect, useState } from "react";

import "./App.css";
import Lenis from "lenis";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import TechStack from "./components/Techstack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
// import Projects from "./components/Projects";
import { ThemeProvider } from "./context/ThemeContext";

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
    <ThemeProvider>
      <div className="min-h-screen justify-center font-nunito bg-(--bg-primary)">
        <Header
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />

        <Hero selectedLanguage={selectedLanguage} />

        <Experience number="02" />

        <TechStack number="03" />

        {/* <Projects number="04" /> */}

        <Education number="04" />

        <Contact number="05" />

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
