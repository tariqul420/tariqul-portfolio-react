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
import { useState, useEffect } from "react";

const Home = () => {
    const [activeHash, setActiveHash] = useState(window.location.hash || "#home");

    const handelNavigate = (hash) => {
        window.location.hash = hash;
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        setActiveHash(hash);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("div[id]");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveHash(`#${entry.target.id}`);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach((section) => observer.observe(section));

        setActiveHash(window.location.hash || "#home");

        return () => {
            observer.disconnect();
        };
    }, []);

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

            <div className="absolute bottom-0 w-full max-sm:hidden">
                <ul className="flex flex-col items-center gap-3 bg-[#ffffff] dark:bg-[#1a1a1a] dark:text-white-deep fixed bottom-5 right-4 rounded-md p-2">
                    <li
                        className={`cursor-pointer ${activeHash === "#home" ? "text-[#38BD67]" : ""}`}
                        onClick={() => handelNavigate("home")}
                    >
                        <FaHome size={20} />
                    </li>
                    <li
                        className={`cursor-pointer ${activeHash === "#about-me" ? "text-[#38BD67]" : ""}`}
                        onClick={() => handelNavigate("about-me")}
                    >
                        <FaCircleUser size={20} />
                    </li>
                    <li
                        className={`cursor-pointer ${activeHash === "#skills" ? "text-[#38BD67]" : ""}`}
                        onClick={() => handelNavigate("skills")}
                    >
                        <HiLightBulb size={30} />
                    </li>
                    <li
                        className={`cursor-pointer ${activeHash === "#works" ? "text-[#38BD67]" : ""}`}
                        onClick={() => handelNavigate("works")}
                    >
                        <BsPersonWorkspace size={20} />
                    </li>
                    <li
                        className={`cursor-pointer ${activeHash === "#contact-me" ? "text-[#38BD67]" : ""}`}
                        onClick={() => handelNavigate("contact-me")}
                    >
                        <LuContactRound size={20} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
