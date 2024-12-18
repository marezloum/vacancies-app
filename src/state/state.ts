export type Vacancy = {
  id: number;
  title: string;
  companyName: string;
  location: string;
  tags: string[];
  date: string;
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
    location: "Moscow",
    date: "29/03/2021",
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
    location: "Moscow",
    date: "29/03/2021",
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
    title: "Front-end intern3",
    companyName: "internet lux",
    location: "Moscow",
    date: "29/03/2021",
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
    title: "Front-end intern4",
    companyName: "internet lux",
    location: "Moscow",
    date: "29/03/2021",
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
    location: "Moscow",
    date: "29/03/2021",
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
