import React from 'react'

function EventMiniCard({icon,heading,subHeading}) {
  return (
    <div className='flex flex-col justify-center items-start bg-gray-800 max-w-[300px] min-w-[200px] text-white font-Montserrat rounded-md gap-1 p-4 '>
      <div className='text-xl'>{icon}</div>
      <p className='text-xl font-bold'>{heading}</p>
      <p className='text-base'>{subHeading}</p>
    </div>

  )
}

export default EventMiniCard
