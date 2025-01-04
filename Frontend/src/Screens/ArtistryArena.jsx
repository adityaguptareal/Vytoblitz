import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import Images from '../AssetsExport'
import EventMiniCard from '../Components/EventMiniCard'
import EventGallery from '../Components/EventGallery'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion';


function ArtistryArena() {

  const data = {
    title: "Artistry Arena",
    decription: "Join the Canva Designing Competition to showcase your creativity and design skills. Create stunning visuals and compete with fellow designers.",
    date: "28 November 2024",
    location: "ITS Engineering LAB 3 ",
    time: "11 AM-12 PM",
    rank1: "John Doe",
    rank2: "Jane Smith",
    rank3: "Bob Johnson",
    image1: Images.ArtistryArena1,
    image2: Images.ArtistryArena2,
    image3: Images.ArtistryArena3,
    image4: Images.ArtistryArena4



  }


  return (
    <div className='bg-gray-950'>
      {/* Page Hero */}
      <div id="pageHero" className='relative top-0 w-screen h-[85vh] md:h-[65vh]'>
        <div id='background' className='absolute top-0 w-full h-full opacity-35' style={{
          background: 'linear-gradient(90deg, rgba(148,0,252,1) 0%, rgba(0,142,247,1) 100%, rgba(31,31,31,1) 100%)',
        }}></div>
        <Navbar />
        <div className='flex flex-col items-start justify-center'>
          <div className='font-Montserrat flex flex-col gap-3 relative px-10 md:px-20 py-10 md:py-20'>
            <h1 className='text-4xl font-bold'>{data.title}</h1>
            <p className='max-w-[80%]'>{data.decription}</p>
            <div id='groupButton' className='flex flex-col md:flex-row gap-3'>
              <Button text={"Register Closed"} />
              <button className='flex justify-center items-center bg-transparent border-[1px] border-white rounded-md px-6 py-2 font-semibold hover:bg-slate-50 hover:text-gray-950 transition duration-300 ease-in-out'>Learn More</button>
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
              <img src={data.image2} alt="Gallery Image 1" className='w-full h-full object-cover rounded-lg' />
                </motion.div>
                <motion.div 
              whileHover={{ scale: 1.1 }}
                >
              <img src={data.image1} alt="Gallery Image 2" className='w-full h-full object-cover rounded-lg' />
                </motion.div>
                <motion.div 
              whileHover={{ scale: 1.1 }}
                >
              <img src={data.image3} alt="Gallery Image 3" className='w-full h-full object-cover rounded-lg' />
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
          The Artistry Arena is an exciting event where participants can showcase their creativity and design skills. This event is perfect for those who love creating stunning visuals and want to challenge themselves.
        </p>
        <p className='mb-5'>
          Participants will be given a theme to create their designs within a limited time. The event will be held at the ITS Engineering LAB 3, and it promises to be a fun and engaging experience for all attendees.
        </p>
        <p>
          Don't miss out on this opportunity to showcase your skills and compete with fellow enthusiasts. Register now and be a part of this thrilling event!
        </p>
      </div>

      {/* Event Schedule Section */}
      <div className='px-10 md:px-20 lg:px-40 py-10 text-white font-Montserrat'>
        <h2 className='text-3xl font-bold mb-5'>Event Schedule</h2>
        <ul className='list-disc list-inside'>
          <li className='mb-3'><strong>10:00 AM - 10:30 AM:</strong> Registration and Welcome</li>
          <li className='mb-3'><strong>10:30 AM - 11:30 AM:</strong> Design Round Start</li>
          <li className='mb-3'><strong>11:30 AM - 11:45 AM:</strong> Break</li>
          <li className='mb-3'><strong>11:45 AM - 12:00 PM:</strong> Closing and Awards</li>
        </ul>
      </div>

      <Footer />
    </div>
  )
}

export default ArtistryArena
