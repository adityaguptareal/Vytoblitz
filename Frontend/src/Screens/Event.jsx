import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useForm } from 'react-hook-form'
import EventCta from '../Components/EventCta'
import InstagramEmbed from '../Components/video1'
function Event() {
  return (
    <>
      <div className='bg-slate-950'>
        <Navbar />
        <div className='pt-10 pb-40'>
          {/* Event Hero Section */}
          <div className='px-40 h-[300px] py-10 font-Montserrat text-white flex items-center justify-around flex-col gap-5 flex-wrap'>
            <div id='eventLeft' className='w-[36%] flex items-start justify-center flex-col gap-5'>
              <h1 className='text-4xl font-Orbitron font-bold'>VytoBlitz 1.0 2024</h1>
              <p className='text-lg'>Join us for an exhilarating experience filled with innovation, technology, and creativity!</p>
              <div id='form' className='flex flex-col gap-4'>
                <form className='flex gap-4'>
                  <input type='text' placeholder='Your Name' className='h-[45px] pl-3 border bg-transparent border-b border-white text-white focus:outline-none' />
                  <input type='email' placeholder='Your Email' className='h-[45px] pl-3 border bg-transparent border-b border-white text-white focus:outline-none' />
                </form>
                <button className='px-2 MobileM:px-5 font-medium sm:px-6 py-2 text-white' style={{
                  background: 'linear-gradient(90deg, rgba(148,0,252,1) 0%, rgba(0,142,247,1) 100%, rgba(31,31,31,1) 100%)',
                }}>Reserve My Spot</button>
              </div>
              <span className='text-sm'>By clicking Reserve My Spot, you agree to our Terms and Conditions.</span>
            </div>
            <div id="eventRight" className='flex flex-col gap-5 items-center justify-center'>
              <h1 className='text-3xl text-center font-bold font-Montserrat'>Thu, Nov 28</h1>
              <div id="timeDuration" className='flex justify-center items-center gap-5 border text-white border-white font-Montserrat p-3 divide-x-2'>
                <div id='day' className='pl-5'>
                  <div className='text-4xl'>10</div>
                  <div className='text-sm'>Days</div>
                </div>
                <div id='hour' className='pl-5'>
                  <div className='text-4xl'>10</div>
                  <div className='text-sm'>Hours</div>
                </div>
                <div id='minute' className='pl-5'>
                  <div className='text-4xl'>10</div>
                  <div className='text-sm'>Mins</div>
                </div>
                <div id='second' className='pl-5 pr-5'>
                  <div className='text-4xl'>10</div>
                  <div className='text-sm'>Secs</div>
                </div>
              </div>
              <span style={{
                background: 'linear-gradient(90deg, rgba(148,0,252,1) 0%, rgba(0,142,247,1) 100%, rgba(31,31,31,1) 100%)',
              }} className='cursor-pointer text-white rounded-md font-semibold px-3 py-1 text-sm'>Only 10 Spot !</span>
            </div>
          </div>
          {/* Cta Section */}
          <div className='pt-40'>
            <EventCta heading='Join Us for the Ultimate Tech Experience!' description='Get ready to explore technology and innovative ideas at our annual tech fest. Mark your calendars for an unforgettable experience on November 28-29!' primaryBtn={"Register"} secondaryBtn={"Learn More"} primaryBtnLink={"/registration"} secondaryBtnLink={"/event"} />
          </div>
          {/* Event Highlight */}
          <div id='eventHightlight' className='font-Orbitron w-full'>
            <div id='textContain' className='py-20'>
              <h1 className='text-center text-4xl font-bold underline'>Event Highlight</h1>
              <p className='text-center py-3 font-Montserrat'>Explore captivating moments from our past tech fests!</p>
            </div>
            <div id="videoSection" className='grid grid-cols-2 gap-x-4 gap-y-12 justify-items-center items-center px-14 content-center h-full'>
              <div id="video1" className='w-[640px] h-[360px] bg-white'></div>
              <div id="video2" className='w-[640px] h-[360px] bg-white'></div>
              <div id="video2" className='w-[640px] h-[360px] bg-white'></div>
              <div id="video2" className='w-[640px] h-[360px] bg-white'></div>
              <div id="video2" className='w-[640px] h-[360px] bg-white'></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Event
