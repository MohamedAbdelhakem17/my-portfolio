"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PROJECTS, { ProjectType } from "@/lib/constants/work.constant";

import type { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback } from "react";

export default function ProjectSlider({
  setActiveProject,
}: {
  setActiveProject: Dispatch<SetStateAction<number>>;
}) {
  const handleApi = useCallback(
    (api: EmblaCarouselType | undefined) => {
      if (!api) return;

      api.on("select", () => {
        const currentIndex = api.selectedScrollSnap();
        setActiveProject(currentIndex);
      });
    },
    [setActiveProject]
  );

  return (
    <Carousel
      className="lg:order-2 order-1 flex justify-center items-center"
      setApi={handleApi}
    >
      <div className="relative w-full max-w-[500px]">
        <CarouselContent className="">
          {PROJECTS.map((project: ProjectType, index: number) => (
            <CarouselItem key={index}>
              <Image
                src={project.image}
                alt={project.name}
                priority
                width={500}
                height={500}
                className="object-cover rounded-lg shadow-lg h-64 lg:h-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute inset-0 flex items-center justify-between px-3 lg:hidden">
          <CarouselPrevious className="!relative !top-0 !left-0 bg-black/40 text-white" />
          <CarouselNext className="!relative !top-0 !right-0 bg-black/40 text-white" />
        </div>
      </div>

      <div className="hidden lg:flex justify-center gap-4 mt-3 absolute -bottom-[70px] right-4">
        <CarouselPrevious className="static bg-gray-700 text-white" />
        <CarouselNext className="static bg-gray-700 text-white" />
      </div>
    </Carousel>
  );
}
