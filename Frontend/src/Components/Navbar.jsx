import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md sticky top-0 z-50 text-white font-Montserrat">
      <div className="container mx-auto flex items-center justify-between px-4 py-5 md:px-8">
        {/* Logo */}
        <div className="text-3xl font-bold font-Orbitron">VytoBliz 1.0</div>

        {/* Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center lg:gap-6 absolute lg:relative lg:bg-transparent top-16 lg:top-0 left-0 w-full lg:w-auto p-4  `}
        >
          <a href="#home" className="block py-2 px-4     md:py-0 hover:scale-[1.2] hover:transit">
            Home
          </a>
          <a href="#events" className="block py-2 px-4   md:py-0 hover:scale-[1.2] hover:transit">
            Events
          </a>
          <a
            href="#coordinators"
            className="block py-2 px-4   md:py-0 hover:scale-[1.2] hover:transit"
          >
            Coordinators
          </a>
          <a href="#volunteers" className="block py-2 px-4   md:py-0 hover:scale-[1.2] hover:transit">
            Volunteers
          </a>
          <div className="flex gap-5">

          <Button text="Signup"/>
          <Button text="Login" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
