import { useState } from "react";
import { translations } from "../i18n/translations";

export default function Skills({ lang }) {
  const t = translations[lang].skills;
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: t.categories.all },
    { id: "ai", label: t.categories.ai },
    { id: "automation", label: t.categories.automation },
    { id: "software", label: t.categories.software },
  ];

  const skillGroups = [
    {
      category: "ai",
      title:
        lang === "es"
          ? "Generative AI & Orquestación de Agentes"
          : "Generative AI & Agentic Orchestration",
      icon: "psychology",
      skills: [
        "LangGraph & Multi-Agent Systems",
        "Pipelines Deterministas con LLMs",
        "Retrieval-Augmented Generation (RAG)",
        "Automatización de Flujos Cognitivos",
      ],
    },
    {
      category: "automation",
      title:
        lang === "es"
          ? "Automatización Industrial & Electromecánica"
          : "Industrial Automation & Electromechanical",
      icon: "hardware",
      skills: [
        "PLC Siemens & Lógica de Control",
        "Variadores de Velocidad (VFD) & Arrancadores",
        "Sistemas HMI / SCADA (Veolia, Praj)",
        "Instrumentación Industrial & HART (4-20 mA)",
        "Diseño de PCB & Neumática / Hidráulica",
      ],
    },
    {
      category: "software",
      title:
        lang === "es"
          ? "Desarrollo de Software Fullstack & Web"
          : "Fullstack & Web Software Development",
      icon: "code",
      skills: [
        "Python & FastAPI Microservicios",
        "JavaScript / TypeScript & React",
        "Angular & E-commerce Architecture",
        "Node.js & Autenticación REST APIs",
        "Material Design 3 & Tailwind CSS",
      ],
    },
  ];

  const filteredGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section
      id="skills"
      className="w-full max-w-max-width px-margin-mobile md:px-margin-desktop mb-24 scroll-mt-24"
    >
      {/* Header */}
      <div className="flex flex-col gap-2 mb-8">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
          {t.badge}
        </span>
        <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          {t.title}
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all duration-200 ${
              activeCategory === cat.id
                ? "bg-primary text-on-primary shadow-sm font-bold"
                : "bg-surface-container-high dark:bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid - Modern Authentic Chips without Percentages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {filteredGroups.map((group, gIdx) => (
          <div
            key={gIdx}
            className="bg-surface-container-low dark:bg-surface-container border border-outline-variant rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-outline-variant/40 pb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-container/40 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    {group.icon}
                  </span>
                </div>
                <h3 className="font-title-md text-lg text-on-surface font-bold">
                  {group.title}
                </h3>
              </div>

              <div className="space-y-3">
                {group.skills.map((skillName, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface dark:bg-surface-container-high border border-outline-variant/40 hover:border-primary/50 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                  >
                    <span className="material-symbols-outlined text-primary text-base shrink-0">
                      verified
                    </span>
                    <span className="text-on-surface font-medium text-sm">
                      {skillName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Box - Full Width */}
      <div className="bg-surface-container-low dark:bg-surface-container border border-outline-variant rounded-xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary-container/40 text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-2xl">
              school
            </span>
          </div>
          <h3 className="font-title-md text-lg text-on-surface font-bold">
            {t.educationTitle}
          </h3>
        </div>
        <div className="bg-surface dark:bg-surface-container-high border border-outline-variant/50 p-6 rounded-xl">
          <span className="font-label-md text-xs text-primary uppercase bg-primary-container/30 border border-primary/20 px-3 py-1 rounded-full w-fit block mb-3 font-bold">
            {t.education.subtitle}
          </span>
          <h4 className="font-title-md text-xl text-on-surface font-bold mb-2">
            {t.education.degree}
          </h4>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
            {t.education.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
