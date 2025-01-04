import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error404 from "../Pages/Shared/Error404";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about-me",
                element: <AboutMe />
            }
        ]
    }
])

export default router;