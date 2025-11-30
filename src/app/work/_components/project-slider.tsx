import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import PROJECTS from "@/lib/constants/work.constant";
import ProjectCard from "./project-card";

export default function ProjectSlider() {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {PROJECTS.map((project, index) => (
          <CarouselItem key={index} className="pl-1">
            <ProjectCard project={project} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bottom-0" />
      <CarouselNext />
    </Carousel>
  );
}
