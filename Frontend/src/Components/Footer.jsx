import React, { useState, useEffect } from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import { useNavigate,Link } from 'react-router-dom';
import { MdWhatsapp } from "react-icons/md";

function Footer() {
    const [year, setYear] = useState('2024')
    const navigate=useNavigate()
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
    <ul className='pt-4 flex flex-col gap-1'>
        <li className='text-sm cursor-pointer hover:text-purple-500'><Link to={"/event"}>Event</Link></li>
        <li className='text-sm cursor-pointer hover:text-purple-500'><Link to={"/about"}>About</Link></li>
        <li className='text-sm cursor-pointer hover:text-purple-500'><Link to={"/contact"}>Contact</Link></li>
        <li className='text-sm cursor-pointer hover:text-purple-500'><Link to={"/registration"}>Registraion</Link></li>
        <li className='text-sm cursor-pointer hover:text-purple-500'><Link to={"/event#questions"}>FAQ</Link></li>
    </ul>
</div>
<div id='link' className='font-Montserrat'>
    <span className='text-lg font-bold '>Resources</span>
    <ul className='pt-4 flex flex-col gap-1'>
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
        <li className='text-sm cursor-pointer hover:text-purple-500'><Link to={"https://www.linkedin.com/company/vytoflow-tech/posts/?feedView=all"}>Linkedin</Link></li>
        <li className='text-sm cursor-pointer hover:text-purple-500'><Link to={"https://www.instagram.com/vytoflow_tech/"}>Instagram</Link></li>
        <li className='text-sm cursor-pointer hover:text-purple-500'><Link to={"https://wa.me/+918700745848"}>Whatsapp</Link></li>
        <li className='text-sm cursor-pointer hover:text-purple-500'><a href="mailto:vytoflow.community@its.edu.in">vytoflow.community@its.edu.in</a></li>
    </ul>
</div>

</div>
<div className="flex flex-col md:flex-row justify-between gap-4 p-6 border-t-[0.7px] border-slate-700 md:items-center items-start pb-13 bg-gray-950 text-white  font-Montserrat lg:text-sm text-[12px]">
    <div id="footerLeft" className='flex flex-col md:flex-row gap-6 cursor-pointer'>
        <span>© {year} VytoFlowTech. All Right Reserved.</span>
        <ul className='flex flex-row  gap-2 underline '>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookies Policy </li>
        </ul>
    </div>
    <div id="footerRight">
        <ul className='flex gap-4 text-[25px] '>
            <li className=' text-white  font-Montserrat lg:text-sm text-[12px]'>Site Deisgned by <strong className='text-purple-300 font-semibold'><Link to={"https://adityaguptareal.com"}>Aditya Kumar Gupta</Link></strong></li>
            <li className='hover:scale-[1.2] transition-all ease-linear cursor-pointer'>
                <Link to={"https://www.linkedin.com/company/vytoflow-tech/posts/?feedView=all"}><FaLinkedin/>
                </Link></li>
            <li className='hover:scale-[1.2] transition-all ease-linear cursor-pointer'>
                <Link to={"https://www.instagram.com/vytoflow_tech/"}><FaInstagram/
                ></Link></li>
            <li className='hover:scale-[1.2] transition-all ease-linear cursor-pointer'>
                <Link to={"https://wa.me/+918700745848"}><FaWhatsapp /></Link></li>
        </ul>
    </div>
</div>
</div>
</>
        
    )
}

export default Footer