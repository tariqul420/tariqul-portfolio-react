import { BiLogoGmail } from "react-icons/bi";
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "../../Components/ContactMe/ContactForm";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";

const ContactMe = () => {
    return (
        <section className="flex flex-col w-11/12 mx-auto my-28 items-center justify-center">
            <button className="px-4 py-2 bg-[#E2E8F0] rounded-lg mb-8 flex items-center gap-2 dark:bg-[#2D2D2D]">
                <FaArrowRight /> Contact Me
            </button>

            <div className="flex gap-12 flex-col lg:flex-row items-center justify-center">
                <div className="bg-white p-10 rounded-xl dark:bg-[#181818] lg:min-h-[437px] items-start flex flex-col justify-center">
                    <ul className="space-y-3">
                        <li className="flex items-center text-lg font-medium gap-2 cursor-pointer dark:text-white-deep">
                            <FaPhone />
                            <span>+8801743892058</span>
                        </li>
                        <li className="flex items-center text-lg font-medium gap-2 cursor-pointer dark:text-white-deep">
                            <BiLogoGmail />
                            <span>tariqul.developer@gmail.com</span>
                        </li>
                        <li className="flex items-center text-lg font-medium gap-2 cursor-pointer dark:text-white-deep">
                            <FaLocationDot />
                            <span>Pabna, Bangladesh</span>
                        </li>
                    </ul>
                    <div>
                        <div className="flex gap-3 items-center justify-center lg:justify-start mt-12">
                            <a href="https://www.linkedin.com/in/tariqul420/" target="_blank">
                                <FaLinkedin className="hero-icon lang" />
                            </a>
                            <a href="https://github.com/tariqul420" target="_blank">
                                <FaGithub className="hero-icon lang" />
                            </a>
                            <a href="https://www.facebook.com/tariqul.islam.fb" target="_blank">
                                <FaFacebook className="hero-icon lang" />
                            </a>
                            <a href="meilto:tariqul.developer@gmail.com" target="_blank">
                                <IoMdMail className="hero-icon lang" />
                            </a>
                            <a href="meilto:tariqul.developer@gmail.com" target="_blank">
                                <IoLogoWhatsapp className="hero-icon lang" />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;