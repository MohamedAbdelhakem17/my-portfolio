import AnimatedStaggerParent from "@/components/feathers/animated-stagger-parent";
import { ProjectType } from "@/lib/constants/work.constant";
import Image from "next/image";

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  const projectNumber = `0${index + 1}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Image */}
      <div className="lg:order-2 order-1 aspect-square flex justify-center items-center">
        <Image
          src={project.image}
          alt={project.name}
          priority
          width={500}
          height={500}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <AnimatedStaggerParent
        delay={0}
        className="lg:order-1 order-2 flex flex-col justify-center space-y-4 lg:space-y-6 group"
      >
        {/* Number */}
        <span className=" service-number text-5xl lg:text-8xl font-bold tracking-tight text-transparent transition-all">
          {projectNumber}
        </span>

        {/* Project Type */}
        <h2 className="text-3xl lg:text-5xl font-semibold">{project.type}</h2>

        {/* Project Name */}
        <p className="text-accent text-lg lg:text-xl font-medium">
          {project.name}
        </p>

        {/* Project Description */}
        <p className="text-gray-300 leading-relaxed">{project.description}</p>

        {/* Project Stack */}
        <p className="border-b border-gray-500 text-accent pb-2 uppercase tracking-wide">
          {project.stack.join(", ")}
        </p>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2">
          {project.links.map(({ name, link, icon: Icon }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border border-gray-500 bg-[#27272c] text-gray-200 hover:bg-accent hover:text-primary transition-colors"
            >
              <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="sr-only">{name}</span>
            </a>
          ))}
        </div>
      </AnimatedStaggerParent>
    </div>
  );
}
