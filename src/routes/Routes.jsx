import { createBrowserRouter } from "react-router";
import Root from "../pages/layout/Root";
import NotFound from "../pages/additionalPages/errorPage/NotFound";
import HomePage from "../pages/mainPages/homepage/HomePage";
import AllProducts from "../pages/mainPages/Products/AllProducts";
import MyExports from "../pages/mainPages/UserPages/Export/MyExports";
import MyImports from "../pages/mainPages/UserPages/import/MyImports";
import AddExport from "../pages/mainPages/UserPages/Export/AddExport";
import SignIn from "../pages/mainPages/UserPages/SignIn";
import SignUp from "../pages/mainPages/UserPages/SignUp";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../pages/mainPages/Products/ProductDetails";
import LoadingPage from "../pages/additionalPages/Loading/LoadingPage";
import MyProfile from "../pages/mainPages/UserPages/MyProfile";
export const router = createBrowserRouter([
  {
    // HydrateFallback: <LoadingPage></LoadingPage>,
    path: "/",
    Component: Root,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        Component: HomePage,
        loader: () => fetch("https://ie-hub-backend.vercel.app/recentproducts"),
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-exports",
        element: (
          <PrivateRoute>
            <MyExports></MyExports>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-imports",
        element: (
          <PrivateRoute>
            <MyImports></MyImports>
          </PrivateRoute>
        ),
      },
      {
        path: "add-export",
        element: (
          <PrivateRoute>
            <AddExport></AddExport>
          </PrivateRoute>
        ),
      },
      {
        path: "/sign-in",
        Component: SignIn,
      },
      {
        path: "/sign-up",
        Component: SignUp,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
