import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const TRAINER_ID = "0842 6903 5536";
type CopyStatus = "idle" | "copied" | "error";

export default function PokemonChampionsPage() {
  const { language, t } = useLanguage();
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const copyResetTimeout = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(copyResetTimeout.current), []);

  const resetCopyStatusLater = () => {
    window.clearTimeout(copyResetTimeout.current);
    copyResetTimeout.current = window.setTimeout(() => setCopyStatus("idle"), 1800);
  };

  const copyTrainerId = async () => {
    try {
      await navigator.clipboard.writeText(TRAINER_ID);
      setCopyStatus("copied");
      resetCopyStatusLater();
    } catch {
      setCopyStatus("error");
      resetCopyStatusLater();
    }
  };

  return (
    <>
      <SEO
        title={t("Pokémon™ Champions 트레이너 친구 추가", "Pokémon Champions Trainer Friend Add")}
        description={t("Pokémon™ Champions에서 저를 친구로 추가해 보세요.", "Add me as a friend in Pokémon Champions.")}
        canonical="/pokemon-champions"
        image="/images/pokemon-champions-profile-image.png"
        imageAlt={t("Pokémon Champions 트레이너 이미지", "Pokémon Champions trainer image")}
        lang={language}
        noindex
        nofollow
      />

      <div className="page-shell">
        <section className="image-hero" aria-labelledby="pokemon-title">
          <Image
            src="/images/pokemon-champions-profile-image.png"
            alt={t("Pokémon Champions 트레이너 이미지", "Pokémon Champions trainer image")}
            fill
            className="image-hero-background"
            priority
          />
          <div className="image-hero-shade" aria-hidden="true" />
          <div className="site-container image-hero-content">
            <Link className="breadcrumb" href="/">
              <span aria-hidden="true">←</span> {t("홈", "Home")}
            </Link>
            <div className="title-lockup">
              <div>
                <p className="page-kicker">Trainer profile</p>
                <h1 id="pokemon-title">Pokémon™ Champions</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="trainer-id-title">
          <div className="site-container trainer-layout">
            <div className="section-heading">
              <p className="page-kicker">{t("친구 추가", "Add a friend")}</p>
              <h2 id="trainer-id-title">{t("트레이너 ID", "Trainer ID")}</h2>
              <p>{t("아래 ID를 사용해 저를 친구로 추가해 주세요.", "Use the ID below to add me as a friend.")}</p>
            </div>

            <article className="utility-card trainer-card">
              <p className="card-label">Pokémon Champions</p>
              <button
                type="button"
                onClick={copyTrainerId}
                className="copy-code-button"
                aria-label={t("트레이너 ID 복사", "Copy trainer ID")}
                aria-describedby="trainer-id-status"
              >
                {TRAINER_ID}
              </button>
              <p id="trainer-id-status" className="status-text" role="status" aria-live="polite">
                {copyStatus === "copied"
                  ? t("복사되었습니다.", "Copied.")
                  : copyStatus === "error"
                    ? t("복사하지 못했습니다. ID를 직접 선택해 주세요.", "Could not copy. Select the ID manually.")
                    : t("ID를 눌러 복사하세요.", "Select the ID to copy.")}
              </p>
            </article>
          </div>

          <div className="site-container back-row">
            <Link className="button button-outline" href="/">
              <span aria-hidden="true">←</span> {t("메인으로", "Back to Home")}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
