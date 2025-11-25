import { ScrollArea } from "@/components/ui/scroll-area";
import EXPERIENCE, {
  ExperienceType,
} from "@/lib/constants/experiences.constants";
import ResumeHeading from "../_layout/resume-header";
import ResumeContainer from "./../_layout/resume-card";

export default function ExperienceTab() {
  return (
    <>
      {/* Label */}
      <ResumeHeading.title>My Experience</ResumeHeading.title>

      {/* Info  */}
      <ResumeHeading.description>
        A snapshot of the roles I’ve taken on, the projects I’ve contributed to,
        and the impact I’ve made throughout my journey in web development.
      </ResumeHeading.description>

      <ScrollArea className="h-96 w-full p-2 mt-5 lg:mt-10">
        <ResumeContainer>
          {EXPERIENCE.map((item: ExperienceType, index: number) => (
            <ResumeContainer.ResumeCard key={index}>
              <ResumeContainer.duration>
                {item.duration}
              </ResumeContainer.duration>
              <ResumeContainer.title>{item.title}</ResumeContainer.title>
              <ResumeContainer.place
                as="a"
                href={item.company.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.company.name}
              </ResumeContainer.place>
            </ResumeContainer.ResumeCard>
          ))}
        </ResumeContainer>
      </ScrollArea>
    </>
  );
}
