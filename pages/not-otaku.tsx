import Image from "next/image";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const NotOtakuPage = () => {
  const { language, t } = useLanguage();

  const pageTitle = t("zero는 오타쿠가 아니야", "zero is not an otaku");
  const hiddenLabel = t("이스터에그", "Easter egg");

  return (
    <>
      <SEO
        title={pageTitle}
        description={hiddenLabel}
        canonical="/not-otaku"
        image="/images/otaku.png"
        noindex
        nofollow
        lang={language}
      />

      <div className="min-h-screen bg-base-200 px-6 py-20">
        <div className="mx-auto max-w-2xl oneui-card p-10 text-center oneui-animate-fade-in">
          <p className="text-base-content/60 mb-3 text-sm tracking-[0.15em] uppercase">
            {hiddenLabel}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
            {pageTitle}
          </h1>
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/otaku.png"
              alt={t("오타쿠 이미지", "Otaku image")}
              width={320}
              height={320}
              className="h-auto w-full max-w-xs md:max-w-sm"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotOtakuPage;
