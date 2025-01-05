import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import Robot from "../../assets/Images/robo.png"
import Responsive from "../../assets/Images/responsive.svg"
import BestQuality from "../../assets/Images/quality.svg"
import resume from "../../assets/Images/tariqul-resume.pdf"

const Banner = () => {
    return (
        <section
            id="home"
            className=" -mt-[5.1rem] pt-28 pb-8 "
        >
            <div className="w-11/12 mx-auto flex items-center flex-col-reverse lg:flex-row gap-20">
                {/* Text Section */}
                <div className="flex-1 items-center justify-center">
                    <p className="text-dark-deep text-[2.5rem] md:text-[3.5rem] lg:text-[2.5rem] font-semibold dark:text-white-lite text-center lg:text-left">
                        Hi, I&apos;m
                    </p>
                    <h1 className="text-dark-deep text-[3.5rem] md:text-[4.5rem] lg:text-[3.5rem] font-bold dark:text-white-lite text-center lg:text-left max-sm:text-5xl">
                        Tariqul Islam
                    </h1>
                    <p className="text-xl text-dark-lite font-medium dark:text-white-deep lg:text-left text-center">
                        Front-end Web Developer
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3 items-center justify-center lg:justify-start mt-3">
                        <a
                            href="https://www.linkedin.com/in/tariqul420/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="hero-icon lang" />
                        </a>
                        <a
                            href="https://github.com/tariqul420"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub className="hero-icon lang" />
                        </a>
                        <a
                            href="https://www.facebook.com/tariqul.islam.fb"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="hero-icon lang" />
                        </a>
                        <a className="lg:hidden"
                            href="mailto:tariqul.developer@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                        >
                            <FaEnvelope className="hero-icon lang" />
                        </a>
                        <a
                            className="hidden lg:block"
                            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tariqul.islam.programmer@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                        >
                            <FaEnvelope className="hero-icon lang" />
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center lg:justify-start">
                        <a
                            href={resume}
                            target="_blank"
                            className="button px-4 py-3"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 relative">
                    <img
                        className="w-full md:h-[50rem] h-[35rem] lg:h-[35rem] object-contain"
                        src={Robot}
                        alt="Hero Illustration"
                    />

                    {/* Responsive Badge */}
                    <div className="flex items-center gap-4 px-8 py-2 rounded-xl shadow-3xl backdrop-blur-xl absolute top-[80%] left-0 dark:bg-[#25a25785] border-t-[3px] border-r-2 border-solid border-primary2/40 responsive">
                        <img src={Responsive} alt="Responsive Icon" />
                        <p className="dark:text-white-deep font-semibold text-xl">
                            Responsive
                        </p>
                    </div>

                    {/* Quality Badge */}
                    <div className="flex items-center gap-4 px-8 py-3 rounded-xl shadow-3xl backdrop-blur-xl absolute top-[55%] right-0 dark:bg-[#25a25785] border-t-[3px] border-l-2 border-solid border-primary2/40 bestQuality">
                        <img src={BestQuality} alt="Quality Icon" />
                        <p className="dark:text-white-deep font-semibold text-xl">
                            Best Quality
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;