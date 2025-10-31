import { use } from "react";
import { AuthContext } from "../firebase/Auth/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Spinner from "../pages/Loading/Spinner";

function PrivateRoutes({ children }) {
  const location = useLocation();

  const { user, loader } = use(AuthContext);
  if (loader) {
    return <Spinner></Spinner>;
  } else {
    if (user && user.email) {
      <Navigate to={"/"}></Navigate>;
      return children;
    } else {
      return <Navigate state={location.pathname} to={"/login"}></Navigate>;
    }
  }
}

export default PrivateRoutes;
