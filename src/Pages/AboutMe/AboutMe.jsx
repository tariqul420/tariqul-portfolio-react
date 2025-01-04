import { FaArrowRight } from "react-icons/fa";
import Tariqul from "../../assets/Images/tariqul-logo.jpg"

const AboutMe = () => {
    return (
        <section
            className="flex w-11/12 mx-auto my-28 flex-col gap-20 lg:flex-row"
            id="about"
        >
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
                <button className="px-4 py-2 bg-[#E2E8F0] rounded-lg mb-4 flex items-center gap-2 dark:bg-[#2D2D2D]">
                    <FaArrowRight /> About Me
                </button>
                <h2 className="text-center lg:text-start text-3xl text-primary1 font-semibold leading-[48px] mb-10">
                    Md. Tariqul Islam
                </h2>
                <p className="text-center lg:text-start text-[1.375rem] text-dark-lite font-medium leading-[31px] dark:text-white-deep">
                    With over 4 years of hands-on experience in UX/UI design and frontend
                    web development, I bring a wealth of expertise to every project.
                    Meticulous attention to detail coupled with a deep understanding of
                    user experience principles ensures that each design is not only
                    visually captivating but also intuitive and user-friendly. From
                    crafting elegant interfaces to implementing responsive layouts, I am
                    dedicated to delivering top-notch solutions that exceed expectations.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
