"use client";
import Card from "@/UI/Card";
import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaRocket,
  FaCloud,
  FaCreditCard,
  FaMobileAlt,
} from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-pink-500 text-3xl" />,
      points: [
        "Responsive UI using Next.js, React & Tailwind",
        "Reusable component architecture",
        "Fast load time and performance optimization",
      ],
    },
    {
      title: "UI/UX Design",
      icon: <FaPaintBrush className="text-pink-500 text-3xl" />,
      points: [
        "User-centered design approach",
        "Clean and modern UI",
        "Interactive and intuitive experiences",
      ],
    },
    {
      title: "Web Optimization",
      icon: <FaRocket className="text-pink-500 text-3xl" />,
      points: [
        "SEO improvements",
        "Accessibility enhancements",
        "Performance and Core Web Vitals",
      ],
    },
    {
      title: "Web Hosting",
      icon: <FaCloud className="text-pink-500 text-3xl" />,
      points: [
        "Deploy with Vercel, Netlify, or custom server",
        "Domain integration & SSL",
        "Continuous deployment with Git",
      ],
    },
    {
      title: "Payment Gateway Integration",
      icon: <FaCreditCard className="text-pink-500 text-3xl" />,
      points: [
        "Integrate Stripe, Razorpay, or PayPal",
        "Secure transactions with validation",
        "Support for one-time and subscription payments",
      ],
    },
    {
      title: "Responsive Design",
      icon: <FaMobileAlt className="text-pink-500 text-3xl" />,
      points: [
        "Mobile-first design principles",
        "Optimized for tablets and desktops",
        "Fully responsive layouts using CSS & Flex/Grid",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen w-full opacity-95 overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 z-[-1]"
      >
        <source src="/b1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Page Content */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-6">My Services</h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12">
            I offer a wide range of services tailored to your digital needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                icon={service.icon}
                points={service.points}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
