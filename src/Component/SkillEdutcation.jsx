import { educationData, skillsData } from "../constant";

const SkillEducation = () => {
    return (
        <div className="flex flex-col gap-16 py-10 lg:py-24 px-10 lg:px-24">

            <h1 className="font-bold text-3xl lg:text-4xl text-primary text-center ">Technical Skills And Education</h1>

            {/* Technical Skills Section */}
            <div className="bg-primary rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h1 className="font-bold text-3xl mt-10 lg:text-4xl mb-8 text-subPrimary text-center">Technical Skills</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-3xl p-10 bg-primary-100 gap-10 text-subPrimary font-semibold text-lg">
                    {skillsData.map((skill, index) => (
                        <div key={index}>
                            <p className="mb-2 font-bold text-lg">{skill.category}</p>
                            <ul className="list-disc pl-5 space-y-1">
                                {skill.skills.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education Section */}
            <div className="bg-primary rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h1 className="font-bold text-3xl lg:text-4xl text-center my-8 text-subPrimary">Education</h1>
                <div className="flex gap-10 text-subPrimary font-semibold text-lg rounded-3xl p-10 bg-primary-100">
                    <p className="min-w-[120px]">{educationData.year}</p>
                    <div className="space-y-1">
                        <p className="font-bold">{educationData.university}</p>
                        <p>{educationData.degree}</p>
                        <p>{educationData.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillEducation;
