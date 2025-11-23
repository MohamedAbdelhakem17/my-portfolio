import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the professional services I offer, including web development, full-stack solutions, WordPress custom themes, and performance optimization.",
  openGraph: {
    title: "Services | M. Abdelhakem",
    images: ["/og-services.png"],
  },
};

export default function ServicesPage() {
  return <div>ServicesPage</div>;
}
