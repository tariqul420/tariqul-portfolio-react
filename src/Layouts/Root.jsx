import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-[#F2F6FA] dark:bg-[#181818] dark:text-white-deep">
            <Navbar />
            <div className="min-h-[calc(100vh-403px)]">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;