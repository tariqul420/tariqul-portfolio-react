import { FaHome } from "react-icons/fa";
import Banner from "../../Components/Home/Banner";
import { BsPersonWorkspace } from "react-icons/bs";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import ContactMe from "../Contact/ContactMe";
import { FaCircleUser } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { LuContactRound } from "react-icons/lu";

const Home = () => {
    const handelNavigate = (hash) => {
        window.location.hash = hash;
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative">
            <div id="home">
                <Banner />
            </div>
            <div id="about-me">
                <AboutMe />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="works">
                <Works />
            </div>
            <div id="contact-me">
                <ContactMe />
            </div>


            <div className="absolute bottom-0 w-full">
                <ul className="flex flex-col items-center gap-3 bg-[#ffffff] dark:bg-[#1a1a1a] dark:text-white-deep fixed bottom-5 right-4 rounded-md p-2">
                    <li className="cursor-pointer" onClick={() => handelNavigate("home")}>
                        <FaHome size={20} />
                    </li>
                    <li className="cursor-pointer" onClick={() => handelNavigate("about-me")}>
                        <FaCircleUser size={20} />
                    </li>
                    <li className="cursor-pointer" onClick={() => handelNavigate("skills")}>
                        <HiLightBulb size={30} />
                    </li>
                    <li className="cursor-pointer" onClick={() => handelNavigate("works")}>
                        <BsPersonWorkspace size={20} />
                    </li>
                    <li className="cursor-pointer" onClick={() => handelNavigate("contact-me")}>
                        <LuContactRound size={20} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;