import Image from "next/image";
import SVG from "@/components/Logos";
import { useLanguage } from "@/contexts/LanguageContext";

const INTRO_PARAGRAPHS = {
  ko: [
    "오픈소스에 열정을 가진 Ubuntu Member로서 Ubuntu 커뮤니티에 적극적으로 기여하고 있으며, Ubuntu Korea LoCo 포럼의 운영진으로 활동하며 커뮤니티 내 협업과 지식 공유를 지원하고, GitHub 및 다양한 협업 플랫폼을 통해 오픈소스 프로젝트에 코드 기여를 하면서 특히 가속 컴퓨팅을 포함한 컴퓨터 과학 분야에 깊은 관심을 가지고 있습니다.",
  ],
  en: [
    "As an open-source enthusiast and Ubuntu Member, I actively contribute to the Ubuntu community, serve as a moderator for the Ubuntu Korea LoCo forum to support collaboration and knowledge sharing, and contribute code to open-source projects via GitHub and other platforms with a strong interest in computer science, particularly accelerated computing.",
  ],
} as const;

const CONTACT_LINKS = [
  { href: "https://github.com/zeroday0619", logo: "github", label: "GitHub" },
  { href: "https://linkedin.com/in/euiseo-cha", logo: "linkedin", label: "LinkedIn" },
  { href: "mailto:euiseo.cha@gmail.com", logo: "mail", label: "Email" },
] as const;

const Home = () => {
  const { language, t } = useLanguage();
  const paragraphs = INTRO_PARAGRAPHS[language];

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section - OneUI Style with viewing area at top */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Profile Card */}
          <div className="oneui-card p-8 md:p-12 oneui-animate-fade-in">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl" />
                <Image
                  src="/images/profile.jpg"
                  alt="Euiseo Cha profile photo"
                  width={280}
                  height={280}
                  className="relative rounded-full shadow-oneui-lg ring-4 ring-base-200"
                  priority
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
                  {t("차의서", "Euiseo Cha")}
                </h1>
                <p className="text-lg text-base-content/60 mb-6 font-medium">
                  Python Software Engineer
                </p>
                
                {/* Contact Buttons - Interaction area */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {CONTACT_LINKS.map(({ href, logo, label }) => (
                    <a
                      key={logo}
                      href={href}
                      className="flex items-center gap-2 px-5 py-3 rounded-oneui-sm bg-base-200 hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                      aria-label={label}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    >
                      <SVG logo={logo} width="20" height="20" />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Single Focus block */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 px-2">{t("소개", "About Me")}</h2>
          <div className="oneui-card p-8 oneui-animate-fade-in">
            <div className="space-y-4" style={{ wordBreak: "keep-all" }}>
              {paragraphs.map((text, index) => (
                <p 
                  key={index} 
                  className="text-base-content/80 leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;