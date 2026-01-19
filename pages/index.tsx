import Image from "next/image";
import SVG from "@/components/Logos";
import { useLanguage } from "@/contexts/LanguageContext";

type Language = "ko" | "en";

type Project = {
  name: string;
  description: Record<Language, string>;
  features: Record<Language, readonly string[]>;
  links: {
    github?: string;
    crates?: string;
  };
  badge?: Record<Language, string>;
  private?: boolean;
};

type SkillCategory = {
  title: Record<Language, string>;
  items: readonly Record<Language, string>[];
};

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

const PROJECTS: readonly Project[] = [
  {
    name: "luksctl",
    description: {
      ko: "LUKS 암호화 볼륨을 쉽게 마운트/언마운트할 수 있는 Rust 기반 CLI 도구입니다.",
      en: "Rust-based CLI tool for easily mounting and unmounting LUKS encrypted volumes.",
    },
    features: {
      ko: [
        "UUID 기반 mapper 이름 자동 생성",
        "마운트 포인트 자동 생성",
        "다국어 지원",
      ],
      en: [
        "UUID-based mapper name auto-generation",
        "Auto-create mount points",
        "Multi-language support",
      ],
    },
    links: {
      github: "https://github.com/zeroday0619/luksctl",
      crates: "https://crates.io/crates/luksctl",
    },
  },
  {
    name: "koe-next",
    badge: {
      ko: "팀 프로젝트",
      en: "Team Project",
    },
    private: true,
    description: {
      ko: "엄격한 타입 힌트와 높은 타입 커버리지를 갖춘 Python 기반 Discord 텍스트-투-스피치 봇입니다.",
      en: "Python-based Discord text-to-speech bot with strict type hints and comprehensive type coverage.",
    },
    features: {
      ko: [
        "uv를 통한 의존성 관리",
        "ruff로 포매팅/린팅",
        "TDD 기반으로 견고하게 설계",
      ],
      en: [
        "Dependency management via uv",
        "Code formatting and linting with ruff",
        "Implemented test-driven development (TDD) approach",
      ],
    },
    links: {
      github: "https://github.com/discord-koe/koe-next",
    },
  },
  {
    name: "discordown",
    badge: {
      ko: "팀 프로젝트",
      en: "Team Project",
    },
    private: true,
    description: {
      ko: "Discord 마크다운 문법을 파싱하여 AST(Abstract Syntax Tree) 표현으로 변환합니다.",
      en: "Parses Discord markdown syntax and converts it to an Abstract Syntax Tree (AST) representation.",
    },
    features: {
      ko: [
        "엄격한 타입 힌트",
        "uv를 통한 의존성 관리",
        "ruff로 포매팅/린팅",
        "TDD 기반 개발",
      ],
      en: [
        "Strict type hints",
        "Dependency management via uv",
        "Formatting and linting with ruff",
        "TDD approach",
      ],
    },
    links: {
      github: "https://github.com/discord-koe/discordown",
    },
  },
];

const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: {
      ko: "언어",
      en: "Languages",
    },
    items: [
      {
        ko: "Python: 다년간의 프로젝트 경험",
        en: "Python: many years of experience.",
      },
      {
        ko: "Rust: 최근 가장 자주 사용하는 언어",
        en: "Rust: frequently used nowadays.",
      },
      {
        ko: "C/C++: 필요 시 충분히 다룰 수 있음",
        en: "C/C++: yes, I can handle this too.",
      },
      {
        ko: "Go: 필요 시 충분히 다룰 수 있음",
        en: "Go: yes, I can handle this too.",
      },
    ],
  },
  {
    title: {
      ko: "인프라",
      en: "Infrastructure",
    },
    items: [
      {
        ko: "Linux (Ubuntu, RHEL)",
        en: "Linux (Ubuntu, RHEL)",
      },
      {
        ko: "Docker",
        en: "Docker",
      },
      {
        ko: "LXD/LXC",
        en: "LXD/LXC",
      },
    ],
  },
  {
    title: {
      ko: "개발 방식",
      en: "Practices",
    },
    items: [
      {
        ko: "CI/CD (GitHub Actions)",
        en: "CI/CD (GitHub Action)",
      },
      {
        ko: "Security",
        en: "Security",
      },
    ],
  },
];

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

      {/* Skills Section */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 px-2">{t("기술", "Skills")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title.en} className="oneui-card p-6 oneui-animate-fade-in">
                <h3 className="text-lg font-bold mb-3 text-primary">
                  {category.title[language]}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-base-content/75 text-sm" style={{ wordBreak: "keep-all" }}>
                  {category.items.map((item, idx) => (
                    <li key={idx}>{item[language]}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 px-2">{t("프로젝트", "Projects")}</h2>
          <div className="space-y-4">
            {PROJECTS.map((project) => (
              <div key={project.name} className="oneui-card p-6 oneui-animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-primary">{project.name}</h3>
                      {project.badge && (
                        <span className="px-2 py-1 rounded-oneui-sm text-xs font-semibold bg-base-200 text-base-content/70">
                          {project.badge[language]}
                        </span>
                      )}
                      {project.private && (
                        <span className="px-2 py-1 rounded-oneui-sm text-xs font-semibold bg-warning/20 text-warning">
                          {t("비공개", "Private")}
                        </span>
                      )}
                    </div>
                    <p className="text-base-content/80 mb-3" style={{ wordBreak: "keep-all" }}>
                      {project.description[language]}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-base-content/70 text-sm">
                      {project.features[language].map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-disabled={project.private ? true : undefined}
                        className={
                          project.private
                            ? "flex items-center gap-2 px-4 py-2 rounded-oneui-sm bg-base-200 text-base-content/40 cursor-not-allowed text-sm font-medium"
                            : "flex items-center gap-2 px-4 py-2 rounded-oneui-sm bg-base-200 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium"
                        }
                        onClick={(e) => {
                          if (project.private) e.preventDefault();
                        }}
                      >
                        <SVG logo="github" width="16" height="16" />
                        GitHub
                      </a>
                    )}
                    {project.links.crates && (
                      <a
                        href={project.links.crates}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-oneui-sm bg-base-200 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium"
                      >
                        crates.io
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;