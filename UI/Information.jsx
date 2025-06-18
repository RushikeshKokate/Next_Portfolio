"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaTools,
  FaBuilding,
  FaChartLine,
  FaLightbulb,
  FaSearch,
} from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const cardStyles =
  "backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 w-full";

const Information = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto space-y-8">
      {/* Headline Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
        className={`${cardStyles} flex flex-col sm:flex-row items-start sm:items-center gap-4`}
      >
        <motion.div variants={fadeIn}>
          <FaLaptopCode className="text-5xl sm:text-6xl text-yellow-300 animate-pulse" />
        </motion.div>
        <motion.div variants={fadeIn}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
            Rushikesh Kokate — Frontend Software Engineer
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-xl">
            I specialize in building clean, interactive user experiences with
            modern JavaScript frameworks. Passionate about UI/UX, performance,
            and problem-solving at scale.
          </p>
        </motion.div>
      </motion.div>

      {/* Experience Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={1}
        className={cardStyles}
      >
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          <FaBuilding className="inline-block text-pink-400 mr-2 mb-1" />
          <strong>Associate Software Engineer at Biz Credence Inc (2025–Present)</strong>
          <br />
          Working on production-grade applications with React.js, Axios,
          Tailwind CSS, Context API, and React Query — focusing on clean design,
          accessibility, and performance optimization.
        </p>
      </motion.div>

      {/* Internship Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={2}
        className={cardStyles}
      >
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          <FaChartLine className="inline-block text-green-300 mr-2 mb-1" />
          <strong>Internships at Dubtap Technologies LLP & Trade Brains (2024)</strong>
          <br />
          Contributed to CMS systems, dashboard UIs, and performance
          enhancements using Next.js, Firebase, Supabase, PostgreSQL, and Chart.js.
        </p>
      </motion.div>

      {/* Tools & Stack Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={3}
        className={cardStyles}
      >
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          <FaTools className="inline-block text-blue-300 mr-2 mb-1" />
          <strong>Tech Stack & Tools</strong>
          <br />
          React, Next.js, Tailwind CSS, Redux, Context API, Firebase, Supabase,
          GitHub, Chart.js, Axios, Jest, Vite, Figma.
        </p>
      </motion.div>

      {/* Soft Skills / Strength Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={4}
        className={cardStyles}
      >
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          <FaLightbulb className="inline-block text-purple-300 mr-2 mb-1" />
          <strong>What I Bring</strong>
          <br />
          A problem-solver mindset with an eye for detail, strong debugging
          skills, Agile collaboration, and a focus on delivering delightful UI
          experiences. I believe in writing code that's clean, scalable, and
          maintainable.
        </p>
      </motion.div>

      {/* Vision/CTA Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={5}
        className={cardStyles}
      >
        <p className="text-xs sm:text-sm text-gray-400 italic leading-relaxed">
          <FaSearch className="inline-block text-teal-300 mr-2 mb-1" />
          I'm actively seeking opportunities to collaborate on impactful web
          products. Let's build interfaces that users love and businesses trust.
        </p>
      </motion.div>
    </div>
  );
};

export default Information;
