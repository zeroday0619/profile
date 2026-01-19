import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // OneUI Color System
        oneui: {
          // Primary Blue
          primary: "#0381FE",
          "primary-dark": "#0067D9",
          "primary-light": "#4BA3FF",
          // Background colors
          "bg-light": "#F7F7F7",
          "bg-dark": "#000000",
          // Surface colors
          "surface-light": "#FFFFFF",
          "surface-dark": "#1C1C1E",
          // Focus block colors
          "focus-light": "#F0F0F0",
          "focus-dark": "#2C2C2E",
          // Text colors
          "text-primary-light": "#000000",
          "text-primary-dark": "#FFFFFF",
          "text-secondary-light": "#666666",
          "text-secondary-dark": "#8E8E93",
          // Informative colors
          success: "#34C759",
          warning: "#FF9500",
          error: "#FF3B30",
          info: "#5AC8FA",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "Pretendard", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        "oneui": "26px",
        "oneui-sm": "16px",
        "oneui-lg": "32px",
        "oneui-xl": "40px",
      },
      boxShadow: {
        "oneui": "0 2px 8px rgba(0, 0, 0, 0.08)",
        "oneui-md": "0 4px 16px rgba(0, 0, 0, 0.1)",
        "oneui-lg": "0 8px 32px rgba(0, 0, 0, 0.12)",
      },
      spacing: {
        "oneui-xs": "8px",
        "oneui-sm": "12px",
        "oneui-md": "16px",
        "oneui-lg": "24px",
        "oneui-xl": "32px",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        oneui: {
          "primary": "#0381FE",
          "primary-content": "#FFFFFF",
          "secondary": "#5AC8FA",
          "secondary-content": "#000000",
          "accent": "#34C759",
          "accent-content": "#FFFFFF",
          "neutral": "#1C1C1E",
          "neutral-content": "#FFFFFF",
          "base-100": "#FFFFFF",
          "base-200": "#F7F7F7",
          "base-300": "#E5E5EA",
          "base-content": "#000000",
          "info": "#5AC8FA",
          "info-content": "#000000",
          "success": "#34C759",
          "success-content": "#FFFFFF",
          "warning": "#FF9500",
          "warning-content": "#000000",
          "error": "#FF3B30",
          "error-content": "#FFFFFF",
          "--rounded-box": "26px",
          "--rounded-btn": "16px",
          "--rounded-badge": "12px",
          "--tab-radius": "12px",
        },
        "oneui-dark": {
          "primary": "#4BA3FF",
          "primary-content": "#000000",
          "secondary": "#5AC8FA",
          "secondary-content": "#000000",
          "accent": "#34C759",
          "accent-content": "#000000",
          "neutral": "#2C2C2E",
          "neutral-content": "#FFFFFF",
          "base-100": "#000000",
          "base-200": "#1C1C1E",
          "base-300": "#2C2C2E",
          "base-content": "#FFFFFF",
          "info": "#5AC8FA",
          "info-content": "#000000",
          "success": "#34C759",
          "success-content": "#000000",
          "warning": "#FF9500",
          "warning-content": "#000000",
          "error": "#FF3B30",
          "error-content": "#FFFFFF",
          "--rounded-box": "26px",
          "--rounded-btn": "16px",
          "--rounded-badge": "12px",
          "--tab-radius": "12px",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    logs: true,
    themeRoot: ":root"
  }
} satisfies Config;
