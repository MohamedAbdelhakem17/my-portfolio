import ContactForm from "@/app/contact/_components/contact-form";
import ResumeHeading from "@/app/resume/_components/_layout/resume-header";
import PageWrapper from "@/components/common/page-wrapper";
import AnimatedStaggerParent from "@/components/feathers/animated-stagger-parent";
import { Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for collaborations, freelance projects, or technical inquiries.",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Form container */}
      <div className="bg-[#27272c] p-5 rounded-lg">
        {/* Title */}
        <ResumeHeading.title className="text-accent lg:text-3xl md:text-2xl text-xl ">
          Let&apos;s Work Together
        </ResumeHeading.title>

        {/* Message */}
        <ResumeHeading.description className="text-pretty leading-relaxed border-b border-gray-50/20 pb-4  rounded-md">
          Have an idea or a project you&apos;d like to discuss? I’d love to hear
          from you. Let’s create something great together.
        </ResumeHeading.description>

        {/* Form */}
        <ContactForm />
      </div>

      {/* Content */}

      {/* Connect With me  */}
      <AnimatedStaggerParent className="flex flex-col items-start justify-center gap-8 px-5 py-6 lg:max-w-md w-full mx-auto">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-accent rounded-full grid place-items-center text-primary">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <label className="block text-sm font-medium text-accent mb-1">
              Got something to say? Drop us an email!
            </label>
            <a
              href="mailto:mohamed.abdelhakem3200@gmail.com"
              className="text-white hover:text-secondary transition-colors duration-200 "
            >
              mohamed.abdelhakem3200@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-accent rounded-full grid place-items-center text-primary">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <label className="block text-sm font-medium text-accent mb-1">
              Fancy a chat? Give us a ring!
            </label>
            <a
              href="tel:+201009474420"
              className="text-white hover:text-secondary transition-colors duration-200 "
            >
              +20 01009474420
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-accent rounded-full grid place-items-center text-primary">
            <FaWhatsapp className="w-5 h-5" />
          </div>
          <div>
            <label className="block text-sm font-medium text-accent mb-1">
              Ping us on WhatsApp — I love a quick chat!
            </label>
            <a
              href="https://wa.me/201009474420"
              target="_blank"
              className="text-white hover:text-secondary transition-colors duration-200  flex items-center gap-2"
            >
              Start Chat
            </a>
          </div>
        </div>
      </AnimatedStaggerParent>
    </PageWrapper>
  );
}
