import PageWrapper from "@/components/common/page-wrapper";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import RESUME_TABS from "@/lib/constants/tabs.constant";
import { Metadata } from "next";
import SkillsTab from "./_components/_tabs/skills-tab";
import ResumeContent from "./_components/resume-content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View my professional experience, skills, education, and career background as a Full-Stack Developer.",
};

export default function ResumePage() {
  return (
    <PageWrapper className="py-12 xl:py-0">
      <div className="min-h-[80vh] my-auto flex items-center justify-center">
        <Tabs
          defaultValue={RESUME_TABS.EXPERIENCE}
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <div className="flex justify-center flex-col gap-y-10">
            <ResumeContent />
            <SkillsTab />
          </div>
          <div className="min-h-[60vh] w-full">
            <TabsContent className="w-full" value={RESUME_TABS.EXPERIENCE}>
              EXPERIENCE
            </TabsContent>
            <TabsContent className="w-full" value={RESUME_TABS.ABOUT_ME}>
              ABOUT_ME
            </TabsContent>
            <TabsContent className="w-full" value={RESUME_TABS.EDUCATION}>
              EDUCATION
            </TabsContent>
            <TabsContent className="w-full" value={RESUME_TABS.SKILLS}>
              SKILLS
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </PageWrapper>
  );
}
