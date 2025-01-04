import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        window.location.href = `https://formspree.io/f/mjkbkjqn`;
    };

    return (
        <form
            className="flex flex-col items-center justify-center space-y-6 w-11/12"
            onSubmit={handleSubmit(onSubmit)}
        >
            {/* Full Name Field */}
            <div>
                <input
                    className={`w-[20.6rem] input focus:outline-0 md:w-[35rem] lg:w-96 mx-auto dark:bg-transparent dark:border dark:border-solid dark:border-[#242222] dark:text-white-deep ${errors.fullName ? "border-red-500" : ""
                        }`}
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName", { required: "Full Name is required" })}
                />
                {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
            </div>

            {/* Email Address Field */}
            <div>
                <input
                    className={`w-[20.6rem] input focus:outline-0 md:w-[35rem] lg:w-96 mx-auto dark:bg-transparent dark:border dark:border-solid dark:border-[#242222] dark:text-white-deep ${errors.email ? "border-red-500" : ""
                        }`}
                    type="email"
                    placeholder="Email Address"
                    {...register("email", {
                        required: "Email Address is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                        },
                    })}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            {/* Message Field */}
            <div>
                <textarea
                    className={`w-[20.6rem] textarea focus:outline-0 lg:w-96 resize-none mx-auto dark:bg-transparent dark:border dark:border-solid dark:border-[#242222] dark:text-white-deep md:w-[35rem] ${errors.message ? "border-red-500" : ""
                        }`}
                    cols="30"
                    rows="8"
                    placeholder="Your Message"
                    {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <input
                type="submit"
                value="SUBMIT"
                className="button cursor-pointer w-full"
            />
        </form>
    );
};

export default ContactForm;
