import ActiveLink from "./ActiveLink";
import ThemeController from "./ThemeController";
import { useLanguage } from "@/contexts/LanguageContext";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { asPath } = useRouter();
  const [isHiddenOnScroll, setIsHiddenOnScroll] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastY;
      const shouldHide = isScrollingDown && currentY > 96;

      setIsHiddenOnScroll(shouldHide);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 px-4 pt-4 md:px-6 transition-transform duration-300 ${
        isHiddenOnScroll ? "-translate-y-[calc(100%+1.25rem)]" : "translate-y-0"
      }`}
    >
      <Disclosure
        as="nav"
        key={asPath}
        className="oneui-header-shell"
        aria-label="Main navigation"
      >
        {({ open }) => (
          <>
            <div className="oneui-header-inner">
              <div className="oneui-brand-wrap">
                <ActiveLink
                  activeClassName="oneui-brand-active"
                  className="oneui-brand"
                  href="/"
                >
                  <span className="oneui-brand-dot" aria-hidden="true" />
                  <span className="oneui-brand-text">zeroday0619</span>
                </ActiveLink>

                <div className="oneui-nav-segment hidden sm:flex">
                  <ActiveLink
                    activeClassName="oneui-nav-tab-active"
                    className="oneui-nav-tab"
                    href="/outsourcing"
                  >
                    <span>{t("외주", "Outsourcing")}</span>
                  </ActiveLink>
                  <a
                    href="https://cv.zeroday0619.dev/"
                    className="oneui-nav-tab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>CV</span>
                  </a>
                </div>
              </div>

              <div className="oneui-utility-wrap">
                <button
                  onClick={toggleLanguage}
                  className="oneui-control-btn"
                  aria-label={
                    language === "ko" ? "Switch to English" : "한국어로 전환"
                  }
                >
                  <span className="oneui-control-icon" aria-hidden="true">
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </span>
                  <span className="oneui-control-label hidden sm:inline">
                    {t("언어", "Language")}
                  </span>
                  <span className="oneui-chip-group" aria-hidden="true">
                    <span className={`oneui-chip ${language === "ko" ? "is-active" : ""}`}>
                      KO
                    </span>
                    <span className={`oneui-chip ${language === "en" ? "is-active" : ""}`}>
                      EN
                    </span>
                  </span>
                </button>

                {/* Theme Controller */}
                <ThemeController />

                <Disclosure.Button
                  className="oneui-menu-btn sm:hidden"
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

            <Disclosure.Panel className="sm:hidden oneui-mobile-panel">
              <div className="oneui-mobile-list">
                <ActiveLink
                  activeClassName="oneui-mobile-link-active"
                  className="oneui-mobile-link"
                  href="/outsourcing"
                >
                  <span>{t("외주", "Outsourcing")}</span>
                </ActiveLink>
                <a
                  href="https://cv.zeroday0619.dev/"
                  className="oneui-mobile-link"
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