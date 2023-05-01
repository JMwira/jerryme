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
    <div className='w-[85%] mx-auto mt-[120px] pb-10 flex '>
        
      <div className='w-[35%] items-start justify-start ' >
        <img src={Me} className='w-full h-[400px] object-contain self-start' alt="my photo" />
      </div>
      <div className='w-[58%] mt-10 ml-3' >
        <span className='font-light text-xl' >
            {h<12?
            <div className='flex items-center'>
                <BsFillSunriseFill className='pr-2 text-2xl' />
                <span>Good morning</span>
            </div>
            :''}
            {h>12&&h<18?
            <div className='flex items-center'>
                <BsCloudSunFill className='pr-2 text-2xl' />
                <span>Good afternoon</span>
            </div>
            :''}
            {h>18&&h<24?
            <div className='flex items-center'>
                <BsFillSunsetFill className='pr-2 text-2xl' />
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
        <span className='text-justify text-gray-500 font-light' >
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
        <div className='flex items-center mt-5 rounded-full w-fit pr-6 bg-black ' >
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
