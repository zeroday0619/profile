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
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="oneui-card p-6">
            <h3 className="text-lg font-bold mb-3 text-primary">
              {t("소개", "About")}
            </h3>
            <p className="text-base-content/70 leading-relaxed">
              Python Software Engineer
              <br />
              {t(
                "컴퓨터 과학 및 가속 컴퓨팅에 관심이 있습니다",
                "Interested in computer science and accelerated computing"
              )}
            </p>
          </div>

          {/* Social Links Section */}
          <div className="oneui-card p-6">
            <h3 className="text-lg font-bold mb-4 text-primary">
              {t("연결", "Connect")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ href, logo, label }) => (
                <a
                  key={logo}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="p-3 rounded-oneui-sm bg-base-200 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <SVG logo={logo} width="20" height="20" />
                </a>
              ))}
            </div>
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