import { useState } from "react";
import { translations } from "../i18n/translations";

export default function ContactSection({ lang }) {
  const t = translations[lang].contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-max-width px-margin-mobile md:px-margin-desktop mb-24 scroll-mt-24"
    >
      <div className="bg-surface-container-low dark:bg-surface-container border border-outline-variant rounded-2xl p-8 md:p-14 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
              {t.badge}
            </span>
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              {t.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {t.desc}
            </p>

            <div className="flex flex-col gap-5 mt-2">
              {/* Email */}
              <div className="flex items-center gap-4 text-on-surface">
                <div className="w-10 h-10 rounded-full bg-surface-variant dark:bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <div className="font-label-md text-xs text-on-surface-variant uppercase">
                    {t.emailLabel}
                  </div>
                  <a
                    href="mailto:arnaldojavierguerrero@gmail.com"
                    className="font-title-md text-base hover:text-primary transition-colors font-bold break-all"
                  >
                    arnaldojavierguerrero@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 text-on-surface">
                <div className="w-10 h-10 rounded-full bg-surface-variant dark:bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <div className="font-label-md text-xs text-on-surface-variant uppercase">
                    {t.phoneLabel}
                  </div>
                  <a
                    href="tel:+595985930912"
                    className="font-title-md text-base hover:text-primary transition-colors font-bold"
                  >
                    {t.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 text-on-surface">
                <div className="w-10 h-10 rounded-full bg-surface-variant dark:bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <div className="font-label-md text-xs text-on-surface-variant uppercase">
                    {t.locationLabel}
                  </div>
                  <div className="font-title-md text-base font-bold">
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface dark:bg-surface-container-high border border-outline-variant rounded-xl p-6 md:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center text-3xl">
                  <span className="material-symbols-outlined text-4xl">
                    check_circle
                  </span>
                </div>
                <h3 className="font-headline-lg text-2xl text-on-surface font-bold">
                  {t.form.sentTitle}
                </h3>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  {t.form.sentDesc}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 bg-primary text-on-primary rounded-full font-label-md text-xs uppercase tracking-wider font-bold"
                >
                  {t.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block font-label-md text-xs text-on-surface-variant uppercase mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your Name"
                    className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors font-body-md"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-xs text-on-surface-variant uppercase mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@company.com"
                    className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors font-body-md"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-xs text-on-surface-variant uppercase mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your project..."
                    className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors font-body-md"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-primary text-on-primary py-3.5 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-surface-tint transition-all shadow-sm active:scale-95 font-bold"
                >
                  {t.form.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
