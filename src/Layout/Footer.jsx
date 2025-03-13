import React from "react";
import { CONTACT } from "../utils/index.utils";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" py-16">
      {/* <h1 className="my-6 text-center text-2xl">Get in Touch </h1> */}
      <div className="text-center tracking-tighter">
        <div
          className="m-5 flex items-center justify-center gap-5 text-2xl pr-30
      "
        >
          <a
            href="https://www.linkedin.com/in/raibikraminfo/"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.linkedin.com/in/raibikraminfo",
                "_blank"
              );
            }}
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/RaiBikram"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/RaiBikram", "_blank");
            }}
          >
            <FaSquareGithub />
          </a>
          <a
            href="https://x.com/RaiBkram"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://x.com/RaiBkram", "_blank");
            }}
          >
            <FaSquareXTwitter />
          </a>
        </div>
        <a
          href={`mailto:${CONTACT.email}`}
          onClick={(e) => {
            e.preventDefault();
            window.open(`mailto:${CONTACT.email}`, "_blank");
          }}
        >
          <p className="mb-2">{CONTACT.email}</p>
        </a>
        <p className="font-semibold">
          &copy; {currentYear},{" "}
          <a
            href="https://bikram-rai.com.np"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://bikram-rai.com.np", "_blank");
            }}
          >
            Bikram Rai
          </a>
        </p>
      </div>
    </div>
  );
}
