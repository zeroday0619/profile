import { Buffer } from "node:buffer";

const manifestModulePath =
  "/@opennextjs/cloudflare/dist/cli/build/patches/plugins/load-manifest.js";
const originalPattern = "**/{*-manifest,required-server-files,prefetch-hints}.json";
const correctedPattern =
  "**/{*-manifest,required-server-files,prefetch-hints,preview-props}.json";

export function patchManifestSource(source) {
  const originalMatches = source.split(originalPattern).length - 1;
  const correctedMatches = source.split(correctedPattern).length - 1;
  if (correctedMatches === 1 && originalMatches === 0) {
    return source;
  }

  if (originalMatches !== 1 || correctedMatches !== 0) {
    throw new Error(
      "OpenNext manifest loader changed. Review the Next.js 16.4 compatibility patch before building."
    );
  }

  // The upstream fix inlines the real preview manifest instead of discarding its signing keys.
  // https://github.com/opennextjs/opennextjs-cloudflare/pull/1356
  return source.replace(originalPattern, correctedPattern);
}

export function load(url, context, nextLoad) {
  const result = nextLoad(url, context);
  if (!new URL(url).pathname.endsWith(manifestModulePath)) {
    return result;
  }

  const source =
    typeof result.source === "string"
      ? result.source
      : Buffer.from(result.source).toString("utf8");
  return { ...result, source: patchManifestSource(source) };
}
