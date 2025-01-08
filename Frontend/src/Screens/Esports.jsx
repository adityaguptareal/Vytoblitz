import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import Images from '../AssetsExport'
import EventMiniCard from '../Components/EventMiniCard'
import EventGallery from '../Components/EventGallery'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

function Esports() {
  const navigate=useNavigate()

  const data = {
    title: "Elite Combat",
    description: "Join the ultimate eSports showdown! Compete with top gamers, showcase your skills, and battle for supremacy in our online gaming event. Get ready for intense action, thrilling matches, and a chance to be crowned the champion.",
    date: "28 November 2024",
    location: "Online",
    time: "10 AM-12 PM",
    rank1: "Khoonkhar College (ITS Engineering College)",
    rank2: "A04 College (NIU COLLEGE)",
    rank3: " Axe Elite College (ITS Engineering College)",
    image1: Images.Esports1,
    image2: Images.Esports2,
    image3: Images.Esports3,
    image4: Images.Esports4
  }

  return (
    <div className='bg-gray-950'>
      {/* Page Hero */}
      <div id="pageHero" className='relative top-0 w-screen h-[80%] 'style={{
         background: 'linear-gradient(90deg, rgba(88,0,152,1) 0%, rgba(0,112,197,1) 50%, rgba(21,21,21,1) 100%)'
         ,
        }}>
        <Navbar />
        <div className='flex flex-col items-start justify-center'>
          <div className='font-Montserrat flex flex-col gap-3 relative px-10 md:px-20 py-10 md:py-20'>
            <h1 className='text-4xl font-bold'>{data.title}</h1>
            <p className='max-w-[80%]'>{data.description}</p>
            <div id='groupButton' className='flex flex-col md:flex-row gap-3'>
              {/* <Button text={"Register Closed"} /> */}
              <button onClick={()=>navigate("/contact")} className='flex justify-center items-center bg-transparent border-[1px] border-white rounded-md px-6 py-2 font-semibold hover:bg-slate-50 hover:text-gray-950 transition duration-300 ease-in-out'>Contact us</button>
            </div>
          </div>
        </div>
      </div>
      {/* Page Hero Closed */}

      {/* Event Detail Section */}
      <div className='flex flex-col md:flex-row gap-10 justify-center items-center py-10 px-5 md:px-0'>
        <EventMiniCard icon="📅" heading="Date" subHeading={data.date} />
        <EventMiniCard icon="🗺️" heading="Location" subHeading={data.location} />
        <EventMiniCard icon="⏳" heading="Time" subHeading={data.time} />
      </div>

      {/* Event Gallery */}
        <motion.div 
            id='eventGallery' 
            className='px-10 md:px-20 lg:px-40 py-10 w-full md:w-[95%] mx-auto'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className='text-4xl md:text-5xl text-center font-bold font-Montserrat pb-10 md:pb-20'>Event Gallery</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center h-[500px]'>
              <motion.div 
            className='col-span-2 row-span-2 h-full'
            whileHover={{ scale: 1.1 }}
              >
            <img src={data.image1} alt="Gallery Image 1" className='w-full h-full object-cover rounded-lg' />
              </motion.div>
              <motion.div 
            whileHover={{ scale: 1.1 }}
              >
            <img src={data.image3} alt="Gallery Image 2" className='w-full h-full object-cover rounded-lg' />
              </motion.div>
              <motion.div 
            whileHover={{ scale: 1.1 }}
              >
            <img src={data.image2} alt="Gallery Image 3" className='w-full h-full object-cover rounded-lg' />
              </motion.div>
              <motion.div 
            className='col-span-2'
            whileHover={{ scale: 1.1 }}
              >
            <img src={data.image4} alt="Gallery Image 4" className='w-full h-full object-cover rounded-lg' />
              </motion.div>
            </div>
          </motion.div>
            <motion.div 
              className='px-10 md:px-20 lg:px-40 py-10 text-white font-Montserrat'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>

      {/* Winners Section */}
      <motion.div
        className='px-10 md:px-20 lg:px-40 py-10 text-white font-Montserrat'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className='text-3xl font-bold mb-5'>Winners</h2>
        <ul className='list-disc list-inside'>
          <li className='mb-3'><strong>1st Place:</strong> {data.rank1}</li>
          <li className='mb-3'><strong>2nd Place:</strong> {data.rank2}</li>
          <li className='mb-3'><strong>3rd Place:</strong> {data.rank3}</li>
        </ul>
      </motion.div>

      {/* Event Description Section */}
      <div className='px-10 md:px-20 lg:px-40 py-10 text-white font-Montserrat'>
        <h2 className='text-3xl font-bold mb-5'>Event Description</h2>
        <p className='mb-5'>
          The Elite Combat is an exhilarating online gaming event where participants can showcase their gaming skills. This event is perfect for those who love competitive gaming and want to challenge themselves against top players.
        </p>
        <p className='mb-5'>
          Participants will compete in various rounds of intense gaming action. The event will be held online, providing a convenient and accessible platform for all gamers to join and compete from the comfort of their homes.
        </p>
        <p>
          Don't miss out on this opportunity to prove your gaming prowess and compete with fellow enthusiasts. Register now and be a part of this thrilling eSports event!
        </p>
      </div>

      {/* Event Schedule Section */}
      <div className='px-10 md:px-20 lg:px-40 py-10 text-white font-Montserrat'>
        <h2 className='text-3xl font-bold mb-5'>Event Schedule</h2>
        <ul className='list-disc list-inside'>
          <li className='mb-3'><strong>10:00 AM - 10:30 AM:</strong> Registration and Welcome</li>
          <li className='mb-3'><strong>10:30 AM - 11:30 AM:</strong> Qualifying Rounds</li>
          <li className='mb-3'><strong>11:30 AM - 11:45 AM:</strong> Break</li>
          <li className='mb-3'><strong>11:45 AM - 12:00 PM:</strong> Finals and Awards</li>
        </ul>
      </div>

      <Footer />
    </div>
  )
}

export default Esports
