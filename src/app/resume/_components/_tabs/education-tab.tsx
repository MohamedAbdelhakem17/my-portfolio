import { ScrollArea } from "@/components/ui/scroll-area";
import EDUCATION, { EducationType } from "@/lib/constants/education.constants";
import ResumeContainer from "./../_layout/resume-card";
import ResumeHeading from "./../_layout/resume-header";

export default function EducationTab() {
  return (
    <>
      {/* Label */}
      <ResumeHeading.title>My Education</ResumeHeading.title>

      {/* Info */}
      <ResumeHeading.description>
        A brief overview of my academic journey, the courses I&apos;ve
        completed, the skills I&apos;ve acquired, and the milestones I&apos;ve
        achieved in my education.
      </ResumeHeading.description>

      <ScrollArea className="h-96 w-full p-2 mt-5 lg:mt-10">
        <ResumeContainer>
          {EDUCATION.map((item: EducationType, index: number) => (
            <ResumeContainer.ResumeCard key={index}>
              <ResumeContainer.duration>
                {item.duration}
              </ResumeContainer.duration>
              <ResumeContainer.title>{item.title}</ResumeContainer.title>
              <ResumeContainer.place>{item.place}</ResumeContainer.place>
            </ResumeContainer.ResumeCard>
          ))}
        </ResumeContainer>
      </ScrollArea>
    </>
  );
}
