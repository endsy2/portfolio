
import { aboutMePic } from "../assets";

const AboutMe = () => {
    return (
        <div className="flex flex-col gap-36">
            {/* ABOUT ME SECTION */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between mt-32 mb-10 gap-14 lg:gap-28">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-transparent blur-3xl opacity-50"></div>

                {/* Image Section */}
                <div className="relative w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center">
                    {/* Outer Glowing Circle */}
                    <div className="absolute w-full h-full rounded-full border-8 border-primary opacity-20 animate-pulse"></div>
                    {/* Profile Image */}
                    <img
                        src={aboutMePic}
                        alt="About Me"
                        className="rounded-full object-cover w-full h-full border-[6px] border-white shadow-2xl hover:scale-105 hover:rotate-3 transition-all duration-500 ease-in-out"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col text-center lg:text-left max-w-3xl">
                    <h1 className="text-primary font-extrabold text-4xl lg:text-6xl mb-6">
                        ABOUT ME
                    </h1>
                    <h2 className="text-primary font-semibold text-2xl mb-4">
                        INTRODUCTION ABOUT ME
                    </h2>
                    <p className="font-medium leading-relaxed text-lg lg:text-xl text-gray-700">
                        I am a motivated third-year Information Technology Engineering student at
                        Royal University of Phnom Penh, passionate about modern web development.
                        I specialize in React.js and Express.js and thrive in dynamic, collaborative
                        environments. As a trilingual communicator, I have demonstrated leadership
                        through volunteer work and academic projects.
                    </p>
                </div>
            </div>

            {/* EDUCATION & SKILLS SECTION */}
            <div className="flex flex-wrap justify-between gap-16 ">
                {/* EDUCATION */}
                <div className="bg-primary p-10 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <h1 className="font-bold text-3xl lg:text-4xl text-center mb-8 text-subPrimary">
                        EDUCATION
                    </h1>
                    <div className="flex gap-10 text-subPrimary font-semibold text-lg">
                        <p className="min-w-[120px]">2022 - PRESENT</p>
                        <div className="space-y-1">
                            <p className="font-bold">Royal University of Phnom Penh</p>
                            <p>Year 3 - Bachelor of Information Technology Engineering</p>
                            <p>Phnom Penh</p>
                        </div>
                    </div>
                </div>

                {/* TECHNICAL SKILLS */}
                <div className="bg-primary p-10 px-14 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <h1 className="font-bold text-3xl lg:text-4xl mb-8 text-subPrimary text-center">
                        TECHNICAL SKILLS
                    </h1>
                    <div className="flex flex-col gap-4 text-subPrimary font-semibold text-lg">
                        {/* Backend */}
                        <div>
                            <p className="mb-1 font-bold text-lg">Backend Development</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Express.js, Node.js</li>
                                <li>MySQL Database Management</li>
                                <li>RESTful API Development</li>
                            </ul>
                        </div>

                        {/* Frontend */}
                        <div>
                            <p className="mb-1 font-bold text-lg">Frontend Development</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>React.js</li>
                                <li>Tailwind CSS</li>
                                <li>Responsive Web Design</li>
                            </ul>
                        </div>

                        {/* Programming Languages */}
                        <div>
                            <p className="mb-1 font-bold text-lg">Programming Languages</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>JavaScript/Node.js</li>
                                <li>Java</li>
                                <li>SQL</li>
                            </ul>
                        </div>

                        {/* Development Tools */}
                        <div>
                            <p className="mb-1 font-bold text-lg">Development Tools</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Version Control (Git)</li>
                                <li>Problem Solving</li>
                                <li>Database Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
