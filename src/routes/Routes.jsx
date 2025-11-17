import { createBrowserRouter } from "react-router";
import Root from "../pages/layout/Root";
import NotFound from "../pages/additionalPages/errorPage/NotFound";
import HomePage from "../pages/mainPages/homepage/HomePage";
import AllProducts from "../pages/mainPages/Products/AllProducts";
import Cart from "../pages/mainPages/Products/Cart/Cart";
import MyExports from "../pages/mainPages/UserPages/Export/MyExports";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:"/",
                Component:HomePage
            },
            {
                path:"/products",
                Component:AllProducts
            },
            {
                path:"/cart",
                Component:Cart
            },{
                path:"/my-exports",
                Component:MyExports
            }
        ]
    }
])