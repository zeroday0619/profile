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
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-base-100 border-t border-base-200">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-5 text-primary">
            {t("연락처", "Contacts")}
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {SOCIAL_LINKS.map(({ href, logo, label }) => (
              <a
                key={logo}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="p-3 rounded-full bg-base-200 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              >
                <SVG logo={logo} width="20" height="20" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-base-200 py-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-base-content/60">
            Copyright © {currentYear} zeroday0619. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;