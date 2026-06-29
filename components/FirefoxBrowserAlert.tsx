import { useEffect } from "react";

const ALERT_STORAGE_KEY = "zeroday0619-firefox-browser-alert-shown";
const FIREFOX_RECOMMENDATION_MESSAGE =
  "Firefox가 아니면 zeroday0619.dev 사이트를 정상적으로 이용하기 어렵습니다. Firefox 브라우저를 이용해주시기 바랍니다.";

let hasShownFirefoxAlert = false;

const isFirefoxBrowser = (userAgent: string) =>
  /Firefox\/|FxiOS\//.test(userAgent);

const hasShownAlertInSession = () => {
  try {
    return window.sessionStorage.getItem(ALERT_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

const rememberAlertInSession = () => {
  try {
    window.sessionStorage.setItem(ALERT_STORAGE_KEY, "true");
  } catch {
    // Ignore storage failures; the in-memory flag still prevents duplicate alerts during this page lifecycle.
  }
};

const FirefoxBrowserAlert = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (isFirefoxBrowser(window.navigator.userAgent)) {
      return;
    }

    if (hasShownFirefoxAlert || hasShownAlertInSession()) {
      return;
    }

    hasShownFirefoxAlert = true;
    rememberAlertInSession();
    window.alert(FIREFOX_RECOMMENDATION_MESSAGE);
  }, []);

  return null;
};

export default FirefoxBrowserAlert;
