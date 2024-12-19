export type Vacancy = {
  id: number;
  title: string;
  companyName: string;
  location: string;
  tags: string[];
  date: string;
  jobType: string;
  schedule: string;
  experience: number;
  salary: {
    from: number;
    to: number;
  };
};
export const VACANCIES: Vacancy[] = [
  {
    id: 1,
    title: "Front-end intern1",
    companyName: "internet lux",
    location: "Москва",
    date: "29/03/2021",
    schedule: "Полный день",
    jobType: "Частичная занятость",
    experience: 1,
    tags: [
      "jQuery",
      "JavaScript",
      "CSS3",
      "React",
      "Git",
      "Vue",
      "Flexbox",
      "HTML5",
    ],
    salary: { from: 15000, to: 300000 },
  },
  {
    id: 2,
    title: "Front-end intern2",
    companyName: "internet lux",
    location: "Москва",
    date: "29/03/2021",
    jobType: "Частичная занятость",
    schedule: "Гибкий график",
    experience: 2,
    tags: [
      "jQuery",
      "JavaScript",
      "CSS3",
      "React",
      "Git",
      "Vue",
      "Flexbox",
      "HTML5",
    ],
    salary: { from: 15000, to: 300000 },
  },
  {
    id: 3,
    experience: 3,
    title: "Front-end intern3",
    companyName: "internet lux",
    location: "Москва",
    date: "29/03/2021",
    jobType: "Проектная работа",
    schedule: "Удаленная работа",
    tags: [
      "jQuery",
      "JavaScript",
      "CSS3",
      "React",
      "Git",
      "Vue",
      "Flexbox",
      "HTML5",
    ],
    salary: { from: 15000, to: 300000 },
  },
  {
    id: 4,
    experience: 4,
    title: "Front-end intern4",
    companyName: "internet lux",
    location: "Москва",
    date: "29/03/2021",
    jobType: "Стажировка",
    schedule: "Полный день",
    tags: [
      "jQuery",
      "JavaScript",
      "CSS3",
      "React",
      "Git",
      "Vue",
      "Flexbox",
      "HTML5",
    ],
    salary: { from: 15000, to: 300000 },
  },
  {
    id: 5,
    title: "Front-end intern5",
    companyName: "internet lux",
    location: "Москва",
    experience: 5,
    date: "29/03/2021",
    jobType: "Стажировка",
    schedule: "Полный день",
    tags: [
      "jQuery",
      "JavaScript",
      "CSS3",
      "React",
      "Git",
      "Vue",
      "Flexbox",
      "HTML5",
    ],
    salary: { from: 15000, to: 300000 },
  },
];
