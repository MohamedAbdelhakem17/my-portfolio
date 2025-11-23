import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse my latest projects and real-world client work built using Next.js, Node.js, and modern web technologies.",
  openGraph: {
    title: "Work | Projects",
    images: ["/og-work.png"],
  },
};

export default function WorkPage() {
  return <div>WorkPage</div>;
}
