import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const Footer = () => {


    return (
        <footer className="py-4 px-4  border border-solid dark:border-none bg-gradient-to-r from-[#E9F2FF] to-[#F2F6FA] dark:bg-gradient-to-r dark:from-dark-lite dark:to-dark-light dark:text-white-deep">
            <div className="w-11/12 flex-col lg:flex-row flex items-center justify-between mx-auto space-y-4">
                {/* Branding */}
                <div>
                    <p className="text-dark-deep font-semibold text-3xl dark:text-white-deep">
                        <span className="text-primary1">
                            <span>&lt;</span>T
                        </span>
                        ariqul
                        <span className="text-primary2">/&gt;</span>
                    </p>
                </div>

                {/* Contact Information */}
                <div className="flex max-sm:flex-col justify-center items-center space-x-5 max-sm:space-y-5">
                    {/* Mobile Email */}
                    <a
                        className="lg:hidden"
                        href="mailto:tariqul.developer@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="font-semibold text-dark-lite dark:text-white-deep hover:text-dark-deep">
                            tariqul.developer@gmail.com
                        </p>
                    </a>

                    {/* Desktop Email */}
                    <a
                        className="hidden lg:block"
                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tariqul.developer@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="font-semibold text-dark-lite dark:text-white-deep hover:text-dark-deep">
                            tariqul.developer@gmail.com
                        </p>
                    </a>

                    {/* Phone */}
                    <a href="tel:+8801743892058">
                        <p className="font-semibold text-dark-lite dark:text-white-deep hover:text-dark-deep">
                            +8801743892058
                        </p>
                    </a>

                    {/* Social Icons */}
                    <div className="flex space-x-2 mt-2 social-icon mb-3">
                        <ul className="flex gap-3 items-center justify-center lg:justify-start">
                            <li>
                                <a
                                    href="https://www.facebook.com/tariqul.islam.fb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook className="hero-icon lang" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/tariqul420"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="hero-icon lang" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://bd.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className="hero-icon lang" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://t.me/tariqul017"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLogoWhatsapp className="hero-icon lang" />
                                </a>
                            </li>
                            <ul>
                                <a className="lg:hidden"
                                    href="mailto:tariqul.developer@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Email"
                                >
                                    <SiGmail className="hero-icon lang" />
                                </a>
                            </ul>
                            <ul>
                                <a
                                    className="hidden lg:block"
                                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tariqul.islam.programmer@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Email"
                                >
                                    <SiGmail className="hero-icon lang" />
                                </a>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;  