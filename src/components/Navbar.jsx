import { useState, useEffect } from "react";
import { translations } from "../i18n/translations";
import avatarImg from "../assets/avatar.jpg";

export default function Navbar({ lang, setLang, darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "github-repos",
        "skills",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: "#home", id: "home" },
    { name: t.about, href: "#about", id: "about" },
    { name: t.experience, href: "#experience", id: "experience" },
    { name: t.projects, href: "#projects", id: "projects" },
    { name: t.skills, href: "#skills", id: "skills" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 dark:bg-surface/95 backdrop-blur-md border-b border-outline-variant dark:border-outline shadow-sm py-2"
          : "bg-surface/90 dark:bg-surface/90 backdrop-blur-md border-b border-outline-variant dark:border-outline py-3"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 md:h-20 gap-4">
        {/* Profile Avatar (Completely Round, Larger, No Borders) */}
        <a
          href="#home"
          className="flex items-center group shrink-0"
          title="Arnaldo Guerrero - Profile"
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-0 shadow-md group-hover:scale-105 transition-transform duration-300 bg-surface-container">
            <img
              src={avatarImg}
              alt="Arnaldo Guerrero - Profile"
              className="w-full h-full rounded-full object-cover border-0"
            />
          </div>
        </a>

        {/* Desktop Navigation Links - Uniformly Distributed Across Center */}
        <div className="hidden md:flex flex-1 justify-evenly items-center max-w-3xl mx-auto px-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-title-md text-base transition-all duration-200 active:scale-95 py-1 relative ${
                  isActive
                    ? "text-primary dark:text-primary-fixed-dim font-bold"
                    : "text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-primary dark:bg-primary-fixed-dim rounded-full transition-all duration-300" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Controls: Language Switcher + Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-surface-container-high dark:bg-surface-container-highest rounded-full p-1 border border-outline-variant/50 font-label-md text-xs">
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                lang === "es"
                  ? "bg-primary text-on-primary font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                lang === "en"
                  ? "bg-primary text-on-primary font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              EN
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-surface-container-high dark:bg-surface-container-highest text-on-surface hover:bg-surface-variant transition-colors border border-outline-variant/50"
            title={darkMode ? "Modo Claro" : "Modo Oscuro"}
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-xl block">
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-2.5 py-1 text-xs font-label-md rounded-full bg-surface-container-high dark:bg-surface-container-highest text-on-surface border border-outline-variant font-bold"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-surface-container-high dark:bg-surface-container-highest text-on-surface"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-xl block">
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-on-surface p-2 rounded-lg hover:bg-surface-container-high transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low dark:bg-surface-container border-b border-outline-variant px-margin-mobile py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-title-md text-lg py-2 border-b border-outline-variant/30 ${
                  activeSection === link.id
                    ? "text-primary font-bold pl-2 border-l-4 border-l-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
