import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar/Navbar";
import Footer from "../Components/Common/Footer/Footer";

const Root = () => {
    return (
        <div className="bg-[#F2F6FA] dark:bg-[#121212] dark:text-white-deep">
            <Navbar />
            <div className="min-h-[calc(100vh-178px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;