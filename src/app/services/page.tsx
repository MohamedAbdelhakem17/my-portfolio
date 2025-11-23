import PageWrapper from "@/components/common/page-wrapper";
import SERVICES from "@/lib/constants/services.constant";
import { MoveDownRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the professional services I offer, including web development, full-stack solutions, WordPress custom themes, and performance optimization.",
  openGraph: {
    title: "Services | M. Abdelhakem",
    images: ["/og-services.png"],
  },
};

export default function ServicesPage() {
  return (
    <PageWrapper className="mt-20 lg:mt-5 ">
      {SERVICES.map(({ title, description }, index) => {
        const serviceNumber = `0${index + 1}`;

        return (
          <div
            key={index}
            className="group relative border border-gray-800 rounded-lg p-6 lg:p-8 hover:border-gray-700 transition-colors "
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              {/* Service Number */}
              <span
                className="
    service-number
    text-5xl lg:text-6xl font-bold tracking-tight text-transparent
    transition-all
  "
              >
                {serviceNumber}
              </span>

              {/* Icon */}
              <div className="rounded-full p-3 bg-white text-primary transition-all group-hover:bg-accent ">
                <MoveDownRight className="size-10" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-4">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              {description}
            </p>
          </div>
        );
      })}
    </PageWrapper>
  );
}
