import React from 'react'
import images from '../assets/7hill.jpeg'
const About = () => {
  return (
    <div className='bg-black text-white py-6' id="about">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-10'>
            <img src={images} alt="" className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
            <div className='flex-1'>
            <p className='text-lg mb-8'>Individual committed to continuous self improvement, eagerly updating my skills daily.
With a passion for becoming a proficient front-end
developer</p>
            <div className='space-y-4'>
                    <div className='flex items-center space-x-4'>
                        <label htmlFor="htmlcss"className='w-2/12 '>HTML && CSS</label>
                        <div className='grow bg-gray-500 rounded-full h-2.5 '>
                            <div className='bg-gradient-to-r from-blue-700 to-green-500 h-2.5 rounded-full transform transition duration-300 hover:scale-105 w-10/12'></div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <label htmlFor="htmlcss"className='w-2/12 '>Java</label>
                        <div className='grow bg-gray-500 rounded-full h-2.5 '>
                            <div className='bg-gradient-to-r from-blue-700 to-green-500 h-2.5 rounded-full transform transition duration-300 hover:scale-105 w-9/12'></div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <label htmlFor="htmlcss"className='w-2/12 '>SQL</label>
                        <div className='grow bg-gray-500 rounded-full h-2.5 '>
                            <div className='bg-gradient-to-r from-blue-700 to-green-500 h-2.5 rounded-full transform transition duration-300 hover:scale-105 w-8/12'></div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <label htmlFor="htmlcss"className='w-2/12 '>JavaScript</label>
                        <div className='grow bg-gray-500 rounded-full h-2.5 '>
                            <div className='bg-gradient-to-r from-blue-700 to-green-500 h-2.5 rounded-full transform transition duration-300 hover:scale-105 w-10/12'></div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <label htmlFor="htmlcss"className='w-2/12 '>React Js</label>
                        <div className='grow bg-gray-500 rounded-full h-2.5 '>
                            <div className='bg-gradient-to-r from-blue-700 to-green-500 h-2.5 rounded-full transform transition duration-300 hover:scale-105 w-7/12'></div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <label htmlFor="htmlcss"className='w-2/12 '>Tailwind Css</label>
                        <div className='grow bg-gray-500 rounded-full h-2.5 '>
                            <div className='bg-gradient-to-r from-blue-700 to-green-500 h-2.5 rounded-full transform transition duration-300 hover:scale-105 w-11/12'></div>
                        </div>
                    </div>
            </div>
            <div className='mt-12 flex justify-between text-center'>
              <div>
                <h3>1</h3>
                <p>Growth Intern in Ed-Tech Company</p>
                </div>
                <div>
                <h3>1</h3>
                <p>project</p>
                </div>
                <div>
                <h3>25</h3>
                <p>Leetcode Problem Solving</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
