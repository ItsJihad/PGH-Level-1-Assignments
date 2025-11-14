import { createBrowserRouter } from "react-router";
import Root from "../pages/layout/Root";
import NotFound from "../pages/additionalPages/errorPage/NotFound";
import HomePage from "../pages/mainPages/homepage/HomePage";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:"/",
                Component:HomePage
            }
        ]
    }
])