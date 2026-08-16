import { translations } from "../i18n/translations";

export default function BackgroundSection({ lang }) {
  const t = translations[lang].background;

  return (
    <section
      id="about"
      className="w-full max-w-max-width px-margin-mobile md:px-margin-desktop mb-[120px] scroll-mt-24"
    >
      <div className="relative group">
        {/* Ambient Glow Background Accent */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-tertiary/20 to-primary/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none -z-10"></div>

        {/* Main Card Container */}
        <div className="bg-surface-container-low dark:bg-surface-container border-2 border-primary/30 dark:border-primary/40 rounded-2xl p-8 md:p-14 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
          {/* Decorative Blueprint Corner Accent Geometries */}
          <div className="absolute top-0 right-0 w-80 h-80 border-l-2 border-b-2 border-primary/15 -mt-40 -mr-40 transform rotate-45 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-44 h-44 border-r-2 border-t-2 border-tertiary/15 -mb-20 -ml-20 transform rotate-45 pointer-events-none"></div>

          {/* Section Header with Badge */}
          <div className="flex flex-col gap-2 mb-8 relative z-10">
            <span className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim uppercase tracking-widest bg-primary-container/30 border border-primary/20 px-3.5 py-1.5 rounded-full w-fit flex items-center gap-2 font-bold shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block animate-pulse"></span>
              {t.badge}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Left Column: Title & Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center shadow-md shrink-0">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    schema
                  </span>
                </div>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight leading-tight">
                  {t.title}
                </h2>
              </div>

              {/* Highlight Differentiator Badges */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface dark:bg-surface-container-high border border-outline-variant/60 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary-container/40 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">
                      precision_manufacturing
                    </span>
                  </div>
                  <span className="font-title-md text-sm text-on-surface font-semibold">
                    {t.highlight1}
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface dark:bg-surface-container-high border border-outline-variant/60 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-tertiary-container/40 text-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">
                      psychology
                    </span>
                  </div>
                  <span className="font-title-md text-sm text-on-surface font-semibold">
                    {t.highlight2}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Body Paragraphs */}
            <div className="lg:col-span-7 font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-6 leading-relaxed border-t lg:border-t-0 lg:border-l border-outline-variant/60 pt-6 lg:pt-0 lg:pl-10">
              <p className="bg-surface/60 dark:bg-surface-container-high/60 p-4 rounded-xl border-l-4 border-primary text-on-surface font-medium shadow-sm">
                {t.p1}
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                {t.p2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
