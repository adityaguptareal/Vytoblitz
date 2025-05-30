import React from 'react';
import RectangleButton from "./RectangleButton.jsx";
import RecatangleOutlineButton from "./RecatangleOutlineButton.jsx";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

function EventCard({ src, date, title,  location, registerBtnText, informationText,navigate }) {
  return (
    <>
      <div id='Event' className='flex flex-wrap flex-col lg:flex-row lg:gap-7 gap-14 items-center justify-around py-5 lg:border-b-[1px] lg:border-white border-0 w-auto lg:w-[920px]'>
        <div id="date" className='font-Orbitron text-lg font-bold lg:max-w-[105px] max-w-fit'>{date}</div>
        <div id="eventImage">
          <img src={src} alt="" className=' max-w-[300px] lg:max-w-[150px]' />
        </div>
        <div id="Text Content" className=' max-w-[240px] MobileL:max-w-max flex flex-col gap-3'>
          <h1 className='font-Orbitron text-xl font-bold uppercase'>{title}</h1>
          <div id='location' className='text-sm font-Montserrat flex items-center gap-2'>
            <FaLocationDot className="text-lg" /> {location} 
          </div>
        </div>
        <div id="Buttons" className='flex lg:flex-col flex-row gap-5'>
          
          <RectangleButton   navigateTo={navigate} text={registerBtnText} />
          {/* <RecatangleOutlineButton navigateTo={navigate} text={informationText} /> */}
        </div>
      </div>
    </>
  );
}

export default EventCard;
