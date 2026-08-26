import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const FRIEND_CODE = "SW-3208-1563-3130";
const NINTENDO_FRIEND_LINK = "https://lounge.nintendo.com/friendcode/3208-1563-3130/DG59j7tZRk";
type CopyStatus = "idle" | "copied" | "error";

const NintendoSwitchIcon = ({ width = "20", height = "20" }: { width?: string; height?: string }) => (
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
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const copyResetTimeout = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(copyResetTimeout.current), []);

  const resetCopyStatusLater = () => {
    window.clearTimeout(copyResetTimeout.current);
    copyResetTimeout.current = window.setTimeout(() => setCopyStatus("idle"), 1800);
  };

  const copyFriendCode = async () => {
    try {
      await navigator.clipboard.writeText(FRIEND_CODE);
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
        title={t("닌텐도 스위치 친구코드", "Nintendo Switch Friend Code")}
        description={t("저랑 닌텐도 스위치 친구할래요?", "Would you like to be friends on Nintendo Switch?")}
        canonical="/nintendo-switch"
        image="/images/image_friend_request_4.0.0.png"
        imageAlt={t("닌텐도 스위치 친구 요청 화면", "Nintendo Switch friend request screen")}
        lang={language}
        noindex
        nofollow
      />

      <div className="page-shell">
        <section className="interior-hero" aria-labelledby="nintendo-title">
          <div className="site-container">
            <Link className="breadcrumb" href="/">
              <span aria-hidden="true">←</span> {t("홈", "Home")}
            </Link>
            <p className="page-kicker">Nintendo Switch</p>
            <h1 id="nintendo-title">{t("친구코드로 연결하기", "Connect with a friend code")}</h1>
            <p>{t("코드를 복사하거나, 모바일 링크와 QR 코드를 사용해 주세요.", "Copy the code, or use the mobile link and QR code.")}</p>
          </div>
        </section>

        <section className="section" aria-label={t("친구 추가 정보", "Friend add details")}>
          <div className="site-container utility-grid">
            <article className="utility-card code-card">
              <span className="card-corner" aria-hidden="true" />
              <div className="utility-card-heading">
                <span className="utility-icon"><NintendoSwitchIcon /></span>
                <div>
                  <p className="card-label">Nintendo account</p>
                  <h2>{t("친구코드", "Friend code")}</h2>
                </div>
              </div>
              <p>{t("아래 코드를 누르면 클립보드에 복사됩니다.", "Select the code to copy it to your clipboard.")}</p>
              <button
                type="button"
                onClick={copyFriendCode}
                className="copy-code-button"
                aria-label={t("친구코드 복사", "Copy friend code")}
                aria-describedby="friend-code-status"
              >
                {FRIEND_CODE}
              </button>
              <p id="friend-code-status" className="status-text" role="status" aria-live="polite">
                {copyStatus === "copied"
                  ? t("복사되었습니다.", "Copied.")
                  : copyStatus === "error"
                    ? t("복사하지 못했습니다. 코드를 직접 선택해 주세요.", "Could not copy. Select the code manually.")
                    : t("코드를 눌러 복사하세요.", "Select the code to copy.")}
              </p>
              <a
                href={NINTENDO_FRIEND_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                <NintendoSwitchIcon width="16" height="16" />
                {t("모바일에서 친구 추가", "Add friend on mobile")} <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="utility-card qr-card">
              <span className="card-corner" aria-hidden="true" />
              <p className="card-label">QR resource</p>
              <h2>{t("QR 코드", "QR code")}</h2>
              <p>{t("이미지를 누르면 스캔하기 좋은 크기로 확대됩니다.", "Select the image to open a larger version for scanning.")}</p>
              <button
                type="button"
                onClick={() => setIsQrModalOpen(true)}
                className="qr-button"
                aria-label={t("QR 코드 확대 보기", "Open enlarged QR code")}
              >
                <Image
                  src="/images/nintendo-switch-friend-code-qr.jpg"
                  alt={t("닌텐도 스위치 친구코드 QR", "Nintendo Switch friend code QR")}
                  width={320}
                  height={320}
                  loading="eager"
                />
              </button>
            </article>
          </div>

          <div className="site-container back-row">
            <Link className="button button-outline" href="/">
              <span aria-hidden="true">←</span> {t("메인으로", "Back to Home")}
            </Link>
          </div>
        </section>
      </div>

      <Dialog open={isQrModalOpen} onClose={setIsQrModalOpen} className="modal-root">
        <DialogBackdrop className="modal-backdrop" />
        <div className="modal-positioner">
          <DialogPanel className="modal-panel">
            <div className="modal-heading">
              <DialogTitle>{t("닌텐도 스위치 친구코드 QR", "Nintendo Switch friend code QR")}</DialogTitle>
              <button
                type="button"
                onClick={() => setIsQrModalOpen(false)}
                className="modal-close"
                autoFocus
              >
                {t("닫기", "Close")}
              </button>
            </div>
            <Image
              src="/images/nintendo-switch-friend-code-qr.jpg"
              alt={t("닌텐도 스위치 친구코드 QR", "Nintendo Switch friend code QR")}
              width={800}
              height={800}
              className="modal-image"
              loading="eager"
            />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
