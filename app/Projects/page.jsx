"use client";
import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#0c0c0c] to-[#1a1a1a] text-white px-6 py-16 opacity-95">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-50"
      >
        <source src="/b1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-6">My Projects</h1>
        <p className="text-gray-400 text-lg md:text-xl mb-6">
          I'm currently updating this section with my latest work.
        </p>
        <p className="text-gray-300 mb-10 text-base md:text-lg">
          Meanwhile, you can check out some of my recent projects on:
        </p>

        {/* External Links */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <a
            href="https://vercel.com/rushikeshkokates-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition duration-300"
          >
            <FaGlobe className="text-lg" /> Vercel Deployments
          </a>
          <a
            href="https://github.com/RushikeshKokate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition duration-300"
          >
            <FaGithub className="text-lg" /> GitHub Repositories
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
