import { translations } from "../i18n/translations";
import avatarImg from "../assets/avatar.jpg";

export default function Footer({ lang }) {
  const t = translations[lang].footer;

  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-lowest w-full py-unit-margin-desktop border-t border-outline-variant flat no shadows">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6 py-6">
        <a
          href="#home"
          className="font-title-md text-title-md text-on-surface font-bold flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-0 shadow-sm group-hover:scale-105 transition-transform bg-surface-container">
            <img
              src={avatarImg}
              alt="Arnaldo Guerrero Avatar"
              className="w-full h-full rounded-full object-cover border-0"
            />
          </div>
          <span>Arnaldo Guerrero</span>
        </a>

        <div className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
          {t.copyright}
        </div>

        <div className="flex gap-6">
          <a
            className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 font-label-md text-label-md uppercase font-semibold"
            href="https://github.com/Viajero-del-Tiempo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 font-label-md text-label-md uppercase font-semibold"
            href="https://www.linkedin.com/in/arnaldojavierguerrero"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 font-label-md text-label-md uppercase font-semibold"
            href="mailto:arnaldojavierguerrero@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
