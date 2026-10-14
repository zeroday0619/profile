import Link from "next/link";
import SVG from "./Logos";
import { useLanguage } from "@/contexts/LanguageContext";

const SOCIAL_LINKS = [
  { href: "https://github.com/zeroday0619", logo: "github", label: "GitHub" },
  { href: "https://twitter.com/@dev_zeroday0619", logo: "twitter", label: "Twitter" },
  { href: "https://social.silicon.moe/@zeroday0619", logo: "mastodon", label: "Mastodon" },
  { href: "https://www.linkedin.com/in/euiseo-cha", logo: "linkedin", label: "LinkedIn" },
  { href: "mailto:euiseo.cha@gmail.com", logo: "mail", label: "Email" },
] as const;

const Footer = () => {
  const currentYear = new Date().getUTCFullYear();
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <section className="footer-brand-block" aria-labelledby="footer-brand-title">
          <h2 id="footer-brand-title">zeroday0619</h2>
          <p>
            {t(
              "오픈소스와 실용적인 시스템을 만드는 소프트웨어 엔지니어입니다.",
              "A software engineer building open-source and practical systems."
            )}
          </p>
        </section>

        <nav className="footer-column" aria-label={t("푸터 탐색", "Footer navigation")}>
          <h2>{t("탐색", "Explore")}</h2>
          <Link href="/">{t("홈", "Home")}</Link>
          <Link href="/nintendo-switch">Nintendo Switch</Link>
          <Link href="/pokemon-champions">Pokémon Champions</Link>
          <a href="https://cv.proxy.external.zeroday0619.dev" target="_blank" rel="noopener noreferrer">
            CV ↗
          </a>
        </nav>

        <section className="footer-column" aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title">{t("연락처", "Contacts")}</h2>
          <div className="footer-social-list">
            {SOCIAL_LINKS.map(({ href, logo, label }) => (
              <a
                key={logo}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              >
                <SVG logo={logo} width="18" height="18" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="site-container footer-legal">
        <p>Copyright © {currentYear} zeroday0619. All rights reserved.</p>
        <p>
          ©Pokémon/Nintendo/Creatures/GAME FREAK ·{" "}
          {t(
            "포켓몬스터, 포켓몬, Pokémon, Nintendo Switch는 Nintendo의 상표입니다.",
            "Pokémon and Nintendo Switch are trademarks of Nintendo."
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
