import Head from "next/head";
import { useRouter } from "next/router";

type SupportedLang = "ko" | "en";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: SupportedLang;
};

const SITE_URL = "https://zeroday0619.dev";
const SITE_NAME = "zeroday0619";
const DEFAULT_DESCRIPTION =
  "Python Software Engineer Euiseo Cha (zeroday0619). Open-source contributor and Ubuntu Member.";

const toAbsoluteUrl = (urlOrPath: string) => {
  if (/^https?:\/\//i.test(urlOrPath)) return urlOrPath;
  const path = urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`;
  return `${SITE_URL}${path}`;
};

const stripQueryAndHash = (value: string) => value.split("?")[0]?.split("#")[0] ?? value;

const toOgLocale = (lang?: SupportedLang) => {
  if (lang === "en") return "en_US";
  return "ko_KR";
};

const buildTitle = (title?: string) => {
  if (!title) return SITE_NAME;
  if (title === SITE_NAME) return SITE_NAME;
  return `${title} | ${SITE_NAME}`;
};

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  image = "/images/profile.jpg",
  imageAlt = "Profile image",
  noindex = false,
  nofollow = false,
  lang,
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = toAbsoluteUrl(stripQueryAndHash(canonical ?? router.asPath ?? "/"));
  const titleText = buildTitle(title);

  const robots = [noindex ? "noindex" : "index", nofollow ? "nofollow" : "follow"].join(", ");
  const ogImage = toAbsoluteUrl(image);

  return (
    <Head>
      <title key="title">{titleText}</title>

      <meta key="robots" name="robots" content={robots} />
      <meta key="description" name="description" content={description} />
      <link key="canonical" rel="canonical" href={canonicalUrl} />

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:title" property="og:title" content={titleText} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:url" property="og:url" content={canonicalUrl} />
      <meta key="og:locale" property="og:locale" content={toOgLocale(lang)} />
      <meta key="og:image" property="og:image" content={ogImage} />
      <meta key="og:image:alt" property="og:image:alt" content={imageAlt} />

      <meta
        key="twitter:card"
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta key="twitter:title" name="twitter:title" content={titleText} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={ogImage} />

      <meta key="author" name="author" content="Euiseo Cha" />
      <meta key="format-detection" name="format-detection" content="telephone=no" />
    </Head>
  );
}
