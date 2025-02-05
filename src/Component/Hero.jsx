import React from 'react';
import { heroImg } from '../assets';
import { FiChevronDown } from 'react-icons/fi';
import AboutMe from './AboutMe';

const Hero = () => {
    return (
        <div >
            <div className='flex gap-96 py-5'>
                <div className="flex flex-col lg:w-1/4  justify-center gap-8 text-gray-900 text-xl font-OpenSans text-center  ">
                    {/* Title */}
                    <div className=' flex justify-center items-center bg-primary h-16 rounded-lg mb-10 '>
                        <h1 className='font-bold text-start text-lg sm:text-xl md:text-2xl text-subPrimary space-y-6'>PORTFOLIO</h1>
                    </div>
                    <h1 className="font-bold text-start text-3xl sm:text-4xl md:text-5xl text-primary space-y-6">
                        <p>CHIN</p><p> KONGMING.</p>
                    </h1>
                    {/* Description */}

                    <p className="text-start  font-semibold text-lg  sm:text-xl md:text-2xl  leading-relaxed">
                        Web Developer
                    </p>

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
            <AboutMe />
        </div>
    );
};

export default Hero;
