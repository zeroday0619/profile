import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const SERVICE_DESCRIPTIONS = {
  ko: [
    "Python 프로그래밍을 중심으로, 고객의 개별 요구에 맞춘 솔루션을 제공합니다.",
    "직접 소통하고 요구사항을 검증하며, 배포 이후까지 유지할 수 있는 결과를 만드는 데 집중합니다.",
  ],
  en: [
    "I provide Python-focused solutions tailored to each client's specific requirements.",
    "I focus on direct communication, verified requirements, and maintainable outcomes beyond initial delivery.",
  ],
} as const;

const SERVICES = {
  ko: [
    {
      title: "FastAPI 서비스",
      description: "FastAPI 프레임워크를 사용한 웹 애플리케이션을 설계하고 구현합니다.",
      image: "/images/code.webp",
      features: ["빠른 성능", "자동 문서화", "타입 안정성"],
      consultLink: "https://open.kakao.com/o/ske9NHah",
      cta: "상담하기",
    },
  ],
  en: [
    {
      title: "FastAPI services",
      description: "I design and implement web applications with the FastAPI framework.",
      image: "/images/code.webp",
      features: ["Fast performance", "Automatic documentation", "Type safety"],
      consultLink: "https://open.kakao.com/o/ske9NHah",
      cta: "Start a consultation",
    },
  ],
} as const;

const Outsourcing = () => {
  const { language, t } = useLanguage();
  const descriptions = SERVICE_DESCRIPTIONS[language];
  const services = SERVICES[language];

  return (
    <>
      <SEO
        title={t("외주 서비스", "Outsourcing Services")}
        description={t(
          "FastAPI 기반 웹 애플리케이션을 포함한 Python 맞춤형 솔루션 외주 서비스를 제공합니다.",
          "Custom Python development services, including FastAPI-powered web applications."
        )}
        canonical="/outsourcing"
        lang={language}
        image="/images/code.webp"
        imageAlt={t("소스 코드 화면", "Source code screen")}
      />

      <div className="page-shell">
        <section className="page-hero" aria-labelledby="outsourcing-title">
          <div className="site-container page-hero-grid">
            <div className="page-hero-copy">
              <p className="page-kicker">{t("개발 파트너십", "Development partnership")}</p>
              <h1 id="outsourcing-title">{t("Python 기반, 맞춤형 솔루션", "Python-powered custom solutions")}</h1>
              <div className="hero-body-copy">
                {descriptions.map((text) => <p key={text}>{text}</p>)}
              </div>
              <a className="arrow-link arrow-link-dark" href="#services">
                {t("서비스 보기", "Explore services")} <span aria-hidden="true">→</span>
              </a>
            </div>

            <figure className="hero-media">
              <Image
                src="/images/code.webp"
                alt={t("소스 코드 화면", "Source code screen")}
                width={691}
                height={369}
                loading="eager"
              />
              <figcaption>
                <span aria-hidden="true" />
                FastAPI · Python · API
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="services" className="section" aria-labelledby="services-title">
          <div className="site-container">
            <header className="section-heading section-heading-wide">
              <div>
                <p className="page-kicker">{t("제공 범위", "What I deliver")}</p>
                <h2 id="services-title">{t("제공 서비스", "Services")}</h2>
              </div>
              <p>{t("작은 API부터 운영 가능한 웹 서비스까지, 요구사항에 맞춰 범위를 정합니다.", "From focused APIs to production-ready web services, scoped around your requirements.")}</p>
            </header>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-image">
                    <Image
                      src={service.image}
                      alt={t("서비스 구현 코드 예시", "Service implementation code sample")}
                      width={691}
                      height={369}
                      loading="eager"
                    />
                  </div>
                  <div className="service-content">
                    <span className="card-corner" aria-hidden="true" />
                    <p className="card-label">01 · Web application</p>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="tag-row">
                      {service.features.map((feature) => <span className="tag" key={feature}>{feature}</span>)}
                    </div>
                    <a
                      href={service.consultLink}
                      className="button button-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {service.cta} <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="delivery-strip" aria-label={t("작업 원칙", "Delivery principles")}>
          <div className="site-container delivery-grid">
            <p>{t("직접 소통", "Direct communication")}</p>
            <p>{t("명확한 범위", "Clear scope")}</p>
            <p>{t("유지 가능한 코드", "Maintainable code")}</p>
            <p>{t("검증 가능한 결과", "Verifiable outcomes")}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Outsourcing;
