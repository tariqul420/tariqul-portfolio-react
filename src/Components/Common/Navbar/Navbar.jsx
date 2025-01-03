import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo/Logo.png"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <div className="w-9/12 mx-auto flex justify-between items-center py-4">
                <div>
                    <img className="w-10" src={logo} alt="Logo" />
                </div>
                <div>
                    <ul className="flex items-center gap-5 font-semibold text-lg">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <button className="p-4">Resume</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;