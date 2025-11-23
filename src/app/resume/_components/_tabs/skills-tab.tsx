import AnimatedStaggerParent from "@/components/feathers/animated-stagger-parent";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import RESUME_TABS from "@/lib/constants/tabs.constant";

export default function SkillsTab() {
  const tabs = Object.values(RESUME_TABS);

  return (
    <TabsList className="flex flex-col max-w-[330px] w-full mx-auto lg:mx-0 gap-6">
      {tabs.map((item) => {
        return (
          <AnimatedStaggerParent key={item}>
            <TabsTrigger className="w-full" value={item}>
              {item}
            </TabsTrigger>
          </AnimatedStaggerParent>
        );
      })}
    </TabsList>
  );
}
