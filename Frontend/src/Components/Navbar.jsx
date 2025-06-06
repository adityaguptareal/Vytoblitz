import React, { useState } from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <nav className="backdrop-blur-md cursor-pointer sticky top-0 z-50 text-white font-Montserrat">
      <div className="container mx-auto flex items-center justify-between px-4  py-3 md:py-2 md:px-8">
        {/* Logo */}
        <div className="text-3xl font-bold font-Orbitron" onClick={()=>navigate('/')}>VytoBlitz 1.0</div>

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
          className={`${isOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:items-center lg:gap-1 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto 
            p-4 bg-black lg:bg-transparent sm:h-screen lg:h-auto z-40`}
        >
          <Link to="/" className="block py-2 px-4 hover:scale-[1.2] transition-transform ease-linear">
            Home
          </Link>
          <Link to="/event" className="block py-2 px-4 hover:scale-[1.2] transition-transform ease-linear">
            Event
          </Link>
          <Link to="/about" className="block py-2 px-4 hover:scale-[1.2] transition-transform ease-linear">
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 hover:scale-[1.2] transition-transform ease-linear"
          >
            Contact
          </Link>
          {/* <div id="buttons" className="flex flex-col md:flex-row gap-3">
             <Link to="/login">
            <Button text="Login" rounded="full" />
            </Link>
             <Link to="/registration">
            <Button text="Join waitlist" rounded="full" />
            </Link> 
          </div> */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
