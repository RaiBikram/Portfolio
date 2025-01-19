import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
export default function Layout({
  children,
  title = "Bikram Rai | Software Engineer",
  keyword = "Software Engineer, MERN Stack Developer, Backend Specialist, Web Development, Full-Stack Development, JavaScript, Node.js, React.js",
  author = "Bikram Rai",
  description = "Bikram Rai is a passionate Software Engineer specializing in MERN Stack, backend development, and scalable web solutions. With expertise in modern web technologies, Bikram delivers clean, efficient, and impactful code for dynamic and responsive applications.",
}) {
  return (
    <div
      className="overflow-x-hidden text-white antialiased 
    selection:bg-cyan-300 selection:text-cyan-900"
    >
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 ">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keyword} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
