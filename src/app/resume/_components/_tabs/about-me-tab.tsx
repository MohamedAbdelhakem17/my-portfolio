import AnimatedStaggerParent from "@/components/feathers/animated-stagger-parent";
import SocialLinks from "@/components/feathers/social-links";
import { ScrollArea } from "@/components/ui/scroll-area";
import ABOUT_ME, { AboutMeType } from "@/lib/constants/about-me.constants";
import ResumeHeading from "./../_layout/resume-header";

export default function AboutMeTab() {
  return (
    <>
      {/* Label */}
      <ResumeHeading.title>About Me</ResumeHeading.title>

      {/* Info */}
      <ResumeHeading.description>
        A concise introduction about myself, my passions, and my approach to web
        development, highlighting what drives me and the value I bring.
      </ResumeHeading.description>

      {/* Short description  */}
      <p className="leading-relaxed text-pretty text-md lg:text-xs text-center lg:text-left text-white/90 mt-4 mb-2">
        I am a front-end developer specializing in React.js and Next.js, with
        strong knowledge of HTML, CSS, and JavaScript. I build responsive
        interfaces using Tailwind CSS and Bootstrap, and I manage state using
        Redux and the Context API. I am experienced in API integration using
        Fetch and Axios, and I also work with back-end technologies such as
        Node.js, Express.js, and MongoDB, allowing me to function as a MERN
        stack developer.
      </p>

      {/* Information */}
      <ScrollArea className="h-72 w-full my-5">
        <ul className="grid grid-cols-1 pr-4">
          <AnimatedStaggerParent delay={0} className="space-y-4">
            {ABOUT_ME.map(({ fieldName, value }: AboutMeType) => (
              <li
                key={fieldName}
                className="group relative flex flex-col items-start justify-start py-3 px-4 bg-[#27272c] rounded-lg border border-transparent hover:border-accent/10 transition-all duration-300 hover:translate-x-1"
              >
                <span className="font-semibold text-white/70 text-sm mb-1 group-hover:text-white transition-colors capitalize">
                  {fieldName}
                </span>
                <span className="text-white/90 text-sm">{value}</span>
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </li>
            ))}
          </AnimatedStaggerParent>
        </ul>
      </ScrollArea>

      {/* Social links and download CV action  */}
      <SocialLinks />
    </>
  );
}
