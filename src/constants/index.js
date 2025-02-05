import codeForces from "../assets/cp/codeforces1.jpeg";
import atCoders from "../assets/cp/AtCoders.png";
import leetCode from "../assets/cp/leetCode.jpeg";
import codeChef from "../assets/cp/codechef.jpeg";
import gfg from "../assets/cp/gfg.jpeg";

import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-02.jpeg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import project11 from "../assets/projects/project-11.svg";

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
    technologies: ["Python", "MySQL", "Pytest", "Pandas", "Matplotlib", "Numpy"],
  },
];

export const CP = [
  {
    title: "CodeForces",
    rank: 537,
    logo: codeForces,
    link: "https://codeforces.com/profile/rg_mhjn",
  },
  {
    title: "AtCoders",
    rank: 111,
    logo: atCoders,
    link: "https://atcoder.jp/users/rg_mhjn",
  },
  {
    title: "LeetCode",
    rank: 1515,
    logo: leetCode,
    link: "https://leetcode.com/u/rg_mhjn/",
  },
  {
    title: "CodeChef",
    rank: 1044,
    logo: codeChef,
    link: "https://www.codechef.com/users/rg_mhjn",
  },
  {
    title: "GeeksforGeeks",
    rank: 82,
    logo: gfg,
    link: "https://www.geeksforgeeks.org/user/rg_mhjn/",
  },
]

export const PROJECTS = [
  {
    title: "Crypto Tracker",
    image: project8,
    description:
      "Crypto Tracker is a web application that allows users to track real-time cryptocurrency prices, and trends. The app provides a user-friendly interface with interactive charts, live updates, and detailed information about various cryptocurrencies. Users can view historical data, and analyze market trends to make informed decisions.",
    technologies: ["React", "Chart.js", "CoinGecko API", "Tailwind CSS", "DaisyUI"],
    webLink: "https://crypto-tracker-cyan-seven.vercel.app/",
    gitLink: "https://github.com/rmahajan466/Crypto-Project-CoinGecko.git",
  },
  {
    title: "Pokedex",
    image: project11,
    description: "This project is a Pokedex application built with React for the frontend. It allows users to search for and view details about various Pokémon.",
    technologies: ["React", "HTML", "CSS"],
    webLink: "https://pokedex-pi-gilt-80.vercel.app/",
    gitLink: "https://github.com/rmahajan466/Pokedex.git",
  },
  {
    title: "CountDown Timmer",
    image: project10,
    description: "This project is part of the PWSkills Full Stack course, focusing on React. It is a simple countdown timer project.",
    technologies: ["React", "HTML", "CSS"],
    webLink: "https://count-down-timmer-taupe.vercel.app/",
    gitLink: "https://github.com/rmahajan466/React-CountDown-App.git",

  },
  {
    title: "Wordle Game",
    image: project9,
    description:
      "This is a Wordel game built with React. The game allows users to guess a word within a limited number of attempts.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    webLink: "https://wordle-game-virid.vercel.app/",
    gitLink: "https://github.com/rmahajan466/React-Wordle.git",
  },
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
    webLink: null,
    gitLink: "https://github.com/rmahajan466/Python_Hangman.git",
  },
  {
    title: "Python Tetris Game",
    image: project6,
    description: "A fun Tetris game developed using Python. This project allowed me to explore game development concepts, including game logic, user input, and graphical interfaces. The game features classic Tetris blocks that fall from the top of the screen, and the player must rotate and move the blocks to create horizontal lines and clear the board.",
    technologies: ["Python"],
    webLink: null,
    gitLink: "https://github.com/rmahajan466/Python-Tetris.git",
  },
  {
    title: "Python Quiz Game",
    image: project7,
    description: "This is a simple quiz game developed using Python. The game presents multiple-choice questions to the player, who must select the correct answer from the given options. The project helped me practice Python programming concepts, including functions, loops, conditional statements, requests, JSON, pprint, and random.",
    technologies: ["Python", "JSON", "API"],
    webLink: null,
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