import React from 'react'
import {TypeAnimation} from "react-type-animation"
import{BsFillSunriseFill, BsFillTelephoneForwardFill, BsBriefcaseFill, BsFillSunsetFill, BsCloudSunFill, BsSunsetFill} from "react-icons/bs"
import {FaMailBulk} from "react-icons/fa"
import {ImInstagram} from "react-icons/im"
import Me from "../assets/me.png"

const Banner = () => {
  const checkDate = new Date();
  const h = checkDate.getHours();
  return (
    <div className='w-[85%] mx-auto md:pt-[120px] pb-10 flex md:flex-row flex-col'>
        
      <div className='w-[60%] mx-auto md:mx-0 md:w-[35%] md:items-start md:justify-start ' >
        <img src={Me} className='w-full h-[400px] object-contain self-start' alt="my photo" />
      </div>
      <div className='w-[97%] md:w-[58%] md:mt-10 md:ml-3' >
        <span className='font-light text-xl' >
            {h<12?
            <div className='flex items-center'>
                <BsFillSunriseFill className='text-yellow-400 pr-2 text-3xl' />
                <span>Good morning</span>
            </div>
            :''}
            {h>12&&h<18?
            <div className='flex items-center'>
                <BsCloudSunFill className='text-yellow-600 pr-2 text-3xl' />
                <span>Good afternoon</span>
            </div>
            :''}
            {h>18&&h<24?
            <div className='flex items-center'>
                <BsFillSunsetFill className='text-yellow-950  pr-2 text-3xl' />
                <span>Good evening</span>
            </div>
            :''}
        </span>
        <TypeAnimation
            className='mt-1 font-light text-3xl pb-[10px] uppercase outline-4 stroke-black'
            sequence={[
                'I am Jeremy, a software developer',
                2000,
                'I am Jeremy, a graphics designer',
                2000,
                Infinity
            ]}
            wrapper='div'
            cursor={true}
            repeat={Infinity}
        />
        <span className='text-justify text-sm text-gray-500 font-light' >
            Passionate software developer and system administrator with
            windows server 2012,
            I hold a bachelor's degree in cybersecurity and networking from
            isbat university (uganda/Kampala) and two certificates in software engineering at
            Aptech computer education (uganda/Kampala).
            I worked as a freelancer, focusing on mobile and web development.
            I always strive to hone my skills and abilities, through challenges and
            opportunities for personal initiative and professional advancement and thereby also enhance
            my teamwork skills in an environment made up of people with
            various experiences, paths or origins.
        </span>
        <br/>
        <div className='mx-auto md:mx-0 flex items-center mt-5 rounded-full w-fit pr-6 bg-black ' >
            <button className='flex rounded-full rounded-r-none items-center px-[25px] py-2 border-2 border-black bg-white' >
                <BsBriefcaseFill className='pr-2 text-2xl' />
                <span className='font-light uppercase' >Hire me</span>
            </button>
            <div className='flex justify-between w-[100px] ml-5 text-white' >
                <BsFillTelephoneForwardFill/>
                <FaMailBulk/>
                <ImInstagram/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
