import React from 'react';
import { heroImg } from '../assets';
import { FiChevronDown } from 'react-icons/fi';
import AboutMe from './AboutMe';

const Hero = () => {
    return (
        <div >
            <div className='flex gap-96 py-52 lg:5 '>
                <div className="flex flex-col lg:w-1/4 items-center  justify-center gap-8 text-gray-900 text-xl font-OpenSans text-center  ">
                    {/* Title */}
                    <div className='flex flex-col max-lg:justify-center lg:items-center gap-5'>
                        <div className=' flex justify-center items-center bg-primary h-16 rounded-lg   '>
                            <h1 className='font-bold text-start text-lg sm:text-xl md:text-2xl text-subPrimary  '>Hello There!</h1>
                        </div>
                        <p className="font-bold text-start text-3xl sm:text-4xl md:text-5xl text-primary">I'm Chin Kongming.</p>
                        {/* Description */}

                        <p className="text-center lg:text-start   font-semibold text-lg  sm:text-xl md:text-4xl  ">
                            Web Developer
                        </p>
                    </div>
                    {/* Button */}
                    {/* <button className="px-10 py-4 bg-primary text-white font-bold rounded-xl mt-5 hover:bg-opacity-90 transition duration-300 cursor-pointer">
                PROJECT
            </button> */}

                </div>
                <div className='flex items-center justify-center mt-10 max-lg:hidden'>
                    <img src={heroImg} alt="" className='w-[550px]' />
                </div>
            </div>
            {/* <div className='flex justify-center '>
                <a href="" className='text-3xl  text-primary hover:text-primary-100 '><FiChevronDown /></a>
            </div> */}

        </div>
    );
};

export default Hero;
