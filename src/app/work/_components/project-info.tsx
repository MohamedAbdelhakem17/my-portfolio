import AnimatedStaggerParent from "@/components/feathers/animated-stagger-parent";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PROJECTS from "@/lib/constants/work.constant";

export default function ProjectInfo({
  activeProject,
}: {
  activeProject: number;
}) {
  const projectNumber = `0${activeProject + 1}`;

  return (
    <AnimatedStaggerParent
      delay={0}
      className="lg:order-1 order-2 flex flex-col justify-center space-y-4 lg:space-y-6 group"
    >
      {/* Number */}
      <span className=" service-number text-5xl lg:text-8xl font-bold tracking-tight text-transparent transition-all">
        {projectNumber}
      </span>

      {/* Project Type */}
      <h2 className="text-3xl lg:text-5xl font-semibold">
        {PROJECTS[activeProject].type}
      </h2>

      {/* Project Name */}
      <p className="text-accent text-lg lg:text-xl font-medium">
        {PROJECTS[activeProject].name}
      </p>

      {/* Project Description */}
      <p className="text-gray-300 leading-relaxed">
        {PROJECTS[activeProject].description}
      </p>

      {/* Project Stack */}
      <p className="border-b border-gray-500 text-accent pb-2 uppercase tracking-wide">
        {PROJECTS[activeProject].stack.join(", ")}
      </p>

      {/* Links */}
      <div className="flex items-center gap-3 pt-2">
        <TooltipProvider delayDuration={100}>
          {PROJECTS[activeProject].links.map(({ name, link, icon: Icon }) => (
            <Tooltip key={name}>
              <TooltipTrigger asChild>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border border-gray-500 bg-[#27272c] text-gray-200 hover:bg-accent hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="sr-only">{name}</span>
                </a>
              </TooltipTrigger>

              <TooltipContent>
                <p className=" text-sm font-medium capitalize">{name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </AnimatedStaggerParent>
  );
}
