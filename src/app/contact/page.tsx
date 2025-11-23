import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for collaborations, freelance projects, or technical inquiries.",
};

export default function ContactPage() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:pt-8 lg:pb-12 lg:gap-6 gap-3 place-content-center min-h-screen">
      Contact Page
    </section>
  );
}
