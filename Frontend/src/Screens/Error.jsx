import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Error() {
    return (
        <>
            <div className=' bg-gray-950 my-auto overflow-hidden '>
                <Navbar />
                <div className='flex items-center overflow-hidden gap-3 flex-col justify-center h-screen'>
                    <div className='text-8xl font-bold text-white font-Orbitron text-center uppercase'>Error 404</div>
                    <div className='text-3xl text-white font-Orbitron text-center'>Resource Not Found !</div>
                    Test
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Error
