const RESUME_TABS = {
  EXPERIENCE: "Experience",
  EDUCATION: "Education",
  ABOUT_ME: "About me",
  SKILLS: "Skills",
} as const;

export type TabType = keyof typeof RESUME_TABS;

export type TabValue = (typeof RESUME_TABS)[keyof typeof RESUME_TABS];

export default RESUME_TABS;
