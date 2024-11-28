import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { BsFillCalendar2DateFill } from "react-icons/bs";
import Button from './Components/Button'
import { FaLocationDot } from "react-icons/fa6";
import Images from './AssetsExport'
import Stats from './Components/Stats'
import CardSlider from './Components/ImageSlider'

function App() {
  return (
    <>
      <div className="bg-black text-white w-full" id="MainScreen">
        <Navbar />
        {/* Hero Section */}
        <div
          id="heroSection"
          className="flex flex-col lg:flex-row justify-around items-center w-full h-full px-5 lg:px-20 pt-10"
        >
          {/* Left Section */}
          <div id="left" className="flex flex-col items-start gap-6 w-full lg:w-1/2">
            <div id="textContainer" className=" flex flex-col gap-5 max-w-[500px] ">
              <h1 className="font-Orbitron text-4xl font-bold max-w-[500px]">
                VytoBliz 1.0: Where Innovation Meets Creativity!
              </h1>
              <div id="Venue">
                <p className="font-Roboto text-base flex items-center gap-3">
                  <BsFillCalendar2DateFill />
                  Date: 28 November, 20
                </p>
                <p className="font-Roboto text-base flex items-center gap-3">
                  <FaLocationDot />
                  ITS Engineering College
                </p>
              </div>
              <p className="font-Roboto text-base ">
                Join VytoBliz 1.0 (Nov 27-29, 2024) for hackathons, quizzes, and more. Unleash your
                creativity and tech skills!
              </p>
            </div>
            <div className="my-4 flex gap-6">
              <Button text="Join Now" rounded="full" />
              <Button text="Explore Event" rounded="full" />
            </div>
            <Stats />
          </div>

          {/* Right Section */}
          <div id="right" className=" w-full lg:w-1/2 flex justify-center">
            <img src={Images.HeroImage} className="w-[350px] lg:w-[550px] rounded-2xl" alt="" />
          </div>
        </div>
        <div>
          <h1 className='font-Orbitron font-extrabold text-4xl text-center my-16'>Hackathons Teams</h1>
          <CardSlider/>

        </div>
      </div>
    </>
  );
}


export default App
