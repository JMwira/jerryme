import React from 'react'
import { Line, Circle } from 'rc-progress';

const Skills = () => {
  return (
    <div id="skills" className='bg-primary py-10' >
        <div className='w-[80%] px-10 grid-cols-1 grid md:grid-cols-2 md:gap-x-4 mx-auto ' >
            <div className='text-invert flex flex-col border-b-[1px] border-invert mt-2 pb-5' >
                <span>React js</span>
                <span className='text-sm font-light text-gray-400' >front end web development</span>
                {/* <Line percent={80} className='rounded-full mt-2' strokeWidth={2} strokeColor="#219ebc" trailWidth={5} /> */}
            </div>
            <div className='text-invert flex flex-col border-b-[1px] border-invert mt-2 pb-5' >
                <span>Next js</span>
                <span className='text-sm font-light text-gray-400' >front end web development</span>
                {/* <Line percent={60} className='rounded-full mt-2' strokeWidth={2} strokeColor="#219ebc" trailWidth={5} /> */}
            </div>
            <div className='text-invert flex flex-col border-b-[1px] border-invert mt-2 pb-5' >
                <span>React native</span>
                <span className='text-sm font-light text-gray-400' >mobile development</span>
                {/* <Line percent={75} className='rounded-full mt-2' strokeWidth={2} strokeColor="#219ebc" trailWidth={5} /> */}
            </div>
            <div className='text-invert flex flex-col border-b-[1px] border-invert mt-2 pb-5' >
                <span>Node js</span>
                <span className='text-sm font-light text-gray-400' >APIs development</span>
                {/* <Line percent={75} className='rounded-full mt-2' strokeWidth={2} strokeColor="#219ebc" trailWidth={5} /> */}
            </div>
            <div className='text-invert flex flex-col border-b-[1px] border-invert mt-2 pb-5' >
                <span>React redux</span>
                <span className='text-sm font-light text-gray-400' >front end web development</span>
                {/* <Line percent={70} className='rounded-full mt-2' strokeWidth={2} strokeColor="#219ebc" trailWidth={5} /> */}
            </div>
            <div className='text-invert flex flex-col border-b-[1px] border-invert mt-2 pb-5' >
                <span>Firebase</span>
                <span className='text-sm font-light text-gray-400' >database management</span>
                {/* <Line percent={75} className='rounded-full mt-2' strokeWidth={2} strokeColor="#219ebc" trailWidth={5} /> */}
            </div>
            <div className='text-invert flex flex-col border-b-[1px] border-invert mt-2 pb-5' >
                <span>mongoDb</span>
                <span className='text-sm font-light text-gray-400' >database management</span>
                {/* <Line percent={80} className='rounded-full mt-2' strokeWidth={2} strokeColor="#219ebc" trailWidth={5} /> */}
            </div>
            <div className='text-invert flex flex-col border-b-[1px] border-invert mt-2 pb-5' >
                <span>MYSql</span>
                <span className='text-sm font-light text-gray-400' >database management</span>
                {/* <Line percent={80} className='rounded-full mt-2' strokeWidth={2} strokeColor="#219ebc" trailWidth={5} /> */}
            </div>
            <div className='text-invert flex flex-col border-b-[1px] border-invert mt-2 pb-5' >
                <span>Git version control</span>
                <span className='text-sm font-light text-gray-400' >front end web development</span>
                {/* <Line percent={75} className='rounded-full mt-2' strokeWidth={2} strokeColor="#219ebc" trailWidth={5} /> */}
            </div>
            <div className='text-invert flex flex-col border-b-[1px] border-invert mt-2 pb-5' >
                <span>Agile development methodology</span>
                <span className='text-sm font-light text-gray-400' >front end web development</span>
                {/* <Line percent={70} className='rounded-full mt-2' strokeWidth={2} strokeColor="#219ebc" trailWidth={5} /> */}
            </div>
        </div>
    </div>
  )
}

export default Skills
