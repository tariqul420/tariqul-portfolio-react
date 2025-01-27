import ParticlesUI from "@/Animation/ParticlesUI";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [learningSkills, setLearningSkills] = useState([])
    const [comfortableSkills, setComfortableSkills] = useState([])
    const location = useLocation();

    useEffect(() => {
        axios.get('/skill.json')
            .then(res => setSkills(res.data))

        axios.get('/learningSkills.json')
            .then(res => setLearningSkills(res.data))

        axios.get('/comfortable.json')
            .then(res => setComfortableSkills(res.data))
    }, []);

    return (
        <section
            className={`w-11/12 my-20 mx-auto ${location.pathname === "/" ? 'pt-28' : 'my-20'}`}
        >
            {/* Particles */}
            {
                location.pathname === '/skills' && <ParticlesUI />
            }

            {/* All Skills */}
            <div className="flex flex-col items-center justify-center">
                {/* Section Title */}
                <button className="px-4 py-2 bg-white rounded-lg mb-8 flex items-center gap-2 dark:bg-dark-lite">
                    <FaArrowRight /> Skills
                </button>

                {/* Skill Icons */}
                <div
                    className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-center gap-4"
                >
                    {skills?.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center space-y-2 lang"
                        >
                            <img className="w-10 h-10 object-contain" src={skill?.image} alt="" />
                            <p className="font-bold text-dark-lite tracking-widest dark:text-white-deep">{skill?.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Current Learning */}
            <div className="flex flex-col items-center justify-center">
                {/* Section Title */}
                <button className="px-4 py-2 bg-white rounded-lg mb-8 mt-10 flex items-center gap-2 dark:bg-dark-lite">
                    <FaArrowRight /> Current Learning
                </button>

                {/* Skill Icons */}
                <div
                    className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-center gap-4"
                >
                    {learningSkills?.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center space-y-3 lang"
                        >
                            <img className="w-10 h-10 object-contain" src={skill?.image} alt="" />
                            <p className="font-bold text-dark-lite tracking-widest dark:text-white-deep">{skill?.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Comfortable */}
            <div className="flex flex-col items-center justify-center">
                {/* Section Title */}
                <button className="px-4 py-2 bg-white rounded-lg mb-8 mt-10 flex items-center gap-2 dark:bg-dark-lite">
                    <FaArrowRight /> comfortable
                </button>

                {/* Skill Icons */}
                <div
                    className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 items-center justify-center gap-4"
                >
                    {comfortableSkills?.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center space-y-3 lang"
                        >
                            <img className="w-10 h-10 object-contain" src={skill?.image} alt="" />
                            <p className="font-bold text-dark-lite tracking-widest dark:text-white-deep">{skill?.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;