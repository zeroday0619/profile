import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const NotOtakuPage = () => {
  const { language, t } = useLanguage();
  const pageTitle = t("zero는 오타쿠가 아니야", "zero is not an otaku");
  const imageAlt = t("오타쿠가 아니라는 이스터에그 이미지", "Easter egg image denying otaku status");

  return (
    <>
      <SEO
        title={pageTitle}
        description={t("숨겨진 이스터에그 페이지", "A hidden easter egg page")}
        canonical="/not-otaku"
        image="/images/otaku.png"
        imageAlt={imageAlt}
        noindex
        nofollow
        lang={language}
      />

      <div className="easter-page">
        <div className="site-container easter-layout">
          <div className="easter-copy">
            <Link className="breadcrumb" href="/">
              <span aria-hidden="true">←</span> {t("홈", "Home")}
            </Link>
            <p className="page-kicker">{t("이스터에그", "Easter egg")}</p>
            <h1>{pageTitle}</h1>
            <p>{t("이 페이지를 찾으셨네요.", "You found the hidden page.")}</p>
          </div>

          <figure className="easter-card">
            <span className="card-corner" aria-hidden="true" />
            <Image
              src="/images/otaku.png"
              alt={imageAlt}
              width={300}
              height={168}
              priority
            />
            <figcaption>not-otaku.png · 300 × 168</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default NotOtakuPage;
