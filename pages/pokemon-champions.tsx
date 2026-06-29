import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const TRAINER_ID = "0842 6903 5536";
const POKEMON_CHAMPIONS_LOGO_URL = "https://champions.pokemon.com/favicons/favicon.svg";

export default function PokemonChampionsPage() {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyTrainerId = async () => {
    try {
      await navigator.clipboard.writeText(TRAINER_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <SEO
        title={t("Pokémon™ Champions 트레이너 친구 추가", "Pokémon Champions Trainer Friend Add")}
        description={t(
          "Pokémon™ Champions에서 저를 친구로 추가해 보세요.",
          "Add me as a friend in Pokémon Champions."
        )}
        canonical="/pokemon-champions"
        image="/images/pokemon-champions-profile-image.png"
        imageAlt={t("Pokémon Champions 프로필 배경", "Pokémon Champions profile background")}
        lang={language}
        noindex
        nofollow
      />

      <div className="min-h-screen bg-base-200 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="oneui-card overflow-hidden oneui-animate-fade-in">
            <div className="relative h-56 md:h-72">
              <Image
                src="/images/pokemon-champions-profile-image.png"
                alt={t("Pokémon Champions 프로필 이미지", "Pokémon Champions profile image")}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/90">
                  <img
                    src={POKEMON_CHAMPIONS_LOGO_URL}
                    alt="Pokémon Champions logo"
                    width={26}
                    height={26}
                  />
                </span>
                <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  Pokémon™ Champions
                </h1>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-base-content/70 mb-6">
                {t(
                  "트레이너 친구 추가를 원하시면 아래 ID를 사용해 주세요.",
                  "Use the trainer ID below to add me as a friend."
                )}
              </p>

              <div className="w-full rounded-oneui-sm bg-base-100 p-6 md:p-8 border border-base-300">
                <p className="text-sm text-base-content/60 mb-2">
                  {t("트레이너 ID", "Trainer ID")}
                </p>
                <button
                  type="button"
                  onClick={copyTrainerId}
                  aria-label={t("트레이너 ID 복사", "Copy trainer ID")}
                  className="w-full rounded-oneui-sm px-3 py-2 hover:bg-base-200 transition-colors duration-200 cursor-pointer"
                >
                  <span className="block text-[clamp(1rem,5.2vw,2.25rem)] font-black text-primary whitespace-nowrap leading-tight text-center">
                    {TRAINER_ID}
                  </span>
                </button>
                <p className="text-xs text-base-content/60 mt-2 text-center">
                  {copied
                    ? t("복사되었습니다.", "Copied.")
                    : t("ID를 클릭하면 복사됩니다.", "Click the ID to copy.")}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-oneui-sm bg-base-100 hover:bg-base-300 transition-all duration-300 font-semibold"
                >
                  {t("메인으로", "Back to Home")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}