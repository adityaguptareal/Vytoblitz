import React, { useState, useEffect } from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import { useNavigate,Link } from 'react-router-dom';
import { MdWhatsapp } from "react-icons/md";

function Footer() {
    const [year, setYear] = useState('2024')
    function getYear() {
        let date = new Date()
        setYear(date.getFullYear())
    }
    useEffect(() => {
        getYear()
        return () => {
        }
    }, [])


    return (
<>
<div>

<div className='flex md:flex-row flex-col gap-y-3  justify-around bg-slate-950 items-start px-5 py-5 lg:px-10 lg:py-10 text-white '>
{/* Logo Section */}

<div id='logo' className='md:w-1/4 w-[75%] flex font-Montserrat gap-3 flex-col'>
    <h1 className='font-Orbitron  text-3xl lg:text-4xl  font-bold'>VytoBlitz</h1>
    <p className='text-sm lg:text-base' >Join us for an exciting lineup of competitions, workshops, and cultural activities that showcase the spirit of technology and teamwork</p>
</div>

{/* Quick link Section */}
<div id='link' className='font-Montserrat'>
    <span className='text-lg font-bold '>Quick Link</span>
    <ul className='pt-4 flex flex-row md:flex-col gap-3'>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Event</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>About</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Contact</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Registraion</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>FAQ</li>
    </ul>
</div>
<div id='link' className='font-Montserrat'>
    <span className='text-lg font-bold '>Resources</span>
    <ul className='pt-4 flex flex-row md:flex-col gap-3'>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Blog</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Support</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Team</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Events</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Workshop</li>
    </ul>
</div>

{/* Social Media Section */}
<div id='link' className='font-Montserrat'>
    <span className='text-lg font-bold '>Follow us</span>
    <ul className='pt-4 flex flex-row md:flex-col gap-3'>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Linkedin</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Instagram</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Whatsapp</li>
        <li className='text-sm cursor-pointer hover:text-purple-500'>Email</li>
    </ul>
</div>

</div>
<div className="flex flex-col md:flex-row justify-between gap-4 p-6 border-t-[0.7px] border-slate-700 md:items-center items-start pb-13 bg-gray-950 text-white  font-Montserrat lg:text-sm text-[12px]">
    <div id="footerLeft" className='flex flex-col md:flex-row gap-6 cursor-pointer'>
        <span>© {year} VytoBlitz. All Right Reserved.</span>
        <ul className='flex flex-row  gap-2 underline '>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookies Policy </li>
        </ul>
    </div>
    <div id="footerRight">
        <ul className='flex gap-4 text-[25px] '>
            <li className='hover:scale-[1.2] transition-all ease-linear cursor-pointer'><FaLinkedin/></li>
            <li className='hover:scale-[1.2] transition-all ease-linear cursor-pointer'><FaInstagram/></li>
            <li className='hover:scale-[1.2] transition-all ease-linear cursor-pointer'><FaWhatsapp /></li>
        </ul>
    </div>
</div>
</div>
</>
        
    )
}

export default Footer