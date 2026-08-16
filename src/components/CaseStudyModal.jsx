import { translations } from "../i18n/translations";

export default function CaseStudyModal({ isOpen, onClose, lang }) {
  if (!isOpen) return null;

  const t = translations[lang || "es"].caseStudyModal;

  const technologies = [
    "LangGraph",
    "Python",
    "FastAPI",
    "React",
    "React Konva",
    "jsPDF",
    "Tailwind CSS",
    "Pydantic",
    "Material Design 3",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-surface dark:bg-surface-container-high border-2 border-primary/30 dark:border-primary/40 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 md:p-10 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-on-surface-variant hover:text-on-surface bg-surface-container-high dark:bg-surface-container-highest rounded-full transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-2 mb-8 pr-12">
          <span className="font-label-md text-xs text-primary uppercase tracking-widest bg-primary-container/40 text-on-primary-container border border-primary/20 px-3.5 py-1 rounded-full w-fit font-bold">
            {t.badge}
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl text-on-surface font-bold">
            {t.title}
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="space-y-10 font-body-md text-on-surface-variant">
          
          {/* SECTION 1: BACKEND - 3 AGENTS & HITL */}
          <div className="bg-surface-container-low dark:bg-surface-container p-6 md:p-8 rounded-2xl border border-outline-variant/70 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  account_tree
                </span>
              </div>
              <h3 className="font-title-md text-xl text-on-surface font-bold">
                {t.backendTitle}
              </h3>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              {t.backendDesc}
            </p>

            <div className="grid grid-cols-1 gap-4">
              {/* Agent 1 */}
              <div className="bg-surface dark:bg-surface-container-high p-5 rounded-xl border border-outline-variant/60 shadow-sm">
                <div className="flex items-center gap-2 text-primary font-bold font-title-md text-base mb-2">
                  <span className="material-symbols-outlined text-lg">
                    psychology
                  </span>
                  <h4>{t.agent1Title}</h4>
                </div>
                <ul className="space-y-2 text-xs md:text-sm pl-2">
                  {t.agent1Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                        arrow_right
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agent 2 */}
              <div className="bg-surface dark:bg-surface-container-high p-5 rounded-xl border border-outline-variant/60 shadow-sm">
                <div className="flex items-center gap-2 text-primary font-bold font-title-md text-base mb-2">
                  <span className="material-symbols-outlined text-lg">
                    straighten
                  </span>
                  <h4>{t.agent2Title}</h4>
                </div>
                <ul className="space-y-2 text-xs md:text-sm pl-2">
                  {t.agent2Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                        arrow_right
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agent 3 */}
              <div className="bg-surface dark:bg-surface-container-high p-5 rounded-xl border border-outline-variant/60 shadow-sm">
                <div className="flex items-center gap-2 text-primary font-bold font-title-md text-base mb-2">
                  <span className="material-symbols-outlined text-lg">
                    payments
                  </span>
                  <h4>{t.agent3Title}</h4>
                </div>
                <ul className="space-y-2 text-xs md:text-sm pl-2">
                  {t.agent3Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                        arrow_right
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 2: FRONTEND - CAD MOTOR & WEB SUITE */}
          <div className="bg-surface-container-low dark:bg-surface-container p-6 md:p-8 rounded-2xl border border-outline-variant/70 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  draw
                </span>
              </div>
              <h3 className="font-title-md text-xl text-on-surface font-bold">
                {t.frontendTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.frontendFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-surface dark:bg-surface-container-high p-4 rounded-xl border border-outline-variant/60 shadow-sm flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 text-primary font-bold font-title-md text-sm">
                    <span className="material-symbols-outlined text-lg">
                      {feat.icon}
                    </span>
                    <h4>{feat.name}</h4>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3: TECH STACK PILLS */}
          <div className="border-t border-outline-variant/60 pt-6">
            <h4 className="font-label-md text-xs text-secondary uppercase tracking-wider mb-4 font-bold">
              {t.techTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-surface-variant dark:bg-surface-container-highest text-on-surface-variant px-3.5 py-1.5 rounded-full font-code-sm text-xs border border-outline-variant/50 shadow-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-outline-variant/60 flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary text-on-primary px-7 py-3 rounded-full font-label-md text-xs uppercase tracking-wider hover:bg-surface-tint transition-all font-bold shadow-sm active:scale-95"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
