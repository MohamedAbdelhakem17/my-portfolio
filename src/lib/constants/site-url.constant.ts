const FALLBACK_SITE_URL = "https://hakem.dev";

function normalizeSiteUrl(url?: string): string {
  if (!url) {
    return FALLBACK_SITE_URL;
  }

  const trimmed = url.trim();

  if (!trimmed) {
    return FALLBACK_SITE_URL;
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  return withProtocol.replace(/\/+$/, "");
}

export const SITE_URL = normalizeSiteUrl("https://hakem.dev");
