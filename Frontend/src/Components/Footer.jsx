import React, { useState, useEffect } from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
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
        <div className='bg-black border-t-1 font-Montserrat border-white w-full flex flex-col mt-14 py-12 gap-3 items-center justify-center'>
            <h1 className='font-Montserrat font-bold text-2xl text-center'>Follow us on</h1>
            <div id='socialMedia' className='flex gap-3 flex-wrap items-center justify-center cursor-pointer'>
              <a href="https://www.instagram.com/vytoflow_tech/">
                <TiSocialLinkedinCircular className='text-5xl' />
              </a>
            <a href="https://www.linkedin.com/company/vytoflow-tech/">
            <FaInstagram className='text-4xl' />
            </a>
            <a href="https://wa.me/+918700745848">
             <MdWhatsapp className='text-4xl' />
            </a>
            </div>
            <div className='text-center'> © VytoFlowTech {year} <br /> site deisgned by <a href="http://adityaguptareal.com/" className='cursor-pointer text-purple-400 ' target='_blank'>Aditya Kumar Gupta ❤️</a></div>

        </div>
    )
}

export default Footer