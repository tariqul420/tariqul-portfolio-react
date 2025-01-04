import { useState, useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-gray-700"
        >
            {theme === "dark" ? (
                <IoMoon size={24} color="#38BD67" />
            ) : (
                <IoSunny size={24} color="#38BD67" />
            )}
        </button>
    );
};

export default ThemeToggle;
