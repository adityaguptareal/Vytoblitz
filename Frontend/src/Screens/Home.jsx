import React from 'react'
import Navbar from '../Components/Navbar'
import { BsFillCalendar2DateFill } from "react-icons/bs";
import Button from '../Components/Button'
import { FaLocationDot } from "react-icons/fa6";
import Images from '../AssetsExport'
import Stats from '../Components/Stats'
import CardSlider from '../Components/ImageSlider'
import Footer from '../Components/Footer'
import EventCard from '../Components/EventCard'
import { QuadGallery } from '../Components/QuadGallery'
import SingleGallery from '../Components/SingleGallery'
import TeamMemberCard from '../Components/TeamMemberCard'
function Home() {
  const teamMember = [
    {
      name: "Aditya",
      img: Images.Aditya,
    },
    {
      name: "AdityaSingh",
      img: Images.AdityaSingh,
    },
    {
      name: "Anshika",
      img: Images.Anshika,
    },
    {
      name: "Dhiya",
      img: Images.Dhiya,
    },
    {
      name: "Garvit",
      img: Images.Garvit,
    },
    {
      name: "Harsh",
      img: Images.Harsh,
    },
    {
      name: "Ishika",
      img: Images.Ishika,
    },
    {
      name: "Lavi",
      img: Images.Lavi,
    },
    {
      name: "Rahul",
      img: Images.Rahul,
    },
    {
      name: "Ritik",
      img: Images.Ritik,
    },
    {
      name: "Shubham",
      img: Images.Shubham,
    },
    {
      name: "Swati",
      img: Images.Swati,
    },
    {
      name: "Vaibhav",
      img: Images.Vaibhav,
    },
    {
      name: "Vanshika",
      img: Images.Vanshika,
    },
    {
      name: "Vishal",
      img: Images.Vishal,
    }
  ]
  return (
    <>
      <div className="bg-gray-950 text-white w-full" id="MainScreen">
        <Navbar />
        {/* Hero Section */}
        <div
          id="heroSection"
          className="flex flex-col gap-12 lg:flex-row justify-around items-center w-full h-full px-5 lg:px-20 pt-10"
        >
          {/* Left Section */}
          <div id="left" className="flex flex-col justify-center items-center gap-6 w-full lg:w-1/2">
            <div id="textContainer" className=" flex flex-col justify-center items-center lg:items-start gap-5 max-w-[420px] ">
              <h1 className="font-Orbitron text-4xl font-bold max-w-[500px] text-center xl:text-left lg:py-3 ">
                VytoBlitz 1.O: Where Innovation Meets Creativity!
              </h1>
              <div id="Venue" className=''>
                <p className="font-Montserrat text-base flex sm:items-center lg:items-start gap-3">
                  <BsFillCalendar2DateFill />
                  Date: 28 November, 2024
                </p>
                <p className="font-Montserrat text-base flex sm:items-center lg:items-start gap-3">
                  <FaLocationDot />
                  ITS Engineering College, Greator Noida
                </p>
              </div>
              <p className="font-Montserrat text-base sm:text-center lg:text-left ">
                Join VytoBlitz 1.0  (28 November, 2024) for Hackathons, Quizzes, and more. Unleash your
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
          {/* <h1 className='font-Orbitron font-extrabold text-4xl text-center m-16'>Hackathons Teams</h1> */}
          <CardSlider />

        </div>
        {/* What is VytoBlitz */}
        <div id='VytoBlitz' className='flex flex-col items-center lg:flex-row justify-around my-14 w-10/12 mx-auto'>
          <div id='left' className=''>
            <img src={Images.CollegeAuditoriam} className='w-[500px] xl-[500px] rounded-3xl' alt="VytoFlow Group Image" />
          </div>
          <div id='right' className='lg:w-2/6 md:w-4/6 w-full flex flex-col items-center justify-center'>
            <h1 className='font-Orbitron font-extrabold text-4xl text-center my-8'
            >What is VytoBlitz ?</h1>
            <p className='font-Montserrat text-base px-7 lg:px-0 text-center lg:text-left'>VytoBlitz is the  fest of ITS Engineering College which is Organised by <b>VytoFlowTech</b> Community, celebrating innovation, creativity, and collaboration. <br />
              <br />
              Join us for an exciting lineup of competitions, workshops, and cultural activities that showcase the spirit of technology and teamwork</p>
          </div>
        </div>
        {/* Explore Our Events */}
        <div id='Event Section' className='flex flex-col flex-wrap gap-5 items-center '>
          <h1 className='font-Orbitron text-4xl font-bold  text-center  lg:py-6 underline'>Explore Our Events</h1>
          <EventCard src={Images.Quizathon} date={"Thu 28th Nov 2024"} title={"Programming Quiz"} time={"10 AM-12 PM"} location={"ITS Engineering LAB 4"} registerBtnText={"Registration Closed !"} informationText={"More Info"} />

          {/*  */}
          <EventCard src={Images.ArtistryArena} date={"Thu 28th Nov 2024"} title={"Canva Designing"} time={"10 AM-12 PM"} location={"ITS Engineering LAB 3"} registerBtnText={"Registration Closed !"} informationText={"More Info"} />

          {/* Elite Combat */}
          <EventCard src={Images.Esports} date={"Thu 28th Nov 2024"} title={"Esports Game"} time={"10 AM-12 PM"} location={"ITS Engineering COE Room"} registerBtnText={"Registration Closed !"} informationText={"More Info"} />

          {/* VytoHackClash */}
          <EventCard src={Images.Hackathon} date={"Thu 28th Nov 2024"} title={"Hackathon "} time={"10 AM-4 PM"} location={"ITS Engineering COE Room"} registerBtnText={"Registration Closed !"} informationText={"More Info"} />

          {/* Cultural */}
          <EventCard src={Images.Cultural} date={"Thu 29th Nov 2024"} title={"Cultural Carnival"} time={"10 AM-4 PM"} location={"ITS Sardar Patel Auditoriam"} registerBtnText={"Registration Closed !"} informationText={"More Info"} />
        </div>
        <div>
          {/* Event Gallery */}
          <div id="EventGallery" className='my-16 flex flex-col justify-center items-center max-w-[680px] mx-auto'>
            <h1 className='font-Orbitron text-4xl font-bold my-12 underline  text-center  lg:py-6 '>Event Gallery</h1>
            <SingleGallery src={Images.VytFlowTeam} />
            <QuadGallery />
          </div>
        </div>
        {/* Team Section */}

        <h1 className='font-Orbitron text-4xl font-bold my-12 underline  text-center  lg:py-6 '>Event Coordinators</h1>
        <div className="overflow-hidden relative w-full h-[300px] flex items-center mt-10">
          <div className="team-image-slider flex  gap-12 animate-scroll">

            {teamMember.map((member, index) => {
              return (
                <TeamMemberCard key={index} name={member.name} img={member.img} />
              )
            }
            )}
            {teamMember.map((member, index) => {
              return (
                <TeamMemberCard key={`duplicate-${index}`} name={member.name} img={member.img} />
              )
            }
            )}
          </div>
        </div>

        <div className='font-Orbitron text-5xl text-center my-48'>More Coming Soon !</div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
