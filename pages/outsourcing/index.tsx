import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const SERVICE_DESCRIPTIONS = {
  ko: [
    "저는 Python 프로그래밍 언어를 전문으로 하는 개발자로, 고객의 개별적인 요구에 맞춤형 솔루션을 제공합니다.",
    "고객의 성공적인 프로젝트 진행을 최우선으로 생각하며, 직접 소통하여 이해하고 협력하는 과정을 통해 만족스러운 결과를 만들어가기 위해 최선을 다합니다.",
  ],
  en: [
    "As a developer specializing in Python programming, I provide customized solutions tailored to each client's individual needs.",
    "I prioritize the successful progress of client projects and do my best to create satisfactory results through direct communication and collaboration.",
  ],
} as const;

const SERVICES = {
  ko: [
    {
      title: "FastAPI 서비스",
      description: "FastAPI 프레임워크를 사용한 고성능 RESTful API를 제작해드립니다.",
      image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
      features: ["빠른 성능", "자동 문서화", "타입 안정성"],
      consultLink: "https://open.kakao.com/o/ske9NHah",
      cta: "상담하기",
    },
  ],
  en: [
    {
      title: "FastAPI Service",
      description: "I build high-performance RESTful APIs using the FastAPI framework.",
      image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
      features: ["Fast Performance", "Auto Documentation", "Type Safety"],
      consultLink: "https://open.kakao.com/o/ske9NHah",
      cta: "Contact",
    },
  ],
} as const;

const Outsourcing = () => {
  const { language, t } = useLanguage();
  const descriptions = SERVICE_DESCRIPTIONS[language];
  const services = SERVICES[language];

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="oneui-card p-8 md:p-12 oneui-animate-fade-in">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                {t("외주 서비스", "Outsourcing Services")}
              </h1>
              <p className="text-lg text-base-content/60 mb-8">
                {t("Python 기반 맞춤형 솔루션", "Python-based Custom Solutions")}
              </p>
              
              <div className="space-y-4">
                {descriptions.map((text, index) => (
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 px-2">
            {t("제공 서비스", "Services Offered")}
          </h2>
          
          <div className="grid gap-6">
            {services.map((service, index) => (
              <article 
                key={index}
                className="oneui-card overflow-hidden oneui-animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-info/10 p-8 flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={`${service.title} Logo`}
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {service.title}
                    </h3>
                    <p className="text-base-content/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-base-200 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <a
                      href={service.consultLink}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-oneui-sm font-semibold hover:bg-primary-focus transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{service.cta}</span>
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
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outsourcing;