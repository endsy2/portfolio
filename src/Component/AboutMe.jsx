
import { AiOutlineArrowRight } from "react-icons/ai";
import { aboutMePic } from "../assets";

const AboutMe = () => {
    return (
        <div className="flex flex-col gap-36 mt-5 lg:mt-20">
            {/* ABOUT ME SECTION */}
            <div className=" flex flex-col lg:flex-row items-center justify-between mt-32 mb-10 gap-14 lg:gap-28">
                {/* Background Glow Effect */}


                {/* Image Section */}
                <div className=" w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center">
                    {/* Outer Glowing Circle */}

                    {/* Profile Image */}
                    <img
                        src={aboutMePic}
                        alt="About Me"
                        className="rounded-full object-cover w-full h-full border-[6px] border-white shadow-2xl hover:scale-105 hover:rotate-3 transition-all duration-500 ease-in-out"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-start lg:text-left max-w-3xl gap-5">
                    <h1 className="text-primary font-extrabold text-4xl lg:text-6xl ">
                        ABOUT ME
                    </h1>
                    <h2 className="text-primary font-semibold text-2xl ">
                        INTRODUCTION ABOUT ME
                    </h2>
                    <p className="font-medium leading-relaxed text-lg lg:text-xl text-gray-700">
                        I am a motivated third-year Information Technology Engineering student at
                        Royal University of Phnom Penh, passionate about modern web development.
                        I specialize in React.js and Express.js and thrive in dynamic, collaborative
                        environments. As a trilingual communicator, I have demonstrated leadership
                        through volunteer work and academic projects.
                    </p>

                    <button className="flex items-center justify-between border-2 border-primary rounded-xl w-60 h-20 px-4 transition duration-300 hover:bg-primary hover:text-white">
                        <span className="text-lg font-medium">More About Me</span>
                        <div className="flex justify-center items-center bg-primary text-white h-14 w-14 rounded-full transition duration-300 hover:bg-white hover:text-primary">
                            <a href=""><AiOutlineArrowRight size={24} /></a>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;
