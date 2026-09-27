/**
 * Cache-bust static public assets (images, videos, icons).
 * Version is set at build time via NEXT_PUBLIC_ASSET_VERSION.
 */
export function asset(src: string): string {
  if (!src || src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }

  const version = process.env.NEXT_PUBLIC_ASSET_VERSION;
  if (!version) return src;

  const hashIndex = src.indexOf("#");
  const hash = hashIndex >= 0 ? src.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? src.slice(0, hashIndex) : src;
  const sep = withoutHash.includes("?") ? "&" : "?";

  return `${withoutHash}${sep}v=${encodeURIComponent(version)}${hash}`;
}
