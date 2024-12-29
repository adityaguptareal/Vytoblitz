import React from 'react'
import { useNavigate } from "react-router-dom"

function EventCta({ heading, description, primaryBtn, secondaryBtn, primaryBtnLink, secondaryBtnLink }) {
    const navigateTo = useNavigate()
    return (
        <div>
            <div  style={{
        background: 'linear-gradient(90deg, rgba(148,0,252,1) 0%, rgba(0,142,247,1) 100%, rgba(31,31,31,1) 100%)',
      }} className='w-full py-10 md:py-16  font-Montserrat text-white flex items-center justify-center flex-col gap-5 flex-wrap'>
                <div className='md:max-w-[650px] max-w-[300px] flex items-center justify-center flex-col gap-5'>

                    <h1 className='md:text-4xl text-3xl font-bold text-center '>{heading}</h1>
                    <p className='text-center'>{description}</p>
                    <div className='flex gap-4'>
                        <button className='bg-white py-2 px-4  hover:bg-transparent hover:border hover:border-white hover:text-white text-gray-900 font-semibold'
                            onClick={() => navigateTo(primaryBtnLink)}>{primaryBtn}</button>
                        <button className='bg-transparent border border-white py-2 px-4' onClick={() => navigateTo(secondaryBtnLink)}>{secondaryBtn}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCta
