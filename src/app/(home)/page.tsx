import PageWrapper from "@/components/common/page-wrapper";
import { Metadata } from "next";
import Photo from "./_components/_photo";
import Content from "./_components/content";
import Statistics from "./_components/statistics";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio. I'm Mohamed Abdelhakem, a Full-Stack Developer specialized in building modern, fast, and scalable web applications.",
  openGraph: {
    title: "Home | M. Abdelhakem",
    description:
      "Full-Stack Developer specializing in Next.js, React, and Node.js.",
    images: ["/images/og-image.png"],
  },
};

export default function Home() {
  return (
    <PageWrapper>
      {/* Content */}
      <Content />

      {/* Image */}
      <Photo />

      {/* Statistics */}
      <Statistics />
    </PageWrapper>
  );
}
