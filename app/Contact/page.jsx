"use client";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen w-full backdrop-opacity-95 text-white px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
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

      {/* Content */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-10">Contact Me</h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10">
          Let's collaborate or just say hello 👋
        </p>

        {/* Contact Info Card */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl px-4 py-6 sm:px-6 sm:py-8 shadow-2xl space-y-5 sm:space-y-6 text-sm sm:text-base">
          <ContactItem
            icon={<FaPhone className="text-yellow-300 text-base sm:text-lg" />}
            label="Primary Phone"
            href="tel:+917397917542"
            text="+91 7397917542"
          />
          <ContactItem
            icon={<FaPhone className="text-yellow-300 text-base sm:text-lg" />}
            label="Alternate Phone"
            href="tel:+917483428674"
            text="+91 7483428674"
          />
          <ContactItem
            icon={<FaEnvelope className="text-yellow-300 text-base sm:text-lg" />}
            label="Email"
            href="mailto:rushikeshkokate680@gmail.com"
            text="rushikeshkokate680@gmail.com"
          />
          <ContactItem
            icon={<FaLinkedin className="text-yellow-300 text-base sm:text-lg" />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/rushikesh-kokate/"
            text="linkedin.com/in/rushikesh-kokate"
          />
          <ContactItem
            icon={<FaGithub className="text-yellow-300 text-base sm:text-lg" />}
            label="GitHub"
            href="https://github.com/RushikeshKokate"
            text="github.com/RushikeshKokate"
          />
          <ContactItem
            icon={<FaGlobe className="text-yellow-300 text-base sm:text-lg" />}
            label="Vercel Projects"
            href="https://vercel.com/rushikeshkokates-projects"
            text="vercel.com/rushikeshkokates-projects"
          />
          <div className="flex items-center justify-center sm:justify-start gap-3 text-white">
            <FaMapMarkerAlt className="text-yellow-300 text-base sm:text-lg" />
            <span className="text-sm sm:text-base">Bangalore, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label, href, text }) => (
  <div className="flex items-center justify-center sm:justify-start gap-3 group transition">
    {icon}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-yellow-300 transition duration-200 underline-offset-2 group-hover:underline break-words"
      aria-label={label}
    >
      {text}
    </a>
  </div>
);

export default ContactPage;
