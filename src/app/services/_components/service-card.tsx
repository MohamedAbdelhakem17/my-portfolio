import AnimatedStaggerParent from "@/components/feathers/animated-stagger-parent";
import { MoveDownRight } from "lucide-react";

export default function ServiceCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const serviceNumber = `0${index + 1}`;

  return (
    <AnimatedStaggerParent className="group relative border-b border-gray-800 rounded-lg p-6 lg:p-8 hover:border-gray-700 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        {/* Service Number */}
        <span className=" service-number text-5xl lg:text-6xl font-bold tracking-tight text-transparent transition-all">
          {serviceNumber}
        </span>

        {/* Icon */}
        <div className="rounded-full p-3 bg-white text-primary transition-all group-hover:bg-accent ">
          <MoveDownRight className="size-10 group-hover:-rotate-90  transition-transform ease-in-out" />
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
    </AnimatedStaggerParent>
  );
}
