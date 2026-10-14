import ActiveLink from "./ActiveLink";
import ThemeController from "./ThemeController";
import { useLanguage } from "@/contexts/LanguageContext";
import { Disclosure } from "@headlessui/react";

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        {t("본문으로 건너뛰기", "Skip to content")}
      </a>
      <Disclosure
        as="nav"
        className="site-navigation"
        aria-label={t("주요 탐색", "Main navigation")}
      >
        {({ open, close }) => (
          <>
            <div className="site-container site-navigation-inner">
              <ActiveLink
                activeClassName="site-brand-active"
                className="site-brand"
                href="/"
              >
                <span>zeroday0619</span>
              </ActiveLink>

              <div className="site-desktop-nav">
                <ActiveLink activeClassName="site-nav-link-active" className="site-nav-link" href="/">
                  {t("홈", "Home")}
                </ActiveLink>
                <a
                  href="https://cv.proxy.external.zeroday0619.dev"
                  className="site-nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV ↗
                </a>
              </div>

              <div className="site-controls">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="site-control-button"
                  aria-label={
                    language === "ko"
                      ? "언어를 영어(EN)로 변경"
                      : "Switch language to Korean (KO)"
                  }
                >
                  <span aria-hidden="true">{language === "ko" ? "EN" : "KO"}</span>
                </button>
                <ThemeController />
                <Disclosure.Button
                  className="site-menu-button"
                  aria-label={open ? t("메뉴 닫기", "Close menu") : t("메뉴 열기", "Open menu")}
                  onKeyDown={(event) => {
                    if (event.key === "Escape" && open) {
                      event.preventDefault();
                      close();
                    }
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    {open ? (
                      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    ) : (
                      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                  </svg>
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel
              className="site-mobile-panel"
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  event.preventDefault();
                  close();
                }
              }}
            >
              <div className="site-container site-mobile-list">
                <ActiveLink
                  activeClassName="site-mobile-link-active"
                  className="site-mobile-link"
                  href="/"
                  onClick={() => close()}
                >
                  {t("홈", "Home")}
                </ActiveLink>
                <a
                  href="https://cv.proxy.external.zeroday0619.dev"
                  className="site-mobile-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => close()}
                >
                  CV ↗
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
