import React from 'react'
import Header from './Header'
import { Link } from 'react-scroll'
import { AiFillHome } from 'react-icons/ai'
import { BsBriefcaseFill, BsPeopleFill, BsPersonBadgeFill } from 'react-icons/bs'

const Modal = ({isToggle}) => {
  return (
    <div className='bg-white shadow-md z-50 w-full flex items-center justify-between font-Quicksand px-[7%] top-0 py-5 fixed'>
      <div>
        <TiThMenu className='md:hidden text-xl' />
        <img src={Logo} className='w-[100px] object-cover '/>
        <div className='flex gap-x-2 items-center' >
            <BsGithub className='md:hidden text-xl' />
        </div>
      </div>
      <ul className='hidden md:flex text-primary ' >
        <Link smooth offset={'-100'} spy={true} to={'home'} className='px-2 flex items-center shadow-sm py-2' activeClass='active' >
            <AiFillHome className='pr-2 text-xl'/>
            <span>Home</span>
        </Link>
        <Link smooth offset={-70} spy={true} to={'skills'} className='px-2 flex items-center shadow-sm py-2' activeClass='active' >
            <BsPersonBadgeFill className='pr-2 text-xl'/>
            <span>Skills</span>
        </Link>
        <Link smooth offset={-70} spy={true} to={'about'} className='px-2 flex items-center shadow-sm py-2' activeClass='active' >
            <BsBriefcaseFill className='pr-2 text-xl'/>
            <span>my work</span>
        </Link>
        <Link smooth offset={-70} spy={true} to={'contact'} className='px-2 flex items-center shadow-sm py-2' activeClass='active'>
            <BsPeopleFill className='pr-2 text-xl'/>
            <span>Contact</span>
        </Link>
      </ul>
    </div>
  )
}

export default Modal
