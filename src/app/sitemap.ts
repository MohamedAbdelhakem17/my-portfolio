import { SITE_URL } from "@/lib/constants/site-url.constant";

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
    },
  ];
}
