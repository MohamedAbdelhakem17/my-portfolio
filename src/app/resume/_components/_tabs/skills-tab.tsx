import AnimatedStaggerParent from "@/components/feathers/animated-stagger-parent";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SKILLS, { SkillType } from "@/lib/constants/skills.constants";
import ResumeHeading from "./../_layout/resume-header";

export default function SkillsTab() {
  return (
    <>
      {/* Label */}
      <ResumeHeading.title>My Skills</ResumeHeading.title>

      {/* Info */}
      <ResumeHeading.description>
        An overview of my technical and professional skills, the tools I excel
        at, and the expertise I’ve developed throughout my web development
        journey.
      </ResumeHeading.description>

      <ScrollArea className="h-96 w-full p-2 mt-5 lg:mt-10">
        <TooltipProvider delayDuration={100}>
          <AnimatedStaggerParent
            delay={0}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {SKILLS.map(({ name, icon: Icon }: SkillType) => (
              <Tooltip key={name}>
                <TooltipTrigger
                  asChild
                  className="size-40 p-4 bg-[#27272c] rounded-lg shadow-sm hover:shadow-md "
                >
                  <div className="size-full p-4 group flex items-center justify-center">
                    <Icon className="size-24 text-white transition-all ease-in-out group-hover:text-accent group-hover:scale-90" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className=" text-lg font-medium capitalize">{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </AnimatedStaggerParent>
        </TooltipProvider>
      </ScrollArea>
    </>
  );
}
