import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0c0c0c] to-[#1a1a1a] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Animated Glow Circle */}
      <div className="absolute w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-3xl top-10 left-10 animate-pulse -z-10" />

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-center animate-fade-in-up">
        Hi, I'm{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-slate-700">
  Rushikesh Kokate
</span>
      </h1>

      {/* Subheading */}
      <p className="text-base md:text-xl text-gray-400 text-center max-w-2xl mb-10 animate-fade-in-up delay-200">
        I design and develop modern, responsive, and user-friendly web experiences using React, Tailwind CSS, and cutting-edge technologies.
      </p>

      {/* Buttons */}
      <div className="flex gap-6 mb-10 animate-fade-in-up delay-300">
        <a
          href="#projects"
          className="border border-white px-6 py-2 rounded-full text-sm uppercase tracking-wide hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black transition-all duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-white px-6 py-2 rounded-full text-sm uppercase tracking-wide hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black transition-all duration-300"
        >
          Contact Me
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-2xl text-gray-400 animate-fade-in-up delay-500">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300 hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300 hover:scale-110">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} Rushikesh Kokate — All Rights Reserved
      </footer>
    </div>
  );
};

export default HomePage;
