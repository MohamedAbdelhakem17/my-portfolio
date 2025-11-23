import PageWrapper from "@/components/common/page-wrapper";
import SERVICES from "@/lib/constants/services.constant";
import { Metadata } from "next";
import ServiceCard from "./_components/service-card";

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
    <PageWrapper className="mt-20 lg:mt-0 ">
      {SERVICES.map(({ title, description }, index) => {
        return (
          <ServiceCard
            title={title}
            index={index}
            key={index}
            description={description}
          />
        );
      })}
    </PageWrapper>
  );
}
