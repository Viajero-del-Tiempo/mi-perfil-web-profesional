import { translations } from "../i18n/translations";

export default function GithubProjects({ lang }) {
  const t = translations[lang].githubProjects;

  const repos = [
    {
      name: "presupuestador-tableros-backend",
      url: "https://github.com/Viajero-del-Tiempo/presupuestador-tableros-backend",
      description:
        lang === "es"
          ? "Presupuestador de Tableros Eléctricos con IA - Backend (Python & LangGraph)"
          : "AI-Powered Electrical Panel Estimator - Backend (Python & LangGraph)",
      language: "Python",
      langColor: "#3572A5",
      icon: "terminal",
      stars: "Public",
      updated: "Aug 2026",
    },
    {
      name: "presupuestador-tableros-frontend",
      url: "https://github.com/Viajero-del-Tiempo/presupuestador-tableros-frontend",
      description:
        lang === "es"
          ? "Presupuestador de Tableros Eléctricos con IA - Frontend (JavaScript & React)"
          : "AI-Powered Electrical Panel Estimator - Frontend (JavaScript & React)",
      language: "JavaScript",
      langColor: "#f1e05a",
      icon: "web",
      stars: "Public",
      updated: "Aug 2026",
    },
    {
      name: "hodie-tienda",
      url: "https://github.com/Viajero-del-Tiempo/hodie-tienda",
      description:
        lang === "es"
          ? "Tienda online completa desarrollada con Angular y TypeScript"
          : "Full online store application built with Angular and TypeScript",
      language: "TypeScript",
      langColor: "#3178c6",
      icon: "shopping_bag",
      stars: "Public",
      updated: "Jul 2026",
    },
    {
      name: "hodie-node-app",
      url: "https://github.com/Viajero-del-Tiempo/hodie-node-app",
      description:
        lang === "es"
          ? "Aplicación backend con Node.js y Express para manejo de autenticación"
          : "Backend application with Node.js and Express handling user login & auth",
      language: "JavaScript",
      langColor: "#f1e05a",
      icon: "lock",
      stars: "Public",
      updated: "Jul 2026",
    },
    {
      name: "GNOME-Material-OS-Theme",
      url: "https://github.com/Viajero-del-Tiempo/GNOME-Material-OS-Theme",
      description:
        lang === "es"
          ? "Tema de escritorio GNOME basado en Material Design 3 (CSS)"
          : "GNOME Material Design desktop theme based on Material 3 specifications",
      language: "CSS",
      langColor: "#563d7c",
      icon: "palette",
      stars: "Public",
      updated: "Jul 2026",
    },
  ];

  return (
    <section
      id="github-repos"
      className="w-full max-w-max-width px-margin-mobile md:px-margin-desktop mb-24 scroll-mt-24"
    >
      <div className="flex flex-col gap-2 mb-8">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary inline-block"></span>
          {t.badge}
        </span>
        <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          {t.title}
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, idx) => (
          <a
            key={idx}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-low dark:bg-surface-container border border-outline-variant rounded-xl p-6 flex flex-col justify-between shadow-sm hover:border-primary/50 hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="material-symbols-outlined text-xl">
                    {repo.icon}
                  </span>
                  <span className="font-label-md text-xs uppercase px-2 py-0.5 rounded bg-primary-container/30 text-on-primary-container">
                    {repo.stars}
                  </span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant/60 group-hover:text-primary group-hover:translate-x-1 transition-all text-lg">
                  open_in_new
                </span>
              </div>

              <h3 className="font-title-md text-base text-on-surface group-hover:text-primary font-bold transition-colors mb-2 break-all">
                {repo.name}
              </h3>

              <p className="font-body-md text-sm text-on-surface-variant mb-6 line-clamp-3">
                {repo.description}
              </p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-outline-variant/40 font-code-sm text-xs">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ backgroundColor: repo.langColor }}
                ></span>
                <span className="text-on-surface font-medium">
                  {repo.language}
                </span>
              </div>
              <span className="text-on-surface-variant/70">{repo.updated}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
