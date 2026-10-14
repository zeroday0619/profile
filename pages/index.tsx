import Image from "next/image";
import Link from "next/link";
import SVG from "@/components/Logos";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { Button } from "@fluentui/react-components";

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
    "As an open-source enthusiast and Ubuntu Member, I actively contribute to the Ubuntu community. I also support collaboration and knowledge sharing as a moderator for the Ubuntu Korea LoCo forum.",
    "I contribute code through GitHub and other collaborative platforms, with a strong interest in computer science and accelerated computing.",
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
      ko: "LUKS 암호화 볼륨을 쉽게 마운트하고 언마운트하는 Rust 기반 CLI 도구입니다.",
      en: "A Rust-based CLI tool for easily mounting and unmounting LUKS encrypted volumes.",
    },
    features: {
      ko: ["UUID 기반 mapper 이름 자동 생성", "마운트 포인트 자동 생성", "다국어 지원"],
      en: ["UUID-based mapper names", "Automatic mount points", "Multi-language support"],
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
      ko: "엄격한 타입 힌트와 높은 타입 커버리지를 갖춘 Python 기반 Discord 텍스트 음성 변환 봇입니다.",
      en: "A Python Discord text-to-speech bot with strict type hints and comprehensive type coverage.",
    },
    features: {
      ko: ["uv 의존성 관리", "ruff 포매팅과 린팅", "테스트 주도 개발"],
      en: ["Dependency management with uv", "Formatting and linting with ruff", "Test-driven development"],
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
      ko: "Discord 마크다운 문법을 파싱해 추상 구문 트리 표현으로 변환합니다.",
      en: "A parser that converts Discord markdown syntax into an Abstract Syntax Tree representation.",
    },
    features: {
      ko: ["엄격한 타입 힌트", "uv 의존성 관리", "ruff 포매팅과 린팅", "테스트 주도 개발"],
      en: ["Strict type hints", "Dependency management with uv", "Formatting and linting with ruff", "Test-driven development"],
    },
    links: {
      github: "https://github.com/discord-koe/discordown",
    },
  },
];

const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: { ko: "언어", en: "Languages" },
    items: [
      { ko: "Python · 다년간의 프로젝트 경험", en: "Python · Years of project experience" },
      { ko: "Rust · 최근 가장 자주 사용하는 언어", en: "Rust · Frequently used today" },
      { ko: "C/C++ · 시스템 수준 개발", en: "C/C++ · Systems-level development" },
      { ko: "Go · 서비스와 도구 개발", en: "Go · Services and tooling" },
    ],
  },
  {
    title: { ko: "인프라", en: "Infrastructure" },
    items: [
      { ko: "Linux · Debian / Ubuntu / RHEL", en: "Linux · Debian / Ubuntu / RHEL" },
      { ko: "Docker · 컨테이너 환경", en: "Docker · Container environments" },
      { ko: "LXD/LXC · 시스템 컨테이너", en: "LXD/LXC · System containers" },
    ],
  },
  {
    title: { ko: "개발 방식", en: "Practices" },
    items: [
      { ko: "GitHub Actions 기반 CI/CD", en: "CI/CD with GitHub Actions" },
      { ko: "보안을 고려한 구현과 검토", en: "Security-minded implementation and review" },
    ],
  },
];

const Home = () => {
  const { language, t } = useLanguage();
  const paragraphs = INTRO_PARAGRAPHS[language];

  return (
    <>
      <SEO
        title="zeroday0619"
        description={t(
          "Python 소프트웨어 엔지니어 zeroday0619.",
          "Python software engineer zeroday0619."
        )}
        canonical="/"
        lang={language}
        image="/images/profile.jpg"
        imageAlt={t("Debian 행사 목걸이를 걸친 보라색 메타몽 인형", "Purple Ditto plush wearing a Debian event lanyard")}
      />

      <div className="page-shell">
        <section className="profile-hero" aria-labelledby="home-title">
          <div className="site-container profile-hero-grid">
            <div className="profile-hero-copy">
              <p className="page-kicker">Python Software Engineer</p>
              <h1 id="home-title">
                {t("오픈소스에서,", "Open source.")}
                <span>{t("실용적인 시스템까지.", "Practical systems.")}</span>
              </h1>
              <p className="profile-hero-summary">
                {t(
                  "Python과 Rust를 중심으로, 안정적인 소프트웨어와 오픈소스 생태계를 만듭니다.",
                  "I build reliable software and open-source ecosystems with Python and Rust."
                )}
              </p>
              <div className="button-row">
                <a className="button button-primary" href="mailto:euiseo.cha@gmail.com">
                  {t("연락하기", "Get in touch")}
                </a>
                <a className="arrow-link arrow-link-dark" href="#projects">
                  {t("프로젝트 보기", "View projects")} <span aria-hidden="true">→</span>
                </a>
              </div>
              <dl className="profile-hero-facts">
                <div><dt>{t("커뮤니티", "Community")}</dt><dd>Ubuntu Member · Debian</dd></div>
                <div><dt>{t("주요 기술", "Core stack")}</dt><dd>Python · Rust</dd></div>
                <div><dt>{t("위치", "Location")}</dt><dd>{t("서울 · UTC+9", "Seoul · UTC+9")}</dd></div>
              </dl>
            </div>

            <figure className="profile-hero-visual">
              <Image
                src="/images/profile.jpg"
                alt={t("Debian 행사 목걸이를 걸친 보라색 메타몽 인형", "Purple Ditto plush wearing a Debian event lanyard")}
                width={480}
                height={480}
                className="profile-image"
                sizes="(max-width: 767px) 240px, (max-width: 1023px) 320px, 400px"
                preload
              />
              <figcaption>zeroday0619.dev</figcaption>
            </figure>
          </div>
        </section>

        <section className="section" aria-labelledby="about-title">
          <div className="site-container editorial-grid">
            <header className="section-heading">
              <p className="page-kicker">{t("소개", "About")}</p>
              <h2 id="about-title">{t("커뮤니티와 코드 사이에서", "Between community and code")}</h2>
            </header>
            <div className="editorial-copy">
              {paragraphs.map((text) => <p key={text}>{text}</p>)}
            </div>
          </div>
        </section>

        <section className="section section-soft" aria-labelledby="experience-title">
          <div className="site-container experience-layout">
            <header className="section-heading">
              <p className="page-kicker">Work experience</p>
              <h2 id="experience-title">{t("업무 경험", "Work experience")}</h2>
              <p>
                {t(
                  "연구망 인프라 환경에서 실무 경험을 쌓았습니다.",
                  "Gained hands-on experience with research network infrastructure."
                )}
              </p>
            </header>

            <article className="experience-card">
              <div className="experience-primary">
                <p className="card-label">{t("이전 경력", "Past role")}</p>
                <h3>
                  {t(
                    "KISTI - 한국과학기술정보연구원",
                    "KISTI - Korea Institute of Science and Technology Information"
                  )}
                </h3>
              </div>

              <dl className="experience-meta">
                <div>
                  <dt>{t("직무", "Position")}</dt>
                  <dd>{t("인턴 · 인프라 / KREONET", "Intern · Infrastructure / KREONET")}</dd>
                </div>
                <div>
                  <dt>{t("근무지", "Location")}</dt>
                  <dd>{t("대전, 대한민국", "Daejeon, South Korea")}</dd>
                </div>
                <div>
                  <dt>{t("기간", "Duration")}</dt>
                  <dd>
                    <time dateTime="2026-07-22">{t("2026년 7월 22일", "July 22, 2026")}</time>
                    {" – "}
                    <time dateTime="2026-10-14">{t("2026년 10월 14일", "October 14, 2026")}</time>
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </section>

        <section className="section" aria-labelledby="contributions-title">
          <div className="site-container experience-layout">
            <header className="section-heading">
              <p className="page-kicker">{t("기여", "Contributions")}</p>
              <h2 id="contributions-title">{t("오픈소스 기여", "Open-source contributions")}</h2>
              <p>
                {t(
                  "Python 생태계의 호환성과 테스트 개선에 기여했습니다.",
                  "Contributed compatibility and testing improvements to the Python ecosystem."
                )}
              </p>
            </header>

            <article className="project-card" aria-labelledby="uvloop-contribution-title">
              <p className="card-label">uvloop (MagicStack)</p>
              <div className="project-heading">
                <h3 id="uvloop-contribution-title">{t("uvloop 기여자", "uvloop Contributor")}</h3>
                <div className="tag-row">
                  <span className="tag">{t("병합 완료", "Merged")}</span>
                </div>
              </div>
              <ul className="feature-list">
                <li>
                  {t(
                    "Python 3.11+ 호환성을 개선하는 수정에 기여했습니다.",
                    "Contributed fixes to improve compatibility with Python 3.11+."
                  )}
                </li>
                <li>
                  {t(
                    "Python 3.11 개발 버전을 테스트하도록 CI와 테스트 구성을 업데이트했습니다.",
                    "Updated CI and testing to cover Python 3.11 development versions."
                  )}
                </li>
              </ul>
              <div className="card-actions">
                <a className="button button-outline" href="https://github.com/MagicStack/uvloop" target="_blank" rel="noopener noreferrer">
                  <SVG logo="github" width="16" height="16" />
                  GitHub
                </a>
                <a
                  className="button button-outline"
                  href="https://github.com/MagicStack/uvloop/pull/473"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("uvloop 병합된 PR #473 보기", "View merged uvloop PR #473")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="6" cy="5" r="2" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="18" cy="19" r="2" />
                    <path d="M6 7v10M18 17v-3a4 4 0 0 0-4-4h-4L6 6" />
                  </svg>
                  PR #473
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section" aria-labelledby="activities-title">
          <div className="site-container">
            <header className="section-heading section-heading-wide">
              <div>
                <p className="page-kicker">Extra-curricular</p>
                <h2 id="activities-title">{t("커뮤니티와 행사 활동", "Community and event activities")}</h2>
              </div>
              <p>
                {t(
                  "Ubuntu와 Debian 커뮤니티에서 운영, 조정, 행사 조직을 맡고 있습니다.",
                  "Supporting Ubuntu and Debian communities through moderation and event organization."
                )}
              </p>
            </header>

            <div className="activity-grid">
              <a
                className="activity-card"
                href="https://wiki.ubuntu.com/Membership"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="card-label">Membership</p>
                <h3>Ubuntu Member</h3>
                <p>{t("Ubuntu 커뮤니티 공식 멤버", "Official Ubuntu community member")}</p>
                <span className="activity-card-action">
                  {t("멤버십 안내 보기", "View membership")} <span aria-hidden="true">↗</span>
                </span>
              </a>

              <a
                className="activity-card"
                href="https://disclosures.ubuntu-kr.org/organizers/gen7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="card-label">Community moderation</p>
                <h3>Ubuntu Korea Community</h3>
                <p>Community Moderation Team · Forum Moderator</p>
                <span className="activity-card-action">
                  {t("운영진 정보 보기", "View organizer profile")} <span aria-hidden="true">↗</span>
                </span>
              </a>

              <article className="activity-card">
                <p className="card-label">Conference organizing</p>
                <h3>UbuCon Korea</h3>
                <ul className="feature-list compact">
                  <li>UbuCon Korea 2025 Organizer</li>
                  <li>UbuCon Korea 2026 Organizer</li>
                </ul>
              </article>

              <article className="activity-card">
                <p className="card-label">Debian community events</p>
                <h3>MiniDebConf</h3>
                <ul className="feature-list compact">
                  <li>MiniDebConf Busan 2025 Team</li>
                  <li>MiniDebConf Korea 2026 Team · Chief Organizer</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-soft" aria-labelledby="skills-title">
          <div className="site-container">
            <header className="section-heading section-heading-wide">
              <div>
                <p className="page-kicker">{t("역량", "Capabilities")}</p>
                <h2 id="skills-title">{t("기술과 작업 방식", "Technology and practice")}</h2>
              </div>
              <p>{t("언어, 인프라, 품질 기준을 한 흐름으로 연결합니다.", "Connecting languages, infrastructure, and quality into one workflow.")}</p>
            </header>

            <div className="feature-grid">
              {SKILL_CATEGORIES.map((category, index) => (
                <article className="feature-card" key={category.title.en}>
                  <span className="card-index" aria-hidden="true">0{index + 1}</span>
                  <h3>{category.title[language]}</h3>
                  <ul className="feature-list">
                    {category.items.map((item) => <li key={item.en}>{item[language]}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <div className="site-container">
            <header className="section-heading section-heading-wide">
              <div>
                <p className="page-kicker">{t("선별 작업", "Selected work")}</p>
                <h2 id="projects-title">{t("프로젝트", "Projects")}</h2>
              </div>
              <p>{t("시스템 도구부터 Discord 기반 제품까지, 유지보수를 고려해 설계합니다.", "From system tools to Discord products, designed for maintainability.")}</p>
            </header>

            <div className="project-grid">
              {PROJECTS.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-heading">
                    <h3>{project.name}</h3>
                    <div className="tag-row">
                      {project.badge && <span className="tag">{project.badge[language]}</span>}
                      {project.private && <span className="tag tag-muted">{t("비공개", "Private")}</span>}
                    </div>
                  </div>
                  <p>{project.description[language]}</p>
                  <ul className="feature-list compact">
                    {project.features[language].map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <div className="card-actions">
                    {project.links.github && (
                      project.private ? (
                        <Button className="button button-disabled" type="button" disabled>
                          <SVG logo="github" width="16" height="16" />
                          {t("비공개 저장소", "Private repository")}
                        </Button>
                      ) : (
                        <a className="button button-outline" href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <SVG logo="github" width="16" height="16" />
                          GitHub
                        </a>
                      )
                    )}
                    {project.links.crates && (
                      <a className="arrow-link" href={project.links.crates} target="_blank" rel="noopener noreferrer">
                        crates.io <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-strip" aria-labelledby="contact-title">
          <div className="site-container contact-strip-grid">
            <div>
              <p className="page-kicker">{t("연결", "Connect")}</p>
              <h2 id="contact-title">{t("함께 만들 프로젝트가 있나요?", "Have a project to build together?")}</h2>
            </div>
            <div className="contact-actions">
              {CONTACT_LINKS.map(({ href, logo, label }) => (
                <a
                  className="button button-dark-outline"
                  key={logo}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                >
                  <SVG logo={logo} width="18" height="18" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft game-profile-section" aria-labelledby="game-profile-title">
          <div className="site-container profile-link-layout">
            <header className="section-heading">
              <p className="page-kicker">Play profiles</p>
              <h2 id="game-profile-title">{t("게임에서 연결하기", "Connect in games")}</h2>
              <p>
                {t(
                  "친구 코드와 트레이너 ID는 각 게임 프로필에서 확인할 수 있어요.",
                  "Find my friend code and trainer ID in their dedicated game profiles."
                )}
              </p>
            </header>

            <div className="profile-link-grid">
              <Link className="profile-link-card" href="/nintendo-switch">
                <p className="card-label">Nintendo account</p>
                <h3>Nintendo Switch</h3>
                <p>{t("친구 코드와 모바일 추가 링크", "Friend code and mobile add link")}</p>
                <span className="profile-link-card-action">
                  {t("프로필 보기", "View profile")} <span aria-hidden="true">→</span>
                </span>
              </Link>

              <Link className="profile-link-card" href="/pokemon-champions">
                <p className="card-label">Trainer profile</p>
                <h3>Pokémon Champions</h3>
                <p>{t("트레이너 ID와 친구 추가 안내", "Trainer ID and friend instructions")}</p>
                <span className="profile-link-card-action">
                  {t("프로필 보기", "View profile")} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section music-profile-section" aria-labelledby="music-profile-title">
          <div className="site-container profile-link-layout">
            <header className="section-heading">
              <p className="page-kicker">Music profiles</p>
              <h2 id="music-profile-title">{t("음악으로 연결하기", "Connect through music")}</h2>
              <p>
                {t(
                  "Apple Music과 Spotify에서 공개 음악 프로필을 확인할 수 있어요.",
                  "Find my public music profiles on Apple Music and Spotify."
                )}
              </p>
            </header>

            <div className="profile-link-grid">
              <a
                className="profile-link-card"
                href="https://music.apple.com/profile/zeroday0619_jp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="card-label">Music profile</p>
                <h3>Apple Music</h3>
                <p>zeroday0619_jp</p>
                <span className="profile-link-card-action">
                  {t("프로필 열기", "Open profile")} <span aria-hidden="true">↗</span>
                </span>
              </a>

              <a
                className="profile-link-card"
                href="https://open.spotify.com/user/317noec75guoym4t6dzkbq5hwvxq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="card-label">Music profile</p>
                <h3>Spotify</h3>
                <p>zeroday0619</p>
                <span className="profile-link-card-action">
                  {t("프로필 열기", "Open profile")} <span aria-hidden="true">↗</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="section section-soft media-profile-section" aria-labelledby="media-profile-title">
          <div className="site-container profile-link-layout">
            <header className="section-heading">
              <p className="page-kicker">Video &amp; live</p>
              <h2 id="media-profile-title">{t("영상과 라이브로 연결하기", "Connect through video and live")}</h2>
              <p>
                {t(
                  "YouTube 영상과 CHZZK 라이브 채널을 확인할 수 있어요.",
                  "Find my videos on YouTube and live streams on CHZZK."
                )}
              </p>
            </header>

            <div className="profile-link-grid">
              <a
                className="profile-link-card"
                href="https://www.youtube.com/@zeroday0619"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="card-label">Video channel</p>
                <h3>YouTube</h3>
                <p>@zeroday0619</p>
                <span className="profile-link-card-action">
                  {t("채널 열기", "Open channel")} <span aria-hidden="true">↗</span>
                </span>
              </a>

              <a
                className="profile-link-card"
                href="https://chzzk.naver.com/b68ff8de78382d4288f8362243bcd748"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="card-label">Live streaming</p>
                <h3>CHZZK</h3>
                <p>{t("라이브 스트리밍 채널", "Live streaming channel")}</p>
                <span className="profile-link-card-action">
                  {t("채널 열기", "Open channel")} <span aria-hidden="true">↗</span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
