import React from 'react'

 function EventSchedule({time,eventName,venue}) {

    return (
        <div>
            <div className='flex justify-between items-center border-t border-white py-4 font-Montserrat w-3/4 mx-auto text-center'>
                <div className='text-base'>{time}</div>
                <div id="event" className='flex gap-3 justify-center items-center'>
                    <div className='text-lg'>{eventName}</div>
                    <div id="badge" className='text-slate-950 text-sm px-2 font-semibold bg-white rounded-md '>
                        In Person
                    </div>
                </div>
                <div id="Venue">{venue}</div>
                <button className='bg-transparent border border-white px-3 py-2'>View Details</button>
            </div>
        </div>
    )
}

export default EventSchedule
