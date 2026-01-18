import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="h-[10vh] flex items-center justify-between px-8 md:px-12 border-t border-white/10">
      <div>
        <p className="text-md md:text-xl text-[var(--foreground)]">
          Abdelrahman Khafagy
        </p>
      </div>

      <div className="text-center">
        <p className="text-sm md:text-base text-gray-300 flex gap-2">
          Built with <span className="text-[var(--green)]">♥</span> by
          <a
            href="https://www.linkedin.com/in/ehabyousef"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[var(--green)] transition-colors duration-300 p-0 underline"
          >
            Ehab Yousef
          </a>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[var(--green)] transition-colors duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[var(--green)] transition-colors duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[var(--green)] transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[var(--green)] transition-colors duration-300"
        >
          <FaFacebook size={20} />
        </a>
      </div>
    </footer>
  );
}
