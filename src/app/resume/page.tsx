import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View my professional experience, skills, education, and career background as a Full-Stack Developer.",
};

export default function ResumePage() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:pt-8 lg:pb-12 lg:gap-6 gap-3 place-content-center min-h-screen">
      Resume Page
    </section>
  );
}
