import EXPERIENCE, {
  ExperienceType,
} from "@/lib/constants/experiences.constants";
import ResumeHeading from "../_layout/resume-header";

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-5 lg:mt-10">
        {EXPERIENCE.map((item: ExperienceType, index: number) => {
          return (
            <div
              key={index}
              className=" py-6 bg-[#232329] px-10 rounded-xl flex flex-col items-center justify-between lg:items-start gap-1"
            >
              <p className="text-accent text-sm">{item.duration}</p>
              <h3 className="text-xl font-semibold h-18 mb-6">{item.title}</h3>
              <a
                href={item.company.link}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 text-xs font-bold"
              >
                <span className="size-2 rounded-full bg-accent inline-block" />
                {item.company.name}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
