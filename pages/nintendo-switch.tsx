import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const FRIEND_CODE = "SW-3208-1563-3130";
const NINTENDO_FRIEND_LINK = "https://lounge.nintendo.com/friendcode/3208-1563-3130/DG59j7tZRk";

const NintendoSwitchIcon = ({ width = "16", height = "16" }: { width?: string; height?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.14 4.14 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979m4.675.269a1.62 1.62 0 0 0-1.113-1.034 1.61 1.61 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.63 1.63 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053M3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256" />
    <path d="M3.425.053a4.14 4.14 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.85 2.85 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z" />
  </svg>
);

export default function NintendoSwitchPage() {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const copyFriendCode = async () => {
    try {
      await navigator.clipboard.writeText(FRIEND_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <SEO
        title={t("닌텐도 스위치 친구코드", "Nintendo Switch Friend Code")}
        description={t(
          "저랑 닌텐도 스위치 친구할래요?",
          "Would you like to be friends on Nintendo Switch?"
        )}
        canonical="/nintendo-switch"
        image="/images/image_friend_request_4.0.0.png"
        imageAlt={t("닌텐도 스위치 친구 요청 화면", "Nintendo Switch friend request screen")}
        lang={language}
        noindex
        nofollow
      />

      <div className="min-h-screen bg-base-200 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="oneui-card p-8 md:p-10 oneui-animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 text-primary">
                <NintendoSwitchIcon width="20" height="20" />
              </span>
              <h1 className="text-3xl font-bold">
                {t("닌텐도 스위치 친구코드", "Nintendo Switch Friend Code")}
              </h1>
            </div>

            <p className="text-base-content/70 mb-6">
              {t(
                "친구 추가를 원하시면 아래 코드를 사용해 주세요.",
                "Use the code below if you want to add me as a friend."
              )}
            </p>

            <div className="flex flex-col gap-4">
              <div className="w-full rounded-oneui-sm bg-base-100 p-6 md:p-8 border border-base-300">
                <p className="text-sm text-base-content/60 mb-2">Friend Code</p>
                <button
                  type="button"
                  onClick={copyFriendCode}
                  aria-label={t("친구코드 복사", "Copy friend code")}
                  className="w-full rounded-oneui-sm px-3 py-2 hover:bg-base-200 transition-colors duration-200 cursor-pointer"
                >
                  <span className="block text-[clamp(1rem,5.2vw,2.25rem)] font-black text-primary whitespace-nowrap leading-tight text-center">
                    {FRIEND_CODE}
                  </span>
                </button>
                <p className="text-xs text-base-content/60 mt-2 text-center">
                  {copied
                    ? t("복사되었습니다.", "Copied.")
                    : t("코드를 클릭하면 복사됩니다.", "Click the code to copy.")}
                </p>
              </div>

              <div className="w-full rounded-oneui-sm bg-base-100 p-5 border border-base-300">
                <p className="text-sm text-base-content/60 mb-3">
                  {t("모바일에서 친구 추가 링크 열기", "Open friend-add link on mobile")}
                </p>
                <a
                  href={NINTENDO_FRIEND_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-oneui-sm bg-primary text-white hover:opacity-90 transition-all duration-300 font-semibold"
                >
                  <NintendoSwitchIcon />
                  <span>{t("친구 추가 링크 열기", "Open friend-add link")}</span>
                </a>
                <p className="text-xs text-base-content/60 mt-3 text-center">
                  {t(
                    "모바일에서 열면 Nintendo Switch 앱으로 바로 이동할 수 있습니다.",
                    "Open this on mobile to jump directly into the Nintendo Switch app."
                  )}
                </p>
              </div>

              <div className="w-full rounded-oneui-sm bg-base-100 p-4 border border-base-300 flex flex-col items-center justify-center">
                <p className="text-sm text-base-content/60 mb-3">QR Code</p>
                <button
                  type="button"
                  onClick={() => setIsQrModalOpen(true)}
                  aria-label={t("QR 확대 보기", "Open QR image")}
                  className="rounded-oneui-sm transition-transform duration-200 hover:scale-[1.02]"
                >
                  <Image
                    src="/images/nintendo-switch-friend-code-qr.jpg"
                    alt={t("닌텐도 스위치 친구코드 QR", "Nintendo Switch friend code QR")}
                    width={220}
                    height={220}
                    className="rounded-oneui-sm border border-base-300"
                    priority
                  />
                </button>
                <p className="text-xs text-base-content/60 mt-2 text-center">
                  {t("이미지를 누르면 확대됩니다.", "Tap image to zoom.")}
                </p>
              </div>
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

      {isQrModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 p-4 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={t("QR 코드 확대", "QR image zoom")}
          onClick={() => setIsQrModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsQrModalOpen(false)}
              className="absolute -top-12 right-0 px-3 py-2 rounded-oneui-sm bg-white/90 text-black text-sm font-semibold"
            >
              {t("닫기", "Close")}
            </button>
            <Image
              src="/images/nintendo-switch-friend-code-qr.jpg"
              alt={t("닌텐도 스위치 친구코드 QR", "Nintendo Switch friend code QR")}
              width={800}
              height={800}
              className="w-full h-auto rounded-oneui-sm border border-white/30"
            />
          </div>
        </div>
      )}
    </>
  );
}
