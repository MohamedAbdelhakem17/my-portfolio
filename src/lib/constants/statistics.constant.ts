// Type
export type StatItem = {
  value: number;
  label: string;
};

const STATS: StatItem[] = [
  {
    value: 1,
    label: "Years of experience",
  },
  {
    value: 8,
    label: "Projects completed",
  },
  {
    value: 8,
    label: "Technologies mastered",
  },
  {
    value: 999,
    label: "Code commits",
  },
] as const;

export default STATS;
