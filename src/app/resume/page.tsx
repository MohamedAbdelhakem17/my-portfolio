import PageWrapper from "@/components/common/page-wrapper";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import RESUME_TABS from "@/lib/constants/tabs.constant";
import { Metadata } from "next";
import AboutMeTab from "./_components/_tabs/about-me-tab";
import EducationTab from "./_components/_tabs/education-tab";
import ExperienceTab from "./_components/_tabs/experience-tab";
import SkillsTab from "./_components/_tabs/skills-tab";
import TabTrigger from "./_components/_tabs/tab-trigger";
import ResumeContent from "./_components/resume-content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View my professional experience, skills, education, and career background as a Full-Stack Developer.",
};

export default function ResumePage() {
  return (
    <PageWrapper className="py-12 xl:py-0">
      <div className="min-h-[80vh] my-auto flex items-center justify-center col-span-full">
        <Tabs
          defaultValue={RESUME_TABS.EXPERIENCE}
          className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {/* LEFT SIDE — Tabs + Resume Summary */}
          <div className="flex flex-col gap-y-10 lg:col-span-1 items-start">
            <ResumeContent />
            <TabTrigger />
          </div>

          {/* RIGHT SIDE — Tabs Content */}
          <div className="min-h-[60vh] w-full lg:col-span-2 p-0">
            {/* Experience */}
            <TabsContent className="w-full" value={RESUME_TABS.EXPERIENCE}>
              <ExperienceTab />
            </TabsContent>

            {/* About */}
            <TabsContent className="w-full" value={RESUME_TABS.ABOUT_ME}>
              <AboutMeTab />
            </TabsContent>

            {/* Education */}
            <TabsContent className="w-full" value={RESUME_TABS.EDUCATION}>
              <EducationTab />
            </TabsContent>

            {/* Skills */}
            <TabsContent className="w-full" value={RESUME_TABS.SKILLS}>
              <SkillsTab />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </PageWrapper>
  );
}
