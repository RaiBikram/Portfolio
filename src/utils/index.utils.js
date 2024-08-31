import project1 from "../media/aboutsection.jpg";
// import project2 from "../media/aboutpic.jpg";
import project3 from "../media/about.jpg";
import project4 from "../media/aboutsec.jpg";

export const HERO_CONTENT = `Crafting efficient and user-friendly web applications with a passion for full stack development.`;

export const ABOUT_TEXT = `Hello! I'm Bikram Rai, an aspiring Full Stack Developer passionate about crafting dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, including JavaScript, Node.js, React, Tailwind CSS, Bootstrap, HTML, CSS, and MongoDB, I'm eager to bring my skills to the professional world and contribute to innovative projects. Committed to continuous learning and excited to collaborate with experienced teams, I'm ready to build impactful solutions and explore new challenges. Let's connect and discover how we can work together!.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Bootstrap"],
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },

  {
    title:"Weather Wizard",
    description:"A Weather Wizard",
    image: project4,
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  // {
  //   title: "Blogging Platform",
  //   // image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Kathmandu, Nepal ",
  phoneNo: "+9779863963772",
  email: "raibikraminfo@gmail.com",
};