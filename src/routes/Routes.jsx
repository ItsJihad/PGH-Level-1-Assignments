import { createBrowserRouter } from "react-router";

import Root from "../pages/root/Root";
import Errorpage from "../pages/error/Errorpage";
import Home from "../pages/home/Home";
import LoginPage from "../pages/Authpages/LoginPage";
import SignupPage from "../pages/Authpages/SignupPage";
import Product from "../pages/Product/Product";
import Products from "../pages/Product/Products";
import Profile from "../pages/profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Spinner from "../pages/Loading/Spinner";
import Services from "../pages/Services/Services";
import Forgotpass from "../pages/Authpages/ForgotPass";

export const router = createBrowserRouter([

  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage />,
    children: [

      {
        index: true,
        loader: async () => {
          const [plantsRes, mentorsRes, tipsRes] = await Promise.all([
            fetch("/plants.json"),
            fetch("/mentors.json"),
            fetch("/tips.json"),
          ]);

          const plants = await plantsRes.json();
          const mentors = await mentorsRes.json();
          const tips = await tipsRes.json();
          return { plants, mentors, tips };
        },
        path: "/",
        Component: Home,
        hydrateFallbackElement: <Spinner></Spinner>,
      },
      {
        path: "/login",
        Component: LoginPage,
      },{
          path:"forgot-pass",
          Component:Forgotpass
      },
      {
        path: "/signup",
        Component: SignupPage,
      },
      {
        loader: () => fetch("/plants.json"),
        hydrateFallbackElement: <Spinner></Spinner>,
        path: "/plants/:id",
        element: (
          <PrivateRoutes>
            <Product></Product>
          </PrivateRoutes>
        ),
      },{
        loader: () => fetch("/mentors.json"),
        hydrateFallbackElement: <Spinner></Spinner>,
        path: "/services",
        element: (
          <PrivateRoutes>
            <Services></Services>
          </PrivateRoutes>
        )
      },
      {
        loader: () => fetch("/plants.json"),
        hydrateFallbackElement: <Spinner></Spinner>,
        path: "/plants",
        element: (
          <PrivateRoutes>
            <Products></Products>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
