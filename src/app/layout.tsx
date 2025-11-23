import PageTransition from "@/components/feathers/page-transition";
import StairTransition from "@/components/feathers/stair-transition";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const monoFont = JetBrains_Mono({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "M. Abdelhakem| Full-Stack Developer",
    template: "%s | M. Abdelhakem",
  },
  description:
    "Full-Stack Developer specializing in Next.js, React, Node.js, and WordPress custom themes. Explore my services, projects, and experience.",
  keywords: [
    "Mohamed Abdelhakem",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "M. AbdelhakemPortfolio",
    images: ["images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamed Abdelhakem",
              url: "https://your-domain.com",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/MohamedAbdelhakem17",
                "www.linkedin.com/in/mohamedabdelhakem",
              ],
            }),
          }}
        />
      </head>
      <body className={`${monoFont.variable} antialiased`}>
        {/* Header */}
        <Navbar />

        {/* Animation transition */}
        <StairTransition />

        {/* Content */}
        <PageTransition>
          <main className="container">{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
