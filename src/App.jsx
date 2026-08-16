import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackgroundSection from "./components/BackgroundSection";
import FeaturedProject from "./components/FeaturedProject";
import GithubProjects from "./components/GithubProjects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import CaseStudyModal from "./components/CaseStudyModal";
import fondoImg from "./assets/images/fondo.png";

export default function App() {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem("lang") || "es";
  });

  const [darkMode, setDarkModeState] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const setDarkMode = (isDark) => {
    setDarkModeState(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container transition-colors duration-300 relative">
      
      {/* Background Image Layer with 5% Opacity */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-repeat opacity-5 mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundImage: `url(${fondoImg})`,
          backgroundSize: 'auto',
        }}
      ></div>

      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Container */}
      <main className="relative z-10 pt-28 md:pt-32 pb-24 min-h-screen flex flex-col items-center">
        <Hero lang={lang} />
        <BackgroundSection lang={lang} />
        <FeaturedProject
          lang={lang}
          onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
        />
        <GithubProjects lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        lang={lang}
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />
    </div>
  );
}
