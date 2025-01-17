import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-02.jpeg";
import project3 from "../assets/projects/project-3.png";

const CONTENT = `I am an enthusiastic fresher in full stack development, eager to craft robust and scalable web applications. I have built a solid foundation in front-end technologies like React, as well as back-end technologies such as MySQL, and MongoDB. My goal is to apply my growing expertise to create innovative solutions that contribute to business growth and provide exceptional user experiences.`;
export const HERO_CONTENT = CONTENT.replace(/\. /g, '.\n');

export const TEXT = `I am a dedicated and versatile full stack developer, passionate about creating efficient and user-friendly web applications. As a fresher, I have learnt technologies like React, MySQL, MongoDB, Python, Java, C, C++, and other Development Tools through various projects and hands-on learning. My journey in web development started with a curiosity about how things work, which has grown into a commitment to learning and tackling new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects whenever possible.`;
export const ABOUT_TEXT = TEXT.replace(/\. /g, '.\n');

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer Intern",
    company: "MaDdy Technologies Pvt. Ltd.",
    description: `As a Software Engineer Intern at MaDdy Technologies Pvt. Ltd., my role involves developing software solutions using Python and Jupyter Notebook, with a focus on data science applications. I collaborate with the team to analyze data, create models, and implement algorithms that drive insights and enhance decision-making processes. My responsibilities include writing clean, efficient code, conducting data analysis, unit testing using PyTest, and contributing to the development of innovative data-driven solutions.`,
    technologies: ["Python", "MySQL", "JuPyter Notebook", "Pytest", "Pandas", "Matplotlib", "Numpy"],
  },
];

export const PROJECTS = [
  {
    title: "Tik-Tac-Toe",
    image: project1,
    description:
      "A classic Tic-Tac-Toe game built using React! This project helped me deepen my understanding of React components, state management, and dynamic rendering.",
    technologies: ["HTML", "CSS", "React"],
    webLink: "https://rmahajan466.github.io/tik-tac-toe/",
    gitLink: "https://github.com/rmahajan466/tik-tac-toe.git",
  },
  {
    title: "Tier List App",
    image: project2,
    description:
      "This is a drag and drop based tier list app that allows users to create and customize their own tier lists. Users can easily drag and drop items into different tiers, making it convenient to organize and rank various elements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    webLink: "https://rmahajan466.github.io/drag-and-drop-tier-list-app/",
    gitLink: "git clone https://github.com/rmahajan466/drag-and-drop-tier-list-app.git",
  },
  {
    title: "Stopwatch",
    image: project3,
    description:
      "Developed a simple stopwatch using HTML, CSS, and JavaScript. The stopwatch includes features such as start, stop, and reset functionality, with real-time updates in the format of Minutes: Seconds: Milliseconds. It is designed with a clean UI and efficient timing using `setInterval` for accurate performance.",
    technologies: ["HTML", "CSS", "JavaScript"],
    webLink: "https://rmahajan466.github.io/StopWatch/",
    gitLink: "https://github.com/rmahajan466/StopWatch.git",
  },
];

export const CONTACT = {
  address: "Khargone | Indore | Vadodara | Ahemdabad",
  phoneNo: "+91-75663-64655",
  email: "raghavmahajan965@gmail.com",
};
