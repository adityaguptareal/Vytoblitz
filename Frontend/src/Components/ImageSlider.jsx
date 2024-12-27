import React from "react";
import "../App.css"; // Import the custom styles for animation

const ImageSlider = () => {
  const headings = [
    "Programming Quiz",
    "VytoHack Clash",
    "Elite Combat",
    "Artistry Arnea",
    "Cultural Carnival",
    "Binary Beasts",
    "Code Warriors",
    "Error 404",
    "MixiFy Dev",
    "Tech Titans",
  ]; // Array of headings

  return (
    <div className="overflow-hidden scrollGradient relative w-full h-[100px] bg-gradient-to-r from-purple-500 to-blue-500 flex items-center mt-32">
      {/* Scrolling container */}
      <div className="image-slider flex  gap-12 animate-scroll">
        {/* Dynamically render the headings */}
        {headings.map((heading, index) => (
          <h1
            key={index}
            className="text-white font-Orbitron font-bold text-2xl whitespace-nowrap"
          >
            {heading}
          </h1>
        ))}

        {/* Duplicate the headings for continuous scrolling */}
        {headings.map((heading, index) => (
          <h1
            key={`duplicate-${index}`}
            className="text-white font-Orbitron font-bold text-2xl whitespace-nowrap"
          >
            {heading}
          </h1>
        ))}
        {headings.map((heading, index) => (
          <h1
            key={`duplicate-${index}`}
            className="text-white font-Orbitron font-bold text-2xl whitespace-nowrap"
          >
            {heading}
          </h1>
        ))}
        {headings.map((heading, index) => (
          <h1
            key={`duplicate-${index}`}
            className="text-white font-Orbitron font-bold text-2xl whitespace-nowrap"
          >
            {heading}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
