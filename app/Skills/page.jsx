"use client";
import React from "react";
import { Tabs } from "antd";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const skillTabs = [
  {
    key: "frontend",
    label: "Frontend",
    content: [
      "React", "Next.js", "Tailwind CSS",
      "HTML5", "CSS3", "React Router", "React Hook Form",
    ],
  },
  {
    key: "javascript",
    label: "JavaScript & State",
    content: ["JavaScript", "ES6", "Async/Await", "Redux", "Context API"],
  },
  {
    key: "backend",
    label: "Backend & DB",
    content: ["Java", "SQL", "MySQL", "Firebase", "Firestore"],
  },
  {
    key: "devtools",
    label: "Tools & Build",
    content: ["Git", "GitHub", "Vite"],
  },
  {
    key: "storage",
    label: "Storage & APIs",
    content: ["Local Storage", "Caching", "REST API", "API integrations"],
  },
  {
    key: "other",
    label: "Other",
    content: [
      "JWT", "Agile Methodologies", "Web Development",
      "Troubleshooting", "Problem-solving",
    ],
  },
];

// Prepare `items` array for Tabs
const items = skillTabs.map((tab) => ({
  key: tab.key,
  label: tab.label,
  children: (
    <motion.ul
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {tab.content.map((skill, idx) => (
        <motion.li
          key={idx}
          className="bg-white/10 border text-white border-white/20 rounded-lg px-4 py-2 text-center hover:bg-white/20 transition duration-300"
          variants={fadeIn}
          custom={idx + 1}
        >
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  ),
}));

const SkillsPage = () => {
  return (
    <div className="relative min-h-screen w-full text-white opacity-95">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-50"
      >
        <source src="/b1.mp4" type="video/mp4" />
      </video>

      {/* Heading */}
      <div className="text-center pt-20 pb-8 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills</h1>
        <p className="text-gray-300 text-base sm:text-lg">
          I offer a wide range of development skills.
        </p>
      </div>

      {/* Skills Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl"
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            variants={fadeIn}
          >
            <FaTools className="text-yellow-300 text-4xl animate-spin-slow" />
            <h2 className="text-3xl md:text-4xl font-bold">My Technical Skills</h2>
          </motion.div>

          {/* Modernized Tabs */}
          <Tabs
            defaultActiveKey="frontend"
            centered
            tabBarGutter={16}
            className="custom-tabs"
            items={items}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
