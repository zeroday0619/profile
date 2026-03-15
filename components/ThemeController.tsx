"use client";

import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const ThemeController = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    themeChange(false);
    const storedTheme = localStorage.getItem("theme");
    const resolvedTheme =
      storedTheme === "dark" || storedTheme === "oneui-dark"
        ? "dark"
        : storedTheme === "light" || storedTheme === "oneui"
          ? "light"
          : document.documentElement.getAttribute("data-theme") === "dark"
            ? "dark"
            : "light";

    document.documentElement.setAttribute("data-theme", resolvedTheme);
    localStorage.setItem("theme", resolvedTheme);
    setIsDark(resolvedTheme === "dark");
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={handleToggle}
      className="oneui-control-btn"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="oneui-control-icon" aria-hidden="true">
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        )}
      </span>
      <span className="oneui-control-label hidden sm:inline">Theme</span>
      <span className="oneui-chip-group" aria-hidden="true">
        <span className={`oneui-chip ${!isDark ? "is-active" : ""}`}>Light</span>
        <span className={`oneui-chip ${isDark ? "is-active" : ""}`}>Dark</span>
      </span>
    </button>
  );
};

export default ThemeController;