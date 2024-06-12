import HTML5 from "../../assets/html5.png";
import CSS3 from "../../assets/css3.png";
import JS from "../../assets/js.png";
import TS from "../../assets/ts.png";
import SASS from "../../assets/sass.png";
import REACTJS from "../../assets/react.png";
import NEXTJS from "../../assets/nextjs.png";
import TWCSS from "../../assets/tailwindcss.png";
import NODEJS from "../../assets/node.png";
import EXPRESSJS from "../../assets/express.png";
import MYSQL from "../../assets/mysql.png";
import GIT from "../../assets/git.png";
import GITHUB from "../../assets/github.png";
import VSC from "../../assets/vsc.png";
import FIGMA from "../../assets/figma.png";

const frontendSkills = [
  {
    src: HTML5,
    alt: "HTML5",
  },
  {
    src: CSS3,
    alt: "CSS3",
  },
  {
    src: JS,
    alt: "JavaScript",
  },
  {
    src: TS,
    alt: "TypeScript",
  },
  {
    src: SASS,
    alt: "SASS, SCSS",
  },
  {
    src: REACTJS,
    alt: "ReactJs, React.js",
  },
  {
    src: NEXTJS,
    alt: "Next.js, NextJs (App router)",
  },
  {
    src: TWCSS,
    alt: "TailwindCSS",
  },
];

const backendSkills = [
  {
    src: NODEJS,
    alt: "Node, NodeJs, Nodejs",
  },
  {
    src: EXPRESSJS,
    alt: "Express, Ex, ExpressJs",
  },
  {
    src: MYSQL,
    alt: "SQL, MySql",
  },
];

const otherSkills = [
  {
    src: GIT,
    alt: "Git",
  },
  {
    src: GITHUB,
    alt: "Github",
  },
  {
    src: VSC,
    alt: "Visual Studio Code, VSC",
  },
  {
    src: FIGMA,
    alt: "Figma",
  },
];

export const skillList = [
  {
    name: "Front-end technologies",
    list: frontendSkills,
  },
  {
    name: "Back-end technologies",
    list: backendSkills,
  },
  {
    name: "Other tools",
    list: otherSkills,
  },
];
