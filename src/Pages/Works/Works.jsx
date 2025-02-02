import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import WorkCard from "../../Components/Works/WorkCard";
import { useLocation } from "react-router-dom";
import ParticlesUI from "@/Animation/ParticlesUI";

const Works = () => {
    const [works, setWorks] = useState([]);
    const location = useLocation();

    useEffect(() => {
        try {
            axios.get('/works.json')
                .then(res => setWorks(res?.data))
        } catch (error) {
            toast.error(error.code);
        }
    }, []);

    return (
        <section className={`flex flex-col w-11/12 mx-auto items-center justify-center ${location.pathname === "/" ? 'pt-28' : 'my-20'}`}>
            {/* Particles */}
            {
                location.pathname === '/works' && <ParticlesUI />
            }

            <button className="px-4 py-2 bg-white rounded-lg mb-8 flex items-center gap-2 dark:bg-dark-lite">
                <FaArrowRight /> Works
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    works.map((work, index) => <WorkCard key={index} work={work} />)
                }
            </div>

        </section>
    );
};

export default Works;