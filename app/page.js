"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SkeletonImage from "@/UI/SkeletonImage";

// Dynamically import profile image component
const ProfilePic = dynamic(() => import("@/UI/ProfilePic"), {
  loading: () => <SkeletonImage />,
  ssr: false,
});

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-black opacity-95">
      {/* 🔴 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-[-1]"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="flex flex-col max-sm:mt-10 md:flex-row items-center justify-center px-6 gap-10 min-h-screen relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center">
          <ProfilePic />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-slate-700">
              Rushikesh Kokate
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mb-8"
          >
            I design and develop modern, responsive, and user-friendly web
            experiences using Next.js, React, Tailwind CSS, and cutting-edge technologies.
          </motion.p>

          {/* Buttons Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
          >
            <a
              href="/Projects"
              className="border border-white px-5 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/Contact"
              className="border border-white px-5 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/RushikeshKokateResume.pdf"
              download
              className="flex items-center gap-2 border border-white px-5 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaDownload />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-6 text-xl sm:text-2xl text-gray-400"
          >
            <a
              href="https://github.com/RushikeshKokate"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rushikesh-kokate/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs sm:text-sm text-gray-500 text-center w-full z-10">
        © {new Date().getFullYear()} Rushikesh Kokate — All Rights Reserved
      </footer>
    </div>
  );
};

export default HomePage;
