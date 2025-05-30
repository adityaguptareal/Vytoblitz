import React from "react";
import "../App.css"; // Import the custom styles for animation

const ImageSlider = () => {
  const headings = [
    "Artistry Arena",
    "Algo-Quizathon",
    "Elite Combat Cup",
    "Vyto-HackClash",
    "Cultural Carnival",
    "Artistry Arena",
    "Algo-Quizathon",
    "Elite Combat Cup",
    "Vyto-HackClash",
    "Cultural Carnival",
  ]; // Array of headings

  return (
    <div className="overflow-hidden scrollGradient relative z-10 w-full h-[100px] bg-gradient-to-r from-purple-500 to-blue-500 flex items-center">
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
