import { translations } from "../i18n/translations";

export default function Experience({ lang }) {
  const t = translations[lang].experience;

  const icons = ["factory", "build", "disc_full"];

  return (
    <section
      id="experience"
      className="w-full max-w-max-width px-margin-mobile md:px-margin-desktop mb-24 scroll-mt-24"
    >
      <div className="flex flex-col gap-2 mb-12">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary inline-block"></span>
          {t.badge}
        </span>
        <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          {t.title}
        </h2>
        <p className="font-body-md text-on-surface-variant font-semibold">
          {t.yearsExperience}
        </p>
      </div>

      <div className="relative border-l-2 border-outline-variant/60 dark:border-outline/40 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
        {t.jobs.map((job, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node icon */}
            <div className="absolute -left-[37px] md:-left-[53px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-container-high dark:bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-base md:text-lg">
                {icons[idx] || "work"}
              </span>
            </div>

            <div className="bg-surface-container-low dark:bg-surface-container border border-outline-variant rounded-xl p-6 md:p-8 shadow-sm hover:border-primary/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <span className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim bg-primary-container/30 px-3 py-1 rounded-full w-fit">
                  {job.period}
                </span>
                <span className="font-code-sm text-xs font-semibold text-secondary">
                  {job.company}
                </span>
              </div>

              <h3 className="font-title-md text-xl text-on-surface mb-2 font-bold">
                {job.role}
              </h3>

              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-surface-variant dark:bg-surface-container-highest text-on-surface-variant text-xs px-3 py-1 rounded-full font-code-sm border border-outline/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
