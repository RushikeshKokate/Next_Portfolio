"use client";
import React from "react";
import { motion } from "framer-motion";
import Information from "@/UI/Information";

const Page = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-20 flex flex-col opacity-95 items-center justify-center">
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

      {/* Page Heading */}
      <div className="text-center  px-4 max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
        <p className="text-gray-300 text-base sm:text-lg">
          I offer a wide range of development skills, from building scalable UIs to integrating modern APIs with efficiency and precision.
        </p>
      </div>

      {/* Glassmorphism Card for Information Section */}
      
        <Information />
 
    </div>
  );
};

export default Page;
