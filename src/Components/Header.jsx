import React from 'react'
import Logo from "../assets/jerryme.png"
import {AiFillHome} from "react-icons/ai"
import {BsPersonBadgeFill, BsBriefcaseFill, BsPeopleFill} from "react-icons/bs"
import {Link} from "react-scroll"
const Header = () => {
  return (
    <div className='w-full flex items-center justify-between font-Quicksand px-[7%] top-0 py-5 fixed'>
      <img src={Logo} className='w-[100px] object-cover '/>
      <ul className='flex text-blue-950 ' >
        <Link smooth offset={-10} spy={true} to={'home'} className='px-2 flex items-center' activeClass='active' >
            <AiFillHome className='pr-2 text-xl'/>
            <span>Home</span>
        </Link>
        <Link smooth spy={true} to={'about'} className='px-2 flex items-center' activeClass='active' >
            <BsPersonBadgeFill className='pr-2 text-xl'/>
            <span>About me</span>
        </Link>
        <Link smooth spy={true} to={'experience'} className='px-2 flex items-center' activeClass='active' >
            <BsBriefcaseFill className='pr-2 text-xl'/>
            <span>my work</span>
        </Link>
        <Link smooth spy={true} to={'contact'} className='px-2 flex items-center' activeClass='active'>
            <BsPeopleFill className='pr-2 text-xl'/>
            <span>Contact</span>
        </Link>
      </ul>
    </div>
  )
}

export default Header
