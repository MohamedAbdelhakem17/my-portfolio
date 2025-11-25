export type AboutMeType = {
  fieldName: string;
  value: string;
};

const ABOUT_ME: AboutMeType[] = [
  { fieldName: "name", value: "Mohamed Abdelhakem" },
  { fieldName: "phone", value: "01009474420" },
  { fieldName: "email", value: "mohamed.abdelhakem3200@gmail.com" },
  { fieldName: "location", value: "Cairo, Egypt" },
  {
    fieldName: "languages",
    value: "Arabic (Native), English (Work Proficiency)",
  },
  {
    fieldName: "frontend",
    value:
      "React.js, Next.js, HTML, CSS, JavaScript, Sass, Bootstrap, Redux, Context API, React Router, jQuery",
  },
  { fieldName: "backend", value: "Node.js, Express.js, MongoDB, Mongoose" },
  {
    fieldName: "tools",
    value: "Git, GitHub, Fetch API, Axios, XMLHttpRequest",
  },
];

export default ABOUT_ME;
