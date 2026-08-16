import { translations } from "../i18n/translations";
import transitionImg from "../assets/images/DePLCaGenAI.png";

export default function Hero({ lang }) {
  const t = translations[lang].hero;

  return (
    <section
      id="home"
      className="w-full max-w-max-width px-margin-mobile md:px-margin-desktop mb-[120px] pt-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col gap-6 pt-12 md:pt-0">
          <div className="flex flex-col gap-2">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest border-l-2 border-primary pl-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse inline-block"></span>
              {t.badge}
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-2 tracking-tight">
              {t.title}
            </h1>
            <h2 className="font-title-md text-title-md md:font-headline-lg md:text-headline-lg text-on-surface-variant leading-snug">
              {t.subtitle}
            </h2>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            {t.bio}
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary dark:bg-primary-fixed text-on-primary dark:text-on-primary-fixed px-8 py-3 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-surface-tint dark:hover:bg-primary-fixed-dim transition-all shadow-sm hover:shadow-md border border-transparent active:scale-95"
            >
              {t.viewProjects}
              <span className="material-symbols-outlined text-sm">
                arrow_downward
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/arnaldojavierguerrero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent text-primary dark:text-primary-fixed-dim border border-outline px-8 py-3 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-surface-variant dark:hover:bg-surface-container-highest hover:border-outline-variant transition-all active:scale-95"
            >
              {t.linkedin}
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Image with Blueprint Accent */}
        <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
          <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 blur-3xl rounded-full transform -translate-x-1/4 -translate-y-1/4 z-0"></div>

          <div className="relative z-10 bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(125,118,103,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] p-2 transition-all duration-300 hover:border-primary/50">
            <img
              alt="Transition from Industrial Systems to AI"
              className="w-full h-auto rounded-lg object-cover grayscale mix-blend-multiply dark:mix-blend-normal opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100 border border-outline/20"
              src={transitionImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
