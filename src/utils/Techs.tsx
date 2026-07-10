/** @format */

import CssSvg from "../assets/svg/css.svg";
import DockerSvg from "../assets/svg/docker.svg";
import FigmaSvg from "../assets/svg/figma.svg";
import FlaskSvg from "../assets/svg/flask.svg";
import GitSvg from "../assets/svg/git.svg";
import HtmlSvg from "../assets/svg/html.svg";
import JavaScriptSvg from "../assets/svg/javascript.svg";
import MobxSvg from "../assets/svg/mobx.svg";
// import PostmanSvg from "../assets/svg/postman.svg";
import PythonSvg from "../assets/svg/python.svg";
import ReactSvg from "../assets/svg/react.svg";
import SassSvg from "../assets/svg/sass.svg";
import SQLiteSvg from "../assets/svg/sqlite.svg";
import TailwindSvg from "../assets/svg/tailwind.svg";
import TypeScriptSvg from "../assets/svg/typescript.svg";
import VercelSvg from "../assets/svg/vercel.svg";
import ViteSvg from "../assets/svg/vite.svg";
// import VueSvg from "../assets/svg/vue.svg";

export const techs = [
  {
    label: "JavaScript",
    color: "#F7DF1E",
    bg: "#2a2600",
    icon: <JavaScriptSvg width={36} height={36} color="#F7DF1E" />,
  },
  {
    label: "TypeScript",
    color: "#3178C6",
    bg: "#0d2137",
    icon: <TypeScriptSvg width={36} height={36} color="#3178C6" />,
  },
  {
    label: "HTML",
    color: "#E34F26",
    bg: "#2a0d00",
    icon: <HtmlSvg width={36} height={36} />,
  },
  {
    label: "CSS",
    color: "#1572B6",
    bg: "#001e33",
    icon: <CssSvg width={36} height={36} />,
  },
  {
    label: "Sass",
    color: "#CC6699",
    bg: "#2a0e1d",
    icon: <SassSvg width={36} height={36} color="#CC6699" />,
  },
  {
    label: "TailwindCSS",
    color: "#06B6D4",
    bg: "#001e24",
    icon: <TailwindSvg width={36} height={36} color="#06B6D4" />,
  },
  {
    label: "React",
    color: "#61DAFB",
    bg: "#001e26",
    icon: <ReactSvg width={36} height={36} color="#61DAFB" />,
  },
  // {
  //   label: "Vue",
  //   color: "#42B883",
  //   bg: "#001a0f",
  //   icon: <VueSvg width={36} height={36} />,
  // },
  {
    label: "Vite",
    color: "#646CFF",
    bg: "#0d0e26",
    icon: <ViteSvg width={36} height={36} />,
  },
  {
    label: "Python",
    color: "#3776AB",
    bg: "#0a1520",
    icon: <PythonSvg width={36} height={36} />,
  },
  {
    label: "Flask",
    color: "#ffffff",
    bg: "#1a1a1a",
    icon: <FlaskSvg width={36} height={36} color="white" />,
  },
  {
    label: "Git",
    color: "#F05032",
    bg: "#260c00",
    icon: <GitSvg width={36} height={36} color="#EE513B" />,
  },
  {
    label: "SQLite",
    color: "#003B57",
    bg: "#00121a",
    icon: <SQLiteSvg width={36} height={36} />,
  },
  // {
  //   label: "Postman",
  //   color: "#FF6C37",
  //   bg: "#260f00",
  //   icon: <PostmanSvg width={36} height={36} color="#FF6C37" />,
  // },
  {
    label: "Docker",
    color: "#2496ED",
    bg: "#001a33",
    icon: <DockerSvg width={36} height={36} color="#1794D4" />,
  },
  {
    label: "Vercel",
    color: "#ffffff",
    bg: "#1a1a1a",
    icon: <VercelSvg width={36} height={36} color="white" />,
  },
  {
    label: "Figma",
    color: "#F24E1E",
    bg: "#260800",
    icon: <FigmaSvg width={36} height={36} />,
  },
  {
    label: "MobX",
    color: "#FF7A00",
    bg: "#261200",
    icon: <MobxSvg width={36} height={36} />,
  },
];

// Split into two rows
export const row1 = techs.slice(0, Math.ceil(techs.length / 2));
export const row2 = techs.slice(Math.ceil(techs.length / 2));
