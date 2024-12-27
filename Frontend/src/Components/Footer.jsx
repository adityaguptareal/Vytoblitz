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
<div className='flex justify-around items-start px-10 py-10 text-white'>
{/* Logo Section */}

<div id='logo' className='w-1/4 flex font-Montserrat gap-3 flex-col'>
    <h1 className='font-Orbitron text-4xl font-bold'>VytoBlitz</h1>
    <p >Join us for an exciting lineup of competitions, workshops, and cultural activities that showcase the spirit of technology and teamwork</p>
</div>

{/* Quick link Section */}
<div id='link' className='font-Montserrat'>
    <span className='text-lg font-bold '>Quick Link</span>
    <ul className='pt-4'>
        <li className='text-sm'>Event</li>
        <li className='text-sm'>About</li>
        <li className='text-sm'>Contact</li>
        <li className='text-sm'>Registraion</li>
        <li className='text-sm'>FAQ</li>
    </ul>
</div>
<div id='link' className='font-Montserrat'>
    <span className='text-lg font-bold '>Resources</span>
    <ul className='pt-4'>
        <li className='text-sm'>Blog</li>
        <li className='text-sm'>Support</li>
        <li className='text-sm'>Team</li>
        <li className='text-sm'>Events</li>
        <li className='text-sm'>Workshop</li>
    </ul>
</div>

{/* Social Media Section */}
<div id='link' className='font-Montserrat'>
    <span className='text-lg font-bold '>Follow us</span>
    <ul className='pt-4'>
        <li className='text-sm'>Linkedin</li>
        <li className='text-sm'>Instagram</li>
        <li className='text-sm'>Whatsapp</li>
        <li className='text-sm'>Email</li>
    </ul>
</div>

</div>
<div className="flex justify-between px-14 border-t-[0.7px] border-slate-700 items-center pb-13 bg-gray-950 text-white p-4 font-Montserrat text-sm">
    <div id="footerLeft" className='flex gap-6 cursor-pointer'>
        <span>© {year} VytoBlitz. All Right Reserved.</span>
        <ul className='flex gap-4 underline'>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookies Policy </li>
        </ul>
    </div>
    <div id="footerRight">
        <ul className='flex gap-2 text-[25px] '>
            <li className='hover:scale-[1.2] transition-all ease-linear cursor-pointer'><FaLinkedin/></li>
            <li className='hover:scale-[1.2] transition-all ease-linear cursor-pointer'><FaInstagram/></li>
            <li className='hover:scale-[1.2] transition-all ease-linear cursor-pointer'><FaWhatsapp /></li>
        </ul>
    </div>
</div>
</>
        
    )
}

export default Footer