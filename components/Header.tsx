import ActiveLink from "./ActiveLink";
import ThemeController from "./ThemeController";
import { useLanguage } from "@/contexts/LanguageContext";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { asPath } = useRouter();

  return (
    <header className="sticky top-0 z-50">
      <Disclosure
        as="nav"
        key={asPath}
        className="oneui-nav px-6 py-4 shadow-oneui"
        aria-label="Main navigation"
      >
        {({ open }) => (
          <>
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

                <div className="hidden sm:flex items-center gap-2">
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
              </div>

              {/* Controls - Right Side */}
              <div className="flex items-center gap-2">
                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="p-3 rounded-oneui-sm bg-base-200 hover:bg-base-300 transition-all duration-300 flex items-center gap-2"
                  aria-label={
                    language === "ko" ? "Switch to English" : "한국어로 전환"
                  }
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

                {/* Mobile menu button */}
                <Disclosure.Button
                  className="sm:hidden p-3 rounded-oneui-sm bg-base-200 hover:bg-base-300 transition-all duration-300"
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  {open ? (
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
                      <path d="M18 6 6 18" />
                      <path d="M6 6 18 18" />
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
                      <path d="M4 6h16" />
                      <path d="M4 12h16" />
                      <path d="M4 18h16" />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>

            {/* Mobile Panel */}
            <Disclosure.Panel className="sm:hidden">
              <div className="max-w-6xl mx-auto mt-3 pt-3 border-t border-base-300/60 flex flex-col gap-2">
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;