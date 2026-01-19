import ActiveLink from "./ActiveLink";
import ThemeController from "./ThemeController";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50">
      <nav 
        className="oneui-nav px-6 py-4 shadow-oneui" 
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo & Navigation - Left Side */}
          <div className="flex items-center gap-2">
            <ActiveLink
              activeClassName="bg-primary/10 text-primary"
              className="px-5 py-3 rounded-oneui-sm font-semibold text-lg transition-all duration-300 hover:bg-base-200"
              href="/"
            >
              <span className="font-bold">zeroday0619</span>
            </ActiveLink>
            <ActiveLink
              activeClassName="bg-primary/10 text-primary"
              className="px-5 py-3 rounded-oneui-sm font-medium transition-all duration-300 hover:bg-base-200"
              href="/outsourcing"
            >
              <span>{t("외주", "Outsourcing")}</span>
            </ActiveLink>
            <a
              href="https://cv.zeroday0619.dev/"
              className="px-5 py-3 rounded-oneui-sm font-medium transition-all duration-300 hover:bg-base-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>CV</span>
            </a>
          </div>
          
          {/* Controls - Right Side */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-3 rounded-oneui-sm bg-base-200 hover:bg-base-300 transition-all duration-300 flex items-center gap-2"
              aria-label={language === "ko" ? "Switch to English" : "한국어로 전환"}
            >
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
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="text-sm font-medium">
                {language === "ko" ? "EN" : "한"}
              </span>
            </button>
            
            {/* Theme Controller */}
            <ThemeController />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;