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
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:pt-8 lg:pb-12 lg:gap-6 gap-3 place-content-center min-h-screen">
      Work Page
    </section>
  );
}
