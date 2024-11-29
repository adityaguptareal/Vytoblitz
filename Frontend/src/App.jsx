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
          className="flex flex-col gap-12 lg:flex-row justify-around items-center w-full h-full px-5 lg:px-20 pt-10"
        >
          {/* Left Section */}
          <div id="left" className="flex flex-col justify-center items-center gap-6 w-full lg:w-1/2">
            <div id="textContainer" className=" flex flex-col justify-center items-center lg:items-start gap-5 max-w-[420px] ">
              <h1 className="font-Orbitron text-4xl font-bold max-w-[500px] sm:text-center xl:text-left lg:py-3 ">
                VytoBliz 1.0: Where Innovation Meets Creativity!
              </h1>
              <div id="Venue" className=''>
                <p className="font-Montserrat text-base flex sm:items-center lg:items-start gap-3">
                  <BsFillCalendar2DateFill />
                  Date: 28 November, 2024
                </p>
                <p className="font-Montserrat text-base flex sm:items-center lg:items-start gap-3">
                  <FaLocationDot />
                  ITS Engineering College
                </p>
              </div>
              <p className="font-Montserrat text-base sm:text-center lg:text-left ">
                Join VytoBliz 1.0  (28 November, 2024) for hackathons, quizzes, and more. Unleash your
                creativity and tech skills!
              </p>
            </div>
            <div className="my-4 flex gap-6">
              <Button text="Join WaitList !" rounded="full" />
              <Button text="Explore Event" rounded="full" />
            </div>
            <Stats />
          </div>

          {/* Right Section */}
          <div id="right" className=" w-full lg:w-1/2 flex justify-center">
            <img src={Images.VytoflowGroup} className="w-[350px] lg:w-[550px] xl:w-[700px] rounded-2xl" alt="Hero Image" />
          </div>
        </div>
        <div>
          <h1 className='font-Orbitron font-extrabold text-4xl text-center m-16'>Hackathons Teams</h1>
          <CardSlider />

        </div>
        {/* What is VytoBlitz */}
        <div id='VytoBlitz' className='flex justify-around my-14'>
          <div id='left' className=''>
            <img src={Images.CollegeAuditoriam} className='w-[600px] rounded-3xl' alt="VytoFlow Group Image" />
          </div>
          <div id='right' className='w-2/6 flex flex-col items-center justify-center'>
            <h1 className='font-Orbitron font-extrabold text-4xl text-center my-8'
            >What is VytoBlitz ?</h1>
            <p className='font-Montserrat text-base '>VytoBliz is the  fest of ITS Engineering College which is Organised by <b>VytoFlowTech</b> Community, celebrating innovation, creativity, and collaboration. Join us for an exciting lineup of competitions, workshops, and cultural activities that showcase the spirit of technology and teamwork</p>
          </div>
        </div>
      </div>
    </>
  );
}


export default App
