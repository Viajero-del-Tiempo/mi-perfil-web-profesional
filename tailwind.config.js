/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--md-sys-color-primary)",
        "on-primary": "var(--md-sys-color-on-primary)",
        "primary-container": "var(--md-sys-color-primary-container)",
        "on-primary-container": "var(--md-sys-color-on-primary-container)",
        "primary-fixed": "var(--md-sys-color-primary-fixed)",
        "on-primary-fixed": "var(--md-sys-color-on-primary-fixed)",
        "primary-fixed-dim": "var(--md-sys-color-primary-fixed-dim)",
        "on-primary-fixed-variant": "var(--md-sys-color-on-primary-fixed-variant)",
        
        "secondary": "var(--md-sys-color-secondary)",
        "on-secondary": "var(--md-sys-color-on-secondary)",
        "secondary-container": "var(--md-sys-color-secondary-container)",
        "on-secondary-container": "var(--md-sys-color-on-secondary-container)",
        "secondary-fixed": "var(--md-sys-color-secondary-fixed)",
        "on-secondary-fixed": "var(--md-sys-color-on-secondary-fixed)",
        "secondary-fixed-dim": "var(--md-sys-color-secondary-fixed-dim)",
        "on-secondary-fixed-variant": "var(--md-sys-color-on-secondary-fixed-variant)",

        "tertiary": "var(--md-sys-color-tertiary)",
        "on-tertiary": "var(--md-sys-color-on-tertiary)",
        "tertiary-container": "var(--md-sys-color-tertiary-container)",
        "on-tertiary-container": "var(--md-sys-color-on-tertiary-container)",
        "tertiary-fixed": "var(--md-sys-color-tertiary-fixed)",
        "on-tertiary-fixed": "var(--md-sys-color-on-tertiary-fixed)",
        "tertiary-fixed-dim": "var(--md-sys-color-tertiary-fixed-dim)",
        "on-tertiary-fixed-variant": "var(--md-sys-color-on-tertiary-fixed-variant)",

        "error": "var(--md-sys-color-error)",
        "on-error": "var(--md-sys-color-on-error)",
        "error-container": "var(--md-sys-color-error-container)",
        "on-error-container": "var(--md-sys-color-on-error-container)",

        "background": "var(--md-sys-color-background)",
        "on-background": "var(--md-sys-color-on-background)",
        "surface": "var(--md-sys-color-surface)",
        "on-surface": "var(--md-sys-color-on-surface)",
        "surface-variant": "var(--md-sys-color-surface-variant)",
        "on-surface-variant": "var(--md-sys-color-on-surface-variant)",
        "surface-tint": "var(--md-sys-color-surface-tint)",

        "inverse-surface": "var(--md-sys-color-inverse-surface)",
        "inverse-on-surface": "var(--md-sys-color-inverse-on-surface)",
        "inverse-primary": "var(--md-sys-color-inverse-primary)",

        "outline": "var(--md-sys-color-outline)",
        "outline-variant": "var(--md-sys-color-outline-variant)",
        "surface-dim": "var(--md-sys-color-surface-dim)",
        "surface-bright": "var(--md-sys-color-surface-bright)",
        "surface-container-lowest": "var(--md-sys-color-surface-container-lowest)",
        "surface-container-low": "var(--md-sys-color-surface-container-low)",
        "surface-container": "var(--md-sys-color-surface-container)",
        "surface-container-high": "var(--md-sys-color-surface-container-high)",
        "surface-container-highest": "var(--md-sys-color-surface-container-highest)",
        
        "sage-accent": "#ACCFAE"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem"
      },
      spacing: {
        "unit": "8px",
        "margin-desktop": "64px",
        "gutter": "24px",
        "max-width": "1280px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-md": ["JetBrains Mono", "monospace"],
        "code-sm": ["JetBrains Mono", "monospace"],
        "title-md": ["Hanken Grotesk", "sans-serif"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "display-lg": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "body-md": ["14px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["16px", { lineHeight: "28px", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "title-md": ["18px", { lineHeight: "24px", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "display-lg": ["57px", { lineHeight: "64px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "code-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }]
      }
    },
  },
  plugins: [],
}
