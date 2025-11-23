import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio. I'm Mohamed Abdelhakem, a Full-Stack Developer specialized in building modern, fast, and scalable web applications.",
  openGraph: {
    title: "Home | M. Abdelhakem",
    description:
      "Full-Stack Developer specializing in Next.js, React, and Node.js.",
    images: ["/og-home.png"],
  },
};

export default function Home() {
  return <div>HomePage</div>;
}
