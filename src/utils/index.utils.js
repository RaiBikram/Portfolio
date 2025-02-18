import kinmel from "../media/kinmel.png";
import OAuthGoogle from "../media/oauth.png";
import portfolio from "../media/portfolio-website.png";
import weather_widget from "../media/weather-widget.png";
import AI_Health_Assistant from "../media/ai-health-asistant.png";

export const HERO_CONTENT = `A passionate MERN stack developer focused on building dynamic, efficient web applications and always eager to learn and innovate.s`;

export const ABOUT_TEXT = `As a MERN stack developer with expertise in MongoDB, Express, React, Node.js, and Next.js, I’m passionate about building efficient, scalable web applications. Always eager to learn and explore new technologies, I strive to create innovative solutions. Let’s connect and build something impactful!`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],

//   },
// ];

export const PROJECTS = [
  {
    title: "AI Health Assistant",
    image: AI_Health_Assistant,
    description:
      "AI Health Assistant: An AI-powered system for analyzing medical reports, answering queries, and providing insights. Built with Gemini AI, LangChain, RAG, and Pinecone to offer real-time responses and relevant data retrieval for healthcare professionals and patients.",
    technologies: ["Next.js", "Tailwind"],
    link: "https://aihealthassistant.vercel.app",
    github: "https://github.com/ItsBikramRai/AI_Health_Assistant",
  },
  {
    title: "Kinmel Website",
    image: kinmel,
    description:
      "Kinmel is an e-commerce website built for the Nepal market. It allows users to browse products, filter by category and price, and add items to their cart. This project was developed as part of a portfolio to demonstrate full-stack development skills, focusing on a seamless shopping experience.",

    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Bootstrap"],
    link: "https://kinmel.onrender.com",
    github: "https://github.com/ItsBikramRai/Kinmel",
  },
  {
    title: "AuthPlus: Google and Email-Based Authentication",
    image: OAuthGoogle,
    description:
      "AuthPlus is a robust authentication platform designed to manage user login, signup, password reset, and email verification. This platform supports both **Google OAuth** and **manual authentication** methods, giving users the flexibility to log in using their Google account or with their email and password. With seamless integration of **Passport.js**, users can securely sign up, verify their email, and reset forgotten passwords with ease. Whether it's for a web application or service, AuthPlus provides a reliable, secure, and customizable authentication solution.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "Tailwind",
      "OAuth 2.0",
    ],
    link: "https://google-oauth-blush.vercel.app",
    github: "https://github.com/ItsBikramRai/googleAuth",
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
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. This website serves as a platform to highlight my work and demonstrate my abilities as a web developer.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://bikram-rai.com.np",
    github: "https://github.com/ItsBikramRai/Portfolio",
  },

  {
    title: "Weather Widget",
    description:
      "Weather Widget is a simple and responsive weather application built using React. It allows users to search for real-time weather data of any location using an external weather API.",
    image: weather_widget,
    technologies: ["HTML", "CSS", "React"],
    link: "https://weather-widget-zeta-steel.vercel.app",
    github: "https://github.com/ItsBikramRai/weather-widget",
  },
];

//contact
export const CONTACT = {
  address: "Kathmandu, Nepal ",
  // phoneNo: "+9779863963772",
  email: "raibikraminfo@gmail.com",
};
