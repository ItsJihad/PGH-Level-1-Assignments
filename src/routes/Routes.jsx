import { createBrowserRouter } from "react-router";
import Root from "../pages/layout/Root";
import NotFound from "../pages/additionalPages/errorPage/NotFound";
import HomePage from "../pages/mainPages/homepage/HomePage";
import AllProducts from "../pages/mainPages/Products/AllProducts";
import Cart from "../pages/mainPages/Products/Cart/Cart";
import MyExports from "../pages/mainPages/UserPages/Export/MyExports";
import MyImports from "../pages/mainPages/UserPages/import/MyImports";
import AddExport from "../pages/mainPages/UserPages/Export/AddExport";
import SignIn from "../pages/mainPages/UserPages/SignIn";
import SignUp from "../pages/mainPages/UserPages/SignUp";

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
            },{
                path:"/my-imports",
                Component:MyImports
            },{
                path:"add-export",
                Component:AddExport
            },{
                path:"/sign-in",
                Component:SignIn
            }
            ,{
                path:"/sign-up",
                Component:SignUp
            }
        ]
    }
])