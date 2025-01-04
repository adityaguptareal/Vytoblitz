import { React, useState, useEffect } from 'react'
import { motion } from "motion/react"
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
import EventCta from '../Components/EventCta';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
function Home() {
  const [loading, setloading] = useState(true)
  function handleLoading() {
    setloading(false)
    console.log("loading is", loading)
  }
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
  const imageSrc = "https://plus.unsplash.com/premium_photo-1677094766815-e0fe790e364a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW55fGVufDB8fDB8fHww"

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setloading(false)
    }, 1500)

    return () => clearTimeout(loadTimer)
  }, [])
  return (
    <>

      <div className="relative  text-white w-screen h-full" id="MainScreen">
        <div className="absolute  top-0 z-[2] h-full bg-no-repeat w-screen opacity-35 bg-cover bg-bottom" style={{ backgroundImage: `url(${Images.VytFlowTeam})` }}></div>
        <Navbar />
        {/* Hero Section */}
        <div
          id="heroSection"
          className="flex relative z-20 flex-col  gap-12  justify-around items-center w-full py-28 h-full px-5 lg:px-20 pt-10"
        >
          {/* Left Section */}
          <div id="left" className="flex flex-col justify-center items-center gap-6 lg:w-[88%] w-full ">
            <div id="textContainer" className=" flex flex-col justify-center items-center w-10/12 md:w-1/2 gap-5 text-center ">
              <h1 className="font-Orbitron text-4xl font-bold  text-center  lg:py-3 ">
                VytoBlitz 1.O: Where Innovation Meets Creativity!
              </h1>
              <div id="Venue" className='flex flex-col justify-center items-start'>
                <p className="font-Montserrat text-sm md:text-base flex justify-center items-start text-left md:text-center  gap-3">
                  <BsFillCalendar2DateFill />
                  Date: 28 November, 2024
                </p>
                <p className="font-Montserrat text-sm md:text-base flex justify-center items-start text-left md:text-center  gap-3">
                  <FaLocationDot />
                  ITS Engineering College, Greator Noida
                </p>
              </div>
              <p className="font-Montserrat text-sm md:text-base text-center  ">
                Join VytoBlitz 1.0  (28 November, 2024) for Hackathons, Quizzes, and more. Unleash your
                creativity and tech skills!
              </p>
            </div>
            <div className="my-4 flex MobileM:flex-row flex-col gap-6">
              <Button navigate="/registration" text="Join WaitList !" />
              <Button navigate={"/event"} text="Explore Event" rounded="full" />
            </div>
            <Stats />
          </div>

          {/* Right Section */}
          {/* <div id="right" className="w-full lg:w-1/2 flex justify-center">
            {loading ? (
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton style={{ width: "550px", height: "550px", borderRadius: "10px" }} />
              </SkeletonTheme>
            ) : (
              <img
                src={Images.VytoflowGroup}  // Replace with Images.VytoflowGroup
                className="w-[350px] lg:w-[550px] xl:w-[700px] rounded-2xl"
                alt="VytoFLow Group Image"
              />
            )}
          </div> */}
        </div>
        <div>
        </div>
        <div className="bg-gray-950 relative text-white w-full" id="MainScreen">
        </div>
      </div>
      {/* <h1 className='font-Orbitron font-extrabold text-4xl text-center m-16'>Hackathons Teams</h1> */}
      <CardSlider />


      {/* What is VytoBlitz */}
      <div id='VytoBlitz' className='flex flex-col items-center lg:flex-row justify-around my-14 w-10/12 mx-auto'>
        <div id='left' className=''>
          {loading ? (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton style={{ width: "500px", height: "280px", borderRadius: "10px" }} />
            </SkeletonTheme>
          ) : (
            <img src={Images.CollegeAuditoriam} className='w-[500px] xl-[500px] rounded-3xl' alt="VytoFlow Group Image" />
          )}

        </div>
        <div id='right' className='lg:w-2/6 md:w-4/6 w-full flex flex-col items-center justify-center'>
          <h1 className='font-Orbitron font-extrabold text-4xl text-center my-4 xl:my-8'
          >What is VytoBlitz ?</h1>
          <p className='font-Montserrat text-[14px] xl:text-base px-7 lg:px-0 text-center lg:text-left'>VytoBlitz is the  fest of ITS Engineering College which is Organised by <b>VytoFlowTech</b> Community, celebrating innovation, creativity, and collaboration. <br />
            <br />
            Join us for an exciting lineup of competitions, workshops, and cultural activities that showcase the spirit of technology and teamwork</p>
        </div>
      </div>
      {/* Explore Our Events */}
      <div id='Event Section' className='flex flex-col flex-wrap gap-5 items-center '>
        <h1 className='font-Orbitron text-4xl font-bold  text-center  lg:py-6 underline'>Explore Our Events</h1>
        <EventCard src={Images.Quizathon} navigate={"/event/quizathon"} date={"Thu 28th Nov 2024"} title={"Programming Quiz"} time={"10 AM-12 PM"} location={"ITS Engineering LAB 4"} registerBtnText={"Registration Closed !"} informationText={"More Info"} />

        {/*  */}
        <EventCard navigate={"/event/artistryarena"} src={Images.ArtistryArena} date={"Thu 28th Nov 2024"} title={"Canva Designing"} time={"10 AM-12 PM"} location={"ITS Engineering LAB 3"} registerBtnText={"Registration Closed !"} informationText={"More Info"} />

        {/* Elite Combat */}
        <EventCard navigate={"/event/esports"} src={Images.Esports} date={"Thu 28th Nov 2024"} title={"Esports Game"} time={"10 AM-12 PM"} location={"ITS Engineering COE Room"} registerBtnText={"Registration Closed !"} informationText={"More Info"} />

        {/* VytoHackClash */}
        <EventCard navigate={"/event/hackathon"} src={Images.Hackathon} date={"Thu 28th Nov 2024"} title={"Hackathon "} time={"10 AM-4 PM"} location={"ITS Engineering COE Room"} registerBtnText={"Registration Closed !"} informationText={"More Info"} />

        {/* Cultural */}
        <EventCard navigate={"/event/cultural"} src={Images.Cultural} date={"Thu 29th Nov 2024"} title={"Cultural Carnival"} time={"10 AM-4 PM"} location={"ITS Sardar Patel Auditoriam"} registerBtnText={"Registration Closed !"} informationText={"More Info"} />
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
      <div className="overflow-hidden scrollGradient relative w-full h-[300px] flex items-center mt-10">
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
          {teamMember.map((member, index) => {
            return (
              <TeamMemberCard key={`duplicate2-${index}`} name={member.name} img={member.img} />
            )
          }
          )}
        </div>
      </div>
      <div className=' container mx-auto my-20 w-full flex justify-center items-center overflow-x-hidden'>


      </div>
      <EventCta heading="Join the Tech Revolution Today" description="Secure your spot at the most exciting tech fest of the year—register now!" primaryBtn="Register" secondaryBtn="Learn More" primaryBtnLink="/registration" secondaryBtnLink="/event" />
      <motion.div whileInView={{
        y: 10, opacity: "100%",
        transition: { duration: 1, delay: 1 }
      }} initial={{ y: 100, opacity: "0%" }} className='font-Orbitron  text-6xl text-center my-48'>See You In The Event !</motion.div>
      <Footer></Footer>

    </>
  )
}

export default Home
