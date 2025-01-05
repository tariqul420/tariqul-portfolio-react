import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar/Navbar";
import Footer from "../Components/Common/Footer/Footer";

const Root = () => {
    return (
        <div className="bg-gradient-to-r from-white-lite to-white-deep dark:bg-gradient-to-r dark:from-dark-lite dark:to-dark-deep dark:text-white-deep">
            <Navbar />
            <div className="min-h-[calc(100vh-178px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;