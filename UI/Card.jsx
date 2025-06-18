import React from "react";

const Card = ({ title, icon, points, description }) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-md p-6 rounded-[2rem] overflow-hidden shadow-lg border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/30">
      {/* Glowing border on hover */}
      <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-pink-400 group-hover:shadow-[0_0_30px_5px_rgba(255,0,128,0.25)] transition-all duration-500 pointer-events-none"></div>

      <div className="z-10 relative flex flex-col items-center text-center">
        {icon && <div className="mb-4 text-pink-400 text-3xl">{icon}</div>}

        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">{title}</h2>

        {points?.length > 0 ? (
          <ul className="list-disc list-inside text-sm text-gray-200 space-y-1 text-left">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-200">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
