import AnimatedStaggerParent from "@/components/feathers/animated-stagger-parent";

export default function ResumeContent() {
  return (
    // Hir me
    <AnimatedStaggerParent>
      {/* Question */}
      <h1 className="font-bold lg:text-5xl md:text-3xl text-2xl lg:mb-5 mb-1 text-center lg:text-left mt-4 lg:mt-0">
        Why Hire Me?
      </h1>

      {/* Answer */}
      <p className="text-md leading-9 text-pretty mb-3 text-center lg:text-left">
        I create efficient, reliable, and scalable web solutions, with strong
        expertise in WordPress , React , Next and Node.js development.
      </p>
    </AnimatedStaggerParent>
  );
}
