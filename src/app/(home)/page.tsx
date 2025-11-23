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
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:pt-8 lg:pb-12 lg:gap-6 gap-3 place-content-center min-h-screen">
      {/* Content */}
      <Content />

      {/* Image */}
      <Photo />

      {/* Statistics */}
      <Statistics />
    </section>
  );
}
