
import React,{useState} from 'react'
import {FaLaptopCode} from "react-icons/fa"
import {ImMobile} from "react-icons/im"
import {MdOutlineDraw} from "react-icons/md"
import { data } from '../data'

const Me = () => {
  const [Category, setCategory] = useState("web")
  return (
    <div className='w-[85%] pt-5 flex flex-col mx-auto justify-center items-center mt-0' >
      <div className='font-light text-4xl' >
        <span>My</span>
        <span className='text-blue-800 font-light ml-1' >Experience</span>
      </div>
      <span className='text-center text-sm font-light max-w-[55%] mt-5' >
        I am a Diligent and versatile software developer and graphics designer,with great experience as a freelancer in mobile and web application development
      </span>
      <div className='w-full' >
        <div className='flex-row z-10 bg-white relative flex justify-between mx-auto sm:w-[60%] text-invert mt-10' >
            <div onClick={()=>{setCategory('web')}} className={Category=='web'?'p-5 flex flex-col items-center shadow-xl rounded-full sm:rounded-sm bg-blue-800':'p-5 flex flex-col items-center shadow-xl rounded-full sm:rounded-sm bg-primary'}>
                <FaLaptopCode className='text-3xl'/>
                <span className='hidden md:block cursor-pointer text-xl font-light'>Web development</span>
            </div>
            <div onClick={()=>{setCategory('mobile')}} className={Category=='mobile'?'p-5 text-invert flex flex-col items-center shadow-xl rounded-full sm:rounded-sm bg-blue-800':'p-5 text-primary flex flex-col items-center shadow-xl rounded-full sm:rounded-sm bg-invert'}>
                <ImMobile className='text-3xl'/>
                <span className='hidden md:block cursor-pointer text-xl font-light'>Mobile development</span>
            </div>
            <div onClick={()=>{setCategory('graph')}} className={Category=='graph'?'p-5 flex flex-col items-center shadow-xl rounded-full sm:rounded-sm bg-blue-800':'p-5 flex flex-col items-center shadow-xl rounded-full sm:rounded-sm bg-primary'}>
                <MdOutlineDraw className='text-3xl'/>
                <span className='hidden md:block cursor-pointer text-xl font-light'>Visual communication</span>
            </div>
        </div>
        <div className='border-t-2 border-t-primary relative top-[-50px]' >
            <div className='w-10 h-10' ></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 mt-10' >
              {
                data.map((single_data)=>{
                  return(
                    <div className='bg-gray-100 shadow-lg rounded-sm p-5'>
                      <div className='font-bold items-center flex gap-x-2 pb-2' >
                        {
                          single_data.category=="web"&&<FaLaptopCode className='text-3xl'/>
                        }
                        {
                          single_data.category=="mobile"&&<ImMobile className='text-3xl'/>
                        }
                        {
                          single_data.category=="graphic"&&<MdOutlineDraw className='text-3xl'/>
                        }
                        <span>{single_data.project_name}</span>
                      </div>
                      <span className='font-light' >
                        {single_data.project_description}
                      </span>
                      <br/>
                      <span className='text-blue-800 font-bold cursor-pointer' onClick={()=>window.location.assign(single_data.url)} >{single_data.url}</span>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Me
