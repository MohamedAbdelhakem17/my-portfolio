import PageWrapper from "@/components/common/page-wrapper";
import { Metadata } from "next";
import ProjectSlider from "./_components/project-slider";

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
    <PageWrapper className="mt-20 lg:mt-0 lg:grid-cols-1">
      <ProjectSlider />
    </PageWrapper>
  );
}
