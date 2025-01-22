import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-02.jpeg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

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
    title: "My Portfolio",
    image: project4,
    description:
      "Designed and developed my personal portfolio website using React. This project showcases my skills, projects, and experiences in a visually appealing and interactive manner. I implemented responsive design, animations, and smooth transitions to create a seamless user experience.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    webLink: "https://my-portfolio-chi-sage-27.vercel.app/",
    gitLink: "https://github.com/rmahajan466/My-Portfolio.git",
  },
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
    gitLink: "https://github.com/rmahajan466/drag-and-drop-tier-list-app.git",
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
  {
    title: "Python Hangman Game",
    image: project5,
    description: "A classic Hangman game built using Python. This project helped me enhance my Python programming skills, including string manipulation, file handling, and logic implementation. The game randomly selects a word from a predefined list, and the player has to guess the word within a limited number of attempts.",
    technologies: ["Python"],
    webLink: "#",
    gitLink: "https://github.com/rmahajan466/Python_Hangman.git",
  },
  {
    title: "Python Tetris Game",
    image: project6,
    description: "A fun Tetris game developed using Python. This project allowed me to explore game development concepts, including game logic, user input, and graphical interfaces. The game features classic Tetris blocks that fall from the top of the screen, and the player must rotate and move the blocks to create horizontal lines and clear the board.",
    technologies: ["Python"],
    webLink: "#",
    gitLink: "https://github.com/rmahajan466/Python-Tetris.git",
  },
  {
    title: "Python Quiz Game",
    image: project7,
    description: "This is a simple quiz game developed using Python. The game presents multiple-choice questions to the player, who must select the correct answer from the given options. The project helped me practice Python programming concepts, including functions, loops, conditional statements, requests, JSON, pprint, and random.",
    technologies: ["Python", "JSON", "API"],
    webLink: "#",
    gitLink: "https://github.com/rmahajan466/Quizzing-Game-using-python.git",
  },
];

export const CONTACT = {
  address: "Khargone | Indore | Vadodara | Ahemdabad",
  phoneNo: "+91-75663-64655",
  email: "raghavmahajan965@gmail.com",
};

export const LINKS = {
  resume : "https://drive.google.com/drive/folders/1lQrBahmY0Ekw8B9UVuFZjdJMZLwm886b?usp=drive_link",
  linkedin : "https://www.linkedin.com/in/raghav-mahajan-jsk777/",
  github: "https://github.com/rmahajan466",
  twitter: "https://x.com/rg_mhjn",
  mail : "mailto:raghavmahajan965@gmail.com",
};