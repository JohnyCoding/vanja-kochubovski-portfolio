// Section Header
export const heroTitle = "I am Vanja Kochubovski";
export const heroSubTitle = "Game & Web Developer";

// Socials
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
export const socials = [
  {
    name: "github",
    url: "https://github.com/JohnyCoding",
    icon: RiGithubFill,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/vanja-kochubovski-930aa7139/",
    icon: RiLinkedinBoxFill,
  },
];

// Section About
import photo from "@/public/photo.jpg";
export const photoOfMe = photo;
export const aboutDescription = `Software developer with a Bachelor's degree from Skopje, Macedonia (Faculty of Computer Science and Engineering). I started writing code ${new Date().getFullYear() - 2013} years ago, and have worked with different programming languages and frameworks in several fields such as Game Development and Web Development.`;

// Section Profile
import AgileImage from "@/public/skills/agile.png";
import BootstrapImage from "@/public/skills/bootstrap.png";
import CoronaSdkImage from "@/public/skills/coronasdk.png";
import CSharpImage from "@/public/skills/csharp.png";
import CssImage from "@/public/skills/css.png";
import DockerImage from "@/public/skills/docker.png";
import DotnetImage from "@/public/skills/dotnet.png";
import EntityFrameworkImage from "@/public/skills/entityframework.png";
import GitImage from "@/public/skills/git.png";
import HtmlImage from "@/public/skills/html5.png";
import JavaScriptImage from "@/public/skills/javascript.png";
import LuaImage from "@/public/skills/lua.png";
import NextJSImage from "@/public/skills/nextjs.png";
import ReactImage from "@/public/skills/react.png";
import ReactQueryImage from "@/public/skills/reactquery.png";
import ReduxImage from "@/public/skills/redux.png";
import SassImage from "@/public/skills/sass.png";
import TailwindCssImage from "@/public/skills/tailwindcss.png";
import TypeScriptImage from "@/public/skills/typescript.png";
import UnityImage from "@/public/skills/unity3d.png";

export const skills = [
  {
    src: AgileImage,
    alt: "Agile development logo",
    name: "Agile Development",
  },
  {
    src: GitImage,
    alt: "Git logo",
    name: "Git",
  },
  {
    src: DockerImage,
    alt: "Docker logo",
    name: "Docker",
  },
  {
    src: CoronaSdkImage,
    alt: "Corona SDK game engine logo",
    name: "Corona SDK",
  },
  {
    src: LuaImage,
    alt: "Lua logo",
    name: "Lua",
  },
  {
    src: UnityImage,
    alt: "Unity logo",
    name: "Unity Engine",
  },
  {
    src: CSharpImage,
    alt: "C# logo",
    name: "C#",
  },
  {
    src: DotnetImage,
    alt: ".NET logo",
    name: ".NET",
  },
  {
    src: EntityFrameworkImage,
    alt: "Entity Framework logo",
    name: "Entity Framework",
  },
  {
    src: HtmlImage,
    alt: "HTML logo",
    name: "HTML5",
  },
  {
    src: CssImage,
    alt: "CSS logo",
    name: "CSS3",
  },
  {
    src: BootstrapImage,
    alt: "Bootstrap CSS logo",
    name: "Bootstrap",
  },
  {
    src: SassImage,
    alt: "SASS logo",
    name: "Sass",
  },
  {
    src: TailwindCssImage,
    alt: "Tailwind css logo",
    name: "Tailwindcss",
  },
  {
    src: JavaScriptImage,
    alt: "JavaScript logo",
    name: "JavaScript",
  },
  {
    src: TypeScriptImage,
    alt: "TypeScript logo",
    name: "TypeScript",
  },
  {
    src: ReactImage,
    alt: "React logo",
    name: "React",
  },
  {
    src: NextJSImage,
    alt: "NextJS logo",
    name: "Next JS",
  },
  {
    src: ReactQueryImage,
    alt: "React query logo",
    name: "React Query",
  },
  {
    src: ReduxImage,
    alt: "Redux logo",
    name: "Redux Toolkit",
  },
];

// Section Services
import { FaGamepad, FaGlobe } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
export const services = [
  {
    name: "Game Development",
    icon: FaGamepad,
    description:
      "From stunning 3d environments to responsive gameplay mechanics, I specialize in crafting experiences that captivate players. With expertise in C#, physics simulations, and optimized performance, I can bring your game concept to life—whether it's an indie masterpiece, or a mobile hit. Let's build something players will love!",
  },
  {
    name: "Web Design",
    icon: FaGlobe,
    description:
      "With expertise in HTML, CSS, JavaScript, and modern frameworks like NextJS, I create responsive, high-performance websites and web apps. Whether you need an engaging landing page, a dynamic single-page application, or a full-scale user interface, I can deliver pixel-perfect designs that captivate your audience and drive results!",
  },
  {
    name: "Web Development",
    icon: IoCodeSlashSharp,
    description:
      "With my experience and knowledge of building web applications, and scalable APIs, I can deliver high-quality performance-driven solutions tailored to your needs. Let's bring your vision to life with the power of .NET",
  },
];

// Section Portfolio
import HK1Image from "@/public/games/HelloKitty1.webp";
import HK2Image from "@/public/games/HelloKitty2.webp";
import PiggyImage from "@/public/games/PiggyMazeRunner.webp";
import MFWImage from "@/public/games/BabyFirstWords.png";

export const portfolioFilters = ["Games", "Websites"];

export const games = [
  {
    name: "Hello Kitty Racing Adventure",
    description:
      "A fun casual racing game I worked on in collaboration with Sanrio. It was a very fun and unique experience to work with a big brand, and the game was a huge success, achieving 5M+ downloads.",
    links: [
      "https://play.google.com/store/apps/details?id=com.iabuzz.HelloKittyRacingAdventure",
      "https://apps.apple.com/us/app/hello-kitty-racing-adventures/id1392900680",
    ],
    src: HK1Image,
  },
  {
    name: "Hello Kitty Racing Adventure 2",
    description:
      "After the success of the first hello kitty game, our collaboration continued and I worked on a similar type of game but with different mechanics and themes.",
    links: [
      "https://play.google.com/store/apps/details?id=com.iabuzz.HelloKittyRacingAdventure2",
      "https://apps.apple.com/us/app/hello-kitty-racing-adventure-2/id1462751928",
    ],
    src: HK2Image,
  },
  {
    name: "Piggy Maze Runner",
    description:
      "A fun casual maze crawling game with a couple of minigames thrown in. It was a big success, achieving 1M+ downloads",
    links: [
      "https://play.google.com/store/apps/details?id=com.iabuzz.mazerunner",
      "https://apps.apple.com/us/app/mazes-for-kids-puzzle-games/id1473114613",
    ],
    src: PiggyImage,
  },
  {
    name: "My First Words",
    description:
      "A fun learning game for preschool children that I created and published myself under my own company.",
    links: [
      "https://play.google.com/store/apps/details?id=com.PomPom.MyFirstWords",
    ],
    src: MFWImage,
  },
];

import PomPomImage from "@/public/websites/pompom.png";
import FinancialImage from "@/public/websites/financial.png";
import PhotographerImage from "@/public/websites/photographer.png";

export const websites = [
  {
    name: "Pom Pom Website",
    description: "The website I made for my game publisher profile",
    link: "https://pompomplay.com/",
    src: PomPomImage,
  },
  {
    name: "Business Website",
    description: "Design showcase of a website I created for a client.",
    link: "https://tailwind-portfolio-website.netlify.app/",
    src: FinancialImage,
  },
  {
    name: "Photographer Portfolio",
    description:
      "Design showcase of a portfolio website I created for a client.",
    link: "https://tailwind-portfolio-app.netlify.app/",
    src: PhotographerImage,
  },
];

export const githubUrl = "https://github.com/JohnyCoding";

// Section Footer
export const copyrightText = `Copyright ${new Date().getFullYear()} | Design By Vanja Kochubovski`;
