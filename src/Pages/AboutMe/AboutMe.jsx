import { FaArrowRight } from "react-icons/fa";
import Tariqul from "../../assets/Images/tariqul-logo.jpg"
import { useLocation } from "react-router-dom";
import ParticlesUI from "@/Animation/ParticlesUI";

const AboutMe = () => {
    const location = useLocation();

    return (
        <section
            className={`flex w-11/12 mx-auto relative flex-col gap-20 lg:flex-row ${location.pathname === "/" ? 'pt-28' : 'my-20'}`}
        >
            {/* Particles */}
            {
                location.pathname === '/about-me' && <ParticlesUI />
            }

            {/* Image Section */}
            <div className="lg:w-[30%] flex flex-col justify-center items-center relative">
                <img
                    className="lg:w-[320px] w-10/12 rounded-full"
                    src={Tariqul}
                    alt="Tariqul Islam"
                />
            </div>

            {/* About Content Section */}
            <div className="lg:w-[70%] flex flex-col items-center lg:items-start justify-center">
                {/* Section Title */}
                <button className="px-4 py-2 bg-white rounded-lg mb-4 flex items-center gap-2 dark:bg-dark-lite">
                    <FaArrowRight /> About Me
                </button>
                <h2 className="text-center lg:text-start text-3xl text-primary1 font-semibold leading-[48px] mb-10">
                    Md. Tariqul Islam
                </h2>
                <p className="text-center lg:text-start text-[1.375rem] text-dark-lite font-medium leading-[31px] dark:text-white-deep">
                    Hello! I&apos;m Tariqul Islam, a passionate and dedicated Front-end developer with a knack for creating visually appealing, responsive, and dynamic web applications. With expertise in modern front-end technologies like React, Tailwind CSS, and DaisyUI & others UI components, I strive to deliver seamless user experiences. On the backend, I leverage Node.js and MongoDB to build robust and scalable applications. Currently, I’m pursuing my studies while honing my skills to stay ahead in the ever-evolving tech landscape. Whether it&apos;s developing innovative platforms like Service Orbit or crafting sleek designs for Film Fusion, I thrive on solving challenges and turning ideas into reality. Let’s collaborate to bring your vision to life!
                </p>
            </div>

        </section>
    );
};

export default AboutMe;
