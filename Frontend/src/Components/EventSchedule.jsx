import { React, useState } from 'react'

function EventSchedule({ time, eventName, venue }) {
    const [date, setDate] = useState('28 Nov');
  

    const eventData28Nov = [{
        id: 1,
        time: "10:00 AM",
        date: "28 Nov",
        eventName: "Algo Quizathon",
        venue: "ITS Engineering LAB 4",
    }, {
        id: 2,
        time: "11:00 AM",
        date: "28 Nov",
        eventName: "Artistry Arena",
        venue: "TS Engineering LAB 3 ",
    },
    {
        id: 3,
        time: "12:00 AM",
        date: "28 Nov",
        eventName: "Esports Game",
        venue: "ITS Engineering COE Room",
    }, {
        id: 4,
        time: "9:00 AM",
        date: "28 Nov",
        eventName: "Vyto HackClash",
        venue: "ITS Engineering COE Room ",
    }];

    const eventData29Nov = [{
        id: 1,
        time: "10:00 AM",
        date: "29 Nov",
        eventName: "Cultural Carnival",
        venue: "ITS Engineering Sardar Patel Auditoriam",
    }];

    const finalDate = date === "28 Nov" ? eventData28Nov : eventData29Nov;

    return (

        <>
            <div id='dateButton' className='flex gap-5 justify-center py-6'>
                <button onClick={() => setDate('28 Nov')} className={`text-white font-Montserrat px-6 py-2 border ${date === '28 Nov' ? 'border-white' : 'border-transparent'}`}>28 Nov</button>
                <button onClick={() => setDate('29 Nov')} className={`text-white font-Montserrat px-6 py-2 border ${date === '29 Nov' ? 'border-white' : 'border-transparent'}`}>29 Nov</button>
            </div>
            

                {finalDate.map((eventData, index) => {
                    return (
                        <div key={index}>
                            <div className='flex justify-between items-center border-t border-white py-4 font-Montserrat w-3/4 mx-auto text-center'>
                                <div className='lg:text-base text-[12px]'>{eventData.time}</div>
                                <div id="event" className='flex gap-3 justify-center items-center'>
                                    <div className='lg:text-lg text-[12px]'>{eventData.eventName}</div>
                                    <div id="badge" className='text-slate-950 lg:text-sm text-[12px] px-2 font-semibold bg-white rounded-md '>
                                        In Person
                                    </div>
                                </div>
                                <div id="Venue" className='lg:text-base text-sm'>{eventData.venue}</div>
                                <button className='bg-transparent border lg:text-base text-sm border-white px-3 py-2'>View Details</button>
                            </div>
                        </div>
                    );
                })}
             
            </>
        )
    }
    
    export default EventSchedule
