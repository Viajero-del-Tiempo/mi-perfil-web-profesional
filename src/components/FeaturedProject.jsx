import { translations } from "../i18n/translations";
import featuredImg from "../assets/images/solicitudUsuario.png";

export default function FeaturedProject({ lang, onOpenCaseStudy }) {
  const t = translations[lang].featured;

  return (
    <section
      id="projects"
      className="w-full max-w-max-width px-margin-mobile md:px-margin-desktop mb-16 scroll-mt-24"
    >
      <div className="flex flex-col gap-2 mb-12">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
          {t.badge}
        </span>
        <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          {t.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Project Visual */}
        <div className="lg:col-span-7 bg-surface border border-outline-variant rounded-xl overflow-hidden relative shadow-[0_4px_20px_rgba(125,118,103,0.08)] group h-full min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-75"
            style={{
              backgroundImage: `url(${featuredImg})`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent dark:from-surface-container/95 dark:via-surface-container/40"></div>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-5 flex flex-col h-full bg-surface-container-low dark:bg-surface-container border border-outline-variant rounded-xl p-8 shadow-[0_4px_20px_rgba(125,118,103,0.04)]">
          <h3 className="font-title-md text-title-md text-on-surface mb-4">
            {t.subtitle}
          </h3>

          <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">
            {t.description}
          </p>

          <div className="flex flex-col gap-4 mt-auto">
            <h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider">
              {t.stackTitle}
            </h4>

            <div className="flex flex-wrap gap-2">
              <span className="bg-tertiary-fixed dark:bg-tertiary-container text-on-tertiary-fixed dark:text-on-tertiary-container px-3 py-1 rounded-full font-code-sm text-code-sm border border-outline/20">
                LangGraph
              </span>
              <span className="bg-tertiary-fixed dark:bg-tertiary-container text-on-tertiary-fixed dark:text-on-tertiary-container px-3 py-1 rounded-full font-code-sm text-code-sm border border-outline/20">
                AI Agents
              </span>
              <span className="bg-surface-variant dark:bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-code-sm text-code-sm border border-outline/20">
                Python
              </span>
              <span className="bg-surface-variant dark:bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-code-sm text-code-sm border border-outline/20">
                FastAPI
              </span>
              <span className="bg-surface-variant dark:bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-code-sm text-code-sm border border-outline/20">
                React
              </span>
            </div>

            <div className="mt-8 pt-6 border-t border-outline/20">
              <button
                onClick={onOpenCaseStudy}
                className="inline-flex items-center gap-2 text-primary dark:text-primary-fixed-dim hover:text-surface-tint font-label-md text-label-md uppercase tracking-wider transition-colors group cursor-pointer"
              >
                {t.viewCaseStudy}
                <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
