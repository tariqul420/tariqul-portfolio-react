import { FaHome, FaUserAlt } from "react-icons/fa";
import Banner from "../../Components/Home/Banner";
import { GiSkills } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import ContactMe from "../Contact/ContactMe";

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
                <ul className="flex flex-col items-center gap-4 text-xl bg-[#ffffff] dark:bg-[#1a1a1a] dark:text-white-deep fixed bottom-5 right-4 rounded-md p-3">
                    <li className="cursor-pointer" onClick={() => handelNavigate("home")}>
                        <FaHome />
                    </li>
                    <li className="cursor-pointer" onClick={() => handelNavigate("about-me")}>
                        <FaUserAlt />
                    </li>
                    <li className="cursor-pointer" onClick={() => handelNavigate("skills")}>
                        <GiSkills />
                    </li>
                    <li className="cursor-pointer" onClick={() => handelNavigate("works")}>
                        <BsPersonWorkspace />
                    </li>
                    <li className="cursor-pointer" onClick={() => handelNavigate("contact-me")}>
                        <IoMdContact />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;