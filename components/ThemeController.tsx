"use client";

import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const ThemeController = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    themeChange(false);
    // Check initial theme
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setIsDark(currentTheme === "oneui-dark");
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? "oneui" : "oneui-dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-3 rounded-oneui-sm bg-base-200 hover:bg-base-300 transition-all duration-300 flex items-center gap-2"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-400"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
      <span className="text-sm font-medium hidden sm:inline">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
};

export default ThemeController;