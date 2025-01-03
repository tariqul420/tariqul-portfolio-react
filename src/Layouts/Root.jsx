import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar/Navbar";

const Root = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-403px)] w-11/12 mx-auto">
                <Outlet />
            </div>
        </>
    );
};

export default Root;