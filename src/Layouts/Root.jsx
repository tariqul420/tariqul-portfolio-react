import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <div className="min-h-[calc(100vh-403px)] w-11/12 mx-auto">
                <Outlet />
            </div>
        </>
    );
};

export default Root;