import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import Images from '../AssetsExport'
import EventMiniCard from '../Components/EventMiniCard'
import EventGallery from '../Components/EventGallery'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'


function Cultural() {
  const navigate=useNavigate()


  const data = {
    title: "Cultural Carnival",
    description: "Join us for the Cultural Carnival, a vibrant celebration of diverse cultures through music, dance, art, and food. Experience the richness of traditions from around the world and enjoy a day filled with performances, workshops, and culinary delights.",
    date: "29 November 2024",
    location: "ITS Sardar Patel Auditorium ",
    time: "10 AM-4 PM",
    rank1: "Luck Sharma Palchil Singh",
    rank2: "Sakshi Kumari, Shourya Tyagi",
    rank3: "Radhika, Charu",
    image1: Images.Cultural1,
    image2: Images.Cultural2,
    image3: Images.Cultural3,
    image4: Images.Cultural4,
    image5: Images.Cultural5,
    image6: Images.Cultural6,
    image7: Images.Cultural7,
    image8: Images.Cultural8,
    image9: Images.Cultural9,
    image10: Images.Cultural10,
    image11: Images.Cultural11,
    image12: Images.Cultural12,
    image13: Images.Cultural13,
    image14: Images.Cultural14,
    image15: Images.Cultural15,

  }
  const images = [
    data.image1,
    data.image2,
    data.image3,
    data.image4,
    data.image5,
    data.image6,
    data.image7,
    data.image8,
    data.image9,
    data.image10,
    data.image11,
    data.image12,
    data.image13,
    data.image14,
    data.image15,
  ];


  return (
    <div className='bg-gray-950'>
      {/* Page Hero */}
      <div id="pageHero" className='relative top-0 w-screen h-[80%] 'style={{
         background: 'linear-gradient(90deg, rgba(88,0,152,1) 0%, rgba(0,112,197,1) 50%, rgba(21,21,21,1) 100%)'
         ,
        }}>
        {/* <div id='background' className='absolute top-0 w-full h-full opacity-35' ></div> */}
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
        id='eventGallery2' 
        className='px-10 md:px-20 lg:px-40 py-10 w-full md:w-[95%] mx-auto'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-4xl md:text-5xl text-center font-bold font-Montserrat pb-10 md:pb-20'>
          Cultural Event Highlights
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {images.map((src, index) => (
            <motion.div 
              key={index} 
              className={`relative overflow-hidden rounded-lg shadow-lg ${index % 2 === 0 ? 'row-span-2' : ''}`}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={src} 
                alt={`Gallery Image ${index + 1}`} // Image alt text for accessibility
                className='w-full h-full object-cover transition-all duration-200'
              />
              <div className='absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-200'></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Winners Section */}
      {/* <motion.div
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
      </motion.div> */}

      {/* Event Description Section */}
      <div className='px-10 md:px-20 lg:px-40 py-10 text-white font-Montserrat'>
        <h2 className='text-3xl font-bold mb-5'>Event Description</h2>
        <p className='mb-5'>
          Join us for the Cultural Carnival, a vibrant celebration of diverse cultures through music, dance, art, and food. Experience the richness of traditions from around the world and enjoy a day filled with performances, workshops, and culinary delights.
        </p>
        <p className='mb-5'>
          The event will take place at the ITS Sardar Patel Auditorium, offering a dynamic and engaging experience for all attendees.
        </p>
        <p>
          Don't miss this chance to immerse yourself in a cultural extravaganza. Mark your calendars and be part of this unforgettable event!
        </p>
      </div>

      {/* Event Schedule Section */}
      <div className='px-10 md:px-20 lg:px-40 py-10 text-white font-Montserrat'>
        <h2 className='text-3xl font-bold mb-5'>Event Schedule</h2>
        <ul className='list-disc list-inside'>
          <li className='mb-3'><strong>10:00 AM - 10:30 AM:</strong> Registration and Welcome</li>
          <li className='mb-3'><strong>10:30 AM - 11:30 AM:</strong> Opening Ceremony</li>
          <li className='mb-3'><strong>11:30 AM - 2:00 PM:</strong> Cultural Performances</li>
          <li className='mb-3'><strong>2:00 PM - 3:00 PM:</strong> Lunch Break</li>
          <li className='mb-3'><strong>3:00 PM - 3:30 PM:</strong> Award Distribution</li>
          <li className='mb-3'><strong>3:30 PM - 4:00 PM:</strong> Closing Ceremony </li>
        </ul>
      </div>

      <Footer />
    </div>
  )
}

export default Cultural
