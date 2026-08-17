import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiCloudinary,
  SiVercel,
  SiRender,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { MdApi, MdSecurity, MdSettingsInputComponent } from "react-icons/md";
import { FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";

// Maps a skill label (as used in lib/data.js) to a real brand icon + its
// brand color. Falls back to no icon if a label isn't listed here.
export const skillIconMap = {
  "HTML5": { Icon: FaHtml5, color: "#e34f26" },
  "CSS3": { Icon: FaCss3Alt, color: "#1572b6" },
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#f7df1e" },
  "React.js": { Icon: FaReact, color: "#61dafb" },
  "React Router": { Icon: SiReactrouter, color: "#ca4245" },
  "React Hooks": { Icon: FaCode, color: "#61dafb" },
  "Redux Toolkit": { Icon: SiRedux, color: "#764abc" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38bdf8" },
  "Node.js": { Icon: FaNodeJs, color: "#3c873a" },
  "Express.js": { Icon: SiExpress, color: "#000000" },
  "RESTful APIs": { Icon: MdApi, color: "#4b5563" },
  "JWT Authentication": { Icon: SiJsonwebtokens, color: "#000000" },
  "MongoDB": { Icon: SiMongodb, color: "#47a248" },
  "Mongoose": { Icon: SiMongodb, color: "#880000" },
  "MongoDB Atlas": { Icon: SiMongodb, color: "#47a248" },
  "Cloudinary": { Icon: SiCloudinary, color: "#3448c5" },
  "eSewa Payment Gateway": { Icon: FaMoneyBillWave, color: "#60bb46" },
  "Git": { Icon: FaGitAlt, color: "#f05032" },
  "GitHub": { Icon: FaGithub, color: "#181717" },
  "VS Code": { Icon: VscVscode, color: "#007acc" },
  "Postman": { Icon: SiPostman, color: "#ff6c37" },
  "Vercel": { Icon: SiVercel, color: "#000000" },
  "Render": { Icon: SiRender, color: "#46e3b7" },
  "State Management": { Icon: MdSettingsInputComponent, color: "#4b5563" },
  "Authentication & Authorization": { Icon: MdSecurity, color: "#4b5563" },
  "Responsive Design": { Icon: FaMobileAlt, color: "#4b5563" },
};

export const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};