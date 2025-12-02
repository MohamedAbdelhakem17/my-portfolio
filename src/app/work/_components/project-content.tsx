"use client";
import { useState } from "react";
import ProjectInfo from "./project-info";
import ProjectSlider from "./project-slider";

export default function ProjectContent() {
  const [activeProject, setActiveProject] = useState<number>(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Image */}
      <ProjectSlider setActiveProject={setActiveProject} />

      {/* Content */}
      <ProjectInfo activeProject={activeProject} />
    </div>
  );
}
