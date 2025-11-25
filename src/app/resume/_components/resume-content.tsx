import AnimatedStaggerParent from "@/components/feathers/animated-stagger-parent";
import ResumeHeading from "./_layout/resume-header";

export default function ResumeContent() {
  return (
    // Hir me
    <AnimatedStaggerParent>
      {/* Question */}
      <ResumeHeading.title>Why Hire Me?</ResumeHeading.title>

      {/* Answer */}
      <ResumeHeading.description>
        I create efficient, reliable, and scalable web solutions, with strong
        expertise in WordPress , React , Next and Node.js development.
      </ResumeHeading.description>
    </AnimatedStaggerParent>
  );
}
