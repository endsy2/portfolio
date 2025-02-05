import React from 'react'

const SkillEdutcation = () => {
    return (
        <div>
            {/* EDUCATION & SKILLS SECTION */}
            <div className="flex flex-col flex-wrap justify-between gap-16 mt-52 ">
                <div className="bg-primary rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <h1 className="font-bold text-3xl mt-10 lg:text-4xl mb-8 text-subPrimary text-center">
                        TECHNICAL SKILLS
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-3xl p-10 bg-primary-100 gap-10 text-subPrimary font-semibold text-lg ">
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
                {/* EDUCATION */}
                <div className="bg-primary rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
                    <h1 className="font-bold text-3xl lg:text-4xl text-center my-8  text-subPrimary">
                        EDUCATION
                    </h1>
                    <div className="flex gap-10 text-subPrimary font-semibold text-lg rounded-3xl p-10 bg-primary-100">
                        <p className="min-w-[120px]">2022 - PRESENT</p>
                        <div className="space-y-1">
                            <p className="font-bold">Royal University of Phnom Penh</p>
                            <p>Year 3 - Bachelor of Information Technology Engineering</p>
                            <p>Phnom Penh</p>
                        </div>
                    </div>
                </div>

                {/* TECHNICAL SKILLS */}

            </div>
        </div>
    )
}

export default SkillEdutcation
